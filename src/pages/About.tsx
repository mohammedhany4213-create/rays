// src/pages/About.tsx
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, Award } from "lucide-react";

const stats = [
  { label: "سنوات الخبرة", value: "15+" },
  { label: "مشروع منجز", value: "320+" },
  { label: "عميل راضٍ", value: "200+" },
  { label: "فني متخصص", value: "25+" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "الأمان أولاً",
    desc: "نلتزم بأعلى معايير السلامة في كل تركيب وصيانة كهربائية.",
  },
  {
    icon: Zap,
    title: "كفاءة وسرعة",
    desc: "فريقنا مدرّب على تنفيذ المشاريع في الوقت المحدد بأعلى جودة.",
  },
  {
    icon: Users,
    title: "فريق محترف",
    desc: "مهندسون وفنيون معتمدون بخبرة طويلة في المجال الكهربائي.",
  },
  {
    icon: Award,
    title: "جودة معتمدة",
    desc: "نستخدم مواد وأدوات مطابقة للمواصفات العالمية.",
  },
];

export default function About() {
  return (
    <main className="bg-white text-[#0B1E3D]">
      {/* Hero */}
      <section className="bg-[#0B1E3D] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            مين إحنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Rays Electric شريكك الموثوق في حلول الكهرباء، بخبرة تمتد لأكثر من
            15 عام في تنفيذ مشاريع التركيبات والصيانة الكهربائية باحترافية
            عالية.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/about-placeholder.jpg"
              alt="فريق Rays Electric"
              className="rounded-2xl shadow-lg w-full object-cover h-80"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">قصتنا</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              بدأنا رحلتنا بهدف واحد: تقديم حلول كهربائية موثوقة وآمنة لكل
              عميل. مع مرور السنين، توسعنا لنغطي مشاريع سكنية وتجارية وصناعية
              متنوعة، مع الحفاظ على نفس الالتزام بالجودة والدقة في كل تفصيلة.
            </p>
            <p className="text-gray-600 leading-relaxed">
              فريقنا اليوم يضم مهندسين وفنيين معتمدين، مجهزين بأحدث الأدوات
              والمعرفة لتنفيذ أي مشروع كهربائي مهما كان حجمه أو تعقيده.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#F2994A]">
                {stat.value}
              </p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0B1E3D] flex items-center justify-center">
                  <v.icon className="text-[#F2994A]" size={26} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}