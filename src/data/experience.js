// Work history, taken from the resume.

export const experience = [
  {
    role: 'Senior Software Engineer',
    promoted: true, // promoted from Junior Software Engineer at the same company
    company: 'Firstsource Solutions Limited',
    location: 'Hyderabad, India',
    period: 'Apr 2025 – Present',
    summary: 'Data engineering and full-stack delivery on Microsoft Fabric and Azure.',
    highlights: [
      'Built data analysis and pipeline workloads in Python (PySpark) on Microsoft Fabric Lakehouse for large-scale structured and semi-structured data.',
      'Integrated Azure Data Lake Storage for ingestion, processing and archival of business-critical datasets.',
      'Reduced ETL processing time by 40% while improving data reliability.',
      'Delivered interactive dashboards that improved data accessibility and business insight by 35%.',
      'Contributed to React.js and Node.js applications and their backend APIs.',
    ],
    stack: ['Python', 'PySpark', 'Microsoft Fabric', 'Azure Data Lake', 'React', 'Node.js'],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Firstsource Solutions Limited',
    location: 'Hyderabad, India',
    period: 'Oct 2021 – Mar 2025',
    summary: 'End-to-end product development for ILM, BCM and healthcare platforms.',
    highlights: [
      'Led full-cycle development of Information Lifecycle Management, Business Continuity Management and a healthcare (NGO) platform with 100% on-time delivery.',
      'Built microservices and React.js applications that improved system efficiency by 35%.',
      'Implemented AWS and Azure solutions that reduced infrastructure costs by 25%.',
      'Redesigned PostgreSQL schemas, improving query performance by 30%.',
      'Automated Docker-based AWS deployments (40% faster) and streamlined CI/CD for a 50% faster release cycle.',
      'Wrote API and architecture documentation that cut onboarding time by 40%.',
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'AWS', 'Azure', 'Docker', 'CI/CD'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Invicious Technologies',
    location: 'Coimbatore, India',
    period: 'Mar 2021 – Sep 2021',
    summary: 'Web and mobile applications for client products.',
    highlights: [
      'Led a cross-functional team, increasing delivery speed by 35% through clear planning and coordination.',
      'Optimized the Hyper App project, improving system performance by 30%.',
      'Built REST APIs that reduced response times by 25%.',
      'Managed AWS deployments, cutting infrastructure costs by 15%.',
    ],
    stack: ['React', 'REST APIs', 'MySQL', 'MongoDB', 'AWS', 'Android'],
  },
  {
    type: 'break',
    role: 'Career break',
    period: 'Jun 2020 – Feb 2021',
    summary: 'Career break during the COVID-19 pandemic.',
  },
  {
    role: 'Java Web Developer',
    company: 'Smartway Industrial Automation',
    location: 'Coimbatore, India',
    period: 'Dec 2019 – May 2020',
    summary: 'Real-time dashboards for industrial automation.',
    highlights: [
      'Developed a real-time monitoring dashboard that improved user accessibility by 20%.',
      'Improved application performance by 20% through code-level optimization.',
    ],
    stack: ['Java', 'JSP'],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Hindusthan College of Engineering and Technology, Anna University',
    period: '2017 – 2020',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Hindusthan College of Arts and Science',
    period: '2013 – 2016',
  },
];

export const businessImpact = [
  { value: '25%', label: 'Lower cloud infrastructure cost (AWS & Azure)' },
  { value: '30%', label: 'Faster PostgreSQL queries after schema redesign' },
  { value: '40%', label: 'Shorter developer onboarding through documentation' },
  { value: '100%', label: 'On-time delivery across ILM, BCM and healthcare projects' },
];

export const leadership = [
  'Led full-cycle delivery of three enterprise platforms, from requirements to production.',
  'Led a cross-functional team and improved delivery speed by 35%.',
  'Owned technical documentation and onboarding for new engineers.',
  'Worked in Agile teams with product, QA and business stakeholders.',
];
