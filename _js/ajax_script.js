	$.ajax({
		type: 'GET',
		url: 'https://api.gilt.com/v1/sales/upcoming.json?apikey=5a13b9f869a0324826b8b92f7070b51b',
		//url: 'https://api.gilt.com/v1/sales/upcoming.json?apikey=5a13b9f869a0324826b8b92f7070b51b',
	
		success:  function(data){
			console.log(data);
			source = $("#category").html();
			template = Handlebars.compile(source);
			$("ul#prodList").html(template(data));	
			}
	});
		

 
 //AJAX function
    function ajax(myURL) {
		var URL= myURL;
     	$.ajax({
       	url: URL,
 		method: 'GET',
		
    success: function (data) {
       console.log(data);
	   source = $("#category").html();
	  template = Handlebars.compile(source);
	 $("ul#prodList").html(template(data));	
    }
		
	});
 }
    
    