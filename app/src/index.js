import HelloWorldButton from './components/hello-world-button/hello-world-button'
import Heading from './components/heading/heading'
// import addImage from './add-image.js'

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render();

const heading = new Heading()
heading.render();

if(process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else {
  console.log('Development mode');
}
