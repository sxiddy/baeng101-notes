PAPERS({
  index: [
    { id: 'cat2-b1tb1', kind: 'actual', title: 'CAT-2 · Slot B1+TB1 · 28-09-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'model-01', kind: 'model', title: 'Model paper 1', sub: 'Same pattern as CAT-2 · Passage: electric vehicles' },
    { id: 'model-02', kind: 'model', title: 'Model paper 2', sub: 'Same pattern as CAT-2 · Passage: microplastics' },
    { id: 'model-03', kind: 'model', title: 'Model paper 3', sub: 'Same pattern as CAT-2 · Passage: remote work' },
    { id: 'model-04', kind: 'model', title: 'Model paper 4', sub: 'Same pattern as CAT-2 · Passage: gene editing' },
    { id: 'model-05', kind: 'model', title: 'Model paper 5', sub: 'Same pattern as CAT-2 · Passage: space debris' }
  ],

  asked: {
    'm3-sentence-def': { where: 'Q1', what: 'define five words (password, emoji, phishing, podcast, volunteer) in about 30 words each', paper: 'cat2-b1tb1' },
    'm3-expanded': { where: 'Q1', what: 'define five words in about 30 words each, a sentence definition plus one clarifying detail', paper: 'cat2-b1tb1' },
    'm3-inference': { where: 'Q2', what: 'four questions on a passage about AI ethics, two of them "does the author believe / suggest … justify"', paper: 'cat2-b1tb1' },
    'm3-inference-practice': { where: 'Q2', what: 'answer four comprehension and inference questions on an AI ethics passage, citing the text', paper: 'cat2-b1tb1' },
    'm4-abstract': { where: 'Q3', what: 'write a 100–120-word abstract of a study on social media use and attention', paper: 'cat2-b1tb1' },
    'm4-steps': { where: 'Q3', what: 'condense a four-paragraph study into a 100–120-word abstract', paper: 'cat2-b1tb1' },
    'm5-tki': { where: 'Q4', what: 'a Fresher Party budget case: name each member\'s Thomas-Kilmann style and advise the president', paper: 'cat2-b1tb1' },
    'm5-styles': { where: 'Q4', what: 'identify the styles of four council members (two competing, one avoiding, one accommodating)', paper: 'cat2-b1tb1' },
    'm5-choosing': { where: 'Q4', what: 'advise the council president which approach will settle the budget dispute before the event', paper: 'cat2-b1tb1' },
    'm5-case-study': { where: 'Q4', what: 'analyse a Fresher Party case study in 50–80 words per part', paper: 'cat2-b1tb1' },
    'm5-sop-what': { where: 'Q5', what: 'write a 200–250-word SoP for a semester at Monash University through VIT\'s Study Abroad Programme', paper: 'cat2-b1tb1' },
    'm5-sop-structure': { where: 'Q5', what: 'a 200–250-word SoP to a selection committee (study abroad semester)', paper: 'cat2-b1tb1' },
    'm5-sop-writing': { where: 'Q5', what: 'write an SoP explaining why you should be selected for a semester at Monash University', paper: 'cat2-b1tb1' },
    'm5-sop-tips': { where: 'Q5', what: 'a 200–250-word SoP for a study abroad semester: keep to the limit, be specific', paper: 'cat2-b1tb1' },
    'm5-sop-samples': { where: 'Q5', what: 'an SoP for a semester abroad at a partner university (Monash)', paper: 'cat2-b1tb1' }
  },

  papers: [
    {
      id: 'cat2-b1tb1', kind: 'actual', title: 'CAT-2 · Slot B1+TB1 · 28-09-2026', short: 'B1+TB1 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B1+TB1'], ['Date', '28-09-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech. General Freshers, Computer Science and Engineering']],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions for the following words in about 30 words each.</p><div class="chips"><span class="chip">a) Password</span><span class="chip">b) Emoji</span><span class="chip">c) Phishing</span><span class="chip">d) Podcast</span><span class="chip">e) Volunteer</span></div>`,
          answer: `
            <p>Each answer is a sentence definition (<b>term + class + distinguishing features</b>) followed by one clarifying phrase or example to reach about 30 words.</p>
            <p><b>a) Password</b> A password is a secret string of characters that a user types to prove their identity before a computer system allows access to an account, such as an email inbox or a phone.</p>
            <p><b>b) Emoji</b> An emoji is a small digital picture or symbol used in text messages and social media posts to show an emotion, object or idea, such as a smiling face for happiness.</p>
            <p><b>c) Phishing</b> Phishing is a type of online fraud in which criminals send fake emails, messages or websites that look genuine, to trick people into revealing passwords, bank details or other personal information.</p>
            <p><b>d) Podcast</b> A podcast is a series of recorded audio episodes, usually on one theme, that listeners can download or stream from the internet and play at any time, much like an on-demand radio show.</p>
            <p><b>e) Volunteer</b> A volunteer is a person who offers their time and skills to help a community, cause or organisation without being paid, for example a student who teaches children at a weekend literacy camp.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Password</td><td>a secret string of characters</td><td>typed to prove identity before access is allowed</td></tr>
                <tr><td>Emoji</td><td>a small digital picture or symbol</td><td>used in messages and posts to show an emotion, object or idea</td></tr>
                <tr><td>Phishing</td><td>a type of online fraud</td><td>fake emails or sites that trick people into giving away personal data</td></tr>
                <tr><td>Podcast</td><td>a series of recorded audio episodes</td><td>downloaded or streamed and played at any time</td></tr>
                <tr><td>Volunteer</td><td>a person</td><td>gives time and skills to a cause without being paid</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"Phishing is when hackers steal your data" has no class and uses "is when". "A podcast is a thing you listen to" has a class ("a thing") that tells the reader nothing. Name the shelf first, then the features.</p></div>
            <div class="note exam"><p>Two marks each. A clear class and at least two real features get most of the marks; the example or clarifying phrase brings the answer to about 30 words. Do not write a paragraph: 30 words is one or two sentences.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the passage given below and answer the following questions.</p>`,
          passage: `<p>As artificial intelligence systems become more capable and more deeply woven into daily life, from hiring decisions to medical diagnoses to criminal sentencing recommendations, a pressing question has moved from science fiction into policy rooms and courtrooms: how do we ensure AI is used ethically?</p>
            <p>One of the central concerns is bias. AI systems learn patterns from historical data, and if that data reflects existing social inequalities, the system can reproduce or even amplify them. A well-documented example involves hiring algorithms that learned to favour male candidates because the historical hiring data used to train them came from a period when men were disproportionately hired for certain roles. Even though the algorithm was never explicitly told to consider gender, it absorbed the bias embedded in the data it was given.</p>
            <p>A second concern is accountability. When a human makes a flawed decision, there are established ways to assign responsibility such as through appeals, lawsuits, or professional review. But when an algorithm denies someone a loan, flags them as a security risk, or recommends a harsher prison sentence, it is often unclear who is responsible for the outcome: the company that built the system, the organization that deployed it, or the data that trained it. Critics argue that this diffusion of responsibility allows harmful outcomes to occur without meaningful consequences for anyone involved.</p>
            <p>Supporters of rapid AI development counter that excessive caution carries its own ethical cost. Delaying beneficial technologies such as AI systems that can detect cancer earlier than human doctors or predict natural disasters with greater accuracy means real people suffer in the meantime. From this view, the ethical priority should be minimizing preventable harm through careful deployment and monitoring, not halting progress altogether while waiting for a perfect, risk-free system that may never exist.</p>
            <p>A third and increasingly urgent debate concerns transparency. Many advanced AI systems, particularly those based on deep learning, function as "black boxes": even their own developers cannot always fully explain why the system produced a particular output. This creates tension with legal and ethical standards that often require decisions, especially those affecting people's rights or livelihoods, to be explainable and justifiable.</p>
            <p>Governments and international bodies have begun responding with regulations requiring transparency, bias audits, and human supervision for high-stakes AI applications. Yet enforcement remains inconsistent across countries, and the technology continues to evolve faster than most legal frameworks can keep pace with. Whether meaningful global standards can be established before AI becomes even more deeply embedded in critical decisions is a question that remains very much open.</p>`,
          parts: [
            { text: 'What argument do supporters of rapid AI development give to counter concerns about caution and delay?', marks: 2 },
            { text: 'What are the three central ethical concerns discussed regarding the use of AI?', marks: 2 },
            { text: 'Does the author believe that AI systems are intentionally programmed to discriminate against certain groups (such as by gender)? Justify your answer with reference to the passage.', marks: 3 },
            { text: 'Does the author suggest that current government and international regulations have effectively solved the ethical challenges of AI? Justify your answer with reference to the passage.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> They argue that too much caution is itself harmful. Delaying useful AI, such as systems that detect cancer earlier than doctors or predict natural disasters more accurately, means real people suffer in the meantime. So the priority should be to reduce preventable harm through careful deployment and monitoring, instead of stopping progress while waiting for a perfect, risk-free system that may never exist (paragraph 4).</p>
            <p><b>2.</b> <b>Bias</b>: systems learn from historical data and can copy or amplify social inequalities. <b>Accountability</b>: when an algorithm causes harm, it is unclear whether the builder, the user organisation or the training data is responsible. <b>Transparency</b>: many deep-learning systems are "black boxes" whose decisions even their developers cannot fully explain.</p>
            <p><b>3.</b> <b>No.</b> The author presents bias as something the system picks up from its data, not something a programmer puts in. The passage says AI systems "learn patterns from historical data", and that the hiring algorithm "was never explicitly told to consider gender" yet "absorbed the bias embedded in the data it was given". The discrimination is therefore an unintended result of past inequality in the data, which is why it is hard to spot.</p>
            <p><b>4.</b> <b>No.</b> The author says governments and international bodies have only "begun responding" with rules on transparency, bias audits and human supervision. The same paragraph points to two gaps: enforcement "remains inconsistent across countries", and the technology changes faster than laws can keep up. The last sentence calls the question of global standards one that "remains very much open". The author sees regulation as a start, not a solution.</p>
            <div class="note trap"><p>Paragraph 4 (the supporters' view) is a counter-argument, not a fourth concern. List only bias, accountability and transparency in answer 2.</p></div>
            <div class="note exam"><p>For the 3-mark "does the author…" questions, give the verdict (yes or no), quote or point to two clues, and link them to the verdict in one sentence. That is the inference method from the notes: inference, evidence, link.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the passage below and write a concise abstract in 100–120 words.</p>`,
          passage: `<p>Concerns about shrinking attention spans have increased with the growing use of smartphones and social media, particularly among young people. Researchers have therefore examined whether heavy social media use is linked to difficulties in sustained attention. A team of researchers studied 1,200 students aged 13–17 from twelve schools over six months. Students reported their daily screen time, social media use, and frequency of switching between apps. They also completed a standardized assessment measuring their ability to maintain focus and resist distraction.</p>
            <p>Students who used social media for more than four hours a day scored lower on sustained attention tasks than those who used it for less than one hour. More importantly, frequent switching between apps was a stronger predictor of attention difficulties than total screen time. Students who frequently switched between platforms were nearly twice as likely to show signs of attention difficulties.</p>
            <p>The findings support theories that frequent notifications and short-form content may encourage the brain to expect constant novelty, making prolonged concentration more difficult. However, the researchers emphasized that the study cannot prove that social media use causes reduced attention. It is also possible that students who already have difficulty concentrating are more attracted to fast-paced digital content.</p>
            <p>The researchers conclude that the relationship between social media use and attention requires further investigation. They recommend longitudinal studies to determine whether heavy social media use causes attention difficulties. They also suggest that educators and parents exercise caution regarding unrestricted and fragmented social media use among adolescents.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>Amid concern about shrinking attention spans, this study examined whether heavy social media use is linked to poor sustained attention in adolescents. Researchers followed 1,200 students aged 13–17 from twelve schools for six months. Students reported screen time, social media use and app switching, and took a standardised attention test. Those using social media for over four hours a day scored lower on sustained attention than those using it for under one hour. Frequent app switching predicted attention difficulties more strongly than total screen time, nearly doubling their likelihood. The study could not prove causation, since poorly focused students may prefer fast-paced content. The researchers called for longitudinal studies and advised caution over unrestricted, fragmented social media use.</p>
            <p><small>118 words</small></p>
            <table class="tbl">
              <thead><tr><th>Part</th><th>Taken from</th><th>In the abstract</th></tr></thead>
              <tbody>
                <tr><td><b>Aim</b></td><td>paragraph 1, sentences 1–2</td><td>concern about attention spans; does heavy use link to poor attention</td></tr>
                <tr><td><b>Method</b></td><td>paragraph 1, sentences 3–5</td><td>who (1,200 students, 13–17, twelve schools), how long (six months), how (self-reports, standardised test)</td></tr>
                <tr><td><b>Findings</b></td><td>paragraph 2</td><td>over four hours vs under one hour; app switching beats screen time; nearly twice as likely</td></tr>
                <tr><td><b>Conclusion</b></td><td>paragraphs 3–4</td><td>no proof of cause; longitudinal studies; caution for parents and educators</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>How it was built: aim → method → findings → conclusion, in the past tense and third person, with the key numbers kept and no opinion added. The theory about "constant novelty" was dropped because it explains the result rather than reporting it; the limitation stays because it changes what the findings mean.</p></div>
            <div class="note trap"><p>Do not write "This passage talks about…" or "In my view parents should…". An abstract reports the study, not the passage and not you. Count your words: 100–120 means going to 135 loses marks.</p></div>`,
          topics: ['m4-abstract', 'm4-steps']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the case study given below and answer the following questions in 50–80 words.</p>`,
          passage: `<p>Susan is the President of the Student Council and is organizing the annual Fresher Party. Three weeks before the event, the council members disagree about the entertainment budget.</p>
            <p><b>Arjun, Cultural Secretary:</b> Arjun wants an expensive DJ from outside the city. He strongly pushes for his choice, dismisses budget concerns, and refuses to consider alternatives. He believes that entertainment is his responsibility and that his decision should be accepted.</p>
            <p><b>Zara, Treasurer:</b> Zara opposes the idea and insists on hiring a cheaper local performer. She refuses to spend more money because the budget is fixed and does not want to consider increasing the entertainment budget.</p>
            <p><b>Surya, Vice President:</b> Surya notices the disagreement between Arjun and Zara but refuses to get involved. He changes the subject when the issue comes up and hopes that they will resolve the matter themselves.</p>
            <p><b>Asmi, Logistics Coordinator:</b> Asmi prefers a simple and less expensive entertainment option, but she does not strongly argue for her choice. Instead, she agrees to support the group's decision, even if it means giving up her own preference. She wants to maintain harmony and avoid further disagreement among the members.</p>
            <p>Susan wants to find a solution that provides good entertainment while also maintaining budget discipline.</p>`,
          parts: [
            { text: 'a) Identify and explain the conflict-management style shown by each of the following: Arjun, Zara, Surya and Asmi.', marks: 5 },
            { text: 'b) What would be your advice to Susan to help the group reach a resolution before the event?', marks: 5 }
          ],
          answer: `
            <h4>a) Styles</h4>
            <p>Arjun is <b>competing</b>: he pushes his expensive DJ, dismisses budget concerns and refuses alternatives, so he is high on assertiveness and low on cooperation. Zara is also <b>competing</b>: she insists on the cheaper performer and will not discuss the budget at all. Surya is <b>avoiding</b>: he changes the subject and hopes the others will settle it. Asmi is <b>accommodating</b>: she gives up her own preference to keep harmony.</p>
            <p><small>68 words</small></p>
            <h4>b) Advice to Susan</h4>
            <p>Susan should <b>collaborate</b>. She should bring Arjun and Zara together, with Surya and Asmi present, and agree on the shared goal: good entertainment within the fixed budget. The group can then weigh options such as a mid-priced DJ, a strong local performer, or the outside DJ part-funded by a sponsor, against agreed criteria of cost and quality. If there is no agreement within a week, a <b>compromise</b> protects the three-week deadline.</p>
            <p><small>71 words</small></p>
            <div class="note why"><p>Zara is firm for her own position and uncooperative with Arjun's, which is competing even though her cause (the budget) is sensible. The style is about how you behave, not whether you are right. Collaborating fits because both concerns matter (quality and budget) and there is still time; compromise is the fallback when time runs short.</p></div>
            <div class="note exam"><p>Name the style, then give the evidence from the case for each person. In part b, name the style you recommend, say why it fits this case, and give concrete steps. Keep each part inside 50–80 words.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You are a Computer Science student at Vellore Institute of Technology (VIT) applying for the university's Study Abroad Programme, which allows students to spend a semester at Monash University, one of VIT's partner universities abroad. Write a Statement of Purpose (SOP) of about 200–250 words addressed to the selection committee, explaining why you wish to be selected for this programme.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Selection Committee,</p>
            <p>I am a first-year Computer Science and Engineering student at VIT, and I am applying to spend a semester at Monash University through the Study Abroad Programme. I want to learn how computing is taught and practised in a different academic culture, and bring that experience back to my work at VIT.</p>
            <p>My interest in computing began in Class 10, when I built a simple website for my school's science club. I scored 95% in my Class 12 board examinations, with full marks in Computer Science. At VIT, two classmates and I built a small web app that shows free laundry slots in our hostel block, and about forty students now use it every week. I also help run weekly practice contests in the coding club.</p>
            <p>Monash University is known for its research in data science and artificial intelligence, the areas I hope to specialise in. A semester there would let me take courses that complement my VIT curriculum, work on projects with students from many countries, and learn to manage on my own in a new place. These are skills an engineer on global software teams needs.</p>
            <p>After the programme, I plan to share what I learn through a session at the coding club and use the experience to shape my final-year project. I would be grateful for the chance to represent VIT at Monash, and I thank the committee for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>245 words</small></p>
            <div class="note exam"><p>How it was built: opening (who you are, what you are applying for, why) → academic background with proof (marks, a project with a number, a club role) → why this programme and this university (one accurate, general fact) → goals and what you will give back → a polite close. No subheadings, as the CAT format asks, and the first sentence of each paragraph does the heading's job.</p></div>
            <div class="note trap"><p>Do not invent course codes, professors or labs at Monash; a wrong detail looks copied. "Known for research in data science" is safe; a made-up unit name is not. Keep "I am passionate about technology" out: the website and the laundry app show it.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples']
        }
      ]
    },

    {
      id: 'model-01', kind: 'model', title: 'Model paper 1', short: 'Model paper 1', sub: 'Same pattern as CAT-2 · Passage: electric vehicles',
      meta: [['Pattern', 'Same as CAT-2 (B1+TB1)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions for the following words in about 30 words each.</p><div class="chips"><span class="chip">a) Firewall</span><span class="chip">b) Hashtag</span><span class="chip">c) Drone</span><span class="chip">d) Mentor</span><span class="chip">e) Recycling</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) Firewall</b> A firewall is a security system, in hardware or software, that monitors network traffic and blocks data that breaks set rules, keeping unauthorised users out of a private computer network.</p>
            <p><b>b) Hashtag</b> A hashtag is a word or phrase written after the # symbol in a social media post that groups posts on the same topic, so that users can find and follow them, for example #WorldEnvironmentDay.</p>
            <p><b>c) Drone</b> A drone is an unmanned aircraft flown by remote control or by an onboard computer program, used for tasks such as aerial photography, crop spraying and delivering small parcels.</p>
            <p><b>d) Mentor</b> A mentor is an experienced and trusted person who guides a less experienced person over a period of time, sharing advice and knowledge to help them grow, such as a senior guiding a fresher.</p>
            <p><b>e) Recycling</b> Recycling is a waste-management process in which used materials such as paper, glass, metal and plastic are collected and made into new products, reducing landfill waste and saving raw materials.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Firewall</td><td>a security system</td><td>monitors traffic, blocks data that breaks rules</td></tr>
                <tr><td>Hashtag</td><td>a word or phrase</td><td>after #, groups posts on one topic</td></tr>
                <tr><td>Drone</td><td>an unmanned aircraft</td><td>flown remotely or by a program</td></tr>
                <tr><td>Mentor</td><td>an experienced and trusted person</td><td>guides a less experienced person over time</td></tr>
                <tr><td>Recycling</td><td>a waste-management process</td><td>used materials made into new products</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"A drone is a flying thing" (class too broad) and "Recycling is when you recycle waste" (circular, "is when") both lose marks.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the passage given below and answer the following questions.</p>`,
          passage: `<p>Electric vehicles, once a curiosity at motor shows, are now a common sight on Indian roads. Electric scooters and auto-rickshaws lead the change in cities, and several state governments offer tax breaks and lower registration fees to buyers. Supporters present electric vehicles as a simple answer to two problems at once: dirty city air and a heavy dependence on imported oil.</p>
            <p>The case for them is strong in one respect. An electric motor produces no exhaust, so a street full of electric buses and scooters is quieter and has cleaner air at the kerb, where people actually breathe. Electric motors also turn far more of their stored energy into movement than petrol engines do, and they cost less to run per kilometre. For a delivery rider who covers a hundred kilometres a day, that saving adds up quickly.</p>
            <p>The picture becomes more complicated when we ask where the electricity comes from. In India, a large share of power is still generated by burning coal. An electric car charged from a coal-heavy grid moves part of its pollution from the city street to the power station. Studies that count emissions over a vehicle's whole life, including the making of its battery, often find that the climate benefit depends heavily on how clean the local grid is.</p>
            <p>Batteries raise their own questions. They need lithium, cobalt and nickel, which are mined in a small number of countries, sometimes under poor working conditions. A battery also loses capacity with age, and methods for recycling old batteries at scale are still being developed. Buyers, meanwhile, worry about the price of replacing a battery and about finding a charging point on a long journey.</p>
            <p>Charging infrastructure is growing, but unevenly. Metro cities and the highways between them now have public chargers, while smaller towns often have very few. For a family in a rented flat without a private parking space, charging at home may simply not be possible, however keen they are to switch. Waiting forty minutes at a public charger is also a real cost for someone who needs the vehicle for work.</p>
            <p>None of this means electric vehicles are a mistake. As more solar and wind power is added to the grid, every electric vehicle already on the road becomes cleaner without any change to the vehicle itself. The real question is whether the switch is planned together with cleaner power, better battery recycling and fair access to charging, or whether it is treated as a finished solution the moment the exhaust pipe disappears.</p>`,
          parts: [
            { text: 'Why does the author say that an electric car charged from a coal-heavy grid does not remove its pollution completely?', marks: 2 },
            { text: 'What problems linked to batteries does the passage mention?', marks: 2 },
            { text: 'Does the author believe that electric vehicles are a mistake? Justify your answer with reference to the passage.', marks: 3 },
            { text: 'What can be inferred about how easy it is for families in smaller towns or rented homes to own an electric vehicle? Justify your answer with reference to the passage.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> Because the electricity itself is made largely by burning coal. The car has no exhaust, but charging it from a coal-heavy grid "moves part of its pollution from the city street to the power station". Whole-life studies, which include making the battery, show the climate benefit depends on how clean the local grid is.</p>
            <p><b>2.</b> Batteries need <b>lithium, cobalt and nickel</b>, mined in a few countries, sometimes under poor working conditions. They <b>lose capacity with age</b>, large-scale <b>recycling</b> methods are still being developed, and buyers worry about the <b>cost of replacement</b>.</p>
            <p><b>3.</b> <b>No.</b> The author says directly, "None of this means electric vehicles are a mistake", and praises their clean air at the kerb, efficiency and low running cost. The author also notes that each vehicle gets cleaner as solar and wind power grow. The worry is about treating them as a "finished solution"; the author wants the switch planned with cleaner power, battery recycling and fair charging access.</p>
            <p><b>4.</b> It is likely to be <b>much harder</b> for them. The passage says smaller towns "often have very few" public chargers, and a family in a rented flat without private parking may find home charging "simply not possible, however keen they are to switch". So owning an electric vehicle depends on where you live and whether you own parking, which is why the author asks for "fair access to charging".</p>
            <div class="note exam"><p>In answer 3, the verdict alone (no) is one mark. The two clues (the direct statement and the "finished solution" warning) and the link to the author's balanced view bring it to three.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the passage below and write a concise abstract in 100–120 words.</p>`,
          passage: `<p>Many first-year engineering lectures last fifty minutes or more, and teachers often notice that students' attention fades long before the end. Researchers therefore investigated whether a short activity break in the middle of a lecture improves how much students remember. The study was carried out at four engineering colleges in Karnataka during the August–November 2025 semester and involved 480 first-year students taking an introductory physics course.</p>
            <p>Half of the sections followed their usual lecture format. In the other half, teachers stopped after twenty-five minutes for a four-minute break in which students stood, stretched and discussed a short question with a neighbour. At the end of each week, all students took a ten-question recall quiz on that week's lectures, and every fortnight they completed a brief survey on alertness. The researchers compared quiz scores and survey results between the two groups.</p>
            <p>Students in the break sections scored an average of 7.4 out of 10 on the weekly quizzes, compared with 6.1 in the regular sections. The gap was largest for material taught in the second half of the lecture. Students who had breaks also reported feeling more alert and less bored, and teachers noticed more questions from the class after the break. However, a few teachers said the break made it harder to finish the syllabus on time, and the effect on final examination marks was small.</p>
            <p>The researchers concluded that brief activity breaks can improve students' short-term recall and alertness at little cost. They recommended that colleges try such breaks in long lectures, while planning the syllabus to allow for the lost minutes. They also called for studies over a full academic year to check whether the benefit lasts.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study investigated whether a short activity break in the middle of a lecture improves students' recall. It involved 480 first-year students taking introductory physics at four engineering colleges in Karnataka during the August–November 2025 semester. Half the sections had a four-minute break after twenty-five minutes, of standing, stretching and discussion; the others had regular lectures. Weekly recall quizzes and fortnightly alertness surveys were compared. Students with breaks averaged 7.4 out of 10 on quizzes against 6.1, with the largest gain for second-half material, and reported greater alertness. The effect on final examination marks was small, and some teachers struggled to complete the syllabus. The study concluded that brief breaks improve short-term recall at little cost.</p>
            <p><small>116 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method (who, where, when, how: sentences 2–4) → findings with the numbers (sentences 5–6) → conclusion (sentence 7). Past tense, third person, no opinion. The recommendation for year-long studies was dropped to stay inside 120 words; the limitation (small effect on final marks) was kept because it qualifies the finding.</p></div>`,
          topics: ['m4-abstract', 'm4-steps']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the case study given below and answer the following questions in 50–80 words.</p>`,
          passage: `<p>Nisha leads a four-member team entering a 36-hour college hackathon. Two days before the event, the team still has not agreed on what to build.</p>
            <p><b>Rohan, the team's designer:</b> Rohan wants to build an augmented-reality campus guide that he has already sketched. He tells the others that it is the only idea good enough to win, talks over anyone who raises the time limit, and says he will not work on "a boring app".</p>
            <p><b>Priya, the backend developer:</b> Priya suggests that each member lists what every idea needs and why they like it. She asks Rohan what excites him about AR and asks Karthik about his concerns, and she wonders aloud whether one AR feature could be added to a simpler app.</p>
            <p><b>Karthik, the frontend developer:</b> Karthik prefers a simple lost-and-found app. He offers to build Rohan's idea with half its features removed, as long as the team uses the framework he knows. He is happy for each side to give up something to settle the matter quickly.</p>
            <p><b>Divya, the tester:</b> Divya stays silent in meetings, keeps her camera off during calls and replies "whatever you all decide" when asked. She has not given any view on either idea.</p>
            <p>Nisha wants a project the team can finish in 36 hours and that every member will work on.</p>`,
          parts: [
            { text: 'a) Identify and explain the conflict-management style shown by each of the following: Rohan, Priya, Karthik and Divya.', marks: 5 },
            { text: 'b) What would be your advice to Nisha to help the team agree on a project before the hackathon?', marks: 5 }
          ],
          answer: `
            <h4>a) Styles</h4>
            <p>Rohan is <b>competing</b>: he insists his AR idea is the only winner, talks over others and refuses to work on anything else. Priya is <b>collaborating</b>: she asks everyone's needs and reasons and looks for an idea that combines both. Karthik is <b>compromising</b>: he offers a cut-down version of Rohan's idea in return for his own framework, each side giving up something. Divya is <b>avoiding</b>: she stays silent and leaves the decision to others.</p>
            <p><small>73 words</small></p>
            <h4>b) Advice to Nisha</h4>
            <p>Nisha should <b>collaborate</b>, building on Priya's approach. She should hold one short meeting, ask Divya for her view directly, and agree on criteria: buildable in 36 hours, fits the theme, uses the team's skills. The team can then test a simple app with one AR feature against these criteria. Because time is short, Nisha should set a deadline for the decision and, if needed, make the final call as leader.</p>
            <p><small>70 words</small></p>
            <div class="note why"><p>Karthik's offer is a real compromise, not collaboration: he trades half of Rohan's features for his framework instead of looking for what both actually need. Priya's questions about the reasons behind each position are the mark of collaborating.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You are a first-year B.Tech Computer Science student at VIT applying for an eight-week summer internship in the data analytics team of a Chennai-based software company. Write a Statement of Purpose (SOP) of about 200–250 words addressed to the hiring manager, explaining why you should be selected for the internship.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Hiring Manager,</p>
            <p>I am a first-year B.Tech Computer Science student at VIT, and I am applying for the eight-week summer internship in your data analytics team. I want to learn how real business data is cleaned, analysed and turned into decisions, and to contribute useful work while I learn.</p>
            <p>I have enjoyed working with numbers since school, and I scored 94% in Mathematics in my Class 12 board examinations. At VIT I have learnt Python in my programming course, and I have practised on my own by analysing a public dataset of Chennai rainfall over twenty years, plotting the trends with pandas and Matplotlib. I shared the results at a data club meeting, and two seniors helped me correct an error in my averages, which taught me to check my work before presenting it.</p>
            <p>Your team's work on sales and customer data would show me how analysis is used when real money and deadlines depend on it. In return, I can offer careful work, basic Python and spreadsheet skills, and a willingness to take on routine tasks such as data cleaning, which I know take much of an analyst's time.</p>
            <p>After the internship, I plan to choose data science electives and build a larger project using what I learn. I would be grateful for the opportunity to join your team this summer, and I thank you for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>235 words</small></p>
            <div class="note exam"><p>How it was built: opening (what you are applying for and why) → background with proof (a mark, a self-started project, a lesson learnt) → why this team and what you offer them → goals and a polite close. No subheadings. An internship SoP should say what you will <b>give</b> as well as what you will get.</p></div>`,
          topics: ['m5-sop-structure', 'm5-sop-writing', 'm5-sop-tips']
        }
      ]
    }
  ]
});
