import cn from 'classnames'

type Props = {
  children: React.ReactNode
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  gap?: string
} & React.HTMLAttributes<HTMLDivElement>

const Stack = ({ children, className, justify, align, direction, gap }: Props) => {
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

  return <div className={cn('flex', 'flex-wrap', justifyValue, alignValue, directionValue, gap, className)}>{children}</div>
}

export default Stack
