import { Button } from 'components/Button';
import { Header } from 'components/Header';
import Input from 'components/Input';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import css from './style.module.scss';

export default function SearchLocation() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className={css.apresentationWrapper}>
          <div className={css.cardHeader}>
            <h3 className={css.h3}>
              Forneça sua localização para indicarmos os locais mais proximos
            </h3>
            <div className={css.border}></div>
            <div className={css.camposInput}>
              <Input
                className={css.campoInput}
                label="Seu estado:"
                placeholder="Ex: Aracaju"
                fullwidth
              />
              <div>
                <Input
                  className={css.campoInput}
                  label="Sua cidade:"
                  placeholder="Ex: Sergipe"
                  fullwidth
                />
              </div>
            </div>
            <div className={css.containerBtn}>
              <Button nome="Cancelar" className={css.buttonCancelar} />
              <Button nome="Salvar" className={css.buttonSalvar} />
            </div>
          </div>
        </div>
      </Modal>
      <Header
        navigateTo="/companies"
        routeArrayPos={['Início', 'Baterias', 'Empresa']}
        name="companies"
      />
    </>
  );
}
