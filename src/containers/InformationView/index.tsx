import css from './styles.module.scss';
import { Info } from 'components/Information';
import { Header } from 'components/Header';
import { useCompanyById } from 'hooks/useRecycle';
import { ReactComponent as RecycleSvg } from 'assets/icons/recycle-icon.svg';

export default function InformationView() {
  const { data } = useCompanyById('10339c2a-f49d-4836-bb5a-1889a2b9bbee');

  return (
    <section className={css.informationViewWrapper}>
      <Header
        name="Empresa"
        routeArrayPos={['Início', 'Baterias', data?.data.name ?? '']}
        navigateTo="/teste"
      />

      <div className={css.logo}>{<RecycleSvg />}</div>

      <div className={css.infoEstab}>
        <Info
          title={'Informações sobre o estabelecimento: '}
          firstSubTitle={'Nome: '}
          firstInfo={data?.data.name ?? 'carregando'}
          secondSubTitle={'Telefone: '}
          secondInfo={data?.data.tel ?? ''}
          thirdSubTitle={'Horário de funcionamento: '}
          thirdInfo={data?.data.workingTime ?? ''}
        />

        <section className={css.line} />

        <Info
          title={'Endereço do estabelecimento:'}
          firstSubTitle={'CEP: '}
          firstInfo={data?.data.cep ?? ''}
          secondSubTitle={'Cidade, UF: '}
          secondInfo={data?.data.city ?? ''}
          infoState={data?.data.state ?? ''}
          thirdSubTitle={'Rua, Nº, Bairro: '}
          thirdInfo={data?.data.adress ?? ''}
        />

        <section className={css.line} />

        <Info
          title={'Sobre o estabelecimento:'}
          firstSubTitle={'Tipos de materiais aceitos: '}
          firstInfo={data?.data.discart ?? ''}
          secondSubTitle={'Como realizar o descarte: '}
          secondInfo={data?.data.howToDiscart ?? ''}
          thirdSubTitle={'O que acontece com os materiais: '}
          thirdInfo={data?.data.howDoesDiscart ?? ''}
        />
      </div>
    </section>
  );
}
