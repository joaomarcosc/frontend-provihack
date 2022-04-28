import { Button } from 'components/Button';
import { useStores } from 'stores';
import { Container } from './styles';
import { ReactComponent as SearchSvg } from '../../assets/icons/search-icon.svg';
import { Input } from 'components/Input';

export function Header() {
  const {
    counterStore: { increment, count, decrement }
  } = useStores();

  return (
    <Container>
      <Input icon={<SearchSvg />} placeholder="Pesquisar material" />
      <h1>Boilerplate</h1>
      <Button onClick={decrement}>Decrementar</Button>
      {count}
      <Button onClick={increment}>Incrementar</Button>
    </Container>
  );
}
