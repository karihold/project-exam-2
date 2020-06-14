import React from 'react';

//Components
import FooterLink from './FooterLink';

const footerListItems = [
  { text: 'ABOUT', link: '/' },
  { text: 'PRACTICAL INFORMATION', link: '/' },
  { text: 'EVENTS', link: '/' },
  { text: 'SUPPORT', link: '/help-center' },
  { text: 'ADMIN', link: '/admin' },
];

const Footer = () => {
  return (
    <footer>
      <ul className="footer-link-list">
        {footerListItems.map((item, index) => (
          <FooterLink key={`footer-link-${item.name}-${index}`} {...item} />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
