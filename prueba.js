
$(document).ready(function() {
	
	var texto = ($.ajax({type : 'GET', // método HTTP
		url : '/texto',
		timeout: 1000, // si tarda más se llama a error
		success: fn_success, // función a la que llamar cuando
		error : fn_error
	}));
	
	function fn_success(texto){
		$("#texto").html(texto);
	};
	
	function fn_error(){
		$("#texto").text("Holamundo");
	};
	
});
