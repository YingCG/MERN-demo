import React, { useState } from 'react'
import Nav from './Nav'
import Axios from "axios";


function AddProject() {
  const [newProject, setNewProject] = useState({title: "", content :""});

  const handleChange =(e) => {
    setNewProject( project => ({
      ...project,
      [e.target.name] : e.target.value
    }))
  }

  const handleCreate = async(e) => {
    e.preventDefault();
    
    const info = {
      title: newProject.title,
      content: newProject.content,
    }
    console.log({info})

    try{
      Axios.post("http://localhost:5000/api/projects/create", newProject)
      .then((respone) => {
        console.log("New project created")
        setNewProject({title: "", content: ""})
      })
  
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <Nav />
      <h1>Create a Project Here</h1>
      <form onSubmit={handleCreate}>
        <div className="form-group">
        
          <input type="text" name="title" placeholder='New project' onChange={handleChange} value={newProject.title}/>
          <input type="text" name="content" placeholder='Some description' onChange={handleChange} value={newProject.content}/>

        </div>

        <button className="btn-link" type='submit'>Create Project</button>
      </form>
    </div>
  )
}

export default AddProject
