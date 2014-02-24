(function() {
  var Api, veespo;

  Api = (function() {
    function Api(params) {
      if (params == null) {
        params = {};
      }
      this.token = params.token;
      this.api_key = params.api_key;
    }

    return Api;

  })();

  if (typeof veespo === "undefined" || veespo === null) {
    veespo = {};
  }

}).call(this);
