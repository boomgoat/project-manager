import React from "react";
import { CardTitle } from "./cardContents/title";
import { PostDetails } from "./cardContents/PostDetails";
import { CardContent } from "./cardContents/cardContent";

export const DetailCard = props => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <CardTitle title={props.title} id={props.id} />
        <CardContent />
        <PostDetails cardType={props.cardType} />
      </div>
    </div>
  );
};
