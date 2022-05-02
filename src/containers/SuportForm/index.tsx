import { Button } from 'components/Button';
import { Header } from 'components/Header';
import Input from 'components/Input';
import { Modal } from 'components/Modal';
import { useFormSupport } from 'hooks/useRecycle';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import css from './styles.module.scss';

export interface IFormFields {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export default function SuportForm() {
  const [open, setOpen] = useState(false);
  const mutate = useFormSupport();
  const { register, handleSubmit, reset } = useForm<IFormFields>();

  function onSubmit(data: IFormFields) {
    mutate.mutate(data);

    if (mutate.isSuccess) {
      setOpen(true);
    }
  }

  function onCloseModal() {
    reset();
    setOpen(false);
  }
  return (
    <section className={css.suportFormWrapper}>
      <Modal open={open} setOpen={setOpen}>
        <div className={css.suggestionModal}>
          <h3>Enviado com sucesso!</h3>
          <p>Entraremos em contato com você o mais breve possível!</p>
          <Button
            onClick={onCloseModal}
            theme="secondary"
            size="small"
            className={css.buttonModal}
          >
            OK
          </Button>
        </div>
      </Modal>
      <Header
        navigateTo="/ajuda"
        name="Entrar em contato"
        routeArrayPos={['Inicio', 'Ajuda', 'Entrar em contato']}
      />

      <form className={css.suportForm} onSubmit={handleSubmit(onSubmit)}>
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
          {...register('name', { required: true })}
        />

        <Input
          className={css.input}
          label="Assunto: *"
          placeholder="Ex: Assunto ou motivo de contato"
          fullwidth="true"
          {...register('subject', { required: true })}
        />

        <Input
          className={css.input}
          label="E-mail: *"
          placeholder="Ex: seuemail@dominio.com"
          fullwidth="true"
          {...register('email', { required: true })}
        />

        <label className={css.textAreaContent}>
          <p>Mensagem: *</p>
          <textarea
            className={css.lastInput}
            placeholder="Ex: Escreva sua mensagem aqui"
            {...register('message', { required: true })}
          />
        </label>

        <Button fullwidth="true" className={css.button}>
          Enviar mensagem
        </Button>
      </form>
    </section>
  );
}
