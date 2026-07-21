export default function ArticleHero({ category, title, imageUrl }) {
  return (
    <div className="relative w-full h-[55vh] min-h-[350px] md:min-h-[500px] xl:min-h-[600px] mt-[90px] md:mt-[116px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl || '/images/hero-bg-2.jpg'})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-16 px-6 md:px-[118px] max-w-[1920px] mx-auto z-10 w-full">
        <div className="w-full max-w-[1680px] min-h-[192px] h-auto flex flex-col justify-end">
          <span className="text-white text-lg md:text-xl font-medium mb-2 tracking-wide">
            {category}
          </span>
          <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
