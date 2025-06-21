# 🧾 Item Manager – Internship Assignment for AMRR TechSols

This is a React-based web application built for the internship assignment provided by **AMRR TechSols Pvt Ltd**.

It delivers:

- A form to **add new items**
- A page to **view all items** (static + user-added)
- A modal with full item details and an **image carousel**
- An **Enquire** button that sends an email to a static address via **EmailJS**

---

## ✨ Features

| Feature | Status |
|---------|:------:|
| Add Item (name, type, description, cover, gallery) | ✅ |
| View Items list (static + dynamic) | ✅ |
| Modal with carousel & description | ✅ |
| “Enquire” → EmailJS integration | ✅ |
| Toast notifications | ✅ |
| Responsive UI (Tailwind) | ✅ |

---

## 📂 Folder Structure

```
Item-Manager/
├─ src/
│  ├─ components/
│  │  ├─ ItemForm.jsx
│  │  ├─ ItemList.jsx
│  │  └─ ItemModal.jsx
│  ├─ context/
│  │  └─ ItemContext.jsx
│  ├─ pages/
│  │  ├─ AddItems.jsx
│  │  └─ ViewItems.jsx
│  └─ App.jsx
├─ .env.example
├─ README.md
└─ package.json
```

---

## 💻 How to Run the Project

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Rajiya-sultana/Item-Manager.git
cd Item-Manager

# 2️⃣ Install dependencies
npm install

# 3️⃣ Add EmailJS credentials
cp .env.example .env
# then edit .env and fill in:
# VITE_EMAILJS_SERVICE_ID=your_service_id
# VITE_EMAILJS_TEMPLATE_ID=your_template_id
# VITE_EMAILJS_PUBLIC_KEY=your_public_key

# 4️⃣ Start the development server
npm run dev
```

---

## 📧 Enquiry Email (Bonus Feature ✅)

- Clicking **Enquire** inside the item modal triggers `emailjs.send()`
- The email is sent to a **static email address** (configured via EmailJS template)
- Toast notifications confirm success or failure

> 📌 You can change the email recipient directly in your EmailJS dashboard template.

---

## 🙋‍♀️ About Me

I’m **Rajiya Sultana**, a frontend developer passionate about React, TailwindCSS, and creating clean, functional interfaces.

**Skills demonstrated in this project:**

- React state & context
- Controlled forms & file inputs
- Carousel integration
- Modal handling
- Toast messaging
- Third-party API (EmailJS)

---

## 📨 Contact

| | |
|---|---|
| **Email** | rjiyasultana4@gmail.com |
| **GitHub** | [@Rajiya-sultana](https://github.com/Rajiya-sultana) |

---

**Thank you for reviewing my project! Let me know if you’d like a live walkthrough or demo.**
