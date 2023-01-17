import { cartState } from '@/atoms-recoil/cartState'
import Link from 'next/link'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useRecoilState} from 'recoil'

const Navbar = () => {

        const [cartItem] = useRecoilState(cartState)

  return (
    <header className='shadow-xl bg-white sticky top-0'>
    <div className='container mx-auto py-2 text-[24px] flex justify-between items-center'>

            <div className='cursor-pointer'>
                <Link href="/">
                    E-Shop
                </Link>
            </div>

            <div className='relative cursor-pointer'>
                <Link href="/cart">
                { /* cart icon*/}
                    <AiOutlineShoppingCart size={25} />
                   { /* badge*/}
                    <span className="absolute -top-2 -right-2 text-[13px] bg-red-500 h-[18px] w-[18px]
                     rounded-full grid place-items-center text-white">
                        {cartItem.length}
                     </span>
                </Link>
            </div>
    </div>
    </header>
  )
}

export default Navbar