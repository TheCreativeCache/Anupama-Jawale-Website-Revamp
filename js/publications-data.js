/*
  PUBLICATIONS DATA
  -----------------
  This is the only file you need to edit to add, change or remove a publication.
  Copy an existing entry, paste it at the end of the list, and change the text.

  Fields
    type      "journal" | "conference" | "book" | "other"
    kind      the label shown on the page, e.g. "Journal article"
    year      a number such as 2025, or null if the year is not known
    title     the title of the work
    authors   authors, written like "A. Jawale, G. Magar" (optional)
    venue     journal / conference / publisher details
    doi       the DOI only, e.g. "10.1016/j.jreng.2024.12.010" (optional)
    url       a web link, used when there is no DOI (optional)
    tags      badges such as "Scopus", "UGC Care", "Preprint" (optional)
    featured  true to show it in "Selected publications" on the home page
*/
window.PUBLICATIONS = [
  /* ---------- Journal articles ---------- */
  {
    type: "journal", kind: "Journal article", year: 2025, featured: true,
    title: "Multimodal Audio Violence Detection: Fusion of Acoustic Signals and Semantics",
    authors: "S. Nadar, D. Gandhi, A. Jawale, S. Pawar, R. Prabhu",
    venue: "Acadlore Transactions on AI and Machine Learning, vol. 4, no. 4, pp. 301–311",
    doi: "10.56578/ataiml040405"
  },
  {
    type: "journal", kind: "Journal article", year: 2025, featured: true,
    title: "Why Transformers Outperform LSTMs: A Comparative Study on Sarcasm Detection",
    authors: "P. Bari, G. Bedi, K. Joshi, A. Jawale",
    venue: "Journal on Artificial Intelligence, vol. 7, no. 1, pp. 499–508",
    doi: "10.32604/jai.2025.072531"
  },
  {
    type: "journal", kind: "Journal article", year: 2025, featured: true,
    title: "A Causal Machine Learning Approach for Investigating Learners’ Mental States through Electroencephalography (EEG)",
    authors: "A. Jawale, R. Prabhu, A. K. Tripathy",
    venue: "AI, Brain and Child (Springer)",
    doi: "10.1007/s44436-025-00014-2"
  },
  {
    type: "journal", kind: "Journal article", year: 2025, featured: true,
    title: "Multifaceted sensor-based approach for road quality assessment in the Indian road scenario",
    authors: "A. Jawale, A. K. Tripathy",
    venue: "Journal of Road Engineering, ISSN 2097-0498",
    doi: "10.1016/j.jreng.2024.12.010",
    tags: ["Scopus"]
  },
  {
    type: "journal", kind: "Journal article", year: 2025,
    title: "Custom Nonlinear Activation Functions For Pothole And Speed Bump Image Classification Using Convolutional Neural Networks",
    authors: "A. Jawale, G. Magar",
    venue: "NED University Journal of Research, vol. 22, no. 1–2, pp. 65–82",
    tags: ["Scopus"]
  },
  {
    type: "journal", kind: "Journal article", year: 2025,
    title: "Measuring the accuracy of time series reduction methods based on modified dynamic time warping distance calculations",
    authors: "A. Jawale, A. K. Tripathy",
    venue: "International Journal of Systematic Innovation, vol. 9, no. 2",
    tags: ["Scopus"]
  },
  {
    type: "journal", kind: "Journal article", year: 2025,
    title: "AI-Driven Zero-Shot Learning for Personalized Student Course Recommendations",
    venue: "International Journal of Research Publication and Reviews, vol. 6, no. 4, pp. 5698–5703, April 2025",
    doi: "10.55248/gengpi.6.0425.14113"
  },
  {
    type: "journal", kind: "Preprint", year: 2024,
    title: "Sealed Bid Auction via Blockchain-Ethereum using Finance Intermediary",
    authors: "S. K. Natarajan, A. Jawale",
    venue: "Authorea Preprints",
    tags: ["Preprint"]
  },
  {
    type: "journal", kind: "Journal article", year: 2024,
    title: "Ethical Considerations In Algorithmic Trading: Recent Developments, Challenges, And The Path Forward",
    authors: "A. Gawde, A. Jawale",
    venue: "International Journal of Creative Research Thoughts (IJCRT), vol. 12, no. 12, pp. 91–105"
  },
  {
    type: "journal", kind: "Journal article", year: 2024,
    title: "A Comprehensive Methodology for Analysing Options Trading: Utilizing Historical Data and the Black-Scholes Model",
    authors: "H. Jafri, A. Jawale, S. Kanojiya, H. Sanghavi",
    venue: "International Journal for Research in Applied Science & Engineering Technology (IJRASET), vol. 12, issue IX, pp. 282–287"
  },
  {
    type: "journal", kind: "Journal article", year: 2023, featured: true,
    title: "MFCC Delta–Delta Energy Feature Extraction for Clustering of Road Surface Types",
    authors: "A. Jawale, G. Magar",
    venue: "International Journal of Pavement Research and Technology, vol. 16, no. 3, pp. 631–646",
    tags: ["Scopus"]
  },
  {
    type: "journal", kind: "Journal article", year: 2022, featured: true,
    title: "Time Series Similarity Search Methods for Sensor Data",
    authors: "A. Jawale, G. Magar",
    venue: "Automatic Control and Computer Sciences, vol. 56, no. 2, pp. 120–129",
    tags: ["Scopus"]
  },
  {
    type: "journal", kind: "Journal article", year: 2022,
    title: "Real-life Application of a Decentralized System",
    authors: "P. Jani, A. Srivastava, A. Jawale",
    venue: "Journal article, 2022"
  },
  {
    type: "journal", kind: "Journal article", year: 2021,
    title: "Study of feature extraction techniques for sensor data classification",
    authors: "A. Jawale, G. Magar",
    venue: "International Journal of Information Communication Technologies and Human Development (IJICTHD), vol. 13, no. 1, pp. 33–46",
    tags: ["UGC Care"]
  },
  {
    type: "journal", kind: "Journal article", year: 2021,
    title: "Study of Azure Chat Bots Services",
    authors: "K. Tolani, A. Jawale",
    venue: "International Research Journal of Modernization in Engineering Technology and Science, vol. 3, no. 6"
  },
  {
    type: "journal", kind: "Journal article", year: 2019,
    title: "Comparison of image classification techniques: Binary and multiclass using convolutional neural network and support vector machines",
    authors: "A. Jawale",
    venue: "INFOCOMP Journal of Computer Science, vol. 18, no. 2, pp. 28–35",
    tags: ["UGC Care"]
  },
  {
    type: "journal", kind: "Journal article", year: 2019,
    title: "Survey of Clustering Methods for Large Scale Dataset",
    authors: "A. Jawale, G. Magar",
    venue: "International Journal of Computer Sciences and Engineering, vol. 7, pp. 1338–1344",
    tags: ["UGC Care"]
  },
  {
    type: "journal", kind: "Journal article", year: null,
    title: "Comparison of Web Service Techniques for Internet Communication",
    authors: "J. Parikh, A. Jawale",
    venue: "Journal article"
  },

  /* ---------- Conference papers ---------- */
  {
    type: "conference", kind: "Conference paper", year: 2026,
    title: "Performance Characterization of Deep Neural Architectures for Speech Emotion Recognition Using the SAVEE Corpus",
    authors: "A. Prakash, R. Khan, A. Jawale, K. Chopra",
    venue: "2026 International Conference on Emerging in Computing Technologies (INCECT), Belagavi, India, pp. 1–6",
    doi: "10.1109/INCECT72370.2026.11742836"
  },
  {
    type: "conference", kind: "Conference paper", year: 2026,
    title: "A Stochastic Process Model for Predicting Hallucination Dynamics in Large Language Models",
    authors: "H. Sanghavi, A. Jawale",
    venue: "13th International Conference on Computing for Sustainable Global Development (INDIACom), New Delhi, India, 2026, pp. 1–7",
    doi: "10.23919/INDIACom70271.2026.11525672"
  },
  {
    type: "conference", kind: "Conference paper", year: 2026,
    title: "Telemetry-based Speed Differential Prediction in Formula One using Isolation Forest and GRU",
    authors: "Y. Paranjape, R. Khan, A. Jawale, S. Gaur",
    venue: "13th International Conference on Computing for Sustainable Global Development (INDIACom), New Delhi, India, 2026, pp. 1–5",
    doi: "10.23919/INDIACom70271.2026.11526429"
  },
  {
    type: "conference", kind: "Conference paper", year: 2026,
    title: "Quantum-Inspired Penalty-Based Optimization of Heterogeneous Anomaly Detectors via QUBO in Electricity Demand Time Series",
    authors: "P. Kalro, R. Khan, A. Jawale",
    venue: "2026 IEEE International Conference on AI Engineering and Innovations (AIEI), NIT Jamshedpur, India, pp. 1–6",
    doi: "10.1109/AIEI69164.2026.11497824"
  },
  {
    type: "conference", kind: "Conference paper", year: 2025,
    title: "Building Trust in Transformers with a SHAP-Based Approach for Explaining AI Decisions",
    authors: "V. S. Guwal, R. Khan, A. Jawale, T. K. Jhalodwala, S. A. Qureshi, A. Ojha",
    venue: "12th International Conference on Computing for Sustainable Global Development (INDIACom), Delhi, India, 2025, pp. 1–6",
    doi: "10.23919/INDIACom66777.2025.11115248"
  },
  {
    type: "conference", kind: "Conference paper", year: 2025,
    title: "Sarcasm Detection using BERT Embeddings and Hybrid LSTM-CNN Architecture",
    authors: "P. Bari, G. Bedi, K. Joshi, A. Jawale, N. Kushe",
    venue: "12th International Conference on Computing for Sustainable Global Development (INDIACom), Delhi, India, 2025, pp. 1–7",
    doi: "10.23919/INDIACom66777.2025.11115484"
  },
  {
    type: "conference", kind: "Conference paper", year: 2024,
    title: "Exploring the Causal Dynamics of Covariates on Emotional Responses: Implications for Psychology and Human-Computer Interaction",
    authors: "D. Balsara, J. Mandliya, A. Jawale, R. Prabhu",
    venue: "5th International Conference for Emerging Technology (INCET), 2024, pp. 1–6",
    doi: "10.1109/INCET61516.2024.10592981"
  },
  {
    type: "conference", kind: "Conference paper", year: 2024,
    title: "Optimizing Emotion Classification from EEG Signals: A Comparative Analysis of Optimization Techniques on the DEAP Dataset",
    authors: "J. Broker, K. Shah, H. Shah, A. Jawale, R. Prabhu",
    venue: "International Conference on Computing for Sustainable Global Development (INDIACom), 2024",
    doi: "10.23919/INDIACom61295.2024.10498633"
  },
  {
    type: "conference", kind: "Conference paper", year: 2024,
    title: "Performance Benchmarking of Iterative Dichotomiser 3 (ID3) Using Clustering-Based Discretization",
    authors: "A. Jawale, G. Magar",
    venue: "Intelligent Systems: Proceedings of the 4th International Conference on Machine Learning, IoT and Big Data (ICMIB 2024), vol. 2",
    doi: "10.1007/978-981-97-8160-7_2"
  },
  {
    type: "conference", kind: "Conference paper", year: 2024,
    title: "DSS for Hate Speech Detection",
    authors: "S. Rodrigues, C. Ruzario, C. Pereira, A. K. Tripathy, A. Jawale",
    venue: "Nav Manthan, vol. 11, no. 1, pp. 109–121"
  },
  {
    type: "conference", kind: "Conference paper", year: 2024,
    title: "Optimizing GRU Networks for Air Quality Forecasting: A Hybrid Approach Using Ant Colony Optimization and Random Forest",
    authors: "H. Peshimam, R. Prabhu, A. Jawale, G. Magar",
    venue: "International Conference on Climate Change, organized by SNDT University and City University of New York, Chandrapur"
  },
  {
    type: "conference", kind: "Conference paper", year: 2023,
    title: "Analysis of Variable Importance Measurement Techniques for Classification of Road Surfaces",
    authors: "A. Jawale, G. Magar",
    venue: "First International Conference on Advances in Computer Vision and Artificial Intelligence Technologies (ACVAIT 2022), pp. 521–537"
  },
  {
    type: "conference", kind: "Conference paper", year: 2022,
    title: "Highlighting Prominent Features for Size Reduction in Time Series Data using Clustering Techniques",
    authors: "A. Jawale, G. Magar",
    venue: "2022 IEEE Bombay Section Signature Conference (IBSSC), pp. 1–6",
    doi: "10.1109/IBSSC56953.2022.10037499"
  },
  {
    type: "conference", kind: "Conference paper", year: null,
    title: "Survey of Geo-tagged Image Metadata Retrieval and Visualization Technique using R",
    venue: "National Conference on Advanced Research in Computer Science and Information Technology"
  },
  {
    type: "conference", kind: "Conference paper", year: null,
    title: "Innovative use of ICT through mobile phones and tablets: Quantitative analysis of academics usage pattern of undergraduate students",
    venue: "National Symposium, S.K. Somaiya College"
  },
  {
    type: "conference", kind: "Conference paper", year: null,
    title: "Emerging BFSI in Education: A new model of modular structured business oriented course structure",
    venue: "International Conference, Public Night College"
  },
  {
    type: "conference", kind: "Conference paper", year: null,
    title: "Designing generalized questionnaire for information envelop",
    venue: "National Conference on Information Integrity Research, Education and Technology, Marathwada Mitra Mandal’s College of Engineering, Pune, with Institute of Management Education, Sahibabad, Uttar Pradesh"
  },

  /* ---------- Books and chapters ---------- */
  {
    type: "book", kind: "Book chapter", year: 2026,
    title: "Exchange Rate Movements and Asset Quality in Indian Banks: Evidence from Non-Performing Assets",
    venue: "In Transforming Indian Finance: A Trilogy on Governance, Sustainability, and Technology. Gaurang Publishing Globalize Pvt Ltd, July 2026. ISBN 978-93-48943-14-9"
  },
  {
    type: "book", kind: "Book chapter", year: 2026,
    title: "A Hybrid Modeling Approach with Nonlinear Dynamics and Machine Learning in Financial Crisis Prediction",
    venue: "In Transforming Indian Finance: A Trilogy on Governance, Sustainability, and Technology. Gaurang Publishing Globalize Pvt Ltd, July 2026. ISBN 978-93-48943-14-9"
  },
  {
    type: "book", kind: "Book chapter", year: 2026,
    title: "Assessing the Role of India’s Financial Regulators in Ensuring Financial Stability: Systematic Literature Review",
    venue: "In Transforming Indian Finance: A Trilogy on Governance, Sustainability, and Technology. Gaurang Publishing Globalize Pvt Ltd, July 2026. ISBN 978-93-48943-14-9"
  },
  {
    type: "book", kind: "Book chapter", year: 2026,
    title: "Aligning Bloom’s Taxonomy with Student Performance through AI-Driven NLP Analysis of Session Plans in the Digital Era",
    authors: "A. Jawale, G. Desai, P. Ajagaonkar",
    venue: "In H. Taherdoost and M. Madanchian (Eds.), Strategic Innovation in the Digital Era: Aligning Technology, Culture, and Leadership. Productivity Press, 2026. ISBN 9781003729464",
    doi: "10.4324/9781003729464-15",
    tags: ["Scopus"]
  },
  {
    type: "book", kind: "Book chapter", year: 2026, featured: false,
    title: "Smart disaster management: Leveraging machine learning and remote sensing for informed decision-making",
    venue: "In Transforming Industries, Empowering Societies: A Comprehensive Examination of Industry 5.0 and Society 5.0. Elsevier, 2026, pp. 225–236",
    doi: "10.1016/B978-0-443-32878-7.00023-7",
    tags: ["Scopus"]
  },
  {
    type: "book", kind: "Book chapter", year: 2024,
    title: "IoT in Day-to-Day Life: Vehicle Body Fatigue Analysis",
    venue: "In Modeling, Simulation, and Control of AI Robotics and Autonomous Systems. IGI Global, 2024",
    doi: "10.4018/979-8-3693-1962-8.ch005",
    tags: ["Scopus"]
  },
  {
    type: "book", kind: "Book chapter", year: null,
    title: "A Comparative Study of Quantum-Inspired Dimensionality Reduction Algorithms",
    venue: "In QML: The Quantum Future of Machine Learning. Xilvoraink. ISBN 9788199137899",
    url: "https://book.xilvoraink.com/qml-the-quantum-future-of-machine-learning/"
  },
  {
    type: "book", kind: "Book chapter", year: null,
    title: "Ant Colony Optimization and Grey Wolf Optimization: A Comparative Study for Healthcare Resource Allocation During COVID-19 Across States in India",
    venue: "In Applied Machine Learning in Healthcare: Case-Based Approach. Routledge, Taylor and Francis Group. ISBN 9781032765945",
    tags: ["Scopus"]
  },
  {
    type: "book", kind: "Book chapter", year: null,
    title: "Skill India: A Catalyst to Nation Building with Technology",
    venue: "Edited book. Empyreal Publishing House. ISBN 978-81-946373-4-9"
  },
  {
    type: "book", kind: "Book", year: null,
    title: "IT in Business Management",
    venue: "TechMax Publication. ISBN 978-93-87235-26-7"
  },
  {
    type: "book", kind: "Book", year: null,
    title: "ASP.NET with C# Practical",
    venue: "Sheth Publication. ISBN 978-93-5149-582-6"
  },

  /* ---------- Datasets and other contributions ---------- */
  {
    type: "other", kind: "Dataset", year: 2026,
    title: "Mango Plant Diseases",
    venue: "Dataset (copyright application)",
    doi: "10.21227/1XZH-YN21"
  },
  {
    type: "other", kind: "Dataset", year: 2025,
    title: "EEG Raw Dataset",
    venue: "Zenodo, 8 August 2025 (copyright application)",
    doi: "10.5281/zenodo.16781553"
  },
  {
    type: "other", kind: "Case study", year: 2024,
    title: "An Entrepreneurial Venture: Astamudi Homestay",
    authors: "B. Krishnamoorthy, A. Jawale",
    venue: "Case study, casecent.re",
    url: "https://casecent.re/p/202008"
  }
];
