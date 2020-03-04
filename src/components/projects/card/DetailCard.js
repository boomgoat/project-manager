import React from "react";
import { CardTitle } from "./cardContents/title";
import { PostDetails } from "./cardContents/PostDetails";
import { CardContent } from "./cardContents/cardContent";

export const DetailCard = props => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="section card-content grey-text text-darken-3">
        <CardTitle title={props.title} />
        <CardContent content={props.content} />
        <PostDetails cardType={props.cardType} name={props.name} />
      </div>
    </div>
  );
};
