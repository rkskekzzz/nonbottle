'use client'
import cn from 'classnames'
import Image from 'next/image'
import { Stack } from '../stack'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { useEffect, useRef, useState } from 'react'

type CardProps = {
  title: string
  description: string | React.ReactNode
  image: string | string[]
  type: 'text-first' | 'image-first'
}

const Card = ({ title, description, image, type }: CardProps) => {
  return (
    <div className='grid grid-flow-row-dense grid-cols-1 grid-rows-[auto_minmax(_1fr,_1fr)] gap-y-8 md:grid-cols-3 md:grid-rows-1 md:gap-8'>
      <Stack className={cn(type === 'text-first' ? 'md:order-1' : 'md:order-2', 'px-8')} direction='col' gap='gap-2'>
        <h2 className='mb-4 text-xl font-bold md:text-2xl'>{title}</h2>
        <div>{description}</div>
      </Stack>
      <div className={cn(type === 'text-first' ? 'pr-8 md:order-2 md:pr-0' : 'pl-8 md:order-1 md:pl-0', 'col-span-2 w-full')}>
        {image instanceof Array ? (
          <Swiper
            color='black'
            autoplay={{ delay: 5000 }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {image.map((item, index) => (
              <SwiperSlide key={index}>
                <Image src={item} alt={title} width={2000} height={700} placeholder='empty' />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Image src={image} alt={title} width={2000} height={700} placeholder='empty' />
        )}
      </div>
    </div>
  )
}

type VideoProps = {
  video: string
}

const Video = ({ video }: VideoProps) => {
  return (
    <video className='w-full' autoPlay muted controls={false} playsInline>
      <source src={video} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  )
}

const Content = () => {
  const titleRef = useRef(null)
  const [isOut, setIsOut] = useState(false)

  useEffect(() => {
    if (!titleRef.current) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsOut(false)
        } else {
          setIsOut(true)
        }
      })
    })
    observer.observe(titleRef.current)
  }, [])

  return (
    <Stack className='w-full pb-20' direction='col' gap='gap-[100px]'>
      <Stack
        align='center'
        className={cn(
          'fixed top-0 z-10 h-[50px] w-full bg-white shadow-lg transition ease-in-out',
          isOut ? '' : '-translate-y-full opacity-0',
        )}
      >
        <Image className='ml-8 mr-4' src='/logo-title.png' alt='logo' width={120} height={24} placeholder='empty' />
      </Stack>
      <div ref={titleRef}>
        <Video video='/product/1-0.mp4' />
        <Stack className='mt-[100px]' align='center'>
          <Image className='ml-8 mr-4' src='/logo-title.png' alt='logo' width={180} height={30} />
        </Stack>
      </div>
      <Card
        title={'"지구를 지키는 가장 세련된 방법"'}
        description={'넌버틀은 물에 녹는 친환경 용기에 자연에서 추출한 재료들로 만들어진 코스메틱을 담아드립니다'}
        image={['/product/2-1.jpg', '/product/2-2.jpg']}
        type='text-first'
      />
      <Card
        title={'"불편함을 감수하지 마세요."'}
        description={
          <div className='flex flex-col'>
            <span className='mb-8'>사용이 끝난 용기는 분리수거 필요없이</span>
            <span>방수 막을 제거하시거나</span>
            <span>살짝 부러뜨려 물에 녹여 보내세요</span>
          </div>
        }
        image={['/product/3-1.jpg', '/product/3-2.jpg']}
        type='image-first'
      />
      <Card
        title={'넌버틀의 가치'}
        description={
          <div className='flex flex-col'>
            <span className='mb-8'>그린워싱, 걱정하지말고 눈으로 직접 보세요</span>
            <span>천연 재료의 분자 구조를 변형하여</span>
            <span className='mb-8'>제작된 단단한 용기</span>

            <span>아로마 오일 나노 코팅 기술로</span>
            <span>사용이 끝날때까지 완벽한 방수를</span>
          </div>
        }
        image={['/product/4-1.jpg']}
        type='text-first'
      />
      <Card
        title={'Contact us'}
        description={
          <div className='flex flex-col'>
            <span className='mb-8'>용기 협업부터 제품 판매까지</span>
            <span>sadol7797@gmail.com</span>
          </div>
        }
        image={['/product/5-1.jpg', '/product/5-2.jpg']}
        type='image-first'
      />
    </Stack>
  )
}

export default Content
