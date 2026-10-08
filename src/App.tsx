import { Suspense } from "react";
import Banner from "./component/banner";
import Nav from "./component/nav";
import type { Jersy } from "./types/player";
import Players from "./component/players/players";

const Playersinfo = async (): Promise<Jersy[]> => {
  const res = await fetch("/player.json");
  const data = await res.json();
  return data;
};

const App = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Suspense fallback={<div>LOADING........</div>}>
        <Players Playersinfo={Playersinfo()} />
      </Suspense>
    </div>
  );
};

export default App;
