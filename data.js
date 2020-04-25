export const skills = {
  frontend: [
    {name: 'HTML5', image: require('./src/assets/icons/HTML5.png')},
    {name: 'CSS3', image: require('./src/assets/icons/CSS3.png')},
    {name: 'JavaScript', image: require('./src/assets/icons/JavaScript.png')},
    {name: 'React', image: require('./src/assets/icons/React.png')},
    {name: 'Vue', image: require('./src/assets/icons/Vue.png')},
    {name: 'JQuery', image: require('./src/assets/icons/JQuery.png')}
  ],
  backend: [
    {name: 'Node', image: require('./src/assets/icons/Node.png')},
    {name: 'Express', image: require('./src/assets/icons/Express.png')},
    {name: 'MongoDB', image: require('./src/assets/icons/MongoDB.png')},
    {name: 'PostgreSQL', image: require('./src/assets/icons/PostgreSQL.png')},
    {name: 'MySQL', image: require('./src/assets/icons/MySQL.png')},
    {name: 'GraphQL', image: require('./src/assets/icons/GraphQL.png')}
  ],
  other: [
    {name: 'webpack', image: require('./src/assets/icons/webpack.png')},
    {name: 'AWS', image: require('./src/assets/icons/AWS.png')},
    {name: 'Git', image: require('./src/assets/icons/Git.png')},
    {name: 'WordPress', image: require('./src/assets/icons/WordPress.png')},
    {name: 'Photoshop', image: require('./src/assets/icons/Photoshop.png')},
    {name: 'InDesign', image: require('./src/assets/icons/InDesign.png')}
  ]
};

export const softwareProjects = [
  {
    title: 'Kwik-e-Mart',
    description: 'Mock online grocery store application',
    details: 'Welcome to Kwik-e-Mart, a full stack CRUD application using RESTful API architecture. Users can filter and select groceries for their shopping cart, add a payment method, and edit / confirm their order before checkout.',
    stack: ['Vue', 'Vue Router', 'Node', 'Express', 'Axios', 'Sequelize', 'PostgreSQL'],
    github: [
      {
        link: 'https://github.com/matt-violet/Kwik-E-Mart-frontend',
        repo: 'GitHub Repository - Front End'
      },
      {
        link: 'https://github.com/matt-violet/Kwik-E-Mart-backend',
        repo: 'GitHub Repository - Back End'
      }  
    ],
    image: require('./src/assets/projects/software/kwik-e-mart.png'),
    video: 'https://www.youtube.com/embed/CLBsz0dTiEk'
  },
  {
    title: 'Segment Events',
    description: 'Harnessing the power of user event data',
    details: 'As an intern at Seasoned I integrated Segment events (from Segment\'s Customer Data Platform) to collect data about admin onboarding events. This information is now used by the Data and Marketing teams to drive analytics, A/B testing, and automated marketing campaigns.',
    stack: ['React', 'Segment Library'],
    github: '',
    image: require('./src/assets/projects/software/segment.png'),
    video: require('./src/assets/projects/software/segment.png')
  },
  {
    title: 'Internal Tool',
    description: 'Components for customer service tool',
    details: 'As an intern at Seasoned I developed reusable components for an internal tool for the Customer Service team. In addition to building stylized menus and cards for admins, job seekers, and stores, I implemented GraphQL queries to fetch relevant data from a Postgres database.',
    stack: ['Vue', 'Vuetify', 'GraphQL', 'PostgreSQL'],
    github: '',
    image: require('./src/assets/projects/software/vuetify.png'),
    video:require('./src/assets/projects/software/vuetify.png')
  },
  {
    title: 'Open Restaurant',
    description: 'Photos module for restaurant app',
    details: 'Built responsive image gallery with modal view showing photo details, flagging options, and intuitive navigation. Designed database schema to optimize loading speeds by hosting images in AWS S3 buckets.',
    stack: ['React', 'Styled-Components', 'Express', 'Ajax', 'MongoDB', 'Faker', 'Jest', 'Enzyme', 'Amazon S3'],
    github: 'https://github.com/krummurk/photos-module',
    image: require('./src/assets/projects/software/restaurant.jpg'),
    video: 'https://www.youtube.com/embed/LZBo0UIRxvI'
  },
  {
    title: 'Social Inn',
    description: 'Scaled back end of housing app',
    details: 'Scaled the back end of a room reviews app to handle 10 million records and 100 requests per second. Benchmarked performance of a SQL vs. NoSQL database with 10M records to determine optimal database. Deployed app on AWS and stress tested server to identify performance bottlenecks.',
    stack: ['PostgreSQL', 'Cassandra', 'Express', 'AWS', 'k6', 'New Relic'],
    github: 'https://github.com/social-inn/Reviews',
    image: require('./src/assets/projects/software/bed.jpg'),
    video: require('./src/assets/projects/software/social-in-test.png')
  },
  {
    title: 'Connect Four',
    description: 'Single Page Connect Four Game',
    details: 'Developed game in which two players alternately place pieces into a 7x7 board trying to place 4 adjacent pieces. Implemented animations and dynamically rendering board, game status, and rematch button.',
    stack: ['React', 'CSS animations'],
    github: 'https://github.com/matt-violet/connect4',
    image: require('./src/assets/projects/software/connect-four.png'),
    video: 'https://www.youtube.com/embed/AM0sI6ZqEQw'
  },
  {
    title: 'My Bolus',
    description: 'Insulin dose calculator for diabetics',
    details: 'Developed a full stack application to simulate modern insulin pump dosage algorithms based on user’s meal choice, current blood glucose (bg) level, insulin-to-carb ratio, bg correction factor, future exercise plans, and other factors. Below is a theoretical example of the kind of mental calculations insulin users must perform ahead of every meal.',
    stack: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/matt-violet/My-Bolus',
    image: require('./src/assets/projects/software/vial.jpg'),
    ppt: 'https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing',
    video: 'https://www.youtube.com/embed/OsGm4uK7SEs'
  }
];

export const designProjects = [
  {
    image: require('./src/assets/projects/design/symposium-2019.jpg'),
    description: 'Event Flyer',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/stories-from-the-threshold.jpg'),
    description: 'Event Flyer',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/thinking-out-loud.jpg'),
    description: 'Event Flyer',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/GA-2017.png'),
    description: 'Recruitment Flyer',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/SKSM-banner.jpg'),
    description: 'Retractable Banner',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/GA-2016.png'),
    description: 'Magazine Ad',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/GA-2018.png'),
    description: 'Magazine Ad',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/city-of-dreams.jpg'),
    description: 'General Brochure',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/HLTW-cover.jpg'),
    description: 'Page Layouts',
    isDesignProject: true
  },
  {
    image: require('./src/assets/projects/design/SEAsia.png'),
    description: 'Personal Project',
    isDesignProject: true
  }
];
