import { DragEventHandler } from "react";
type Props = { name: string; image?: string, onDrag?: Function};
export default function ImageCard({ name, image }: Props) {
  
  const handleDragStart = () =>  {
    console.log("Dragging has been started");

  }

  const handleDragEnd = (e: DragEventHandler<HTMLDivElement>) => {
    console.log("Dragging completed");
    let horizontalPosition = e.pageX;
    let verticalPosition = e.pageY;

    e.target.style.position = 'absolute';
    e.target.style.left = horizontalPosition + 'px';
    e.target.style.top = verticalPosition + 'px';
  }

  return (
    <div onDragStart = {handleDragStart} onDragEnd = {handleDragEnd} className="bg-emerald-500 pt-9" draggable="true">

        <figure>
            <img src = {image} alt="An image of the character" className="size-60"></img>

        </figure>

        <h1 className="font-bold text-xl text-white my-2 bg-emerald-700 p-1">{name}</h1>


    </div>
  );
}
