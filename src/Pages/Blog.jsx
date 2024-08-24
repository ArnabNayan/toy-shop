import { Link } from "react-router-dom";


const Blog = () => {
    const articles = [
        { 
            id: 1, 
            image:"https://img.freepik.com/free-photo/child-playing-with-wooden-toys-full-shot_23-2149357236.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1723680000&semt=ais_hybrid",
            title: "The Evolution of Action Figures", 
            snippet: "Action figures have been a staple in the toy industry for decades, captivating the imaginations of children and collectors alike...", 
            fullText: "Action figures have been a staple in the toy industry for decades, captivating the imaginations of children and collectors alike. From the early G.I. Joe figures to the latest superhero renditions, these miniature replicas have evolved significantly over the years. The first action figures were simple in design, often with limited articulation. However, as technology and manufacturing techniques improved, so did the complexity of these toys. Today, action figures come with intricate details, multiple points of articulation, and even electronic features. They represent a wide range of characters from movies, comics, and video games, making them popular among fans of all ages. The evolution of action figures also reflects changes in popular culture, with new releases often coinciding with major film or comic book events. Collecting action figures has become a serious hobby for many, with rare and vintage pieces fetching high prices in the market."
        },
        { 
            id: 2, 
            image:"https://media.istockphoto.com/photos/child-playing-with-colorful-toy-blocks-kids-play-picture-id1147827393?k=20&m=1147827393&s=170667a&w=0&h=URf1wKvo_hFE6atscJSNVTRwFxdIw0HpOguEHW0V1g4=",
            title: "The Magic of LEGO", 
            snippet: "LEGO has been sparking creativity in children and adults for generations. What began as simple building blocks has transformed into a global phenomenon...", 
            fullText: "LEGO has been sparking creativity in children and adults for generations. What began as simple building blocks has transformed into a global phenomenon, with themed sets, movies, and even video games. The beauty of LEGO lies in its versatility; with just a few bricks, you can build anything from a medieval castle to a spaceship. Over the years, LEGO has collaborated with various franchises like Star Wars, Harry Potter, and Marvel, bringing beloved characters and scenes to life in brick form. The interlocking brick system is both simple and ingenious, allowing for endless possibilities and fostering problem-solving skills. Moreover, LEGO sets have evolved to cater to different age groups, from the Duplo range for toddlers to intricate models designed for adult fans of LEGO (AFOLs). Beyond entertainment, LEGO has been used as an educational tool, teaching subjects like engineering and robotics."
        },
        { 
            id: 3, 
            image:"https://img.freepik.com/free-photo/kids-home-playing-with-toys_23-2148630637.jpg",
            title: "The Timeless Appeal of Wooden Toys", 
            snippet: "Wooden toys have a nostalgic charm that modern plastic toys often lack. They remind us of simpler times when toys were handcrafted with care...", 
            fullText: "Wooden toys have a nostalgic charm that modern plastic toys often lack. They remind us of simpler times when toys were handcrafted with care and designed to last. Unlike their plastic counterparts, wooden toys are often more durable and environmentally friendly. These toys are not just relics of the past; they continue to be popular among parents who prefer natural materials for their children. From building blocks to pull-along animals, wooden toys offer a tactile experience that fosters imagination and creativity. Their timeless designs make them appealing to both children and collectors. Additionally, wooden toys often come in minimalist designs, encouraging open-ended play, where children can use their imagination to create their own stories and scenarios. The resurgence of interest in wooden toys reflects a broader trend towards sustainable and eco-friendly products."
        }
    ];

    const videos = [
        { id: 1, url: "https://www.youtube.com/embed/GUJIkfHuSNE?si=adb55rz1UN7nwRR7" },
        { id: 2, url: "https://www.youtube.com/embed/R3YJW6kp79Y?si=VfNIkI49JLwtU_ED" },
        { id: 3, url: "https://www.youtube.com/embed/4CX2ZRSEKXU?si=3jARXVfHunbzvyXF" },
        { id: 4, url: "https://www.youtube.com/embed/cPV6DIzpFtQ?si=6lDRHBgOlZ925Spf" },
        { id: 5, url: "https://www.youtube.com/embed/7Z3XV24wb44?si=atJxklOvAcaWQGi0" },
        { id: 6, url: "https://www.youtube.com/embed/2UxRgoWAs0E?si=eLClFvPJhwlOflyu" },
    ];
    return (
        <div>
           <div className="hero h-60 lg:min-h-screen " style={{backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/30/10/03/360_F_530100389_sCIZyhoqhhiv6XP2uTx3xFYuLeMIvFfJ.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      {/* <h1 className="mb-5 text-2xl lg:text-7xl font-bold font-serif bg-cyan-800 p-10 lg:p-28  bg-opacity-65">Shop Now</h1> */}
      <h1 className="mb-5 text-2xl lg:text-5xl font-bold font-serif bg-cyan-800 p-10 lg:p-28  bg-opacity-65 ">
            <span className=" fade-in">Our</span>
           <span className=" fade-in-delayed">Blog</span>
         </h1>
      
    </div>
  </div>
</div>
<div className="lg:p-6">
            <h2 data-aos="flip-up"
        data-aos-duration="2000" className="text-2xl font-bold  font-serif text-cyan-600 mb-4 ">Toy Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {articles.map(article => (
                   
                    <div data-aos="fade-up"
                    data-aos-duration="2000" key={article.id} className="card bg-base-100 image-full w-96 shadow-md">
  <figure>
    <img
      src={article.image}
      alt="Toys" />
  </figure>
  <div className="card-body">
    <h2 data-aos="fade-up"
        data-aos-duration="2000" className="card-title font-serif font-bold">{article.title}</h2>
    <p data-aos="fade-up"
        data-aos-duration="2000" className="mb-4 font-serif">{article.snippet}</p>
    {/* <Link to={`/blog/${article.id}`} className="text-white font-serif text-2xl hover:underline">See More</Link> */}
    <div className="card-actions justify-end">
      <Link data-aos="fade-up"
        data-aos-duration="2000" to={`/blog/${article.id}`} className="btn bg-cyan-600 text-white font-serif">See More</Link>
    </div>
  </div>
</div>

                ))}
            </div>

            <h2 data-aos="fade-up"
            data-aos-duration="2000" className="text-2xl font-serif  text-cyan-600 font-bold mb-4">Toy-Related Videos</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {videos.map(video => (
                    <div data-aos="fade-up"
        data-aos-duration="2000" key={video.id} className="aspect-w-16 aspect-h-16">
                        <iframe
                            className="w-full h-full"
                            src={video.url}
                            title={`YouTube video ${video.id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    
                ))}
            </div>
        </div>

            
       
            
        </div>
    );
};

export default Blog;