/* NDA SSB Interview Practice Quiz
   Source: "NDA SSB Personal Interview - 100 Questions with Sample Answers.md"
   Self-assessment is intentionally used because personal interview answers are subjective.
*/
"use strict";

const QUESTIONS = [{"id":1,"set":1,"category":"Personal Background, Family and Education","question":"Tell me something about yourself.","sampleAnswer":"Good morning, Sir. My name is [Your Name]. I belong to [City/State]. I have completed/am pursuing Class 12 from [School Name]. I enjoy [hobbies], and I am particularly interested in sports, learning new things and developing my personality. I consider myself responsible, disciplined and willing to learn from my mistakes. My ambition is to serve the nation as an officer in the Indian Armed Forces."},{"id":2,"set":1,"category":"Personal Background, Family and Education","question":"Tell me about your family.","sampleAnswer":"Sir, we are a family of [number] members. My father is a [profession], and my mother is a [profession/homemaker]. I have [number] siblings who are studying/working. My family has taught me the importance of discipline, honesty, respect and responsibility. We support each other and believe in working hard towards our goals."},{"id":3,"set":1,"category":"Personal Background, Family and Education","question":"What is your father's profession, and what have you learned from him?","sampleAnswer":"My father works as a [profession]. I have learned consistency, responsibility and dedication from him. One thing I particularly admire is his commitment towards his work and family."},{"id":4,"set":1,"category":"Personal Background, Family and Education","question":"What is your mother's role in your life?","sampleAnswer":"My mother has played an important role in my upbringing. She has taught me patience, compassion and the importance of managing responsibilities. I have also learned to remain calm and handle difficult situations from her."},{"id":5,"set":1,"category":"Personal Background, Family and Education","question":"Who are you closer to, your mother or your father?","sampleAnswer":"I share a good relationship with both. I approach my father for guidance on certain practical decisions, while I often discuss personal matters with my mother. However, I am comfortable sharing my thoughts with both of them."},{"id":6,"set":1,"category":"Personal Background, Family and Education","question":"What are your responsibilities at home?","sampleAnswer":"I help with household activities such as [mention actual activities]. I also take responsibility for managing my daily schedule and completing my personal work independently. These activities have helped me become more responsible."},{"id":7,"set":1,"category":"Personal Background, Family and Education","question":"What is your relationship with your siblings?","sampleAnswer":"I share a friendly relationship with my siblings. We help each other with studies and personal matters. Sometimes we disagree, but we discuss our differences and resolve them."},{"id":8,"set":1,"category":"Personal Background, Family and Education","question":"What is your favourite subject and why?","sampleAnswer":"My favourite subject is [Mathematics/Physics/English/etc.]. I enjoy it because it improves my analytical thinking and helps me understand concepts logically. I also find satisfaction in solving challenging problems."},{"id":9,"set":1,"category":"Personal Background, Family and Education","question":"Which subject do you dislike?","sampleAnswer":"I find [Subject] relatively challenging compared to other subjects. However, I understand its importance and work on improving my understanding through regular practice."},{"id":10,"set":1,"category":"Personal Background, Family and Education","question":"What was your percentage in Class 10 and Class 12?","sampleAnswer":"I scored [percentage]% in Class 10 and [percentage]% in Class 12. My performance was particularly good in [subjects]. I also identified areas where I could improve, and I worked on them."},{"id":11,"set":1,"category":"Personal Background, Family and Education","question":"Why did you choose your particular stream?","sampleAnswer":"I chose the [Science/Commerce/Arts] stream because of my interest in the subjects and their relevance to my future goals. I wanted to develop a strong academic foundation while preparing for my career."},{"id":12,"set":1,"category":"Personal Background, Family and Education","question":"Who was your favourite teacher and why?","sampleAnswer":"My favourite teacher was my [subject] teacher. Apart from teaching the subject effectively, the teacher encouraged students to ask questions, think independently and participate in activities."},{"id":13,"set":1,"category":"Personal Background, Family and Education","question":"Have you ever been punished at school?","sampleAnswer":"Yes, Sir. Once I was [explain the actual incident]. I understood that I had made a mistake and accepted the consequences. Since then, I have tried to be more careful about following rules and managing my responsibilities."},{"id":14,"set":1,"category":"Personal Background, Family and Education","question":"Were you a good student?","sampleAnswer":"I would describe myself as a reasonably good student. I maintained consistency in my studies and participated in activities whenever possible. I also had areas that required improvement, which I worked on gradually."},{"id":15,"set":1,"category":"Personal Background, Family and Education","question":"What extracurricular activities did you participate in?","sampleAnswer":"I participated in [sports, debates, cultural events, quizzes, etc.]. These activities helped me improve my teamwork, communication and confidence."},{"id":16,"set":1,"category":"Personal Background, Family and Education","question":"Have you ever held a leadership position?","sampleAnswer":"\"Yes, Sir. I was [class monitor/team captain/event coordinator, if applicable]. My responsibility was to coordinate activities, communicate with team members and ensure that assigned work was completed.\"\n\nIf you have never held a formal position, mention an actual situation where you took responsibility."},{"id":17,"set":1,"category":"Personal Background, Family and Education","question":"What are your hobbies?","sampleAnswer":"\"My hobbies include [reading, playing cricket, running, drawing, etc.]. I enjoy these activities because they help me remain active, develop concentration and use my free time productively.\"\n\nImportant: Be prepared for detailed questions about every hobby you mention."},{"id":18,"set":1,"category":"Personal Background, Family and Education","question":"How do you spend your free time?","sampleAnswer":"I usually spend my free time playing sports, reading, exercising or learning something new. I also spend time with my family and friends."},{"id":19,"set":1,"category":"Personal Background, Family and Education","question":"Who is your best friend? Describe him/her.","sampleAnswer":"My best friend is [Name]. We have known each other for [duration]. I appreciate his/her honesty, helpful nature and positive attitude. We motivate each other in academics and extracurricular activities."},{"id":20,"set":1,"category":"Personal Background, Family and Education","question":"What qualities do you like in your friends?","sampleAnswer":"I appreciate honesty, reliability, a positive attitude and a willingness to help others. I also value friends who can give constructive feedback rather than simply agreeing with everything I say."},{"id":21,"set":1,"category":"Personal Background, Family and Education","question":"What are your three strengths?","sampleAnswer":"My three strengths are consistency, willingness to learn and responsibility. I try to complete my assigned work on time, accept feedback and improve wherever necessary."},{"id":22,"set":1,"category":"Personal Background, Family and Education","question":"What are your weaknesses?","sampleAnswer":"Sometimes I spend more time than necessary analysing a decision. I am working on improving this by setting time limits, identifying priorities and making decisions based on available information."},{"id":23,"set":1,"category":"Personal Background, Family and Education","question":"What is your biggest achievement so far?","sampleAnswer":"My biggest achievement so far has been [actual achievement]. I am proud of it because it required consistent effort, discipline and overcoming challenges."},{"id":24,"set":1,"category":"Personal Background, Family and Education","question":"What is your biggest failure?","sampleAnswer":"One failure I experienced was [actual incident]. Initially, I was disappointed, but I analysed what went wrong and identified the areas that needed improvement. It taught me that failure should be treated as feedback for future efforts."},{"id":25,"set":1,"category":"Personal Background, Family and Education","question":"How would your friends describe you?","sampleAnswer":"My friends would probably describe me as approachable, dependable and helpful. They may also say that I sometimes take time to make decisions, which is something I am working to improve."},{"id":26,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"Why do you want to join the Indian Armed Forces?","sampleAnswer":"Sir, I want to join the Indian Armed Forces because I am attracted to the combination of responsibility, leadership, discipline and service to the nation. I want a career that challenges me physically and mentally while giving me an opportunity to lead people and contribute meaningfully to the country."},{"id":27,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"Why do you want to become an officer and not join as a soldier?","sampleAnswer":"Sir, I am interested in the responsibilities associated with officership, particularly planning, decision-making, leading teams and taking responsibility for outcomes. I believe the officer's role matches my interests and long-term career aspirations."},{"id":28,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What does leadership mean to you?","sampleAnswer":"Leadership means taking responsibility, setting an example, guiding people towards a common objective and ensuring that everyone contributes effectively. A good leader also listens to the team and accepts responsibility for mistakes."},{"id":29,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"Are you a leader or a follower?","sampleAnswer":"I believe I can perform both roles depending on the situation. When responsibility is assigned to me, I try to lead effectively. When someone else has greater experience or authority, I am comfortable following instructions and contributing to the team's objective."},{"id":30,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What would you do if your team members disagreed with your decision?","sampleAnswer":"I would first listen to their opinions and understand their concerns. If their suggestions improve the decision, I would incorporate them. If my decision remains appropriate, I would explain the reasoning and move forward while keeping the team motivated."},{"id":31,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"How do you handle pressure?","sampleAnswer":"I try to remain calm, identify the most important tasks and divide the problem into manageable steps. I focus on what I can control instead of becoming overwhelmed by the situation."},{"id":32,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What would you do if you failed an examination?","sampleAnswer":"I would analyse my preparation, identify the subjects or topics where I performed poorly and develop a better study strategy. I would treat the result as feedback and work towards improving my performance."},{"id":33,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What would you do if your friend cheated in an examination?","sampleAnswer":"I would explain to my friend that cheating is unethical and can have serious consequences. I would encourage him to work honestly. If required, I would follow the examination rules and report the incident through the appropriate channel."},{"id":34,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What would you do if you saw someone being bullied?","sampleAnswer":"I would intervene appropriately, ensuring that the situation does not become more dangerous. I would support the person being bullied and inform the relevant authority if necessary."},{"id":35,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"Suppose your senior gives you an order that you believe is incorrect. What would you do?","sampleAnswer":"I would respectfully clarify the instruction and communicate my concerns through the proper channel. I would ensure that I understand the objective and act according to lawful orders and established procedures."},{"id":36,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"How would you motivate a demotivated team?","sampleAnswer":"I would first understand why the team has lost motivation. I would discuss the challenges, set achievable short-term goals and encourage everyone to contribute. I would also recognise genuine efforts and lead by example."},{"id":37,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What is more important: intelligence or hard work?","sampleAnswer":"Both are important. Intelligence helps us understand problems and identify solutions, while hard work helps us execute those solutions consistently. I believe combining both produces better results."},{"id":38,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What is your biggest fear?","sampleAnswer":"My biggest concern is not making proper use of opportunities and falling short of my responsibilities. I try to address this by setting goals, maintaining discipline and continuously improving myself."},{"id":39,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"Are you an introvert or an extrovert?","sampleAnswer":"I would describe myself as an ambivert. I enjoy interacting with people and participating in group activities, but I also value time spent independently learning and reflecting."},{"id":40,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"How do you react when someone criticises you?","sampleAnswer":"I try to understand whether the criticism is constructive. If it highlights a genuine mistake, I accept it and work on improving. I do not believe criticism should automatically be taken personally."},{"id":41,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What would you do if two team members started fighting?","sampleAnswer":"I would try to calm the situation, separate the individuals if necessary and understand both sides. I would encourage them to resolve the disagreement professionally and involve the appropriate authority if the situation escalated."},{"id":42,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"Would you choose friendship over duty?","sampleAnswer":"I value friendships, but I would not compromise my responsibilities or ethical principles for personal relationships. I would try to handle the situation fairly and professionally."},{"id":43,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What motivates you?","sampleAnswer":"My motivation comes from setting meaningful goals, making progress and taking responsibility for my actions. I also feel motivated when I see the results of consistent effort."},{"id":44,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"How do you manage your time?","sampleAnswer":"I prioritise tasks according to their importance and deadlines. I prepare a daily schedule, allocate time for studies, physical activities and rest, and review my progress regularly."},{"id":45,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What would you do if you had to make an important decision with limited information?","sampleAnswer":"I would identify the objective, gather the most relevant available information, evaluate possible consequences and make a timely decision. I would also remain prepared to modify my decision if new information became available."},{"id":46,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What is the difference between confidence and overconfidence?","sampleAnswer":"Confidence means believing in one's abilities while understanding limitations. Overconfidence means overestimating one's abilities and ignoring risks or advice. Confidence encourages preparation, whereas overconfidence can lead to careless decisions."},{"id":47,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"How would you handle a situation where you are responsible for a mistake made by your team?","sampleAnswer":"I would take responsibility for my role in the situation, understand what went wrong and work towards correcting the mistake. I would avoid blaming individuals unnecessarily and focus on preventing similar problems in the future."},{"id":48,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What does discipline mean to you?","sampleAnswer":"Discipline means maintaining consistency in our actions, following rules, respecting commitments and completing responsibilities even when motivation is low."},{"id":49,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"Would you sacrifice your personal comfort for your team?","sampleAnswer":"Yes, when the situation demands it. Team objectives sometimes require individuals to make personal adjustments. However, such decisions should be guided by responsibility, practicality and the overall mission."},{"id":50,"set":2,"category":"Personality, Behaviour, Leadership and Situational Questions","question":"What makes you suitable for becoming an officer?","sampleAnswer":"I believe my willingness to learn, sense of responsibility, interest in teamwork and ability to accept challenges provide a foundation for becoming an officer. I also understand that I have areas to improve, and I am prepared to work consistently towards developing the required qualities."},{"id":51,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is NDA?","sampleAnswer":"NDA stands for National Defence Academy. It is a joint services training institution located in Khadakwasla, near Pune, Maharashtra. It provides training to cadets of the Indian Army, Navy and Air Force before they proceed to their respective pre-commissioning training academies."},{"id":52,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Where is the National Defence Academy located?","sampleAnswer":"The National Defence Academy is located at Khadakwasla, approximately 17 kilometres from Pune city in Maharashtra."},{"id":53,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Why was NDA established?","sampleAnswer":"NDA was established to provide joint training to future officers of the three services. Its objective is to develop leadership, discipline, camaraderie and an understanding of joint military operations."},{"id":54,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What are the three branches of the Indian Armed Forces?","sampleAnswer":"The three branches are:\n\n• Indian Army\n• Indian Navy\n• Indian Air Force."},{"id":55,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Who is the Supreme Commander of the Indian Armed Forces?","sampleAnswer":"The President of India is the Supreme Commander of the Indian Armed Forces."},{"id":56,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Who is the current Chief of Defence Staff (CDS) of India?","sampleAnswer":"\"Sir, the Chief of Defence Staff is the senior-most military adviser to the Government of India on matters concerning the armed forces and promotes jointness among the three services.\"\n\nPreparation note: Memorise the current officeholder's name before your interview. This is a time-sensitive question."},{"id":57,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Who is the Chief of the Indian Army?","sampleAnswer":"\"The Chief of the Army Staff is the professional head of the Indian Army.\"\n\nPreparation note: Learn the current Army Chief's name and appointment date."},{"id":58,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Who is the Chief of the Indian Navy?","sampleAnswer":"\"The Chief of the Naval Staff is the professional head of the Indian Navy.\"\n\nPreparation note: Learn the current Navy Chief's name."},{"id":59,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Who is the Chief of the Indian Air Force?","sampleAnswer":"\"The Chief of the Air Staff is the professional head of the Indian Air Force.\"\n\nPreparation note: Learn the current Air Chief's name."},{"id":60,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the difference between NDA and CDS examinations?","sampleAnswer":"The NDA examination is conducted by UPSC for candidates who have completed or are appearing in Class 12, subject to eligibility requirements.\n\nThe CDS examination is conducted for graduates seeking entry into the Indian Military Academy, Indian Naval Academy, Air Force Academy and Officers Training Academy, subject to the respective eligibility criteria."},{"id":61,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the difference between the Army, Navy and Air Force?","sampleAnswer":"• Indian Army: Primarily responsible for land-based military operations.\n• Indian Navy: Primarily responsible for maritime security and naval operations.\n• Indian Air Force: Primarily responsible for air defence and air operations.\n\nAll three services work together to protect India's sovereignty and national interests."},{"id":62,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What are the ranks in the Indian Army?","sampleAnswer":"Some of the commissioned officer ranks in ascending order are:\n\n• Lieutenant\n• Captain\n• Major\n• Lieutenant Colonel\n• Colonel\n• Brigadier\n• Major General\n• Lieutenant General\n• General."},{"id":63,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the role of the Indian Army?","sampleAnswer":"The Indian Army protects the country's land borders, safeguards territorial integrity, conducts military operations and assists civil authorities during emergencies and natural disasters when required."},{"id":64,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the role of the Indian Navy?","sampleAnswer":"The Indian Navy protects India's maritime interests, secures sea routes, conducts maritime operations and contributes to regional maritime security."},{"id":65,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the role of the Indian Air Force?","sampleAnswer":"The Indian Air Force protects Indian airspace, conducts air operations, provides air support to other services and undertakes humanitarian assistance and disaster relief operations."},{"id":66,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the difference between a commissioned officer and a non-commissioned officer?","sampleAnswer":"A commissioned officer holds a commission granted by the President of India and performs leadership, command and management responsibilities. Non-commissioned officers are personnel who hold leadership ranks within the other ranks structure and supervise personnel and operational activities."},{"id":67,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the motto of the National Defence Academy?","sampleAnswer":"The motto of NDA is 'Seva Parmo Dharma', meaning 'Service Before Self'."},{"id":68,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the motto of the Indian Army?","sampleAnswer":"The motto of the Indian Army is 'Service Before Self'."},{"id":69,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the motto of the Indian Navy?","sampleAnswer":"The motto of the Indian Navy is 'Sham No Varunah', meaning 'May the Lord of the Water be auspicious unto us'."},{"id":70,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the motto of the Indian Air Force?","sampleAnswer":"The motto of the Indian Air Force is 'Nabha Sparsham Deeptam', meaning 'Touch the Sky with Glory'."},{"id":71,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Name some important military operations conducted by India.","sampleAnswer":"Some important military operations and campaigns include:\n\n• Operation Vijay (1999): Associated with the Kargil War.\n• Operation Meghdoot (1984): Securing the Siachen Glacier.\n• Operation Cactus (1988): India's military intervention in the Maldives following an attempted coup.\n• Operation Pawan (1987): Indian Peace Keeping Force operations in Sri Lanka."},{"id":72,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the difference between a fighter aircraft, transport aircraft and helicopter?","sampleAnswer":"• Fighter aircraft: Designed primarily for air combat and defence missions.\n• Transport aircraft: Used for transporting personnel, equipment and supplies.\n• Helicopters: Used for transport, reconnaissance, rescue, medical evacuation and other military operations."},{"id":73,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Name five important aircraft used by the Indian Air Force.","sampleAnswer":"Some important aircraft include:\n\n• Rafale\n• Sukhoi Su-30MKI\n• Tejas\n• Mirage 2000\n• C-17 Globemaster III."},{"id":74,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"What is the difference between a submarine and a warship?","sampleAnswer":"A submarine is a naval vessel designed to operate underwater, whereas a warship generally operates on the surface of the water. Both perform different roles in naval operations and maritime security."},{"id":75,"set":3,"category":"Defence Knowledge, NDA, Armed Forces and General Awareness","question":"Why is discipline important in the Armed Forces?","sampleAnswer":"Discipline ensures coordination, reliability, accountability and effective execution of responsibilities. In military environments, personnel must work together under challenging conditions, making discipline essential for operational effectiveness."},{"id":76,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What would you do if you were stranded in an unfamiliar place without a mobile phone?","sampleAnswer":"I would remain calm, assess my surroundings and identify nearby landmarks or public places. I would approach a trustworthy local authority or responsible individual for assistance and try to identify a safe route to my destination."},{"id":77,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"Suppose you are leading a group and one member refuses to cooperate. What would you do?","sampleAnswer":"I would speak to the individual privately and understand the reason for the lack of cooperation. I would explain the importance of the common objective and try to assign responsibilities according to individual capabilities. If the issue continued, I would address it through the appropriate authority."},{"id":78,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"If you are given a task that seems impossible, what will you do?","sampleAnswer":"I would first understand the objective and available resources. I would divide the task into smaller activities, identify possible solutions and seek assistance where necessary. I would make a sincere effort rather than rejecting the task immediately."},{"id":79,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"If you are selected for the Army but wanted the Air Force, what would you do?","sampleAnswer":"Sir, I would respect the selection process and the opportunity offered to me. My primary objective is to serve as an officer in the Armed Forces. I would carefully consider the service offered and make a decision based on my eligibility, aptitude and genuine interest."},{"id":80,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What would you do if you were not recommended by the SSB?","sampleAnswer":"I would accept the result positively, analyse my performance and identify areas requiring improvement. I would continue developing my personality and prepare for another opportunity if I remained eligible. I would not allow one unsuccessful attempt to define my capabilities."},{"id":81,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What is patriotism according to you?","sampleAnswer":"Patriotism means respecting the country, its Constitution, its people and its values. It also means fulfilling our responsibilities honestly, contributing to society and working towards the nation's progress."},{"id":82,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What is the biggest challenge facing India's youth?","sampleAnswer":"I believe some important challenges include unemployment, unequal access to quality education, skill gaps, mental health concerns and the responsible use of technology. Addressing these issues requires education, skill development, innovation and opportunities for young people."},{"id":83,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What are the major security challenges for India?","sampleAnswer":"India faces several security challenges, including border security concerns, terrorism, cyber threats, maritime security challenges, misinformation and regional geopolitical tensions. Addressing these requires strong defence capabilities, intelligence coordination, diplomacy and technological development."},{"id":84,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What is the importance of technology in modern warfare?","sampleAnswer":"Technology plays an important role in communication, surveillance, intelligence, logistics, air defence and decision-making. Modern armed forces increasingly depend on advanced technologies such as artificial intelligence, drones, satellites and cybersecurity systems."},{"id":85,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What is your opinion about women joining the Armed Forces?","sampleAnswer":"I believe opportunities should be based on merit, eligibility and the requirements of the service. Women have demonstrated their capabilities in various military roles, and providing suitable opportunities strengthens the talent pool of the Armed Forces."},{"id":86,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What is the importance of physical fitness for an officer?","sampleAnswer":"Physical fitness helps an officer maintain endurance, strength, agility and the ability to perform duties under demanding conditions. It also contributes to mental resilience and sets a positive example for the team."},{"id":87,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What would you do if you noticed a fellow cadet breaking an important rule?","sampleAnswer":"I would first understand the situation and explain why following the rule is important. If the violation was serious or continued, I would inform the appropriate authority rather than ignoring it."},{"id":88,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"If you could change one thing in your school, what would it be?","sampleAnswer":"I would introduce more practical learning opportunities, sports activities and leadership-based projects. These activities can help students develop communication, teamwork and problem-solving skills alongside academics."},{"id":89,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What is the difference between success and happiness?","sampleAnswer":"Success generally relates to achieving goals, while happiness is a broader feeling of satisfaction and well-being. I believe meaningful success should also contribute to personal growth, relationships and a sense of purpose."},{"id":90,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"Do you believe a leader should be strict or friendly?","sampleAnswer":"A leader should maintain a balance. A leader must be approachable and understand the team, but should also be firm when responsibilities, discipline and standards are involved."},{"id":91,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What would you do if you had to choose between saving time and following the correct procedure?","sampleAnswer":"I would consider the urgency and nature of the situation. I would not compromise safety or legal requirements merely to save time. In an emergency, I would act within established emergency procedures and use the available resources efficiently."},{"id":92,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What is your opinion about social media?","sampleAnswer":"Social media is a useful platform for communication, education and information sharing. However, excessive use, misinformation and privacy concerns are significant challenges. I believe it should be used responsibly and in a balanced manner."},{"id":93,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"Who is your role model and why?","sampleAnswer":"\"My role model is [Name]. I admire this person because of [specific qualities or achievements]. I try to learn from their discipline, determination and approach to responsibilities.\"\n\nYou can choose a military personality, sportsperson, scientist, teacher or someone from your family."},{"id":94,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"If you could meet any military officer, whom would you meet and why?","sampleAnswer":"I would like to meet Field Marshal Sam Manekshaw. I admire his leadership, professional competence, confidence and contribution to India's military history. I would be interested in understanding his approach to leadership and decision-making."},{"id":95,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What do you know about the Kargil War?","sampleAnswer":"The Kargil War took place in 1999 between India and Pakistan in the Kargil sector of Jammu and Kashmir. Indian forces conducted Operation Vijay to recapture positions occupied by Pakistani forces and infiltrators. The conflict ended with India regaining the occupied positions. Kargil Vijay Diwas is observed on 26 July every year."},{"id":96,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What is the difference between internal security and external security?","sampleAnswer":"Internal security concerns threats within the country, such as terrorism, organised crime, insurgency and communal violence. External security concerns threats originating outside the country's borders, including military aggression and cross-border threats."},{"id":97,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"What would you do if your team failed despite your best efforts?","sampleAnswer":"I would take responsibility for my contribution, analyse the reasons for failure and discuss improvements with the team. I would identify what could have been done differently and apply those lessons to future tasks."},{"id":98,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"Where do you see yourself 10 years from now?","sampleAnswer":"I see myself as a professionally competent and responsible officer who has developed strong leadership abilities, gained valuable experience and contributed meaningfully to the organisation. I would also like to continue learning and improving throughout my career."},{"id":99,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"Why should the SSB recommend you?","sampleAnswer":"Sir, I understand that selection depends on demonstrating the required qualities rather than simply claiming to possess them. I believe I have a foundation of responsibility, willingness to learn, teamwork and determination. I am aware of my shortcomings and continuously work towards improving myself. I would be grateful for the opportunity to prove my capabilities through my actions."},{"id":100,"set":4,"category":"Situational, Analytical, Current Affairs and Advanced Personal Interview Questions","question":"Do you have any questions for me?","sampleAnswer":"\"Yes, Sir. I would like to know what qualities and professional habits you believe a young officer should continuously develop throughout their military career.\"\n\nThis shows curiosity and an interest in professional development."}];
const STORAGE_KEY = "nda_ssb_interview_quiz_v1";
const SET_NAMES = {
  1: "Personal Background, Family and Education",
  2: "Personality, Behaviour, Leadership and Situational Questions",
  3: "Defence Knowledge, NDA, Armed Forces and General Awareness",
  4: "Situational, Analytical, Current Affairs and Advanced Personal Interview Questions"
};

const $ = (id) => document.getElementById(id);
const els = {
  setFilter: $("setFilter"), shuffleToggle: $("shuffleToggle"), startBtn: $("startBtn"),
  workspace: $("quizWorkspace"), results: $("resultsPanel"), progressText: $("progressText"),
  progressPercent: $("progressPercent"), progressBar: $("progressBar"), progressFill: $("progressFill"),
  ratedCount: $("ratedCount"), readyCount: $("readyCount"), practiceCount: $("practiceCount"),
  setBadge: $("setBadge"), questionNumber: $("questionNumber"), questionText: $("questionText"),
  answerInput: $("answerInput"), charCount: $("charCount"), hintBtn: $("hintBtn"), hintBox: $("hintBox"),
  hintText: $("hintText"), sampleBtn: $("sampleBtn"), sampleBox: $("sampleBox"),
  sampleAnswer: $("sampleAnswer"), readyBtn: $("readyBtn"), practiceBtn: $("practiceBtn"),
  ratingNote: $("ratingNote"), prevBtn: $("prevBtn"), nextBtn: $("nextBtn"), navPosition: $("navPosition"),
  resetBtn: $("resetBtn"), saveStatus: $("saveStatus")
};

let sessionIds = [];
let currentIndex = 0;
let state = { answers: {}, ratings: {}, completedSets: {} };
let sessionSet = "all";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") state = {
        answers: parsed.answers || {}, ratings: parsed.ratings || {}, completedSets: parsed.completedSets || {}
      };
    }
  } catch (err) {
    console.warn("Saved quiz progress could not be read.", err);
  }
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    els.saveStatus.textContent = "Progress saved on this device";
  } catch (err) {
    els.saveStatus.textContent = "Unable to save (storage unavailable)";
  }
}
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function getQuestion() { return QUESTIONS.find(q => q.id === sessionIds[currentIndex]); }
function getSessionQuestions() { return sessionIds.map(id => QUESTIONS.find(q => q.id === id)).filter(Boolean); }
function countRatings() {
  const ratings = sessionIds.map(id => state.ratings[id]).filter(Boolean);
  return { assessed: ratings.length, ready: ratings.filter(x => x === "ready").length, practice: ratings.filter(x => x === "practice").length };
}
function startSession() {
  sessionSet = els.setFilter.value;
  let pool = QUESTIONS.filter(q => sessionSet === "all" || String(q.set) === sessionSet);
  if (els.shuffleToggle.checked) pool = shuffle(pool);
  sessionIds = pool.map(q => q.id);
  currentIndex = 0;
  els.results.hidden = true;
  els.workspace.hidden = false;
  renderQuestion();
  window.scrollTo({ top: els.workspace.offsetTop - 15, behavior: "smooth" });
}
function hintFor(q) {
  const hints = {
    1: "Think about specific facts from your own background. Be ready to support personal qualities with a real example.",
    2: "Consider the situation, the people involved, the action you would take and the reason for that action.",
    3: "Recall the relevant institution, service, role or concept. Separate established facts from details that may change over time.",
    4: "Pause, identify the objective and constraints, consider safety and fairness, then explain a practical course of action."
  };
  return hints[q.set] || "Identify the main point of the question and organise your response into clear, practical points.";
}
function renderQuestion() {
  const q = getQuestion();
  if (!q) return;
  els.setBadge.textContent = `SET ${q.set}`;
  els.questionNumber.textContent = `QUESTION ${q.id}`;
  els.questionText.textContent = q.question;
  els.answerInput.value = state.answers[q.id] || "";
  updateCharCount();
  els.sampleAnswer.textContent = q.sampleAnswer;
  els.sampleBox.hidden = true;
  els.hintBox.hidden = true;
  els.hintText.textContent = hintFor(q);
  els.sampleBtn.textContent = "View sample answer";
  els.hintBtn.textContent = "💡 Show hint";
  updateRatingButtons();
  els.prevBtn.disabled = currentIndex === 0;
  els.prevBtn.style.opacity = currentIndex === 0 ? ".45" : "1";
  els.nextBtn.textContent = currentIndex === sessionIds.length - 1 ? "Finish session ✓" : "Next question →";
  els.navPosition.textContent = `${currentIndex + 1} / ${sessionIds.length}`;
  updateProgress();
}
function updateCharCount() {
  const n = els.answerInput.value.length;
  els.charCount.textContent = `${n} character${n === 1 ? "" : "s"}`;
}
function updateProgress() {
  const counts = countRatings();
  const percent = Math.round((currentIndex / sessionIds.length) * 100);
  els.progressText.textContent = `Question ${currentIndex + 1} of ${sessionIds.length}`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressFill.style.width = `${percent}%`;
  els.progressBar.setAttribute("aria-valuenow", String(percent));
  els.ratedCount.textContent = counts.assessed;
  els.readyCount.textContent = counts.ready;
  els.practiceCount.textContent = counts.practice;
}
function updateRatingButtons() {
  const q = getQuestion();
  const rating = state.ratings[q.id];
  els.readyBtn.classList.toggle("selected", rating === "ready");
  els.practiceBtn.classList.toggle("selected", rating === "practice");
  els.ratingNote.textContent = rating
    ? (rating === "ready" ? "Marked Ready. Revisit your response later to keep it specific and truthful." : "Marked Needs practice. Review the sample and try answering again in your own words.")
    : "Your self-assessment is recorded for your progress report. It is not an objective judgement of personality or SSB suitability.";
}
function setRating(value) {
  const q = getQuestion();
  state.ratings[q.id] = value;
  saveState();
  updateRatingButtons();
  updateProgress();
}
function moveNext() {
  if (currentIndex < sessionIds.length - 1) {
    currentIndex++;
    renderQuestion();
    window.scrollTo({ top: els.workspace.offsetTop - 15, behavior: "smooth" });
  } else {
    showResults();
  }
}
function showResults() {
  const counts = countRatings();
  const pct = counts.assessed ? Math.round((counts.ready / counts.assessed) * 100) : 0;
  $("resultTotal").textContent = sessionIds.length;
  $("resultReady").textContent = counts.ready;
  $("resultPractice").textContent = counts.practice;
  $("resultPercent").textContent = `${pct}%`;
  $("resultMessage").textContent = counts.assessed < sessionIds.length
    ? `${sessionIds.length - counts.assessed} question(s) were not self-assessed. You can review them and complete your report.`
    : pct >= 80 ? "Good self-reported preparation. Keep practising with honest, specific examples."
    : "Use the questions marked Needs practice as your next revision priorities.";
  state.completedSets[sessionSet] = { total: sessionIds.length, ...counts, completedAt: new Date().toISOString() };
  saveState();
  els.workspace.hidden = true;
  els.results.hidden = false;
  window.scrollTo({ top: els.results.offsetTop - 15, behavior: "smooth" });
}
function reviewQuestions() {
  els.results.hidden = true;
  els.workspace.hidden = false;
  currentIndex = 0;
  renderQuestion();
  window.scrollTo({ top: els.workspace.offsetTop - 15, behavior: "smooth" });
}
function downloadReport() {
  const rows = getSessionQuestions().map(q => ({
    questionNumber: q.id, set: q.set, category: q.category, question: q.question,
    yourResponse: state.answers[q.id] || "", selfAssessment: state.ratings[q.id] || "Not assessed",
    sampleAnswer: q.sampleAnswer
  }));
  const counts = countRatings();
  const report = {
    title: "NDA SSB Personal Interview Practice Report",
    generatedAt: new Date().toISOString(),
    sessionSet, totalQuestions: sessionIds.length, assessed: counts.assessed,
    markedReady: counts.ready, needsPractice: counts.practice,
    readinessRating: counts.assessed ? `${Math.round(counts.ready / counts.assessed * 100)}%` : "Not available",
    note: "Self-assessment only; not an objective SSB score or selection prediction.",
    questions: rows
  };
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "NDA-SSB-Practice-Report.json";
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
function printCertificate() {
  const counts = countRatings();
  const pct = counts.assessed ? Math.round(counts.ready / counts.assessed * 100) : 0;
  const w = window.open("", "_blank");
  if (!w) { alert("Please allow pop-ups to print your practice certificate."); return; }
  const title = "NDA SSB Interview Practice — Completion Record";
  w.document.write(`<!doctype html><html><head><title>${title}</title><style>
    body{font-family:Arial,sans-serif;background:#f4f7fb;padding:40px;color:#152b48}
    .sheet{max-width:760px;margin:auto;background:white;border:8px double #294d7b;padding:55px;text-align:center}
    h1{font-size:30px;color:#17365d;margin:10px 0}h2{font-size:18px;font-weight:400}
    .line{border-bottom:1px solid #9aa9bb;margin:28px auto;width:70%}
    .stat{display:inline-block;margin:18px 24px;font-size:14px}.stat b{display:block;font-size:27px;color:#1d5dbb}
    p{line-height:1.6;color:#53657b}.small{font-size:11px}
    @media print{body{background:white;padding:0}.sheet{border-color:#294d7b}}
    </style></head><body><main class="sheet"><div>✦ &nbsp; PRACTICE COMPLETION RECORD &nbsp; ✦</div>
    <h1>NDA SSB PERSONAL INTERVIEW</h1><h2>100 Questions Practice Quiz</h2>
    <div class="line"></div><p>This record acknowledges completion of a self-guided interview practice session.</p>
    <div class="stat"><b>${sessionIds.length}</b>Questions in session</div>
    <div class="stat"><b>${counts.ready}</b>Marked ready</div>
    <div class="stat"><b>${counts.practice}</b>Needs practice</div>
    <div class="stat"><b>${pct}%</b>Self-rated readiness</div>
    <div class="line"></div><p class="small">Generated on ${new Date().toLocaleDateString()}.</p>
    <p class="small">This is a personal practice record, not an official certificate, SSB assessment or selection prediction.</p>
    </main><script>window.onload=()=>window.print();<\/script></body></html>`);
  w.document.close();
}
function retakeSession() {
  if (!confirm("Clear the saved responses and self-assessments for this session so you can retake it?")) return;
  sessionIds.forEach(id => { delete state.answers[id]; delete state.ratings[id]; });
  delete state.completedSets[sessionSet];
  saveState();
  currentIndex = 0;
  els.results.hidden = true;
  els.workspace.hidden = false;
  renderQuestion();
  window.scrollTo({ top: els.workspace.offsetTop - 15, behavior: "smooth" });
}
function resetProgress() {
  if (!confirm("Reset all saved answers and self-assessments on this device? This cannot be undone.")) return;
  state = { answers: {}, ratings: {}, completedSets: {} };
  saveState();
  sessionIds = [];
  els.workspace.hidden = true;
  els.results.hidden = true;
  els.saveStatus.textContent = "Progress reset";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

els.answerInput.addEventListener("input", () => {
  const q = getQuestion();
  if (!q) return;
  state.answers[q.id] = els.answerInput.value;
  saveState();
  updateCharCount();
});
els.hintBtn.addEventListener("click", () => {
  els.hintBox.hidden = !els.hintBox.hidden;
  els.hintBtn.textContent = els.hintBox.hidden ? "💡 Show hint" : "Hide hint";
});
els.sampleBtn.addEventListener("click", () => {
  els.sampleBox.hidden = !els.sampleBox.hidden;
  els.sampleBtn.textContent = els.sampleBox.hidden ? "View sample answer" : "Hide sample answer";
});
els.readyBtn.addEventListener("click", () => setRating("ready"));
els.practiceBtn.addEventListener("click", () => setRating("practice"));
els.prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) { currentIndex--; renderQuestion(); }
});
els.nextBtn.addEventListener("click", moveNext);
els.startBtn.addEventListener("click", startSession);
els.resetBtn.addEventListener("click", resetProgress);
$("reviewBtn").addEventListener("click", reviewQuestions);
$("retakeBtn").addEventListener("click", retakeSession);
$("downloadBtn").addEventListener("click", downloadReport);
$("printBtn").addEventListener("click", printCertificate);

loadState();
