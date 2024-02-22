import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import {
  CheckDeletePosting,
  CheckImageUserComment,
  CheckPostId,
} from "../../../../../libs/redux/CheckReducer/Check";

function Section_OwnerPosting() {
  const components = useSelector((state) => state.icons);
  const [liked, setLiked] = useState({});
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  // const fetchPostLikes = async (postId) => {
  //   try {
  //     const { data } = await axios.get(`http://localhost:5000/like/${postId}`, {
  //       withCredentials: true,
  //     });
  //     return data.result.like;
  //   } catch (error) {
  //     console.error("Error while fetching post likes:", error);
  //     return 0;
  //   }
  // };

  // async function getPostsUser() {
  //   try {
  //     const { data } = await axios.get("http://localhost:5000/auth/profile", {
  //       withCredentials: true,
  //     });
  //     setUser(data.result);
  //     await axios
  //       .get(`http://localhost:5000/posting/user`, {
  //         withCredentials: true,
  //       })
  //       .then(({ data }) => {
  //         setPosts(data.result);
  //       })
  //       .catch(({ response }) => {
  //         console.error(response);
  //       });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // const handleLike = async (postId) => {
  //   try {
  //     await axios
  //       .post(
  //         "http://localhost:5000/like",
  //         { postId: postId },
  //         { withCredentials: true }
  //       )
  //       .then(async ({ data }) => {
  //         setLiked((prevLiked) => ({
  //           ...prevLiked,
  //           [postId]: !prevLiked[postId],
  //         }));

  //         const updatedLikes = await fetchPostLikes(postId);

  //         setPosts((prevPosts) =>
  //           prevPosts.map((prevPost) =>
  //             prevPost.id === postId
  //               ? {
  //                   ...prevPost,
  //                   like: updatedLikes,
  //                 }
  //               : { ...prevPost }
  //           )
  //         );
  //       });
  //   } catch (error) {
  //     console.error("Error while handling like:", error);
  //   }
  // };
  // const checkIfUserIsLiked = (post) => {
  //   if (post.likes) {
  //     for (const likes of post.likes) {
  //       if (likes.userId === user.id) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };

  // useEffect(() => {
  //   if (posts.length > 0 && user.id) {
  //     const updatedLikeState = {};
  //     for (const post of posts) {
  //       updatedLikeState[post.id] = checkIfUserIsLiked(post);
  //     }
  //     setLiked(updatedLikeState);
  //   }
  // }, [posts, user.id]);

  // useEffect(() => {
  //   getPostsUser();
  // }, []);

  const handleCommentClick = (postId) => {
    dispatch(CheckPostId(postId));
    dispatch(CheckImageUserComment(true));
  };

  return (
    <>
      {/* <section className="UserPosting" key={i}> */}
      <section className="UserPosting">
        <article className="UserPosting-NameProfile">
          <div className="NameProfileText">
            <figure className="ImageProfile-NameProfile">
              <img src={components.imgDummy} alt={"asdas"} />
            </figure>
            <div className="TextProfile-NameProfile">
              <p> asdasd</p>
              <p>@asdasd</p>
              {/* <p> {post.users_datum.name}</p>
                <p>@{post.users_datum.username}</p> */}
              <img
                src={components.Verified}
                alt=""
                style={{ paddingTop: "1px" }}
              />
            </div>
          </div>
          <div className="ButtonList-NameProfile">
            <figure className="Share-LikePosting">
              <img
                src={components.ImageDeleteAccount}
                alt=""
                role="button"
                // onClick={() => {
                //   dispatch(CheckDeletePosting(true));
                //   dispatch(CheckPostId(post.uuid));
                // }}
              />
            </figure>
          </div>
        </article>
        <article className="UserPosting-ImagePosting">
          <figure className="Image-ImagePosting">
            {/* {post.url ? <img src={post.url} alt={post.name_img} /> : ""} */}
            <img src={components.imgDummy} alt={"asdasd"} />
          </figure>
        </article>
        <article className="UserPosting-ArticlePosting">
          <figcaption>
            {/* <p>{post.desc}</p> */}
            <p>asdasd</p>
          </figcaption>
        </article>
        <article className="UserPosting-LikePosting">
          <div className="wrapLikePosting">
            <figure className="Love-LikePosting">
              {/* <img
                  src={
                    liked[post.id]
                      ? components.ImageLikeLove
                      : components.ImageLove
                  }
                  alt=""
                  role="button"
                  onClick={() => {
                    setLiked((prevLiked) => ({
                      ...prevLiked,
                      [post.id]: !prevLiked[post.id],
                    }));
                    handleLike(post.id);
                  }}
                /> */}
              <img src={components.ImageLove} alt="sadasd" />
              <figcaption>
                <p>12</p>
              </figcaption>
            </figure>
            <figure className="Chat-LikePosting">
              <img
                src={components.ImageChat}
                alt=""
                role="button"
                // onClick={() => handleCommentClick(post.id)}
              />
              <figcaption></figcaption>
            </figure>
          </div>
        </article>
      </section>
      {/* {posts.map((post, i) => (
       
      ))} */}
    </>
  );
}

export default Section_OwnerPosting;
