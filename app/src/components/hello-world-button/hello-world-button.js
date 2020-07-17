import './hello-world-button.scss'

class HelloWorldButton {
  buttonCssClass = 'hello-world-button';
  render() {
    const button = document.createElement('button')
    const body = document.querySelector('body')

    button.innerHTML = "Hello World"
    button.classList.add(this.buttonCssClass)
    button.onclick = function() {
      const p = document.createElement('p')
      p.innerHTML = 'HelloWorld'
      p.classList.add('hello-world-test')
      body.appendChild(p)
    }
    body.appendChild(button)
  }
}

export default HelloWorldButton;