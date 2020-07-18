import Pig from './pig-image.jpg'
import './pig-image.scss'

class PigImage {
  render() {
    const img = document.createElement('img');
    img.src = Pig;
    img.alt = 'Pig';
    img.classList.add('pig-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default PigImage;