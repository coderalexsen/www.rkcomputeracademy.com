function Contact() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Get in touch</h1>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="space-y-2 text-white/80 text-sm">
            <p>+374 11 388888</p>
            <p>info@murakamicity.com</p>
            <p>16 ՀԵՐԱՑԻ ՊՈՂ․, ԵՐԵՎԱՆ 0025</p>
          </div>
          <iframe
            title="Map"
            className="w-full h-64 rounded-xl border border-white/10"
            src="https://www.google.com/maps?q=Murakami%20Yerevan&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;

