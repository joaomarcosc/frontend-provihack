import { ReactComponent as BatteryIcon } from 'assets/icons/battery.svg';
import { ReactComponent as CosmeticIcon } from 'assets/icons/cosmetic.svg';
import { ReactComponent as ElectronicIcon } from 'assets/icons/electronics.svg';
import { ReactComponent as RubbleIcon } from 'assets/icons/rubble.svg';
import { ReactComponent as BottleIcon } from 'assets/icons/bottle.svg';
import { ReactComponent as TinIcon } from 'assets/icons/tin.svg';
import { ReactComponent as FurnitureIcon } from 'assets/icons/furniture.svg';
import { ReactComponent as MetalsIcon } from 'assets/icons/metals.svg';
import { ReactComponent as PaperIcon } from 'assets/icons/paper.svg';
import { ReactComponent as PlasticsIcon } from 'assets/icons/plastics.svg';
import { ReactComponent as MedicinesIcon } from 'assets/icons/medicines.svg';
import { ReactComponent as PaintsIcon } from 'assets/icons/paints.svg';
import { ReactComponent as GlassesIcon } from 'assets/icons/glasses.svg';

export const recycleTypes = [
  {
    icon: <BatteryIcon />,
    title: 'Baterias',
    description: 'Descarte baterias que não usa mais.'
  },
  {
    icon: <CosmeticIcon />,
    title: 'Cosméticos',
    description: 'Descarte restos de cosméticos que não usa mais.'
  },
  {
    icon: <ElectronicIcon />,
    title: 'Eletrônicos',
    description: 'Descarte eletrônicos que não usa mais.'
  },
  {
    icon: <RubbleIcon />,
    title: 'Entulhos',
    description: 'Descarte entulhos que não servem.'
  },
  {
    icon: <BottleIcon />,
    title: 'Garrafas PET',
    description: 'Descarte garrafas PET que não servem mais.'
  },
  {
    icon: <TinIcon />,
    title: 'Latas',
    description: 'Descarte latas que você não usa.'
  },
  {
    icon: <MetalsIcon />,
    title: 'Metais',
    description: 'Descarte metais que você não usa.'
  },
  {
    icon: <FurnitureIcon />,
    title: 'Móveis',
    description: 'Descarte móveis que você não usa mais.'
  },
  {
    icon: <PaperIcon />,
    title: 'Papel',
    description: 'Descarte papéis que não servem mais.'
  },
  {
    icon: <PlasticsIcon />,
    title: 'Plásticos',
    description: 'Descarte plásticos que não servem mais.'
  },
  {
    icon: <MedicinesIcon />,
    title: 'Remédios',
    description: 'Descarte restos de remédios que não usa mais.'
  },

  {
    icon: <PaintsIcon />,
    title: 'Tintas',
    description: 'Descarte restos de tintas que não usa mais.'
  },
  {
    icon: <GlassesIcon />,
    title: 'Vidros',
    description: 'Descarte os vidros que não usa mais.'
  }
];

export function removeSpecialCharAndLowerCase(str: string) {
  return str
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
