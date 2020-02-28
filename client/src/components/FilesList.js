import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";

const FilesList = props => {
  console.log(props.files);
  return props.files.map(file => {
    return (
      <Link to={`/files/${file._id}`}>
        <div className="fileCards" key={file._id}>
          <h4>{file.title} </h4>
          <p>{file.category}</p>
          <p>{file.property}</p>
          {/* <img src={file.url} alt={file.title} /> */}
        </div>
      </Link>
    );
  });
};

export default FilesList;
