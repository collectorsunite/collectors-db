import MusicPage from "./animalPages/MusicPage";
import { useParams } from "react-router";
import FishPage from "./animalPages/FishPage";
import SeaPage from "./animalPages/SeaPage";
import BugPage from "./animalPages/BugPage";
import FossilPage from "./animalPages/FossilPage";
import VillagerPage from "./animalPages/VillagerPage";
import ArtPage from "./animalPages/ArtPage";
import HousewarePage from "./animalPages/HousewarePage";
import WallmountPage from "./animalPages/WallMountPage";
import MiscPage from "./animalPages/MiscPage";

function AnimalNav(props) {
  let { id } = useParams();

  console.log(id);

  switch (id) {
    case "music":
      return <MusicPage />;
    case "fish":
      return <FishPage />;
    case "sea":
      return <SeaPage />;
    case "bugs":
      return <BugPage />;
    case "fossils":
      return <FossilPage />;
    case "villagers":
      return <VillagerPage />;
    case "art":
      return <ArtPage />;
    case "items-houseware":
      return <HousewarePage />;
    case "items-wallmounted":
      return <WallmountPage />;
    case "items-misc":
      return <MiscPage />;
    default:
      return "";
  }
}

export default AnimalNav;
