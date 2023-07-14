'use client';
import Image from 'next/image';
import Avatar from 'react-avatar';
import { GoSearch } from 'react-icons/go';
import logo from '../../../public/assets/logo/logo-planit.jpg'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="flex items-center justify-between px-16 py-4 bg-white">
            {/* Logo */}
            <div className="flex items-center">
               <Image src={logo} width={100} height={100} alt="logo" />
                <h1 className="text-2xl font-bold">PlanIt Board</h1>
            </div>

            {/* Search Bar */}
            <div className="relative w-1/2">
                <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-100 px-4 py-3 pr-10 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <GoSearch className="w-5 h-5 text-gray-500" />
                </div>
            </div>

            {/* User Avatar */}
            <div>
                <Avatar name="Jacob Kim" round size="50" color="#0c63e7" className="text-xl" />
            </div>

        </header>
)}

export default Header