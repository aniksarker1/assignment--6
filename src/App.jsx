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
    
];