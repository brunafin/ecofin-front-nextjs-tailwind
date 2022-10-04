import Link from "next/link";
import { HiOutlineClipboardList, HiOutlineHome, HiOutlinePlusCircle } from "react-icons/hi";

export function Sidebar() {
  return (
    <aside className="bg-gray-700 w-1/6 h-screen">
      <Link href='/'>
        <p className="p-4 text-center text-gray-50 font-bold cursor-pointer">
        ECOFIN 🐷
        </p>
      </Link>
      <nav className="m-4">
        <ul>
          <li className="sidebar-item">
            <HiOutlineHome className="mr-2 text-xl" />
            <Link href='/'>Início</Link>
          </li>
          <li className="sidebar-item">
            <HiOutlinePlusCircle className="mr-2 text-xl" />
            <Link href='/outlays'>Despesas</Link>
          </li>
          <li className="sidebar-item">
            <HiOutlineClipboardList className="mr-2 text-xl" />
            Planejamento
          </li>
          <li>
            <Link href='/dashboard'>Ir para o dashboard</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}