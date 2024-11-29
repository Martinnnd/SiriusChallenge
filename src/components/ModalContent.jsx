import { faX } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

export default function ModalContent({ show, onClose, tweet }) {
  if (!tweet) {
    return null;
  }

  return (
    <>
      <Modal show={show} onClose={onClose}>
        <div className="flex flex-col bg-white w-2/5 h-[55%] rounded-2xl mb-36 mr-10">
          <FontAwesomeIcon icon={faX} className="mr-[470px] mt-8 2xl:mr-[645px]"/>
          <div className="mt-5 2xl:mt-10">
            <div className="flex ml-4 2xl:ml-10">
              <img
                src={tweet.author.profilePicture}
                className="w-11 h-11 rounded-full"
                alt=""
              />
              <p className="mt-2 ml-2 text-sm">{tweet.author.firstName}</p>
              <p className="mt-2 ml-2 text-gray-400 text-sm">
                @{tweet.author.username}
              </p>
              <p className="mt-2 ml-2 text-gray-400 text-sm">
                {tweet.createdAt}
              </p>
            </div>
            <p className="mt-2 ml-[68px] mr-10 2xl:ml-[92px] 2xl:mt-6 2xl:mr-20">{tweet.content}</p>
          </div>
          <div className="flex mt-12 ml-4 2xl:mt-40 2xl:ml-10">
          <img
                src={tweet.author.profilePicture}
                className="w-11 h-11 rounded-full"
                alt=""
              />
              <p className="text-lg text-gray-500 mt-2 ml-2">Tweet your reply</p>
          </div>
          <div className="flex justify-around gap-[350px] 2xl:gap-[550px]">
          <FontAwesomeIcon icon={faImages} className="mt-10 ml-12 text-blue-500"/>
          <Button variant='light' size='sm' text='Tweet' onClick={""}/>
          </div>
        </div>
      </Modal>
    </>
  );
}
