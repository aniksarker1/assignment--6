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
    const [activeTab, setActiveTab] = useState('products'); 
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
                                <img src="./assets/Play.png" className="w-4" alt="Play" /> Watch Demo
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

                
                {activeTab === 'products' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {productsData.map((item) => {
                            const isAdded = cart.some(cartItem => cartItem.id === item.id);
                            return (
                                <div key={item.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-left hover:shadow-lg transition-all duration-300 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-gray-50 p-3 rounded-xl">
                                            <img src={item.icon} className="w-10 h-10 object-contain" alt="icon" />
                                        </div>
                                        <span className={`px-3 py-1 text-[11px] font-bold uppercase rounded-full ${item.tagType}`}>{item.tag}</span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{item.description}</p>
                                    
                                    <div className="mb-6 flex items-end gap-1">
                                        <span className="text-3xl font-black text-gray-900">${item.price}</span>
                                        <span className="text-gray-400 text-sm font-semibold mb-1">{item.period}</span>
                                    </div>
                                    
                                    <ul className="mb-8">
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-[13px] text-gray-500 mb-2 font-medium">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <button 
                                        onClick={() => addToCart(item)} 
                                        className={`mt-auto w-full py-3 font-bold rounded-xl transition-colors ${isAdded ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-[#7E3AF2] text-white hover:bg-[#6a2dc4]'}`}
                                    >
                                        {isAdded ? 'Added to Cart' : 'Buy Now'}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm text-left border border-gray-100">
                        <h3 className="text-2xl font-bold mb-2">Your Cart</h3>
                        <p className="text-gray-500 text-sm mb-6 pb-4 border-b">Review your selected premium digital products.</p>
                        
                        {cart.length === 0 ? (
                            <div className="text-center py-10 text-gray-400 font-medium">Your cart is empty.</div>
                        ) : (
                            <>
                                <div className="space-y-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                                    <img src={item.icon} className="w-12 h-12 object-contain" alt={item.name} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                                                    <p className="text-sm font-bold text-[#7E3AF2]">${item.price}</p>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => removeFromCart(item.id)} 
                                                className="text-red-500 font-semibold hover:bg-red-50 px-4 py-2 rounded-xl transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-gray-500 font-medium text-lg">Total Amount:</span>
                                        <span className="font-black text-3xl text-gray-900">${totalPrice}</span>
                                    </div>
                                    <button 
                                        onClick={proceedToCheckout} 
                                        className="btn bg-[#7E3AF2] text-white w-full py-4 h-auto text-lg border-none hover:bg-[#6a2dc4] rounded-xl font-bold"
                                    >
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </main>

           
            <section className="py-20 bg-white text-center px-4 md:px-20">
                <h2 className="text-4xl font-bold mb-12">Get Started In 3 Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="p-10 bg-gray-50 rounded-3xl relative border border-gray-100 shadow-sm">
                        <span className="absolute top-6 right-6 bg-[#7E3AF2] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">01</span>
                        <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <img src="./assets/user.png" className="w-8" alt="User" />
                        </div>
                        <h4 className="font-bold text-xl mb-2">Create Account</h4>
                        <p className="text-sm text-gray-500">Sign up for free in seconds.</p>
                    </div>
                    <div className="p-10 bg-gray-50 rounded-3xl relative border border-gray-100 shadow-sm">
                        <span className="absolute top-6 right-6 bg-[#7E3AF2] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">02</span>
                        <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <img src="./assets/package.png" className="w-8" alt="Package" />
                        </div>
                        <h4 className="font-bold text-xl mb-2">Choose Products</h4>
                        <p className="text-sm text-gray-500">Select tools that fit your needs.</p>
                    </div>
                    <div className="p-10 bg-gray-50 rounded-3xl relative border border-gray-100 shadow-sm">
                        <span className="absolute top-6 right-6 bg-[#7E3AF2] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">03</span>
                        <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <img src="./assets/rocket.png" className="w-8" alt="Rocket" />
                        </div>
                        <h4 className="font-bold text-xl mb-2">Start Creating</h4>
                        <p className="text-sm text-gray-500">Download and start using tools.</p>
                    </div>
                </div>
            </section>

            
            <section id="pricing-section" className="py-20 bg-gray-50 text-center px-4 md:px-20">
                <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-gray-500 mb-12">Choose the perfect plan for your needs.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-left">
                        <h3 className="text-xl font-bold mb-2">Starter</h3>
                        <p className="text-gray-500 text-sm mb-6">Perfect for individuals</p>
                        <div className="mb-6"><span className="text-4xl font-black">$15</span><span className="text-gray-500">/mo</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold">✔</span> 1 User Account</li>
                            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold">✔</span> 10 Downloads/month</li>
                            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold">✔</span> Basic Support</li>
                        </ul>
                        <button className="btn btn-outline w-full rounded-xl border-gray-300">Choose Starter</button>
                    </div>
                    
                    <div className="bg-[#7E3AF2] text-white p-10 rounded-3xl shadow-xl transform md:-translate-y-4 text-left relative">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
                        <h3 className="text-xl font-bold mb-2">Professional</h3>
                        <p className="text-purple-200 text-sm mb-6">Perfect for small teams</p>
                        <div className="mb-6"><span className="text-5xl font-black">$49</span><span className="text-purple-200">/mo</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-2 text-sm"><span className="text-yellow-400 font-bold">✔</span> 5 User Accounts</li>
                            <li className="flex items-center gap-2 text-sm"><span className="text-yellow-400 font-bold">✔</span> Unlimited Downloads</li>
                            <li className="flex items-center gap-2 text-sm"><span className="text-yellow-400 font-bold">✔</span> Priority Support</li>
                        </ul>
                        <button className="btn bg-white text-[#7E3AF2] w-full rounded-xl border-none hover:bg-gray-100">Choose Pro</button>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-left">
                        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                        <p className="text-gray-500 text-sm mb-6">For large organizations</p>
                        <div className="mb-6"><span className="text-4xl font-black">$99</span><span className="text-gray-500">/mo</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold">✔</span> Unlimited Users</li>
                            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold">✔</span> Custom API Access</li>
                            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500 font-bold">✔</span> 24/7 Dedicated Support</li>
                        </ul>
                        <button className="btn btn-outline w-full rounded-xl border-gray-300">Contact Sales</button>
                    </div>
                </div>
            </section>

            
            <footer className="bg-[#111827] text-white py-16 px-4 md:px-20 text-center">
                <h2 className="text-3xl font-bold text-[#7E3AF2] mb-2">DigiTools</h2>
                <p className="opacity-50 text-sm mb-6">Work Smarter, Create Faster.</p>
                <div className="flex justify-center gap-4 mb-8">
                    <a href="#" className="opacity-50 hover:opacity-100">Facebook</a>
                    <a href="#" className="opacity-50 hover:opacity-100">Twitter</a>
                    <a href="#" className="opacity-50 hover:opacity-100">LinkedIn</a>
                </div>
                <p className="opacity-30 text-[12px]">© 2026 DigiTools. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;