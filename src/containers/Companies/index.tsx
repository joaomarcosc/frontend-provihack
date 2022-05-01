import { Button } from 'components/Button';
import { Header } from 'components/Header';
import Input from 'components/Input';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import css from './style.module.scss';
import { ReactComponent as LocationIcon } from 'assets/icons/location-icon.svg';
import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import { useLocation } from 'react-router-dom';
import { useCompanyByName } from 'hooks/useRecycle';
import { removeSpecialCharAndLowerCase } from 'helper/utils';

export default function SearchLocation() {
  const [open, setOpen] = useState<boolean>(true);
  const { state } = useLocation();
  const { data } = useCompanyByName(
    removeSpecialCharAndLowerCase((state as string) ?? '')
  );

  return (
    <section className={css.searchLocationWrapper}>
      <Header
        name={state as string}
        routeArrayPos={['Início', state as string]}
        navigateTo="/tipos-de-materiais"
      />
      <Modal open={open} setOpen={setOpen}>
        <div className={css.companyModal}>
          <h3>
            Forneça um estado e uma cidade, para indicarmos locais mais
            próximos:
          </h3>

          <section className={css.lineModal} />

          <Input
            fullwidth="true"
            label="UF:"
            className={css.input}
            placeholder="Ex: CE"
          />

          <Input
            fullwidth="true"
            label="Cidade:"
            className={css.input}
            placeholder="Ex: Fortaleza"
          />

          <section className={css.modalButtons}>
            <Button
              size="small"
              theme="secondary"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button size="small">Salvar</Button>
          </section>
        </div>
      </Modal>

      <button className={css.filterButton}>
        <p>
          <LocationIcon className={css.firstIcon} />
          <span>Localização: Cidade, Estado</span>
        </p>
        <ArrowSvg className={css.secondIcon} />
      </button>

      <section className={css.line} />

      <p>Estabelecimentos na sua cidade que aceitam baterias:</p>
    </section>
  );
}
