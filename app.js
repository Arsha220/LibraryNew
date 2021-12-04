const express = require('express');
const app =new express();

const nav= [
           {link:'/adminhome',name:'home'},
           {link:'/books',name:'Books'},
           {link:'/authors',name:'Authors'},
           {link:'/',name:'Logout'}];
const nav2=
[
  {link:'/home',name:'home'},
  {link:'/viewbooks',name:'Books'},
  {link:'/viewauthors',name:'Authors'},
  {link:'/',name:'Logout'}];


const booksRouter= require("./src/routes/bookRouter")(nav);
const authorRouter= require("./src/routes/authorRouter")(nav);
const homeRouter=require("./src/routes/homeRouter")(nav2);
const homeadminRouter=require("./src/routes/homeadminRouter")(nav);
const SignupRouter=require("./src/routes/SignupRouter")(nav);
const adminRouter= require("./src/routes/adminRouter")(nav);
const viewbookRouter=require("./src/routes/viewbookRouter")(nav2);
const viewauthorRouter=require("./src/routes/viewauthorRouter")(nav2)
const port= process.env.PORT || 5005;
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.set ("view engine","ejs");
app.set("views", "./src/views");
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/home',homeRouter);
app.use("/admin",adminRouter);
app.use("/adminhome",homeadminRouter);
app.use("/signup",SignupRouter);
app.use("/viewbooks",viewbookRouter);
app.use("/viewauthors",viewauthorRouter);


const Signupdata=require("./src/model/Signupdata");



app.get("/", function(req,res){
  res.render("index")
});
app.get("/signin", function(req,res){
  res.render("signin")
});


app.post("/login", function(req,res){
  var Item={
    username:req.body.username,
    password:req.body.password
  }
 
  Signupdata.findOne({username:Item.username,password:Item.password},(err,user)=>{
  if(err)
  {
      console.log(err);
   }
  else  if (user!==null)
   {
   res.redirect("/home")
   }
    else if(Item.username=="admin" && Item.password=='12345')
    {     
      res.redirect("/adminhome")
    }
   else
   {
     res.redirect('/')
     console.log("Invalid credentials")
  
   }

  })

});


  //app.get("/logout", function(req,res){
  //   res.render("/")

  

 

 app.listen(port,()=>{console.log("Server ready at port" +port)});