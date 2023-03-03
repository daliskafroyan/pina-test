import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import logger from '@/lib/logger';

import Input from '@/components/common/forms/Input';
import Typography from '@/components/common/typography/Typography';

import Avatar from '~/svg/Avatar.svg'
import MailIcon from '~/svg/Mail.svg'
import SearchIcon from '~/svg/Search.svg'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header() {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  return (
    <header className='bg-white py-6 shadow flex flex-row sticky top-0 z-50 h-20 pl-[60px] pr-[80px]'>
      <div className="w-[380px]">
        <FormProvider {...methods}>
          <form onSubmit={(res) => logger(res)}>
            <Input label={null} filled id='search' rightNode={<SearchIcon />} placeholder='Ketik nama atau simbol saham' hideError />
          </form>
        </FormProvider>
      </div>
      <div className="flex gap-5 ml-5 items-center">
        <div className="flex flex-col min-w-[180px]">
          <Typography variant='st1' className='leading-[15.6px]'>Portfolio</Typography>
          <Typography variant='t2'>Rp 103.000.000</Typography>
        </div>
        <div className="flex flex-col min-w-[180px]">
          <Typography variant='st1' className='leading-[15.6px]'>Buying Power</Typography>
          <Typography variant='t2'>Rp 103.000.000</Typography>
        </div>
      </div>
      <div className='flex ml-auto gap-5'>
        <MailIcon className='w-8 h-7' />
        <Avatar className='w-8 h-7' />
      </div>
    </header>
  );
}
