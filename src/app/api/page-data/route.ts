import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Seagate Technology Thailand Co., Ltd.",
        // location: "Remote",
        startYear: "jun 2024",
        endYear: "Oct 2025",
        bulletPoints: [
            "Intern: Extracted, transformed, and cleaned operational data from manufacturing databases using KNIME Analytics Platform, then automated pipeline workflows to reduce manual processing time and improve reporting consistency. Designed and deployed interactive Grafana dashboards to visualize real-time machine performance metrics, enabling data-driven decision-making for production teams",
            "Cooperative Education: Built a Data Logger system using Arduino Nano with pressure and RPM sensors to collect real-time machine performance data, stored as CSV files on a Micro SD Card. Analyzed the data using Python in Jupyter Notebook to identify operational trends, enabling optimized machine settings such as stable pressure control and appropriate speed regulation",
        ]
    },
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Dronejai - Web Project (Class Project)",
        // location: "Remote",
        startYear: "jun 2024",
        endYear: "Oct 2025",
        bulletPoints: [
            "Implemented full-stack authentication (Login/Register) using Next.js, NextAuth.js, and MongoDB covered session management, JWT handling, and secure password hashing with bcrypt.",
            
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Micro Project (Class Project)",
        location: "",
        startYear: "jun 2024",
        endYear: "Oct 2025",
        bulletPoints: [
            "Developed firmware on ESP32 to read and process sensor data from GY-91 for vibration measurement and DS18B20 for temperature sensing",
            
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "LINE Chatbot (Class Project)",
        location: "",
        startYear: "Jun 2023",
        endYear: "Oct 2024",
        bulletPoints: [
            "Built a LINE chatbot using Messaging API that responds to restroom location queries with images and directions for the engineering department.",
            
        ]
    },
]

const educationData = [
    {
        date: "Jun 2022 - Mar 2025",
        title: "Bachelor of Computer Engineering",
        subtitle: "Khon Kean University, Thailand"
    },
];


const projectOverview = {
    caseStudies: [
        { name: "Wellnest", url: "#" },
        { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
        { name: "Formless", url: "#" },
        { name: "Gridsnap", comingSoon: true },
        { name: "OrbitPay Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};