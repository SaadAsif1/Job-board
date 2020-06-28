import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <div
        className='navbar'
        className={classnames('navbar', {
          'navbar--hidden': !this.state.visible,
        })}
      >
        <div className='container nav-container'>
          <h3>Software Developer Jobs</h3>

          {this.props.backBtn && (
            <Link to='/'>
              <button type='button' className='btn btn-primary'>
                Back
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
