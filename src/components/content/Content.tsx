'use client'
import Image from 'next/image'
import { Stack } from '../stack'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
type CardProps = {
  title: string
  description: string
  image: string | string[]
  type: 'text-first' | 'image-first'
}

const Card = ({ title, description, image, type }: CardProps) => {
  return (
    <Stack className='w-full' direction={type === 'text-first' ? 'row' : 'row-reverse'} gap='gap-4' justify='space-between'>
      <Stack direction='col' gap='gap-2'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p>{description}</p>
      </Stack>
      <div className='w-full max-w-[600px]'>
        {image instanceof Array ? (
          <Swiper
            color='black'
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {image.map((item, index) => (
              <SwiperSlide key={index}>
                <Image src={item} alt={title} width={600} height={400} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Image src={image} alt={title} width={600} height={400} />
        )}
      </div>
    </Stack>
  )
}

type VideoProps = {
  title: string
  description: string
  video: string
}

const Video = ({ title, description, video }: VideoProps) => {
  return (
    <video className='w-full' autoPlay muted controls={false}>
      <source src={video} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  )
}

const Content = () => {
  return (
    <Stack className='w-full' direction='col' gap='gap-8'>
      <Video title='Video 1' description='This is video 1' video='/test.mp4' />
      <Card title='Card 1' description='This is card 1' image='/test.png' type='text-first' />
      <Card title='Card 2' description='This is card 2' image='/test.png' type='image-first' />
      <Card title='Card 3' description='This is card 3' image={['/test.png', '/test.png']} type='text-first' />
    </Stack>
  )
}

export default Content
