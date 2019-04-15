const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .get('/computer', (req, res) => res.render('department/students/computer'))
  .get('/minipage', (req, res) => res.render('department/minipage'))
  .get('/cscstaffpage', (req, res) => res.render('department/staffs/computer'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
