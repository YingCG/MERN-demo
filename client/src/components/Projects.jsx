import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav'

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects(){
      const response = await fetch("http://localhost:5000/api/projects");

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
        <>
        <h3>{project.title}</h3>
        <p>{project.content}</p>
        </>
        
      ))}</div>
      <Link className="btn-link" to={'/projects/create'}>Add Project</Link> |

    </div>
  )
}

export default Projects