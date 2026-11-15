import { useState } from "react"
import style from "./App.module.css"
import Note from "./components/Note/Note"
import NotesContainer from "./components/NotesContainer/NotesContainer"
import NotesList from "./components/NotesList/NotesList"
import Preview from "./components/Preview/Preview"
import NoteForm from "./components/NoteForm/NoteForm"
function App() {
  const [notes , setNotes]=useState([
    {
      id:1,
      title:"تعلم React",
      content:"البدء بفهم المكونات و الحالة "
    },
    {
      id:2,
      title:"انهاء المشروع",
      content:"متابعة بناء تطبيق الملاحظات"
    },
  ])
  const [selectedNoteId,setSelectedNoteId]=useState(1)
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
  const [creating,setCreating]=useState(false)

  const selectedNote = notes.find((note)=> note.id == selectedNoteId)
  
  const handeleAddmMode = ()=>{
    setCreating(true)
    setTitle("")
    setContent("")

  }
  const handelSave = ()=>{
    const note = {
      id : crypto.randomUUID(),
      title,
      content,
    }
    setNotes([...notes,note])
    setSelectedNoteId(note.id)
    setCreating(false)
    setTitle("")
    setContent("")
  }
  const handelSelect=(id)=>{
    setSelectedNoteId(id)
    setCreating(false)
  }
  return (
  <div className={style.app}>
    <NotesContainer onAdd={()=>{handeleAddmMode()}}>
      <NotesList>
      {notes.map((note)=>{
        return(
          <Note
          key={note.id}
          title={note.title}
          active={selectedNoteId == note.id}
          onClick={()=>{handelSelect(note.id)}}/>
        )
      })}
        </NotesList>
    </NotesContainer>
    <Preview>
        {
          creating ? 
          (
            <NoteForm
            formTitle="ملاحظة جديدة"
            title={title}
            content={content}
             onTitleChange={(event) => setTitle(event.target.value)}
          onContentChange={(event) => setContent(event.target.value)}
            submitText="حفظ"
            onSubmit={handelSave}
            />)
            :(
              <>
              <h1>{selectedNote.title}</h1>
              <p>{selectedNote.content}</p>
              </>
            )
        }
        
    </Preview>

  </div>
  )
}

export default App
