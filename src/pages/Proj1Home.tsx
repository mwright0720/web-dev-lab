import { NavLink } from "react-router";
import ImageCard from "../components/ImageCard";

export default function Proj1Home() {
  return (
    <div>
      <nav> <NavLink to = "/">Home Page</NavLink> </nav>
      <div className="flex gap-3 justify-evenly">
      <ImageCard name="Kurumi Tokisaki" image="../src/assets/kurumi.png"/>
      <ImageCard name="Tohka Yatogami" image="../src/assets/tohka.png"/>
      <ImageCard name="Nia Honjo" image="../src/assets/nia.png"/>
      </div>

    </div>
  )
}
