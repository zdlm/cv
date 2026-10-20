/*
  All text on the site lives here, in three languages.
  Edit this file to update the CV; index.html and main.js only handle layout.
  Dates are "YYYY-MM". A job with to: null is current.
*/
window.SITE = {
  email: "zhangdl12@gmail.com",
  github: "https://github.com/zdlm",
  linkedin: "https://www.linkedin.com/in/leo-zhang-95a01453/",
  movedToCopenhagen: "2015-06",
  timelineStart: "2002-06",

  /* Bricks on the wall that are not jobs or degrees */
  side: [
    { id: "guide", from: "2017-12", to: null }
  ],
  /* Teaching row on the wall */
  teach: [
    { id: "chinese", from: "2024-08", to: null, href: "#teaching" },
    { id: "coach", from: "2026-01", to: null, href: "#coaching" }
  ],
  coaching: {
    hired: 4,
    inProgress: 5,
    videos: [
      "https://youtu.be/CeOiDTZN9x4",
      "https://youtu.be/jSTNdwC3wAs",
      "https://youtu.be/iymXtTAIkcg",
      "https://youtu.be/0a1ZY7FEKqw",
      "https://youtu.be/dYAougKL_Mc"
    ]
  },
  ai: {
    tools: ["Claude", "Claude Code", "GitHub Copilot", "Codex", "ChatGPT", "Typeless"],
    featured: ["wechat", "storyteller", "lego"],
    /* AI projects, grouped. Text lives in CONTENT[lang].ai.items[id] */
    groups: [
      { id: "media", items: ["wechat", "video", "storyteller", "lego", "news"] },
      { id: "data", items: ["jobs", "boliga"] },
      { id: "products", items: ["collector", "exam", "site", "taobao"] },
      { id: "early", items: ["tweets"] }
    ],
    items: {
      wechat: { at: "2026-06", year: "2026", tools: ["Claude Code", "Python", "WeChat API", "Blogger API"] },
      video: { at: "2026-08", year: "2026", tools: ["Whisper (MLX)", "ffmpeg", "Python"] },
      storyteller: { at: "2026-09", year: "2026", tools: ["Claude", "Edge TTS", "jieba", "pypinyin"] },
      lego: { at: "2026-09", year: "2026", tools: ["Claude Code", "Python", "Remotion"], link: "https://github.com/zdlm/lego-builder" },
      news: { at: "2023-11", year: "2023–2026", tools: ["ChatGPT", "Python", "YouTube API", "Twitter API"] },
      jobs: { at: "2026-09", year: "2026", tools: ["Python", "Claude"] },
      boliga: { at: "2026-09", year: "2026", tools: ["Claude scheduled tasks", "Python"] },
      collector: { at: "2026-09", year: "2026", tools: ["Chrome extension", "FastAPI", "SQLite"] },
      exam: { at: "2026-06", year: "2026", tools: ["Claude Code", "Python"] },
      site: { at: "2026-10", year: "2026", tools: ["Claude", "HTML", "CSS", "JavaScript"], link: "https://github.com/zdlm/cv" },
      taobao: { at: "2026-09", year: "2026", tools: ["Claude Code"] },
      tweets: { at: "2023-04", year: "2023", tools: ["ChatGPT", "Python"], link: "https://github.com/zdlm/Tweets" },
    }
  },
  course: {
    youtube: "https://www.youtube.com/@ai_of_tomorrow",
    youtubeHandle: "@ai_of_tomorrow",
    youtubeName: "AI时代求职",
    youtubeSubs: 3505,
    coursePlaylist: "https://www.youtube.com/playlist?list=PLHf-InyT-CgMuleInBSgpUdSbGtSCUSAt",
    qaPlaylist: "https://www.youtube.com/playlist?list=PLR8haqfRmLgo",
    xhs: "https://www.xiaohongshu.com/user/profile/5d2454c5000000001200d4e0",
    xhsId: "307903292",
    /* first video of each part, and the lessons it covers */
    modules: [
      { from: 1, to: 5, video: "https://youtu.be/vIaMb-L7TU8" },
      { from: 6, to: 8, video: "https://youtu.be/xNYExVI7BHs" },
      { from: 9, to: 15, video: "https://youtu.be/aEnvLnpPptM" },
      { from: 16, to: 21, video: "https://youtu.be/8VMFk7zfSNM" },
      { from: 22, to: 33, video: "https://youtu.be/bybZ9i5ruTQ" },
      { from: 34, to: 38, video: "https://youtu.be/bf0IL0dW8pg" },
      { from: 39, to: 43, video: "https://youtu.be/q50xs0SuCFg" }
    ],
    qa: [
      { zh: "简历石沉大海，投 200 份没有一个回音", url: "https://youtu.be/-VaIrG1xFZA" },
      { zh: "ATS 到底怎么工作", url: "https://youtu.be/FEeX7LUceF4" },
      { zh: "简历要不要放照片、年龄、性别、婚姻状况（中外规则完全相反）", url: "https://youtu.be/DABc6VjRevM" }
    ]
  },
  teaching: {
    school: "灵比中文学校",
    url: "https://zhongwen.dk/",
    teacherPage: "https://zhongwen.dk/teachers/"
  },
  /* 生活在丹麦 numbers, read from the WeChat admin on 20 Oct 2026 */
  denmark: {
    accountId: "live_in_denmark",
    since: "2017-12",
    stats: { posts: 1885, followers: 23861, readers: 86156, top: 14001 },
    blog: { url: "https://bordanmark.blogspot.com/", label: "bordanmark.blogspot.com", posts: 559, views: 52505 }
  },
  jobs: [
    { id: "lego", from: "2023-04", to: null, tags: ["Node.js", "AWS", "Databricks", "Spark", "Web APIs"] },
    { id: "zeronorth", from: "2020-06", to: "2023-04", tags: ["Python", "Django", "React"] },
    { id: "maersk", from: "2020-03", to: "2020-06", tags: ["Python", "Django", "React"] },
    { id: "tradeshift", from: "2015-06", to: "2020-02", tags: ["JavaScript", "Web Components", "React", "Redux", "Angular"] },
    { id: "wangli", from: "2014-07", to: "2015-05", tags: ["Python", "Django", "CoffeeScript"] },
    { id: "cloump", from: "2013-08", to: "2014-06", tags: ["Python", "Django", "Cassandra", "Redis", "Kibana"] },
    { id: "cicc", from: "2010-01", to: "2013-08", tags: ["C#", "ASP.NET MVC", "SharePoint", "Dojo"] },
    { id: "nmc", from: "2009-06", to: "2010-01", tags: ["C#", "ASP.NET"] },
    { id: "bistone", from: "2006-04", to: "2008-06", tags: ["C#", "ASP.NET", "SQL Server"] }
  ],
  // Jobs that started before this month fold into "Earlier roles" under Work
  earlierBefore: "2013-01",
  edu: [
    { id: "ustc", from: "2008-08", to: "2010-01" },
    { id: "sdut", from: "2002-09", to: "2006-07" }
  ],
  /* Recent articles, linked to the public blog version */
  denmarkRecent: [
    { zh: "丹麦工签门槛降到32.2万，中国上了名单", url: "https://bordanmark.blogspot.com/2026/10/322.html" },
    { zh: "乐高夺冠，诺和诺德跌出丹麦年轻人最爱雇主前二", url: "https://bordanmark.blogspot.com/2026/10/blog-post_16.html" },
    { zh: "诺和诺德一年减员逾七千，丹麦生命科学人才市场正在洗牌", url: "https://bordanmark.blogspot.com/2026/09/blog-post_20.html" },
    { zh: "哥本哈根公寓挂牌量同比暴涨94%", url: "https://bordanmark.blogspot.com/2026/10/94.html" }
  ],
  projects: [
    // diagram: a small picture in the card that draws itself as you read (main.js DIAGRAMS)
    { id: "cdp", diagram: "cdp" },
    { id: "zeronorth", diagram: "route" },
    { id: "tsui", favourite: true, links: [
      ["GitHub", "https://github.com/tradeshift/elements"],
      ["ui.tradeshift.com", "https://ui.tradeshift.com/"]
    ] },
    { id: "chrome", links: [["Demo", "http://chrome.sampi.io"]] }
  ],
  toolbox: {
    ai: ["Claude", "Claude Code", "GitHub Copilot", "Codex", "ChatGPT", "Typeless", "Generative AI", "Machine learning"],
    frontend: ["JavaScript", "React", "Redux", "Preact", "Angular", "Web Components", "Node.js"],
    backend: ["Python", "Django", "Node.js", "C#", "ASP.NET MVC"],
    data: ["AWS", "Azure Databricks", "Apache Spark", "NoSQL", "Redis", "Cassandra", "SQL Server", "Kibana"]
  }
};

