import { render, fireEvent, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);

    expect(
      screen.getByText(
        'Select a funnel from the list below, or upload your own JSON file to get started.',
      ),
    ).toBeVisible();
  });

  it('renders the funnel preview when a funnel is selected', async () => {
    // prepare
    render(<Home />);

    // act
    fireEvent.click(screen.getByRole('button', { name: '1. Shetland Sheepdogs Facts' }));

    // assert
    expect(
      await screen.findByText('Welcome to Shetland Sheepdogs Facts.', undefined, { timeout: 3000 }),
    ).toBeVisible();
  });
});
