import Link from 'next/link'
import { Stack } from '../stack'

const Header = () => {
  return (
    <header className='h-[60px] w-full'>
      <Stack className='h-full' direction='row' justify='center' align='center' gap='gap-2'>
        <div>로고</div>
      </Stack>
    </header>
  )
}

export default Header
