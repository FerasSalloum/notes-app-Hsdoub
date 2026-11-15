import style from './NotesList.module.css'

const NotesList = ({children}) => {
  return (
    <ul className={style.notesList}>{children}</ul>
  )
}

export default NotesList