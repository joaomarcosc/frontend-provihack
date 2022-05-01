import { Header } from 'components/Header';
import Input from 'components/Input';
import css from './styles.module.scss';

export default function SuggestionForm() {
  return (
    <section className={css.suggestionFormWrapper}>
      <Header
        navigateTo="/ajuda"
        name="Formulário"
        routeArrayPos={['Inicio', 'Ajuda', 'Como suger...', 'Fomulário']}
      />

      <form className={css.suggestionForm}>
        <h3>Formulário de sugestão</h3>
        <section className={css.companySectionStep}>
          <p>Informações do estabelecimento:</p>

          <Input
            label="Nome: *"
            placeholder="Ex: nome do estabelecimento aqui"
            fullwidth
          />

          <Input
            label="Telefone (com DDD): *"
            placeholder="Ex: (99) 9.9999-9999"
            fullwidth
          />

          <Input label="CEP: *" placeholder="Ex: 00000-000" fullwidth />

          <section className={css.cityAndUf}>
            <Input
              label="Cidade: *"
              placeholder="Ex: Fortaleza"
              className={css.cityInput}
            />

            <Input label="UF: *" placeholder="Ex: CE" className={css.ufInput} />
          </section>
        </section>

        <section className={css.formResponsibleStep}>
          <p>Informação do responsável</p>
          <Input
            label="Nome: *"
            placeholder="Ex: nome do responsável aqui"
            fullwidth
          />
          <Input
            label="Email: *"
            placeholder="Ex: seuemail@dominio.com"
            fullwidth
          />
        </section>
      </form>
    </section>
  );
}
