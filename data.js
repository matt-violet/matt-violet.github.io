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
    title: 'Dialytics',
    description: 'Diabetes Management Software',
    details: 'Dialytics is a helpful reporting tool for those managing their blood sugar with Dexcom\'s Continuous Glucose Monitoring. It provides real glucose data - obtained from the Dexcom API via the OAuth 2 framework - displayed in easy to read charts, statistics, trends, and device settings.',
    stack: ['React', 'OAuth 2.0', 'Dexcom API', 'flatpickr', 'Google Charts'],
    github: 'https://github.com/matt-violet/dialytics',
    image: require('./src/assets/projects/software/dialytics/thumbnail.png'),
    video: 'https://www.youtube.com/embed/sFRA6nZiswg',
    screenshots: [
      require('./src/assets/projects/software/dialytics/sign-in.png'),
      require('./src/assets/projects/software/dialytics/authentication.png'),
      require('./src/assets/projects/software/dialytics/bg-data.png'),
      require('./src/assets/projects/software/dialytics/device-settings.png')
    ]
  },
  {
    title: 'Kwik-e-Mart',
    description: 'Mock Online Grocery Store App',
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
    image: require('./src/assets/projects/software/kwikemart/kwik-e-mart.png'),
    video: 'https://www.youtube.com/embed/CLBsz0dTiEk',
    screenshots: [
      require('./src/assets/projects/software/kwikemart/grocery.png'),
      require('./src/assets/projects/software/kwikemart/cart.png'),
      require('./src/assets/projects/software/kwikemart/add-payment.png'),
      require('./src/assets/projects/software/kwikemart/confirm.png')
    ]
  },
  {
    title: 'Segment Events',
    description: 'Harnessing the Power of Data',
    details: 'As an intern at Seasoned I took ownership of a sprint to integrate Segment events (from Segment\'s Customer Data Platform) to collect data about admin user onboarding events. This information is now used by the Data and Marketing teams to drive analytics, A/B testing, and automated marketing campaigns.',
    stack: ['React', 'Segment Library'],
    github: '',
    image: require('./src/assets/projects/software/segment.png'),
    video: require('./src/assets/projects/software/segment.png'),
    screenshots: [
      require('./src/assets/projects/software/segment/interview-canceled-applicant.png'),
      require('./src/assets/projects/software/segment/interview-cancelled-admin.png'),
      require('./src/assets/projects/software/segment/interview-requested.png'),
    ]
  },
  {
    title: 'Profile Components',
    description: 'Internal Customer Support Tool',
    details: 'As an intern at Seasoned I developed reusable components for an internal Customer Support tool. In addition to building stylized menus and cards for admins, job seekers, and stores, I implemented GraphQL queries to fetch relevant data from a Postgres database.',
    stack: ['Vue', 'Vuetify', 'GraphQL', 'PostgreSQL'],
    github: '',
    image: require('./src/assets/projects/software/vuetify.png'),
    video:require('./src/assets/projects/software/vuetify.png'),
    screenshots: [
      require('./src/assets/projects/software/internaltool/candidate-card.png'),
      require('./src/assets/projects/software/internaltool/applications.png'),
    ]
  },
  {
    title: 'Open Restaurant',
    description: 'Photos Module for Restaurant App',
    details: 'For this team project I contributed a responsive image gallery component for a restaurant reviews application. When an individual photo is clicked, the user enters a full-screen modal carousel view that includes photo details, flagging options, and intuitive navigation arrows. Images are hosted in AWS S3 buckets.',
    stack: ['React', 'Styled-Components', 'Express', 'Ajax', 'MongoDB', 'Faker', 'Jest', 'Enzyme', 'Amazon S3'],
    github: 'https://github.com/krummurk/photos-module',
    image: require('./src/assets/projects/software/restaurant.jpg'),
    video: 'https://www.youtube.com/embed/LZBo0UIRxvI',
    screenshots: [
      require('./src/assets/projects/software/openrestaurant/gallery.png'),
      require('./src/assets/projects/software/openrestaurant/modal-view.png'),
      require('./src/assets/projects/software/openrestaurant/flag.png'),
    ]
  },
  {
    title: 'Social Inn',
    description: 'Scaled Back End of Housing App',
    details: 'This was a team project in which I inherited legacy code for a housing review application and was tasked with scaling the back end to handle realistic volumes of data and web traffic, which my team defined as 10 million database records and 100 requests per second. Given the rigid/uniform structure of the data (all room reviews have the same properties that take the same data type), I suspected that a SQL database would be most appropriate, but I decided to test a SQL database (Postgres) versus a NoSQL database (Cassandra) to find the fastest query speeds for my use case. As I suspected, Postgres outperformed Cassandra initially. After adding a secondary index to the room_id property, Postgres achieved an average latency of 3 milliseconds (versus 18 with Cassandra) and 400 requests per second (versus 150 with Cassandra). To further improve performance, I implemented load balancers to distribute requests among multiple servers.',
    stack: ['PostgreSQL', 'Cassandra', 'Express', 'AWS', 'k6', 'New Relic'],
    github: 'https://github.com/social-inn/Reviews',
    image: require('./src/assets/projects/software/social-inn.jpg'),
    video: require('./src/assets/projects/software/social-in-test.png')
  },
  {
    title: 'Connect Four',
    description: 'Two Player Game',
    details: 'Connect Four was a classic project I used to familiarize myself with the React library. It is a popular game in which two players alternately place pieces into a 7x7 board trying to place 4 adjacent pieces. I implemented animations and a dynamically rendering board, game status, and rematch button.',
    stack: ['React', 'CSS animations'],
    github: 'https://github.com/matt-violet/connect4',
    image: require('./src/assets/projects/software/connect-four.png'),
    video: 'https://www.youtube.com/embed/AM0sI6ZqEQw',
    screenshots: [
      require('./src/assets/projects/software/connect4/choose-side.png'),
      require('./src/assets/projects/software/connect4/board.png'),
      require('./src/assets/projects/software/connect4/rematch.png'),
    ]
  },
  {
    title: 'My Bolus',
    description: 'Insulin Dose Calculator',
    details: 'For diabetics, "bolus" is the subcutaneous administration of insulin to handle a rise in blood glucose following meals. This full stack application simulates modern insulin pump dosage algorithms based on user’s meal choice, current blood glucose (bg) level, insulin-to-carb ratio, bg correction factor, future exercise plans, and other factors.',
    stack: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/matt-violet/My-Bolus',
    image: require('./src/assets/projects/software/vial.jpg'),
    ppt: 'https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing',
    video: 'https://www.youtube.com/embed/OsGm4uK7SEs',
    screenshots: [
      require('./src/assets/projects/software/mybolus/sign-in.png'),
      require('./src/assets/projects/software/mybolus/input.png'),
      require('./src/assets/projects/software/mybolus/results.png'),
    ]
  }
];

