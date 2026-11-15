import style from './NoteForm.module.css'

const NoteForm = ({
    formTitle,
    title,
    content,
    onTitleChange,
    onContentChange,
    submitText,
    onSubmit
}) => {
  return (
    <div>
        <h2>{formTitle}</h2>
        <input 
        type="text"
        name="title"
        className={`${style.formInput} ${style.mb30}`}
        placeholder='العنوان' 
        value={title}
        onChange={onTitleChange}
        />
        <textarea 
        rows="10"
        name="content"
        className={style.formInput}
        placeholder='النص'
        value={content}
        onChange={onContentChange}
        />
        <button
        type='button'
        className={`${style.button} ${style.green}`}
        onClick={onSubmit}
        >
          {submitText}
        </button>
    </div>
  )
}

export default NoteForm