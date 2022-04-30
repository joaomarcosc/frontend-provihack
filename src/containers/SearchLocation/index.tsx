import { Button } from 'components/Button';
import Input from 'components/Input';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import css from './style.module.scss';
export default function SearchLocation() {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className={css.apresentationWrapper}>
        <div className={css.cardHeader}>
          <h3 className={css.h3}>
            Forneça sua localização para indicartmos os locais mais proximos
          </h3>
          <div className={css.border}></div>
          <div className={css.camposInput}>
            <div>
              <h4 className={css.h4}>Seu estado:</h4>
              <Input className={css.campoInput} placeholder="Ex: Aracaju" />
            </div>
            <div>
              <h4 className={css.h4}>Sua ciadade:</h4>
              <Input className={css.campoInput} placeholder="Sergipe" />
            </div>
          </div>
          <div className={css.containerBtn}>
            <Button nome="Cancelar" className={css.buttonCancelar} />
            <Button nome="Salvar" className={css.buttonSalvar} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
