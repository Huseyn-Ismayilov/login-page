import { Input } from "./ui/Input"
import { Label } from "./ui/Label"
import { Button } from "./ui/Button"
export const Form = () => {
    return (
        <>
            <form action="">
                <div className="mb-3">
                    <Label>Your Name</Label>
                    <Input placeholder="Johnson Doe" />
                </div>
                <div className="mb-3">
                    <Label>Email</Label>
                    <Input placeholder="johnsondoe@nomail.com" />
                </div>
                <div className="mb-3">
                    <Label>Password</Label>
                    <Input type="password" placeholder="***************" />
                </div>
                <div className="mb-3">
                    <Button className="bg-black text-white w-full hover:bg-gray-800">GET STARTED</Button>
                </div>
            </form>
        </>
    )
}
