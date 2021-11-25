import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { GlobalStyles } from './styles/global';
import { HomeContextProvider } from './HomeContext';

export function App() {
  return (
    <>
     <Header />
      <HomeContextProvider>
        <Home />
      </HomeContextProvider>
      <Footer />
      <GlobalStyles />
    </>
  );
}