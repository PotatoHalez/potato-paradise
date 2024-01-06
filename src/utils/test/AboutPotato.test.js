import { render, screen } from '@testing-library/react'
import AboutPotato from '../../pages/AboutPotato'

test('renders About Potato page', () => {
    render (<AboutPotato/>)
    const potatoPage = screen.getByText('What is Potato Paradise?')
    expect(potatoPage).toBeInTheDocument()
});