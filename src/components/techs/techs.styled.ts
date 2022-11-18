import { styled, theme, keyframes } from '../../styles';

export const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$space4',
  height: '520px',
  width: '520px',
  margin: 'auto',

  '& > span': {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '500',
    color: '$darkBlue2',
  }
});

export const TechDescription = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '16px',
  color: '$darkBlue2',
  lineHeight: 1.5,
  width: '60%',
  zIndex: 3,


  '& > img': {
    marginBottom: '$space1',
  },

  '& > strong': {
    fontSize: '18px',
    marginBottom: '$space1',
  },

  '& > a': {
    cursor: 'pointer',
    marginTop: '$space1',
    fontSize: '14px',
  }
});

export const DashedCircle = styled('div', {
  position: 'absolute',
  border: `2px dashed ${theme.colors.lightGreen}`,
  borderRadius: '50%',
  minHeight: '500px',
  maxHeight: '500px',
  minWidth: ' 500px',
  transition: 'all 2s ease',
  left: '50%',
  transform: 'translateX(-50%)',
});

const rotateSphere = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(365deg)' },
});

export const Sphere = styled('img', {
  display: 'flex',
  justifySelf: 'center',
  alignSelf: 'center',
  margin: '0 auto',
  height: '480px',
  width: '505px',
  opacity: '.5',

  animation: `${rotateSphere} 100s linear infinite`,
  transition: '.5s',
});

export const GlobeItemImage = styled('img', {
  height: 'auto',
  width: '60px',
  objectFit: 'cover',
  overflow: 'hidden',
  transition: 'all 0.25s ease',
  borderRadius: '12px',
});

export const DotCircle = styled('div', {
  background: '#fff',
  borderRadius: '50%',
  zIndex: 3,
  minWidth: '25px',
  width: '25px',
  height: '25px',
  transition: 'all 0.25s ease',
  border: `8px solid ${theme.colors.lightGreen}`,
});

export const GlobeItem = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  zIndex: 3,
  transition: 'all 1s ease',
  cursor: 'pointer',

  variants: {
    isActive: {
      false: {
        '& > img': { // GlobeItemImage
          filter: 'grayscale(100%)',
        },
        '& > div': { // DotCircle
          border: '8px solid  #CFCFCF',
        }
      }
    }
  },

  '&.react-tech-item': {
    top: -72,
    left: '50%',
    transform: 'translateX(-50%)',
    flexDirection: 'column-reverse',

    '& > div': { // DotCircle
      marginTop: '$space1',
    }
  },


  '&.html-tech-item': {
    top: 35,
    left: -5,
    flexDirection: 'row-reverse',

    '& > div': { // DotCircle
      marginTop: '$space2',
      marginLeft: '$space1',
    }
  },

  '&.css-tech-item': {
    top: 35,
    right: 10,
    flexDirection: 'row',

    '& > div': { // DotCircle
      marginTop: '$space2',
      marginLeft: '$space1',
    }
  },

  '&.ts-tech-item': {
    left: -28,
    transform: 'translateX(-50%)',
    flexDirection: 'row-reverse',

    '& > div': { // DotCircle
      marginLeft: '$space1',
    }
  },

  '&.js-tech-item': {
    right: -79,

    '& > div': { // DotCircle
      marginRight: '$space1',
    }
  },

  '&.next-tech-item': {
    left: -17,
    bottom: 50,
    flexDirection: 'row-reverse',

    '& > div': { // DotCircle
      marginLeft: '$space1',
      marginBottom: '$space2',
    }
  },

  '&.styled-tech-item': {
    right: -20,
    bottom: 50,
    flexDirection: 'row',

    '& > div': { // DotCircle
      marginRight: '$space1',
      marginBottom: '$space2',
    }
  },

  '&.redux-tech-item': {
    bottom: -77,
    left: '50%',
    transform: 'translateX(-50%)',
    flexDirection: 'column',

    '& > div': { // DotCircle
      marginBottom: '$space1',
    }
  }
});


