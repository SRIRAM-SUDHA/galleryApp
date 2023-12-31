import './index.css'

const ThumbnailItem = props => {
  const {details, changePicture, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = details
  const changeImage = () => {
    changePicture(id)
  }

  return (
    <li className={`imageContainer ${isActive ? 'clearImg' : ''}`}>
      <img src={thumbnailUrl} alt={thumbnailAltText} onClick={changeImage} />
    </li>
  )
}

export default ThumbnailItem
