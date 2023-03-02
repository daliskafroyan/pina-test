import * as React from 'react';

import Typography from '@/components/typography/Typography';

import IDClearLogo from '~/svg/IDClear.svg'
import IDXLogo from '~/svg/IDX.svg'
import KSEILogo from '~/svg/KSEI.svg'
import OJKLogo from '~/svg/OJK.svg'
import SIPFLogo from '~/svg/SIPF.svg'

export default function Footer() {
  // Put Header or Footer Here
  return (<footer className='bg-white py-5 shadow flex sticky top-0 z-50 pl-[60px] pr-10 justify-between items-center'>
    <div className="flex gap-10">
      <OJKLogo className='w-20 h-16' />
      <IDXLogo className='w-20 h-16' />
      <KSEILogo className='w-20 h-16' />
      <IDClearLogo className='w-20 h-16' />
      <SIPFLogo className='w-20 h-16' />
    </div>
    <Typography variant='t3'>Copyright © 2022 PT Pina Aplikasi Bersama</Typography>
  </footer>);
}
