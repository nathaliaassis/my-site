import { styled } from '../../../styles';


export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$space2',

  div: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  svg: {
    position: 'absolute',
    left: '50%',
    bottom: '$space2',
    transform: 'translateX(-50%)',
    color: '$lightBlue',
  }
});

export const Text = styled('span', {
  fontSize: '$lg',
  lineHeight: '1.8',
  color: '$fontLight',
});

export const Name = styled('h1', {
  fontSize: '4rem',
  fontWeight: '500',
  lineHeight: '1.6',
});

export const ArrowImage = styled('img', {
  position: 'absolute',
  left: '50%',
  bottom: '$space2',
  transform: 'translateX(-50%)',
  color: 'red',
  fill: 'red'
});