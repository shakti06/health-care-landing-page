import Image from "next/image";

type ButtonProps = {
    type:'button' | 'submit';
    title : string;
    variant : string;
    icon  ? : string;
    full ? :boolean
}

const Button = ({type, title, variant, icon, full} : ButtonProps) =>{
    return(
        <button className={`flexCenter gap-3 hover:bg-white hover:text-black rounded-full border  ${variant} ${full && 'w-full'}`} type={type}>
            {icon && <Image src={icon} alt={title} width={30} height={30}/>}
            <label className="bold-16 cursor-pointer"> {title}</label>
        </button>
    )
}

export default Button;