#veespo-api

### Javascript Wrapper for Veespo Api

in your code:

 ```javascript

	var api_path = 'http://production.veespo.com';
	var token    = 'TOKEN GENERATED FROM THE API SERVER SIDE';

	var api = veespo.api({api_path:api_path,token:token});

	//the method get return a jQuery promise
	api.get('/v1/info/category/linee-superficie-test/targets').then(function(response) {
	    console.log(response.data);
	});


```