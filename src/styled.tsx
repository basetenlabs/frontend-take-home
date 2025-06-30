import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  background: '#f9a877',
  backgroundImage:
    'linear-gradient(157deg, rgba(249, 168, 119, 0.9) 0%, #fff4d8 100%)',
});

export const Implementation = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  height: '100%',
});

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family:
            -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        #root {
          height: 100vh;
        }

        code {
          font-family:
            source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        }
      `}
    />
  );
}
