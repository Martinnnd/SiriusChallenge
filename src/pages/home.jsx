import Menu from "../components/Menu";
import Feed from "../components/Feed";
import Users from "../components/Users";

function Home() {
  return (
    <>
      <div className="flex justify-between h-screen">
        <Menu />
        <Feed />
        <Users />
      </div>
    </>
  );
}

export default Home;
