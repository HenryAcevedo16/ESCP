import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/strapi";

export default function HeroSection({ heroConfig = null }) {
  if (!heroConfig) return null;

  const {
    tipo_media,
    archivo_media,
    titulo,
    subtitulo,
    boton_texto,
    boton_url,
    programa_destacado,
    stat_1,
    stat_2,
    stat_3,
  } = heroConfig;

  const mediaUrl = getStrapiImageUrl(archivo_media) || '/videos/2c23d65f-1858-45d4-910c-139fa94d9e74.mp4';
  const effectiveTipoMedia = archivo_media ? tipo_media : 'video';

  // URL del botón: si hay un programa destacado va a su slug, si no usa boton_url o /programas
  const btnHref = programa_destacado?.slug
    ? `/programas/${programa_destacado.slug}`
    : (boton_url || '/programas');
  const btnText = boton_texto || 'Conocer más';

  return (
    <section className="relative w-full bg-white">
      <div className="relative w-full h-[80dvh] min-h-[500px] tablet:h-[100dvh] tablet:min-h-[600px] bg-slate-800 flex flex-col justify-between overflow-hidden">

        {/* Background Media */}
        {effectiveTipoMedia === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src={mediaUrl} type="video/mp4" />
          </video>
        ) : mediaUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url('${mediaUrl}')` }}
          />
        ) : null}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto h-full flex flex-col items-start desktop:items-center justify-center text-left desktop:text-center px-4 tablet:px-[60px] desktop:px-[80px] min-[1610px]:px-[118px] pt-28 tablet:pt-40 pb-32">
          {titulo && (
            <h1 className="text-3xl sm:text-4xl tablet:text-5xl desktop:text-6xl font-bold text-white mb-6 leading-tight max-w-[1000px] desktop:max-w-[1300px] desktop:mx-auto mt-10 tablet:mt-0">
              {titulo}
            </h1>
          )}
          {subtitulo && (
            <p className="text-lg tablet:text-xl text-gray-200 mb-6 tablet:mb-10 max-w-[700px] desktop:max-w-[900px] desktop:mx-auto">
              {subtitulo}
            </p>
          )}

          {/* Botón único */}
          <div className="flex justify-center items-center mt-4 tablet:mt-8 w-full">
            <Link
              href={btnHref}
              className="bg-primary hover:bg-primary-dark text-white w-full sm:w-[260px] h-[60px] sm:h-[80px] text-[18px] sm:text-[24px] rounded-full font-semibold transition flex items-center justify-center"
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Stats Card */}
      {(stat_1 || stat_2 || stat_3) && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] tablet:w-[90%] max-w-4xl h-auto bg-white z-20 flex flex-row items-center justify-around py-3 tablet:py-6 px-2 tablet:px-4 rounded-t-[24px] tablet:rounded-t-[56px]">
          <div
            className="absolute pointer-events-none"
            style={{
              width: "24px", height: "24px", left: "-24px", bottom: "0",
              background: "radial-gradient(circle at 0% 0%, transparent 24px, #ffffff 24.5px)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: "24px", height: "24px", right: "-24px", bottom: "0",
              background: "radial-gradient(circle at 100% 0%, transparent 24px, #ffffff 24.5px)",
            }}
          />
          {stat_1 && (
            <div className="text-center flex-1">
              <p className="font-bold text-gray-900 text-xs sm:text-sm tablet:text-lg">{stat_1}</p>
            </div>
          )}
          {stat_1 && stat_2 && <div className="w-px h-6 bg-gray-200 shrink-0" />}
          {stat_2 && (
            <div className="text-center flex-1">
              <p className="font-bold text-gray-900 text-xs sm:text-sm tablet:text-lg">{stat_2}</p>
            </div>
          )}
          {stat_2 && stat_3 && <div className="w-px h-6 bg-gray-200 shrink-0" />}
          {stat_3 && (
            <div className="text-center flex-1">
              <p className="font-bold text-gray-900 text-xs sm:text-sm tablet:text-lg">{stat_3}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
