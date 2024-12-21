type Props = {image: string, role: string, toggle: boolean, onClick: () => void}
export default function ToggleImage( { image, role, toggle, onClick} : Props) {
  
    
    return (
    <div>
      <figure>
        <img onClick = {onClick} className = "size-32" alt="Image of character" src= {image} style={{opacity: toggle? 1: 0.35}}></img>
      </figure>
    </div>
  ) 

}
