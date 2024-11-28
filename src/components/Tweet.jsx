import tweets from "../data/tweets.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
// import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import PortalExample from "./PortalExample";

export default function Tweet() {
  // const [comment, setComment] = useState(0);
  const [retweet, setRetweet] = useState(0);
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const giveLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLike((like) => like + 1);
    }
  };
  const giveRetweet = () => {
    setIsRetweeted(!isRetweeted);
    if (!isRetweeted) {
      setRetweet((retweet) => retweet + 1);
    }
  };

  return (
    <div className="flex flex-col mt-5 ml-5 gap-10">
      {tweets.slice(1, 3).map((item) => (
        <div key={item.id} className="flex flex-col">
          <div className="flex">
            <img
              src={item.author.profilePicture}
              className="w-11 h-11 rounded-full"
              alt=""
            />
            <p className="mt-2 ml-2 text-sm">{item.author.firstName}</p>
            <p className="mt-2 ml-2 text-gray-400 text-sm">
              @{item.author.username}
            </p>
            <p className="mt-2 ml-2 text-gray-400 text-sm">{item.createdAt}</p>
          </div>
          <div className="flex flex-col">
            <p className="mt-3 ml-[52px]">{item.content}</p>
            <img
              src={item.images}
              className="w-4/5 h-56 ml-[52px] rounded-xl mt-5"
              alt=""
            />
          </div>
          <div className="flex mt-2 ml-[52px] text-gray-400 gap-7 mb-3">
            {/* <button onClick={() => setComment((comment) => comment + 1)}>
              <FontAwesomeIcon
                icon={faMessage}
                className="hover:text-red-600 mt-[7px]"
              />
            </button> */}
            <div className="clipping-container">
              <PortalExample />
            </div>
            <p></p>
            <button onClick={giveRetweet}>
              <FontAwesomeIcon
                icon={faRetweet}
                className={
                  isRetweeted
                    ? "text-green-600 transition-colors duration-300"
                    : "transition-colors duration-300"
                }
              />
            </button>
            <p>{retweet}</p>
            <button onClick={giveLike}>
              <FontAwesomeIcon
                icon={isLiked ? solidHeart : regularHeart}
                className={
                  isLiked
                    ? "text-red-600 transition-colors duration-300"
                    : "transition-colors duration-300"
                }
              />
            </button>
            <p>{like}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
