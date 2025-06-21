import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";

function ViewItems() {
  return (
    <div className="bg-[#F8F8F8] h-[100vh]   ">
      <div className="flex justify-end p-4">
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-2 rounded-md shadow"
        >
          Add Item
        </Link>
      </div>
      <ItemList />
    </div>
  );
}

export default ViewItems;
