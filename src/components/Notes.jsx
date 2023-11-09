import { toggleImportanceOf } from '../reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'

const Note = ({ note, handleClick }) => (
  <li onClick={handleClick}>
    {note.content} <strong>{note.important ? 'important' : ''}</strong>
  </li>
)

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(({ filter, notes }) => filter === 'ALL'
    ? notes
    : filter === 'IMPORTANT'
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important)
  )

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <ul>
      {notes.map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() =>
            dispatch(toggleImportance(note.id))
          }
        />
      )}
    </ul>
  )
}

export default Notes