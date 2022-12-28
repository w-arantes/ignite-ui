import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box Component</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomElementTag: StoryObj<BoxProps> = {
  args: {
    children: <Text>Custom element tag</Text>,
    as: 'section',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the component will always be an element of type `div`, but we can change the element using the `as` property.',
      },
    },
  },
}
