import { Button } from "./button"
import { Input } from "./input"

function App() {

  return (
    <>
    <form className="w-[400px] mx-auto mt-[150px] bg-slate-300 p-8 rounded-xl ">
    <div>
      <Input type="email" placeholder="enter your email" className="w-[300px] p-3 rounded-md mb-2 mx-auto" />
    </div>
    <div>
      <Input type="password" placeholder="enter your password" className="w-[300px] p-3 rounded-md mb-2 mx-auto" />
    </div>
    <div className="text-center">
      <Button type="submit" className="w-[90px] p-2 bg-green-400 text-white rounded-md hover:bg-green-600">Send</Button>
    </div>
    </form>
    </>
  )
}

export default App
