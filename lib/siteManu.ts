export interface menuItem {
    title: string;
    url: string;
    subMenu?: menuItem[];
    isExternal?: boolean;
}

export const siteMenu = {
    home: {
        title: "Home",
        url: "/",
    },
    about: {
        title: "About Us",
        url: "/about-us",
    },
    industries: {
        title: "Industries",
        url: "/industries",
    },
    services: {
        title: "Services",
        url: "/services",
    },
    practiceArea: {
        title: "Practice Area",
        url: "/practice-area",
    },
    // graphicDesigning: {
    //     title: "Graphic Designing",
    //     url: "/services/graphic-designing",
    // },
    // websiteDevelopment: {
    //     title: "Website Development",
    //     url: "/services/website-development",
    // },
    // websiteDesigning: {
    //     title: "Website Designing",
    //     url: "/services/website-designing",
    // },
    // paymentGatewayIntegration: {
    //     title: "Payment Gateway Integration",
    //     url: "/services/payment-gateway-integration",
    // },
    // businessDevelopment: {
    //     title: "Business Development",
    //     url: "/services/business-development",
    // },
    // itStaffing: {
    //     title: "IT Staffing",
    //     url: "/services/it-staffing",
    // },
    contactUs: {
        title: "Contact us",
        url: "contact-us",
    },
    businessVerticals: {
        title: "Business Verticals",
        url: "/business-verticals",
    },
    blog: {
        title: "Blog",
        url: "/blog",
    },
    Products: {
        title: "Products",
        url: "/products",
    },

    // webDevelopment: {
    //     title: "Web Development",
    //     url: "/web-development",
    // },
    // applicationDevelopment: {
    //     title: "Application Development",
    //     url: "/application-development",
    // },
    // onlineMarketing: {
    //     title: "Online Marketing",
    //     url: "/online-marketing",
    // },
    // softwareDevelopment: {
    //     title: "Software Development",
    //     url: "/software-development",
    // },
    // uiuxDevelopment: {
    //     title: "UI/UX Development",
    //     url: "/ui-ux-development",
    // },
    termConditions: {
        title: "Terms and Conditions",
        url: "/terms-and-conditions",
    },
    privacyPolicy: {
        title: "Privacy Policy",
        url: "/privacy-policy",
    },

};

export const mainMenu: menuItem[] = [
    siteMenu.home,
    siteMenu.about,
    siteMenu.services,
    siteMenu.practiceArea,
    siteMenu.Products,
    // {
    //     title: "Who We Are",
    //     url: "#",
    //     subMenu: [
    //         siteMenu.about,
    //         siteMenu.ourTeam,
    //         siteMenu.certification,
    //         siteMenu.globalApproach,
    //         siteMenu.industriesWeServe,
    //         siteMenu.corporateSR,
    //     ],
    // },
    // {
    //     title: "We Are Expert In",
    //     url: "#",
    //     subMenu: [
    //         // siteMenu.webDevelopment,
    //         // siteMenu.applicationDevelopment,
    //         // siteMenu.onlineMarketing,
    //         // siteMenu.softwareDevelopment,
    //         // siteMenu.uiuxDevelopment,
    //     ],
    // },
    // {
    //     title: "What We Do",
    //     url: "#",
    //     subMenu: [
    //         // siteMenu.websiteDevelopment,
    //         // siteMenu.websiteDesigning,
    //         // siteMenu.paymentGatewayIntegration,
    //         // siteMenu.graphicDesigning,
    //         // siteMenu.businessDevelopment,
    //         // siteMenu.itStaffing,
    //     ],
    // },
    // siteMenu.businessVerticals,
    siteMenu.industries,
    siteMenu.blog,
    siteMenu.contactUs,
];


export const mobileMenu: menuItem[] = [
    siteMenu.home,
    siteMenu.about,
    {
        title: "We Are Expert In",
        url: "#",
        subMenu: [
            // siteMenu.webDevelopment,
            // siteMenu.applicationDevelopment,
            // siteMenu.onlineMarketing,
            // siteMenu.softwareDevelopment,
            // siteMenu.uiuxDevelopment,
        ],
    },
    {
        title: "What We Do",
        url: "#",
        subMenu: [
            // siteMenu.websiteDevelopment,
            // siteMenu.websiteDesigning,
            // siteMenu.paymentGatewayIntegration,
            // siteMenu.graphicDesigning,
            // siteMenu.businessDevelopment,
            // siteMenu.itStaffing,
        ],
    },
    siteMenu.businessVerticals,
    siteMenu.blog,
    siteMenu.contactUs,
];

// export const quickLinks: menuItem[] = [
//     siteMenu.ourTeam,
//     siteMenu.certification,
//     siteMenu.globalApproach,
//     siteMenu.industriesWeServe,
// ];

export const experties: menuItem[] = [
    // siteMenu.webDevelopment,
    // siteMenu.applicationDevelopment,
    // siteMenu.onlineMarketing,
    // siteMenu.softwareDevelopment,
    // siteMenu.uiuxDevelopment,
];

export const services: menuItem[] = [
    // siteMenu.graphicDesigning,
    // siteMenu.websiteDevelopment,
    // siteMenu.websiteDesigning,
    // siteMenu.paymentGatewayIntegration,
    // siteMenu.businessDevelopment,
    // siteMenu.itStaffing,
];

export const leftMenue: menuItem[] = [
    // siteMenu.ourClients,
    // siteMenu.portfolio,
    // siteMenu.technologies,
    // siteMenu.internship,
    // siteMenu.career,
    siteMenu.businessVerticals,
];