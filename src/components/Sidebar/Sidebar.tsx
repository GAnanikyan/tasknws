import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { typedMemo } from "../../helpers/typedMemo";
import { setCurrentCategory } from "../../redux/reducers/categoryReducer";
import { setCurrentPageStart } from "../../redux/reducers/pageReducer";
import { setCurrentPageEmpty } from "../../redux/reducers/paginationReducer";
import { CategoriesResponseModel } from "../../types/Categories";
import { PrimaryKey } from "../../types/PrimaryKey";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {
  data: CategoriesResponseModel | undefined;
}

const Sidebar: FC<SidebarProps> = ({ data }) => {
  const currentCategory = useSelector(
    (state: RootState) => state.categoryReducer.currentCategory
  );

  const dispatch = useDispatch();

  const handleSetCurrentCategory = useCallback(
    (id: PrimaryKey) => {
      dispatch(setCurrentPageEmpty());
      dispatch(setCurrentCategory(id));
      dispatch(setCurrentPageStart());
    },
    [dispatch]
  );

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebar_menu}>
        {data?.map((d) => (
          <li
            key={d.id}
            className={currentCategory === d.id ? styles.sidebar_active : ""}
            onClick={() =>
              currentCategory !== d.id && handleSetCurrentCategory(d.id)
            }
          >
            {d.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default typedMemo(Sidebar);
