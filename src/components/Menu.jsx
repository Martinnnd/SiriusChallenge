import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";

export default function Menu() {
  return (
    <nav className="sm:flex flex-col hidden sm:w-1/4">
      <div className="mt-4 ml-20">
        <a href="">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
        </a>
      </div>
      <div className="flex gap-3 mt-6 ml-20">
        <FontAwesomeIcon icon={faHouse} className="mt-1" />
        <a href="">
          <p className="font-bold">Home</p>
        </a>
      </div>
      <div className="flex gap-3 mt-6 ml-20">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mt-1" />
        <a href="">
          <p className="transition hover:font-bold hover:transition ml-1">
            Explore
          </p>
        </a>
      </div>
      <div className="flex gap-3 mt-6 ml-20">
        <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
        <a href="">
          <p className="transition hover:font-bold hover:transition ml-1">
            Message
          </p>
        </a>
      </div>
      <div className="flex gap-3 mt-6 ml-20">
        <FontAwesomeIcon icon={faUser} className="mt-1" />
        <a href="">
          <p className="ml-1 transition hover:font-bold hover:transition">
            Profile
          </p>
        </a>
      </div>
      <div>
        <Button
          variant="main"
          size="md"
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
    </nav>
  );
}
