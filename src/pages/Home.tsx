import { motion } from "framer-motion"
import { Sun, ShieldCheck, Zap } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-amber/30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 px-6 max-w-3xl mx-auto"
        >
          <span className="text-amber font-semibold tracking-widest text-sm mb-4 block">
  RAYS ELECTRIC
</span>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            شركتك الموثوقة في عالم
            <br />
            <span className="text-amber">الطاقة الشمسية</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            بنقدملك حلول طاقة شمسية احترافية ومستدامة، من التصميم للتركيب
            للصيانة، بخبرة وثقة عملائنا.
          </p>
        </motion.div>
      </section>

      {/* Split Section - About */}
      <section className="bg-navy-light py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              مين إحنا؟
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
رايز إلكتريك شركة متخصصة في تركيب وصيانة أنظمة الطاقة الشمسية
              للمنازل والشركات. هدفنا إننا نوفرلك حل عملي ومستدام يقلل فاتورة
              الكهرباء ويحافظ على البيئة، بفريق محترف وخبرة في السوق المصري.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-amber/15 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber" />
                </div>
                <span className="text-sm text-white/80 font-medium">
                  خبرة وثقة
                </span>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-amber/15 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-amber" />
                </div>
                <span className="text-sm text-white/80 font-medium">
                  ضمان شامل
                </span>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-amber/15 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-amber" />
                </div>
                <span className="text-sm text-white/80 font-medium">
                  تنفيذ سريع
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image Side - استبدلها بصورة حقيقية بعدين */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden h-[400px] md:h-[480px]"
          >
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
              alt="فريق رايز سولار"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}