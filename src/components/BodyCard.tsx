
type Props = {text: string};
export default function BodyCard( { text } : Props) {
  return (
    <div className="font-semibold text-4xl flex justify-center items-center text-stone-200 p-5 mt-80 border border-amber-200">
      {text}
    </div>
  )
}
