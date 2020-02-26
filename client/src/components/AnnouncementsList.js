import React from "react";
import { Link } from "react-router-dom";

const AnnouncementsList = props => {
  return props.announcements.map(announcement => {
    return (
      <p key={announcement._id}>
        [{announcement.type}]
        <b>
          <Link to={`/announcements/${announcement._id}`}>
            {" "}
            {announcement.title}{" "}
          </Link>
        </b>
        <span role="img" aria-label="upvote emoji">
          ⏫{announcement.upvote_count}
        </span>
      </p>
    );
  });
};

export default AnnouncementsList;
