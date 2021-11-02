import React from 'react';
import PropTypes from 'prop-types';
import B from './words/B';
import E from './words/E';
import L from './words/L';
import I from './words/I';
import V from './words/V';
import N from './words/N';
import Y from './words/Y';
import O from './words/O';
import U from './words/U';
import R from './words/R';
import S from './words/S';
import F from './words/F';

// Icons made by Freepik from www.flaticon.com
function Display({ randColor }) {
  return (
    <div className="main">
      <div className="believe">
        {/* BELIEVE */}
        <B color={randColor} />
        <E color={randColor} />
        <L color={randColor} />
        <I color={randColor} />
        <E color={randColor} />
        <V color={randColor} />
        <E color={randColor} />
      </div>
      <div className="in">
        {/* IN */}
        <I color={randColor} />
        <N color={randColor} />
      </div>
      <div className="yourself">
        {/* YOURSELF */}
        <Y color={randColor} />
        <O color={randColor} />
        <U color={randColor} />
        <R color={randColor} />
        <S color={randColor} />
        <E color={randColor} />
        <L color={randColor} />
        <F color={randColor} />
      </div>
    </div>
  );
}

Display.propTypes = {
  randColor: PropTypes.string.isRequired,
};

export default Display;
