import type { NextPage } from 'next'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <>
      <div className='flex bg-gray-800'>
        <Sidebar/>
        <Header />
      </div>
    </>
  )
}

export default Home
