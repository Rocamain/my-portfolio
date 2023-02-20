import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Navigate,
} from 'react-router-dom';
import Body from './components/main/Body';
import Main from './components/outlets/Main';
import Error from './components/outlets/Error';
import NotFound from './components/outlets/NotFound';

const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Body />} path="/" errorElement={<Navigate to="error" />}>
      <Route
        index
        path="/"
        element={<Main />}
        errorElement={<Navigate to="error" />}
      />
      <Route element={<Error />} path="error" />
      <Route path="/not_found" element={<NotFound />} />
      <Route path="/*" element={<Navigate to="not_found" />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routerJSX} />;
}

export default App;
