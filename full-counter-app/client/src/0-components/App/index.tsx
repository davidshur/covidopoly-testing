import { useState } from 'react';

import Button from '../Button';
import Container from '../Container';
import Display from '../Display';
import Icon from '../Icon';
import Row from '../Row';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      <Row>
        <Display count={count} />
      </Row>
      <Row>
        <Button handleClick={increment}>
          <Icon>
            add
          </Icon>
        </Button>
        <Button handleClick={decrement}>
          <Icon>
            remove
          </Icon>
        </Button>
        <Button handleClick={reset}>
          <Icon>
            redo
          </Icon>
        </Button>
      </Row>
    </Container>
  );

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
}

export default App;
