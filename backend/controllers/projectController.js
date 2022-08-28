const asyncHandler = require("express-async-handler")

const Project = require('../model/projectModel')

// @describe Get goals
// @route    GET /api/projects
// @access   Private
const getProjects = asyncHandler( async (req, res) => {
    const projects = await Project.find()
    res.status(200).json(projects)
})

// @describe Set goals
// @route    POST /api/projects
// @access   Private
const setProjects = asyncHandler( async (req, res) => {
    // console.log(req.body);
    if(!req.body.text)
    {
        res.status(400)
        // if not with express handler we do .json
        // .json({ message: "Please add a text field"})
        throw new Error( "Please add a text field") // this come with lot of errors. To do this we can add the error middleware
    }
    const project = await Project.create({
        text: req.body.text
    })
    res.status(200).json(project)
})

// @describe Update goals
// @route    PUT /api/projects/:id
// @access   Private
const updateProject = asyncHandler( async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project){
        res.status(400)
        throw new Error("Project not found")
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, })
    res.status(200).json(updatedProject)
})

// @describe Delete goals
// @route    DELETE /api/projects/:id
// @access   Private
const deleteProject = asyncHandler( async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project){
        res.status(400)
        throw new Error('Project not found')
    }
    await project.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getProjects, setProjects, updateProject, deleteProject
}
