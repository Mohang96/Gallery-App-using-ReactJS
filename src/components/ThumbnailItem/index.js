import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickThumbNail, activeThumbNailId} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imageDetails

  const clickThumbNail = () => {
    onClickThumbNail(imageUrl, imageAltText, id)
  }

  const activeThumbNailClassName =
    activeThumbNailId === id ? 'active-thumbnail' : ''

  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeThumbNailClassName}`}
          onClick={clickThumbNail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
