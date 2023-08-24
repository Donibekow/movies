import React from "react";

type HeadingProps = { title: string; isActive: boolean };

function Heading ( {title, isActive} : HeadingProps ) {
    return <div>{title && isActive}</div>;
};

export default Heading;