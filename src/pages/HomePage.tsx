
import HeaderCard from '../components/HeaderCard';
import BodyCard from '../components/BodyCard';
import { NavLink } from "react-router";
import '../App.css'

function HomePage() {
  

  return (
    <div className = "bg-slate-900 min-h-screen">
      
      <div className='shrink-0 space-x-4 flex flex-1 flex-row gap-1 justify-evenly bg-slate-800 text-stone-200 flex-auto container border border-zinc-300'>
        <HeaderCard title="Home"/>
        <nav> <NavLink to = "Proj1Home"><HeaderCard title="Project 1"/></NavLink></nav>
        <HeaderCard title="Project 2"/>
        <HeaderCard title="Project 3"/>
        <HeaderCard title="Project 4"/>
        <HeaderCard title="Project 5"/>
      </div>

      <div className='flex-grow '>
      <BodyCard text = "A little bit every day starts to add up over time. This is the idea behind this project, where every day, I have an idea for something to be implemented. Then, I see what needs to be done to implement this idea, and attempt to divide the workload into manageable segments every day."/>
      </div>
    </div>
  )
}

export default HomePage
