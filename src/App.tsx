import { Route, Routes } from "react-router-dom";
import { ExercisesList, SearchForm, NotFound } from "pages";
import { ROUTES } from "./constants";

export const App = () => (
  <Routes>
    <Route path={ROUTES.homePage} element={<SearchForm />} />
    <Route path={ROUTES.exercisesList} element={<ExercisesList />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);
