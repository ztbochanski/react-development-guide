import React from 'react';

const fancyborder = (props) => {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color} style={{border: '2px solid red'}}>
      <div>This could be a layout that wraps any components passed into it</div>
        {props.children}
      </div>
    );
  }

export default fancyborder;