export const designProjects = [
  {
    images: [require('./src/assets/projects/design/symposium-2019.jpg')],
    description: 'Event Flyer',
    details: 'Event Flyer, 2019',
    isDesignProject: true
  },
  {
    images: [require('./src/assets/projects/design/stories-from-the-threshold.jpg')],
    description: 'Event Flyer',
    details: 'Event Flyer, 2018',
    isDesignProject: true
  },
  {
    images: [require('./src/assets/projects/design/thinking-out-loud.jpg')],
    description: 'Event Flyer',
    details: 'Event Flyer, 2018',
    isDesignProject: true
  },
  {
    images: [require('./src/assets/projects/design/GA-2017.png')],
    description: 'Recruitment Flyer',
    details: 'Recruitment Flyer, 2018',
    isDesignProject: true
  },
  {
    images: [require('./src/assets/projects/design/SKSM-banner.jpg')],
    description: 'Retractable Banner',
    details: '8-foot Retractable Banner, 2017',
    isDesignProject: true
  },
  {
    images: [require('./src/assets/projects/design/GA-2016.png')],
    description: 'Magazine Ad',
    details: 'Ad in UU World Magazine, 2016',
    isDesignProject: true
  },
  {
    images: [require('./src/assets/projects/design/GA-2018.png')],
    description: 'Magazine Ad',
    details: 'Ad in UU World Magazine, 2018',
    isDesignProject: true
  },
  {
    images: [require('./src/assets/projects/design/city-of-dreams.jpg')],
    description: 'General Brochure',
    details: 'General Brochure, 2012',
    isDesignProject: true
  },
  {
    images: [
      require('./src/assets/projects/design/HLTW-cover.jpg'),
      require('./src/assets/projects/design/HLTW-page.jpg'),
      require('./src/assets/projects/design/HLTW-credit.jpg'),      
    ],
    description: 'Page Layouts',
    details: 'Designed page layouts for the book "Hunter Leads the Way", 2017',
    isDesignProject: true
  },
  {
    images: [require('./src/assets/projects/design/SEAsia.png')],
    description: 'Personal Project',
    details: 'Graphic for Personal Project, 2015',
    isDesignProject: true
  }
];

export const backgroundImages = [
  require("./src/assets/bay.jpg"),
  require("./src/assets/matt-sksm.png"),
  require("./src/assets/pump.png"),
  require("./src/assets/matt-nyc.png"),
  require("./src/assets/skate.jpg")
];
