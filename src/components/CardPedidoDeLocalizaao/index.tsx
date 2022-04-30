import css from './syles.module.scss';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

export function CardPedidoDeLocalizaao() {
  return (
    <div className={css.contaienr}>
      <div className={css.cardHeader}>
        <h3 className={css.h3}>
          Forneça sua localização para indicartmos os locais mais proximos
        </h3>
        <div className={css.border}></div>
        <div className={css.camposInput}>
          <div>
            <h4 className={css.h4}>Seu estado:</h4>
            <Input className={css.campoInput} placeholder="Ex: Aracaju" />
          </div>
          <div>
            <h4 className={css.h4}>Sua ciadade:</h4>
            <Input className={css.campoInput} placeholder="Sergipe" />
          </div>
        </div>
        <div className={css.containerBtn}>
          <Button nome="Cancelar" className={css.buttonCancelar} />
          <Button nome="Salvar" className={css.buttonSalvar} />
        </div>
      </div>
    </div>
  );
}
