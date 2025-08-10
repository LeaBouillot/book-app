import { useParams, useNavigate } from 'react-router-dom'
import { useBookContext } from '../context/BookContext'
import BookForm from '../components/BookForm'

function EditBookPage() {
  const { id } = useParams()
  const { books, dispatch } = useBookContext()
  const navigate = useNavigate()

  const bookToEdit = books.find(book => book.id === id)

  const handleUpdateBook = (bookData) => {
    dispatch({ type: 'UPDATE_BOOK', payload: bookData })
    navigate('/') // 🔁 Retour à la page d'accueil
  }

  if (!bookToEdit) {
    return <p>Livre introuvable</p>
  }

  return (
    <div>
      <h2>Modifier le livre</h2>
      <BookForm initialData={bookToEdit} onSubmit={handleUpdateBook} />
    </div>
  )
}

export default EditBookPage
