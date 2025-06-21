import { createContext, useContext, useEffect, useState } from "react";

const ItemContext = createContext();
export const useItemContext = () => useContext(ItemContext);

export function ItemProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => setItems((prev) => [...prev, item]);

  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItemContext.Provider>
  );
}
