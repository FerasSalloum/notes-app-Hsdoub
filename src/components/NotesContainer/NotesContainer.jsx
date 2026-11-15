import style from "./NotesContainer.module.css"
const NotesContainer = ({children,onAdd}) => {
  return (
    <div className={style.notesSection}>
        {children}
        <button
        className={style.addBtn}
        onClick={()=>{onAdd()}}
        aria-label="اضافة ملاحظة"
        type="button"
        >
        +
        </button>
    </div>
  )
}

export default NotesContainer