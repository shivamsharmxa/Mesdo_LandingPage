// Landing Page Data Constants
export const HERO_SECTION = {
  badge: {
    text: "Early Access – 10,000+ Healthcare Pros Signed Up",
    className:
      "px-3 py-2 bg-primary-600 rounded-full font-semibold text-white text-xs",
  },
  title: "India's 1st Healthcare\nOnly Ecosystem",
  description:
    "Mesdo is India's first healthcare-only platform that connects hospitals with verified professionals — streamlining hiring, networking, and career growth in one trusted system.",
  cta: {
    text: "Get Early Access",
    icon: "/outline---arrows---arrow-left-down.svg",
  },
  heroImage: "/job---main-page-1.png",
};

export const MISSION_STATEMENT = {
  title: "Connecting Healthcare Professionals with Opportunities",
  description:
    "Our mission is to create a trusted ecosystem where healthcare professionals can grow their careers and hospitals can find the right talent.",
};

export const BENEFITS_SECTION = {
  sectionTitle: "Why Navigating a Medical Career Feels Broken",
  subtitle: "Everyday Struggles. Real People.",
  description:
    "No trusted network. No verified identity. No space to grow. For years, doctors, nurses, and AHPs have been navigating their careers without a platform built just for them.",

  profileData: {
    name: "Dr Rohit Sharma",
    title: "MBBS Graduate, Early-Career Doctor",
    image: "/frame-27619.png",
    sections: [
      {
        title: "Backstory",
        content:
          "Just finished MBBS from a private college in Noida. Now looking for his first real job.",
      },
      {
        title: "Current Struggle / Goal",
        content:
          "Rohit keeps applying but gets no replies. Every hospital asks the same questions again and again.",
      },
    ],
  },

  challengeCards: [
    {
      icon: "/solar-repeat-bold.svg",
      title: "Same Interview. Again. And Again.",
      description: "Hospitals ask identical questions — no one saves progress.",
      position: "top-18 left-0",
    },
    {
      icon: "/group.png",
      isImage: true,
      title: "Every job board feels random.",
      description:
        "Naukri and LinkedIn are flooded with IT & marketing. Rahul has to dig deep to find one real medical opportunity",
      position: "top-7 right-0",
    },
    {
      icon: "/fluent-mail-off-16-regular.svg",
      title: "No Replies After Applying",
      description: "Sent out 25+ applications. Hardly anyone sees them.",
      position: "bottom-32 left-0",
    },
    {
      icon: "/mynaui-message-x.svg",
      title: "I don't know who to talk to — or how to start",
      description:
        "No mentors, no peers, no verified network to ask for advice or help",
      position: "bottom-16 right-0",
    },
  ],
};

export const FEATURES_SECTION = {
  title: "Join Mesdo WhatsApp Community",
  description:
    "Get early insights, career tips, peer connections, and product updates — straight from our team and fellow healthcare professionals.",
  cta: {
    text: "Join Now",
    variant: "ghost",
  },
};

export const WHY_CHOOSE_MESDO = {
  title: "Why Choose Mesdo Over Traditional Job Boards?",
  subtitle: "The Clear Choice for Healthcare Professionals",
  description:
    "See how Mesdo transforms your job search experience compared to generic platforms.",

  comparisonFeatures: [
    {
      feature: "Healthcare-Only Focus",
      traditional: "Mixed with IT, marketing, and other industries",
      mesdo: "100% healthcare jobs and professionals",
    },
    {
      feature: "Verified Profiles",
      traditional: "Anyone can create fake profiles",
      mesdo: "Doctor-verified professional network",
    },
    {
      feature: "Interview Process",
      traditional: "Repeat same info for every application",
      mesdo: "One profile, multiple opportunities",
    },
    {
      feature: "Network Quality",
      traditional: "Random connections and spam",
      mesdo: "Genuine healthcare peer network",
    },
    {
      feature: "Career Support",
      traditional: "Generic career advice",
      mesdo: "Healthcare-specific mentorship",
    },
  ],

  conclusion:
    "Join thousands of healthcare professionals who've already made the switch to a platform built specifically for their career growth.",
};

export const COMMUNITY_SECTION = {
  title: "Join 10,000+ Healthcare Professionals",
  subtitle: "Growing Network",
  description:
    "Connect with doctors, nurses, and healthcare professionals across India who are building their careers on Mesdo.",

  testimonials: [
    {
      name: "Dr. Sarah Johnson",
      title: "Cardiologist",
      content:
        "Found my dream job within 2 weeks of joining Mesdo. The healthcare-focused approach makes all the difference.",
      image: "/testimonial-1.jpg",
      position: "top-0 left-0",
    },
    {
      name: "Nurse Priya Sharma",
      title: "ICU Specialist",
      content:
        "Finally, a platform where I can connect with other healthcare professionals without the noise of other industries.",
      image: "/testimonial-2.jpg",
      position: "top-0 right-0",
    },
  ],
};

export const CONTACT_SECTION = {
  title: "Ready to Transform Your Healthcare Career?",
  subtitle: "Get Started Today",
  description:
    "Join thousands of healthcare professionals who are already using Mesdo to advance their careers.",

  form: {
    fields: [
      { name: "name", placeholder: "Your Name", type: "text" },
      { name: "email", placeholder: "Your Email", type: "email" },
      {
        name: "message",
        placeholder: "Tell us about your career goals",
        type: "textarea",
      },
    ],
    submitText: "Get Early Access",
  },
};

export const FOOTER_DATA = {
  companyName: "Mesdo",
  description: "India's first healthcare-only professional network",

  links: [
    {
      title: "Product",
      items: [
        { text: "Features", href: "#features" },
        { text: "Pricing", href: "#pricing" },
        { text: "Security", href: "#security" },
      ],
    },
    {
      title: "Company",
      items: [
        { text: "About", href: "#about" },
        { text: "Careers", href: "#careers" },
        { text: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      items: [
        { text: "Blog", href: "#blog" },
        { text: "Help Center", href: "#help" },
        { text: "Community", href: "#community" },
      ],
    },
  ],

  legal: [
    { text: "Privacy Policy", href: "#privacy" },
    { text: "Terms of Service", href: "#terms" },
    { text: "Cookie Policy", href: "#cookies" },
  ],

  copyright: "© 2024 Mesdo. All rights reserved.",
};
