import twicon from "../assets/icons8-twitter.svg"
import homebutton from "../assets/icons8-casa.svg"
import busqueda from "../assets/icons8-búsqueda.svg"
import message from "../assets/mail-svgrepo-com.svg"
import profile from "../assets/profile-2-svgrepo-com.svg"
import Button from "./Button"

export default function Menu() {
  return (
        <div className='flex flex-col w-1/4'>
            <div className="mt-4 ml-20">
                <img src={twicon} alt="" />
            </div>
            <div className="flex gap-3 mt-6 ml-20">
                <img src={homebutton} alt="" />
                <p className="font-bold">Home</p>
            </div>
            <div className="flex gap-3 mt-6 ml-20"> 
                <img src={busqueda} alt="" />
                <p>Explore</p>
            </div>
            <div className="flex gap-3 mt-6 ml-20">
                <img src={message} alt="" />
                <p>Message</p>
            </div>
            <div className="flex gap-3 mt-6 ml-20">
                <img src={profile} alt="" />
                <p>Profile</p>
            </div>
            <div>
                <Button variant='main' size='md' text='Tweet' onClick={""}/>
            </div>
        </div>
  )
}
