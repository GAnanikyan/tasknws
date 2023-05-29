import { FC } from "react";
import { typedMemo } from "../../helpers/typedMemo";
import { CatsResponseModel } from "../../types/Cat";
import Cat from "../Cat/Cat";
import Spinner from "../Spinner/Spinner";
import styles from "./Cats.module.scss";

interface CatsProps {
  isLoading: boolean;
  data: CatsResponseModel | undefined;
}

const Cats: FC<CatsProps> = ({ isLoading, data }) => {
  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.cats}>
      {data?.map((e) => (
        <Cat src={e.url} alt={e.id} key={e.id} />
      ))}
    </div>
  );
};

export default typedMemo(Cats);
