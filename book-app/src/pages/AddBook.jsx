import { useNavigate } from 'react-router-dom'
import { useBookContext } from '../context/BookContext'
import BookForm from '../components/BookForm'

function AddBookPage() {
  const { dispatch } = useBookContext()
  const navigate = useNavigate()

  const handleAddBook = (bookData) => {
    dispatch({ type: 'ADD_BOOK', payload: bookData })
    navigate('/') // 🔁 Retour à la page d'accueil
  }

  return (
    <div>
      <h2>Ajouter un livre</h2>
      <BookForm onSubmit={handleAddBook} />
    </div>
  )
}

export default AddBookPage
