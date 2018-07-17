import dom from 'jsx-render'
import menuConfig from '../static/menuConfig'
import SubMenu from './SubMenu'

// breakpoint reference
const breakpoint =  '(min-width: 768px)';
//Common classes
const active = 'is-active'
const open = 'is-open'
const visible = 'is-visible'
const disabled ='is-disabled'
// Common elements
const body = document.getElementsByTagName('body')[0];
const header = document.querySelector('.header')
const main = document.querySelector('.main')

// Menu component
const Menu = () => {

  initlisteners()

  // Ref actions
  const actions = {
    openSubMenu: function(node) {
      node.addEventListener('click', showSubmenu)
    },
    enableContent: function(node) {
      const submenuItems = node.querySelectorAll('.submenu__item');
      if(submenuItems.length > 0){
        submenuItems.forEach((item)=>{
          item.addEventListener('click', enableContent)
        })
      }
    },
    toggleMenu: function(node) {
      node.addEventListener('click', toggleMenu)
    },
  }

  return  (
    <div class="wrapper">  
      <figure class="logo" role="logo">
        <a href="/">
          <img src="images/HUGE-white.png" class="logo__img"/>
        </a>
        <a class="toggle-menu">
          <img ref={actions.toggleMenu} data-type="open" class="button-toggle is-visible" src="images/toggle-open.svg"/>
          <img ref={actions.toggleMenu} data-type="close" class="button-toggle" src="images/toggle-close.svg"/>
        </a>
      </figure>
      <nav class="menu" role="navigation" aria-label="Main navigation">
        <ul class="menu__list">
          {menuConfig.map((item, index) => ( 
            <li class='menu__list-item' ref={actions.enableContent} data-role={item.submenu ? 'dropdown-menu' : 'normal'}>
              <a ref={actions.openSubMenu} href={item.url}>
                {item.title}
              </a>
              {item.submenu && (
                <SubMenu items={item.submenu}></SubMenu>
              )}
            </li>
          ))}
        </ul> 
      <small class="copyright">© 2018 Huge. All Rights Reserved.</small>
      </nav>
    </div>  
  )
}

function initlisteners(){
  // Media query listener to reset values and avoid errors
  matchMedia(breakpoint).addListener(reset)
  // Global Events
  main.addEventListener('click', enableContent)
}

function removeAllActives(){
  const items = document.querySelectorAll('.menu__list-item a')
  items.forEach((item)=>{
    item.classList.remove(active)
    if(item.nextElementSibling){
      item.nextElementSibling.classList.remove(active)
    }
  });
}

function activateCurrentNode(){
  removeAllActives()
  this.classList.add(active)
  this.nextElementSibling.classList.add(active)
}

function enableContent(){
  if(!window.matchMedia(breakpoint).matches && header.classList.contains(open)){
    const buttonsMenu = document.querySelectorAll('.button-toggle')    
    header.classList.remove(open)
    toggleAllItems(buttonsMenu,visible)
  }
  body.classList.remove(disabled)
  removeAllActives()
}

function showSubmenu(){
  if(window.matchMedia(breakpoint).matches){
    activateCurrentNode.call(this)
    body.classList.add(disabled)     
  }else{
    if(this.classList.contains(active)){
      this.classList.remove(active)
      this.nextElementSibling.classList.remove(active)
    }else{
      activateCurrentNode.call(this)
    }
  }
}

function toggleMenu(){
  
  const buttonsMenu = document.querySelectorAll('.button-toggle')

  if(this.dataset.type=="open"){    
    header.classList.add(open)
    body.classList.add(disabled)
  }else{
    header.classList.remove(open)
    body.classList.remove(disabled)

  }
  toggleAllItems(buttonsMenu,visible)
}

function toggleAllItems(items, selector){
  items.forEach((item)=>{
    item.classList.toggle(selector)
  })
}

function reset(){
  const items = document.querySelectorAll('.button-toggle')
  body.classList.remove(disabled)
  if(header.classList.contains(open)){
    header.classList.remove(open)
  }
  if(!items[0].classList.contains(visible)){
    items[0].classList.add(visible)
  }
  if(items[1].classList.contains(visible)){
    items[1].classList.remove(visible)
  }
  
  removeAllActives()
}


export default Menu