$(document).ready(function(){
	$("form[name='myform']").bind("submit", function(e){
		e.preventDefault();
		var name= $("input[name='name1']").val();
		var password = $("input[name='password1']").val();

		if(name == ""){
			alert("Fill it up! There's no nameless demigod!");
		}
		else if(password == ""){
			alert("Password is required!");
		}
		else{
			$(this).submit();

		}
	});
});