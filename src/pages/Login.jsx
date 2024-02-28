import { Form } from "../components/Form"
// Icons
import GoogleIcon from '../assets/icons8-google.svg'
import FacebookIcon from '../assets/icons8-facebook.svg'
import AppleIcon from '../assets/apple-icon.svg'

import Logo from '../assets/Logo.svg'

export default function Login() {
    return (
        <div className="md:flex pt-6 md:p-0">
            <div className="md:w-1/2">
                <div className="logo mb-6">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="md:w-1/2">
                <div className="w-full bg-white p-10 rounded-t-3xl">
                    <div className="mb-5">
                        <h5 className="text-xs mb-2">LET'S GET YOU STARTED</h5>
                        <h1 className="text-2xl font-medium">Create an Account</h1>
                    </div>
                    <Form />
                    <div className="flex items-center gap-4 mb-3 py-2">
                        <span className="h-[1px] flex flex-grow border-b border-gray-300"></span>
                        <span className="inline-block text-xs font-semibold">Or</span>
                        <span className="h-[1px] flex flex-grow border-b border-gray-300"></span>
                    </div>
                    <div>
                        <div className="flex items-center relative rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer py-4 px-9 mb-2">
                            <img src={GoogleIcon} alt="" />
                            <span className="text-xs block flex-grow text-center text-gray-500">Sign up with Google</span>
                        </div>
                        <div className="flex items-center relative rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer py-4 px-9 mb-2">
                            <img src={FacebookIcon} alt="" />
                            <span className="text-xs block flex-grow text-center text-gray-500">Sign up with Facebook</span>
                        </div>
                        <div className="flex items-center relative rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer py-4 px-9 mb-2">
                            <img src={AppleIcon} alt="" />
                            <span className="text-xs block flex-grow text-center text-gray-500">Sign up with Apple</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-xs text-center block">Already have an account? <a href="" className="hover:underline"><strong>LOGIN HERE</strong></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}