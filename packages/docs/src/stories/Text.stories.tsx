import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomElementTag: StoryObj<TextProps> = {
  args: {
    children: 'Custom element text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the component will always be an element of type `p`, but we can change the element using the `as` property.',
      },
    },
  },
}
