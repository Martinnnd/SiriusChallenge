import twicon from "../assets/icons8-twitter.svg"
import homebutton from "../assets/icons8-casa.svg"
import busqueda from "../assets/icons8-búsqueda.svg"
import message from "../assets/mail-svgrepo-com.svg"
import profile from "../assets/profile-2-svgrepo-com.svg"
import Button from "./Button"

export default function Menu() {
  return (
        <div className='sm:flex flex-col hidden sm:w-1/4'>
            <div className="mt-4 ml-20">
                <a href=""><img src={twicon} alt="" /></a>
            </div>
            <div className="flex gap-3 mt-6 ml-20">
                <img src={homebutton} alt="" />
                <a href=""><p className="font-bold">Home</p></a>
            </div>
            <div className="flex gap-3 mt-6 ml-20"> 
                <img src={busqueda} alt="" />
                <a href=""><p>Explore</p></a>
            </div>
            <div className="flex gap-3 mt-6 ml-20">
                <img src={message} alt="" />
                <a href=""><p>Message</p></a>
            </div>
            <div className="flex gap-3 mt-6 ml-20">
                <img src={profile} alt="" />
                <a href=""><p>Profile</p></a>
            </div>
            <div>
                <Button variant='main' size='md' text='Tweet' onClick={""}/>
            </div>
        </div>
  )
}
