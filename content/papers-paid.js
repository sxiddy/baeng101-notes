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
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.5']
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
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
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
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
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
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.2', 'm5-styles.3', 'm5-choosing.1', 'm5-tki.2']
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
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5', 'm5-sop-samples.0']
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
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.5']
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
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the passage below and write a concise abstract in 100–120 words.</p>`,
          passage: `<p>Many students now bring laptops to lectures and type their notes, believing this lets them record more of what the teacher says. Some teachers, however, worry that typing encourages students to copy words without thinking about them. Researchers therefore investigated whether taking notes by hand or on a laptop affects examination performance. The study involved 360 first-year students taking a basic electrical engineering course at two colleges in Maharashtra during the July–November 2025 semester.</p>
            <p>Students were randomly assigned to two groups of 180. One group took notes only by hand, while the other typed notes on laptops with the internet switched off. Both groups attended the same lectures and could review their notes before tests. After four lectures, the researchers collected every student's notes, counted the words, and measured how much had been copied word for word from the course and the teacher's speech. Performance was measured through two unit tests, each with factual and conceptual questions, and the end-semester examination.</p>
            <p>Students who typed wrote on average 62 per cent more words than those who wrote by hand, and a larger share of their notes was copied word for word, 31 per cent against 12 per cent. On factual questions the two groups scored almost the same. On conceptual questions, however, the handwriting group averaged 6.8 out of 10, compared with 5.9 for the typing group, and in the end-semester examination it scored 4 marks higher out of 100. The researchers noted that they could not control how students revised at home, and that only one course was studied.</p>
            <p>The researchers concluded that handwriting may help students understand concepts because it forces them to summarise ideas in their own words. They recommended that teachers encourage students to paraphrase rather than transcribe, whatever tool they use, and that laptop users pause to write short summaries. They also called for studies in subjects that rely heavily on calculations and diagrams.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study investigated whether handwritten or typed lecture notes affect examination performance. It involved 360 first-year students in a basic electrical engineering course at two Maharashtra colleges in July–November 2025. Students were randomly assigned to handwriting or offline typing groups of 180. Notes were analysed for length and word-for-word copying, and performance was compared on two unit tests and the end-semester examination. Typists wrote 62 per cent more words but copied more (31 against 12 per cent). Factual scores were similar, but handwriters scored higher on conceptual questions, 6.8 against 5.9 out of 10, and 4 marks higher in the examination. Home revision was not controlled. The study concluded that handwriting may aid understanding through summarising.</p>
            <p><small>116 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method: who, where, when, the two groups and what was measured (sentences 2–4) → findings with the numbers (sentences 5–6) → limitation and conclusion (sentences 7–8). Past tense, third person, no opinion. The recommendations were dropped to keep within 120 words; the uncontrolled home revision stays because it weakens the comparison.</p></div>
            <div class="note trap"><p>Keep the contrast the study found: typing produced <b>more</b> notes but <b>weaker</b> conceptual scores. An abstract that says only "handwriting is better" loses the finding that factual scores were the same.</p></div>`,
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
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
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.2', 'm5-styles.3', 'm5-choosing.1', 'm5-tki.2']
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
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5', 'm5-sop-samples.1']
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
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
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
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
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
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
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
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.2', 'm5-styles.0', 'm5-choosing.1', 'm5-tki.2']
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
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips', 'm5-sop-samples'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5', 'm5-sop-samples.2']
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
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
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
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
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
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
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
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.3', 'm5-styles.4', 'm5-choosing.1', 'm5-tki.2']
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
          topics: ['m5-sop-structure', 'm5-sop-writing', 'm5-sop-tips'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5']
        }
      ]
    },
    {
      id: 'model-06', kind: 'model', title: 'Model paper 6', short: 'Model paper 6', sub: 'Same pattern as CAT-2 · Passage: deepfakes',
      meta: [['Pattern', 'Same as CAT-2 (C2+TC2)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions of the following words.</p><div class="chips"><span class="chip">a) Chatbot</span><span class="chip">b) Hashtag</span><span class="chip">c) Smartwatch</span><span class="chip">d) Refrigerator</span><span class="chip">e) Humidity</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) Chatbot</b> A chatbot is a computer program that holds a text or voice conversation with users and answers their questions automatically, such as the help assistant on a bank's website.</p>
            <p><b>b) Hashtag</b> A hashtag is a word or phrase written after the # symbol in a social-media post that groups it with related posts so users can find them, such as #WorldCup.</p>
            <p><b>c) Smartwatch</b> A smartwatch is a wrist-worn digital device that shows the time and, when linked to a phone, displays notifications and tracks health data such as steps and heart rate.</p>
            <p><b>d) Refrigerator</b> A refrigerator is an electrical kitchen appliance with an insulated, cooled compartment that keeps food and drinks at a low temperature, usually about 4°C, so that they stay fresh longer.</p>
            <p><b>e) Humidity</b> Humidity is the amount of water vapour in the air, usually given as a percentage of the most the air can hold at that temperature; high humidity makes Chennai summers sticky.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Chatbot</td><td>a computer program</td><td>holds a text or voice conversation, answers questions automatically</td></tr>
                <tr><td>Hashtag</td><td>a word or phrase</td><td>written after #, groups a post with related posts for searching</td></tr>
                <tr><td>Smartwatch</td><td>a wrist-worn digital device</td><td>linked to a phone, shows notifications, tracks health data</td></tr>
                <tr><td>Refrigerator</td><td>an electrical kitchen appliance</td><td>insulated, cooled compartment that keeps food fresh</td></tr>
                <tr><td>Humidity</td><td>the amount of water vapour in the air</td><td>given as a percentage of the most the air can hold</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"A refrigerator is a fridge" only gives a synonym. "A smartwatch is a watch that is smart" repeats the term. "Humidity is when the air is wet" uses "is when" and has no class. For an everyday object, the marks come from the features: say what it does that other appliances or devices in the same class do not.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the given passage and answer the questions that follow.</p>`,
          passage: `<p>Deepfakes are videos, images or audio clips in which artificial intelligence has been used to replace a person's face or voice so convincingly that the result appears genuine. The technology has legitimate uses, such as dubbing films into other languages or recreating historical figures for museum displays. However, the same tools can make a politician appear to say something they never said, or imitate a company director's voice to instruct an employee to transfer money. Because such software is now cheap and simple to use, producing a convincing fake no longer requires specialist skill.</p>
            <p>The greater danger may lie not in any single fake but in the doubt that fakes create. When audiences know that realistic forgeries exist, they may begin to distrust genuine recordings as well, and a person caught on camera doing something wrong can simply claim that the evidence was fabricated. Detection software offers only partial protection, since each improvement in detection tends to be followed by more sophisticated methods of generation. Protecting trust in online media therefore depends on better technology and also on verifying sources, clearly labelling AI-generated content, and teaching users to check where a clip came from before sharing it.</p>`,
          parts: [
            { text: 'Why is detection software alone not enough to protect people from deepfakes?', marks: 2 },
            { text: 'What can be inferred about how the spread of deepfakes affects the value of genuine video or audio evidence?', marks: 2 },
            { text: 'Explain how a deepfake of a company director\'s voice could cause harm even to an employee who follows instructions carefully.', marks: 3 },
            { text: 'The passage suggests that better technology alone cannot protect trust in online media. Explain why a broader response is necessary.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> Because detection and generation keep racing each other. The passage says detection software "offers only partial protection, since each improvement in detection tends to be followed by more sophisticated methods of generation". A tool that catches today's fakes may miss tomorrow's, so it cannot be the only defence (paragraph 2).</p>
            <p><b>2.</b> It can be inferred that <b>genuine evidence loses some of its power</b>. Once people know "realistic forgeries exist", they "may begin to distrust genuine recordings as well". A real clip can then be dismissed, because the person in it "can simply claim that the evidence was fabricated". The mere possibility of a fake is enough to create doubt about a true recording.</p>
            <p><b>3.</b> The attack works <b>because</b> the employee is careful and obedient, not in spite of it. The passage says AI can "imitate a company director's voice to instruct an employee to transfer money". An employee who hears a familiar voice giving a clear order has every reason to obey, so the company loses money even though no rule was knowingly broken. Since such software is "cheap and simple to use", a fraudster needs no special skill to try this, which makes such attacks more likely.</p>
            <p><b>4.</b> Technology alone always lags behind, because each better detector is met by "more sophisticated methods of generation". The deeper problem is also human, not technical: it is "the doubt that fakes create". So the passage calls for three further steps: "verifying sources", "clearly labelling AI-generated content", and teaching users "to check where a clip came from before sharing it". These steps act before and around the fake: they tell viewers what is real, and they stop false clips from spreading even when software fails to catch them.</p>
            <div class="note exam"><p>Parts 1 and 3 can be answered from what the passage states; parts 2 and 4 need you to join clues. In every part, quote the words that prove your point, then explain the link in your own sentence. The quotation alone does not earn the full marks.</p></div>
            <div class="note trap"><p>The author does not say deepfakes are always harmful: paragraph 1 lists "legitimate uses" such as dubbing films. If a question asks for the author's view, keep that balance in your answer.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the following article and write a clear and well-structured abstract in about 100 words.</p>`,
          passage: `<p>Many Indian undergraduates now take part-time jobs while studying. Some work to pay fees or living costs, while others want pocket money or practical experience. Common jobs include tutoring, food delivery and shop work. However, teachers and parents often worry that work leaves students less time and energy for study.</p>
            <p>A study was conducted to examine the relationship between part-time work and the academic performance of undergraduate students. It investigated whether the number of hours worked each week, and the type of job, were associated with differences in students' grades and class attendance.</p>
            <p>The study involved 300 undergraduate students aged 18–22 from four colleges in Chennai. Data were collected through an anonymous questionnaire recording whether students worked, their weekly working hours, the type of job and the number of classes missed in a month. Their CGPA for the previous semester was obtained from college records. Students were divided into three groups: non-working (132), working ten hours or fewer a week (104) and working more than ten hours (64).</p>
            <p>The analysis showed that students who worked ten hours or fewer had an average CGPA of 7.9, almost the same as the 8.0 of students who did not work. Students who worked more than ten hours averaged 7.1 and missed about five classes a month, compared with about two in the other groups. Students whose jobs were related to their course, such as tutoring or assisting in a laboratory, reported better time management than those in unrelated jobs. However, the study did not establish a causal relationship, as financial pressure, travel time and family responsibilities could also affect grades.</p>
            <p>The findings suggest that a limited amount of part-time work need not harm academic performance, but long working hours may be linked to lower grades and poorer attendance. Further research following the same students over several semesters could determine whether reducing working hours leads to better results.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study examined whether part-time work was related to the academic performance of undergraduates. Three hundred students aged 18–22 from four Chennai colleges answered an anonymous questionnaire about their working hours, type of job and missed classes, and their previous-semester CGPA was taken from college records. Students working ten hours or fewer weekly averaged a CGPA of 7.9, close to the 8.0 of non-working students, whereas those working longer averaged 7.1 and missed more classes. Course-related jobs were linked to better time management. Although causation was not established, the study concluded that limited part-time work need not harm grades, but long hours may.</p>
            <p><small>103 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method: who, where and how data were collected (sentence 2) → findings with the key numbers (sentences 3–4) → limitation and conclusion (sentence 5). Past tense, third person, no opinion. The article's wording was rephrased ("did not establish a causal relationship" became "causation was not established"). The list of common jobs, the group sizes and the call for further research were dropped to stay near 100 words; the missing causal link stays because it limits what the findings prove.</p></div>
            <div class="note trap"><p>Do not open with the background ("Many students in India take up part-time jobs"). An abstract starts with what the study did. Do not add advice of your own, such as "students should work less"; report only what the study found.</p></div>`,
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the given case study of a conflict situation and answer the questions that follow.</p>`,
          passage: `<p>Four first-year students share Room 312 of a men's hostel. After the warden's weekly inspection found the room dusty and the bin overflowing, they received a written warning, and they now disagree about how the cleaning should be shared.</p>
            <p><b>Rohan</b> says he keeps his own corner tidy and has the heaviest timetable of the four, so the others should clean the shared areas. He refuses to put his name on any rota and says the matter is closed.</p>
            <p><b>Aditya</b> dislikes the mess but does not want an argument. He quietly sweeps the floor and empties the bin himself every day, even on days when he has early lab sessions.</p>
            <p><b>Vikram</b> suggests that they split the difference: everyone cleans on alternate days, and Rohan may skip weekday mornings if he takes both weekend slots. He admits the plan will not fully suit anyone, but says each person must give up something so that it is settled before the next inspection.</p>
            <p><b>Kabir</b> asks each room-mate what matters most to him. He finds that Rohan's labs fill his mornings, Aditya wants the work shared fairly, and Vikram wants a quick end to the dispute. He proposes that the four plan a schedule together that divides tasks by each person's free time, and review it at the end of the month.</p>`,
          parts: [
            { text: 'a) Identify the different approaches to handling conflict demonstrated by Rohan, Aditya, Vikram and Kabir.', marks: 5 },
            { text: 'b) If the room-mates want a lasting solution that everyone accepts, whose approach would be most appropriate? Explain why.', marks: 5 }
          ],
          answer: `
            <h4>a) Approaches</h4>
            <table class="tbl">
              <thead><tr><th>Room-mate</th><th>Style</th><th>Evidence from the case</th></tr></thead>
              <tbody>
                <tr><td>Rohan</td><td><b>Competing</b> (assertive, uncooperative)</td><td>insists others clean the shared areas, refuses to join a rota, says "the matter is closed"</td></tr>
                <tr><td>Aditya</td><td><b>Accommodating</b> (unassertive, cooperative)</td><td>gives up his own interest and does all the cleaning himself to avoid an argument</td></tr>
                <tr><td>Vikram</td><td><b>Compromising</b> (middle ground)</td><td>proposes a plan where "each person must give up something" so it is settled quickly</td></tr>
                <tr><td>Kabir</td><td><b>Collaborating</b> (assertive, cooperative)</td><td>asks what matters to each person and builds a plan that meets all their needs</td></tr>
              </tbody>
            </table>
            <p>Rohan puts his own needs first and shuts down discussion. Aditya puts the others first at his own cost. Vikram looks for a quick, partly satisfying deal. Kabir looks for a solution that satisfies everyone fully.</p>
            <h4>b) Most appropriate approach</h4>
            <p><b>Kabir's collaborating approach</b> is the most appropriate. The goal is a lasting fix that everyone accepts, and collaborating is the only style that aims to meet all parties' concerns instead of splitting them. Kabir has uncovered the real interests: Rohan's mornings are full, Aditya wants fairness, and Vikram wants a quick end. A schedule built around each person's free time answers all three, so no one has a reason to stop following it.</p>
            <p>The other approaches would not last. Rohan's competing would leave the others resentful. Aditya's accommodating is unfair and would break down once he tires of doing everything. Vikram's compromise may settle things before the inspection, but since it "will not fully suit anyone", someone is likely to drop out of it. Collaborating also fits this case well: the four live together for the whole year, so their relationship matters, and there is time to plan properly. The monthly review lets them adjust the plan instead of reopening the quarrel.</p>
            <div class="note why"><p>The key words in the question decide the answer. "Lasting" and "everyone accepts" point to collaborating (win-win). If the question had asked for the quickest way to pass the next inspection, Vikram's compromise would be a fair answer.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.3', 'm5-styles.2', 'm5-choosing.1', 'm5-tki.2']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You have completed your B.Tech. in Computer Science and Engineering and are applying for an M.S. in Cybersecurity at a university abroad. Write a Statement of Purpose (200–250 words) explaining your academic background, interest in cybersecurity, relevant project experience and skills, career goals, and how the postgraduate programme will help you achieve these goals.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Admissions Committee,</p>
            <p>I have completed my B.Tech in Computer Science and Engineering at VIT, India, and I am applying for the M.S. in Cybersecurity at your university. I want to learn how to design systems that stay secure under real attacks, as well as how to find their weaknesses.</p>
            <p>I graduated with a CGPA of 8.7 out of 10, and my strongest subjects were Computer Networks, Operating Systems and Cryptography. My interest in security began in my second year, when attackers defaced our coding club's website and I helped trace the break-in to an outdated plugin. For my final-year project, I built a tool that scans small-business web applications for common flaws such as SQL injection and weak passwords; it found 46 issues across 12 test sites. During an eight-week internship at a Chennai IT services firm, I reviewed firewall logs and wrote Python scripts that cut the time needed to flag suspicious logins from hours to minutes. My team also finished in the top 50 of 600 teams in a national capture-the-flag contest.</p>
            <p>Your programme would give me advanced training in network defence, digital forensics and secure software design, and the chance to work on the problems that security teams face today.</p>
            <p>After the degree, I plan to work as a security engineer protecting banking and healthcare systems, and later to lead a security team. I thank the committee for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>241 words</small></p>
            <div class="note exam"><p>How it was built: opening (who you are, the exact programme, what you want to learn) → academic background with proof (a CGPA, three relevant subjects) → how the interest began (one real incident) → project, internship and contest, each with a number → what the programme offers → career goal and a polite close. No subheadings, active voice throughout, and every claim backed by a fact.</p></div>
            <div class="note trap"><p>Leave out "I have always been passionate about hacking": it proves nothing and "hacking" sounds careless in a security application. The defaced website and the scanning tool show the interest. Do not name a professor or course at the university unless you have checked it.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5']
        }
      ]
    },
    {
      id: 'model-07', kind: 'model', title: 'Model paper 7', short: 'Model paper 7', sub: 'Same pattern as CAT-2 · Passage: gig-work ratings',
      meta: [['Pattern', 'Same as CAT-2 (C2+TC2)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions of the following words. (2 marks each)</p><div class="chips"><span class="chip">a) Drone</span><span class="chip">b) Blog</span><span class="chip">c) Printer</span><span class="chip">d) Stethoscope</span><span class="chip">e) Pressure</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) Drone</b> A drone is an unmanned aircraft flown by remote control or by an onboard computer, often carrying a camera or sensors, such as one used to spray crops on farms.</p>
            <p><b>b) Blog</b> A blog is a website on which a person or small group regularly posts informal articles, with the newest shown first, such as a student's weekly reviews of new phones.</p>
            <p><b>c) Printer</b> A printer is an output device that takes text and images from a computer and reproduces them on paper using ink or toner, such as an office laser printer.</p>
            <p><b>d) Stethoscope</b> A stethoscope is a medical instrument with two earpieces joined by tubes to a small disc, which a doctor places on the chest to listen to the heart and lungs.</p>
            <p><b>e) Pressure</b> Pressure is a physical quantity equal to the force acting at right angles on a surface divided by its area, measured in pascals, as in a tyre's air pressure.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Drone</td><td>an unmanned aircraft</td><td>flown by remote control or onboard computer, often carries a camera or sensors</td></tr>
                <tr><td>Blog</td><td>a website</td><td>one person or small group posts informal articles regularly, newest first</td></tr>
                <tr><td>Printer</td><td>an output device</td><td>reproduces text and images from a computer on paper, using ink or toner</td></tr>
                <tr><td>Stethoscope</td><td>a medical instrument</td><td>earpieces, tubes and a disc, used to listen to the heart and lungs</td></tr>
                <tr><td>Pressure</td><td>a physical quantity</td><td>force at right angles to a surface divided by its area, measured in pascals</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"Pressure is when something pushes hard" uses "is when" and has no class. "A stethoscope is used by doctors" starts with a use, not a class, so it could describe a thermometer. Give the class first, then the features that separate this item from others in the class.</p></div>
            <div class="note exam"><p>Some words have an everyday sense and a technical sense. "Pressure" can also mean stress, as in exam pressure, but in a technical English paper give the scientific meaning. If you have time, add the everyday sense in one short phrase at the end.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.0']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the given passage and answer the questions that follow.</p>`,
          passage: `<p>Food-delivery riders, ride-hailing drivers and home-service workers who find jobs through apps are rarely managed by a human supervisor. Instead, the platform collects customer star ratings, acceptance rates and delivery times, and an algorithm combines them into a score. That score often decides who is offered the next order, who receives bonus incentives, and who is temporarily blocked from the app. Even a small fall, say from 4.8 to 4.5 stars, can push a worker down the queue for orders. Companies call the system efficient and neutral because the same rules apply to every worker.</p>
            <p>In practice, a rating often measures things the worker cannot control. A late delivery may be caused by a restaurant that is slow to prepare food, heavy traffic or a wrong address, yet the customer usually rates the rider. Some customers also give low stars for reasons unrelated to service. Because workers rarely see how the score is calculated, they cannot tell which action lowered it, and many feel pressure to accept every order, including unsafe or unprofitable ones, to protect their numbers. A worker who is blocked may have no person to appeal to. Several labour researchers argue that such systems need transparent rules, a human review before any worker is removed, and a way to exclude ratings for delays outside the worker's control.</p>`,
          parts: [
            { text: 'According to the passage, how is a gig worker\'s score produced, and what does it decide?', marks: 2 },
            { text: 'What can be inferred about how much control gig workers have over their own scores?', marks: 2 },
            { text: 'Explain how not knowing how the score is calculated can affect the choices workers make on the job.', marks: 3 },
            { text: 'The passage suggests that applying the same rules to every worker does not make the system fair. Explain why, and show how the researchers\' proposals would address the problem.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> The platform collects "customer star ratings, acceptance rates and delivery times", and an algorithm <b>combines them into a score</b>. The score decides <b>who is offered the next order</b>, <b>who receives bonus incentives</b> and <b>who is temporarily blocked</b> from the app (paragraph 1).</p>
            <p><b>2.</b> It can be inferred that workers have <b>little control</b> over their scores. A rating "often measures things the worker cannot control", such as a slow restaurant, heavy traffic or a wrong address, yet "the customer usually rates the rider". Some customers even give low stars "for reasons unrelated to service". So a careful, honest worker can still lose points.</p>
            <p><b>3.</b> Because workers "cannot tell which action lowered" their score, they cannot fix one specific habit; they try to protect the number in every way at once. Since even a fall "from 4.8 to 4.5 stars" can push them down the queue, a refusal feels risky. Many therefore "accept every order, including unsafe or unprofitable ones". The hidden formula makes workers take risks and lose money to avoid an unknown penalty.</p>
            <p><b>4.</b> The same rules are applied to <b>unequal situations</b>. A rider delayed by a slow restaurant or traffic is judged like one who was careless, so the rule is uniform but the result is unfair. Each proposal answers one problem in the passage: <b>transparent rules</b> let workers see "how the score is calculated"; a <b>human review before removal</b> gives a blocked worker someone "to appeal to"; and <b>excluding ratings for delays outside the worker's control</b> stops the score from punishing things the worker "cannot control".</p>
            <div class="note trap"><p>In answer 4, do not stop at "the system is biased". Link each proposal to the exact problem it fixes: hidden formula, no appeal, unfair ratings. That link is where the 3 marks are.</p></div>
            <div class="note exam"><p>Answers 1 and 3 mix stated facts and inference. Answer 1 is stated, so quote and list. Answer 2 is inference, so give your conclusion first ("little control"), then the clues that lead to it.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the following article and write a clear and well-structured abstract in about 100 words.</p>`,
          passage: `<p>Energy drinks, which contain large amounts of caffeine and sugar, have become common in university hostels, especially during examinations. Students drink them to stay awake for late-night revision. However, doctors warn that heavy caffeine intake can raise anxiety, disturb sleep and increase heart rate, which may add to exam stress.</p>
            <p>A study was conducted to examine the relationship between energy-drink consumption and exam stress among undergraduate students. It also investigated whether the number of drinks consumed each day was linked to students' sleep and their ability to concentrate.</p>
            <p>The study involved 240 undergraduates aged 18–23 from four departments of a university in Tamil Nadu. During the two weeks of end-semester examinations in November 2025, participants kept a daily log of the energy drinks they consumed and their hours of sleep. At the end of the examinations, they completed a standardised stress scale scored from 0 to 40. Students were grouped as non-users, moderate users (one drink a day or less) and heavy users (two or more a day), and their scores were compared.</p>
            <p>About 58 per cent of the students drank at least one energy drink during the examinations, and 22 per cent were heavy users. Heavy users had a mean stress score of 26.4, compared with 19.8 for moderate users and 17.1 for non-users. They also slept 5.1 hours a night on average, against 6.6 hours for non-users, and more often reported a racing heartbeat during the examinations. However, the study relied on self-reported data and did not establish cause, since students who were already stressed may have turned to energy drinks to cope.</p>
            <p>The findings suggest that heavy energy-drink use is associated with higher exam stress and shorter sleep. The researchers recommended caffeine awareness in pre-examination counselling and healthier drinks in hostel canteens during examination weeks. Further research over several semesters could show whether cutting intake lowers stress.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study examined whether energy-drink consumption was related to exam stress and sleep among undergraduates. Two hundred and forty students from four departments of a Tamil Nadu university logged their daily energy drinks and sleep during the November 2025 end-semester examinations and then completed a standardised stress scale. Heavy users, who formed 22 per cent of the sample, recorded a mean stress score of 26.4 out of 40, against 17.1 for non-users, and slept 1.5 hours less each night. Because the data were self-reported, cause was not established. The study concluded that heavy energy-drink use was linked with higher stress and shorter sleep.</p>
            <p><small>103 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method: who, where, when and how data were collected (sentence 2) → findings with the key numbers (sentence 3) → limitation (sentence 4) → conclusion (sentence 5). Past tense, third person, no opinion. The background paragraph, the moderate-user figure, the racing heartbeat and the recommendations were dropped to stay near 100 words. The sleep gap is given as "1.5 hours less" (6.6 minus 5.1) so that one figure replaces two.</p></div>
            <div class="note trap"><p>Do not copy sentences such as "A study was conducted to examine..." from the article. Rewrite each point in your own sentence. Also avoid "energy drinks cause stress": the article says the study "did not establish cause", so write "linked with" or "associated with".</p></div>`,
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the given case study of a conflict situation and answer the questions that follow in 50–80 words.</p>`,
          passage: `<p>Four second-year students are at a 36-hour college hackathon, building a lost-and-found app for their campus. With 24 hours left and a working demo due before the judges at 10 a.m. tomorrow, they still have not agreed on which feature to build first.</p>
            <p><b>Nikhil</b> insists that the team build an AI image-matching feature first, saying "it is the only thing that will impress the judges", and starts coding it without waiting for the others.</p>
            <p><b>Sneha</b> would rather start with a simple screen for posting lost items, but she says, "Fine, let's just do what Nikhil wants," and begins helping him.</p>
            <p><b>Arjun</b> asks each member to explain their reasons in detail and suggests spending the next few hours studying the judging criteria and user needs together, so that the team can design a plan that fully satisfies everyone.</p>
            <p><b>Divya</b> suggests building the posting screen first and adding a simple keyword search in place of full image matching, so that each member gets part of what they want and the team can start coding within the hour.</p>`,
          parts: [
            { text: 'a) Identify the approaches to handling conflict shown by Nikhil, Sneha, Arjun and Divya.', marks: 5 },
            { text: 'b) If the team must reach a decision quickly and does not need a perfect answer, whose approach would be most appropriate? Explain why.', marks: 5 }
          ],
          answer: `
            <h4>a) Approaches</h4>
            <p>Nikhil is <b>competing</b>: he insists his AI feature is "the only thing" that will impress the judges and starts coding alone. Sneha is <b>accommodating</b>: she gives up her own preference for a posting screen and helps Nikhil to keep the peace. Arjun is <b>collaborating</b>: he wants every member's reasons explored in depth to reach a plan that fully satisfies all four. Divya is <b>compromising</b>: each member gets part of what they want, quickly.</p>
            <p><small>77 words</small></p>
            <h4>b) Most appropriate approach</h4>
            <p><b>Divya's compromising</b> approach fits best. With 24 hours left and a demo due at 10 a.m., a quick, workable decision matters more than a perfect one. Her plan gives everyone something: a posting screen that works and a simpler search in place of image matching. Collaborating, as Arjun suggests, is ideal when time allows, but hours of discussion would eat into build time the team cannot spare. Competing or accommodating would leave someone resentful.</p>
            <p><small>74 words</small></p>
            <div class="note why"><p>Collaborating usually gives the best result, because it looks for a solution that meets everyone's needs in full. But it is slow: it needs time to explore every concern. The question sets two conditions, a fast decision and no need for a perfect answer, and those are exactly the conditions for compromising. Each member gives up a little, the team starts coding at once, and the demo is more likely to be finished.</p></div>
            <div class="note trap"><p>Do not choose Sneha because she ends the argument fastest. Accommodating is quick, but it hands the whole decision to Nikhil and ignores the other members' concerns, and his risky feature may not be ready by 10 a.m. Speed alone is not the goal; a quick decision that the whole team accepts is.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.3', 'm5-styles.2', 'm5-choosing.1', 'm5-tki.2']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You have completed your B.Tech in Electronics and Communication Engineering and are applying for an M.Tech in VLSI Design at a leading university. Write a Statement of Purpose (200–250 words) explaining your academic background, interest in VLSI design, relevant project experience and skills, career goals, and how the postgraduate programme will help you achieve these goals.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Admissions Committee,</p>
            <p>I have completed my B.Tech in Electronics and Communication Engineering at VIT with a CGPA of 8.7 out of 10, and I am applying for the M.Tech in VLSI Design at your university. I want to design the low-power chips that phones, wearables and electric vehicles depend on.</p>
            <p>My interest in chip design began in the Digital Logic Design course, where I built a traffic-light controller on an FPGA board and saw a few lines of Verilog become working hardware. I then chose Digital IC Design and CMOS VLSI as electives. For my final-year project, I designed a 16-bit RISC processor in Verilog, verified it with 120 test programs, and cut its power use by 18 per cent through clock gating. During a two-month internship at a chip design firm in Bengaluru, I wrote testbenches for a memory controller and learnt to read timing reports.</p>
            <p>This work showed me how much I still need to learn about physical design, analogue layout and testing. Your programme would give me that depth, hands-on practice with industry-standard design tools, and a thesis on a real design problem.</p>
            <p>After the M.Tech, I aim to work as a physical design engineer and, in the long term, to help grow India's chip design industry. I would be grateful for the chance to study at your university, and I thank the committee for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>239 words</small></p>
            <div class="note exam"><p>How it was built: opening (degree, CGPA, the exact programme, a one-line goal) → how the interest began, shown by a small FPGA project → proof of skill (electives, a processor project with 120 test programs and an 18 per cent power saving, an internship task) → what the programme adds (the gaps you name yourself) → career goal and a polite close. No subheadings, active voice ("I designed", "I wrote"), and every point in the question is covered.</p></div>
            <div class="note trap"><p>"I have always been passionate about electronics" proves nothing; "I cut its power use by 18 per cent through clock gating" does. Do not name a professor, lab or chip tool you are not sure the university has. "Industry-standard design tools" is safe.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5']
        }
      ]
    },
    {
      id: 'model-08', kind: 'model', title: 'Model paper 8', short: 'Model paper 8', sub: 'Same pattern as CAT-2 · Passage: e-waste',
      meta: [['Pattern', 'Same as CAT-2 (C2+TC2)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions of the following words (2 marks each).</p><div class="chips"><span class="chip">a) Cloud storage</span><span class="chip">b) Vlog</span><span class="chip">c) Microwave oven</span><span class="chip">d) Thermometer</span><span class="chip">e) Voltage</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) Cloud storage</b> Cloud storage is an online data-storage service that keeps a user's files on remote servers run by a provider, so they can be reached over the internet from any device.</p>
            <p><b>b) Vlog</b> A vlog is an online video series in which the creator records and shares daily life, travel or opinions, usually speaking straight to the camera, for example a student's hostel-life channel.</p>
            <p><b>c) Microwave oven</b> A microwave oven is an electric kitchen appliance that heats and cooks food quickly by sending electromagnetic waves through it, which make water molecules in the food vibrate and produce heat.</p>
            <p><b>d) Thermometer</b> A thermometer is a measuring instrument that shows the temperature of a person, object or place in degrees, using either a liquid that expands along a marked scale or an electronic sensor.</p>
            <p><b>e) Voltage</b> Voltage is the difference in electric potential between two points in a circuit, which drives current between them; it is measured in volts, for example 230 volts at an Indian wall socket.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Cloud storage</td><td>an online data-storage service</td><td>files kept on a provider's remote servers, reached from any device</td></tr>
                <tr><td>Vlog</td><td>an online video series</td><td>creator records daily life or opinions, speaks to the camera</td></tr>
                <tr><td>Microwave oven</td><td>an electric kitchen appliance</td><td>heats food with electromagnetic waves that make water molecules vibrate</td></tr>
                <tr><td>Thermometer</td><td>a measuring instrument</td><td>shows temperature in degrees, by liquid on a scale or a sensor</td></tr>
                <tr><td>Voltage</td><td>a difference in electric potential</td><td>between two points in a circuit, drives current, measured in volts</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"A thermometer is used to measure temperature" starts with "is used to" and has no class. "Voltage is the current in a wire" confuses two different quantities: voltage pushes, current is the flow. "A vlog is when someone films their life" uses "is when". Give the class first, then what makes this item different from others in the class.</p></div>
            <div class="note why"><p>"Vlog" is short for <em>video blog</em>; you can add this in brackets for a fuller answer. Do not define "microwave oven" as "an oven that uses microwaves": the term is repeated, so the definition is circular. Say what the waves do to the food instead.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.3']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the given passage and answer the questions that follow.</p>`,
          passage: `<p>Electronic waste, or e-waste, includes discarded phones, laptops, chargers, televisions and batteries. The world now produces more than 60 million tonnes of it a year, and the amount is rising faster than the capacity to handle it safely. Old devices contain valuable metals such as copper, gold and cobalt, but also lead, mercury and flame-retardant chemicals. In many low- and middle-income countries, much of this waste reaches informal workshops, where workers without protective equipment burn cables to recover copper or soak circuit boards in acid to extract gold. The smoke and runoff contaminate the soil, water and air of nearby neighbourhoods.</p>
            <p>Official statistics often report a country's "recycling rate" as a sign of progress. However, this figure usually measures the share of e-waste that is collected and sent for recycling, not the share whose materials are actually recovered safely. Some collected devices are exported as "used goods" and end up in the same informal workshops. Even in formal plants, many metals present in small amounts are lost because separating them costs more than they are worth. A rising recycling rate can therefore hide as much as it reveals. Reducing harm depends less on collection targets than on tracking where waste finally goes and on designing devices that are easier to repair and take apart.</p>`,
          parts: [
            { text: 'Why does a high "recycling rate" not necessarily show that e-waste is being handled safely?', marks: 2 },
            { text: 'What can be inferred about why informal workshops continue to process e-waste despite the health risks?', marks: 2 },
            { text: 'Explain how exporting old devices as "used goods" could make a country\'s recycling figures look better than the real situation.', marks: 3 },
            { text: 'The passage suggests that collection targets alone are not enough. Explain why tracking waste and designing better devices are also needed.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> The figure usually measures the share of e-waste "that is collected and sent for recycling, not the share whose materials are actually recovered safely". A device can therefore count as "recycled" and still be exported to an informal workshop, or lose most of its metals in a formal plant. A high rate shows good collection, not safe recovery (paragraph 2).</p>
            <p><b>2.</b> The passage does not say this directly, but it can be inferred that <b>the work pays</b>. Old devices contain "valuable metals such as copper, gold and cobalt", and workers burn cables "to recover copper" and use acid "to extract gold". Since they work "without protective equipment", we can also infer that safe facilities and enforced rules are lacking, so these cheap, harmful methods continue (paragraph 1).</p>
            <p><b>3.</b> Devices sent abroad as "used goods" have already been "collected", so they are likely counted in the exporting country's recycling rate. The figure records that the waste left the country, not what happened to it. In fact, they "end up in the same informal workshops", where cables are burnt and boards are soaked in acid. The harm is moved to another place, not removed, which is why a rising rate "can therefore hide as much as it reveals".</p>
            <p><b>4.</b> Collection is only the first step; the harm depends on what happens next. <b>Tracking</b> is needed because collected devices can leak out as exports and reach informal workshops, and only tracking "where waste finally goes" shows whether they were recovered safely. <b>Better design</b> is needed because formal plants lose metals present in small amounts when separating them "costs more than they are worth". Devices that are "easier to repair" create less waste, and devices that are easier to "take apart" make recovery cheaper and safer.</p>
            <div class="note trap"><p>Do not answer 1 with "recycling rates are false". The author says a rising rate "can hide as much as it reveals": it does show something (collection), just not safe recovery. In 2 and 3, write "it can be inferred" or "they are likely counted", because the passage gives clues rather than stating the answer.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the following article and write a clear and well-structured abstract in about 100 words.</p>`,
          passage: `<p>University libraries have changed greatly in the digital age. Students can now download e-books, journal articles and notes on their phones, and many rarely enter the library building. Some administrators have therefore asked whether large reading halls are still worth their cost. Librarians reply that the library offers something a hostel room cannot: a quiet space with few distractions, where studying becomes a habit.</p>
            <p>A study was conducted to examine whether regular use of the library building is associated with students' academic performance. It also investigated whether the purpose of a visit, such as self-study, borrowing books or using the Wi-Fi, made any difference.</p>
            <p>The study followed 240 second-year undergraduates from four departments of a university in Chennai for one semester. Visits were recorded through the electronic entry gate, which students pass with their identity cards. Students also completed a questionnaire on how long they stayed and what they mainly did in the library. With their consent, their semester grade point averages (GPAs) were taken from university records. Students were then placed in three groups: frequent users (three or more visits a week), occasional users (one or two) and rare users (fewer than one).</p>
            <p>Frequent users had an average GPA of 8.1 out of 10, compared with 7.6 for occasional users and 7.0 for rare users. The difference was clearest among students who went mainly for quiet self-study; those who visited mostly for the Wi-Fi or to meet friends scored about the same as rare users. However, the study did not show that library use causes better grades. Students who are already motivated, or who had higher earlier grades, may simply visit the library more often.</p>
            <p>The findings suggest that regular, focused library use is linked with better results. Universities may support students by keeping reading halls open longer before examinations and protecting quiet zones. Further research that follows students over several years and accounts for their earlier grades could show whether library use actually improves performance.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study examined whether regular use of a university library was associated with undergraduates' grades, and whether the purpose of visits mattered. Over one semester, 240 second-year students from four departments at a Chennai university were tracked through entry-gate records and a questionnaire, and their GPAs were obtained with consent. Students visiting three or more times weekly averaged 8.1 out of 10, compared with 7.6 for occasional and 7.0 for rare visitors. The gap appeared mainly among those using the library for quiet self-study. Because motivation and earlier grades were not controlled, no causal link was established. Longer studies were recommended.</p>
            <p><small>101 words</small></p>
            <div class="note exam"><p>How it was built: aim, including the second question about purpose (sentence 1) → method: who, where, how long, and the three data sources (sentence 2) → findings with the key numbers and the self-study detail (sentences 3–4) → the no-causation limit and the recommendation (sentences 5–6). Past tense, third person, no opinion. The background about e-books and reading-hall costs was dropped, and the three groups are defined through the numbers instead of a separate sentence, to stay near 100 words.</p></div>
            <div class="note trap"><p>Do not write "Using the library improves grades." The article says the study "did not show that library use causes better grades", so the abstract must keep that limit. Also avoid copying whole sentences from the article: "were tracked through entry-gate records" is a fresh sentence carrying the same fact.</p></div>`,
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the given case study of a conflict situation and answer the questions that follow.</p>`,
          passage: `<p>Rohan, Kavya, Aditi and Imran must submit their physics lab report on the simple pendulum by 9 a.m. tomorrow. The report has four sections of about the same length, introduction, method, results and discussion, and the group will receive one shared mark. At the evening meeting they disagree over who writes which section.</p>
            <p>Rohan announces that he will write the introduction because it is the easiest, tells the others to divide the rest among themselves, and refuses to discuss it further. Imran stays silent during the argument, then leaves early saying he will "do whatever is left", and does not reply to the group's messages. Kavya took most of the readings and worked out why two of them were wrong, so she very much wants to write the discussion. Aditi had also planned to write it, but she says, "It clearly matters more to Kavya than to me. Let her take it, and I'll do the method." Kavya, worried about hurting Aditi, suggests that they each write half of the discussion instead.</p>`,
          parts: [
            { text: 'a) Identify the different approaches to handling conflict demonstrated by Rohan, Imran, Aditi and Kavya.', marks: 5 },
            { text: 'b) If the group wants to keep the peace on this minor point, which matters far more to one member than to the others, whose approach would be most appropriate? Explain why.', marks: 5 }
          ],
          answer: `
            <h4>a) Approaches</h4>
            <p>Rohan is <b>competing</b>: he takes the easiest section for himself, gives orders and refuses to discuss it. Imran is <b>avoiding</b>: he stays silent, leaves early and ignores messages, so his part stays unsettled. Aditi is <b>accommodating</b>: she gives up the discussion section she wanted because it matters more to Kavya. Kavya is <b>compromising</b>: she offers to split the discussion so each of them gets half.</p>
            <p><small>69 words</small></p>
            <h4>b) Most appropriate approach</h4>
            <p><b>Aditi's accommodating approach</b> fits best. The point is minor: all sections are equal in length and the group shares one mark. Aditi cares less, while Kavya took the readings and understands the errors, so she will write the stronger discussion. Giving way costs Aditi little, settles the issue at once with the report due tomorrow, and builds goodwill. Kavya's split would give two voices to merge overnight and give neither what she wants.</p>
            <p><small>73 words</small></p>
            <div class="note why"><p>Accommodating is right here because of three facts in the case: the issue is small, the other person cares far more, and there is no time for a long discussion. Collaborating would take too long for a point this minor, and Kavya's compromise sounds fair but splits one section between two writers for no real gain. If the argument were about something important, such as whose data goes in the results, accommodating would be the wrong choice.</p></div>
            <div class="note trap"><p>Do not confuse Imran and Aditi. Both give way in a sense, but Aditi settles the issue (Kavya's way), which is accommodating. Imran leaves it unsettled and withdraws, which is avoiding. Also note who should accommodate: the member who cares less (Aditi), not Kavya.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.0', 'm5-styles.3', 'm5-choosing.1', 'm5-tki.2']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You have completed your B.Tech in Mechanical Engineering and have worked for two years in industry. You are now applying for an MBA in Business Analytics at a leading business school. Write a Statement of Purpose (200–250 words) explaining your academic background, work experience, interest in business analytics, relevant skills, career goals, and how the programme will help you achieve these goals.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Admissions Committee,</p>
            <p>I am applying for the MBA in Business Analytics at your school. I hold a B.Tech in Mechanical Engineering from VIT, and for the past two years I have worked as a production planning engineer at an automotive parts manufacturer in Chennai.</p>
            <p>I graduated with a CGPA of 8.4 out of 10. My final-year project used vibration data from a lathe to predict tool wear, and it first showed me how much a few well-chosen numbers can reveal.</p>
            <p>At work, I plan daily output for three assembly lines. Our weekly reports recorded machine downtime, but nobody analysed it, so I taught myself SQL and Power BI and built a dashboard that linked each stoppage to its cause. My team used it to cut unplanned downtime by 18% in six months, and managers now open it in every Monday review. This project showed me that my real interest lies where data meets business decisions, and that I need formal training in statistics, forecasting and management to go further.</p>
            <p>Your programme combines analytics courses with core management subjects and live industry projects, which suits this aim closely. I would bring a practical, shop-floor view of how operations actually run.</p>
            <p>After the MBA, I plan to work as a supply-chain analytics consultant, helping manufacturers use their own data to plan better. Thank you for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>234 words</small></p>
            <div class="note exam"><p>How it was built: opening (the exact programme, your degree and your current job) → academic background with proof (a CGPA and a data-based project) → work experience with a measurable result (the dashboard and the 18% cut), which also explains why you want this MBA → why this programme and what you bring → career goal and a polite close. No subheadings, and almost every sentence starts with "I", "my" or a clear actor, so the voice stays active.</p></div>
            <div class="note trap"><p>A change of field needs a bridge. Do not just say "I am passionate about analytics": the downtime dashboard shows how a mechanical engineer came to want this degree. Do not name a professor or course you have not checked; "analytics courses with core management subjects" is safe and true of most such programmes.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5']
        }
      ]
    },
    {
      id: 'model-09', kind: 'model', title: 'Model paper 9', short: 'Model paper 9', sub: 'Same pattern as CAT-2 · Passage: urban heat islands',
      meta: [['Pattern', 'Same as CAT-2 (C2+TC2)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions of the following words.</p><div class="chips"><span class="chip">a) Smart TV</span><span class="chip">b) Wi-Fi</span><span class="chip">c) Solar panel</span><span class="chip">d) Barometer</span><span class="chip">e) Friction</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) Smart TV</b> A smart TV is a television that connects to the internet and runs apps, so viewers can stream films and shows directly, for example watching YouTube without a set-top box.</p>
            <p><b>b) Wi-Fi</b> Wi-Fi is a wireless networking technology that uses radio waves to connect phones, laptops and other devices to a local network and the internet, usually through a router, without cables.</p>
            <p><b>c) Solar panel</b> A solar panel is a flat device made of photovoltaic cells that converts sunlight directly into electricity, commonly fitted on rooftops to power homes or charge batteries.</p>
            <p><b>d) Barometer</b> A barometer is a scientific instrument that measures atmospheric pressure and helps forecasters predict the weather; a falling reading, for example, often signals that rain or a storm is coming.</p>
            <p><b>e) Friction</b> Friction is a force that resists the movement of one surface sliding or rolling over another, producing heat and wear; it lets tyres grip the road but also slows machines.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>Smart TV</td><td>a television</td><td>connects to the internet, runs apps, streams content directly</td></tr>
                <tr><td>Wi-Fi</td><td>a wireless networking technology</td><td>uses radio waves to link devices to a network without cables</td></tr>
                <tr><td>Solar panel</td><td>a flat device made of photovoltaic cells</td><td>converts sunlight directly into electricity</td></tr>
                <tr><td>Barometer</td><td>a scientific instrument</td><td>measures atmospheric pressure, used to forecast weather</td></tr>
                <tr><td>Friction</td><td>a force</td><td>resists one surface moving over another, causes heat and wear</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"Friction is when two things rub" uses "is when" and has no class. "A smart TV is a TV that is smart" is circular: it repeats the term instead of explaining it. "A barometer is a device that measures pressure" is too broad, because a tyre gauge also measures pressure; the word <em>atmospheric</em> is the feature that separates it.</p></div>
            <div class="note exam"><p>Choose the nearest class, not the widest one. "A smart TV is a television" tells the examiner more than "a smart TV is a device", and it leaves you only the internet and apps to explain.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.4']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the given passage and answer the questions that follow.</p>`,
          passage: `<p>Cities are often several degrees warmer than the countryside around them, an effect known as the urban heat island. Concrete, asphalt and dark roofs absorb sunlight during the day and release the stored heat slowly after sunset, while tall buildings block the wind and vehicles and air conditioners add waste heat. Trees and open soil, which cool the air by releasing water vapour, are scarce in densely built areas. As a result, the gap between city and countryside is usually greatest at night, when rural land cools quickly but city streets continue to give off warmth.</p>
            <p>A single average temperature for a city can conceal how unevenly this heat is shared. A neighbourhood with tree-lined roads and a lake may stay several degrees cooler than a crowded area of tin-roofed houses and narrow lanes only a few kilometres away. Official weather stations are often placed at airports or in parks, so they may not record the conditions where most residents live. The hottest areas are frequently home to the people least able to cope, such as outdoor workers and families who cannot afford fans or air conditioning. Planning that relies only on citywide figures may therefore send shade, cooling centres and heat warnings to the wrong places.</p>`,
          parts: [
            { text: 'Why is the temperature difference between a city and the countryside usually greatest at night?', marks: 2 },
            { text: 'Why might readings from official weather stations fail to show the heat that many city residents experience?', marks: 2 },
            { text: 'What can be inferred about the link between how wealthy a neighbourhood is and how much heat its residents face? Justify your answer with reference to the passage.', marks: 3 },
            { text: 'The passage suggests that relying on a city\'s average temperature can be misleading. Explain why planners need information about individual neighbourhoods.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> During the day, concrete, asphalt and dark roofs <b>absorb sunlight and store heat</b>, which they "release ... slowly after sunset". At night, rural land "cools quickly", but city streets "continue to give off warmth". So the countryside loses its heat fast while the city keeps releasing heat, and the gap between them grows (paragraph 1).</p>
            <p><b>2.</b> The stations are "often placed at airports or in parks", which are open or green spaces and usually cooler than crowded housing. They "may not record the conditions where most residents live", such as dense areas of "tin-roofed houses and narrow lanes". Their readings therefore reflect the cooler parts of the city, not the hottest ones (paragraph 2).</p>
            <p><b>3.</b> It can be inferred that <b>poorer neighbourhoods tend to be hotter</b>. The hotter area in the example has "tin-roofed houses and narrow lanes", while the cooler one has "tree-lined roads and a lake". The passage then says the hottest areas are "frequently home to the people least able to cope", including families "who cannot afford fans or air conditioning". So the residents with the least money often face the most heat and have the fewest ways to escape it.</p>
            <p><b>4.</b> An average mixes cool and hot areas into one figure, so it hides the fact that one neighbourhood may be "several degrees cooler" than another "only a few kilometres away". The hottest areas also hold the most vulnerable people. If planners use only "citywide figures", they may send "shade, cooling centres and heat warnings to the wrong places". Neighbourhood data shows exactly where heat is worst and who is at risk, so help reaches the people who need it most.</p>
            <div class="note trap"><p>Answers 1 and 2 are stated in the passage; answers 3 and 4 need inference. The passage never says "poor areas are hotter" in one sentence. You reach that conclusion by joining two details: the tin-roofed houses in the hot area and the families who "cannot afford" cooling. Quote both, then state the link in your own words.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the following article and write a clear and well-structured abstract in about 100 words.</p>`,
          passage: `<p>Many undergraduate students spend long hours sitting in lectures, libraries and hostel rooms, and their physical activity often falls as academic pressure rises. Earlier research has linked regular exercise with better memory in children and older adults, but its effect on young adults preparing for examinations is less clear.</p>
            <p>A study was conducted to find out whether fifteen minutes of moderate exercise each day could improve memory test scores among undergraduate students. It also examined whether any improvement depended on how regularly the students exercised.</p>
            <p>The study involved 96 undergraduates aged 18–22 from four departments of a university in Chennai. They were randomly divided into two groups of 48. For six weeks, the exercise group walked briskly or cycled for fifteen minutes every morning, while the control group kept to their normal routine. All participants took a 30-word recall test and a number-sequence test at the start and end of the study. The exercise group also kept a daily activity log. Ninety students completed the study.</p>
            <p>The exercise group's average word-recall score rose from 14.2 to 17.5 words, an improvement of about 23 per cent, while the control group's score rose only slightly, from 14.4 to 15.0. Students who exercised on at least five days a week gained more than those who exercised less often. Scores on the number-sequence test changed little in either group. However, the study lasted only six weeks, the activity logs were self-reported, and students knew which group they were in, which may have affected their effort in the tests. Sleep and stress levels were not measured.</p>
            <p>The findings suggest that a short daily bout of exercise may be a simple, low-cost way to support students' memory. Universities could encourage the habit by providing safe walking paths and timetables with morning breaks. Further research with larger samples, longer periods and objective activity trackers could confirm whether the benefits last.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study examined whether fifteen minutes of daily exercise improved memory test scores among undergraduates. Ninety-six students aged 18–22 at a Chennai university were randomly assigned to a control group or an exercise group that walked briskly or cycled each morning for six weeks. Both groups took word-recall and number-sequence tests before and after. Among the 90 who finished, the exercise group's average recall rose from 14.2 to 17.5 words, while the control group's rose only slightly. Regular exercisers gained most, but number-sequence scores changed little. The short duration and self-reported logs limit these findings. Short daily exercise may nonetheless support students' memory.</p>
            <p><small>103 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method: who, how the groups were formed, what each group did and how memory was tested (sentences 2–3) → findings with the key numbers, including the test that showed no change (sentences 4–5) → limitations and conclusion (sentences 6–7). Past tense, third person, no opinion. The background on children and older adults and the advice about walking paths were dropped: an abstract reports the study, not its setting or its suggestions for others.</p></div>
            <div class="note trap"><p>Do not write "exercise improves memory". The article says exercise "may be" a way to support memory and lists reasons for caution, so the abstract must keep that caution. Leaving out the limitations turns a careful finding into an overclaim, and examiners look for it.</p></div>`,
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the given case study of a conflict situation and answer the questions that follow in 50–80 words each.</p>`,
          passage: `<p>Nithya is the convenor of her college's cultural fest, which this year has the theme "Green Campus" and a public pledge to be plastic-free. A soft-drinks company has offered ₹1.5 lakh, the largest sponsorship so far, on condition that it can hand out free drinks in plastic bottles at every venue. The four members of the sponsorship team disagree about how to respond.</p>
            <p><b>Arjun, Sponsorship Head:</b> Arjun says the fest cannot afford to lose ₹1.5 lakh and insists on signing the deal exactly as offered. He calls the plastic-free pledge "just a slogan" and tells the others that the final decision is his.</p>
            <p><b>Priya, Sustainability Coordinator:</b> Priya feels the bottles break the fest's pledge, but when Arjun grows annoyed she drops her objection and offers to arrange extra dustbins so that the deal can go ahead.</p>
            <p><b>Sameer, Treasurer:</b> Sameer proposes accepting the money but allowing the bottles only at the food court, not at every venue, even if the company then pays a little less. He admits nobody will be fully happy, but wants the matter settled this week.</p>
            <p><b>Kavya, Events Coordinator:</b> Kavya suggests meeting the company to learn what it really wants from the fest. She asks Arjun and Priya what matters most to each of them, and proposes options such as drinks in recyclable cans, branded dispensers with reusable cups, and a campus recycling drive that the company could sponsor.</p>
            <p>Nithya wants to keep this sponsor while respecting the fest's plastic-free pledge and the concerns of every team member.</p>`,
          parts: [
            { text: 'Identify the different approaches to handling conflict shown by Arjun, Priya, Sameer and Kavya.', marks: 5 },
            { text: 'If the team wants a solution that keeps the relationship with the sponsor and meets everyone\'s concerns, whose approach would be most appropriate? Explain why.', marks: 5 }
          ],
          answer: `
            <h4>1. Approaches</h4>
            <p>Arjun is <b>competing</b>: he insists on signing the deal unchanged, dismisses the pledge as "just a slogan" and claims the decision is his. Priya is <b>accommodating</b>: she believes the bottles break the pledge but gives in when Arjun is annoyed. Sameer is <b>compromising</b>: he splits the demand, allowing bottles only at the food court for less money. Kavya is <b>collaborating</b>: she asks the sponsor and each member what they need and suggests new options.</p>
            <p><small>78 words</small></p>
            <table class="tbl">
              <thead><tr><th>Member</th><th>Style</th><th>Assertive?</th><th>Cooperative?</th></tr></thead>
              <tbody>
                <tr><td>Arjun</td><td>Competing</td><td>High</td><td>Low</td></tr>
                <tr><td>Priya</td><td>Accommodating</td><td>Low</td><td>High</td></tr>
                <tr><td>Sameer</td><td>Compromising</td><td>Medium</td><td>Medium</td></tr>
                <tr><td>Kavya</td><td>Collaborating</td><td>High</td><td>High</td></tr>
              </tbody>
            </table>
            <h4>2. The most appropriate approach</h4>
            <p><b>Kavya's collaborating</b> approach fits best. It is both assertive and cooperative, so it looks for a solution that fully satisfies everyone rather than a trade-off. Cans or branded dispensers give the company the same visibility, keep the ₹1.5 lakh Arjun wants, and honour the pledge Priya cares about. Sameer's compromise would still break the pledge at the food court, and Arjun's and Priya's approaches leave one side losing, which could damage the relationship.</p>
            <p><small>73 words</small></p>
            <div class="note why"><p>Sameer and Kavya both look for a middle way, but Sameer divides the existing demand in half, so everyone gives something up. Kavya asks <em>why</em> the company wants bottles at every venue (visibility and reaching students) and meets that need in a new way. Asking about the interest behind a demand is what marks collaborating. It suits this case because the sponsor, the money and the pledge all matter, and the team has time to talk.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.3', 'm5-styles.4', 'm5-choosing.1', 'm5-tki.2']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You have completed your B.Tech. in Electrical and Electronics Engineering and are applying for an M.S. in Robotics at a leading university. Write a Statement of Purpose (200–250 words) explaining your academic background, interest in robotics, relevant project experience and skills, career goals, and how the postgraduate programme will help you achieve these goals.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Admissions Committee,</p>
            <p>I have completed my B.Tech in Electrical and Electronics Engineering at VIT, India, and I am applying for the M.S. in Robotics at your university. I want to build robots that work safely and precisely in real workplaces.</p>
            <p>I graduated with a CGPA of 8.7 out of 10, with my best grades in Control Systems, Power Electronics and Microcontrollers. These courses showed me how motors, sensors and feedback loops work together, and they drew me to robotics. In my final year, I led a team of three that built a warehouse robot using an STM32 board, PID motor control and ultrasonic sensors. It carried loads of up to 5 kg, and tuning the controller cut its path-tracking error by 40%. During a two-month internship at an automation firm in Chennai, I programmed a robotic arm to sort parts on a conveyor and learnt the basics of ROS. I also code in Python and C and model systems in MATLAB and Simulink.</p>
            <p>My electrical background is strong, but I need advanced study in kinematics, computer vision and motion planning. A master's programme with laboratory projects would give me that knowledge and the practice to apply it.</p>
            <p>After the degree, I aim to work as a robotics engineer developing mobile robots for warehouses and hospitals, and later to lead such a team. Thank you for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>236 words</small></p>
            <div class="note exam"><p>How it was built: opening (who you are, the exact programme, the aim) → academic background with proof (a CGPA, three relevant subjects, a project with a load and an error figure, an internship with a task) → the gap the programme fills (what an EEE degree does not cover) → career goal and a polite close. No subheadings, active voice ("I led", "I programmed"), first person throughout. A master's SoP should point forward to research or a career, as well as back to past marks.</p></div>
            <div class="note trap"><p>Do not name a professor, lab or course at the university unless you have checked it; a wrong detail suggests the SoP was copied. "Kinematics, computer vision and motion planning" is safe, because every robotics master's covers them. Leave out "I have been passionate about robots since childhood": the warehouse robot shows the interest far better.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5']
        }
      ]
    },
    {
      id: 'model-10', kind: 'model', title: 'Model paper 10', short: 'Model paper 10', sub: 'Same pattern as CAT-2 · Passage: antibiotic resistance',
      meta: [['Pattern', 'Same as CAT-2 (C2+TC2)'], ['Duration', '90 minutes'], ['Max marks', '50'], ['Questions', '5 × 10 marks']],
      instructions: `Answer all questions. M = maximum marks; CO = course outcome; BL = Bloom's taxonomy level (1 Remember, 2 Understand, 3 Apply, 4 Analyse, 5 Evaluate, 6 Create).<br>Course outcomes: 1. Enhance writing skills for better publication. 4. Demonstrate analytical reading skills in terms of deciphering research articles. 6. Interpret scenarios that highlight concepts related to interpersonal communication.`,
      questions: [
        {
          n: '1', marks: 10, co: '4', bl: '3',
          prompt: `<p>Write down definitions of the following words.</p><div class="chips"><span class="chip">a) E-book</span><span class="chip">b) Streaming</span><span class="chip">c) Air conditioner</span><span class="chip">d) Microscope</span><span class="chip">e) Speed</span></div>`,
          answer: `
            <p>Each answer: <b>term + class + distinguishing features</b>, then one clarifying phrase or example.</p>
            <p><b>a) E-book</b> An e-book is a book in digital form that is read on a screen such as a phone or e-reader, with searchable and resizable text, for example a downloaded textbook.</p>
            <p><b>b) Streaming</b> Streaming is a way of delivering audio or video over the internet that plays as the data arrives, with no full download first, such as a live match on a phone.</p>
            <p><b>c) Air conditioner</b> An air conditioner is an electrical appliance that cools and dries the air in a room or vehicle by moving heat outdoors, holding it at a set temperature such as 24°C.</p>
            <p><b>d) Microscope</b> A microscope is a scientific instrument that uses lenses or a beam of electrons to magnify objects too small for the naked eye, such as bacteria or blood cells.</p>
            <p><b>e) Speed</b> Speed is a physical quantity that measures how fast an object moves, found by dividing distance travelled by time taken, for example 60 km in one hour is 60 km/h.</p>
            <table class="tbl">
              <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
              <tbody>
                <tr><td>E-book</td><td>a book in digital form</td><td>read on a screen, text can be searched and resized</td></tr>
                <tr><td>Streaming</td><td>a way of delivering audio or video</td><td>plays over the internet as data arrives, no full download first</td></tr>
                <tr><td>Air conditioner</td><td>an electrical appliance</td><td>cools and dries air by moving heat outdoors, holds a set temperature</td></tr>
                <tr><td>Microscope</td><td>a scientific instrument</td><td>uses lenses or electrons to magnify objects too small to see</td></tr>
                <tr><td>Speed</td><td>a physical quantity</td><td>how fast an object moves; distance divided by time</td></tr>
              </tbody>
            </table>
            <div class="note trap"><p>"Streaming is watching videos online" has no class and misses the feature that separates it from downloading. "Speed is how fast something goes" uses "is how" in place of a class. "An air conditioner is a machine" gives a class but no features, so it could just as well describe a fan or a fridge.</p></div>
            <div class="note why"><p>Speed has size but no direction. If you add "in a stated direction", you have defined velocity, a different quantity. Keep the formula (distance ÷ time) and one unit: they are the features that make the definition exact.</p></div>`,
          topics: ['m3-sentence-def', 'm3-expanded'],
          notes: ['m3-sentence-def.1', 'm3-sentence-def.2', 'm3-expanded.3']
        },
        {
          n: '2', marks: 10, co: '4', bl: '3',
          prompt: `<p>Read the given passage and answer the questions that follow.</p>`,
          passage: `<p>Antibiotics are medicines that kill bacteria or stop them from multiplying. When a patient takes an antibiotic, most of the bacteria causing an infection die within a few days, but a few may survive because genetic differences make them harder to kill. If the patient stops taking the drug earlier than the doctor advised, often because they already feel better, these tougher survivors can multiply and the infection may return. Resistant bacteria can also pass their resistance genes to other kinds of bacteria, and bacteria move easily from one body to another through touch, food, water and shared spaces such as hospital wards.</p>
            <p>Over-prescription adds to the problem. Antibiotics have no effect on viruses, yet they are often prescribed for colds and flu, partly because patients expect them and doctors have little time to explain. They are also sold without prescription in many countries and given to farm animals to speed up growth. Every unnecessary dose gives resistant bacteria another chance to outgrow the sensitive ones. Few new antibiotics have been developed in recent decades, so a drug that stops working may have no replacement. Resistance therefore endangers many people besides those who misuse a drug, including patients having surgery, cancer treatment or a caesarean delivery, who rely on antibiotics to prevent infection.</p>`,
          parts: [
            { text: 'Why might an infection return if a patient stops taking an antibiotic earlier than the doctor advised?', marks: 2 },
            { text: 'What can be inferred about the relationship between how often antibiotics are used and how quickly resistance spreads?', marks: 2 },
            { text: 'Explain how giving antibiotics to farm animals could contribute to resistance in people who have never taken those drugs themselves.', marks: 3 },
            { text: 'The passage suggests that the misuse of antibiotics affects far more people than the patient who misuses them. Explain why.', marks: 3 }
          ],
          answer: `
            <p><b>1.</b> An antibiotic kills most of the bacteria "within a few days", but "a few may survive" because genetic differences make them harder to kill. If the course stops early, "these tougher survivors can multiply and the infection may return". Feeling better does not mean every bacterium is dead; the ones left alive are the hardest to kill.</p>
            <p><b>2.</b> The more often antibiotics are used, the faster resistance is likely to spread. The passage says "Every unnecessary dose gives resistant bacteria another chance to outgrow the sensitive ones". Each dose kills sensitive bacteria and leaves resistant ones with less competition, so frequent or needless use steadily increases the share of bacteria that the drug cannot kill.</p>
            <p><b>3.</b> Antibiotics given to farm animals kill the sensitive bacteria in those animals, so the resistant ones survive and multiply. The passage states that bacteria "move easily from one body to another through touch, food, water and shared spaces". A person can therefore pick up resistant bacteria by handling or eating meat, or through water and soil near farms. Since resistant bacteria can "pass their resistance genes to other kinds of bacteria", the person's own gut bacteria may become resistant too, although that person never took the drug.</p>
            <p><b>4.</b> Resistant bacteria do not stay with the patient who created them: they spread through "touch, food, water and shared spaces such as hospital wards" and pass their genes to other bacteria. Because "Few new antibiotics have been developed", a drug that stops working may have no replacement, so the loss affects everyone. The passage names the people most at risk: patients having "surgery, cancer treatment or a caesarean delivery", who "rely on antibiotics to prevent infection". One person's misuse can therefore make routine treatment unsafe for strangers.</p>
            <div class="note exam"><p>Parts 1 and 2 are worth 2 marks: one clear point with a short quotation is enough. Parts 3 and 4 are worth 3 marks: give the chain of reasoning in steps (what happens, how it spreads, who is harmed) and quote at least two phrases. Question 3 is an inference: the passage never says "farm bacteria reach people", so you must join two stated facts yourself.</p></div>
            <div class="note trap"><p>Do not write that "the patient becomes resistant". It is the <em>bacteria</em> that become resistant, not the person's body. Examiners mark this error down because it shows the passage was misread.</p></div>`,
          topics: ['m3-inference', 'm3-inference-practice'],
          notes: ['m3-inference.0', 'm3-inference.1']
        },
        {
          n: '3', marks: 10, co: '1', bl: '3',
          prompt: `<p>Read the following article and write a clear and well-structured abstract in about 100 words.</p>`,
          passage: `<p>AI chatbots that can explain concepts, solve problems and write paragraphs in seconds have become part of student life, and many undergraduates now use them for homework. Teachers welcome the help but worry that students who let a chatbot do the thinking may finish assignments without learning the material, a gap that shows up only in examinations.</p>
            <p>A study was conducted to examine how engineering students' use of AI chatbots for homework was related to their performance in closed-book tests, and whether the purpose of that use made a difference.</p>
            <p>The study involved 240 first-year engineering students at a private university in South India taking the same mathematics course over a fourteen-week semester. Students kept a weekly log of their homework, recording whether they used a chatbot and, if so, whether they used it to obtain full solutions or to ask for explanations. From these logs, 82 students were grouped as mainly copying, 94 as seeking explanations and 64 as non-users. Homework marks and scores in two closed-book tests were taken from course records and compared across the groups.</p>
            <p>Homework marks were similar in all three groups, averaging about 85 per cent, but test scores differed clearly. Students who mainly copied solutions averaged 52 per cent in the tests, compared with 64 per cent for non-users and 71 per cent for those who sought explanations. However, the logs were self-reported and may be inaccurate, and the study could not establish cause and effect, since students who were already weaker in mathematics may have been more likely to copy.</p>
            <p>The findings suggest that how students use chatbots matters more than whether they use them. Using a chatbot as a tutor appears to support learning, while using it to produce answers may hide gaps in understanding until an examination. The researchers recommended that teachers guide students on using such tools and that future studies follow students across several semesters and subjects.</p>`,
          answer: `
            <h4>Model abstract</h4>
            <p>This study examined how engineering students' use of AI chatbots for homework related to their closed-book test scores. Over fourteen weeks, 240 first-year students at a South Indian university logged their mathematics homework, noting whether they used chatbots to copy solutions or seek explanations, and homework and test marks were compared. Homework marks averaged about 85 per cent in every group, but copiers scored 52 per cent in tests, against 64 per cent for non-users and 71 per cent for explanation-seekers. As the logs were self-reported, causation was not established. It concluded that how chatbots were used mattered more than whether they were used.</p>
            <p><small>104 words</small></p>
            <div class="note exam"><p>How it was built: aim (sentence 1) → method: who, where, how long and what was recorded and compared (sentence 2) → findings with the key numbers (sentence 3) → caveat and conclusion (sentences 4–5). Past tense, third person, no opinion, and the sentences are rewritten, not lifted from the article. The group sizes (82, 94, 64) and the recommendations were dropped to stay near 100 words; the caveat stays because it limits what the finding can claim.</p></div>
            <div class="note trap"><p>Do not write "AI chatbots lower test scores". The article shows an association, not a cause: weaker students may simply have copied more. An abstract that overstates the finding loses marks even if every number is correct.</p></div>`,
          topics: ['m4-abstract', 'm4-steps'],
          notes: ['m4-steps.0', 'm4-steps.1', 'm4-abstract.1']
        },
        {
          n: '4', marks: 10, co: '6', bl: '3',
          prompt: `<p>Read the given case study of a conflict situation and answer the questions that follow in 50–80 words each.</p>`,
          passage: `<p>Four second-year students are building a campus events app for a course project and share one code repository. Two weeks before the final demo, they are arguing about code style: tabs or spaces, how to name variables, and whether every change needs a review before it is merged. Their mentor has warned that the mixed styles are already causing merge conflicts.</p>
            <p><b>Nisha</b> set up the repository and insists that everyone follow the style guide she wrote. She rejects any change that does not match it and tells the group, "It's my repo, so it's my rules."</p>
            <p><b>Arjun</b> keeps writing in his own style but stops replying whenever the topic comes up in the group chat. He pushes his code late at night so that no one comments on it before it is merged.</p>
            <p><b>Kavya</b> prefers a different naming style but says she will follow whatever Nisha wants. She spends a weekend rewriting her own code to match, because she does not want a fight before the demo.</p>
            <p><b>Sneha</b> asks the team to meet for an hour and list what each person needs: Nisha wants the code to look consistent, Arjun wants to work fast, and Kavya wants names she can read easily. She suggests a shared guide that covers all three, enforced automatically by a formatting tool, so that no one has to police the others.</p>`,
          parts: [
            { text: 'a) Identify the approaches to handling conflict shown by Nisha, Arjun, Kavya and Sneha.', marks: 5 },
            { text: 'b) If the team used one of these approaches every time a disagreement arose, whose approach would do the most harm? Explain why.', marks: 5 }
          ],
          answer: `
            <h4>a) Approaches</h4>
            <p>Nisha is <b>competing</b>: she imposes her own guide, rejects changes that do not match it and says "It's my repo, so it's my rules." Arjun is <b>avoiding</b>: he goes silent in the chat and pushes code at night to escape discussion. Kavya is <b>accommodating</b>: she gives up her preference and rewrites her code to keep the peace. Sneha is <b>collaborating</b>: she draws out everyone's needs and designs a guide that meets all of them.</p>
            <p><small>78 words</small></p>
            <h4>b) The most harmful approach if used every time</h4>
            <p>Arjun's <b>avoiding</b> would do the most harm. Avoiding decides nothing, so the issue goes underground: his code keeps drifting from the others', merge conflicts pile up, and irritation grows unspoken until it bursts out near the demo. Competing at least produces a rule, and accommodating at least produces consistent code, though each costs someone. Used every time, avoiding lets every small problem grow into a larger one while the team loses trust.</p>
            <p><small>72 words</small></p>
            <div class="note why"><p>Kavya and Arjun both stop arguing, but for different reasons. Kavya drops her own concern so that Nisha is satisfied, which is accommodating. Arjun drops the whole issue and carries on as before, which is avoiding. Avoiding can suit a trivial issue or a cooling-off pause, but a shared code style affects everyone's work every day, so postponing it only makes it costlier.</p></div>
            <div class="note exam"><p>Question b asks for a judgement, so name one person and one style in your first sentence, then argue it. Marks come from the reason: what happens to the team if this style is used again and again, compared briefly with at least one other style.</p></div>`,
          topics: ['m5-tki', 'm5-styles', 'm5-choosing', 'm5-case-study'],
          notes: ['m5-styles.3', 'm5-choosing.1', 'm5-tki.2']
        },
        {
          n: '5', marks: 10, co: '1', bl: '3',
          prompt: `<p>You are a second-year B.Tech Chemical Engineering student applying for a summer research internship in materials science at the Indian Institute of Science (IISc), Bangalore. Write a Statement of Purpose (200–250 words) explaining your academic background, your interest in materials science, relevant project experience and skills, and what you hope to gain from the internship.</p>`,
          answer: `
            <h4>Model SoP</h4>
            <p>Dear Members of the Selection Committee,</p>
            <p>I am a second-year B.Tech Chemical Engineering student at VIT, Vellore, and I am applying for the summer research internship in materials science at IISc Bangalore. I want to learn how researchers design and test new materials, and to find out whether a research career suits me.</p>
            <p>I hold a CGPA of 9.1 out of 10 after three semesters, with my best grades in Engineering Chemistry, Thermodynamics and Material and Energy Balances. My interest in materials began in a first-year laboratory class, when I noticed that changing the drying temperature changed the strength of a simple polymer film. Since then, two classmates and I have tested biodegradable films made from corn starch and glycerol. We measured their tensile strength on the department's testing machine and found that 20% glycerol gave the most flexible film without much loss of strength. I also use Python to plot and compare test data.</p>
            <p>At IISc, I hope to work in a well-equipped laboratory, learn characterisation methods such as X-ray diffraction and electron microscopy, and see how researchers plan, repeat and report an experiment. I would bring careful record-keeping, patience with repeated trials and a readiness to learn from feedback.</p>
            <p>In the long term, I plan to take a master's degree and research sustainable packaging materials. I thank the committee for considering my application.</p>
            <p>Yours sincerely,<br>[Your name]</p>
            <p><small>229 words</small></p>
            <div class="note exam"><p>How it was built: opening (who you are, the exact internship, why) → academic background with proof (a CGPA, named courses) → the spark and a project with a real result (20% glycerol, tensile tests) → what you want to learn at IISc and what you bring → long-term goal and a polite close. No subheadings, first person, active voice. A second-year student is not expected to have publications; one small project described precisely is stronger than a list of vague interests.</p></div>
            <div class="note trap"><p>Do not name a professor or a specific laboratory you have not checked; a wrong name suggests the SoP was copied. X-ray diffraction and electron microscopy are standard methods in any materials laboratory, so they are safe to mention. Leave out "Since childhood I have been passionate about science": the starch-film project shows the interest better.</p></div>`,
          topics: ['m5-sop-what', 'm5-sop-structure', 'm5-sop-writing', 'm5-sop-tips'],
          notes: ['m5-sop-structure.0', 'm5-sop-writing.5', 'm5-sop-tips.5']
        }
      ]
    }
  ]
});
