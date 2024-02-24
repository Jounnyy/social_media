import axios from "axios";
import React, { useState, useEffect } from "react";

function Section_Notification() {
  const [notifs, setNotifs] = useState([]);
  const [user, setUser] = useState({});

  async function getProfileUser() {
    try {
      await axios
        .get("http://localhost:5000/auth/profile", { withCredentials: true })
        .then(({ data }) => {
          setUser(data.result);
        })
        .catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
  }
  async function getNotification() {
    try {
      await axios
        .get("http://localhost:5000/notif/get_all/", { withCredentials: true })
        .then(({ data }) => {
          setNotifs(data.result);
        })
        .catch(({ response }) => {
          console.error(response);
        });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProfileUser();
    getNotification();
  }, []);
  return (
    <>
      {notifs.map((notif, i) => {
        const LetterFifth = notif.content_notif.substring(0, 60);
        return (
          <section className="ThisNotifications" key={i}>
            <div className="BlockNameUser">
              <div className="Nameuser-Notifications">
                <figure>
                  <img src={user.url} alt={user.name_img} />
                </figure>
                <figcaption>
                  <p>{user.name}</p>
                  <p>@{user.username}</p>
                </figcaption>
              </div>
              <div className="Text-Notifications">
                <p>
                  {notif.content_notif.length <= 80
                    ? notif.content_notif
                    : `${LetterFifth}`}
                </p>
              </div>
            </div>
            <div className="CircleNotifications">
              <div className="ThisCircle"></div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Section_Notification;
