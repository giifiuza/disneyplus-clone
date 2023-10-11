import React from 'react'

function HeaderItem({name, Icon}) {
    return (
        <a href='/'>
            <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mt-2'>
                <Icon/>
                <h2 className=''>{name}</h2>
            </div>
        </a>
    )
}

export default HeaderItem
