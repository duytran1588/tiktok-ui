import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(({ path, component, layout }, index) => {
            let Layout = DefaultLayout;
            const Page = component;

            if (layout) {
              Layout = layout;
            } else if (layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
