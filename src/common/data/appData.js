
import logo from 'common/assets/images/logoUnifaires.svg'
import paypal from 'public/images/partners/paypal.svg'

/* -------- About Us data section --------- */

export const aboutUs = {
  heading: 'Redefining Education for all',
  subheading: 'Our simple, per-course pricing scales with you.',
  logo: logo,
  sections: [
    {
      title: 'OUR VISION',
      subtitle: 'Solve the learning deficit',
      description: 'Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields. Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields.Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields.',
      imageURL: 'common/assets/images/',
      buttonText: ''
    },
    {
      title: 'OUR MISSION',
      subtitle: 'Solve the learning deficit',
      description: 'Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields. Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields.Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields.',
      image: 'common/assets/images/',
      buttonText: ''
    },
    {
      title: 'OUR PARTNERS',
      subtitle: 'Backed by the best in the industry',
      description: '',
      image: [ 
        'common/assets/images/', 
        'common/assets/images/', 
        'common/assets/images/', 
        'common/assets/images/', 
        'common/assets/images/'
      ],
      buttonText: ''
    },     
    {
      title: 'OUR CULTURE',
      subtitle: 'Forged in partnerships',
      description: 'Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields. Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields.Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields.',
      image: '',
      buttonText: ''
    },   
    {
      title: 'CAREERS',
      subtitle: 'Come work with us',
      description: 'Get to work n form; across various industries and fields. Unifaires helps people seeking to learn by providing them with multiple courses to learn form; across various industries and fields.Unifaires helps people seeking to learn by providing them with multiple courses to learn from fields.',
      image: '',
      buttonText: 'Explore Job Opportunies'
    },   
  ], 
  attractions: [
    {
    title: 'Lorem ipsum',
    iconURL: '',
    description: 'We’ll never tell your current company or a third-party recruiter about your job search, we respect your privacy. And it’s completely free to search.'
    },
    {
    title: 'Lorem ipsum',
    iconURL: '',
    description: 'We’ll never tell your current company or a third-party recruiter about your job search, we respect your privacy. And it’s completely free to search.'
    },
    {
    title: 'Lorem ipsum',
    iconURL: '',
    description: 'We’ll never tell your current company or a third-party recruiter about your job search, we respect your privacy. And it’s completely free to search.'
    },
    {
    title: 'Lorem ipsum',
    iconURL: '',
    description: 'We’ll never tell your current company or a third-party recruiter about your job search, we respect your privacy. And it’s completely free to search.'
    },
    {
    title: 'Lorem ipsum',
    iconURL: '',
    description: 'We’ll never tell your current company or a third-party recruiter about your job search, we respect your privacy. And it’s completely free to search.'
    },  ]
}


/* -------- Contact Card data section --------- */
export const contactCard = {
  heading: 'Need our help?',
  logo: logo,
  slogan: 'Contact Us',
  title: 'questions, enquiries', 
  description: 'We value your time so we will do our best to respond to your message promptly.', 
  buttonText: 'Send Message',
  email: {
    heading: "Contact the team",
    date: "Mon- Fri from 8pm to 5pm",
    link: "info@unifaires.com"
  },
  msgChat: {
    heading: "Chat to us",
    date: "Mon- Fri from 8pm to 5pm",
    link: "+44 0876 8757 667"   
  }
  // socials: [facebook, instagram, twitter, youtube]
}

/* ----------- Pricing policy data section ------------- */

