import Image from "next/image";
import Logo from "../../../public/assests/Logo.png";



const Navbar = () => {
  return (
    <>
      <div className="w-[1920px] h-[92px] left-[1px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
        <div className="w-[191px] h-[34px]">
          <Image src={Logo} alt="logoimage" />
        </div>
        <div className="w-[737.5px] h-[60px] gap-[60px] flex justify-between items-center">
          <div id="nav-menue" className="w-[549px] h-[23px] gap-8">
            <ul className="flex flex-row justify-between text-white gap-[10px] h-[23px] font-normal ">
              <li className="w-[78px] hover:font-bold hover:underline decoration-4 decoration-blue-500">Products</li>
              <li className="w-[79px] hover:font-bold hover:underline decoration-4 decoration-blue-500">Solutions</li>
              <li className="w-[89px] hover:font-bold hover:underline decoration-4 decoration-blue-500">Resources</li>
              <li className="w-[58px] hover:font-bold hover:underline decoration-4 decoration-blue-500">Pricing</li>
            </ul>
          </div>
         
          <div className='w-[126px] h-[60px] gap-6"'>
						<button className='px-10 py-4 rounded-lg bg-[#FFE492] hover:bg-[#92adcf] hover:text-white'>
							Login
						</button>
					</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
