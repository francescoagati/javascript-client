class Api
  constructor: (params={}) ->
    @token   = params.token
    @api_path = params.api_path
  get: (path,params={}) ->
    params.callback="?"
    jQuery.get("#{api_path}/#{path}",params)


veespo = {} unless veespo?

