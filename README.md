# smallCommunity

This project is based on the React.js where I've designed a web app for communication between students and professors. Along with the frontend, I've also built a simple REST service in node and express.js that was consumed by the web page to present data to the user. 

The goal of this project is to build an interactive web application that aims to improve the communication between students and lecturers during university courses or lectures. The system should be designed as a dynamic web application that offers the following functionalities: 

1. When visiting the website for the first time, users can select a username. This username should be posted to the server to receive the created student object including the studentID. The studentID should be stored locally as a cookie so that the client knows who is currently logged in. Note: This is a strong simplification of what should be done in a productive system and violates all security standards.
2. Once the user has such a cookie, she is able to access the web application and it can fetch the username for visualization. Therefore, refreshing the page should work.
3. The main page should display all available lectures. For this project it is sufficient to show the ones which we already added to the database and never change these.
4. When selecting a lecture, the user is directed to the page of the lecture.
5. This page consists of 4 sections: a live chat, a Q&A section, a mood visualization, and a live stream. The design and layout of this page is up to you but should make sense and will be graded.
6. The users can communicate via a live chat. The chat does not need to be stored in the database. This chat should be realized using websockets only.
7. Users can ask questions. These questions are shown in a dedicated “Questions” section. Questions are editable by the author and changes are reflected on all other clients.
8. Every user can provide an answer to a question. Multiple answers per question are allowed. Answers are editable by the author and changes are reflected on all other clients.
9. Every question and every answer can be voted up or down once per user. However, a user can change his opinion and swapt from down(up)-vote to up(down)-vote. Each client should see whether she already voted for a specific question.
10. The questions and their answers are automatically ordered by the difference of up and down votes (highest to lowest).
11. Users have the opportunity to express their current mood and change it as often as they want using a smiley-based interface (three different smileys to indicate their current mood). The three smileys should correspond to the mood values -1, 0, and 1. Each user should always be able to see, which mood they have currently selected.
12. There should be a visualization of the aggregated mood of all users (e.g. using a tag-cloud-like representation: Each smiley changes its size based on the relative amount of students that selected the associated mood).
13. There should also be enough space for a potential live stream video of the lecture. For this project, you should simply use a thumbnail for this.
