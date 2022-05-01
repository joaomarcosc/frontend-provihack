import { Button } from 'components/Button';
import { Header } from 'components/Header';
import Input from 'components/Input';
import css from './styles.module.scss';

export default function SuportForm() {
  return (
    <section className={css.suportFormWrapper}>
      <Header
        navigateTo="/ajuda"
        name="Entrar em contato"
        routeArrayPos={['Inicio', 'Ajuda', 'Entrar em contato']}
      />

      <form className={css.suportForm}>
        <p className={css.title}>Como entrar em contato com o suporte?</p>
        <p className={css.answer}>
          <span className={css.ask}>{'Resposta:'}</span>
          {'Preencha as informações abaixo e envie.'}
        </p>

        <Input
          className={css.input}
          label="Nome: *"
          placeholder="Ex: seu nome aqui"
          fullwidth="true"
        />

        <Input
          className={css.input}
          label="Assunto: *"
          placeholder="Ex: Assunto ou motivo de contato"
          fullwidth="true"
        />

        <Input
          className={css.input}
          label="E-mail: *"
          placeholder="Ex: seuemail@dominio.com"
          fullwidth="true"
        />

        <Input
          className={css.lastInput}
          label="Mensagem: *"
          placeholder="Ex: Escreva sua mensagem aqui"
          fullwidth="true"
        />
        <Button fullwidth="true">Enviar mensagem</Button>
      </form>
    </section>
  );
}
