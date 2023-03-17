import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import About from './About'


const skillsMockedData = [
  {
    id: 1,
    title: 'HTML',
  },
  {
    id: 2,
    title: 'CSS',
  },
]

const server = setupServer(
    rest.get('http://localhost:8000/api/skills', (req, res, ctx) => {
        return res(ctx.json({allSkills : skillsMockedData}))
    })
)
beforeAll(() => server.listen())
afterAll(() => server.resetHandlers())
afterAll(() => server.close())

it('Shoud display skills title after loader is removed', async () => {
    render(<About />)
})