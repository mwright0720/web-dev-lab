import { NavLink } from "react-router";
import ToggleImage from "../components/ToggleImage";
import { useState } from "react";
import * as doll from "../utils/GFLPNCData.tsx"

export default function Proj2Home() {
  type Doll = {id: number, image: string, role: string, active: boolean}
  const [toggledState, setToggledState] = useState<Doll[]>([doll.croque, doll.souchun, doll.millau]);

  const handleToggle = (id: number) => {
    setToggledState(prevState => prevState.map (
      character => character.id === id ? {...character, active: !character.active} : character
    ))

  }
  const guardContent = [
    doll.croque,
    doll.souchun,
    doll.millau,
  ];


   const guardItems = guardContent.map((character) => (
      <td className="p-3" key={character.id}>
        <ToggleImage
          image={character.image}
          role={character.role}
          toggle={toggledState.find((doll) => doll.id === character.id)?.active || false}
          onClick={() => handleToggle(character.id)}
        />
      </td>
    ));

  return (
    <div className="flex flex-col h-screen bg-red-100 gap-14">
      <nav className="bg-slate-500">
        <NavLink to="/">Home Page</NavLink>
      </nav>

      <h1 className="text-6xl text-center">Click the characters</h1>
      <table
        id="container"
        className="border border-red-600 table-auto border-separate"
      >
        <tr id="guard" className="flex border border-blue-200 bg-zinc-600">
          <th scope="row" className="text-3xl">
            Guard
          </th>

          {guardItems}
        </tr>

        <tr id="medic" className="flex border border-blue-200 bg-zinc-600">
          <th scope="row" className="text-3xl">
            Medic
          </th>

          <td className="p-3">Medic content</td>
          <td className="p-3">Medic content</td>
        </tr>

        <tr id="sniper" className="flex border border-blue-200 bg-zinc-600">
          <th scope="row" className="text-3xl">
            Sniper
          </th>

          <td className="p-3">Sniper content</td>
          <td className="p-3">Sniper content</td>
        </tr>

        <tr id="specialist" className="flex border border-blue-200 bg-zinc-600">
          <th scope="row" className="text-3xl">
            Specialist
          </th>

          <td className="p-3">Specialist content</td>
          <td className="p-3">Specialist content</td>
        </tr>

        <tr id="warrior" className="flex border border-blue-200 bg-zinc-600">
          <th scope="row" className="text-3xl">
            Warrior
          </th>

          <td className="p-3">Warrior content</td>
          <td className="p-3">Warrior content</td>
        </tr>
      </table>

      <p className="text-5xl text-center">You have</p>
      <div className="flex border gap-2 p-2 border-red-800 bg-zinc-800">
        <div>Team member 1</div>
        <div>Team member 2</div>
        <div>Team member 3</div>
        <div>Team member 4</div>
        <div>Team member 5</div>
      </div>
    </div>
  );
}
