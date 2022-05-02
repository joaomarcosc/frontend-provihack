import { Button } from 'components/Button';
import { Header } from 'components/Header';
import Input from 'components/Input';
import { Modal } from 'components/Modal';
import { useEffect, useState } from 'react';
import css from './style.module.scss';
import { ReactComponent as LocationIcon } from 'assets/icons/location-icon.svg';
import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { useCompanyByName } from 'hooks/useRecycle';
import { CompanyCard } from './CompanyCard';
import { useForm } from 'react-hook-form';
import { IRecycle } from 'api/schemas/recycle';

interface IFormFields {
  uf: string;
  city: string;
}

export default function SearchLocation() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [open, setOpen] = useState<boolean>(true);
  const { data } = useCompanyByName(name ?? '');
  const { register, handleSubmit } = useForm<IFormFields>();
  const [currentLocations, setCurrentLocations] = useState<
    IRecycle[] | undefined
  >(data?.data);

  function onSubmit(dataForm: IFormFields) {
    const newData = data?.data.filter(
      (item) => item.state === dataForm.uf || item.city === dataForm.city
    );

    setCurrentLocations(newData);
    setOpen(false);
  }

  useEffect(() => {
    setCurrentLocations(data?.data);
  }, [data?.data]);

  return (
    <section className={css.searchLocationWrapper}>
      <Header
        name={name ?? ''}
        routeArrayPos={['Início', name ?? '']}
        navigateTo="/tipos-de-materiais"
      />
      <Modal open={open} setOpen={setOpen}>
        <form className={css.companyModal} onSubmit={handleSubmit(onSubmit)}>
          <h3>
            Forneça um estado e/ou uma cidade, para indicarmos locais mais
            próximos:
          </h3>

          <section className={css.lineModal} />

          <Input
            fullwidth="true"
            label="UF:"
            className={css.input}
            placeholder="Ex: CE"
            {...register('uf')}
          />

          <Input
            fullwidth="true"
            label="Cidade:"
            className={css.input}
            placeholder="Ex: Fortaleza"
            {...register('city')}
          />

          <section className={css.modalButtons}>
            <Button
              size="small"
              theme="secondary"
              onClick={() => setOpen(false)}
              type="button"
            >
              Cancelar
            </Button>
            <Button size="small">Salvar</Button>
          </section>
        </form>
      </Modal>

      <section className={css.section}>
        <button className={css.filterButton} onClick={() => setOpen(true)}>
          <p>
            <LocationIcon className={css.firstIcon} />
            <span>Localização: Cidade, Estado</span>
          </p>
          <ArrowSvg className={css.secondIcon} />
        </button>
      </section>

      <section className={css.line} />

      <section className={css.section}>
        <p className={css.sectionTitle}>
          Estabelecimentos próximos à localização selecionada:
        </p>

        <section className={css.cards}>
          {currentLocations?.map((item) => (
            <CompanyCard
              key={`${item.id}-card-screen`}
              company={item.name}
              city={item.city}
              state={item.state}
              onClick={() => navigate(`/informacao?id=${item.id}&name=${name}`)}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
