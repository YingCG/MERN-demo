const asyncHandler = require("express-async-handler")

const asyncHandler = require(expressAsyncHandler)

// @describe Get goals
// @route    GET /api/goals
// @access   Private
const getGoals = asyncHandler( async (req, res) => {
    // console.log('get hello');
    res.status(200).json({message: 'Get goals'})
})

// @describe Set goals
// @route    POST /api/goals
// @access   Private
const setGoals = asyncHandler( async (req, res) => {
    // console.log(req.body);
    if(!req.body.text)
    {
        res.status(400)
        // if not with express handler we do .json
        // .json({ message: "Please add a text field"})
        throw new Error( "Please add a text field") // this come with lot of errors. To do this we can add the error middleware
    }
    res.status(200).json({message: 'Set goals'})
})

// @describe Update goals
// @route    PUT /api/goals/:id
// @access   Private
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
})

// @describe Delete goals
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals, setGoals, updateGoal, deleteGoal
}
