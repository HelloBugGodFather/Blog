import { createBrowserRouter, redirect } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Docs from './pages/Docs'
import DocsView from './pages/DocsView'
import About from './pages/About'

export const router = createBrowserRouter([
    {
        path: '/',
        loader: () => redirect('/home')
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'docs',
                element: <Docs />
            },
            {
                path: 'docs/:index',
                element: <DocsView />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
])
