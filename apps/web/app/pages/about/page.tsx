"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <section className="bg-surface px-4 sm:px-8 md:px-20 pt-16 md:pt-24 pb-24">
      <div className="mx-auto font-galaxie max-w-4xl space-y-28">

        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            style={{
              WebkitTextStroke: "0.45px currentColor",
              textShadow: "0 0 0.7px currentColor",
            }}
            className="
              font-galaxie text-black
              text-[34px] sm:text-[42px] md:text-[52px]
              leading-[44px] sm:leading-[54px] md:leading-[64px]
              mb-6
            "
          >
            About Jamb
          </h1>

          <p className="text-[16px] sm:text-[18px] leading-[28px] font-galaxie text-gray-600 max-w-2xl mx-auto">
            For over three decades, Jamb has crafted architectural pieces that bring
            warmth, heritage, and enduring beauty into the heart of the home.
          </p>
        </motion.div>

        {/* FOUNDERS */}
        <Section id="founders" title="Founders" delay={0.1} >
          Jamb was founded by artisans and historians with a shared reverence for
          classical design. What began as a small restoration studio has grown into
          an internationally respected atelier, blending historical scholarship
          with modern craftsmanship.
        </Section>

        {/* TEAM */}
        <Section id="team" title="Team" delay={0.2}>
          Our team is composed of stonemasons, metalworkers, designers, and art
          historians who share a dedication to excellence. Every piece we produce
          is the result of collaboration, care, and uncompromising attention to
          detail.
        </Section>

        {/* HISTORY */}
        <Section id="history" title="History" delay={0.3}>
          Since our inception, Jamb has worked with collectors, architects, and
          heritage institutions worldwide. From grand Regency fireplaces to
          delicately patinated lanterns, our work preserves the poetry of the past
          while adapting it for contemporary interiors.
        </Section>

        {/* GALLERIES */}
        <Section id="galleries" title="Galleries" delay={0.4}>
          Our galleries serve as curated spaces where visitors can experience our
          collections in an immersive setting. Each display reflects a dialogue
          between craftsmanship, form, and timeless elegance.
        </Section>

        {/* WORKSHOPS */}
        <Section id="workshops" title="Workshops" delay={0.5}>
          In our workshops, tradition meets innovation. From hand-carved marble to
          custom cast iron, every piece is shaped by skilled hands using methods
          passed down through generations.
        </Section>

        {/* SHOWROOMS */}
        <Section id="showrooms" title="Showrooms" delay={0.6}>
          Our showrooms invite visitors to explore our collections in an intimate
          environment. Each space is thoughtfully designed to reflect the character
          and spirit of our work.
        </Section>

        {/* TERMS */}
        <Section id="terms" title="Terms & Conditions" delay={0.7}>
          All commissions and purchases are subject to our standard terms and
          conditions. For detailed information regarding orders, delivery,
          restoration services, and returns, please contact our team.
        </Section>

        {/* ENQUIRY */}
        <motion.div
          id="enquiry"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="border-t border-gray-200 pt-16 text-center space-y-6"
        >
          <h2
            style={{
              WebkitTextStroke: "0.45px currentColor",
              textShadow: "0 0 0.7px currentColor",
            }}
            className="
              font-galaxie text-black
              text-[28px] sm:text-[32px] md:text-[36px]
              leading-[38px] sm:leading-[44px] md:leading-[48px]
            "
          >
            Enquiries
          </h2>

          <p className="text-[16px] leading-[26px] text-gray-600 max-w-xl mx-auto">
            For commissions, availability, or bespoke requests, our team would be
            delighted to hear from you.
          </p>

          <Link
            href="mailto:hello@jamb.co.uk"
            className="
              inline-block
              border border-[#737373]
              px-10 py-3
              font-galaxie text-[16px] text-[#737373]
              transition-all duration-300 ease-out
              hover:text-black hover:border-black
              hover:translate-y-[-2px]
            "
          >
            Email Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

/* ---------- Reusable Section Component ---------- */

function Section({
  id,
  title,
  children,
  delay,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="space-y-6"
    >
      <h2
        className="
          font-galaxie text-black
          text-[26px] sm:text-[30px]
          leading-[36px] sm:leading-[40px]
       font-medium
    drop-shadow-[0_0_0.8px_rgba(0,0,0,0.35)]
          "
           
      >
        {title}
      </h2>

      <p 
      
      className="text-[16px] leading-[26px] text-[#9C9C9D]">
        {children}
      </p>
    </motion.div>
  );
}
