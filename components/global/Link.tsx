import NextLink from 'next/link';
import React from 'react';

// Styles
import styles from '../../styles/components/global/link.module.scss';

// Types
import LinkType from '../../types/global/Link';

/**
 * Creates a link component to be used throughout the app.
 *
 * @param {String} text the text
 * @param {String} to the href
 * @param {String} className the custom class
 * @param {React.ReactNode} children
 * @returns a header component
 */
const Link = ({ to, children, className }: LinkType) => {
  const mainClass = 'link';
  return (
    <NextLink href={to}>
      <a
        className={`${className ? `${className} ` : ''}${styles[mainClass]}`}
        data-testid={mainClass}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
