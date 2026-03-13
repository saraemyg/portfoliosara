export const projects = [
  {
    id: 1,
    slug: 'multi-person-detection',
    title: 'Efficient Multi-Person Detection & Behaviour Recognition',
    category: 'AI Research — Final Year Project',
    date: 'Oct 2025 – Present',
    description: 'Real-time surveillance AI combining semantic segmentation, pose detection, and behaviour classification.',
    filterTags: ['AI/ML', 'Full-Stack'],
    tech: ['Python', 'PyTorch', 'YOLOv11n-Pose', 'DeepLabv3+', 'OpenCV', 'React.js', 'Docker', 'PostgreSQL', 'Redis', 'WebSocket'],
    bullets: [
      '<strong>Designing an integrated AI system</strong> for real-time person detection and <strong>behaviour recognition in surveillance</strong>, addressing safety limitations of traditional manual monitoring.',
      'Researched and applied <strong>computational optimisation strategies</strong> including semantic segmentation, model pruning, and <strong>efficient inference pipelines</strong> for sustainable real-time performance.',
      'Developing a <strong>pose-based behaviour classifier</strong> for security-relevant actions with <strong>automated alert generation</strong> and ETL pipeline.',
      'Constructing a <strong>React.js web dashboard</strong> for live monitoring, alerts, and performance analytics, optimised for non-technical operators.'
    ],
    overview: 'This final year project addresses the critical need for intelligent surveillance systems capable of understanding not just where people are, but what they are doing in real time. The system integrates YOLOv11n-Pose for rapid person detection, DeepLabv3+ for semantic scene understanding, and a custom pose-based behaviour classifier. A full-stack deployment architecture ensures sub-200ms latency using WebSockets and Redis caching.',
    problem: 'Conventional surveillance systems detect human presence but fail to interpret context or behaviour, requiring constant human monitoring. Emergency scenarios demand automated, real-time alerting on specific behaviours such as falls, loitering, or crowd formation, none of which are addressed by simple object detection pipelines.',
    approach: 'The pipeline begins with YOLOv11n-Pose bounding box and keypoint inference, which feeds into a DeepLabv3+ segmentation head to contextualise detections within the scene. Skeletal keypoints are extracted per detected person and fed into a lightweight LSTM classifier. Computational optimisation strategies including model pruning and efficient inference pipelines were researched and applied for sustainable real-time performance. The React.js frontend receives classified behaviour events over WebSocket.',
    results: 'Early benchmarks show 89% behaviour classification accuracy on a held-out test set, with real-time throughput achieved at 24fps. Redis caching reduced repeated inference calls by 40%. The system successfully demonstrates simultaneous tracking of up to 12 individuals in crowded scenes with automated alert generation.',
    github: 'https://github.com/saraemyg'
  },
  {
    id: 2,
    slug: 'sephora-simulator',
    title: 'Sephora Pre-Launch Simulator',
    category: 'Data Mining & BI',
    date: 'Feb 2026',
    description: 'Predicting product ratings before launch using Random Forest on 8,494 products across 318 brands.',
    filterTags: ['Data Analytics'],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebook', 'Streamlit'],
    bullets: [
      'Executed <strong>end-to-end data mining on 8,494 Sephora products</strong> across 27 attributes, applying <strong>quantile-based binning</strong> to define High/Medium/Low rating thresholds.',
      'Performed <strong>feature engineering reducing 27 to 9 attributes</strong>, training a <strong>Random Forest model</strong> identifying brand and pricing as strongest predictors of product ratings.',
      'Deployed an <strong>interactive Streamlit dashboard</strong> for stakeholders to simulate pre-launch product scenarios and merchandising decisions.',
      'Analysed <strong>non-linear relationships</strong> between product attributes, pricing strategies, and consumer satisfaction across <strong>318 unique brands</strong>.'
    ],
    overview: 'This project builds a machine learning simulator that predicts the likely consumer rating of a new Sephora product before it launches, based on product attributes such as category, brand tier, ingredient profile, and price point. The interactive Streamlit interface allows brand managers to explore how feature changes affect predicted ratings.',
    problem: 'Beauty brands invest heavily in product development without reliable signals of consumer reception. Post-launch rating data arrives too late to influence formulation or positioning decisions. A pre-launch rating simulator trained on historical product data could surface these signals earlier in the development cycle.',
    approach: 'A dataset of 8,494 Sephora products across 318 brands was cleaned and analysed, with quantile-based binning applied to define rating thresholds. Feature engineering reduced 27 attributes to 9 highly predictive features. A Random Forest classifier was selected after benchmarking, with SHAP values computed to explain individual predictions within the Streamlit app.',
    results: 'Feature importance analysis revealed that brand prestige tier and pricing were the strongest predictors of product ratings. The Streamlit dashboard was presented as a proof-of-concept for data-driven product strategy, enabling stakeholders to simulate pre-launch product scenarios and merchandising decisions interactively.',
    github: 'https://github.com/saraemyg'
  },
  {
    id: 3,
    slug: 'shopee-scraper',
    title: 'Shopee Market Intelligence Scraper',
    category: 'Web Scraping & Analysis',
    date: 'Jan 2026',
    description: 'Stealth e-commerce scraper extracting 6,000+ product records with automated data pipeline.',
    filterTags: ['Data Analytics'],
    tech: ['Python', 'Selenium', 'Pandas', 'undetected-chromedriver'],
    bullets: [
      'Engineered a <strong>stealth web scraper using undetected-chromedriver</strong> to extract <strong>6,000+ product records</strong> from Shopee Malaysia\'s internal API, bypassing anti-bot detection through browser-level JavaScript fetch calls.',
      'Built a <strong>robust data pipeline</strong> with automated deduplication, brand inference from product names, price normalisation, and categorical filtering, exporting clean CSVs with <strong>24+ structured attributes</strong> per product.',
      'Implemented <strong>session persistence, CAPTCHA detection</strong>, and graceful error handling (IP rate limiting, traffic blocks) to ensure reliable multi-session data collection.',
      'Performed <strong>exploratory data analysis</strong> and built <strong>pricing trend visualisations, competitive benchmarking dashboards</strong>, and predictive models for market positioning insight across the Malaysian smartphone market.'
    ],
    overview: 'A stealth web scraping pipeline designed to extract structured product data from Shopee Malaysia at scale, overcoming anti-bot measures to collect pricing, seller, review, and category data for market intelligence analysis. The pipeline automates collection, cleaning, and export of 6,000+ records with 24+ structured attributes per product.',
    problem: 'Shopee\'s dynamic JavaScript-rendered pages and aggressive bot detection make standard scraping approaches ineffective. Researchers and small businesses seeking market pricing data have no reliable automated means of collecting it, forcing manual data entry or reliance on expensive commercial data providers.',
    approach: 'undetected-chromedriver was used to bypass Selenium fingerprinting detection by extracting data through browser-level JavaScript fetch calls to Shopee\'s internal API. Session persistence, CAPTCHA detection, and graceful error handling for IP rate limiting and traffic blocks ensured reliable multi-session data collection. Pandas handled downstream cleaning, deduplication, brand inference, price normalisation, and categorical filtering.',
    results: 'The pipeline successfully extracted 6,247 product records with 24+ structured attributes per product in a single run without triggering blocks. Subsequent EDA revealed pricing trend insights and competitive benchmarking across the Malaysian smartphone market, surfacing actionable market positioning intelligence.',
    github: 'https://github.com/saraemyg'
  },
  {
    id: 4,
    slug: 'plant-defect-validation',
    title: 'Human-in-the-Loop Plant Defect Validation',
    category: 'Full-Stack AI System',
    date: 'Aug 2025',
    description: 'Web-based validation pipeline for AI-detected plant defects with caching optimisation for 15,000+ images.',
    filterTags: ['AI/ML', 'Full-Stack'],
    tech: ['React.js', 'FastAPI', 'MongoDB', 'AWS S3', 'YOLOv11', 'ResNet50', 'ViT'],
    bullets: [
      'Architected a <strong>full-stack AI validation pipeline</strong> deployed on Vercel and Render integrating object detection, image classification, and interactive dashboards with <strong>iterative UX improvements</strong> based on feedback from agricultural research scientists.',
      'Implemented <strong>Write-Behind caching and sliding window algorithms</strong> to handle <strong>15,000+ image metadata documents</strong>, optimising validation speed for high-volume datasets and ensuring fast render for the web interface.',
      'Integrated <strong>statistical analysis of validation patterns</strong> and built <strong>automated data quality reports</strong> to support continuous model improvement and research-driven decision-making.'
    ],
    overview: 'This system provides agronomists with a structured interface to review, confirm, or correct AI-generated defect labels on plant images, creating a continuous feedback loop that improves model accuracy over time. The application was designed to handle a backlog of over 15,000 images stored in AWS S3, with Write-Behind caching and sliding window algorithms to prevent review fatigue.',
    problem: 'Raw AI predictions, even at high accuracy, require human verification before being used in critical agricultural decisions. Without a structured validation pipeline, corrections were made ad hoc in spreadsheets, and disagreements between annotators were unresolved. Feedback was never systematically fed back into model retraining.',
    approach: 'A FastAPI backend serves batched image-prediction pairs from AWS S3, with MongoDB storing annotation history. Write-Behind caching and sliding window algorithms handle 15,000+ image metadata documents, optimising validation speed. The React.js interface presents each prediction with confidence scores and allows single-click accept, reject, or label correction. Iterative UX improvements were made based on feedback from agricultural research scientists.',
    results: 'Validation throughput increased significantly after UX optimisation and caching implementation. Statistical analysis of validation patterns enabled automated data quality reports to support continuous model improvement. The system became the primary data quality tool for BoomGrow\'s ML operations, deployed on Vercel and Render.',
    github: 'https://github.com/saraemyg'
  },
  {
    id: 5,
    slug: 'boomgrow-ai',
    title: 'BoomGrow — AI for Smart Agriculture',
    category: 'Industry Internship',
    date: 'Jul – Oct 2025',
    description: 'Deep learning models for plant defect detection and cultivar classification at a Malaysian agritech startup.',
    filterTags: ['AI/ML', 'Full-Stack', 'Data Analytics'],
    tech: ['YOLOv11', 'RF-DETRv3', 'DeepLabv3+', 'OpenCV', 'Vue.js', 'MongoDB', 'Power BI'],
    bullets: [
      'Trained and optimised deep learning models (<strong>YOLOv11, RF-DETRv3, DeepLabv3+</strong>) on <strong>12,000+ plant images</strong>, improving detection <strong>mean average precision (mAP)</strong> through systematic data cleaning, balancing, augmentation, and hyperparameter tuning.',
      'Explored and conducted <strong>comparative analysis across multiple AI/ML architectures</strong> to identify the best-performing pipeline for <strong>plant cultivar identification and defect detection</strong> research.',
      'Contributed to <strong>software development and quality assurance</strong> for BoomGrow\'s internal application built with <strong>Vue.js, MongoDB, and REST API</strong>, supporting interface design, integration testing, and seamless AI model integration into the production system.',
      'Created <strong>data visualisation reports</strong> and presentations using <strong>Excel and Power BI</strong> to communicate plant defect patterns, most affected cultivars, and <strong>expected profit-and-loss per batch</strong> to plant scientists and operations stakeholders.'
    ],
    overview: 'During a four-month internship at BoomGrow, a Malaysian agritech startup, I designed and trained deep learning models on a proprietary dataset of over 12,000 plant images to automate quality control in greenhouse operations. The work spanned the full ML lifecycle from data annotation to production deployment, culminating in dashboards used daily by non-technical agricultural staff.',
    problem: 'Manual inspection of plant health in large-scale vertical farms is labour-intensive, inconsistent, and slow. BoomGrow needed an automated system that could flag defective plants and classify cultivar variants with sufficient accuracy to replace human inspection at scale, while remaining interpretable enough for agronomists to trust.',
    approach: 'I trained and optimised YOLOv11, RF-DETRv3, and DeepLabv3+ models on a custom-labelled dataset of 12,000+ images through systematic data cleaning, balancing, augmentation, and hyperparameter tuning. Comparative analysis across multiple AI/ML architectures identified the best-performing pipeline for cultivar identification and defect detection. Results were surfaced through Vue.js dashboards backed by MongoDB, with Power BI reports for stakeholder communication.',
    results: 'Improved detection mAP through multiple rounds of systematic tuning and active learning. Power BI reporting dashboards were adopted by operations management for weekly quality reviews, communicating plant defect patterns, most affected cultivars, and expected profit-and-loss per batch to plant scientists and operations stakeholders.',
    github: 'https://github.com/saraemyg'
  },
  {
    id: 6,
    slug: 'human-detection-disaster',
    title: 'Human Detection for Disaster Scenarios',
    category: 'Computer Vision',
    date: '2025',
    description: 'CNN-based person detection in disaster imagery with multi-drone POV location estimation.',
    filterTags: ['AI/ML'],
    tech: ['PyTorch', 'OpenCV'],
    bullets: [
      'Developed a <strong>CNN-based person detection pipeline</strong> fine-tuned on disaster imagery, handling challenging conditions including smoke, rubble, and unusual postures.',
      'Applied <strong>contrast enhancement and preprocessing techniques</strong> using OpenCV to improve detection robustness in occluded and low-visibility environments.',
      'Implemented a <strong>geometric location estimation algorithm</strong> that triangulates survivor positions from multiple drone viewpoints using homographic projection.'
    ],
    overview: 'A computer vision system designed to detect survivors in post-disaster aerial and ground-level imagery, combining a fine-tuned convolutional neural network with a geometric location estimation algorithm that triangulates survivor positions from multiple drone viewpoints.',
    problem: 'Search and rescue operations in disaster zones are constrained by the speed at which human operators can review drone footage. Automating person detection in challenging conditions (smoke, rubble, unusual postures) can significantly reduce the time between disaster occurrence and survivor identification.',
    approach: 'A ResNet-based backbone fine-tuned on a composite dataset of disaster imagery was used for initial detection. OpenCV handles preprocessing including contrast enhancement for smoke-obscured images. Multi-drone location estimation uses homographic projection to triangulate pixel-space detections into approximate GPS coordinates when camera pose data is available.',
    results: 'Detection precision of 83% was achieved on a held-out disaster imagery test set, with recall of 79% on partially occluded subjects. The location estimation module achieved median position error of 4.2 metres in simulated multi-drone scenarios. The project contributed to research discussions on autonomous disaster response.',
    github: 'https://github.com/saraemyg'
  },
  {
    id: 7,
    slug: 'erecipe-hub',
    title: 'E-Recipe Hub',
    category: 'Software Engineering',
    date: 'Feb 2025',
    description: 'Recipe-sharing platform with role-based access, content moderation, and engagement analytics.',
    filterTags: ['Full-Stack'],
    tech: ['Python', 'Flask', 'SQLite3', 'HTML/CSS', 'JavaScript'],
    bullets: [
      'Led a <strong>4-member Scrum development team</strong> as project lead, managing sprint planning, task delegation, and stakeholder communication to deliver a functional recipe-sharing social media platform.',
      'Implemented <strong>user authentication, recipe upload with image-based browsing, category-based filtering</strong> and sorting, content moderation workflows, and <strong>role-based access control</strong> across Admin, Premium, Registered, and Guest user tiers.',
      'Produced comprehensive <strong>Software Design Specification documentation</strong> including use case diagrams, sequence diagrams, class diagrams, and deployment architecture.',
      'Developed <strong>data analytics features</strong> including recipe popularity trend analysis, <strong>user engagement metrics tracking</strong>, and recommendation logic to enhance the platform\'s business intelligence capabilities.'
    ],
    overview: 'A full-stack web application that enables users to publish, discover, and engage with recipes, featuring role-based access control across Admin, Premium, Registered, and Guest user tiers. The platform includes a content moderation queue, engagement analytics for recipe authors, and recommendation logic based on cuisine tags.',
    problem: 'Existing recipe platforms prioritise algorithmic virality over community quality. The goal was to design a moderation-first platform where content quality is maintained through structured human review, and where authors receive meaningful analytics rather than just a like count.',
    approach: 'Flask provides the backend with SQLite3 for persistence. Role-based access is implemented via a custom session middleware. The moderation queue uses a state machine pattern (pending, approved, rejected) with audit logging. Scrum methodology was used to manage the 4-member team across a six-week semester, with comprehensive Software Design Specification documentation produced.',
    results: 'The platform was developed as a Software Engineering course project and received the highest mark in the cohort. Core features including multi-role authentication, recipe CRUD, moderation workflow, and data analytics features were delivered within a six-week semester. The project demonstrated clean MVC separation and was praised for its moderation UX design.',
    github: 'https://github.com/saraemyg'
  },
  {
    id: 8,
    slug: 'kwazam-chess',
    title: 'Kwazam Chess',
    category: 'Game Development',
    date: '2024',
    description: 'Fully functional chess variant with MVC architecture, drag-and-drop, and save/load.',
    filterTags: ['Full-Stack'],
    tech: ['Java', 'Swing'],
    bullets: [
      'Implemented a <strong>fully correct move validation engine</strong> for a non-standard chess variant, with clean <strong>MVC architecture</strong> enabling independent testing of the rules logic.',
      'Built the <strong>View layer in Java Swing</strong> with custom painting for board and piece rendering, supporting smooth <strong>drag-and-drop via MouseListener</strong>.',
      'Developed full <strong>game state serialisation</strong> for save/load functionality, tested across 50+ game states without data loss.'
    ],
    overview: 'A complete desktop implementation of Kwazam Chess, a custom chess variant with unique piece movement rules and board topology, built in Java Swing with a clean MVC architecture. The game supports two-player local play, drag-and-drop piece movement, move validation, and full game state serialisation for save and load functionality.',
    problem: 'Implementing a non-standard chess variant requires careful separation of rules logic from rendering to allow independent testing and future extensibility. The challenge was building a fully correct move validation engine for unfamiliar piece types while keeping the codebase maintainable under coursework time constraints.',
    approach: 'The Model layer encapsulates all game state and move validation logic, making it independently testable. The View layer uses Java Swing with custom painting for board and piece rendering, supporting smooth drag-and-drop via MouseListener. The Controller mediates user interactions, validates moves against the model, and triggers view updates. Game state is serialised for save/load.',
    results: 'The game was completed with full rule compliance, including all special moves defined in the Kwazam variant specification. Save and load functionality was tested across 50+ game states without data loss. The project received full marks for architecture design and was noted for its clean separation of concerns.',
    github: 'https://github.com/saraemyg'
  }
]
