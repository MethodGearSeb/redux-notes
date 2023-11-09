import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {

  return (
    <>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </>
  )
}

export default App