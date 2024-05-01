import Link from "next/link";

const ListItems = ({ title, shortDesc, slug }) => {
  return (
    <Link href={`/list/${slug}`} className="border p-2 w-1/2">
      <h2>Title : {title}</h2>
      {shortDesc && <p>Description: {shortDesc.slice(0, 150)}</p>}
    </Link>
  );
};

export default ListItems;
