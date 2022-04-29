import css from './styles.module.scss';
import { ReactComponent as BackSvg } from '../../assets/icons/back-icon.svg';
import { Info } from 'components/Infomartion';

export function InformationView() {
  return (
    <section>
      <div className={css.header}>
        <p className={css.iconHeader}>{<BackSvg />}</p>
        <p className={css.title}>{'Empresa'}</p>
      </div>
      <p className={css.menuText}>{'Início > Baterias > Empresa'}</p>
      <div className={css.infoEstab}>
        <img
          className={css.logoImg}
          src="https://www.esfera.com.vc/ccstore/v1/images/?source=/file/v3848543048111582327/products/img_partner_discount_natura.jpg&height=475&width=475"
        />
        <section className={css.line} />
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
