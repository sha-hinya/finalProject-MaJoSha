import React from "react";
import { Link } from "react-router-dom";

const FilesList = props => {
  console.log(props.files);
  return props.files.map(file => {
    return (
      <div className="announcementContainerage" key={file._id}>
        <Link to={`/files/${file._id}`}>
          <p>{file.title} </p>
          <p>{file.category}</p>
          <p>{file.property}</p>
          <p></p>
          <img src={file.url} alt={file.title} />
        </Link>
      </div>
    );
  });
};

export default FilesList;