export const pricing = {
  slogan: 'Pricing',
  title: 'Simple, transparent pricing',
  subtitle: 'Our simple, per-course pricing scales with you.',
  monthly: [
    {
      id: 1,
      title: 'Individual Business Plan',
      description: 'Create and Educate Students',
      price: 45,
      button_title: "Start Free Trial",
      link: "/",
      notice: {
        boolean: false,
        message: ""
      },
      features: [
        {
          id: 1,
          text: 'Create and Educate Students',
        },
        {
          id: 2,
          text: "Create and Educate Students",
        },
        {
          id: 3,
          text: 'Create and Educate Students',
        },
        {
          id: 4,
          text: 'Create and Educate Students',
        },
        {
          id: 5,
          text: 'Create and Educate Students',
        },  
        {
          id: 6,
          text: 'Create and Educate Students',
        },
        {
          id: 7,
          text: 'Create and Educate Students',
        },
        {
          id: 8,
          text: 'Create and Educate Students',
        },      
      ],
    },
    {
      id: 2,
      title: 'Governmental, Research, & Funding Institution Plan',
      description: 'Get basic learning materials',
      price: 125,
      button_title: "Contact Us",
      link: "/",
      notice: {
        boolean: true,
        message: "For RESEARCH BODIES"
      },
      trail: 14,
      class_name: "pricing_card_middle",
      features: [
        {
          id: 1,
          text: 'Create and Educate Students',
        },
        {
          id: 2,
          text: "Create and Educate Students",
        },
        {
          id: 3,
          text: 'Create and Educate Students',
        },
        {
          id: 4,
          text: 'Create and Educate Students',
        },
        {
          id: 5,
          text: 'Create and Educate Students',
        },  
        {
          id: 6,
          text: 'Create and Educate Students',
        },
        {
          id: 7,
          text: 'Create and Educate Students',
        },
        {
          id: 8,
          text: 'Create and Educate Students',
        },      
      ],
    },
    {
      id: 3,
      title: 'Educational Institution Plan',
      description: 'Create and Educate Students',
      price: 45,
      button_title: "Choose Plan",
      link: "/",
      class_name: "",
      notice: {
        boolean: false,
        message: ""
      },      
      features: [
        {
          id: 1,
          text: 'Create and Educate Students',
        },
        {
          id: 2,
          text: "Create and Educate Students",
        },
        {
          id: 3,
          text: 'Create and Educate Students',
        },
        {
          id: 4,
          text: 'Create and Educate Students',
        },
        {
          id: 5,
          text: 'Create and Educate Students',
        },  
        {
          id: 6,
          text: 'Create and Educate Students',
        },
        {
          id: 7,
          text: 'Create and Educate Students',
        },
        {
          id: 8,
          text: 'Create and Educate Students',
        },      
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Individual Business Plan',
      description: 'Create and Educate Students',
      price: 45,
      button_title: "Start Free Trial",
      link: "/",
      notice: {
        boolean: false,
        message: ""
      },
      features: [
        {
          id: 1,
          text: 'Create and Educate Students',
        },
        {
          id: 2,
          text: "Create and Educate Students",
        },
        {
          id: 3,
          text: 'Create and Educate Students',
        },
        {
          id: 4,
          text: 'Create and Educate Students',
        },
        {
          id: 5,
          text: 'Create and Educate Students',
        },  
        {
          id: 6,
          text: 'Create and Educate Students',
        },
        {
          id: 7,
          text: 'Create and Educate Students',
        },
        {
          id: 8,
          text: 'Create and Educate Students',
        },      
      ],
    },
    {
      id: 2,
      title: 'Governmental, Research, & Funding Institution Plan',
      description: 'Get basic learning materials',
      price: 125,
      button_title: "Contact Us",
      link: "/",
      notice: {
        boolean: true,
        message: "For RESEARCH BODIES"
      },
      trail: 14,
      class_name: "pricing_card_middle",
      features: [
        {
          id: 1,
          text: 'Create and Educate Students',
        },
        {
          id: 2,
          text: "Create and Educate Students",
        },
        {
          id: 3,
          text: 'Create and Educate Students',
        },
        {
          id: 4,
          text: 'Create and Educate Students',
        },
        {
          id: 5,
          text: 'Create and Educate Students',
        },  
        {
          id: 6,
          text: 'Create and Educate Students',
        },
        {
          id: 7,
          text: 'Create and Educate Students',
        },
        {
          id: 8,
          text: 'Create and Educate Students',
        },      
      ],
    },
    {
      id: 3,
      title: 'Educational Institution Plan',
      description: 'Create and Educate Students',
      price: 45,
      button_title: "Choose Plan",
      link: "/",
      class_name: "",
      notice: {
        boolean: false,
        message: ""
      },      
      features: [
        {
          id: 1,
          text: 'Create and Educate Students',
        },
        {
          id: 2,
          text: "Create and Educate Students",
        },
        {
          id: 3,
          text: 'Create and Educate Students',
        },
        {
          id: 4,
          text: 'Create and Educate Students',
        },
        {
          id: 5,
          text: 'Create and Educate Students',
        },  
        {
          id: 6,
          text: 'Create and Educate Students',
        },
        {
          id: 7,
          text: 'Create and Educate Students',
        },
        {
          id: 8,
          text: 'Create and Educate Students',
        },      
      ],
    },
  ],
};

/* ----------  Testimonial data section ----------- */

export const testimonial = {
  slogan: 'Testimonials',
  title: "Don’t take our word for it",
  reviews: [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'Technology Analyst for DreamChi Global',
      review: 4.4,

    },
    {
      id: 2,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jeny Doe',
      designation: 'Technology Analyst for DreamChi Global',
      review: 3.2,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'Technology Analyst for DreamChi Global',
      review: 5,
    },
  ],
};
/* ------------ Pricing Features data section ------------ */

