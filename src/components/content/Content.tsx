'use client'

import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import { Stack } from '../stack'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

type CardProps = {
  image: string | string[]
}

const Card = ({ image }: CardProps) => {
  return (
    <div>
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
              <Image src={item} alt={`non-bottle-${index}`} width={2000} height={700} placeholder='empty' />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Image src={image} alt={`non-bottle`} width={2000} height={700} placeholder='empty' />
      )}
    </div>
  )
}

type VideoProps = {
  video: string
}

const Video = ({ video }: VideoProps) => {
  return (
    <video className='w-full' autoPlay muted controls={false} playsInline loop>
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
    <Stack className='w-full' direction='col'>
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
      </div>
      <Card image={['/product/MB_01.png']} />
      <Card image={['/product/MB_02.png']} />
      <Card image={['/product/MB_03.png']} />
      <Card image={['/product/MB_05.png']} />
    </Stack>
  )
}

export default Content
