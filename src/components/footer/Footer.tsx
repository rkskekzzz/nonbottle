import { Stack } from '../stack'

const Footer = () => {
  return (
    <footer className='bg-neutral-800 text-neutral-100'>
      <Stack direction='row' gap='gap-4' className='px-6 py-4'>
        <section className='max-w-[500px]'>
          <h3 className='mb-2'>{process.env.NEXT_PUBLIC_COMPANY_NAME}</h3>
          <div className='text-sm text-[#c2c2c2]'>
            {`사업자등록번호 ${process.env.NEXT_PUBLIC_COMPANY_ID}`}
            <span className='mx-[10px] mt-[7px] inline-block h-[10px] w-[1px] bg-[#c2c2c2]' />
            {`대표이사 ${process.env.NEXT_PUBLIC_COMPANY_CEO}`}
            <span className='mx-[10px] mt-[7px] inline-block h-[10px] w-[1px] bg-[#c2c2c2]' />
            {`통신판매업신고번호 ${process.env.NEXT_PUBLIC_COMPANY_MAIL_ORDER_SALES_REGISTRATION_NO}`}
            <span className='mx-[10px] mt-[7px] inline-block h-[10px] w-[1px] bg-[#c2c2c2]' />
            {`전화번호 ${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
            <span className='mx-[10px] mt-[7px] inline-block h-[10px] w-[1px] bg-[#c2c2c2]' />
            {`이메일 ${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}
            <span className='mx-[10px] mt-[7px] inline-block h-[10px] w-[1px] bg-[#c2c2c2]' />
            {`주소 ${process.env.NEXT_PUBLIC_COMPANY_ADDRESS}`}
          </div>
        </section>
        {/* <section>
          <h3 className='mb-2'>소셜</h3>
          <Stack direction='col'>
            <div className='text-sm text-[#c2c2c2]'>instagram /</div>
            <div className='text-sm text-[#c2c2c2]'>facebook /</div>
          </Stack>
        </section> */}
      </Stack>
      {/* <section className='border-t-2 border-neutral-200 px-6 py-4'>
        <Stack direction='row' justify='space-between'>
          <div>@nonbuttle</div>
          <Stack gap='gap-4'>
            <span>insta</span>
            <span>kakao</span>
            <span>facebook</span>
          </Stack>
        </Stack>
      </section> */}
    </footer>
  )
}

export default Footer
