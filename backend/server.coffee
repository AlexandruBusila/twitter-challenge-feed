
Hapi = require("hapi")
Joi = require("joi")
Twit = require("twit")


server = module.exports = new Hapi.Server()

twitApi = new Twit
  consumer_key: process.env.CONSUMER_KEY
  consumer_secret: process.env.CONSUMER_SECRET
  access_token: process.env.ACCESS_TOKEN
  access_token_secret: process.env.ACCESS_TOKEN_SECRET


server.connection
  port: ~~process.env.PORT || 3000

server.views
  engines:
    "html":
      module: require("handlebars")
      compileMode: "sync"
  path: __dirname + "/views"



server.route
  method: "GET"
  path: "/static/{param*}"
  handler:
    directory:
      path: __dirname + "/public/static"
      listing: false


server.route
  method: "GET"
  path: "/"
  handler: (request, reply) ->
    reply.view("index")


server.route
  method: "GET"
  path: "/api/tweets"
  config:
    validate:
      query:
        name: Joi.string().required()
        count: Joi.number().min(1).max(100).integer().required()
  handler: (request, reply) ->
    # Get query parameters
    name = request.query.name
    count = request.query.count

    # Request twitter data
    twitApi.get "statuses/user_timeline", {
      count: count
      screen_name: name
      include_rts: true
    }, (err, data, response) ->
      if (err)
        reply("Error from Twitter Api: \"" + err.message + "\".")
          .code(err.statusCode)
        return

      reply(data)
        .code(200)
