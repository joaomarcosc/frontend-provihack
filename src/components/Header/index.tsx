import { useStores } from 'stores';
import { ReactComponent as SearchSvg } from '../../assets/icons/search-icon.svg';
import { Input } from 'components/Input';
import { CardRecycle } from 'components/CardRecycle';
import { Modal } from 'components/Modal';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
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
      <Modal open={open} setOpen={setOpen}>
        <p>opa</p>
      </Modal>
    </section>
  );
}
