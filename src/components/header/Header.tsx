import Link from 'next/link'
import { Stack } from '../stack'

const Header = () => {
  return (
    <header className='fixed h-[60px] w-full border-b-2 bg-white p-4 text-black'>
      <Stack direction='row' justify='start' align='center' gap='gap-2'>
        <div>로고</div>
        <Link href='/'>Nonbottle</Link>
      </Stack>
    </header>
  )
}

export default Header
