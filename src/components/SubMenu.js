import dom from 'jsx-render'

// SubMenu component
const SubMenu = ({items}) => (  
  <ul role="navigation" aria-label="Secondary navigation" class="submenu">
    {items.map((item, index) => ( 
        <li class="submenu__item">
          <a href={item.url}>
              {item.title}
          </a>
        </li>
    ))}
  </ul>
)
export default SubMenu