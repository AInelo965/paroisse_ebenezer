const express = require('express')
const router = express.Router()

const {
  getAllMembers,
  createMember,
  getMember,
  updateMember,
  deleteMember,
} = require('../controllers/memberController')

router.route('/').get(getAllMembers).post(createMember)
router.route('/:id').get(getMember).patch(updateMember).delete(deleteMember)

module.exports = router
