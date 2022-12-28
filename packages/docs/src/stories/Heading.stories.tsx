import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomElementTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom element heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the component will always be an element of type `h2`, but we can change the element using the `as` property.',
      },
    },
  },
}
