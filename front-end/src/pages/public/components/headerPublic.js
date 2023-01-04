import React, { useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import { Transition } from "@headlessui/react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

import Logo from "../login/mylogo.png"
import { authLogout } from "../../../redux/actions/authActions"
function HeaderPublic() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const userName = localStorage.getItem("user")
  console.log(userName)
  
  const handleLogout = () => {
    dispatch(authLogout())
  }
  const {user, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/')
    }
  
  }, [dispatch, isAuthenticated, navigate, user]);
  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img
                    className="h-8 w-[150px]"
                    src={Logo}
                    alt="Workflow"
                    />
                </div> 
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-3">
                    <Link
                        to="/home#"
                        className=" hover:bg-[#E50914] text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        TRANG CHỦ
                    </Link>

                    <Link
                        to="/#"
                        className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        RẠP CHIẾU
                    </Link>

                    <Link
                        to="/#"
                        className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        ĐẶT VÉ
                    </Link>

                    <Link
                        to="/#"
                        className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        KHUYẾN MÃI
                    </Link>

                    <Link
                        to="/#"
                        className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        THÀNH VIÊN
                    </Link>
                    </div>
                </div>
                
            </div>
            <div className="">
            <button className="text-white p-2 border border-white text-[14px]">Tiếng Việt <i className="fas fa-globe"></i></button>
                <button className="text-white px-3 py-6 text-[14px] capitalize" onClick={handleLogout}>
                  {userName} &ensp;
                <i className="fas fa-chevron-down text-[12px]"></i>
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/home"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  TRANG CHỦ
                </a>

                <a
                  href="/cinema"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  RẠP CHIẾU
                </a>

                <a
                  href="/booking"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  ĐẶT VÉ
                </a>

                <a
                  href="/news"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  KHUYẾN MÃI
                </a>

                <a
                  href="/member"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  THÀNH VIÊN
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default HeaderPublic