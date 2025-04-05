const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const dbConnection = require("./config/dbConfig");

const createUsersTable = `
  CREATE TABLE if not exists registration(
user_id INT(20) NOT NULL AUTO_INCREMENT,
username VARCHAR(20) NOT NULL,
email VARCHAR(40) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (user_id)
);
`;

const createProfileTable = `
  
CREATE TABLE if not exists profile(
user_profile_id INT(20) NOT NULL AUTO_INCREMENT,
user_id INT(20) NOT NULL,
firstname VARCHAR(20) NOT NULL,
lastname VARCHAR(20) NOT NULL,
PRIMARY KEY (user_profile_id),
FOREIGN KEY (user_id) REFERENCES registration(user_id));


`;

const createQuestionTable = `
  CREATE TABLE if not exists questions(
id INT(20) NOT NULL AUTO_INCREMENT,
question_id VARCHAR(100) NOT NULL UNIQUE,
user_id INT(20) NOT NULL,
title TEXT NOT NULL,
description TEXT NOT NULL,
tag VARCHAR(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
likes INT(20),
dislike INT(20),
PRIMARY KEY (id,question_id),
FOREIGN KEY (user_id) REFERENCES registration(user_id));

`;

const createAnswersTable = `
  
CREATE TABLE if not exists answers(
answer_id INT(20) NOT NULL AUTO_INCREMENT,
user_id INT(20) NOT NULL,
question_id VARCHAR(100) NOT NULL,
answer TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
likes INT(20),
dislike INT(20),
PRIMARY KEY (answer_id),
FOREIGN KEY (question_id) REFERENCES questions(question_id),
FOREIGN KEY (user_id) REFERENCES registration(user_id)
);

`;

// Function to create tables
async function CreateTables() {
  try {
    await dbConnection.query("SELECT 'test'"); // Check DB connection
    console.log("Database connection successful.");

    await dbConnection.query(createUsersTable);
    console.log("Users table created.");

    await dbConnection.query(createProfileTable);
    console.log("Profile table created.");

    await dbConnection.query(createQuestionTable);
    console.log("Question table created.");

    await dbConnection.query(createAnswersTable);
    console.log("Answers table created.");
  } catch (error) {
    console.error("Error creating tables: ", error.message);
  } finally {
    dbConnection.end(); // Close connection after execution
  }
}

CreateTables();
