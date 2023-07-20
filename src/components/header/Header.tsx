import Link from 'next/link'
import { Stack } from '../stack'

const Header = () => {
  return (
    <header className='fixed z-10 h-[60px] w-full  bg-[#d5d5d570] p-4 text-black shadow backdrop-blur-xl'>
      <Stack direction='row' justify='start' align='center' gap='gap-2'>
        <div>로고</div>
        <Link href='/'>Nonbottle</Link>
      </Stack>
    </header>
  )
}

export default Header
