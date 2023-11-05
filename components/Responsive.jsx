import React from 'react';

export const M = ({ children }) => {
  return <span className="block lg:hidden">{children}</span>;
};

export const D = ({ children }) => {
  return <span className="hidden lg:block">{children}</span>;
};
