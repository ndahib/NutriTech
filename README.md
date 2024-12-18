# NutriTech 🍎

NutriTech is a modern web application designed to simplify agriculture products management and nutrition. It consists of a **Django backend** (providing a RESTful API) and a **Next.js frontend** (interactive user interface). Whether you're a developer or a user, NutriTech is built for efficiency and ease of use.

---

## ✨ Features
- **Product Management System**: Easily manage agriculture products and associated details.
- **RESTful API**: Well-structured backend to handle data effectively.

---

## 🚀 Getting Started

You can set up and run NutriTech in two ways:

### Option 1: Run with Docker 🐳

This is the quickest way to get NutriTech running on your machine.

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2. **Build and start the containers**:
    ```bash
    docker-compose up --build
    ```
   - Backend: [http://localhost:5000](http://localhost:5000)
   - Frontend: [http://localhost:3000](http://localhost:3000)

3. **Stop the containers**:
    ```bash
    docker-compose down
    ```

---

### Option 2: Run Backend and Frontend Separately 💻

#### Backend (Django API)

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2. **Create and activate a virtual environment**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
3. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
4. **Run migrations**:
    ```bash
    python manage.py migrate
    ```
5. **Start the Django server**:
    ```bash
    python manage.py runserver 0.0.0.0:5000
    ```

#### Frontend (Next.js)

1. **Navigate to the frontend folder**:
    ```bash
    cd frontend
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Start the Next.js server**:
    ```bash
    npm run dev
    ```

   - Backend: [http://localhost:5000](http://localhost:5000)
   - Frontend: [http://localhost:3000](http://localhost:3000)

---

## 🎨 Figma Design

Take a closer look at the app's UI design:  
[**NutriTech Figma Design**](https://www.figma.com/design/x8AF1ym5E3OJNakdvDZknA/NutriTech?node-id=0-1&t=XSEkCuXjZOlJHKGm-1)

---

## 🤝 Contributing

We welcome contributions to NutriTech! Here's how you can help:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your message here"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Open a Pull Request and describe your changes.

---

## 🛡️ License

---

## 🌟 Acknowledgements

Let's build something amazing together! 🚀

---

Feel free to ask questions or share feedback in the Issues section! 😊
