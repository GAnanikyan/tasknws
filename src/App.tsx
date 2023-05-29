import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.scss";
import { useGetCatsQuery } from "./api/catsApi";
import { RootState } from "./app/store";
import CatsContainer from "./components/Cats/CatsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import { addCurrentPage } from "./redux/reducers/pageReducer";

function App() {
  const dispatch = useDispatch();

  const currentCategory = useSelector(
    (state: RootState) => state.categoryReducer.currentCategory
  );

  const currentPage = useSelector(
    (state: RootState) => state.pageReducer.currentPage
  );

  const onButtonClick = useCallback(
    () => dispatch(addCurrentPage()),
    [dispatch]
  );

  const { data, isLoading } = useGetCatsQuery({
    limit: 10,
    page: currentPage,
    categoryId: currentCategory,
  });

  return (
    <div className={styles.App}>
      <SidebarContainer />
      <CatsContainer data={data} isLoading={isLoading} />
      <button className={styles.button} type="button" onClick={onButtonClick}>
        Add More
      </button>
    </div>
  );
}

export default App;
