const express = require('express');
const controller = require('./controller/studentController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello nodejs');
});

router.get('/student', controller.getStudent);

router.get('/student/:id([0-9]+)', controller.getStudentById);

module.exports = router;
