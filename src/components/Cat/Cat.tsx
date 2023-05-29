import { FC } from "react";
import { typedMemo } from "../../helpers/typedMemo";
import Image from "../Image/Image";

interface CatProps {
  alt: string;
  src: string;
}

const Cat: FC<CatProps> = ({ alt, src }) => {
  return (
    <div>
      <Image alt={alt} src={src} />
    </div>
  );
};

export default typedMemo(Cat);
