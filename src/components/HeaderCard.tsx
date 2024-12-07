type Props = {title: string, link?: string};

export default function HeaderCard( {title} : Props) {
  return (
    <div className="shadow border border-red-200 p-2 font-bold grow">
      {title}
    </div>
  )
}
