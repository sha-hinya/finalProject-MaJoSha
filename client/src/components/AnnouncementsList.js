import React from "react";
import { Link } from "react-router-dom";

const AnnouncementsList = props => {
  console.log(props.announcements);
  return props.announcements.map(announcement => {
    return (
      <p key={announcement._id}>
        {announcement.title}
        <b>
          <Link to={`/announcements/${announcement._id}`}>
            <p>
              {announcement.content}
              <p>
                {" "}
                announced by {announcement.author} on {announcement.updated_at}{" "}
              </p>
            </p>
          </Link>
        </b>
      </p>
    );
  });
};

export default AnnouncementsList;
