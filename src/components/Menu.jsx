import twicon from "../assets/icons8-twitter.svg"
import homebutton from "../assets/icons8-casa.svg"
import busqueda from "../assets/icons8-búsqueda.svg"
import message from "../assets/mail-svgrepo-com.svg"
import profile from "../assets/profile-2-svgrepo-com.svg"

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
                <button className="mt-8 bg-blue-400 rounded-2xl text-center text-white font-bold pt-1 pb-1 ml-20 w-3/4">Tweet</button>
            </div>
        </div>
  )
}
