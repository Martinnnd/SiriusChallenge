import { faImages } from "@fortawesome/free-regular-svg-icons";
import tweets from "../data/tweets.json";
import Tweet from "./Tweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import twicon from "../assets/icons8-twitter.svg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Tweets() {
  return (
    <div className="flex flex-col w-full sm:w-2/4 border-l border-r border-gray-100">
      {tweets.slice(0, 1).map((item) => (
        <div key={item.id} className="sm:hidden absolute top-3 left-6">
          <img
            src={item.author.profilePicture}
            className="w-8 h-8 rounded-full"
            alt=""
          />
        </div>
      ))}
      <h5 className="hidden sm:flex sm:ml-3 sm:mt-3 sm:font-bold">Home</h5>
      <div className="mt-4 ml-48 sm:hidden">
        <img src={twicon} alt="" />
      </div>
      <div className="flex justify-around mt-5 border-b border-gray-100">
        <div className="text-sm border-b-2 border-blue-400 h-9">For you</div>
        <div className="text-sm text-gray-500 h-9">Following</div>
      </div>
      <div className="hidden sm:flex sm:mt-8 sm:ml-5 ">
        {tweets.slice(0, 1).map((item) => (
          <img
            key={item.id}
            src={item.author.profilePicture}
            className="w-11 h-11 rounded-full"
            alt=""
          />
        ))}
        <p className="text-gray-500 mt-2 ml-2 text-lg">What´ Happening?</p>
      </div>
      <div className="hidden sm:flex sm:justify-between sm:border-b sm:border-gray-100 ">
        <FontAwesomeIcon icon={faImages} className="mt-10 ml-5 text-blue-500" />
        <Button variant="light" size="sm" text="Tweet" onClick={""} />
      </div>
      <div className="sm:hidden fixed top-[80%] left-[80%] w-12 h-12 rounded-full bg-blue-400">
        <FontAwesomeIcon
          icon={faPlus}
          className="fixed top-[757px] left-[360px] text-white"
        />
      </div>
      <div className="border-l border-r border-b border-gray-100">
        <Tweet />
      </div>
    </div>
  );
}
