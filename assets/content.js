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
      { zh: "简历要不要放照片、年龄、性别、婚姻状况（中外规则完全相反）", url: "https://youtu.be/DABc6VjRevM" },
      { zh: "sponsor 不了签证的岗位，大半的机会流失", url: "https://youtu.be/jwpC4e5dBCY" },
      { zh: "招聘平台被 AI 生成的假岗位淹没", url: "https://youtu.be/fvDjg5gvFHk" }
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
  life: [
    { id: "delft", at: "2011-06" },
    { id: "move", at: "2015-06" },
    { id: "married", at: "2016-06" },
    { id: "pd3", at: "2018-06" },
    { id: "pr", at: "2019-06" },
    { id: "lisa", at: "2021-06" },
    { id: "cdp", at: "2024-06" },
    { id: "ai", at: "2025-01" }
  ],
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
    { id: "tsui", favourite: true, links: [
      ["GitHub", "https://github.com/tradeshift/elements"],
      ["ui.tradeshift.com", "https://ui.tradeshift.com/"]
    ] },
    { id: "cdp" },
    { id: "zeronorth" },
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
      pdf: "Save CV as PDF",
      contactCta: "Get in touch",
      filterAll: "All",
      tabCourse: "Free course",
      tabsLabel: "Outside work",
      quick: [["20", "years building software"], ["LEGO", "customer data platform"], ["12", "AI projects since 2023"], ["3", "languages: Chinese, English, Danish"]],
      skip: "Skip to content",
      now: "now",
      wallTitle: "Twenty years, brick by brick",
      wallIntro: "Every brick is a job, a degree or a moment from my life, laid out on a timeline. Select a brick to read about it.",
      wallKey: "Grey bricks are Beijing, borrowed from the hutong walls. Coloured bricks are Copenhagen, borrowed from the houses on Nyhavn.",
      courses: { ai: "AI projects", life: "Life", side: "On the side", teach: "Teaching", work: "Work", study: "Study" },
      moved: "Beijing → Copenhagen",
      wallHint: "Start with the newest brick, or pick any other.",
      readMore: "Read more",
      workTitle: "Work",
      inMyWords: "Looking back",
      projectsTitle: "Things I've built",
      favourite: "My favourite",
      yearsTitle: "Year by year",
      yearsIntro: "One line for each year since I finished university.",
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
      lede: "I'm a full-stack engineer with nearly 20 years of experience, and today I build the customer data platform at the LEGO Group. Ever since ChatGPT came out, I've been all in on AI: I use it for my work, my learning and every side project.",
      aside: "I started in Beijing and moved to Copenhagen in 2015. Outside work I teach Chinese on Saturdays, coach people looking for jobs in Denmark, and write 生活在丹麦, a daily Chinese publication about Denmark.",
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
    life: {
      ai: { label: "All in AI", text: "2025: Decided to do everything with AI: work, learning and personal projects." },
      delft: { label: "Delft", text: "2011: I chose work over a PhD at Delft University." },
      move: { label: "Move", text: "2015: Left China for the first time and started a new life in Denmark." },
      married: { label: "Wedding", text: "2016: Married my wife." },
      pd3: { label: "PD3", text: "2018: Passed the PD3 Danish test." },
      pr: { label: "Residence", text: "2019: Applied for permanent residence in Denmark." },
      lisa: { label: "Lisa", text: "2021: Welcomed my second daughter, Lisa." },
      cdp: { label: "Launch", text: "2024: The customer data platform at LEGO went live." },
      coach: { label: "Coaching", text: "2026: The first person I coached through the Danish job search got a job. Four so far." }
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
      lede: "In December 2017 I started writing in Chinese about what I was learning in Denmark: taxes, housing, schools, the language. Today it's a daily WeChat publication read by Chinese people in Denmark and in China.",
      stats: {
        posts: "posts since December 2017",
        followers: "followers on WeChat",
        readers: "readers in the last 30 days",
        top: "readers of one article, October 2026"
      },
      topicsTitle: "What I write about",
      topics: [
        "Jobs and companies, from Novo Nordisk to LEGO",
        "The housing market in Copenhagen",
        "Work permits, residence and citizenship rules",
        "Taxes, pensions and energy prices",
        "Everyday Danish life and culture"
      ],
      recentTitle: "Recent articles",
      recent: [
        "Denmark lowers the salary threshold for work permits to DKK 322,000, and China is on the list",
        "LEGO comes first and Novo Nordisk drops out of the top two among young Danes' favourite employers",
        "Novo Nordisk has cut more than 7,000 jobs in a year, and Denmark's life-science job market is being reshuffled",
        "Copenhagen apartment listings up 94% in a year"
      ],
      coachTitle: "Video, live Q&A and job coaching",
      coach: "On the WeChat video channel I post short videos about CVs and job hunting in Denmark, and I host a weekly live Q&A. In 2026 I started coaching people one-to-one through their job search. Four of them have found jobs so far, and five more are in coaching now.",
      audience: "About two thirds of readers are 26 to 45, split evenly between women and men. The largest group of followers lives in Denmark, followed by Beijing, Guangdong and Shanghai, and there are readers in 107 other countries and regions.",
      note: "I run it alongside my full-time job: writing, data, video and community.",
      channelsTitle: "Where to read it",
      channels: {
        wechat: { name: "WeChat", text: "Search for 生活在丹麦 or the ID live_in_denmark. Daily articles, videos and a weekly live Q&A." },
        blog: { name: "Blog", text: "The same articles on the open web, no WeChat needed: {posts} posts and {views} views so far." }
      }
    },
    teaching: {
      title: "Saturday mornings: teaching Chinese",
      lede: "Every Saturday from 10:00 to 12:45 I teach Chinese at 灵比中文学校 (Lingbi Chinese School) in Virum, north of Copenhagen. My class is for children aged 10 and up who are starting Chinese from scratch.",
      facts: [
        ["When", "Saturdays, 10:00–12:45"],
        ["Where", "Fuglsanggårdsskolen, Virum"],
        ["Who", "Ages 10 and up, no Chinese needed"],
        ["Class size", "Fewer than 10 students"],
        ["Since", "2024"]
      ],
      planTitle: "Three lessons, three jobs",
      plan: [
        ["First lesson", "While everyone is still fresh: pinyin, grammar and new characters."],
        ["Second lesson", "Speaking. Pronunciation, tongue twisters and word games such as \"you describe, I guess\"."],
        ["Third lesson", "Stories that keep a tired class listening: Chinese history, new technology, the news and classical texts."]
      ],
      extrasTitle: "Outside the textbook",
      extras: [
        "Every week each student sends me a 60-second voice message in Chinese.",
        "In one lesson the class built a small web page that flashes pinyin and characters for practice.",
        "We use ChatGPT and Duolingo as study tools.",
        "Once a term we cook a Chinese dish together, and the term ends with a Chinese film.",
        "After every lesson, parents get a written summary and a short video recap."
      ],
      quote: "Language is a tool. Once students can use it, they can explore Chinese culture themselves, and interest becomes the real reason they keep learning.",
      quoteSource: "From my teacher profile at the school",
      link: "About the school and its teachers"
    },
    coaching: {
      title: "One-to-one job coaching",
      lede: "Since early 2026 I have coached people through the Danish job market, one person at a time. It started when I helped my wife, who has a humanities degree, find work here. I keep doing it because it keeps me close to how hiring in Denmark really works today.",
      stats: [
        ["4", "people hired so far"],
        ["5", "people in coaching right now"],
        ["3.5–7", "months of coaching per person"],
        ["43", "free lessons in my job-search course"]
      ],
      casesTitle: "Four people, four routes",
      cases: [
        ["Pharmacy graduate, University of Copenhagen", "Fluent Danish, but months without an interview while Novo Nordisk layoffs filled the market with experienced candidates. We rewrote the CV as a local candidate, looked beyond Copenhagen and read every job ad line by line.", "Offer at the first interview, after 3.5 months"],
        ["Business graduate, CBS", "No Danish, more than a year since graduating and the visa clock running. After trying consulting, compliance and marketing, we settled on growth roles: a newer field with less competition.", "Full-time offer after 7 months"],
        ["Career changer with two children", "Six years of technical work in China, then four years of restaurant jobs in Denmark. We dropped the old direction, went back to the technical background and kept a strict weekly pace.", "Job in the field after 7 months"],
        ["Master's student", "We used student status on purpose: student jobs are easier to get than full-time roles, and large Danish companies keep places for them.", "Student job at a large company"]
      ],
      howTitle: "How I work",
      how: [
        ["Direction before effort", "If months of applications bring no interviews, we change direction instead of sending more."],
        ["Answer the job ad", "We take each ad apart: what it asks for, what problem the team has, and how your experience solves it."],
        ["One problem at a time", "Next year's visa and salary worries can wait. This month is about this offer."],
        ["Use the system", "Students keep their student status until they have a student job or internship."]
      ],
      who: "It's for adults who want to change their own situation. Coaching is paid, and I don't take on people whose parents signed them up.",
      videosTitle: "The stories on video (in Chinese)",
      videoNames: ["First person hired", "Second person hired", "Why I coach, and early results", "A student job", "Offer at the first interview"]
    },
    course: {
      title: "A free job-search course",
      lede: "From June to September 2026 I recorded a 43-lesson course in Chinese on finding work in Denmark. It's free on YouTube and WeChat Channels, with short notes on Xiaohongshu. It's the same material I use with the people I coach.",
      modulesTitle: "Seven parts",
      lessons: "Lessons {a}–{b}",
      modules: [
        ["Know yourself", "Positioning, and the mental side of a long search."],
        ["Groundwork", "Visas, Danish workplace culture and LinkedIn."],
        ["CV and cover letter", "The rules, passing the first screen, Danish CV culture, timing and pitfalls."],
        ["Reading the job ad", "Read a job ad in layers, catch what it hints at, and prepare backwards from it."],
        ["Interviews", "How Danish interviews work, preparation, a story bank, follow-up and salary negotiation."],
        ["Networking", "Why it matters so much in Denmark, and how to build one."],
        ["Personal branding", "A framework you can use at every stage of a search."]
      ],
      playlist: "Watch the whole course",
      channelsTitle: "Where to watch",
      channels: {
        youtube: { name: "YouTube", text: "AI时代求职 ({handle}), {subs} subscribers. The full course, the question series and the coaching stories." },
        wechat: { name: "WeChat Channels", text: "Search for 生活在丹麦. Lessons and the weekly live Q&A." },
        xhs: { name: "Xiaohongshu", text: "张丁亮, ID {xhs}. Short notes on CVs and job hunting." }
      },
      qaTitle: "Common questions, one short video each",
      qa: [
        "200 applications and not a single reply",
        "How ATS screening actually works",
        "Photo, age and marital status on a CV? Chinese and Danish rules are opposite",
        "When a job can't sponsor a visa",
        "Job boards flooded with AI-generated fake jobs"
      ],
      qaPlaylist: "All 23 questions"
    },
    ai: {
      title: "All in on AI",
      lede: "I have used AI since ChatGPT came out at the end of 2022, and in 2025 I decided to use it for everything: my work at the LEGO Group, how I learn, and every personal project. The biggest lesson so far is that the tool matters less than the problem you bring to it.",
      workTitle: "At work",
      work: [
        ["A code reviewer that reviews like me", "A personal review skill built with GitHub Copilot that runs on my own machine. I told it what I care about (performance, test coverage, language pitfalls and business edge cases), and it learns my patterns with every review. It catches things I might scroll past on a Friday afternoon."],
        ["Onboarding new engineers", "An automated onboarding flow for our engineering projects, so new colleagues can set up and find their way around the codebase on their own."],
        ["Talking instead of typing", "Voice input with Typeless plus AI assistants for specs, plans, docs and first drafts. Work that used to take a week now takes two or three hours, and the time goes to business logic and stakeholders."]
      ],
      builtTitle: "Things I built with AI",
      builtIntro: "Twelve projects since 2023, most of them built in 2026 with Claude Code. Most solve a problem from my own week: writing, teaching, job hunting, finding a home.",
      groups: { media: "Writing and media", data: "Market data", products: "Products and tools", early: "Early experiments" },
      items: {
        wechat: ["WeChat AI writer", "Turns Danish news into practical Chinese articles for Chinese people in Denmark. Claude searches and checks public sources and writes the piece, and a script pushes it to the WeChat draft box and publishes it on Blogger."],
        video: ["Video subtitler", "Batch-generates Chinese subtitles for my videos with a local Whisper model on my Mac, then fixes line breaks, filler words and traditional characters."],
        storyteller: ["Audiobook and reader for my Chinese class", "Turns a scanned book of Zheng Yuanjie's zodiac stories into an audiobook with a voice for each character, a reader that highlights each sentence as it is read, pinyin for every character and a 46-lesson plan."],
        lego: ["LEGO Builder", "Turns a LEGO building-instruction PDF into a vertical short video where bricks snap into place on the beat. Claude reads and scores every step, and Remotion renders the video."],
        news: ["One-minute news", "Collects articles, has ChatGPT write short news pieces, and posts them automatically to YouTube and Twitter."],
        jobs: ["Copenhagen job market tracker", "Crawls every open job on Jobindex in Greater Copenhagen and North Zealand (5,000+ ads), updates daily, and reports trends, demand by field and how foreigner-friendly the ads are. For coaching, it matches a candidate's profile against new jobs."],
        boliga: ["Daily housing report", "A scheduled Claude task checks Boliga every evening across 24 postcodes around Copenhagen and writes a report of new listings and price drops."],
        collector: ["Personal web archive", "A Chrome extension and a local service that save the text of any page with one click, for search and analysis later. Nothing leaves my machine."],
        exam: ["Exam trainer", "A study system for the Microsoft MB-800 Business Central exam. Claude fetches practice questions, and a command-line quiz rotates through 20 topics until all are covered."],
        site: ["This website", "Designed, written in three languages and built together with Claude."],
        taobao: ["An AI agent that shops on Taobao", "An experiment with Claude Code that shops on Taobao and ships to Denmark. The CAPTCHA that stopped it became a post on why online shops need to be built for agents."],
        tweets: ["Tweet sentiment", "Collects tweets and uses ChatGPT for sentiment analysis."]
      },
      viewTitle: "How I think about AI",
      zonesTitle: "Four ways to work with AI",
      zonesIntro: "Before I open a chat window, I ask one question: who knows the answer, me or the AI?",
      axes: ["I know", "I don't know", "AI knows", "AI doesn't know"],
      zones: [
        ["High-efficiency zone", "Delegate and move fast. You direct, AI executes, and you own the result."],
        ["Learning zone", "AI is a patient tutor. Ask open questions."],
        ["Context zone", "AI can't see your company's data or constraints. Give it the context, or expect generic answers."],
        ["Exploration zone", "Think it through together, and treat every answer as a hypothesis to check."]
      ],
      takes: [
        ["Find the use case first", "Whether it's Claude, ChatGPT or Gemini matters less than having a concrete problem. With one, weeks of work can shrink to hours."],
        ["AI compresses the middle layer", "Engineers are not being replaced. Their work is expanding into product, architecture and UI, while the roles between business and engineering get squeezed."],
        ["Agent-first is the new mobile-first", "Online shops still treat AI agents as bots. Whoever builds commerce for agents will win, the way mobile-first apps did after 2008."],
        ["Prompt like a language learner", "Keyword chains instead of polite sentences: the same output, fewer tokens, lower cost."],
        ["Europe is late, not out", "Open models have lowered the bar to entry. What Europe lacks is compute, capital and speed, and those are policy problems."]
      ],
      linkedin: "Read my posts on LinkedIn",
      toolsTitle: "Tools I use every day"
    },
    projects: {
      cdp: {
        title: "Customer Data Platform", where: "LEGO Group, 2022–2024",
        body: "Integrates data from many upstream systems, combines events into 360-degree customer profiles, and creates audience segments for marketing campaigns and personalised experiences on lego.com."
      },
      zeronorth: {
        title: "Routes, emissions and bunkering", where: "ZeroNorth, 2020–2023",
        body: "Our most important product calculates routes from the weather, shows CO₂ emissions and optimises speed. Around it we built a fleet overview, a bunker planner that tells operators where, when and how much fuel to buy, and a shared map component used across every app."
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
      ["2026", "Start 1:1 job-search coaching. Four people have found jobs so far, and five are in coaching now."],
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
      pdf: "Gem CV som PDF",
      contactCta: "Kontakt mig",
      filterAll: "Alle",
      tabCourse: "Gratis kursus",
      tabsLabel: "Uden for arbejdet",
      quick: [["20", "år med softwareudvikling"], ["LEGO", "kundedataplatform"], ["12", "AI-projekter siden 2023"], ["3", "sprog: kinesisk, engelsk, dansk"]],
      skip: "Gå til indhold",
      now: "nu",
      wallTitle: "Tyve år, sten for sten",
      wallIntro: "Hver sten er et job, en uddannelse eller et øjeblik fra mit liv, sat ind på en tidslinje. Vælg en sten for at læse om den.",
      wallKey: "De grå sten er Beijing, lånt fra murene i hutongerne. De farvede sten er København, lånt fra husene i Nyhavn.",
      courses: { ai: "AI-projekter", life: "Livet", side: "Ved siden af", teach: "Undervisning", work: "Arbejde", study: "Uddannelse" },
      moved: "Beijing → København",
      wallHint: "Start med den nyeste sten, eller vælg en anden.",
      readMore: "Læs mere",
      workTitle: "Arbejde",
      inMyWords: "Set i bakspejlet",
      projectsTitle: "Ting, jeg har bygget",
      favourite: "Min favorit",
      yearsTitle: "År for år",
      yearsIntro: "Én linje for hvert år, siden jeg blev færdig på universitetet.",
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
      lede: "Jeg er fullstack-udvikler med næsten 20 års erfaring og bygger i dag kundedataplatformen hos LEGO Koncernen. Lige siden ChatGPT kom, er jeg gået all in på AI: jeg bruger det i mit arbejde, når jeg lærer, og i alle mine egne projekter.",
      aside: "Jeg startede i Beijing og flyttede til København i 2015. Ved siden af arbejdet underviser jeg i kinesisk om lørdagen, coacher folk, der søger job i Danmark, og skriver 生活在丹麦, et dagligt kinesisk medie om Danmark.",
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
    life: {
      ai: { label: "All in AI", text: "2025: Besluttede at gøre alt med AI: arbejde, læring og egne projekter." },
      delft: { label: "Delft", text: "2011: Jeg valgte arbejde frem for en ph.d. ved Delft University." },
      move: { label: "Flytning", text: "2015: Forlod Kina for første gang og startede et nyt liv i Danmark." },
      married: { label: "Bryllup", text: "2016: Blev gift med min kone." },
      pd3: { label: "PD3", text: "2018: Bestod Prøve i Dansk 3." },
      pr: { label: "Ophold", text: "2019: Søgte om permanent opholdstilladelse i Danmark." },
      lisa: { label: "Lisa", text: "2021: Bød min anden datter, Lisa, velkommen." },
      cdp: { label: "Lancering", text: "2024: Kundedataplatformen hos LEGO gik i luften." },
      coach: { label: "Coaching", text: "2026: Den første, jeg coachede gennem jobsøgningen i Danmark, fik job. Fire indtil videre." }
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
      lede: "I december 2017 begyndte jeg at skrive på kinesisk om det, jeg lærte i Danmark: skat, bolig, skoler og sproget. I dag er det et dagligt WeChat-medie, som læses af kinesere i Danmark og i Kina.",
      stats: {
        posts: "opslag siden december 2017",
        followers: "følgere på WeChat",
        readers: "læsere de seneste 30 dage",
        top: "læsere af én artikel, oktober 2026"
      },
      topicsTitle: "Det skriver jeg om",
      topics: [
        "Job og virksomheder, fra Novo Nordisk til LEGO",
        "Boligmarkedet i København",
        "Regler for arbejdstilladelse, ophold og statsborgerskab",
        "Skat, pension og energipriser",
        "Dansk hverdag og kultur"
      ],
      recentTitle: "Nylige artikler",
      recent: [
        "Beløbsgrænsen for arbejdstilladelse sænkes til 322.000 kr., og Kina er på listen",
        "LEGO vinder, og Novo Nordisk falder ud af top to blandt unge danskeres foretrukne arbejdsgivere",
        "Novo Nordisk har skåret over 7.000 stillinger på et år, og det danske life science-jobmarked bliver rystet om",
        "Udbuddet af lejligheder i København er steget 94 % på et år"
      ],
      coachTitle: "Video, live-Q&A og jobcoaching",
      coach: "På WeChats videokanal laver jeg korte videoer om CV'er og jobsøgning i Danmark, og jeg holder en ugentlig live-Q&A. I 2026 begyndte jeg at coache folk én til én gennem deres jobsøgning. Fire af dem har indtil videre fået job, og fem mere er i gang nu.",
      audience: "Omkring to tredjedele af læserne er mellem 26 og 45 år, og der er lige mange kvinder og mænd. Den største gruppe følgere bor i Danmark, efterfulgt af Beijing, Guangdong og Shanghai, og der er læsere i 107 andre lande og regioner.",
      note: "Jeg driver det ved siden af mit fuldtidsjob: skrivning, data, video og fællesskab.",
      channelsTitle: "Her kan du læse det",
      channels: {
        wechat: { name: "WeChat", text: "Søg efter 生活在丹麦 eller ID'et live_in_denmark. Daglige artikler, videoer og en ugentlig live-Q&A." },
        blog: { name: "Blog", text: "De samme artikler på det åbne web, uden WeChat: {posts} indlæg og {views} visninger indtil videre." }
      }
    },
    teaching: {
      title: "Lørdag formiddag: kinesiskundervisning",
      lede: "Hver lørdag fra 10.00 til 12.45 underviser jeg i kinesisk på 灵比中文学校 (Lingbi Kinesisk Skole) i Virum nord for København. Mit hold er for børn på 10 år og derover, som starter helt fra bunden.",
      facts: [
        ["Hvornår", "Lørdage kl. 10.00–12.45"],
        ["Hvor", "Fuglsanggårdsskolen, Virum"],
        ["Hvem", "Fra 10 år, ingen forkundskaber"],
        ["Holdstørrelse", "Under 10 elever"],
        ["Siden", "2024"]
      ],
      planTitle: "Tre lektioner, tre opgaver",
      plan: [
        ["Første lektion", "Mens alle er friske: pinyin, grammatik og nye tegn."],
        ["Anden lektion", "Mundtlighed: udtale, remser og ordlege som \"du beskriver, jeg gætter\"."],
        ["Tredje lektion", "Historier, der holder et træt hold vågent: kinesisk historie, ny teknologi, nyheder og klassiske tekster."]
      ],
      extrasTitle: "Ud over lærebogen",
      extras: [
        "Hver uge sender hver elev mig en talebesked på 60 sekunder på kinesisk.",
        "I én lektion byggede holdet en lille webside, der viser pinyin og tegn til øvelse.",
        "Vi bruger ChatGPT og Duolingo som studieværktøjer.",
        "En gang pr. semester laver vi en kinesisk ret sammen, og semestret slutter med en kinesisk film.",
        "Efter hver lektion får forældrene et skriftligt referat og en kort video."
      ],
      quote: "Sprog er et værktøj. Når eleverne kan bruge det, kan de selv udforske kinesisk kultur, og interessen bliver den egentlige grund til, at de bliver ved med at lære.",
      quoteSource: "Fra min lærerprofil på skolen",
      link: "Om skolen og lærerne"
    },
    coaching: {
      title: "Jobcoaching én til én",
      lede: "Siden begyndelsen af 2026 har jeg coachet folk gennem det danske jobmarked, én ad gangen. Det startede, da jeg hjalp min kone, der har en humanistisk uddannelse, med at finde arbejde her. Jeg fortsætter, fordi det holder mig tæt på, hvordan rekruttering i Danmark faktisk foregår i dag.",
      stats: [
        ["4", "har fået job indtil videre"],
        ["5", "er i gang med coaching lige nu"],
        ["3,5–7", "måneders coaching pr. person"],
        ["43", "gratis lektioner i mit jobsøgningskursus"]
      ],
      casesTitle: "Fire personer, fire veje",
      cases: [
        ["Farmaceut, Københavns Universitet", "Flydende dansk, men måneder uden samtaler, mens Novo Nordisks fyringer fyldte markedet med erfarne kandidater. Vi skrev CV'et om som lokal kandidat, kiggede uden for København og læste hvert jobopslag linje for linje.", "Tilbud ved første samtale efter 3,5 måneder"],
        ["Erhvervsuddannet fra CBS", "Intet dansk, over et år siden dimission og visumuret tikkede. Efter forsøg med konsulent, compliance og marketing landede vi på growth-roller: et nyere felt med mindre konkurrence.", "Fuldtidsstilling efter 7 måneder"],
        ["Karriereskifter med to børn", "Seks års teknisk arbejde i Kina og derefter fire år med restaurantjob i Danmark. Vi droppede den gamle retning, gik tilbage til den tekniske baggrund og holdt et fast ugentligt tempo.", "Job inden for faget efter 7 måneder"],
        ["Kandidatstuderende", "Vi brugte studiestatus bevidst: studiejob er lettere at få end fuldtidsstillinger, og store danske virksomheder har pladser til dem.", "Studiejob i en stor virksomhed"]
      ],
      howTitle: "Sådan arbejder jeg",
      how: [
        ["Retning før indsats", "Hvis måneders ansøgninger ikke giver samtaler, skifter vi retning i stedet for at sende flere."],
        ["Svar på jobopslaget", "Vi skiller hvert opslag ad: hvad der efterspørges, hvilket problem teamet har, og hvordan din erfaring løser det."],
        ["Ét problem ad gangen", "Næste års bekymringer om visum og løn kan vente. Denne måned handler om dette tilbud."],
        ["Brug systemet", "Studerende beholder deres studiestatus, indtil de har et studiejob eller en praktikplads."]
      ],
      who: "Det er for voksne, der selv vil ændre deres situation. Coachingen er betalt, og jeg tager ikke folk, hvis forældre har tilmeldt dem.",
      videosTitle: "Historierne på video (på kinesisk)",
      videoNames: ["Den første i job", "Den anden i job", "Hvorfor jeg coacher, og de første resultater", "Et studiejob", "Tilbud ved første samtale"]
    },
    course: {
      title: "Et gratis jobsøgningskursus",
      lede: "Fra juni til september 2026 optog jeg et kursus på 43 lektioner på kinesisk om at finde arbejde i Danmark. Det er gratis på YouTube og WeChat Channels, med korte noter på Xiaohongshu. Det er det samme materiale, jeg bruger med dem, jeg coacher.",
      modulesTitle: "Syv dele",
      lessons: "Lektion {a}–{b}",
      modules: [
        ["Kend dig selv", "Positionering og den mentale side af en lang jobsøgning."],
        ["Grundlaget", "Visum, dansk arbejdskultur og LinkedIn."],
        ["CV og ansøgning", "Reglerne, første screening, dansk CV-kultur, timing og faldgruber."],
        ["Læs jobopslaget", "Læs et opslag i lag, fang det underforståede, og forbered dig baglæns ud fra det."],
        ["Jobsamtaler", "Sådan foregår danske samtaler, forberedelse, en historiebank, opfølgning og lønforhandling."],
        ["Netværk", "Hvorfor det betyder så meget i Danmark, og hvordan du bygger det."],
        ["Personligt brand", "En ramme, du kan bruge i alle faser af jobsøgningen."]
      ],
      playlist: "Se hele kurset",
      channelsTitle: "Her kan du se det",
      channels: {
        youtube: { name: "YouTube", text: "AI时代求职 ({handle}), {subs} abonnenter. Hele kurset, spørgsmålsserien og historierne fra coachingen." },
        wechat: { name: "WeChat Channels", text: "Søg efter 生活在丹麦. Lektioner og den ugentlige live-Q&A." },
        xhs: { name: "Xiaohongshu", text: "张丁亮, ID {xhs}. Korte noter om CV'er og jobsøgning." }
      },
      qaTitle: "Almindelige spørgsmål, én kort video hver",
      qa: [
        "200 ansøgninger og ikke ét svar",
        "Sådan fungerer ATS-screening",
        "Foto, alder og civilstand på CV'et? Kinesiske og danske regler er modsatte",
        "Når jobbet ikke kan give visum",
        "Jobportaler fyldt med AI-genererede falske stillinger"
      ],
      qaPlaylist: "Alle 23 spørgsmål"
    },
    ai: {
      title: "All in på AI",
      lede: "Jeg har brugt AI, siden ChatGPT kom i slutningen af 2022, og i 2025 besluttede jeg at bruge det til alt: mit arbejde i LEGO Koncernen, når jeg lærer, og alle mine egne projekter. Den største lære indtil videre er, at værktøjet betyder mindre end det problem, du kommer med.",
      workTitle: "På arbejdet",
      work: [
        ["En code reviewer, der reviewer som mig", "Et personligt review-skill bygget med GitHub Copilot, som kører på min egen maskine. Jeg har fortalt det, hvad jeg går op i (performance, testdækning, faldgruber i sproget og forretningsmæssige edge cases), og det lærer mine mønstre for hver review. Det fanger ting, jeg måske ville overse en fredag eftermiddag."],
        ["Onboarding af nye udviklere", "Et automatiseret onboarding-flow til vores udviklingsprojekter, så nye kolleger selv kan sætte miljøet op og finde rundt i koden."],
        ["Tale i stedet for at skrive", "Taleinput med Typeless og AI-assistenter til specifikationer, planer, dokumentation og første udkast. Arbejde, der før tog en uge, tager nu to-tre timer, og tiden går til forretningslogik og interessenter."]
      ],
      builtTitle: "Ting, jeg har bygget med AI",
      builtIntro: "Tolv projekter siden 2023, de fleste bygget i 2026 med Claude Code. De fleste løser et problem fra min egen hverdag: at skrive, undervise, søge job og finde en bolig.",
      groups: { media: "Skrivning og medier", data: "Markedsdata", products: "Produkter og værktøjer", early: "Tidlige eksperimenter" },
      items: {
        wechat: ["WeChat AI-skribent", "Laver danske nyheder om til praktiske kinesiske artikler for kinesere i Danmark. Claude søger og tjekker offentlige kilder og skriver artiklen, og et script sender den til WeChats kladdemappe og udgiver den på Blogger."],
        video: ["Videoundertekster", "Laver kinesiske undertekster til mine videoer i batch med en lokal Whisper-model på min Mac og retter derefter linjeskift, fyldord og traditionelle tegn."],
        storyteller: ["Lydbog og læser til mit kinesiskhold", "Laver en skannet bog med Zheng Yuanjies stjernetegnseventyr om til en lydbog med en stemme til hver figur, en læser, der fremhæver hver sætning, mens den læses op, pinyin til hvert tegn og en plan for 46 lektioner."],
        lego: ["LEGO Builder", "Laver en LEGO-byggevejledning i PDF om til en lodret kortvideo, hvor klodserne klikker på plads i takt med musikken. Claude læser og vurderer hvert trin, og Remotion renderer videoen."],
        news: ["Et-minuts-nyheder", "Samler artikler, lader ChatGPT skrive korte nyheder og lægger dem automatisk på YouTube og Twitter."],
        jobs: ["Overblik over jobmarkedet i København", "Henter alle ledige stillinger på Jobindex i Storkøbenhavn og Nordsjælland (over 5.000 opslag), opdateres dagligt og viser tendenser, efterspørgsel pr. fag og hvor venlige opslagene er over for udlændinge. Til coaching matcher det en kandidats profil med nye stillinger."],
        boliga: ["Daglig boligrapport", "En planlagt Claude-opgave tjekker Boliga hver aften i 24 postnumre omkring København og skriver en rapport over nye boliger og prisfald."],
        collector: ["Personligt webarkiv", "En Chrome-udvidelse og en lokal tjeneste, der gemmer teksten fra en side med ét klik til senere søgning og analyse. Intet forlader min maskine."],
        exam: ["Eksamenstræner", "Et studiesystem til Microsofts MB-800-eksamen i Business Central. Claude henter øvelsesspørgsmål, og en quiz i kommandolinjen roterer gennem 20 emner, til alle er dækket."],
        site: ["Denne hjemmeside", "Designet, skrevet på tre sprog og bygget sammen med Claude."],
        taobao: ["En AI-agent, der handler på Taobao", "Et eksperiment med Claude Code, der handler på Taobao og sender til Danmark. Den CAPTCHA, der stoppede den, blev til et opslag om, hvorfor webshops skal bygges til agenter."],
        tweets: ["Tweet-stemning", "Henter tweets og bruger ChatGPT til stemningsanalyse."]
      },
      viewTitle: "Sådan tænker jeg om AI",
      zonesTitle: "Fire måder at arbejde med AI på",
      zonesIntro: "Før jeg åbner et chatvindue, stiller jeg ét spørgsmål: hvem kender svaret, mig eller AI'en?",
      axes: ["Jeg ved det", "Jeg ved det ikke", "AI ved det", "AI ved det ikke"],
      zones: [
        ["Effektivitetszonen", "Uddeleger og kom hurtigt frem. Du styrer, AI'en udfører, og du står inde for resultatet."],
        ["Læringszonen", "AI'en er en tålmodig underviser. Stil åbne spørgsmål."],
        ["Kontekstzonen", "AI'en kan ikke se virksomhedens data eller begrænsninger. Giv den konteksten, ellers får du generiske svar."],
        ["Udforskningszonen", "Tænk det igennem sammen, og behandl hvert svar som en hypotese, der skal tjekkes."]
      ],
      takes: [
        ["Find brugsscenariet først", "Om det er Claude, ChatGPT eller Gemini, betyder mindre end at have et konkret problem. Med det kan uger af arbejde blive til timer."],
        ["AI presser mellemlaget", "Udviklere bliver ikke erstattet. Deres arbejde udvides til produkt, arkitektur og UI, mens rollerne mellem forretning og udvikling bliver presset."],
        ["Agent-first er det nye mobile-first", "Webshops behandler stadig AI-agenter som bots. Den, der bygger handel til agenter, vinder, sådan som mobile-first gjorde efter 2008."],
        ["Prompt som en sprogelev", "Nøgleordskæder i stedet for høflige sætninger: samme resultat, færre tokens, lavere pris."],
        ["Europa er sent ude, men ikke ude", "Åbne modeller har sænket adgangsbarren. Det, Europa mangler, er regnekraft, kapital og fart, og det er politiske problemer."]
      ],
      linkedin: "Læs mine opslag på LinkedIn",
      toolsTitle: "Værktøjer, jeg bruger hver dag"
    },
    projects: {
      cdp: {
        title: "Kundedataplatform", where: "LEGO Koncernen, 2022–2024",
        body: "Samler data fra mange kildesystemer, kombinerer hændelser til 360-graders kundeprofiler og skaber målgruppesegmenter til kampagner og personlige oplevelser på lego.com."
      },
      zeronorth: {
        title: "Ruter, udledning og bunkring", where: "ZeroNorth, 2020–2023",
        body: "Vores vigtigste produkt beregner ruter ud fra vejret, viser CO₂-udledning og optimerer farten. Omkring det byggede vi et flådeoverblik, en bunkerplanlægger, der fortæller operatører hvor, hvornår og hvor meget brændstof de skal købe, og en fælles kortkomponent til alle apps."
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
      ["2026", "Starter jobcoaching én til én. Fire har indtil videre fået job, og fem er i gang nu."],
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
      pdf: "保存 PDF 简历",
      contactCta: "联系我",
      filterAll: "全部",
      tabCourse: "免费求职课",
      tabsLabel: "工作之外",
      quick: [["20", "年软件开发经验"], ["乐高", "客户数据平台"], ["12", "个 AI 项目（2023 年至今）"], ["3", "种语言：中文、英语、丹麦语"]],
      skip: "跳到正文",
      now: "至今",
      wallTitle: "二十年，一砖一瓦",
      wallIntro: "每一块砖是一份工作、一段学业，或是生活里的一个时刻，按时间排开。点一块砖，看看它的故事。",
      wallKey: "灰砖是北京，取自胡同的灰墙；彩砖是哥本哈根，取自新港的彩色房子。",
      courses: { ai: "AI 项目", life: "生活", side: "业余", teach: "教学", work: "工作", study: "学业" },
      moved: "北京 → 哥本哈根",
      wallHint: "先从最新的一块看起，或者随便点一块。",
      readMore: "详细",
      workTitle: "工作经历",
      inMyWords: "回头看",
      projectsTitle: "我做过的东西",
      favourite: "我最喜欢的",
      yearsTitle: "逐年记",
      yearsIntro: "从大学毕业起，每年一句话。",
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
      lede: "我是一名全栈工程师，有近 20 年经验，现在在乐高集团搭建客户数据平台。自从 ChatGPT 出来，我就 All in AI：工作、学习和每一个个人项目都用 AI 来做。",
      aside: "职业生涯从北京开始，2015 年搬到哥本哈根。工作之外，我每周六教中文，1 对 1 陪跑在丹麦找工作的人，还运营每天更新的公众号「生活在丹麦」。",
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
    life: {
      ai: { label: "All in AI", text: "2025：决定所有事情都用 AI 来做：工作、学习和个人项目。" },
      delft: { label: "代尔夫特", text: "2011：选择工作，放弃了代尔夫特理工大学的博士。" },
      move: { label: "出国", text: "2015：第一次离开中国，在丹麦开始新生活。" },
      married: { label: "结婚", text: "2016：和我的妻子结婚。" },
      pd3: { label: "PD3", text: "2018：通过丹麦语 PD3 考试。" },
      pr: { label: "永居", text: "2019：申请丹麦永久居留。" },
      lisa: { label: "Lisa", text: "2021：二女儿 Lisa 出生。" },
      cdp: { label: "上线", text: "2024：乐高的客户数据平台正式上线。" },
      coach: { label: "陪跑", text: "2026：第一位求职陪跑学员在丹麦找到工作，目前已有四位。" }
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
      lede: "2017 年 12 月，我开始用中文记录在丹麦学到的东西：税、房子、学校、语言。现在它是一个每天更新的公众号，读者既有在丹麦的华人，也有在国内关注丹麦的人。",
      stats: {
        posts: "篇内容，始于 2017 年 12 月",
        followers: "位公众号关注者",
        readers: "近 30 天阅读人数",
        top: "单篇阅读人数（2026 年 10 月）"
      },
      topicsTitle: "写些什么",
      topics: [
        "工作与公司：从诺和诺德到乐高",
        "哥本哈根房市",
        "工签、居留和入籍政策",
        "税、养老金和能源价格",
        "丹麦的日常生活与文化"
      ],
      recentTitle: "近期文章",
      recent: [],
      coachTitle: "视频号、直播答疑和求职陪跑",
      coach: "在视频号上，我发关于简历和在丹麦求职的短视频，每周开一次直播答疑。2026 年开始做 1 对 1 求职陪跑，已有四位学员找到工作，还有五位正在陪跑中。",
      audience: "约三分之二的读者在 26 到 45 岁之间，男女各半。关注者最多的地区是丹麦，其次是北京、广东和上海，另外还分布在 107 个其他国家和地区。",
      note: "这些都是在全职工作之外做的：写作、看数据、剪视频、和读者交流。",
      channelsTitle: "在哪里看",
      channels: {
        wechat: { name: "微信公众号", text: "搜索「生活在丹麦」或 live_in_denmark。每天更新文章、视频，每周直播答疑。" },
        blog: { name: "博客", text: "同样的文章，不用微信也能看：目前 {posts} 篇，累计 {views} 次浏览。" }
      }
    },
    teaching: {
      title: "周六上午：教中文",
      lede: "每周六上午 10:00 到 12:45，我在哥本哈根北边 Virum 的灵比中文学校教中文。我的班级面向 10 岁以上、零基础开始学中文的孩子。",
      facts: [
        ["时间", "每周六 10:00–12:45"],
        ["地点", "Virum，Fuglsanggårdsskolen"],
        ["对象", "10 岁以上，零基础"],
        ["班级", "小班，不到 10 人"],
        ["开始", "2024 年"]
      ],
      planTitle: "三节课，各有分工",
      plan: [
        ["第一节", "精力最好的时候：拼音、语法和生字。"],
        ["第二节", "以口语为主：纠正发音、绕口令，还有“你描述，我来猜”这样的游戏。"],
        ["第三节", "讲故事，让累了的孩子也愿意听：中国历史、新科技、热点新闻和古文经典。"]
      ],
      extrasTitle: "课本之外",
      extras: [
        "每个学生每周给我发一条 60 秒的中文语音。",
        "有一节编程课，全班一起做了一个网页，点一下就出现拼音或生字，用来复习。",
        "我们把 ChatGPT 和 Duolingo 当作学习工具。",
        "每学期一起做一道中国菜，学期最后一节课看一部中文电影。",
        "每次课后，家长都会收到文字总结和一段视频回顾。"
      ],
      quote: "语言是一种“工具”，学会使用中文工具，探索中国文化，从而激发学生的学习兴趣。",
      quoteSource: "摘自学校网站上的教师介绍",
      link: "了解学校和老师"
    },
    coaching: {
      title: "1 对 1 求职陪跑",
      lede: "2026 年初开始，我一对一陪跑在丹麦找工作的人。起因是帮我文科背景的妻子在丹麦找到了工作。我把它坚持做下去，是因为这能让我一直站在求职一线，了解丹麦招聘市场真实的变化。",
      stats: [
        ["4", "位学员已找到工作"],
        ["5", "位学员正在陪跑中"],
        ["3.5–7", "个月，每位学员的陪跑周期"],
        ["43", "节免费求职课"]
      ],
      casesTitle: "四个人，四条路",
      cases: [
        ["哥本哈根大学药学毕业生", "丹麦语是母语水平，但诺和诺德裁员让大量资深从业者涌入市场，毕业后几个月没有一次面试。我们把简历改成本地候选人的写法，把范围扩大到哥本哈根以外，并逐字拆解每一份 JD。", "陪跑 3.5 个月，第一次面试就拿到 offer"],
        ["CBS 商科毕业生", "不会丹麦语，毕业一年多，签证在倒计时。试过咨询、合规、市场之后，我们锁定了 Growth 岗位：一个比较新、竞争还没那么激烈的方向。", "陪跑 7 个月，拿到正式 offer"],
        ["带两个孩子的转行者", "国内有六年技术工作经验，来丹麦后四年在餐馆打工。我们果断放弃原来的方向，回到技术背景，每周按节奏推进。", "陪跑 7 个月，找到专业对口的工作"],
        ["在读硕士生", "有意识地保留学生身份：学生工比全职岗位容易拿，丹麦大公司也专门留有名额。", "拿到大公司的学生工"]
      ],
      howTitle: "我的做法",
      how: [
        ["方向大于努力", "如果投了几个月都没有面试，我们换方向，而不是继续多投。"],
        ["回答 JD 的问题", "逐条拆解每一份 JD：它要什么，团队的痛点是什么，你的经历怎么解决它。"],
        ["一次只解决一个问题", "明年的签证和薪资先放一放，这个月只专注眼前这个 offer。"],
        ["用好制度", "在读学生在拿到学生工或实习之前，不要急着毕业。"]
      ],
      who: "适合真心想改变自己处境的成年人。陪跑是收费的；父母代为报名的，我不接。",
      videosTitle: "视频里的故事（中文）",
      videoNames: ["第一位学员上岸", "第二位学员上岸", "为什么做陪跑，以及初步成果", "一位在读学生拿到学生工", "第一次面试就拿到 offer"]
    },
    course: {
      title: "免费求职课",
      lede: "2026 年 6 月到 9 月，我录了一套 43 节的中文求职课，讲怎么在丹麦找工作。课程在 YouTube 和微信视频号上免费观看，小红书上也有短笔记。这也是我陪跑学员时用的内容。",
      modulesTitle: "七个部分",
      lessons: "第 {a}–{b} 课",
      modules: [
        ["知己知彼", "自我定位，以及长时间求职的心理准备。"],
        ["知识储备", "签证、丹麦职场文化和 LinkedIn。"],
        ["简历和求职信", "基本规则、通过初筛、丹麦简历文化、投递时机和避坑。"],
        ["读懂 JD", "分层阅读，读出 JD 的暗示，用 JD 反向准备简历和面试。"],
        ["面试", "丹麦面试的特点和流程、面试准备、故事库、面试后跟进和薪资谈判。"],
        ["Networking", "为什么在丹麦这么重要，以及怎么建立。"],
        ["个人品牌", "一套在求职各个阶段都能用的框架。"]
      ],
      playlist: "看完整课程",
      channelsTitle: "在哪里看",
      channels: {
        youtube: { name: "YouTube", text: "AI时代求职（{handle}），{subs} 位订阅者。完整课程、常见问题系列和陪跑故事都在这里。" },
        wechat: { name: "微信视频号", text: "搜索「生活在丹麦」。课程和每周直播答疑。" },
        xhs: { name: "小红书", text: "张丁亮，小红书号 {xhs}。简历和求职的短笔记。" }
      },
      qaTitle: "找工作常见问题，一个问题一条视频",
      qa: [],
      qaPlaylist: "全部 23 个问题"
    },
    ai: {
      title: "All in AI",
      lede: "2022 年底 ChatGPT 出来后我就开始用 AI，2025 年更是决定所有事情都用 AI 来做：乐高的工作、学习，还有每一个个人项目。到目前为止最大的体会是：工具没那么重要，重要的是你拿什么问题去问它。",
      workTitle: "在乐高的工作中",
      work: [
        ["一个像我一样做 Code Review 的助手", "用 GitHub Copilot 做的个人 code review skill，跑在我自己的电脑上。我告诉它我在意什么：性能、测试覆盖、语言层面的坑、容易漏掉的业务边界情况。它每次审查都在学习我的习惯，能发现我周五下午可能会漏看的问题。"],
        ["新员工自动化 onboarding", "为工程项目做的自动化 onboarding 流程，新同事可以自己完成环境搭建、熟悉代码库。"],
        ["用说话代替打字", "用 Typeless 语音输入配合 AI 写需求、计划、文档和初稿。以前要一周的工作，现在两三个小时就能完成，省下的时间用来理解业务、和 stakeholder 沟通。"]
      ],
      builtTitle: "我用 AI 做的东西",
      builtIntro: "2023 年以来做了 12 个项目，大部分是 2026 年用 Claude Code 做的。多数是为了解决我自己生活里的问题：写作、教课、找工作、找房子。",
      groups: { media: "写作与媒体", data: "市场数据", products: "产品与工具", early: "早期尝试" },
      items: {
        wechat: ["公众号 AI 写作", "把丹麦新闻改写成面向在丹麦华人的实用中文文章。Claude 检索并核对公开资料、写成文章，脚本再把它推送到公众号草稿箱，并发布到 Google Blogger。"],
        video: ["视频自动加字幕", "用本地 Whisper 模型在 Mac 上批量给视频生成中文字幕，再处理断句、口水词和繁简转换。"],
        storyteller: ["中文课的有声书和阅读器", "把扫描版《郑渊洁十二生肖童话》做成分角色配音的有声书，配一个逐句高亮的网页阅读器、每个字的拼音（多音字按上下文判断），以及 46 节课的课程编排。"],
        lego: ["LEGO Builder", "把乐高拼装说明书 PDF 变成竖屏短视频，积木踩着节拍一块块拼上去。Claude 读懂并评估每一步，Remotion 负责渲染视频。"],
        news: ["一分钟新闻", "抓取文章，让 ChatGPT 写成简短新闻，自动发布到 YouTube 和 Twitter。"],
        jobs: ["哥本哈根求职市场追踪", "抓取 Jobindex 上大哥本哈根和北西兰岛的全部在招职位（5,000 多条），每天更新，分析发布趋势、各职能需求和职位对外国人的友好程度。陪跑时还能把学员档案和新职位做匹配。"],
        boliga: ["每日房源报告", "每天晚上由 Claude 定时任务检查哥本哈根周边 24 个邮编的 Boliga 房源，生成新房源和降价报告。"],
        collector: ["个人网页存档", "一个 Chrome 扩展加本地服务，一键保存网页正文，方便以后检索和分析。数据全部留在本机。"],
        exam: ["考试训练器", "备考微软 MB-800（Business Central）的学习系统：Claude 抓取练习题，命令行测验在 20 个知识点之间轮换，直到全部覆盖。"],
        site: ["这个网站", "和 Claude 一起设计、用三种语言写成、搭建完成。"],
        taobao: ["在淘宝购物的 AI agent", "用 Claude Code 做的实验：自动在淘宝下单并寄到丹麦。被验证码拦下之后，我写了一篇文章，讲电商为什么需要为 agent 重新设计。"],
        tweets: ["推特情绪分析", "抓取推文，用 ChatGPT 做情绪分析。"]
      },
      viewTitle: "我对 AI 的理解",
      zonesTitle: "和 AI 合作的四种模式",
      zonesIntro: "打开对话框之前，我先问自己一个问题：答案是我知道，还是 AI 知道？",
      axes: ["我知道", "我不知道", "AI 知道", "AI 不知道"],
      zones: [
        ["高效区", "直接交给它，快速推进。你来指挥，AI 执行，结果由你负责。"],
        ["学习区", "AI 是有耐心的老师，多问开放式问题。"],
        ["补充上下文区", "AI 看不到公司的数据、流程和约束。把背景给它，否则只能得到泛泛的建议。"],
        ["共同探索区", "一起想，但把每个答案都当成需要验证的假设。"]
      ],
      takes: [
        ["先找到场景", "用 Claude、ChatGPT 还是 Gemini 没那么重要，重要的是有一个具体的问题。有了它，几周的工作可以缩短到几个小时。"],
        ["AI 压缩的是中间层", "工程师没有被取代，工作范围反而扩展到产品、架构和 UI；被压缩的是夹在业务和工程之间的那些角色。"],
        ["Agent-first 是新的 mobile-first", "电商还把 AI agent 当成机器人拦在门外。谁先为 agent 做电商，谁就会赢，就像 2008 年之后的移动优先。"],
        ["像语言初学者一样写提示词", "用关键词链代替客气的完整句子：结果一样，token 更少，成本更低。"],
        ["欧洲晚了，但没出局", "开源模型降低了门槛。欧洲缺的是算力、资本和速度，而这些都是政策可以解决的问题。"]
      ],
      linkedin: "在 LinkedIn 上看我的文章",
      toolsTitle: "每天用的工具"
    },
    projects: {
      cdp: {
        title: "客户数据平台", where: "乐高集团，2022–2024",
        body: "整合众多上游系统的数据，把行为事件合成 360 度用户画像，为营销活动和 lego.com 的个性化体验生成人群分组。"
      },
      zeronorth: {
        title: "航线、排放与加油", where: "ZeroNorth，2020–2023",
        body: "我们最重要的产品：根据天气计算航线，显示二氧化碳排放，优化船速。围绕它我们还做了船队总览、告诉操作员在哪里、什么时候、加多少油的加油计划工具，以及所有应用共用的地图组件。"
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
      ["2026", "开始做 1 对 1 求职陪跑，已有四位学员找到工作，还有五位正在陪跑中。"],
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
