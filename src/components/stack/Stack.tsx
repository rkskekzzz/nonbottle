import React, { forwardRef } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  gap?: string
} & React.HTMLAttributes<HTMLDivElement>

const Stack = React.forwardRef<HTMLDivElement, Props>(({ children, direction, justify, align, gap, className, ...props }, ref) => {
  const justifyValue = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    'space-between': 'justify-between',
    'space-around': 'justify-around',
    'space-evenly': 'justify-evenly',
  }[justify || 'start']

  const alignValue = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  }[align || 'start']

  const directionValue = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  }[direction || 'row']

  return (
    <div ref={ref} className={cn('flex', 'flex-wrap', justifyValue, alignValue, directionValue, gap, className)} {...props}>
      {children}
    </div>
  )
})

Stack.displayName = 'Stack'
export default Stack
