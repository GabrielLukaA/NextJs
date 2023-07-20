

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Card from '@/components/Card'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>

    <Header/>
        <div className='flex flex-wrap gap-3 justify-center p-4'>
          <Card title="Zeus" description="Filho de Cronos, deus dos Céus, foi o responsável por matar Cronos, libertando seus dois irmãos." />
          <Card title="Poseidon" description="Também filho de Cronos, Poseidon é o Deus dos mares, tem como seu símbolo  o tridente." />
          <Card title="Hades" description="Irmão dos dois anteriores, Hades é o Deus do submundo, casasdo com Pérsefone." />
        </div>
        <button></button>
    </>
  )
}