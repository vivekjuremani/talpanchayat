import React, { useState, useEffect } from "react";
import axios from "axios";
import Staff from "./Staff";

function Staffs() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // alert("hello");
    axios
      .get("/api/staffs")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    // <div className="feed">
    //   {posts.map((post, index) => (
    //     <Staff key={index} post={post} />
    //   ))}
    //   {/* <Post />
    //   <Post />
    //   <Post />
    //   <Post />
    //   <Post /> */}
    // </div>
    <section className="section section_modal">
      <h2 className="section-title">staff</h2>
      <div div className="cocktails-center">
        {posts.map((post, index) => (
          <Staff key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
export default Staffs;
