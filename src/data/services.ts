export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Streamline your development pipeline with automated CI/CD, infrastructure as code, and continuous monitoring.',
    icon: 'GitBranch',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build modern, performant web applications using cutting-edge technologies and best practices.',
    icon: 'Globe',
    features: ['React & Next.js', 'TypeScript', 'API Integration', 'Performance Optimization'],
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Create native and cross-platform mobile experiences that users love.',
    icon: 'Smartphone',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deployment'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Design intuitive interfaces and delightful user experiences that drive engagement.',
    icon: 'Palette',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    description: 'Keep your finances organized with professional bookkeeping and accounting services.',
    icon: 'Calculator',
    features: ['Financial Records', 'Tax Preparation', 'Payroll', 'Financial Reports'],
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Transform raw footage into compelling stories with professional video editing.',
    icon: 'Video',
    features: ['Color Grading', 'Motion Graphics', 'Sound Design', '4K Editing'],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Grow your brand with data-driven digital marketing strategies and campaigns.',
    icon: 'TrendingUp',
    features: ['SEO & SEM', 'Social Media', 'Content Strategy', 'Analytics'],
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Leverage the power of cloud infrastructure for scalability and reliability.',
    icon: 'Cloud',
    features: ['AWS & Azure', 'Serverless', 'Cloud Migration', 'Cost Optimization'],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    description: 'Create stunning visual assets that communicate your brand message effectively.',
    icon: 'PenTool',
    features: ['Brand Identity', 'Print Design', 'Digital Assets', 'Illustration'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business, understand your goals, analyze competitors, and identify opportunities.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create wireframes, prototypes, and high-fidelity designs that align with your vision.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We develop your solution using modern technologies, ensuring quality and performance.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy, test, and optimize your product for the best possible user experience.',
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "coreeliteexperts transformed our digital presence completely. Their attention to detail and technical expertise is unmatched.",
    author: 'Sarah Mitchell',
    role: 'CEO, TechVentures Inc.',
    avatar: 'SM',
  },
  {
    id: 2,
    quote: "Working with coreeliteexperts was a game-changer. They delivered our mobile app ahead of schedule and exceeded all expectations.",
    author: 'Michael Chen',
    role: 'Founder, AppStart',
    avatar: 'MC',
  },
  {
    id: 3,
    quote: "The team's creativity and professionalism made our rebrand a huge success. Highly recommended!",
    author: 'Emma Rodriguez',
    role: 'Marketing Director, Bloom Co.',
    avatar: 'ER',
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: 'Northwind Platform',
    category: 'Web Development',
    description: 'A comprehensive SaaS platform for climate-tech analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 2,
    title: 'Lumen Studio',
    category: 'Brand Identity',
    description: 'Complete brand redesign for a creative agency.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    id: 3,
    title: 'Kite Banking',
    category: 'UI/UX Design',
    description: 'Mobile banking app with focus on accessibility.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
  {
    id: 4,
    title: 'Alloy Campaign',
    category: 'Marketing',
    description: 'Product launch campaign with video and social content.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
  },
  {
    id: 5,
    title: 'Forma Architecture',
    category: 'Web Development',
    description: 'Portfolio website for an architecture firm.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
  },
  {
    id: 6,
    title: 'Civic Maps',
    category: 'Cloud Computing',
    description: 'Data visualization platform for urban planning.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
];

export const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    focus: 'Strategy & Vision',
    avatar: 'AR',
  },
  {
    name: 'Jordan Kim',
    role: 'Creative Director',
    focus: 'Design & Brand',
    avatar: 'JK',
  },
  {
    name: 'Taylor Brooks',
    role: 'Lead Developer',
    focus: 'Technology & Architecture',
    avatar: 'TB',
  },
  {
    name: 'Morgan Chen',
    role: 'Marketing Head',
    focus: 'Growth & Analytics',
    avatar: 'MC',
  },
];
