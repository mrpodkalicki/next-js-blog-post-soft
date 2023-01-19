import Image from "next/image";

interface PostProps {
  tile: string;
  description: string;
  categories: string[];
  imageSrc: string;
  imageAlt: string;
  link: string;
}

export const Post = (props: PostProps) => {
  const { tile, description, imageSrc, imageAlt } = props;

  return (
    <div
      className={
        "container rounded-md p-2 drop-shadow-xl flex flex-column w-40"
      }
    >
      <div>
        <Image src={imageSrc} alt={imageAlt} />
      </div>
      <p className={"text-xl break-all"}>{tile}</p>
      <p className={"text-md break-all"}>{description}</p>
    </div>
  );
};
