import { useState, useEffect } from "react";
import Button from "./Button";

export default function Users() {
  const [tweets, setTweets] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

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
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const filteredTweets = tweets.filter((item) => {
    const fullName =
      `${item.author.firstName} ${item.author.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="hidden sm:w-1/4 sm:flex sm:flex-col">
      <input
        type="text"
        placeholder="Buscar usuario"
        className="bg-gray-100 rounded-2xl mt-5 ml-3 w-4/5 p-2 text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Actualizar el estado de la búsqueda
      />

      <div className="flex flex-col bg-gray-100 rounded-lg mt-5 ml-3 p-2 w-4/5">
        <p className="font-bold mt-2 ml-2">Who to follow</p>

        {filteredTweets.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="flex justify-between">
            <div className="flex mt-5 ml-2 text-sm">
              <img
                src={item.author.profilePicture}
                className="w-11 h-11 rounded-full"
                alt="profilePicture"
              />
              <div className="flex flex-col ml-2">
                <p>
                  {item.author.firstName} {item.author.lastName}
                </p>
                <p className="text-gray-400">@{item.author.username}</p>
              </div>
            </div>

            <Button
              variant="black"
              size="sm"
              text="Follow"
              onClick={() => {
                fetch("https://example.com/api/follow", {
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
        ))}

        {visibleCount < filteredTweets.length && (
          <button
            onClick={showMore}
            className="text-sm text-blue-500 mr-44 mt-5 mb-3"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}
