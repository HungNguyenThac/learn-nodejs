const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const studyModel = require('./mongo')
const routes = express.Router()

routes.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())

routes.get('/main', function(req,res){
    res.sendFile(path.join(__dirname, './public/main.html'))
})

routes.put('/put/:id', (req, res, next) => {
    var username = req.body.userName;
    var userpass = req.body.userPass;
    studyModel.find({userName: username, userPass: userpass})
  .then(function(data){
      if(data.length == 0){
        res.json('sai thông tin người dùng')
      } else(
          next()
      )
  })
  .catch(function(err){
      res.json(err)
  })
}, function(req, res){
    var username = req.body.userName;
    var userpass = req.body.userPass;
    var newPass = req.body.newPass;
    var id = req.params.id;
    studyModel.updateOne({_id: id, userName: username, userPass: userpass},{ userPass: newPass })
        .then(function(data){
            res.json(data)
        })
        .catch(function(err){ 
            res.json(err)
        })
})


module.exports = routes