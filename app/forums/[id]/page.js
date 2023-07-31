"use client";

import { getPost } from "@/firebase/forums/posts";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Post = ({ params }) => {
  const router = useRouter();

  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(params.id)
      .then((post) => {
        setPost(post);
      })
      .catch((err) => {
        console.log(err);
        router.push("/forums");
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex items-center flex-col">
      {post ? (
        <>
          <article className="prose prose-p:whitespace-pre-wrap w-full md:min-w-[65ch] px-4">
            <button
              className="btn btn-ghost btn-circle mb-4"
              onClick={() => router.back()}
            >
              <BackIcon />
            </button>

            <h1 className="mb-2">{post.title}</h1>

            <div className="flex items-center gap-x-2 mb-0 relative bottom-6">
              <div>
                <div className="avatar w-9 mask mask-squircle bg-cover">
                  <img src={post.profilePic} className="" />
                </div>
              </div>
              <div className="font-semibold">{post.name}</div>
            </div>

            <p className="-mt-8">{post.body}</p>

            <div
              onClick={scrollToTop}
              className="flex btn btn-ghost items-center font-bold"
            >
              <label>Back to top</label>
              <button>
                <UpArrow />
              </button>
            </div>
          </article>
        </>
      ) : (
        <span className="loading loading-ring loading-lg text-brand"></span>
      )}
    </div>
  );
};

const UpArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};
export default Post;
