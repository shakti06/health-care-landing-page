import Image from "next/image";
import Button from "./Button";

const HealthProvider =()=>{
    return(
        <section className="relative">
            <div className="padding-container max-container flex flex-col items-center lg:flex-row mt-8 lg:mt-20">
                <div className="flex flex-1  flex-wrap items-start mb-10 md:mb-6 lg:mb-0">
                    <Image src="/provider.jpg" alt="health provider image" width={800} height={700} />
                </div>

                <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl items-center md:text-3xl lg:text-5xl lg:text-left mb-6">
                            Leading HealthCare Providers
                        </h1>
                        <p className="text-center text-gray-600 text-lg lg:text-left mb-6">
                            Everest Health Care providers affordable and progessive healthcare, accessible on both mobile and online for eveyerone.
                            To us it's just not work.We take pride in the solutions, we deliver.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mt-6 mb-6">
                            <Button
                             type="button"
                             title="Learn More"
                             variant="btn-blue"
                            />
                        </div>
                </div>
            </div>
        </section>
    );
}

export default HealthProvider;