import React from 'react';
import PropTypes from 'prop-types';
import Alien from './Alien.jsx';
import Rocket from './Rocket.jsx';
import Comet from './Comet.jsx';

function Display({ randColor }) {
  return (
    <>
      <Alien stroke={randColor} />
      <Rocket stroke={randColor} />
      <Comet stroke={randColor} />
    </>
  );
}

Display.propTypes = {
  randColor: PropTypes.string.isRequired,
};

export default Display;
