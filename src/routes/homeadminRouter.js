const express=require('express');
const homeadminRouter= express.Router();
function router1(nav)
{
    homeadminRouter.get("/", function(req,res){
        res.render("adminhome",
         {
         nav,
         title: 'Library',
         Addbooks: 'Add Books',
         AddAuthors:"Add Authors"
         }
           
         );
    
    });
    return homeadminRouter;

}
module.exports=router1;