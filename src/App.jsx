import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronRight,
} from "lucide-react";
import mmsLogo from "./assets/mms-logo.png";

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={mmsLogo} alt="MMS Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quality Building Materials for Mauritania
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner for construction supplies, paints, and building
            materials. Serving builders and contractors across Mauritania with
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            We are committed to providing high-quality building materials and
            supplies to support the construction industry in Mauritania. Our
            goal is to deliver reliable products, competitive prices, and
            exceptional customer service to help build a stronger future for our
            communities.
          </p>
        </div>
      </div>
    </section>
  );
};

// Products Section
const Products = () => {
  const productCategories = [
    {
      name: "Paint & Coatings",
      description:
        "Interior and exterior paints, primers, and protective coatings",
      items: [
        "Wall Paint",
        "Wood Stain",
        "Primers",
        "Varnish",
        "Anti-rust Paint",
      ],
    },
    {
      name: "Steel Plates & Sheets",
      description: "High-quality steel plates and sheets for construction",
      items: [
        "Steel Plates",
        "Steel Sheets",
        "Galvanized Steel",
        "Stainless Steel",
      ],
    },
    {
      name: "Steel & Rebar",
      description: "Reinforcement bars and structural steel products",
      items: ["Rebar (Various sizes)", "Steel Beams", "Wire Mesh", "Tie Wire"],
    },
    {
      name: "Steel Pipes & Tubes",
      description: "Durable steel pipes and tubes for various applications",
      items: [
        "Steel Pipes",
        "Steel Tubes",
        "Galvanized Pipes",
        "Pipe Fittings",
      ],
    },
    {
      name: "Lumber & Wood",
      description: "Treated and untreated lumber for construction",
      items: ["Plywood", "Timber Beams", "Softwood"],
    },
    {
      name: "Hardware & Tools",
      description: "Construction hardware and essential tools",
      items: ["Nails & Screws", "Hinges", "Locks", "Power Tools", "Hand Tools"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive selection of building materials for all your
            construction needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-blue-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section (Additional Category Page)
const Services = () => {
  const services = [
    {
      title: "Bulk Orders",
      description:
        "Special pricing and delivery for large construction projects",
      features: [
        "Volume discounts",
        "Priority delivery",
        "Flexible payment terms",
      ],
    },
    {
      title: "Delivery Service",
      description: "Fast and reliable delivery across Mauritania",
      features: [
        "Same-day delivery available",
        "Professional handling",
        "GPS tracking",
      ],
    },
    {
      title: "Technical Consultation",
      description: "Expert advice on materials and quantities",
      features: [
        "Free estimates",
        "Material recommendations",
        "Project planning support",
      ],
    },
    {
      title: "Custom Orders",
      description: "Special materials sourced for specific project needs",
      features: [
        "Import services",
        "Custom specifications",
        "Quality guarantee",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than just materials - complete solutions for your construction
            projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Us Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Modern Material Supply (MMS) is a leading supplier of building
              materials in Mauritania, serving contractors, builders, and
              construction professionals throughout the country.
            </p>

            <p>
              With years of experience in the construction supply industry, we
              understand the challenges faced by builders and contractors. Our
              commitment is to provide high-quality materials at competitive
              prices, backed by exceptional customer service.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-blue-600 mr-2 mt-1" />
                  <span>
                    <strong>Quality Products:</strong> We source materials from
                    trusted manufacturers
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-blue-600 mr-2 mt-1" />
                  <span>
                    <strong>Competitive Pricing:</strong> Best value for your
                    investment
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-blue-600 mr-2 mt-1" />
                  <span>
                    <strong>Fast Delivery:</strong> Reliable delivery across
                    Mauritania
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-blue-600 mr-2 mt-1" />
                  <span>
                    <strong>Expert Support:</strong> Knowledgeable team ready to
                    assist
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Whether you're working on a residential project, commercial
              development, or infrastructure construction, we have the materials
              and expertise to support your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch for quotes, orders, or inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-blue-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a
                    href="tel:+22246619392"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    +222 4661 9392
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="text-blue-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/22246619392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    +222 4661 9392
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-blue-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <div className="space-y-1">
                    <div>
                      <p className="text-sm text-gray-600">
                        General Inquiries:
                      </p>
                      <a
                        href="mailto:info@mms.com"
                        className="text-gray-700 hover:text-blue-600"
                      >
                        info@mms.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        Orders & Purchasing:
                      </p>
                      <a
                        href="mailto:orders@mms.com"
                        className="text-gray-700 hover:text-blue-600"
                      >
                        abdou@mms.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-blue-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-700">Nouakchott, Mauritania</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Additional Info */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Business Hours
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-700">Monday - Saturday</span>
                <span className="font-semibold text-gray-900">
                  8:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="font-semibold text-gray-900">Closed</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Quick Contact
              </h4>
              <p className="text-gray-700 mb-4">
                For urgent orders or inquiries, contact us via WhatsApp for
                fastest response.
              </p>
              <a
                href="https://wa.me/22246619392"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <MessageCircle size={20} className="mr-2" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Team Contact Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Sales Person */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                SP
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                Sales Representative
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Product Inquiries & Quotes
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+22246619392"
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600"
                >
                  <Phone size={16} className="mr-2" />
                  +222 4661 9392
                </a>
                <a
                  href="https://wa.me/22246619392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-700 hover:text-green-600"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Manager */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                MG
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Manager</h4>
              <p className="text-gray-600 text-sm mb-4">General Operations</p>
              <div className="space-y-2">
                <a
                  href="tel:+22246619392"
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600"
                >
                  <Phone size={16} className="mr-2" />
                  +222 4661 9392
                </a>
                <a
                  href="https://wa.me/22246619392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-700 hover:text-green-600"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Supply Manager */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                SM
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                Supply Manager
              </h4>
              <p className="text-gray-600 text-sm mb-4">Orders & Procurement</p>
              <div className="space-y-2">
                <a
                  href="tel:+22298765432"
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600"
                >
                  <Phone size={16} className="mr-2" />
                  +222 9876 5432
                </a>
                <a
                  href="https://wa.me/22298765432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-700 hover:text-green-600"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">MMS</h3>
          <p className="text-gray-400 mb-4">
            Quality Building Materials for Mauritania
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 MMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
