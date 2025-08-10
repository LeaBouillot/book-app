# 📚 Book App

**Book App** est une application web permettant de rechercher et de consulter des livres en fonction de leur titre et de leur genre. L'application est construite avec un frontend en **React** et un backend en **Express.js**.

---

## 🚀 Fonctionnalités

- 🔍 Recherche de livres par **titre**
- 🏷️ Filtrage des livres par **genre**
- 📖 Affichage de la liste des livres avec :
  - Titre
  - Auteur
  - Genre
  - Évaluation par étoiles ⭐
  - Boutons **Available** et **Details**
- 🖥️ Architecture client-serveur (React + Express)

---

## 🛠️ Technologies utilisées

### Frontend (React)
- React

### Backend (Express)
- Express.js
- Node.js

---

## 📂 Structure du projet (exemple)

```

book-app/
├── client/                # Frontend React
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       └── App.js
│   └── package.json
├── server/                # Backend Express
│   └── index.js
│   └── package.json
└── README.md

````

---

## ▶️ Lancement du projet

### Prérequis

- Node.js installé
- npm ou yarn

### Installation

1. **Cloner le repo :**
   ```bash
   git clone https://github.com/LeaBouillot/book-app.git
   cd book-app
````

2. **Installer les dépendances :**

   * Côté serveur :

     ```bash
     cd backend-book
     npm install
     ```

   * Côté client :

     ```bash
     cd book-app
     npm install
     ```

3. **Démarrer l'application :**

   * Lancer le backend :

     ```bash
     npm start
     ```

   * Lancer le frontend :

     ```bash
     npm run dev
     ```

