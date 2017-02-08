# Adventure Machine
This is my version of the original Adventure Machine by Madeon. Since I knew Madeon's music, everything change for me, and when Adventure Album was released my life was better. Adventure inspired me to create this application based on Adventure Machine version the link [here](http://www.madeon.fr/adventuremachine/). For detail information about this app see

```
package.json
```

## Run the project
If you want to run this project (work in progress yet!), you should
```
npm install
npm build
npm start
```
## Styles and assets
Also you need to run a gulp task for the styles and assets inside the project

```
gulp
```
You need to configurate you server because I've worked in Cloud9. To change the server listen, change this part of code inside of `server.js`
```
app.listen(process.env.PORT, process.env.IP);
```
if you want to create your own server with `express.js` you should make this
```
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```
## Demo

Once you already have those steps open your browser and write
```
http://localhost:3000
```

All rights reserved for Madeon. This is an experimental project non for commercial purposes.

For more information about me, check my portfolio [camiloarguello.co](http://camiloarguello.co)