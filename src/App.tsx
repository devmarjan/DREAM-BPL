import Banner from "./component/banner"
import Nav from "./component/nav"
import Players from "./component/players/players";
import type { Jersy } from "./types/player";

const PLayersData = async ( ):Promise<Jersy[]> => {
  const res = await fetch("/player.json")
  const data = await res.json();
  return data;
}


const App = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Players PlayersData={PLayersData()}/>
    </div>
  )
}

export default App


