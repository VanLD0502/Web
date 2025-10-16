import moment from 'moment';
import { Header } from "./components/Header"
import { Footer } from './components/Footer';

import hello from './config.json'

console.log(hello);
const { SERVER_API, PAGE_LIMIT } = hello

console.log(`SERVER_API = ${SERVER_API}, PAGE_LIMIT = ${PAGE_LIMIT}`);
export const App = () => {
    return `
        ${Header()}
        <h1>Hello F8 ${moment().format('YY-MM-DD')}</h1>
        ${Footer()}`;
}