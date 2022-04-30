import React from 'react';
import { Routes as RouteContainer, Route } from 'react-router-dom';

const Presentation = React.lazy(() => import('../containers/Presentation'));
const HelpPage = React.lazy(() => import('../containers/HelpPage'));

export function Routes() {
  return (
    <React.Suspense fallback="Carregando">
      <RouteContainer>
        <Route path="/">
          <Route index element={<Presentation />} />
          <Route index element={<Presentation />} />
        </Route>
        <Route path="/help">
          <Route index element={<HelpPage />} />
          <Route index element={<HelpPage />} />
        </Route>
      </RouteContainer>
    </React.Suspense>
  );
}
