"use client"

import Link from "next/link"

const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-40 gap-4">
      <h1 className="text-6xl font-bold text-[#EF4444]">Oops!</h1>
      <p className="text-[#64748B] text-xl">Something went wrong</p>
      <p className="text-[#64748B] text-sm">{error?.message}</p>
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => reset()}
          className="btn bg-[#244D3F] text-white"
        >
          Try Again
        </button>
        <Link href="/" className="btn">
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default Error