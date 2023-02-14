var sql = require('./db');
const path = require('path');
const csv=require('csvtojson');

//Create USERS Table
const CreateUsersTable = (req,res)=> {
    var Q1 = `CREATE TABLE IF NOT EXISTS USERS (
        email VARCHAR(50) NOT NULL PRIMARY KEY, 
        password VARCHAR(50) NOT NULL,
        userName VARCHAR(50) NOT NULL,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(50) NOT NULL,
        Gender VARCHAR(15),
        City VARCHAR(30) NOT NULL,
        Street VARCHAR(100) NOT NULL,
        MusicalInstrument VARCHAR(50),
        Image VARCHAR(100),
        lat VARCHAR(100),
        lon VARCHAR(100),
        TimeStamp datetime NOT NULL)
        ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
        sql.query(Q1,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating USERS table"});
            return;
        }
        console.log('created USERS table');
        res.send("USERS table created");
        return;
    })   
}

//Read 'USERS' Table
const showUsers = (req,res)=>{
    var Q2 = "SELECT * FROM USERS";
    sql.query(Q2, (err, mysqlres)=>{
        if (err) {
            console.log("error in showing users ", err);
            res.send("error in showing users ");
            return;
        }
        console.log("showing users");
        res.send(mysqlres);
        return;
    })
};

// Insert USERS
const InsertDataToUsers = (req,res)=>{
    var Q15 = "INSERT INTO USERS SET ?";
    const csvFilePath1= path.join(__dirname, "users.csv");
    csv()
    .fromFile(csvFilePath1)
    .then((jsonObj)=>{
        console.log(jsonObj);
        jsonObj.forEach(element => {
            var NewEntry = {
                "email": element.email,
                "password": element.password,
                "userName": element.userName,
                "firstName": element.firstName,
                "lastName": element.lastName,
                "Gender": element.Gender,
                "City": element.City,
                "Street": element.Street,
                "MusicalInstrument": element.MusicalInstrument,
                "Image": element.Image,
                "lat": element.lat,
                "lon": element.lon,
                "TimeStamp": element.TimeStamp
            }
            sql.query(Q15, NewEntry, (err,mysqlres)=>{
                if (err) {
                    console.log("error in inserting users data", err);
                }
                console.log("created row sucssefuly");
            });
        });
    })
    res.send("users Data inserted");
};

// Insert Lessons
const InsertDataToLessons = (req,res)=>{
    var Q15 = "INSERT INTO LESSONS SET ?";
    const csvFilePath1= path.join(__dirname, "lessons.csv");
    csv()
    .fromFile(csvFilePath1)
    .then((jsonObj)=>{
        console.log(jsonObj);
        jsonObj.forEach(element => {
            var NewEntry = {
                "Teacher_email": element.Teacher_email,
                "MusicalInstrument": element.MusicalInstrument,
                "Price": element.Price,
                "Date": element.Date,
                "Time_S": element.Time_S,
                "Time_E": element.Time_E,
                "Student_email": element.Student_email,
                "TimeStamp": element.TimeStamp
            }
            sql.query(Q15, NewEntry, (err,mysqlres)=>{
                if (err) {
                    console.log("error in inserting Lessons data", err);
                }
                console.log("created row sucssefuly");
            });
        });
    })
    res.send("Lessons Data inserted");
};

//Create 'LESSONS' Table
const CreateLessonsTable = (req,res)=> {
    var Q3 = `CREATE TABLE IF NOT EXISTS LESSONS (
        lessonID INT AUTO_INCREMENT PRIMARY KEY, 
        Teacher_email VARCHAR(50) NOT NULL,
        MusicalInstrument VARCHAR(50),
        Price DECIMAL(10, 2) NOT NULL,
        Date date NOT NULL,
        Time_S time NOT NULL,
        Time_E time NOT NULL,
        Student_email VARCHAR(50),
        TimeStamp datetime NOT NULL)
        ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
        sql.query(Q3,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating LESSONS table"});
            return;
        }
        console.log('created LESSONS table');
        res.send("LESSONS table created");
        return;
    })   
}

//Read 'LESSONS' Table
const ShowLessons = (req,res)=>{
    var Q4 = "SELECT * FROM LESSONS";
    sql.query(Q4, (err, mysqlres)=>{
        if (err) {
            console.log("error in showing lessons ", err);
            res.send("error in showing lessons ");
            return;
        }
        console.log("showing lessons");
        res.send(mysqlres);
        return;
    })
};

//Create 'REAHERSALS' Table
const CreateReahersalsTable = (req,res)=> {
    var Q5 = `CREATE TABLE IF NOT EXISTS REAHERSALS (
        ReahersalID INT AUTO_INCREMENT PRIMARY KEY, 
        DateTime datetime NOT NULL,
        Location VARCHAR(100),
        Description VARCHAR(100)
        ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
        sql.query(Q5,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating reahersals table"});
            return;
        }
        console.log('created reahersals table');
        res.send("reahersals table created");
        return;
    })   
}

//Read 'REAHERSALS' Table
const ShowReahersals = (req,res)=>{
    var Q9 = "SELECT * FROM LESSONS";
    sql.query(Q9, (err, mysqlres)=>{
        if (err) {
            console.log("error in showing Reahersals ", err);
            res.send("error in showing Reahersals ");
            return;
        }
        console.log("showing Reahersals");
        res.send(mysqlres);
        return;
    })
};

const DropUsersTable = (req,res)=>{
    var Q6 = "DROP TABLE USERS";
    sql.query(Q6, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping users table ", err);
            res.status(400).send({message: "error in dropping users table" + err});
            return;
        }
        console.log("USERS table drpped");
        res.send("USERS table drpped");
        return;
    })
}


//Drop 'USERS' Table
const DropTables = (req, res)=>{
    var Q6 = "DROP TABLE USERS";
    sql.query(Q6, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping users table ", err);
            res.status(400).send({message: "error in dropping users table" + err});
            return;
        }
        console.log("USERS table drpped");
        var Q7 = "DROP TABLE LESSONS";
        sql.query(Q7, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping lessons table ", err);
            res.status(400).send({message: "error in dropping lessons table" + err});
            return;
        }
        console.log("All Tables drpped");
        res.send("All Tables drpped");
        return;

        })
    })
}

//Drop 'LESSONS' Table
const DropLessonsTable = (req, res)=>{
    var Q7 = "DROP TABLE LESSONS";
    sql.query(Q7, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping lessons table ", err);
            res.status(400).send({message: "error in dropping lessons table" + err});
            return;
        }
        console.log("LESSONS table drpped");
        res.send("LESSONS table drpped");
        return;
    })
}

//Drop 'REAHERSALS' Table
const DropReahersalsTable = (req, res)=>{
    var Q8 = "DROP TABLE REAHERSALS";
    sql.query(Q8, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping reahersals table ", err);
            res.status(400).send({message: "error in dropping reahersals table" + err});
            return;
        }
        console.log("LESSONS reahersals drpped");
        res.send("LESSONS reahersals drpped");
        return;
    })
}



module.exports = {CreateUsersTable, showUsers, DropUsersTable, CreateLessonsTable, ShowLessons, DropLessonsTable,
     CreateReahersalsTable, ShowReahersals, DropReahersalsTable, InsertDataToUsers,InsertDataToLessons,DropTables};
