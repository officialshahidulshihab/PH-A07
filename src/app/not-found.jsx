import Link from "next/link"

const NotFound = () => {
    return (
        <div className="text-center mt-20 h-[50vh]">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-[#64748B] mt-3">Page not found</p>
            <Link href="/" className="btn bg-[#244D3F] text-white mt-5">
                Go Home
            </Link>
        </div>
    )
}
export default NotFound