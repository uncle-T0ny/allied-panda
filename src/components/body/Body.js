import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';
import Flexbox from 'flexbox-react';
import './Body.scss';
import Particles from 'react-particles-js';

const config = {
  "particles": {
    "number": {
      "value": 82,
      "density": {
        "enable": true,
        "value_area": 1202.559045649142
      }
    },
    "color": {
      "value": "#14182f"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0.3,
        "color": "#c50000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.02,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4.008530152163807,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2.4362316369040355,
        "size_min": 1.6241544246026904,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 96.20472365193136,
      "color": "#222222",
      "opacity": 0.1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1042.21783956259,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 158.35505639876231,
        "size": 93.3888794146547,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

@connect(mapStateToProps)
class Body extends PureComponent {

  render() {
    return (
      <Flexbox flexDirection="column" minHeight="300vh">
        <ScrollableAnchor id={'section1'}>
          <Flexbox flexGrow={1}>
            Content 1
            <Particles params={config} />
          </Flexbox>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <Flexbox flexGrow={1}>
            Content 2
            <img style={{width: '200px', height: '200px'}} src="image1.png" />
          </Flexbox>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <Flexbox flexGrow={1}>
            Content 3
            <img style={{width: '200px', height: '200px'}} src="image1.png" />
          </Flexbox>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
          <Flexbox flexGrow={1}>
            Content 4
            <img style={{width: '200px', height: '200px'}} src="image1.png" />
          </Flexbox>
        </ScrollableAnchor>
      </Flexbox>
    );
  }
};

export { Body };