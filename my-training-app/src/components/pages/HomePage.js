
import Banner from '../assets/images/banner.png'
import { Header } from '../Header';
import '../hojas-stilos/HomePage.css';
import { Login } from './Login';

export const HomePage = () => {
    return (
        <section className="banner">
            <Header />
            
            <img src={Banner} alt="" className="banner" />

            
            
        </section>
    )
}