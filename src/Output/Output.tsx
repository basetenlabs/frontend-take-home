import { Container, Label, Value } from './styled';
import type { OutputProps } from './types';

function Output({ value = 'Nothing selected' }: OutputProps) {
  const selectedString = value.toString();

  return (
    <Container data-cy="selected-output">
      <Label>Selected Output:</Label>
      <Value>{selectedString}</Value>
    </Container>
  );
}

export default Output;
