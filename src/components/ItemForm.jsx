import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useItemContext } from "../context/ItemContext";
import toast from "react-hot-toast";

function ItemForm() {
  const { addItem } = useItemContext();
  const navigate = useNavigate();

  /* ─────────────── form fields ─────────────── */
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  /* ── cover image (single) ── */
  const [coverImage, setCoverImage] = useState(null);
  const handleCoverImage = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(URL.createObjectURL(file));
  };

  /* ── additional images (0-5) ── */
  const [additionalImages, setAdditionalImages] = useState([]);
  const addInputRef = useRef(null);

  const handleAdditionalImages = (e) => {
    const files = Array.from(e.target.files);
    const slotsLeft = 5 - additionalImages.length;
    const usableFiles = files.slice(0, slotsLeft);

    setAdditionalImages((prev) => [
      ...prev,
      ...usableFiles.map((file) => URL.createObjectURL(file)),
    ]);

    e.target.value = ""; // allow re-selecting same file
  };

  const openAdditionalPicker = () => {
    if (additionalImages.length < 5) addInputRef.current?.click();
  };

  /* ─────────────── submit ─────────────── */
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate fields
    if (!name || !type || !description || !coverImage) {
      toast.error("Please fill every field 🙏");
      return;
    }

    // add item to global context
    addItem({
      id: crypto.randomUUID(),
      name,
      type,
      description,
      cover: coverImage,
      gallery: additionalImages,
    });

    toast.success("Item successfully added! 🎉");
    navigate("/"); // back to item list
  };

  /* ─────────────── UI ─────────────── */
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Item</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* name */}
        <div>
          <label className="block text-sm font-medium mb-1">Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Gray T-Shirt"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* type */}
        <div>
          <label className="block text-sm font-medium mb-1">Item Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="e.g., Shirt, Pant, Shoes"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Item Description
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a brief description..."
            className="w-full p-2 border rounded-md resize-none"
            required
          />
        </div>

        {/* cover image */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Item Cover Image
          </label>
          <label className="cursor-pointer w-1/2 h-40 bg-gray-100 border border-dashed border-gray-400 rounded-md flex items-center justify-center overflow-hidden relative group">
            {coverImage ? (
              <img
                src={coverImage}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-600 z-10">📁 Upload Cover</span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImage}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </label>
        </div>

        {/* gallery */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Item Additional Images
          </label>
          <div className="border border-dashed border-gray-400 rounded-md p-4 min-h-40">
            <div className="flex flex-wrap gap-3">
              {additionalImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`extra-${i}`}
                  className="w-20 h-20 object-cover rounded-md"
                />
              ))}

              {additionalImages.length < 5 && (
                <button
                  type="button"
                  onClick={openAdditionalPicker}
                  className="w-20 h-20 flex items-center justify-center border-2 border-gray-400 border-dashed rounded-md hover:bg-gray-100 text-2xl text-gray-600"
                >
                  +
                </button>
              )}
            </div>

            {/* hidden real input */}
            <input
              ref={addInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleAdditionalImages}
              className="hidden"
            />
          </div>
        </div>

        {/* submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow cursor-pointer"
          >
            Add Item
          </button>
        </div>

        <Link to="/" className="block text-center text-blue-600">
          View Items
        </Link>
      </form>
    </div>
  );
}

export default ItemForm;
