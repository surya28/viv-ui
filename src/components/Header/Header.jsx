import React from 'react';
import { Input } from 'antd';
import logo from '../../assets/logo.png'

const Header = ({ setSearch }) => {

    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    const onChangeHandler = debounce((e) => {
        setSearch(e.target.value)
    })
    return (
        <div className='flex items-baseline text-lg justify-between py-8 font-semibold'>
            <div className='w-1/6'>
                <img src={logo} alt='logo' className='w-24' />
            </div>
            <div className='w-2/6 grow-1'>
                <Input size='large' className='w-full' allowClear onChange={onChangeHandler} placeholder='Search products' />
            </div>
            <div className='w-2/6'>
                <ul className='flex justify-evenly text-gray-300'>
                    <li>
                        Store
                    </li>
                    <li>
                        Account
                    </li>
                    <li>
                        Wishlist
                    </li>
                    <li className='text-black'>
                        Basket
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header