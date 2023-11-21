import { Content } from '@/components'

export default function Home() {
  return (
    <main className='w-full'>
      <Content
        images={[
          '/product/WEB_01.png',
          '/product/WEB_02.png',
          '/product/WEB_03.png',
          '/product/WEB_04.png',
          '/product/WEB_05.png',
          '/product/WEB_06.png',
          '/product/WEB_07.png',
        ]}
      />
    </main>
  )
}
