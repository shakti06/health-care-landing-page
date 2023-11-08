import Image from "next/image";
import Button from "@/components/Button";

export default function Download(){
    return(
        <section className="relative">
            <div className="padding-container max-container flex flex-col-reverse items-center lg:flex-row gap-12 mt-12 lg:mt-28">
                <div className="flex flex-1 flex-col items-center lg:items-start">
                   <h1 className="text-3xl md:text-4 lg:text-5xl lg:text-left text-center mb-6">Download our Mobile Apps</h1>
                    <p className="text-gray-500 text-center text-lg lg:text-left ">
                        Our dedicated patient engagement app and web portal allows you to access information instanteoulsy 
                        (no tedious calls, long waits or administrative hassle) and securely.
                    </p>
                    <div className="flex justify-center flex-wrap gap-2 mt-6 mb-6">
                            <Button 
                            type="button"
                            title="Download" 
                            variant="btn-blue"
                            />
                    </div>
                </div>

                <div className="flex flex-1 justify-center md:mb-16 lg:mb-0 mb-10">
                    <Image src="/5815.jpg" alt="hero picture" width={800} height={700}/>
                </div>
            </div>
        </section>
    )
}
