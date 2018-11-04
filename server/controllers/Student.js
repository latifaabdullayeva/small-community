'use strict';

var utils = require('../utils/writer.js');
var Student = require('../service/StudentService');

module.exports.addStudent = function addStudent(req, res, next) {
    var student = req.swagger.params['student'].value;
    Student.addStudent(student)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getStudentByStudentID = function getStudentByStudentID(req, res, next) {
    var studentID = req.swagger.params['studentID'].value;
    Student.getStudentByStudentID(studentID)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getStudents = function getStudents(req, res, next) {
    Student.getStudents()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            res.writeHead({
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(response));
            // utils.writeJson(res, response);
        });
};
