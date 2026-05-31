import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";

const AppSidebar = () => {
   const { isOpen, toggleSidebar } = useSidebar();

   const sidebarItems = [
      {
         path: '#',
         text: 'GenderList', 
      },
      {
         path: '#',
         text: 'UserList',
      },
   ]

  return (
    <>
    {isOpen && (
      <div className="fixed inset-0 z-30 blur-lg sm:hidden" 
      onClick={toggleSidebar}
      />
   )}
<aside id="top-bar-sidebar" className={`fixed bg-gray-800 top-0 left-0 z-40 w-64 h-full transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}  aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
      <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
         <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3" alt="Flowbite Logo" />
          <span className="self-center text-lg text-white font-semibold whitespace-nowrap">Flowbite</span>
       </a>
      <ul className="space-y-2 font-medium">
         {sidebarItems.map((sidebarItem) => (
          <li>
             <Link 
             to={sidebarItem.path}
             className="flex items-center px-3 py-2 text-white rounded-xl bg-transparent hover:bg-[#EAF0FF] hover:text-[#1E3A8A] hover:shadow-sm border border-transparent hover:border-[#D3E0FF] transition-all duration-200 group"
             >
               <span className="ms-3">{sidebarItem.text}</span>
            </Link>
         </li>
         ))}
      </ul>
   </div>
</aside>
    </>
  )
}

export default AppSidebar