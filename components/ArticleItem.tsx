import Image from "next/image";
import {AiOutlineArrowRight} from "react-icons/ai";

type ArticleProps = {
    image : string;
    title : string;
    description : string;
}

const ArticleItem = ({image, title, description} : ArticleProps) => {
    return(
        <li className="flex flex-col rounded-md shadow-md px-6">
            <div className="flex flex-col items-center ">
                <Image src={image} alt="disease detection picture" width={800} height={600} />
            </div>
            <h2 className="text-center text-lg font-bold mt-5 mb-2 hover:text-blue-800 cursor-pointer">
                {title}
            </h2>
            <p  className="text-center text-gray-500">
                {description}
            </p>
            <div>
            <a className="pl-6 text-blue-700"> Learn More </a>

            </div>
        </li>
    )
}

export default ArticleItem;