import { NavLink } from "react-router";
import ImageCard from "../components/ImageCard";

export default function Proj1Home() {
  
  
  
  return (
    <div className="bg-indigo-400 h-screen flex flex-col">

      <nav className="bg-slate-600"> <NavLink to = "/">Home Page</NavLink> </nav>

      <div className="flex justify-center items-center text-6xl font-bold">Drag the characters</div>
      <div className="flex gap-28 justify-center items-center  min-h-screen relative">
      
      <ImageCard cardIndex = {1} name="Kurumi Tokisaki" image="../src/assets/kurumi.png"/>
      <ImageCard cardIndex = {2} name="Tohka Yatogami" image="../src/assets/tohka.png"/>
      <ImageCard cardIndex = {3} name="Nia Honjo" image="../src/assets/nia.png"/>

      </div>

    </div>
  )
}
