import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  backgroundColor: '$gray900',
  color: '$white',
  resize: 'vertical',
  minHeight: 80,
  padding: '$3 $4',
  borderRadius: 'sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
