import { Button } from "./ui/button"



const QunatityCounter = () => {
  return (
    <div className="flex p-1  mt-2 rounded-md  items-center">
    <Button className="flex justify-center w-7 h-7 px-3">-</Button>
    <span className=" flex justify-center bg-white px-3">1</span>
    <Button className=" flex justify-center w-7 h-7 px-3">+</Button>
</div>
  )
}

export default QunatityCounter