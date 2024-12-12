import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

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

  useEffect(() => {
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
        {/* Transparent Header Section */}
        <header className="flex items-center justify-between px-6 py-4 absolute top-0 left-0 w-full z-50 bg-transparent">
          <div className="flex items-center">
            <img
              src="/images/company-logo.png"
              alt="Company Logo"
              className="h-20 w-auto" // Adjusted size for larger logo
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
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-20 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
          Your Digital Marketing Experts
        </h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Transform your brand with proven strategies and cutting-edge tools.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="inline-block py-4 px-8 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </motion.a>
      </div>
    </motion.section>
  );
}

function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
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

function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-16 bg-gray-900 text-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-lg mb-12 max-w-lg mx-auto">
          Reach out to us and let's start a conversation about your goals.
        </p>
        <Form />
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Elite Search Commander. All rights reserved.</p>
    </footer>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const name = data.get("name");
    const email = data.get("email");

    alert(`Thank you, ${name}! We’ll get back to you soon.`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-xl mx-auto flex flex-col gap-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 shadow-lg transition"
      >
        Submit
      </button>
    </form>
  );
}

export default App;
