import { useState } from "react";
import { Button, Container, Input } from "./styles";

export const NumberInput = () => {
  const [value, setValue] = useState(0);

  const handleDecrease = () => {
    setValue(value - 1);
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  return (
    <Container>
      <Button onClick={handleDecrease}>-</Button>
      <Input type="number" value={value} readOnly />
      <Button onClick={handleIncrease}>+</Button>
    </Container>
  );
};
