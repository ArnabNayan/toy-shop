import { Link, useParams } from "react-router-dom";

const FullArticle = () => {
    const { id } = useParams();

    // Replace with actual article fetching logic
    const articles = [
        { 
            id: 1, 
            title: "The Evolution of Action Figures", 
           
            fullText: "Action figures have been a staple in the toy industry for decades, captivating the imaginations of children and collectors alike. From the early G.I. Joe figures to the latest superhero renditions, these miniature replicas have evolved significantly over the years. The first action figures were simple in design, often with limited articulation. However, as technology and manufacturing techniques improved, so did the complexity of these toys. Today, action figures come with intricate details, multiple points of articulation, and even electronic features. They represent a wide range of characters from movies, comics, and video games, making them popular among fans of all ages. The evolution of action figures also reflects changes in popular culture, with new releases often coinciding with major film or comic book events. Collecting action figures has become a serious hobby for many, with rare and vintage pieces fetching high prices in the market."
        },
        { 
            id: 2, 
            title: "The Magic of LEGO", 
            
            fullText: "LEGO has been sparking creativity in children and adults for generations. What began as simple building blocks has transformed into a global phenomenon, with themed sets, movies, and even video games. The beauty of LEGO lies in its versatility; with just a few bricks, you can build anything from a medieval castle to a spaceship. Over the years, LEGO has collaborated with various franchises like Star Wars, Harry Potter, and Marvel, bringing beloved characters and scenes to life in brick form. The interlocking brick system is both simple and ingenious, allowing for endless possibilities and fostering problem-solving skills. Moreover, LEGO sets have evolved to cater to different age groups, from the Duplo range for toddlers to intricate models designed for adult fans of LEGO (AFOLs). Beyond entertainment, LEGO has been used as an educational tool, teaching subjects like engineering and robotics."
        },
        { 
            id: 3, 
            title: "The Timeless Appeal of Wooden Toys", 
           
            fullText: "Wooden toys have a nostalgic charm that modern plastic toys often lack. They remind us of simpler times when toys were handcrafted with care and designed to last. Unlike their plastic counterparts, wooden toys are often more durable and environmentally friendly. These toys are not just relics of the past; they continue to be popular among parents who prefer natural materials for their children. From building blocks to pull-along animals, wooden toys offer a tactile experience that fosters imagination and creativity. Their timeless designs make them appealing to both children and collectors. Additionally, wooden toys often come in minimalist designs, encouraging open-ended play, where children can use their imagination to create their own stories and scenarios. The resurgence of interest in wooden toys reflects a broader trend towards sustainable and eco-friendly products."
        }
    ];
    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-serif font-bold mb-4">{article.title}</h1>
            <p className="font-serif">{article.fullText}</p>
            <Link to={'/blog'} className="text-blue-500 hover:underline">Back</Link>
        </div>
    );
};

export default FullArticle;