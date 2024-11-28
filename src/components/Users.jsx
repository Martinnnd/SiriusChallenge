import tweets from "../data/tweets.json";

export default function Users() {
  return (
    <div className="w-1/4">
      <input
        type="text"
        placeholder="input"
        className="bg-gray-100 rounded-2xl mt-5 ml-3 w-4/5 p-2 text-sm"
      />
      <div className="flex flex-col bg-gray-100 rounded-lg mt-5 ml-3 p-2 w-4/5">
        <p className="font-bold mt-2 ml-2">Who to follow</p>
        {tweets.slice(0, 5).map((item) => (
          <div key={item.id} className="flex justify-between">
            <div className="flex mt-5 ml-2 text-sm">
            <img src={item.author.profilePicture} className="w-11 h-11 rounded-full" alt="profilePicture" />
            <div className="flex flex-col ml-2">
              <p>{item.author.firstName} {item.author.lastName}</p>
              <p className="text-gray-400">@{item.author.username}</p>
            </div>
            </div>

            <button className="bg-black rounded-2xl text-white h-8 w-16 mt-7 text-sm font-bold">
              Button
            </button>
          </div>
        ))}
        <p className="text-sm text-blue-500 ml-2 mt-5 mb-3">Show more</p>
      </div>
    </div>
  );
}
