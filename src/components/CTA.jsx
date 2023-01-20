import React from 'react'
import CtaButton from '../common/CtaButton';

const CTA = () => {
  return (
    <section className='mt-[-50px] mb-[200px] lg:my-[140px] flex flex-col items-center'>
      <h2 className="hidden lg:block text-[40px]">Ready To Build Your Community?</h2>
      <h2 className="text-[24px] text-center lg:hidden">Ready To Build Your <br /> Community?</h2>
      <CtaButton/>
    </section>
  )
}

export default CTA;