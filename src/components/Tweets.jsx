import { faImages } from "@fortawesome/free-regular-svg-icons";
import tweets from "../data/tweets.json";
import Tweet from "./Tweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

export default function Tweets() {
  return (
    <div className="flex flex-col w-2/4 border-l border-r border-gray-100">
      <h5 className="ml-3 mt-3 font-bold">Home</h5>
      <div className="flex justify-around mt-5 border-b border-gray-100">
        <div className="text-sm border-b-2 border-blue-400 h-9">For you</div>
        <div className="text-sm text-gray-500 h-9">Following</div>
      </div>
      <div className="flex mt-8 ml-5 ">
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
      <div className="flex justify-between border-b border-gray-100 ">
        <FontAwesomeIcon icon={faImages} className="mt-10 ml-5 text-blue-500"/>
        <Button variant='light' size='sm' text='Tweet' onClick={""}/>
      </div>
      <div className="border-l border-r border-b border-gray-100">

      <Tweet/>
      </div>
    </div>
  );
}
