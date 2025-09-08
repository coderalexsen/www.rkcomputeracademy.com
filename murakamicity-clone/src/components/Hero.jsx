import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[90vh] w-full">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://api.murakamicity.com/storage/webp/Murakami_Home_Hero_Mobile-min-68b068d913c65.webp"
          />
          <img
            src="https://api.murakamicity.com/storage/webp/Mask-group-min-68b0687079a6b.webp"
            alt="Murakami City Hero"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </picture>

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Երևանի լավագույն սուշիի առաքումը
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
              className="mt-8"
            >
              <a
                href="/menu"
                className="inline-flex items-center rounded-full bg-pink-500 px-6 py-3 text-base font-semibold text-black hover:bg-pink-400"
              >
                ՊԱՏՎԻՐԵԼ ԱՌԱՔՈՒՄ ԿԱՄ ԳԱԼ ՎԵՐՑՆԵԼ
              </a>
              <span className="ml-4 text-white/80">10:00 AM - 02:00 AM</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

