# 🧾 Item Manager – Internship Assignment for AMRR TechSols

This is a React-based web application created for the internship assignment provided by **AMRR TechSols Pvt Ltd**.

It includes:
- A form to add new items
- A page to view all items (including newly added ones)
- A modal with full item details and an image carousel
- An **Enquire** button that sends an email to a static email address via **EmailJS**

---

## ✨ Features

✅ Add new item with:
- Name  
- Type (Shirt, Pant, Shoes, etc.)  
- Description  
- Cover image  
- Additional images

✅ View all items (static + dynamic)  
✅ View full item details in a **modal with carousel**  
✅ Click **Enquire** to send an email (via **EmailJS**)  
✅ Toast notifications for feedback  
✅ Clean responsive UI

---

## 📂 Folder Structure

/src
/components
- ItemForm.jsx
- ItemList.jsx
- ItemModal.jsx
/context
- ItemContext.jsx
/pages
- AddItems.jsx
- ViewItems.jsx
App.jsx
.env.example

yaml
Copy
Edit

---

## 💻 How to Run the Project

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/Rajiya-sultana/Item-Manager.git
cd Item-Manager
2️⃣ Install dependencies:
bash
Copy
Edit
npm install
3️⃣ Setup EmailJS credentials
Create a .env file in the root and paste the following:

env
Copy
Edit
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
If you'd like to test the email feature live, replace the values above with your actual EmailJS credentials.

4️⃣ Start the development server:
bash
Copy
Edit
npm run dev
📧 Enquiry Email (Bonus Feature ✅)
When a user clicks the "Enquire" button inside the item modal:

An email is sent to a static email address via EmailJS

The email contains the item title and message

A success/failure toast is shown after sending

You can configure the static recipient inside your EmailJS template.

🎥 Optional Demo Video
(Include a link to your Loom / Google Drive video here if you recorded one)
Example: Watch Demo Video

🙋‍♀️ About Me
I'm Rajiya Sultana, passionate about frontend development and React.
This project demonstrates my understanding of:

State management with context

Working with modals and forms

EmailJS integration

Carousel UI with react-responsive-carousel

Real-world UI interactions

📨 Contact
If you’d like me to walk through the code or run a live demo:

📧 Email: rjiyasultana4@gmail.com

💻 GitHub: @Rajiya-sultana
