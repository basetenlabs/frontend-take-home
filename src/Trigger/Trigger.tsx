import { Container, Button } from './styled';
import type { TriggerProps } from './types';

function Trigger({ onTrigger }: TriggerProps) {
  return (
    <Container>
      <Button
        type="button"
        onClick={() => onTrigger()}
        data-cy="trigger-implmentation"
      >
        Trigger
      </Button>
    </Container>
  );
}

export default Trigger;
