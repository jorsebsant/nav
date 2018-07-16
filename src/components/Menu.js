import dom from 'jsx-render'
import menuConfig from '../static/menuConfig'
import SubMenu from './SubMenu'

// breakpoint reference
const breakpoint =  `(min-width: 768px)`;

// Common elements
const header = document.querySelector('.header')
const active = 'is-active'

function removeAllActives(){
  const items = document.querySelectorAll('.menu__list-item a')
  items.forEach((item)=>{
    item.classList.remove(active)
    if(item.nextElementSibling){
      item.nextElementSibling.classList.remove(active)
    }
  });
}
function showSubmenu(){
  removeAllActives()
  this.classList.add(active)
  this.nextElementSibling.classList.add(active)
}

function toggleMenu(){
  const items = document.querySelectorAll('.button-toggle')
  if(this.dataset.type=="open"){    
    header.classList.add('is-open')
  }else{
    header.classList.remove('is-open')
  }
  items.forEach((item)=>{
    item.classList.toggle('is-visible')
  })
}

function reset(){
  const items = document.querySelectorAll('.button-toggle')
  if(header.classList.contains('is-open')){
    header.classList.remove('is-open')
  }
  if(!items[0].classList.contains('is-visible')){
    items[0].classList.add('is-visible')
  }
  if(items[1].classList.contains('is-visible')){
    items[1].classList.remove('is-visible')
  }
  removeAllActives()
}

// Menu component
const Menu = () => {

  // Ref actions
  const actions = {
    openSubMenu: function(node) {
      node.addEventListener('click', showSubmenu)
    },
    toggleMenu: function(node) {
      node.addEventListener('click', toggleMenu)
    },
  }

  // Media query listener to reset values
  matchMedia(breakpoint).addListener(reset)
  
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
      <nav class="menu" role="navigation" aria-label="Explore the site." >
        <ul class="menu__list">
          {menuConfig.map((item, index) => ( 
            <li class='menu__list-item' data-role={item.submenu ? 'dropdown-menu' : 'normal'}>
              <a ref={actions.openSubMenu} href={item.url}>
                {item.title}
              </a>
              {item.submenu && (
                <SubMenu items={item.submenu}></SubMenu>
              )}
            </li>
          ))}
        </ul> 
      </nav>
    </div>  
  )
}
export default Menu