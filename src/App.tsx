import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Outlet } from "react-router-dom";

import './styles/style.scss';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
