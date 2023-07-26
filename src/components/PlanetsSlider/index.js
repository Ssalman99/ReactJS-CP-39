// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div data-testid="planets" className="app-container">
      <h1 className="heading">PLANETS</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetsList={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
