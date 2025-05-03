import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='encabezado'>
        <div className="num"></div>
        <p className="topico">Agenda/Topic</p>
        <p className="codigo">SAAS-0000</p>
        <Image src="/Vector.png" alt='icono' width={24} height={24}/>
    </div>
  )
}

export default Header