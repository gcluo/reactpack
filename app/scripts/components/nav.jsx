'use strict';
// import React from 'react';
import {Link} from 'react-router';
//
// export default class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected: 'index'
//     };
//   }
//   click(e) {
//     let link = e.target.text;
//     switch (link) {
//       case 'About':
//         this.setState({selected: 'about'});
//         break;
//       case 'Inbox':
//         this.setState({selected: 'inbox'});
//         break;
//       default:
//         this.setState({selected: 'index'});
//         break;
//     }
//   }
//   render() {
//     return (
//       <ul className="nav-menu-line" onClick={this.click.bind(this)}>
//         <li className={'index' === this.state.selected
//           ? 'active'
//           : ''}>
//           <Link to="/">Index</Link>
//         </li>
//         <li className={'about' === this.state.selected
//           ? 'active'
//           : ''}>
//           <Link to="/about">About</Link>
//         </li>
//         <li className={'inbox' === this.state.selected
//           ? 'active'
//           : ''}>
//           <Link to="/inbox">Inbox</Link>
//         </li>
//       </ul>
//     );
//   }
// }

const Navv = ({active, onClick}) => {
  return (
    <ul className="nav-menu-line" onClick={e => {
      e.preventDefault()
      onClick(e)
    }}>
      <li className={active === 'index' ? 'active' : ''}>
        <Link to="/">Index</Link>
      </li>
      <li className={active === 'about' ? 'active' : ''}>
        <Link to="/about">About</Link>
      </li>
      <li className={active === 'inbox' ? 'active' : ''}>
        <Link to="/inbox">Inbox</Link>
      </li>
    </ul>
  );
}
export default Navv
