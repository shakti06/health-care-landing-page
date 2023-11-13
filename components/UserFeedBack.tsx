import Image from "next/image";


const UserFeedBack = () => {
    return(
        <section className="relative">
            <div className="flex flex-col items-center container-padding max-container">
                <div className="flex flex-1 mt-6 items-start">
                    <Image src="/user.png" alt="user picture" width={30} height={80}/>
                </div>
            </div>
        </section>
    )
}

export default UserFeedBack;