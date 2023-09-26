import { Link } from "react-router-dom"
export default function Signup() {
  return (
    <div className="container-sm">
        <form action="">
            <div className="my-4">
                <input type="text" className="input" placeholder="email" />
            </div>
            <div className="my-4">
                <input type="text" className="input" placeholder="password" />
            </div>
            <div className="my-4">
                <button className="button w-full">Signup</button>
            </div>
            <fieldset className="text-center border-t-2 border-gray-300">
                <legend className="px-4">OR</legend>
            </fieldset>
            <div className="my-4">
                <Link to="/" className="transparent-button block text-center w-full">Sign In</Link>
            </div>
            
        </form>
    </div>
  )
}
