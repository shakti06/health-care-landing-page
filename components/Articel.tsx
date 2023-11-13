import { ARTICLE } from "@/constants";
import ArticleItem from "./ArticleItem";
import Button from "./Button";


const Article = () =>{
    return (
        <section className="mt-10 my-10">
            <div className="mx-auto px-2 sm:w-[3/4] sm:h-[3/4] lg:h-[5/2]">
                <h1 className="text-center text-3xl font-bold text-blue-700">
                    Check Our Latest Article
                </h1>
            </div>
            <div className="grid grid-cols-1 padding-container max-container pt-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
                {ARTICLE.map((article) =>(
                    <ArticleItem
                    key={article.title}
                    image={article.image}
                    title={article.title}
                    description={article.description}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-10 mb-6">
                <Button
                  type="button"
                  title="View All"
                  variant="btn-blue"
                />
            </div>
        </section>
    );
}

export default Article;