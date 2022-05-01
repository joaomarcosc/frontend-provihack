import React from 'react';
import { Routes as RouteContainer, Route } from 'react-router-dom';

const Presentation = React.lazy(() => import('../containers/Presentation'));
const RecycleTypes = React.lazy(() => import('../containers/RecycleTypes'));
const SuggestionForm = React.lazy(() => import('../containers/SuggestionForm'));
const Companies = React.lazy(() => import('../containers/Companies'));
const InformationView = React.lazy(
  () => import('../containers/InformationView')
);

export function Routes() {
  return (
    <React.Suspense fallback="Carregando">
      <RouteContainer>
        <Route path="/">
          <Route index element={<Presentation />} />
          <Route path="tipos-de-materiais" element={<RecycleTypes />} />
          <Route path="submeter-sugestao" element={<SuggestionForm />} />
          <Route path="informacao" element={<InformationView />} />
          <Route path="companies" element={<Companies />} />
        </Route>
      </RouteContainer>
    </React.Suspense>
  );
}
