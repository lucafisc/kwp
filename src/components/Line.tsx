import React, { FC } from 'react';

type LineProps = {
  borderSize?: number;
}

const Line: FC<LineProps> = ({ borderSize = 4 }) => {
  const className = `border-black border-${borderSize} w-full`;

  return (
    <hr className={className}></hr>
  );
};

export default Line;
