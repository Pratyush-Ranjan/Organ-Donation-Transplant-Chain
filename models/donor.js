var mongoose=require('mongoose');

var userSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email: {type:String, required:true, unique:true,
        match:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/},
    name: {type: String, required: true},
    address: {type:String, required:true},
    contact: {type:String, required:true},
    city: {type : String, required: true},
    organ: {type: String, required:true},
    bloodgroup: {type: String, required:true},
    rhfactor:{type: String, required:true}
});

module.exports=mongoose.model('donors',userSchema);