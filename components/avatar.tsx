import Image from "next/image";

export default function Avatar({ author }) {
  const name = author?.node.name;
  const avatarUrl = author?.node.avatar?.url;

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">{avatarUrl ? <Image src={avatarUrl} fill className="rounded-full" alt={name} /> : <p>noImage</p>}</div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}

{
  /* <Image src={author.node.avatar.url} layout="fill" className="rounded-full" alt="name" /> */
}
