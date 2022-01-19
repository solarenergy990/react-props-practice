import s from "./Svg.module.css";

//   'logo',

// Social icon
//   'icon-facebook-black',
//   'icon-instagram-black',
//   'icon-linkedin-black',
//   'icon-twitter-black',
//   'icon-github',
//   'icon-git',
//   'icon-twitter-black',

// Buttons & more
//   'icon-html-five2',
//   'icon-css3',
//   'icon-user-minus',
//   'icon-user-plus',
//   'icon-cart',
//   'icon-pencil',
//   'icon-home3',
// ]

const Svg = ({ iconName }) => {
  return (
    <svg viewBox="0 0 38 38" className={s[`${iconName}`]}>
      <use xlinkHref={`/sprite.svg#${iconName}`} />
    </svg>
  );
};

export default Svg;
