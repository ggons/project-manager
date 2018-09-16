import React from 'react';
import NewProjectContainer from 'containers/project/NewProjectContainer';
import ProjectListContainer from 'containers/project/ProjectListContainer';
import SprintContainer from 'containers/sprint/SprintContainer';

const ProjectRoute = props => {
  const { id } = props.match.params;
  
  if (id === 'new')
    return <NewProjectContainer />
  else if (id === 'list')
    return <ProjectListContainer {...props} />
  else
    return <SprintContainer {...props} />
}
 
export default ProjectRoute;