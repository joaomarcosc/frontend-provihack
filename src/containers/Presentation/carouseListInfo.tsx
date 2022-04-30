import { ReactComponent as PeoplesOnTree } from 'assets/icons/peoplesOnTree.svg';
import { ReactComponent as MotherAndChildren } from 'assets/icons/motherAndChildren.svg';
import { ReactComponent as WomanAndTrash } from 'assets/icons/womanAndTrash.svg';
import { ReactNode } from 'react';

export interface ICarouselInfoList {
  image: ReactNode;
  description: string;
}

export const carouselListInfo = [
  {
    image: <PeoplesOnTree />,
    description: 'Essa plataforma é para você que cuida do planeta Terra.'
  },
  {
    image: <MotherAndChildren />,
    description:
      'Aqui você encontra o lugar certo para seu material reciclável.'
  },
  {
    image: <WomanAndTrash />,
    description: 'Empresas que reciclam todos os tipos de materiais.'
  }
];
