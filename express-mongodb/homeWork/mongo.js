const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const userSchema = mongoose.Schema({
    userName: String,
    userPass: String,
}, {
    collection: 'study'
})

const studyModel = mongoose.model('study', userSchema);

module.exports = studyModel;