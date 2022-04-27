import { Button } from "components/Button";
import { useStores } from "stores";
import { Container } from "./styles";

export function Header() {
  const {
    counterStore: { increment, count, decrement },
  } = useStores();

  return (
    <Container>
      <Button onClick={decrement}>Decrementar</Button>
      {count}
      <Button onClick={increment}>Decrementar</Button>
    </Container>
  );
}
