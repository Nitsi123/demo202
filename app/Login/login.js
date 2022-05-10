const form = document.querySelector('form');

if(form){
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

    const email = form.elements["email"].value;
    const password = form.elements["password"].value;

	// const axiosConfig = {
	// 	headers: {
	// 	'content-Type': 'application/json',
	// 	"Accept": "/",
	// 	"Cache-Control": "no-cache",
	// 	"Cookie": document.cookie
	// 	},
	// 	credentials: "same-origin"
	// 	};
		

	var settings = {
		"url": "http://localhost:8090/userLogin",
		"method": "POST",
		"timeout": 0,
		"headers": {
		  "Content-Type": "application/json",
		  "Cookie": document.cookie
		},
		credentials: "same-origin",
		"data": JSON.stringify({
		  "userName": email,
		  "password": password
		}),
	  };
	  
	  $.ajax(settings).done(function (response) {
		
		console.log(response);

		if (response.email == email) {

			window.location.href = "../searchHotels/hotels.html";
		} else {
			alert(response);
		}

	  });

	//  var settings = {
    //  	"url": "http://localhost:8090/createUser",
    //  	"method": "POST",
    //  	"timeout": 0,
    //  	"headers": {
    //  	  "Content-Type": "application/json"
    //  	},
    //  	"data": JSON.stringify({
    //  	  "id": "989897",
    //  	  "userName": email,
    //  	  "passWord": password
    //  	}),
    //    };

    //    $.ajax(settings).done(function (response) {
    //  	console.log(response);
	// 	 if(response.includes("successful")){
	// 		window.location.href = "";
	// 	 }
	// 	 else {
	// 		 alert(response);
	// 	 }
    //    });

// 
});
}