import { FC, useState } from "react";
import { typedMemo } from "../../helpers/typedMemo";
import Spinner from "../Spinner/Spinner";
import styles from "./Image.module.scss";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: FC<ImageProps> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.image_container}>
      {isLoading && <Spinner />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          display: isLoading ? "none" : "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default typedMemo(Image);
