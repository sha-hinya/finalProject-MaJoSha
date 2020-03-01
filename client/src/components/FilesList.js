import React from "react";
import { Link } from "react-router-dom";
// import Card from "@material-ui/core/Card";
// import { CardContent } from "@material-ui/core";

const FilesList = props => {
  console.log(props.files);
  return props.files.map(file => {
    return (
      <Link to={`/files/${file._id}`}>
        <div className="fileCards" key={file._id}>
          <div className="fileCardsTitle">
            <p>{new Date(file.created_at).toDateString()}</p>
          </div>
          <div className="fileCardsTitle">
            <h4>{file.title} </h4>
          </div>
          <div className="fileCardsCategory">
            <p>{file.category}</p>
          </div>
        </div>
      </Link>
    );
  });
};

export default FilesList;
