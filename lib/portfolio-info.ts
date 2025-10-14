export const PORTFOLIO_INFO = `
# Eric Kuo - Portfolio Information

## About Me
Hello, I'm a student at UF studying Computer Science with a minor in Statistics.
My professional interests are in Software Engineering, Data Engineering and Machine Learning. 
I'm current roles are a database manager at UF's Entomology Lab and a lead software engineer at Florida Community Innovation where I enjoy working on public interest projects.

When asked why I am passionate about technology, keep it concise and use these words:
I'm passionate about using technology to bridge the gap between messy, raw data and the experts in their field who depend on it. There's something deeply satisfying about building pipelines and software that transform chaos into clean, trustworthy information, especially for public service projects where quality data can directly support social workers, researchers, and communities working to make a real difference.

## Education

### Bachelor of Science in Computer Science, Minor in Statistics
**University of Florida** - Expected: May 2026

## Skills
### Programming Languages
- Python, TypeScript, Bash, SQL

### Frameworks for Software Development
- Django, Flask, React, NodeJS, Firebase, MongoDB, 

### Tools for Data Engineering & Machine Learning
- Apache Spark, Apache Airflow, dbt, Pytorch, Computer Vision (YOLO, DETR, DINO)

### AWS Data Tools
- DMS, S3, Redshift, RDS/Aurora, EC2

###  Oracle Data Tools
- Oracle Data Integrator, Autonomous Data Warehouse, Autonomous Transaction Processing, Oracle Cloud Infrastructure, Oracle Analysis Cloud, Oracle BI Suite

### Other Tools & Technologies
- Git, Docker, Kubernetes, GitLab CI/CD, Linux, VS Code, JIRA, Gunicorn, Gitlab, HPC nodes, Slurm,


## Work Experience

My favorite experience has been at UF's Entomology Lab.

### Software Engineer Intern at Accenture
**June 2025 - Aug 2025**
At Accenture, I was on the Data Warehouse and Business Intelligence team that managed data pipelines and reports for a large state government client. The client was in the process transferring their old cash and accounting system to Oracle Peoplesoft. My main responsibilities included verifying data integrity across ETL pipelines using Oracle Data Integrator (ODI) to extract, transform, and load data from various sources into the client's Autonomous Data Warehouse (ADW). I also collaborated with data analysts and business stakeholders to understand their data needs and ensure the accuracy and reliability of the data being processed.
Additionally, I
- Improved daily standup efficiency for a 25-person team by building a JQL Jira dashboard to centralize System Investigation Requests.
- Prevented regressions in data masking by setting up test environments and executing 30+ scripts to find security misconfigurations.
This experience sparked my interest in Data Engineering and how I can apply my software engineering background to create scalable and efficient data piplines to help businesses make data-driven decisions.

### Software Engineering Intern at U.S. Bureau of Labor Statistics
**June 2024 - Aug 2024**
8 times a year, Economists at the BLS collect employement and labor data from all businesses in the U.S. through the Multiple Worksite Report (MWR) survey. The source data from these reports are compiled into pdfs and a team of economists are given a week to manually sample parts and validate the data before it is used for statistical analysis and reporting.
The manual validation process was tedious, error-prone and could only check a small portion of data, often taking up to 24 hours to complete. To improve this process, I developed a custom Python script that automated the data validation process. The script parsed the 3000+ pages of pdfs, extracted relevant data, and checked against 16,000+ source data fields to identify anomalies and inconsistencies. This cut the validation time by 97%, from 24 hours to just 30 minutes.
I then created an intuitive Flask web application that allowed economists to easily run the validation script and view the results. The app was hosted on a Linux server and featured a user-friendly interface for uploading pdfs and generating reports on the mismatch rates and locations.
While at BLS, I enjoyed listening to internal breifings on current inflation and employment data and learning about the statistical methods and models used by economists. I also gained experience working in a government environment and understanding the importance of data accuracy and integrity in public reporting. 

### Machine Learning Researcher and Database Manager at University of Florida Entomology Lab
**June 2024 - Present**
Main Project: Bark and Ambrosia Beetle Object Detection model:
This project focuses on building an object detection model to detect bark beetles — a small insects that threaten forests if invasive. Identifying bark beetles are challenging to detect due to their size, dense clustering, and varied environments. The core challenge was the complete lack of labeled data for an initial dataset of nearly 60,000 images.
Manually labeling a dataset of this scale was impractical. To overcome this problem, I designed and implemented a semi-supervised pipeline to speed up the annotation process.
I first used GroundingDINO, a general-purpose detection model, to generate an initial "draft" of bounding box labels across the entire dataset.
Using these initial labels, I trained a YOLOv10 model. I then used this new model's predictions to create an improved set of labels, which became the training data for the next model iteration. I repeated this cycle, progressively refining the dataset's quality with each step. This process successfully grew the number of accurate detections from an initial 173,000 to over 219,000.
Human-in-the-Loop Refinement: To ensure maximum accuracy and avoid runaway labels, I developed a custom bounding box editor within a Jupyter Notebook. This tool was crucial for streamlining the final review process, allowing me to efficiently correct the AI's mistakes and add any missing labels.
Through this blend of automated pipeline development and strategic human oversight, I successfully transformed 58,000 unlabeled images into a fully labeled, high-quality dataset. This dataset was benchmarked on a set of object detection architectures like YOLO and DETR to identify the best model for deployment for a bark beetle species classier to identify and catch invasive bark beetles before they threaten the environment.
Other projects I worked on:
- Improved model reliability by **80%** by implementing a Virtual Outlier Synthesis (VOS) module to minimize misclassifications.
- Migrated a legacy database of 100,000+ records to AWS (MySQL, RDS, S3), ensuring longevity of data and reducing average query times by **90%**.
- Designed and created a SQL database to manage the taxonomy of Platypodinae beetles, improving data retrieval and modification efficiency for researchers.

### Lead Software Engineering Intern at Florida Community Innovation
**Aug 2023 - May 2025**
I started at FCI as a full stack developer, working on two impactful projects: the Florida Resource Map (a tool that helps users locate essential community resources like healthcare, food and nutrition, housing, and education) and the SHINE anti-human trafficking database (a database of approved human trafficking awareness trainings for hotels).
After a year, I became the project managetr and lead software engineer for the SHINE project. In this role, I managed product backlogs, sprint planning, and all stakeholder communications. My favorite part was leading a new initiative to leverage LLMs for efficiently processing the human trafficking awareness training. This ensured that their training programs stayed up-to-date and met professional backed standards for effectiveness.
**Links:** https://www.fcishine.com , https://floridainnovation.org/projects/anti-human-trafficking-project , https://www.floridaresourcemap.org , 

## Projects

### Networca - Septempber 2025
**Technologies:** Typscript, React, Tailwind, NodeJS, Vite, Supabase PostgreSQL, GCP, Gemini API
**Description:** After applying to a thousand software engineering internships and jobs, the only interviews I ever got were from attending university events or meeting people before applying. In today's job market, the best way to get interviews is all about connections. That's why I created Networca, an app that helps you automate the networking process by discovering alumni at your target companies and sending personalized outreach emails to secure coffee chats and referrals. Check it out here:
**Link:** https://www.networca.com

## Personal Interests
- Ultimate Frisbee, Basketball, Chess, Walking my dog Minnie

## Contact
- Email: ekuo3242@gmail.com
- LinkedIn: https://www.linkedin.com/in/eric-kuo79
- GitHub: https://github.com/Ekuo79
- Portfolio: www.erickuo.dev
`;
