import { Button } from 'components/Button';
import { Header } from 'components/Header';
import Input from 'components/Input';
import { useForm } from 'react-hook-form';
import { useFormSuggestion } from 'hooks/useRecycle';
import css from './styles.module.scss';
import { useState } from 'react';
import { Modal } from 'components/Modal';

export interface IFormFields {
  nameEstablishment: string;
  tel: string;
  state: string;
  city: string;
  cep: string;
  nameResponsive: string;
  email: string;
}

export default function SuggestionForm() {
  const [open, setOpen] = useState(false);
  const mutate = useFormSuggestion();
  const { register, handleSubmit, reset } = useForm<IFormFields>();

  function onSubmit(data: IFormFields) {
    mutate.mutate(data);

    if (mutate.isSuccess) {
      setOpen(true);
      console.log('op');
    }
  }

  function onCloseModal() {
    reset();
    setOpen(false);
  }

  return (
    <section className={css.suggestionFormWrapper}>
      <Modal open={open} setOpen={setOpen}>
        <div className={css.suggestionModal}>
          <h3>Enviado com sucesso!</h3>
          <p>Vamos analisar as informações e entraremos em contato com você!</p>
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
        name="Formulário"
        routeArrayPos={['Inicio', 'Ajuda', 'Como suger...', 'Fomulário']}
      />

      <form className={css.suggestionForm} onSubmit={handleSubmit(onSubmit)}>
        <h3>Formulário de sugestão</h3>
        <section className={css.companySectionStep}>
          <p>Informações do estabelecimento:</p>

          <Input
            label="Nome: *"
            placeholder="Ex: nome do estabelecimento aqui"
            fullwidth="true"
            {...register('nameEstablishment', { required: true })}
          />

          <Input
            label="Telefone (com DDD): *"
            fullwidth="true"
            placeholder="Ex: (99) 9.9999-9999"
            {...register('tel', { required: true })}
          />

          <Input
            label="CEP: *"
            placeholder="Ex: 00000-000"
            fullwidth="true"
            {...register('cep', { required: true })}
          />

          <section className={css.cityAndUf}>
            <Input
              label="Cidade: *"
              placeholder="Ex: Fortaleza"
              className={css.cityInput}
              fullwidth="true"
              {...register('city', { required: true })}
            />

            <Input
              label="UF: *"
              placeholder="Ex: CE"
              className={css.ufInput}
              fullwidth="true"
              {...register('state', { required: true, maxLength: 2 })}
            />
          </section>
        </section>

        <section className={css.formResponsibleStep}>
          <p>Informação do responsável</p>
          <Input
            label="Nome: *"
            placeholder="Ex: nome do responsável aqui"
            fullwidth="true"
            {...register('nameResponsive', { required: true })}
          />

          <Input
            label="Email: *"
            fullwidth="true"
            placeholder="Ex: seuemail@dominio.com"
            {...register('email', { required: true })}
          />
        </section>
        <Button className={css.button} type="submit" fullwidth="true">
          Enviar informações
        </Button>
      </form>
    </section>
  );
}
