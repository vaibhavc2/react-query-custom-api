import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import { Home, PageNotFound } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        {/* nested routes */}
        <Route path="" element={<Home />} />
        {/* Other Routes to be configured here */}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
