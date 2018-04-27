# Savebot client

This client is built in `Vue 2: 3.0.0-beta.6`. You will need Node `v8.11.1` or
higher.

To get it running:
1. Navigate to root directory (where this readme lives)
2. `npm install`
3. `npm run serve` (dev) or `npm run build` (production)

You can visit the site at `http://localhost:8080/`

The client will expect a connection to the savebot server to function.

Connecting the site to the server:
Go into `main.js` and edit the url in the following line to direct to the server
location:
`Vue.use(VueSocketio, 'http://localhost:3000');`



Editing the site:

Consider the index of the site to be `App.vue`, under the `src` directory. It
uses components that you can find in the `components` directory. Styles, html markup
and functionality are in each of the component files.
