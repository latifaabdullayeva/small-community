'use strict';

var utils = require('../utils/writer.js');
var Lecture = require('../service/LectureService');

module.exports.getLectures = function getLectures (req, res, next) {
  Lecture.getLectures()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
