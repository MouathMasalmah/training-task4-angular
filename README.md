# 🛍️ Angular Mini Product Management App

This project is part of my Angular training.  
The goal is to build a **mini product management system** using **Angular**, **Signals**, and **Kendo UI for Angular**.  

It demonstrates a wide range of Angular concepts including components, routing, services, forms, directives, pipes, and reactive state management with signals.

---

## 🚀 Features

### 📦 Product Management
- View products in a **Kendo Grid**  
- Add new products with a **template-driven form**  
- Edit existing products with a **reactive form** (validation included)  
- Delete products  
- Store all data in **localStorage** (persistent across refreshes)  

### ⚡ Signals
- Products and selected product state managed reactively with Angular **signals**  
- Automatic UI updates when products are created/updated/deleted  

### 🔗 Parent–Child Communication
- `@Input` and `@Output` bindings  
- Signals for reactive data sharing between components  

### 📝 Forms
- **Add Form (Template-driven)**  
- **Edit Form (Reactive)** with validation rules:  
  - **Name:** required, min length 2  
  - **Price:** required, greater than 0  
  - **Category:** required (must be chosen from dropdown)  

### 🛣️ Routing
- `/products` → Product list  
- `/products/add` → Add new product (protected by a simple guard)  
- `/products/:id` → Product detail + edit  

### 🔧 Pipes
- Built-in pipes: **date**, **currency**  
- Custom pipe: **category filter**  

### 🎨 Directives
- Built-in Angular directives like `*ngIf`, `*ngFor`, `ngClass`  
- Custom directive: **Highlight expensive products**  

### 🖥️ Kendo UI for Angular
- **Kendo Grid** for product listing  
- **Kendo DropdownList** for categories  
- Styled inputs & buttons with Kendo components  

---

## 🛠️ Tech Stack

- Angular 17+  
- Angular Signals  
- Kendo UI for Angular  
- TypeScript  
- LocalStorage API  

---

## 📸 Demo

👉 Watch the demo video here:  

https://github.com/user-attachments/assets/80bc7e3b-3ae6-4993-80c6-f7f18b045156

