"use client"
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { GiSparkles } from "react-icons/gi";
import { BsCode } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { IconType } from "react-icons";
// import { Sparkles, Code2, ShoppingCart } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Hybrid — We Build Cool Stuff</title>
        <meta
          name="description"
          content="Hybrid builds beautiful, fast web experiences and music platforms. Studio X is one of our creations."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-800 text-slate-100 overflow-hidden scroll-smooth">
        {/* NAV */}
        <nav className="max-w-7xl mx-auto p-6 flex items-center justify-between relative z-20">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="hidden sm:block font-semibold">Hybrid</span>
          </div>
          <div className="flex items-center space-x-4">
            {[
              { href: "#work", label: "Our Work" },
              { href: "#services", label: "Services" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden md:inline-block text-sm px-4 py-2 rounded-md hover:bg-slate-800 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-600 to-violet-600 px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-pink-500/30 transition"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-6 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Glow effect background */}
          <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] rounded-full bg-pink-600/30 blur-[180px] -z-10" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/20 blur-[160px] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Title */}
            <motion.h1
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            >
              We build the stuff that matters,<br /> for your business & customers <br />
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-amber-300 bg-[length:200%_200%]"
              >
                bespoke, fast, memorable.
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-slate-300 max-w-xl text-lg font-['Bahnschrift-Light']"
            >
              We focus on detail, ROI and customer satisfaction.
              Launch faster, scale easier. <br />Talk to us about how we can help your business grow.
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(236,72,153,0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-violet-600 font-semibold shadow-lg transition"
              >
                Start a Project
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30,41,59,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-sm"
              >
                View Our Projects
              </motion.a>
            </div>

            {/* Trust Badges */}
            <motion.div
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <TrustBadge name="Studio X" subtitle="Music & Streaming" />
              <TrustBadge name="Nyasa Events" subtitle="Event Tech" />
              <TrustBadge name="Oak Valley" subtitle="EdTech" />
              <TrustBadge name="Oak Valley" subtitle="EdTech" />
            </motion.div>
          </motion.div>


          {/* Hero mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md shadow-2xl rounded-3xl  "
          >
            <MockStudioWindow />
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">What we do</h2>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
              Productized engineering & design for entertainment platforms, e-commerce and immersive web apps.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard Icon={<GiSparkles size={30} />} title="Streaming Web Apps" desc="Robust playback, adaptive streaming, & sync across devices." />
              <FeatureCard Icon={<BsCode size={30} />} title="Full-stack Web Apps" desc="Custom and polished UX that scales. Everything we build ties back to your business' growth" />
              <FeatureCard Icon={<CiShoppingCart size={30} />} title="E-commerce" desc="Get your business online and make more sales with our fast checkout and local payment integrations." />
            </div>
          </div>
        </section>

        {/* projects */}
        <section id="work" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Our projects</h2>
                <p className="text-slate-400 mt-1">High impact launches we’re proud of.</p>
              </div>
              <a href="#work" className="text-sm text-slate-300 underline">
                View all
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <CaseStudyCard
                title="Studio X"
                tag="Music & Streaming"
                blurb="Design system, player, and native-feeling web app."
                img="/images/x.png"
                url={"https://xstudio.vercel.app/"}
              />
              <CaseStudyCard
                title="Corporate Africa"
                tag="Business & Events"
                blurb="Business news and Events website ."
                img="/images/news.png"
                url={"https://clafrica.online/"}
              />
              <CaseStudyCard
                title="Bloom Academy"
                tag="EdTech"
                blurb="Responsive learning platform with recordings manager."
                img="/images/bloom.png"
                url={"https://bloom-eight-sable.vercel.app/tutors/dashboard"}
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold">Ready to build something loud?</h2>
              <p className="text-slate-400 mt-3">Tell us about your project and we’ll send a plan and estimate.</p>
              <div className="mt-6 space-y-3">
                <ContactInfo />
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/30 blur-[200px]" />
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo small />
              <div className="text-sm">
                <div className="font-semibold">Hybrid</div>
                <div className="text-slate-500">© {new Date().getFullYear()} Hybrid</div>
              </div>
            </div>
            <div className="text-sm text-slate-400">Privacy • Terms</div>
          </div>
        </footer>
      </main>
    </>
  );
}

/* ---------------------- Components ---------------------- */
function Logo({ small }: { small?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${small ? "text-sm" : "text-base"}`}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="48" height="48" rx="10" fill="#0f172a" />
        <path d="M20 16L28 32L20 48" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
        <path d="M44 16L36 32L44 48" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function TrustBadge({ name, subtitle }: { name: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 bg-slate-800 rounded-full px-3 py-2 shadow-lg">
      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-sm font-bold">
        {name[0]}
      </div>
      <div className="text-sm">
        <div className="font-medium text-slate-100">{name}</div>
        <div className="text-xs text-slate-400">{subtitle}</div>
      </div>
    </div>
  );
}

function FeatureCard({ Icon, title, desc }: { Icon: IconType; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur ring-1 ring-slate-700 hover:ring-pink-500/40 transition shadow-lg">
      {Icon}
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-slate-400">{desc}</p>
    </div>
  );
}
function MockStudioWindow() {
  return (
    <div className="w-full h-72 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl relative shadow-2xl">
      <div className="absolute inset-0 p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="h-3 w-28 rounded bg-slate-700" />
          <div className="h-3 w-20 rounded bg-slate-700" />
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 p-4 flex flex-col gap-3">
            <div className="h-6 w-32 rounded bg-slate-600" />
            <div className="flex-1 bg-slate-700 rounded" />
          </div>

          <div className="rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 p-4 flex flex-col gap-3">
            <div className="h-6 w-20 rounded bg-slate-600" />
            <div className="flex-1 bg-slate-700 rounded" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded bg-gradient-to-br from-pink-500 to-violet-600" />
          <div className="h-3 w-56 rounded bg-slate-700" />
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ title, tag, blurb, img, url }: { title: string; tag: string; blurb: string; img: string; url: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl overflow-hidden shadow-xl bg-slate-800/80 ring-1 ring-slate-700 hover:ring-violet-500/40 transition"
    >
      <Link href={url} target="_blank">
        <div className="relative w-full h-70  backdrop:backdrop-blur-2xl bg-white/50 p-4">
          <Image src={img} alt={title} fill className="object-cover object-top-left h-[90%] w-[90%]" />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">{title}</div>
            <div className="text-sm text-slate-400">{tag}</div>
          </div>
          <p className="text-slate-300">{blurb}</p>
        </div>
      </Link>
    </motion.div>

  );
}

function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="p-3 rounded-lg bg-slate-800">
        <div className="text-xs text-slate-400">Email</div>
        <div className="font-medium">hello@hybrid.studio</div>
      </div>
      <div className="p-3 rounded-lg bg-slate-800">
        <div className="text-xs text-slate-400">Location</div>
        <div className="font-medium">Blantyre, Malawi</div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="p-6 bg-slate-800/90 rounded-2xl ring-1 ring-slate-700 backdrop-blur space-y-4">
      <div>
        <label className="block text-slate-300 text-sm font-medium">Your name</label>
        <input className="mt-2 w-full rounded-md bg-slate-900 p-3 text-slate-100 focus:ring-2 focus:ring-pink-500 outline-none" placeholder="Aisha" />
      </div>
      <div>
        <label className="block text-slate-300 text-sm font-medium">Email</label>
        <input className="mt-2 w-full rounded-md bg-slate-900 p-3 text-slate-100 focus:ring-2 focus:ring-pink-500 outline-none" placeholder="you@domain.com" />
      </div>
      <div>
        <label className="block text-slate-300 text-sm font-medium">Project brief</label>
        <textarea className="mt-2 w-full rounded-md bg-slate-900 p-3 text-slate-100 h-28 focus:ring-2 focus:ring-pink-500 outline-none" placeholder="Short brief..." />
      </div>
      <motion.a
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(236,72,153,0.5)" }}
        whileTap={{ scale: 0.96 }}
        className="gap-2 px-6 py-3 rounded-full w-full bg-gradient-to-r from-pink-600 to-violet-600 font-semibold shadow-lg transition"
      >
        <button type="submit" className="  w-11/12 cursor-pointer">
          Send Message
        </button>
      </motion.a>
    </form>
  );
}
