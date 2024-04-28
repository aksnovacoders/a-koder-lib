import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { UiReact } from './ui-react'

const meta: Meta<typeof UiReact> = {
  component: UiReact,
  title: 'UiReact',
}
export default meta
type Story = StoryObj<typeof UiReact>

export const Primary = {
  args: {},
}

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Welcome to UiReact!/gi)).toBeTruthy()
  },
}
