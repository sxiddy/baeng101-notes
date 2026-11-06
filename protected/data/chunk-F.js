CHUNK({
  chunk: 'F',
  module: 'm1',
  topics: [
    {
      id: 'm1-nature',
      title: 'The nature of technical communication',
      short: 'Nature of tech comm',
      blurb: 'What technical communication and technical writing are, who writes them, and the three things that set them apart from other writing: precision, intent and legal weight (with the comma and hyphen stories).',
      source: 'Module 1 Introduction to Technical Communication / Module 1 - Theory (ETH).pptx (slides 3-7); 1 Introduction to technical Writing.pptx (slides 2-5, 32, 34-39)',
      tabs: [
        { title: 'Two definitions', html: `
          <p class="lead"><b>Technical communication</b> is the exchange of information that helps people <b>interact with technology</b> and <b>solve complex problems</b>. The module defines it less by one fixed sentence and more by how it <b>differs from other writing</b>, mainly in <b>precision</b> and <b>intent</b>.</p>
          <p>The course gives two definitions. Learn both.</p>
          <table class="tbl">
            <thead><tr><th>Definition</th><th>Wording (from the course slides)</th></tr></thead>
            <tbody>
              <tr><td><b>1. The exchange</b></td><td>the exchange of information that helps people interact with technology and solve complex problems</td></tr>
              <tr><td><b>2. Art and science</b></td><td>"the art and science of making complex technical information accessible, usable, and relevant to a variety of audiences in a variety of settings"</td></tr>
            </tbody>
          </table>
          <h3>Unpacking the second one</h3>
          <ul>
            <li><b>Accessible</b>: the reader can reach and understand it.</li>
            <li><b>Usable</b>: the reader can act on it (install, repair, decide).</li>
            <li><b>Relevant</b>: it matters to this particular reader.</li>
            <li><b>Variety of audiences and settings</b>: experts and beginners, a lab, a factory floor, a living room.</li>
          </ul>
          <h3>Technical writing</h3>
          <p><b>Technical writing</b> is a form of professional communication used to convey <b>specialised or complex information</b>. It presents that information in a manner that is <b>clear, accurate, concise and accessible</b>. It helps readers <b>understand technical concepts</b>, <b>follow instructions</b> or <b>complete specific tasks</b>.</p>
          <ul>
            <li>Common forms: <b>reports, product descriptions, instruction manuals, user guides, procedural documents</b>.</li>
            <li>Topics: <b>environmental regulations, computer applications, engineering processes, medical procedures</b>.</li>
            <li>Primary goal: make complex information <b>easy for the intended audience to understand and use</b>.</li>
          </ul>
          <div class="note exam"><p>For a "what is technical communication" question, give both definitions, then add one line on <b>precision and intent</b>. That line is what the module is really after.</p></div>
          <div class="note heads-up"><p>Not on the slides: <b>technical communication</b> is the wider term (writing, speaking, diagrams, video). <b>Technical writing</b> is the written part. The slides use them almost interchangeably, and so can you in an answer.</p></div>
        ` },
        { title: 'Who writes it', html: `
          <p class="lead">Technical writing is not reserved for engineers. <b>Anyone who uses the jargon of a field</b> to explain something exact is doing it.</p>
          <div class="kv">
            <div><span>Traditionally</span><b>engineers and scientists</b></div>
            <div><span>Also</span><b>doctors, nurses, lawyers, farmers</b>: any profession with domain-specific jargon</div>
            <div><span>Occasionally</span><b>everyone</b>: driving directions, recipes, product complaint letters</div>
          </div>
          <p>The course quotes Laplante: "Everyone is a technical writer occasionally" (Laplante 2). A recipe is a good test case. It tells a reader what to do, in order, with exact quantities, and a wrong number spoils the dish.</p>
          <h3>You meet it daily</h3>
          <ul>
            <li>Almost every day we make decisions or take actions that <b>depend on technical information</b>.</li>
            <li>We need that information to be <b>technically accurate</b> and, just as much, <b>easy to understand and use</b>.</li>
            <li>It is in the <b>user manual</b> of a new gadget and in a website's <b>help documentation</b>.</li>
            <li><b>Doctors, engineers and chemists</b> must explain complex topics to ordinary consumers or to professionals with <b>varying expertise</b>.</li>
          </ul>
          <h3>Equations do not define it</h3>
          <div class="vs">
            <div class="side"><h4>Common belief</h4><p>"It is technical writing only if it has equations and technical terms."</p></div>
            <div class="side"><h4>The course's view</h4><p>Equations and terms often appear, but they do not define the field. A technical document can be <b>step-by-step procedures with not one equation</b>.</p></div>
          </div>
          <div class="note why"><p>The test is what the text is <b>for</b> (information a reader must act on, exactly) and not how many symbols it has. That is why the course keeps asking about <b>intent</b> and <b>precision</b>.</p></div>
        ` },
        { title: 'Precision and intent', html: `
          <p class="lead">Two things separate technical writing from poetry, news and advertising: it must be <b>exact</b>, and it is <b>not trying to make you feel something</b>.</p>
          <h3>Precision</h3>
          <p>In technical writing an expressed idea may be <b>realised in a physical device or process</b>. The text becomes the thing. So a small slip in the words can become a failure in the world: a <b>misplaced decimal point</b> or a <b>lost hyphen</b> in a data editing program can lead to <b>catastrophic system failure or loss of life</b>.</p>
          <div class="note example"><p>The slides give two cases. A <b>misplaced decimal point</b> in the mathematical specification of a process for controlling a nuclear plant. And in <b>1962</b>, NASA's <b>Mariner 1</b> Venus satellite was lost, in part because of a <b>misplaced hyphen</b> in a data editing program. Precision matters most in <b>computer software</b>.</p></div>
          <div class="note heads-up"><p>Not on the slides: tellings of the Mariner 1 story differ on the exact missing symbol (some say an overbar in a handwritten formula). The lesson is the same: one tiny symbol in a specification was enough. Use the slide version in answers.</p></div>
          <h3>Intent</h3>
          <p>Unlike <b>poetry, news reporting or advertising</b>, technical writing has <b>no intent to evoke an emotional response</b>. Its goal is to convey information <b>as concisely and correctly as possible</b>.</p>
          <table class="tbl">
            <thead><tr><th>Kind of writing</th><th>What it wants from the reader</th></tr></thead>
            <tbody>
              <tr><td>Poetry</td><td>to feel</td></tr>
              <tr><td>News reporting</td><td>to be informed, often moved</td></tr>
              <tr><td>Advertising</td><td>to want, to buy</td></tr>
              <tr><td><b>Technical writing</b></td><td><b>to understand and do it correctly</b></td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Technical writing is not cold for its own sake. The point is that emotion, blame and guesses get in the way of exact information. A reader of a reactor manual does not need to be moved.</p></div>
        ` },
        { title: 'Legal implications', html: `
          <p class="lead">Any writing can be <b>libellous</b>, but an <b>error in technical writing</b> can cost money, property, the environment, health or lives, and so carries <b>legal consequences</b>.</p>
          <p>The slides list the harms: <b>financial loss, damage to property, environmental catastrophe, injury or death</b>. They also say that the writing quality of user manuals is known to have caused <b>catastrophic software failures</b> (Wong et al. 2017).</p>
          <h3>Five cases the slides ask you to consider</h3>
          <table class="tbl">
            <thead><tr><th>Document</th><th>The error</th><th>The harm</th></tr></thead>
            <tbody>
              <tr><td>Investment brochure</td><td>bad financial advice</td><td>money lost</td></tr>
              <tr><td>Manual for an electric clothes dryer</td><td>wiring instruction wrong</td><td>fire, electric shock</td></tr>
              <tr><td>Hospital record of a seriously ill patient</td><td>wrong entry</td><td>wrong treatment</td></tr>
              <tr><td>Pesticide mixing recipe</td><td>incorrect formulation</td><td>poisoning, crop or environmental damage</td></tr>
              <tr><td>Aircraft maintenance instructions</td><td>error in a step</td><td>loss of life</td></tr>
            </tbody>
          </table>
          <p><small>The third column is the obvious consequence, added for study; the slides leave it to you.</small></p>
          <div class="note exam"><p>When asked why precision matters, give the <b>chain</b>: wrong word, then wrong action by the reader, then harm, then legal liability. One slide example plus the chain earns the marks.</p></div>
          <div class="worked">
            <div class="given"><p>A maintenance manual says "tighten the cap until firm". Two technicians read it differently. Why is this a legal issue as well as a style issue?</p></div>
            <div class="solve"><p>"Firm" has no number. One technician under-tightens, a part works loose, someone is hurt. The manual's author wrote the instruction, so the company may be liable for an ambiguous or incomplete instruction.</p></div>
            <div class="result"><p>Fix: "Tighten the cap to <b>12 N·m</b> with a torque wrench." One measurable instruction, one possible reading.</p></div>
          </div>
        ` },
        { title: 'Clarity in court: commas', html: `
          <p class="lead">A comma can change who wins a case. The deck sets a homework task: <b>research legal battles that arose from a lack of clarity</b>, and gives an article on the <b>legal rights and vicissitudes of the comma</b> as the starting example.</p>
          <p>It also names Lynne Truss's book on punctuation, <em>Eats, Shoots and Leaves</em>. The title is the joke: with the comma it is a violent panda, without it a panda eating.</p>
          <div class="vs">
            <div class="side"><h4>No comma</h4><p>"Eats shoots and leaves."</p><p><small>A panda eating bamboo.</small></p></div>
            <div class="side"><h4>With commas</h4><p>"Eats, shoots and leaves."</p><p><small>A very different panda.</small></p></div>
          </div>
          <p>The slide adds a careful remark: even in <b>legal documents</b>, where imprecision has damaging consequences, there is <b>not the same risk of loss of a system or life</b> as in technical documents.</p>
          <h3>Ambiguity costs money: a slide statistic</h3>
          <p>One slide quotes a figure: ambiguity in <b>bill of quantities</b> descriptions alone triggers about <b>34.2%</b> of construction contract disputes, with cost overruns typically of <b>15% to 25%</b> and dispute resolution averaging about <b>11.8 months</b>. Resolution fees (litigation, forensics, counsel) can average roughly <b>28.5%</b> of the contested amounts, and one project faced over <b>3 million yuan</b> in extra costs from ambiguous quantity deviations.</p>
          <div class="note heads-up"><p>Not on the slides: the best-known comma case is <b>O'Connor v. Oakhurst Dairy</b> (US, 2017). A state overtime law listed activities without a comma before the last item, and the court read the list the drivers' way. The dairy settled for about 5 million US dollars. The article on the slide is from the same month.</p></div>
          <div class="note trap"><p>Don't say commas "don't matter much". The slides' point is the opposite: where a document is used to <b>decide a right or a payment</b>, one punctuation mark can be argued over for months.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Technical communication, definition 1?`, back: `The <b>exchange of information</b> that helps people interact with technology and solve complex problems.` },
        { front: `Technical communication, definition 2?`, back: `The <b>art and science</b> of making complex technical information <b>accessible, usable and relevant</b> to a variety of audiences in a variety of settings.` },
        { front: `Primary goal of technical writing?`, back: `Make complex information <b>easy for the intended audience to understand and use</b>.` },
        { front: `Who writes technical documents?`, back: `Engineers and scientists traditionally, but also <b>doctors, nurses, lawyers, farmers</b>: any field with jargon.` },
        { front: `Laplante's point about everyone?`, back: `<b>Everyone is a technical writer occasionally</b>: directions, recipes, complaint letters.` },
        { front: `Do equations define technical writing?`, back: `No. A document can be <b>step-by-step procedures</b> with no equation.` },
        { front: `Precision: the 1962 example?`, back: `NASA's <b>Mariner 1</b> lost partly through a <b>misplaced hyphen</b>.` },
        { front: `Intent of technical writing vs poetry, news, advertising?`, back: `<b>No intent to evoke emotion</b>: convey information concisely and correctly.` },
        { front: `Harms from technical errors, per the slides?`, back: `<b>Financial loss, property damage, environmental catastrophe, injury, death</b>.` },
        { front: `Which book on punctuation does the deck name?`, back: `Lynne Truss, <b>Eats, Shoots and Leaves</b>.` },
        { front: `Ambiguity in bills of quantities triggers about what share of disputes?`, back: `About <b>34.2%</b> of construction contract disputes.` },
      ],
      oneLiners: [
        `Technical communication = the <b>exchange of information</b> that helps people use technology and solve complex problems.`,
        `Second definition: the <b>art and science</b> of making complex information accessible, usable and relevant.`,
        `Anyone with domain jargon writes technically: doctors, nurses, lawyers, farmers, and <b>everyone occasionally</b>.`,
        `Equations and terms do <b>not</b> define it; a document of procedures with no equation still counts.`,
        `<b>Precision</b>: the idea may become a device or process, so a lost hyphen or decimal can cause catastrophe.`,
        `<b>Intent</b>: unlike poetry, news or advertising, it does not try to evoke an emotional response.`,
        `<b>Legal weight</b>: errors in manuals, records and brochures can mean financial loss, injury or death.`,
      ],
      formulas: [
        { name: `What sets technical writing apart`, html: `<b>Precision</b> (exact, because the idea becomes a thing) + <b>Intent</b> (inform, not move) + <b>Legal weight</b> (errors have consequences)`, note: `The three slides after the definitions: precision, intent, legal implications.` },
        { name: `Answering "what is technical communication"`, html: `Definition 1 (<b>exchange of information</b>) + definition 2 (<b>art and science</b>, accessible, usable, relevant) + one line on <b>precision and intent</b>` },
      ],
    },

    {
      id: 'm1-features',
      title: 'Features of technical writing',
      short: 'Features of tech writing',
      blurb: 'The eight characteristics of good technical writing, how they relate to precision and the 5Cs, what visual effectiveness means (the slides show instructions, warnings and a readability test), and the skills a technical writer needs.',
      source: 'Module 1 Introduction to Technical Communication / Module 1 - Theory (ETH).pptx (slide 8); 1 Introduction to technical Writing.pptx (slides 6-13, 31-36, 59-60)',
      tabs: [
        { title: 'The eight characteristics', html: `
          <p class="lead">The slides list eight characteristics of technical writing. Each one is something a reader can <b>check</b> in a document.</p>
          <table class="tbl">
            <thead><tr><th>Characteristic</th><th>Slide wording</th><th>A slip</th></tr></thead>
            <tbody>
              <tr><td><b>Precision</b></td><td>exact words and numbers</td><td>"tighten the bolt a bit"</td></tr>
              <tr><td><b>Professional, not emotional, but persuasive</b></td><td>calm, factual tone that still convinces</td><td>"this idiot's design is a disaster"</td></tr>
              <tr><td><b>Accuracy</b></td><td>no errors of fact or grammar</td><td>"2 kilograms" where 20 was meant</td></tr>
              <tr><td><b>Clarity</b></td><td>no ambiguity</td><td>"replace the filter and the cover that is dirty"</td></tr>
              <tr><td><b>Completeness</b></td><td>all necessary information is present</td><td>"mix the powder with water" (how much?)</td></tr>
              <tr><td><b>Diction</b></td><td>appropriate, grammatically correct language</td><td>slang in a safety notice</td></tr>
              <tr><td><b>Organization</b></td><td>logical arrangement of parts</td><td>step 5 appearing before step 2</td></tr>
              <tr><td><b>Visual effectiveness</b></td><td>page or screen design, graphics</td><td>a wall of text with no headings</td></tr>
            </tbody>
          </table>
          <p><small>The "slip" column is added for study.</small></p>
          <div class="note exam"><p>Questions give a short text and ask which characteristic fails. Decide first whether it is a <b>content</b> problem (precision, accuracy, clarity, completeness), a <b>language</b> problem (diction, tone) or a <b>design</b> problem (organization, visuals).</p></div>
          <div class="mnemonic"><p>Group them: <b>exact</b> (precision, accuracy) · <b>understandable</b> (clarity, completeness, diction) · <b>well laid out</b> (organization, visuals) · <b>professional</b> in tone.</p></div>
        ` },
        { title: 'Precision, accuracy and clarity', html: `
          <p class="lead">These three overlap, and the course's textbook says how: <b>precision is a combination of clarity and correctness</b>.</p>
          <p>A precise sentence is <b>correct</b> (what it says is true and grammatical) and <b>clear</b> (it can only be read one way). Fail either and precision is gone.</p>
          <div class="vs">
            <div class="side"><h4>Clear but wrong</h4><p>"The tank holds 200 litres."</p><p><small>One reading, but the tank holds 2000. Not accurate.</small></p></div>
            <div class="side"><h4>Correct but unclear</h4><p>"The tank holds a lot of water."</p><p><small>True and useless: how much?</small></p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Neither</h4><p>"The tank holds around two hundred, give or take."</p></div>
            <div class="side"><h4>Precise</h4><p>"The tank holds 2000 litres."</p></div>
          </div>
          <h3>How the eight map to the 5Cs</h3>
          <table class="tbl">
            <thead><tr><th>Eight characteristics</th><th>5Cs (next topics)</th></tr></thead>
            <tbody>
              <tr><td>Accuracy</td><td><b>Correct</b></td></tr>
              <tr><td>Clarity</td><td><b>Clear</b></td></tr>
              <tr><td>Completeness</td><td><b>Complete</b></td></tr>
              <tr><td>(not in the eight)</td><td><b>Consistent</b>, <b>Changeable</b></td></tr>
              <tr><td>Diction, organization, visual effectiveness</td><td>style and design; no matching C</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: this mapping is ours, to help you see that the two lists overlap. The slides do not draw it, so give the lists separately in an answer and mention the overlap only as an extra.</p></div>
        ` },
        { title: 'Professional but persuasive', html: `
          <p class="lead">The slides say technical writing is <b>professional, not emotional, but persuasive</b>. That looks like a contradiction. It is not: you persuade with <b>evidence</b>, not with feeling.</p>
          <p>Intent rules out trying to <b>move</b> the reader. It does not rule out trying to <b>convince</b> them, with facts, figures and a clear benefit. A proposal, a safety notice and a workshop circular all want the reader to do something.</p>
          <div class="vs">
            <div class="side"><h4>Emotional</h4><p>"We desperately need this new server, the old one is a nightmare and everyone is suffering."</p></div>
            <div class="side"><h4>Professional and persuasive</h4><p>"The new server cuts report processing from 40 minutes to 12 and removes the weekly outage that costs two working hours."</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Bare order</h4><p>"Attend the workshop."</p></div>
            <div class="side"><h4>Persuasive</h4><p>"Attending the workshop will improve your communication skills and help you work more efficiently."</p></div>
          </div>
          <p>The second workshop line is the persuasive option in the course's own exercise deck: it gives the reader a <b>reason</b> and states a <b>benefit</b>.</p>
          <div class="note why"><p>A reader acts on a document only if they trust it. Calm, specific, benefit-led wording earns that trust. Insults and exaggeration cost it, even when the underlying point is right.</p></div>
          <div class="note trap"><p>"Persuasive" does not mean "dramatic". Words like "disastrous", "terrible" or "amazing" are emotion. Numbers, comparisons and consequences are evidence.</p></div>
        ` },
        { title: 'Visual effectiveness and readability', html: `
          <p class="lead"><b>Visual effectiveness</b> means page or screen design and graphics that help the reader find, follow and trust the information. The slides make the point with pictures.</p>
          <h3>What the slides show</h3>
          <ul>
            <li><b>A toy-brick lighthouse kit</b>: instructions with almost <b>no words</b>. Numbered pictures carry the whole procedure.</li>
            <li><b>A fibre-optic module guide</b>: three <b>numbered steps</b> (remove the dust protector, pull the metal latch to a right angle, swap the module and put the latch back) beside a diagram with matching numbers, plus a warning to use only modules the manufacturer recommends.</li>
            <li><b>A medical-device manual</b>: a safety page with four labelled boxes, <b>danger, warning, caution, notice</b>, so the reader can tell at a glance how serious each message is.</li>
            <li><b>Software help pages, a quick start guide, a machinery handbook</b>: search boxes, icons, numbered steps in two columns, and a <b>table of contents</b> for a long document.</li>
          </ul>
          <h3>The readability test</h3>
          <p>Slides 33 to 36 show the <b>same paragraph</b> (the legal-implications text) laid out in different ways and ask: <b>which one is the most readable?</b> The words are identical, so only the design changes the reader's experience.</p>
          <div class="note heads-up"><p>Not on the slides: readable layouts use a <b>moderate line length</b> (about 50 to 75 characters), left-aligned text, no words broken across lines, short paragraphs, headings, white space and strong contrast. The four safety labels follow a common scale: <b>danger</b> (will cause death or serious injury), <b>warning</b> (could), <b>caution</b> (minor injury), <b>notice</b> (damage or information, no injury).</p></div>
          <div class="note exam"><p>If asked for an example of visual effectiveness, name a <b>feature and its job</b>: numbered steps beside a matching diagram, so the reader never loses their place.</p></div>
        ` },
        { title: 'Skills of a technical writer', html: `
          <p class="lead">The deck ends its first half with six <b>skills a technical writer needs</b>, and with a link to a free course for engineers.</p>
          <table class="tbl">
            <thead><tr><th>Skill</th><th>What it means</th></tr></thead>
            <tbody>
              <tr><td><b>Subject matter expertise</b></td><td>understand the topic deeply enough to explain complex ideas clearly</td></tr>
              <tr><td><b>Design</b></td><td>build documents that look good and are easy to navigate</td></tr>
              <tr><td><b>Use of technical tools</b></td><td>master documentation tools and content management systems for efficient creation and management</td></tr>
              <tr><td><b>Writing and editing</b></td><td>strong writing plus careful editing to produce clear, concise, error-free documents</td></tr>
              <tr><td><b>Conveying information effectively</b></td><td>break complex information into understandable, user-friendly content</td></tr>
              <tr><td><b>Research and audience analysis</b></td><td>keep researching and studying the audience so content fits its needs and preferences</td></tr>
            </tbody>
          </table>
          <p>The last slide points to Google's <b>Technical Writing Courses for Engineers</b>. Its line is that <b>every engineer is also a writer</b>. The page linked in the deck is its short lesson on <b>just enough grammar</b>.</p>
          <div class="note why"><p>Notice that only one of the six is "writing". The rest are knowing the subject, knowing the reader, designing the page and using tools. That is why engineers can be good technical writers and why good writers still need to learn the subject.</p></div>
          <div class="note exam"><p>You may be asked to <b>explain</b> why audience analysis is a writing skill. Answer: the same fact is written differently for a customer and for a colleague, so you must know who is reading before choosing words and detail.</p></div>
        ` },
        { title: 'Worked: audit one instruction', html: `
          <p class="lead">Take one weak instruction and test it against the eight characteristics, one at a time.</p>
          <div class="worked">
            <div class="given"><p>A lab notice reads: <b>"Maybe turn off the thing before you open it, because it is super dangerous!!"</b></p></div>
            <div class="solve">
              <ol class="steps">
                <li><b>Precision</b> "the thing", "maybe": which device, and is it optional?</li>
                <li><b>Tone</b> "super dangerous!!" is emotional. State the hazard instead.</li>
                <li><b>Accuracy</b> Nothing checkable is stated, so nothing can be confirmed or wrong.</li>
                <li><b>Clarity</b> "before you open it": open what, turn off what?</li>
                <li><b>Completeness</b> Missing: how to switch off, how to confirm it is off, what the danger is.</li>
                <li><b>Diction</b> "super" is chat language.</li>
                <li><b>Organization</b> The reason comes after the instruction; a safe order is hazard, action, check.</li>
                <li><b>Visual effectiveness</b> A hazard needs a visible warning label, not a line of body text.</li>
              </ol>
            </div>
            <div class="result"><p><b>Warning: high voltage inside.</b> 1. Switch off the oscilloscope at the rear power switch. 2. Unplug the mains lead. 3. Wait 5 minutes for the capacitors to discharge. 4. Only then remove the rear panel.</p></div>
          </div>
          <div class="note heads-up"><p>The "5 minutes" is an invented figure for the example. In real documents the number comes from the manufacturer.</p></div>
        ` },
      ],
      flashcards: [
        { front: `The eight characteristics of technical writing?`, back: `<b>Precision; professional, not emotional, but persuasive; accuracy; clarity; completeness; diction; organization; visual effectiveness</b>.` },
        { front: `Accuracy means…`, back: `<b>No errors of fact or grammar</b>.` },
        { front: `Clarity means…`, back: `<b>No ambiguity</b>.` },
        { front: `Completeness means…`, back: `<b>All necessary information</b> is present.` },
        { front: `Diction means…`, back: `<b>Appropriate and grammatically correct</b> language.` },
        { front: `Organization means…`, back: `A <b>logical arrangement</b> of parts.` },
        { front: `Visual effectiveness means…`, back: `<b>Page or screen design</b> and graphics.` },
        { front: `Precision in terms of other qualities?`, back: `A combination of <b>clarity and correctness</b>.` },
        { front: `How is "persuasive" compatible with "not emotional"?`, back: `Persuade with <b>evidence and benefits</b>, not with feeling.` },
        { front: `Six skills of a technical writer?`, back: `<b>Subject expertise, design, technical tools, writing and editing, conveying information, research and audience analysis</b>.` },
        { front: `Four safety labels shown in the manual slide?`, back: `<b>Danger, warning, caution, notice</b>.` },
      ],
      oneLiners: [
        `Eight characteristics: <b>precision, professional tone, accuracy, clarity, completeness, diction, organization, visual effectiveness</b>.`,
        `Professional <b>not emotional but persuasive</b>: convince with evidence, never with drama.`,
        `Precision = <b>clarity + correctness</b>; fail either and it is gone.`,
        `Accuracy: no errors of fact or grammar. Clarity: no ambiguity. Completeness: nothing the reader needs is missing.`,
        `Diction is the right language; organization is the right order; visuals are the right layout.`,
        `Visual effectiveness examples: <b>numbered steps beside a diagram</b>, labelled danger or warning boxes, a table of contents.`,
        `Writer skills: expertise, design, tools, writing and editing, conveying information, audience research.`,
      ],
      formulas: [
        { name: `The eight characteristics`, html: `<b>Precision · Professional tone · Accuracy · Clarity · Completeness · Diction · Organization · Visual effectiveness</b>` },
        { name: `Precision`, html: `Precision = <b>clarity</b> + <b>correctness</b>`, note: `From the 5Cs reading: the textbook defines it this way.` },
      ],
    },

    {
      id: 'm1-kinds',
      title: 'Types and kinds of technical documents',
      short: 'Types of documents',
      blurb: 'The three types by audience and purpose (consumer-directed, expert-to-expert, technical marketing), who reads technical documents, the gallery of document kinds from the slides, and the industries that rely on technical writing.',
      source: 'Module 1 Introduction to Technical Communication / Module 1 - Theory (ETH).pptx (slide 9); 1 Introduction to technical Writing.pptx (slides 5-30, 40)',
      tabs: [
        { title: 'Three types of technical writing', html: `
          <p class="lead">The slides sort technical writing into <b>three types</b> by who it is written for and what it is trying to do.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Written for</th><th>Examples (from the slides)</th></tr></thead>
            <tbody>
              <tr><td><b>Consumer-directed</b></td><td>end-users or consumers</td><td>user manuals, employee handbooks, standard operating procedures (SOP), software user documentation (help files), troubleshooting guides, legal disclaimers</td></tr>
              <tr><td><b>Expert-to-expert</b></td><td>a knowledgeable audience</td><td>scientific papers, medical case studies, annual business reports, legal case reviews</td></tr>
              <tr><td><b>Technical marketing content</b></td><td>buyers; technical information in a digestible format to <b>promote a product or service</b></td><td>marketing case studies, white papers, product brochures, press releases, business plans and proposals</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Same topic, consumer-directed</h4><p>"To reset the router, hold the small button for ten seconds until the light blinks."</p></div>
            <div class="side"><h4>Same topic, expert-to-expert</h4><p>"Factory reset is triggered by a ten-second hold on the reset line; the bootloader then clears non-volatile configuration."</p></div>
          </div>
          <p>Same device, two readers, two documents. The first assumes no background and gives steps. The second assumes background and gives mechanism.</p>
          <div class="note trap"><p>Some documents sit in more than one list. <b>Case studies</b> appear under marketing here, and in the gallery as a general example; <b>annual reports</b> are expert-to-expert on one slide and company documents elsewhere. Decide by <b>audience and purpose</b> in the question's scenario.</p></div>
          <div class="note exam"><p>The usual task: a short description of a document and its reader, and you name the type and say why. Always give the reason in terms of <b>audience</b> and <b>purpose</b>.</p></div>
        ` },
        { title: 'Who reads it: the audience', html: `
          <p class="lead">The audience of a technical document <b>depends on the type of document</b>. Two broad groups: <b>end users</b> and <b>internal or client readers</b>.</p>
          <h3>End users</h3>
          <p>Many technical documents <b>come with a product</b>. A new computer, for instance, may ship with a small booklet, often in <b>several languages</b>, giving directions for <b>first use</b>, suggestions for <b>maintenance</b> and <b>warnings</b> against activities that could damage the product.</p>
          <h3>Internal audiences and clients</h3>
          <p>Other documents are for <b>senior collaborators and development teams</b>, or for <b>clients</b>. Their purpose is to <b>inform others of the technical aspects</b> of a product or its development process, and to keep members updated on details they need for <b>decision making</b> and other professional tasks.</p>
          <table class="tbl">
            <thead><tr><th></th><th>End user</th><th>Internal or client</th></tr></thead>
            <tbody>
              <tr><td>Wants to</td><td>use, maintain, stay safe</td><td>decide, build, stay in step</td></tr>
              <tr><td>Knows</td><td>little about how it works</td><td>a good deal</td></tr>
              <tr><td>Typical document</td><td>user manual, booklet, help page</td><td>design note, progress update, client report</td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>A company ships a new water purifier. Name two documents it needs and their audiences.</p></div>
            <div class="solve"><p>Document 1: a <b>user manual</b> in plain steps with maintenance schedule and warnings, for the buyer. Document 2: a <b>test report</b> on filter performance, for the quality team and the retailer who must approve it.</p></div>
            <div class="result"><p>One product, at least two audiences, and each document is written differently.</p></div>
          </div>
          <div class="note why"><p>Audience decides vocabulary, how much background to give, and how to lay out the page. This is the first thing to settle before writing.</p></div>
        ` },
        { title: 'Examples and kinds of documents', html: `
          <p class="lead">The slides give several lists of technical documents. Together they show how <b>wide</b> the field is.</p>
          <h3>Typical kinds of technical communication</h3>
          <p>A diagram from the course textbook (Lannon and Gurak) pairs each kind with a job:</p>
          <table class="tbl">
            <thead><tr><th>Kind</th><th>Job</th></tr></thead>
            <tbody>
              <tr><td><b>Instructions</b></td><td>assembling a lawn mower</td></tr>
              <tr><td><b>User guide</b></td><td>operating an electron microscope</td></tr>
              <tr><td><b>Report</b></td><td>analysing a problem or issue</td></tr>
              <tr><td><b>Memo</b></td><td>answering questions about a project's progress</td></tr>
              <tr><td><b>Procedures</b></td><td>complying with government regulations</td></tr>
            </tbody>
          </table>
          <h3>Examples of technical writing</h3>
          <div class="chips"><span class="chip">instruction manuals</span><span class="chip">e-learning content</span><span class="chip">software installation guides</span><span class="chip">product specifications</span><span class="chip">product descriptions</span><span class="chip">reports</span><span class="chip">press releases</span><span class="chip">business proposals</span><span class="chip">job descriptions</span><span class="chip">textbooks</span><span class="chip">company documents</span><span class="chip">case studies</span></div>
          <p>A second slide adds:</p>
          <div class="chips"><span class="chip">how-to guides</span><span class="chip">user guides</span><span class="chip">presentations</span><span class="chip">brochures</span><span class="chip">memos</span><span class="chip">newsletters</span><span class="chip">business plans or proposals</span><span class="chip">reviews</span><span class="chip">advertisements</span><span class="chip">stylebooks or handbooks</span></div>
          <p><small>The slide repeats "press releases" and "reports" across the lists.</small></p>
          <div class="note exam"><p>You will not be asked to reproduce every list. Learn <b>three or four from each group</b> and be ready to say which type (consumer-directed, expert-to-expert, marketing) each belongs to.</p></div>
        ` },
        { title: 'A map of documentation', html: `
          <p class="lead">Two slides organise the same material as maps. Use them as <b>memory structures</b>.</p>
          <h3>The four-branch tree</h3>
          <table class="tbl">
            <thead><tr><th>Branch</th><th>Contents</th></tr></thead>
            <tbody>
              <tr><td><b>Product and user documentation</b></td><td>user training manuals, user onboarding flows, API documentation, FAQ and knowledge bases, software install guides</td></tr>
              <tr><td><b>Process documentation</b></td><td>internal wikis, OKRs and KPI reporting, video tutorials, new-employee onboarding, flowcharts</td></tr>
              <tr><td><b>Expert-to-expert documentation</b></td><td>research summaries, legal documents, white papers</td></tr>
              <tr><td><b>Sales and marketing documentation</b></td><td>business plan, case studies, RFPs</td></tr>
            </tbody>
          </table>
          <h3>Types of documentation (mind map)</h3>
          <div class="chips"><span class="chip">step-by-step walkthroughs</span><span class="chip">knowledge base</span><span class="chip">product feature documentation</span><span class="chip">troubleshooting documentation</span><span class="chip">internal development documentation</span><span class="chip">API, SDK and code documentation</span><span class="chip">marketing documentation</span></div>
          <div class="note heads-up"><p>Not on the slides: <b>API</b> = application programming interface, the contract by which one piece of software talks to another. <b>OKR</b> = objectives and key results; <b>KPI</b> = key performance indicator. <b>RFP</b> = request for proposal, the document a buyer issues so suppliers can bid.</p></div>
          <p>Note how this tree groups by <b>audience and purpose</b>, the same idea as the three types: users, colleagues, experts, buyers.</p>
        ` },
        { title: 'Gallery of documents', html: `
          <p class="lead">Slides 20 to 30 show a real sample of each kind of document. What each one teaches:</p>
          <table class="tbl">
            <thead><tr><th>Document</th><th>What the sample shows</th></tr></thead>
            <tbody>
              <tr><td><b>User manual</b></td><td>dense reference tables for a network device; a user's guide with an introduction, safe-handling section and a warning box</td></tr>
              <tr><td><b>Software installation guide</b></td><td>a setup checklist with a how-to video, required items and "before installation" checks</td></tr>
              <tr><td><b>Standard operating procedure (SOP)</b></td><td>labelled parts: <b>title, department, date and ID, sign-off by the department head, purpose, definitions, procedure</b>. Callouts: users can quickly see the purpose without reading it all; steps are complete and in order; <b>upcoming jargon is clarified</b></td></tr>
              <tr><td><b>In-app guidance and help</b></td><td>a step-by-step overlay ("step 3 of 9") and a task list inside the software</td></tr>
              <tr><td><b>API documentation</b></td><td>a developer site: pre-built components and a reference</td></tr>
              <tr><td><b>Service level agreement (SLA)</b></td><td>a table of service, description, <b>SLA target</b> (for example 99.999%), <b>performance metric</b> and <b>measurement</b></td></tr>
              <tr><td><b>Press release</b></td><td>a headline, date and short summary announcing a product</td></tr>
              <tr><td><b>Case study and white paper</b></td><td>a company story with results (40% less time, 950 thousand dollars saved, 2000 associates)</td></tr>
              <tr><td><b>Company document</b></td><td>an employee handbook with a table of contents</td></tr>
              <tr><td><b>Request for proposal / proposal</b></td><td>a proposal with description, concept, goals and objectives, philosophy and expenses</td></tr>
              <tr><td><b>Annual report</b></td><td>a company's formal yearly filing</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: in an SLA table, <b>availability</b> is the share of time a service is up (99.999% allows only a few minutes of downtime a year), <b>MTTR</b> is mean time to repair and <b>MTTF</b> is mean time to failure.</p></div>
          <p>The slides also show <b>software help pages</b> (a searchable online help, a product documentation hub, a quick-start guide for a video-conference booking tool) and a <b>machinery installation handbook</b> with its table of contents.</p>
        ` },
        { title: 'Industries that rely on it', html: `
          <p class="lead">Technical writing is not tied to one industry. The slide lists ten that depend on it most.</p>
          <div class="chips"><span class="chip">engineering</span><span class="chip">computer software and hardware</span><span class="chip">robotics</span><span class="chip">chemistry</span><span class="chip">finance</span><span class="chip">consumer electronics</span><span class="chip">forestry</span><span class="chip">aeronautics</span><span class="chip">medical and healthcare</span><span class="chip">biotechnology</span></div>
          <p>In each of them somebody has to move exact knowledge from a specialist to a person who needs to <b>act</b> on it: a regulation to a plant manager, a drug trial to a doctor, a flight check to an engineer.</p>
          <h3>Worked: sort six documents into the three types</h3>
          <div class="worked">
            <div class="given"><p>(a) A hospital's discharge instructions for a patient. (b) A journal paper on a new alloy. (c) A product brochure with specifications for a drone. (d) A standard operating procedure for a chemistry lab. (e) A white paper on solar storage, issued by a battery company. (f) A review of a court case written for lawyers.</p></div>
            <div class="solve"><p>(a) written for end-users, so <b>consumer-directed</b>. (b) readers are specialists: <b>expert-to-expert</b>. (c) technical facts in digestible form to sell: <b>technical marketing</b>. (d) staff following a procedure: <b>consumer-directed</b>, since SOPs are in that list. (e) technical detail presented to promote the company: <b>technical marketing</b>. (f) legal case reviews are named under <b>expert-to-expert</b>.</p></div>
            <div class="result"><p>Consumer-directed: a, d. Expert-to-expert: b, f. Technical marketing: c, e.</p></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `Three types of technical writing?`, back: `<b>Consumer-directed, expert-to-expert, technical marketing</b>.` },
        { front: `Consumer-directed examples?`, back: `<b>User manuals, employee handbooks, SOPs, help files, troubleshooting guides, legal disclaimers</b>.` },
        { front: `Expert-to-expert examples?`, back: `<b>Scientific papers, medical case studies, annual business reports, legal case reviews</b>.` },
        { front: `Technical marketing examples?`, back: `<b>Marketing case studies, white papers, brochures, press releases, business plans and proposals</b>.` },
        { front: `Purpose of technical marketing content?`, back: `Technical information in a <b>digestible format</b> that promotes a product or service.` },
        { front: `Audience of a booklet that comes with a computer?`, back: `<b>End users</b>: first use, maintenance, warnings.` },
        { front: `Purpose of internal or client documentation?`, back: `<b>Inform others</b> of the technical aspects of a product or its development; keep members updated for decisions.` },
        { front: `Five kinds of technical communication in the textbook diagram?`, back: `<b>Instructions, user guide, report, memo, procedures</b>.` },
        { front: `Four branches of the documentation tree?`, back: `<b>Product and user, process, expert-to-expert, sales and marketing</b>.` },
        { front: `Parts of an SOP shown on the slide?`, back: `<b>Title, department, date and ID, sign-off, purpose, definitions, procedure</b>.` },
        { front: `Columns of the SLA sample?`, back: `<b>Service, description, SLA target, performance metric, measurement</b>.` },
      ],
      oneLiners: [
        `Three types: <b>consumer-directed</b>, <b>expert-to-expert</b>, <b>technical marketing</b>.`,
        `Decide the type by <b>audience and purpose</b>: users to act, experts to inform, buyers to be persuaded.`,
        `Audience depends on the document: <b>end users</b> (first use, maintenance, warnings) or <b>internal and client</b> readers (decisions).`,
        `Kinds: <b>instructions, user guide, report, memo, procedures</b> (lawn mower, microscope, problem, progress, regulations).`,
        `A documentation tree has four branches: product and user, process, expert-to-expert, sales and marketing.`,
        `An <b>SOP</b> has title, department, date and ID, sign-off, purpose, definitions and procedure, and clarifies jargon.`,
        `Ten industries rely on it, from engineering and robotics to forestry and biotechnology.`,
      ],
      formulas: [
        { name: `Three types`, html: `<b>Consumer-directed</b> (users) · <b>Expert-to-expert</b> (specialists) · <b>Technical marketing</b> (buyers)` },
        { name: `Naming a type in an answer`, html: `"It is <b>[type]</b> because the reader is <b>[audience]</b> and the purpose is to <b>[act / inform / persuade]</b>."` },
      ],
    },

    {
      id: 'm1-taxonomy',
      title: 'Taxonomy of technical writing',
      short: 'Taxonomy',
      blurb: 'The tree that sorts technical writing into pedagogical, theoretical and professional orientations, with scientific writing, technical reporting, business communication and electronic media under professional, and what the word taxonomy means in the other slide.',
      source: 'Module 1 Introduction to Technical Communication / Module 1 - Theory (ETH).pptx (slides 10-12); 1 Introduction to technical Writing.pptx (slides 41-44, 55)',
      tabs: [
        { title: 'The tree', html: `
          <p class="lead">Technical writing is sorted by <b>orientation</b>, meaning what the writing is mainly for. There are <b>three</b>: <b>pedagogical, theoretical and professional</b>. The professional one splits again.</p>
          <figure data-fig="m1-taxonomy-map"></figure>
          <table class="tbl">
            <thead><tr><th>Orientation</th><th>Focus</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Pedagogical</b></td><td>teaching</td><td>a calculus textbook; a book for a novice photographer</td></tr>
              <tr><td><b>Theoretical</b></td><td>research: various kinds of theoretical and applied research</td><td>a research paper on a new theory</td></tr>
              <tr><td><b>Professional</b></td><td>the <b>broadest form</b>, serving the needs of practitioners in any discipline</td><td>a progress report, a cover letter, a journal article</td></tr>
            </tbody>
          </table>
          <p>The professional orientation has <b>scientific writing, technical reporting and business communications</b>. A second version of the tree on the slides adds a fourth box, <b>electronic media</b>.</p>
          <p>The tree is redrawn from Montgomery and Plung's 1988 conference paper (the IEEE link on the slide), in the course textbook as Figure 1.1.</p>
          <div class="note exam"><p>Two quick patterns: <b>draw the tree</b> (three orientations, then the branches under professional) or <b>place a document</b> in it. Always say which of the three orientations first, and only then which branch.</p></div>
          <div class="note trap"><p>"Professional" here does not mean "done by professionals". It means <b>serving the practical needs of working practitioners</b>. A textbook for them to learn from is still pedagogical.</p></div>
        ` },
        { title: 'The professional branches', html: `
          <p class="lead">Under <b>professional orientation</b> the course studies three branches in detail. This is the overview. Each gets its own topic.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Technical reporting</th><th>Scientific writing</th><th>Business communication</th></tr></thead>
            <tbody>
              <tr><td><b>Readers</b></td><td>supervisors, subordinates, peers, customers, clients, government agencies</td><td>scientists, engineers, scholars</td><td>employers, customers, colleagues</td></tr>
              <tr><td><b>Purpose</b></td><td>convey specific information in an <b>archival</b> way</td><td>report experimental and scholarly work</td><td>correspondence in the day-to-day of business, often a <b>call to action</b></td></tr>
              <tr><td><b>Key tension</b></td><td>kept and referred to for years</td><td><b>authority</b> against <b>speed</b></td><td>precise but also persuasive</td></tr>
              <tr><td><b>Examples</b></td><td>progress report, feasibility study, safety analysis report</td><td>journal paper, conference paper</td><td>résumé, cover letter, transmittal letter</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Technical reporting</h4><p>"The pump P-2 vibration was measured weekly from June to August. Amplitude rose from 2 to 6 mm/s. Replacement is recommended before the next shutdown."</p></div>
            <div class="side"><h4>Business communication</h4><p>"I would welcome a short meeting next week to discuss how I can contribute to your maintenance team. I can be reached at any time on the number below."</p></div>
          </div>
          <p>The first is a record that someone will open in five years. The second wants a reply this week.</p>
        ` },
        { title: 'Taxonomy as findability', html: `
          <p class="lead">The word <b>taxonomy</b> is used in a second way on one slide. Not as a tree of <b>writing types</b>, but as a <b>structured system for organising information</b> so readers can find what they need.</p>
          <p>The slide's version: a taxonomy is the system we create to organise technical documentation so users find what they need <b>when they need it</b>. It is not about classifying types of writing (user guides, white papers). It classifies the <b>information inside</b> documents. It is the <b>backbone of findability and usability</b>.</p>
          <p>It quotes a definition: taxonomies are knowledge organisation systems used to support information <b>findability, discovery and access</b>. Its forms are a <b>controlled vocabulary, synonym ring, thesaurus, hierarchical term tree, or ontology</b>.</p>
          <div class="vs">
            <div class="side"><h4>Taxonomy of writing (Figure 1.1)</h4><p>Sorts <b>kinds of writing</b>: pedagogical, theoretical, professional, and branches. Used to say what kind of document you have.</p></div>
            <div class="side"><h4>Taxonomy of information</h4><p>Sorts <b>topics inside documentation</b>: tags, categories, term trees. Used to let a reader <b>find</b> an answer.</p></div>
          </div>
          <div class="note heads-up"><p>The slide says taxonomy "is not about classifying types of writing", yet the module's syllabus topic is exactly that tree. For the CAT, answer a question on "taxonomy of technical writing" with <b>Figure 1.1</b>. Mention the findability sense only if the question uses it.</p></div>
          <div class="note example"><p>Not on the slides: a software help site tags every article with product, version and task. A reader who types "reset password" lands on the right page because the information has been classified. That classification is a taxonomy in this second sense.</p></div>
        ` },
        { title: 'Worked: place a document', html: `
          <p class="lead">Slide 55 asks, "Where does <b>this book</b> fit in the taxonomy?", about the course textbook. Place anything the same way: <b>purpose first, reader second, branch last</b>.</p>
          <div class="worked">
            <div class="given"><p>The course textbook is a book that teaches engineers and scientists how to write. Where does it go?</p></div>
            <div class="solve"><p>Purpose: it <b>teaches</b>. Teaching is the pedagogical focus, the same as the calculus textbook on the slide. Reader: students and professionals, but the orientation is set by purpose.</p></div>
            <div class="result"><p><b>Pedagogical orientation.</b> The slide gives no printed answer, so this is our reading.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Place these: (a) a lab report for a viscosity experiment sent to your faculty guide, (b) a physics textbook, (c) a paper reporting a new catalyst, (d) a quarterly progress report to a client, (e) a job application email, (f) an online help portal.</p></div>
            <div class="solve"><p>(a) Written to a supervisor and filed: professional, <b>technical reporting</b>. (b) Teaches: <b>pedagogical</b>. (c) Research output in a journal: professional, <b>scientific writing</b> (or theoretical, if it is mainly new theory). (d) Client, archival: <b>technical reporting</b>. (e) Correspondence with a call to action: <b>business communication</b>. (f) Delivered on screen: <b>electronic media</b> under professional.</p></div>
            <div class="result"><p>Pedagogical: b. Professional: a, c, d, e, f, with reporting a and d, scientific c, business e, electronic media f.</p></div>
          </div>
          <div class="note trap"><p>Borderline cases exist (a research paper can be theoretical or scientific). In an answer, <b>say which feature you used</b> to decide and pick one. Marks go for the reasoning.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Three orientations of technical writing?`, back: `<b>Pedagogical, theoretical, professional</b>.` },
        { front: `Pedagogical orientation?`, back: `Focused on <b>teaching</b> (a calculus textbook).` },
        { front: `Theoretical orientation?`, back: `Focused on <b>research</b>, theoretical and applied.` },
        { front: `Professional orientation?`, back: `The <b>broadest</b> form, serving practitioners in any discipline.` },
        { front: `Branches under professional orientation?`, back: `<b>Scientific writing, technical reporting, business communications</b> (and electronic media on the second slide).` },
        { front: `Who proposed the taxonomy tree?`, back: `<b>Montgomery and Plung</b>, 1988 (Figure 1.1 of the textbook).` },
        { front: `Taxonomy in the findability sense?`, back: `A system that organises the <b>information inside</b> documents so users can find it.` },
        { front: `Forms of a knowledge organisation system?`, back: `<b>Controlled vocabulary, synonym ring, thesaurus, term tree, ontology</b>.` },
        { front: `Which orientation is a novice photographer's guide?`, back: `<b>Pedagogical</b>.` },
        { front: `Which branch of professional is a progress report?`, back: `<b>Technical reporting</b>.` },
      ],
      oneLiners: [
        `Taxonomy tree: <b>pedagogical, theoretical, professional</b>.`,
        `Pedagogical teaches; theoretical researches; professional serves practitioners (the broadest).`,
        `Professional splits into <b>scientific writing, technical reporting, business communications</b>, plus electronic media on the second slide.`,
        `Tree redrawn from <b>Montgomery and Plung (1988)</b>; textbook Figure 1.1.`,
        `Another sense of taxonomy: organising information so it can be <b>found</b> (controlled vocabulary, thesaurus, ontology).`,
        `To place a document: <b>purpose first</b>, then reader, then branch.`,
      ],
      formulas: [
        { name: `Taxonomy of technical writing`, html: `Technical writing → <b>pedagogical</b> | <b>theoretical</b> | <b>professional</b> → (scientific writing, technical reporting, business communications, electronic media)` },
        { name: `Placing a document`, html: `<b>Purpose</b> (teach / research / serve a practitioner) → <b>reader</b> → <b>branch</b>`, note: `Say which feature decided it.` },
      ],
    },

    {
      id: 'm1-scientific-reporting',
      title: 'Scientific writing and technical reporting',
      short: 'Scientific and reports',
      blurb: 'Technical reporting (archival documents for supervisors, clients and agencies) and scientific writing (experimental and scholarly publications, with the authority versus speed trade-off and its venues), side by side.',
      source: 'Module 1 Introduction to Technical Communication / Module 1 - Theory (ETH).pptx (slides 13-14); 1 Introduction to technical Writing.pptx (slides 45, 49-50)',
      tabs: [
        { title: 'Technical reporting', html: `
          <p class="lead"><b>Technical reports</b> are documents prepared for <b>supervisors, subordinates, peers, customers, clients and government agencies</b>. Their purpose is to convey specific information in an <b>archival</b> way: written to be <b>stored and referred to for years</b>.</p>
          <p>"Archival" changes how you write. Someone who was not there, years later, must be able to understand what was done and why.</p>
          <table class="tbl">
            <thead><tr><th>Report</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><b>Progress report</b></td><td>tells a supervisor or client what has been done, what is next</td></tr>
              <tr><td><b>Feasibility study</b></td><td>judges whether a plan is practical, with evidence</td></tr>
              <tr><td><b>Specification</b></td><td>states exactly what a product or system must do</td></tr>
              <tr><td><b>Proposal</b></td><td>offers to do work, with method, cost and schedule</td></tr>
              <tr><td><b>Manual</b></td><td>explains how to operate or maintain something</td></tr>
              <tr><td><b>Safety analysis report</b></td><td>records hazards and how they are controlled</td></tr>
            </tbody>
          </table>
          <p>The longer list in the first deck adds <b>facilities descriptions, procedures, planning documents, environmental impact statements</b> and <b>bug reports</b>.</p>
          <div class="note why"><p>A bug report that says "it crashed" is useless in a year. One that gives the version, the steps to reproduce and the error message can still be used by a new team. That is what archival means.</p></div>
          <div class="note exam"><p>The marks word is <b>archival</b>. Define a technical report with its readers, then say "intended to be stored and referenced for years".</p></div>
        ` },
        { title: 'Scientific writing', html: `
          <p class="lead"><b>Scientific writing</b> covers <b>experimental research and its documentation</b>, and the <b>scholarly publications</b> that come from that work, including scholarly and experimental research in medicine.</p>
          <p>Scientists and engineers can publish in several places: <b>books, journals, magazines, conferences, newsletters, websites and blogs</b>.</p>
          <h3>The key tension: authority and speed</h3>
          <p>The slides name two things the writer must balance:</p>
          <div class="kv">
            <div><span>Authority</span><b>reliability, gained through peer review</b></div>
            <div><span>Speed of publication</span><b>timeliness of the content</b></div>
          </div>
          <p>Peer review makes a result trustworthy, and it also takes months. A blog post reaches readers today but nobody has checked it.</p>
          <h3>What each venue is for</h3>
          <table class="tbl">
            <thead><tr><th>Venue</th><th>Used for</th></tr></thead>
            <tbody>
              <tr><td><b>Journals</b></td><td>archival theory</td></tr>
              <tr><td><b>Magazines</b></td><td>shorter-term applications</td></tr>
              <tr><td><b>Conference proceedings</b></td><td>preliminary findings</td></tr>
              <tr><td><b>Newsletters, websites, blogs</b></td><td>quick, informal news of the work</td></tr>
            </tbody>
          </table>
          <p><small>The slide describes journals, magazines and proceedings; the newsletter, website and blog row is our summary.</small></p>
          <div class="note exam"><p>Expect: "A researcher has early results and wants quick feedback. Which venue?" Answer <b>conference proceedings</b>, and say that the price is lower authority than a journal.</p></div>
        ` },
        { title: 'Authority versus speed', html: `
          <p class="lead">A chart in the deck puts the venues on two axes: <b>speed of publication</b> and <b>authority</b>. The faster a venue, the less checked it is. The more trusted, the slower.</p>
          <figure data-fig="m1-authority-speed"></figure>
          <ul>
            <li><b>Fast and low authority</b>: websites and blogs, newsletters.</li>
            <li><b>In the middle</b>: magazines, conference proceedings, open access journals, peer-reviewed magazines.</li>
            <li><b>Slow and high authority</b>: books and, furthest out, <b>archival journals</b>.</li>
          </ul>
          <p>The labels in the chart overlap each other, so treat the positions as approximate. What matters is the <b>trend</b> and the two extremes.</p>
          <div class="worked">
            <div class="given"><p>Meera has a promising result on a low-cost water filter. She needs (a) quick comments from other researchers this month, and (b) a lasting, citable record. Where should each go?</p></div>
            <div class="solve"><p>(a) Speed matters most: a <b>conference paper</b>, whose proceedings are for preliminary findings. (b) Authority and permanence matter most: later, a full paper in an <b>archival journal</b> after peer review.</p></div>
            <div class="result"><p>Two venues in sequence: conference first (fast), journal after (authoritative).</p></div>
          </div>
          <div class="note trap"><p>Don't call blogs "bad" and journals "good". The slide's point is that each venue buys something and costs something. You choose by what the work needs now.</p></div>
        ` },
        { title: 'Side by side', html: `
          <p class="lead">Technical reporting and scientific writing are both professional, but they differ in <b>reader, aim, lifespan and review</b>.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Technical reporting</th><th>Scientific writing</th></tr></thead>
            <tbody>
              <tr><td><b>Definition</b></td><td>documents for supervisors, subordinates, peers, customers, clients, government agencies</td><td>experimental research documentation and scholarly publications</td></tr>
              <tr><td><b>Readers</b></td><td>people who need to decide or act in an organisation</td><td>a research community</td></tr>
              <tr><td><b>Purpose</b></td><td>convey specific information, <b>archival</b></td><td>share results; balance <b>authority and speed</b></td></tr>
              <tr><td><b>Checked by</b></td><td>a supervisor or client (our note)</td><td><b>peer review</b></td></tr>
              <tr><td><b>Examples</b></td><td>progress reports, feasibility studies, specifications, proposals, manuals, safety analysis reports</td><td>papers in journals, magazines, conference proceedings, newsletters, blogs</td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>Classify: (a) a feasibility study of a rooftop solar plant for the college trustees, (b) a paper on a new battery electrolyte for a journal, (c) a safety analysis report for a chemical store, (d) a poster presenting first test results at a conference.</p></div>
            <div class="solve"><p>(a) Reader is a client-like decision maker, document is kept: <b>technical reporting</b>. (b) Peer-reviewed research publication: <b>scientific writing</b>. (c) Named in the reporting list: <b>technical reporting</b>. (d) Preliminary findings at a conference: <b>scientific writing</b>.</p></div>
            <div class="result"><p>Reporting: a, c. Scientific: b, d.</p></div>
          </div>
          <div class="note heads-up"><p>The slides do not give the "checked by" row; it is added so you can see the contrast. Many companies have a review step for reports as well.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Technical reports are prepared for…`, back: `<b>Supervisors, subordinates, peers, customers, clients, government agencies</b>.` },
        { front: `Purpose of a technical report?`, back: `Convey specific information in an <b>archival</b> way, stored for years.` },
        { front: `Six technical report examples (first deck)?`, back: `<b>Progress reports, feasibility studies, specifications, proposals, manuals, safety analysis reports</b>.` },
        { front: `Extra examples in the longer list?`, back: `<b>Facilities descriptions, procedures, planning documents, environmental impact statements, bug reports</b>.` },
        { front: `Scientific writing includes…`, back: `<b>Experimental research documentation</b> and <b>scholarly publications</b>.` },
        { front: `The two things a scientific writer balances?`, back: `<b>Authority</b> (peer review) and <b>speed of publication</b> (timeliness).` },
        { front: `Journals are for…`, back: `<b>Archival theory</b>.` },
        { front: `Magazines are for…`, back: `<b>Shorter-term applications</b>.` },
        { front: `Conference proceedings are for…`, back: `<b>Preliminary findings</b>.` },
        { front: `Six publishing venues?`, back: `<b>Books, journals, magazines, conferences, newsletters, websites and blogs</b>.` },
        { front: `Highest authority, slowest venue in the chart?`, back: `<b>Archival journals</b>.` },
      ],
      oneLiners: [
        `<b>Technical reporting</b>: documents for supervisors, peers, clients, government; <b>archival</b>, kept for years.`,
        `Reports: progress, feasibility, specification, proposal, manual, safety analysis (plus bug reports, impact statements).`,
        `<b>Scientific writing</b>: experimental research and scholarly publications.`,
        `Writers balance <b>authority</b> (reliability through peer review) with <b>speed</b> (timeliness).`,
        `Journals = archival theory; magazines = shorter-term applications; proceedings = preliminary findings.`,
        `Blogs and newsletters are fast and low authority; archival journals are slow and high authority.`,
      ],
      formulas: [
        { name: `Technical report`, html: `<b>Readers</b> (supervisors, clients, agencies) + <b>purpose</b> (specific information, archival, kept for years)` },
        { name: `Choosing a venue`, html: `Need <b>speed</b> → conference, newsletter, blog · Need <b>authority</b> → peer-reviewed or archival journal`, note: `Trade-off from the authority and speed chart.` },
      ],
    },

    {
      id: 'm1-business',
      title: 'Business communication',
      short: 'Business communication',
      blurb: 'Correspondence written in the daily course of business: its kinds, why its tone differs from a pure technical report (call to action), résumés and the 50-word biosketch, and the sections of a business plan.',
      source: 'Module 1 Introduction to Technical Communication / Module 1 - Theory (ETH).pptx (slide 15); 1 Introduction to technical Writing.pptx (slides 46-48, 58)',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead"><b>Business communication</b> is the <b>correspondence written during the daily course of business activities</b>: the letters, forms and messages that keep an organisation running.</p>
          <table class="tbl">
            <thead><tr><th>Kind</th><th>What it is</th></tr></thead>
            <tbody>
              <tr><td><b>Résumés</b></td><td>a summary of a person's work and skills for an employer</td></tr>
              <tr><td><b>Cover letters</b></td><td>the letter that introduces an application</td></tr>
              <tr><td><b>Transmittal letters</b></td><td>a short letter sent with a document to say what it is</td></tr>
              <tr><td><b>Customer relations writing</b></td><td>replies to complaints, queries and orders</td></tr>
              <tr><td><b>Human resources communications</b></td><td>notices and letters about hiring, leave, policies</td></tr>
              <tr><td><b>Trip reports</b></td><td>an account of a business trip and what came of it</td></tr>
              <tr><td><b>Administrative communications</b></td><td>routine memos, notices and instructions</td></tr>
            </tbody>
          </table>
          <p><small>The theory deck lists résumés, cover letters, transmittal letters, customer relations writing and administrative communications. The longer deck adds human resources communications and trip reports. The "what it is" column is explanation added for study.</small></p>
          <div class="note exam"><p>It is the third branch under the professional orientation, next to scientific writing and technical reporting. A question may give a letter and ask you to <b>place it</b> in this branch and say why: it is routine business correspondence.</p></div>
        ` },
        { title: 'Tone and call to action', html: `
          <p class="lead">Business writing still needs <b>precision</b>. But everyday business correspondence, like a job application, often aims for a <b>call to action</b>. That is where it differs from the <b>neutral tone</b> of a pure technical report.</p>
          <p>A technical report says what is. A business letter says what is and <b>asks the reader to do something</b>: interview me, approve this, reply by Friday.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Technical report</th><th>Business correspondence</th></tr></thead>
            <tbody>
              <tr><td>Tone</td><td>neutral</td><td>courteous and persuasive</td></tr>
              <tr><td>Ends with</td><td>findings, recommendation</td><td>a <b>call to action</b></td></tr>
              <tr><td>Precision</td><td>essential</td><td>still required</td></tr>
              <tr><td>Kept for</td><td>years (archival)</td><td>until the matter is closed</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>No call to action</h4><p>"I have a degree in electronics and I am interested in your company."</p></div>
            <div class="side"><h4>With a call to action</h4><p>"I would welcome an interview next week. I can attend any day after 2 p.m. and will call your office on Monday to confirm."</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Vague ask</h4><p>"Please look into this when you can."</p></div>
            <div class="side"><h4>Precise ask</h4><p>"Please approve the leave request by 5 p.m. on Thursday so I can book the tickets."</p></div>
          </div>
          <div class="note why"><p>An action needs <b>who, what and by when</b>. Business writing is persuasive, but the persuasion works through a clear, polite, specific request. The exercise deck's rewrites show the same pattern.</p></div>
        ` },
        { title: 'Résumés and biosketches', html: `
          <p class="lead">Two business documents appear in the slides: a <b>résumé</b> and a short <b>biosketch</b>. The deck gives a model of each, and a task.</p>
          <h3>The résumé sample</h3>
          <p>The sample résumé is a single page with a name and one-line summary at the top and four blocks:</p>
          <div class="chips"><span class="chip">work experience</span><span class="chip">skills and competencies</span><span class="chip">achievements and certificates</span><span class="chip">interests</span></div>
          <p>Each job lists role, organisation, dates and one or two results. It is a document for scanning, not reading line by line.</p>
          <h3>The biosketch sample</h3>
          <p>The biosketch shown is of the textbook's author, Phil Laplante: a professor of software and systems engineering at Penn State, whose current work covers software testing, software security, requirements engineering, the internet of things, and software quality and management; PhD in computer science from Stevens Tech; licensed professional software engineer in Pennsylvania.</p>
          <p>Notice the order: <b>who and where, current work, qualification, licence</b>. Third person, present tense, no adjectives of praise.</p>
          <h3>The task: a 50-word biosketch</h3>
          <p>The deck's task: <b>write a biosketch of yourself in 50 words or less</b>.</p>
          <div class="worked">
            <div class="given"><p>Write a biosketch of a second-year electronics student.</p></div>
            <div class="solve"><p>Order: name and level, interest, a concrete achievement, current work. Third person. Count the words.</p></div>
            <div class="result"><p>"Anita Rao is a second-year B.Tech electronics student at VIT. She works on low-power sensor circuits and won her department's 2025 circuit design contest. She is currently building a soil-moisture monitor for a campus gardening project." <b>(Words: 42)</b></p></div>
          </div>
          <div class="note trap"><p>Don't write "I am a hardworking and passionate student". It is first person and opinion. Facts (a contest, a project) persuade better than adjectives.</p></div>
        ` },
        { title: 'Business plans', html: `
          <p class="lead">A <b>business plan</b> is a business document that doubles as technical writing. The deck lists the sections of a typical plan.</p>
          <table class="tbl">
            <thead><tr><th>Section</th><th>What it holds</th></tr></thead>
            <tbody>
              <tr><td><b>Executive summary</b></td><td>an overview of the business plan, target market and purpose</td></tr>
              <tr><td><b>Product description</b></td><td>a brief about the offering, its unique selling point (USP) and development stage</td></tr>
              <tr><td><b>SWOT analysis</b></td><td>strengths, weaknesses, opportunities and threats</td></tr>
              <tr><td><b>Market research</b></td><td>a detailed analysis of competitors and the product's potential in the target market</td></tr>
              <tr><td><b>Organizational system</b></td><td>the hierarchy and team members who will support the business, clarified before start-up</td></tr>
              <tr><td><b>Schedule</b></td><td>the implementation timetable: start date, hiring, investment milestones</td></tr>
              <tr><td><b>Financial planning</b></td><td>the most critical section: income statements, projected revenue, balance sheets, liquidity measures; shows viability</td></tr>
              <tr><td><b>Appendix</b></td><td>other relevant information, such as patents</td></tr>
            </tbody>
          </table>
          <p>The slides place <b>business plans and proposals</b> under <b>technical marketing content</b>, and the documentation tree puts "business plan" in sales and marketing. So the same document can be seen as <b>business communication</b> (it asks for investment) and as <b>technical marketing</b> (technical information presented to promote).</p>
          <div class="note exam"><p>If a question lists a few section names and asks which belongs to a business plan, remember the pairing: <b>financial planning shows viability; market research shows the competitors; the executive summary comes first</b>.</p></div>
          <div class="note heads-up"><p>Not on the slides: although it sits at the top of the plan, the executive summary is usually written last, once the rest is final.</p></div>
        ` },
        { title: 'Worked: a short cover letter', html: `
          <p class="lead">Put tone, precision and call to action together in the shortest business document that matters most, a <b>cover letter</b>.</p>
          <div class="worked">
            <div class="given"><p>Rewrite this opening paragraph so it states the post, gives one concrete reason, and ends with a call to action: <b>"Hi, I saw your job thing and I think I would be good at it because I am a hard worker. Let me know."</b></p></div>
            <div class="solve">
              <ol class="steps">
                <li><b>Salutation</b> "Dear Ms Iyer," instead of "Hi,".</li>
                <li><b>The post</b> Name it: "Junior Test Engineer (reference TE-07)".</li>
                <li><b>One concrete reason</b> Replace "hard worker" with a fact: "I tested 40 boards for my final-year project and cut retest time by a third."</li>
                <li><b>Call to action</b> Replace "Let me know" with a date and a method.</li>
              </ol>
            </div>
            <div class="result"><p>Dear Ms Iyer, I am applying for the post of Junior Test Engineer (reference TE-07). In my final-year project I tested 40 circuit boards and reduced retest time by a third. I would welcome an interview and will call your office on Monday morning to arrange a time. Yours sincerely, Ravi Menon.</p></div>
          </div>
          <div class="note heads-up"><p>Names, reference number and the figures are invented for the example.</p></div>
          <div class="note trap"><p>"Let me know" shifts all the work to the reader. A good call to action says what <b>you</b> will do next and what you ask <b>them</b> to do, with a date.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Business communication is…`, back: `<b>Correspondence written during the daily course of business activities</b>.` },
        { front: `Five examples on the theory slide?`, back: `<b>Résumés, cover letters, transmittal letters, customer relations writing, administrative communications</b>.` },
        { front: `Two extra examples in the longer deck?`, back: `<b>Human resources communications</b> and <b>trip reports</b>.` },
        { front: `How does business tone differ from a technical report's?`, back: `It often aims for a <b>call to action</b>; a technical report is neutral.` },
        { front: `Does business writing still need precision?`, back: `Yes. Precision <b>is still required</b>.` },
        { front: `Four blocks of the sample résumé?`, back: `<b>Work experience, skills and competencies, achievements and certificates, interests</b>.` },
        { front: `The slide task for a biosketch?`, back: `Write one about yourself in <b>50 words or less</b>.` },
        { front: `Business plan sections (eight)?`, back: `<b>Executive summary, product description, SWOT analysis, market research, organizational system, schedule, financial planning, appendix</b>.` },
        { front: `The most critical business plan section?`, back: `<b>Financial planning</b>.` },
        { front: `What does a call to action need?`, back: `<b>Who, what and by when</b>.` },
      ],
      oneLiners: [
        `Business communication = <b>correspondence in the daily course of business</b>: résumés, cover letters, transmittal letters, customer, HR and administrative writing, trip reports.`,
        `It needs precision <b>and</b> often a <b>call to action</b>, unlike the neutral tone of pure technical reports.`,
        `A good call to action says <b>who does what by when</b>.`,
        `A résumé has work experience, skills and competencies, achievements and certificates, and interests.`,
        `A biosketch is short, third person and factual: who, current work, qualification (50 words or less).`,
        `A business plan has eight sections; <b>financial planning</b> is the most critical, the executive summary comes first.`,
      ],
      formulas: [
        { name: `Business tone`, html: `<b>Precise</b> + <b>courteous</b> + <b>call to action</b> (who does what by when)` },
        { name: `Biosketch order`, html: `<b>Who and where</b> → <b>current work</b> → <b>qualification or achievement</b>; third person, facts not praise`, note: `Task: 50 words or less.` },
      ],
    },
  ],
  figures: [
    { id: 'm1-taxonomy-map', caption: 'The taxonomy of technical writing: three orientations, with scientific writing, technical reporting, business communications and electronic media under professional. Based on BAENG101 course material, VIT.', alt: 'A tree. Technical writing at the top splits into pedagogical, theoretical and professional orientation. Professional orientation splits into scientific writing, technical reporting, business communications and electronic media.' },
    { id: 'm1-authority-speed', caption: 'Publishing venues placed by speed of publication and authority: blogs and newsletters are fast and low authority, archival journals are slow and high authority. Positions are approximate. Based on BAENG101 course material, VIT.', alt: 'A chart with authority from low to high along the bottom and speed from slow to fast up the side. Websites and blogs, and newsletters sit at the fast, low authority end. Conference proceedings, magazines, open access journals and peer-reviewed magazines sit in the middle. Books and archival journals sit at the slow, high authority end.' },
  ],
});

