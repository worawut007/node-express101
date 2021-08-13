const dataStudent = require('../student.json');

const getStudent = (req, res) => {
  res.status(200).json({
    data: dataStudent,
  });
};

const getStudentById = (req, res) => {
  const { id } = req.params;
  const student = dataStudent.find((data) => `${data.id}` === id);
  if (student) {
    return res.status(200).json({ data: student });
  }
  return res.status(404).json(`not found student id : ${id}`);
};

module.exports = {
  getStudent,
  getStudentById,
};
