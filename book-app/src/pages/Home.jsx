import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Accueil - Liste des Livres</h1>
      <Link to="/add">Ajouter un livre</Link>
      {/* Ici, vous pouvez afficher la liste des livres */}
    </div>
  );
}

export default Home
