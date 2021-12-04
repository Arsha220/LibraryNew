const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryData');

const Schema= mongoose.Schema;
const authorschema= new Schema(
    {
        author:String,
        country:String,
        Desc:String,
        Image:String
    }
);
var authorData= mongoose.model('authorsData',authorschema)

module.exports=authorData