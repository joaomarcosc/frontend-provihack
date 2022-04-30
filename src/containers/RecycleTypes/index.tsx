/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { ReactComponent as RecycleIcon } from 'assets/icons/recycle-icon.svg';
import { ReactComponent as InfoIcon } from 'assets/icons/info-icon.svg';
import { ReactComponent as FloaterIcon } from 'assets/icons/floater-icon.svg';
import { ReactComponent as SearchSvg } from 'assets/icons/search-icon.svg';
import { recycleTypes } from 'helper/utils';

import css from './styles.module.scss';
import Input from 'components/Input';
import { Card } from 'components/Card';
import { MenuHamburger } from 'components/MenuHamburger';

export default function RecycleTypes() {
  const [recycle, setRecycle] = useState(recycleTypes);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const optionsMenuBar = [
    { icon: <InfoIcon />, title: 'Sobre nós' },
    { icon: <FloaterIcon />, title: 'Preciso de ajuda' }
  ];
  useEffect(() => {
    const newValue = recycle.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          value
            .toLocaleLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    );

    if (value === '') {
      setRecycle(recycleTypes);
      return;
    }

    setRecycle(newValue);
  }, [value]);

  return (
    <section className={css.recycleWrapper}>
      <section className={css.header}>
        <p>
          <RecycleIcon /> Eu reciclo
        </p>

        {open && <section className={css.backdrop} />}
        <MenuHamburger options={optionsMenuBar} open={open} setOpen={setOpen} />
      </section>

      <section className={css.recycleTypeContent}>
        <Input
          placeholder="Pesquisar material"
          icon={<SearchSvg />}
          fullwidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <h3>Selecione o material que deseja reciclar:</h3>
        <div className={css.cardsContainer}>
          {recycle.map((item, index) => (
            <Card
              key={`${index}-recycle-type`}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
