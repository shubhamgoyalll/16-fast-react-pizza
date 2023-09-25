import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  //useLoaderData is a hook provided by React Router
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//We call these functions loader only and create it in the file we want the data
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