window.CONTENT = {
  /* ───────────────────────── English ───────────────────────── */
  en: {
    meta: {
      title: "Leo Zhang · Full-stack engineer, all in on AI",
      description: "Leo Zhang is a full-stack developer with nearly 20 years of experience, first in Beijing and since 2015 in Copenhagen."
    },
    ui: {
      nav: { ai: "AI", work: "Work", projects: "Projects", years: "Years", contact: "Contact", denmark: "Live in Denmark", teaching: "Teaching", coaching: "Coaching" },
      beyond: "Outside work",
      filterAll: "All",
      tabCourse: "Free course",
      tabsLabel: "Outside work",
      quick: [["20", "years building software"], ["LEGO", "customer data platform"], ["12", "AI projects since 2023"], ["3", "languages: Chinese, English, Danish"]],
      skip: "Skip to content",
      now: "now",
      wallTitle: "Twenty years, brick by brick",
      wallIntro: "Each row tells part of the story. Hover over or select a year marker for its note, or select any brick for details.",
      wallKey: "Grey bricks are Beijing, borrowed from the hutong walls. Coloured bricks are Copenhagen, borrowed from the houses on Nyhavn.",
      courses: { year: "Year by year", ai: "AI projects", side: "On the side", teach: "Teaching", work: "Work", study: "Study" },
      moved: "Beijing → Copenhagen",
      earlierJobs: "Earlier roles",
      selected: "Selected",
      openProject: "Open",
      readMore: "Read more",
      workTitle: "Work",
      inMyWords: "Looking back",
      projectsTitle: "Things I've built",
      otherProjects: "At work",
      favourite: "My favourite",
      toolboxTitle: "Toolbox",
      toolbox: { frontend: "Frontend", backend: "Backend", data: "Data and cloud", ai: "AI" },
      eduTitle: "Education",
      contactTitle: "Say hej",
      contactText: "I like making friends. If we're working towards the same thing, write to me.",
      copy: "Copy email",
      copied: "Copied",
      footer: "Built by hand with HTML, CSS and a little JavaScript. Hosted on GitHub Pages.",
      langName: "English"
    },
    hero: {
      hello: "Hi, I'm Leo.",
      lede: "AI-first full-stack engineer at the LEGO Group, building the customer data platform and applying AI to how software gets made.",
      aside: "I use AI for code review, onboarding and everyday writing. Since going all in during 2025, I've built 12 projects across writing, teaching, job search and housing.",
      location: "Copenhagen, Denmark",
      languages: "Chinese, English, Danish (PD3)"
    },
    jobs: {
      lego: {
        org: "LEGO Group", role: "Senior full-stack engineer", city: "Copenhagen",
        body: "I build the Customer Data Platform for the LEGO Group. That means a scalable data architecture and pipelines that join data from many upstream systems into 360-degree customer profiles. Marketing teams use the audience segments for campaigns and for personalised experiences on lego.com.",
        note: "The platform went live in 2024 after two years of hard work."
      },
      zeronorth: {
        org: "ZeroNorth", role: "Full-stack engineer", city: "Copenhagen",
        body: "ZeroNorth started as a team inside Maersk Tankers and became its own company, with the goal of making global trade greener. I worked on the platform that optimises vessel speed, weather routing and bunker planning, so shipping companies burn less fuel and emit less CO₂.",
        note: ""
      },
      maersk: {
        org: "Maersk Tankers", role: "Full-stack engineer", city: "Copenhagen",
        body: "I joined the digital department in March 2020. A few months later our team was carved out as a new company, ZeroNorth.",
        note: ""
      },
      tradeshift: {
        org: "Tradeshift", role: "Senior software engineer", city: "Copenhagen",
        body: "My first job in Denmark. I was responsible for four frontend projects: Tradeshift UI, Tradeshift Elements, Tradeshift Chrome and Tradeshift IO. I built the frontend framework of the platform and moved old vanilla JavaScript components to Web Components, so developers inside and outside Tradeshift could build apps faster.",
        note: "I learned a lot from smart colleagues, my English got better every year, and many colleagues became good friends."
      },
      wangli: {
        org: "Wangli", role: "Senior lead software engineer", city: "Beijing",
        body: "My first management role. When the head of engineering left to start another company, I rebuilt the engineering department, hired and led almost 20 developers, and got the platform live on time.",
        note: "I still wrote code every night after the meetings. I really like being a developer."
      },
      cloump: {
        org: "Cloump", role: "Senior web engineer", city: "Beijing",
        body: "Cloump is short for \"cloud and jump\". We monitored and analysed Chinese social media such as Sina Weibo to measure brand equity and find influencers. I built the big data platform from open-source tools, a shop website, and data visualisations in Kibana.",
        note: "My first startup. It taught me that you can build a whole big data system from open source. The company ran out of money a year later."
      },
      cicc: {
        org: "CICC", role: "Software engineer", city: "Beijing",
        body: "China International Capital Corporation is one of China's leading investment banks. I designed data models for the whole company, built a content management system on SharePoint, and developed internal systems for investment banking, private equity, expenses and PR.",
        note: "I joined straight after my master's degree and made many good friends there."
      },
      nmc: {
        org: "NMC", role: "Intern", city: "Beijing",
        body: "Built internal systems in C# and ASP.NET during my master's degree.",
        note: ""
      },
      bistone: {
        org: "BIStone", role: "Software engineer", city: "Beijing",
        body: "A data analytics company where I learned BI, SQL and data warehousing. I worked on three systems: web data collection, e-touch, and satisfaction analysis.",
        note: ""
      }
    },
    edu: {
      ustc: {
        school: "University of Science and Technology of China", short: "USTC",
        degree: "Master's, Software Engineering",
        note: "GPA in the top 10%. Prize winner in the Microsoft Imagine Cup, six scholarships, and three software competitions."
      },
      sdut: {
        school: "Shandong University of Technology", short: "SDUT",
        degree: "Bachelor's, Computer Science and Technology",
        note: ""
      }
    },
    teach: {
      chinese: { label: "Chinese class", text: "Since 2024: teaching Chinese on Saturdays to children aged 10 and up who start from zero." },
      coach: { label: "Job coaching", text: "Since 2026: one-to-one coaching for people looking for jobs in Denmark. Four have found jobs so far, and five are in coaching now." }
    },
    side: {
      guide: { label: "生活在丹麦", text: "Since December 2017: a daily Chinese publication about Denmark, now with almost 24,000 followers." }
    },
    denmark: {
      title: "生活在丹麦 · Live in Denmark",
      lede: "Daily Chinese writing on work, housing and life in Denmark, for readers in Denmark and China.",
      stats: {
        posts: "posts since December 2017",
        followers: "followers on WeChat",
        readers: "readers in the last 30 days",
        top: "readers of one article, October 2026"
      },
      topicsTitle: "What I write about",
      topics: [
        "Work and companies",
        "Housing and everyday life",
        "Visas, tax and public policy"
      ],
      recentTitle: "Recent articles",
      recent: [
        "Work-permit salary threshold falls; China is included",
        "LEGO tops young Danes' favourite employers",
        "Novo Nordisk cuts 7,000 jobs; life-science hiring shifts",
        "Copenhagen apartment listings rise 94%"
      ],
      coachTitle: "Videos and live Q&A",
      coach: "Short job-search videos and a weekly live Q&A on WeChat Channels.",
      audience: "Readers in 107 countries and regions; about two thirds are aged 26–45.",
      note: "Written and produced alongside my full-time job.",
      channelsTitle: "Where to read it",
      channels: {
        wechat: { name: "WeChat", text: "Search 生活在丹麦 for daily posts, videos and the weekly Q&A." },
        blog: { name: "Blog", text: "Open-web archive: {posts} posts and {views} views." }
      }
    },
    teaching: {
      title: "Saturday mornings: teaching Chinese",
      lede: "I teach beginner Chinese to children at Lingbi Chinese School in Virum, north of Copenhagen.",
      facts: [
        ["When", "Saturdays, 10:00–12:45"],
        ["Where", "Fuglsanggårdsskolen, Virum"],
        ["Who", "Ages 10 and up, no Chinese needed"],
        ["Class size", "Fewer than 10 students"],
        ["Since", "2024"]
      ],
      planTitle: "Three lessons, three jobs",
      plan: [
        ["First lesson", "Pinyin, grammar and new characters."],
        ["Second lesson", "Speaking, pronunciation and word games."],
        ["Third lesson", "Stories about history, technology and culture."]
      ],
      extrasTitle: "Outside the textbook",
      extras: [
        "A weekly 60-second voice message in Chinese.",
        "An interactive class page for pinyin and character practice.",
        "Parents get a short written and video recap after class."
      ],
      quote: "Language is a tool. Once students can use it, they can explore Chinese culture themselves, and interest becomes the real reason they keep learning.",
      quoteSource: "From my teacher profile at the school",
      link: "About the school and its teachers"
    },
    coaching: {
      title: "One-to-one job coaching",
      lede: "I coach people one-to-one through the Danish job market, focusing on positioning, CVs and applications.",
      stats: [
        ["4", "people hired"],
        ["5", "in coaching now"],
        ["3.5–7", "months per engagement"]
      ],
      casesTitle: "Recent outcomes",
      cases: [
        ["Recent graduate", "Reworked the CV and widened the search.", "Offer at the first interview after 3.5 months"],
        ["New direction", "Focused on growth roles after exploring several fields.", "Full-time offer after 7 months"],
        ["Return to tech", "Brought earlier technical experience back into focus.", "Job in the field after 7 months"],
        ["Student job", "Used student status to target student roles.", "Student role at a large company"]
      ],
      howTitle: "My approach",
      how: [
        ["Reset direction", "If interviews don't come, reassess the target, not application volume."],
        ["Match evidence to the role", "Connect the job's requirements to your experience."],
        ["Focus on the next step", "Work through one decision at a time."]
      ],
      who: "Paid coaching for adults who choose to take an active role in their job search.",
      videosTitle: "Coaching videos (Chinese)",
      videoNames: ["First person hired", "Second person hired", "Why I coach, and early results", "A student job", "Offer at the first interview"]
    },
    course: {
      title: "A free job-search course",
      lede: "A free 43-lesson Chinese course on finding work in Denmark, with lessons on YouTube and weekly Q&A on WeChat.",
      modulesTitle: "Seven parts",
      lessons: "Lessons {a}–{b}",
      modules: [
        ["Know yourself", "Positioning and motivation."],
        ["Groundwork", "Visas, workplace culture and LinkedIn."],
        ["CV and cover letter", "Local conventions and first screening."],
        ["Reading the job ad", "Requirements, signals and preparation."],
        ["Interviews", "Preparation, follow-up and salary."],
        ["Networking", "Build useful connections in Denmark."],
        ["Personal branding", "A consistent story across your search."]
      ],
      playlist: "Watch the whole course",
      channelsTitle: "Where to watch",
      channels: {
        youtube: { name: "YouTube", text: "AI时代求职 ({handle}), {subs} subscribers. Full course and Q&A videos." },
        wechat: { name: "WeChat Channels", text: "Search 生活在丹麦 for lessons and weekly Q&A." },
        xhs: { name: "Xiaohongshu", text: "张丁亮 ({xhs}). Short CV and job-search notes." }
      },
      qaTitle: "Job-search questions",
      qa: ["200 applications, no replies", "How ATS screening works", "What belongs on a CV?"],
      qaPlaylist: "All 23 questions"
    },
    ai: {
      title: "All in on AI",
      lede: "I use AI as an engineering collaborator: define the task, share context and constraints, delegate bounded work, then verify the result.",
      workTitle: "At work",
      work: [
        ["Code review", "I built a GitHub Copilot skill around my review criteria. It checks performance, test coverage and business edge cases."],
        ["Engineer onboarding", "I built an automated flow for environment setup and codebase orientation."],
        ["Voice-first drafting", "Typeless and AI turn spoken notes into specs, plans and docs, leaving more time for product decisions."]
      ],
      builtTitle: "AI projects on the side",
      builtIntro: "12 projects since 2023, mostly solving everyday problems in writing, teaching, job hunting and housing.",
      // One line per project: what came out of it
      results: {
        wechat: "From Danish news to a published post on WeChat and Blogger",
        video: "Subtitles for a whole batch of videos, made on my own Mac",
        storyteller: "An audiobook, a reader and a 46-lesson plan for my class",
        lego: "PDF in, short video out, bricks on the beat",
        news: "Posted automatically to YouTube and Twitter",
        jobs: "5,000+ ads, updated every day",
        boliga: "24 postcodes checked every evening",
        collector: "One click to save, and nothing leaves my machine",
        exam: "20 topics, rotated until all are covered",
        site: "Three languages, plain HTML, CSS and JavaScript",
        taobao: "Stopped by a CAPTCHA, which became a post on agent-ready shops",
        tweets: "An early ChatGPT experiment"
      },
      groups: { media: "Writing and media", data: "Market data", products: "Products and tools", early: "Early experiments" },
      items: {
        wechat: ["WeChat AI writer", "Turns Danish news into practical Chinese articles for Chinese people in Denmark. Claude searches and checks public sources and writes the piece, and a script pushes it to the WeChat draft box and publishes it on Blogger.", "A publishing workflow for checked, useful Chinese articles about Denmark."],
        video: ["Video subtitler", "Batch-generates Chinese subtitles for my videos with a local Whisper model on my Mac, then fixes line breaks, filler words and traditional characters."],
        storyteller: ["Audiobook and reader for my Chinese class", "Turns a scanned book of Zheng Yuanjie's zodiac stories into an audiobook with a voice for each character, a reader that highlights each sentence as it is read, pinyin for every character and a 46-lesson plan.", "A scanned storybook turned into audio, a reading tool and lesson material."],
        lego: ["LEGO Builder", "Turns a LEGO building-instruction PDF into a vertical short video where bricks snap into place on the beat. Claude reads and scores every step, and Remotion renders the video.", "A LEGO instruction PDF turned into a brick-by-brick short video."],
        news: ["One-minute news", "Collects articles, has ChatGPT write short news pieces, and posts them automatically to YouTube and Twitter."],
        jobs: ["Copenhagen job market tracker", "Crawls every open job on Jobindex in Greater Copenhagen and North Zealand (5,000+ ads), updates daily, and reports trends, demand by field and how foreigner-friendly the ads are. For coaching, it matches a candidate's profile against new jobs."],
        boliga: ["Daily housing report", "A scheduled Claude task checks Boliga every evening across 24 postcodes around Copenhagen and writes a report of new listings and price drops."],
        collector: ["Personal web archive", "A Chrome extension and a local service that save the text of any page with one click, for search and analysis later. Nothing leaves my machine."],
        exam: ["Exam trainer", "A study system for the Microsoft MB-800 Business Central exam. Claude fetches practice questions, and a command-line quiz rotates through 20 topics until all are covered."],
        site: ["This website", "Designed, written in three languages and built together with Claude."],
        taobao: ["An AI agent that shops on Taobao", "An experiment with Claude Code that shops on Taobao and ships to Denmark. The CAPTCHA that stopped it became a post on why online shops need to be built for agents."],
        tweets: ["Tweet sentiment", "Collects tweets and uses ChatGPT for sentiment analysis."]
      },
      viewTitle: "How I work with AI",
      zonesTitle: "Four ways to work with AI",
      zonesIntro: "I match the task to what I know and what AI can access.",
      axes: ["I know", "I don't know", "AI knows", "AI doesn't know"],
      zones: [
        ["Delegate", "Use it for bounded tasks; verify the output."],
        ["Learn", "Ask it to explain options, then validate."],
        ["Add context", "Provide domain knowledge and constraints it cannot access."],
        ["Explore", "Treat suggestions as hypotheses; test before adopting."]
      ],
      takes: [
        ["Outcome over prompt", "Define the result and acceptance checks before choosing a tool."],
        ["Engineering expands", "Use time saved for product and architecture decisions."],
        ["Human ownership", "Verify the work and take responsibility for the final result."]
      ],
      linkedin: "Read my posts on LinkedIn",
      toolsTitle: "Tools I use every day"
    },
    projects: {
      cdp: {
        title: "Customer Data Platform", where: "LEGO Group, 2022–2024",
        body: "Integrates data from many upstream systems, combines events into 360-degree customer profiles, and creates audience segments for marketing campaigns and personalised experiences on lego.com.",
        diagram: ["Upstream systems", "360° customer profiles", "Audience segments"]
      },
      zeronorth: {
        title: "Routes, emissions and bunkering", where: "ZeroNorth, 2020–2023",
        body: "Our most important product calculates routes from the weather, shows CO₂ emissions and optimises speed. Around it we built a fleet overview, a bunker planner that tells operators where, when and how much fuel to buy, and a shared map component used across every app.",
        diagram: ["Weather", "Optimised route", "Less fuel, less CO₂"]
      },
      tsui: {
        title: "Tradeshift UI and Elements", where: "Tradeshift, 2015–2020",
        body: "UI components that work in any framework: React, Angular, jQuery or none at all. Elements rebuilt them as Web Components, so developers can build apps from bricks without depending on a framework. Most of what I know about designing component APIs comes from this project."
      },
      chrome: {
        title: "Tradeshift Chrome", where: "Tradeshift",
        body: "The navigation hub of the platform. It handles URL routing, message passing, WebSockets and app loading. It was the first React and Redux project at Tradeshift, and we switched it to Preact before release."
      },
      news: {
        title: "One-minute news", where: "Side project",
        body: "Uses ChatGPT to write short news pieces and posts them automatically to YouTube and Twitter."
      }
    },
    years: [
      ["2026", "Build most of my AI projects with Claude Code. Record a 43-lesson job-search course. Start 1:1 job coaching: four people have found jobs, and five are in coaching now."],
      ["2025", "All in on AI: work, learning and personal projects, I do all of it with AI. Live in Denmark goes daily."],
      ["2024", "The customer data platform goes live after two years of hard work. Start teaching Chinese on Saturdays."],
      ["2023", "Start a new career at the LEGO Group."],
      ["2022", "Corona is over and life is finally back to normal."],
      ["2021", "Welcome my second daughter, Lisa, to the world."],
      ["2020", "New job, and my first car."],
      ["2019", "Apply for permanent residence in Denmark. Try a new career."],
      ["2018", "Pass the PD3 Danish test. Read parenting books for my daughter."],
      ["2017", "Start writing articles about life in Denmark. Get everything ready for my daughter."],
      ["2016", "Marry my wife."],
      ["2015", "Start a new life in Denmark and a career at Tradeshift."],
      ["2014", "Build a new engineering team."],
      ["2013", "Start a new journey at a startup."],
      ["2012", "Work hard and make my name at CICC."],
      ["2011", "Choose work instead of a PhD at Delft."],
      ["2010", "Graduate with a master's degree."],
      ["2009", "More hands-on projects during my master's."],
      ["2008", "Choose a master's degree instead of a job."]
    ]
  },

  /* ───────────────────────── Dansk ───────────────────────── */
  da: {
    meta: {
      title: "Leo Zhang · Fullstack-udvikler, all in på AI",
      description: "Leo Zhang er fullstack-udvikler med næsten 20 års erfaring, først i Beijing og siden 2015 i København."
    },
    ui: {
      nav: { ai: "AI", work: "Arbejde", projects: "Projekter", years: "År", contact: "Kontakt", denmark: "Live in Denmark", teaching: "Undervisning", coaching: "Coaching" },
      beyond: "Uden for arbejdet",
      filterAll: "Alle",
      tabCourse: "Gratis kursus",
      tabsLabel: "Uden for arbejdet",
      quick: [["20", "år med softwareudvikling"], ["LEGO", "kundedataplatform"], ["12", "AI-projekter siden 2023"], ["3", "sprog: kinesisk, engelsk, dansk"]],
      skip: "Gå til indhold",
      now: "nu",
      wallTitle: "Tyve år, sten for sten",
      wallIntro: "Hver række fortæller en del af historien. Hold markøren over eller vælg et år for at læse noten, eller vælg en sten for detaljer.",
      wallKey: "De grå sten er Beijing, lånt fra murene i hutongerne. De farvede sten er København, lånt fra husene i Nyhavn.",
      courses: { year: "År for år", ai: "AI-projekter", side: "Ved siden af", teach: "Undervisning", work: "Arbejde", study: "Uddannelse" },
      moved: "Beijing → København",
      earlierJobs: "Tidligere stillinger",
      selected: "Udvalgt",
      openProject: "Åbn",
      readMore: "Læs mere",
      workTitle: "Arbejde",
      inMyWords: "Set i bakspejlet",
      projectsTitle: "Ting, jeg har bygget",
      otherProjects: "På arbejdet",
      favourite: "Min favorit",
      toolboxTitle: "Værktøjskasse",
      toolbox: { frontend: "Frontend", backend: "Backend", data: "Data og cloud", ai: "AI" },
      eduTitle: "Uddannelse",
      contactTitle: "Sig hej",
      contactText: "Jeg får gerne nye venner. Hvis vi arbejder mod det samme, så skriv til mig.",
      copy: "Kopiér e-mail",
      copied: "Kopieret",
      footer: "Bygget i hånden med HTML, CSS og lidt JavaScript. Hostet på GitHub Pages.",
      langName: "Dansk"
    },
    hero: {
      hello: "Hej, jeg hedder Leo.",
      lede: "Fullstackudvikler med AI som en central del af mit arbejde hos LEGO Koncernen, hvor jeg bygger kundedataplatformen og gentænker udviklingsprocessen.",
      aside: "Jeg bruger AI til code review, onboarding og daglig skrivning. Siden 2025 har jeg bygget 12 AI-projekter inden for skrivning, undervisning, jobsøgning og bolig.",
      location: "København, Danmark",
      languages: "Kinesisk, engelsk, dansk (PD3)"
    },
    jobs: {
      lego: {
        org: "LEGO Koncernen", role: "Senior fullstack-udvikler", city: "København",
        body: "Jeg bygger kundedataplatformen (CDP) for LEGO Koncernen: en skalerbar dataarkitektur og datapipelines, der samler data fra mange kildesystemer til 360-graders kundeprofiler. Marketing bruger målgruppesegmenterne til kampagner og personlige oplevelser på lego.com.",
        note: "Platformen gik i luften i 2024 efter to års hårdt arbejde."
      },
      zeronorth: {
        org: "ZeroNorth", role: "Fullstack-udvikler", city: "København",
        body: "ZeroNorth startede som et team i Maersk Tankers og blev sit eget selskab med målet om at gøre global handel grønnere. Jeg arbejdede på platformen, der optimerer skibes fart, vejrrouting og bunkerplanlægning, så rederier bruger mindre brændstof og udleder mindre CO₂.",
        note: ""
      },
      maersk: {
        org: "Maersk Tankers", role: "Fullstack-udvikler", city: "København",
        body: "Jeg startede i den digitale afdeling i marts 2020. Få måneder senere blev vores team udskilt som et nyt selskab, ZeroNorth.",
        note: ""
      },
      tradeshift: {
        org: "Tradeshift", role: "Senior softwareudvikler", city: "København",
        body: "Mit første job i Danmark. Jeg var ansvarlig for fire frontend-projekter: Tradeshift UI, Tradeshift Elements, Tradeshift Chrome og Tradeshift IO. Jeg byggede platformens frontend-framework og flyttede gamle JavaScript-komponenter over til Web Components, så udviklere i og uden for Tradeshift kunne bygge apps hurtigere.",
        note: "Jeg lærte meget af dygtige kolleger, mit engelsk blev bedre år for år, og mange kolleger blev gode venner."
      },
      wangli: {
        org: "Wangli", role: "Senior lead softwareudvikler", city: "Beijing",
        body: "Min første lederrolle. Da udviklingschefen gik for at starte et nyt firma, genopbyggede jeg udviklingsafdelingen, ansatte og ledede næsten 20 udviklere og fik platformen i luften til tiden.",
        note: "Jeg skrev stadig kode hver aften efter møderne. Jeg holder virkelig af at være udvikler."
      },
      cloump: {
        org: "Cloump", role: "Senior webudvikler", city: "Beijing",
        body: "Cloump står for \"cloud and jump\". Vi overvågede og analyserede kinesiske sociale medier som Sina Weibo for at måle brandværdi og finde influencere. Jeg byggede big data-platformen med open source-værktøjer, en webshop og datavisualiseringer i Kibana.",
        note: "Min første startup. Den lærte mig, at man kan bygge et helt big data-system af open source. Firmaet løb tør for penge et år senere."
      },
      cicc: {
        org: "CICC", role: "Softwareudvikler", city: "Beijing",
        body: "China International Capital Corporation er en af Kinas førende investeringsbanker. Jeg designede datamodeller for hele virksomheden, byggede et content management-system på SharePoint og udviklede interne systemer til investment banking, private equity, udgifter og PR.",
        note: "Jeg startede lige efter min kandidatgrad og fik mange gode venner der."
      },
      nmc: {
        org: "NMC", role: "Praktikant", city: "Beijing",
        body: "Byggede interne systemer i C# og ASP.NET under min kandidatuddannelse.",
        note: ""
      },
      bistone: {
        org: "BIStone", role: "Softwareudvikler", city: "Beijing",
        body: "Et dataanalysefirma, hvor jeg lærte BI, SQL og data warehousing. Jeg arbejdede på tre systemer: webdataindsamling, e-touch og tilfredshedsanalyse.",
        note: ""
      }
    },
    edu: {
      ustc: {
        school: "University of Science and Technology of China", short: "USTC",
        degree: "Kandidat, softwareudvikling",
        note: "Karaktergennemsnit blandt de bedste 10 %. Prisvinder i Microsoft Imagine Cup, seks legater og tre softwarekonkurrencer."
      },
      sdut: {
        school: "Shandong University of Technology", short: "SDUT",
        degree: "Bachelor, datalogi",
        note: ""
      }
    },
    teach: {
      chinese: { label: "Kinesiskhold", text: "Siden 2024: kinesiskundervisning om lørdagen for børn fra 10 år, der starter fra bunden." },
      coach: { label: "Jobcoaching", text: "Siden 2026: coaching én til én for folk, der søger job i Danmark. Fire har indtil videre fået job, og fem er i gang nu." }
    },
    side: {
      guide: { label: "生活在丹麦", text: "Siden december 2017: et dagligt kinesisk medie om Danmark, nu med næsten 24.000 følgere." }
    },
    denmark: {
      title: "生活在丹麦 · Live in Denmark",
      lede: "Daglige kinesiske artikler om arbejde, bolig og hverdagsliv i Danmark for læsere i Danmark og Kina.",
      stats: {
        posts: "opslag siden december 2017",
        followers: "følgere på WeChat",
        readers: "læsere de seneste 30 dage",
        top: "læsere af én artikel, oktober 2026"
      },
      topicsTitle: "Det skriver jeg om",
      topics: [
        "Arbejde og virksomheder",
        "Bolig og hverdagsliv",
        "Visum, skat og samfund"
      ],
      recentTitle: "Nylige artikler",
      recent: [
        "Beløbsgrænsen for arbejdstilladelse sænkes til 322.000 kr., og Kina er på listen",
        "LEGO vinder, og Novo Nordisk falder ud af top to blandt unge danskeres foretrukne arbejdsgivere",
        "Novo Nordisk har skåret over 7.000 stillinger på et år, og det danske life science-jobmarked bliver rystet om",
        "Udbuddet af lejligheder i København er steget 94 % på et år"
      ],
      coachTitle: "Videoer og live-Q&A",
      coach: "Korte videoer om jobsøgning og ugentlig live-Q&A på WeChat Channels.",
      audience: "Læsere i 107 lande og regioner; omkring to tredjedele er 26–45 år.",
      note: "Skrevet og produceret ved siden af mit fuldtidsjob.",
      channelsTitle: "Her kan du læse det",
      channels: {
        wechat: { name: "WeChat", text: "Søg efter 生活在丹麦 for daglige artikler, videoer og ugentlig Q&A." },
        blog: { name: "Blog", text: "Åbent arkiv: {posts} indlæg og {views} visninger." }
      }
    },
    teaching: {
      title: "Lørdag formiddag: kinesiskundervisning",
      lede: "Jeg underviser begyndere i kinesisk på Lingbi Kinesisk Skole i Virum nord for København.",
      facts: [
        ["Hvornår", "Lørdage kl. 10.00–12.45"],
        ["Hvor", "Fuglsanggårdsskolen, Virum"],
        ["Hvem", "Fra 10 år, ingen forkundskaber"],
        ["Holdstørrelse", "Under 10 elever"],
        ["Siden", "2024"]
      ],
      planTitle: "Tre lektioner, tre opgaver",
      plan: [
        ["Første lektion", "Pinyin, grammatik og nye tegn."],
        ["Anden lektion", "Tale, udtale og ordlege."],
        ["Tredje lektion", "Historier om historie, teknologi og kultur."]
      ],
      extrasTitle: "Ud over lærebogen",
      extras: [
        "En ugentlig talebesked på 60 sekunder på kinesisk.",
        "En interaktiv klasseside til at øve pinyin og tegn.",
        "Forældrene får et kort skriftligt referat og en video efter timen."
      ],
      quote: "Sprog er et værktøj. Når eleverne kan bruge det, kan de selv udforske kinesisk kultur, og interessen bliver den egentlige grund til, at de bliver ved med at lære.",
      quoteSource: "Fra min lærerprofil på skolen",
      link: "Om skolen og lærerne"
    },
    coaching: {
      title: "Jobcoaching én til én",
      lede: "Jeg coacher folk én til én gennem det danske jobmarked med fokus på retning, CV og ansøgninger.",
      stats: [
        ["4", "har fået job"],
        ["5", "i coaching nu"],
        ["3,5–7", "måneder pr. forløb"]
      ],
      casesTitle: "Resultater",
      cases: [
        ["Nyuddannet", "CV'et blev omskrevet, og jobsøgningen udvidet.", "Jobtilbud ved første samtale efter 3,5 måneder"],
        ["Ny retning", "Fokus flyttet til growth-roller efter flere forsøg.", "Fuldtidsjob efter 7 måneder"],
        ["Tilbage til tech", "Tidligere teknisk erfaring blev bragt i spil igen.", "Job inden for faget efter 7 måneder"],
        ["Studiejob", "Studiestatus brugt til at finde relevante studiejob.", "Studiejob i en stor virksomhed"]
      ],
      howTitle: "Min tilgang",
      how: [
        ["Skift retning", "Hvis samtalerne udebliver, så skift mål frem for at sende flere ansøgninger."],
        ["Vis det relevante", "Knyt jobbets krav til konkrete erfaringer."],
        ["Tag næste skridt", "Løs én beslutning ad gangen."]
      ],
      who: "Betalt coaching for voksne, der selv tager aktivt del i jobsøgningen.",
      videosTitle: "Coachingvideoer (kinesisk)",
      videoNames: ["Den første i job", "Den anden i job", "Hvorfor jeg coacher, og de første resultater", "Et studiejob", "Tilbud ved første samtale"]
    },
    course: {
      title: "Et gratis jobsøgningskursus",
      lede: "Et gratis kinesisk kursus med 43 lektioner om at finde arbejde i Danmark. Se det på YouTube, og deltag i ugentlig Q&A på WeChat.",
      modulesTitle: "Syv dele",
      lessons: "Lektion {a}–{b}",
      modules: [
        ["Kend dig selv", "Retning og motivation."],
        ["Grundlaget", "Visum, arbejdskultur og LinkedIn."],
        ["CV og ansøgning", "Lokale regler og første screening."],
        ["Læs jobopslaget", "Krav, signaler og forberedelse."],
        ["Jobsamtaler", "Forberedelse, opfølgning og løn."],
        ["Netværk", "Skab gode forbindelser i Danmark."],
        ["Personligt brand", "En tydelig historie gennem hele søgningen."]
      ],
      playlist: "Se hele kurset",
      channelsTitle: "Her kan du se det",
      channels: {
        youtube: { name: "YouTube", text: "AI时代求职 ({handle}), {subs} abonnenter. Kursus og Q&A-videoer." },
        wechat: { name: "WeChat Channels", text: "Søg efter 生活在丹麦 for lektioner og ugentlig Q&A." },
        xhs: { name: "Xiaohongshu", text: "张丁亮 ({xhs}). Korte CV- og jobsøgningsnoter." }
      },
      qaTitle: "Spørgsmål om jobsøgning",
      qa: ["200 ansøgninger, ingen svar", "Sådan fungerer ATS", "Hvad skal med på et CV?"],
      qaPlaylist: "Alle 23 spørgsmål"
    },
    ai: {
      title: "All in på AI",
      lede: "Jeg bruger AI som teknisk sparringspartner: afgrænser opgaven, giver kontekst og verificerer resultatet.",
      workTitle: "På arbejdet",
      work: [
        ["Code review", "Jeg byggede et GitHub Copilot-skill ud fra mine reviewkriterier. Det tjekker performance, testdækning og forretningsmæssige edge cases."],
        ["Onboarding af udviklere", "Jeg byggede et automatiseret flow til opsætning af miljøet og introduktion til kodebasen."],
        ["Tale til tekst", "Typeless og AI omsætter talte noter til specifikationer, planer og dokumentation, så der bliver mere tid til produktbeslutninger."]
      ],
      builtTitle: "AI-projekter ved siden af",
      builtIntro: "12 projekter siden 2023, mest for at løse hverdagsproblemer med skrivning, undervisning, jobsøgning og bolig.",
      // One line per project: what came out of it
      results: {
        wechat: "Fra danske nyheder til en udgivet artikel på WeChat og Blogger",
        video: "Undertekster til en hel bunke videoer, lavet på min egen Mac",
        storyteller: "En lydbog, en læser og en plan for 46 lektioner til mit hold",
        lego: "PDF ind, kortvideo ud, klodser i takt",
        news: "Lægges automatisk på YouTube og Twitter",
        jobs: "Over 5.000 opslag, opdateret hver dag",
        boliga: "24 postnumre tjekket hver aften",
        collector: "Ét klik for at gemme, og intet forlader min maskine",
        exam: "20 emner på skift, til alle er dækket",
        site: "Tre sprog, ren HTML, CSS og JavaScript",
        taobao: "Stoppet af en CAPTCHA, som blev til et opslag om agentklare webshops",
        tweets: "Et tidligt eksperiment med ChatGPT"
      },
      groups: { media: "Skrivning og medier", data: "Markedsdata", products: "Produkter og værktøjer", early: "Tidlige eksperimenter" },
      items: {
        wechat: ["WeChat AI-skribent", "Laver danske nyheder om til praktiske kinesiske artikler for kinesere i Danmark. Claude søger og tjekker offentlige kilder og skriver artiklen, og et script sender den til WeChats kladdemappe og udgiver den på Blogger.", "Et udgivelsesflow til faktatjekkede, nyttige kinesiske artikler om Danmark."],
        video: ["Videoundertekster", "Laver kinesiske undertekster til mine videoer i batch med en lokal Whisper-model på min Mac og retter derefter linjeskift, fyldord og traditionelle tegn."],
        storyteller: ["Lydbog og læser til mit kinesiskhold", "Laver en skannet bog med Zheng Yuanjies stjernetegnseventyr om til en lydbog med en stemme til hver figur, en læser, der fremhæver hver sætning, mens den læses op, pinyin til hvert tegn og en plan for 46 lektioner.", "En skannet historiebog bliver til lyd, en læseapp og undervisningsmateriale."],
        lego: ["LEGO Builder", "Laver en LEGO-byggevejledning i PDF om til en lodret kortvideo, hvor klodserne klikker på plads i takt med musikken. Claude læser og vurderer hvert trin, og Remotion renderer videoen.", "En LEGO-vejledning i PDF bliver til en kortvideo, hvor klodserne bygges trin for trin."],
        news: ["Et-minuts-nyheder", "Samler artikler, lader ChatGPT skrive korte nyheder og lægger dem automatisk på YouTube og Twitter."],
        jobs: ["Overblik over jobmarkedet i København", "Henter alle ledige stillinger på Jobindex i Storkøbenhavn og Nordsjælland (over 5.000 opslag), opdateres dagligt og viser tendenser, efterspørgsel pr. fag og hvor venlige opslagene er over for udlændinge. Til coaching matcher det en kandidats profil med nye stillinger."],
        boliga: ["Daglig boligrapport", "En planlagt Claude-opgave tjekker Boliga hver aften i 24 postnumre omkring København og skriver en rapport over nye boliger og prisfald."],
        collector: ["Personligt webarkiv", "En Chrome-udvidelse og en lokal tjeneste, der gemmer teksten fra en side med ét klik til senere søgning og analyse. Intet forlader min maskine."],
        exam: ["Eksamenstræner", "Et studiesystem til Microsofts MB-800-eksamen i Business Central. Claude henter øvelsesspørgsmål, og en quiz i kommandolinjen roterer gennem 20 emner, til alle er dækket."],
        site: ["Denne hjemmeside", "Designet, skrevet på tre sprog og bygget sammen med Claude."],
        taobao: ["En AI-agent, der handler på Taobao", "Et eksperiment med Claude Code, der handler på Taobao og sender til Danmark. Den CAPTCHA, der stoppede den, blev til et opslag om, hvorfor webshops skal bygges til agenter."],
        tweets: ["Tweet-stemning", "Henter tweets og bruger ChatGPT til stemningsanalyse."]
      },
      viewTitle: "Sådan arbejder jeg med AI",
      zonesTitle: "Fire måder at arbejde med AI på",
      zonesIntro: "Jeg tilpasser opgaven efter det, jeg ved, og det AI har adgang til.",
      axes: ["Jeg ved det", "Jeg ved det ikke", "AI ved det", "AI ved det ikke"],
      zones: [
        ["Uddelegér", "Brug AI til afgrænsede opgaver, og verificér output."],
        ["Lær", "Bed den forklare muligheder, og kontrollér svaret."],
        ["Giv kontekst", "Tilføj faglig viden og rammer, den ikke kan se."],
        ["Udforsk", "Behandl forslag som hypoteser, og test dem først."]
      ],
      takes: [
        ["Resultat før værktøj", "Definér mål og succeskriterier, før du vælger værktøj."],
        ["Ingeniørarbejdet udvides", "Brug tiden på produkt- og arkitekturbeslutninger."],
        ["Ansvar hos mennesket", "Kontrollér output, og stå inde for det endelige resultat."]
      ],
      linkedin: "Læs mine opslag på LinkedIn",
      toolsTitle: "Værktøjer, jeg bruger hver dag"
    },
    projects: {
      cdp: {
        title: "Kundedataplatform", where: "LEGO Koncernen, 2022–2024",
        body: "Samler data fra mange kildesystemer, kombinerer hændelser til 360-graders kundeprofiler og skaber målgruppesegmenter til kampagner og personlige oplevelser på lego.com.",
        diagram: ["Kildesystemer", "360°-kundeprofiler", "Målgrupper"]
      },
      zeronorth: {
        title: "Ruter, udledning og bunkring", where: "ZeroNorth, 2020–2023",
        body: "Vores vigtigste produkt beregner ruter ud fra vejret, viser CO₂-udledning og optimerer farten. Omkring det byggede vi et flådeoverblik, en bunkerplanlægger, der fortæller operatører hvor, hvornår og hvor meget brændstof de skal købe, og en fælles kortkomponent til alle apps.",
        diagram: ["Vejr", "Optimeret rute", "Mindre brændstof, mindre CO₂"]
      },
      tsui: {
        title: "Tradeshift UI og Elements", where: "Tradeshift, 2015–2020",
        body: "UI-komponenter, der virker i alle frameworks: React, Angular, jQuery eller slet ingen. Elements genopbyggede dem som Web Components, så udviklere kan bygge apps af klodser uden at være afhængige af et framework. Det meste af det, jeg ved om at designe komponent-API'er, har jeg lært her."
      },
      chrome: {
        title: "Tradeshift Chrome", where: "Tradeshift",
        body: "Platformens navigationsknudepunkt. Den håndterer URL-routing, beskeder, WebSockets og indlæsning af apps. Det var det første React- og Redux-projekt hos Tradeshift, og vi skiftede til Preact før lanceringen."
      },
      news: {
        title: "Et-minuts-nyheder", where: "Sideprojekt",
        body: "Bruger ChatGPT til at skrive korte nyheder og poster dem automatisk på YouTube og Twitter."
      }
    },
    years: [
      ["2026", "Bygger de fleste af mine AI-projekter med Claude Code. Optager et jobsøgningskursus på 43 lektioner. Starter jobcoaching én til én: fire har fået job, og fem er i gang nu."],
      ["2025", "All in på AI: arbejde, læring og egne projekter, alt laver jeg med AI. Live in Denmark udkommer nu hver dag."],
      ["2024", "Kundedataplatformen går i luften efter to års hårdt arbejde. Begynder at undervise i kinesisk om lørdagen."],
      ["2023", "Starter en ny karriere hos LEGO Koncernen."],
      ["2022", "Corona er ovre, og hverdagen er endelig tilbage."],
      ["2021", "Byder min anden datter, Lisa, velkommen til verden."],
      ["2020", "Nyt job og min første bil."],
      ["2019", "Søger om permanent opholdstilladelse. Prøver en ny karriere."],
      ["2018", "Består PD3. Læser bøger om forældreskab til min datter."],
      ["2017", "Begynder at skrive artikler om livet i Danmark. Gør alt klar til min datter."],
      ["2016", "Bliver gift med min kone."],
      ["2015", "Starter et nyt liv i Danmark og en karriere hos Tradeshift."],
      ["2014", "Bygger et nyt udviklingsteam."],
      ["2013", "Begynder en ny rejse i en startup."],
      ["2012", "Arbejder hårdt og skaber mig et navn hos CICC."],
      ["2011", "Vælger arbejde frem for en ph.d. i Delft."],
      ["2010", "Bliver færdig som kandidat."],
      ["2009", "Flere praktiske projekter under kandidatuddannelsen."],
      ["2008", "Vælger en kandidatuddannelse frem for et job."]
    ]
  },

  /* ───────────────────────── 中文 ───────────────────────── */
  zh: {
    meta: {
      title: "Leo Zhang · All in AI 的全栈工程师",
      description: "Leo Zhang，全栈开发者，近 20 年经验，先在北京，2015 年起在哥本哈根。"
    },
    ui: {
      nav: { ai: "AI", work: "工作", projects: "项目", years: "年表", contact: "联系", denmark: "生活在丹麦", teaching: "中文课", coaching: "求职陪跑" },
      beyond: "工作之外",
      filterAll: "全部",
      tabCourse: "免费求职课",
      tabsLabel: "工作之外",
      quick: [["20", "年软件开发经验"], ["乐高", "客户数据平台"], ["12", "个 AI 项目（2023 年至今）"], ["3", "种语言：中文、英语、丹麦语"]],
      skip: "跳到正文",
      now: "至今",
      wallTitle: "二十年，一砖一瓦",
      wallIntro: "每一行讲述一段经历。悬停或点击年份标记可读当年记录，点击砖块查看详情。",
      wallKey: "灰砖是北京，取自胡同的灰墙；彩砖是哥本哈根，取自新港的彩色房子。",
      courses: { year: "逐年", ai: "AI 项目", side: "业余", teach: "教学", work: "工作", study: "学业" },
      moved: "北京 → 哥本哈根",
      earlierJobs: "更早的经历",
      selected: "精选",
      openProject: "打开",
      readMore: "详细",
      workTitle: "工作经历",
      inMyWords: "回头看",
      projectsTitle: "我做过的东西",
      otherProjects: "工作中的项目",
      favourite: "我最喜欢的",
      toolboxTitle: "工具箱",
      toolbox: { frontend: "前端", backend: "后端", data: "数据与云", ai: "AI" },
      eduTitle: "教育",
      contactTitle: "打个招呼",
      contactText: "我喜欢交朋友。如果我们在做同样的事，欢迎写信给我。",
      copy: "复制邮箱",
      copied: "已复制",
      footer: "用 HTML、CSS 和一点 JavaScript 手工搭建，托管在 GitHub Pages。",
      langName: "中文"
    },
    hero: {
      hello: "你好，我是 Leo。",
      lede: "我是一名以 AI 为核心工作方式的全栈工程师，在乐高集团构建客户数据平台，也用 AI 改造软件开发流程。",
      aside: "我把 AI 用于 code review、新人 onboarding 和日常写作。2025 年全面投入后，做了 12 个个人项目，涵盖写作、教学、求职和住房。",
      location: "丹麦，哥本哈根",
      languages: "中文、英语、丹麦语（PD3）"
    },
    jobs: {
      lego: {
        org: "乐高集团", role: "高级全栈工程师", city: "哥本哈根",
        body: "我为乐高集团搭建客户数据平台（CDP）：设计可扩展的数据架构和数据管道，把众多上游系统的数据整合成 360 度用户画像。市场团队用这些人群分组做营销活动，以及 lego.com 上的个性化体验。",
        note: "经过两年的努力，平台在 2024 年正式上线。"
      },
      zeronorth: {
        org: "ZeroNorth", role: "全栈工程师", city: "哥本哈根",
        body: "ZeroNorth 原本是马士基油轮内部的一个团队，后来独立成公司，目标是让全球贸易更绿色。我参与开发了优化船速、气象航线和加油计划的平台，帮助航运公司少烧油、少排放。",
        note: ""
      },
      maersk: {
        org: "马士基油轮", role: "全栈工程师", city: "哥本哈根",
        body: "2020 年 3 月加入马士基油轮的数字化部门。几个月后，我们团队独立出来，成立了 ZeroNorth。",
        note: ""
      },
      tradeshift: {
        org: "Tradeshift", role: "高级软件工程师", city: "哥本哈根",
        body: "我在丹麦的第一份工作。负责四个前端项目：Tradeshift UI、Tradeshift Elements、Tradeshift Chrome 和 Tradeshift IO。搭建了平台的前端框架，把老的原生 JavaScript 组件迁移到 Web Components，让公司内外的开发者都能更快地做应用。",
        note: "跟聪明的同事们学到了很多，英语一年比一年好，很多同事成了好朋友。"
      },
      wangli: {
        org: "Wangli", role: "高级技术负责人", city: "北京",
        body: "第一次做管理。技术负责人离开去创业后，我重建了技术部门，招聘并带领了近 20 名开发者，让平台按时上线。",
        note: "每天开完会，晚上还是会写代码。我真的很喜欢做开发。"
      },
      cloump: {
        org: "Cloump", role: "高级 Web 工程师", city: "北京",
        body: "Cloump 是 \"cloud and jump\" 的缩写，意思是在云上跳跃。我们监测和分析新浪微博等中文社交媒体，衡量品牌价值、寻找意见领袖。我用开源工具搭建了整个大数据平台，还做了一个商城网站和 Kibana 数据可视化。",
        note: "第一次加入创业公司。我发现用开源工具就能搭起一整套大数据系统。一年后公司资金耗尽。"
      },
      cicc: {
        org: "中金公司", role: "软件工程师", city: "北京",
        body: "中国国际金融股份有限公司是中国领先的投资银行之一。我为全公司设计数据模型，基于 SharePoint 搭建内容管理系统，并开发了投行、私募、费用报销和公关等内部系统。",
        note: "硕士毕业后直接加入，在那里交了很多好朋友。"
      },
      nmc: {
        org: "NMC", role: "实习生", city: "北京",
        body: "读研期间用 C# 和 ASP.NET 开发内部系统。",
        note: ""
      },
      bistone: {
        org: "BIStone", role: "软件工程师", city: "北京",
        body: "一家数据分析公司，我在这里学会了 BI、SQL 和数据仓库。参与了三个系统的开发：网络数据采集、e-touch 和满意度分析。",
        note: ""
      }
    },
    edu: {
      ustc: {
        school: "中国科学技术大学", short: "中科大",
        degree: "硕士，软件工程",
        note: "绩点前 10%。获微软创新杯（Imagine Cup）奖项，六次获得奖学金，参加三次软件竞赛。"
      },
      sdut: {
        school: "山东理工大学", short: "山东理工",
        degree: "学士，计算机科学与技术",
        note: ""
      }
    },
    teach: {
      chinese: { label: "中文课", text: "2024 年起：每周六给 10 岁以上、零基础的孩子教中文。" },
      coach: { label: "求职陪跑", text: "2026 年起：1 对 1 陪跑在丹麦找工作的人，已有四位找到工作，还有五位正在陪跑中。" }
    },
    side: {
      guide: { label: "生活在丹麦", text: "2017 年 12 月至今：每天更新的丹麦中文公众号，现有近 2.4 万关注者。" }
    },
    denmark: {
      title: "生活在丹麦",
      lede: "每天用中文写丹麦的工作、住房和生活，读者遍布丹麦和中国。",
      stats: {
        posts: "篇内容，始于 2017 年 12 月",
        followers: "位公众号关注者",
        readers: "近 30 天阅读人数",
        top: "单篇阅读人数（2026 年 10 月）"
      },
      topicsTitle: "写些什么",
      topics: [
        "工作与公司",
        "住房与日常生活",
        "签证、税务与公共政策"
      ],
      recentTitle: "近期文章",
      recent: [],
      coachTitle: "视频与直播答疑",
      coach: "在视频号发布丹麦求职短视频，每周直播答疑。",
      audience: "读者来自 107 个国家和地区；约三分之二在 26–45 岁。",
      note: "在全职工作之外写作、整理数据和制作视频。",
      channelsTitle: "在哪里看",
      channels: {
        wechat: { name: "微信公众号", text: "搜索「生活在丹麦」，查看日更文章、视频和每周答疑。" },
        blog: { name: "博客", text: "公开文章存档：{posts} 篇，{views} 次浏览。" }
      }
    },
    teaching: {
      title: "周六上午：教中文",
      lede: "我在哥本哈根北边 Virum 的灵比中文学校教零基础中文。",
      facts: [
        ["时间", "每周六 10:00–12:45"],
        ["地点", "Virum，Fuglsanggårdsskolen"],
        ["对象", "10 岁以上，零基础"],
        ["班级", "小班，不到 10 人"],
        ["开始", "2024 年"]
      ],
      planTitle: "三节课，各有分工",
      plan: [
        ["第一节", "拼音、语法和生字。"],
        ["第二节", "口语、发音和文字游戏。"],
        ["第三节", "用历史、科技和文化故事收尾。"]
      ],
      extrasTitle: "课本之外",
      extras: [
        "每周一条 60 秒中文语音练习。",
        "用互动网页练习拼音和汉字。",
        "每节课后给家长发送简短文字和视频回顾。"
      ],
      quote: "语言是一种“工具”，学会使用中文工具，探索中国文化，从而激发学生的学习兴趣。",
      quoteSource: "摘自学校网站上的教师介绍",
      link: "了解学校和老师"
    },
    coaching: {
      title: "1 对 1 求职陪跑",
      lede: "我一对一陪跑在丹麦求职的人，重点放在方向、简历和申请策略。",
      stats: [
        ["4", "位学员已找到工作"],
        ["5", "位正在陪跑"],
        ["3.5–7", "个月的陪跑周期"]
      ],
      casesTitle: "陪跑结果",
      cases: [
        ["应届毕业生", "重写简历，并扩大求职范围。", "陪跑 3.5 个月，首次面试拿到 offer"],
        ["调整方向", "探索多个领域后，聚焦竞争较少的 Growth 岗位。", "陪跑 7 个月，拿到全职 offer"],
        ["重返技术岗位", "重新突出过往技术经验，按周推进求职。", "陪跑 7 个月，找到对口工作"],
        ["在读硕士", "利用在读身份寻找学生岗位。", "获得大型企业学生工"]
      ],
      howTitle: "我的方法",
      how: [
        ["及时调整方向", "没有面试，就重新判断目标，而不是盲目多投。"],
        ["用经历回应要求", "把岗位要求与自己的具体经验对应起来。"],
        ["先走好下一步", "一次聚焦一个求职问题。"]
      ],
      who: "面向主动参与求职的成年人，提供付费一对一陪跑。",
      videosTitle: "陪跑视频（中文）",
      videoNames: ["第一位学员上岸", "第二位学员上岸", "为什么做陪跑，以及初步成果", "一位在读学生拿到学生工", "第一次面试就拿到 offer"]
    },
    course: {
      title: "免费求职课",
      lede: "一套免费的 43 节中文课程，讲如何在丹麦找工作。YouTube 看课程，微信视频号有每周答疑。",
      modulesTitle: "七个部分",
      lessons: "第 {a}–{b} 课",
      modules: [
        ["知己知彼", "定位与求职心态。"],
        ["知识储备", "签证、职场文化和 LinkedIn。"],
        ["简历和求职信", "本地规则与简历初筛。"],
        ["读懂 JD", "岗位要求、潜台词和准备。"],
        ["面试", "准备、跟进和薪资沟通。"],
        ["Networking", "建立有效联系。"],
        ["个人品牌", "贯穿求职过程的表达。"]
      ],
      playlist: "看完整课程",
      channelsTitle: "在哪里看",
      channels: {
        youtube: { name: "YouTube", text: "AI时代求职（{handle}），{subs} 位订阅者。课程和求职问答视频。" },
        wechat: { name: "微信视频号", text: "搜索「生活在丹麦」，看课程和每周答疑。" },
        xhs: { name: "小红书", text: "张丁亮（{xhs}），分享简历与求职笔记。" }
      },
      qaTitle: "求职常见问题",
      qa: ["投了 200 份简历，没有回音", "ATS 如何筛选简历", "简历上该写什么？"],
      qaPlaylist: "全部 23 个问题"
    },
    ai: {
      // title stays in English on purpose ("All in on AI"), like the page title
      lede: "我把 AI 当作工程协作者：先界定任务、补充必要背景，再委派有边界的工作并验证结果。",
      workTitle: "工作中",
      work: [
        ["Code review", "我按自己的审查标准构建了 GitHub Copilot skill，用来检查性能、测试覆盖和业务边界。"],
        ["工程师 onboarding", "我搭建了自动化流程，帮助新同事配置环境、熟悉代码库。"],
        ["语音起草", "Typeless 和 AI 把口述转成需求、计划和文档，让我把时间留给产品决策。"]
      ],
      builtTitle: "业余的 AI 项目",
      builtIntro: "2023 年以来做了 12 个项目，主要解决写作、教学、求职和找房中的实际问题。",
      // One line per project: what came out of it
      results: {
        wechat: "从丹麦新闻到公众号和 Blogger 上的成稿",
        video: "在自己的 Mac 上给整批视频生成字幕",
        storyteller: "有声书、阅读器和 46 节课的课程编排，用在我的课上",
        lego: "输入说明书 PDF，输出踩着节拍的拼装短视频",
        news: "自动发布到 YouTube 和 Twitter",
        jobs: "5,000 多条职位，每天更新",
        boliga: "每晚检查 24 个邮编",
        collector: "一键保存，数据不出本机",
        exam: "20 个知识点轮换，直到全部覆盖",
        site: "三种语言，纯 HTML、CSS 和 JavaScript",
        taobao: "被验证码拦下，写成了一篇讲电商为 agent 设计的文章",
        tweets: "早期的 ChatGPT 实验"
      },
      groups: { media: "写作与媒体", data: "市场数据", products: "产品与工具", early: "早期尝试" },
      items: {
        wechat: ["公众号 AI 写作", "把丹麦新闻改写成面向在丹麦华人的实用中文文章。Claude 检索并核对公开资料、写成文章，脚本再把它推送到公众号草稿箱，并发布到 Google Blogger。", "把丹麦新闻整理成经过核对、面向华人的中文文章。"],
        video: ["视频自动加字幕", "用本地 Whisper 模型在 Mac 上批量给视频生成中文字幕，再处理断句、口水词和繁简转换。"],
        storyteller: ["中文课的有声书和阅读器", "把扫描版《郑渊洁十二生肖童话》做成分角色配音的有声书，配一个逐句高亮的网页阅读器、每个字的拼音（多音字按上下文判断），以及 46 节课的课程编排。", "把扫描版故事书做成有声书、阅读器和课程材料。"],
        lego: ["LEGO Builder", "把乐高拼装说明书 PDF 变成竖屏短视频，积木踩着节拍一块块拼上去。Claude 读懂并评估每一步，Remotion 负责渲染视频。", "把 LEGO 说明书变成积木逐步拼装的短视频。"],
        news: ["一分钟新闻", "抓取文章，让 ChatGPT 写成简短新闻，自动发布到 YouTube 和 Twitter。"],
        jobs: ["哥本哈根求职市场追踪", "抓取 Jobindex 上大哥本哈根和北西兰岛的全部在招职位（5,000 多条），每天更新，分析发布趋势、各职能需求和职位对外国人的友好程度。陪跑时还能把学员档案和新职位做匹配。"],
        boliga: ["每日房源报告", "每天晚上由 Claude 定时任务检查哥本哈根周边 24 个邮编的 Boliga 房源，生成新房源和降价报告。"],
        collector: ["个人网页存档", "一个 Chrome 扩展加本地服务，一键保存网页正文，方便以后检索和分析。数据全部留在本机。"],
        exam: ["考试训练器", "备考微软 MB-800（Business Central）的学习系统：Claude 抓取练习题，命令行测验在 20 个知识点之间轮换，直到全部覆盖。"],
        site: ["这个网站", "和 Claude 一起设计、用三种语言写成、搭建完成。"],
        taobao: ["在淘宝购物的 AI agent", "用 Claude Code 做的实验：自动在淘宝下单并寄到丹麦。被验证码拦下之后，我写了一篇文章，讲电商为什么需要为 agent 重新设计。"],
        tweets: ["推特情绪分析", "抓取推文，用 ChatGPT 做情绪分析。"]
      },
      viewTitle: "我如何与 AI 协作",
      zonesTitle: "和 AI 合作的四种模式",
      zonesIntro: "根据我掌握的信息和 AI 能访问的内容，选择合适的协作方式。",
      axes: ["我知道", "我不知道", "AI 知道", "AI 不知道"],
      zones: [
        ["委派执行", "处理边界清晰的任务，设定验收标准并检查输出。"],
        ["辅助学习", "让 AI 解释陌生选项，再独立核实。"],
        ["补充背景", "提供它看不到的业务知识与限制。"],
        ["共同探索", "把建议当作假设，验证后再采用。"]
      ],
      takes: [
        ["先定义结果", "先定具体目标和验收标准，再选工具。"],
        ["工程师工作扩展", "把时间投向产品决策、架构和工程质量。"],
        ["人承担责任", "核实生成的代码与结论，并对最终结果负责。"]
      ],
      linkedin: "在 LinkedIn 上看我的文章",
      toolsTitle: "每天用的工具"
    },
    projects: {
      cdp: {
        title: "客户数据平台", where: "乐高集团，2022–2024",
        body: "整合众多上游系统的数据，把行为事件合成 360 度用户画像，为营销活动和 lego.com 的个性化体验生成人群分组。",
        diagram: ["上游系统", "360° 客户画像", "人群分组"]
      },
      zeronorth: {
        title: "航线、排放与加油", where: "ZeroNorth，2020–2023",
        body: "我们最重要的产品：根据天气计算航线，显示二氧化碳排放，优化船速。围绕它我们还做了船队总览、告诉操作员在哪里、什么时候、加多少油的加油计划工具，以及所有应用共用的地图组件。",
        diagram: ["天气", "优化航线", "更省油，更少排放"]
      },
      tsui: {
        title: "Tradeshift UI 与 Elements", where: "Tradeshift，2015–2020",
        body: "能在任何框架里使用的 UI 组件：React、Angular、jQuery，或者不用框架。Elements 把它们重写成 Web Components，开发者可以像搭积木一样做应用，不依赖任何框架。我对组件 API 设计的理解，大多来自这个项目。"
      },
      chrome: {
        title: "Tradeshift Chrome", where: "Tradeshift",
        body: "整个平台的导航中枢，负责 URL 路由、消息分发、WebSocket 和应用加载。这是 Tradeshift 第一个 React + Redux 项目，上线前我们换成了 Preact。"
      },
      news: {
        title: "一分钟新闻", where: "业余项目",
        body: "用 ChatGPT 生成简短新闻，自动发布到 YouTube 和 Twitter。"
      }
    },
    years: [
      ["2026", "用 Claude Code 做了大部分 AI 项目；录完 43 节求职课；开始 1 对 1 求职陪跑，已有四位学员找到工作，还有五位正在陪跑中。"],
      ["2025", "All in AI：工作、学习、个人项目，所有事情都用 AI 来做。「生活在丹麦」开始日更。"],
      ["2024", "两年的努力之后，客户数据平台上线。开始每周六教中文。"],
      ["2023", "加入乐高集团，开始新的职业阶段。"],
      ["2022", "疫情结束，生活终于回到正轨。"],
      ["2021", "迎来二女儿 Lisa。"],
      ["2020", "换了新工作，买了第一辆车。"],
      ["2019", "申请丹麦永久居留，尝试新的职业方向。"],
      ["2018", "通过 PD3 丹麦语考试，为女儿读育儿书。"],
      ["2017", "开始写在丹麦生活的文章，为女儿的到来做好准备。"],
      ["2016", "和妻子结婚。"],
      ["2015", "在丹麦开始新生活，在 Tradeshift 开启新事业。"],
      ["2014", "组建新的技术团队。"],
      ["2013", "加入创业公司，开始新的旅程。"],
      ["2012", "努力工作，在中金站稳脚跟。"],
      ["2011", "选择工作，放弃代尔夫特的博士。"],
      ["2010", "硕士毕业。"],
      ["2009", "读研期间做了更多实际项目。"],
      ["2008", "选择读研，而不是工作。"]
    ]
  }
};
