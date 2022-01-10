import { Suspense, lazy } from 'react';

import MainLayout from './layouts/MainLayout';

const Loadable = (Component) => (props) => (
    <Suspense fallback={<h1>Page is Loading</h1> }>
      <Component {...props} />
    </Suspense>
  );

  const Reviews = Loadable(lazy(() => import('./views/Reviews')));

  const routes = [
    {
      path: '/',
      element: (
      <MainLayout />
      ),
      children: [
        {
          path: '/',
          element: (
              <Reviews />
          )
        },
        // {
        //   path: '/Error',
        //   element: (
        //     //! You can put an error page here
        //   )
        // },
      ]
    },
  
  ];

  export default routes;