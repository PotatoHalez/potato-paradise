import { render, screen } from '@testing-library/react'
import Quotes from '../../pages/Quotes'

test('renders PotatoPics correctly', () => {
    render(<Quotes />)
    const firstQuote = screen.getByText('"Are you asking me why people eat potatoes, sir?"');
    const secondQuote = screen.getByText('"You seriously don\t\ know why humans beings eat potatoes?"');
    expect(firstQuote).toBeInTheDocument();
    expect(secondQuote).toBeInTheDocument();
});
