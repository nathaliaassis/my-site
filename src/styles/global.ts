import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray900',
    color: '$gray100'
  },

  'body, input, textarea, button, span, h1, h2, p': {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '0.2rem',
  }
});

