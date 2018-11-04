'use strict';

var utils = require('../utils/writer.js');
var Mood = require('../service/MoodService');

module.exports.getMood = function getMood (req, res, next) {
  Mood.getMood()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMoodByLectureID = function getMoodByLectureID (req, res, next) {
  var lectureID = req.swagger.params['lectureID'].value;
  Mood.getMoodByLectureID(lectureID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMoodForStudentByLecture = function getMoodForStudentByLecture (req, res, next) {
  var lectureID = req.swagger.params['lectureID'].value;
  var studentID = req.swagger.params['studentID'].value;
  Mood.getMoodForStudentByLecture(lectureID,studentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postMoodForLecture = function postMoodForLecture (req, res, next) {
  var lectureID = req.swagger.params['lectureID'].value;
  var body = req.swagger.params['body'].value;
  Mood.postMoodForLecture(lectureID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
