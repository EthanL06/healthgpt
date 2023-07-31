"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/diagnosis");
  };

  return (
    <>
      <div className="flex flex-col pt-4 w-full sm:w-[30rem] items-center gap-y-2 px-8">
        <div className="font-bold text-2xl text-center">
          Enter patient&apos;s symptoms.
        </div>

        <textarea
          className="textarea textarea-bordered w-full h-auto min-h-[10rem] max-h-[20rem] shadow-sm "
          placeholder="List symptoms..."
        ></textarea>

        <button
          className="btn btn-primary mt-4 shadow-md font-bold"
          onClick={handleClick}
        >
          Generate Diagnosis
        </button>
      </div>
    </>
  );
}
