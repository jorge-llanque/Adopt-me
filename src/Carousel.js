import { Component } from 'react'
import defaultImage from './default.png'

class Carousel extends Component {
  state = {
    active: 0,
  }

  static defaultProps = {
    images: [
      {
        large: 'https://pets-images.dev-apis.com/pets/none.jpg',
        small: 'https://pets-images.dev-apis.com/pets/none.jpg',
      },
    ],
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index,
    })
  }

  render() {
    const { active } = this.state
    const { images } = this.props

    return (
      <>
        {images.length > 0 ? (
          <div className='carousel'>
            <img src={images[active].large} alt='animal' />
            <div className='carousel-smaller'>
              {images.map((photo, index) => (
                // eslint-disable-next-line
                <img
                  key={index}
                  src={photo.small}
                  onClick={this.handleIndexClick}
                  data-index={index}
                  className={index === active ? 'active' : ''}
                  alt='animal thumbnail'
                />
              ))}
            </div>
          </div>
        ) : (
          <div className='carousel'>
            <img src={defaultImage} alt='animal' />
          </div>
        )}
      </>
    )
  }
}

export default Carousel
