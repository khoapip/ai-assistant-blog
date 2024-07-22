import MessageForm from "./messageForm";
import MessagePanel from "./messagePanel";

export default function Chat(){
  return (
  <div className="flex flex-col max-w-2xl w-full mx-auto ">
        <MessagePanel/>
        <MessageForm/>
 </div>
  )

}