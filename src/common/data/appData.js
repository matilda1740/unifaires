
import logo from 'common/assets/images/logoUnifaires.svg'
// import paypal from 'public/images/partners/paypal.svg'
import paypal from 'common/assets/images/tesla.svg'
import { ArrowForwardIos, AutoStories, PersonOutlined, CorporateFareOutlined, SchoolOutlined, MarkAsUnreadOutlined, FlakyOutlined, GroupOutlined } from '@mui/icons-material';

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

export const userDetails = {
  userID: 'BUSI239THUSER',
  firstname: 'Matilda',
  lastname: "Mwendwa",
  // userType: "individual",
  userType: "business",
}
/* -------- INDIVIDUAL MODULE --------- */

export const individualModule = {
  company: 'Unifaires',
  suite: 'Individual',
  userType: 'individual',
  userID: 'INDIV239THUSER',
  name: 'Andikan Bassey',
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
        fundingID: "P20PAK561GH",
        status: 2,
        // imageURL: "",
        company: "IBM",
        title: "50% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },
      {
        fundingID: "T34PAK561GH",
        status: 1,
        // imageURL: "",
        company: "GOOGLE",
        title: "85% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },     
      {
        fundingID: "GH7PAK561GH",
        status: 3,
        // imageURL: "",
        company: "MICROSOFT",
        title: "13% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },      
      {
        fundingID: "9BWPAK561GH",
        status: 2,
        // imageURL: "",
        company: "TESLA",
        title: "48% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },      
      {
        fundingID: "1THPAK561GH",
        status: 1,
        // imageURL: "",
        company: "PURPLE",
        title: "97% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },      
      {
        fundingID: "DDDPAK561GH",
        status: 3,
        // imageURL: "",
        company: "META",
        title: "50% Design Programs",
        type: "Grant",
        duration: "4 weeks",
        description: "We are looking for an Accountant to manage all financial transactions... We are looking for an Accountant to manage all financial transactions... ",
      },
    ],
    messaging: [
      {
        status: 1, //Determine Deleted or not 1=active 0 =deleted
        name: "Anna Smith", 
        userID: "AS239TH",
        messages: [
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "Aug 29",
            status: 1, // Read or not read
            isFrom: 0
          }, 
          {
            text: "Tenetur quod quidem in voluptatem corporis dolorum dicta sit ",
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
        name: "John Smith", userID: "JS239TH",
        messages: [
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "Aug 29",
            status: 1, // Read or not read
            isFrom: 1
          }, 
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "",
            status: 1 , // Read or not read
            isFrom: 0
          }, 
          {
            text: "Hello I’m excited to be here. I have no idea why you might be interested",
            createdAt: "",
            status: 1 , // Read or not read
            isFrom: 1
          }, 
          
        ]
      },
      {
        status: 1, //Determine Deleted or not 1=active 0 =deleted
        from: [{ name: "John Smith", userID: "JS239TH"}],
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
        from: [{ name: "John Smith", userID: "JS239TH"}],
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
        from: [{ name: "John Smith", userID: "JS239TH"}],
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
        from: [{ name: "John Smith", userID: "JS239TH"}],
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
        from: [{ name: "John Smith", userID: "JS239TH"}],
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
        from: [{ name: "John Smith", userID: "JS239TH"}],
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
      ],
    settings: [
      {
      modules: [
        {
          title: "Profile",
          description: "Edit your name and how people",
        },
        {
          title: "Billings",
          description: "Edit your name and how people",
        },
        {
          title: "Notifications",
          description: "Edit your name and how people",
        },        
        {
          title: "Security",
          description: "Edit your name and how people",
        }     
      ],
      }

    ],
    instructors: [
      {
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
      {
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
      {
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
    ],
    featuredReviews: [
      {
        createdBy: "Simon Mudessar",
        createdAt: "2 weeks ago",
        message: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world. We do this in part through innovative learning and credentialing programs that help develop and recognize the talent",
        reviewValue: 4,
      },
      {
        createdBy: "Simon Mudessar",
        createdAt: "3 weeks ago",
        message: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world. We do this in part through innovative learning and credentialing programs that help develop and recognize the talent",
        reviewValue: 5,
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
  userID: 'BUSI239THUSER',
  firstname: 'Matilda',
  lastname: "Mwendwa",
  accounts: [
    { id: "C1", title: "courses", number: 873, icon: <AutoStories/> },
    { id: "O2", title: "organizations", number: 412, icon: <CorporateFareOutlined/> },
    { id: "I1", title: "instructors", number: 21, icon: <SchoolOutlined/> },
    { id: "S1", title: "students", number: 2321, icon: <PersonOutlined/> },
    { id: "I2", title: "invites", number: 12, icon: <MarkAsUnreadOutlined/> },
  ],
    vettedtalents: [
    { id: "V1", reference: "requests", title: "vetted talent requests", number: 873, icon: <MarkAsUnreadOutlined/> },
    { id: "T2", reference: "talents", title: "vet talents", number: 412, icon: <FlakyOutlined/> },
    { id: "P8", reference: "profiles", title: "vetted profile", number: 21, icon: <GroupOutlined/> },
  ],
  userOptions: [{
    invites: [
      {
        id: "OADW519",
        name: "Oreoluwa Adeyemi",
        email: "oreoluwanimi@yahoo.com",
        role: "Instructor",
        status: "accepted",
        image: ""
      },
      {
        id: "RFQP432",
        name: "Robert Fox",
        email: "robert.fox@yahoo.com",
        role: "Student",
        status: "pending",
        image: ""
      },
      {
        id: "9OAS765",
        name: "Serena Van Der Woodsen",
        email: "serena@yahoo.com",
        role: "Instructor",
        status: "rejected",
        image: ""
      },
      {
        id: "BKL555T",
        name: "Nathaniel Archibald",
        email: "nate42archibald@yahoo.com",
        role: "Instructor",
        status: "accepted",
        image: ""
      },
    ],
    students: [
      {
        id: "STUD4123",
        image: "",
        name: "Simon Mudessar",
        degree: "Law Student",
        description: "Simon is a top instructure with over 12 years experienc in Law.",
        coursesNo: 12,
        certificatesNo: 7,
      },
      {
        id: "STUD4124",
        image: "",
        name: "Simon Mudessar",
        degree: "Law Student",
        description: "Simon is a top instructure with over 12 years experienc in Law.",
        coursesNo: 12,
        certificatesNo: 7,
      },      
      {
        id: "STUD4125",
        image: "",
        name: "Simon Mudessar",
        degree: "Law Student",
        description: "Simon is a top instructure with over 12 years experienc in Law.",
        coursesNo: 12,
        certificatesNo: 7,
      },
      {
        id: "STUD4126",
        image: "",
        name: "Simon Mudessar",
        degree: "Law Student",
        description: "Simon is a top instructure with over 12 years experienc in Law.",
        coursesNo: 12,
        certificatesNo: 7,
      },
      {
        id: "STUD4127",
        image: "",
        name: "Simon Mudessar",
        degree: "Law Student",
        description: "Simon is a top instructure with over 12 years experienc in Law.",
        coursesNo: 12,
        certificatesNo: 7,
      },
      {
        id: "STUD4128",
        image: "",
        name: "Simon Mudessar",
        degree: "Law Student",
        description: "Simon is a top instructure with over 12 years experienc in Law.",
        coursesNo: 12,
        certificatesNo: 7,
      },
      {
        id: "STUD4129",
        image: "",
        name: "Simon Mudessar",
        degree: "Law Student",
        description: "Simon is a top instructure with over 12 years experienc in Law.",
        coursesNo: 12,
        certificatesNo: 7,
      },

    ],
    instructors: [
      {
        id: "SIM8585",
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
      {
        id: "SIM8586",
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
      {
        id: "SIM8587",
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
      {
        id: "SIM8588",
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
      {
        id: "SIM8589",
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
      {
        id: "SIM8590",
        image: "",
        name: "Simon Mudessar",
        role: "Top Instructor",
        company: "Google",
        preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
        registeredNumber: "5K",
        rating: 4.4,
        coursesNumber: 12
      },
    ],
    organizations: [
      {
        id: "TECH5109",
        type: "Technology",
        company: "google",
        image: "",
        staffNo: 32,
        adminNo: 9,
      },
      {
        id: "TECH4343",
        type: "Technology",
        company: "ibm",
        image: "",
        staffNo: 32,
        adminNo: 9,
      },
      {
        id: "TECH3892",
        type: "Technology",
        company: "microsoft",
        image: "",
        staffNo: 32,
        adminNo: 9,
      },
      {
        id: "TECH62229",
        type: "Technology",
        company: "facebook",
        image: "",
        staffNo: 32,
        adminNo: 9,
      },
      {
        id: "TECH5147",
        type: "Technology",
        company: "tesla",
        image: "",
        staffNo: 32,
        adminNo: 9,
      },
    ],
  }]
}

// FILTER BUTTONS DATA

export const filterData = {
  courses: [ "Salary", "Location", "Skills", "Experience", "Company Size" ],
  funding: [ "All", "In Progress", "Granted", "Rejected"],
  jobs: ["New Jobs", "InProgress"],
  certs_badges: ["Badges", ""]
}

// STATIC DATA TO BE DELETED AFTER DB CONNECTION

export const courses = [
  // STATUS ZERO INDICATES ALL COURSES NOT STARTED, 1 MEANS IN PROGESS
      {
        courseID: 'AK561GH',
        title: "Introduction to AI",
        category: "DESIGN",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: 'public/images/dashboardCard.png',
        lessons: "9",
        time: "150",
        students: 12562,
        status: 0, percentage: 0,
      },
      {
        courseID: 'DE561GH',
        title: "Introduction to AI",
        category: "DESIGN",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: 'public/images/dashboardCard.png',
        lessons: "9",
        time: "150",
        students: 289,
        status: 0, percentage: 0
      },
        {
        courseID: 'TECH561GH',
        title: "Data Mining and Data Science",
        category: "TECHNOLOGY",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: 'public/images/dashboardCard.png',
        lessons: "9",
        time: "150",
        students: 78,
        status: 0, percentage: 0
      },
      {
        courseID: 'AK561GH',
        title: "UI/UX Design using Figma",
        category: "DESIGN",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: 'public/images/dashboardCard.png',
        lessons: "9",
        time: "150",
        students: 12562,
        status: 0, percentage: 0
      },        
      {
        courseID: 'MATH561GH',
        title: "Probability and Statistics",
        category: "MATHEMATICS",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: "",
        lessons: "9",
        time: "150",
        students: 156,
        status: 1, percentage: 10
      },        
      {
        courseID: 'PH561GH',
        title: "Introduction to Philosopy",
        category: "PHILOSOPY",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: "",
        lessons: "9",
        time: "150",
        students: 789,
        status: 1, percentage: 33
      },
      {
        courseID: 'QG561GH',
        title: "Quantitative Analysis",
        category: "SURVEY",
        description: "We are looking for an Accountant to manage all financial transactions... ",
        dateAdded: "12th Jan 2021",
        thumbnail: "",
        lessons: "9",
        time: "150",
        students: 12562,
        status: 1, percentage: 55
      },
      {
        courseID: 'PX561GH',
        title: "Web Development",
        category: "TECHNOLOGY",
        description: "We are looking for an Accountant to manage all financial transactions...",
        dateAdded: "12th Jan 2021",
        thumbnail: "",
        lessons: "9",
        time: "150",
        students: 262,
        status: 1, percentage: 47
      }
]



export const instructors = [
  {
    id: "SIM8585",
    image: "",
    name: "Simon Mudessar",
    email: "simon45@gmail.com",
    phone: "555-189-5789",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1,
  },
  {
    id: "SIM8586",
    image: "",
    name: "Simon Mudessar",
    email: "simon45@gmail.com",
    phone: "555-189-5789",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8587",
    image: "",
    name: "Simon Mudessar",
    email: "simon45@gmail.com",
    phone: "555-189-5789",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 0
  },
  {
    id: "SIM8588",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8589",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    email: "simon45@gmail.com",
    phone: "555-189-5789",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  },
  {
    id: "SIM8590",
    image: "",
    name: "Simon Mudessar",
    phone: "555-189-5789",
    email: "simon45@gmail.com",
    role: "Top Instructor",
    company: "Google",
    preview: "IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world.",
    registeredNumber: "5K",
    rating: 4.4,
    coursesNumber: 12,
    status: 1
  }
];

export const instructorColumns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
        field: 'name',
        headerName: 'Account Name',
        description: '',
        sortable: false,
        width: 160,
    },
    {
        field: 'email',
        headerName: 'Email',
        description: '',
        sortable: false,
        width: 160,
    }, 
    {
        field: 'position',
        headerName: 'Position',
        description: '',
        sortable: false,
        width: 180,
        valueGetter: (params) =>`${params.row.role || ''} | ${params.row.company || ''}`,
    }, 
    {
        field: 'email',
        headerName: 'Email',
        description: '',
        sortable: false,
        width: 160,
    },
    {
        field: 'email',
        headerName: 'Email',
        description: '',
        sortable: false,
        width: 160,
    },   
    {
        field: 'email',
        headerName: 'Email',
        description: '',
        sortable: false,
        width: 160,
    },
    {
        field: 'status',
        headerName: 'Status',
        description: '',
        sortable: false,
        width: 100,
    }, 
];