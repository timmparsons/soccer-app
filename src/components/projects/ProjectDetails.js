import React from 'react'

const ProjectDetails = (props) => {
  console.log(props)
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur numquam repudiandae architecto optio, officiis ut quam ducimus a eum veritatis impedit tempora aperiam accusamus illum modi maiores esse accusantium?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Tim</div>
          <div>16 June, 2 am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
