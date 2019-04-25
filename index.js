const express = require('express') // declaring express
const path = require('path') // declaring path
const PORT = process.env.PORT || 5000 // using localhost:5000 as server


// ====================THIS FUNCTIONS ARE BUILT IN FUNCTIONS FROM EXPRESS JS===================
express()
  .use(express.static(path.join(__dirname, 'public')))  // locating public Path  in the folder
  .set('views', path.join(__dirname, 'views')) // locating View Path  in the folder
  .set('view engine', 'ejs') // using Express JS as engine
  .get('/', (req, res) => res.render('index'))
  .get('/computer', (req, res) => res.render('department/computer/students/computer'))  //route to navigate to another link
  .get('/minipage', (req, res) => res.render('department/computer/minipage')) //route to navigate to another link
  .get('/cscstaffpage', (req, res) => res.render('department/computer/staffs/computer')) //route to navigate to another link

  .listen(PORT, () => console.log(`Listening on ${ PORT }`)) // calling a specify PORT
