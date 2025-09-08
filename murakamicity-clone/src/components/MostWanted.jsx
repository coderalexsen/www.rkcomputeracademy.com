import { motion } from 'framer-motion';

function MostWanted() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              ՏԵՍ ՄԵՐ ԱՄԵՆԱՀԱՅՏՆԻ ՊՐՈԴՈՒԿՏՆԵՐԸ
            </h2>
            <div className="mt-6">
              <a href="/menu" className="inline-flex items-center rounded-full bg-pink-500 px-6 py-3 text-base font-semibold text-black hover:bg-pink-400">
                Տեսնել մենյուն
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden bg-white"
          >
            <img
              src="https://api.murakamicity.com/storage/webp/Murakami_Product_Individual---260-min-2-67e4ff441d939.webp"
              alt="Most wanted"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MostWanted;

