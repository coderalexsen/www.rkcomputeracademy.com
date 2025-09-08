import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Gallery() {
  const images = [
    'https://api.murakamicity.com/storage/webp/Murakami_Product_Individual---260-min-2-67e4ff441d939.webp',
    'https://api.murakamicity.com/storage/webp/Murakami_Product_Individual---261-min-67e500a78da1d.webp',
    'https://api.murakamicity.com/storage/webp/Murakami_Product_Individual---260-min-2-67e4ff441d939.webp',
    'https://api.murakamicity.com/storage/webp/Murakami_Product_Individual---261-min-67e500a78da1d.webp',
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Swiper spaceBetween={12} slidesPerView={1.2} breakpoints={{640:{slidesPerView:2.2},1024:{slidesPerView:3.2}}}>
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-2xl overflow-hidden bg-white">
                <img src={src} alt="Gallery" className="w-full h-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Gallery;

