const express=require('express');
const viewauthorRouter= express.Router();
const Authordata=require('../model/Authordata')

function router1(nav)
{

    viewauthorRouter.get("/", function(req,res){

    Authordata.find()
    .then(function(authors){
        res.render("viewauthors",
         {
         nav,
         title: 'Library',
         authors
         }
           
         );
    
    });
});
viewauthorRouter.get('/:id', function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author)
        {
            res.render('viewauthor',
        {    
            nav,
            title: 'Library',
            author
     
     
        })
     })
        
     })
         return viewauthorRouter;

}
module.exports=router1;