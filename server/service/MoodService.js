'use strict';


/**
 * Returns the moods over all lectures
 *
 * returns List
 **/
exports.getMood = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "negative" : 1,
  "neutral" : 5,
  "positive" : 6,
  "lectureID" : 0
}, {
  "negative" : 1,
  "neutral" : 5,
  "positive" : 6,
  "lectureID" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the moods for a lecture
 *
 * lectureID Long lectureID of corresponding lecture
 * returns Mood
 **/
exports.getMoodByLectureID = function(lectureID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "negative" : 1,
  "neutral" : 5,
  "positive" : 6,
  "lectureID" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get student's mood for a lecture
 * Return a student's current mood for a lecture. If there is no mood set, the neutral one is returned
 *
 * lectureID Long lectureID of corresponding lecture
 * studentID Long studentID of the corresponding student
 * returns inline_response_200
 **/
exports.getMoodForStudentByLecture = function(lectureID,studentID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mood" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update/Post an existing student's mood for a given lecture
 *
 * lectureID Long lectureID of corresponding lecture
 * body Body The new mood for the lecture and the studentID 
 * returns Mood
 **/
exports.postMoodForLecture = function(lectureID,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "negative" : 1,
  "neutral" : 5,
  "positive" : 6,
  "lectureID" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

