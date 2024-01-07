import { render, screen } from '@testing-library/react'
import PotatoPics from '../../pages/PotatoPics'

test('renders PotatoPics correctly', () => {
    render(<PotatoPics />)
    const PotatoPics = screen.getByText('The land of delicious potatoes!')
    expect(PotatoPics).toBeInTheDocument();
});
