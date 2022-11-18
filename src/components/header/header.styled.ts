import { styled, theme } from '../../styles';

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: `linear-gradient(to right, ${theme.colors.darkblue1}, ${theme.colors.darkBlue2})`,
  height: '100px',
  padding: '2rem 12rem',
  zIndex: 1,

  position: 'fixed',
  width: '100%',

  a: {
    fontSize: '$md',
    color: '$fontLight',
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',

    '&:hover': {
      filter: 'brightness(0.8)',
    }
  }
});

export const HomeLink = styled('div', {
  a: {
    fontSize: '$xl',
    fontWeight: '500',
    background: `-webkit-linear-gradient(${theme.colors.lightGreen}, ${theme.colors.lightBlue})`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  }
});

export const MenuList = styled('ul', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$space1',
  listStyle: 'none',
});