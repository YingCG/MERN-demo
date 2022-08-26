const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../controllers/goalController')

// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })
/////// replace above once we bring in the function ///////

router.get('/', getGoals)
router.post('/', setGoals)

router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)


module.exports = router
