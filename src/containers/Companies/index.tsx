import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Header } from 'components/Header';
import Input from 'components/Input';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import css from './style.module.scss';
import { ReactComponent as SearchSvg } from 'assets/icons/search-icon.svg';

export default function SearchLocation() {
  const [open, setOpen] = useState<boolean>(false);

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
              <div className={css.campoInput}>
                <Input
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
      <div className={css.btnSearchCompanies}>
        <Button className={css.noBorder} nome="Localização: Cidade, Estado" />
      </div>
      <div className={css.border}></div>
      <div className={css.containerBox}>
        <div className={css.h3Companies}>
          Estabelecimentos na sua cidade que aceitam baterias:
        </div>
        <div>
          <div className={css.h3Companies}>
            Icones e o card com info das empresas
          </div>
          <div className={css.border}></div>
          <div className={css.h3Companies}>
            Estabelecimentos no seu estado que aceitam baterias:
          </div>
        </div>
      </div>
    </>
  );
}
