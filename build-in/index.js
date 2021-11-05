// const match = require('./function')
// console.log(match.cong(20, 20))
// console.log(match.chia(20, 20))
// console.log(match.nhan(2, 2))
// console.log(match.tru(20, 20))

// const path = require('path')
// let link = path.join(__dirname, './function.js')
// console.log(link)

// học về FS (file system)
const { RSA_NO_PADDING } = require("constants");
var fs = require("fs");

//writeFile: viet File

// fs.writeFile("./test.txt", "day la file cu", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("write OKE");
//   }
// });

// fs.appendFile("./test.txt", "them file vao sau", function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("write OKE");
//       }
//     });

// fs.unlink('test.txt', function(err){
//     if (err) {
//         console.log(err);
//         } else {
//         console.log("Delete OKE");
//     }
// })


// fs.readFile('./test.txt','utf8', function(err, data){
//     if (err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

let write = fs.createWriteStream('./test.txt')
// write.write('oke')

let read = fs.createReadStream('./function.js', 'utf8')
read.read()
read.pipe(write)