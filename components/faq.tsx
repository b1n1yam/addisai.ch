import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Zap,
  Globe,
  Lock,
  Rocket,
  Code,
  BarChart,
} from "lucide-react";
import Wrapper from "./global/wrapper";
import Container from "./global/container";

const faqs = [
  {
    id: 1,
    icon: Rocket,
    question: "What is Vercel and how does it work?",
    answer:
      "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to develop, preview, and ship delightful user experiences instantly, with zero configuration and automatic optimizations. Deploy with a single Git push and watch as your project is built, optimized, and distributed globally across our Edge Network.",
  },
  {
    id: 2,
    icon: Zap,
    question: "How fast are Vercel deployments?",
    answer:
      "Vercel deployments are blazingly fast. Most projects deploy in under 60 seconds, with incremental static regeneration happening in milliseconds. Our Edge Network ensures your content is delivered from the location closest to your users, with cold boot times under 50ms. Every Git push triggers an automatic deployment with a unique preview URL, allowing you to ship with confidence.",
  },
  {
    id: 3,
    icon: Globe,
    question: "What is the Vercel Edge Network?",
    answer:
      "The Vercel Edge Network is a globally distributed infrastructure spanning 100+ cities worldwide. It automatically caches your static assets and serverless functions at the edge, closest to your users. This means faster load times, reduced latency, and improved performance metrics. Edge Functions execute in the optimal location, while Edge Middleware allows you to run code before requests reach your application.",
  },
  {
    id: 4,
    icon: Code,
    question: "Which frameworks does Vercel support?",
    answer:
      "Vercel provides first-class support for Next.js with exclusive features, but also fully supports React, Vue, Svelte, Angular, Nuxt, SvelteKit, Astro, and many other frameworks. We offer zero-config deployment for most popular frameworks, with automatic framework detection, optimal build settings, and specialized optimizations. Whether you're using a modern framework or vanilla JavaScript, Vercel adapts to your stack.",
  },
  {
    id: 5,
    icon: BarChart,
    question: "How does Vercel Analytics work?",
    answer:
      "Vercel Analytics provides real-time insights into your application's performance and user experience without impacting load times. We measure Core Web Vitals, track real user metrics, and provide audience insights—all with privacy-first principles and GDPR compliance. Analytics runs at the edge with zero client-side JavaScript, giving you accurate data about every visitor without compromising performance.",
  },
  {
    id: 6,
    icon: Lock,
    question: "Is Vercel secure and compliant?",
    answer:
      "Security is built into every layer of Vercel's infrastructure. We provide automatic SSL certificates, DDoS protection, and SOC 2 Type II compliance. Preview deployments are secured with authentication, and we offer advanced security features like Password Protection, Trusted IPs, and Web Application Firewall. Your code and data are encrypted at rest and in transit, with regular security audits and vulnerability assessments.",
  },
  {
    id: 7,
    icon: Globe,
    question: "What are Preview Deployments?",
    answer:
      "Preview Deployments are production-like environments created automatically for every Git push. Each branch and pull request gets a unique URL that's instantly shareable with your team, stakeholders, or clients. Changes are deployed immediately, making collaboration seamless. Preview deployments include the full production environment, allowing you to test features, gather feedback, and iterate rapidly before merging to production.",
  },
  {
    id: 8,
    icon: Zap,
    question: "How does pricing work on Vercel?",
    answer:
      "Vercel offers a flexible pricing model starting with a generous free Hobby tier perfect for personal projects and experimentation. The Pro tier ($20/month) unlocks advanced features for professionals and small teams. Enterprise plans provide custom solutions with dedicated support, advanced security, and guaranteed SLAs. You only pay for what you use, with transparent pricing for bandwidth, function executions, and build time. No hidden fees, ever.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  const Icon = faq.icon;

  return (
    <motion.div
      layout
      className="border-b border-zinc-800 overflow-hidden hover:bg-zinc-950/50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
            <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-base md:text-lg font-medium text-white group-hover:text-zinc-100 transition-colors">
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 pb-5 pl-20">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-zinc-400 leading-relaxed text-sm md:text-base"
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function VercelFAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Wrapper>
      <Container>
        <div className="  text-white">
          {/* Gradient background effect */}
          <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block mb-4"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Support & Resources
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                Everything you need to know about deploying with Vercel. Can't
                find what you're looking for?{" "}
                <a
                  href="#"
                  className="text-white hover:text-zinc-300 underline underline-offset-4 transition-colors"
                >
                  Contact our team
                </a>
              </p>
            </motion.div>

            {/* FAQ List */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <FAQItem
                    faq={faq}
                    isOpen={openId === faq.id}
                    onToggle={() => toggleFAQ(faq.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
