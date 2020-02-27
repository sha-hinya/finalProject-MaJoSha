import React from "react";
import { Link } from "react-router-dom";

const DocumentsList = props => {
  console.log(props.documents);
  return props.documents.map(document => {
    return (
      <div class="postingscontainer" key={document._id}>
        <p>{document.title} </p>

        <Link to={`/documents/${document._id}`}>
          <p>{document.content}</p>
        </Link>
      </div>
    );
  });
};

export default DocumentsList;
