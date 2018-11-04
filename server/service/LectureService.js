'use strict';


/**
 * Returns all lectures in the system
 *
 * returns List
 **/
exports.getLectures = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lectureName" : "lectureName",
  "lectureDescription" : "lectureDescription",
  "lectureID" : 0
}, {
  "lectureName" : "lectureName",
  "lectureDescription" : "lectureDescription",
  "lectureID" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

