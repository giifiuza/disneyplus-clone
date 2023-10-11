import React from "react";
import { useNavigate } from "react-router-dom"
import Logo from "../assets/Images/logo.png";
import { HiHome} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import Avatar from "../assets/Images/avatar.jpg";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    
  ];

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-5 bg-slate-800 mb-[50px]">
      <div className="flex  gap-8 items-center">
        <img
          src={Logo}
          className="w-[100px] 
        md:w-[130px] object-cover"
        />
        <div className="hidden md:flex">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} onClick={() =>{navigate('/')} }/>
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={Avatar} className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;