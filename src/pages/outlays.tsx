import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiArrowDown, HiArrowUp, HiOutlineCurrencyDollar, HiOutlinePencilAlt, HiOutlinePlusCircle, HiOutlineTrash } from 'react-icons/hi'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import OutlayService from '../services/outlays.service'

interface IOutlayProps {
  id: number;
  description: string;
  installments_quantity: number;
  basic: boolean;
  value: number;
}

const Outlays: NextPage = () => {
  const [data, setData] = useState<IOutlayProps[]>([]);
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<number | null>(null);
  const [installments, setInstallments] = useState<number | null>(null);
  const [outlayDate, setOutlayDate] = useState<string>('');
  const [payDate, setPayDate] = useState<string>('');
  const [isBasic, setIsBasic] = useState<boolean>(false);

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    const obj = {
      description,
      value,
      installments_quantity: installments,
      date: outlayDate,
      pay: payDate,
      basic: isBasic,
    }
    try {
      const result = await OutlayService.createOutlay(obj);
      if(result){
        console.log('oiii', result);
        
        setData([...data, result])
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    const fetchOutlays = async () => {
      const outlays = await OutlayService.getAllOutlays();
      setData(outlays);
    }
    fetchOutlays();
  }, [])


  const headerCard = (): React.ReactElement => (
    <div className='flex justify-start items-center text-gray-50 uppercase'>
      <span>Despesas</span>
    </div>
  )

  const bodyCard = (): React.ReactElement => (
    <div className='flex justify-around gap-4'>
      <div className='w-1/2'>
        <div className='flex items-end justify-between'>
          <span className='uppercase text-sm font-bold text-gray-600'>Despesas</span>
          <button className='flex items-center bg-blue-500 text-gray-50 text-sm py-1 px-2 rounded-md hover:bg-opacity-95'><HiOutlinePlusCircle className='mr-1' />Adicionar despesa</button>
        </div>
        <table className='w-full mt-2'>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className='border-x-0 border-y-2 border-gray-200'>{item.description}</td>
                <td className='border-x-0 border-y-2 border-gray-200 text-end'>{new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}</td>
                <td className='border-x-0 border-y-2 border-gray-200 text-center px-4'>{item.installments_quantity || '-'}</td>
                <td className='border-x-0 border-y-2 border-gray-200 text-center'>{item.basic ? 'básica' : '-'}</td>
                <td className='border-x-0 border-y-2 border-gray-200'><HiOutlinePencilAlt className='mx-auto cursor-pointer hover:text-gray-600' /></td>
                <td className='border-x-0 border-y-2 border-gray-200'><HiOutlineTrash className='mx-auto cursor-pointer hover:text-red-600' /></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className='w-1/3 bg-gray-100 text-center p-4'>
        <span className='text-gray-600 font-bold'>NOVA DESPESA</span>
        <form className='flex flex-col items-start'>
          <label htmlFor='isBasic' className='mb-1 text-gray-700'>Despesa básica</label>
          <input onChange={() => setIsBasic(!isBasic)} type="checkbox" id="isBasic" name="isBasic" value={isBasic} />
          <label htmlFor='description' className='mb-1 text-gray-700'>Descrição:</label>
          <input onChange={(event) => setDescription(event.target.value)} type="text" id="description" name="description" className='w-full mb-2 rounded-sm border border-gray-400' defaultValue={description} />
          <label htmlFor='value' className='mb-1 text-gray-700'>Valor da compra:</label>
          <input onChange={(event) => setValue(Number(event.target.value))} type="text" id="value" name="value" className='w-full  mb-2 rounded-sm border border-gray-400' />
          <label htmlFor='installments' className='mb-1 text-gray-700'>Número de parcelas:</label>
          <input onChange={(event) => setInstallments(Number(event.target.value))} type="text" id="installments" name="installments" className='w-full mb-2 rounded-sm border border-gray-400' />
          <label htmlFor='outlayDate' className='mb-1 text-gray-700'>Data da compra:</label>
          <input onChange={(event) => setOutlayDate((event.target.value))} type="text" id="outlayDate" name="outlayDate" className='w-full mb-2 rounded-sm border border-gray-400' />
          <label htmlFor='payDate' className='mb-1 text-gray-700'>Data do 1º vencimento:</label>
          <input onChange={(event) => setPayDate((event.target.value))} type="text" id="payDate" name="payDate" className='w-full mb-4 rounded-sm border border-gray-400' />
          <button type='submit' className='bg-blue-500 w-full rounded-md py-2 hover:bg-opacity-95 text-white text-sm' onClick={(event) => handleSubmit(event)}>Cadastrar</button>
        </form>
      </div>
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

export default Outlays;
