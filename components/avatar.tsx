import Image from "next/image";

export default function Avatar({ author }) {
  const name = author?.node.name;

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">{author?.node.avatar.url ? <Image src={author?.node.avatar.url} fill priority="high" className="rounded-full" alt={name} /> : <p>noImage</p>}</div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}

{
  /* <Image src={author.node.avatar.url} layout="fill" className="rounded-full" alt="name" /> */
}
