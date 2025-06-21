import { useState } from "react";
import { useItemContext } from "../context/ItemContext";
import ItemModal from "../components/ItemModal";
import { FaTrash } from "react-icons/fa"; 
import toast from "react-hot-toast";
import bag from "../assets/bag.avif";
import whiteTshirt from "../assets/white.avif";
import bgGreenTshirt from "../assets/bg-green.avif";
import pinkPurse from "../assets/pink.jpeg";
import blackPurse from "../assets/blackPurse.avif";

function ItemList() {
  const { items, removeItem } = useItemContext();
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const staticItems = [
    {
      id: "static-1",
      name: "Special Offer",
      cover: whiteTshirt,
      type: "Limited Edition",
      description: "Limited time discount on our best-selling item!",
      gallery: [bgGreenTshirt, bag, pinkPurse, blackPurse],
      isStatic: true,
    },
  ];

  const allItems = [...staticItems, ...items];

  const handleDelete = (e, id, name) => {
    e.stopPropagation();
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );
    if (confirmDelete) {
      removeItem(id);
      toast.success("Item removed successfully.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allItems.map((item) => (
          <div
            key={item.id || item.name}
            onClick={() => {
              setActiveItem(item);
              setOpen(true);
            }}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg cursor-pointer relative"
          >
            {/* Delete Button (only for non-static items) */}
            {!item.isStatic && (
              <button
                onClick={(e) => handleDelete(e, item.id, item.name)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full z-10"
                title="Delete Item"
              >
                <FaTrash size={14} />
              </button>
            )}

            <img
              src={item.cover || item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-2 text-lg font-medium text-gray-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {open && <ItemModal item={activeItem} onClose={() => setOpen(false)} />}
    </div>
  );
}

export default ItemList;
