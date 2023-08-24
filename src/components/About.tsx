import React from 'react';

type AboutProps = { firstName: string; lastName: string; age: number}
function About( {firstName, lastName, age, } : AboutProps ) {
  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{age}</div>
    </div>
  );
};

export default About;
