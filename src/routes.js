import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Secret from './components/Secret';

export default [
    {
        path: '/',
        componet: Home,
        exact: true
    },
    {
        path: '/about',
        componet: About,
        exact: true
    },
    {
        path: '/contact',
        componet: Contact,
        exact: true
    },
    {
        path: '/secret',
        componet: Secret,
        exact: true
    }
];