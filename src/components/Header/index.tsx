import { useStores } from 'stores';
import { ReactComponent as SearchSvg } from '../../assets/icons/search-icon.svg';
import { Input } from 'components/Input';
import { CardRecycle } from 'components/CardRecycle';
import { CardPedidoDeLocalizaao } from 'components/CardPedidoDeLocalizaao';

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
      <CardRecycle icon={<SearchSvg />} title="topper" description="foi?" />
      <CardPedidoDeLocalizaao />
    </section>
  );
}
