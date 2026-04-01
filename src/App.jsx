import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const productsData = [
    {
        id: 1,
        name: "AI Writing Pro",
        description: "Generate high-quality content, blogs, and marketing copy in seconds.",
        price: 29,
        period: "/Monthly",
        icon: "./assets/products/writing_2327400 1.png",
        tag: "Best Seller",
        tagType: "bg-orange-100 text-orange-600",
        features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"]
    },
     {
        id: 2,
        name: "Design Templates Pack",
        description: "2000+ premium templates for social media, presentations, and more.",
        price: 49,
        period: "/One-Time",
        icon: "./assets/products/design-tool.png",
        tag: "Popular",
        tagType: "bg-purple-100 text-purple-600",
        features: ["2000+ templates", "Monthly updates", "Commercial license"]
    }, 
    {
        id: 3,
        name: "Premium Stock Assets",
        description: "Access millions of royalty-free photos, videos, and graphics.",
        price: 19,
        period: "/Monthly",
        icon: "./assets/products/portfolio.png",
        tag: "New",
        tagType: "bg-green-100 text-green-600",
        features: ["10M+ assets", "Commercial use", "No attribution"]
    },
    {
        id: 4,
        name: "Automation Toolkit",
        description: "Automate repetitive tasks and streamline your workflow.",
        price: 79,
        period: "/Yearly",
        icon: "./assets/products/operation.png",
        tag: "Popular",
        tagType: "bg-purple-100 text-purple-600",
        features: ["50+ automations", "API access", "Custom workflows"]
    },
    {
        id: 5,
        name: "Resume Builder Pro",
        description: "Create professional resumes and cover letters that land interviews.",
        price: 15,
        period: "/One-Time",
        icon: "./assets/products/portfolio.png",
        tag: "New",
        tagType: "bg-green-100 text-green-600",
        features: ["100+ templates", "ATS optimization", "Export to PDF"]
    },
    {
        id: 6,
        name: "Social Media Content Kit",
        description: "Complete toolkit for creating engaging social media content.",
        price: 39,
        period: "/Monthly",
        icon: "./assets/products/social-media.png",
        tag: "Best Seller",
        tagType: "bg-orange-100 text-orange-600",
        features: ["5000+ assets", "Scheduler included", "Analytics dashboard"]
    }
];

function App() {
    
    const [cart, setCart] = useState([]);
    const [activeTab, setActiveTab] = useState('products'); // 'products' or 'cart'

    
    const addToCart = (product) => {
        if (cart.find(item => item.id === product.id)) {
            toast.warn("Already in cart!", { position: "bottom-right", theme: "colored" });
            return;
        }
        setCart([...cart, product]);
        toast.success(`${product.name} added to cart!`, { position: "bottom-right", theme: "colored" });
    };
 const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
        toast.error("Product removed from cart!", { position: "bottom-right", theme: "colored" });
    };

    const proceedToCheckout = () => {
        if (cart.length === 0) return;
        setCart([]);
        setActiveTab('products');
        toast.info("Checkout Successful! Cart cleared.", { position: "bottom-right", theme: "colored", style: { backgroundColor: '#7E3AF2', color: 'white' } });
    };
  
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            <ToastContainer />

            {/* Navbar */}
            <nav className="navbar bg-white shadow-sm px-4 md:px-20 sticky top-0 z-50 flex justify-between">
                <div className="flex items-center">
                    <a className="text-2xl font-extrabold text-[#7E3AF2] cursor-pointer">DigiTools</a>
                </div>
                       <div className="hidden md:flex gap-8 font-semibold text-gray-600">
                    <a href="#" className="hover:text-[#7E3AF2] transition-colors">Home</a>
                    <a href="#products-section" className="hover:text-[#7E3AF2] transition-colors">Products</a>
                    <a href="#pricing-section" className="hover:text-[#7E3AF2] transition-colors">Pricing</a>
                    <a href="#" className="hover:text-[#7E3AF2] transition-colors">Blog</a>
                </div>

                <div className="flex items-center gap-4">
                    <div className="indicator cursor-pointer mr-2" onClick={() => setActiveTab('cart')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item bg-[#7E3AF2] text-white border-none">{cart.length}</span>
                    </div>
                    <button className="btn bg-[#7E3AF2] text-white rounded-full px-6 border-none hover:bg-[#692cd1]">Get Started</button>
                </div>
            </nav>
 
            <header className="hero bg-white py-16 px-4 md:px-20">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto justify-between w-full">
                    <img src="./assets/banner.png" className="w-full lg:max-w-md object-contain" alt="Banner" />
                    <div className="text-left lg:max-w-xl">
                        <div className="badge border-[#7E3AF2] text-[#7E3AF2] bg-purple-50 mb-6 py-3 px-4 font-semibold rounded-full">● New: AI-Powered Tools Available</div>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Supercharge Your <br /> <span className="text-[#7E3AF2]">Digital Workflow</span></h1>
                        <p className="text-gray-500 text-lg mb-8">Access premium AI tools, design assets, and productivity software. Start creating faster today.</p>
                        <div className="flex flex-wrap gap-4">
                            <button className="btn bg-[#7E3AF2] text-white px-8 border-none rounded-full hover:bg-[#692cd1]" onClick={() => document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })}>Explore Products</button>
                            <button className="btn btn-outline border-gray-300 text-gray-700 flex gap-2 rounded-full hover:bg-gray-50 hover:border-gray-400">
                                <img src="./assets/Play.png" className="w-4" alt="Play" />
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </header>


            <section className="bg-[#7E3AF2] py-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-center md:gap-32 gap-10 text-white text-center">
                    <div><h2 className="text-4xl font-bold mb-1">50K+</h2><p className="text-sm opacity-90">Active Users</p></div>
                    <div className="hidden md:block w-px bg-white opacity-20"></div>
                    <div><h2 className="text-4xl font-bold mb-1">200+</h2><p className="text-sm opacity-90">Premium Tools</p></div>
                    <div className="hidden md:block w-px bg-white opacity-20"></div>
                    <div><h2 className="text-4xl font-bold mb-1">4.9</h2><p className="text-sm opacity-90">Rating</p></div>
                </div>
            </section>
 
            <main id="products-section" className="py-20 px-4 md:px-20 text-center bg-gray-50">
                <div className="max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Premium Digital Tools</h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">Choose from our curated collection of premium digital products designed to boost your productivity.</p>
                   
                    <div className="flex justify-center bg-white p-1.5 rounded-full w-fit mx-auto border border-gray-200 shadow-sm">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`px-8 py-2.5 rounded-full font-bold transition-all text-sm ${activeTab === 'products' ? 'bg-[#7E3AF2] text-white' : 'text-gray-500 hover:text-[#7E3AF2]'}`}
                        >
                            Products
                        </button>
                        <button
                            onClick={() => setActiveTab('cart')}
                            className={`px-8 py-2.5 rounded-full font-bold transition-all text-sm flex items-center gap-1 ${activeTab === 'cart' ? 'bg-[#7E3AF2] text-white' : 'text-gray-500 hover:text-[#7E3AF2]'}`}
                        >
                            Cart ({cart.length})
                        </button>
                    </div>
                </div>