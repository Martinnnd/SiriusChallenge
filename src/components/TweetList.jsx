import Tweet from "./Tweet";

export default function TweetList({ tweets }) {


  return (<div className="flex flex-col mt-5 ml-5 gap-10">
      {tweets.map((item) => (
        <Tweet tweet={item} key={item.id}/>
      ))}
    </div>
  );
}