import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import ModalTweet from "./ModalTweet";
import { useState } from "react";

const Tweet = ({ tweet }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [retweet, setRetweet] = useState(0);
  const [like, setLike] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedTweet, setSelectedTweet] = useState(null);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };

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
    <div key={tweet.id} className="flex flex-col">
      <ModalTweet
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedTweet(null);
        }}
        tweet={selectedTweet}
      />
      <div className="flex">
        <img
          src={tweet.author.profilePicture}
          className="w-11 h-11 rounded-full cursor-pointer"
          alt=""
        />
        <p className="mt-2 ml-2 text-sm cursor-pointer">
          {tweet.author.firstName}
        </p>
        <p className="mt-2 ml-2 text-gray-400 text-sm cursor-pointer">
          @{tweet.author.username}
        </p>
        <p className="mt-2 ml-2 text-gray-400 text-sm">
          {formatDate(tweet.createdAt)}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="mt-3 ml-[52px] mr-20">{tweet.content}</p>

        {tweet.images && (
          <img
            src={tweet.images[0]}
            className="w-4/5 h-56 object-cover ml-[52px] rounded-xl mt-5 2xl:h-[400px]"
            alt=""
          />
        )}
      </div>
      <div className="flex mt-2 ml-[52px] text-gray-400 gap-7 mb-3">
        <button onClick={() => openModal(tweet)}>
          <FontAwesomeIcon
            icon={faMessage}
            className="hover:text-blue-400 mt-[7px]"
          />
        </button>
        <p>{tweet.comments.length}</p>
        <button
          onClick={() => {
            giveRetweet();

            fetch("https://example.com/api/retweet", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tweetId: "12345",
                userId: "67890",
              }),
            }).catch((error) => {
              console.error("Error sending retweet request:", error);
            });
          }}
        >
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
        <button
          onClick={() => {
            giveLike();

            fetch("https://example.com/api/like", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tweetId: "12345",
                userId: "67890",
              }),
            }).catch((error) => {
              console.error("Error sending retweet request:", error);
            });
          }}
        >
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
  );
};

export default Tweet;