export const pricingFeatures = {
  slogan: 'Features',
  title: 'All The Features You Need',
  features: [
    {
      id:1,
      name: 'Set up Students’ email',
      tiers:[{lite: true,
      basic: true,
      plus: true,}]
      
    }
  ]
};
// /* ------------------------------------ */
// // Collaborators data section
// /* ------------------------------------ */
// import microsoft from 'common/assets/image/appClassic/microsoft1.svg';
// import coursera from 'common/assets/image/appClassic/coursera.svg';
// import tesla from 'common/assets/image/appClassic/tesla.svg';
// import emory from 'common/assets/image/appClassic/emory-university.svg';
// import ibm from 'common/assets/image/appClassic/ibm.svg';

/* -------- Login data section --------- */
export const login = {
  heading: 'Login',
  logo: logo,
  slogan: 'Democratized',
  title: 'learning for all', 
  description: 'Unifaires is a good platform that emphasizes learning for all. lorem ipsum dolor sit amet consectuer',
  buttonText: 'Complete Signup',
  forgotHeading: 'Forgot Password',
  forgotDescription: "Enter the email address you signed up with and we'll send an email with instructions to reset your password.",
  resetHeading: 'Reset Password',
  resetDescription: "Enter a new password for here, and try to remember this one will you"
}

export const signup = {
  heading: 'Sign Up',
  logo: logo,
  slogan: 'Democratized',
  title: 'learning for all', 
  description: 'Unifaires is a good platform that emphasizes learning for all. lorem ipsum dolor sit amet consectuer',
  buttonText: 'Proceed'
}

export const forgotPass = {
  heading: 'Forgot Password',
  description: "Enter the email address you signed up with and we'll send an email with instructions to reset your password.",
  buttonText: 'Send Reset Link'
}

/* -------- USER MODULE --------- */

