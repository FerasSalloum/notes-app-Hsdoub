import style from './Preview.module.css'

const Preview = ({children}) => {
  return (
    <div className={style.previewSection}>{children}</div>
  )
}

export default Preview