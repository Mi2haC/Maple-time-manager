import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import Root from "./pages/Root.tsx";
import KalosPage from "./pages/Kalos.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "kalos", element: <KalosPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;
