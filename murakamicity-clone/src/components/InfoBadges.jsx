function InfoBadges() {
  const items = [
    {
      title: 'Միշտ Թարմ',
      icon: 'https://api.murakamicity.com/storage/Murakami_Freshness.svg',
    },
    {
      title: 'Արագ առաքում',
      icon: 'https://api.murakamicity.com/storage/Murakami_Fresh.svg',
    },
    {
      title: 'Անվտանգ Վճարում',
      icon: 'https://api.murakamicity.com/storage/icons_murakami-01-1-1.svg',
    },
    {
      title: 'Աջակցման կենտրոն',
      icon: 'https://api.murakamicity.com/storage/icons_murakami-02-1-1-1.svg',
    },
  ];

  return (
    <section className="bg-black py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
              <img src={item.icon} alt="" className="h-8 w-8" />
              <span className="text-sm font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoBadges;

