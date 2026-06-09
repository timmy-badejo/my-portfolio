import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Seo from './components/Seo';

test('sets portfolio metadata', async () => {
  render(
    <MemoryRouter>
      <Seo />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(document.title).toBe('Timmy Bad | Visual Designer & Front-End Developer');
  });

  expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
    'content',
    expect.stringContaining('Timmy Bad')
  );
});
