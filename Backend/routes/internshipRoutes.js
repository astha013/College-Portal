const express = require('express');
const router = express.Router();
const {
  getAllInternships,
  addInternship,
  deleteInternship
} = require('../controllers/internshipController');

router.get('/', getAllInternships);
router.post('/', addInternship);
router.delete('/:id', deleteInternship);

module.exports = router;
