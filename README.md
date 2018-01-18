# Readable
## A Udacity project

This is a simple content sharing plateform.  Users are able to share articles,
as well as reading other shared articles. Users are also able to leave comments on articles.  

Right now, it's rather feature light, in so far as there is no real
user creation.  This leads to some obvious problems like all users being able to
edit and/or delete all comments and articles. Also, there are a small,
static set of categories that you can associate with articles.  These things would
be easy to implement, but are beyond the scope of this project.

Furthermore, this project assumes that your are running Udacity's readable-backend
server ( found [here](https://github.com/udacity/reactnd-project-readable-starter/tree/master/api-server) ) on the same localhost on port 3001.  If you are running it somewhere else, you'll
need to edit the `src/utils/api.js` file to update the baseURL parameter.

Once you've got that up and running, just clone this repository and then run one of the following commands inside the directory where you cloned it:
```
npm install && npm start
```
or
```
yarn install && yarn start
```
or simply
```
yarn && yarn start
```
