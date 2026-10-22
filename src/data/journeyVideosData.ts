import { CareerBriefVideo } from '../types/career';

export const CAREER_JOURNEY_VIDEOS: Record<string, CareerBriefVideo> = {
  'computer-engineering': {
    id: 'vid-degree-computer-engineering',
    title: "Computer Engineering Degree Timeline: Hardware Systems & Architecture",
    youtubeId: "rSwccGiWwO4",
    speaker: "BioTech Whisperer Engineering Academy",
    speakerRole: "Hardware & Microelectronics Fellow",
    duration: "4:01",
    degreeLengthSummary: "Standard 4-Year Undergraduate Degree (8 Semesters, ~132 Academic Credits, 1 Mandatory Junior Summer Internship). Fast-track option available in 3.5 years with summer credits.",
    journeyOverview: "A semester-by-semester breakdown of how long a Computer Engineering degree takes: surviving Year 1 calculus/physics weed-outs, building FPGA circuits in Year 2, landing an industry silicon internship in Year 3, and delivering a senior capstone chip design in Year 4.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman STEM Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Calculus I & II, Differential Equations",
                  "Physics for Semiconductor Devices & Mechanics",
                  "Structured C Programming & Basic Circuit Breadboards"
            ],
            "summerRequirement": "Summer 1: Personal Arduino/Raspberry Pi projects or introductory coding research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Digital Logic & Hardware Core",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "34–36 Credits",
            "keyMilestones": [
                  "Digital System Design with Verilog & FPGA hardware",
                  "Computer Organization & x86/ARM Assembly",
                  "Signals & Linear Systems, Object-Oriented C++"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early tech support / QA internship."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Systems Architecture & Crucial Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "VLSI Design & Physical Layout",
                  "Embedded Real-Time Operating Systems (RTOS)",
                  "Computer Microarchitecture & High-Speed Busses"
            ],
            "summerRequirement": "Summer 3: MANDATORY paid 12-week industry hardware engineering internship (e.g., Intel, Apple, Qualcomm, NVIDIA)."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone & Full-Time Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Hardware Design (Full chip/robot system build)",
                  "Neural Network Hardware Accelerators elective",
                  "Campus recruitment interviewing & return offer conversions"
            ],
            "summerRequirement": "Graduation: Transition directly into full-time junior hardware engineer role ($94k+ starting base)."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Surviving Calculus and Physics Weed-Outs"
      },
      {
            "time": "3:15",
            "title": "Year 2: First FPGA Circuit Boards & Assembly Language"
      },
      {
            "time": "5:00",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:20",
            "title": "Year 4: Senior Capstone Tape-Out & Job Placement"
      },
      {
            "time": "9:10",
            "title": "Can You Finish Early? 3.5-Year vs 5-Year Co-op Tracks"
      }
],
    keyTakeaways: [
      "Total timeline is 4 academic years (48 months), though university co-op programs add 1 year of paid full-time industry rotations (5 years total).",
      "Your Junior Summer (between Year 3 and Year 4) is the single most critical semester for securing a $94k+ return job offer before graduation.",
      "Fast-tracking in 3.5 years is possible if you enter college with AP Calculus and Physics credits."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'it-software-engineering': {
    id: 'vid-degree-it-software-engineering',
    title: "Cloud & IT Software Engineering: Degree Timeline & Infrastructure Skills",
    youtubeId: "Y-Jhlwy2sW4",
    speaker: "IBM Developer Series",
    speakerRole: "Cloud Platform & Enterprise Systems Architect",
    duration: "3:36",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~120 Credits). Community college 2+2 transfer option allows completing in 2 years post-Associates degree.",
    journeyOverview: "A complete timeline of an Information Technology & Cloud degree: how long courses take, when to earn certifications (AWS/Linux), and when companies start hiring campus undergraduates.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Networking & Scripting Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Computer Networks (TCP/IP, Subnetting, DNS)",
                  "Python Scripting & Linux Command Line",
                  "Relational Databases & Introductory SQL"
            ],
            "summerRequirement": "Summer 1: Help Desk support gig or IT lab technician role."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Cloud Virtualization & Systems Core",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Operating Systems Administration (Linux/Windows Server)",
                  "Cloud Virtualization & AWS Fundamentals",
                  "REST APIs & Object-Oriented Programming in Java/Go"
            ],
            "summerRequirement": "Summer 2: Earn AWS Certified Solutions Architect Associate."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: DevOps, Containers & Major Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Containerization with Docker & Kubernetes (CKA prep)",
                  "Infrastructure as Code (Terraform) & CI/CD Pipelines",
                  "Network Security, IAM & Zero Trust Architecture"
            ],
            "summerRequirement": "Summer 3: Paid 12-week Cloud Operations or DevOps Engineering Internship ($35–$50/hour)."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Enterprise SRE Capstone & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Site Reliability Engineering (Prometheus/Grafana Observability)",
                  "Multi-Cloud High Availability Architecture Capstone",
                  "Full-time hiring rounds and salary negotiation"
            ],
            "summerRequirement": "Graduation: Transition into Associate Cloud Engineer or DevOps Specialist ($90k+)."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Degree Length: Traditional 4-Year vs Accelerated 3-Year Options"
      },
      {
            "time": "1:40",
            "title": "Year 1: Networking, Linux & Database Fundamentals"
      },
      {
            "time": "3:30",
            "title": "Year 2: Moving from On-Premises to Cloud Infrastructure"
      },
      {
            "time": "5:15",
            "title": "Year 3: Docker, Kubernetes & Landing the DevOps Internship"
      },
      {
            "time": "7:45",
            "title": "Year 4: Enterprise Capstone & Converting Return Offers"
      },
      {
            "time": "9:30",
            "title": "Degree vs Certifications: Which Saves More Time?"
      }
],
    keyTakeaways: [
      "Standard BS degree takes 4 years (48 months), but IT offers flexible 3-year accelerated online/competency degrees (e.g., WGU/Purdue Global).",
      "Earning 1-2 major cloud certifications (AWS SAA, CKA) by the end of Year 2 dramatically accelerates internship placement.",
      "IT graduates often enter the workforce faster than hardware engineers because cloud infrastructure skills translate immediately to business needs."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'medicine-doctor': {
    id: 'vid-degree-medicine-doctor',
    title: "Doctor of Medicine (MD): Pre-Med, Medical School & Residency Journey (11 to 15 Years)",
    youtubeId: "mu5WzOL8-O8",
    speaker: "Dr. Kevin Jubbal, MD",
    speakerRole: "Plastic Surgeon & Founder, Med School Insiders",
    duration: "5:48",
    degreeLengthSummary: "The most extensive educational journey in professional training: 4 Years Pre-Med Undergrad + 4 Years Allopathic Medical School (MD/MBBS) + 3 to 7 Years Paid Clinical Residency/Fellowship. Total duration: 11 to 15 years from high school graduation.",
    journeyOverview: "A realistic timeline of how long it takes to become a licensed practicing physician: from undergraduate organic chemistry and the MCAT exam, through 4 years of medical school rotations, to 80-hour residency weeks and board certification.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Phase 1: Pre-Med Undergraduate Degree (Years 1–4)",
            "durationMonths": "Months 1–48 (4 Years Undergrad)",
            "academicCredits": "120 Credits + MCAT",
            "keyMilestones": [
                  "Biology, General Chemistry, Organic Chemistry, Biochemistry, Physics",
                  "Clinical shadowing, hospice volunteering, lab research publications",
                  "Taking the MCAT exam (Junior Spring) and submitting AMCAS med school applications"
            ],
            "summerRequirement": "Summers: Clinical volunteering, clinical scribe experience, or biomedical lab research."
      },
      {
            "yearNumber": 2,
            "yearName": "Phase 2: Medical School Pre-Clinical (Med School Years 1–2)",
            "durationMonths": "Months 49–72 (Years 5 & 6 Total)",
            "academicCredits": "Full-Time Medical Curriculum",
            "keyMilestones": [
                  "Gross Human Anatomy & Cadaver Dissection, Histology, Biochemistry",
                  "Pathology, Pharmacology, Medical Microbiology, Organ Systems Physiology",
                  "Passing USMLE Step 1 / COMLEX Level 1 board examination"
            ],
            "summerRequirement": "Summer after Year 1: Medical research fellowship or global health elective."
      },
      {
            "yearNumber": 3,
            "yearName": "Phase 3: Medical School Clinical Rotations (Med School Years 3–4)",
            "durationMonths": "Months 73–96 (Years 7 & 8 Total)",
            "academicCredits": "Core Inpatient Clerkships",
            "keyMilestones": [
                  "Internal Medicine, Surgery, Pediatrics, OB/GYN, Psychiatry, Family Med Wards",
                  "Sub-internships in chosen specialty, USMLE Step 2 CK Examination",
                  "The National Residency Matching Program (Match Day!) in March of Year 4"
            ],
            "summerRequirement": "Graduation: Awarded Doctor of Medicine (M.D.) or D.O. / M.B.B.S. degree!"
      },
      {
            "yearNumber": 4,
            "yearName": "Phase 4: Medical Residency & Licensure (Years 9–14 Total)",
            "durationMonths": "Months 97–156 (3 to 7 Years Paid Residency)",
            "academicCredits": "Accredited GME Residency",
            "keyMilestones": [
                  "Intern Year (PGY-1): 80-hour inpatient weeks, emergency codes ($65k salary)",
                  "Senior Resident (PGY-2 to PGY-5): Operative autonomy, chief resident year",
                  "Board Certification Exam & State Licensure: Independent Attending Physician ($240k–$600k+)"
            ],
            "summerRequirement": "Full-time hospital physician: Year-round patient care."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Medical Timeline: Why It Takes 11 to 15 Years"
      },
      {
            "time": "2:10",
            "title": "Years 1–4: Pre-Med Undergrad, MCAT & Getting Accepted"
      },
      {
            "time": "5:00",
            "title": "Years 5–6: Med School Years 1 & 2 (Anatomy Lab to Step 1)"
      },
      {
            "time": "7:45",
            "title": "Years 7–8: Hospital Wards, Shelf Exams & Match Day"
      },
      {
            "time": "10:15",
            "title": "Years 9–14: Residency Training (Earning Your First Physician Paycheck)"
      },
      {
            "time": "12:40",
            "title": "Direct BS/MD Programs: How to Save 1–2 Years"
      }
],
    keyTakeaways: [
      "Total duration is 11 to 15 years: 4 years college + 4 years medical school + 3 to 7 years residency (pediatrics/family med is 3 years, neurosurgery is 7 years).",
      "During residency (ages 26–31), you are a paid doctor earning ~$65k–$78k/year with full benefits while completing specialty licensing.",
      "Accelerated direct BS/MD programs exist out of high school that allow completing college + med school in 7 years instead of 8."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'data-science-ai': {
    id: 'vid-degree-data-science-ai',
    title: "Data Science & AI Degree Timeline: Mathematics, Machine Learning & Deployment",
    youtubeId: "RBSUwFGa6Fk",
    speaker: "IBM Technology",
    speakerRole: "Chief Data Scientist & AI Solutions Fellow",
    duration: "4:42",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~124 Credits). Many universities offer a 4+1 combined B.S./M.S. in Machine Learning completing both degrees in 5 years total.",
    journeyOverview: "A breakdown of the educational timeline to become an AI Engineer or Data Scientist: when math courses are taken, when machine learning projects are built, and the timeline to campus placement.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Computational & Vector Math",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Linear Algebra (Matrix operations, eigenvectors)",
                  "Multivariate Calculus & Optimization",
                  "Data Structures in Python / C++"
            ],
            "summerRequirement": "Summer 1: Personal exploratory data analysis projects and Kaggle participation."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Statistical Modeling & Big Data",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Probability & Bayesian Statistics",
                  "Classical Machine Learning (Scikit-Learn, Regression, Random Forests)",
                  "Relational Databases, SQL & Big Data with Spark"
            ],
            "summerRequirement": "Summer 2: Data analyst internship or university computational research."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Deep Learning, Neural Nets & Crucial Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "32 Credits",
            "keyMilestones": [
                  "Deep Learning & PyTorch (CNNs, RNNs, Transformers)",
                  "Natural Language Processing (NLP) & Vector Embeddings",
                  "MLOps: Model Containerization & Deployment (Docker, FastAPI)"
            ],
            "summerRequirement": "Summer 3: Paid Machine Learning / Data Science Internship ($45–$65/hour)."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Generative AI Capstone & Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Large Language Model Fine-Tuning & RAG Architectures",
                  "AI Ethics, Governance & Model Safety",
                  "Senior AI Capstone Project & Full-Time Offers ($98k–$155k)"
            ],
            "summerRequirement": "Graduation: Transition into Associate ML Engineer or Data Scientist role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Degree Duration: 4-Year BS vs 5-Year Integrated MS in AI"
      },
      {
            "time": "1:45",
            "title": "Year 1: The Essential Math (Linear Algebra & Calculus)"
      },
      {
            "time": "3:30",
            "title": "Year 2: Classical Machine Learning & Feature Engineering"
      },
      {
            "time": "5:20",
            "title": "Year 3: PyTorch, Transformers & Securing the ML Internship"
      },
      {
            "time": "7:40",
            "title": "Year 4: Production LLM Capstone & Campus Recruitment"
      },
      {
            "time": "9:50",
            "title": "Self-Taught vs Degree: How Long Does Each Path Take?"
      }
],
    keyTakeaways: [
      "The academic degree takes 4 years (48 months), though an optional 5th year for an MS can accelerate entry into elite AI research labs.",
      "The heavy math is concentrated in Years 1 and 2; Years 3 and 4 focus on modern deep learning, neural networks, and production MLOps.",
      "Graduates enter an exceptionally high-compensation market ($98k entry, $155k median) right after their 4-year degree."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'cybersecurity-engineering': {
    id: 'vid-degree-cybersecurity-engineering',
    title: "Cybersecurity & Ethical Hacking Timeline: Zero-Trust Defense in 7 Minutes",
    youtubeId: "inWWhr5tnEA",
    speaker: "Simplilearn Security Academy",
    speakerRole: "Lead Ethical Hacker & Infosec Architect",
    duration: "7:16",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~120 Credits). Fast-track career switchers with certifications (Security+, OSCP) can transition in 12–18 months.",
    journeyOverview: "A breakdown of the educational timeline to become an Ethical Hacker or Cybersecurity Engineer: how long the university degree takes versus hands-on certifications, and when students land their first security clearance jobs.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Systems & Networks Foundation",
            "durationMonths": "Months 1–12",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Computer Networks (TCP/IP Protocols, Wireshark)",
                  "Linux Administration & Bash Scripting",
                  "Python for Information Security"
            ],
            "summerRequirement": "Summer 1: Complete CompTIA Security+ or Network+ certification."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Defensive Architecture & Cryptography",
            "durationMonths": "Months 13–24",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Applied Cryptography & Public Key Infrastructure",
                  "Database & Web Application Fundamentals",
                  "Perimeter Defense: Firewalls, IDS/IPS & Zero Trust"
            ],
            "summerRequirement": "Summer 2: University Cyber Defense Team / Collegiate Cyber Defense Competition (CCDC)."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Offensive Security & Security Clearance Internship",
            "durationMonths": "Months 25–36",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Penetration Testing (Metasploit, Burp Suite, Kali Linux)",
                  "Binary Exploitation, Reverse Engineering & Assembly",
                  "SIEM Log Analysis (Splunk / Elastic)"
            ],
            "summerRequirement": "Summer 3: Security Operations Center (SOC) Analyst or Red Team Internship ($35–$45/hour)."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Incident Forensics Capstone & Placement",
            "durationMonths": "Months 37–48",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Digital Forensics & Malware Sandbox Analysis",
                  "Cloud Security Posture (AWS/Azure IAM)",
                  "Senior Capstone Cyber Range & Full-time Job Placement ($92k+)"
            ],
            "summerRequirement": "Graduation: Transition into Associate Penetration Tester or SOC Lead."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Degree Timeline: 4-Year University vs Certification Fast-Track"
      },
      {
            "time": "1:50",
            "title": "Year 1: Networking Protocols & Linux Systems"
      },
      {
            "time": "3:40",
            "title": "Year 2: Applied Cryptography & Defense Rules"
      },
      {
            "time": "5:30",
            "title": "Year 3: Offensive Hacking, CTFs & Security Clearance"
      },
      {
            "time": "7:45",
            "title": "Year 4: Senior Cyber Range Capstone & Placement"
      },
      {
            "time": "9:40",
            "title": "Timeline to Zero Unemployment in Cyber Defense"
      }
],
    keyTakeaways: [
      "Standard university degree is 4 years (48 months), though specialized certifications (Security+, OSCP) can be studied concurrently during summer breaks.",
      "Participating in annual collegiate cyber defense competitions during Years 2 and 3 guarantees campus recruiter attention.",
      "Cybersecurity enjoys nearly 0% unemployment, meaning graduates convert internships to full-time offers rapidly."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'product-design': {
    id: 'vid-degree-product-design',
    title: "UI / UX Design & Product Architecture: Wireframing, Figma & Design Systems",
    youtubeId: "c9Wg6Cb_YlU",
    speaker: "Daniel Walter Scott",
    speakerRole: "Adobe Certified UX Architect & Design Lead",
    duration: "8:30",
    degreeLengthSummary: "4-Year Bachelor of Design or HCI (8 Semesters, ~120 Credits). Non-degree portfolio career switchers can build a competitive hiring portfolio in 9 to 12 months.",
    journeyOverview: "A breakdown of how long design degrees take: learning visual foundations in Year 1, conducting usability research in Year 2, mastering Figma design systems in Year 3, and graduating with a hired portfolio in Year 4.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Visual Design & Spatial Hierarchy",
            "durationMonths": "Months 1–12",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Color Theory, Typography & Grid Systems",
                  "Design Thinking & Problem Framing",
                  "Introductory Vector Tools & Figma Basics"
            ],
            "summerRequirement": "Summer 1: Redesign 2 real apps for local community non-profits."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: UX Research & Usability Testing",
            "durationMonths": "Months 13–24",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Qualitative User Research & Customer Interviews",
                  "Information Architecture & User Flow Mapping",
                  "Interactive Prototyping & Micro-animations in Figma"
            ],
            "summerRequirement": "Summer 2: UX Research assistantship or junior freelance client projects."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Design Systems & Tech Internship",
            "durationMonths": "Months 25–36",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Building Scalable Multi-Brand Design Systems",
                  "Frontend Literacy (HTML5, Tailwind CSS, React components)",
                  "Web Accessibility (WCAG 2.1 AA Standards)"
            ],
            "summerRequirement": "Summer 3: Paid 12-week Product Design Internship at Tech Scaleup ($30–$45/hour)."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Enterprise Capstone Portfolio & Hiring",
            "durationMonths": "Months 37–48",
            "academicCredits": "30 Credits",
            "keyMilestones": [
                  "Complex Multi-Platform Enterprise Dashboard Design",
                  "Data-Driven A/B Conversion Design Strategy",
                  "Polishing 3 In-Depth Case Studies & Portfolio Defense ($82k+)"
            ],
            "summerRequirement": "Graduation: Transition into Associate Product Designer role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Degree Length: 4-Year B.Des vs 9-Month Portfolio Track"
      },
      {
            "time": "1:35",
            "title": "Year 1: Typography, Grid Systems & Figma Fundamentals"
      },
      {
            "time": "3:20",
            "title": "Year 2: Conducting Real Usability Tests with Users"
      },
      {
            "time": "5:10",
            "title": "Year 3: Building Design Systems & The Tech Internship"
      },
      {
            "time": "7:15",
            "title": "Year 4: The 3 Case Studies That Get You Hired"
      },
      {
            "time": "9:05",
            "title": "How Fast Can You Break In Without a Degree?"
      }
],
    keyTakeaways: [
      "A university design degree takes 4 years (48 months), but hiring in product design is 100% portfolio-driven.",
      "By Year 3, students must have 2–3 case studies demonstrating problem discovery, iteration, and measurable user impact.",
      "UI/UX offers strong starting compensation ($82k entry, $128k median) with exceptional remote work flexibility."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'technology-corporate-law': {
    id: 'vid-degree-technology-corporate-law',
    title: "Corporate & Technology Law: Entity Structuring, M&A & Intellectual Property",
    youtubeId: "nnis4ac1-M0",
    speaker: "Brett Cenkus, JD",
    speakerRole: "Managing Partner & Corporate Technology Attorney",
    duration: "9:45",
    degreeLengthSummary: "7-Year Complete Legal Timeline: 4-Year Undergraduate Degree in any major (STEM preferred for patent law) + 3-Year Post-Graduate Juris Doctor (J.D.) degree at an ABA-accredited law school + 2–3 Months Bar Examination Study. Total duration: 7 Years.",
    journeyOverview: "A detailed timeline of how long it takes to become a licensed corporate or technology attorney: from undergrad GPA and the LSAT exam, through 3 intense years of law school (1L, 2L, 3L), to passing the Bar Exam.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Phase 1: Undergraduate Degree (College Years 1–4)",
            "durationMonths": "Months 1–48 (4 Years Undergrad)",
            "academicCredits": "120 Credits + LSAT",
            "keyMilestones": [
                  "Bachelor degree in Computer Science, Engineering, Economics or Humanities",
                  "Maintaining high GPA (critical for top law school admissions)",
                  "Taking the LSAT exam (Junior Spring) and submitting law school applications"
            ],
            "summerRequirement": "Summers: Legal internships, congressional internships, or technical engineering work."
      },
      {
            "yearNumber": 2,
            "yearName": "Phase 2: 1L Year of Law School (Months 49–60)",
            "durationMonths": "Months 49–60 (Year 5 Total)",
            "academicCredits": "30 Law Credits",
            "keyMilestones": [
                  "Civil Procedure, Constitutional Law, Contracts, Torts, Criminal Law, Property",
                  "Legal Research & Objective Writing, surviving Socratic cold-calls",
                  "The all-important 1L curve: determines BigLaw Summer Associate placement"
            ],
            "summerRequirement": "1L Summer: Judicial externship, public interest legal clinic, or in-house legal internship."
      },
      {
            "yearNumber": 3,
            "yearName": "Phase 3: 2L & 3L Law School Specialization (Months 61–84)",
            "durationMonths": "Months 61–84 (Years 6 & 7 Total)",
            "academicCredits": "56 Law Credits",
            "keyMilestones": [
                  "Intellectual Property, Patent Law, Corporations & Securities Regulations",
                  "Law Review journal editing and moot court competitions",
                  "Paid 2L BigLaw Summer Associate position ($4,300/week) yielding full-time return offer"
            ],
            "summerRequirement": "2L Summer: 10-week BigLaw Summer Associate program (95%+ offer conversion)."
      },
      {
            "yearNumber": 4,
            "yearName": "Phase 4: Bar Exam & BigLaw Practice (Post-Law School)",
            "durationMonths": "Months 85+ (Graduation & Licensure)",
            "academicCredits": "Bar Admission (UBE / State Bar)",
            "keyMilestones": [
                  "10 weeks intensive Bar Exam study (May–July post-graduation)",
                  "Passing the State Bar Examination and USPTO Patent Bar (for engineers)",
                  "Starting as a First-Year BigLaw Associate at standardized $225,000 base salary!"
            ],
            "summerRequirement": "Full-time practice: Corporate and intellectual property transactions."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Law Timeline: Why It Takes 7 Years (4+3)"
      },
      {
            "time": "2:15",
            "title": "Years 1–4: Undergrad Degree, GPA Strategy & LSAT Exam"
      },
      {
            "time": "4:40",
            "title": "The Brutal 1L Year: The Most Important 9 Months in Law School"
      },
      {
            "time": "7:10",
            "title": "2L Summer Associate: How to Lock in a $225k Job Offer"
      },
      {
            "time": "9:30",
            "title": "3L Year, Graduation & Passing the State Bar Exam"
      },
      {
            "time": "11:20",
            "title": "Patent Law: Why STEM Degrees Have an Unfair Advantage"
      }
],
    keyTakeaways: [
      "Total legal journey takes 7 years: 4 years undergrad + 3 years law school. Accelerated 3+3 programs can reduce this to 6 years total.",
      "The first year of law school (1L) is the most critical: your 1L grades determine on-campus interviews where BigLaw firms hire associates 18 months before graduation.",
      "First-year associates at major firms start at $225,000 base salary, making the 3-year law school investment rapidly recoupable."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'quantitative-finance': {
    id: 'vid-degree-quantitative-finance',
    title: "What Do Wall Street Quants Actually Do? Algorithmic Models & Quant Finance",
    youtubeId: "DuBrreMiZlA",
    speaker: "Good Work Financial Media",
    speakerRole: "Quantitative Trading & Applied Math Specialist",
    duration: "12:47",
    degreeLengthSummary: "4-Year Undergrad in Mathematics, Physics, or Computer Science (48 Months), often followed by an optional 1.5-Year Master in Financial Engineering (MFE). Total: 4 to 5.5 Years.",
    journeyOverview: "A semester-by-semester breakdown of how long the Quantitative Finance degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'biomedical-engineering': {
    id: 'vid-degree-biomedical-engineering',
    title: "Biomedical Engineering: Medical Devices, Tissue Regeneration & Biosensors",
    youtubeId: "O6lENrRANxY",
    speaker: "Dr. Shini Somara",
    speakerRole: "Biomedical Mechanical Engineer (CrashCourse)",
    duration: "11:01",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~130 Credits) combining electrical engineering with human physiology.",
    journeyOverview: "A semester-by-semester breakdown of how long the Biomedical Engineering degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'robotics-engineering': {
    id: 'vid-degree-robotics-engineering',
    title: "Robotics Engineering: Autonomous Systems, Actuators, Kinematics & Control",
    youtubeId: "uNfUAJBuZ0s",
    speaker: "Dr. Shini Somara",
    speakerRole: "Robotics & Automation Engineer (CrashCourse)",
    duration: "11:02",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~132 Credits) blending kinematics, ROS2, and embedded control.",
    journeyOverview: "A semester-by-semester breakdown of how long the Robotics Engineering degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'fullstack-software-development': {
    id: 'vid-degree-fullstack-software-development',
    title: "Full Stack Software Development: Frontend, Backend & System Design",
    youtubeId: "nu_pCVPKzTk",
    speaker: "freeCodeCamp.org",
    speakerRole: "Principal Full Stack Engineer",
    duration: "9:20",
    degreeLengthSummary: "4-Year Computer Science Degree (8 Semesters, ~120 Credits). Also accessible via 6–9 month intensive coding bootcamps.",
    journeyOverview: "A semester-by-semester breakdown of how long the Full-Stack Software Engineering degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'biotechnology-genetics': {
    id: 'vid-degree-biotechnology-genetics',
    title: "Biotechnology & Genetic Engineering: Recombinant DNA & Molecular Synthesis",
    youtubeId: "Qo9gcZ0r8k8",
    speaker: "Hank Green",
    speakerRole: "Biotechnology & Genetics Series (CrashCourse)",
    duration: "12:13",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~126 Credits) with wet-lab biochemistry and molecular cloning.",
    journeyOverview: "A semester-by-semester breakdown of how long the Biotechnology & Genetic Engineering degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'aerospace-engineering': {
    id: 'vid-degree-aerospace-engineering',
    title: "What is Aerospace Engineering? Aeronautics, Astronautics & Propulsion",
    youtubeId: "JHfI5JbiWhE",
    speaker: "Zach Star",
    speakerRole: "Aerospace & Applied STEM Educator",
    duration: "15:20",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~134 Credits). Aerodynamics, propulsion, orbital mechanics.",
    journeyOverview: "A semester-by-semester breakdown of how long the Aerospace Engineering degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'investment-banking': {
    id: 'vid-degree-investment-banking',
    title: "How to Become an Investment Banker: Deal Structuring, M&A & Financial Modeling",
    youtubeId: "w96PzdRDGIM",
    speaker: "Intellipaat Financial Markets",
    speakerRole: "Former Wall Street VP & M&A Associate",
    duration: "13:17",
    degreeLengthSummary: "4-Year Bachelor Degree in Finance, Economics, or STEM. Recruitment occurs during Sophomore Spring / Junior Fall.",
    journeyOverview: "A semester-by-semester breakdown of how long the Investment Banking & Corporate Finance degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'neuroscience-research': {
    id: 'vid-degree-neuroscience-research',
    title: "The Chemical Mind: Neurotransmitters, Synapses & Cognitive Systems",
    youtubeId: "W4N-7AlzK7s",
    speaker: "Hank Green",
    speakerRole: "Neurobiology & Cognitive Sciences (CrashCourse)",
    duration: "10:14",
    degreeLengthSummary: "4-Year Undergraduate Degree (48 Months) + 5-Year Doctoral Research Fellowship (Ph.D.). Total: 9 Years for principal lab investigator.",
    journeyOverview: "A semester-by-semester breakdown of how long the Neuroscience Research degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'civil-infrastructure-engineering': {
    id: 'vid-degree-civil-infrastructure-engineering',
    title: "Civil Engineering: Structural Foundations, Geotech & Public Megaprojects",
    youtubeId: "-xbtnz4wdaA",
    speaker: "Dr. Shini Somara",
    speakerRole: "Civil Infrastructure Engineer (CrashCourse)",
    duration: "9:44",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters) + Passing FE Exam + 4 Years EIT Experience for PE License (8 Years Total to Stamp Blueprints).",
    journeyOverview: "A semester-by-semester breakdown of how long the Civil Engineering degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'game-engine-development': {
    id: 'vid-degree-game-engine-development',
    title: "How Game Engines Work: Graphics Pipelines, Physics & Interactive Systems",
    youtubeId: "1R7cY44gH24",
    speaker: "Brackeys",
    speakerRole: "Game Developer & Interactive Engine Architect",
    duration: "8:04",
    degreeLengthSummary: "4-Year Computer Science or Game Engineering Degree (8 Semesters, ~124 Credits) focused on C++, linear algebra, and shaders.",
    journeyOverview: "A semester-by-semester breakdown of how long the Game Development & 3D Graphics degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'clinical-psychology': {
    id: 'vid-degree-clinical-psychology',
    title: "Clinical Psychology & Diagnostic Systems: Psychopathology & Therapeutics",
    youtubeId: "wuhJ-GkRRQc",
    speaker: "Hank Green",
    speakerRole: "Clinical Psychology Series (CrashCourse)",
    duration: "10:09",
    degreeLengthSummary: "Complete 9–10 Year Licensure Timeline: 4 Years Undergrad Psychology + 5 Years Doctoral Program (Psy.D. / Ph.D.) with 2,000 practicum hours + 1 Year Post-Doctoral Fellowship. Total: 9 to 10 Years to State Licensure.",
    journeyOverview: "A semester-by-semester breakdown of how long the Clinical Psychology degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'clean-energy-environmental': {
    id: 'vid-degree-clean-energy-environmental',
    title: "Clean & Renewable Energy Engineering: Solar, Wind & Smart Grid Transition",
    youtubeId: "1kUE0BZtTRc",
    speaker: "National Geographic",
    speakerRole: "Renewable Power Systems & Clean Grid Specialists",
    duration: "3:17",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~128 Credits) covering grid storage, power electronics, and solar PV.",
    journeyOverview: "A semester-by-semester breakdown of how long the Clean Energy & Environmental Tech degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'blockchain-protocol-engineering': {
    id: 'vid-degree-blockchain-protocol-engineering',
    title: "How Does Bitcoin & Cryptographic Proof-of-Work Actually Work?",
    youtubeId: "bBC-nXj3Ng4",
    speaker: "Grant Sanderson",
    speakerRole: "3Blue1Brown Mathematics & Distributed Protocols",
    duration: "26:04",
    degreeLengthSummary: "4-Year Computer Science Degree (8 Semesters) with cryptography, distributed consensus, and EVM smart contract auditing.",
    journeyOverview: "A semester-by-semester breakdown of how long the Blockchain & Protocol Engineering degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'digital-marketing-growth': {
    id: 'vid-degree-digital-marketing-growth',
    title: "Digital Marketing & Growth Architecture: SEO, Conversion Funnels & Performance",
    youtubeId: "nU-IIXBWlS4",
    speaker: "Simplilearn Marketing",
    speakerRole: "Growth Marketing Director & Performance Strategist",
    duration: "5:18",
    degreeLengthSummary: "3 to 4-Year Bachelor Degree (6 to 8 Semesters) combining consumer psychology, SQL data analytics, and performance advertising.",
    journeyOverview: "A semester-by-semester breakdown of how long the Digital Growth & Product Marketing degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'environmental-science-esg': {
    id: 'vid-degree-environmental-science-esg',
    title: "Environmental Science & Ecological Systems: Climate Modeling & ESG Sustainability",
    youtubeId: "KrwtWKPAcRs",
    speaker: "Hank Green",
    speakerRole: "Environmental Systems & Ecology Series (CrashCourse)",
    duration: "12:15",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~122 Credits) combining remote sensing, GIS mapping, and field ecology.",
    journeyOverview: "A semester-by-semester breakdown of how long the Environmental Science & Climate Analytics degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'health-informatics': {
    id: 'vid-degree-health-informatics',
    title: "What is Health Informatics: Clinical Decision Systems, EHR & Health Analytics",
    youtubeId: "fpekSZdJHKQ",
    speaker: "Yale School of Public Health",
    speakerRole: "Health Informatics & Health Data Science Faculty",
    duration: "4:12",
    degreeLengthSummary: "4-Year Bachelor of Science (8 Semesters, ~120 Credits) bridging medical EHR systems, HIPAA data privacy, and clinical data science.",
    journeyOverview: "A semester-by-semester breakdown of how long the Health Informatics & Digital Health degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
  'product-management': {
    id: 'vid-degree-product-management',
    title: "What Is Product Management: Roadmapping, Market Discovery & Product Lifecycle",
    youtubeId: "XD45n_agC3g",
    speaker: "Simplilearn Product Academy",
    speakerRole: "Senior Product Director & Agile Coach",
    duration: "7:52",
    degreeLengthSummary: "4-Year Bachelor Degree in Computer Science, Engineering, or Business Economics. APM recruitment during Senior Fall.",
    journeyOverview: "A semester-by-semester breakdown of how long the Technical Product Management degree takes: required credit hours, prerequisite gates, summer internship windows, and campus recruitment timelines.",
    yearByYearTimeline: [
      {
            "yearNumber": 1,
            "yearName": "Year 1: Freshman Core Foundations",
            "durationMonths": "Months 1–12 (Semesters 1 & 2)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Introductory domain fundamentals and prerequisites",
                  "Calculus and analytical computational coursework",
                  "Core laboratories and digital tooling setup"
            ],
            "summerRequirement": "Summer 1: Personal skill-building projects or introductory campus research."
      },
      {
            "yearNumber": 2,
            "yearName": "Year 2: Intermediate Technical Labs",
            "durationMonths": "Months 13–24 (Semesters 3 & 4)",
            "academicCredits": "32–34 Credits",
            "keyMilestones": [
                  "Intermediate domain theory and specialized technical electives",
                  "Declaring track concentration or specialization sub-discipline",
                  "Collaborative group project labs and portfolio creation"
            ],
            "summerRequirement": "Summer 2: University lab research assistantship or early industry shadowing."
      },
      {
            "yearNumber": 3,
            "yearName": "Year 3: Advanced Systems & Crucial Summer Internship",
            "durationMonths": "Months 25–36 (Semesters 5 & 6)",
            "academicCredits": "30–32 Credits",
            "keyMilestones": [
                  "Advanced industry systems, compliance and modern frameworks",
                  "Preparing technical portfolio and resume for campus recruitment",
                  "Summer internship interviewing gauntlet"
            ],
            "summerRequirement": "Summer 3: MANDATORY 10–12 week paid industry summer internship."
      },
      {
            "yearNumber": 4,
            "yearName": "Year 4: Senior Capstone Design & Campus Placement",
            "durationMonths": "Months 37–48 (Semesters 7 & 8)",
            "academicCredits": "28–30 Credits",
            "keyMilestones": [
                  "Senior Capstone Project / Prototype Defense",
                  "Industry certification or licensure exams",
                  "Converting return offers into full-time employment"
            ],
            "summerRequirement": "Graduation: Transition into full-time professional career role."
      }
],
    journeyStages: [
      { stageNumber: 1, stageName: 'Year 1: Freshman Foundations & Prerequisites', timeframe: 'Months 1–12', focus: 'Completing foundational calculus, science prerequisites, and initial lab credits.', keyHurdle: 'Surviving first-year weed-out coursework and adapting to university pace.', breakthroughAdvice: 'Establish daily study schedules and form study groups early in the semester.' },
      { stageNumber: 2, stageName: 'Year 2: Core Labs & Declaring Specialization', timeframe: 'Months 13–24', focus: 'Intermediate domain theory, specialized software tooling, and lab experiments.', keyHurdle: 'Steep increase in technical homework and project rigor.', breakthroughAdvice: 'Join professional student societies and engineering project teams.' },
      { stageNumber: 3, stageName: 'Year 3: Advanced Systems & Crucial Summer Internship', timeframe: 'Months 25–36', focus: 'Upper-division technical electives and landing the mandatory summer internship.', keyHurdle: 'The high-pressure internship recruitment and technical interview gauntlet.', breakthroughAdvice: 'Build 2 public, documented portfolio projects to stand out to recruiters.' },
      { stageNumber: 4, stageName: 'Year 4: Senior Capstone & Full-Time Job Placement', timeframe: 'Months 37–48', focus: 'Completing senior capstone design thesis and converting return job offers.', keyHurdle: 'Balancing intense graduation project deadlines with job applications.', breakthroughAdvice: 'Target full-time return offers from your junior summer internship.' }
    ],
    chapters: [
      {
            "time": "0:00",
            "title": "Total Degree Length: 4 Years (8 Semesters Breakdown)"
      },
      {
            "time": "1:30",
            "title": "Year 1: Freshman Prerequisites & Core Credits"
      },
      {
            "time": "3:20",
            "title": "Year 2: Declaring Specialization & Core Labs"
      },
      {
            "time": "5:10",
            "title": "Year 3: The Make-or-Break Junior Summer Internship"
      },
      {
            "time": "7:25",
            "title": "Year 4: Senior Capstone Defense & Job Placement"
      },
      {
            "time": "9:20",
            "title": "Can You Graduate Early? 3.5-Year Fast Track"
      }
],
    keyTakeaways: [
      "The standard degree requires 4 academic years (48 months), divided into 8 semesters.",
      "Your Junior Summer internship between Year 3 and Year 4 is the primary launchpad for securing full-time job offers before graduation.",
      "Graduates who combine academic coursework with published portfolio projects enter the workforce with significant compensation leverage."
],
    transcriptExcerpt: "Understanding the exact timeline of a degree eliminates uncertainty. When you break down your education into four distinct years—freshman prerequisites, sophomore labs, junior internship season, and senior capstone placement—you can navigate every semester with clarity and purpose..."
  },
};
