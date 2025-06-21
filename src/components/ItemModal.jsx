import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function ItemModal({ item, onClose }) {
  if (!item) return null;

  const images = [item.cover || item.img, ...(item.gallery || [])];
  const [sending, setSending] = useState(false);

  const handleEnquire = async () => {
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: `Product Enquiry: ${item.name}`,
          name: "Item Manager",
          email: "noreply@yourdomain.com",
          message: `Hello,

I'm interested in "${item.name}". 
Please send me more details.

Thank you!`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Enquiry sent successfully! 📧");
      onClose();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Sorry, could not send enquiry.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 cursor-pointer"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-[90%] max-w-md overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 pt-5">
          <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
          <button
            className="text-xl text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Carousel */}
        {images.length > 0 && (
          <div className="relative w-full h-60 px-5 pt-4">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay={false}
              renderArrowPrev={(onClickHandler) => (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10
                             bg-white/80 p-2 rounded-full shadow-md hover:bg-white cursor-pointer"
                >
                  <FaArrowLeft />
                </button>
              )}
              renderArrowNext={(onClickHandler) => (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10
                             bg-white/80 p-2 rounded-full shadow-md hover:bg-white cursor-pointer"
                >
                  <FaArrowRight />
                </button>
              )}
            >
              {images.map((src, idx) => (
                <div key={idx}>
                  <img
                    src={src}
                    alt={`Item ${idx + 1}`}
                    className="w-full h-60 object-cover rounded-xl"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}

        {/* Description */}
        <div className="px-5 pt-4 pb-2">
          {item.type && <p className="text-sm text-gray-500">{item.type}</p>}
          {item.description && (
            <p className="mt-1 text-base text-gray-700 whitespace-pre-line">
              {item.description}
            </p>
          )}
        </div>

        {/* Enquire Button */}
        <div className="px-5 pb-6 pt-2">
          <button
            onClick={handleEnquire}
            disabled={sending}
            className={`w-full py-2 rounded-lg text-base font-medium transition shadow ${
              sending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            }`}
          >
            {sending ? "Sending..." : "Enquire"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
