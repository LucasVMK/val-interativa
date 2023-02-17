import Image from "next/image";
import { SearchIcon,
    UserIcon,
    ArrowCircleDownIcon,
    HomeIcon,
    PhoneIcon,
    ShoppingBagIcon,
    MailIcon,
} from '@heroicons/react/solid'

function Header () {
    return (
        <header className="sticky top-0 z-50 md:flex md:justify-between md:shadow-md" style={{ background: '#f0f0f0' }}> 
            <div className="md:w-2/3 grid grid-rows-1 grid-flow-col md:shadow-none shadow-md py-3 px-3 md:px-10">
                {/* Logo */}
                <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://rebrand.ly/h4kwas8"
                width={90}
                height={90}
                />
            </div>

            {/* Search */}
            <div className="p-1 rounded-lg col-start-2 col-span-6 flex-grow">
                <div className="flex items-center rounded-full py-2 md:shadow-sm" style={{ boxShadow: 'inset 2px -2px 8px #b9b9b9, inset -3px 3px 8px #ffffff' }}>
                    <input className="flex-grow placeholder:italic pl-5 bg-transparent outline-none text-base text-gray-600 placeholder-gray-400"
                            type="text"
                            placeholder="Buscar atividade..."
                    />
                    <SearchIcon className="md:inline-flex h-8 bg-teal-500 hover:bg-teal-700 text-white rounded-full p-2 cursor-pointer mx-2" />
                </div>
            </div>
            </div>

            <div className="md:sticky md:w-1/3 fixed bottom-0 z-50 w-full md:shadow-none md:border-none border md:py-3 md:px-3 py-1 px-1 md:px-10" style={{ background: '#f0f0f0' }}>
                {/* Icones */}
            <div className="flex text-sm text-center md:space-x-2 lg:space-x-5 space-x-10 md:justify-end justify-center text-gray-500">
                
                <div className="cursor-pointer hover:bg-gray-200 py-1 pl-2 px-2 rounded-lg">
                <HomeIcon className="h-8" />
                <p>Ínicio</p>
                </div>

                <div className="cursor-pointer hover:bg-gray-200 py-1 pl-2 px-2 rounded-lg">
                <ShoppingBagIcon className="h-8" />
                <p>Loja</p>
                </div>
                
                <div className="cursor-pointer hover:bg-gray-200 py-1 pl-2 px-2 rounded-lg">
                <MailIcon className="h-8" />
                <p>Contato</p>
                </div>

                <div className="cursor-pointer hover:bg-gray-200 py-1 pl-2 px-2 rounded-lg">
                <ArrowCircleDownIcon className="h-8" />
                <p>Pedidos</p>
                </div>

                <div className="cursor-pointer hover:bg-gray-200 py-1 pl-2 px-2 rounded-lg">
                <UserIcon className="h-8" />
                <p>Entrar</p>
                </div>
                </div>
            </div>
            
         </header>
    );
}
 
export default Header