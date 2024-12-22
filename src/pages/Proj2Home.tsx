import { NavLink } from "react-router";
import ToggleImage from "../components/ToggleImage";
import { useState } from "react";
import * as doll from "../utils/GFLPNCData.tsx";

export default function Proj2Home() {
  type Doll = { id: number; 
    image: string; 
    role: 'guard' | 'medic' | 'sniper' | 'specialist' | 'warrior' | string; 
    active: boolean };
  const [toggledState, setToggledState] = useState<Doll[]>([
    doll.croque,
    doll.souchun,
    doll.millau,
  ]);

  const [roleCounts, setRoleCounts] = useState<{[key: string]: number}>({
    guard: 0,
    medic: 0,
    sniper: 0,
    specialist: 0,
    warrior: 0,
  });
  const handleToggle = (id: number) => {
    setToggledState((prevState) =>
      prevState.map((character) =>
        character.id === id
          ? { ...character, active: !character.active }
          : character
      )
    );
    let role = toggledState[id].role;
    let active = toggledState[id].active;

    if (active) {
    setRoleCounts({...roleCounts, [role]: roleCounts[role] - 1}) 
  }
    else if (!active) {
      setRoleCounts({...roleCounts, [role]: roleCounts[role] + 1})
    }

  };

  const guardContent = [doll.croque, doll.souchun, doll.millau];

  const guardItems = guardContent.map((character) => (
    <td className="p-3" key={character.id}>
      <ToggleImage
        image={character.image}
        role={character.role}
        toggle={
          toggledState.find((doll) => doll.id === character.id)?.active || false
        }
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

      <p className="text-5xl text-center">You have {roleCounts.guard} guards, {roleCounts.medic} medics, {roleCounts.sniper} snipers, 
        {roleCounts.specialist} specialists, {roleCounts.warrior} warriors.
      </p>
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
