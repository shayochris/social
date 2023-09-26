import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div>
            <p className="text-6xl font-bold">404</p>
            <Link to="/">Home</Link>
        </div>
    </div>
  )
}
