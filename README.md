#  Contacts Deck

This project is a demonstration of creating a sample contacts directory application using react.js library. It uses json-server as database server to fetch the data. The API is consumed from the heroku application, hosted at https://callbooth.herokuapp.com.

API: https://callbooth.herokuapp.com

## How to develop
### Git clone
`git clone git@github.com:afficiona/callme.git`
### Install dependencies
`npm i`

### Locally
`npm run start-client`
This should open the localhost url in the browser with the page ready. This also starts the node server locally which in turn starts the json-server. The json-server consumes db.json file as its database.

## How to deploy
### Deploy to the server
We are using Heroku to handle the database and the server requests.
1) Assuming you are already a heroku user, login to heroku using `heroku login` command on your terminal.
2) Create an app on heroku using `heroku create` command.
3) Push your commit to the master branch on github.
4) Run `git push heroku master` to push the files to the Heroku app you created.
5) Run `heroku open` to launch the app on the browser. In our case, it will open the base url of the API, https://callbooth.herokuapp.com/ 
6) This API is used the application on production.

`npm start`
This command is used internally by Heroku to start the node server.

### Deploy to github

`npm run build`
This command will generate the build files and assets, necessary for deployment to production. Two important modules, `copyfiles` and `replace-in-file` are used under the `build` command.

#### copyfiles
Since github-pages work only for index.html in the root directory, the demo page won't be working since the index.html file is located in the `build` directory(not at root level). In order to make the demo page pick up the index.html file, we copy it from build directory to the root directory.

#### replace-in-file
Now, this index.html will be referencing to assets which are still in the build directory but referenced relatively inside it. We need to update all those references too so that they point to the resources w.r.t the root directory. Hence, we use `replace-in-file` module which updates all the references in `index.html` and `*.css` in build directory to correctly locate them w.r.t the new location.

## Tests
`npm run test`
This command runs the test cases for all the js files in the application.
