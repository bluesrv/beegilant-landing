import React from 'react';
import { Jumbotron } from 'reactstrap';

const Hero = (props) => {
  return (
    <Jumbotron className={`panel${props.customPanel ? `-${props.customPanel}` : ''}`} fluid>
        {props.children || (
          <>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </>
        )}
    </Jumbotron>
  );
};

export default Hero;