import React from 'react';
import { Routes as RouteContainer, Route } from 'react-router-dom';

const Presentation = React.lazy(() => import('../containers/Presentation'));
const RecycleTypes = React.lazy(() => import('../containers/RecycleTypes'));

export function Routes() {
  return (
    <React.Suspense fallback="Carregando">
      <RouteContainer>
        <Route path="/">
          <Route index element={<Presentation />} />
          <Route path="tipos-de-materiais" element={<RecycleTypes />} />
        </Route>
      </RouteContainer>
    </React.Suspense>
  );
}
