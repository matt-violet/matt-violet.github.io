export const skills = {
  frontend: [
    {name: 'HTML5', image: require('./src/assets/icons/HTML5.png')},
    {name: 'CSS3', image: require('./src/assets/icons/CSS3.png')},
    {name: 'JavaScript', image: require('./src/assets/icons/JavaScript.png')},
    {name: 'React / Redux', image: require('./src/assets/icons/React.png')},
    {name: 'Vue / Vuex', image: require('./src/assets/icons/Vue.png')},
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
  additional: [
    {name: 'Git', image: require('./src/assets/icons/Git.png')},
    {name: 'AWS', image: require('./src/assets/icons/AWS.png')},
    {name: 'Webpack', image: require('./src/assets/icons/webpack.png')},
    {name: 'WordPress', image: require('./src/assets/icons/WordPress.png')},
    {name: 'Photoshop', image: require('./src/assets/icons/Photoshop.png')},
    {name: 'InDesign', image: require('./src/assets/icons/InDesign.png')}
  ]
};

export const softwareProjects = [
  {
    title: 'Dialytics',
    type: 'Personal Project',
    description: 'Glucose Reporting Tool',
    details: 'Dialytics is an analytics reporting tool that fetches and manipulates glucose data obtained from Continuous Glucose Monitoring (CGM) devices made by Dexcom, a popular choice among diabetics. I\'ll explain how Dialytics uses that data momentarily. What is CGM? It\'s what\'s on my arm in that photo you may have seen back there. CGM allows people to track their blood sugar levels 24/7 via a tiny sensor wire inserted under the skin that transmits readings wirelessly to a receiver (once every five minutes). So in order to use Dialytics, users are prompted to sign in to their Dexcom account. Once a user has been authenticated, Dialytics fetches their glucose data from the Dexcom API, via the OAuth 2 framework, and provides an easily digestible dashboard of charts, trends, statistics, and device settings. While the device settings are provided directly from the Dexcom API, I took it upon myself to calculate all of the statistics provided -- average glucose, time in range, average standard deviation, and change since prior XX period -- based on large quantities of glucose readings. I verified my calculations based on numbers from the actual Dexcom Clarity app I use regularly. The information provided by Dialytics empowers users to make healthy choices and stay on top of their glucose management.',
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
    type: 'Personal Project',
    description: 'e-Commerce Web App',
    details: 'Kwik-e-Mart is a mock e-commerce web application using RESTful API architecture. Users can browse dozens of grocery products, filter items by categories, increment / decrement the quantity of each item in their shopping cart, add a payment method (with basic form validation), and edit / confirm orders before completing their purchase. Kwik-e-Mart is inspired by (not only The Simpsons, but) the pandemic-induced shift to online grocery shopping, and what I consider less-than-ideal user experiences on certain grocery websites that will remain anonymous. The ease of Kwik-e-Mart\'s shopping experience is unmatched.',
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
    type: 'Internship Project',
    description: 'Data & OOP',
    details: 'As an intern at Seasoned I took ownership of a sprint integrating a 3rd party library (Segment) to collect specific data about admin users and their actions as they navigate the onboarding flow. It involved locating relevant properties (such as user demographics or whether a user has performed a particular action on a given page), attaching them to a single object in the proper format, and including that object in an API call. The information I gathered is now used by the Data and Marketing teams to drive analytics, A/B testing, and automated marketing campaigns. This experience gave me a deeper understanding of object-oriented programming and features like ES6\'s destructuring and spread operator syntax. It also contributed to a 6% increase in daily active users in just a few weeks.',
    stack: ['React', 'Segment Library'],
    github: '',
    image: require('./src/assets/projects/software/segment.png'),
    video: '',
    screenshots: [
      // require('./src/assets/projects/software/segment/interview-canceled-applicant.png'),
      // require('./src/assets/projects/software/segment/interview-cancelled-admin.png'),
      // require('./src/assets/projects/software/segment/interview-requested.png'),
    ]
  },
  {
    title: 'Profile Components',
    type: 'Internship Project',
    description: 'Customer Support Tool',
    details: 'As an intern at Seasoned I developed components for an internal Customer Support tool. The task gave me an opportunity to familiarize myself with two new programming languages as well as microservices architecture. I built things like stylized menus and profiles for admins, job seekers, and businesses. I also interacted with the Postgres database on the back end, implementing various CRUD operations with GraphQL. I had several key takeaways from this experience. First, it introduced me to a powerful front end framework, Vue, which I have now used for several projects (including the website you\'re looking at). It also introduced me to a new query language, GraphQL, which I really liked because it can significantly improve performance by delivering only the data that is explicitly requested and nothing more, in a single request, thereby lowering payloads and server stress. Accomplishing this task as an intern showed my ability to overcome the hurdle of learning new programming languages and deliver results.',
    stack: ['Vue', 'Vuetify', 'GraphQL', 'PostgreSQL'],
    github: '',
    image: require('./src/assets/projects/software/profile.png'),
    video:'',
    screenshots: [
      // require('./src/assets/projects/software/internaltool/candidate-card.png'),
      // require('./src/assets/projects/software/internaltool/applications.png'),
    ]
  },
  {
    title: 'Open Restaurant',
    type: 'Personal Project',
    description: 'Photos Module',
    details: 'For this team project I contributed a responsive image gallery component for a restaurant reviews application. For development and testing purposes, I worked with royalty-free stock images which I hosted on Amazon Web Services in S3 Buckets. The module uses an identification number found in the address bar to retrieve the photo array for the particular restaurant, greeting users with a clean and responsive photo grid. Clicking an individual photo triggers an event that brings the user to a full-screen modal carousel view. The modal view includes photo details (date posted, username of the poster), flagging options, navigation arrows, and a close button. Clicking the next / previous arrows preserves the same order of photos as seen in the initial gallery view, giving users an inutitive experience. Upon completion, my photos module was joined with three other components (restaurant details, ratings, and booking calendar) to complete the Open Table reviews application.',
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
    type: 'Personal Project',
    description: 'Database Scaling',
    details: 'This was a team project in which I inherited legacy code for a housing review application and was tasked with scaling the back end to handle realistic volumes of data and web traffic, which my team defined as 10 million database records and 100 requests per second. Given the rigid/uniform structure of the data (all room reviews have the same properties that take the same data type), I suspected that a SQL database would be most appropriate, but I decided to test a SQL database (Postgres) versus a NoSQL database (Cassandra) to find the fastest query speeds for my use case. As I suspected, Postgres outperformed Cassandra initially. After adding a secondary index to the room_id property, Postgres achieved an average latency of 3 milliseconds (versus 18 with Cassandra) and 400 requests per second (versus 150 with Cassandra). To further improve performance, I implemented load balancers to distribute requests among multiple servers.',
    stack: ['PostgreSQL', 'Cassandra', 'Express', 'AWS', 'k6', 'New Relic'],
    github: 'https://github.com/social-inn/Reviews',
    image: require('./src/assets/projects/software/social-inn.jpg'),
    screenshots: [
      require('./src/assets/projects/software/social-in-test.png')
    ]
  },
  // {
  //   title: 'Connect Four',
  //   description: 'Two Player Game',
  //   details: 'Connect Four was a classic project I used to familiarize myself with the React library. It is a popular game in which two players alternately place pieces into a 7x7 board trying to place 4 adjacent pieces. I implemented animations and a dynamically rendering board, game status, and rematch button.',
  //   stack: ['React', 'CSS animations'],
  //   github: 'https://github.com/matt-violet/connect4',
  //   image: require('./src/assets/projects/software/connect-four.jpg'),
  //   video: 'https://www.youtube.com/embed/AM0sI6ZqEQw',
  //   screenshots: [
  //     require('./src/assets/projects/software/connect4/choose-side.png'),
  //     require('./src/assets/projects/software/connect4/board.png'),
  //     require('./src/assets/projects/software/connect4/rematch.png'),
  //   ]
  // },
  // {
  //   title: 'My Bolus',
  //   description: 'Insulin Dose Calculator',
  //   details: 'For diabetics, "bolus" is the subcutaneous administration of insulin to handle a rise in blood glucose following meals. This full stack application simulates modern insulin pump dosage algorithms based on user’s meal choice, current blood glucose (bg) level, insulin-to-carb ratio, bg correction factor, future exercise plans, and other factors.',
  //   stack: ['React', 'Express', 'MongoDB'],
  //   github: 'https://github.com/matt-violet/My-Bolus',
  //   image: require('./src/assets/projects/software/vial.jpg'),
  //   ppt: 'https://drive.google.com/file/d/1D8tp35PoCCbMzuWLTPHFI5oGN7nFhIQ1/view?usp=sharing',
  //   video: 'https://www.youtube.com/embed/OsGm4uK7SEs',
  //   screenshots: [
  //     require('./src/assets/projects/software/mybolus/sign-in.png'),
  //     require('./src/assets/projects/software/mybolus/input.png'),
  //     require('./src/assets/projects/software/mybolus/results.png'),
  //   ]
  // }
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
  // {
  //   images: [require('./src/assets/projects/design/GA-2016.png')],
  //   description: 'Magazine Ad',
  //   details: 'Ad in UU World Magazine, 2016',
  //   isDesignProject: true
  // },
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

export const aboutImgs = [
  require('./src/assets/pump.png'),
  require('./src/assets/showing-pump.jpg')
];
