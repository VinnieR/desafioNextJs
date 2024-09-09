// app/Components/__tests__/Header.test.js
import { render, screen } from '@testing-library/react';
import Header from '../Header.styled';

describe('Header Component', () => {
  it('should render the header', () => {
    render(<Header />);

    // Verifica se a imagem do header é renderizado
    const headerElement = screen.getByAltText('Store logo');
    expect(headerElement).toBeInTheDocument();
  });
});
