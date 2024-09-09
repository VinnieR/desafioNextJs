// app/Components/__tests__/Footer.test.js
import { render, screen } from '@testing-library/react';
import Footer from '../Footer.styled';  // Verifique se este é o arquivo correto

describe('Footer Component', () => {
  it('should render the footer', () => {
    render(<Footer />);

    // Verifica se o texto do footer é renderizado
    const footerElement = screen.getByText('Made by Vinicius Rodrigues');
    expect(footerElement).toBeInTheDocument();
  });
});
