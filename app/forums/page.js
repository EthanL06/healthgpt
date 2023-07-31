"use client";

import { useEffect, useState } from "react";
import { getPosts } from "@/firebase/forums/posts";
import { auth, signInWithGoogle, signOut } from "@/firebase/auth/signup";
import Link from "next/link";

const Forums = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in");
        setUser(user);
      } else {
        console.log("user is not logged in");
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="flex items-center flex-col w-full">
      {/* <h1 className="font-bold text-3xl text-center">Forums</h1> */}

      {user ? (
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-2 items-center">
            <div className="avatar">
              <div className="w-14 mask mask-squircle">
                <img src={localStorage.getItem("profilePic")} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-xl">
                {localStorage.getItem("name")}
              </div>
              <div className="text-sm">{localStorage.getItem("email")}</div>
            </div>

            <button
              className="btn btn-error text-white ml-8 btn-md"
              onClick={() => {
                signOut();
                setUser(null);
              }}
            >
              Sign out
            </button>
          </div>

          <Link href={"/forums/create"} className="btn btn-primary">
            Create Post
          </Link>
        </div>
      ) : (
        <div>
          <div onClick={signInWithGoogle} className="px-6 sm:px-0 max-w-sm">
            <button
              type="button"
              className="btn bg-[#4285F4] hover:bg-[#4285F4]/90 text-white font-medium normal-case"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign up with Google<div></div>
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-xl">
        <div className="divider" />
      </div>

      <div className="flex flex-col gap-y-4 max-w-xl w-full">
        <div className="font-bold text-3xl text-center">Posts</div>
        <div className="flex flex-col gap-y-4">
          {posts.length != 0 &&
            posts.map((post) => {
              return (
                <Link
                  href={"/forums/" + post.id}
                  className="card card-compact transition-all duration-200 hover:-translate-y-1 flex flex-col gap-y-2 px-8 py-6 hover:cursor-pointer hover:bg-gray-200/90 border hover:shadow active:bg-transparent"
                  key={post.id}
                >
                  <div className="flex items-center gap-x-2 mb-2">
                    <div className="avatar">
                      <div className="w-8 mask mask-squircle">
                        <img loading="lazy" src={post.profilePic} />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold text-xsm">{post.name}</div>
                    </div>
                  </div>
                  <div className="font-bold text-xl">{post.title}</div>
                  <div className="text-sm">
                    {post.body.length > 100
                      ? post.body.substring(0, 100) + "..."
                      : post.body}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Forums;
