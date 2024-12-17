import { DragEventHandler } from "react";
import { useState, useRef, useEffect } from "react";
type Props = {
  cardIndex: number;
  ref?: React.Ref<HTMLDivElement>[] | undefined;
  name: string;
  image?: string;
  onDrag?: Function;
};
export default function ImageCard({ cardIndex, name, image }: Props) {

  const divRef = useRef<HTMLDivElement>(null);
  const initialX = (cardIndex! * 300);
  const initialY = 211;
  const [position, setPosition] = useState<number[]>([initialX, initialY]);
  const [offset, setOffset] = useState<number[]>([0,0]);

  useEffect(() => {
    // This function will run only once when the component mounts

    if (divRef.current !== null) {
      const boundingBox = divRef.current.getBoundingClientRect();




      
      setPosition([boundingBox.left, boundingBox.top]);

  
    }
  }, []);

  useEffect(() => {
    console.log(position);
  }, [position]);
  
  const handleDragStart: DragEventHandler<HTMLDivElement> = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    
    setOffset([e.nativeEvent.offsetX, e.nativeEvent.offsetY + 84]);
  };

  const handleDragEnd: DragEventHandler<HTMLDivElement> = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    
    const newX = e.clientX;
    const newY = e.clientY;
    console.log(newX, newY);
    setPosition([newX - offset[0], newY - offset[1]]);
  };


  return (
    <div
      ref={divRef}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="bg-emerald-500 pt-9"
      draggable="true"
      style = {{
        position: 'absolute',
        left: `${position[0]}px`,
        top: `${position[1]}px`
      }}
    >
      <figure>
        <img
          src={image}
          alt="An image of the character"
          className="size-60"
        ></img>
      </figure>

      <h1 className="font-bold text-xl text-white my-2 bg-emerald-700 p-1">
        {name}
      </h1>
    </div>
  );
}
