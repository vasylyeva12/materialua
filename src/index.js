import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import CartPage from './pages/CartPage'
import ErrorPage from './pages/ErrorPage'
import ProductsPage from './pages/ProductsPage'
import SingleUserPage from './pages/SingleUserPage'
import TodosPage from './pages/TodosPage'
import UserPage from './pages/UserPage'
import { store } from './store/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: '/',
      //   element: <MainPage />,
      // },
      {
        path: '/todos',
        element: <TodosPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/users',
        element: <UserPage />,
      },
      {
        path: '/users/:id',
        element: <SingleUserPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
