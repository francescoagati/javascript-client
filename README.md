#veespo-api

## Javascript Wrapper for Veespo Api

### Install with bower in your project directory

```
  bower install https://github.com/francescoagati/javascript-client.git --save
```




###in your code:

```html
    <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="dist/veespo-api.js"></script>    
```

```javascript

	var api_path = 'http://production.veespo.com';
	var token    = 'TOKEN GENERATED FROM THE API SERVER SIDE';

	var api = veespo.api({api_path:api_path,token:token});

	//the method get return a jQuery promise
	api.get('/v1/info/category/cities/targets').then(function(response) {
	    console.log(response.data);
	});


```