import { render, screen } from '@testing-library/react'
import PotatoPics from '../../pages/PotatoPics'

test('renders PotatoPics correctly', () => {
    render(<PotatoPics />)
    const potatoPics = screen.getByText('The land of delicious potatoes!')
    expect(potatoPics).toBeInTheDocument();
});
