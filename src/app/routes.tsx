import React from 'react';
import { Routes as RouteContainer, Route } from 'react-router-dom';

const Presentation = React.lazy(() => import('../containers/Presentation'));
const RecycleTypes = React.lazy(() => import('../containers/RecycleTypes'));
const SuggestionForm = React.lazy(() => import('../containers/SuggestionForm'));
const HelpPage = React.lazy(() => import('../containers/HelpPage'));
const InformationView = React.lazy(
  () => import('../containers/InformationView')
);
const SuportForm = React.lazy(() => import('../containers/SuportForm'));
const AboutUs = React.lazy(() => import('../containers/AboutUs'));

export function Routes() {
  return (
    <React.Suspense fallback="Carregando">
      <RouteContainer>
        <Route path="/">
          <Route index element={<Presentation />} />
          <Route path="tipos-de-materiais" element={<RecycleTypes />} />
          <Route path="submeter-sugestao" element={<SuggestionForm />} />
          <Route path="informacao" element={<InformationView />} />
          <Route path="ajuda" element={<HelpPage />} />
          <Route path="suporte" element={<SuportForm />} />
          <Route path="sobre-nos" element={<AboutUs />} />
        </Route>
      </RouteContainer>
    </React.Suspense>
  );
}
