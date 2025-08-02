import React, { useState, useEffect } from 'react';
import {
  Code,
  Smartphone,
  Globe,
  Settings,
  Cloud,
  Search,
  Users,
  MapPin,
  Mail,
  MessageCircle,
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  Palette,
  BookOpen,
  BarChart3,
  ChevronUp,
  Menu,
  X,
  Target,
  Eye,
  Award,
  Lightbulb,
  Rocket,
  Heart
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navScrolled, setNavScrolled] = useState(false);

  // Cost Calculator State
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);
  const [projectComplexity, setProjectComplexity] = useState('medium');
  const [timeline, setTimeline] = useState('standard');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setNavScrolled(window.scrollY > 10);
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'packages', label: 'Packages' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Reach Us' }
  ];

  const websiteTiers = [
    {
      name: "Basic",
      price: "5,000 – 10,000",
      description: "Perfect for small businesses and startups",
      features: [
        "3-5 responsive pages",
        "Mobile-friendly design",
        "Contact form integration",
        "Basic SEO setup",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "10,000 – 15,000",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Basic",
        "Blog functionality",
        "CMS integration",
        "Advanced SEO setup",
        "Social media integration",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "15,000 – 30,000+",
      description: "Complete solution for enterprises",
      features: [
        "Everything in Standard",
        "E-commerce functionality",
        "API integrations",
        "Analytics dashboard",
        "CMS training included",
        "6 months support"
      ],
      popular: false
    }
  ];



  const addOnServices = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Basic Branding / Logo Design",
      price: "300 – 1,000"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "CMS Training",
      price: "300 – 800/session"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Domain & Email Setup",
      price: "400 – 800"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Setup",
      price: "500 – 1,000"
    }
  ];

  // Cost Calculator Data
  const calculatorServices = [
    {
      id: 'website-basic',
      name: 'Website Development - Basic',
      basePrice: 5000,
      description: '3-5 responsive pages, mobile-friendly design, contact form'
    },
    {
      id: 'website-standard',
      name: 'Website Development - Standard',
      basePrice: 10000,
      description: 'Everything in Basic + blog, CMS, advanced SEO'
    },
    {
      id: 'website-premium',
      name: 'Website Development - Premium',
      basePrice: 15000,
      description: 'Everything in Standard + e-commerce, API integrations'
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      basePrice: 24000,
      description: 'Native iOS & Android applications'
    },
    {
      id: 'web-app',
      name: 'Web Application',
      basePrice: 30000,
      description: 'Complex web applications and platforms'
    },
    {
      id: 'cicd',
      name: 'CI/CD & DevOps',
      basePrice: 3250,
      description: 'Automated deployment pipelines'
    },
    {
      id: 'hosting',
      name: 'Hosting & DevOps',
      basePrice: 2000,
      description: 'Cloud hosting with 24/7 monitoring'
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      basePrice: 1250,
      description: 'Comprehensive SEO strategies'
    }
  ];

  const additionalFeatures = [
    { id: 'ecommerce', name: 'E-commerce Integration', price: 5000 },
    { id: 'cms', name: 'CMS Integration', price: 2000 },
    { id: 'api', name: 'API Development', price: 4000 },
    { id: 'analytics', name: 'Analytics Dashboard', price: 1500 },
    { id: 'multi-language', name: 'Multi-language Support', price: 2500 },
    { id: 'payment-gateway', name: 'Payment Gateway', price: 3000 },
    { id: 'chat-support', name: 'Live Chat Support', price: 1000 },
    { id: 'backup', name: 'Automated Backups', price: 800 }
  ];

  const complexityMultipliers = {
    simple: 0.8,
    medium: 1.0,
    complex: 1.3,
    enterprise: 1.6
  };

  const timelineMultipliers = {
    urgent: 1.4,
    standard: 1.0,
    relaxed: 0.9
  };

  // Cost Calculator Functions
  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleFeature = (featureId: string) => {
    setCustomFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const calculateTotal = () => {
    let baseTotal = 0;
    
    // Calculate base services
    selectedServices.forEach(serviceId => {
      const service = calculatorServices.find(s => s.id === serviceId);
      if (service) {
        baseTotal += service.basePrice;
      }
    });
    
    // Add additional features
    customFeatures.forEach(featureId => {
      const feature = additionalFeatures.find(f => f.id === featureId);
      if (feature) {
        baseTotal += feature.price;
      }
    });
    
    // Apply complexity multiplier
    const complexityMultiplier = complexityMultipliers[projectComplexity as keyof typeof complexityMultipliers];
    baseTotal *= complexityMultiplier;
    
    // Apply timeline multiplier
    const timelineMultiplier = timelineMultipliers[timeline as keyof typeof timelineMultipliers];
    baseTotal *= timelineMultiplier;
    
    return Math.round(baseTotal);
  };

  const getSelectedServicesDetails = () => {
    return selectedServices.map(serviceId => {
      const service = calculatorServices.find(s => s.id === serviceId);
      return service;
    }).filter(Boolean);
  };

  const teamValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to deliver solutions that drive your business forward."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "Our commitment to quality ensures your projects are delivered on time and exceed expectations."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming your trusted technology partner."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 w-[95vw] max-w-5xl
    ${navScrolled ? 'bg-white/70 shadow-xl backdrop-blur-lg rounded-2xl py-3 px-4 scale-95 border border-gray-200' : 'bg-white/50 shadow-md backdrop-blur-md rounded-3xl py-5 px-6 border border-gray-100'}
  `}
        style={{
          transitionProperty: 'background, box-shadow, border-radius, padding, transform',
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/images/softcode-logo.png" 
              alt="Softcode Logo" 
              className={`w-16 h-14 sm:w-20 sm:h-16 lg:w-24 lg:h-18 object-contain transition-all duration-300 ${navScrolled ? 'scale-90' : ''}`}
              onError={(e) => {
                // Fallback to icon if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <Code className={`w-16 h-14 sm:w-20 sm:h-16 lg:w-24 lg:h-18 text-blue-600 ${navScrolled ? 'scale-90' : ''} transition-all duration-300 hidden`} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-violet-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2 font-medium text-sm"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-violet-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm w-fit"
              >
                Request Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-transparent pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 lg:pb-24">
        {/* Animated Geometric Background */}
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 animate-pulse"></div>
          
          {/* Geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-200"/>
                </pattern>
                <pattern id="circles" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-300"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)"/>
              <rect width="100" height="100" fill="url(#circles)"/>
            </svg>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-lg rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-lg rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-violet-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 sm:mb-8 animate-fade-in-up">
                <Zap className="w-4 h-4 animate-pulse" />
                <span>Trusted by 100+ businesses across Ghana</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Professional Software Solutions
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-10 text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Transform your business with our comprehensive software development services.
                From websites to mobile apps, we deliver excellence at transparent prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group bg-gradient-to-r from-blue-500 to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 w-full sm:w-auto justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <div className="flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
                  <Shield className="w-5 h-5 text-green-500 animate-pulse" />
                  <span className="font-medium">Your secure software solution</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Interactive elements */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-96">
                {/* Interactive code blocks */}
                <div className="absolute top-0 right-0 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 animate-float" style={{animationDelay: '0.8s'}}>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-blue-600">const project = {`{`}</div>
                    <div className="text-gray-700 ml-4">name: <span className="text-green-600">"Your Vision"</span>,</div>
                    <div className="text-gray-700 ml-4">status: <span className="text-orange-600">"In Progress"</span></div>
                    <div className="text-blue-600">{`}`}</div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 bg-gradient-to-br from-blue-500 to-violet-600 text-white rounded-2xl p-6 shadow-xl animate-float" style={{animationDelay: '1.2s'}}>
                  <div className="flex items-center space-x-3 mb-3">
                    <Rocket className="w-6 h-6" />
                    <span className="font-semibold">Launch Ready</span>
                  </div>
                  <p className="text-sm opacity-90">Your digital transformation starts here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll prompt */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-gray-500">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div> */}

        <style>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs. 
            </p>
          </div>

          {/* Modern Services Grid */}
          <div className="space-y-8 sm:space-y-12">
            {/* Website Development - Horizontal Split */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-500 border border-blue-100 hover:border-blue-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Website Development
                      </h4>
                      <p className="text-blue-600 font-semibold text-lg">GHS 3,000 – 15,000</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Custom websites built with modern technologies, responsive design, and optimized for performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Responsive Design</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">SEO Optimized</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">CMS Integration</span>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 p-8 sm:p-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-white text-center">
                    <div className="text-6xl sm:text-8xl font-bold opacity-20 mb-4">01</div>
                    <div className="space-y-2">
                      <div className="w-16 h-1 bg-white/30 mx-auto"></div>
                      <p className="text-sm opacity-80">Professional Websites</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Development - Horizontal Split */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 transition-all duration-500 border border-violet-100 hover:border-violet-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 p-8 sm:p-12 flex items-center justify-center order-2 lg:order-1">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-white text-center">
                    <div className="text-6xl sm:text-8xl font-bold opacity-20 mb-4">02</div>
                    <div className="space-y-2">
                      <div className="w-16 h-1 bg-white/30 mx-auto"></div>
                      <p className="text-sm opacity-80">Native Apps</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center order-1 lg:order-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-4 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
                        Mobile App Development
                      </h4>
                      <p className="text-violet-600 font-semibold text-lg">GHS 8,000 – 40,000</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Native iOS & Android applications with seamless user experience and robust functionality.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">iOS & Android</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Native Performance</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">App Store Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Applications - Horizontal Split */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition-all duration-500 border border-indigo-100 hover:border-indigo-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                        Web Applications
                      </h4>
                      <p className="text-indigo-600 font-semibold text-lg">GHS 10,000 – 50,000+</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Complex web applications and platforms built with scalable architecture and modern frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Scalable Architecture</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Modern Frameworks</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">API Integration</span>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-600 p-8 sm:p-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-white text-center">
                    <div className="text-6xl sm:text-8xl font-bold opacity-20 mb-4">03</div>
                    <div className="space-y-2">
                      <div className="w-16 h-1 bg-white/30 mx-auto"></div>
                      <p className="text-sm opacity-80">Enterprise Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* CI/CD & DevOps */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-500 border border-green-100 hover:border-green-200 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      CI/CD & DevOps
                    </h4>
                    <p className="text-green-600 font-semibold">GHS 1,500 – 5,000</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Automated deployment pipelines and infrastructure management for seamless development workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Automation</span>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Deployment</span>
                </div>
              </div>

              {/* Hosting & DevOps */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 transition-all duration-500 border border-sky-100 hover:border-sky-200 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-3 rounded-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                      Hosting & DevOps
                    </h4>
                    <p className="text-sky-600 font-semibold">GHS 1,000 – 3,000 setup</p>
                    <p className="text-blue-600 text-sm">300 – 1,000/month</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Reliable cloud hosting solutions with 24/7 monitoring and maintenance support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">Cloud Hosting</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">24/7 Support</span>
                </div>
              </div>

              {/* SEO Optimization */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 transition-all duration-500 border border-orange-100 hover:border-orange-200 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      SEO Optimization
                    </h4>
                    <p className="text-orange-600 font-semibold">GHS 500 – 2,000/month</p>
                    <p className="text-amber-600 text-sm">1,000 – 5,000 one-time</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive SEO strategies to improve your online visibility and search rankings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Search Rankings</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">Visibility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Strategy Service */}
          <div className="mt-12 sm:mt-16 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 hover:from-yellow-100 hover:via-orange-100 hover:to-red-100 transition-all duration-500 border border-yellow-100 hover:border-yellow-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 sm:p-12">
              <div className="lg:col-span-2 flex items-center">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 mb-2">
                      Tech Strategy Consulting
                    </h4>
                    <p className="text-yellow-600 font-semibold text-xl mb-4">GHS 250 – 600/hour</p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Strategic technology consulting to help you make informed decisions about your digital transformation journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap group-hover:from-orange-500 group-hover:to-red-600"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Development Packages - Modern Design */}
      <section id="packages" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-violet-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Website Development Packages</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your business needs. Transparent pricing with no hidden costs.
            </p>
          </div>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-violet-100/30 rounded-3xl transform -rotate-1"></div>

            <div className="relative bg-white rounded-3xl shadow-xl overflow-visible z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 pt-8">
                {websiteTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`relative p-6 sm:p-8 lg:p-10 ${tier.popular
                      ? 'bg-gradient-to-br from-blue-50 to-violet-50 lg:scale-105 lg:z-10 lg:shadow-2xl lg:rounded-2xl lg:m-2'
                      : 'hover:bg-gray-50'
                      } transition-all duration-300`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-gradient-to-r from-blue-500 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                      <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">GHS {tier.price}</div>
                      <p className="text-gray-600">{tier.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => scrollToSection('contact')}
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${tier.popular
                        ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      Choose {tier.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add-on Services */}
          <div className="mt-12 sm:mt-16">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Optional Add-ons</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {addOnServices.map((addon, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
                  <div className="bg-gradient-to-br from-blue-100 to-violet-100 p-3 rounded-xl w-fit mx-auto mb-4">
                    <div className="text-blue-600">
                      {addon.icon}
                    </div>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">{addon.title}</h5>
                  <p className="text-blue-600 font-bold">GHS {addon.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Terms */}
          {/* <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Payment Terms</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-gray-700 font-medium">Upfront Payment</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl">
                <div className="text-3xl sm:text-4xl font-bold text-violet-600 mb-2">40%</div>
                <p className="text-gray-700 font-medium">On Milestone</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">20%</div>
                <p className="text-gray-700 font-medium">On Completion</p>
              </div>
            </div>
            <p className="text-gray-600 text-center">
              For retainer services, payment is due monthly in advance. All contracts include detailed invoicing using professional tools.
            </p>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Softcode Labs</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to empower businesses across Ghana with cutting-edge technology solutions,
                Softcode Labs has been at the forefront of digital transformation for over 5 years.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in creating custom software solutions that drive growth, improve efficiency,
                and help our clients stay competitive in today's digital landscape. Our team of experienced
                developers and strategists work closely with each client to understand their unique needs
                and deliver solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <p className="text-gray-600 font-medium">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-violet-600 mb-2">5+</div>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/bg-image-1.jpg"
                  alt="Our Team at Work"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-500 p-3 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To empower businesses across Ghana and beyond with innovative, reliable, and scalable
                software solutions that drive digital transformation and sustainable growth. We are
                committed to delivering excellence through cutting-edge technology and exceptional service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-violet-500 p-3 rounded-xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To become the leading software development company in Ghana, recognized for our
                innovation, quality, and commitment to client success. We envision a future where
                every business, regardless of size, has access to world-class technology solutions.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h4>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-100 to-violet-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h5 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h5>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Reach Us</h3>
            <p className="text-lg sm:text-xl text-gray-600">
              Ready to start your project? Get in touch with us for a personalized quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="website-basic">Website Development - Basic</option>
                    <option value="website-standard">Website Development - Standard</option>
                    <option value="website-premium">Website Development - Premium</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="webapp">Web Application Development</option>
                    <option value="cicd">CI/CD Setup</option>
                    <option value="hosting">Hosting & DevOps</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="strategy">Tech Strategy</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Send Quote Request
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h4>
                <p className="text-gray-600 mb-8">
                  We're here to help bring your ideas to life. Contact us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">WhatsApp</h5>
                    <p className="text-gray-600">+233 544023254</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Email</h5>
                    <p className="text-gray-600">cliffordmanu7@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="bg-violet-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Location</h5>
                    <p className="text-gray-600">Accra, Ghana</p>
                    <p className="text-sm text-gray-500">Serving clients across Ghana and beyond</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-4">Why Choose Softcode Labs?</h5>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>5+ years of experience in software development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>100+ successful projects delivered</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Milestone-based payment structure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Transparent pricing in GHS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section id="calculator" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Project Cost Calculator</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Get an instant estimate for your project. Select your services and features to see the total cost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services Selection */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Select Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {calculatorServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`group relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-1">{service.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                          <p className="text-lg font-bold text-blue-600">GHS {service.basePrice.toLocaleString()}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedServices.includes(service.id)
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedServices.includes(service.id) && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Additional Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`group relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        customFeatures.includes(feature.id)
                          ? 'border-green-500 bg-green-50 shadow-md'
                          : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-1">{feature.name}</h5>
                          <p className="text-lg font-bold text-green-600">+GHS {feature.price.toLocaleString()}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          customFeatures.includes(feature.id)
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        }`}>
                          {customFeatures.includes(feature.id) && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Settings */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Project Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Complexity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Project Complexity</label>
                    <div className="space-y-3">
                      {[
                        { value: 'simple', label: 'Simple', desc: 'Basic functionality', multiplier: '0.8x' },
                        { value: 'medium', label: 'Medium', desc: 'Standard features', multiplier: '1.0x' },
                        { value: 'complex', label: 'Complex', desc: 'Advanced features', multiplier: '1.3x' },
                        { value: 'enterprise', label: 'Enterprise', desc: 'Custom solutions', multiplier: '1.6x' }
                      ].map((option) => (
                        <div
                          key={option.value}
                          onClick={() => setProjectComplexity(option.value)}
                          className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            projectComplexity === option.value
                              ? 'border-violet-500 bg-violet-50'
                              : 'border-gray-200 hover:border-violet-300'
                          }`}
                        >
                          <div>
                            <div className="font-medium text-gray-900">{option.label}</div>
                            <div className="text-sm text-gray-600">{option.desc}</div>
                          </div>
                          <div className="text-sm font-semibold text-violet-600">{option.multiplier}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Timeline</label>
                    <div className="space-y-3">
                      {[
                        { value: 'relaxed', label: 'Relaxed', desc: '3-6 months', multiplier: '0.9x' },
                        { value: 'standard', label: 'Standard', desc: '2-3 months', multiplier: '1.0x' },
                        { value: 'urgent', label: 'Urgent', desc: '1-2 months', multiplier: '1.4x' }
                      ].map((option) => (
                        <div
                          key={option.value}
                          onClick={() => setTimeline(option.value)}
                          className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            timeline === option.value
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          <div>
                            <div className="font-medium text-gray-900">{option.label}</div>
                            <div className="text-sm text-gray-600">{option.desc}</div>
                          </div>
                          <div className="text-sm font-semibold text-orange-600">{option.multiplier}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 sticky top-24">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Cost Summary</h4>
                
                {/* Selected Services */}
                {getSelectedServicesDetails().length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-700 mb-3">Selected Services:</h5>
                    <div className="space-y-2">
                      {getSelectedServicesDetails().map((service) => (
                        <div key={service?.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">{service?.name}</span>
                          <span className="font-medium">GHS {service?.basePrice.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Selected Features */}
                {customFeatures.length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-700 mb-3">Additional Features:</h5>
                    <div className="space-y-2">
                      {customFeatures.map((featureId) => {
                        const feature = additionalFeatures.find(f => f.id === featureId);
                        return (
                          <div key={featureId} className="flex justify-between text-sm">
                            <span className="text-gray-600">{feature?.name}</span>
                            <span className="font-medium">+GHS {feature?.price.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Multipliers */}
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Complexity ({projectComplexity})</span>
                    <span className="font-medium">{complexityMultipliers[projectComplexity as keyof typeof complexityMultipliers]}x</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Timeline ({timeline})</span>
                    <span className="font-medium">{timelineMultipliers[timeline as keyof typeof timelineMultipliers]}x</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold text-gray-900">Total Estimate</span>
                    <span className="text-3xl font-bold text-blue-600">GHS {calculateTotal().toLocaleString()}</span>
                  </div>
                  
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-blue-500 to-violet-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Get Detailed Quote
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    * This is an estimate. Final pricing may vary based on specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                                      <div className="flex items-center mb-4">
              <img 
                src="/images/softcode-logo.png" 
                alt="Softcode Logo" 
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Code className="w-20 h-20 lg:w-24 lg:h-24 text-blue-600 hidden" />
            </div>
              <p className="text-gray-400">
                Empowering businesses across Ghana with cutting-edge software solutions.
                From concept to deployment, we're your trusted technology partner.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Website Development</li>
                <li>Mobile App Development</li>
                <li>Web Applications</li>
                <li>CI/CD Setup</li>
                <li>Hosting & DevOps</li>
                <li>SEO Optimization</li>
                <li>Tech Strategy Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: +233 544023250</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>cliffordmanu7@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Softcode Labs. All rights reserved. | Proudly serving Ghana with quality software solutions.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-violet-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;