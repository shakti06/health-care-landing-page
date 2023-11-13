import Image from "next/image";
import ServiceItem from "./ServiceItem";
import { SERVICE_ITEMS } from "@/constants";

const Service = () =>{
    return(
        <section className="mt-14 py-10">
            <div className="mx-auto sm:w-[3/4] sm:h-[3/4] lg:h-[5/2] px-2">
                <h1 className="text-center text-3xl font-bold text-blue-700">
                    Our Services
                </h1>
                <p className="text-center mt-4 text-[18px] text-gray-600">
                    We provide to you the best choices for you.Adjust it to your health needs and
                    make sure you undergo treatment <br/> with our high qualified doctors.You can consult 
                    with us which type of service is suitable for your health.
                </p>
            </div>
            
            <ul className="grid grid-cols-1 mt-8 padding-container max-container md:grid-cols-2 gap-20 lg:grid-cols-3">
                    {SERVICE_ITEMS.map((service) => (
                        <ServiceItem 
                        key={service.title}
                         title={service.title}
                         icon = {service.icon}
                         description={service.description}
                        />
                    ))}
            </ul>
        </section>
    )
}

export default Service;