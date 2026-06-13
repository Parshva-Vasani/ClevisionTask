Task1

# Clevision Landing Page

A responsive single-page website built using **HTML**, **JavaScript**, and **Tailwind CSS**. This project demonstrates modern frontend development practices, including responsive layouts, semantic HTML structure, and mobile-friendly navigation.

## 🚀 Features

### Header

- Text-based logo (**Clevision**)
- Navigation links:
  - Home
  - About
  - Services
  - Contact

- Responsive design with a **hamburger menu** for mobile devices

### Hero Section

- Eye-catching heading
- Informative description paragraph
- Call-to-action button (**Get Started**)
- Placeholder image integration
- Responsive layout:
  - **Desktop:** Text and image displayed side by side
  - **Mobile:** Content stacked vertically

### Footer

- Company information
- Contact details (email and phone number)
- Social media links
- Copyright notice

## 🛠️ Technologies Used

- HTML5
- JavaScript (ES6)
- Tailwind CSS (via CDN)

## 📱 Responsive Design

The website is designed using a **mobile-first approach** and adapts seamlessly across different screen sizes using Tailwind CSS utility classes.

## 📂 Project Structure

```
project-folder/
│
├── index.html
└── README.md
```

## ▶️ Getting Started

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, Safari, etc.)

### Running the Project

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd <project-folder>
```

3. Open the `index.html` file in your browser.

Alternatively, you can use the VS Code **Live Server** extension for a better development experience.

## AI USED

ChatGpt

## 🎨 Styling

All styling has been implemented using **Tailwind CSS utility classes**. No custom CSS was written unless absolutely necessary, ensuring consistency and maintainability.

## 📌 Key Highlights

- Semantic HTML structure
- Clean and readable code
- Responsive navigation menu
- Mobile-friendly layout
- Consistent spacing and typography
- Accessible and user-focused design principles

## 📄 Assignment Requirements Covered

- ✅ Responsive Header with Logo and Navigation
- ✅ Mobile Hamburger Menu
- ✅ Hero Section with Heading, Description, Image, and CTA Button
- ✅ Responsive Hero Layout (Desktop & Mobile)
- ✅ Footer with Company Information and Social Links
- ✅ Tailwind CSS used for styling
- ✅ Clean Semantic HTML
- ✅ Proper Alignment, Typography, and Spacing

## © Copyright

© 2026 Clevision Technologies. All rights reserved.

---

Task2

# Dynamic Product Catalog

A responsive product catalog built using **HTML**, **JavaScript**, and **Tailwind CSS (CDN)**. The application demonstrates JavaScript array methods, DOM manipulation, and dynamic rendering by implementing product filtering, grouping, aggregation, and sorting functionality.

## Features

### Challenge 1 – Filter & Group Products

- Filters products that are:
  - **In stock**
  - **Priced under ₹10,000**

- Groups the filtered products by category using `reduce()`.

- Calculates the **total value** of all in-stock products priced under ₹10,000.

### Challenge 2 – Dynamic Product Cards

- Dynamically generates a responsive product grid for all **in-stock products**.
- Displays the following details for each product:
  - Product Name
  - Formatted Price (`₹XX,XXX`)
  - Category Badge

- Includes a **"Sort by Price"** button that:
  - Sorts products in **ascending order**
  - Toggles to **descending order** on the next click
  - Re-renders the product cards dynamically.

---

## Technologies Used

- HTML5
- JavaScript (ES6+)
- Tailwind CSS (via CDN)

---

## Project Structure

```
project-folder/
│
├── index.html
├── script.js
└── README.md
```

---

## Product Dataset

```javascript
const products = [
  { name: "Laptop", price: 45000, inStock: true, category: "electronics" },
  { name: "Shirt", price: 1200, inStock: false, category: "clothing" },
  { name: "Phone", price: 25000, inStock: true, category: "electronics" },
  { name: "Shoes", price: 3500, inStock: true, category: "clothing" },
  { name: "Tablet", price: 18000, inStock: false, category: "electronics" },
  { name: "Watch", price: 8000, inStock: true, category: "accessories" },
  { name: "Bag", price: 2200, inStock: true, category: "accessories" },
  { name: "Headphones", price: 3000, inStock: true, category: "electronics" },
];
```

---

## Challenge 1 Results

### Filtered Products

Products that are **in stock** and **priced under ₹10,000**:

- Shoes – ₹3,500
- Watch – ₹8,000
- Bag – ₹2,200
- Headphones – ₹3,000

### Grouped Output

```javascript
{
  clothing: [
    { name: "Shoes", price: 3500 }
  ],
  accessories: [
    { name: "Watch", price: 8000 },
    { name: "Bag", price: 2200 }
  ],
  electronics: [
    { name: "Headphones", price: 3000 }
  ]
}
```

### Total Value

```text
₹16,700
```

---

## JavaScript Concepts Demonstrated

- `filter()`
- `reduce()`
- `sort()`
- DOM Manipulation
- Event Handling (`addEventListener`)
- Dynamic Rendering
- Template Literals
- Number Formatting (`toLocaleString()`)

---

## How to Run the Project

1. Clone or download the project files.
2. Ensure the following files are in the same folder:
   - `index.html`
   - `script.js`

3. Open `index.html` in any modern web browser.

No additional setup or package installation is required.

---

## AI USED

ChatGpt

## Future Enhancements

- Add category filtering.
- Implement a search bar for products.
- Add animations using Motion or CSS transitions.
- Fetch products from an external API.
- Add pagination for large product datasets.

---

Computer Engineering Student passionate about Web Development, UI/UX, and AI applications.
