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
    { id: "coach", from: "2026-01", to: null, href: "#denmark" }
  ],
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
    { id: "cdp", at: "2024-06" }
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
    { id: "chrome", links: [["Demo", "http://chrome.sampi.io"]] },
    { id: "news" },
    { id: "cnydkk", links: [["GitHub", "https://github.com/zdlm/CNY_DKK"]] }
  ],
  toolbox: {
    frontend: ["JavaScript", "React", "Redux", "Preact", "Angular", "Web Components", "Node.js"],
    backend: ["Python", "Django", "Node.js", "C#", "ASP.NET MVC"],
    data: ["AWS", "Azure Databricks", "Apache Spark", "NoSQL", "Redis", "Cassandra", "SQL Server", "Kibana"],
    ai: ["Generative AI", "Machine learning", "Deep learning"]
  }
};

window.CONTENT = {
  /* ───────────────────────── English ───────────────────────── */
  en: {
    meta: {
      title: "Leo Zhang · Full-stack developer in Copenhagen",
      description: "Leo Zhang is a full-stack developer with nearly 20 years of experience, first in Beijing and since 2015 in Copenhagen."
    },
    ui: {
      nav: { work: "Work", projects: "Projects", years: "Years", contact: "Contact", denmark: "Live in Denmark", teaching: "Teaching" },
      skip: "Skip to content",
      now: "now",
      wallTitle: "Twenty years, brick by brick",
      wallIntro: "Every brick is a job, a degree or a moment from my life, laid out on a timeline. Select a brick to read about it.",
      wallKey: "Grey bricks are Beijing, borrowed from the hutong walls. Coloured bricks are Copenhagen, borrowed from the houses on Nyhavn.",
      courses: { life: "Life", side: "On the side", teach: "Teaching", work: "Work", study: "Study" },
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
      lede: "I'm a full-stack developer with nearly 20 years of experience. I started in Beijing, moved to Copenhagen in 2015, and today I build the customer data platform at the LEGO Group.",
      aside: "I like building things out of small, reusable pieces: UI components and data pipelines. Outside work I run 生活在丹麦 (Live in Denmark), a daily Chinese publication about Denmark with almost 24,000 followers, coach people looking for jobs here, and teach Chinese on Saturday mornings.",
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
      coach: { label: "Job coaching", text: "Since 2026: one-to-one coaching for people looking for jobs in Denmark. Four have found jobs so far." }
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
      coach: "On the WeChat video channel I post short videos about CVs and job hunting in Denmark, and I host a weekly live Q&A. In 2026 I started coaching people one-to-one through their job search. Four of them have found jobs so far.",
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
      },
      cnydkk: {
        title: "CNY ⇄ DKK", where: "Hackathon",
        body: "An exchange-rate app built in one day and published as a WeChat mini program. My first try at the platform."
      }
    },
    years: [
      ["2026", "Start 1:1 job-search coaching. Four people have found jobs so far."],
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
      title: "Leo Zhang · Fullstack-udvikler i København",
      description: "Leo Zhang er fullstack-udvikler med næsten 20 års erfaring, først i Beijing og siden 2015 i København."
    },
    ui: {
      nav: { work: "Arbejde", projects: "Projekter", years: "År", contact: "Kontakt", denmark: "Live in Denmark", teaching: "Undervisning" },
      skip: "Gå til indhold",
      now: "nu",
      wallTitle: "Tyve år, sten for sten",
      wallIntro: "Hver sten er et job, en uddannelse eller et øjeblik fra mit liv, sat ind på en tidslinje. Vælg en sten for at læse om den.",
      wallKey: "De grå sten er Beijing, lånt fra murene i hutongerne. De farvede sten er København, lånt fra husene i Nyhavn.",
      courses: { life: "Livet", side: "Ved siden af", teach: "Undervisning", work: "Arbejde", study: "Uddannelse" },
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
      lede: "Jeg er fullstack-udvikler med næsten 20 års erfaring. Jeg startede i Beijing, flyttede til København i 2015, og i dag bygger jeg kundedataplatformen hos LEGO Koncernen.",
      aside: "Jeg kan lide at bygge ting af små, genbrugelige dele: UI-komponenter og datapipelines. Ved siden af driver jeg 生活在丹麦 (Live in Denmark), et dagligt kinesisk medie om Danmark med næsten 24.000 følgere, coacher folk, der søger job her, og underviser i kinesisk lørdag formiddag.",
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
      coach: { label: "Jobcoaching", text: "Siden 2026: coaching én til én for folk, der søger job i Danmark. Fire har indtil videre fået job." }
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
      coach: "På WeChats videokanal laver jeg korte videoer om CV'er og jobsøgning i Danmark, og jeg holder en ugentlig live-Q&A. I 2026 begyndte jeg at coache folk én til én gennem deres jobsøgning. Fire af dem har indtil videre fået job.",
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
      },
      cnydkk: {
        title: "CNY ⇄ DKK", where: "Hackathon",
        body: "En valutakurs-app bygget på én dag og udgivet som WeChat-miniprogram. Mit første forsøg med platformen."
      }
    },
    years: [
      ["2026", "Starter jobcoaching én til én. Fire har indtil videre fået job."],
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
      title: "Leo Zhang · 哥本哈根的全栈开发者",
      description: "Leo Zhang，全栈开发者，近 20 年经验，先在北京，2015 年起在哥本哈根。"
    },
    ui: {
      nav: { work: "工作", projects: "项目", years: "年表", contact: "联系", denmark: "生活在丹麦", teaching: "中文课" },
      skip: "跳到正文",
      now: "至今",
      wallTitle: "二十年，一砖一瓦",
      wallIntro: "每一块砖是一份工作、一段学业，或是生活里的一个时刻，按时间排开。点一块砖，看看它的故事。",
      wallKey: "灰砖是北京，取自胡同的灰墙；彩砖是哥本哈根，取自新港的彩色房子。",
      courses: { life: "生活", side: "业余", teach: "教学", work: "工作", study: "学业" },
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
      lede: "我是一名全栈开发者，有近 20 年经验。职业生涯从北京开始，2015 年搬到哥本哈根，现在在乐高集团搭建客户数据平台。",
      aside: "我喜欢用小而可复用的模块搭东西：UI 组件、数据管道。工作之外，我运营公众号「生活在丹麦」，每天更新，有近 2.4 万关注者；也做在丹麦求职的 1 对 1 陪跑；每周六上午还在中文学校教中文。",
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
      coach: { label: "求职陪跑", text: "2026 年起：1 对 1 陪跑在丹麦找工作的人，目前已有四位找到工作。" }
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
      coach: "在视频号上，我发关于简历和在丹麦求职的短视频，每周开一次直播答疑。2026 年开始做 1 对 1 求职陪跑，目前已有四位学员找到工作。",
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
      },
      cnydkk: {
        title: "人民币 ⇄ 丹麦克朗", where: "黑客马拉松",
        body: "一天内做完的汇率应用，发布为微信小程序。这是我第一次尝试小程序。"
      }
    },
    years: [
      ["2026", "开始做 1 对 1 求职陪跑，目前四位学员找到了工作。"],
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
