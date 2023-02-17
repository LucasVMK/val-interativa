import React, { useEffect } from 'react';
import { ShoppingCartIcon,
         XCircleIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';

const Cart = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div className={`bg-white right-1 h-screen border-2 p-5 pt-5 ${open ? "w-80 " : "w-2"} duration-300 relative`}>
                Carrinho
                    <ShoppingCartIcon className="bg-teal-500 text-white text-3x1 rounded-full absolute -right-5 top-9 cursor-pointer p-5 h-20" onClick={() => setOpen (!open)} />
                        <div className="flex items-center h-7 bg-white text-teal-500 rounded-full p-2.5 absolute -right-2 -top-0 border">
                            <p>3</p> {/* ContadorCarrinho */}
                        </div>
            </div>
        </div>
    )
    
}

export default Cart