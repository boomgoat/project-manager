import React from "react";
import { DetailCard } from "./card/DetailCard";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const ProjectDetails = props => {
  const postId = props.match.params.id;
  const { project } = props;
  if (project === null) {
    return "...Loading";
  } else {
    return (
      <div className="container section project-details">
        <DetailCard
          cardType={"details"}
          title={project.title}
          content={project.projectContent}
          id={postId}
          name={project.authorFirstName}
          date={project.createdAt}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
