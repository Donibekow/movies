import React, { ReactNode } from 'react';

type SectionProps = {
    text: string,
    children: ReactNode
}



function Section( { text, children } : SectionProps ) {
  return (
    <section>
      <h2>{text}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
