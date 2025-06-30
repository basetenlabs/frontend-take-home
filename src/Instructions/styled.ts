import styled from '@emotion/styled';

export const Container = styled('div')({
  flex: 0,
  margin: '15px',

  '& li': {
    marginBottom: '4px',
  },

  '& em': {
    color: '#333',
    fontWeight: 700,
  },

  '& blockquote': {
    textAlign: 'center',
  },
});

export const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '600px',
});

export const Title = styled('h1')({
  flex: 1,
  fontSize: '30px',
  lineHeight: '44px',
  fontWeight: 700,
  textAlign: 'center',
});

export const Note = styled('blockquote')({
  textAlign: 'center',
});
