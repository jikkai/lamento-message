import Message from '../../../src'
import * as Icon from '../../../src/icons'

describe('Conetent', () => {
  it('should render correct content', () => {
    Message({ content: 'Hello World' })
    const $message = document.querySelector('#lamento-message').lastChild
    expect($message.querySelector('span').textContent)
      .to.equal('Hello World')
  })
})

describe('Class', () => {
  it('should render default class', () => {
    Message({ content: 'Hello World' })
    const $message = document.querySelector('#lamento-message').lastChild
    expect($message.querySelector('.lamento-message__body i').className)
      .to.equal('lamento-message--info')
  })
  it('should render correct class', () => {
    Message({ content: 'Hello World', status: 'warning' })
    const $message = document.querySelector('#lamento-message').lastChild
    expect($message.querySelector('.lamento-message__body i').className)
      .to.equal('lamento-message--warning')
  })
})

describe('Icon', () => {
  it('should render default icon', () => {
    Message({ content: 'Hello World' })
    const $message = document.querySelector('#lamento-message').lastChild
    expect($message.querySelector('.lamento-message__body i').innerHTML)
      .to.contain(Icon.info)
  })
  it('should render correct icon', () => {
    Message({ content: 'Hello World', status: 'danger' })
    const $message = document.querySelector('#lamento-message').lastChild
    expect($message.querySelector('.lamento-message__body i').innerHTML)
      .to.contain(Icon.danger)
  })
})
