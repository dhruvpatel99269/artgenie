import React from 'react'

const Header = ({ title, subtitle }: { title:string, subtitle?: string }) => {
  return (
    <>
        <h1 className='h2-bold text-dark-600'>
            {title}
            {subtitle && <p className='p-16-regular mt-4'>{subtitle}</p>}
        </h1>
    </>
  )
}

export default Header;