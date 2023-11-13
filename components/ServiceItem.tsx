import Image from "next/image";

type ServiceItemProps = {
    title :  string;
    icon : string;
    description : string
}

export default function({title, icon, description} : ServiceItemProps){
    return(
    <li className="flex flex-col p-6 rounded-md shadow-md">
        <div className="flex flex-col items-center p-6" > 
            <Image  src={icon} alt="service item pic" width={50} height={50}/>
        </div>
        <h2 className="font-bold text-center text-lg mt-5 mb-2 hover:text-blue-800 cursor-pointer">
            {title}
        </h2>
        <p className="text-center text-gray-700">
            {description}
        </p>
    </li>
    )
}
