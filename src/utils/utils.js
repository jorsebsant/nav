
const enableContent = () => {
  const header = document.querySelector('.header')
  const breakpoint =  '(min-width: 768px)';
  if(!window.matchMedia(breakpoint).matches && header.classList.contains('is-open')){
    const buttonsMenu = document.querySelectorAll('.button-toggle')    
    header.classList.remove('is-open')
    toggleAllItems(buttonsMenu,'is-visible')
  }
  body.classList.remove('is-disabled')
  removeAllActives()
}

const removeAllActives = () => {
  const items = document.querySelectorAll('.menu__list-item a')
  items.forEach((item)=>{
    item.classList.remove('is-active')
    if(item.nextElementSibling){
      item.nextElementSibling.classList.remove('is-active')
    }
  });
}

const toggleAllItems= (items, selector) => {
  items.forEach((item)=>{
    item.classList.toggle(selector)
  })
}


module.exports = {
  enableContent,
  removeAllActives,
  toggleAllItems,
}
  