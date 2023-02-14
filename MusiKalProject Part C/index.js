
//var http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sql = require('./db/db');
const CreateDB = require('./db/CreateDB');
const CRUD = require('./db/CRUD');
//const connection = require('./db');
const port = 3000;


app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


//set up view engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//CRUD - TABLES

// Create
app.get('/CreateUsersTable', CreateDB.CreateUsersTable);
app.get('/CreateLessonsTable', CreateDB.CreateLessonsTable);
// app.get('/CreateReahersalsTable', CreateDB.CreateReahersalsTable);

// Read
app.get('/showUsers', CreateDB.showUsers);
app.get('/ShowLessons', CreateDB.ShowLessons);
// app.get('/ShowReahersals', CreateDB.ShowReahersals);

// Delete
app.get('/DropTables', CreateDB.DropTables);
app.get('/DropUsersTable', CreateDB.DropUsersTable);
app.get('/DropLessonsTable', CreateDB.DropLessonsTable);

// Insert Data
app.get("/InsertDataToUsers", CreateDB.InsertDataToUsers);
app.get("/InsertDataToLessons", CreateDB.InsertDataToLessons);

//CRUD functions
app.get('/Searching', CRUD.findMusikans);
app.post('/SignUp', CRUD.UserSignUp);
app.get('/findUser', CRUD.findUser);

//Routes
app.get('/' , (req, res) =>{
    res.render("LoginPage");
})

app.get('/HomePage' , (req, res) =>{
    console.log(GetUser(req,res));
    res.render("HomePage");
})

app.get('/AboutUs' , (req, res) =>{
    res.render("AboutUs");
})

app.get('/ContactUs' , (req, res) =>{
    res.render("ContactUs");
})

app.get('/FindPlayers' , (req, res) =>{
    res.render("FindPlayers");
})

app.get('/Search' , (req, res) =>{
    res.render("Search");
})

app.get('/closeAccount', async (req, res, next) =>  {
    let currentUser = GetUser(req,res);
    let p =await CRUD.closeAccount(currentUser);
    console.log(p);
    if (p === null) {
        res.status(404).send("USER doesn't exist");
        return;
    }
    res.clearCookie("UserEmail");
    res.render('SignUpPage');
});

app.get('/Lessons', async (req, res, next) =>  {
    let currentUser = GetUser(req,res);
    let email = req.query.email;
    console.log(email);
    let p =await CRUD.getTheLessons(email);
    console.log(p);
    if (p === null) {
        res.status(404).send("Lesson doesn't exist");
        return;
    }
    res.render('Lessons', {relevantLessons: p , currentUser : currentUser } );
});

app.get('/bookLesson', async (req, res, next) =>  {
    let currentUser = GetUser(req,res);
    let lessonID = req.query.lessonID;
    console.log(lessonID);
    let lesson =await CRUD.bookLesson(lessonID,currentUser);
    //console.log(lesson);
    if (lesson === null) {
        res.status(404).send("can't book this lesson");
        return;
    }
    res.render('errorPage', {V1: "booked Seccessfuly !", V2:"Book More"} );
});

app.get('/LoginPage' , (req, res) =>{
    res.clearCookie("UserEmail");
    res.render("LoginPage");
})

app.get('/MyBand' , (req, res) =>{
    res.render("MyBand");
})

app.get('/MyProfile' , (req, res) =>{
    let currentUser = GetUser(req,res)
    res.render("MyProfile", {currentUser : currentUser});
})

app.get('/MyProfile' , (req, res) =>{
    const cookie_email = req.cookies.email;
    console.log(cookie_email + "Cookie");
    res.render("MyProfile", {currentUserID: cookie_email});
})

app.get('/MySchedule' , (req, res) =>{
    res.render("MySchedule");
})

app.get('/SignUpPage' , (req, res) =>{
    res.render("SignUpPage");
})

app.get('/errorPage', (req, res)=> {
    res.render("errorPage");
})

// app.get('/setEmailCookie/:email', (req, res)=> {
//     var userEmail = req.query.email;
//     // res.cookie('userEmail', userEmail);
//     // console.log("cookie"+ document.cookie.split(';').find(cookie => cookie.trim().startsWith('userEmail=')).split('=')[1])
//     res.redirect('/HomePage');
// })


app.listen(port,()=>{
    console.log("app is running on port"+port);
});

function GetUser(req,res){
    if (req.get("Cookie"))
    {
       var session = req.get("Cookie");
       console.log("Session is +"+session)
       var splitSession = session.split(/=|;/);
       var email = splitSession[7];
       return email;
   }
};


