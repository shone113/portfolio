import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../styles/ProjectDisplay.css";

export default function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
  return (
    <div className='project'> 
        <h1> {project.name} </h1>
        <a href={project.demo} rel="noopener" target="_blank">
          <img src={project.image} />
        </a>

        <p>
            <b>Skills:</b> {project.skills}
        </p>
        <a href={project.github} rel="noopener" target="_blank">
          <GitHubIcon />
        </a>
    </div>
  )
}
