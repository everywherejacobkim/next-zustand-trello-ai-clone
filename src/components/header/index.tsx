'use client';

import Avatar from 'react-avatar';
import { GoSearch } from 'react-icons/go';
import { SiTrello } from 'react-icons/si';

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="flex items-center justify-between px-16 py-4 bg-gray-200">
            {/* Logo */}
            <div className="flex items-center">
                <SiTrello className='text-blue-500 w-8 h-8 mr-2'/>
                <h1 className="text-2xl font-bold">Trello Ai</h1>
            </div>

            {/* Search Bar */}
            <div className="relative w-1/2">
                <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-3 pr-10 text-sm rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <GoSearch className='w-5 h-5 text-gray-500' />
                </div>
            </div>

            {/* User Avatar */}
            <div>
                <Avatar name='Jacob Kim' round size='50' color='#0c63e7' className='text-xl' />
            </div>


        </header>
)}

export default Header