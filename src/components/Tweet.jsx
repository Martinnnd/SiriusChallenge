import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import ModalContent from "./ModalContent";
import tweets from "../data/tweets.json";

export default function Tweet() {
  const [retweet, setRetweet] = useState(0);
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTweet, setSelectedTweet] = useState(null);

  const giveLike = () => {
    setIsLiked(!isLiked);
    setLike((like) => like + (isLiked ? -1 : 1));
  };

  const giveRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweet((retweet) => retweet + (isRetweeted ? -1 : 1));
  };

  const openModal = (tweet) => {
    setSelectedTweet(tweet);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col mt-5 ml-5 gap-10">
      {tweets.slice(1, 4).map((item) => (
        <div key={item.id} className="flex flex-col">
          <ModalContent
            show={showModal}
            onClose={() => {
              setShowModal(false);
              setSelectedTweet(null);
            }}
            tweet={selectedTweet}
          />
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
            <p className="mt-3 ml-[52px] mr-20">{item.content}</p>
            {item.images && (
              <img
                src={item.images}
                className="w-4/5 h-56 ml-[52px] rounded-xl mt-5 2xl:h-[400px]"
                alt=""
              />
            )}
          </div>
          <div className="flex mt-2 ml-[52px] text-gray-400 gap-7 mb-3">
            <button onClick={() => openModal(item)}>
              <FontAwesomeIcon
                icon={faMessage}
                className="hover:text-blue-400 mt-[7px]"
              />
            </button>
            <p>{item.comments.length}</p>
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
