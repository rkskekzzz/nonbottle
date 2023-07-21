import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='h-[60px] w-full'>
      <div className='flex h-full items-center justify-center'>
        <Image src='/logo.png' alt='logo' width={40} height={40} />
      </div>
    </header>
  )
}

export default Header
