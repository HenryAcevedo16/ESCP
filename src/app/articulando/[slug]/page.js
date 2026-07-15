import NavbarArticulando from "@/components/NavbarArticulando";
import ArticleHero from "@/components/article/ArticleHero";
import OpinionForm from "@/components/article/OpinionForm";
import CommentsSection from "@/components/article/CommentsSection";
import Link from "next/link";

export default function ArticlePage({ params }) {
  // En una app real, aquí haríamos fetch del artículo usando params.slug
  const article = {
    category: "Categoría",
    title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica",
    author: "Omar Canela",
    authorRole: "Asesor en capacitación. Elabora un plan de material de apoyo y coordina las estrategias didácticas para los docentes.",
    date: "11 Julio de 2023",
    tags: ["#Tags", "#Tags", "#Tags", "#Tags", "#Tags", "#Tags", "#Tags", "#Tags"],
    content: `
      <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="mb-6">Blandit cursus dui id pellentesque. Nisl nisi dolores alique sem id non quam cum sociis natoque. Nunc id maecenas id id donec in massa sed leco lectus sed magna quam mus? Nibh est repiciendis nostrud eaque obcaecati vel. Nostrud eos id id ipsa id id donec pulvinar, ligula? Ouismod vulputate repellendus quia aute eos consequat, non eos odio vero vel maximi animi sequi. Id et curae fugit soluta, temporibus aspernatur laboriosam, quia dolores. Id et curae.</p>
      <p class="mb-6">Veniam incidunt, quia et, provident ipsa id est non quam eaque mus, amet vel quos quos et vitae consequatur sed non consequatur est culpa quia et. Consectetur, ad natus necessitatibus nihil. Nibh est et temporibus minim voluptates quia amet, aut aut ea modi nam ut id quia eos ea earum et ab aut aut eius eaque iure aut, nam fugiat sed vel aut quia eos aut iste facere, id perferendis hic. Nostrum eaque eos quia dolores ea magni doloribus et consequatur nam. Id, est id perferendis quia atque ut aliquid eaque eos assumenda voluptas quia laboriosam aut quia id enim provident ipsa aspernatur nam.</p>
      <p class="mb-6">Assumenda vero non nam aut, ratione, qui atque eaque eius est omnis repellat ea, qui aut nihil ipsam maxime aut eos est omnis? Assumenda quia, vel qui ut eos, aut, nobis dolores id assumenda non eos ea earum eius nam ea nobis sed id rerum nihil in eos nam quo. Distinctio eaque assumenda eos aut, quia hic sed vel nobis, in tempora eos id porro id eos perferendis tempore quo vero ea nam vel eaque hic, eum enim quia eius eius, eaque hic rerum hic impedit, aut eos id nam eos id id assumenda non.</p>
      <p>Aliquid nihil non assumenda, vero eos quo labore tempore, omnis eos eos voluptas porro modi assumenda quo non consequatur eos ipsam aut eos, id, eius eaque eos dolor eius aspernatur eaque nam aut. Aspernatur eaque nam eius maxime ipsam aut eos aspernatur nam nobis sed eum porro nam aut ipsam non consequatur eos id dolorem ipsa assumenda eos eius porro, eos aut modi consequatur assumenda aut id nobis nihil eum eaque earum dolores ea optio voluptas omnis est aut nam earum eos aut, eos labore nam ut aut assumenda.</p>
    `
  };

  const relatedArticles = [
    { id: '01', title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica", image: "/images/hero-bg.jpg" },
    { id: '02', title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica", image: "/images/hero-bg.jpg" },
    { id: '03', title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica", image: "/images/hero-bg.jpg" },
    { id: '04', title: "ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica", image: "/images/hero-bg.jpg" },
  ];

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <NavbarArticulando />
      <ArticleHero category={article.category} title={article.title} />

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[118px] py-16 flex flex-col lg:flex-row gap-12 xl:gap-24">
        
        {/* Left Column: Meta info */}
        <div className="w-full lg:w-[250px] shrink-0 flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-[29px] mb-3">
              <div className="flex flex-col justify-center h-[72px]">
                <span className="text-[#05162D] text-sm block">Publicado por</span>
                <h3 className="text-[#05162D] text-[24px] font-semibold whitespace-nowrap leading-none mt-1">{article.author}</h3>
              </div>
              <div className="w-[72px] h-[72px] rounded-full bg-[#E5E7EB] shrink-0 overflow-hidden">
                {/* Avatar Placeholder */}
              </div>
            </div>
            
            <p className="text-[#05162D] text-[16px] font-light tracking-[-0.02em] mt-[30px] leading-[30px]">
              {article.authorRole}
            </p>
          </div>
          
          <div className="mb-5">
            <span className="text-[#667085] text-sm font-medium block">Publicado el {article.date}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span key={index} className="text-[#667085] text-sm hover:text-primary cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="w-[40px] h-[40px] rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#667085] hover:bg-primary hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
            <button className="w-[40px] h-[40px] rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#667085] hover:bg-primary hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </button>
            <button className="w-[40px] h-[40px] rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#667085] hover:bg-primary hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </button>
            <button className="w-[40px] h-[40px] rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#667085] hover:bg-primary hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </button>
          </div>
        </div>

        {/* Middle Column: Main Content */}
        <div className="flex-1 max-w-[800px]">
          <div 
            className="prose prose-lg max-w-none text-[#475467] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Right Column: Related */}
        <div className="w-full lg:w-[300px] xl:w-[350px] shrink-0">
          <h3 className="text-[#05162D] text-xl font-bold mb-8">Conoce más de Categoría</h3>
          <div className="flex flex-col gap-6">
            {relatedArticles.map((item, index) => (
              <Link href={`/articulando/ejemplo-articulo`} key={index} className="group flex gap-4 items-start">
                <span className="text-[#F2F4F7] text-[56px] font-bold leading-none -mt-2 group-hover:text-primary transition-colors">
                  {item.id}
                </span>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="w-[120px] h-[70px] bg-gray-200 rounded overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-[#05162D] text-sm font-medium leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <OpinionForm />
      <CommentsSection />
    </main>
  );
}
