//var tabinfo = ['1'];



$(document).ready(function (e) {
	/*$.get("index.php", function(data){
		console.log(data);
		if (data!=null) {
			tabinfo = [data];
		}
	});*/

	$("#form").on('submit',(function(e) {
		//console.log(tabinfo);
		data1 = new FormData(this);
		//data2=tabinfo[0];
		data2 = document.getElementsByName('id')[0].value;
		if (data2 == ""){
			data2 = 1;
		}
		data1.append('info',data2);
		e.preventDefault();
		$.ajax({
      url: "ajaxupload.php",
			type: "POST",
			data: data1,  //data:  new FormData(this),
			contentType: false,
    	    cache: false,
			processData:false,
			beforeSend : function()
			{
				//$("#preview").fadeOut();
				$("#title").fadeOut();
			},
			success: function(data)
		    {
				if(data=='invalid')
				{
					// invalid file format.
					$("#err").html("Invalid File !").fadeIn();
				}
				else
				{
					// view uploaded file.
					//$("#preview").html(data).fadeIn();
					$("#lien").html(data).fadeIn();
					$("#lien").attr("href", data);

					$("#form")[0].reset();
				}
		    },
		  	error: function(e)
	    	{
				$("#err").html(e).fadeIn();
	    	}
	   });
	}));
});
