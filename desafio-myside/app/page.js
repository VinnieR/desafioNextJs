'use client'

import GlobalStyle from "./Components/GlobalStyles/GlobalStyle";
import Header from "./Components/Header.styled";
import Footer from "./Components/Footer.styled";
import Products from "./Components/Products";


export default function Home() {
  return (
    <div className="Home">
      <GlobalStyle />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}
