import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Separator } from '@/components/common/separator/Separator';
import Typography from '@/components/typography/Typography';

import FileIcon from '~/svg/File.svg'
import HomeIcon from '~/svg/Home.svg'
import LogOutIcon from '~/svg/Logout.svg'
import PinaIcon from '~/svg/Pina.svg'
import SearchIcon from '~/svg/Search.svg'
import UniversityIcon from '~/svg/University.svg'
import UserIcon from '~/svg/User.svg'


interface MenuInterface {
  name: string
  link: string
  icon: JSX.Element
}

const menu: Array<MenuInterface> = [
  { name: "Home", link: '/home', icon: <HomeIcon className='w-8 h-7' /> },
  { name: "Portfolio", link: '/portfolio', icon: <UniversityIcon className='w-8 h-7' /> },
  { name: "Order", link: '/order', icon: <FileIcon className='w-8 h-7' /> },
  { name: "Search", link: '/search', icon: <SearchIcon className='w-8 h-7' /> },
];

const profileMenu = { name: "Profile", link: 'profile', icon: <UserIcon className='w-8 h-7' /> }


function MenuButton({ menu, selectedRoute }: { menu: MenuInterface, selectedRoute: string }) {
  const SelectedIcon = React.cloneElement(menu.icon, { className: `${menu.icon.props.className} [&>*]:fill-[#80DBCE]` })

  return (
    <Link href={menu.link} key={menu.name} className='flex flex-col items-center'>
      {
        selectedRoute === menu.link ? SelectedIcon : menu.icon
      }
      {
        selectedRoute === menu.link ? (
          <Typography variant='st3' className='text-[#80DBCE]'>{menu.name}</Typography>
        ) : (
          <Typography variant='st3'>{menu.name}</Typography>
        )
      }
    </Link>
  )
}
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div className='flex w-full h-screen'>
      <aside className='flex relative flex-col py-10 px-6 w-[120px] border-r border-gray-200 bg-white items-center justify-between'>
        <PinaIcon className='w-8 h-7' />
        <ul className='flex flex-col gap-y-5 items-center'>
          {
            menu.map(individualMenu =>
              <MenuButton menu={individualMenu} key={individualMenu.link} selectedRoute={router.pathname} />
            )
          }
          <Separator className='w-[200%] h-[1px]' />
          <MenuButton menu={profileMenu} selectedRoute={router.pathname} />
        </ul>
        <LogOutIcon className='w-8 h-7' />
      </aside>
      <main className='flex flex-col flex-1'>
        <Header />
        <div className='pl-[60px] flex-1 pt-8 pb-6 bg-grey-100'>
          {children}
        </div>
        <Footer />
      </main>
    </div>);
}
