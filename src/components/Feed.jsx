import { useState, useEffect, useRef } from "react";
import React from "react";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import twicon from "../assets/icons8-twitter.svg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TweetList from "./TweetList";

export default function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("/src/data/tweets.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON");
        }
        return response.json();
      })
      .then((data) => {
        setTweets(data);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    tweets.length && (
      <div className="flex flex-col w-full sm:w-2/4 border-l border-r border-gray-100 overflow-y-scroll scrollbar-hide">
        <div
          key={tweets[0].id}
          className="sm:hidden absolute top-3 left-6 cursor-pointer"
        >
          <img
            src={tweets[0].author.profilePicture}
            className="w-8 h-8 rounded-full"
            alt=""
          />
        </div>
        <h5 className="hidden sm:flex sm:ml-3 sm:mt-3 sm:font-bold">Home</h5>
        <div className="mt-4 ml-36 sm:hidden">
          <img src={twicon} alt="" />
        </div>
        <div className="flex justify-around mt-5 border-b border-gray-100">
          <div className="text-sm border-b-2 border-blue-400 h-9">
            <a href="">For you</a>
          </div>
          <div className="text-sm text-gray-500 h-9">
            <a href="">Following</a>
          </div>
        </div>
        <div className="hidden sm:flex sm:mt-8 sm:ml-5">
          <img
            key={tweets[0].id}
            src={tweets[0].author.profilePicture}
            className="w-11 h-11 rounded-full"
            alt=""
          />
          <input
            type="text"
            placeholder="What's happening"
            value={inputValue}
            onChange={handleInputChange}
            className="bg-white rounded-2xl mt-0 ml-3 w-4/5 p-2 text-sm"
          />
        </div>
        <div className="hidden sm:flex sm:justify-between sm:border-b sm:border-gray-100">
          <div>
            <FontAwesomeIcon
              icon={faImages}
              className="mt-10 ml-5 text-blue-500 cursor-pointer"
              onClick={handleIconClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={() => {}}
            />
          </div>
          <Button
            variant={inputValue.trim() === "" ? "light" : "main"}
            size="sm"
            text="Tweet"
            onClick={() => {
              fetch("https://example.com/api/tweet", {
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
          />
        </div>
        <div className="sm:hidden fixed top-[80%] left-[80%] w-12 h-12 rounded-full bg-blue-400">
          <FontAwesomeIcon
            icon={faPlus}
            className="fixed top-[400px] left-[273px] text-white"
          />
        </div>
        <div className="border-l border-r border-b border-gray-100">
          <TweetList tweets={tweets} />
        </div>
      </div>
    )
  );
}
