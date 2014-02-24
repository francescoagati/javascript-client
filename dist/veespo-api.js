(function() {
  var Api;

  Api = (function() {
    function Api(params) {
      if (params == null) {
        params = {};
      }
      this.token = params.token;
      this.api_path = params.api_path;
    }

    Api.prototype.get = function(path, params) {
      if (params == null) {
        params = {};
      }
      params.token = this.token;
      return jQuery.getJSON("" + this.api_path + "/" + path + "?callback=?", params);
    };

    return Api;

  })();

  if (window.veespo == null) {
    window.veespo = {};
  }

  veespo.api = function(params) {
    return new Api(params);
  };

}).call(this);
