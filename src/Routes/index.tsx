import { Home } from "containers/Home";
import { Routes as RouteContainer, Route } from "react-router-dom";

export function Routes() {
  return (
    <RouteContainer>
      <Route path="/" element={<Home />} />
    </RouteContainer>
  );
}
