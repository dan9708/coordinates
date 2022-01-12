const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')

// 모든 이미지가 로딩이 된후에 js가 동작하게하기 위해서 이벤트리스너를 활용함!
addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect()
  console.log(targetRect)
  const targetHalfWidth = targetRect.width / 2
  const targetHalfHeight = targetRect.height / 2

  document.addEventListener('mousemove', event => {
    const x = event.clientX
    const y = event.clientY

    vertical.style.transform = `translateX(${x}px)`
    horizontal.style.transform = `translateY(${y}px)`
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`
    tag.style.transform = `translate(${x}px, ${y}px)`
    tag.innerHTML = `${x}px, ${y}px`
  })
})
