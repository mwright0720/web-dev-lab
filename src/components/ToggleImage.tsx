import { useState } from "react"
type Props = {image: string}
export default function ToggleImage( { image } : Props) {
  
    const handleClick = () => {
        setToggle(!toggle);
    }
    const [toggle, setToggle] = useState<boolean>(true);

   
    return (
    <div>
      <figure>
        <img onClick = {handleClick} className = "size-32" alt="Croque" src= {image} style={{opacity: toggle? 1: 0.35}}></img>
      </figure>
    </div>
  ) 

}
