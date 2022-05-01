import css from './styles.module.scss';
import { Info } from 'components/Information';
import { Header } from 'components/Header';

export default function InformationView() {
  return (
    <section className={css.informationViewWrapper}>
      <Header
        name="Empresa"
        routeArrayPos={['Início', 'Baterias', 'Empresa']}
        navigateTo="/teste"
      />

      <div className={css.logo}></div>

      <div className={css.infoEstab}>
        <Info
          title={'Informações sobre o estabelecimento: '}
          firstSubTitle={'Nome: '}
          firstInfo={'Natura'}
          secondSubTitle={'Telefone: '}
          secondInfo={'(00)0000000'}
          thirdSubTitle={'Horário de funcionamento: '}
          thirdInfo={'Segunda a sexta, das 8h até às 17h.'}
        />

        <section className={css.line} />

        <Info
          title={'Endereço do estabelecimento:'}
          firstSubTitle={'CEP: '}
          firstInfo={'00000-000'}
          secondSubTitle={'Cidade, UF: '}
          secondInfo={'São Paulo, SP'}
          thirdSubTitle={'Rua, Nº, Bairro: '}
          thirdInfo={'Nome da rua, Nº, Nome do bairro'}
        />

        <section className={css.line} />

        <Info
          title={'Sobre o estabelecimento:'}
          firstSubTitle={'Tipos de materiais aceitos: '}
          firstInfo={'Baterias, cósmesticos e plásticos'}
          secondSubTitle={'Como realizar o descarte: '}
          secondInfo={
            'Separe os resíduos recicláveis e leve-los até o estabelecimento'
          }
          thirdSubTitle={'O que acontece com os materiais: '}
          thirdInfo={
            'O que acontece com os materiais: Fazemos o descarte de forma correta do que não dá para reaproveitar e reaproveitamos boa parte para novos produtos.'
          }
        />
      </div>
    </section>
  );
}
