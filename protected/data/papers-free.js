PAPERS({
  index: [
    { id: 'cat1-b1tb1', kind: 'actual', exam: 'CAT-1', title: 'CAT-1 · Slot B1+TB1 · 10-08-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'cat1-b2tb2', kind: 'actual', exam: 'CAT-1', title: 'CAT-1 · Slot B2+TB2 · August 2026', sub: 'Actual paper · Fall 2026–27 · Chennai campus' },
    { id: 'cat1-f2tf2', kind: 'actual', exam: 'CAT-1', title: 'CAT-1 · Slot F2+TF2 · 14-08-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'cat2-b1tb1', kind: 'actual', title: 'CAT-2 · Slot B1+TB1 · 28-09-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'cat2-c2tc2', kind: 'actual', title: 'CAT-2 · Slot C2+TC2 · 29-09-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'cat2-b2tb2', kind: 'actual', exam: 'CAT-2', title: 'CAT-2 · Slot B2+TB2 · 28-09-2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'fat-b1tb1-2026', kind: 'actual', exam: 'FAT', title: 'FAT · Slot B1+TB1 · November 2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'fat-b2tb2-2026', kind: 'actual', exam: 'FAT', title: 'FAT · Slot B2+TB2 · November 2026', sub: 'Actual paper · Fall 2026–27' },
    { id: 'model-01', kind: 'model', title: 'Model paper 1', sub: 'Same pattern as CAT-2 · Passage: electric vehicles' },
    { id: 'model-02', kind: 'model', title: 'Model paper 2', sub: 'Same pattern as CAT-2 · Passage: microplastics' },
    { id: 'model-03', kind: 'model', title: 'Model paper 3', sub: 'Same pattern as CAT-2 · Passage: remote work' },
    { id: 'model-04', kind: 'model', title: 'Model paper 4', sub: 'Same pattern as CAT-2 · Passage: gene editing' },
    { id: 'model-05', kind: 'model', title: 'Model paper 5', sub: 'Same pattern as CAT-2 · Passage: space debris' },
    { id: 'model-06', kind: 'model', title: 'Model paper 6', sub: 'Same pattern as CAT-2 · Passage: deepfakes' },
    { id: 'model-07', kind: 'model', title: 'Model paper 7', sub: 'Same pattern as CAT-2 · Passage: gig-work ratings' },
    { id: 'model-08', kind: 'model', title: 'Model paper 8', sub: 'Same pattern as CAT-2 · Passage: e-waste' },
    { id: 'model-09', kind: 'model', title: 'Model paper 9', sub: 'Same pattern as CAT-2 · Passage: urban heat islands' },
    { id: 'model-10', kind: 'model', title: 'Model paper 10', sub: 'Same pattern as CAT-2 · Passage: antibiotic resistance' }
  ],

  asked: {
    'm3-sentence-def': [{ where: 'Q1', what: 'define five words (password, emoji, phishing, podcast, volunteer) in about 30 words each', paper: 'cat2-b1tb1' }, { where: 'Q1', what: 'define five words: virtual reality, podcast, projector, calculator, temperature (2 marks each)', paper: 'cat2-c2tc2' }],
    'm3-expanded': [{ where: 'Q1', what: 'define five words in about 30 words each, a sentence definition plus one clarifying detail', paper: 'cat2-b1tb1' }, { where: 'Q1', what: 'define five words (VR, podcast, projector, calculator, temperature), a sentence definition plus one clarifying detail', paper: 'cat2-c2tc2' }],
    'm3-inference': [{ where: 'Q2', what: 'four questions on a passage about AI ethics, two of them "does the author believe / suggest … justify"', paper: 'cat2-b1tb1' }, { where: 'Q2', what: 'four questions on a passage about algorithmic bias, including "what can be inferred" about historical data', paper: 'cat2-c2tc2' }],
    'm3-inference-practice': [{ where: 'Q2', what: 'answer four comprehension and inference questions on an AI ethics passage, citing the text', paper: 'cat2-b1tb1' }, { where: 'Q2', what: 'answer four stated and inference questions on an algorithmic-bias passage, with evidence', paper: 'cat2-c2tc2' }],
    'm4-abstract': [{ where: 'Q3', what: 'write a 100–120-word abstract of a study on social media use and attention', paper: 'cat2-b1tb1' }, { where: 'Q3', what: 'write an abstract of about 100 words of a study on nighttime smartphone use and sleep quality', paper: 'cat2-c2tc2' }],
    'm4-steps': [{ where: 'Q3', what: 'condense a four-paragraph study into a 100–120-word abstract', paper: 'cat2-b1tb1' }, { where: 'Q3', what: 'condense a five-paragraph sleep study into an abstract of about 100 words', paper: 'cat2-c2tc2' }],
    'm5-tki': [{ where: 'Q4', what: 'a Fresher Party budget case: name each member\'s Thomas-Kilmann style and advise the president', paper: 'cat2-b1tb1' }, { where: 'Q4', what: 'a group presentation case: name the approaches of Asha, Rahul, Meera and Karan', paper: 'cat2-c2tc2' }],
    'm5-styles': [{ where: 'Q4', what: 'identify the styles of four council members (two competing, one avoiding, one accommodating)', paper: 'cat2-b1tb1' }, { where: 'Q4', what: 'identify four styles: competing (Asha), avoiding (Rahul), collaborating (Meera), compromising (Karan)', paper: 'cat2-c2tc2' }],
    'm5-choosing': [{ where: 'Q4', what: 'advise the council president which approach will settle the budget dispute before the event', paper: 'cat2-b1tb1' }, { where: 'Q4', what: 'whose approach best finds a solution that addresses the concerns of all four, and why', paper: 'cat2-c2tc2' }],
    'm5-case-study': [{ where: 'Q4', what: 'analyse a Fresher Party case study in 50–80 words per part', paper: 'cat2-b1tb1' }, { where: 'Q4', what: 'analyse a group-presentation conflict case in two parts', paper: 'cat2-c2tc2' }],
    'm5-sop-what': [{ where: 'Q5', what: 'write a 200–250-word SoP for a semester at Monash University through VIT\'s Study Abroad Programme', paper: 'cat2-b1tb1' }, { where: 'Q5', what: 'write a 200–250-word SoP for an M.Tech in AI and ML after a B.Tech in CSE', paper: 'cat2-c2tc2' }],
    'm5-sop-structure': [{ where: 'Q5', what: 'a 200–250-word SoP to a selection committee (study abroad semester)', paper: 'cat2-b1tb1' }, { where: 'Q5', what: 'a 200–250-word SoP covering background, interest, projects, goals and how the programme helps', paper: 'cat2-c2tc2' }],
    'm5-sop-writing': [{ where: 'Q5', what: 'write an SoP explaining why you should be selected for a semester at Monash University', paper: 'cat2-b1tb1' }, { where: 'Q5', what: 'write an M.Tech (AI and ML) SoP: academic background, projects and skills, career goals', paper: 'cat2-c2tc2' }],
    'm5-sop-tips': [{ where: 'Q5', what: 'a 200–250-word SoP for a study abroad semester: keep to the limit, be specific', paper: 'cat2-b1tb1' }, { where: 'Q5', what: 'a 200–250-word SoP for an M.Tech in AI and ML: keep to the limit, be specific', paper: 'cat2-c2tc2' }],
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
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
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
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
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
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
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
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.3', 'm5-choosing.1', 'm5-tki.2']
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
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5', 'm5-sop-samples.0']
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
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
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
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
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
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
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
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.3', 'm5-choosing.1', 'm5-tki.2']
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
          topics: ['m5-sop-structure', 'm5-sop-writing', 'm5-sop-tips'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5']
        }
      ]
    },
    {
      id: 'cat2-c2tc2', kind: 'actual', title: 'CAT-2 · Slot C2+TC2 · 29-09-2026', short: 'C2+TC2 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'C2+TC2'], ['Date', '29-09-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech. (SCOPE/SCORE)']],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO1 – Enhance Writing Skills for better publication. CO4 – Demonstrate analytical reading skills in terms of deciphering research articles. CO6 – Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions of the following words.</p><div class="chips"><span class="chip">a) Virtual Reality (VR)</span><span class="chip">b) Podcast</span><span class="chip">c) Projector</span><span class="chip">d) Calculator</span><span class="chip">e) Temperature</span></div>`,
          answer: `
            <p>Each answer is a sentence definition (<b>term + class + distinguishing features</b>) followed by one clarifying phrase or example to reach about 30 words.</p>
            <p><b>a) Virtual Reality (VR)</b> Virtual reality (VR) is a computer technology that uses a headset to place the user inside a simulated three-dimensional world they can explore and interact with, as in flight-training simulators.</p>
            <p><b>b) Podcast</b> A podcast is a series of recorded audio episodes on one theme, released online for listeners to stream or download at any time, such as a technology talk show.</p>
            <p><b>c) Projector</b> A projector is an optical device that receives images or video from a source such as a laptop and displays them, enlarged, on a screen or wall for an audience.</p>
            <p><b>d) Calculator</b> A calculator is a small electronic device that performs mathematical operations such as addition, subtraction, multiplication and division when numbers are keyed in, and shows the result on a screen.</p>
            <p><b>e) Temperature</b> Temperature is a physical quantity that shows how hot or cold a substance is, reflecting the average energy of its particles, and is measured with a thermometer in degrees Celsius.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Virtual Reality (VR)</td><td>a computer technology</td><td>a headset places the user in a simulated 3D world they can explore</td></tr>
                <tr><td>Podcast</td><td>a series of recorded audio episodes</td><td>on one theme, streamed or downloaded and played at any time</td></tr>
                <tr><td>Projector</td><td>an optical device</td><td>takes images from a source and shows them enlarged on a screen</td></tr>
                <tr><td>Calculator</td><td>a small electronic device</td><td>performs mathematical operations on numbers keyed in, shows the result</td></tr>
                <tr><td>Temperature</td><td>a physical quantity</td><td>how hot or cold a substance is, measured with a thermometer</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"A calculator is a machine used for calculating" is circular: it defines the word with its own root. "Temperature is how hot something is" has no class, and "VR is when you wear a headset" uses "is when". Name the shelf first (device, technology, quantity), then the features.</p></div>
            <div class="note exam"><p>Two marks each. A clear class and at least two real features get most of the marks; the example or clarifying phrase brings the answer to about 30 words. Do not write a paragraph: 30 words is one or two sentences.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the given passage and answer the questions that follow.</p>`,
          passage: `<p>Automated decision-making systems are increasingly used to evaluate loan applications, select job candidates, and identify potential risks. Although these systems are often presented as more objective than human decision-makers, their outputs depend heavily on the data and assumptions used to construct them. If historical data reflects unequal treatment of particular groups, an algorithm trained on that data may reproduce those patterns without explicitly being programmed to discriminate.</p>
            <p>The problem can become more difficult to detect when an algorithm uses variables that appear neutral. For example, geographical location, purchasing behaviour, or educational history may indirectly correspond with social or economic characteristics. Removing explicitly sensitive variables therefore does not necessarily eliminate bias. Addressing algorithmic bias requires examining not only the final decisions but also the data, variables, objectives, and evaluation methods underlying the system.</p>`,
          parts: [
            { text: 'Why does removing explicitly sensitive variables from an algorithm not necessarily make its decisions unbiased?', marks: 2 },
            { text: 'What can be inferred about the relationship between historical data and the decisions produced by an automated system?', marks: 2 },
            { text: 'Explain how a variable such as geographical location could contribute to biased decision-making even when the algorithm does not directly use a person\'s social or economic identity.', marks: 3 },
            { text: 'The passage suggests that evaluating only an algorithm\'s final decisions is insufficient. Explain why a broader examination of the system is necessary.', marks: 3 }
          ],
          answer: `
            <p><b>a.</b> Because other variables that "appear neutral" can stand in for the removed ones. The passage says geographical location, purchasing behaviour or educational history "may indirectly correspond with social or economic characteristics". The algorithm can therefore still reach the same unequal results through these indirect links, which is why removing sensitive variables "does not necessarily eliminate bias".</p>
            <p><b>b.</b> An automated system's decisions are only as fair as the historical data it learns from: it tends to repeat the past. The passage says its outputs "depend heavily on the data and assumptions used to construct them", and that if the data reflects unequal treatment, the algorithm "may reproduce those patterns". So the claim that such systems are more objective than humans is doubtful; they can carry old human bias forward.</p>
            <p><b>c.</b> Location can act as a <b>proxy</b> for identity. Neighbourhoods often differ in income and in the communities that live there, so location "may indirectly correspond with social or economic characteristics". If people from certain areas were refused loans more often in the past, the historical data links those areas with risk. The algorithm then gives a lower score to a new applicant from that area, not because of their own record but because of where they live. A group is treated unequally even though the system never uses its identity, which is why the passage says such bias is "more difficult to detect".</p>
            <p><b>d.</b> The final decisions show only the result, not where the bias came from. The passage says bias is harder to detect when neutral-looking variables are used, so decisions can look fair on the surface while hidden links do the damage. Bias can enter at any stage: unequal treatment in the <b>data</b>, proxy <b>variables</b>, <b>objectives</b> that reward the wrong outcome, or <b>evaluation methods</b> that check overall accuracy but not fairness across groups. That is why the author says addressing bias requires examining "not only the final decisions but also the data, variables, objectives, and evaluation methods". Only a full check finds the cause, so it can be fixed.</p>
            <div class="note trap"><p>In answer a, do not just repeat the question ("it does not remove bias"). The marks are for the reason: neutral-looking variables act as indirect stand-ins. In answer c, "location is biased" is not an explanation; show the chain from location to income or community, to past data, to a lower score.</p></div>
            <div class="note exam"><p>For the 2-mark parts, give the point and one quoted clue. For the 3-mark parts, give the point, the evidence from the passage, and a sentence that links them, with a short example where the question says "explain how". That is the inference method from the notes: inference, evidence, link.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the following article and write a clear and well-structured abstract in about 100 words.</p>`,
          passage: `<p>The widespread use of smartphones has transformed the routines of university students. Smartphones provide access to resources, communication, entertainment, and social media. However, their use during late-night hours has raised concerns about sleep quality. Poor sleep can affect students' concentration, energy levels, and routines, yet students continue to use smartphones immediately before sleeping.</p>
            <p>A study was conducted to examine the relationship between nighttime smartphone use and sleep quality among undergraduate students. It investigated whether the duration and purpose of smartphone use before bedtime were associated with differences in students' sleep patterns and daytime functioning.</p>
            <p>The study involved 120 undergraduate students aged 18-22 from three academic departments. Data were collected through an anonymous questionnaire recording smartphone use during the hour before bedtime, purpose of use, sleeping hours, nighttime waking, and daytime tiredness. Participants also completed a standardised sleep-quality scale. The data were analysed by comparing sleep-quality scores among students with different levels of nighttime smartphone use.</p>
            <p>The analysis indicated an association between prolonged smartphone use before bedtime and poorer sleep quality. Students who used smartphones for more than one hour before sleeping experienced shorter sleep duration and greater daytime tiredness than those whose use was limited to thirty minutes or less. Students who primarily used their phones for social media and entertainment experienced more sleep disturbances than those who used them for academic purposes. However, the study did not establish a causal relationship, as academic workload, stress, and individual sleep habits could also influence sleep quality.</p>
            <p>The findings suggest that nighttime smartphone use may be an important behavioural factor associated with sleep difficulties among university students. Careful awareness of the timing, duration, and purpose of smartphone use may help students develop healthier routines. Further research involving longer observation periods could determine whether reducing night-time smartphone use ultimately leads to improvements in sleep quality.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study examined whether the duration and purpose of bedtime smartphone use were linked to undergraduates' sleep quality. Data from 120 students aged 18–22, collected by anonymous questionnaire and a standardised sleep-quality scale, were compared across levels of pre-sleep phone use. Students using phones for over an hour slept less and were more tired by day than those limited to thirty minutes or less. Social media and entertainment use was linked with more disturbed sleep than academic use. No causal link was proven, since workload and stress also affect sleep. Night-time phone habits may therefore contribute to sleep problems; longer-term research was recommended.</p>
            <p><small>103 words</small></p>
            <table class="tbl">
              <thead><tr><th>Part</th><th>Taken from</th><th>In the abstract</th></tr></thead>
              <tbody>
                <tr><td><b>Aim</b></td><td>paragraphs 1–2</td><td>does the length and purpose of bedtime phone use link to sleep quality</td></tr>
                <tr><td><b>Method</b></td><td>paragraph 3</td><td>who (120 students, 18–22, three departments), how (anonymous questionnaire, standardised scale), analysis (scores compared by level of use)</td></tr>
                <tr><td><b>Findings</b></td><td>paragraph 4</td><td>over one hour vs thirty minutes or less; social media and entertainment vs academic use; no proof of cause</td></tr>
                <tr><td><b>Conclusion</b></td><td>paragraph 5</td><td>phone habits a possible factor; awareness may help; longer-term research needed</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>How it was built: aim → method → findings → conclusion, in the past tense and third person, with the key numbers kept (120, 18–22, one hour, thirty minutes) and no opinion added. The general background about what smartphones offer was dropped; the limitation stays because it changes what the findings mean.</p></div>
            <div class="note trap"><p>Do not write "smartphones cause poor sleep": the study found an association, not a cause, and the abstract must say so. Do not copy whole sentences from the article either; rewrite each idea in your own shorter words. "About 100 words" means roughly 90–110, not 150.</p></div>`,
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the given case-study of a conflict situation and answer the questions that follow:</p>`,
          passage: `<p>During a group presentation, Asha insists that her idea is the only one that will work and refuses to consider her teammates' suggestions. Rahul, however, chooses not to argue and remains silent, hoping the disagreement will disappear. Meera suggests that the group combine the strongest parts of everyone's ideas and work together on a solution. Meanwhile, Karan proposes that each member give up something so that the group can reach an acceptable decision quickly.</p>`,
          parts: [
            { text: 'Identify the different approaches to handling conflict demonstrated by Asha, Rahul, Meera, and Karan.' },
            { text: 'If the group wants to find a solution that addresses everyone\'s concerns, whose approach would be most appropriate? Explain why.' }
          ],
          answer: `
            <h4>1. Approaches</h4>
            <p>Using the Thomas-Kilmann model, each person's style depends on how <b>assertive</b> (pushing their own concerns) and how <b>cooperative</b> (meeting others' concerns) they are.</p>
            <table class="tbl">
              <thead><tr><th>Person</th><th>Style</th><th>Assertive / cooperative</th><th>Evidence from the case</th></tr></thead>
              <tbody>
                <tr><td>Asha</td><td><b>Competing</b></td><td>high / low</td><td>insists her idea is "the only one that will work" and refuses to consider suggestions: she wants to win</td></tr>
                <tr><td>Rahul</td><td><b>Avoiding</b></td><td>low / low</td><td>"chooses not to argue", stays silent and hopes the disagreement "will disappear": he sidesteps the conflict</td></tr>
                <tr><td>Meera</td><td><b>Collaborating</b></td><td>high / high</td><td>wants to "combine the strongest parts of everyone's ideas" and work together: a win-win</td></tr>
                <tr><td>Karan</td><td><b>Compromising</b></td><td>moderate / moderate</td><td>each member should "give up something" to reach an acceptable decision "quickly": everyone gains a little and loses a little</td></tr>
              </tbody>
            </table>
            <h4>2. Most appropriate approach</h4>
            <p><b>Meera's collaborating approach</b> is the best choice, because the group's aim, a solution that addresses everyone's concerns, is exactly what collaborating is for. It is both assertive and cooperative: instead of choosing one idea, the group looks for a solution that keeps the best of each.</p>
            <p>It fits this case for four reasons. First, Asha's idea is kept, not rejected, so she has less reason to resist. Second, it draws out Rahul's silent views, so no concern stays hidden until presentation day. Third, combining the strongest parts of several ideas is likely to give a better presentation than any single idea. Fourth, members who helped build the plan feel committed to it, which keeps the team working well together.</p>
            <p>The other approaches fall short. Competing (Asha) creates a winner and losers. Avoiding (Rahul) leaves the conflict unsolved, so it may come back later. Compromising (Karan) is quick, but everyone gives something up, so the result is only "acceptable" and satisfies no one fully. In practice, the group could list each idea's strengths, agree what the presentation must achieve, and build one plan with a role for each member. If the deadline is very close and talks stall, Karan's compromise is the sensible fallback.</p>
            <div class="note why"><p>Karan and Meera sound similar, but they are not the same. Compromising means everyone <em>gives up</em> part of what they want to reach a quick middle point. Collaborating means the group works longer to find a solution in which everyone's concerns are <em>fully met</em>. The question asks for a solution that "addresses everyone's concerns", so the answer is Meera.</p></div>
            <div class="note exam"><p>In part 1, name the Thomas-Kilmann style for each person and quote the words from the case that prove it; one line of evidence per person is enough. In part 2, name the person and the style, link it to the goal in the question, give two or three reasons, and say briefly why the other styles do not fit.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.3', 'm5-styles.4', 'm5-choosing.1', 'm5-tki.2']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You have completed your B.Tech. in Computer Science and Engineering and are applying for an M.Tech. in Artificial Intelligence and Machine Learning at a leading university. Write a Statement of Purpose (200-250 words) explaining your academic background, interest in AI and ML, relevant project experience and skills, career goals, and how the postgraduate programme will help you achieve these goals.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>My interest in artificial intelligence began in my second year of B.Tech. in Computer Science and Engineering, when a simple model I wrote predicted my hostel mess's daily food waste more accurately than the staff's estimates. I have since completed my degree with a CGPA of 8.7, and I am applying for the M.Tech. in Artificial Intelligence and Machine Learning to deepen it.</p>
            <p>Courses in linear algebra, probability and data structures gave me the base for machine learning, and I chose final-year electives in data mining and deep learning. For my final-year project, two teammates and I trained a convolutional neural network to detect early leaf disease in tomato plants from phone photographs. We collected 3,000 images from farms near our campus and raised accuracy from 78% to 91% through data augmentation and transfer learning. I work mainly in Python with PyTorch, scikit-learn and pandas. In a two-month internship at a software start-up, I built a model to flag likely order cancellations, which the team still uses.</p>
            <p>My goal is to become a machine learning engineer who builds reliable tools for agriculture, where a correct prediction can save a farmer's crop. My projects also showed me what I still lack: methods for small, uneven datasets and for explaining a model's decisions. The programme's advanced coursework and research thesis would give me that depth and train me to test ideas rigorously. I intend to extend my leaf-disease work into an offline model for farmers' low-cost phones.</p>
            <p><small>245 words</small></p>
            <div class="note exam"><p>How it was built: an opening that shows where the interest began and states what you are applying for → academic background (CGPA, relevant courses and electives) → project experience with numbers (dataset size, accuracy before and after) and skills (tools named) → career goal and what is missing from your knowledge now → how the programme fills that gap and what you will do with it. Every item the question lists has its own place. No subheadings, and the first sentence of each paragraph does the heading's job.</p></div>
            <div class="note trap"><p>"I am passionate about AI" tells; the food-waste model and the leaf-disease project show. Do not invent course names, professors or labs at the university; "advanced coursework and research thesis" is safe for any M.Tech. Keep to 200–250 words and write in the active voice ("I trained", "we collected").</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5', 'm5-sop-samples.0']
        }
      ]
    },

    {
      id: 'cat1-b1tb1', kind: 'actual', title: 'CAT-1 · Slot B1+TB1 · 10-08-2026', short: 'CAT-1 B1+TB1 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B1+TB1'], ['Date', '10-08-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech. General Freshers, Computer Science and Engineering']],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> 2. Identify the basic concepts related to various aspects of communication. 3. Apply grammatical rules in academic and real-life contexts.`,
      questions: [
        {
          n: '1', marks: 10, co: '2', bl: '2',
          prompt: `<p>Explain the nature of technical writing. How does it differ from general or creative writing? Support your answer with suitable examples. (Answer in around 200 words)</p>`,
          answer: `
            <h4>Model answer</h4>
            <p>Technical writing is a form of professional communication used to convey specialised or complex information in a manner that is clear, accurate, concise and accessible. The course calls technical communication "the art and science of making complex technical information accessible, usable, and relevant to a variety of audiences in a variety of settings". Its aim is practical: to help a reader understand a concept, follow instructions or complete a task.</p>
            <p>Two things set it apart from general or creative writing: <b>precision</b> and <b>intent</b>. In technical writing an idea may be turned into a real device or process, so a small slip in the words becomes a failure in the world. A misplaced hyphen in a data editing program was partly responsible for the loss of NASA's Mariner 1 Venus probe in 1962. A poem may be read in many ways; a specification must have only one meaning. Poetry, news and advertising also try to move the reader, while technical writing has no intent to evoke emotion. It conveys information as concisely and correctly as possible.</p>
            <p>A novel may describe "a cold, endless night", but a vaccine leaflet says "Store between 2 °C and 8 °C". Because an error can cause financial loss, injury or death, technical writing also carries legal consequences.</p>
            <p><small>211 words</small></p>
            <table class="tbl">
              <thead><tr><th>Aspect</th><th>Technical writing</th><th>General or creative writing</th></tr></thead>
              <tbody>
                <tr><td>Purpose</td><td>inform, instruct, help the reader act</td><td>entertain, express, move the reader</td></tr>
                <tr><td>Meaning</td><td>one interpretation only (precision)</td><td>several readings are welcome</td></tr>
                <tr><td>Tone</td><td>professional, not emotional</td><td>emotional, personal, imaginative</td></tr>
                <tr><td>Language</td><td>exact terms, numbers, units, short sentences</td><td>figurative language, varied style</td></tr>
                <tr><td>Layout</td><td>headings, numbered steps, tables, diagrams</td><td>continuous prose, verse</td></tr>
                <tr><td>Cost of an error</td><td>money, property, health or lives; legal action</td><td>a weaker story</td></tr>
                <tr><td>Example</td><td>user manual, lab report, SOP</td><td>novel, poem, short story</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>Marks come from three things: a definition of technical writing (the course wording), the two differences the module stresses by name (precision and intent), and at least two concrete examples. The Mariner 1 hyphen and a "same topic, two styles" pair (novel line vs leaflet line) cover the examples. A comparison table is a good way to finish if time allows.</p></div>
            <div class="note trap"><p>Do not say technical writing "must contain equations and jargon". The course says equations and terms often appear but do not define the field: step-by-step procedures with no equation are still technical writing. And "not emotional" does not mean "never persuasive": the characteristics slide lists professional, not emotional, but persuasive.</p></div>`,
          topics: ['m1-nature', 'm1-features'],
          notes: ['m1-nature.2', 'm1-features.2']
        },
        {
          n: '2', marks: 10, co: '2', bl: '2',
          prompt: `<p>Discuss the taxonomy of technical writing. Explain the major categories into which technical writing is classified, giving at least one example of each. (Answer in around 200 words)</p>`,
          answer: `
            <h4>Model answer</h4>
            <p>The taxonomy of technical writing used in the course comes from Montgomery and Plung (1988) and appears in the textbook as Figure 1.1. It sorts technical writing by <b>orientation</b>, that is, by what the writing is mainly for. There are three orientations.</p>
            <p><b>1. Pedagogical orientation</b> focuses on teaching. The reader is a learner. Examples: a calculus textbook, or a book for a novice photographer.</p>
            <p><b>2. Theoretical orientation</b> involves various kinds of theoretical and applied research. The reader is a researcher. Example: a thesis that proposes a new model of heat transfer.</p>
            <p><b>3. Professional orientation</b> is the broadest form. It serves the needs of practitioners in any discipline and splits into three branches:</p>
            <ul>
              <li><b>Scientific writing</b>: experimental research and scholarly publications, which balance authority (peer review) with speed of publication. Example: a journal or conference paper.</li>
              <li><b>Technical reporting</b>: documents for supervisors, peers, clients and government agencies, written to be stored and referred to for years. Examples: a progress report, a feasibility study, a safety analysis report.</li>
              <li><b>Business communication</b>: correspondence written in the daily course of business, often with a call to action. Examples: a résumé, a cover letter, a transmittal letter.</li>
            </ul>
            <p>A second version of the tree adds <b>electronic media</b> under professional writing, for example online help pages.</p>
            <p><small>206 words</small></p>
            <table class="tbl">
              <thead><tr><th>Orientation</th><th>Focus</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td>Pedagogical</td><td>teaching</td><td>calculus textbook</td></tr>
                <tr><td>Theoretical</td><td>research, theoretical and applied</td><td>research thesis</td></tr>
                <tr><td>Professional › scientific writing</td><td>experimental research, publication</td><td>journal paper</td></tr>
                <tr><td>Professional › technical reporting</td><td>specific information, archival</td><td>feasibility study</td></tr>
                <tr><td>Professional › business communication</td><td>daily business correspondence</td><td>cover letter</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>Draw the tree if you can: three boxes for the orientations, then three (or four) boxes under professional. Each box needs one example; the slides give none for theoretical, so any research document you name is fine if you say it is research. Name Montgomery and Plung for an easy extra mark.</p></div>
            <div class="note trap"><p>Do not answer with the three <em>types</em> (consumer-directed, expert-to-expert, technical marketing). Those sort documents by audience, not orientation. You may add them in one line, but the taxonomy is the tree of orientations.</p></div>`,
          topics: ['m1-taxonomy', 'm1-scientific-reporting', 'm1-business'],
          notes: ['m1-taxonomy.0', 'm1-taxonomy.1', 'm1-scientific-reporting.3', 'm1-business.0']
        },
        {
          n: '3', marks: 10, co: '2', bl: '3',
          prompt: `<p>Read the following case study and answer the question given below.</p>`,
          passage: `<p>Rohan, a project coordinator at a manufacturing firm, sent the following email to a client after a delay in delivery:</p>
            <p>"Sir, regarding the matter previously discussed, there have been some issues on our end which have caused certain delays, and we are hopeful that things will improve soon. Please bear with us as we try to sort things out at the earliest possible convenience, and further updates will be shared as and when available."</p>
            <p>The client found the email vague and unclear about the actual delay period, and lacking any concrete next steps.</p>
            <p>Identify any three principles of Business Communication which have been violated in the email, justifying your answer with evidence from the case study. Rewrite the email so it adheres to these principles.</p>`,
          answer: `
            <h4>Principles violated</h4>
            <table class="tbl">
              <thead><tr><th>Principle</th><th>Evidence in the email</th><th>Why it fails</th></tr></thead>
              <tbody>
                <tr><td><b>Clarity</b> (one meaning only)</td><td>"the matter previously discussed", "some issues on our end", "certain delays"</td><td>The client cannot tell which order, what went wrong or how long the delay is. Each phrase can mean many things.</td></tr>
                <tr><td><b>Completeness</b> (practical, useful information)</td><td>no order number, no cause, no new delivery date</td><td>The client said the email did not state "the actual delay period". The facts the reader needs to plan are missing.</td></tr>
                <tr><td><b>Clarity of expectations</b> (a clear call to action and next steps)</td><td>"we are hopeful", "at the earliest possible convenience", "as and when available"</td><td>No firm commitment, no date for the next update, nothing the client is asked to do. The client found it "lacking any concrete next steps".</td></tr>
              </tbody>
            </table>
            <p>Other principles you could name with the same evidence: <b>conciseness</b> (long filler phrases such as "at the earliest possible convenience" say nothing), and a <b>professional format</b> (no subject line, a bare "Sir" with no name, no sign-off or sender's name).</p>
            <h4>Rewritten email</h4>
            <p><b>Subject:</b> Order No. [number]: delivery moved to 22 August, recovery plan</p>
            <p>Dear [Client's name],</p>
            <p>I am writing about your order for 500 gearbox housings, originally due on 12 August.</p>
            <p>The delivery will be <b>ten days late</b>. Our casting supplier delivered a batch of aluminium that failed our quality test, and we had to wait for a replacement batch, which arrived yesterday.</p>
            <p>Here is our plan:</p>
            <ul>
              <li>Production restarts on 13 August with an extra night shift.</li>
              <li>The first 250 units will be dispatched on 17 August.</li>
              <li>The remaining 250 units will reach your plant by <b>22 August</b>.</li>
            </ul>
            <p>I will send you a progress report every Monday and Thursday until delivery. If a part shipment on 17 August would help your line, please reply by 14 August and we will arrange it at no extra cost.</p>
            <p>I apologise for the inconvenience. You can reach me directly on [phone number].</p>
            <p>Yours sincerely,<br>Rohan<br>Project Coordinator, [Company name]</p>
            <div class="note exam"><p>Split the 10 marks in your head: about 5 for the three principles (name, quote, explain) and 5 for the rewrite. The rewrite must fix every fault you named: a subject line with the order and new date, the cause in one sentence, the exact delay, dated next steps, a clear request to the client, and a proper sign-off. Details such as the product and dates are invented for the model; any specific, consistent details earn the marks.</p></div>
            <div class="note trap"><p>Do not just make the email polite and longer. "We sincerely regret the unforeseen circumstances" is still vague. Every sentence in the rewrite should give the client a fact, a date or an action, the same way the course's rewrites turn "Submit the form soon" into "by 5 p.m. on Friday to HR".</p></div>`,
          topics: ['m1-business', 'm1-email-review', 'm1-5cs-exercises'],
          notes: ['m1-5cs-qualities.1', 'm1-5cs-qualities.2', 'm1-5cs-overview.3', 'm1-email-review.0']
        },
        {
          n: '4', marks: 10, co: '3', bl: '2',
          prompt: `<p>Answer both parts.</p>`,
          parts: [
            { text: 'a) Identify and correct the errors in subject-verb agreement in the following sentences:<ol><li>The list of components for the new machine are attached with this report.</li><li>Neither the engineer nor the technicians was informed about the schedule change.</li><li>Each of the circuits have been tested before installation.</li><li>The data collected from the survey shows inconsistencies, but the team leader don&#39;t agree with the findings.</li><li>The marketing as well as the sales team have decided to postpone the product launch.</li></ol>', marks: 5 },
            { text: 'b) Complete the following conditional sentences with an appropriate clause:<ol><li>If it were a Friday, ______________.</li><li>______________, she would not have missed the train.</li><li>If you follow the directions, ______________.</li><li>______________, the machine shuts down immediately.</li><li>If the antivirus had been updated regularly, ______________.</li></ol>', marks: 5 }
          ],
          answer: `
            <h4>a) Subject-verb agreement</h4>
            <ol>
              <li><b>The list of components for the new machine is attached to this report.</b> The subject is <em>list</em> (singular); "of components for the new machine" sits between subject and verb and does not change its number (Rule 2). "Attached to" is also the usual phrase, not "attached with".</li>
              <li><b>Neither the engineer nor the technicians were informed about the schedule change.</b> With neither/nor, the verb agrees with the nearer subject, <em>technicians</em> (plural), so <em>were</em> (Rule 4).</li>
              <li><b>Each of the circuits has been tested before installation.</b> <em>Each</em> is singular; ignore the plural noun after "of".</li>
              <li><b>The data collected from the survey shows inconsistencies, but the team leader doesn&#39;t agree with the findings.</b> <em>Team leader</em> is third person singular, so <em>does not</em>. ("The data show" is also correct in formal scientific style, where data is plural; the clear error is "don't".)</li>
              <li><b>The marketing team, as well as the sales team, has decided to postpone the product launch.</b> Words joined by "as well as" are ignored; the subject is the singular <em>marketing team</em> (Rule 5).</li>
            </ol>
            <h4>b) Conditionals</h4>
            <ol>
              <li>If it were a Friday, <b>we would leave the office early</b>. (Second conditional: past form in the if clause, <em>would</em> + verb in the result; an unreal present.)</li>
              <li><b>If she had left home ten minutes earlier</b>, she would not have missed the train. (Third conditional: <em>would have</em> + V3 in the result needs <em>had</em> + V3 in the if clause; a past that did not happen.)</li>
              <li>If you follow the directions, <b>you will reach the venue on time</b>. (First conditional: present simple + <em>will</em>; a real future possibility.)</li>
              <li><b>If the temperature crosses the safe limit</b>, the machine shuts down immediately. (Zero conditional: present simple in both clauses; something that always happens.)</li>
              <li>If the antivirus had been updated regularly, <b>the system would not have been infected</b>. (Third conditional: an unreal past result.)</li>
            </ol>
            <table class="tbl">
              <thead><tr><th>Type</th><th>If clause</th><th>Main clause</th><th>Used in</th></tr></thead>
              <tbody>
                <tr><td>Zero</td><td>present simple</td><td>present simple</td><td>b4</td></tr>
                <tr><td>First</td><td>present simple</td><td>will + verb</td><td>b3</td></tr>
                <tr><td>Second</td><td>past simple / were</td><td>would + verb</td><td>b1</td></tr>
                <tr><td>Third</td><td>had + V3</td><td>would have + V3</td><td>b2, b5</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>Half a mark for spotting the error, half for the correct form, in each of the ten items. For part a, write the whole corrected sentence and underline the changed verb. For part b, the clause you add must match the tense pattern of the given half; the content can be anything sensible.</p></div>
            <div class="note trap"><p>In b2 do not write "If she left earlier" (second conditional): "would not have missed" fixes it as a third conditional. In b1 keep "were", not "was", for the unreal condition.</p></div>`,
          topics: ['m2-concord-rules', 'm2-cond-basics', 'm2-cond-unreal'],
          notes: ['m2-concord-rules.0', 'm2-concord-rules.3', 'm2-cond-basics.0', 'm2-cond-unreal.3']
        },
        {
          n: '5', marks: 10, co: '3', bl: '2',
          prompt: `<p>Identify and correct the errors in tense usage in the following sentences:</p><ol><li>The technician is checking the circuit every day before switching on the power supply.</li><li>The company has launched its new software two months ago.</li><li>The technician reported that the machine will require maintenance next week.</li><li>By the time the inspector arrived, the workers already left the site.</li><li>She is working in this laboratory since 2019.</li><li>The engineer will complete the report by the time the meeting starts.</li><li>I have seen him at the factory yesterday.</li><li>The machine was running smoothly since it was installed last year.</li><li>He will finish the wiring before the inspector will arrive.</li><li>The team has been working on the project right now.</li></ol>`,
          answer: `
            <table class="tbl">
              <thead><tr><th>No.</th><th>Corrected sentence</th><th>Reason</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>The technician <b>checks</b> the circuit every day before switching on the power supply.</td><td>"Every day" shows a routine: present simple, not continuous.</td></tr>
                <tr><td>2</td><td>The company <b>launched</b> its new software two months ago.</td><td>"Ago" is a finished past time: past simple, never present perfect.</td></tr>
                <tr><td>3</td><td>The technician reported that the machine <b>would</b> require maintenance the following week.</td><td>The reporting verb is past, so the reported verb shifts back (will → would). "Next week" is also accepted.</td></tr>
                <tr><td>4</td><td>By the time the inspector arrived, the workers <b>had already left</b> the site.</td><td>The earlier of two past actions takes the past perfect.</td></tr>
                <tr><td>5</td><td>She <b>has been working</b> in this laboratory since 2019.</td><td>An action that began in the past and continues now, with "since": present perfect continuous.</td></tr>
                <tr><td>6</td><td>The engineer <b>will have completed</b> the report by the time the meeting starts.</td><td>An action finished before a point in the future: future perfect.</td></tr>
                <tr><td>7</td><td>I <b>saw</b> him at the factory yesterday.</td><td>"Yesterday" is a finished past time: past simple.</td></tr>
                <tr><td>8</td><td>The machine <b>has been running</b> smoothly since it was installed last year.</td><td>"Since" + a past starting point, still true now: present perfect (continuous).</td></tr>
                <tr><td>9</td><td>He will finish the wiring before the inspector <b>arrives</b>.</td><td>In a time clause (before, after, when, until) the future is shown with the present simple, not "will".</td></tr>
                <tr><td>10</td><td>The team <b>is working</b> on the project right now.</td><td>"Right now" means at this moment: present continuous.</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>One mark each: rewrite the full sentence with the corrected verb and give the time clue that decides it ("every day", "ago", "since", "by the time", "right now"). These ten sentences come straight from the course's tense-error worksheet, so the clue-to-tense pairs in the notes are exactly what is marked.</p></div>
            <div class="note trap"><p>In sentence 3 change only the verb; the course key accepts "next week" as well as "the following week". In sentence 9 do not write "before the inspector will have arrived": the time clause stays in the present simple.</p></div>`,
          topics: ['m2-tenses-errors', 'm2-tenses-forms'],
          notes: ['m2-tenses-errors.1', 'm2-tenses-forms.1']
        }
      ]
    },

    {
      id: 'cat1-b2tb2', kind: 'actual', title: 'CAT-1 · Slot B2+TB2 · August 2026', short: 'CAT-1 B2+TB2 paper', sub: 'Actual paper · Fall 2026–27 · Chennai campus',
      meta: [['Slot', 'B2+TB2'], ['Date', 'August 2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech.']],
      instructions: `<b>General instructions:</b> Write only your registration number on the question paper in the box provided and do not write other information.`,
      questions: [
        {
          n: '1', marks: 10, co: '2', bl: '5',
          prompt: `<p><b>Take a Position and Defend it</b></p><p>"Technical documents often fail not because the information is inaccurate, but because it is presented poorly."</p><p>Evaluate this claim using the principles of the 5Cs of technical writing. Give 2 examples of statements from workplace settings where one/more of the 5Cs are compromised and demonstrate your point. [150 words]</p>`,
          answer: `
            <h4>Model answer</h4>
            <p><b>Position: I agree, with one limit.</b> The 5 Cs (correct, clear, complete, consistent, changeable) show that accuracy is only one of five qualities. A document can be correct and still fail if a reader can take it in two ways, if needed facts are missing, or if one part contradicts another.</p>
            <p><b>Example 1:</b> "The server will be down for some time tomorrow; save your work." The facts are true, but it fails <b>clarity</b> and <b>completeness</b>: which server, what time, for how long? Better: "The mail server will be offline from 10:00 p.m. to 11:30 p.m. on 12 August. Save open drafts before 9:45 p.m."</p>
            <p><b>Example 2:</b> A maintenance manual says "Replace the filter every three months" on page 4 and "every six months" on page 9. Each line may be correct for a different model, but the document fails <b>consistency</b>, and the technician cannot act.</p>
            <p>The limit: presentation cannot rescue wrong data. "200 kilograms" for 2000 is clear yet incorrect, so correctness stays the first C.</p>
            <p><small>166 words</small></p>
            <div class="note exam"><p>BL5 (evaluate) needs a verdict in the first line, reasons tied to named Cs, two workplace statements with the C each breaks, and a short fix that proves the point. Adding the limit (correctness still matters) shows evaluation rather than simple agreement and lifts the answer to full marks.</p></div>
            <div class="note trap"><p>Do not list the 5 Cs with definitions and stop. The question asks you to judge a claim. Also keep the examples workplace-like (notices, manuals, emails), not textbook sentences.</p></div>`,
          topics: ['m1-5cs-overview', 'm1-5cs-qualities', 'm1-5cs-example'],
          notes: ['m1-5cs-overview.2', 'm1-5cs-overview.3', 'm1-5cs-qualities.0', 'm1-5cs-example.1']
        },
        {
          n: '2', marks: 10, co: '2', bl: '4',
          prompt: `<p><b>Evaluate effectiveness of communication strategy and suggest apt forms</b></p>`,
          passage: `<p>A software company has developed a new Learning Management System (LMS). It plans to:</p><ol><li>persuade the VIT Chennai administration to adopt the LMS, and</li><li>instruct potential customers on how the product works.</li></ol><p>Instead of preparing separate documents, the company sends a highly technical report, filled with scientific terminology and jargon, to both audiences.</p><p>Evaluate the effectiveness of this communication strategy. Why should the objectives, language, and structure of communication vary according to the target audience? With reference to the taxonomy of technical communication, recommend a more appropriate form of communication for each of the two audiences above and justify why your recommendations are more effective than using a single technical report. [150 words]</p>`,
          answer: `
            <h4>Model answer</h4>
            <p>The strategy is ineffective. A jargon-heavy report is expert-to-expert writing, but neither reader is an expert in the product, and the two readers need different things. The administration must decide, so it needs benefits, cost and evidence. Users must act, so they need steps. One document cannot persuade and instruct at once.</p>
            <p><b>Objective</b> decides the form: persuasion needs a call to action; instruction needs a sequence. <b>Language</b> must suit the reader: plain terms and outcomes for administrators, short imperative steps for users. <b>Structure</b> follows purpose: summary, benefits, costs and recommendation for one; numbered steps, screenshots and troubleshooting for the other.</p>
            <p>For the administration I recommend a <b>proposal or white paper</b> (technical marketing content), with an executive summary, pilot results and costs. For customers I recommend a <b>user guide or quick-start guide</b> (consumer-directed writing). Each fits its reader's purpose, so each reader can understand and act.</p>
            <p><small>145 words</small></p>
            <table class="tbl">
              <thead><tr><th></th><th>VIT Chennai administration</th><th>Potential customers (users)</th></tr></thead>
              <tbody>
                <tr><td>Objective</td><td>persuade to adopt</td><td>instruct how to use</td></tr>
                <tr><td>Type (course taxonomy of documents)</td><td>technical marketing content</td><td>consumer-directed</td></tr>
                <tr><td>Form</td><td>proposal, white paper, product brochure</td><td>user guide, quick-start guide, in-app help, video tutorial</td></tr>
                <tr><td>Language</td><td>plain, benefit-focused, figures on cost and results</td><td>simple imperatives: "Click Upload, then choose the file."</td></tr>
                <tr><td>Structure</td><td>executive summary → benefits → costs → recommendation</td><td>numbered steps with screenshots → FAQ → troubleshooting</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>Four things are asked, so give each a sentence or more: a verdict on the strategy, why objective/language/structure must vary, a named form for each audience placed in the course's types (consumer-directed, expert-to-expert, technical marketing), and why two documents beat one. The table is a fast way to show all of it.</p></div>
            <div class="note trap"><p>"Send a simpler report to both" misses the point. The two audiences have different <em>purposes</em>, not just different reading levels, so they need different document types.</p></div>`,
          topics: ['m1-kinds', 'm1-nature', 'm1-taxonomy'],
          notes: ['m1-kinds.1', 'm1-kinds.2', 'm1-kinds.4']
        },
        {
          n: '3', marks: 10, co: '2', bl: '6',
          prompt: `<p><b>Prepare Minutes of the Meeting</b></p><p>The Placement Committee of VIT Chennai met on 10 August 2026 at 11.00 a.m. in the Placement Office. It was attended by the members of the Placement Committee including students, student representatives, HoD of the Dept. of Management Studies, and the Dean of VIT. Two student representatives were absent. The agenda included:</p><ol><li>Review of campus placement statistics for the previous academic year.</li><li>Conducting resume-writing and mock interview workshops for final-year students.</li><li>Invitation to new recruiters from the IT and manufacturing sectors.</li><li>Scheduling the annual placement drive for January 2027.</li></ol><p>As the Committee Secretary, prepare the Minutes of the Meeting in the accepted format. [150 words]</p>`,
          answer: `
            <h4>Model minutes</h4>
            <p><b>VIT Chennai, Placement Committee<br>Minutes of the Meeting</b></p>
            <p><b>Date and time:</b> 10 August 2026, 11.00 a.m.<br><b>Venue:</b> Placement Office<br><b>Chair:</b> Dean, VIT Chennai<br><b>Present:</b> Dean (Chair); HoD, Department of Management Studies; student members; student representatives; Committee Secretary<br><b>Absent:</b> two student representatives</p>
            <p><b>1. Placement statistics, previous year:</b> The Secretary presented the statistics. The Committee noted that core-sector offers were fewer than IT offers.</p>
            <p><b>2. Resume and interview workshops:</b> It was resolved to hold a resume-writing workshop and mock interviews for final-year students in September. Action: HoD, Management Studies.</p>
            <p><b>3. New recruiters:</b> It was agreed to invite new recruiters from the IT and manufacturing sectors. Action: Placement Office, invitations by 31 August.</p>
            <p><b>4. Annual placement drive:</b> The drive was scheduled for the second week of January 2027. Action: Secretary to circulate the schedule.</p>
            <p>The meeting ended at 12.15 p.m. with a vote of thanks.</p>
            <p>Recorded by: Committee Secretary &nbsp;&nbsp; Approved by: Chair</p>
            <p><small>149 words</small></p>
            <div class="note exam"><p>The "accepted format" earns most of the marks: heading (body and title), date, time and venue, chair, present and absent, then one numbered item per agenda point with the <b>decision</b> and <b>who acts by when</b>, closing time, and the recorder's and chair's sign-off. Write in the past tense and third person ("It was resolved…", "The Committee noted…"). The decisions and dates here are invented for the model, since the question gives only the agenda; any reasonable, specific decision is accepted.</p></div>
            <div class="note trap"><p>Minutes record what was decided, not every remark ("The Dean said that he felt…"). Do not write them as a letter or a report with "Dear Sir". Use designations, not invented names, and keep each item to one or two lines so you stay near 150 words.</p></div>`,
          topics: ['m1-business', 'm1-kinds'],
          notes: ['m1-business.0', 'm1-kinds.2']
        },
        {
          n: '4', marks: 10, co: '3', bl: '4',
          prompt: `<p><b>Find the Ten Errors and Write the Correct Form</b></p><p>The extract below is taken from the draft of a technical maintenance report. It contains ten grammatical errors of concord, tense, conditional, and voice. Identify each error and highlight them. Then write the corrected form against it.</p>`,
          passage: `<p><b>COMPUTER LAB – MAINTENANCE REPORT (extract)</b></p><p>The computer laboratory have twenty-five desktop systems. Each of the computers were inspected before the semester began. The technician check all the network cables every morning. Yesterday, the laboratory assistant has replaced a faulty keyboard. Since last week, several computers shows slower performance. While the technician repairs one system, another computer suddenly stopped working. If the students will follow the safety instructions, the equipment will last longer. If the antivirus software had been updated earlier, the virus would not spread through the network. A maintenance schedule prepared by the laboratory supervisor every month. The final report were submitted to the Head of the Department.</p>`,
          answer: `
            <table class="tbl">
              <thead><tr><th>No.</th><th>Error</th><th>Correct form</th><th>Type and rule</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>The computer laboratory <b>have</b></td><td>The computer laboratory <b>has</b> twenty-five desktop systems.</td><td>Concord: "laboratory" is singular.</td></tr>
                <tr><td>2</td><td>Each of the computers <b>were</b> inspected</td><td>Each of the computers <b>was</b> inspected before the semester began.</td><td>Concord: "each" is singular; ignore the noun after "of".</td></tr>
                <tr><td>3</td><td>The technician <b>check</b></td><td>The technician <b>checks</b> all the network cables every morning.</td><td>Concord (and present simple for a routine): third person singular takes -s.</td></tr>
                <tr><td>4</td><td>Yesterday … <b>has replaced</b></td><td>Yesterday, the laboratory assistant <b>replaced</b> a faulty keyboard.</td><td>Tense: a finished time ("yesterday") takes the past simple.</td></tr>
                <tr><td>5</td><td>Since last week … <b>shows</b></td><td>Since last week, several computers <b>have shown</b> (or <b>have been showing</b>) slower performance.</td><td>Tense and concord: "since" needs the present perfect, and "computers" is plural.</td></tr>
                <tr><td>6</td><td>While the technician <b>repairs</b></td><td>While the technician <b>was repairing</b> one system, another computer suddenly stopped working.</td><td>Tense: a longer past action interrupted by a short one takes the past continuous.</td></tr>
                <tr><td>7</td><td>If the students <b>will follow</b></td><td>If the students <b>follow</b> the safety instructions, the equipment will last longer.</td><td>Conditional (first): present simple in the if clause, never "will".</td></tr>
                <tr><td>8</td><td>would not <b>spread</b></td><td>If the antivirus software had been updated earlier, the virus <b>would not have spread</b> through the network.</td><td>Conditional (third): had + V3 pairs with would have + V3.</td></tr>
                <tr><td>9</td><td>A maintenance schedule <b>prepared</b> by …</td><td>A maintenance schedule <b>is prepared</b> by the laboratory supervisor every month.</td><td>Voice: the passive needs a form of "be" + V3; present simple for a monthly routine.</td></tr>
                <tr><td>10</td><td>The final report <b>were</b> submitted</td><td>The final report <b>was</b> submitted to the Head of the Department.</td><td>Concord in the passive: "report" is singular.</td></tr>
              </tbody>
            </table>
            <h4>Corrected extract</h4>
            <p>The computer laboratory <b>has</b> twenty-five desktop systems. Each of the computers <b>was</b> inspected before the semester began. The technician <b>checks</b> all the network cables every morning. Yesterday, the laboratory assistant <b>replaced</b> a faulty keyboard. Since last week, several computers <b>have shown</b> slower performance. While the technician <b>was repairing</b> one system, another computer suddenly stopped working. If the students <b>follow</b> the safety instructions, the equipment will last longer. If the antivirus software had been updated earlier, the virus <b>would not have spread</b> through the network. A maintenance schedule <b>is prepared</b> by the laboratory supervisor every month. The final report <b>was</b> submitted to the Head of the Department.</p>
            <div class="note exam"><p>One mark per error: half for highlighting it, half for the correct form. The ten errors are one per sentence, which is a useful check: if a sentence seems to have none, look at its verb again. Writing the error type (concord, tense, conditional, voice) beside each correction shows the BL4 analysis the question asks for.</p></div>
            <div class="note trap"><p>Sentence 9 looks complete but has no main verb: "prepared by" is only a participle. In sentence 6, changing "stopped" to "stops" is also grammatical, but the report describes a past event ("suddenly"), so fix "repairs" instead.</p></div>`,
          topics: ['m2-error-method', 'm2-concord-rules', 'm2-voice-tenses'],
          notes: ['m2-error-method.0', 'm2-concord-rules.0', 'm2-voice-tenses.0']
        },
        {
          n: '5', marks: 10, co: '3', bl: '3',
          prompt: `<p>Choose the most grammatically appropriate option.</p>`,
          parts: [
            { text: 'Every engineer in the design team ______ responsible for following the safety guidelines.<br>a) are · b) were · c) is · d) have been', marks: 1 },
            { text: 'A bug report explains that a system crashed because a security patch was not installed in time. Which sentence is the best fit?<br>a) If the security patch is installed earlier, the system will not crash.<br>b) If the security patch had been installed earlier, the system would not have crashed.<br>c) If the security patch were installed earlier, the system would not crash yesterday.<br>d) If the security patch will be installed earlier, the system would not have crashed.', marks: 1 },
            { text: 'If the team finishes the testing today, the product ______ tomorrow.<br>a) launched · b) will launch · c) will be launched · d) would launch', marks: 1 },
            { text: 'A quality assurance report states: "Seventy percent of the equipment ______ functioning normally after the upgrade."<br>a) is · b) are · c) was · d) has been', marks: 1 },
            { text: 'Choose the grammatically correct sentence.<br>a) One of the researchers have published the findings.<br>b) One of the researchers has published the findings.<br>c) More than one researchers have published the findings.<br>d) One of the researcher has published the findings.', marks: 1 },
            { text: 'By the end of this month, the development team ______ the beta version of the application.<br>a) completes · b) completed · c) will have completed · d) has completed', marks: 1 },
            { text: 'The software update would have been successful if the engineers ______ the compatibility issues earlier.<br>a) identify · b) identified · c) had identified · d) have identified', marks: 1 },
            { text: 'Choose the correct passive form of: "The researchers have completed the experiment."<br>a) The experiment was completed by the researchers.<br>b) The experiment has completed.<br>c) The experiment has been completed by the researchers.<br>d) The experiment is being completed by the researchers.', marks: 1 },
            { text: 'A technical report includes the following sentence: "The developer and engineer responsible for the AI system ______ presenting the final demonstration today." Choose the correct verb.<br>a) is · b) are · c) were · d) have been', marks: 1 },
            { text: 'A user manual describes a routine process without emphasizing who performs the action. The active sentence is: "The software updates the database automatically." Which is the correct transformation into passive?<br>a) The software updates the database automatically.<br>b) The database is updated automatically by the software.<br>c) The database updated automatically by the software.<br>d) The database is being updated automatically by the software.', marks: 1 }
          ],
          answer: `
            <ol>
              <li><b>c) is.</b> "Every engineer" is singular; "in the design team" does not change the subject.</li>
              <li><b>b)</b> The crash is in the past and did not go the other way: third conditional, had been + V3 → would not have + V3.</li>
              <li><b>c) will be launched.</b> First conditional (present simple → will), and the product does not launch itself, so the passive "will be launched".</li>
              <li><b>a) is.</b> With percentages, the verb follows the noun after "of"; "equipment" is uncountable, so singular. A report states present findings in the present simple. ("Was" is also singular, but "is" fits a report's present statement best.)</li>
              <li><b>b)</b> "One of the + plural noun" takes a singular verb: <em>one</em> is the subject.</li>
              <li><b>c) will have completed.</b> "By the end of this month" marks completion before a future point: future perfect.</li>
              <li><b>c) had identified.</b> "Would have been" in the result clause needs the past perfect in the if clause (third conditional).</li>
              <li><b>c)</b> Present perfect active (have completed) → present perfect passive (has been completed). The tense must stay the same.</li>
              <li><b>a) is.</b> One article ("The") before two nouns joined by "and" means one person who is both developer and engineer, so the verb is singular; "today" calls for the present continuous. (If the sentence read "The developer and <em>the</em> engineer", it would be two people and "are".)</li>
              <li><b>b)</b> Simple present active (updates) → is + V3 (is updated). Option d changes the tense to continuous; c has no "is".</li>
            </ol>
            <div class="note exam"><p>One mark each, no part marks. Answer every item: there is no negative marking. For each, find the subject and the time clue first, then check the options against the pattern.</p></div>
            <div class="note trap"><p>Item 9 is the trap: most students pick "are" because of "and". Look for the second article. Item 4: "Seventy percent" looks plural, but the noun after "of" decides (Rule 8).</p></div>`,
          topics: ['m2-concord-special', 'm2-cond-unreal', 'm2-voice-tenses'],
          notes: ['m2-concord-special.0', 'm2-concord-special.1', 'm2-cond-unreal.3', 'm2-cond-unreal.0']
        }
      ]
    },

    {
      id: 'cat1-f2tf2', kind: 'actual', title: 'CAT-1 · Slot F2+TF2 · 14-08-2026', short: 'CAT-1 F2+TF2 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'F2+TF2'], ['Date', '14-08-2026'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech.']],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO2: Identify the basic concepts related to various aspects of communication. CO3: Apply grammatical rules in academic and real-life contexts.`,
      questions: [
        {
          n: '1', marks: 10, co: '2', bl: '2',
          prompt: `<p>Explain how technical writing differs from non-technical writing, focusing on the concepts of precision and intent.</p>`,
          answer: `
            <h4>Model answer</h4>
            <p>Technical writing is professional communication that conveys specialised or complex information so that it is clear, accurate, concise and accessible to its reader. The course does not define it by equations or jargon. It defines it by two differences from non-technical writing such as poetry, news and advertising: <b>precision</b> and <b>intent</b>.</p>
            <p><b>Precision.</b> In technical writing an idea may be realised as a physical device or process, so the text becomes the thing. A small slip in the words can therefore become a failure in the world. A misplaced decimal point in the specification of a process controlling a nuclear plant could be catastrophic, and in 1962 NASA's Mariner 1 Venus probe was lost partly because of a misplaced hyphen in a data editing program. Precision combines correctness (grammatically and technically right) and clarity (only one interpretation). A poem gains from many readings; a specification such as "The automobile weight shall be no greater than 2000 kilograms" must have one.</p>
            <p><b>Intent.</b> Non-technical writing often aims to move the reader. Technical writing has no intent to evoke an emotional response; its goal is to convey information as concisely and correctly as possible. An accident account that calls a driver an "idiot" who was "probably drunk" is non-technical: it shows emotion, speculation and blame. A technical accident report states the time, speeds, road conditions and damage. Technical writing can still persuade, but through facts and benefits, not feelings.</p>
            <p>Because errors can cause financial loss, injury or death, these two qualities also carry legal weight.</p>
            <p><small>251 words</small></p>
            <table class="tbl">
              <thead><tr><th></th><th>Technical writing</th><th>Non-technical writing</th></tr></thead>
              <tbody>
                <tr><td>Precision</td><td>one meaning only; exact figures and units; an error can cause real failure</td><td>ambiguity and many readings are allowed, even valued</td></tr>
                <tr><td>Intent</td><td>inform and instruct, concisely and correctly; no emotional appeal</td><td>entertain, express, move or sell; emotion is often the aim</td></tr>
                <tr><td>Example</td><td>accident report, user manual, specification</td><td>poem, news feature, advertisement</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>The question names the two concepts, so give each its own paragraph with a definition and an example from the course (Mariner 1, the decimal point, the "2000 kilograms" line, the accident account). A short opening definition and a comparison table complete a 10-mark answer.</p></div>
            <div class="note trap"><p>"Technical writing uses technical words" is not a difference the course accepts: equations and terms often appear but do not define the field. And do not say technical writing is never persuasive; it is "professional, not emotional, but persuasive".</p></div>`,
          topics: ['m1-nature', 'm1-features'],
          notes: ['m1-nature.2', 'm1-features.2']
        },
        {
          n: '2', marks: 10, co: '2', bl: '2',
          prompt: `<p>Discuss the different orientations of technical writing according to Montgomery and Plung's taxonomy with adequate examples.</p>`,
          answer: `
            <h4>Model answer</h4>
            <p>Montgomery and Plung (1988) classified technical writing by its <b>orientation</b>, meaning what the writing is mainly for. Their tree, reproduced in the course textbook as Figure 1.1, has three orientations: pedagogical, theoretical and professional.</p>
            <p><b>1. Pedagogical orientation</b> focuses on teaching. The writer explains a subject step by step to a learner. Examples: a calculus textbook, a book for a novice photographer, a laboratory manual for first-year students.</p>
            <p><b>2. Theoretical orientation</b> involves various kinds of theoretical and applied research. The writer reports or proposes ideas for other researchers. Examples: a doctoral thesis, a paper proposing a new model of battery ageing.</p>
            <p><b>3. Professional orientation</b> is the broadest form. It serves the needs of practitioners in any discipline and has three branches:</p>
            <ul>
              <li><b>Scientific writing</b>: experimental research and scholarly publications. The writer balances authority, gained through peer review, against speed of publication. Example: a journal or conference paper.</li>
              <li><b>Technical reporting</b>: documents for supervisors, peers, customers, clients and government agencies that convey specific information in an archival way, to be stored and referred to for years. Examples: a progress report, a feasibility study, a safety analysis report.</li>
              <li><b>Business communication</b>: correspondence written in the daily course of business. It is still precise but often aims for a call to action. Examples: a résumé, a cover letter, a transmittal letter.</li>
            </ul>
            <p>A second version of the tree adds <b>electronic media</b> under the professional orientation, for example online help pages and documentation websites.</p>
            <p><small>235 words</small></p>
            <table class="tbl">
              <thead><tr><th>Orientation</th><th>Mainly for</th><th>Reader</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td>Pedagogical</td><td>teaching</td><td>learner</td><td>calculus textbook</td></tr>
                <tr><td>Theoretical</td><td>research</td><td>researcher</td><td>doctoral thesis</td></tr>
                <tr><td>Professional</td><td>serving practitioners</td><td>professionals, clients, agencies</td><td>journal paper, feasibility study, cover letter</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>Name the authors and the three orientations in the first two lines, then give each a definition and an example. The professional branches carry the most marks because they need their own examples. A small tree diagram (three boxes, then three under professional) is quick to draw and earns credit.</p></div>
            <div class="note trap"><p>Keep the orientations apart by focus: teaching, research, serving practitioners. A textbook is pedagogical even if it is about research; a feasibility study is professional (technical reporting) even if it contains data.</p></div>`,
          topics: ['m1-taxonomy', 'm1-scientific-reporting', 'm1-business'],
          notes: ['m1-taxonomy.0', 'm1-taxonomy.1', 'm1-scientific-reporting.3', 'm1-scientific-reporting.0']
        },
        {
          n: '3', marks: 10, co: '2', bl: '3',
          prompt: `<p>Given below is a quick notice posted by an office manager on the common kitchen wall regarding fridge cleaning policies:</p>`,
          passage: `<p><b>FRIDGE STUFF</b></p><p>Per operational protocols regarding shared refrigeration units, stakeholders must utilize appropriate labelling mechanisms on all consumable items immediately upon placement. Every Friday at 4:00 PM, all food items will be discarded. However, anything left behind on Thursday at 5:00 PM will be thrown away without warning. Furthermore, please write your details on sticky notes on the container. Unmarked items will be removed. If you have any inquiries, go talk to Sarah in Accounting.</p><p>The next morning, employees were confused and were debating whether or not to use the office fridge anymore.</p>`,
          parts: [
            { text: 'a) Explain the causes of confusion among the employees based on the 5 Cs of technical writing. Which of the 5 Cs are violated in the notice?' },
            { text: 'b) Rewrite the notice to avoid confusion, following all Cs of technical writing applicable.' }
          ],
          answer: `
            <h4>a) Causes of confusion</h4>
            <table class="tbl">
              <thead><tr><th>C</th><th>Evidence in the notice</th><th>Effect on employees</th></tr></thead>
              <tbody>
                <tr><td><b>Clear</b> (violated)</td><td>"Per operational protocols regarding shared refrigeration units, stakeholders must utilize appropriate labelling mechanisms on all consumable items"; the heading "FRIDGE STUFF"; "your details"; "will be removed" (when?)</td><td>Jargon hides a simple rule (label your food). Readers cannot tell what to write or when unmarked food goes.</td></tr>
                <tr><td><b>Consistent</b> (violated)</td><td>"Every Friday at 4:00 PM, all food items will be discarded" vs "anything left behind on Thursday at 5:00 PM will be thrown away without warning"</td><td>Two different clean-out times contradict each other. "All food items" also clashes with the labelling rule: if labelled food is thrown out too, why label?</td></tr>
                <tr><td><b>Complete</b> (violated)</td><td>no definition of "details"; no place to find sticky notes; no start date; "Sarah in Accounting" with no extension or hours</td><td>Relevant facts the reader needs to follow the rule are missing.</td></tr>
                <tr><td><b>Correct</b> (violated)</td><td>the two times cannot both be right; "go talk to Sarah" is too casual for an official notice</td><td>At least one stated fact is wrong, so readers do not trust any of it.</td></tr>
                <tr><td><b>Changeable</b></td><td>one block of text, no numbered points</td><td>Hard to update one rule without rewriting the whole notice.</td></tr>
              </tbody>
            </table>
            <p>The main causes are the contradiction between the Thursday and Friday clean-outs (consistency) and the inflated wording that hides what employees must do (clarity). With missing details on top (completeness), employees could not predict whether their food would survive the week, so they doubted whether to use the fridge at all.</p>
            <h4>b) Rewritten notice</h4>
            <p><b>OFFICE FRIDGE: LABELLING AND WEEKLY CLEAN-OUT</b><br>From Monday, 17 August</p>
            <ol>
              <li><b>Label your food.</b> When you put anything in the fridge, stick a note on the container with your <b>name and the date</b>. Sticky notes and a pen are on top of the fridge.</li>
              <li><b>Unlabelled food</b> will be removed at 6:00 p.m. every day.</li>
              <li><b>Weekly clean-out:</b> every <b>Friday at 4:00 p.m.</b>, everything left in the fridge, labelled or not, will be thrown away. Take home anything you want to keep before then.</li>
              <li><b>Questions?</b> Contact Sarah, Accounting (extension [number]).</li>
            </ol>
            <p>Office Manager<br>[Date]</p>
            <div class="note exam"><p>Part a: name each violated C, quote the line that breaks it, and say how it confused staff. Clear and Consistent are the two the examiner expects first; Complete and Correct add marks. Part b: a plain heading, an effective date, short numbered rules in plain words, <b>one</b> clean-out time, exactly what "details" means, and a full contact. Say which C each change fixes if you have time.</p></div>
            <div class="note trap"><p>Do not keep both the Thursday and the Friday times in your rewrite. Choose one and state it once; the model keeps Friday 4:00 p.m. because it is given as the regular rule. Do not swap the jargon for different jargon ("ensure appropriate identification of consumables").</p></div>`,
          topics: ['m1-5cs-qualities', 'm1-5cs-overview', 'm1-5cs-exercises'],
          notes: ['m1-5cs-qualities.1', 'm1-5cs-overview.3', 'm1-5cs-exercises.1', 'm1-5cs-exercises.3']
        },
        {
          n: '4', marks: 10, co: '3', bl: '2',
          prompt: `<p>Two parts, 5 marks each.</p>`,
          parts: [
            { text: 'A. Identify and correct the errors in concord in the following sentences:<ol><li>Neither the lead singer nor the backup dancers was ready when the curtain went up.</li><li>The number of students enrolling in online courses have increased dramatically over the past two years.</li><li>Each of the new applicants have submitted all the required paperwork on time.</li><li>The doctor, along with several nurses and lab technicians, were praised for their swift response during the emergency.</li><li>Hidden behind the bookshelf was several old manuscripts from the 16th century.</li></ol>', marks: 5 },
            { text: 'B. Write the missing clauses of the conditional sentences given below, following appropriate rules.<ol><li>If you heat ice, ______________.</li><li>______________ if she wins the first prize.</li><li>If Brian won the competition, ______________.</li><li>______________ if they had set an alarm last night.</li><li>If I had a new car, ______________.</li></ol>', marks: 5 }
          ],
          answer: `
            <h4>A. Concord</h4>
            <ol>
              <li><b>Neither the lead singer nor the backup dancers were ready when the curtain went up.</b> With neither/nor the verb agrees with the nearer subject, <em>dancers</em> (plural).</li>
              <li><b>The number of students enrolling in online courses has increased dramatically over the past two years.</b> "The number of" is singular (the subject is <em>number</em>); "a number of" would be plural.</li>
              <li><b>Each of the new applicants has submitted all the required paperwork on time.</b> <em>Each</em> is singular; ignore the plural noun after "of".</li>
              <li><b>The doctor, along with several nurses and lab technicians, was praised for the swift response during the emergency.</b> "Along with…" is ignored; the subject <em>doctor</em> is singular. ("Their" can stay, since the praise covers the whole team; the error marked is "were".)</li>
              <li><b>Hidden behind the bookshelf were several old manuscripts from the 16th century.</b> The sentence is inverted: the real subject, <em>manuscripts</em> (plural), comes after the verb, as in "From the ceiling hung the chandelier".</li>
            </ol>
            <h4>B. Conditionals</h4>
            <ol>
              <li>If you heat ice, <b>it melts</b>. (Zero conditional: a scientific fact, present simple in both clauses.)</li>
              <li><b>Her parents will throw a party</b> if she wins the first prize. (First conditional: "wins" is present simple, so the result takes <em>will</em> + verb.)</li>
              <li>If Brian won the competition, <b>he would buy a new guitar</b>. (Second conditional: past simple in the if clause, <em>would</em> + verb; an unlikely or imagined result.)</li>
              <li><b>They would not have missed the flight</b> if they had set an alarm last night. (Third conditional: had + V3, so <em>would have</em> + V3; they did not set an alarm.)</li>
              <li>If I had a new car, <b>I would drive to college every day</b>. (Second conditional: an unreal present.)</li>
            </ol>
            <div class="note exam"><p>Half a mark for the error, half for the correction in A; in B, the clause must use the right tense pattern for the half that is given. Read the given verb first ("heat", "wins", "won", "had set", "had") and the conditional type follows from it.</p></div>
            <div class="note trap"><p>A2: "The number of" is singular but "a number of students have…" is plural. A5: do not change "was" because of "bookshelf"; find who or what was hidden.</p></div>`,
          topics: ['m2-concord-rules', 'm2-concord-special', 'm2-cond-basics'],
          notes: ['m2-concord-rules.3', 'm2-concord-rules.0', 'm2-concord-special.1', 'm2-concord-special.0']
        },
        {
          n: '5', marks: 10, co: '3', bl: '2',
          prompt: `<p>Identify and fix the incorrect use of tenses in the sentences given below:</p><ol><li>By the time the movie started, we already bought our popcorn and drinks.</li><li>She is working at the firm since 2018.</li><li>I have finished reading the assigned chapter yesterday evening.</li><li>Right now, the chef prepares the signature dessert for the guests.</li><li>Water is boiling at 100 degrees Celsius under standard atmospheric pressure.</li><li>By next December, my older brother will graduate from university.</li><li>The tour guide spoke to the group when a sudden thunderstorm interrupted her.</li><li>Last night, I am lying in bed when I heard a strange noise downstairs.</li><li>They will build the new bridge for three months before the budget ran out.</li><li>Look! The train arrived at the platform right now.</li></ol>`,
          answer: `
            <table class="tbl">
              <thead><tr><th>No.</th><th>Corrected sentence</th><th>Reason</th></tr></thead>
              <tbody>
                <tr><td>a</td><td>By the time the movie started, we <b>had already bought</b> our popcorn and drinks.</td><td>The earlier of two past actions takes the past perfect.</td></tr>
                <tr><td>b</td><td>She <b>has been working</b> at the firm since 2018.</td><td>Began in the past, continues now, with "since": present perfect continuous.</td></tr>
                <tr><td>c</td><td>I <b>finished</b> reading the assigned chapter yesterday evening.</td><td>"Yesterday evening" is a finished past time: past simple.</td></tr>
                <tr><td>d</td><td>Right now, the chef <b>is preparing</b> the signature dessert for the guests.</td><td>"Right now": an action in progress, present continuous.</td></tr>
                <tr><td>e</td><td>Water <b>boils</b> at 100 degrees Celsius under standard atmospheric pressure.</td><td>A universal or scientific truth takes the present simple.</td></tr>
                <tr><td>f</td><td>By next December, my older brother <b>will have graduated</b> from university.</td><td>"By" + a future time: an action complete before that point, future perfect.</td></tr>
                <tr><td>g</td><td>The tour guide <b>was speaking</b> to the group when a sudden thunderstorm interrupted her.</td><td>A longer past action interrupted by a short one: past continuous + past simple.</td></tr>
                <tr><td>h</td><td>Last night, I <b>was lying</b> in bed when I heard a strange noise downstairs.</td><td>"Last night" is past; the ongoing background action takes the past continuous.</td></tr>
                <tr><td>i</td><td>They <b>had been building</b> the new bridge for three months before the budget ran out.</td><td>An action continuing for a period up to another past event ("ran out"): past perfect continuous.</td></tr>
                <tr><td>j</td><td>“Look! The train <b>is arriving</b> at the platform right now.”</td><td>"Look" and "right now" point to this moment: present continuous. ("The train has just arrived" also works if "right now" is dropped.)</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>One mark per sentence: the full corrected sentence plus the time clue that decides the tense ("by the time", "since", "yesterday", "right now", a general truth, "by next December", "when", "last night", "for three months before", "Look"). Change only the verb phrase unless the sentence cannot work otherwise.</p></div>
            <div class="note trap"><p>In (i) do not change "ran out" to "runs out" and keep "will": the past "ran out" fixes the whole sentence in the past. In (f) "will graduate by next December" is heard in speech, but the exam expects the future perfect with "by".</p></div>`,
          topics: ['m2-tenses-errors', 'm2-tenses-forms'],
          notes: ['m2-tenses-errors.1', 'm2-tenses-forms.1', 'm2-tenses-forms.2']
        }
      ]
    },

    {
      id: 'cat2-b2tb2', kind: 'actual', title: 'CAT-2 · Slot B2+TB2 · 28-09-2026', short: 'B2+TB2 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B2+TB2'], ['Date', '28-09-2026 (Monday), 08:30 a.m. to 10:00 a.m.'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Programme', 'B.Tech.']],
      instructions: `<b>General instructions:</b> Answer All Questions. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level (1 – Remember, 2 – Understand, 3 – Apply, 4 – Analyse, 5 – Evaluate, 6 – Create).<br><b>Course Outcomes:</b> CO1: Apply principles of effective report writing. CO4: Create technical summaries and abstracts by summarizing/paraphrasing complex information.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write definitions for the following five words. Each definition should identify the class/category and the distinguishing feature or function. (5 x 2 = 10 marks)</p><div class="chips"><span class="chip">1. Prototype</span><span class="chip">2. Recycling</span><span class="chip">3. Cybersecurity</span><span class="chip">4. Innovation</span><span class="chip">5. Sensor</span></div>`,
          answer: `
            <p>Each answer is a sentence definition: <b>term + class + distinguishing features</b>, with a short example to make the meaning concrete.</p>
            <p><b>1. Prototype</b> A prototype is an early working model of a product that is built to test its design, function and usability before the final version is manufactured, for example a 3D-printed casing for a new phone.</p>
            <p><b>2. Recycling</b> Recycling is a waste-management process in which used materials such as paper, plastic, glass and metal are collected, sorted and converted into new products, reducing the need for fresh raw materials.</p>
            <p><b>3. Cybersecurity</b> Cybersecurity is the practice of protecting computers, networks, software and data from unauthorised access, theft and damage, using measures such as firewalls, encryption and strong passwords.</p>
            <p><b>4. Innovation</b> Innovation is the process of turning a new idea into a product, service or method that is put into practical use and creates value, for example mobile payment apps that replaced cash for small purchases.</p>
            <p><b>5. Sensor</b> A sensor is an electronic device that detects a physical quantity such as temperature, light, pressure or motion and converts it into a signal that can be measured or recorded, for example the thermistor in a digital thermometer.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing feature or function</th></tr></thead>
              <tbody>
                <tr><td>Prototype</td><td>an early working model of a product</td><td>built to test design, function and usability before manufacture</td></tr>
                <tr><td>Recycling</td><td>a waste-management process</td><td>converts used materials into new products</td></tr>
                <tr><td>Cybersecurity</td><td>the practice of protecting digital systems</td><td>guards computers, networks and data from unauthorised access, theft and damage</td></tr>
                <tr><td>Innovation</td><td>a process</td><td>turns a new idea into a product, service or method that is used and creates value</td></tr>
                <tr><td>Sensor</td><td>an electronic device</td><td>detects a physical quantity and converts it into a measurable signal</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>Two marks each: one for a precise class, one for features that separate the term from other members of that class. The question says so directly ("class/category and the distinguishing feature or function"), so make both parts easy to find. One sentence per term is enough; the example is a bonus, not a requirement.</p></div>
            <div class="note trap"><p>Avoid "is when" and "is something that": "Innovation is when you make something new" has no class. Avoid circular definitions such as "Recycling is the act of recycling waste" and features that are too broad, such as "A sensor is a device used in electronics".</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the following passage and answer the questions that follow. (10 marks)</p>`,
          passage: `<p>Cities are usually warmer than surrounding rural areas because roads, concrete surfaces and buildings absorb and retain heat. This phenomenon, known as the urban heat island effect, can increase electricity demand for cooling and make outdoor conditions uncomfortable during hot weather. Researchers have examined 'cool roofs' as one possible response. These roofs use light-coloured or specially coated materials that reflect a larger proportion of incoming solar radiation than conventional dark roofs.</p>
            <p>In one field study, researchers monitored two similar university buildings during the hottest part of the year. One building retained its conventional dark roof, while the second was coated with a high-reflectance material. During clear afternoons, the surface temperature of the treated roof was substantially lower. The rooms on the top floor of the treated building also remained cooler, although the difference indoors was smaller than the difference measured on the roof surface. The reduction was most noticeable on sunny days and less pronounced during cloudy periods. Researchers noted that roof design, insulation, local climate and building orientation can influence the final benefit. They therefore cautioned that cool roofs should not be treated as a universal solution, but as one part of a broader strategy that may include shade, ventilation, insulation and urban greenery.</p>`,
          parts: [
            { text: 'What can be inferred about the relationship between roof-surface temperature and indoor temperature?', marks: 3 },
            { text: 'Why do the researchers avoid presenting cool roofs as a universal solution?', marks: 3 },
            { text: 'What type of material was applied to the treated roof?', marks: 2 },
            { text: 'On what type of days was the reduction in temperature most noticeable?', marks: 2 }
          ],
          answer: `
            <p><b>a)</b> A cooler roof surface helps keep the rooms below it cooler, but only part of the surface cooling reaches the inside. The passage says the top-floor rooms of the treated building "also remained cooler", yet "the difference indoors was smaller than the difference measured on the roof surface". So the two temperatures are linked, but not one-to-one: other factors such as insulation and roof design reduce how much of the benefit passes indoors, and the effect is likely strongest on the floor nearest the roof.</p>
            <p><b>b)</b> Because the benefit is not the same everywhere. The researchers noted that "roof design, insulation, local climate and building orientation can influence the final benefit", and the study itself showed a smaller effect indoors and on cloudy days. A cool roof may therefore help a lot in one building and little in another, so they present it as "one part of a broader strategy" alongside shade, ventilation, insulation and urban greenery.</p>
            <p><b>c)</b> A high-reflectance (light-coloured or specially coated) material, which reflects a larger proportion of incoming solar radiation than a conventional dark roof.</p>
            <p><b>d)</b> On sunny days, with clear afternoons. The reduction was less pronounced during cloudy periods.</p>
            <div class="note exam"><p>Parts c and d are stated facts: give the passage's words in one sentence for 2 marks each. Parts a and b carry 3 marks: give the inference, quote at least one piece of evidence, and link the two in your own words (inference, evidence, link).</p></div>
            <div class="note trap"><p>In a, do not write "indoor temperature falls by the same amount as the roof temperature" or "cool roofs do not affect indoor temperature". Both go against the passage. The answer is in between: linked, but weaker indoors.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Write an abstract of about 100-120 words from the research information below. Present the purpose, method, major findings and conclusion in a clear academic style. (10 marks)</p>`,
          passage: `<p>A university team studied whether low-cost air-quality sensors could help identify poor ventilation in classrooms. Six classrooms were monitored for four weeks for carbon-dioxide level, temperature and humidity. Researchers also noted class size and whether doors and windows were open. Carbon-dioxide levels rose fastest in crowded rooms with closed doors and windows. Opening windows during breaks usually reduced the levels within 15-25 minutes, while mechanically ventilated rooms showed more stable readings. The study concluded that low-cost sensors can support timely ventilation decisions, but they require periodic calibration and cannot replace professional environmental assessment.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>Poor ventilation in classrooms is difficult to detect without measurement. This study examined whether low-cost air-quality sensors could help identify poorly ventilated classrooms. A university team monitored six classrooms for four weeks, recording carbon-dioxide level, temperature and humidity, and noting class size and whether doors and windows were open. Carbon-dioxide levels rose fastest in crowded rooms with closed doors and windows. Opening windows during breaks usually reduced the levels within 15–25 minutes, while mechanically ventilated rooms showed more stable readings. The study concluded that low-cost sensors can support timely ventilation decisions in classrooms. However, the sensors need periodic calibration and cannot replace a professional environmental assessment.</p>
            <p><small>106 words</small></p>
            <table class="tbl">
              <thead><tr><th>Part</th><th>In the abstract</th></tr></thead>
              <tbody>
                <tr><td><b>Purpose</b></td><td>can low-cost sensors identify poor ventilation in classrooms</td></tr>
                <tr><td><b>Method</b></td><td>six classrooms, four weeks; CO<sub>2</sub>, temperature, humidity; class size and open doors/windows noted</td></tr>
                <tr><td><b>Findings</b></td><td>fastest rise in crowded, closed rooms; windows at breaks cut levels in 15–25 minutes; mechanical ventilation more stable</td></tr>
                <tr><td><b>Conclusion</b></td><td>sensors support timely decisions; need calibration; do not replace professional assessment</td></tr>
              </tbody>
            </table>
            <div class="note exam"><p>The question names the four parts (purpose, method, findings, conclusion), so the marker checks for each one. Write in the past tense and third person, keep the numbers (six, four weeks, 15–25 minutes), and use the course's sample openers: "This study examined…", "The findings showed…", "The study concluded…". Count your words and stay within 100–120.</p></div>
            <div class="note trap"><p>Do not drop the limitation (calibration, not a replacement for professional assessment): it is part of the conclusion. Do not add advice the study did not give, such as "schools must buy sensors".</p></div>`,
          topics: ['m4-abstract', 'm4-abstract-more'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1', 'm4-abstract-more.2']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p><b>Case Study - Conflict Management (10 marks)</b></p>`,
          passage: `<p>A technology company is preparing to launch a mobile application. The development team wants one extra week to fix performance issues, but the marketing team has already announced the launch date and fears that a delay will affect customer trust. Both teams begin blaming each other, communication becomes defensive, and regular updates stop.</p><p>Analyse the conflict and propose a practical resolution plan:</p>`,
          parts: [
            { text: 'a) Identify the main causes of the conflict and Suggest suitable conflict-management strategies.' },
            { text: 'b) Justify how your solution can protect teamwork and project goals.' }
          ],
          answer: `
            <h4>a) Causes and strategies</h4>
            <p><b>Causes.</b> (1) <b>Competing goals</b>: development wants quality (fix performance first), marketing wants the announced date kept. Both goals are valid. (2) <b>Poor coordination</b>: the launch date was announced without confirming that the product was ready. (3) <b>Defensive communication and blame</b>: each team attacks the other instead of the problem. (4) <b>Communication breakdown</b>: regular updates have stopped, so each side now guesses what the other is doing.</p>
            <p><b>Strategies.</b> The best style here is <b>collaborating</b>, because both concerns matter and the result has a large impact on the company. The project manager should bring both teams to one meeting, let each side have its say, and agree on the shared goal: a launch that works and keeps customer trust. Options can then be weighed, for example:</p>
            <ul>
              <li>a <b>phased launch</b>: release on the announced date to a small group of users (a beta) while the performance fixes are completed, then open to everyone a week later;</li>
              <li>or a <b>short, honest delay</b>, announced by marketing with a reason that stresses quality ("we are making the app faster").</li>
            </ul>
            <p>If no agreement comes quickly, a <b>compromise</b> (for example, three extra days instead of seven, with the most serious fixes first) protects the deadline. Restore communication with a daily 15-minute joint stand-up and one shared progress tracker. <b>Avoiding</b> and <b>competing</b> should not be used: avoiding lets the blame grow, and competing makes one team the loser.</p>
            <h4>b) Why this protects teamwork and project goals</h4>
            <p>Collaboration protects <b>teamwork</b> because both teams are heard and solve the problem together, so the blame stops and the relationship survives for future releases. Daily updates remove guessing and keep communication open. It protects the <b>project goals</b> because the app is released in a working state, which is what actually keeps customer trust: an app that launches on time but runs slowly would damage trust more than a short, explained delay. Following the course's steps (investigate, let everyone have their say, agree a way forward, implement, evaluate, and prevent future clashes by confirming dates with development before announcing them) turns the conflict into a better launch process.</p>
            <div class="note exam"><p>Part a: list three or four causes, each tied to a phrase in the case ("already announced", "blaming each other", "regular updates stop"). Then name a TKI style, say why it fits, and give concrete steps. Part b: two separate justifications, one for teamwork and one for project goals. Using the course's style names and its nine best-practice steps shows the theory the marker looks for.</p></div>
            <div class="note trap"><p>Do not simply take one side ("marketing should wait" or "developers should ship"). That is competing, and it fails the "protect teamwork" part of the question.</p></div>`,
          topics: ['m5-conflict-basics', 'm5-styles', 'm5-choosing'],
          notes: ['m5-styles.1', 'm5-styles.3', 'm5-choosing.1', 'm5-tki.2', 'm5-conflict-basics.4']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p><b>Statement of Purpose (SoP) - 10 marks</b></p><p>A final-year B.Tech. student is applying for a postgraduate programme in Sustainable and Intelligent Engineering Systems. The student has studied programming, sensors, control systems and energy studies; completed a sensor-based energy-monitoring mini project; and observed industrial energy-management practices during an internship. The student wishes to combine automation with sustainable engineering.</p><p>Using this profile, write a structured SoP of about 200-250 words. Include motivation, relevant preparation/experience, programme fit, and realistic career goals. (10 marks)</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>During my internship at a manufacturing plant, I watched a compressor run at full load through a lunch break when no machine needed air. That single observation showed me how much energy industry wastes, and how much automation could save. I am applying to the postgraduate programme in Sustainable and Intelligent Engineering Systems to learn to build systems that make such savings routine.</p>
            <p>My B.Tech. coursework gave me the foundation for this goal. Programming, sensors and control systems taught me how to measure a process and act on the data, and energy studies taught me where losses occur and how they are measured. In my mini project, I built a sensor-based energy-monitoring unit that recorded the power use of our department laboratory and flagged equipment left running after hours. The internship then showed me how a real plant manages energy, through load scheduling, metering and maintenance.</p>
            <p>These experiences also showed me what I still need: deeper knowledge of intelligent control, data-driven optimisation and sustainability assessment. The programme combines these areas, which is exactly the meeting of automation and sustainable engineering I want to work in.</p>
            <p>After the programme, I aim to work as an energy-automation engineer in industry, designing monitoring and control systems that cut energy use in plants and buildings. In the longer term, I hope to lead such projects and help companies meet their sustainability targets.</p>
            <p><small>228 words</small></p>
            <div class="note exam"><p>The question lists four parts, so give each its own paragraph: motivation (a specific moment, not "I have always been passionate"), preparation (the four subjects, the mini project, the internship, each with what it taught), programme fit (the gap you have and how this programme fills it), and realistic goals (a job title and a longer-term aim). Stay within 200–250 words and write in the first person and active voice.</p></div>
            <div class="note trap"><p>Do not invent a university name, professors or course codes; the question names only the programme. Keep goals realistic: "energy-automation engineer" fits the profile, "solve the world's energy crisis" does not. The compressor detail is an example of how to make the internship concrete; use any honest detail of your own.</p></div>`,
          topics: ['m5-sop-structure', 'm5-sop-writing', 'm5-sop-samples'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5', 'm5-sop-samples.1']
        }
      ]
    },
    {
      id: 'fat-b1tb1-2026', kind: 'actual', title: 'FAT · Slot B1+TB1 · November 2026', short: 'FAT B1+TB1 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B1+TB1'], ['Month', 'November 2026'], ['Duration', '3 hours'], ['Max marks', '100']],
      instructions: `<b>General instructions:</b> PART-A (10 × 10 = 100 marks). Answer all questions. Q6 and Q7 each give two alternatives joined by (OR): answer one of them (model answers are given for both). M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level.`,
      questions: [
        {
          n: '1', marks: 10, co: '2', bl: '2',
          prompt: `<p>Explain the five principles of business communication with examples.</p>`,
          answer: `
            <p><b>Business communication</b> is the correspondence written in the daily course of business: résumés, cover letters, transmittal letters, customer-relations writing, HR communications, trip reports and administrative messages. It still needs the precision of technical writing, but it usually aims at a <b>call to action</b>, so the reader must understand at once what is wanted. Five principles make that happen.</p>
            <h4>1. Clarity</h4>
            <p>Say one main idea in plain, specific words so the reader cannot misread it. <em>Weak:</em> "Please send the documents soon." <em>Clear:</em> "Please email the signed contract to the accounts team by 5 p.m. on Friday."</p>
            <h4>2. Conciseness</h4>
            <p>Use the fewest words that carry the full message; cut padding and repetition. <em>Weak:</em> "We would like to take this opportunity to inform you that the meeting has been postponed." <em>Concise:</em> "The meeting is postponed to Monday, 10 a.m."</p>
            <h4>3. Completeness</h4>
            <p>Give everything the reader needs to act: who, what, when, where, why and how. A purchase order that lists items but not quantities, delivery address or date forces a second round of messages.</p>
            <h4>4. Correctness</h4>
            <p>Facts, figures, names, dates, grammar and format must all be accurate. A quotation that says Rs 50,000 in figures and "five lakh" in words damages trust and may have legal consequences.</p>
            <h4>5. Courtesy (consideration)</h4>
            <p>Write politely and from the reader's point of view (the "you" attitude), even when refusing or complaining. <em>Rude:</em> "You failed to pay on time." <em>Courteous:</em> "Our records show the invoice of 3 October is still open; could you please arrange payment this week?"</p>
            <table class="tbl"><thead><tr><th>Principle</th><th>Test question</th></tr></thead><tbody>
            <tr><td>Clarity</td><td>Can it be read only one way?</td></tr>
            <tr><td>Conciseness</td><td>Can any word be cut?</td></tr>
            <tr><td>Completeness</td><td>Can the reader act without asking back?</td></tr>
            <tr><td>Correctness</td><td>Are facts, figures and grammar right?</td></tr>
            <tr><td>Courtesy</td><td>Is it polite and reader-centred?</td></tr>
            </tbody></table>
            <div class="note trap"><p>Some textbooks list seven Cs (adding concreteness and coherence). With "five principles" asked, give five clearly, each with its own example; you may mention the others in one line. Do not confuse these with the 5 Cs of technical writing (correct, clear, complete, consistent, changeable).</p></div>
            <div class="note exam"><p>About 1 mark for a definition of business communication, then about 2 marks per principle split between the explanation and a concrete business example (ideally a weak and an improved version).</p></div>`,
          topics: ['m1-business', 'm1-5cs-qualities'],
          notes: ['m1-business.0', 'm1-business.1', 'm1-5cs-overview.2']
        },
        {
          n: '2', marks: 10, co: '2', bl: '2',
          prompt: `<p>Discuss the 5Cs of technical writing with examples.</p>`,
          answer: `
            <p>There is no accepted quality standard for technical writing, only templates for particular documents. So the textbook (Laplante) borrows the eight qualities of a good requirements document from IEEE 830, keeps five, and renames two so that all start with C: <b>correct, clear, complete, consistent, changeable</b>. They describe the document itself, whatever the writer's style.</p>
            <h4>1. Correct</h4>
            <p>Every statement is true and accurate: facts, numbers, units, references. <em>Example:</em> "The pump delivers 50 litres per minute" must match the test data; a typo of 500 makes the whole manual unreliable.</p>
            <h4>2. Clear</h4>
            <p>(IEEE: unambiguous.) Each sentence can be interpreted only one way. <em>Example:</em> "The system should respond quickly" is unclear; "The system shall respond within 2 seconds" is clear.</p>
            <h4>3. Complete</h4>
            <p>Nothing the reader needs is missing: all steps, conditions, cases and definitions. <em>Example:</em> installation steps that omit "switch off the mains before opening the panel" are incomplete and unsafe.</p>
            <h4>4. Consistent</h4>
            <p>No part contradicts another, and the same thing is called by the same name throughout. <em>Example:</em> a report should not say "control unit" on page 2 and "controller board" on page 9 for the same part, or give 12 V in one table and 24 V in another.</p>
            <h4>5. Changeable</h4>
            <p>(IEEE: modifiable.) The document is organised so it can be updated easily and safely: numbered sections, a table of contents, one fact stated in one place. <em>Example:</em> if the operating voltage is defined once in a specifications table and referred to elsewhere, a design change means editing one line.</p>
            <table class="tbl"><thead><tr><th>C</th><th>Question it answers</th></tr></thead><tbody>
            <tr><td>Correct</td><td>Is it true?</td></tr><tr><td>Clear</td><td>Is there only one meaning?</td></tr><tr><td>Complete</td><td>Is anything missing?</td></tr><tr><td>Consistent</td><td>Does anything contradict?</td></tr><tr><td>Changeable</td><td>Can it be updated easily?</td></tr>
            </tbody></table>
            <p>Most of the Cs are best checked by someone other than the author, through reviews and inspections, because writers read what they meant rather than what they wrote.</p>
            <div class="note trap"><p>Do not list the business-communication Cs (concise, courteous) here. The textbook's five are correct, clear, complete, consistent and changeable.</p></div>
            <div class="note exam"><p>About 1 mark for the origin (IEEE 830, no standard for technical writing), then about 2 marks per C: meaning plus a technical example. A summary table adds presentation marks.</p></div>`,
          topics: ['m1-5cs-overview', 'm1-5cs-qualities', 'm1-5cs-example'],
          notes: ['m1-5cs-overview.1', 'm1-5cs-overview.2', 'm1-5cs-qualities.0', 'm1-5cs-qualities.1']
        },
        {
          n: '3', marks: 10, co: '3', bl: '3',
          prompt: `<p><b>A.</b> Each sentence has a subject-verb agreement error. Re-write the sentence after correcting the error.</p><ol><li>The list of requirements are on the second page.</li><li>Neither the manager nor the engineers was available for the review.</li><li>The report, along with the working drafts, need to be submitted by evening.</li><li>Each of the users have their own password.</li><li>Some of the citizens is unhappy with the new proposal.</li></ol><p><b>B.</b> Each sentence has a tense error or inconsistency. Re-write the sentence after correcting the error.</p><ul><li>6. We tested the module yesterday and find three faults.</li><li>7. By the time the report was submitted, the team already finish the review.</li><li>8. The system has crashed last night because of a memory leak.</li><li>9. When the user will click 'Save', the file is stored automatically.</li><li>10. I am working here since March.</li></ul>`,
          answer: `
            <h4>A. Subject-verb agreement</h4>
            <ol>
            <li>The list of requirements <b>is</b> on the second page. <em>The subject is "list" (singular); "of requirements" is a prepositional phrase and does not change the verb.</em></li>
            <li>Neither the manager nor the engineers <b>were</b> available for the review. <em>With neither ... nor, the verb agrees with the nearer subject, "engineers" (plural).</em></li>
            <li>The report, along with the working drafts, <b>needs</b> to be submitted by evening. <em>"Along with ..." is a parenthetical addition; the subject is still "report" (singular).</em></li>
            <li>Each of the users <b>has</b> his or her own password. <em>"Each" is singular and takes a singular verb ("has their own" is also accepted in modern usage; the verb is the mark).</em></li>
            <li>Some of the citizens <b>are</b> unhappy with the new proposal. <em>"Some" takes its number from the noun after "of": "citizens" is plural.</em></li>
            </ol>
            <h4>B. Tenses</h4>
            <ul>
            <li>6. We tested the module yesterday and <b>found</b> three faults. <em>"Yesterday" fixes both actions in the finished past: keep both verbs in the simple past.</em></li>
            <li>7. By the time the report was submitted, the team <b>had already finished</b> the review. <em>"By the time" + past: the earlier action takes the past perfect.</em></li>
            <li>8. The system <b>crashed</b> last night because of a memory leak. <em>"Last night" is a finished past time, which the present perfect cannot take: simple past.</em></li>
            <li>9. When the user <b>clicks</b> 'Save', the file is stored automatically. <em>In a time clause (when, if, as soon as) use the simple present, not "will", for a general or future action.</em></li>
            <li>10. I <b>have been working</b> here since March. <em>"Since" + a point in time with an action that started in the past and continues: present perfect continuous.</em></li>
            </ul>
            <div class="note trap"><p>In 1, 3 and 5 the noun nearest the verb is a trap: find the true head noun ("list", "report") or, with "some/all/most of", follow the noun after "of". In 9, "will" never goes in the "when" clause.</p></div>
            <div class="note exam"><p>One mark each: the corrected verb earns the mark. Writing the full corrected sentence with the change marked and a one-line rule protects it.</p></div>`,
          topics: ['m2-concord-rules', 'm2-concord-special', 'm2-tenses-errors'],
          notes: ['m2-concord-rules.3', 'm2-concord-special.0', 'm2-concord-special.3', 'm2-tenses-errors.1']
        },
        {
          n: '4', marks: 10, co: '3', bl: '',
          prompt: `<p><b>A.</b> Fill in the blanks with the correct conditional forms of the verbs.</p><ol><li>If you (listen) ____ to the instructions, you wouldn't have made that mistake.</li><li>Metal (expand) ____ when it is heated.</li><li>If we lived closer, we (visit) ____ you more often.</li><li>If the test (go) ____ well, the company will launch the product next month.</li><li>If she hadn't forgotten her password, she (log in) ____ earlier.</li></ol><p><b>B.</b> Put the verb in brackets into the correct form, active or passive, to complete each sentence.</p><ul><li>6. The new software (install) ____ by the technicians last week.</li><li>7. The engineers (repair) ____ the faulty server yesterday.</li><li>8. All reports (collect) ____ by the manager every Monday.</li><li>9. The budget (approve) ____ by the committee tomorrow.</li><li>10. The company (just, launch) ____ its new mobile app.</li></ul>`,
          answer: `
            <h4>A. Conditionals</h4>
            <ol>
            <li>If you <b>had listened</b> to the instructions, you wouldn't have made that mistake. <em>Third conditional (unreal past): if + past perfect, would have + past participle.</em></li>
            <li>Metal <b>expands</b> when it is heated. <em>Zero conditional (scientific fact): simple present in both clauses.</em></li>
            <li>If we lived closer, we <b>would visit</b> you more often. <em>Second conditional (unreal present): if + simple past, would + base verb.</em></li>
            <li>If the test <b>goes</b> well, the company will launch the product next month. <em>First conditional (real future): if + simple present, will + base verb.</em></li>
            <li>If she hadn't forgotten her password, she <b>would have logged in</b> earlier. <em>Third conditional: the main clause takes would have + past participle.</em></li>
            </ol>
            <h4>B. Active or passive</h4>
            <ul>
            <li>6. The new software <b>was installed</b> by the technicians last week. <em>"By the technicians" shows the subject receives the action: passive, simple past (was + past participle).</em></li>
            <li>7. The engineers <b>repaired</b> the faulty server yesterday. <em>The engineers do the action and "the server" is the object: active, simple past.</em></li>
            <li>8. All reports <b>are collected</b> by the manager every Monday. <em>Routine ("every Monday") with an agent: passive, simple present (are + past participle).</em></li>
            <li>9. The budget <b>will be approved</b> by the committee tomorrow. <em>Future with an agent: passive, will be + past participle.</em></li>
            <li>10. The company <b>has just launched</b> its new mobile app. <em>Active (the company acts on "its app"); "just" signals a recent completed action: present perfect, with "just" between has and the participle.</em></li>
            </ul>
            <table class="tbl"><thead><tr><th>Type</th><th>If-clause</th><th>Main clause</th><th>Item</th></tr></thead><tbody>
            <tr><td>Zero</td><td>present</td><td>present</td><td>2</td></tr>
            <tr><td>First</td><td>present</td><td>will + verb</td><td>4</td></tr>
            <tr><td>Second</td><td>past</td><td>would + verb</td><td>3</td></tr>
            <tr><td>Third</td><td>past perfect</td><td>would have + V3</td><td>1, 5</td></tr>
            </tbody></table>
            <div class="note trap"><p>In B, decide voice first: a "by ..." agent means passive (6, 8, 9); an object after the blank means active (7, 10). Then match the time word (last week, every Monday, tomorrow, just).</p></div>
            <div class="note exam"><p>One mark per blank. Writing the full sentence with the verb in bold and naming the conditional type or voice shows the rule.</p></div>`,
          topics: ['m2-cond-basics', 'm2-cond-unreal', 'm2-voice-tenses'],
          notes: ['m2-cond-basics.2', 'm2-cond-basics.0', 'm2-cond-unreal.3', 'm2-cond-unreal.0']
        },
        {
          n: '5', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down the definitions of the following words in 1-2 sentences each.</p><ol><li>Bio-note</li><li>USB Drive</li><li>Celebrity</li><li>Resume</li><li>Projector</li><li>Recycling</li><li>Smartphone</li><li>UPI</li><li>Walkalator</li><li>Sustainability</li></ol>`,
          answer: `
            <p>Each definition follows the pattern <b>term = class (general group) + distinguishing features</b> (what makes it different from other members of the class).</p>
            <ol>
            <li><b>Bio-note:</b> A bio-note (biosketch) is a short professional profile, usually 50 words or less and written in the third person, that states who a person is, where they work or study, their current work and their main qualifications.</li>
            <li><b>USB Drive:</b> A USB drive is a small, portable data-storage device that uses flash memory and connects to a computer through a Universal Serial Bus port, allowing files to be saved, carried and transferred without a power supply of its own.</li>
            <li><b>Celebrity:</b> A celebrity is a person who is widely known and receives a great deal of public and media attention, usually because of success in fields such as entertainment, sport, politics or business.</li>
            <li><b>Resume:</b> A résumé is a concise, usually one-page document that summarises a person's education, work experience, skills, achievements and interests, submitted to an employer when applying for a job.</li>
            <li><b>Projector:</b> A projector is an optical output device that takes images or video from a source such as a computer and projects them, enlarged, onto a screen or wall for an audience to view.</li>
            <li><b>Recycling:</b> Recycling is the process of collecting used materials such as paper, plastic, glass and metal and treating them so that they can be made into new products, reducing waste and saving raw materials and energy.</li>
            <li><b>Smartphone:</b> A smartphone is a handheld mobile phone with a touchscreen, an operating system and internet access that, besides calls and messages, runs applications for tasks such as e-mail, navigation, banking and photography.</li>
            <li><b>UPI:</b> UPI (Unified Payments Interface) is a real-time digital payment system developed in India by the National Payments Corporation of India that lets users transfer money instantly between bank accounts through a mobile app, using a virtual payment address or QR code.</li>
            <li><b>Walkalator:</b> A walkalator (moving walkway or travelator) is a slow-moving flat conveyor belt that carries people, with or without luggage or trolleys, over a horizontal or gently inclined distance, as in airports and shopping malls.</li>
            <li><b>Sustainability:</b> Sustainability is the practice of meeting present needs without harming the ability of future generations to meet their own, by balancing economic growth, social well-being and protection of the environment.</li>
            </ol>
            <div class="note trap"><p>Do not define with examples alone ("a smartphone is like an iPhone") or with the word itself ("recycling is to recycle"). Start with the class word (device, document, process, system, person) and then add what makes it different.</p></div>
            <div class="note exam"><p>One mark per word: a correct class word plus at least one distinguishing feature, within 1-2 sentences.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded', 'm1-business'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
        },
        {
          n: '6', marks: 10, co: '4', bl: '1',
          prompt: `<p><b>a)</b> Read the passage below and answer the questions that follow:</p><p>In his 1945 work <em>The Open Society and Its Enemies</em>, philosopher Karl Popper introduced the concept of the "paradox of tolerance." He argued that if a society is unlimitedly tolerant, it risks allowing the intolerant to undermine or even destroy the tolerant society itself. Popper contended that in order to maintain a tolerant society, the society must be intolerant of intolerance. He emphasized that while we should allow free expression and debate, we must not permit ideologies that advocate for violence or the suppression of others. Popper's paradox highlights the delicate balance societies must maintain between upholding freedom and protecting democratic values from those who would seek to dismantle them.</p><p>Popper's paradox is particularly relevant in the context of modern democracies, where freedom of speech and expression are fundamental rights. The challenge lies in determining the boundaries of tolerance - how can a society remain open and inclusive without permitting ideologies that threaten its very existence? For example, in the 1930s, the Weimar Republic in Germany allowed extremist political parties, including the Nazis, to participate in democratic processes. Their rise ultimately led to the collapse of democratic institutions and the suppression of dissenting voices. This historical instance illustrates Popper's warning that unchecked tolerance of intolerance can have catastrophic consequences. Popper suggested that societies must be vigilant and proactive in defending themselves against movements that seek to exploit the freedoms they offer. This defence does not necessarily entail censorship. The primary response to intolerant philosophies should be rational argument and public debate. Suppression should only be considered when intolerant groups actively reject rational debate and threaten the freedom and safety of others through their actions.</p><ol><li>What did Karl Popper mean by the "paradox of tolerance"? (2 marks)</li><li>What historical example does the passage give to illustrate the dangers of unchecked tolerance of intolerance? (2 marks)</li><li>Does the paradox of tolerance challenge the commonly held notion that all ideas deserve to be heard? Why or why not? (3 marks)</li><li>Why does Popper believe that societies need to be "vigilant and proactive" in protecting democratic values? What can be inferred about the role of citizens in this process? (3 marks)</li></ol><p><b>(OR)</b></p><p><b>b)</b> Explain any three sections of a research article. [10M CO4 BL3]</p>`,
          answer: `
            <h4>a) Comprehension</h4>
            <ol>
            <li><b>Paradox of tolerance (2).</b> Popper meant that unlimited tolerance destroys itself: if a society tolerates even the intolerant, they may "undermine or even destroy the tolerant society itself." So, to stay tolerant, a society "must be intolerant of intolerance", that is, it must not permit ideologies that advocate violence or the suppression of others.</li>
            <li><b>Historical example (2).</b> The Weimar Republic in Germany in the 1930s "allowed extremist political parties, including the Nazis, to participate in democratic processes." Their rise led to the collapse of democratic institutions and the suppression of dissenting voices.</li>
            <li><b>Does it challenge "all ideas deserve to be heard"? (3).</b> Yes, partly. It qualifies the idea rather than rejecting it: Popper still says "we should allow free expression and debate", and the passage stresses that defence "does not necessarily entail censorship." But ideas that advocate violence or the suppression of others are an exception, because giving them unlimited room can end the very freedom that lets all ideas be heard. So not every idea deserves unlimited tolerance.</li>
            <li><b>Why "vigilant and proactive"; role of citizens (3).</b> Intolerant movements "seek to exploit the freedoms" a democracy offers, and as Weimar shows, by the time they hold power it is too late; so threats must be noticed and answered early. The passage says the main response is "rational argument and public debate", with suppression only when groups reject debate and threaten others' safety. <em>Inference:</em> citizens are not passive; they must stay informed, take part in public debate, challenge intolerant ideas with reason, and support institutions that protect freedom and safety.</li>
            </ol>
            <h4>b) Three sections of a research article</h4>
            <p>A research article usually follows the IMRaD pattern (Introduction, Methods, Results and Discussion), framed by a title and abstract and closed by conclusions and references.</p>
            <p><b>1. Abstract.</b> A brief, self-contained summary (usually 150-250 words) placed after the title. It states the problem and objective, the method, the main results and the conclusion, so readers and indexing services can decide whether to read the full paper. It contains no citations, figures or undefined abbreviations.</p>
            <p><b>2. Introduction.</b> It gives the background of the problem, reviews the key earlier work, identifies the gap, and states the aim, research question or hypothesis of the present study. It moves from general to specific and ends by saying what the paper does.</p>
            <p><b>3. Methods (materials and methods).</b> It describes how the study was done: participants or materials, equipment, procedure, variables and the analysis used, in enough detail that another researcher could repeat the work. It is usually written in the past tense and often in the passive voice.</p>
            <p><em>Other sections that may be chosen:</em> Results (findings presented objectively, with tables and figures, without interpretation); Discussion (interprets the results, compares them with earlier studies, states limitations and implications); Conclusion (main takeaways and future work); References (full details of every source cited).</p>
            <div class="note trap"><p>In (a), answer from the passage and quote it; do not bring in outside opinions about free speech. Q3 needs a position (yes, partly) and a reason. In (b), do not just list section names: explain the purpose and content of each.</p></div>
            <div class="note exam"><p>(a) Marks follow the split 2+2+3+3; the 3-mark questions need both parts (reason and inference). (b) About 3 marks per section for purpose, content and a writing convention, plus 1 for naming the overall IMRaD structure.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice', 'm4-paper-parts'],
          notes: ['m3-inference.0', 'm3-inference.1', 'm4-paper-parts.1', 'm4-paper-parts.2']
        },
        {
          n: '7', marks: 10, co: '1', bl: '3',
          prompt: `<p><b>a)</b> Discuss any three types of reviews.</p><p><b>(OR)</b></p><p><b>b)</b> Using the two abstracts below, write a literature review in approximately 200 words that covers one point of agreement, one difference, and one limitation. Cite each study (Author, Year).</p><p><b>Abstract 1:</b> Okafor, Reyes &amp; Tan (2023). Screens, study, and strain: A longitudinal study of digital burnout in undergraduates.<br>Background: Online learning platforms and social media are a big part of university life, but their long-term effects on student well-being are unclear. Objective: To test whether daily screen use predicts burnout later on, and whether personal skills change this effect. Methods: 286 undergraduates at one university completed surveys at the start and again six months later. Results: Students with more daily screen use at the start became more cynical about their studies and less confident in their academic ability. These effects were stronger for students with weaker digital skills and weaker for students with better self-control. Conclusions: Personal skills may protect students from the effects of too much screen time. Because all students came from one university, the results may not apply elsewhere.</p><p><b>Abstract 2:</b> Lindgren, Adeyemi &amp; Cho (2022). A digital detox workshop for reducing burnout among university students: A randomised controlled trial.<br>Background: Many university students report feeling exhausted by constant online learning and social media use, but few interventions have been tested with strong research designs. Objective: To test whether a four-week digital detox workshop reduces burnout among university students. Methods: 200 students from two universities were randomly assigned to either the workshop group or a control group that received no intervention. The workshop included weekly group sessions on setting limits for screen use, turning off notifications, and planning offline activities. Burnout was measured before the workshop, immediately afterwards, and six months later. Results: Immediately after the workshop, students in the workshop group reported lower burnout than the control group (d = 0.52). Six months later, the workshop group still reported lower burnout, although the difference was smaller (d = 0.30). The effect was larger for students who had reported heavy screen use at the start. Conclusion: A short digital detox workshop may reduce burnout, and some of the benefit may last for several months. The study relied on self-reported burnout, and the authors recommend testing the workshop in other settings.</p>`,
          answer: `
            <h4>a) Three types of reviews</h4>
            <p><b>1. Systematic review.</b> <em>Purpose:</em> to answer one specific research question comprehensively. <em>Features:</em> a comprehensive search for all relevant studies, explicit and transparent methods, and a quality assessment of each study, so that the review is reproducible. <em>Outcome:</em> evidence-based conclusions and a map of knowledge gaps, showing where little or no research exists. <em>Example:</em> "Does mindfulness training reduce exam anxiety in university students?"</p>
            <p><b>2. Scoping review.</b> <em>Purpose:</em> to map the existing literature on a broad topic, identifying key concepts, types of evidence and research gaps. <em>Features:</em> broad scope; it may not formally assess study quality; useful at the exploratory stage. <em>Outcome:</em> an overview of the field that guides future research or a later systematic review. <em>Example:</em> "What has been studied about AI tools in engineering education?"</p>
            <p><b>3. Narrative (traditional) review.</b> <em>Purpose:</em> to summarise and interpret the literature on a topic without systematic search methods. <em>Features:</em> flexible structure; may include expert opinion; prone to selection bias. <em>Outcome:</em> a contextual understanding of the topic, but less rigorous than a systematic review. The usual "literature review" chapter of a thesis is of this kind.</p>
            <table class="tbl"><thead><tr><th>Type</th><th>Scope</th><th>Search</th><th>Quality appraisal</th></tr></thead><tbody>
            <tr><td>Systematic</td><td>narrow question</td><td>comprehensive, explicit</td><td>yes</td></tr>
            <tr><td>Scoping</td><td>broad topic</td><td>wide</td><td>usually not</td></tr>
            <tr><td>Narrative</td><td>flexible</td><td>not systematic</td><td>no</td></tr>
            </tbody></table>
            <p><em>Also acceptable:</em> meta-analysis (statistically pools data from quantitative studies to give a summary effect size), rapid review (streamlined, for an urgent decision), umbrella review (a review of reviews), critical review.</p>
            <h4>b) Literature review (about 200 words)</h4>
            <p>Research on digital burnout among university students identifies heavy screen use as a key risk factor. Okafor, Reyes and Tan (2023) followed 286 undergraduates for six months and found that greater daily screen use predicted later cynicism about studies and lower academic confidence. In agreement, Lindgren, Adeyemi and Cho (2022) showed that a four-week digital detox workshop reduced burnout compared with a control group (d = 0.52), with the largest benefit for heavy screen users. Both studies therefore suggest that managing screen exposure can protect student well-being.</p>
            <p>The studies differ, however, in design and focus. Okafor et al. (2023) used an observational survey to examine personal factors, finding that weak digital skills strengthened the effect while good self-control weakened it. Lindgren et al. (2022), by contrast, used a randomised controlled trial to test an external intervention, whose benefit remained but shrank after six months (d = 0.30).</p>
            <p>Both studies have limitations. Okafor et al. (2023) drew all participants from a single university, and Lindgren et al. (2022) relied on self-reported burnout, so neither finding can yet be generalised with confidence. Future research should combine skill-building with detox programmes and test them across several institutions using objective measures.</p>
            <table class="tbl"><thead><tr><th>Move</th><th>Where</th></tr></thead><tbody>
            <tr><td>Agreement</td><td>screen use linked to burnout; reducing it helps (paragraph 1)</td></tr>
            <tr><td>Difference</td><td>observational survey on personal skills vs randomised trial of an intervention (paragraph 2)</td></tr>
            <tr><td>Limitation</td><td>single university; self-reported burnout (paragraph 3)</td></tr>
            <tr><td>Gap / trend</td><td>multi-site studies with objective measures (last sentence)</td></tr>
            </tbody></table>
            <div class="note trap"><p>In (b), do not summarise Abstract 1 and then Abstract 2 separately: organise by point (agreement, difference, limitation) and cite both studies in each. Use (Author, Year) or "Author et al. (Year)" every time you use a finding.</p></div>
            <div class="note exam"><p>(a) About 3 marks per type: purpose, features and outcome or example; 1 for a comparison. (b) About 2 marks each for the agreement, difference and limitation, 2 for correct citations, and 2 for synthesis, flow and length close to 200 words.</p></div>`,
          topics: ['m4-review-types', 'm4-review-practice'],
          notes: ['m4-review-types.1', 'm4-review-types.4', 'm4-review-practice.0']
        },
        {
          n: '8', marks: 10, co: '6', bl: '3',
          prompt: `<p>Define interpersonal communication and explain two of its types.</p>`,
          answer: `
            <h4>Definition</h4>
            <p><b>Communication</b> is the evoking of a shared or common meaning in another person. <b>Interpersonal communication</b> is communication between two or more people in an organisation. A <b>communicator</b> (the person who originates the message) sends a <b>message</b> (the thoughts and feelings he or she wants to evoke) to a <b>receiver</b>; each sees the other through a <b>perceptual screen</b> (age, gender, values, beliefs, culture, experiences, needs) that affects the quality, accuracy and clarity of the exchange. The <b>feedback loop</b> is the pathway that completes two-way communication.</p>
            <h4>Type 1: One-way communication</h4>
            <p>A person sends a message to another and no questions, feedback or interaction follow. It is fast and suits simple directions, but it is often less accurate, because the sender never learns whether the message was understood. <em>Example:</em> a manager posts a notice, "The lab will be closed on Saturday", and no replies are expected.</p>
            <h4>Type 2: Two-way communication</h4>
            <p>The communicator and the receiver interact: the receiver asks questions, gives feedback and the sender clarifies. It is slower but more accurate, and it is the right mode for problem solving and complex tasks. <em>Example:</em> a team leader explains a new testing procedure, team members ask how it affects their modules, and the leader adjusts the plan in the discussion.</p>
            <table class="tbl"><thead><tr><th></th><th>One-way</th><th>Two-way</th></tr></thead><tbody>
            <tr><td>Feedback</td><td>none</td><td>through the feedback loop</td></tr>
            <tr><td>Speed</td><td>fast</td><td>slower</td></tr>
            <tr><td>Accuracy</td><td>often lower</td><td>higher</td></tr>
            <tr><td>Best for</td><td>simple directions</td><td>problem solving</td></tr>
            </tbody></table>
            <p><em>Alternative pair:</em> interpersonal communication can also be classified as <b>verbal</b> (spoken or written words, depending on language) and <b>nonverbal</b> (all elements other than words: body movements, facial expressions, eye contact, gestures, proxemics or personal space, paralanguage such as tone and pace). Either pair, well explained with examples, answers the question.</p>
            <div class="note trap"><p>Define the term first, in the slide's words, before the types. Do not just list types: each needs a description, an advantage or limit, and a workplace example.</p></div>
            <div class="note exam"><p>About 3 marks for the definition with the basic model terms (communicator, message, receiver, perceptual screen, feedback), about 3 marks per type, and 1 for a comparison table.</p></div>`,
          topics: ['m5-ipc-basics', 'm5-ipc-nonverbal'],
          notes: ['m5-ipc-basics.4', 'm5-ipc-basics.0', 'm5-ipc-nonverbal.0']
        },
        {
          n: '9', marks: 10, co: '6', bl: '',
          prompt: `<p>Read the case study given below and answer the following questions.</p><p>Epicurious Design Studio is a mid-sized company of 40 employees that creates packaging and branding for clients in the food and beverage industry. Over the past two years, three different managers have led the creative team, each with a very different approach.</p><p><b>Daniel Okoye (Year 1).</b> Daniel made nearly every decision himself. He assigned tasks, chose the design concepts to present to clients, and reviewed every file before it was sent out. He rarely asked for opinions, saying, "There is no time for a debate." Projects were completed quickly and deadlines were met. However, staff felt their ideas were ignored, and three experienced designers resigned within eight months.</p><p><b>Priya Raman (Year 2, first half).</b> Priya took over and held weekly meetings where the team discussed project goals and voted on key decisions, such as which concept to present to a client. She encouraged people to share ideas and gave credit to those who contributed. Morale improved, and the team produced more creative work. However, decision-making sometimes took longer, and two client deadlines were narrowly missed when the group could not agree.</p><p><b>Tom Whitfield (Year 2, second half).</b> Tom believed that talented professionals should be left alone to do their jobs. He set no clear deadlines, gave little feedback, and rarely attended team meetings. Some experienced designers enjoyed the freedom and produced excellent work. Newer staff, however, felt unsure about what was expected of them. Projects overlapped, responsibilities became unclear, and one major client complained about inconsistent quality.</p>`,
          parts: [
            { text: 'Identify the leadership style used by each of the three managers (Daniel, Priya, and Tom). Give one piece of evidence from the case study for each style.', marks: 5 },
            { text: 'Which leadership style would be most suitable for Epicurious Design Studio\'s creative team? Justify your answer with reference to the case study.', marks: 5 }
          ],
          answer: `
            <h4>A. Styles and evidence</h4>
            <table class="tbl"><thead><tr><th>Manager</th><th>Style</th><th>Evidence from the case</th><th>Result</th></tr></thead><tbody>
            <tr><td>Daniel</td><td><b>Autocratic</b></td><td>"made nearly every decision himself"; "rarely asked for opinions": "There is no time for a debate."</td><td>quick decisions, deadlines met; ideas ignored, three designers resigned</td></tr>
            <tr><td>Priya</td><td><b>Democratic</b> (participative)</td><td>"held weekly meetings where the team discussed project goals and voted on key decisions"</td><td>morale and creativity up; slower decisions, two deadlines nearly missed</td></tr>
            <tr><td>Tom</td><td><b>Laissez-faire</b> (delegative)</td><td>"talented professionals should be left alone"; "set no clear deadlines, gave little feedback"</td><td>experts thrived; newer staff confused, overlap, client complaint</td></tr>
            </tbody></table>
            <p>Each outcome matches the textbook pros and cons: autocratic gives quick, efficient decisions but discourages discussion and breeds resentment; democratic raises engagement and creativity but is slow; laissez-faire suits highly skilled, self-motivated experts but leads to unclear roles and poor coordination when people need guidance.</p>
            <h4>B. Most suitable style</h4>
            <p>The <b>democratic style</b> fits a creative design team best, but with clear structure added: deadlines and a final decision-maker.</p>
            <ul>
            <li><b>Creative work needs participation.</b> Under Priya "morale improved, and the team produced more creative work"; under Daniel ideas were ignored and three experienced designers left. Losing talent is the most expensive failure for a design studio.</li>
            <li><b>Pure laissez-faire does not suit a mixed team.</b> Tom's freedom worked only for experienced designers; "newer staff ... felt unsure", and a major client complained about quality.</li>
            <li><b>Fix the democratic weakness.</b> Priya's only problem was speed: deadlines were missed "when the group could not agree". The leader should consult the team and let them propose concepts, but set fixed deadlines, time-box discussions, and make the final call if no consensus is reached by then. Coaching for newer staff (regular feedback, mentoring) adds the guidance Tom lacked.</li>
            </ul>
            <p>This blend reflects the contingency view: no single style is best everywhere; the leader adapts to the task (creative, deadline-bound client work) and to the followers (a mix of experts and newcomers).</p>
            <div class="note trap"><p>Do not choose autocratic just because "deadlines were met": the case shows its cost (resignations). Whichever style you choose, support it with quoted evidence and show how you would avoid its weakness.</p></div>
            <div class="note exam"><p>A: about 1.5 marks per manager (style name plus quoted evidence), with the rest for linking the outcomes to the style. B: about 1 mark for the choice and 4 for justification drawn from all three managers' results, including a fix for the chosen style's weakness.</p></div>`,
          topics: ['m5-lead-eight-styles', 'm5-lead-contingency', 'm5-lead-style-models'],
          notes: ['m5-lead-eight-styles.2', 'm5-lead-eight-styles.0', 'm5-lead-contingency.3', 'm5-lead-style-models.2']
        },
        {
          n: '10', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the case study given below and answer the following questions.</p><p>Shahana, a recent B.Tech graduate, receives a job offer from InnovaTech Solutions with an annual salary of Rs 5,00,000. However, she expects Rs 6,50,000 based on her technical skills and internship experience. She has also received an offer from another company for Rs 5,50,000, but prefers InnovaTech because of its career development opportunities.</p><p>During the negotiation, Shahana explains her expectations and requests a higher salary. The HR manager states that the company has a limited budget but is willing to offer Rs 5,50,000 and consider a performance review after six months.</p>`,
          parts: [
            { text: 'Discuss the different negotiation strategies (e.g.: distributive vs integrative) that Shahana could use to reach a mutually beneficial agreement with the employer.', marks: 5 },
            { text: 'Explain how concepts such as BATNA, WATNA, and ZOPA can help Shahana prepare for and conduct the salary negotiation effectively.', marks: 5 }
          ],
          answer: `
            <h4>A. Negotiation strategies</h4>
            <p><b>Distributive (positional, hard bargaining, fixed pie).</b> Both sides treat the salary as a fixed amount to divide: every rupee Shahana gains is a rupee the company loses. She would anchor high (Rs 6,50,000), concede slowly and push for the highest figure. <em>Risk here:</em> the company has said its budget is limited, and a tough, competitive stance could damage the relationship with an employer she actually prefers, or even lose the offer.</p>
            <p><b>Integrative (interest-based, principled, win-win).</b> The parties "expand the pie" by trading on several issues that each values differently. Shahana's real interest is career growth as well as pay; the company's is to hire a skilled graduate within budget. She could:</p>
            <ul>
            <li>accept Rs 5,50,000 now but get the six-month <b>performance review written into the offer</b>, with clear targets and a stated revision (for example, up to Rs 6,00,000 if targets are met);</li>
            <li>ask for non-salary value: a joining bonus, paid certifications or training, mentoring, a defined promotion path, or flexible work;</li>
            <li>justify her request with facts (skills, internship results, market rate) rather than demands.</li>
            </ul>
            <p>She should act as a <b>cooperative negotiator</b>: friendly, honest, listening more than talking, and avoid the common mistakes of accepting the first offer, having unrealistic expectations or getting emotional. The integrative strategy best suits her, because she wants a long-term relationship with InnovaTech.</p>
            <h4>B. BATNA, WATNA and ZOPA</h4>
            <p><b>BATNA</b> (best alternative to a negotiated agreement) is what she will do if this negotiation fails. Her BATNA is the other company's Rs 5,50,000 offer. It sets her walk-away point: she should not accept less than about Rs 5,50,000 plus the value she places on InnovaTech's career opportunities. It gives her confidence, but she should not reveal it in a threatening way.</p>
            <p><b>WATNA</b> (worst alternative to a negotiated agreement) is the worst realistic outcome if talks break down: for example, the other offer is withdrawn and she has no job, or she pushes so hard that InnovaTech withdraws. Knowing it warns her not to overplay her hand.</p>
            <p><b>ZOPA</b> (zone of possible agreement) is the range where both sides' limits overlap: from her minimum (about Rs 5,50,000, her BATNA) to the company's maximum budget. The HR offer of Rs 5,50,000 shows the ZOPA exists. She should aim at the upper end and use non-salary items to add value within it.</p>
            <table class="tbl"><thead><tr><th>Point</th><th>Amount</th></tr></thead><tbody>
            <tr><td>Initial offer</td><td>Rs 5,00,000</td></tr><tr><td>BATNA / revised offer</td><td>Rs 5,50,000</td></tr><tr><td>Target</td><td>Rs 6,50,000</td></tr>
            </tbody></table>
            <div class="note trap"><p>BATNA is not her target salary; it is her best fallback (the other offer). ZOPA is a range, not a single figure.</p></div>
            <div class="note exam"><p>A: about 2 marks per strategy (definition plus application to Shahana) and 1 for choosing and justifying one. B: about 1.5 marks each for BATNA, WATNA and ZOPA defined and applied with the case figures, plus 0.5 for linking them to preparation.</p></div>`,
          topics: ['m5-negotiation', 'm5-negotiation-skills'],
          notes: ['m5-negotiation.4', 'm5-negotiation.2', 'm5-negotiation-skills.3', 'm5-negotiation-skills.2']
        }
      ]
    },
    {
      id: 'fat-b2tb2-2026', kind: 'actual', title: 'FAT · Slot B2+TB2 · November 2026', short: 'FAT B2+TB2 paper', sub: 'Actual paper · Fall 2026–27',
      meta: [['Slot', 'B2+TB2'], ['Month', 'November 2026'], ['Duration', '3 hours'], ['Max marks', '100']],
      instructions: `<b>General instructions:</b> PART-A (10 × 10 = 100 marks). Answer all questions. Q6 and Q7 each give two alternatives joined by (OR): answer one of them. M – Max mark; CO – Course Outcome; BL – Blooms Taxonomy Level.`,
      questions: [
        {
          n: '1', marks: 10, co: '2', bl: '2',
          prompt: `<p>Explain the dos and don'ts of effective business letter writing in a professional environment, highlighting the clarity, tone, format, and professionalism.</p>`,
          answer: `
            <p>A <b>business letter</b> is formal correspondence written in the daily course of business: cover letters, transmittal letters, customer-relations and administrative letters. Like all technical writing it needs precision, but unlike a neutral report it usually aims at a <b>call to action</b>: the reader must know what to do next.</p>
            <h4>Clarity</h4>
            <ul><li><b>Do</b> state the purpose in the first paragraph, use short sentences and concrete facts (dates, amounts, reference numbers), and end with the specific action you want.</li>
            <li><b>Don't</b> bury the request in the last line, use vague words ("soon", "some issues") or jargon the reader may not know.</li></ul>
            <h4>Tone</h4>
            <ul><li><b>Do</b> be polite, positive and reader-centred ("you will receive" rather than "we have sent"); stay courteous even in a complaint.</li>
            <li><b>Don't</b> be rude, sarcastic, over-familiar or emotional; avoid slang, emojis and SMS spellings; avoid stale phrases like "please find enclosed herewith".</li></ul>
            <h4>Format</h4>
            <ul><li><b>Do</b> follow a standard layout (full block is safest): sender's address, date, inside address, subject line, salutation, body in short paragraphs, complimentary close, signature, name and designation, enclosures.</li>
            <li><b>Don't</b> mix layouts, skip the date or subject, or write one long unbroken paragraph.</li></ul>
            <h4>Professionalism</h4>
            <ul><li><b>Do</b> proofread for grammar, spelling and correct names and titles; keep it to one page; keep a copy; reply promptly.</li>
            <li><b>Don't</b> make promises you cannot keep, include confidential details needlessly, or send a letter written in anger.</li></ul>
            <table class="tbl"><thead><tr><th>Aspect</th><th>Do</th><th>Don't</th></tr></thead><tbody>
            <tr><td>Clarity</td><td>purpose first, specific facts, clear action</td><td>vague words, jargon, hidden request</td></tr>
            <tr><td>Tone</td><td>courteous, positive, "you" view</td><td>rude, slangy, emotional</td></tr>
            <tr><td>Format</td><td>block layout, subject line, short paragraphs</td><td>missing parts, mixed layout</td></tr>
            <tr><td>Professionalism</td><td>proofread, concise, prompt</td><td>errors, overpromising</td></tr>
            </tbody></table>
            <div class="note trap"><p>Do not write only a list of letter parts. The question asks for dos and don'ts under each of the four headings.</p></div>
            <div class="note exam"><p>About 2 marks for each of the four aspects (a do and a don't with a reason) and about 2 for the definition and a clean structure or table.</p></div>`,
          topics: ['m1-business', 'm1-5cs-qualities'],
          notes: ['m1-business.0', 'm1-business.1', 'm1-email-review.5']
        },
        {
          n: '2', marks: 10, co: '2', bl: '2',
          prompt: `<p>Read the following message sent by a technical manager:</p><p>"The testing process which was supposed to be completed earlier has not yet been completed and therefore all the concerned team members are requested to complete the necessary activities as soon as possible so that the final report can be prepared and submitted without any further delay."</p><p>Analyze the message using the 5Cs of technical writing. Explain how clarity, conciseness, coherence, correctness and completeness can improve it. Rewrite the message using the 5Cs.</p>`,
          answer: `
            <p>The message is one 52-word sentence. It tells the team that something is late but not what, by when, or who must do it.</p>
            <table class="tbl"><thead><tr><th>C</th><th>Problem in the message</th><th>Fix</th></tr></thead><tbody>
            <tr><td>Clarity</td><td>"the necessary activities", "as soon as possible", "earlier" are vague</td><td>name the tasks and give an exact deadline</td></tr>
            <tr><td>Conciseness</td><td>"completed ... not yet been completed ... complete" repeats; "which was supposed to be", "without any further delay" are padding</td><td>cut repetition; use short active sentences</td></tr>
            <tr><td>Coherence</td><td>problem, request and reason are run together in one sentence</td><td>order it: status, then action, then reason, each in its own sentence</td></tr>
            <tr><td>Correctness</td><td>grammatical but passive and imprecise ("are requested"); the missing comma before "which" makes the clause hard to read</td><td>use active voice and accurate facts (dates, module names)</td></tr>
            <tr><td>Completeness</td><td>no deadline, no owner, no module, no contact for problems</td><td>add who, what, when and whom to report to</td></tr>
            </tbody></table>
            <h4>Rewritten message</h4>
            <p><b>Subject: Complete pending tests by Friday, 5 p.m.</b></p>
            <p>Team,</p>
            <p>Testing of the payment module, due last Monday, is still incomplete. Please finish your assigned test cases and log all results in the tracker by Friday, 5 p.m. We need these results to prepare the final report, which must be submitted to the client on Monday.</p>
            <p>If anything blocks your work, tell me by Wednesday.</p>
            <p>Thanks,<br>Test Manager</p>
            <p>The rewrite is clear (named task, exact deadline), concise (no repetition), coherent (status, action, reason, help), correct (active voice, specific facts) and complete (who, what, when, why). The module name and dates are examples; any specific details earn the mark.</p>
            <div class="note trap"><p>A rewrite that only shortens the sentence ("Please complete testing ASAP") loses completeness: it still has no deadline or owner.</p></div>
            <div class="note exam"><p>About 1 mark per C for the analysis (5), and about 5 for a rewrite that visibly applies all five, with a subject line and a specific deadline.</p></div>`,
          topics: ['m1-5cs-overview', 'm1-5cs-qualities', 'm1-5cs-example'],
          notes: ['m1-5cs-overview.2', 'm1-5cs-overview.3', 'm1-5cs-qualities.0', 'm1-5cs-example.1']
        },
        {
          n: '3', marks: 10, co: '3', bl: '',
          prompt: `<p><b>Grammar – Identifying Errors</b></p><p><b>A. Concord</b> – Identify and correct the error in each sentence. (5 × 1 = 5)</p><ol><li>The list of approved projects are displayed on the noticeboard.</li><li>Neither the supervisor nor the students was aware of the change.</li><li>Each of the laboratories have modern equipment.</li><li>The quality of the products depend on several factors.</li><li>The committee members discusses the proposal every Friday.</li></ol><p><b>B. Tenses</b> – Identify and correct the tense error in each sentence. (5 × 1 = 5)</p><ul><li>6. The researchers completed the experiment and now they analyse the results.</li><li>7. She is working on the project since January.</li><li>8. The company launches the product last year and has expanded its market considerably.</li><li>9. When the technician arrived, the engineers repair the machine.</li><li>10. The students submitted their proposal yesterday and are waiting for feedback since then.</li></ul>`,
          answer: `
            <h4>A. Concord</h4>
            <ol>
            <li>The list of approved projects <b>is</b> displayed on the noticeboard. <em>The subject is "list" (singular); "of approved projects" is a prepositional phrase and does not change the verb.</em></li>
            <li>Neither the supervisor nor the students <b>were</b> aware of the change. <em>With neither ... nor, the verb agrees with the nearer subject, "students" (plural).</em></li>
            <li>Each of the laboratories <b>has</b> modern equipment. <em>"Each" is singular and takes a singular verb.</em></li>
            <li>The quality of the products <b>depends</b> on several factors. <em>The head noun is "quality" (singular), not "products".</em></li>
            <li>The committee members <b>discuss</b> the proposal every Friday. <em>"Members" is plural, so the verb has no -s.</em></li>
            </ol>
            <h4>B. Tenses</h4>
            <ul>
            <li>6. The researchers completed the experiment and now they <b>are analysing</b> the results. <em>"Now" marks an action in progress: present continuous.</em></li>
            <li>7. She <b>has been working</b> on the project since January. <em>"Since" + a point in time needs the present perfect continuous for an action that began in the past and continues.</em></li>
            <li>8. The company <b>launched</b> the product last year and has expanded its market considerably. <em>"Last year" is a finished past time: simple past.</em></li>
            <li>9. When the technician arrived, the engineers <b>were repairing</b> the machine. <em>An action in progress interrupted by a past event: past continuous. ("had repaired" is also accepted if the repair was already finished.)</em></li>
            <li>10. The students submitted their proposal yesterday and <b>have been waiting</b> for feedback since then. <em>"Since then" needs the present perfect continuous.</em></li>
            </ul>
            <div class="note trap"><p>Sentences 1 and 4 hide the true subject behind an "of" phrase; match the verb to the first noun. In 2 the nearer subject decides.</p></div>
            <div class="note exam"><p>One mark each: the corrected verb is the mark. Writing the full corrected sentence with the change marked, and a one-line rule, protects the mark.</p></div>`,
          topics: ['m2-concord-rules', 'm2-concord-special', 'm2-tenses-errors'],
          notes: ['m2-concord-rules.0', 'm2-concord-rules.3', 'm2-concord-special.3', 'm2-concord-special.0']
        },
        {
          n: '4', marks: 10, co: '3', bl: '2',
          prompt: `<p><b>Grammar – Fill in the Blanks</b></p><p><b>A. Conditionals</b> – Complete each sentence with the appropriate form of the verb in brackets. (5 × 1 = 5)</p><ol><li>If the company ____ the safety guidelines, the accident could have been avoided. (follow)</li><li>If students practise regularly, they ____ their communication skills. (improve)</li><li>If the machine overheats, it ____ automatically. (shut down)</li><li>If the researchers had collected more data, the findings ____ more reliable. (be)</li><li>If I were the project coordinator, I ____ the deadline. (extend)</li></ol><p><b>B. Voice</b> – Complete each sentence using the appropriate active or passive form. (5 × 1 = 5)</p><ul><li>6. The final report ____ by the research team yesterday. (submit)</li><li>7. The engineers ____ the prototype at present. (test)</li><li>8. The results ____ in the next phase of the study. (analyse)</li><li>9. The university ____ several workshops on communication skills every semester. (conduct)</li><li>10. The equipment ____ before the experiment began. (calibrate)</li></ul>`,
          answer: `
            <h4>A. Conditionals</h4>
            <ol>
            <li>If the company <b>had followed</b> the safety guidelines, the accident could have been avoided. <em>Third conditional (unreal past): if + past perfect, could have + past participle.</em></li>
            <li>If students practise regularly, they <b>will improve</b> their communication skills. <em>First conditional (real future): if + present, will + base verb.</em></li>
            <li>If the machine overheats, it <b>shuts down</b> automatically. <em>Zero conditional (general truth, how a machine always works): if + present, present.</em></li>
            <li>If the researchers had collected more data, the findings <b>would have been</b> more reliable. <em>Third conditional: would have + past participle.</em></li>
            <li>If I were the project coordinator, I <b>would extend</b> the deadline. <em>Second conditional (unreal present, "if I were"): would + base verb.</em></li>
            </ol>
            <h4>B. Voice</h4>
            <ul>
            <li>6. The final report <b>was submitted</b> by the research team yesterday. <em>Passive (the report receives the action; "by the team"), simple past for "yesterday": was + past participle.</em></li>
            <li>7. The engineers <b>are testing</b> the prototype at present. <em>Active (the engineers do the action), present continuous for "at present".</em></li>
            <li>8. The results <b>will be analysed</b> in the next phase of the study. <em>Passive future: will be + past participle.</em></li>
            <li>9. The university <b>conducts</b> several workshops on communication skills every semester. <em>Active, simple present for a habit ("every semester"); singular subject takes -s.</em></li>
            <li>10. The equipment <b>had been calibrated</b> before the experiment began. <em>Passive past perfect: the calibration finished before another past action.</em></li>
            </ul>
            <div class="note trap"><p>Q3 is a zero conditional, not first: a machine's built-in behaviour is a general truth. "will shut down" may still get credit, but "shuts down" is the best answer. In voice, ask first whether the subject does the action or receives it.</p></div>
            <div class="note exam"><p>One mark per blank. Spell the verb form fully (had followed, would have been, had been calibrated); a missing auxiliary loses the mark.</p></div>`,
          topics: ['m2-cond-basics', 'm2-cond-unreal', 'm2-voice-tenses'],
          notes: ['m2-cond-basics.0', 'm2-cond-basics.2', 'm2-cond-unreal.3', 'm2-cond-unreal.0']
        },
        {
          n: '5', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write clear and concise technical definitions for the following 5 terms:</p><div class="chips"><span class="chip">1. Artificial Intelligence</span><span class="chip">2. Machine Learning</span><span class="chip">3. Cybersecurity</span><span class="chip">4. Internet of Things</span><span class="chip">5. Cloud Computing</span></div>`,
          answer: `
            <p>Each answer is a sentence definition (<b>term + class + distinguishing features</b>) with one clarifying example, about 30–40 words.</p>
            <p><b>1. Artificial Intelligence</b> Artificial intelligence (AI) is a branch of computer science that builds systems able to perform tasks that normally need human intelligence, such as understanding language, recognising images, reasoning and making decisions; voice assistants are a common example.</p>
            <p><b>2. Machine Learning</b> Machine learning is a branch of artificial intelligence in which computer programs learn patterns from data and improve their performance with experience, without being explicitly programmed for each task; spam filters that learn from marked emails are an example.</p>
            <p><b>3. Cybersecurity</b> Cybersecurity is the practice of protecting computers, networks, programs and data from unauthorised access, attacks and damage, using tools such as firewalls, encryption, strong passwords and regular software updates.</p>
            <p><b>4. Internet of Things</b> The Internet of Things (IoT) is a network of everyday physical devices fitted with sensors, software and connectivity so that they collect and exchange data over the internet, such as smart meters, fitness bands and home thermostats.</p>
            <p><b>5. Cloud Computing</b> Cloud computing is a method of delivering computing services, such as storage, processing power and software, over the internet on demand, so that users pay for what they use instead of owning servers; online file storage is an example.</p>
            <table class="tbl"><thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead><tbody>
            <tr><td>Artificial Intelligence</td><td>a branch of computer science</td><td>systems doing tasks that need human intelligence</td></tr>
            <tr><td>Machine Learning</td><td>a branch of AI</td><td>learns from data, improves with experience, not explicitly programmed</td></tr>
            <tr><td>Cybersecurity</td><td>a practice</td><td>protects systems and data from unauthorised access and attacks</td></tr>
            <tr><td>Internet of Things</td><td>a network of physical devices</td><td>sensors and connectivity; exchange data over the internet</td></tr>
            <tr><td>Cloud Computing</td><td>a method of delivering computing services</td><td>over the internet, on demand, pay per use</td></tr>
            </tbody></table>
            <div class="note trap"><p>Do not define a term with itself ("cloud computing is computing in the cloud") or start with "is when". Name the class first.</p></div>
            <div class="note exam"><p>Two marks each: a precise class and at least two distinguishing features. An example helps but cannot replace the class.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.2']
        },
        {
          n: '6', marks: 10, co: '4', bl: '3',
          prompt: `<p><b>a) Reading Comprehension (Inferencing)</b></p><p>Digital learning platforms have made education more accessible by allowing students to attend online classes, access recorded lectures, and use digital resources at their convenience. However, the availability of these resources does not always lead to effective learning. Some students collect study materials without spending sufficient time understanding the concepts. Others depend entirely on recorded lectures and postpone their learning activities, assuming that they can complete everything before examinations.</p><p>Effective digital learning requires more than access to technology. Students must plan their schedules, set realistic learning goals, and complete tasks within the allotted time. Without proper time management, even well-designed online courses may fail to produce meaningful learning outcomes. Active participation is equally important because asking questions, participating in discussions, and applying concepts help students develop a deeper understanding of the subject.</p><p>Faculty members also play an important role in digital learning. Their feedback helps students identify mistakes, improve their understanding, and monitor their progress. When students ignore feedback or fail to seek clarification, learning gaps may remain unnoticed until assessments. Therefore, technology should be viewed as a tool that supports learning rather than a substitute for personal effort. Ultimately, successful digital learning depends on the combined efforts of students, faculty members, and the effective use of technology.</p><p><b>Questions</b></p><ol><li>Why does access to digital resources not necessarily guarantee effective learning?</li><li>What can be inferred about students who depend entirely on recorded lectures?</li><li>Why is time management important in digital learning?</li><li>What role does faculty feedback play in improving students' learning outcomes?</li><li>What does the passage suggest about the relationship between technology and learner responsibility?</li></ol><p><b>(OR)</b></p><p><b>b)</b> Explain the structure of a research article and discuss the purpose of the Title, Abstract, Introduction, Literature Review, Methodology, Results, Discussion, Conclusion and References.</p>`,
          answer: `
            <h4>a) Reading comprehension</h4>
            <p><b>1.</b> Because having material is not the same as learning it. The passage says "the availability of these resources does not always lead to effective learning": some students "collect study materials without spending sufficient time understanding the concepts", and others put off their work. Learning needs time, effort and understanding, not just access.</p>
            <p><b>2.</b> They are likely to fall behind and learn poorly. They "postpone their learning activities, assuming that they can complete everything before examinations", so we can infer they procrastinate, overestimate how much they can do at the last minute, and end with shallow understanding and gaps found only at assessment time.</p>
            <p><b>3.</b> Because without it even good courses fail. Students "must plan their schedules, set realistic learning goals, and complete tasks within the allotted time"; "without proper time management, even well-designed online courses may fail to produce meaningful learning outcomes". Online learning is self-paced, so the student must supply the discipline a timetable would.</p>
            <p><b>4.</b> Feedback "helps students identify mistakes, improve their understanding, and monitor their progress". It closes learning gaps early; when students ignore it or do not seek clarification, "learning gaps may remain unnoticed until assessments".</p>
            <p><b>5.</b> Technology supports learning but cannot replace the learner's effort: it "should be viewed as a tool that supports learning rather than a substitute for personal effort". Responsibility stays with the learner, working together with faculty and technology ("the combined efforts").</p>
            <div class="note exam"><p>Two marks each: one for the answer in your own words, one for the clue quoted from the passage. For the "inferred" question, go one step beyond the text and say what follows from it.</p></div>
            <h4>b) Structure of a research article</h4>
            <p>A research article follows the <b>IMRaD</b> pattern (Introduction, Methods, Results and Discussion), framed by front matter (title, abstract) and back matter (conclusion, references), so readers can find each kind of information in a predictable place.</p>
            <table class="tbl"><thead><tr><th>Section</th><th>Purpose</th></tr></thead><tbody>
            <tr><td>Title</td><td>states the topic and main variables in a few precise words so the paper is found and judged quickly</td></tr>
            <tr><td>Abstract</td><td>a 150–250-word standalone summary of purpose, method, key results and conclusion</td></tr>
            <tr><td>Introduction</td><td>gives background, the problem, the gap and the aim or research question (funnel from general to specific)</td></tr>
            <tr><td>Literature review</td><td>surveys and synthesises earlier studies, shows what is known and the gap this study fills</td></tr>
            <tr><td>Methodology</td><td>describes design, participants or materials, procedure and analysis in enough detail to be repeated</td></tr>
            <tr><td>Results</td><td>reports findings objectively, with tables and figures, without interpretation</td></tr>
            <tr><td>Discussion</td><td>interprets results, compares them with earlier studies, explains implications and limitations</td></tr>
            <tr><td>Conclusion</td><td>restates the main contribution and suggests future work</td></tr>
            <tr><td>References</td><td>lists every source cited, in one citation style, so readers can check them and credit is given</td></tr>
            </tbody></table>
            <p>Together the sections answer: what was studied and why (title, abstract, introduction, review), how (methods), what was found (results), what it means (discussion, conclusion) and on whose work it builds (references).</p>
            <div class="note trap"><p>Do not mix results and discussion: results report, discussion interprets.</p></div>
            <div class="note exam"><p>About 1 mark per section (nine) plus 1 for naming the IMRaD structure. A table is the fastest way to cover all nine.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice', 'm4-paper-parts'],
          notes: ['m3-inference.0', 'm3-inference.1', 'm4-paper-parts.1', 'm4-paper-parts.2']
        },
        {
          n: '7', marks: 10, co: '1', bl: '3',
          prompt: `<p><b>a) Types of Reviews:</b> Explain Narrative Review, Systematic Review, Scoping Review, Critical Review and Literature Review. State the purpose and distinguishing feature of each.</p><p><b>(OR)</b></p><p><b>b) Literature Review.</b> Topic: AI Tools and Academic Writing among University Students</p><p><b>Abstract 1: AI Tools and Writing Efficiency</b><br>A study conducted among university students examined the use of artificial intelligence tools such as ChatGPT for academic writing. The findings indicated that these tools helped students generate ideas, organise paragraphs, improve grammar, and save time. However, some students relied heavily on AI-generated content instead of developing their own writing skills. The study recommended guided use of AI tools to support learning rather than replace independent writing.</p><p><b>Abstract 2: Academic Integrity and Ethical Concerns</b><br>Research on AI-assisted academic writing explored concerns related to plagiarism, authorship, and the accuracy of AI-generated information. The findings revealed that students sometimes submitted AI-generated content without verifying facts or acknowledging the assistance received. Faculty members expressed concerns about assessing students' actual writing abilities. The study emphasised the need for clear institutional guidelines, ethical awareness, and responsible use of AI in academic assignments.</p><p><b>Abstract 3: Student Attitudes and Critical Thinking</b><br>A survey investigating university students' attitudes towards AI writing tools found that many students considered them useful for brainstorming, summarising, and editing academic texts. However, opinions differed regarding their influence on creativity and critical thinking. Some students believed AI encouraged independent exploration, while others felt that excessive dependence could reduce original thinking. The study suggested integrating AI literacy and critical evaluation skills into higher education.</p><p><b>Question (10 Marks):</b> Using the three short abstracts provided on "AI Tools and Academic Writing among University Students", write a concise literature review of approximately 200 words. Synthesise common findings, differences, concerns, and the overall research trend rather than summarising the abstracts separately.</p>`,
          answer: `
            <h4>a) Types of reviews</h4>
            <table class="tbl"><thead><tr><th>Review</th><th>Purpose</th><th>Distinguishing feature</th></tr></thead><tbody>
            <tr><td>Narrative review</td><td>summarise and interpret the literature on a topic to give contextual understanding</td><td>no systematic search method; flexible, may include expert opinion, so prone to bias</td></tr>
            <tr><td>Systematic review</td><td>answer one specific research question comprehensively</td><td>explicit, rigorous, reproducible search with quality assessment of each study; evidence-based conclusions and gaps</td></tr>
            <tr><td>Scoping review</td><td>map the existing literature on a broad topic: key concepts, types of evidence, gaps</td><td>broad scope, exploratory; may not formally assess quality; often precedes a systematic review</td></tr>
            <tr><td>Critical review</td><td>critique and evaluate the literature to build new concepts or theory</td><td>goes beyond description to analysis; can interpret conflicting findings</td></tr>
            <tr><td>Literature review</td><td>survey published work on a topic to show what is known and where the gap lies, usually as part of a paper or thesis</td><td>a general term; in the course material it is treated as another name for the traditional narrative review, organised by themes</td></tr>
            </tbody></table>
            <p>In short: the narrative and literature review <b>describe</b>, the systematic review <b>answers</b> a narrow question with strict method, the scoping review <b>maps</b> a wide field, and the critical review <b>evaluates</b> and theorises.</p>
            <div class="note exam"><p>Two marks per type: one for purpose, one for the feature that separates it from the others (search method, scope, quality assessment, or critique).</p></div>
            <h4>b) Literature review (about 200 words)</h4>
            <p>Recent studies agree that AI writing tools such as ChatGPT are now widely used by university students and offer real practical benefits. Students use them to generate ideas, brainstorm, organise paragraphs, summarise sources, improve grammar and edit drafts, and they report that the tools save time (Abstracts 1 and 3). The research, however, also identifies a common risk: heavy dependence. Students who rely on AI-generated text may fail to develop their own writing skills (Abstract 1) and, according to some, their original thinking (Abstract 3).</p>
            <p>Where the studies differ is in emphasis and in students' views. One strand focuses on efficiency, another on ethics. Integrity research highlights plagiarism, unclear authorship and inaccurate AI output, noting that students sometimes submit unverified, unacknowledged content and that faculty find it hard to assess real ability (Abstract 2). Student opinion is itself divided: some feel AI encourages independent exploration, while others fear it weakens creativity and critical thinking (Abstract 3).</p>
            <p>The overall trend is a shift from asking whether AI helps to asking how it should be used. All three studies recommend guided, responsible use, supported by institutional guidelines and the teaching of AI literacy and critical evaluation skills.</p>
            <table class="tbl"><thead><tr><th>Move</th><th>Where</th></tr></thead><tbody>
            <tr><td>Common findings (benefits)</td><td>paragraph 1, sentences 1–2</td></tr>
            <tr><td>Shared concern (dependence)</td><td>paragraph 1, end</td></tr>
            <tr><td>Differences and ethical concerns</td><td>paragraph 2</td></tr>
            <tr><td>Research trend and recommendation</td><td>paragraph 3</td></tr>
            </tbody></table>
            <div class="note trap"><p>Three paragraphs that each summarise one abstract ("Abstract 1 says ... Abstract 2 says ...") is a summary, not a synthesis, and loses most marks. Organise by theme and cite abstracts inside each theme.</p></div>
            <div class="note exam"><p>Marks go to synthesis by theme, coverage of findings, differences, concerns and trend, and staying near 200 words.</p></div>`,
          topics: ['m4-review-types', 'm4-review-practice'],
          notes: ['m4-review-types.1', 'm4-review-types.4', 'm4-review-practice.0']
        },
        {
          n: '8', marks: 10, co: '6', bl: '3',
          prompt: `<p>Explain the importance of interpersonal communication in a professional environment. Discuss any three of the following skills – active listening, empathy, non-verbal communication, feedback, and emotional awareness – and explain how they contribute to effective teamwork and conflict resolution with suitable examples.</p>`,
          answer: `
            <p><b>Interpersonal communication</b> is the face-to-face or mediated exchange of information, ideas and feelings between people, through both verbal and non-verbal messages. At work it matters because:</p>
            <ul><li>it builds trust and working relationships within teams and with clients;</li>
            <li>it prevents misunderstandings that waste time and cause errors;</li>
            <li>it lets people coordinate tasks and share knowledge;</li>
            <li>it allows disagreements to be raised and settled early, before they become conflicts.</li></ul>
            <h4>1. Active listening</h4>
            <p>Giving full attention to the speaker, not interrupting, asking clarifying questions and paraphrasing to check understanding. <b>Teamwork:</b> members feel heard and instructions are understood correctly. <b>Conflict:</b> each side's real concern surfaces. <em>Example:</em> in a sprint review a developer complains about deadlines; the lead paraphrases, "So the issue is that testing time was cut?", and the real problem is fixed instead of argued about.</p>
            <h4>2. Empathy</h4>
            <p>Understanding a situation from the other person's point of view and acknowledging their feelings. <b>Teamwork:</b> creates trust and support. <b>Conflict:</b> lowers defensiveness, so people move from blaming to problem solving. <em>Example:</em> a teammate misses a deadline because of illness; the manager first acknowledges the difficulty, then re-plans the work, and the teammate stays committed.</p>
            <h4>3. Non-verbal communication</h4>
            <p>Messages sent through eye contact, facial expression, posture, gestures, tone of voice and use of space. <b>Teamwork:</b> open posture and eye contact show interest and respect. <b>Conflict:</b> a calm tone and relaxed body language reduce tension, while crossed arms or eye-rolling make it worse. <em>Example:</em> in a heated meeting a leader lowers their voice, keeps eye contact and nods, and the discussion calms.</p>
            <p>Together these skills turn disagreement into collaboration: listening finds the issue, empathy keeps the relationship, and non-verbal cues keep the tone respectful.</p>
            <div class="note trap"><p>Discuss exactly three skills, each linked to both teamwork and conflict resolution, with an example. A list of definitions alone loses the application marks.</p></div>
            <div class="note exam"><p>About 2 marks for the importance, about 2–3 marks per skill: definition, how it helps teamwork and conflict, and a workplace example.</p></div>`,
          topics: ['m5-ipc-basics', 'm5-ipc-listening', 'm5-ipc-nonverbal'],
          notes: ['m5-ipc-basics.1', 'm5-ipc-basics.5', 'm5-ipc-listening.1', 'm5-ipc-nonverbal.3']
        },
        {
          n: '9', marks: 10, co: '6', bl: '3',
          prompt: `<p><b>Leadership Styles</b></p><p>A team leader at a software company invites team members to share their opinions before making decisions about a new project. The leader encourages open discussion, considers different suggestions, and allows the team to participate in deciding how the work should be completed. This approach helps employees feel valued and involved in the project.</p><p>Answer the following questions:</p>`,
          parts: [
            { text: '(a) Identify the leadership style adopted by the team leader.', marks: 2 },
            { text: '(b) State one characteristic of this leadership style.', marks: 2 },
            { text: '(c) Explain how this leadership style encourages employee participation.', marks: 2 },
            { text: '(d) How does this leadership style contribute to team decision-making?', marks: 2 },
            { text: '(e) Explain how this leadership style can improve employee motivation.', marks: 2 }
          ],
          answer: `
            <p><b>(a)</b> <b>Democratic (participative) leadership.</b> Evidence: the leader "invites team members to share their opinions before making decisions" and "allows the team to participate in deciding how the work should be completed". Its focus is collaborative decision-making within the team.</p>
            <p><b>(b)</b> <b>Open communication and shared input:</b> all members contribute their skills and expertise, and the leader rewards innovative ideas while keeping the final responsibility. (Other accepted characteristics: teamwork, adaptability, unity and active participation.)</p>
            <p><b>(c)</b> Because opinions are asked for before the decision, members know their input can change the outcome, so they speak up. The leader "encourages open discussion" and "considers different suggestions", which makes participation safe and worthwhile.</p>
            <p><b>(d)</b> Decisions draw on many viewpoints and the team's combined expertise, so options are examined more fully and blind spots are caught. Because the team helped decide "how the work should be completed", it accepts and carries out the decision more readily. The cost is slower decisions, so the leader must set a time limit.</p>
            <p><b>(e)</b> Members "feel valued and involved", which the course lists as the main benefit: higher job satisfaction, commitment and engagement. A sense of ownership over the project makes people work harder for its success.</p>
            <div class="note trap"><p>Do not answer "laissez-faire": the leader still guides the discussion and makes the decision with the team; a laissez-faire leader hands decisions over entirely.</p></div>
            <div class="note exam"><p>Two marks per part: one for the point, one for the evidence from the case or a reason. Name the style exactly ("democratic") in (a).</p></div>`,
          topics: ['m5-lead-eight-styles', 'm5-lead-style-models'],
          notes: ['m5-lead-eight-styles.2', 'm5-lead-style-models.0']
        },
        {
          n: '10', marks: 10, co: '6', bl: '3',
          prompt: `<p><b>Case Study – Negotiation Skills (10 Marks)</b></p><p>A candidate has been selected for a software developer position in a reputed company. During salary negotiations, the company offers an annual compensation package of Rs 25,00,000, while the candidate expects Rs 30,00,000 based on their qualifications and skills. The company explains that the offer is based on its current salary structure, while the candidate highlights their technical expertise and project experience. Both parties are interested in reaching an agreement that meets their expectations and allows the candidate to join the organisation. The stated amounts refer to annual compensation packages and may include fixed salary and variable components rather than representing fixed salaries alone.</p><p>Answer the following questions.</p>`,
          parts: [
            { text: '(a) Identify the interests of both the candidate and the company.', marks: 2 },
            { text: "(b) Distinguish between the candidate's stated salary expectation and underlying interest.", marks: 2 },
            { text: '(c) Suggest one component of the compensation package that could be negotiated apart from the fixed salary.', marks: 2 },
            { text: '(d) Propose one win-win solution that could satisfy both parties.', marks: 2 },
            { text: '(e) Identify one communication skill that would help the candidate negotiate effectively.', marks: 2 }
          ],
          answer: `
            <p><b>(a)</b> <b>Candidate:</b> fair recognition of their technical expertise and project experience, financial security, and joining a reputed company with room to grow. <b>Company:</b> hiring a skilled developer while keeping to its current salary structure (internal fairness and budget control). <b>Shared interest:</b> both want an agreement so the candidate joins.</p>
            <p><b>(b)</b> The <b>stated expectation (position)</b> is the figure the candidate asks for: Rs 30,00,000 a year. The <b>underlying interest</b> is why they want it: to be valued fairly for their skills and experience, and to have financial security and career growth. A position is one fixed demand; an interest can be met in several ways, which is what makes agreement possible.</p>
            <p><b>(c)</b> A <b>performance-linked variable pay or joining bonus</b> (other valid answers: stock options, a guaranteed salary review after six months, certification and training budget, relocation allowance, flexible or remote work).</p>
            <p><b>(d)</b> <b>Win-win (integrative) solution:</b> keep the fixed salary within the company's structure, for example at about Rs 25,00,000, but add a one-time joining bonus and performance-linked variable pay that can take the total package towards Rs 30,00,000, plus a salary review after six months. The company protects its structure and pays more only for proven performance; the candidate's skills are recognised and the expected total is reachable.</p>
            <p><b>(e)</b> <b>Active listening</b>: by listening to the company's reasons (its salary structure) and asking clarifying questions, the candidate learns which parts of the package are flexible and can frame requests that fit them. (Clear, confident assertive speaking that links the request to specific skills and projects is also accepted.)</p>
            <div class="note trap"><p>Do not split the difference at Rs 27,50,000 and call it win-win: that is a compromise in which both lose something. Win-win expands the package with components that cost the company little or depend on performance.</p></div>
            <div class="note trap"><p>The candidate should also know their BATNA (best alternative to a negotiated agreement), such as another offer, and not reveal it; it sets the point at which they would walk away.</p></div>
            <div class="note exam"><p>Two marks per part: name the concept (interest, position, integrative solution, skill) and tie it to the facts of the case.</p></div>`,
          topics: ['m5-negotiation', 'm5-negotiation-skills'],
          notes: ['m5-negotiation.3', 'm5-negotiation.2', 'm5-negotiation-skills.4']
        }
      ]
    }
  ]
});
