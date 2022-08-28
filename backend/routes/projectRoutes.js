const express = require('express')
const router = express.Router()
const {getProjects, setProjects, updateProject, deleteProject} = require('../controllers/projectController')

// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })
/////// replace above once we bring in the function ///////

router.get('/', getProjects)
router.post('/', setProjects)

router.put('/:id', updateProject)
router.delete('/:id', deleteProject)


module.exports = router
