PAPERS({
  papers: [
    {
      id: 'model-02', kind: 'model', title: 'Model paper 2', short: 'Model paper 2', sub: 'Same pattern as CAT-2 · Passage: microplastics',
      meta: [['Pattern', 'Same as CAT-2 (B1+TB1)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions for the following words in about 30 words each.</p><div class="chips"><span class="chip">a) Router</span><span class="chip">b) Meme</span><span class="chip">c) Malware</span><span class="chip">d) Internship</span><span class="chip">e) Carpool</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) Router</b> A router is a networking device that forwards data packets between computer networks and directs internet traffic to the right devices, such as the Wi-Fi box that connects a hostel's laptops and phones.</p>
            <p><b>b) Meme</b> A meme is a humorous image, video or short piece of text that internet users copy and spread rapidly, often with small changes, such as a film still with a new caption about exams.</p>
            <p><b>c) Malware</b> Malware is harmful software designed to damage, disrupt or gain unauthorised access to a computer or network without the owner's consent, for example ransomware, which locks files until a payment is made.</p>
            <p><b>d) Internship</b> An internship is a fixed period of supervised work experience that a student or recent graduate takes up in an organisation to learn practical skills in a field, such as eight weeks in a design firm.</p>
            <p><b>e) Carpool</b> A carpool is an arrangement in which several people who travel the same route share one private car, usually splitting fuel costs, which reduces traffic and pollution, for example colleagues driving together to an office.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Router</td><td>a networking device</td><td>forwards data between networks, directs traffic to devices</td></tr>
                <tr><td>Meme</td><td>a humorous image, video or text</td><td>copied and spread rapidly, often changed slightly</td></tr>
                <tr><td>Malware</td><td>harmful software</td><td>damages, disrupts or gains access without consent</td></tr>
                <tr><td>Internship</td><td>a fixed period of supervised work experience</td><td>taken by a student or graduate to learn practical skills</td></tr>
                <tr><td>Carpool</td><td>an arrangement</td><td>people on the same route share one car and its costs</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"A meme is when a picture goes viral" uses "is when" and has no class. "Malware is bad software" has a class but no features, so it could describe a buggy app. Give the class, then what makes this item different from others in the class.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the passage given below and answer the following questions.</p>`,
          passage: `<p>Microplastics are pieces of plastic smaller than five millimetres, about the size of a sesame seed or much smaller. A few are made small on purpose, such as the microbeads once added to face scrubs and toothpaste. Most, however, come from larger items breaking down: a plastic bottle left in the sun, a car tyre wearing away on the road, or a polyester shirt shedding fibres in the washing machine.</p>
            <p>Because plastic lasts so long, these particles have spread almost everywhere scientists have looked. They have been found in the deep ocean, in mountain snow, in tap and bottled water, in sea salt and in fish. More recently, researchers have reported traces of plastic in human blood, lungs and placentas. A person may swallow or breathe in tens of thousands of particles a year, although estimates vary widely between studies.</p>
            <p>What this means for health is far less clear. Laboratory studies show that very high doses can cause inflammation in cells and in animals, and some plastics carry added chemicals that are known to disturb hormones. But the doses used in laboratories are often much larger than what people actually take in. Measuring tiny particles in human tissue is also difficult, since samples are easily contaminated by plastic in the laboratory itself. At present, scientists can say that microplastics are inside us, but not how much harm, if any, they cause.</p>
            <p>Some governments have not waited for certainty. Several countries, including the United Kingdom and the United States, have banned microbeads in rinse-off cosmetics, and many have restricted single-use plastic items. These rules are fairly easy to enforce because cheap alternatives exist, such as ground walnut shell in scrubs. Yet microbeads were only ever a small share of the problem.</p>
            <p>The larger sources are harder to tackle. Filters fitted to washing machines can catch many clothing fibres, and some manufacturers now offer them, but most machines in use have none. Wastewater treatment plants remove most particles from sewage, but the captured sludge is often spread on farmland as fertiliser, returning the plastic to the soil. Tyre wear has no simple fix at all, short of fewer and lighter vehicles.</p>
            <p>Waiting for perfect evidence before acting may mean acting too late, since plastic already in the environment cannot be collected again. Equally, alarming headlines about "plastic in our blood" run ahead of what the science can show. A sensible response is to cut the sources we can control, especially needless single-use plastic, while funding careful research into the effects we still do not understand.</p>`,
          parts: [
            { text: 'Where do most microplastics come from, according to the passage?', marks: 2 },
            { text: 'Why can scientists not yet say how much harm microplastics cause to human health?', marks: 2 },
            { text: 'Does the author believe that governments should wait for clear proof of harm before acting on microplastics? Justify your answer with reference to the passage.', marks: 3 },
            { text: 'What can be inferred about how well washing-machine filters and sewage treatment keep microplastics out of the environment? Justify your answer with reference to the passage.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> Most come from <b>larger plastic items breaking down</b>, not from pieces made small on purpose. The passage gives three examples: "a plastic bottle left in the sun", a car tyre wearing away on the road, and a polyester shirt shedding fibres in the washing machine. Microbeads in face scrubs and toothpaste are made small deliberately, but they are the minor source (paragraph 1).</p>
            <p><b>2.</b> Laboratory studies use doses "often much larger than what people actually take in", so their results may not match real life. Measuring tiny particles in human tissue is also difficult, because samples are easily contaminated by plastic in the laboratory itself. So scientists know microplastics are "inside us", but not "how much harm, if any, they cause" (paragraph 3).</p>
            <p><b>3.</b> <b>No.</b> The author notes that "Some governments have not waited for certainty" and describes their microbead bans without criticism. The last paragraph warns that "Waiting for perfect evidence before acting may mean acting too late", because plastic already in the environment cannot be collected again. The author wants action on the sources we can control now, alongside research, not research first and action later.</p>
            <p><b>4.</b> They <b>help, but only partly</b>. Filters catch "many" clothing fibres, not all, and "most machines in use have none". Treatment plants remove most particles from sewage, but the sludge is "often spread on farmland", "returning the plastic to the soil". So much of the plastic is moved from water to land rather than removed, which is why the author calls these sources "harder to tackle".</p>
            <div class="note trap"><p>The author is balanced, not alarmist: paragraph 6 also says headlines about "plastic in our blood" run ahead of the science. Answer 3 is still "no", because the author asks for action and research together. Do not read the call for research as a call to wait.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the passage below and write a concise abstract in 100–120 words.</p>`,
          passage: `<p>Large hostel messes in Indian universities cook for thousands of students every day, and a good part of that food ends up in the bin. Wardens suspect that the way food is served affects waste. Researchers therefore investigated whether letting students serve themselves, instead of receiving fixed portions, changes the amount of food thrown away. The study was carried out in three hostels of a university in Tamil Nadu between January and March 2026.</p>
            <p>Each hostel housed about 600 students. Hostel A continued with fixed portions served by mess staff. Hostel B moved to full self-service, and Hostel C kept fixed portions but allowed students to ask for smaller or extra helpings. For eight weeks, staff collected the food left on plates after lunch and dinner and weighed it every day. The researchers also surveyed 450 students, 150 from each hostel, about their satisfaction with the meals.</p>
            <p>Plate waste in Hostel B averaged 58 grams per student per meal, compared with 96 grams in Hostel A and 71 grams in Hostel C. Rice made up almost half of the waste in all three hostels. Satisfaction was highest in Hostel B, at 3.9 out of 5, against 3.2 in Hostel A. However, the total amount of food cooked in Hostel B rose by about 6 per cent, because the kitchen found it harder to predict demand, and queues at the counters grew longer at peak times. The study also did not measure food left over in the serving pots.</p>
            <p>The researchers concluded that self-service can cut plate waste by around 40 per cent compared with fixed portions and can make students more satisfied with their meals. They recommended that hostel messes offer self-service or flexible portions, use smaller serving spoons for rice, and record leftovers in serving pots to plan cooking better. They also called for similar studies across more universities and over a full academic year.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study investigated whether self-service in hostel messes reduces food waste compared with fixed portions. It covered three hostels of about 600 students each at a university in Tamil Nadu from January to March 2026. One hostel kept fixed portions, one moved to self-service and one offered flexible portions. Plate waste after lunch and dinner was weighed daily for eight weeks, and 450 students were surveyed on satisfaction. Plate waste averaged 58 grams per student per meal with self-service, against 96 with fixed and 71 with flexible portions. Satisfaction was highest with self-service, but food cooked rose by about 6 per cent. Serving-pot leftovers were not measured. The researchers recommended self-service or flexible portions.</p>
            <p><small>114 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method: where, when, the three set-ups and how waste was measured (sentences 2–4) → findings with the key numbers, including the rise in cooking (sentences 5–6) → limitation and recommendation (sentences 7–8). Past tense, third person, no opinion. The detail about rice and the longer queues was dropped to stay under 120 words; the unmeasured serving-pot waste stays because it limits what the finding shows.</p></div>`,
          topics: ['m4-abstract', 'm4-steps']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the case study given below and answer the following questions in 50–80 words.</p>`,
          passage: `<p>Varun is the floor representative of a hostel block. The four students sharing Room 214 have argued for two weeks about the air conditioner and how to split the room's monthly electricity bill of about ₹3,200. They have asked Varun to settle it.</p>
            <p><b>Harish, second-year mechanical student:</b> Harish wants the AC at 18°C from evening until morning. He says he paid for the room like everyone else and will use it as he likes, switches it back on whenever someone turns it off, and refuses to discuss the bill.</p>
            <p><b>Joel, second-year civil student:</b> Joel finds the room too cold at night and would rather keep the AC off, but he does not say so. He wears a sweater to bed and pays an equal quarter of the bill without complaint, because he does not want the room to feel tense.</p>
            <p><b>Faisal, second-year chemical student:</b> Faisal suggests running the AC at 24°C from 10 p.m. to 4 a.m. only, with Harish paying a slightly larger share since he uses it most. He admits it will not suit anyone perfectly, but says each person should give a little so the matter is settled this week.</p>
            <p><b>Manoj, second-year electrical student:</b> Manoj stays in the library until late, has muted the room's group chat, and says "let's talk about it after the exams" whenever the topic comes up.</p>
            <p>Varun wants a fair arrangement that ends the arguments before the next bill arrives and keeps the four roommates on good terms.</p>`,
          parts: [
            { text: 'a) Identify and explain the conflict-management style shown by each of the following: Harish, Joel, Faisal and Manoj.', marks: 5 },
            { text: 'b) What would be your advice to Varun to help the roommates settle the dispute before the next bill?', marks: 5 }
          ],
          answer: `
            <h4>a) Styles</h4>
            <p>Harish is <b>competing</b>: he insists on 18°C all night, switches the AC back on and refuses to discuss the bill. Joel is <b>accommodating</b>: he dislikes the cold but stays quiet, wears a sweater and pays an equal share to keep the peace. Faisal is <b>compromising</b>: he proposes set hours, a milder temperature and a larger share for Harish, with everyone giving a little. Manoj is <b>avoiding</b>: he stays away and postpones the topic.</p>
            <p><small>73 words</small></p>
            <h4>b) Advice to Varun</h4>
            <p>Varun should use <b>compromise</b>, as Faisal suggests. The stakes are low, the bill is due soon, and the four must keep living together, so a quick, fair middle ground fits. He should meet all four, hear Joel and Manoj too, and write a rule: AC at 24°C from 10 p.m. to 4 a.m., the basic bill shared equally, the AC share by use. All four sign it and review it after a month.</p>
            <p><small>73 words</small></p>
            <div class="note why"><p>Joel and Manoj both stay quiet, but for different reasons. Joel gives up his own comfort and pays to keep harmony, which is accommodating. Manoj pulls out of the issue altogether and puts it off, which is avoiding. Collaboration is not needed here: the issue is small and repeats every month, so a clear written rule that feels fair matters more than a long search for a perfect answer.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You are a final-year B.Tech Computer Science and Engineering student at VIT applying for a two-year MS in Artificial Intelligence at a university in Germany. Write a Statement of Purpose (SOP) of about 200–250 words addressed to the admissions committee, explaining why you should be admitted to the programme.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Admissions Committee,</p>
            <p>I am a final-year B.Tech Computer Science and Engineering student at VIT, India, and I am applying for the two-year MS in Artificial Intelligence at your university. I want to build a strong base in machine learning research and learn how AI systems are made reliable in real use.</p>
            <p>I hold a CGPA of 8.9 out of 10 after seven semesters, with my best grades in Linear Algebra, Probability and Machine Learning. For my final-year project, two classmates and I are training a neural network to detect leaf diseases in tomato plants from phone photos; it now reaches 91% accuracy on 2,000 test images. During a six-week internship at a Bengaluru start-up, I cleaned support data and tested a text classifier that sorted about 3,000 tickets a day.</p>
            <p>German universities are known for linking research closely with industry, and a master's degree there would let me study advanced topics while working on problems that companies actually face. I would bring practical coding experience, careful testing habits, and the patience I learnt as a peer tutor in data structures for two semesters. I have completed the A1 level in German and am now studying for A2.</p>
            <p>After the degree, I hope to work as a machine learning engineer building AI tools for agriculture. I would be grateful for the chance to study at your university, and I thank the committee for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>243 words</small></p>
            <div class="note exam"><p>How it was built: opening (who you are, the exact programme, why) → academic background with proof (a CGPA, a project with an accuracy figure, an internship with a number) → why this country's universities and what you bring (one safe, general fact; tutoring and a German level as evidence) → career goal and a polite close. No subheadings. A master's SoP should point forward to research or a career, as well as back to past marks.</p></div>
            <div class="note trap"><p>Do not name a professor, lab or module you have not checked; a wrong detail suggests the SoP was copied. "Known for linking research with industry" is safe. Leave out "I have always been fascinated by AI": the leaf-disease project shows it.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples']
        }
      ]
    },

    {
      id: 'model-03', kind: 'model', title: 'Model paper 3', short: 'Model paper 3', sub: 'Same pattern as CAT-2 · Passage: remote work',
      meta: [['Pattern', 'Same as CAT-2 (B1+TB1)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions for the following words in about 30 words each.</p><div class="chips"><span class="chip">a) Webcam</span><span class="chip">b) Influencer</span><span class="chip">c) Cookie (on a website)</span><span class="chip">d) Scholarship</span><span class="chip">e) Compost</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) Webcam</b> A webcam is a small digital video camera, built into or connected to a computer, that captures live images and sends them over the internet, for example during an online class or a video interview.</p>
            <p><b>b) Influencer</b> An influencer is a person with a large following on social media who shapes the opinions and buying choices of followers, often by promoting products for brands, such as a fitness creator reviewing protein bars.</p>
            <p><b>c) Cookie</b> A cookie is a small text file that a website stores in a user's browser to remember details between visits, such as a login status, a language choice or items in a shopping cart.</p>
            <p><b>d) Scholarship</b> A scholarship is a sum of money awarded to a student by a university, government or organisation to pay for education, usually based on merit or need, and it does not have to be repaid.</p>
            <p><b>e) Compost</b> Compost is a dark, crumbly organic fertiliser produced by the natural decay of food scraps, leaves and other plant waste over several weeks, which gardeners mix into soil to add nutrients.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Webcam</td><td>a small digital video camera</td><td>linked to a computer, sends live images over the internet</td></tr>
                <tr><td>Influencer</td><td>a person</td><td>large social media following, shapes followers' opinions and purchases</td></tr>
                <tr><td>Cookie</td><td>a small text file</td><td>stored in the browser by a website, remembers details between visits</td></tr>
                <tr><td>Scholarship</td><td>a sum of money</td><td>awarded for education on merit or need, not repaid</td></tr>
                <tr><td>Compost</td><td>an organic fertiliser</td><td>made from decayed plant and food waste, added to soil</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"A cookie is a file on the internet" is too broad: a photo is also a file on the internet. "Compost is when kitchen waste rots" uses "is when". A scholarship without "not repaid" could be a loan, so that feature earns its place.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the passage given below and answer the following questions.</p>`,
          passage: `<p>When offices closed during the pandemic in 2020, millions of people found that much of their work could be done from a laptop at home. Years later, many companies still let staff work remotely for part or all of the week, while others have ordered employees back to their desks. The debate about which arrangement is better is far from settled.</p>
            <p>For many workers, the biggest gain is flexibility. Without a daily commute, they save time and money, and parents and carers can fit work around school runs and hospital visits. Some studies of call-centre and software staff found that people working from home completed as much work as their office colleagues, or slightly more, and took fewer sick days. Other studies, however, report a fall in output, especially in jobs that depend on close teamwork, so the results seem to depend on the kind of work being measured.</p>
            <p>The costs are less visible but real. Many remote workers report feeling lonely and cut off from colleagues. The line between work and home can blur when the office is also the bedroom. Messages arrive late in the evening, and some people find it harder to switch off than when they could leave the office behind.</p>
            <p>Junior employees may lose the most. A new graduate in an office learns a great deal without being taught: by overhearing how a senior handles an angry client, by asking a quick question across the desk, or by being pulled into a meeting at the last minute. On a video call, these small chances mostly disappear. Several managers have observed that young staff who joined during lockdowns took longer to gain confidence, even when their technical skills were strong.</p>
            <p>Remote work also changes cities. Fewer commuters mean less traffic and lower emissions from travel, but the cafés, canteens and shops that depend on office crowds lose customers. In some cities, office towers stand half-empty, while smaller towns have gained residents who can now earn a city salary without living in the city.</p>
            <p>Many organisations have settled on hybrid work, with two or three days in the office and the rest at home. Hybrid work can keep much of the flexibility while bringing people together for mentoring and teamwork, but only if the office days are planned. When each person chooses different days, employees commute only to spend the day on video calls with colleagues who stayed at home. How work is organised, not simply where it happens, may matter most.</p>`,
          parts: [
            { text: 'Why do studies on remote work and productivity give different results, according to the passage?', marks: 2 },
            { text: 'What costs of remote work for the workers themselves does the passage describe?', marks: 2 },
            { text: 'Does the author suggest that hybrid work automatically solves the problems of remote work? Justify your answer with reference to the passage.', marks: 3 },
            { text: 'What can be inferred about why junior employees may learn less when they work remotely? Justify your answer with reference to the passage.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> Because the results <b>depend on the kind of work</b>. Studies of call-centre and software staff found that home workers did as much work as office staff, "or slightly more", and took fewer sick days. Other studies found a fall in output, "especially in jobs that depend on close teamwork" (paragraph 2).</p>
            <p><b>2.</b> Workers may feel <b>lonely and cut off</b> from colleagues. The <b>line between work and home blurs</b> when the office is also the bedroom, messages arrive late in the evening, and some people find it <b>harder to switch off</b> than when they could leave the office behind (paragraph 3).</p>
            <p><b>3.</b> <b>No.</b> The author says hybrid work can keep flexibility and bring people together, "but only if the office days are planned". Without planning, employees "commute only to spend the day on video calls" with colleagues at home. The last sentence says "How work is organised, not simply where it happens, may matter most." So hybrid work helps only when it is organised well; it is not an automatic fix.</p>
            <p><b>4.</b> Junior staff learn much of their job <b>informally, from being near experienced colleagues</b>, and remote work removes those chances. The passage says a new graduate "learns a great deal without being taught", for example by overhearing a senior with an angry client, and that on video calls "these small chances mostly disappear". Managers saw young staff take longer "to gain confidence, even when their technical skills were strong", so what they miss is judgement learnt by watching, not technical knowledge.</p>
            <div class="note exam"><p>In answer 4, "they learn less because they are at home" only repeats the question. The marks come from naming what is lost (informal learning by watching and asking), two clues from paragraph 4, and the link: their technical skills were fine, so the gap is in confidence.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the passage below and write a concise abstract in 100–120 words.</p>`,
          passage: `<p>Many students now bring laptops to lectures and type their notes, believing this lets them record more of what the teacher says. Some teachers, however, worry that typing encourages students to copy words without thinking about them. Researchers therefore investigated whether taking notes by hand or on a laptop affects examination performance. The study involved 360 first-year students taking a basic electrical engineering course at two colleges in Maharashtra during the July–November 2025 semester.</p>
            <p>Students were randomly assigned to two groups of 180. One group took notes only by hand, while the other typed notes on laptops with the internet switched off. Both groups attended the same lectures and could review their notes before tests. After four lectures, the researchers collected every student's notes, counted the words, and measured how much had been copied word for word from the slides and the teacher's speech. Performance was measured through two unit tests, each with factual and conceptual questions, and the end-semester examination.</p>
            <p>Students who typed wrote on average 62 per cent more words than those who wrote by hand, and a larger share of their notes was copied word for word, 31 per cent against 12 per cent. On factual questions the two groups scored almost the same. On conceptual questions, however, the handwriting group averaged 6.8 out of 10, compared with 5.9 for the typing group, and in the end-semester examination it scored 4 marks higher out of 100. The researchers noted that they could not control how students revised at home, and that only one course was studied.</p>
            <p>The researchers concluded that handwriting may help students understand concepts because it forces them to summarise ideas in their own words. They recommended that teachers encourage students to paraphrase rather than transcribe, whatever tool they use, and that laptop users pause to write short summaries. They also called for studies in subjects that rely heavily on calculations and diagrams.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study investigated whether handwritten or typed lecture notes affect examination performance. It involved 360 first-year students in a basic electrical engineering course at two Maharashtra colleges in July–November 2025. Students were randomly assigned to handwriting or offline typing groups of 180. Notes were analysed for length and word-for-word copying, and performance was compared on two unit tests and the end-semester examination. Typists wrote 62 per cent more words but copied more (31 against 12 per cent). Factual scores were similar, but handwriters scored higher on conceptual questions, 6.8 against 5.9 out of 10, and 4 marks higher in the examination. Home revision was not controlled. The study concluded that handwriting may aid understanding through summarising.</p>
            <p><small>116 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method: who, where, when, the two groups and what was measured (sentences 2–4) → findings with the numbers (sentences 5–6) → limitation and conclusion (sentences 7–8). Past tense, third person, no opinion. The recommendations were dropped to keep within 120 words; the uncontrolled home revision stays because it weakens the comparison.</p></div>
            <div class="note trap"><p>Keep the contrast the study found: typing produced <b>more</b> notes but <b>weaker</b> conceptual scores. An abstract that says only "handwriting is better" loses the finding that factual scores were the same.</p></div>`,
          topics: ['m4-abstract', 'm4-steps']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the case study given below and answer the following questions in 50–80 words.</p>`,
          passage: `<p>Lakshmi is the convenor of her college's annual technical festival. A software company has offered ₹2 lakh, the largest sponsorship this year, but it wants its logo on every banner, T-shirt and certificate, and a stall right beside the main stage. Three weeks before the fest, the sponsorship committee cannot agree on the offer.</p>
            <p><b>Kavin, Sponsorship Head:</b> Kavin wants to accept every demand at once. He says the money matters most, dismisses the design team's worries and the other sponsors' interests, and insists that he has already promised the company "full visibility".</p>
            <p><b>Sneha, Design Coordinator:</b> Sneha feels that logos on certificates would look unprofessional and that a stall beside the stage would block the audience's view. When Kavin raises his voice, she drops her objection and offers to redesign every item around the logo to keep the team calm.</p>
            <p><b>Irfan, Treasurer:</b> Irfan suggests meeting halfway: the logo on banners and T-shirts but not certificates, and a stall near the stage rather than beside it, even if the company pays a little less. He wants a quick deal so the team can move on.</p>
            <p><b>Meghna, Events Coordinator:</b> Meghna proposes asking the company what it really hopes to gain, whether reaching students or hiring them. She also asks Sneha and the smaller sponsors what they need, and suggests options such as a branded workshop or a named hackathon track.</p>
            <p>Lakshmi wants to keep this sponsor while protecting the fest's look, the audience's view and the other sponsors' goodwill.</p>`,
          parts: [
            { text: 'a) Identify and explain the conflict-management style shown by each of the following: Kavin, Sneha, Irfan and Meghna.', marks: 5 },
            { text: 'b) What would be your advice to Lakshmi to help the committee reach an agreement with the sponsor before the fest?', marks: 5 }
          ],
          answer: `
            <h4>a) Styles</h4>
            <p>Kavin is <b>competing</b>: he pushes to accept every demand, dismisses the others' concerns and has already promised "full visibility". Sneha is <b>accommodating</b>: she drops a sensible objection and offers to redesign everything to keep the team calm. Irfan is <b>compromising</b>: he proposes meeting halfway, splitting the demands for a quick deal. Meghna is <b>collaborating</b>: she asks the sponsor, Sneha and the smaller sponsors what they really need and suggests new options.</p>
            <p><small>71 words</small></p>
            <h4>b) Advice to Lakshmi</h4>
            <p>Lakshmi should <b>collaborate</b>, as Meghna suggests. The stakes are high, three weeks allows one proper discussion, and every sponsor relationship matters. She should call the company with Kavin and Meghna and ask what it wants most. The committee can then offer a named hackathon track, a stall in the main foyer, and logos on banners and T-shirts, keeping certificates plain. If there is no deal within a week, Irfan's compromise is the fallback.</p>
            <p><small>73 words</small></p>
            <div class="note why"><p>Irfan and Meghna both look for a middle way, but Irfan splits the existing demands in half, while Meghna asks why the company wants them and invents new options. Asking about the reasons behind a demand is what marks collaborating. It fits here because the money, the fest's image and the other sponsors all matter, and there is time to talk.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You are a second-year B.Tech Electronics and Communication Engineering student at VIT applying for a one-semester exchange programme at one of VIT's partner universities in Singapore. Write a Statement of Purpose (SOP) of about 200–250 words addressed to the selection panel of the university's international relations office, explaining why you should be selected for the programme.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Selection Panel,</p>
            <p>I am a second-year B.Tech Electronics and Communication Engineering student at VIT, and I am applying for the one-semester exchange programme at VIT's partner university in Singapore. I want to learn how electronics helps run a modern city, and bring those ideas back to VIT.</p>
            <p>I scored 96% in my Class 12 board examinations and hold a CGPA of 9.1 after three semesters. Last year, a friend and I built a low-cost air quality monitor with an Arduino and a dust sensor. We placed three units on different floors of our hostel, and found that the ground floor, beside the parking area, had nearly twice the dust of the top floor. As joint secretary of the robotics club, I also run monthly workshops for about sixty first-year students.</p>
            <p>Singapore is known for its Smart Nation programme, which uses sensors and data to plan transport, housing and public services. A semester there would let me take courses in embedded systems and the Internet of Things, work with students from many countries, and learn to manage on my own. In return, I can offer hardware skills and a habit of sharing what I learn.</p>
            <p>After the exchange, I plan to run a workshop at the robotics club and extend the air quality project across campus. I would be grateful for the chance to represent VIT in Singapore, and I thank the panel for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>244 words</small></p>
            <div class="note exam"><p>How it was built: opening (who you are, the programme, why) → academic background with proof (marks, a project with a measured result, a club role with a number) → why Singapore and what you offer (one well-known, general fact) → goals, what you will bring back, and a polite close. No subheadings; the first sentence of each paragraph tells the panel what the paragraph is about.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples']
        }
      ]
    },

    {
      id: 'model-04', kind: 'model', title: 'Model paper 4', short: 'Model paper 4', sub: 'Same pattern as CAT-2 · Passage: gene editing',
      meta: [['Pattern', 'Same as CAT-2 (B1+TB1)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions for the following words in about 30 words each.</p><div class="chips"><span class="chip">a) Chatbot</span><span class="chip">b) Blog</span><span class="chip">c) Spam</span><span class="chip">d) Hostel</span><span class="chip">e) Pedometer</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) Chatbot</b> A chatbot is a computer program that holds a conversation with users through text or voice, answering their questions automatically, often using artificial intelligence, such as the help assistant on a bank's website.</p>
            <p><b>b) Blog</b> A blog is a regularly updated website or web page on which a person or group posts informal articles, usually shown newest first, such as a student writing weekly posts about hostel cooking.</p>
            <p><b>c) Spam</b> Spam is unwanted bulk electronic messaging, usually advertising or scams, sent to large numbers of people who never asked for it, such as prize-offer emails that most inboxes move into a separate folder.</p>
            <p><b>d) Hostel</b> A hostel is a residential building run by a college or organisation that provides low-cost shared rooms and meals for students or travellers, usually with common washrooms and rules such as a curfew.</p>
            <p><b>e) Pedometer</b> A pedometer is a small electronic device or phone app that counts the number of steps a person takes by sensing body movement, often used to track daily exercise against a 10,000-step goal.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Chatbot</td><td>a computer program</td><td>converses by text or voice, answers questions automatically</td></tr>
                <tr><td>Blog</td><td>a regularly updated website or web page</td><td>informal posts by a person or group, newest first</td></tr>
                <tr><td>Spam</td><td>unwanted bulk electronic messaging</td><td>advertising or scams sent to people who did not ask</td></tr>
                <tr><td>Hostel</td><td>a residential building</td><td>low-cost shared rooms and meals for students or travellers</td></tr>
                <tr><td>Pedometer</td><td>a small electronic device or app</td><td>counts steps by sensing movement</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"A blog is a website" stops at the class: a railway booking site is also a website. The features (regular informal posts, newest first) do the real work. "Spam is when you get junk mail" uses "is when" and misses "bulk" and "unwanted".</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the passage given below and answer the following questions.</p>`,
          passage: `<p>For most of history, the genes a person inherited could not be changed. That began to shift in 2012, when scientists showed that a system called CRISPR, borrowed from the way bacteria defend themselves against viruses, could be used to cut DNA at a chosen spot. The tool works like a pair of molecular scissors guided by a short piece of genetic code, and it is far cheaper and simpler than older methods of gene editing.</p>
            <p>The medical promise is striking. Sickle cell disease, an inherited blood disorder common in parts of India and Africa, is caused by a single faulty gene. In 2023, regulators in the United Kingdom and the United States approved the first CRISPR-based treatment for it, in which a patient's own blood stem cells are edited in a laboratory and then returned to the body. Many patients in the trials no longer suffered the painful crises that had sent them to hospital again and again.</p>
            <p>Farming may also change. Researchers have used gene editing to develop crops that resist disease, survive drought or need less fertiliser. Unlike older genetically modified crops, many edited plants contain no genes from other species, and some governments now regulate them more lightly for that reason.</p>
            <p>Yet the scissors do not always cut only where they are aimed. Edits in the wrong place, known as off-target effects, could in rare cases switch off a useful gene or trigger cancer. Scientists have developed more precise versions of the tool, but checking every part of a patient's DNA for unwanted changes remains difficult, and long-term effects will be known only after many years.</p>
            <p>The sharpest debate concerns embryos. Editing the cells of an adult patient affects only that person, but editing an embryo creates changes that would pass to all of that person's descendants. In 2018, a scientist in China announced the birth of twin girls whose genes he had edited as embryos. The announcement was widely condemned, and he was later sent to prison. Most countries now forbid heritable editing, and many scientists argue that it should stay forbidden until its safety and purpose are far better understood.</p>
            <p>Cost raises a further question. The first approved sickle cell treatment costs well over a million US dollars per patient, yet most people with the disease live in low- and middle-income countries. Unless prices fall and rules keep pace with the science, the patients who need gene editing most may be the last to benefit.</p>`,
          parts: [
            { text: 'How does the approved CRISPR treatment for sickle cell disease work, according to the passage?', marks: 2 },
            { text: 'What are off-target effects, and why are they a concern?', marks: 2 },
            { text: 'Does the author believe that editing human embryos should be allowed now? Justify your answer with reference to the passage.', marks: 3 },
            { text: 'What can be inferred about which patients are likely to benefit first from gene-editing treatments? Justify your answer with reference to the passage.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> Sickle cell disease is caused by <b>a single faulty gene</b>. In the treatment, a patient's own <b>blood stem cells are edited in a laboratory and then returned to the body</b>. Many trial patients then stopped having the painful crises that had repeatedly sent them to hospital (paragraph 2).</p>
            <p><b>2.</b> They are <b>edits made in the wrong place</b> in the DNA, because "the scissors do not always cut only where they are aimed". In rare cases they could <b>switch off a useful gene or trigger cancer</b>. They are also hard to catch: checking all of a patient's DNA is difficult, and long-term effects will be known "only after many years" (paragraph 4).</p>
            <p><b>3.</b> <b>No.</b> The author stresses that embryo edits "would pass to all of that person's descendants", unlike edits to an adult. The 2018 case is described as "widely condemned", ending in prison, and the author reports without disagreement the view that heritable editing "should stay forbidden until its safety and purpose are far better understood". With off-target risks still unresolved (paragraph 4), the author clearly favours caution over permission.</p>
            <p><b>4.</b> Most likely <b>wealthier patients in rich countries</b>. The treatment was first approved in the United Kingdom and the United States and costs "well over a million US dollars per patient", yet most people with sickle cell disease "live in low- and middle-income countries". The author warns that those "who need gene editing most may be the last to benefit", so access will depend on money and place, not on need.</p>
            <div class="note exam"><p>Answer 3 asks what the author believes, and the author never says "I think". The belief shows in word choice ("sharpest debate", "widely condemned") and in which views are reported without challenge. Point to those clues, then give the link in one sentence.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the passage below and write a concise abstract in 100–120 words.</p>`,
          passage: `<p>University students often report high stress, especially in the weeks before examinations. Studies in cities suggest that time spent among trees and plants can lower stress, but little research has looked at green spaces inside Indian campuses. Researchers therefore investigated whether short daily breaks in a green area of campus reduce students' stress more than the same breaks taken indoors. The study took place at an engineering university in Hyderabad during the four weeks before the end-semester examinations in November 2025.</p>
            <p>A total of 240 second-year students volunteered and were divided at random into two groups of 120. For four weeks, one group spent a 20-minute break each afternoon in the campus garden, walking or sitting among trees, without their phones. The other group spent the same time in an indoor common room, also without phones. Stress was measured at the start and end of the study using a standard ten-item questionnaire scored from 0 to 40. A subgroup of 60 students also gave saliva samples to measure cortisol, a stress hormone.</p>
            <p>Average stress scores in the garden group fell from 24 to 18, while scores in the indoor group fell only from 24 to 22. Cortisol levels in the garden subgroup dropped by 15 per cent, compared with 4 per cent indoors. Students in the garden group also reported better sleep. However, the participants were volunteers who may already have enjoyed being outdoors, and they knew which group they were in, which may have influenced their answers. Heavy rain also reduced garden attendance in the third week.</p>
            <p>The researchers concluded that short daily breaks in green spaces can reduce student stress during examination periods. They recommended that universities protect and expand gardens, shaded seating and tree-lined paths, and that timetables leave room for outdoor breaks. They also called for longer studies that include students who did not volunteer.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study investigated whether short daily breaks in a campus green space reduce student stress more than indoor breaks. It was conducted at an engineering university in Hyderabad in the four weeks before the November 2025 end-semester examinations. Of 240 second-year volunteers, 120 spent a phone-free 20-minute afternoon break in the campus garden and 120 in an indoor common room. Stress was measured by questionnaire, and cortisol in 60 students. Garden stress scores fell from 24 to 18, against 24 to 22 indoors, and cortisol dropped by 15 per cent against 4 per cent. Because participants volunteered and knew their group, bias was possible. The researchers recommended protecting campus green spaces and timetabling outdoor breaks.</p>
            <p><small>115 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method: where, when, who, the two conditions and the measures (sentences 2–4) → findings with the numbers (sentence 5) → limitation and recommendation (sentences 6–7). Past tense, third person, no opinion. The better sleep and the rainy week were dropped as minor; the volunteer bias stays because it limits how far the result can be trusted.</p></div>`,
          topics: ['m4-abstract', 'm4-steps']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the case study given below and answer the following questions in 50–80 words.</p>`,
          passage: `<p>Ananya leads a four-member group building a line-following robot for their embedded systems lab project. Submission is two weeks away, and one member has done almost none of his share.</p>
            <p><b>Tarun, sensors and wiring:</b> Tarun has missed three of the last four group meetings. When Ananya messages him about his circuit, he replies with a thumbs-up and no update, and in class he changes the subject whenever the project comes up.</p>
            <p><b>Gayathri, coding:</b> Gayathri is annoyed but says nothing to Tarun. Instead, she has quietly started doing his wiring late at night on top of her own code, telling Ananya that she would rather do extra work than cause a fight.</p>
            <p><b>Nikhil, testing and report:</b> Nikhil suggests that Tarun just write the report's introduction and that the other three split his hardware tasks, with all four getting equal credit. He admits it is not ideal but says it will end the problem quickly.</p>
            <p><b>Shreya, chassis design:</b> Shreya thinks the group should first find out why Tarun has stopped working. She suggests meeting him in person, asking what is getting in the way, and then dividing the remaining tasks so that the robot is finished and everyone's share is fair.</p>
            <p>Ananya wants the robot finished on time, the work shared fairly, and the group still on good terms.</p>`,
          parts: [
            { text: 'a) Identify and explain the conflict-management style shown by each of the following: Tarun, Gayathri, Nikhil and Shreya.', marks: 5 },
            { text: 'b) What would be your advice to Ananya to help the group finish the project fairly before the deadline?', marks: 5 }
          ],
          answer: `
            <h4>a) Styles</h4>
            <p>Tarun is <b>avoiding</b>: he misses meetings, replies with a thumbs-up and changes the subject, withdrawing from the problem. Gayathri is <b>accommodating</b>: she says nothing and does his wiring on top of her own work to avoid a fight. Nikhil is <b>compromising</b>: he proposes splitting Tarun's tasks with equal credit, a quick middle ground that fully suits no one. Shreya is <b>collaborating</b>: she wants to learn why Tarun stopped and share the rest fairly.</p>
            <p><small>73 words</small></p>
            <h4>b) Advice to Ananya</h4>
            <p>Ananya should <b>collaborate</b>, as Shreya suggests. The grade matters to all four, two weeks leaves time for one honest talk, and the group must keep working together. She should first meet Tarun privately and ask what is wrong. The group can then list the remaining tasks, give each an owner and a deadline, pair Tarun with Shreya on the circuit, and check progress every two days. Gayathri should stop covering for him.</p>
            <p><small>72 words</small></p>
            <div class="note why"><p>Nikhil's plan ends the argument but leaves the unfairness in place, and Gayathri's silence hides the problem until she burns out. Collaborating deals with the cause. If Tarun still does nothing after a few days, Ananya should tell the faculty guide, with a record of the tasks and dates agreed. The guide is the fallback, not the first step.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You are a first-year B.Tech student at VIT applying for a merit-cum-need scholarship offered by a private educational foundation to first-year engineering students. Write a Statement of Purpose (SOP) of about 200–250 words addressed to the scholarship committee, explaining why you should be selected for the scholarship.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Scholarship Committee,</p>
            <p>I am a first-year B.Tech Mechanical Engineering student at VIT, and I am applying for your foundation's merit-cum-need scholarship. It would let me continue my studies without adding to the debt my family has already taken on for my education.</p>
            <p>I come from a small town near Madurai, where my father drives an auto-rickshaw and my mother stitches blouses at home. Our annual family income is about ₹2.4 lakh, and my first-year fees were paid through an education loan and money borrowed from relatives. I scored 95.6% in my Class 12 board examinations, the highest in my school that year. In Class 11, I built a solar food dryer from plywood and old window glass, which won second prize at the district science exhibition.</p>
            <p>At VIT, I earned an SGPA of 9.2 in my first semester. On Sunday evenings, I teach mathematics free of charge over video calls to two Class 10 students from my town. The scholarship would free me from worrying about the next fee payment, and I would give that time to my courses and to projects in renewable energy. I will share my grade reports with the committee every semester.</p>
            <p>After graduating, I hope to design low-cost solar equipment for small farmers and, once I am earning, to support another student from my town in the same way. I thank the committee for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>240 words</small></p>
            <div class="note exam"><p>How it was built: opening (who you are, which scholarship, why) → need and merit, both with proof (family income and the loan; the Class 12 score and the prize-winning dryer) → what you are doing now and how the money will be used (an SGPA, the free tutoring) → goals and giving back, then a polite close. No subheadings. A merit-cum-need SoP must show both halves: facts about need, and evidence of merit.</p></div>
            <div class="note trap"><p>State the need plainly and briefly; do not plead or dramatise. "My family is very poor and I am a hard worker" tells. An income figure, a loan and an SGPA show.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples']
        }
      ]
    },

    {
      id: 'model-05', kind: 'model', title: 'Model paper 5', short: 'Model paper 5', sub: 'Same pattern as CAT-2 · Passage: space debris',
      meta: [['Pattern', 'Same as CAT-2 (B1+TB1)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions for the following words in about 30 words each.</p><div class="chips"><span class="chip">a) QR code</span><span class="chip">b) Livestream</span><span class="chip">c) Ransomware</span><span class="chip">d) Freelancer</span><span class="chip">e) Vaccine</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) QR code</b> A QR code is a square, two-dimensional barcode made of black and white squares that a phone camera can scan to open stored information, such as a website link or a UPI payment address.</p>
            <p><b>b) Livestream</b> A livestream is a video broadcast sent over the internet at the same moment it is being recorded, so that viewers can watch and comment in real time, such as a concert watched on a phone.</p>
            <p><b>c) Ransomware</b> Ransomware is a type of malicious software that locks or encrypts the files on a victim's computer and demands a payment, often in cryptocurrency, before the attacker will restore access to them.</p>
            <p><b>d) Freelancer</b> A freelancer is a self-employed worker who takes on short projects for different clients and is paid for each job instead of a salary, such as a graphic designer who makes logos for small businesses.</p>
            <p><b>e) Vaccine</b> A vaccine is a biological preparation, usually given by injection or by mouth, that trains the body's immune system to recognise and fight a particular disease, such as the polio drops given to young children.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>QR code</td><td>a two-dimensional barcode</td><td>scanned by a phone camera to open stored information</td></tr>
                <tr><td>Livestream</td><td>a video broadcast</td><td>sent over the internet while it is being recorded</td></tr>
                <tr><td>Ransomware</td><td>a type of malicious software</td><td>locks files and demands payment to restore them</td></tr>
                <tr><td>Freelancer</td><td>a self-employed worker</td><td>short projects for different clients, paid per job</td></tr>
                <tr><td>Vaccine</td><td>a biological preparation</td><td>trains the immune system to fight one disease</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"A livestream is when you stream live" is circular and uses "is when". "Ransomware is a virus" names a class but gives no features. Say what shelf it sits on, then what makes it different from everything else on that shelf.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the passage given below and answer the following questions.</p>`,
          passage: `<p>Since the first satellite was launched in 1957, humans have sent thousands of objects into orbit. Many are still there long after they stopped working. Dead satellites, spent rocket stages, flecks of paint and fragments from old explosions now circle the Earth at several kilometres per second. Space agencies track tens of thousands of pieces larger than a cricket ball, and millions of smaller ones are too tiny to follow.</p>
            <p>Even a small fragment can do serious damage. A piece the size of a marble can strike with far more energy than a rifle bullet, and the International Space Station has changed its orbit several times to dodge debris. The greatest worry is a chain reaction. When two objects collide, they break into hundreds of new fragments, each of which can hit something else. If this ran out of control, some orbits could become too crowded to use for generations.</p>
            <p>The risk is growing quickly. Private companies are launching mega-constellations, groups of thousands of small satellites that provide internet from space. These networks can bring connectivity to remote villages and ships at sea, and operators say the satellites will fall back and burn up within a few years of retirement. Critics reply that sheer numbers raise the odds of a collision, and that one failed satellite that cannot be steered is enough to start trouble.</p>
            <p>Engineers have begun testing ways to clean up. Proposed missions would use nets, harpoons, magnets or robotic arms to catch a dead satellite and pull it down into the atmosphere, where it burns. A few test flights have succeeded, but each mission is expensive and removes only one object at a time. That raises an awkward question: who should pay? A country that launched rockets decades ago may see little reason to pay for removing its old junk, while newer space nations argue that they did not create the mess.</p>
            <p>The rules are weak as well. Treaties from the 1960s and 1970s make countries responsible for their objects in space, but they say little about debris. Guidelines asking operators to remove satellites within twenty-five years of a mission's end are voluntary, and there is no global body with the power to fine anyone who leaves junk behind.</p>
            <p>Orbit is shared by everyone, yet no single country owns it or is in charge of keeping it clean. Satellites guide aircraft, forecast monsoons and carry phone calls, so losing key orbits would be felt on the ground. Clean-up technology will help, but it will work only if launches are planned with the end of each satellite's life in mind, and if the rules are made binding before the crowding gets worse.</p>`,
          parts: [
            { text: 'Why does a collision between two objects in orbit worry scientists so much?', marks: 2 },
            { text: 'What methods of removing space debris does the passage mention, and what are their drawbacks?', marks: 2 },
            { text: 'Does the author believe that mega-constellations should be banned? Justify your answer with reference to the passage.', marks: 3 },
            { text: 'What can be inferred about why no country has taken full responsibility for cleaning up orbit? Justify your answer with reference to the passage.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> Because one collision can start a chain reaction. When two objects hit each other, they "break into hundreds of new fragments", and each fragment can strike something else. If this ran out of control, some orbits could become too crowded to use "for generations" (paragraph 2).</p>
            <p><b>2.</b> Missions using <b>nets, harpoons, magnets or robotic arms</b> would catch a dead satellite and pull it down to burn up in the atmosphere. The drawbacks are that each mission is <b>expensive</b>, it removes <b>only one object at a time</b>, and it is unclear <b>who should pay</b>.</p>
            <p><b>3.</b> <b>No.</b> The author gives both sides fairly: the networks "can bring connectivity to remote villages and ships at sea", and operators say the satellites will burn up after retirement. The worry about numbers is reported as what "critics reply", not as the author's own demand. The closing paragraph asks for launches planned "with the end of each satellite's life in mind" and for binding rules, which means managing constellations, not banning them.</p>
            <p><b>4.</b> It can be inferred that <b>each country has a reason to leave the job to someone else</b>. Older launching nations "may see little reason" to pay for removing old junk, while newer nations say "they did not create the mess". There is also "no global body with the power to fine" anyone, and orbit is something "no single country owns". With no owner and no enforcer, responsibility is easy to pass on.</p>
            <div class="note exam"><p>In answer 4, the quoted phrases are the evidence, but the marks come from the link: say in your own words what the clues add up to (no owner, no enforcer, so no one acts).</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the passage below and write a concise abstract in 100–120 words.</p>`,
          passage: `<p>Single-use plastic water bottles are a major source of waste on Indian college campuses, where students buy drinking water several times a day. Researchers at a residential university in Tamil Nadu therefore examined whether installing free drinking-water refill stations would reduce sales of bottled water on campus. They also wanted to know whether students would change their habits if refilling was made convenient.</p>
            <p>The study ran for two semesters, from July 2024 to April 2025. In the first semester, the researchers recorded bottled-water sales at all six campus shops with no change to facilities. At the start of the second semester, the university installed 24 filtered-water refill stations in hostels, academic blocks and the library, and gave every first-year student a steel bottle. Sales records from the six shops were compared across the two semesters, and 850 students completed a short survey on their drinking-water habits at the end of the study.</p>
            <p>Monthly sales of one-litre plastic bottles fell from about 41,000 in the first semester to about 26,000 in the second, a drop of 37 per cent. The fall was largest in shops near hostels that had a refill station on every floor. In the survey, 68 per cent of students said they refilled a bottle at least once a day, and the most common reason for still buying bottled water was a station that was out of order or far away. However, sales figures were not adjusted for a two-week festival break in the second semester, when fewer students were on campus, so part of the fall may not be due to the stations.</p>
            <p>The researchers concluded that free, well-placed refill stations can substantially reduce plastic bottle sales on a campus. They recommended that universities place stations close to where students live and study, maintain them regularly and publish water-quality test results. They also suggested a longer study comparing the same months in two different years.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study examined whether free drinking-water refill stations reduce sales of single-use plastic water bottles on a university campus in Tamil Nadu. It ran from July 2024 to April 2025. Bottled-water sales at six campus shops were recorded for one semester; the university then installed 24 filtered refill stations and gave first-year students steel bottles. Sales were compared across semesters, and 850 students were surveyed. Monthly sales of one-litre bottles fell by 37 per cent, from about 41,000 to 26,000, most sharply near hostels with a station on every floor. Sixty-eight per cent of students refilled daily. Sales were not adjusted for a festival break. It concluded that well-placed stations can substantially reduce bottle sales.</p>
            <p><small>115 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method (where, when, how, who: sentences 2–4) → findings with the numbers (sentences 5–6) → limitation (sentence 7) → conclusion (sentence 8). Past tense, third person, no opinion. The reasons students still bought bottles and the recommendations were dropped to stay inside 120 words; the festival break stays because it limits what the 37 per cent fall can prove.</p></div>`,
          topics: ['m4-abstract', 'm4-steps']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the case study given below and answer the following questions in 50–80 words.</p>`,
          passage: `<p>Meenakshi is the secretary of the college coding club, which runs a two-hour programming contest every Saturday. Attendance has fallen, and the core team now disagrees about whether the contest should be held online or in a computer lab.</p>
            <p><b>Harsh, Contest Coordinator:</b> Harsh wants every contest to move online so that students can take part from their hostel rooms. He calls offline contests "outdated", brushes aside worries about copying, and says he will stop setting problems if the team votes against him.</p>
            <p><b>Tanvi, Treasurer:</b> Tanvi knows what the lab booking costs but keeps her views to herself. She goes quiet in the group chat whenever the topic comes up, and at the last meeting she asked to "discuss it after mid-terms".</p>
            <p><b>Imran, Publicity Head:</b> Imran prefers offline contests because he enjoys meeting participants, but he says he will go along with whatever Harsh wants. He does not want the argument to spoil the friendly mood in the club.</p>
            <p><b>Lavanya, Problem Setter:</b> Lavanya asks each member what they are really worried about. She finds that Harsh cares about reach, Imran about meeting people and the faculty adviser about fair play, and she suggests looking for a format that meets all three needs.</p>
            <p>Meenakshi wants a format that brings participants back and that the whole team will support.</p>`,
          parts: [
            { text: 'a) Identify and explain the conflict-management style shown by each of the following: Harsh, Tanvi, Imran and Lavanya.', marks: 5 },
            { text: 'b) What would be your advice to Meenakshi to help the team agree on a contest format?', marks: 5 }
          ],
          answer: `
            <h4>a) Styles</h4>
            <p>Harsh is <b>competing</b>: he pushes for online contests, brushes aside the copying worry and threatens to stop setting problems if outvoted. Tanvi is <b>avoiding</b>: she keeps her cost concerns to herself, goes quiet in the chat and postpones the talk. Imran is <b>accommodating</b>: he gives up his own preference for offline contests to keep the club friendly. Lavanya is <b>collaborating</b>: she explores everyone's real concerns and looks for a format that meets all of them.</p>
            <p><small>75 words</small></p>
            <h4>b) Advice to Meenakshi</h4>
            <p>Meenakshi should <b>collaborate</b>, building on Lavanya's approach. The contest is weekly, so there is time to get it right, and she needs the whole team behind it. She should hold one meeting, ask Tanvi for the lab costs directly, and list the needs: reach, fair play, meeting people and cost. The team could then trial alternate online and offline weeks for a month, track attendance, and review the results together.</p>
            <p><small>70 words</small></p>
            <div class="note why"><p>Collaborating fits because the stakes are moderate, there is no hard deadline and the team works together every week, so the relationship matters. A trial with an agreed review date also gives Harsh a fair hearing without letting him decide alone.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You are a second-year B.Tech Chemical Engineering student at VIT applying for an eight-week summer research fellowship at a national research institute in India. Write a Statement of Purpose (SOP) of about 200–250 words addressed to the fellowship selection committee, explaining why you should be selected for the fellowship.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Fellowship Selection Committee,</p>
            <p>I am a second-year B.Tech Chemical Engineering student at VIT, and I am applying for the eight-week summer research fellowship at your institute. I want to find out what daily research work involves before I choose a specialisation, and to contribute careful work to an ongoing project.</p>
            <p>I scored 96% in Chemistry in my Class 12 board examinations, and my CGPA after three semesters at VIT is 9.1. Last semester, for a course project, I tested how well activated charcoal made from coconut shells removes dye from water. Over six weeks I ran 30 trials, recorded the results in a spreadsheet and found that finer particles removed about 20% more dye. My guide asked me to present the work at a department poster session.</p>
            <p>A fellowship at a national research institute would let me work under a scientist on a real problem, use instruments that an undergraduate lab does not have, and learn how results are checked before they are published. In return, I can offer patience with repeated experiments, neat record-keeping and basic data analysis in Python.</p>
            <p>After the fellowship, I plan to build on what I learn in my final-year project and apply for a master's programme in environmental engineering. I would be grateful for the chance to join your institute this summer, and I thank the committee for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>235 words</small></p>
            <div class="note exam"><p>How it was built: opening (who you are, what you are applying for, why) → background with proof (a mark, a CGPA, a project with 30 trials and a 20% result) → why this kind of place and what you offer → goals and a polite close. No subheadings. The institute is not named, so the SoP uses only facts true of any national research institute.</p></div>
            <div class="note trap"><p>A research SoP is judged on evidence that you can do patient, careful work. "I have always loved science" proves nothing; "I ran 30 trials over six weeks" does.</p></div>`,
          topics: ['m5-sop-structure', 'm5-sop-writing', 'm5-sop-tips']
        }
      ]
    }
  ]
});
