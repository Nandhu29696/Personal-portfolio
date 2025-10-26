import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import springBoot from './springboot.png';
import javascript from './javascript.png';
import aws from './aws.png';
import git from './git.png';
import mysql from './mysql.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    springBoot,
    aws,
    git,
    mysql,
    javascript,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'HealthCamp project',
        description: 'Full Stack Design',
        bgImage: '/work-1.png',
        linkTitle: 'View Project',
        link: 'https://hms.nirmaan.org/dashboard'
    },
    {
        title: 'Letscalm App',
        description: 'Mobile App',
        bgImage: '/work-2.png',
        linkTitle: 'View Project',
        link: 'https://github.com/Nandhu29696/letsclam_frontend/tree/Frontend'
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
        linkTitle: 'View Project',
        link: ''
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
        linkTitle: 'View Project',
        link: ''
    },
]

export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Web development',
        description: 'Web development is the process of building, programming...', link: ''
    },
    {
        icon: assets.mobile_icon,
        title: 'Mobile app',
        description: 'Mobile app development involves creating software for mobile devices...', link: ''
    },
    {
        icon: assets.ui_icon,
        title: 'UI/UX design',
        description: 'UI/UX design focuses on creating a seamless user experience...', link: ''
    },
    {
        icon: assets.graphics_icon,
        title: 'AI&ML Solutions',
        description: 'AI and ML to manage data and creating solutions based on...', link: ''
    },
]

export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Languages',
        description: 'Java(Spring-Boot), React Js, Node Js,  MySQL, AWS, Python(Django), Azure DevOps, Git, CI/CD pipelines'
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'Master of Computer Applications from Anna University, Chennai'
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Projects',
        description: 'Built more than 15 projects'
    }
];

export const toolsData = [
  { icon: assets.vscode, name: 'VS Code' },
  { icon: assets.javascript, name: 'JavaScript' },
  { icon: assets.springBoot, name: 'Spring Boot' },
  { icon: assets.mysql, name: 'MySql' },
  { icon: assets.aws, name: 'AWS' },
  { icon: assets.git, name: 'Git' },
];


export const navbarLinks = [
    { title: 'Home', href: '#top' },
    { title: 'About Me', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'My Work', href: '#mywork' },
    { title: 'Contact Me', href: '#contact' },
];

export const navbarInfo = {
    contact: 'Contact',
};

export const aboutInfo = {
    title: 'Introduction',
    subTitle: 'About Me',
    description: `I’m a passionate Full Stack Developer who enjoys crafting modern, scalable, and user-friendly web applications.
  I work across multiple stacks including React, Node.js, Express, MongoDB, Django, and Spring Boot.
  My focus is on writing clean, maintainable code and building solutions that deliver seamless performance and great user experiences.`,
    toolsuseTitle: 'Tools & Technologies I Use'
};

export const headerInfo = {
    name: "Hi! I'm Nandhakumar M",
    role: 'Full Stack Developer | AI & Cloud Enthusiast',
    description: `Based in Coimbatore, India with 4+ years of experience creating scalable web applications using React, Node.js, Django, and Spring Boot.`,
    contactMeTitle: 'Contact Me',
    resumeTitle: 'View Resume'
};


export const myservicesInfo = {
    title: 'What I Do',
    subTitle: 'My Services',
    description: `I design and develop full-stack applications using the latest web technologies.
  My services cover end-to-end solutions — from front-end interfaces to back-end APIs and cloud deployment.
  I also integrate AI, data analytics, and automation to build intelligent and efficient systems.`,
    readmoreTitle: 'Read More'
};

export const myworkInfo = {
    title: 'My Portfolio',
    subTitle: 'Recent Projects',
    description: `Take a look at some of my projects developed with Spring Boot, Django, and Node.js.
  Each project demonstrates strong architecture, secure APIs, and interactive front-end design, blending performance with creativity.`,
    buttonTitle: 'View All Projects'
};

export const contactInfo = {
    title: 'Get in Touch',
    subTitle: 'Contact Me',
    description: `I’m open to new ideas, collaborations, and challenges.
  If you’d like to discuss a project or simply connect, feel free to reach out using the contact form below.`,
};


export const footerInfo = {
    mailID: 'nandhu29696@gmail.com',
    rights: 'My Portfolio. All rights reserved.',
    socialLinks: [
        { title: 'GitHub', href: 'https://github.com/Nandhu29696' },
        { title: 'LinkedIn', href: 'https://www.linkedin.com/in/nandhakumar-m-85344a178/' },
        { title: 'Twitter', href: 'https://github.com/Nandhu29696' },
    ]
};



export const contactFormInfo = {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    submitButtonTitle: 'Send Message'
};