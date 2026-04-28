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
import backgroundImage from "./assets/background.png";

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Why West Africa", href: "#why-west-africa" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Become a Partner", href: "#partner" },
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

// Trust & Certifications Section
const TrustBadges = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Corporate Clients" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="py-16 bg-white/80 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Partner Inquiry Form
const BulkOrderForm = () => {
  const categories = [
    "Paint & Coatings",
    "Steel Plates & Sheets",
    "Steel & Rebar",
    "Steel Pipes & Tubes",
    "Lumber & Wood",
    "Hardware & Tools",
    "Other",
  ];

  return (
    <section id="partner" className="py-20 bg-white/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-600">
            Tell us about your products and we'll get back to you within 24
            hours.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Spain, China, Turkey"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Product Category *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white">
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Tell us about your products *
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Product types, specifications, typical MOQ, current export markets..."
                required
              ></textarea>
            </div>
            <div className="flex gap-4">
              <a
                href="https://wa.me/22237619392?text=I%20am%20interested%20in%20becoming%20an%20MMS%20supply%20partner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition text-center"
              >
                Send via WhatsApp
              </a>
              <a
                href="mailto:abdousidiya@modernmaterialsupply.com?subject=Partnership%20Inquiry"
                className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
              >
                Send via Email
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Client Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      company: "Mauritania Construction Group",
      person: "Mohamed Al-Rashid",
      role: "Project Manager",
      text: "MMS has been our reliable partner for over 5 years. Their quality materials and timely delivery have been crucial to our project success.",
    },
    {
      company: "Desert Infrastructure Ltd",
      person: "Fatima Hassan",
      role: "CEO",
      text: "Excellent service and competitive prices. They handle our bulk orders professionally and always meet our specifications.",
    },
    {
      company: "Nouakchott Developers",
      person: "Ahmed Ould Cheikh",
      role: "Procurement Manager",
      text: "The best supplier in Mauritania. Their technical consultation service helped us save costs on our last three major projects.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by major contractors and developers across Mauritania
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.person}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm font-semibold text-blue-600">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Payment & Terms
const PaymentTerms = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Flexible Payment Options for Bulk Orders
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💳</div>
            <h4 className="font-bold mb-2">Credit Terms</h4>
            <p className="text-sm text-gray-600">
              30-60 day payment terms for qualified clients
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🏦</div>
            <h4 className="font-bold mb-2">Bank Transfer</h4>
            <p className="text-sm text-gray-600">
              Direct bank transfers accepted
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📋</div>
            <h4 className="font-bold mb-2">Letter of Credit</h4>
            <p className="text-sm text-gray-600">
              L/C accepted for international orders
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold mb-2">Cash Discount</h4>
            <p className="text-sm text-gray-600">
              Special discounts for upfront payment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-white/80 from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-blue-100">
            West Africa Distribution Partner
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reach West Africa Through One Trusted Partner
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            MMS handles the entire distribution chain — import, warehousing, and
            last-mile delivery across Mauritania. You supply. We do the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#partner"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Become a Partner
            </a>
            <a
              href="#how-it-works"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Value proposition */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Partner With MMS?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Entering West Africa means navigating complex import regulations,
            fragmented logistics, and a market that runs on relationships. MMS
            has spent over 15 years building exactly that infrastructure. We are
            the operational arm international suppliers need on the ground — so
            you can sell into the region without the complexity of setting it up
            yourself.
          </p>
        </div>
      </div>
    </section>
  );
};

// Why West Africa Section
const WhyWestAfrica = () => {
  const reasons = [
    {
      icon: "🏗️",
      title: "Booming Construction Sector",
      description:
        "Mauritania and the wider Sahel region are undergoing rapid urbanization. Government-led infrastructure programs are driving sustained demand for steel, pipes, and finishing materials across residential and commercial projects.",
    },
    {
      icon: "📈",
      title: "Underserved Import Market",
      description:
        "Local production covers only a fraction of construction material demand. The majority is imported — meaning international suppliers face limited competition and strong pricing power for quality products.",
    },
    {
      icon: "🌍",
      title: "Gateway to the Region",
      description:
        "Nouakchott is a strategic entry point to Mauritania, Senegal, Mali, and beyond. A partnership with MMS gives suppliers access to a distribution network that extends across West African borders.",
    },
  ];

  return (
    <section id="why-west-africa" className="py-20 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why West Africa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A high-growth market that rewards suppliers who move early and move
            right
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "You Supply",
      description:
        "Ship your products from your factory or port. MMS coordinates freight forwarding via our logistics partner HudHud Shipping.",
    },
    {
      number: "02",
      title: "MMS Imports",
      description:
        "We handle all customs clearance, import documentation, and port procedures at Nouakchott — no local entity required on your side.",
    },
    {
      number: "03",
      title: "MMS Distributes",
      description:
        "Stock is received across our 4 warehouse locations and distributed to contractors, developers, and retailers throughout Mauritania.",
    },
    {
      number: "04",
      title: "You Get Paid",
      description:
        "Settled via bank transfer or Letter of Credit in USD or EUR. Clear payment terms agreed upfront with no ambiguity.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How the Partnership Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A straightforward process designed to remove every obstacle between
            your factory and West African buyers
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition h-full">
                <div className="text-4xl font-bold text-blue-100 mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-blue-300 text-2xl">
                  ›
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Distribution Reach Section
const DistributionReach = () => {
  const locations = [
    {
      name: "Nouakchott HQ",
      type: "Headquarters & Main Warehouse",
      detail: "Central operations, primary stock, client management",
      icon: "🏢",
    },
    {
      name: "Nouakchott North",
      type: "Distribution Warehouse",
      detail: "Residential project supply, northern city coverage",
      icon: "🏭",
    },
    {
      name: "Nouakchott South",
      type: "Distribution Warehouse",
      detail: "Industrial supply, bulk materials handling",
      icon: "🏭",
    },
    {
      name: "Nouakchott East",
      type: "Distribution Warehouse",
      detail: "Commercial and infrastructure project supply",
      icon: "🏭",
    },
  ];

  return (
    <section className="py-20 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Distribution Reach
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategically located in Nouakchott — the commercial hub of
            Mauritania
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="text-3xl mb-3">{loc.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {loc.name}
              </h3>
              <p className="text-blue-600 text-sm font-semibold mb-2">
                {loc.type}
              </p>
              <p className="text-gray-600 text-sm">{loc.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto text-center border border-blue-100">
          <p className="text-gray-700">
            Our Nouakchott warehouse serves buyers across Mauritania and
            attracts clients from{" "}
            <span className="font-semibold text-blue-600">
              Mali, Senegal, and beyond.
            </span>
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
    <section id="products" className="py-20 bg-white/80">
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
    <section id="contact" className="py-20 bg-white/80">
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
                    +222 20 85 01 75
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="text-blue-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/22237619392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    +222 37 61 93 92
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
                        abdousidiya@modernmaterialsupply.com
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
                  +222 46 61 93 92
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
                  +222 20 85 01 75
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
                  +222 37 61 93 92
                </a>
                <a
                  href="https://wa.me/22237619392"
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
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navigation />
      <Hero />
      <TrustBadges />
      <WhyWestAfrica />
      <DistributionReach />
      <Products />
      <BulkOrderForm />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
