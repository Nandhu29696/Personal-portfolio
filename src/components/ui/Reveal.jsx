// Fades content in with CSS only (see .reveal / .reveal-load in index.css), so the pre-rendered
// HTML is always visible: nothing waits for JavaScript, and browsers without scroll-driven
// animations, printers and reduced-motion users simply see the content.
//   load   animate once on page load (for the hero), otherwise as the element scrolls into view
//   delay  seconds to wait before a load animation starts
const Reveal = ({ as: Tag = 'div', load = false, delay = 0, className = '', style, children, ...rest }) => (
  <Tag
    className={`${load ? 'reveal-load' : 'reveal'} ${className}`}
    style={load && delay ? { ...style, animationDelay: `${delay}s` } : style}
    {...rest}
  >
    {children}
  </Tag>
);

export default Reveal;
