import { styled, theme } from '../../styles';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  padding: '10rem 12rem',
  height: '100vh',

  p: {
    position: 'relative',
    lineHeight: 1.8,
    borderWidth: '4px',
    borderStyle:'solid',
    borderRadius: '2px',
    borderImage: `linear-gradient(to bottom, ${theme.colors.lightGreen}, ${theme.colors.lightBlue}) 1 100%`,
    borderRight: 'none',
    paddingLeft: '$space1',
    color: '$fontLight',
  },

  variants: {
    themeColor: {
      dark: {
        background: `linear-gradient(to right, ${theme.colors.darkblue1}, ${theme.colors.darkBlue2})`,
      },
      light: {
        backgroundColor: '#FFF',
      }
    }
  },
  
  h1: {
    background: `-webkit-linear-gradient(${theme.colors.lightGreen}, ${theme.colors.lightBlue})`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
});

export const Title = styled('h2', { 
  fontSize: '$xl',
  fontWeight: '500',
  marginBottom: '2rem',

  variants: {
    themeColor: {
      dark: {
        color: '$fontLight',
      },
      light: {
        color: '$darkBlue2',
      },
    }
  }
});

