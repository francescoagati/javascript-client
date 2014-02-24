class Api
  constructor: (params={}) ->
    @token   = params.token
    @api_path = params.api_path
  get: (path,params={}) ->
    params.token = @token
    jQuery.getJSON("#{@api_path}/#{path}?callback=?",params)

window.veespo = {} unless window.veespo?
veespo.api = (params) -> new Api params
