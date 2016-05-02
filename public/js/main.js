console.log('main.js loaded');
$('#repo-div').ready(function(){
	console.log('Hello!');
	$.ajax({
		url:$('#repos').val(),
		success: function(data){
			data.forEach(function(datum){
				$('.repo-list').append('<li><a href="'+ datum.url +'">'+ datum.name +'</a></li>');
			});
		}
	});
	
});