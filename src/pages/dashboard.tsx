import type { NextPage } from 'next'
import Link from 'next/link'
import { HiArrowDown, HiArrowUp, HiOutlineCurrencyDollar, HiOutlinePencilAlt, HiOutlinePlusCircle } from 'react-icons/hi'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Dashboard: NextPage = () => {
  const headerCard = (): React.ReactElement => (
    <div className='flex justify-between items-center text-gray-50 uppercase'>
      <span>Setembro</span>
      <div className='flex items-center'>
        <HiArrowUp className='mr-2' />
        <span>R$ 2.000,00</span>
      </div>
      <div className='flex items-center'>
        <HiArrowDown className='mr-2' />
        <span>R$ 1.600,00</span>
      </div>
      <div className='flex items-center'>
        <HiOutlineCurrencyDollar className='mr-2 text-xl' />
        <span>R$ 400,00</span>
      </div>
      <HiOutlinePencilAlt />
    </div>
  )

  const bodyCard = (): React.ReactElement => (
    <div className='flex justify-around gap-4'>
      <div className='w-1/2 border-gray-500 border-solid border-b-2'>
        <div className='flex items-end justify-between'>
          <span className='uppercase text-sm font-bold text-gray-600'>Despesas</span>
          <button className='flex items-center bg-blue-500 text-gray-50 text-sm py-1 px-2 rounded-md hover:bg-opacity-95'><HiOutlinePlusCircle className='mr-1'/>Adicionar despesa</button></div>
      </div>
      <div className='w-1/2 bg-gray-400 text-center'>grafico</div>
    </div>
  )
  return (
    <>
      <div className='flex bg-gray-800'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <Header />
          <Card header={headerCard} body={bodyCard} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
