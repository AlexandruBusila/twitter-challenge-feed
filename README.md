
Heroku
======

* This app is deployed on [Heroku](https://serene-coast-6299.herokuapp.com).

Installation
============

* Execute `npm install` inside the directory root for all the node dependencies.

* Execute `bower install` for all client side dependencies.

* Run `gulp` (after installing gulp `npm install -g gulp`) to run the build script
which will start the server on `localhost` and open a browser.

* Replace in `/backend/server.coffe` variables to the access tokens from the
Twitter App credentials.



Issues
======

* I cheated with CSS and used a theme for Bootstrap since my CSS skills are
under par.

* In regards to the `TweetsService`, I should have created a ViewController responsible
of TweetCompositeView that takes a parameter for the user name. Lots of code gets
repeated in the service and is quite ugly.

* Missing the drag and drop between the columns and the style changing in settings.
