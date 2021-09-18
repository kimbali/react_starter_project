/* eslint-env jest */

import { render, screen } from '@testing-library/react'
import App from './App'

test('renders darling in App component', () => {
  render(<App />)
  const linkElement = screen.getByText(/darling/i)
  expect(linkElement).toBeInTheDocument()
})
