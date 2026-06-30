import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sun,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FloatingInput({
  id,
  label,
  type = "text",
  register,
  error,
  required,
  textarea = false,
  rows = 4,
}: {
  id: string;
  label: string;
  type?: string;
  register: ReturnType<typeof useForm<FormData>>["register"];
  error?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}) {
  const base =
    "peer w-full bg-navy-light border border-white/8 hover:border-white/15 focus:border-amber/50 rounded-xl px-4 pt-6 pb-2.5 text-white text-sm outline-none transition-all duration-200 placeholder-transparent resize-none";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          placeholder={label}
          rows={rows}
          className={base}
          {...(register as any)(id, required ? { required: `${label} is required` } : {})}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          className={base}
          {...(register as any)(id, required ? { required: `${label} is required` } : {})}
        />
      )}
      <label
        htmlFor={id}
        className="absolute top-2 start-4 text-[10px] text-white/35 font-semibold peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/25 peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber peer-focus:font-semibold transition-all duration-200 pointer-events-none"
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-red-400/80 text-xs ms-1">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const contactDetails = [
    { Icon: MapPin, label: t.contact.detailsAddress, value: t.contact.addressValue },
    { Icon: Phone, label: t.contact.detailsPhone, value: t.contact.phoneValue },
    { Icon: Mail, label: t.contact.detailsEmail, value: t.contact.emailValue },
    { Icon: Clock, label: t.contact.detailsHours, value: t.contact.hoursValue },
  ];

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-navy min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 end-0 w-[500px] h-[400px] bg-amber/4 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 text-amber text-[11px] font-bold mb-6"
          >
            <span className="w-8 h-px bg-amber" />
            {t.contact.badge}
            <span className="w-8 h-px bg-amber" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            {t.contact.heroTitle}
            <br />
            <span className="text-gradient">{t.contact.heroHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base max-w-xl mx-auto leading-relaxed"
          >
            {t.contact.heroCopy}
          </motion.p>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-navy-light border border-white/5">
              <h2 className="text-xl font-black text-white mb-2">{t.contact.formTitle}</h2>
              <p className="text-white/35 text-sm mb-8">
                {t.contact.formCopy}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-amber/15 border border-amber/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-amber" />
                  </div>
                  <h3 className="text-white font-black text-xl mb-2">{t.contact.sentTitle}</h3>
                  <p className="text-white/45 text-sm mb-8">
                    {t.contact.sentCopy}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-amber hover:text-amber-light font-semibold text-sm transition-colors"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FloatingInput
                      id="name"
                      label={t.contact.fieldName}
                      register={register}
                      error={errors.name?.message}
                      required
                    />
                    <FloatingInput
                      id="phone"
                      label={t.contact.fieldPhone}
                      type="tel"
                      register={register}
                      error={errors.phone?.message}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FloatingInput
                      id="email"
                      label={t.contact.fieldEmail}
                      type="email"
                      register={register}
                      error={errors.email?.message}
                      required
                    />
                    <FloatingInput
                      id="company"
                      label={t.contact.fieldCompany}
                      register={register}
                      error={errors.company?.message}
                    />
                  </div>
                  <FloatingInput
                    id="message"
                    label={t.contact.fieldMessage}
                    register={register}
                    error={errors.message?.message}
                    required
                    textarea
                    rows={5}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-light disabled:opacity-60 text-navy font-black text-sm py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber/25 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        {t.contact.sendBtn}
                        <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="p-8 rounded-3xl bg-navy-light border border-white/5"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 bg-amber rounded-lg flex items-center justify-center">
                  <Sun className="w-4 h-4 text-navy" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="block text-white font-black text-sm">RAYS ELECTRIC</span>
                  <span className="block text-amber/60 text-xs">{t.contact.brandTagline}</span>
                </div>
              </div>

              <div className="space-y-6">
                {contactDetails.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-amber/10 border border-amber/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <span className="block text-white/35 text-[10px] font-semibold mb-1">
                        {label}
                      </span>
                      <span className="block text-white/70 text-sm leading-relaxed whitespace-pre-line">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="p-7 rounded-3xl bg-amber/8 border border-amber/15"
            >
              <h3 className="text-white font-bold text-base mb-4">{t.contact.nextTitle}</h3>
              <div className="space-y-4">
                {t.contact.nextSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber/20 border border-amber/30 text-amber text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/55 text-sm leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAP ─── */}
      <section className="pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/30"
            style={{ height: "400px" }}
          >
            <iframe
              title="RAYS Electric Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4!2d31.4!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAzMcKwMjQnMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9) saturate(0.7)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
