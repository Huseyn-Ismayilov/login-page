import { Form } from "../components/Form"
export default function Login() {
    return (
        <div className="">
            <div className="flex">
                <div className="w-1/2">
                    lorem
                </div>
                <div className="w-1/2">
                    <div className="w-full bg-white p-10 rounded-t-3xl">
                        <div className="mb-5">
                            <h5 className="text-xs mb-2">LET'S GET YOU STARTED</h5>
                            <h1 className="text-2xl font-medium">Create an Account</h1>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}