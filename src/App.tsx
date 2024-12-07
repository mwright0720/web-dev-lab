
import HeaderCard from './components/HeaderCard'
import './App.css'

function App() {
  

  return (
      <div className='shrink-0 space-x-4 flex flex-1 flex-row gap-1 justify-evenly bg-slate-800 text-stone-200 flex-auto container border border-zinc-300'>
      <HeaderCard title="Home"/>
      <HeaderCard title="Project 1"/>
      <HeaderCard title="Project 2"/>
      <HeaderCard title="Project 3"/>
      <HeaderCard title="Project 4"/>
      <HeaderCard title="Project 5"/>

      </div>
      
  )
}

export default App
