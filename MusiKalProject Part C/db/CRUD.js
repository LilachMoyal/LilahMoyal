
var sql = require('./db');
const path = require('path');
const express = require("express");
//const csv=require('csvtojson');
const cookieParser = require('cookie-parser');
const app = express();
var session;
app.use(cookieParser());



(req,res)=>{
    res.render('MyProfile',{currentUser: getCookie(user_email)} );
}

const UserSignUp = (req,res)=>{
    // validate body exists
    if (!req.body) {
        res.status(400).send('error' ,{message: "content cannot be empty"});
        return;
    }

    // create timestamp
    let d = new Date();

    const latitude = "123";
    const longitude = "123";

    // insert input data from body into json
    const NewUserSignIn = {
        "email": req.body.email,
        "password": req.body.password,
        "userName": req.body.userName,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "Gender": req.body.Gender,
        "City": req.body.City,
        "Street": req.body.Street,
        "MusicalInstrument": req.body.MusicalInstrument,
        "lat":latitude,
        "lon":longitude,
        "TimeStamp": d
    }

    // run qury
    const Q1 = 'INSERT INTO USERS SET ?';
    sql.query(Q1, NewUserSignIn, (err, mysqlres) =>{
        if (err) {
            console.log("error: ", err);
            res.status(400).render('error' , {message:"could not sign up"});
            return;
        }
        console.log("Successfully")
        res.redirect('/');
        return;
    })
};

const findUser = function(req,res){
    const {email, password} = req.query;
    console.log(email, password);
    sql.query(`SELECT * FROM USERS WHERE email = '${email}' AND password = '${password}'` , (err, result) => {
        console.log('results', result);
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting USER: " + err});
            return;
        }
        if (result.length != 0){// found the customer
            res.append('Set-Cookie', 'UserEmail='+email+'; Path = /; HttpOnly');
            res.redirect("/HomePage");
        }
        else{
            res.render('LoginPage', {userNotExist: "The user is not exist in the system"}); //if the user is not on the system
            return;
        }
    });
}


const findMusikans = function(req,res){
    const SearchByCity = req.query.SearchByCity;
    const SearchByMusicalInstrument = req.query.SearchByMusicalInstrument;
    console.log(SearchByCity, SearchByMusicalInstrument);
    if (req.query.lat!==''){
      console.log("1111111");
    }
    if (req.query.SearchByMusicalInstrument=='' && req.query.SearchByCity!=''){
        sql.query('SELECT * FROM USERS WHERE City = ?', req.query.SearchByCity, function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) { // If there is relevant Musikans exists
                res.render('FindPlayers', {relevantMusikans: results});
            } 
            else {
                res.render("errorPage", {V1: "Sorry, We could not find a Musikans for your search", V2: "Try Again"});
            }
        });
    }
    else if (req.query.SearchByMusicalInstrument!='' && req.query.SearchByCity==''){
        sql.query('SELECT * FROM USERS WHERE MusicalInstrument = ?', req.query.SearchByMusicalInstrument, function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) { // If there is relevant Musikans exists
                res.render('FindPlayers', {relevantMusikans: results});
            } 
            else {
                res.render("errorPage", {V1: "Sorry, We could not find a Musikans for your search", V2: "Try Again"});
            }
        });
    }
    else if (req.query.SearchByMusicalInstrument!='' && req.query.SearchByCity!=''){
        sql.query('SELECT * FROM USERS WHERE City = ? AND MusicalInstrument = ?', [req.query.SearchByCity, req.query.SearchByMusicalInstrument], function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) { // If there is relevant Musikans exists
                res.render('FindPlayers', {relevantMusikans: results});
            } 
            else {
                res.render("errorPage", {V1: "Sorry, We could not find a Musikans for your search", V2: "Try Again"});
            }
        });  
    }
}


// help function that find Lessons by email
function getTheLessons(email) {
    const myPromise = new Promise((resolve, reject) => {
        console.log("Entered");
       return  sql.query('SELECT * FROM LESSONS WHERE Teacher_email = ? AND Student_email = ?', [email, ""], (err, results)=>{
        if (err) throw err;
        if (results.length === 0){
            console.log("Empty");
          reject(null);
        }
        else{
            console.log("Found");
            //console.log(results);
            resolve(results);
        }
        });
    });
console.log("Done here");
 return myPromise.then((results) =>results);
}

// Function to delet user
function closeAccount(email) {
    const myPromise = new Promise((resolve, reject) => {
        console.log("Entered");
       return  sql.query('DELETE FROM USERS WHERE email = ?', email, (err, results)=>{
        if (err) throw err;
        if (results.length === 0){
            console.log("Empty");
          reject(null);
        }
        else{
            console.log("Found");
            //console.log(results);
            resolve(results);
        }
        });
    });
console.log("Done here");
 return myPromise.then((results) =>results);
}

// help function that Updates the student_email of lesson
function bookLesson(lessonID,currentUser) {
    const myPromise = new Promise((resolve, reject) => {
        console.log("Entered");
       return  sql.query('UPDATE LESSONS SET Student_email=? WHERE lessonID=?', [currentUser,lessonID], (err, results)=>{
        if (err) throw err;
        if (results.length === 0){
            console.log("Empty");
          reject(null);
        }
        else{
            console.log("Found");
            //console.log(results);
            resolve(results);
        }
        });
    });
console.log("Done here");
 return myPromise.then((results) =>results);
}

module.exports = {UserSignUp, findUser, findMusikans,getTheLessons, bookLesson,closeAccount};

