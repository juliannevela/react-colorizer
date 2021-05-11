import React from 'react';
import PropTypes from 'prop-types';

function Display({ randColor }) {
  return <div style={{ background: randColor }} />;
}

Display.propTypes = {
  randColor: PropTypes.string.isRequired,
};

export default Display;
