import Message from './Message'
import './style'

const SingleDOM = (function () {
  let instance
  const SingleDOM = function () {
    if (instance) return instance

    this.init()
    instance = this

    return instance
  }
  SingleDOM.prototype.init = function () {
    const MessageDOM = document.createElement('div')
    MessageDOM.id = 'lamento-message'
    document.body.appendChild(MessageDOM)
  }
  return SingleDOM
})()

export default ({ content, status }) => {
  new SingleDOM()

  const message = new Message({
    target: document.querySelector('#lamento-message'),
    data: { content, status }
  })

  setTimeout(() => {
    message.destroy()
  }, 2000)
}
