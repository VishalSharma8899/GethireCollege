const mongoose = require('mongoose');

 
   
   
const UserSchema = new mongoose.Schema({
  name:{
      type:String,
  },
  email:{
      type:String,
  },
  pass:{
      type:String
  },
  role:{
      type:String,
      default: 'user'
  }
});



  
 

module.exports = mongoose.model('College', UserSchema);
