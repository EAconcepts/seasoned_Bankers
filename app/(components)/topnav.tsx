import Image from 'next/image'
import logo from '../../public/assets/logo.svg'
import { FaBars } from 'react-icons/fa6'
const TopNav=()=>{
    
    return(
        <header className="pl-[20px] pr-[15px] flex w-full justify-between">
            <Image src={logo} height={54} width={47} alt='logo' className='size-auto'/> 
            <div className='p-[22.12px]'>
                <FaBars className='text-black text-[18px]'/>
            </div>
        </header>
    )
}

export default TopNav