export const userModule = {
  company: 'Unifaires',
  suite: 'Individual',
  userType: 'individual',
  userOptions: [
    {
    // courses: [
    // ],
    // sections: [
    //   {
    //     title: 'My Courses',
    //     text: 'You have no courses yet! Explore our courses to get started',
    //     buttonText: 'Explore Courses'
    //   },
    //   {
    //     title: 'My Job Applications',
    //     text: 'Jobs you’ve applied to will be documented here. Get searching',
    //     buttonText: 'Find Jobs'
    //   },
    //   {
    //     title: 'My Certifications & Badges',
    //     text: 'Oops, you haven’t earned a certificate yet.',
    //     buttonText: ''
    //   },      
    // ]
    courses: [
      {
        courseID: 'AK561GH',
        title: "Introduction to AI",
        category: "DESIGN",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: 'public/images/dashboardCard.png',
        lessons: "9",
        time: "150"
      },
      {
        courseID: 'AW561GH',
        title: "Introduction to AI",
        category: "DESIGN",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: "",
        lessons: "9",
        time: "150"
      },
      {
        courseID: 'QG561GH',
        title: "Introduction to AI",
        category: "DESIGN",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: "",
        lessons: "9",
        time: "150"
      },
      {
        courseID: 'PX561GH',
        title: "Introduction to AI",
        category: "DESIGN",
        description: "We are looking for an Accountant to manage all financial transactions...",
        dateAdded: "12th Jan 2021",
        thumbnail: "",
        lessons: "9",
        time: "150"
      }
    ],
    jobs: [
      {
        company: "Paypal",
        logo: paypal,
        title: "Senior Product Designer",
        description: "We are looking for an Accountant to manage all financial transactions...",
        current: 0      
      },
            {
        company: "Paypal",
        logo: paypal,
        title: "Senior Product Designer",
        description: "We are looking for an Accountant to manage all financial transactions...",
        current: 0
      },
            {
        company: "Paypal",
        logo: paypal,
        title: "Senior Product Designer",
        description: "We are looking for an Accountant to manage all financial transactions...",
        current: 0
      },
            {
        company: "Paypal",
        logo: paypal,
        title: "Senior Product Designer",
        description: "We are looking for an Accountant to manage all financial transactions...",
        current: 1
      },
            {
        company: "Paypal",
        logo: paypal,
        title: "Senior Product Designer",
        description: "We are looking for an Accountant to manage all financial transactions...",
        current: 0
      }
      ,
            {
        company: "Paypal",
        logo: paypal,
        title: "Senior Product Designer",
        description: "We are looking for an Accountant to manage all financial transactions...",
        current: 1
      }
      ,
            {
        company: "Paypal",
        logo: paypal,
        title: "Senior Product Designer",
        description: "We are looking for an Accountant to manage all financial transactions...",
        current: 0
      }
    ],
    scholarships: [
    ],
    certifications: [
      {
      logo: "",
      name: "Oreoluwanimi Adeyemi",
      title: `"User Experience Design for Beginners"`,
      date: "23rd of February, 2021.",
      distinction: "Best in Class"
      },
      {
      logo: "",
      name: "Oreoluwanimi Adeyemi",
      title: `"User Experience Design for Beginners"`,
      date: "23rd of February, 2021.",
      distinction: "Best in Class"
      },
      {
      logo: "",
      name: "Oreoluwanimi Adeyemi",
      title: `"User Experience Design for Beginners"`,
      date: "23rd of February, 2021.",
      distinction: "Best in Class"
      },      
      {
      logo: "",
      name: "Oreoluwanimi Adeyemi",
      title: `"User Experience Design for Beginners"`,
      date: "23rd of February, 2021.",
      distinction: "Best in Class"
      }    
    ],
    badges: [
      {
        title: 'Certificate of Exceptional Performance',
        category: '“User Experience Design for Beginners”',
        name: 'Oreoluwa Adeyemi',
        date: '23rd of February, 2021.',
        rank: 2,
      },
            {
        title: 'Certificate of Exceptional Performance',
        category: '“User Experience Design for Beginners”',
        name: 'Oreoluwa Adeyemi',
        date: '23rd of February, 2021.',
        rank: 3,
      },
            {
        title: 'Certificate of Exceptional Performance',
        category: '“User Experience Design for Beginners”',
        name: 'Oreoluwa Adeyemi',
        date: '23rd of February, 2021.',
        rank: 1,
      },
            {
        title: 'Certificate of Exceptional Performance',
        category: '“User Experience Design for Beginners”',
        name: 'Oreoluwa Adeyemi',
        date: '23rd of February, 2021.',
        rank: 3,
      },
            {
        title: 'Certificate of Exceptional Performance',
        category: '“User Experience Design for Beginners”',
        name: 'Oreoluwa Adeyemi',
        date: '23rd of February, 2021.',
        rank: 1,
      },
            {
        title: 'Certificate of Exceptional Performance',
        category: '“User Experience Design for Beginners”',
        name: 'Oreoluwa Adeyemi',
        date: '23rd of February, 2021.',
        rank: 2,
      }
    ],
    helpOptions: [
      {
        icon: "",
        title: "General",
        description: "Set up your account.",
      },
            {
        icon: "",
        title: "General",
        description: "Set up your account.",
      },
            {
        icon: "",
        title: "General",
        description: "Set up your account.",
      },
            {
        icon: "",
        title: "General",
        description: "Set up your account.",
      }
    ],
    helpBottom: [
      {
        heading: "Where can I watch?",
        paragraph: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
      },
      {
        heading: "Where can I watch?",
        paragraph: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
      },
      {
        heading: "Where can I watch?",
        paragraph: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
      },
      {
        heading: "Where can I watch?",
        paragraph: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
      },    
      {
        heading: "Where can I watch?",
        paragraph: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
      },
      {
        heading: "Where can I watch?",
        paragraph: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
      },    
    ],
    funding: [
      {
        status: 2,
        // imageURL: "",
        company: "IBM",
        title: "50% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },
      {
        status: 1,
        // imageURL: "",
        company: "IBM",
        title: "50% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },      {
        status: 3,
        // imageURL: "",
        company: "IBM",
        title: "50% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },      {
        status: 2,
        // imageURL: "",
        company: "IBM",
        title: "50% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },      {
        status: 1,
        // imageURL: "",
        company: "IBM",
        title: "50% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },      {
        status: 3,
        // imageURL: "",
        company: "IBM",
        title: "50% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },
    ],
    messaging: [
      {
        status: 1, //Determine Deleted or not 1=active 0 =deleted
        from: "Anna Smith",
        messages: [
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "Aug 29",
            status: 1, // Read or not read
            isFrom: 0
          }, 
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "",
            status: 1 , // Read or not read
            isFrom: 1
          }, 
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "",
            status: 1 , // Read or not read
            isFrom: 0
          }, 
          
        ]
      },
      {
        status: 1, //Determine Deleted or not 1=active 0 =deleted
        from: "John Smith",
        messages: [
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "Aug 29",
            status: 1, // Read or not read
            isFrom: 0
          }, 
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "",
            status: 1 , // Read or not read
            isFrom: 1
          }, 
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "",
            status: 1 , // Read or not read
            isFrom: 0
          }, 
          
        ]
      },
      ]
  }
]
}

/* -------- BUSINESS MODULE --------- */

export const businessModule = {
  company: 'Unifaires',
  suite: 'Business Suite',
  userType: 'business',
  userOptions: [{
    courses: [
      {
        title: "Data Science for IoT",
        dateAdded: "12th Jan 2021",
        thumbnail: "",
        views: "",
        members: ""
      }
    ],
    jobs: [],
    scholarships: [],
    badges: []
  }]
}

