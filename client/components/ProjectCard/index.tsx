import React from 'react'
import { Project } from '@/state/api'

type Props = {
    project: Project
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className='rouned border p-4 shadowe'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>Start Date: {project.startDate}</p>
        <p>End Date: {project.endDate}</p>
 
    </div>
  )
}

export default ProjectCard