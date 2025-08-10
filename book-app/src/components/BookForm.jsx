import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { genres } from '../utils'
import styles from './BookForm.module.css'

const BookForm = ({ initialData = {}, onSubmit }) => {
  const navigate = useNavigate()

  const [title, setTitle] = useState(initialData.title || '')
  const [author, setAuthor] = useState(initialData.author || '')
  const [genre, setGenre] = useState(initialData.genre || '')
  const [publishedDate, setPublishedDate] = useState(initialData.publishedDate || '')
  const [rating, setRating] = useState(initialData.rating || 1)
  const [available, setAvailable] = useState(initialData.available || false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const bookData = {
      id: initialData.id || null,
      title,
      author,
      genre,
      publishedDate,
      rating: parseInt(rating, 10),
      available
    }

    onSubmit(bookData)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      >
        <option value="" disabled>Select Genre</option>
        {genres.map((g, index) => (
          <option key={index} value={g}>{g}</option>
        ))}
      </select>
      <input
        type="date"
        value={publishedDate}
        onChange={(e) => setPublishedDate(e.target.value)}
        placeholder="Published Date"
        required
      />
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating (1-5)"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
        Available
      </label>
      <div className={styles.buttons}>
        <button type="submit">
          {initialData.id ? 'Update Book' : 'Add Book'}
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className={styles.cancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default BookForm
