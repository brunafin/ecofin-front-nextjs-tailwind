import {HiOutlineUserCircle} from 'react-icons/hi';

export function Header(){
  return(
    <header className='w-full'>
      <div className="flex justify-end items-center px-4 h-14 bg-gray-700">
        <nav>
          <ul>
            <li className="text-gray-600">
              <HiOutlineUserCircle className='text-3xl text-gray-50'/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}