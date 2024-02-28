import { Input } from "./ui/Input"
import { Label } from "./ui/Label"
export const Form = () => {
  return (
    <div className="">
        <Label htmlFor="name">Your Name</Label>
        <Input placeholder="Johnson Doe"/>
    </div>
  )
}
