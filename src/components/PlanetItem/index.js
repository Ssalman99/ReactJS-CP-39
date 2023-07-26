// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const {imageUrl, name, description} = planetsList
  return (
    <div className="list-item">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="item-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
