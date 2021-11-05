const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000                                            
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/user', routes)
app.use('/sources', express.static(path.join(__dirname, './public')))

//tạo một vài data để làm điều kiện của bài tập
// app.post('/post', function(req, res){
//     username = req.body.userName;
//     userpass = req.body.passWord;
//     studyModel.create({
//         userName: username,
//         userPass: userpass
//     })
//     .then(function(data){
//         res.json(data);
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })


//cập nhật data: nếu đăng nhập đúng thông tin tài khoản

// app.put('/put/:id', (req, res, next) => {
//     var username = req.body.userName;
//     var userpass = req.body.passWord;
//     var newPass = req.body.newpass
//     var id = req.params.id
//     studyModel.find({userName: username, userPass: userpass})
//   .then(function(data){
//       if(data.length !== 0){
//         studyModel.updateOne({_id: id, userName: username, userPass: userpass},{ userPass: newPass })
//         .then(function(data){
//             res.json(data)
//         })
//         .catch(function(err){ 
//             res.json(err)
//         })
//       } else(
//           res.json('sai thông tin người dùng')
//       )
//   })
//   .catch(function(err){
//       res.json(err)
//   })
// })

// app.put('/put/:id', (req, res, next) => {
//     var username = req.body.userName;
//     var userpass = req.body.passWord;
//     studyModel.find({userName: username, userPass: userpass})
//   .then(function(data){
//       if(data.length == 0){
//         res.json('sai thông tin người dùng')
//       } else(
//           next()
//       )
//   })
//   .catch(function(err){
//       res.json(err)
//   })
// }, function(req, res){
//     var username = req.body.userName;
//     var userpass = req.body.passWord;
//     var newPass = req.body.newpass;
//     var id = req.params.id;
//     studyModel.updateOne({_id: id, userName: username, userPass: userpass},{ userPass: newPass })
//         .then(function(data){
//             res.json(data)
//         })
//         .catch(function(err){ 
//             res.json(err)
//         })
// })


//tạo tk: nếu user đã tồn tại, thì ko cho tạo với user đó

// app.post('/post', function(req, res){
//     studyModel.find({userName: req.body.userName})
//     .then(data => {
//         if(data.length !== 0){
//             console.log(data)
//             res.json('tên tài khoản đã có người sử dụng!')
//         } else (
//             studyModel.create({
//                 userName: req.body.userName,
//                 userPass: req.body.passWord,
//             })
//             .then(data => {
//                 res.json(data)
//             })
//             .catch(err => {
//                 res.json(err)
//             })
//         )
//     })
//     .catch(function(err){
//         res.json(err)
//     })
// })


// app.post('/post', function(req, res, next){
//     studyModel.findOne({userName: req.body.userName})
//     .then(data => {
//         if(data){
//             console.log(data)
//             res.json('tên tài khoản đã có người sử dụng!')
//         } else (
//             next()
//         )
//     })
//     .catch(function(err){
//         res.json(err)
//     })
// }, function(req, res, next){
//         studyModel.create({
//             userName: req.body.userName,
//             userPass: req.body.passWord,
//         })
//         .then(data => {
//             res.json(data)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })


//đăng nhập tài khoản: nếu nhập đúng tên đăng nhập và mật khẩu
// app.get('/get', (req, res) => {
//     studyModel.find({
//         userName: req.body.userName,
//         userPass: req.body.passWord 
//     })
//     .then(function(data){
//         console.log(data)
//         if(data.length == 0){
//             res.json('Bạn đã nhập sai thông tin tài khoản')
//         } else {
//             res.json("bạn đã đăng nhập thành công!")
//         }
//     })
//     .catch(err =>{
//         res.json(err)
//     })
// })

//GET: hiển thị ra giao diện
//POST: 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})