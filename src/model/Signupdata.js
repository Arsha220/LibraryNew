const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/LibraryData");
const Schema= mongoose.Schema;
const Signupschema= new Schema(
    {
        username:String,
        email:String,
        phoneno:String,
        password:String

    }

)
const Signupdata= mongoose.model("userdata",Signupschema);
module.exports=Signupdata;