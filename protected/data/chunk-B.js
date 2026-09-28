CHUNK({
  chunk: 'B',
  module: 'm3',
  topics: [
    {
      id: 'm3-inference',
      title: 'What an inference is: stated, implied and everyday reasoning',
      short: 'What an inference is',
      blurb: 'An inference is a conclusion drawn from evidence and reasoning rather than first-hand observation. This topic covers stated vs implied information, the inferences you already make every day, and how to answer inference questions in the CAT.',
      source: 'Reading comprehension: Making Inferences slides (Inferencing, everyday inference lists)',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">An <b>inference</b> is a conclusion you reach from <b>evidence and reasoning</b>. You don't see the answer written down; you work it out by applying your own <b>knowledge and experience</b> to what is in front of you.</p>
          <p>The slides put it as a contrast. We learn some things by <b>observing or experiencing</b> them <b>first-hand</b>. When we infer, we figure things out from clues instead.</p>
          <div class="vs">
            <div class="side"><h4>Observation</h4><p>The road is wet and people are shaking water off their umbrellas.</p><p><small>You saw it. Nothing to work out.</small></p></div>
            <div class="side"><h4>Inference</h4><p>It <b>rained a short while ago</b>.</p><p><small>You didn't see the rain. The wet road and the umbrellas, plus what you know about rain, lead you there.</small></p></div>
          </div>
          <figure data-fig="m3-inference-equation"></figure>
          <ul>
            <li>Inferential thinking is a <b>key comprehension skill</b>: it shows you understood the text, not just found words in it.</li>
            <li>It is a <b>complex skill</b> that grows <b>over time and with experience</b>. The more you practise on real passages, the faster you spot what a writer leaves unsaid.</li>
          </ul>
          <div class="note exam"><p>The syllabus heading is "Reading Comprehension: Drawing Inferences from Scientific Texts". Expect a short passage followed by questions like "What can be inferred…", "The author suggests…" or "Which statement is supported by the passage?". You get marks for the conclusion <b>and</b> for pointing to the clue that supports it.</p></div>
        ` },
        { title: 'Stated and implied', html: `
          <p class="lead"><b>Stated</b> information is written in the words of the text. <b>Implied</b> information is <b>not directly stated</b>: the writer leaves it for you to work out.</p>
          <p>The slides say that learning to notice <b>when information is implied</b> is what improves your skill in drawing conclusions. So the first habit is to ask of every idea: is this on the page, or am I building it?</p>
          <table class="tbl">
            <thead><tr><th>The text says</th><th>Stated</th><th>Implied</th></tr></thead>
            <tbody>
              <tr><td>Executive offices are usually on the top floors; junior staff work below.</td><td>where offices are</td><td>the <b>floor you sit on</b> can signal your rank</td></tr>
              <tr><td>The sample cooled from 40 °C to 22 °C within ten minutes of switching on the fan.</td><td>the two temperatures, the fan</td><td>the fan most likely <b>caused</b> the cooling</td></tr>
              <tr><td>Ravi checked the bus app three times and kept glancing at the clock.</td><td>what Ravi did</td><td>he is <b>worried about being late</b></td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Stated</h4><p>You can <b>underline</b> it. One line of the text says it.</p></div>
            <div class="side"><h4>Implied</h4><p>You have to <b>build</b> it from two or more clues plus common knowledge.</p></div>
          </div>
          <div class="note trap"><p>In an "infer" question, one wrong option is usually a <b>stated fact</b> copied from the passage. It is true, but it is not an inference. If you can point to one sentence that says it word for word, it is stated.</p></div>
        ` },
        { title: 'Everyday inference', html: `
          <p class="lead">You infer all day without calling it that. The slides list two groups: reading <b>people</b>, and reading <b>situations</b>.</p>
          <h3>Reading people</h3>
          <div class="chips"><span class="chip">reading body language</span><span class="chip">interpreting tone of voice</span><span class="chip">predicting reactions</span><span class="chip">understanding underlying motives</span></div>
          <p>A friend says "Fine" in a flat voice with arms crossed: you infer it is not fine. A classmate who hates crowds is invited to a packed concert: you predict they will say no.</p>
          <h3>Reading situations</h3>
          <table class="tbl">
            <thead><tr><th>Situation</th><th>Clue</th><th>Inference</th></tr></thead>
            <tbody>
              <tr><td><b>Weather prediction</b></td><td>dark clouds, heavy air</td><td>rain is likely</td></tr>
              <tr><td><b>Traffic management</b></td><td>a long line of brake lights</td><td>a jam ahead; take another road</td></tr>
              <tr><td><b>Problem-solving at home</b></td><td>fan and lights stop together</td><td>a power cut, not a broken fan</td></tr>
              <tr><td><b>Shopping</b></td><td>shelf nearly empty</td><td>the item is selling fast</td></tr>
              <tr><td><b>Cooking</b></td><td>the aroma</td><td>the food is <b>ready</b></td></tr>
              <tr><td><b>Reading a news article</b></td><td>police at the scene</td><td>the <b>reason for police presence</b>: an accident or a crime</td></tr>
              <tr><td><b>Watching a movie</b></td><td>a character lies about where he was</td><td>he was <b>involved</b></td></tr>
              <tr><td><b>Understanding advertisements</b></td><td>athletes drinking a brand</td><td>the ad wants you to link it with fitness</td></tr>
              <tr><td><b>Deducing cause and effect</b></td><td>leaves yellow after daily watering</td><td>overwatering</td></tr>
              <tr><td><b>A puzzle or riddle</b></td><td>the hints given</td><td>the one answer that fits them all</td></tr>
              <tr><td><b>Diagnosing a minor ailment</b></td><td>sneezing, runny nose, no fever</td><td>a cold or an allergy</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Reading a passage uses the same process: clue + experience → conclusion. Everyday inferences can also be wrong (the police might be there for a film shoot), which is why a good reader checks an inference against <b>all</b> the clues before trusting it.</p></div>
        ` },
        { title: 'Inference, guess or opinion?', html: `
          <p class="lead">An inference is not any idea you have about a text. It must be <b>supported by clues</b> in the text. Guesses, assumptions and opinions look similar but fail that test.</p>
          <table class="tbl">
            <thead><tr><th>Kind</th><th>What it is</th><th>From the height passage</th></tr></thead>
            <tbody>
              <tr><td><b>Inference</b></td><td>a conclusion the clues support</td><td>Hiring is not always based on merit alone.</td></tr>
              <tr><td><b>Guess</b></td><td>an idea with no clue behind it</td><td>The author is tall.</td></tr>
              <tr><td><b>Assumption</b></td><td>something taken for granted without checking</td><td>All companies have tall buildings.</td></tr>
              <tr><td><b>Opinion</b></td><td>what someone thinks <b>should</b> happen or is good</td><td>Firms ought to ban height from interviews.</td></tr>
              <tr><td><b>Prediction</b></td><td>an inference about the future</td><td>A shorter candidate may face a harder interview.</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Over-reaching</h4><p>"Short men <b>never</b> get hired."</p><p><small>The passage only says employers are <em>more willing</em> to hire taller men.</small></p></div>
            <div class="side"><h4>Supported</h4><p>"Being shorter <b>may</b> be a disadvantage when men with equal qualifications compete for a job."</p></div>
          </div>
          <div class="mnemonic"><p>A good inference is the <b>smallest step</b> the evidence lets you take. Take one step from the text, not three.</p></div>
          <div class="note heads-up"><p>Not on the slides: the guess / assumption / opinion / prediction split is standard reading-comprehension practice, added so you can reject wrong MCQ options quickly.</p></div>
        ` },
        { title: 'Inferring from scientific texts', html: `
          <p class="lead">Scientific and technical texts make you infer in a few typical ways: what the <b>data implies</b>, how <b>certain</b> the writer is, and what would <b>follow</b> if a finding is true.</p>
          <h3>Read the hedges</h3>
          <p>Scientists signal certainty with their verbs. The strength of the verb tells you how strong your inference is allowed to be.</p>
          <table class="tbl">
            <thead><tr><th>Wording</th><th>Strength</th><th>What you may infer</th></tr></thead>
            <tbody>
              <tr><td>shows, demonstrates, confirms</td><td><b>strong</b></td><td>the writer treats it as established</td></tr>
              <tr><td>suggests, indicates, points to</td><td><b>moderate</b></td><td>likely, but open to more evidence</td></tr>
              <tr><td>may, might, could, as much as</td><td><b>weak</b></td><td>possible; an upper limit or one reading</td></tr>
            </tbody>
          </table>
          <div class="note example"><p>The BBC insect passage says "some studies suggest" populations fell "by as much as 75%". So you can infer that 75% is an <b>upper estimate from some studies</b>, not a measured figure for every insect everywhere.</p></div>
          <h3>Link is not cause</h3>
          <p>"Taller men make more money" is a <b>link</b> (correlation). It does not tell you height itself <b>causes</b> the pay rise; employers' attitudes, confidence or other factors could sit in between. An inference that says "height causes higher pay" goes past the text.</p>
          <div class="note heads-up"><p>Not on the slides: hedging and correlation vs cause are standard skills for reading scientific writing, added because the syllabus asks for inferences from scientific texts.</p></div>
        ` },
        { title: 'Answering inference questions', html: `
          <p class="lead">First decide whether the question wants a <b>stated</b> fact or an <b>inference</b>. The question stem tells you.</p>
          <table class="tbl">
            <thead><tr><th>Stem</th><th>It wants</th></tr></thead>
            <tbody>
              <tr><td>According to the passage… · The passage states… · Which detail…</td><td><b>stated</b> information</td></tr>
              <tr><td>The passage suggests / implies… · It can be inferred… · Most likely… · The author would probably agree…</td><td>an <b>inference</b></td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>Passage: "Executive offices are usually on the top floors; the juniors work below." Question: What does the passage suggest about office buildings?</p></div>
            <div class="solve"><p>Clue: executives up, juniors down. Common knowledge: "higher" is linked with "more important". Smallest step: position in the building reflects position in the company.</p></div>
            <div class="result"><p>The passage <b>suggests</b> that an office's floor can signal its owner's rank, <b>because</b> it says executives work on the top floors while junior staff work below.</p></div>
          </div>
          <div class="note exam"><p>A short-answer inference earns marks for three things: the <b>inference</b> itself, the <b>evidence</b> from the text, and the <b>link</b> between them. Use a hedge (suggests, likely, may) unless the text is certain. For an MCQ, cross out options that are stated, extreme ("always", "never", "proves") or not about the passage at all.</p></div>
        ` },
      ],
      flashcards: [
        { front: `An inference is a conclusion based on…`, back: `<b>Evidence and reasoning</b>.` },
        { front: `The slides contrast inference with learning by…`, back: `<b>First-hand</b> observation or experience.` },
        { front: `Stated information is…`, back: `Written <b>directly in the words</b> of the text.` },
        { front: `Implied information is…`, back: `<b>Not directly stated</b>; the reader works it out.` },
        { front: `Inference = what the text says + …`, back: `<b>What you already know</b> (knowledge and experience).` },
        { front: `Four "reading people" inferences on the slides?`, back: `<b>Body language</b>, <b>tone of voice</b>, <b>predicting reactions</b>, <b>underlying motives</b>.` },
        { front: `Cooking example on the slides?`, back: `Inferring <b>readiness from the aroma</b>.` },
        { front: `News-article example on the slides?`, back: `Inferring the <b>reasons for police presence</b>.` },
        { front: `"According to the passage…" asks for…`, back: `<b>Stated</b> information, not an inference.` },
        { front: `Stems that ask for an inference?`, back: `<b>Suggests</b>, <b>implies</b>, <b>can be inferred</b>, <b>most likely</b>.` },
        { front: `Inference vs opinion?`, back: `An inference is <b>supported by the text</b>; an opinion says what <b>should</b> be.` },
        { front: `How big a step should an inference take?`, back: `The <b>smallest step</b> the evidence supports.` },
      ],
      oneLiners: [
        `An <b>inference</b> is a conclusion from <b>evidence and reasoning</b>, not first-hand observation.`,
        `Inference = <b>what the text says</b> + <b>what you already know</b>.`,
        `<b>Stated</b> = in the words; <b>implied</b> = not directly stated, left for the reader.`,
        `Inferential thinking is a key comprehension skill that grows with time and experience.`,
        `Everyday inference: body language, tone, reactions, motives; weather, traffic, cooking aroma, police in the news, ads, cause and effect, riddles, minor ailments.`,
        `Scientific texts: read the hedges (shows / suggests / may) and don't turn a link into a cause.`,
        `Answer = <b>inference</b> + <b>evidence</b> + <b>link</b>, with a hedge.`,
      ],
      formulas: [
        { name: 'Inference', html: `<b>What the text says</b> + <b>what you already know</b> → <b>inference</b>`, note: 'Take the smallest step the clues support.' },
        { name: 'Stem check', html: `"According to / states" → <b>stated</b> · "suggests / implies / inferred / most likely" → <b>inference</b>`, note: 'Read the stem before the options.' },
      ],
    },

    {
      id: 'm3-inference-practice',
      title: 'Inferring from a passage: method, three passages and traps',
      short: 'Inferring from a passage',
      blurb: 'How to sort statements about a passage into stated, can be inferred and not supported, a step method for inference questions, worked practice on the three course passages (height and status, insect decline, plagiarism support), and the traps examiners set.',
      source: 'Reading comprehension: Making Inferences slides (Locker 2003; BBC News insects excerpt; Sutherland-Smith 2010)',
      tabs: [
        { title: 'Stated, inferred, not supported', html: `
          <p class="lead">Every statement about a passage falls into one of three boxes: <b>stated</b>, <b>can be inferred</b>, or <b>not supported</b>. Most inference questions are really asking you to sort statements into these boxes.</p>
          <figure data-fig="m3-stated-implied-unsupported"></figure>
          <table class="tbl">
            <thead><tr><th>Label</th><th>Test</th></tr></thead>
            <tbody>
              <tr><td><b>Stated</b></td><td>You can point to <b>one line</b> that says it (maybe in other words).</td></tr>
              <tr><td><b>Can be inferred</b></td><td>No single line says it, but you can <b>name the clues</b> and explain how they lead there, using only common knowledge.</td></tr>
              <tr><td><b>Not supported</b></td><td>It needs facts the passage <b>doesn't give</b>, adds your own opinion, or <b>contradicts</b> the text.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Examiners build MCQs this way: one inferable option, one stated option, and two unsupported ones. If you can label all four, the right answer is the only one left in the middle box.</p></div>
          <div data-viz="inference-detective"></div>
        ` },
        { title: 'The step method', html: `
          <p class="lead">Use the same steps for every passage. They stop you from grabbing the first option that sounds true.</p>
          <ol class="steps">
            <li><b>Read the stem</b> does it want a stated fact or an inference?</li>
            <li><b>Locate</b> the part of the passage the question is about.</li>
            <li><b>Mark the clues</b> underline the words that matter: numbers, contrasts (but, nevertheless), hedges (suggest, may).</li>
            <li><b>Add common knowledge</b> only what any reader would know, never your personal view.</li>
            <li><b>Take the smallest step</b> the conclusion that fits every clue and needs nothing extra.</li>
            <li><b>Test it</b> does any line contradict it? Is it too extreme (all, always, never, proves)? Does it change the scope (men → everyone)?</li>
            <li><b>Write it</b> "The passage suggests… because it says…".</li>
          </ol>
          <div class="worked">
            <div class="given"><p>"The fan and the tube light went off together, and the neighbour's house went dark too." What can you infer?</p></div>
            <div class="solve"><p>Clues: two devices off at once; the next house is also dark. Knowledge: one faulty fan can't switch off a neighbour's lights. Smallest step: the supply failed. Test: nothing contradicts it; "the whole city is dark" would over-reach.</p></div>
            <div class="result"><p>There is most likely a <b>power cut</b> in the area, because both devices stopped together and the neighbour's house lost power too.</p></div>
          </div>
          <div class="note trap"><p>Step 4 is where marks are lost. "Everyone knows tall people are confident" is not common knowledge; it is a belief you brought in. Keep outside knowledge to facts no reader would argue with.</p></div>
        ` },
        { title: 'Passage 1: height and status', html: `
          <p class="lead">The first practice passage comes from a business communication textbook (<b>Locker, 2003</b>, p. 301). Here it is retold in our own words.</p>
          <div class="note example"><p>In many parts of the world, <b>height signals status</b>. Executive offices are usually on the top floors and junior staff work below. Being tall can help a person succeed: studies found employers more willing to hire <b>men over 6 feet</b> than shorter men with the <b>same credentials</b>, and taller men among executives and graduates earn more. In one study each extra inch was worth about <b>$1,300 a year</b>. But being too big can be a <b>disadvantage</b>: a tall, heavily built football player said people found him intimidating off the field and assumed he had no brains.</p></div>
          <table class="tbl">
            <thead><tr><th>Statement</th><th>Label</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>Each extra inch brought about $1,300 a year in one study.</td><td><b>Stated</b></td><td>a line says it</td></tr>
              <tr><td>Hiring decisions are not always based on qualifications alone.</td><td><b>Inferred</b></td><td>equal credentials, yet taller men preferred</td></tr>
              <tr><td>Height helps only up to a point.</td><td><b>Inferred</b></td><td>"can help" plus "too big can be a disadvantage"</td></tr>
              <tr><td>People sometimes judge intelligence by appearance.</td><td><b>Inferred</b></td><td>the football player's experience</td></tr>
              <tr><td>Tall women also earn more per inch.</td><td><b>Not supported</b></td><td>the studies are about <b>men</b> only</td></tr>
              <tr><td>Height causes higher pay.</td><td><b>Not supported</b></td><td>a link, not a proven cause</td></tr>
              <tr><td>Companies should ignore height when hiring.</td><td><b>Not supported</b></td><td>an opinion; the author doesn't argue this</td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>What does the passage imply about the link between size and how people are treated?</p></div>
            <div class="solve"><p>Clues: tall men hired more and paid more; the very big player seen as intimidating and unintelligent. Both directions: size changes how people judge you, well or badly.</p></div>
            <div class="result"><p>The passage <b>implies</b> that people judge others by their size, <b>because</b> taller men are hired and paid more, while a very large player is assumed to lack intelligence.</p></div>
          </div>
          <div class="note heads-up"><p>Source slip: the slide quote reads "dint have brains", a typing slip for "didn't have brains".</p></div>
        ` },
        { title: 'Passage 2: insect decline', html: `
          <p class="lead">The second passage is a short <b>BBC News</b> report on a scientific review. Here it is retold in our own words (the slide copy is labelled 100 words).</p>
          <div class="note example"><p>Scientists warn that the world is losing insects so fast that it threatens a "collapse of nature" and could badly hurt <b>food production</b>. A landmark review in the journal <b>Biological Conservation</b> found a dramatic fall in insect numbers across the globe; <b>some studies suggest</b> falls of <b>as much as 75%</b> in recent decades. The researchers name <b>habitat loss</b>, <b>pesticide use</b> and <b>climate change</b> as the main drivers, call for urgent action, and warn that doing nothing could be catastrophic.</p></div>
          <table class="tbl">
            <thead><tr><th>Statement</th><th>Label</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>The review appeared in Biological Conservation.</td><td><b>Stated</b></td><td>a line says it</td></tr>
              <tr><td>Fewer insects could mean lower yields of crops that need pollinating.</td><td><b>Inferred</b></td><td>"food production" + the common knowledge that insects pollinate crops</td></tr>
              <tr><td>The size of the decline differs from study to study.</td><td><b>Inferred</b></td><td>"some studies suggest", "as much as"</td></tr>
              <tr><td>Cutting pesticide use could help slow the decline.</td><td><b>Inferred</b></td><td>pesticides named as a driver; researchers call for action</td></tr>
              <tr><td>Climate change is the single biggest cause.</td><td><b>Not supported</b></td><td>three drivers are named, not ranked</td></tr>
              <tr><td>All insects will be extinct within ten years.</td><td><b>Not supported</b></td><td>no time frame or "all" in the text</td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>How certain is the 75% figure, according to the passage?</p></div>
            <div class="solve"><p>Clues: "some studies" (not all), "suggest" (moderate), "as much as" (upper limit).</p></div>
            <div class="result"><p>The figure is <b>an upper estimate</b> from some studies, not a firm global measurement, because the writer says only that some studies suggest a fall of as much as 75%.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: the review behind this report (Sánchez-Bayo and Wyckhuys) was published in 2019. News articles simplify research, so for a report you would trace the original review through Google Scholar or a library database (see Secondary sources).</p></div>
        ` },
        { title: 'Passage 3: plagiarism support', html: `
          <p class="lead">The third passage is from an academic journal article on plagiarism in universities (<b>Sutherland-Smith, 2010</b>, p. 9). Here it is retold in our own words.</p>
          <div class="note example"><p>Universities put the <b>burden</b> of understanding plagiarism and referencing rules on <b>students</b>. The universities studied offer many online <b>self-help tutorials and workshops</b>, and many of these are <b>excellent</b> and useful. <b>Nevertheless</b>, there is little extra, detailed <b>one-to-one help</b> with academic writing, especially for students studying <b>off-campus or by distance</b>, and this raises <b>equity</b> (fairness) issues for those who make plagiarism policy.</p></div>
          <p>Look at <b>"Nevertheless"</b>. Everything before it is the part the author grants; everything after it is the author's <b>real point</b>. Contrast words (but, however, nevertheless, yet) are the best clue to a writer's attitude.</p>
          <table class="tbl">
            <thead><tr><th>Statement</th><th>Label</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>Many of the online tutorials are excellent.</td><td><b>Stated</b></td><td>a line says it</td></tr>
              <tr><td>The author thinks online resources alone are not enough.</td><td><b>Inferred</b></td><td>"nevertheless" + "lack of individual assistance"</td></tr>
              <tr><td>Distance students are at a disadvantage.</td><td><b>Inferred</b></td><td>singled out, and "equity" means fairness</td></tr>
              <tr><td>The author would support more one-to-one writing help.</td><td><b>Inferred</b></td><td>the lack of it is the problem raised</td></tr>
              <tr><td>The online tutorials are useless.</td><td><b>Not supported</b></td><td><b>contradicts</b> "many are excellent"</td></tr>
              <tr><td>Distance students plagiarise more than others.</td><td><b>Not supported</b></td><td>no data on how much anyone plagiarises</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>"What is the author's attitude to self-help tutorials?" Answer: <b>balanced</b>. The author values them (many are excellent) but thinks they are not enough on their own, because detailed individual help is missing, especially for distance students.</p></div>
        ` },
        { title: 'Common traps', html: `
          <p class="lead">Wrong inference answers fail in a few predictable ways. Learn the patterns and you can reject most wrong options on sight.</p>
          <table class="tbl">
            <thead><tr><th>Trap</th><th>What it looks like</th></tr></thead>
            <tbody>
              <tr><td><b>Over-reaching</b></td><td>extreme words: all, never, always, only, proves</td></tr>
              <tr><td><b>Outside opinion</b></td><td>your own view or what "should" happen</td></tr>
              <tr><td><b>Stated fact</b></td><td>a true line copied from the text, when an inference was asked</td></tr>
              <tr><td><b>Scope shift</b></td><td>the text is about men, the option is about everyone</td></tr>
              <tr><td><b>Link → cause</b></td><td>"taller men earn more" turned into "height causes pay"</td></tr>
              <tr><td><b>Contradiction</b></td><td>the option says the opposite of a line ("tutorials are useless")</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>"The passage proves that pesticides are destroying all insect life."</p><p><small>"Proves" and "all" over-reach; pesticides are one of three drivers.</small></p></div>
            <div class="side"><h4>Right</h4><p>"The passage suggests that pesticide use is one reason insect numbers are falling."</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>"Universities should make plagiarism rules simpler."</p><p><small>A sensible idea, but it is your opinion, not the author's point.</small></p></div>
            <div class="side"><h4>Right</h4><p>"The author implies that off-campus students need more individual help with academic writing."</p></div>
          </div>
          <div class="note trap"><p>The most common slip in the CAT: choosing the option that is <b>true</b> instead of the one that is <b>inferred</b>. A stated fact is true, but in an "infer" question it is still the wrong answer.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Test for a stated statement?`, back: `You can point to <b>one line</b> that says it.` },
        { front: `Test for an inferable statement?`, back: `You can <b>name the clues</b> and explain the link.` },
        { front: `When is a statement "not supported"?`, back: `It needs <b>missing facts</b>, adds <b>opinion</b>, or <b>contradicts</b> the text.` },
        { front: `Height passage: who did the hiring studies cover?`, back: `<b>Men</b> over 6 feet vs shorter men with the same credentials.` },
        { front: `Height passage: value of each extra inch in one study?`, back: `About <b>$1,300 a year</b>.` },
        { front: `Insect review was published in…`, back: `The journal <b>Biological Conservation</b>.` },
        { front: `Insect passage: the three main drivers?`, back: `<b>Habitat loss</b>, <b>pesticide use</b>, <b>climate change</b>.` },
        { front: `Insect passage: how big a fall do some studies suggest?`, back: `<b>As much as 75%</b> in recent decades.` },
        { front: `Sutherland-Smith: which students lack individual help?`, back: `Those studying <b>off-campus or by distance</b>.` },
        { front: `"Equity" in the plagiarism passage means…`, back: `<b>Fairness</b> between groups of students.` },
        { front: `What does "Nevertheless" signal?`, back: `The writer's <b>real point</b> follows, against what came before.` },
        { front: `Words that usually mark an over-reaching option?`, back: `<b>All</b>, <b>never</b>, <b>always</b>, <b>only</b>, <b>proves</b>.` },
      ],
      oneLiners: [
        `Three labels: <b>stated</b> (one line says it), <b>inferred</b> (clues + reasoning), <b>not supported</b> (missing, opinion, or contradicted).`,
        `Step method: stem → locate → mark clues → common knowledge → smallest step → test → write.`,
        `Height (Locker 2003): taller men hired and paid more (about $1,300 per inch); too big can be a disadvantage.`,
        `Insects (BBC): review in Biological Conservation; up to 75% falls in some studies; habitat loss, pesticides, climate change.`,
        `Plagiarism (Sutherland-Smith 2010): good online tutorials, but little individual help for distance students, an equity issue.`,
        `Contrast words (but, nevertheless) point to the writer's attitude.`,
        `Traps: over-reaching, outside opinion, stated fact, scope shift, link → cause, contradiction.`,
      ],
      formulas: [
        { name: 'Three labels', html: `<b>Stated</b>: one line says it · <b>Inferred</b>: named clues + common knowledge · <b>Not supported</b>: missing, opinion or contradicted` },
        { name: 'Step method', html: `Stem → <b>locate</b> → <b>mark clues</b> → common knowledge → <b>smallest step</b> → <b>test</b> → write with a hedge` },
      ],
    },

    {
      id: 'm3-sources',
      title: 'Secondary sources: searching, libraries, types and records',
      short: 'Secondary sources',
      blurb: 'How to find and use secondary sources for a school or workplace project: starting with Google and other search engines, Google Scholar, Wikipedia as a starting point, digital libraries, the library OPAC and databases, the types of secondary sources and reference works, keeping records, and judging reliability.',
      source: 'Reading comprehension: Making Inferences slides (secondary sources section)',
      tabs: [
        { title: 'What secondary research is', html: `
          <p class="lead"><b>Secondary sources</b> are materials other people have already written or collected: articles, books, reports, websites. Before you read a scientific text closely, you have to <b>find</b> the right one and know whether to <b>trust</b> it.</p>
          <div class="note example"><p><b>Martin Casamonte</b>, a <b>freelance researcher</b>, finds specialised information for clients. One day's project was for a <b>corporate attorney</b> who needed material on <b>product liability</b> issues and on the laws and court decisions about those products. His steps are below.</p></div>
          <ol class="steps">
              <li><b>Google search</b> looked over the results of a standard search.</li>
              <li><b>Filter</b> picked items from <b>highly credible sources</b>, such as recognised news outlets.</li>
              <li><b>LexisNexis</b> used that information for tailored legal research in the LexisNexis legal database, for full-length articles and cases.</li>
              <li><b>Factiva, then Dialog</b> for the liability issue, searched <b>Factiva</b> and <b>double-checked</b> in the <b>Dialog</b> database.</li>
          </ol>
          <p>His pattern is the one to copy: start broad and free, keep only credible hits, go deep in <b>specialised databases</b>, and <b>check one source against another</b>.</p>
          <div class="vs">
            <div class="side"><h4>Everyday research</h4><p>Weather trends, the price of a new phone, restaurant reviews. Quick, informal, low stakes.</p></div>
            <div class="side"><h4>School or workplace research</h4><p>A project or report someone will rely on. Needs <b>credible</b>, <b>recorded</b> and <b>checkable</b> sources.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: a <b>primary source</b> is first-hand material (your own lab data, a survey you ran, an original experiment report); a <b>secondary source</b> reports, reviews or interprets that material. The BBC insect article is secondary; the review it describes is closer to the original research.</p></div>
        ` },
        { title: 'Start broad, keep records', html: `
          <p class="lead">Begin with <b>general searching</b> to see what's out there: what <b>themes</b> come up, and which <b>authors and organisations</b> lead the research. Record everything as you go.</p>
          <ul>
            <li>Take notes in a <b>Word file</b>, or a <b>shared document</b> if it is a team project.</li>
            <li>Keep careful records of the <b>web address (URL)</b> and all source details: <b>author</b>, <b>date</b>, <b>title</b>, and <b>page numbers</b> if applicable, so you can find specific articles again later.</li>
            <li>Use a <b>citation manager</b> such as <b>Zotero</b> or <b>EndNote</b> to keep track. (The slides point to Appendix A of the textbook for citation apps and note-taking models.)</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Weak record</h4><p>"Insect article, BBC, says 75%."</p><p><small>No URL, no date, no author: you can't cite it or find it again.</small></p></div>
            <div class="side"><h4>Useful record</h4><p>Author · title · BBC News · date · URL · "some studies suggest up to 75% decline" · date accessed</p></div>
          </div>
          <div class="note why"><p>A week later you won't remember where a number came from. Without the record you either waste an hour searching again or cite something you can't check, which is how accidental plagiarism starts.</p></div>
          <div class="note heads-up"><p>Source slip: the slide spells it "citation manger"; the tool names are <b>Zotero</b> and <b>EndNote</b>. Not on the slides: noting the <b>date you accessed</b> a web page is also standard, because pages change.</p></div>
        ` },
        { title: 'Google, Scholar and other engines', html: `
          <p class="lead">From students to professionals, most people start with a <b>Google search</b>. That's fine for seeing what's out there, but you soon need to <b>narrow down</b> and <b>dig deeper</b>.</p>
          <ul>
            <li>Google, the most popular search engine, searches <b>web pages</b>, <b>government documents</b>, <b>online news sites</b> and other sources.</li>
            <li>It also offers many <b>books and journal articles</b>, through <b>agreements with publishers</b> or by <b>digitising</b> works that are in the <b>public domain</b> or out of copyright.</li>
            <li>A search on "electromagnetic radiation" gives <b>thousands or even millions</b> of results. Look for sites from <b>reliable sources</b> such as <b>universities</b> and <b>government research labs</b>.</li>
            <li>Once you have the basics, search <b>Google Scholar</b> for links to <b>peer-reviewed journal articles</b>, which you may get online or through the library.</li>
            <li>Refine a search with <b>advanced search</b> (the slides: the gear icon, upper right, then "advanced search").</li>
            <li>Different engines use different <b>algorithms</b> (ways of searching) and can give different results, so try <b>Microsoft Bing</b> or another engine and <b>compare</b>.</li>
          </ul>
          <figure data-fig="m3-research-funnel"></figure>
          <div class="note heads-up"><p>Not on the slides: search pages change their layout often, so the gear icon may have moved (advanced search is usually under Settings). Quote marks around a phrase ("electromagnetic radiation") and words like <b>site:gov</b> or <b>site:ac.in</b> narrow results quickly.</p></div>
        ` },
        { title: 'Wikipedia', html: `
          <p class="lead">Most online searches quickly lead to <b>Wikipedia</b>, the popular online encyclopedia. Treat it as a <b>place to start</b> your research, <b>not your final destination</b>.</p>
          <div class="kv">
            <div><span>Who writes it</span><b>countless people worldwide</b> provide and edit the content</div>
            <div><span>The risk</span>content <b>may not be completely accurate</b></div>
            <div><span>Use it for</span>an <b>overview</b> of the topic and to <b>locate other sources</b></div>
          </div>
          <p>The Wikipedia page on electromagnetic radiation has <b>footnotes</b> to other sources. Track those down through <b>Google Scholar</b> or a <b>library</b> site, read the originals, and cite them.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Copy the definition and a statistic from Wikipedia straight into your report and cite Wikipedia.</p></div>
            <div class="side"><h4>Right</h4><p>Read the Wikipedia overview, follow footnote 12 to the journal article, check the statistic there, and <b>cite the article</b>.</p></div>
          </div>
          <div class="note why"><p>Because anyone can edit a page, an error can sit there until someone fixes it. The footnoted original has an author, a publisher and (for journals) peer review behind it.</p></div>
        ` },
        { title: 'Libraries and databases', html: `
          <p class="lead">For deeper digging, go to <b>digital libraries</b> and your <b>library's</b> catalogue and databases. Many give full texts that a normal search can't reach.</p>
          <h3>Digital libraries</h3>
          <div class="chips"><span class="chip">Project Gutenberg</span><span class="chip">HathiTrust Digital Library</span><span class="chip">Google Books</span><span class="chip">Internet Archive</span><span class="chip">Digital Public Library of America</span><span class="chip">National Digital Library of India</span></div>
          <h3>Your library</h3>
          <p>Libraries offer a general search tool of all their holdings, the <b>online public access catalog (OPAC)</b>. Use it to see whether the library has a book or journal and where it is.</p>
          <table class="tbl">
            <thead><tr><th>Database</th><th>Covers</th></tr></thead>
            <tbody>
              <tr><td><b>EBSCOHost</b>, <b>JSTOR</b>, <b>InfoTrac</b></td><td>general periodicals: magazines, newspapers and more general information</td></tr>
              <tr><td><b>APA PsycINFO</b></td><td>articles in <b>psychology</b></td></tr>
              <tr><td><b>Business Source Premier</b></td><td>articles on <b>business</b></td></tr>
              <tr><td><b>PubMed</b></td><td>articles on the <b>health sciences</b></td></tr>
              <tr><td>indexes and other resources</td><td><b>engineering</b>, the <b>humanities</b>, <b>world affairs</b> and other areas</td></tr>
              <tr><td><b>LexisNexis</b>, <b>Factiva</b>, <b>Dialog</b></td><td>legal cases and articles; business news (from the Casamonte example)</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Source slip: the slide spells it "APA PsychINFO"; the database is <b>APA PsycINFO</b>. Not on the slides: for engineering, common databases include IEEE Xplore, ScienceDirect and Scopus; check which ones your library subscribes to.</p></div>
        ` },
        { title: 'Types of secondary sources', html: `
          <p class="lead">The slides list ten <b>types of secondary sources</b> plus <b>reference works</b>. They differ in who checks the content before you see it.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Good for</th><th>Watch out</th></tr></thead>
            <tbody>
              <tr><td><b>Websites (general)</b></td><td>quick facts, company info</td><td>anyone can publish</td></tr>
              <tr><td><b>Government websites</b></td><td>official data, rules, statistics</td><td>check the date</td></tr>
              <tr><td><b>Blogs</b></td><td>expert views, new ideas</td><td>personal opinion, rarely checked</td></tr>
              <tr><td><b>Wikis</b> (including Wikipedia)</td><td>overviews, footnotes</td><td>open editing</td></tr>
              <tr><td><b>Social media</b></td><td>live events, public reaction</td><td>rumour spreads fast</td></tr>
              <tr><td><b>Online groups</b></td><td>practical tips from users</td><td>unverified experience</td></tr>
              <tr><td><b>News outlets</b> (incl. magazines, periodicals)</td><td>recent events, reported research</td><td>simplify the science</td></tr>
              <tr><td><b>Books</b></td><td>depth, background</td><td>may be dated</td></tr>
              <tr><td><b>Peer-reviewed journal articles</b></td><td>checked research findings</td><td>technical; read the method</td></tr>
              <tr><td><b>Gray literature</b></td><td>reports, theses, conference papers</td><td>not formally published; check the body behind it</td></tr>
            </tbody>
          </table>
          <h3>Reference works</h3>
          <div class="kv">
            <div><span>Bibliographies</span><b>lists of books, articles and other sources</b> on a topic</div>
            <div><span>Indexes</span>lists that point you to articles by subject or author</div>
            <div><span>Encyclopedias</span>overview entries; specialised ones are good for background and history</div>
          </div>
          <div class="note heads-up"><p>Not on the slides: the slides give only the list of types. The "good for / watch out" columns, the meaning of <b>gray literature</b> (material from governments, universities and organisations published outside commercial publishing) and the index and encyclopedia explanations are standard research practice.</p></div>
        ` },
        { title: 'Judging reliability', html: `
          <p class="lead">A source is only useful if you can <b>trust</b> it. Before you use a fact, run a quick check on <b>who</b> wrote it, <b>when</b>, <b>why</b>, and <b>what evidence</b> they give.</p>
          <ol class="steps">
            <li><b>Author</b> a named expert, university, government lab or recognised outlet? Or anonymous?</li>
            <li><b>Date</b> recent enough for the topic? Technology and health data age fast.</li>
            <li><b>Evidence</b> does it cite studies or data you can follow up?</li>
            <li><b>Purpose</b> is it informing you, or selling something or pushing a view?</li>
            <li><b>Checking</b> was it peer reviewed or edited? Does a second source agree (Casamonte double-checked in Dialog)?</li>
          </ol>
          <div data-viz="source-rater"></div>
          <div class="note heads-up"><p>Not on the slides: the checklist is standard practice built on the slides' advice (reliable sources, credible outlets, double-checking). The slides also have a heading "Guidelines for Online Research, and AI apps" with no text under it. Standard guidance: an AI chatbot can help you find search terms, but it can state wrong facts and even invent references, so <b>verify every fact and citation</b> in a real source before you use it.</p></div>
          <div class="note exam"><p>A likely CAT question gives a research need and four sources and asks which to use or trust. Name the source and give the reason: <b>peer review</b>, <b>named author</b>, <b>official body</b>, or the right <b>specialised database</b>.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Casamonte's legal database for full-length articles and cases?`, back: `<b>LexisNexis</b>.` },
        { front: `Casamonte: the liability issue?`, back: `<b>Factiva</b>, double-checked in <b>Dialog</b>.` },
        { front: `What does Google Scholar give you?`, back: `Links to <b>peer-reviewed journal articles</b>.` },
        { front: `Why try Bing as well as Google?`, back: `Different <b>algorithms</b> give different results; <b>compare</b> them.` },
        { front: `Wikipedia's role in research?`, back: `A <b>starting point</b>, not the final destination.` },
        { front: `OPAC stands for…`, back: `<b>Online public access catalog</b>: a search of all library holdings.` },
        { front: `Three general periodical databases?`, back: `<b>EBSCOHost</b>, <b>JSTOR</b>, <b>InfoTrac</b>.` },
        { front: `Databases for psychology, business and health?`, back: `<b>APA PsycINFO</b>, <b>Business Source Premier</b>, <b>PubMed</b>.` },
        { front: `Two citation managers on the slides?`, back: `<b>Zotero</b> and <b>EndNote</b>.` },
        { front: `Source details to record?`, back: `<b>URL</b>, <b>author</b>, <b>date</b>, <b>title</b>, page numbers.` },
        { front: `Three kinds of reference work?`, back: `<b>Bibliographies</b>, <b>indexes</b>, <b>encyclopedias</b>.` },
        { front: `A bibliography is…`, back: `A <b>list of books, articles and other sources</b>.` },
      ],
      oneLiners: [
        `Casamonte: Google → credible items → <b>LexisNexis</b> for cases; <b>Factiva</b>, double-checked in <b>Dialog</b>.`,
        `Start broad (themes, authors, organisations); record <b>URL, author, date, title, pages</b>; use <b>Zotero</b> or <b>EndNote</b>.`,
        `Google searches web pages, government documents, news; narrow down; prefer universities and government labs; then <b>Google Scholar</b>.`,
        `Use advanced search; compare engines (Bing), since algorithms differ.`,
        `<b>Wikipedia</b>: overview and footnotes; a starting point, not a destination.`,
        `Digital libraries: Project Gutenberg, HathiTrust, Google Books, Internet Archive, DPLA, National Digital Library of India.`,
        `Library: <b>OPAC</b>; EBSCOHost, JSTOR, InfoTrac; PsycINFO, Business Source Premier, PubMed.`,
        `Ten source types from general websites to gray literature; reference works: bibliographies, indexes, encyclopedias.`,
      ],
      formulas: [
        { name: 'Research path', html: `<b>Search engine</b> (broad) → <b>Wikipedia</b> (overview, footnotes) → <b>Google Scholar</b> → <b>library OPAC + databases</b> → <b>record</b> every source` },
        { name: 'Source record', html: `<b>URL</b> · <b>author</b> · <b>date</b> · <b>title</b> · page numbers`, note: 'Keep it in a Word file, shared document, Zotero or EndNote.' },
        { name: 'Trust check', html: `<b>Author</b> · <b>date</b> · <b>evidence</b> · <b>purpose</b> · <b>checked</b> (peer review, second source)` },
      ],
    },
  ],
  figures: [
    { id: 'm3-inference-equation', caption: 'An inference combines what the text says with what you already know, shown on the height passage. Based on BAENG101 course material, VIT.', alt: 'Three stacked boxes: what the text says (bosses sit on the top floors), plus what you already know (higher up usually means more senior), an arrow down to the inference (an office floor can signal rank).' },
    { id: 'm3-stated-implied-unsupported', caption: 'Three labels for any statement about a passage, from closest to the words to furthest, each with its test. Based on BAENG101 course material, VIT.', alt: 'A ladder of three boxes beside a downward arrow labelled further from the words: stated (you can point to one line), can be inferred (you can name the clues), not supported (no clue, or it contradicts).' },
    { id: 'm3-research-funnel', caption: 'A research path for secondary sources, from a broad search to deeper, more reliable sources, ending with keeping records. Based on BAENG101 course material, VIT.', alt: 'A funnel of five narrowing bars: Google or Bing, Wikipedia, Google Scholar, library OPAC and databases, and record URL, author, date, title.' },
  ],
});
