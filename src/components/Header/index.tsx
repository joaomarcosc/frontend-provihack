import { useStores } from 'stores';
import { ReactComponent as SearchSvg } from '../../assets/icons/search-icon.svg';
import { Input } from 'components/Input';

export function Header() {
  const {
    counterStore: { increment, count, decrement }
  } = useStores();

  return (
    <section>
      <Input icon={<SearchSvg />} placeholder="Pesquisar material" />
      <h1>Boilerplate</h1>
      <button onClick={decrement}>Decrementar</button>
      {count}
      <button onClick={increment}>Incrementar</button>
    </section>
  );
}
