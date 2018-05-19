
import React, {Component} from 'react';
import NavButton from "../NavButton";

import "./index.scss";

import D0 from '../../static/pics/d0.svg';
import O0 from '../../static/pics/o0.svg';
import POINT from '../../static/pics/point.svg';
import C from '../../static/pics/c.svg';
import O1 from '../../static/pics/o1.svg';
import D1 from '../../static/pics/d1.svg';
import E from '../../static/pics/e.svg';
import S from '../../static/pics/s.svg';




class Nav extends Component {
  state = {
    show: true,
    width: window.innerWidth,
    height: window.innerHeight
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  };

  handleToggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  render() {
    const { show, width, height } = this.state;
    const { innerWidth, innerHeight } = window;
    const scale = show ?
      Math.sqrt(innerWidth * innerWidth + innerHeight * innerHeight) / 55 * 2 + 1 : 1;

    let containerStyle;
    const ratio = width / height;
    if (ratio > 2.5) {
      const itemWidth = height * 2.2;
      containerStyle = {
        height: '100%',
        width: `${itemWidth}px`,
        left: `${(width - itemWidth) / 2}px`
      }
    } else if (ratio < 1.7) {
      const itemHeight = Math.min(width, height);
      containerStyle = {
        height: `${itemHeight}px`,
        width: `100%`,
        top: `${(height - itemHeight) / 2}px`
      }
    }

    return (
      <div className="nav-container">
        <NavButton
          key={0}
          showNav={show}
          onClick={this.handleToggleShow}
        />
        <div
          className="slogan"
          style={containerStyle}
        >
          <img className="d0" src={D0} />
          <img className="o0" src={O0} />
          <img className="point" src={POINT} />
          <img className="c" src={C} />
          <img className="o1" src={O1} />
          <img className="d1" src={D1} />
          <img className="e" src={E} />
          <img className="s" src={S} />
        </div>
        <div
          key={1}
          className={`nav-bg${show ? ' show' : ''}`}
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    );
  }
}


export default Nav;
