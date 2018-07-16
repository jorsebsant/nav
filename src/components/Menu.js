import dom from 'jsx-render'
import menuConfig from '../static/menuConfig'

// Menu component
const Menu = () => (
  <div class="nav-wrapper">  
    <figure class="logo" role="logo">
      <a href="/">
        <img src="images/HUGE-white.png" class="logo__img"/>
      </a>
    </figure>
    <nav class="menu">
      <ul class="menu__list">
      {menuConfig.map((item, index) => ( 
        <li class="menu__list-item">
          <a href={item.url}>
            {item.title}
          </a>
        </li>
      ))}
      </ul> 
    </nav>
  </div>  
)
export default Menu