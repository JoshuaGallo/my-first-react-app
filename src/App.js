import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const serviceData = [
  {
    title: "SEO Services",
    description: "Boost your search engine rankings and drive targeted traffic.",
    icon: "🔍",
  },
  {
    title: "Social Media Marketing",
    description: "Build a loyal audience with data-driven social strategies.",
    icon: "📱",
  },
  {
    title: "Automation",
    description: "Streamline workflows and save time with custom solutions.",
    icon: "⚙️",
  },
  {
    title: "Email Marketing",
    description: "Drive conversions with tailored email campaigns.",
    icon: "📧",
  },
  {
    title: "PPC Advertising",
    description: "Maximize ROI with precision-targeted paid ads.",
    icon: "💰",
  },
  {
    title: "Web Development",
    description: "Create websites that captivate and convert.",
    icon: "🌐",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
        {/* Header Section */}
        <header className="flex items-center justify-between px-6 py-4 absolute top-0 left-0 w-full z-50 bg-transparent">
          <div className="flex items-center">
            <img
              src={darkMode ? "/images/company-logo-white.png" : "/images/company-logo-black.png"}
              alt="Company Logo"
              className={`h-16 w-32 object-contain ${!darkMode ? "transform scale-[1.5] origin-left" : ""}`} // Scale only black logo
              onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Logo+Not+Found")}
            />
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition duration-300 shadow-lg"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </header>

        {/* Hero Section */}
        <HeroSection darkMode={darkMode} />

        {/* Services Section */}
        <ServicesSection />

        {/* Case Study Section for Struxure (SEO) */}
        <CaseStudySection />

        {/* Case Study Section for Firegang */}
        <CaseStudySectionFiregang />

        {/* Case Study Section for Struxure Configurator */}
        <CaseStudySectionStruxureConfigurator />

        {/* Process Section */}
        <ProcessSection darkMode={darkMode} />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

function HeroSection({ darkMode }) {
  const { scrollY } = useScroll();
  const opacityText = useTransform(scrollY, [0, 200], [1, 0]);
  const yText = useTransform(scrollY, [0, 200], [0, -50]);
  const scaleCTA = useTransform(scrollY, [0, 200], [1, 0.9]);

  // Particle data for the enhanced animation
  const particles = Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Futuristic Marketing Background: Enhanced Digital Wave with Glowing Gradient, Particles, and Pulsing Overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: darkMode ? "#A855F7" : "#3B82F6", stopOpacity: 0.7 }} />
              <stop offset="50%" style={{ stopColor: darkMode ? "#8B5CF6" : "#10B981", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: darkMode ? "#A855F7" : "#3B82F6", stopOpacity: 0 }} />
            </linearGradient>
            <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: darkMode ? "#A855F7" : "#3B82F6", stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: darkMode ? "#A855F7" : "#3B82F6", stopOpacity: 0 }} />
            </radialGradient>
            <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: darkMode ? "#A855F7" : "#3B82F6", stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: darkMode ? "#A855F7" : "#3B82F6", stopOpacity: 0 }} />
            </radialGradient>
            <filter id="waveGlow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 0" />
            </filter>
          </defs>
          {/* Pulsing Overlay */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="50%"
            fill="url(#pulseGradient)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          {/* Digital Wave with Glow */}
          <motion.path
            d="M-200,800 Q400,600 800,800 T1600,800"
            fill="url(#waveGradient)"
            filter="url(#waveGlow)"
            animate={{
              d: [
                "M-200,800 Q400,600 800,800 T1600,800",
                "M-200,800 Q400,800 800,500 T1600,800",
                "M-200,800 Q400,400 800,700 T1600,800",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M-100,900 Q500,700 900,900 T1800,900"
            fill="url(#waveGradient)"
            filter="url(#waveGlow)"
            animate={{
              d: [
                "M-100,900 Q500,700 900,900 T1800,900",
                "M-100,900 Q500,900 900,600 T1800,900",
                "M-100,900 Q500,500 900,800 T1800,900",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 1,
            }}
          />
          {/* Enhanced Particles with Drifting Motion */}
          {particles.map((particle) => (
            <motion.circle
              key={particle.id}
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r={particle.size}
              fill="url(#particleGlow)"
              initial={{ opacity: particle.opacity, x: `${particle.x}%`, y: `${particle.y}%` }}
              animate={{
                x: [`${particle.x}%`, `${particle.x + 15}%`, `${particle.x}%`],
                y: [`${particle.y}%`, `${particle.y + 15}%`, `${particle.y}%`],
                opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center justify-center px-6 z-10">
        {/* Text Content (Centered) */}
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              color: darkMode ? "#FFFFFF" : "#1F2937",
              opacity: opacityText,
              y: yText,
            }}
          >
            Elevate Your Brand
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{
              color: darkMode ? "#D1D5DB" : "#4B5563",
              opacity: opacityText,
              y: yText,
            }}
          >
            Unleash your digital potential with cutting-edge marketing strategies.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            animate={{ scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 1.5 } }}
            style={{ scale: scaleCTA }}
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </div>

      {/* Stats Section at the Bottom */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8 md:space-x-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold" style={{ color: darkMode ? "#FFFFFF" : "#1F2937" }}>
            70+
          </p>
          <p className="text-sm md:text-base" style={{ color: darkMode ? "#D1D5DB" : "#4B5563" }}>
            Featured Projects
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold" style={{ color: darkMode ? "#FFFFFF" : "#1F2937" }}>
            10K+
          </p>
          <p className="text-sm md:text-base" style={{ color: darkMode ? "#D1D5DB" : "#4B5563" }}>
            Turnover per Year
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold" style={{ color: darkMode ? "#FFFFFF" : "#1F2937" }}>
            100+
          </p>
          <p className="text-sm md:text-base" style={{ color: darkMode ? "#D1D5DB" : "#4B5563" }}>
            Happy Customers
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

  
function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Our Expertise</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          We provide a wide range of services tailored to your business needs.
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  console.log("Rendering CaseStudySection for Struxure...");

  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Proven Results: Our SEO Success with Struxure</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          See how we transformed Struxure’s online presence with data-driven SEO strategies.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h3 className="text-3xl font-bold mb-4">The Challenge</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Struxure, a leader in motorized louvered pergolas for outdoor living, needed to boost their organic visibility to compete in a niche market. Their organic traffic was stagnant, and they lacked high-quality backlinks to improve domain authority.
            </p>

            <h3 className="text-3xl font-bold mb-4">Our Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We implemented a comprehensive SEO strategy, including on-page optimization, content creation targeting high-intent keywords, and a robust link-building campaign. Over 6 months, we achieved remarkable results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-bold">Organic Traffic</h4>
                <p className="text-3xl text-indigo-600 dark:text-indigo-400">+64%</p>
                <p className="text-gray-600 dark:text-gray-400">From 12.4K to 20.3K</p>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold">Referring Domains</h4>
                <p className="text-3xl text-indigo-600 dark:text-indigo-400">+40%</p>
                <p className="text-gray-600 dark:text-gray-400">From 443 to 621</p>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="text-xl font-bold">Organic Keywords</h4>
                <p className="text-3xl text-indigo-600 dark:text-indigo-400">+62%</p>
                <p className="text-gray-600 dark:text-gray-400">From 8.1K to 13.1K</p>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4 className="text-xl font-bold">Traffic Value</h4>
                <p className="text-3xl text-indigo-600 dark:text-indigo-400">+$8.8K</p>
                <p className="text-gray-600 dark:text-gray-400">From $19.8K to $28.6K</p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              className="w-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/struxure-ahrefs-graph.png"
                alt="Struxure Organic Traffic Growth Graph"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => (e.target.src = "https://via.placeholder.com/600x300?text=Graph+Not+Found")}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Organic traffic and traffic value growth over time (Source: Ahrefs)
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-4">What Struxure Says About Us</h4>
              <p className="text-gray-600 dark:text-gray-400">
                [Google My Business reviews coming soon! We’re working with Struxure to gather their feedback.]
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function CaseStudySectionFiregang() {
  console.log("Rendering CaseStudySection for Firegang...");

  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Proven Results: Our SEO Success with Firegang</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          See how we skyrocketed Firegang’s online visibility with targeted SEO strategies.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h3 className="text-3xl font-bold mb-4">The Challenge</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Firegang, a dental marketing agency, struggled with low organic traffic and limited online visibility in a competitive industry. They needed a strategy to attract more high-intent leads through search engines.
            </p>

            <h3 className="text-3xl font-bold mb-4">Our Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We developed a tailored SEO campaign focusing on keyword optimization, technical SEO improvements, and a strategic link-building plan. Over 6 months, we delivered exponential growth in traffic and lead generation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-bold">Organic Traffic</h4>
                <p className="text-3xl text-indigo-600 dark:text-indigo-400">+533%</p>
                <p className="text-gray-600 dark:text-gray-400">From 300 to 1.9K</p>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold">Referring Domains</h4>
                <p className="text-3xl text-indigo-600 dark:text-indigo-400">+56%</p>
                <p className="text-gray-600 dark:text-gray-400">From 165 to 257</p>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="text-xl font-bold">Backlinks</h4>
                <p className="text-3xl text-indigo-600 dark:text-indigo-400">+65%</p>
                <p className="text-gray-600 dark:text-gray-400">From 787 to 1.3K</p>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4 className="text-xl font-bold">Traffic Value</h4>
                <p className="text-3xl text-indigo-600 dark:text-indigo-400">+$10.7K</p>
                <p className="text-gray-600 dark:text-gray-400">From $1.45K to $11.5K</p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              className="w-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/firegang-ahrefs-graph.png"
                alt="Firegang Organic Traffic Growth Graph"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => (e.target.src = "https://via.placeholder.com/600x300?text=Graph+Not+Found")}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Organic traffic and traffic value growth over time (Source: Ahrefs)
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-4">What Firegang Says About Us</h4>
              <p className="text-gray-600 dark:text-gray-400">
                [Google My Business reviews coming soon! We’re working with Firegang to gather their feedback.]
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function CaseStudySectionStruxureConfigurator() {
  console.log("Rendering CaseStudySection for Struxure Configurator...");

  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Cutting-Edge Development: Struxure’s Custom Configurator
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover how we built a state-of-the-art configurator for Struxure, revolutionizing the way customers design their dream pergolas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h3 className="text-3xl font-bold mb-4">The Challenge</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Struxure, an industry leader in motorized louvered pergolas, needed a tool to empower customers to design and customize their pergolas with ease. The challenge was to create a fully custom configurator that could handle complex 3D rendering, provide real-time visualization, and integrate seamlessly with Struxure’s manufacturing process—all while delivering an intuitive and visually stunning user experience.
            </p>

            <h3 className="text-3xl font-bold mb-4">Our Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We developed a state-of-the-art configurator at{' '}
              <a
                href="https://configurator.struxure.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                configurator.struxure.com
              </a>
              , featuring a sleek, modern interface and cutting-edge technology. The platform offers real-time 3D rendering, allowing users to visualize their pergola designs instantly. Key features include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
              <li>
                <strong>Intuitive Customization:</strong> Users can select from multiple layouts (e.g., single, inline, diagonal, L-shaped), choose colors, and add accessories like canopies and backdrops with a seamless step-by-step process.
              </li>
              <li>
                <strong>Real-Time 3D Visualization:</strong> Built with advanced 3D rendering technology, the configurator provides a dynamic, interactive experience, ensuring customers can see their designs come to life as they make changes.
              </li>
              <li>
                <strong>Manufacturing Integration:</strong> The platform is designed to align with Struxure’s manufacturing constraints, ensuring every user design is feasible and ready for production.
              </li>
              <li>
                <strong>User-Friendly Design:</strong> With a clean, modern UI, intuitive controls (e.g., "Reset Configuration," "Review Design"), and a responsive layout, the configurator delivers an exceptional user experience across devices.
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Fun fact: We even transformed a screenshot of the configurator into an Egon Schiele-style painting to showcase our creative flair!
            </p>

            <motion.a
              href="https://configurator.struxure.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 py-3 px-6 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore the Configurator
            </motion.a>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              className="w-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/struxure-configurator-screenshot.png"
                alt="Struxure Configurator Screenshot"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => (e.target.src = "https://via.placeholder.com/600x300?text=Screenshot+Not+Found")}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Screenshot of the custom configurator at configurator.struxure.com
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-4">What Struxure Says About Us</h4>
              <p className="text-gray-600 dark:text-gray-400">
                [Google My Business reviews coming soon! We’re working with Struxure to gather their feedback on the configurator project.]
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ProcessSection({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(null);

  const processSteps = [
    {
      title: "Step 1: Contact Us",
      content:
        "Reach out to Elite Search Commander through our website or contact our team directly to discuss your digital marketing needs.",
    },
    {
      title: "Step 2: Consultation",
      content:
        "Schedule a consultation with our experts to explore the marketing solutions that best fit your business goals and objectives.",
    },
    {
      title: "Step 3: Strategy Development",
      content:
        "Our team will work closely with you to develop a tailored digital marketing strategy that incorporates SEO, web development, web design, paid advertisings, email marketing, and automation.",
    },
    {
      title: "Step 4: Implementation",
      content:
        "Once the strategy is finalized, our skilled professionals will begin implementing the various marketing tactics to enhance your online presence and reach your target audience effectively.",
    },
    {
      title: "Step 5: Continuous Support",
      content:
        "We provide ongoing support and monitoring to ensure your digital marketing efforts are delivering the desired results. Our team is always available to address any questions or concerns you may have.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Our Process
        </h2>
        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`border-b border-gray-200 dark:border-gray-700 ${
                openIndex === index ? "bg-indigo-100 dark:bg-indigo-900" : "bg-white dark:bg-gray-800"
              } rounded-lg mb-4 shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors duration-300`}
              initial={false}
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center p-4 cursor-pointer">
                <h3
                  className={`text-xl font-semibold ${
                    openIndex === index
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-900 dark:text-gray-100"
                  } hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300`}
                >
                  {step.title}
                </h3>
                <motion.span
                  className={`text-2xl ${
                    openIndex === index
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400"
                  } hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300`}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="p-4 text-left text-gray-600 dark:text-gray-300"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{step.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to elevate your brand? Fill out the form below, and we’ll get back to you soon!
        </p>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-left text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-left text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Your Email"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Elite Search Commander © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}

export default App;