import { connect } from 'react-redux'
import { selected } from '../actions/account'
import Navv from '../components/nav'

const mapStateToProps = (state) => {
  return {
    active: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (e) => {
      let link = e.target.text;
      switch (link) {
        case 'About':
          dispatch(selected('about'))
          break;
        case 'Inbox':
          dispatch(selected('inbox'))
          break;
        default:
          dispatch(selected('index'))
          break;
      }
    }
  }
}

const Navvv = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navv)

export default Navvv
