import React from 'react';

export default props => {
  return (
    <div>
      <h1>Im a Header</h1>
      {props.children}
      <h1>Im a Footer</h1>
    </div>
  );
};
