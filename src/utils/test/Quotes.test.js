import { render, screen } from '@testing-library/react'
import Quotes from '../../pages/Quotes'

test('renders PotatoPics correctly', () => {
    render(<Quotes />)
    const quotes = screen.getByText('"Are you asking me why people eat potatoes, sir?"')
    expect(quotes).toBeInTheDocument();
});
