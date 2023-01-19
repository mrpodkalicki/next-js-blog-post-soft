import Image from "next/image";
import { PostType } from "@/components/post/post.type";

const PostComponent = (props: PostType) => {
  const { title, description, imageSrc, imageAlt } = props;

  return (
    <div className={"container rounded-md p-2 drop-shadow-xl flex flex-col"}>
      <div className={"w-full h-30"}>
        <Image src={imageSrc} alt={imageAlt} fill />
      </div>
      <div className={"w-full h-30"}>
        <p className={"text-xl break-all"}>{title}</p>
      </div>
      <div className={"w-full h-30"}>
        <p className={"text-md break-all"}>{description}</p>
      </div>
    </div>
  );
};

export default PostComponent;
