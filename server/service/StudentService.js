'use strict';
var {Pool} = require('pg');
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'webdev',
    password: 'root',
    port: 5432,
});
/**
 * Add a new student
 *
 *
 * student Student Student object that shall be added
 * returns Student
 **/
exports.addStudent = function (student) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            "studentID": 0,
            "username": "username"
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
};


/**
 * Find student by studentID
 * Returns a single student
 *
 * studentID Long studentID of user to return
 * returns Student
 **/
exports.getStudentByStudentID = function (studentID) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            "studentID": 0,
            "username": "username"
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
};


/**
 * Returns all students in the system
 *
 * returns List
 **/
exports.getStudents = function () {
    return new Promise(function (resolve, reject) {
        console.log('StudentService.js: I am in getStudents method');
        pool.query('select * from student')
            .then(function (res) {
                if (res.rows.length > 0) {
                    resolve(res.rows);
                } else {
                    resolve({
                        "error": "The student table is empty"
                    });
                }
            })
            .catch(function (e) {
                console.error(e.stack);
            });
        // var examples = {};
        // examples['application/json'] = [
        //     {
        //         "studentID": 0,
        //         "username": "username"
        //     },
        //     {
        //         "studentID": 0,
        //         "username": "username"
        //     }
        // ];
        // if (Object.keys(examples).length > 0) {
        //     resolve(examples[Object.keys(examples)[0]]);
        // } else {
        //     resolve();
        // }
    });
};

