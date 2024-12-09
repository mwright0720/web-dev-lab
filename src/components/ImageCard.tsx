type Props = { name: string; image?: string };
export default function ImageCard({ name, image }: Props) {
  return (
    <div className="bg-emerald-500 pt-9">

        <figure>
            <img src = {image} alt="An image of the character" className="size-60"></img>

        </figure>

        <h1 className="font-bold text-xl text-white my-2 bg-emerald-700 p-1">{name}</h1>


    </div>
  );
}
