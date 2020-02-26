import React from "react";
import { Link } from "react-router-dom";

const AnnouncementsList = props => {
  console.log(props.announcements);
  return props.announcements.map(announcement => {
    return (
      <div key={announcement._id}>
        <p>{announcement.title} </p>

        <Link to={`/announcements/${announcement._id}`}>
          <p>{announcement.content}</p>
          <p>
            announced by {announcement.author} on {announcement.updated_at}{" "}
          </p>
        </Link>
      </div>
    );
  });
};

export default AnnouncementsList;
