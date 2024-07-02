import React, { useState } from 'react'
import Link from 'next/link'
import ContactDialog from './Contact'
import { siteMetadata } from '@/configs/siteMetadata'

interface NavigationItem {
  name: string
  href: string
  current: boolean
}

const navigation: NavigationItem[] = [
  { name: 'Trang chủ', href: '#trang-chu', current: false },
  { name: 'Sản phẩm', href: '#dac-san', current: false },
  { name: 'Hình ảnh', href: '#hinh-anh-hai-san-phoi-kho', current: false },
  { name: 'Đánh giá', href: '#danh-gia', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='rounded-md max-w-sm w-full mx-auto'>
      <div className='flex-1 space-y-4 py-1'>
        <div className='sm:block'>
          <div className='space-y-1 px-5 pt-2 pb-6'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-purple'
                    : 'text-black hover:bg-gray-700 hover:text-purple',
                  'block  py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='space-y-4 px-5'>
            <button
              className='w-full text-md font-medium bg-bgpink text-pink py-3 px-3 xl:px-6 navbutton rounded-full hover:text-white hover:bg-pink'
              onClick={() => setIsOpen(true)}
            >
              Liên hệ: {siteMetadata.phone}
            </button>
          </div>
        </div>
      </div>
      <ContactDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Data
