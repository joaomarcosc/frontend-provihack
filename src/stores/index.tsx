import { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import { useCounter } from './useCounter';

interface IProps {
  children: ReactNode;
}

interface IStores {
  counterStore: ReturnType<typeof useCounter>;
}

const storesCtx = createContext<IStores | null>(null);

export function useStores() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return useContext(storesCtx)!;
}

export function StoresProvider(props: IProps) {
  const counterStore = useCounter();

  return (
    <storesCtx.Provider value={{ counterStore }}>
      {props.children}
    </storesCtx.Provider>
  );
}
