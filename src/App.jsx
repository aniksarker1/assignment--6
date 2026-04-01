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