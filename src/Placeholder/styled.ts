import styled from '@emotion/styled';

export const Container = styled('div')({
  position: 'relative',
  padding: '50px',
  border: '3px dashed #888',
  borderRadius: '10px',
  fontStyle: 'italic',
  color: '#666',
  textAlign: 'center',

  '&::before': {
    content: '"Placeholder"',
    position: 'absolute',
    top: '5px',
    left: '5px',
    padding: '2px 5px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: '#000',
    borderRadius: '2px',
    fontStyle: 'normal',
  },
});
