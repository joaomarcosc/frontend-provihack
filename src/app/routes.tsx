import React from 'react';
import { Routes as RouteContainer, Route } from 'react-router-dom';

const Presentation = React.lazy(() => import('../containers/Presentation'));

export function Routes() {
  return (
    <React.Suspense fallback="Carregando">
      <RouteContainer>
        <Route path="/">
          <Route index element={<Presentation />} />
          <Route index element={<Presentation />} />
        </Route>
      </RouteContainer>
    </React.Suspense>
  );
}
