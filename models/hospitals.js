var mongoose= require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema= mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	username: {type: String, required: true},
	password: {type: String, required: true },
	hospitalpublickey: {type: String, required:true},
	address: {type:String, required:true},
    contact: {type:String, required:true},
    city: {type : String, required: true}
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('hospitals', userSchema);