FIGSVG({"m1-5cs-from-ieee":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 620\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfg\"/></marker></defs>\n  <g>\n    <text x=\"140\" y=\"40\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">IEEE 830 (eight)</text>\n    <text x=\"460\" y=\"40\" font-size=\"26\" text-anchor=\"middle\" class=\"dtg\">The 5 Cs</text>\n    <rect x=\"10\" y=\"64\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"10\" y=\"64\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"30\" y=\"99\" font-size=\"26\" class=\"dt\">1. Correct</text>\n    <path d=\"M274 90H326\" class=\"dsg\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"330\" y=\"64\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"330\" y=\"64\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2.5\"/>\n    <text x=\"460\" y=\"99\" font-size=\"26\" text-anchor=\"middle\" class=\"dtg\">Correct</text>\n    <rect x=\"10\" y=\"128\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"10\" y=\"128\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"30\" y=\"163\" font-size=\"26\" class=\"dt\">2. Unambiguous</text>\n    <path d=\"M274 154H326\" class=\"dsg\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"330\" y=\"128\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"330\" y=\"128\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2.5\"/>\n    <text x=\"460\" y=\"163\" font-size=\"26\" text-anchor=\"middle\" class=\"dtg\">Clear</text>\n    <rect x=\"10\" y=\"192\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"10\" y=\"192\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"30\" y=\"227\" font-size=\"26\" class=\"dt\">3. Complete</text>\n    <path d=\"M274 218H326\" class=\"dsg\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"330\" y=\"192\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"330\" y=\"192\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2.5\"/>\n    <text x=\"460\" y=\"227\" font-size=\"26\" text-anchor=\"middle\" class=\"dtg\">Complete</text>\n    <rect x=\"10\" y=\"256\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"10\" y=\"256\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"30\" y=\"291\" font-size=\"26\" class=\"dt\">4. Consistent</text>\n    <path d=\"M274 282H326\" class=\"dsg\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"330\" y=\"256\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"330\" y=\"256\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2.5\"/>\n    <text x=\"460\" y=\"291\" font-size=\"26\" text-anchor=\"middle\" class=\"dtg\">Consistent</text>\n    <rect x=\"10\" y=\"320\" width=\"260\" height=\"52\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"320\" width=\"260\" height=\"52\" rx=\"12\" class=\"ds3\" fill=\"none\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n    <text x=\"30\" y=\"355\" font-size=\"26\" class=\"dt3\">5. Ranked</text>\n    <rect x=\"10\" y=\"384\" width=\"260\" height=\"52\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"384\" width=\"260\" height=\"52\" rx=\"12\" class=\"ds3\" fill=\"none\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n    <text x=\"30\" y=\"419\" font-size=\"26\" class=\"dt3\">6. Verifiable</text>\n    <rect x=\"10\" y=\"448\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"10\" y=\"448\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"30\" y=\"483\" font-size=\"26\" class=\"dt\">7. Modifiable</text>\n    <path d=\"M274 474H326\" class=\"dsg\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"330\" y=\"448\" width=\"260\" height=\"52\" rx=\"12\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"330\" y=\"448\" width=\"260\" height=\"52\" rx=\"12\" class=\"dsg\" fill=\"none\" stroke-width=\"2.5\"/>\n    <text x=\"460\" y=\"483\" font-size=\"26\" text-anchor=\"middle\" class=\"dtg\">Changeable</text>\n    <rect x=\"10\" y=\"512\" width=\"260\" height=\"52\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"512\" width=\"260\" height=\"52\" rx=\"12\" class=\"ds3\" fill=\"none\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n    <text x=\"30\" y=\"547\" font-size=\"26\" class=\"dt3\">8. Traceable</text>\n    <text x=\"300\" y=\"600\" font-size=\"22\" text-anchor=\"middle\" class=\"dt3\">dropped: not needed for all technical writing</text>\n  </g>\n</svg>\n","m1-authority-speed":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 790\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker></defs>\n  <g>\n    <path d=\"M70 700V44\" class=\"ds2\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <path d=\"M70 700H590\" class=\"ds2\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <text transform=\"translate(24 372) rotate(-90)\" font-size=\"24\" text-anchor=\"middle\" class=\"dt\">Speed of publication</text>\n    <text x=\"84\" y=\"44\" font-size=\"22\" class=\"dt3\">fast</text>\n    <text x=\"84\" y=\"684\" font-size=\"22\" class=\"dt3\">slow</text>\n    <text x=\"70\" y=\"738\" font-size=\"22\" class=\"dt3\">low</text>\n    <text x=\"590\" y=\"738\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">high</text>\n    <text x=\"330\" y=\"772\" font-size=\"24\" text-anchor=\"middle\" class=\"dt\">Authority</text>\n\n    <circle cx=\"380\" cy=\"90\" r=\"10\" class=\"dfb\"/>\n    <text x=\"362\" y=\"86\" font-size=\"22\" text-anchor=\"end\" class=\"dt\">Open access</text>\n    <text x=\"362\" y=\"112\" font-size=\"22\" text-anchor=\"end\" class=\"dt\">journals</text>\n\n    <circle cx=\"110\" cy=\"170\" r=\"10\" class=\"dfo\"/>\n    <text x=\"130\" y=\"178\" font-size=\"24\" class=\"dt\">Websites, blogs</text>\n\n    <circle cx=\"325\" cy=\"250\" r=\"10\" class=\"dfb\"/>\n    <text x=\"307\" y=\"246\" font-size=\"22\" text-anchor=\"end\" class=\"dt\">Conference</text>\n    <text x=\"307\" y=\"272\" font-size=\"22\" text-anchor=\"end\" class=\"dt\">proceedings</text>\n\n    <circle cx=\"132\" cy=\"330\" r=\"10\" class=\"dfo\"/>\n    <text x=\"152\" y=\"338\" font-size=\"24\" class=\"dt\">Newsletters</text>\n\n    <circle cx=\"252\" cy=\"410\" r=\"10\" class=\"dfb\"/>\n    <text x=\"272\" y=\"418\" font-size=\"24\" class=\"dt\">Magazines</text>\n\n    <circle cx=\"398\" cy=\"490\" r=\"10\" class=\"dfb\"/>\n    <text x=\"380\" y=\"486\" font-size=\"22\" text-anchor=\"end\" class=\"dt\">Peer-reviewed</text>\n    <text x=\"380\" y=\"512\" font-size=\"22\" text-anchor=\"end\" class=\"dt\">magazines</text>\n\n    <circle cx=\"339\" cy=\"570\" r=\"10\" class=\"dfg\"/>\n    <text x=\"321\" y=\"578\" font-size=\"24\" text-anchor=\"end\" class=\"dt\">Books</text>\n\n    <circle cx=\"500\" cy=\"650\" r=\"10\" class=\"dfg\"/>\n    <text x=\"482\" y=\"646\" font-size=\"22\" text-anchor=\"end\" class=\"dt\">Archival</text>\n    <text x=\"482\" y=\"672\" font-size=\"22\" text-anchor=\"end\" class=\"dt\">journals</text>\n  </g>\n</svg>\n","m1-case-memo-chain":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 606\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker></defs>\n  <g>\n    <rect x=\"20\" y=\"10\" width=\"560\" height=\"84\" rx=\"14\" class=\"df\"/>\n    <rect x=\"20\" y=\"10\" width=\"560\" height=\"84\" rx=\"14\" class=\"ds2\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"300\" y=\"46\" font-size=\"26\" text-anchor=\"middle\" class=\"dto\">Memo to all staff</text>\n    <text x=\"300\" y=\"78\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">wrong medium (organisational)</text>\n    <path d=\"M300 98V126\" class=\"ds2\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"20\" y=\"130\" width=\"560\" height=\"84\" rx=\"14\" class=\"df\"/>\n    <rect x=\"20\" y=\"130\" width=\"560\" height=\"84\" rx=\"14\" class=\"ds2\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"300\" y=\"166\" font-size=\"26\" text-anchor=\"middle\" class=\"dtr\">Ultimatum: seek work elsewhere</text>\n    <text x=\"300\" y=\"198\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">emotional outburst (interpersonal)</text>\n    <path d=\"M300 218V246\" class=\"ds2\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"20\" y=\"250\" width=\"560\" height=\"84\" rx=\"14\" class=\"df\"/>\n    <rect x=\"20\" y=\"250\" width=\"560\" height=\"84\" rx=\"14\" class=\"ds2\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"300\" y=\"286\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">Leaked to the press</text>\n    <text x=\"300\" y=\"318\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">the problem goes public</text>\n    <path d=\"M300 338V366\" class=\"ds2\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"20\" y=\"370\" width=\"560\" height=\"84\" rx=\"14\" class=\"df\"/>\n    <rect x=\"20\" y=\"370\" width=\"560\" height=\"84\" rx=\"14\" class=\"ds2\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"300\" y=\"406\" font-size=\"26\" text-anchor=\"middle\" class=\"dtb\">Internal losses</text>\n    <text x=\"300\" y=\"438\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">trust, morale, retention</text>\n    <path d=\"M300 458V486\" class=\"ds2\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#a)\"/>\n    <rect x=\"20\" y=\"490\" width=\"560\" height=\"84\" rx=\"14\" class=\"df\"/>\n    <rect x=\"20\" y=\"490\" width=\"560\" height=\"84\" rx=\"14\" class=\"ds2\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"300\" y=\"526\" font-size=\"26\" text-anchor=\"middle\" class=\"dtb\">External losses</text>\n    <text x=\"300\" y=\"558\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">public image, doubts about the app</text>\n  </g>\n</svg>\n","m1-taxonomy-map":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 668\">\n  <g>\n    <rect x=\"170\" y=\"10\" width=\"260\" height=\"64\" rx=\"14\" class=\"df2 ds\" stroke-width=\"2\"/>\n    <text x=\"300\" y=\"52\" font-size=\"28\" text-anchor=\"middle\" class=\"dt\">Technical writing</text>\n\n    <path d=\"M300 74V110M100 110H500M100 110V140M300 110V140M500 110V140\" class=\"ds2\" stroke-width=\"2.5\" fill=\"none\"/>\n\n    <rect x=\"10\" y=\"140\" width=\"180\" height=\"84\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"140\" width=\"180\" height=\"84\" rx=\"14\" class=\"dsb\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"100\" y=\"178\" font-size=\"26\" text-anchor=\"middle\" class=\"dtb\">Pedagogical</text>\n    <text x=\"100\" y=\"208\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">orientation</text>\n    <text x=\"100\" y=\"254\" font-size=\"22\" text-anchor=\"middle\" class=\"dt3\">teaches</text>\n\n    <rect x=\"210\" y=\"140\" width=\"180\" height=\"84\" rx=\"14\" class=\"df\"/>\n    <rect x=\"210\" y=\"140\" width=\"180\" height=\"84\" rx=\"14\" class=\"dso\" fill=\"none\" stroke-width=\"2\"/>\n    <text x=\"300\" y=\"178\" font-size=\"26\" text-anchor=\"middle\" class=\"dto\">Theoretical</text>\n    <text x=\"300\" y=\"208\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">orientation</text>\n    <text x=\"300\" y=\"254\" font-size=\"22\" text-anchor=\"middle\" class=\"dt3\">researches</text>\n\n    <rect x=\"410\" y=\"140\" width=\"180\" height=\"84\" rx=\"14\" class=\"dfg\" fill-opacity=\".2\"/>\n    <rect x=\"410\" y=\"140\" width=\"180\" height=\"84\" rx=\"14\" class=\"dsg\" fill=\"none\" stroke-width=\"2.5\"/>\n    <text x=\"500\" y=\"178\" font-size=\"26\" text-anchor=\"middle\" class=\"dtg\">Professional</text>\n    <text x=\"500\" y=\"208\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">orientation</text>\n\n    <path d=\"M500 224V262H110V574M110 324H140M110 410H140M110 496H140M110 582H140\" class=\"ds2\" stroke-width=\"2.5\" fill=\"none\"/>\n\n    <rect x=\"140\" y=\"288\" width=\"450\" height=\"72\" rx=\"14\" class=\"df\"/>\n    <text x=\"162\" y=\"320\" font-size=\"26\" class=\"dt\">Scientific writing</text>\n    <text x=\"162\" y=\"348\" font-size=\"22\" class=\"dt2\">papers, journals, conferences</text>\n\n    <rect x=\"140\" y=\"374\" width=\"450\" height=\"72\" rx=\"14\" class=\"df\"/>\n    <text x=\"162\" y=\"406\" font-size=\"26\" class=\"dt\">Technical reporting</text>\n    <text x=\"162\" y=\"434\" font-size=\"22\" class=\"dt2\">archival documents for clients</text>\n\n    <rect x=\"140\" y=\"460\" width=\"450\" height=\"72\" rx=\"14\" class=\"df\"/>\n    <text x=\"162\" y=\"492\" font-size=\"26\" class=\"dt\">Business communications</text>\n    <text x=\"162\" y=\"520\" font-size=\"22\" class=\"dt2\">letters, résumés, memos</text>\n\n    <rect x=\"140\" y=\"546\" width=\"450\" height=\"72\" rx=\"14\" class=\"df3\" stroke-dasharray=\"8 6\"/>\n    <rect x=\"140\" y=\"546\" width=\"450\" height=\"72\" rx=\"14\" class=\"ds2\" fill=\"none\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n    <text x=\"162\" y=\"578\" font-size=\"26\" class=\"dt\">Electronic media</text>\n    <text x=\"162\" y=\"606\" font-size=\"22\" class=\"dt2\">added in the second slide</text>\n\n    <text x=\"300\" y=\"652\" font-size=\"22\" text-anchor=\"middle\" class=\"dt3\">after Montgomery and Plung, 1988</text>\n  </g>\n</svg>\n"});
