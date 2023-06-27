import { AppProps } from 'next/app';

import { CartShoppingContextProvider } from '../contexts/CartShoppingContext';

import { Header } from '../components/Header';

import { globalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';

globalStyles()

function App({ Component, pageProps }: AppProps) {
    return (
        <CartShoppingContextProvider>
            <Container>
                <Header />

                <Component {...pageProps} />
            </Container>
        </CartShoppingContextProvider>
    )
}

export default App
