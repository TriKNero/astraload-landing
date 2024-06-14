const Constants = {
  calendarUrl:
    "https://calendly.com/astraload-ceo/30min?hide_event_type_details=1&primary_color=ffa600",

  navigationLinks: [
    {
      to: "/",
      children: "Astraload perf team",
      isGatsbyLink: true,
    },
    // {
    //   to: "/astraload-saas/",
    //   children: "Astraload SAAS",
    //   isGatsbyLink: true,
    // },
  ],

  tools: [
    "tool1",
    "tool2",
    "tool3",
    "tool4",
    "tool5",
    "tool6",
    "tool7",
    "tool8",
    "tool9",
    "tool10",
    "tool11",
    "tool12",
  ],

  companies: [
    { name: "techGC", url: "https://techgc.co" },
    { name: "knotel", url: "https://knotel.com" },
    { name: "knotable", url: "https://knotable.com" },
  ],

  performanceImage: [
    {
      title: "Initial research",
      description:
        "First, we carefully listen to you to identify" +
        " problems you have. Then we assess your" +
        " web application to learn about its tech " +
        "stack and server setup. We will also run " +
        "few simple tests to identify trivial " +
        "performance issues should they exist.",
    },

    {
      title: "Load testing environment preparation ",
      description:
        "Then we’ll focus on creating conditions for " +
        "load testing: do we need a separate testing " +
        "environment, how to create test users if we " +
        "need, how to reset database state, how to " +
        "accurately emulate your users behavior.",
    },

    {
      title: "Performance improvement loop",
      description:
        "1. Run tests & collect metrics\n" +
        "2. Study the metrics and find bottlenecks \n" +
        "3. Fix the bottlenecks and repeat",
    },
  ],
  whatWeDoSection: {
    title: "What we do",
    description: `We focus on performance optimization of web apps - particularly single page
    applications built with Meteor and GraphQL.`,
  },
  singlePageSupport: {
    title: `Single page applications first
     class support`,
    description: `It is especially beneficial for single page applications built with technologies like Meteor and
     GraphQL as you cannot predict UX only taking into consideration results of REST API load testing or
      initial page load metrics.`,
    description2: `Astraload tracks users paths, websocket and GraphQL, resources origins
    to help you see where UX may have been degraded.`,
  },
  saasIntelligantAssiatant: {
    title: "Intelligent assistant",
    description: `Simple performance drawbacks are highlighted by a built-in intelligent assistant. It covers more
    scenarios on every new release. More complex cases will require attention of performance
    optimization professionals.`,
  },
  howWeDifferent: {
    title: "How we’re different",
    description: `We’re not limiting optimization by ‘page load’ or ‘API metrics’, on the contrary we consider the full
    spectrum of UX performance issues that might affect users of your website.`,
  },
  ourTools: {
    title: "We keep our eyes open",
    description: `Before we created our own tool, we built solid experience applying other industry standard tools
    for digging into web apps internals and discovering hidden bottlenecks in frontend, backend,
    database or in deployment setup.`,
  },
  callToActionBlock: {
    title: `Want to be sure in your webapp
    performance?`,
    description: `Either your webapp is already live and you already experience performance issues or maybe you’re
    just planning to make sure your website will handle more intense load - we can help you. There are
    many ways get in touch with us.`,
  },
  saasCallToActionBlock: {
    title: `Let’s get started`,
    description: `Astraload is currently in private beta. Contact us to start getting advanced insights on your
    webapp performance! There are many ways you can get in touch with us:`,
  },
  feedBackBlock: {
    title: "Join a good company of our clients",
    feedbacks: [
      {
        logoName: "selfleaders",
        link: "https://selfleaders.com",
        clientData: {
          name: "Dominic Von Martens",
          company: "Product Manager @ Selfleaders",
        },
        feedback:
          "«In short order Astraload team managed to achieve what previously seemed absolutely impossible! Thanks to their involvement we're now able to implement our most optimistic strategy»",
      },
      {
        logoName: "rabbit",
        link: "https://selfleaders.com",
        clientData: {
          name: "Max Hodges",
          company: "Founder/director @ White Rabbit Japan",
        },
        feedback:
          "«Hey btw if you guys need help with performance issues these guys are good. @eluck and his consulting services team helped identify and fix some rogue publications that there causing occasional crashes that were driving us nuts.»",
      },
      {
        logoName: "tgc",
        link: "https://selfleaders.com",
        clientData: {
          name: "Harrison Hunter",
          company: "CTO MaestroQA",
        },
        feedback:
          "«What I truly appreciate with the team at Astraload is not just a high degree of skill and ownership but the desire to evolve and improve. The team is always thinking about how they can level up themselves and our collaboration, and pushes us to improve our practices to achieve the best outcomes»",
      },
    ],
  },
  advantages: {
    title: "Astraload SaaS",
    description: `Specifically for that, we’ve built Astraload SAAS - a UX
             testing tool working on a scale of thousands of users with first class
             Meteor and GraphQL data layers support.`,
  },
  saasHeader: {
    title: "Astraload SaaS",
    description: `A load testing and performance analytics tool with first
    class Meteor and GraphQL data layers support.`,
  },
  saasWhatItDoes: {
    title: "What it does",
    description: `Its runs thousands of emulated users and gathers various statistics from every
    single of them to present it in readable and understandable form.`,
  },
  keyWords:
    "load testing tools, load testing software, load testing framework, load testing service, load testing website, load testing applications, load and performance testing, performance optimization, stress and load testing, load testing for websites, performance analytics tool, meteor, graphql, performance analytics tool, high performance analytics, astraload, meteor and graphql, scale single page application, performance optimization of web apps, UX performance, astraload team, ux performance testing, node js performance, node js performance analysis, node js performance testing, performance team, team performance analysis, perf team, meteor optimization",
}

export { Constants }
