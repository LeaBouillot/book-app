import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useBookContext } from '../context/BookContext'
import Loading from './Loading'
import { renderStars, getBookEmoji } from '../utils'
import styles from './BookDetail.module.css'

const BookDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { dispatch } = useBookContext()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true)
        const response = await fetch(`http://localhost:3000/books/${id}`)
        if (response.ok) {
          const data = await response.json()
          setBook(data)
        } else {
          setBook(null)
        }
      } catch (error) {
        console.error('Erreur lors du chargement du livre :', error)
        setBook(null)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])

  const toggleAvailable = () => {
    dispatch({ type: 'TOGGLE_AVAILABLE', payload: book.id })
    setBook(prev => ({ ...prev, available: !prev.available }))
  }

  if (loading) return <Loading />

  if (!book) {
    return (
      <div className={styles.notFound}>
        <p>Livre introuvable 📕</p>
        <button onClick={() => navigate(-1)}>⬅ Retour</button>
      </div>
    )
  }

  return (
    <div className={styles.detail}>
      <div className={styles.header}>
        <span className={styles.emoji}>{getBookEmoji(book.genre)}</span>
        <h2 className={styles.title}>{book.title}</h2>
      </div>
      <p className={styles.author}>par {book.author}</p>
      <div className={styles.rating}>{renderStars(book.rating)}</div>
      <p className={styles.description}>{book.description}</p>
      <button
        className={book.available ? styles.available : styles.unavailable}
        onClick={toggleAvailable}
      >
        {book.available ? 'Disponible' : 'Indisponible'}
      </button>
      <div className={styles.back}>
        <button onClick={() => navigate(-1)}>⬅ Retour</button>
      </div>
    </div>
  )
}

export default BookDetail
