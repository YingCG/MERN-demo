import React, { useEffect, useState } from 'react'
import Nav from './Nav'

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects(){
      const response = await fetch(`http://localhost:8000/api/projects`);

      if(!response.ok){
        const message = `An error occurred: ${response.statusText}`
        window.alert(message)
        return;
      }

      const projects = await response.json();
      setProjects(projects)
    }

    fetchProjects();
  },[])

  return (
    <div>
      <Nav />
      <h1>Check out our Projects</h1>
      <div>{projects.map((project) => (
        <h3>{project.text}</h3>
      ))}</div>
    </div>
  )
}

export default Projects