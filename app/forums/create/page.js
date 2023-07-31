"use client";

import { auth } from "@/firebase/auth/signup";
import { createPost } from "@/firebase/forums/posts";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const ForumCreate = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in");
        setUser(user);
      } else {
        console.log("user is not logged in");
        setUser(null);
        // Redirect to forums page

        router.push("/forums");
      }
    });
  }, []);

  const create = async (title, body) => {
    if (!title || !body) {
      console.log("Title or body is empty");

      if (error) {
        return;
      }

      setError(true);

      // after 5 seconds remove the error
      setTimeout(() => {
        setError(false);
      }, 5000);

      return;
    }

    if (title.trim().length === 0 || body.trim().length === 0) {
      console.log("Title or body is empty");
      if (error) {
        return;
      }

      setError(true);

      // after 5 seconds remove the error
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }

    createPost(title, body);
    router.push("/forums");
  };

  return (
    <>
      {user ? (
        <>
          <div className="font-bold text-2xl text-center">
            Create a new forum post.
          </div>

          <div className="form-control w-full sm:w-[30rem]">
            <label className="label">
              <span className="label-text font-semibold text-lg">Title</span>
            </label>

            <input
              type="text"
              placeholder="Post title"
              className="input input-bordered w-full rounded-md"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <label className="label">
              <span className="label-text font-semibold text-lg">Body</span>
            </label>

            <textarea
              type="text"
              placeholder="Post body"
              className="textarea textarea-bordered w-full h-auto min-h-[10rem] max-h-[20rem] shadow-sm "
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>

            <button
              onClick={() => {
                create(title, body);
              }}
              className="btn btn-primary mt-8 shadow-md font-bold"
            >
              Create
            </button>
          </div>

          {error && (
            <div class="toast">
              <div class="alert alert-error text-white fade-out text-center">
                <span>The title and/or body cannot be empty!</span>
              </div>
            </div>
          )}
        </>
      ) : (
        <span className="loading loading-ring loading-lg text-brand"></span>
      )}
    </>
  );
};
export default ForumCreate;
