export type ServiceSection = {
  heading: string;
  body: string;
  listLabel: string;
  items: string[];
};

export type Service = {
  slug: "accounting" | "advisory" | "tax" | "bookkeeping";
  num: string;
  title: string;
  icon: string;
  img: string;
  caps: string;
  blurb: string;
  intro: string;
  ctaLine: string;
  sections: ServiceSection[];
};

export const SERVICES: Service[] = [
  {
    slug: "accounting",
    num: "01",
    title: "Accounting",
    icon: "file-spreadsheet",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=560&q=75&auto=format&fit=crop&crop=entropy",
    caps: "ACCOUNTING",
    blurb:
      "Financial statements and record keeping that stand up to lenders, boards and the CRA.",
    intro:
      "Many businesses and organisations call on us for their accounting and record keeping. Reliable statements drive day-to-day decisions and are often handed to external stakeholders. Our team delivers the full range, so your staff can stay on your core business.",
    ctaLine: "Get your year-end handled properly.",
    sections: [
      {
        heading: "Notice to Reader Financial Statements",
        body: "For businesses and organisations that do not require an audit or review, a notice to reader statement is a cost-effective alternative. We receive your information and arrange it into a financial statement — no assurance, but prepared within professional standards and technical experience.",
        listLabel: "A Notice to Reader statement is useful for:",
        items: [
          "Preparing corporate tax returns",
          "Personal and corporate tax planning",
          "Budgeting and cash flow management",
          "Assessing performance",
          "Meeting externally imposed requirements",
        ],
      },
      {
        heading: "Financial Reporting Support",
        body: "Beyond year-end statements we support the accounting processes that keep reporting accurate through the year — from payroll set-up to software selection and troubleshooting.",
        listLabel: "Included in this work:",
        items: [
          "Setting up payroll and calculating source deductions",
          "HST filings and remittances",
          "WSIB and EHT filings",
          "Information slips — T4, T4A, T5, T5018",
          "Tax instalment calculations",
          "Accounting software selection and set-up",
          "Tracking investments",
        ],
      },
      {
        heading: "Not-for-Profit and Charity Reporting",
        body: "Boards and funders expect a particular shape of reporting. We prepare statements and schedules that satisfy funders, meet charity filing obligations and give directors something they can actually read.",
        listLabel: "Typical engagements:",
        items: [
          "Fund accounting and restricted-fund schedules",
          "Board-ready reporting packages",
          "Charity information return support",
          "Grant and funder reporting",
        ],
      },
    ],
  },
  {
    slug: "advisory",
    num: "02",
    title: "Business Advisory",
    icon: "briefcase",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=560&q=75&auto=format&fit=crop&crop=faces",
    caps: "BUSINESS ADVISORY",
    blurb:
      "Buying, selling, restructuring or growing — decisions with numbers behind them.",
    intro:
      "Years of service across a diverse client base have given our team experience in areas that go well beyond technical compliance. Clients rely on us to address the challenges they face — and to say plainly what the numbers mean.",
    ctaLine: "Talk through the decision before you make it.",
    sections: [
      {
        heading: "Acquisition or Sale of a Business",
        body: "Deciding to buy or sell involves many important details. We assist with the process from start to finish, keeping the tax consequences visible at every step.",
        listLabel: "We can help with:",
        items: [
          "Performing due diligence procedures",
          "Preparation of buy or sell agreements",
          "Structuring the deal — shares vs. assets",
          "Negotiations and determination of value",
          "Quantifying tax effects",
        ],
      },
      {
        heading: "Restructuring",
        body: "Circumstances change — operations expand, shareholders join, real estate is purchased. Those changes may require the existing corporate structure to be modified. We determine the most effective way to restructure.",
        listLabel: "These services include:",
        items: [
          "Assessing options and planning the optimal structure",
          "Cash flow projections and financing advice",
          "Forecasts and projections",
          "Shareholder and banking agreements",
          "Creditor proofing transactions",
          "Compensation and insurance planning",
        ],
      },
      {
        heading: "Ongoing Business Support",
        body: "Clients rely on us daily for advice on individual, business and organisational matters, and we are committed to timely, accurate guidance. Additional services include, but are not limited to:",
        listLabel: "Also available:",
        items: [
          "Risk management",
          "Strategy and operations",
          "New business start-ups — incorporation, CRA registrations, payroll",
          "Business planning",
          "Budget development and analysis",
          "Review of internal controls",
          "Litigation support",
          "Strategic referrals for multi-disciplinary issues",
        ],
      },
    ],
  },
  {
    slug: "tax",
    num: "03",
    title: "Tax Advisory",
    icon: "receipt",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=560&q=75&auto=format&fit=crop&crop=entropy",
    caps: "TAX ADVISORY",
    blurb:
      "Planning and compliance for individuals, corporations and estates — including CRA representation.",
    intro:
      "Sound tax planning is central to what we do. Significant resources go into developing our team in taxation so we can give exceptional advice, and handle a wide variety of tax matters including more complex situations.",
    ctaLine: "Plan the year before it plans you.",
    sections: [
      {
        heading: "Tax Reporting and Compliance",
        body: "Reporting and compliance have become increasingly complex in an environment where the rules keep changing. Our expertise lets you spend less time and energy managing your obligations.",
        listLabel: "These services include:",
        items: [
          "Personal, estate and corporate tax returns",
          "Tax slips — T4, T4A, T5, T5013",
          "Assisting with CRA audits",
          "Charity and Non-Profit Organisation returns",
          "Reporting the sale of real property",
          "Special elections and voluntary disclosures",
          "Notices of objection",
          "Filing CRA elections",
          "Interest and penalty relief applications",
        ],
      },
      {
        heading: "Tax Planning",
        body: "Minimising your tax burden is the result of good strategy. We take an integrated approach, planning proactively for both corporate and personal goals — which often means detailed technical work.",
        listLabel: "We are often engaged to perform:",
        items: [
          "Corporate re-organisations",
          "Amalgamations and wind-ups",
          "Use of the lifetime capital gains exemption",
          "Compensation strategies",
          "Estate and retirement planning",
        ],
      },
      {
        heading: "Indirect Tax (GST/HST)",
        body: "An area often overlooked but relevant to many businesses and organisations. Our tax team is experienced across the full range of HST work.",
        listLabel: "HST services:",
        items: [
          "Preparing and filing HST returns",
          "Assisting with HST audits",
          "Real estate property rebates",
          "Filing CRA elections",
          "Advising on the HST status of specific transactions",
          "Public Service Body rebate applications",
        ],
      },
    ],
  },
  {
    slug: "bookkeeping",
    num: "04",
    title: "Bookkeeping",
    icon: "book-open",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=560&q=75&auto=format&fit=crop&crop=entropy",
    caps: "BOOKKEEPING",
    blurb:
      "Clean monthly books, payroll and remittances — so nothing is a surprise at year-end.",
    intro:
      "Books that are current are books you can make decisions from. We take on the monthly cycle — or work alongside your internal bookkeeper — so records are accurate, reconciled and ready for reporting deadlines.",
    ctaLine: "Hand off the monthly cycle.",
    sections: [
      {
        heading: "Monthly and Quarterly Bookkeeping",
        body: "A consistent cycle, delivered on a schedule you can plan around. We reconcile as we go, so the year-end file arrives clean rather than needing a rebuild.",
        listLabel: "The monthly cycle covers:",
        items: [
          "Transaction entry and categorisation",
          "Bank and credit card reconciliations",
          "Accounts payable and receivable tracking",
          "Month-end close and adjusting entries",
          "Management reports — P&L, balance sheet, cash position",
        ],
      },
      {
        heading: "Payroll and Remittances",
        body: "Payroll is where small errors get expensive. We run the cycle, calculate deductions and keep remittances filed on time.",
        listLabel: "Payroll services:",
        items: [
          "Payroll processing and direct deposit set-up",
          "Source deduction calculation and remittance",
          "ROEs and year-end T4 / T4A filing",
          "WSIB and EHT filings",
          "Vacation and statutory pay tracking",
        ],
      },
      {
        heading: "Cloud Software and Clean-Up",
        body: "Whether you are starting from a shoebox or migrating from a system that no longer fits, we set up the file properly and train your team on it.",
        listLabel: "Set-up and support:",
        items: [
          "Software selection, set-up and chart of accounts design",
          "Catch-up and clean-up of prior periods",
          "Receipt capture and document workflow",
          "GST/HST filing set-up",
          "Training and ongoing support for internal staff",
        ],
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export type Value = {
  num: string;
  icon: string;
  title: string;
  body: string;
};

export const VALUES: Value[] = [
  {
    num: "01",
    icon: "shield-check",
    title: "Compliance first",
    body: "Filings on time, records reconciled, and no surprises when the CRA asks a question.",
  },
  {
    num: "02",
    icon: "message-square",
    title: "Plain answers",
    body: "Advice you can act on, explained without the jargon that usually surrounds it.",
  },
  {
    num: "03",
    icon: "users",
    title: "One team",
    body: "Bookkeeping, reporting, tax and advisory handled together, so nothing falls between files.",
  },
  {
    num: "04",
    icon: "trending-up",
    title: "Built for growth",
    body: "Structures and numbers that hold up as your business gets more complex.",
  },
];

export const DEADLINES = [
  { date: "28 FEB 2026", label: "T4, T4A and T5 slips filed and distributed" },
  { date: "01 MAR 2026", label: "RRSP contribution deadline for the 2025 tax year" },
  { date: "31 MAR 2026", label: "Trust returns (T3) for December year-ends" },
  { date: "30 APR 2026", label: "Personal tax returns and balance owing" },
  { date: "15 JUN 2026", label: "Self-employed personal returns (balance still due 30 April)" },
  { date: "6 MONTHS", label: "Corporate T2 return, after fiscal year-end" },
];

export const GUIDES = [
  {
    icon: "file-text",
    title: "Year-end checklist",
    body: "Everything we need from you to close the books without back-and-forth.",
    meta: "PDF · 2 PAGES",
  },
  {
    icon: "calculator",
    title: "HST quick reference",
    body: "Registration thresholds, filing frequencies and what is claimable.",
    meta: "PDF · 3 PAGES",
  },
  {
    icon: "users",
    title: "New employer starter kit",
    body: "Payroll accounts, source deductions, ROEs and WSIB in order.",
    meta: "PDF · 4 PAGES",
  },
  {
    icon: "building-2",
    title: "Incorporation guide",
    body: "When incorporating helps, what it costs and what changes after.",
    meta: "PDF · 5 PAGES",
  },
];

export const USEFUL_LINKS = [
  { label: "CRA My Business Account", href: "https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/business-account.html" },
  { label: "CRA My Account for individuals", href: "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html" },
  { label: "Ontario business registry", href: "https://www.ontario.ca/page/ontario-business-registry" },
  { label: "WSIB employer services", href: "https://www.wsib.ca/en/employers" },
];

export const SLOTS = [
  "Tue 16 Sep · 9:00 AM",
  "Tue 16 Sep · 10:30 AM",
  "Wed 17 Sep · 11:00 AM",
  "Wed 17 Sep · 2:00 PM",
  "Thu 18 Sep · 9:30 AM",
  "Fri 19 Sep · 1:00 PM",
];

export const PREP_ITEMS = [
  "Most recent financial statements or tax return",
  "Your current bookkeeping file or spreadsheets",
  "Corporate details — year-end, share structure",
  "The question you most want answered",
];

export const NAV = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "resources", label: "Resources", href: "/resources" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export const FIRM = {
  name: "STA Associates",
  phone: "(705) 555-0182",
  email: "hello@staassociates.ca",
  address: "Barrie, Simcoe County, ON",
  hours: "Mon–Fri, 9:00–5:00 · remote across Ontario",
};
