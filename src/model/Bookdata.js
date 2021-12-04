const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryData');
const Schema= mongoose.Schema;
const BookSchema=new  Schema(
    {
        title:String,
        Author:String,
        genre:String,
        Image:String
    }
);
var Bookdata = mongoose.model('bookData', BookSchema);
module.exports=Bookdata;