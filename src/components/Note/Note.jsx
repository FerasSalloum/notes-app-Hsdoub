import style from './Note.module.css'

const Note = ({title, active , onClick}) => {
    const classes = active
    ?`${style.noteItem} ${style.active}`
    :style.noteItem
  return (
    <li className={classes} onClick={onClick}>
        {title}
    </li>
  )
}

export default Note