import { useGetCatsCategoriesQuery } from "../../api/catsApi";
import Sidebar from "./Sidebar";

const SidebarContainer = () => {
  const { data } = useGetCatsCategoriesQuery(null);

  return <Sidebar data={data} />;
};

export default SidebarContainer;
