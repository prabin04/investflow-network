import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CompanyCard } from '@/components/CompanyCard';
import CompanyProfile from '@/pages/CompanyProfile';

const renderWithRouter = (ui: React.ReactNode, initialEntries: string[]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {ui}
    </MemoryRouter>
  );
};

describe('UI', () => {
  it('CompanyCard links to slug', () => {
    renderWithRouter(<CompanyCard slug="capital-partners" name="Capital Partners" tagline={null} industries={[]} />, ['/']);
    const link = screen.getByRole('link', { name: /view company profile for capital partners/i });
    expect(link).toHaveAttribute('href', '/companies/capital-partners');
  });

  it('CompanyProfile shows placeholders for missing fields', async () => {
    render(
      <MemoryRouter initialEntries={["/companies/capital-partners"]}>
        <Routes>
          <Route path="/companies/:slug" element={<CompanyProfile />} />
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByText('Capital Partners')).toBeInTheDocument();
    expect(screen.getByText('TBD')).toBeInTheDocument();
    expect(screen.getByText('Description coming soon')).toBeInTheDocument();
  });
});
