import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { typedMemo } from "../../helpers/typedMemo";
import { setCurrentPage } from "../../redux/reducers/paginationReducer";
import { CatsResponseModel } from "../../types/Cat";
import Cats from "./Cats";

interface CatsContainerProps {
  data: CatsResponseModel | undefined;
  isLoading: boolean;
}

const CatsContainer: FC<CatsContainerProps> = ({ data, isLoading }) => {
  const currentData = useSelector(
    (state: RootState) => state.dataReducer.currentPage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    data && dispatch(setCurrentPage(data));
  }, [data, dispatch]);

  return (
    <>
      <Cats data={currentData} isLoading={isLoading} />
    </>
  );
};

export default typedMemo(CatsContainer);
