var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/OrganChain');
var db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback() {
    console.log('database connection estabilished');
});
exports.db=db;
