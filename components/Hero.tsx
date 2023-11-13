import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Hero(){
    return(
        <section className="relative">
            <div className="padding-container max-container flex flex-col-reverse items-center py-16  lg:flex-row gap-12 mt-12 lg:mt-28">
                <div className="flex flex-1 flex-col items-center lg:items-start">
                   <h1 className="text-3xl md:text-4 lg:text-5xl lg:text-left text-center mb-6">Everest Health-Care For You</h1>
                    <p className="text-gray-500 text-center text-lg lg:text-left ">
                        Everest Health-Care provides progressive and affordable health care services
                        accessible on mobile and online for everyone
                    </p>
                    <div className="flex justify-center flex-wrap gap-2 mt-6 mb-6">
                        <Link href="/login">
                            <Button 
                                type="button"
                                title="Consult today" 
                                variant="btn-blue"
                                />
                        </Link>
                           
                    </div>
                </div>

                <div className="flex flex-1 justify-center md:mb-16 lg:mb-0 mb-10">
                    <Image src="/hero.png" alt="hero picture" width={700} height={800}/>
                </div>
            </div>
        </section>
    )
}
