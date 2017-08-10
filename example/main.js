import Message from '../src'

Message({
  content: 'info test'
})

setTimeout(_ => {
  Message({
    content: 'looooooooooooooooooooooooong text test',
    status: 'warning'
  })
}, 500)

setTimeout(_ => {
  Message({
    content: '测试一下中文呗',
    status: 'danger'
  })
}, 1000)

setTimeout(_ => {
  Message({
    content: 'test completed',
    status: 'success'
  })
}, 1500)
