import { RiHomeSmile2Fill } from "react-icons/ri";

const ItemMenu = () => {
    return (
        <li className="mt-8 px-3 w-full">
        <a
            href="#"
            className="group w-4/12 bg-grway-900 relative flex justify-center items-start text-lg uppercase  rounded p-2 text-gray-100 "
        >
           <span className="text-3xl text-gray-300 hover:text-purple-600">
           <RiHomeSmile2Fill />
           </span>


            <span className="w-8/12 px-2 py-1.5 text-base text-gray-400 uppercase font-normal">
                Overview
            </span>
        </a>
    </li>
    )
}

export default ItemMenu;