import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { Outlet } from "react-router-dom";

function page() {
    return (

        <div className="relative dark:text-white p-10 mx-20 my-5 overflow-hidden shadow-[0_0_40px_rgba(256,100,0,0.4)]
">
            <img
                src="../public/fire1.jpg"
                alt="fire background"
                className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10 hidden dark:block"
            />




            <Outlet />




            <div className="flex gap-4 mt-16 mb-14 w-[200px] mx-auto ">
                <FaWhatsapp className="text-4xl cursor-pointer" />
                <BsFacebook className="text-4xl cursor-pointer" />
                <SlSocialTwitter className="text-4xl cursor-pointer" />
                <FaInstagram className="text-4xl cursor-pointer" />
            </div>

            <p className="text-center">Developer Siam Sheikh</p>





        </div >


    );
}

export default page;