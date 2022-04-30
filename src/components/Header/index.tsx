import { useStores } from 'stores';
import { Modal } from 'components/Modal';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  const {
    counterStore: { increment, count, decrement }
  } = useStores();

  return (
    <section>
      <h1>Boilerplate</h1>
      <button onClick={decrement}>Decrementar</button>
      {count}
      <button onClick={increment}>Incrementar</button>
      <Modal open={open} setOpen={setOpen}>
        <p>opa</p>
      </Modal>
    </section>
  );
}
