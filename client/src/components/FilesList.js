import React from "react";
import { Link } from "react-router-dom";

const FilesList = props => {
  console.log(props.files);
  return props.files.map(file => {
    return (
      <div className="announcementContainerage" key={file._id}>
        <p>{file.title} </p>

        <Link to={`/files/${file._id}`}>
          <p>{file.content}</p>
        </Link>
      </div>
    );
  });
};

export default FilesList;
