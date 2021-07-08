import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '.';

describe('Button', () => {
  it('should render the medium size by default', async () => {
    renderWithTheme(<Button> Buy now </Button>);
    const sut = screen.getByRole('button', { name: /Buy now/ });
    expect(sut).toHaveStyle({
      padding: '1.2rem 3.2rem',
      'font-size': '1.6rem'
    });
  });

  it('should render the small size', async () => {
    renderWithTheme(<Button size="small"> Buy now </Button>);
    const sut = screen.getByRole('button', { name: /Buy now/ });
    expect(sut).toHaveStyle({
      padding: '0.8rem',
      'font-size': '1.4rem'
    });
  });

  it('should render the medium size', async () => {
    renderWithTheme(<Button size="medium"> Buy now </Button>);
    const sut = screen.getByRole('button', { name: /Buy now/ });
    expect(sut).toHaveStyle({
      padding: '1.2rem 3.2rem',
      'font-size': '1.6rem'
    });
  });

  it('should render the large size', async () => {
    renderWithTheme(<Button size="large"> Buy now </Button>);
    const sut = screen.getByRole('button', { name: /Buy now/ });
    expect(sut).toHaveStyle({
      padding: '1.6rem 3.2rem',
      'font-size': '2.5rem'
    });
  });

  it('should render fullWidth version', async () => {
    renderWithTheme(<Button fullWidth> Buy now </Button>);
    const sut = screen.getByRole('button', { name: /Buy now/ });
    expect(sut).toHaveStyle({
      width: '100%'
    });
  });

  it('should render an icon version', async () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}> Buy now </Button>
    );
    const sut = screen.getByRole('button', { name: /Buy now/ });
    const sutIcon = screen.getByTestId('icon');

    expect(sut).toBeInTheDocument();
    expect(sutIcon).toBeInTheDocument();
  });

  it('should render as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        {' '}
        Buy now{' '}
      </Button>
    );

    const buttonElement = screen.getByRole('link', { name: /Buy now/i });
    expect(buttonElement).toHaveAttribute('href', '/link');
  });
});
