/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { ReactComponent as RecycleIcon } from 'assets/icons/recycle-icon.svg';
import { ReactComponent as InfoIcon } from 'assets/icons/info-icon.svg';
import { ReactComponent as FloaterIcon } from 'assets/icons/floater-icon.svg';
import { ReactComponent as SearchSvg } from 'assets/icons/search-icon.svg';
import { recycleTypes, removeSpecialCharAndLowerCase } from 'helper/utils';
import css from './styles.module.scss';
import Input from 'components/Input';
import { Card } from 'components/Card';
import { MenuHamburger } from 'components/MenuHamburger';
import { useNavigate } from 'react-router-dom';

export default function RecycleTypes() {
  const [recycle, setRecycle] = useState(recycleTypes);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const optionsMenuBar = [
    { icon: <InfoIcon />, title: 'Sobre nós', navigateTo: '/sobre-nos' },
    { icon: <FloaterIcon />, title: 'Preciso de ajuda', navigateTo: '/ajuda' }
  ];
  useEffect(() => {
    const newValue = recycle.filter((item) =>
      removeSpecialCharAndLowerCase(item.title).includes(
        removeSpecialCharAndLowerCase(value)
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
          fullwidth="true"
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
              onClick={() => navigate(`/${item.title}`)}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
