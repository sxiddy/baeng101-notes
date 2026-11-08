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
            <li><b>Usable</b>: the reader can act on it.</li>
            <li><b>Relevant</b>: it matters to this particular reader.</li>
            <li><b>Variety of audiences and settings</b>: the same aim holds for many different readers and situations.</li>
          </ul>
          <h3>Technical writing</h3>
          <p><b>Technical writing</b> is a form of professional communication used to convey <b>specialised or complex information</b>. It presents that information in a manner that is <b>clear, accurate, concise and accessible</b>. It helps readers <b>understand technical concepts</b>, <b>follow instructions</b> or <b>complete specific tasks</b>.</p>
          <ul>
            <li>Common forms: <b>reports, product descriptions, instruction manuals, user guides, procedural documents</b>.</li>
            <li>Topics: <b>environmental regulations, computer applications, engineering processes, medical procedures</b>.</li>
            <li>Primary goal: make complex information <b>easy for the intended audience to understand and use</b>.</li>
          </ul>
          <div class="note exam"><p>For a "what is technical communication" question, give both definitions, then add one line on <b>precision and intent</b>. That line is what the module is really after.</p></div>
        ` },
        { title: 'Who writes it', html: `
          <p class="lead">Technical writing is not reserved for engineers. <b>Anyone who uses the jargon of a field</b> to explain something exact is doing it.</p>
          <div class="kv">
            <div><span>Traditionally</span><b>engineers and scientists</b></div>
            <div><span>Also</span><b>doctors, nurses, lawyers, farmers</b>: any profession with domain-specific jargon</div>
            <div><span>Occasionally</span><b>everyone</b>: driving directions, recipes, product complaint letters</div>
          </div>
          <p>The course quotes Laplante: "Everyone is a technical writer occasionally, such as when writing driving directions, recipes, or product complaint letters" (Laplante 2).</p>
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
          <div class="note why"><p>The module defines the field less by a universal definition and more by its differences from other writing: <b>precision</b> and <b>intent</b>.</p></div>
        ` },
        { title: 'Precision and intent', html: `
          <p class="lead">Two things separate technical writing from poetry, news and advertising: it must be <b>exact</b>, and it is <b>not trying to make you feel something</b>.</p>
          <h3>Precision</h3>
          <p>In technical writing an expressed idea may be <b>realised in a physical device or process</b>. The text becomes the thing. So a small slip in the words can become a failure in the world: a <b>misplaced decimal point</b> or a <b>lost hyphen</b> in a data editing program can lead to <b>catastrophic system failure or loss of life</b>.</p>
          <div class="note example"><p>The slides give two cases. A <b>misplaced decimal point</b> in the mathematical specification of a process for controlling a nuclear plant. And in <b>1962</b>, NASA's <b>Mariner 1</b> Venus satellite was lost, in part because of a <b>misplaced hyphen</b> in a data editing program. Precision matters most in <b>computer software</b>.</p></div>
          <h3>Intent</h3>
          <p>Unlike <b>poetry, news reporting or advertising</b>, technical writing has <b>no intent to evoke an emotional response</b>. Its goal is to convey information <b>as concisely and correctly as possible</b>.</p>
          <div class="note trap"><p>Do not mix this up with the characteristics slide, which says technical writing is <b>professional, not emotional, but persuasive</b>. Intent rules out evoking emotion. The goal stays conveying information concisely and correctly.</p></div>
        ` },
        { title: 'Legal implications', html: `
          <p class="lead">Any writing can be <b>libellous</b>, but an <b>error in technical writing</b> can cost money, property, the environment, health or lives, and so carries <b>legal consequences</b>.</p>
          <p>The slides list the harms: <b>financial loss, damage to property, environmental catastrophe, injury or death</b>. They also say that the writing quality of user manuals is known to have caused <b>catastrophic software failures</b> (Wong et al. 2017).</p>
          <h3>Five cases the slides ask you to consider</h3>
          <table class="tbl">
            <thead><tr><th>Document</th><th>The error</th></tr></thead>
            <tbody>
              <tr><td>Investment brochure</td><td>bad financial advice</td></tr>
              <tr><td>Manual for an electric clothes dryer</td><td>a wiring instruction error</td></tr>
              <tr><td>Hospital record for a seriously ill patient</td><td>an error in the record</td></tr>
              <tr><td>Mixing pesticides</td><td>an incorrect formulation recipe</td></tr>
              <tr><td>Aircraft</td><td>an error in the maintenance instructions</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>When asked why precision matters, name the harms the slides list (<b>financial loss, property damage, environmental catastrophe, injury, death</b>) and give one of the five example documents.</p></div>
        ` },
        { title: 'Clarity in court: commas', html: `
          <p class="lead">A comma can change who wins a case. The deck sets a homework task: <b>research legal battles that arose from a lack of clarity</b>, and gives an article on the <b>legal rights and vicissitudes of the comma</b> as the starting example.</p>
          <p>It also names Lynne Truss's book on punctuation, <em>Eats, Shoots and Leaves</em>.</p>
          <p>The slide adds a careful remark: even in <b>legal documents</b>, where imprecision has damaging consequences, there is <b>not the same risk of loss of a system or life</b> as in technical documents.</p>
          <h3>Ambiguity costs money: a slide statistic</h3>
          <p>One slide quotes a figure: ambiguity in <b>bill of quantities</b> descriptions alone triggers about <b>34.2%</b> of construction contract disputes, with cost overruns typically of <b>15% to 25%</b> and dispute resolution averaging about <b>11.8 months</b>. Resolution fees (litigation, forensics, counsel) can average roughly <b>28.5%</b> of the contested amounts, and one project faced over <b>3 million yuan</b> in extra costs from ambiguous quantity deviations.</p>
          <div class="note trap"><p>Don't say punctuation and wording "don't matter much". The slides' point is the opposite: a lack of clarity has led to legal battles.</p></div>
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
            <thead><tr><th>Characteristic</th><th>Slide wording</th></tr></thead>
            <tbody>
              <tr><td><b>Precision</b></td><td>(listed first, no gloss on the slide)</td></tr>
              <tr><td><b>Professional, not emotional, but persuasive</b></td><td>professional not emotional, but persuasive</td></tr>
              <tr><td><b>Accuracy</b></td><td>no errors of fact or grammar</td></tr>
              <tr><td><b>Clarity</b></td><td>no ambiguity</td></tr>
              <tr><td><b>Completeness</b></td><td>all necessary information is present</td></tr>
              <tr><td><b>Diction</b></td><td>appropriate and grammatically correct language</td></tr>
              <tr><td><b>Organization</b></td><td>logical arrangement of parts</td></tr>
              <tr><td><b>Visual effectiveness</b></td><td>page/screen design, graphics</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Precision, accuracy and clarity', html: `
          <p class="lead">These three overlap, and the course's textbook says how: <b>precision is a combination of clarity and correctness</b>.</p>
          <p>Correctness means the information is <b>grammatically and technically correct</b>. Clarity means each sentence or section can have <b>only one interpretation</b>. The textbook's example of a correctness error: "The automobile weight shall be no greater than <b>200</b> kilograms", where 2000 kilograms was intended.</p>
          <p>The textbook also says technical writing is characterized by two features: <b>conciseness and precision</b>.</p>
        ` },
        { title: 'Professional but persuasive', html: `
          <p class="lead">The slides say technical writing is <b>professional, not emotional, but persuasive</b>. Intent rules out trying to <b>evoke an emotional response</b>, yet the characteristics slide still lists <b>persuasive</b>.</p>
          <p>The exercise deck shows what persuasive looks like:</p>
          <div class="vs">
            <div class="side"><h4>Bare order</h4><p>"Attend the workshop."</p></div>
            <div class="side"><h4>Persuasive</h4><p>"Attending the workshop will improve your communication skills and help you work more efficiently."</p></div>
          </div>
          <p>Both lines are options in the exercise deck's question "Which sentence is most persuasive?". The second tells the reader that attending will improve their communication skills and help them work more efficiently.</p>
<div class="note trap"><p>"Persuasive" does not mean emotional. The course's accident example shows the line: "idiot", "stupid jerk" and "probably drunk" are emotion, speculation and blame, so that text is nontechnical.</p></div>
        ` },
        { title: 'Visual effectiveness and readability', html: `
          <p class="lead"><b>Visual effectiveness</b> means <b>page/screen design and graphics</b>. The slides make the point with pictures.</p>
          <h3>What the slides show</h3>
          <ul>
            <li><b>A toy-brick lighthouse kit</b>: instructions with almost <b>no words</b>. Numbered pictures carry the whole procedure.</li>
            <li><b>A fibre-optic module guide</b>: three <b>numbered steps</b> (remove the dust protector, pull the metal latch to a right angle, swap the module and put the latch back) beside a diagram with matching numbers, plus a warning to use only modules the manufacturer recommends.</li>
            <li><b>A medical-device manual</b>: a safety page with four labelled boxes, <b>danger, warning, caution, notice</b>, so the reader can tell at a glance how serious each message is.</li>
            <li><b>Software help pages, a quick start guide, a machinery handbook</b>: search boxes, icons, numbered steps in two columns, and a <b>table of contents</b> for a long document.</li>
          </ul>
          <h3>The readability test</h3>
          <p>Slides 33 to 36 show the <b>same paragraph</b> (the legal-implications text) laid out in different ways and ask: <b>which one is the most readable?</b> The words are identical, so only the design changes the reader's experience.</p>
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
          <p>The last slide points to Google's <b>Technical Writing Courses for Engineers</b>. The page linked in the deck is its lesson on <b>just enough grammar</b>.</p>
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
        { front: `Six skills of a technical writer?`, back: `<b>Subject expertise, design, technical tools, writing and editing, conveying information, research and audience analysis</b>.` },
        { front: `Four safety labels shown in the manual slide?`, back: `<b>Danger, warning, caution, notice</b>.` },
      ],
      oneLiners: [
        `Eight characteristics: <b>precision, professional tone, accuracy, clarity, completeness, diction, organization, visual effectiveness</b>.`,
        `Professional <b>not emotional but persuasive</b>.`,
        `Precision = a combination of <b>clarity and correctness</b>.`,
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
              <tr><td><b>Technical marketing content</b></td><td>technical information in a digestible format to <b>promote a product or service</b></td><td>marketing case studies, white papers, product brochures, press releases, business plans and proposals</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Some documents sit in more than one list. <b>Case studies</b> appear under marketing here, and in the gallery as a general example; <b>annual reports</b> are expert-to-expert on one slide and company documents elsewhere. Decide by <b>audience and purpose</b> in the question's scenario.</p></div>
          <div class="note exam"><p>The usual task: a short description of a document and its reader, and you name the type and say why. Always give the reason in terms of <b>audience</b> and <b>purpose</b>.</p></div>
        ` },
        { title: 'Who reads it: the audience', html: `
          <p class="lead">The audience of a technical document <b>depends on the type of document</b>. Two broad groups: <b>end users</b> and <b>internal or client readers</b>.</p>
          <h3>End users</h3>
          <p>Many technical documents <b>come with a product</b>. A new computer, for instance, may ship with a small booklet, often in <b>several languages</b>, giving directions for <b>first use</b>, suggestions for <b>maintenance</b> and <b>warnings</b> against activities that could damage the product.</p>
          <h3>Internal audiences and clients</h3>
          <p>Other documents are for <b>senior collaborators and development teams</b>, or for <b>clients</b>. Their purpose is to <b>inform others of the technical aspects</b> of a product or its development process, and to keep members updated on details they need for <b>decision making</b> and other professional tasks.</p>
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
          <p>The slides also show <b>software help pages</b> (a searchable online help, a product documentation hub, a quick-start guide for a video-conference booking tool) and a <b>machinery installation handbook</b> with its table of contents.</p>
        ` },
        { title: 'Industries that rely on it', html: `
          <p class="lead">Technical writing is not tied to one industry. The slide lists ten that depend on it most.</p>
          <div class="chips"><span class="chip">engineering</span><span class="chip">computer software and hardware</span><span class="chip">robotics</span><span class="chip">chemistry</span><span class="chip">finance</span><span class="chip">consumer electronics</span><span class="chip">forestry</span><span class="chip">aeronautics</span><span class="chip">medical and healthcare</span><span class="chip">biotechnology</span></div>
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
        `Decide the type by <b>audience and purpose</b>: end-users, a knowledgeable audience, or promoting a product or service.`,
        `Audience depends on the document: <b>end users</b> (first use, maintenance, warnings) or <b>internal and client</b> readers (decisions).`,
        `Kinds: <b>instructions, user guide, report, memo, procedures</b> (lawn mower, microscope, problem, progress, regulations).`,
        `A documentation tree has four branches: product and user, process, expert-to-expert, sales and marketing.`,
        `An <b>SOP</b> has title, department, date and ID, sign-off, purpose, definitions and procedure, and clarifies jargon.`,
        `Ten industries rely on it, from engineering and robotics to forestry and biotechnology.`,
      ],
      formulas: [
        { name: `Three types`, html: `<b>Consumer-directed</b> (users) · <b>Expert-to-expert</b> (specialists) · <b>Technical marketing</b> (buyers)` },
        { name: `Naming a type in an answer`, html: `"It is <b>[type]</b> because it is written for <b>[end-users / a knowledgeable audience / promoting a product or service]</b>."` },
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
              <tr><td><b>Theoretical</b></td><td>research: various kinds of theoretical and applied research</td><td>(no example on the slide)</td></tr>
              <tr><td><b>Professional</b></td><td>the <b>broadest form</b>, serving the needs of practitioners in any discipline</td><td>see the three branches below</td></tr>
            </tbody>
          </table>
          <p>The professional orientation has <b>scientific writing, technical reporting and business communications</b>. A second version of the tree on the slides adds a fourth box, <b>electronic media</b>.</p>
          <p>The tree is redrawn from Montgomery and Plung's 1988 conference paper (the IEEE link on the slide), in the course textbook as Figure 1.1.</p>
          <div class="note exam"><p>Two quick patterns: <b>draw the tree</b> (three orientations, then the branches under professional) or <b>place a document</b> in it. Always say which of the three orientations first, and only then which branch.</p></div>
          <div class="note trap"><p>Keep the three orientations apart by focus: <b>teaching</b> (pedagogical), <b>research</b> (theoretical), <b>serving practitioners</b> (professional).</p></div>
        ` },
        { title: 'The professional branches', html: `
          <p class="lead">Under <b>professional orientation</b> the course studies three branches in detail. This is the overview. Each gets its own topic.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Technical reporting</th><th>Scientific writing</th><th>Business communication</th></tr></thead>
            <tbody>
              <tr><td><b>Readers</b></td><td>supervisors, subordinates, peers, customers, clients, government agencies</td><td>(not stated; scientists and engineers publish it)</td><td>(not stated)</td></tr>
              <tr><td><b>Purpose</b></td><td>convey specific information in an <b>archival</b> way</td><td>experimental research documentation and scholarly publications</td><td>correspondence in the daily course of business, often a <b>call to action</b></td></tr>
              <tr><td><b>Key point</b></td><td>stored and referenced for years</td><td>balance <b>authority</b> and <b>speed of publication</b></td><td>still precise, but not the neutral tone of a pure technical report</td></tr>
              <tr><td><b>Examples</b></td><td>progress report, feasibility study, safety analysis report</td><td>journal paper, conference paper</td><td>résumé, cover letter, transmittal letter</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Taxonomy as findability', html: `
          <p class="lead">The word <b>taxonomy</b> is used in a second way on one slide. Not as a tree of <b>writing types</b>, but as a <b>structured system for organising information</b> so readers can find what they need.</p>
          <p>The slide's version: a taxonomy is the system we create to organise technical documentation so users find what they need <b>when they need it</b>. It is not about classifying types of writing (user guides, white papers). It classifies the <b>information inside</b> documents. It is the <b>backbone of findability and usability</b>.</p>
          <p>It quotes a definition: taxonomies are knowledge organisation systems used to support information <b>findability, discovery and access</b>. Its forms are a <b>controlled vocabulary, synonym ring, thesaurus, hierarchical term tree, or ontology</b>.</p>
          <div class="vs">
            <div class="side"><h4>Taxonomy of writing (Figure 1.1)</h4><p>Sorts <b>kinds of writing</b>: pedagogical, theoretical, professional, and branches. Used to say what kind of document you have.</p></div>
            <div class="side"><h4>Taxonomy of information</h4><p>Sorts <b>topics inside documentation</b>: tags, categories, term trees. Used to let a reader <b>find</b> an answer.</p></div>
          </div>
          <div class="note heads-up"><p>The slide says taxonomy "is not about classifying types of writing", yet the module's syllabus topic is exactly that tree. Answer a question on "taxonomy of technical writing" with the <b>tree of orientations</b>. Mention the findability sense only if the question uses it.</p></div>
        ` },
        { title: 'Placing a document', html: `
          <p class="lead">Slide 55 asks, "Where does <b>this book</b> fit in the taxonomy?", about the course textbook. The slides give no printed answer.</p>
          <p>Use the slide definitions to place a document:</p>
          <ul>
            <li><b>Pedagogical</b>: focuses on teaching, for example a calculus textbook or a book for the novice photographer.</li>
            <li><b>Theoretical</b>: involves various kinds of theoretical and applied research.</li>
            <li><b>Professional</b>: serves the needs of various professionals; its branches are scientific writing, technical reporting and business communications (and electronic media on the second slide).</li>
          </ul>
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
      ],
      formulas: [
        { name: `Taxonomy of technical writing`, html: `Technical writing → <b>pedagogical</b> | <b>theoretical</b> | <b>professional</b> → (scientific writing, technical reporting, business communications, electronic media)` },
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
          <p>Examples from the theory deck: <b>progress reports, feasibility studies, specifications, proposals, manuals and safety analysis reports</b>.</p>
          <p>The longer list in the first deck adds <b>facilities descriptions, procedures, planning documents, environmental impact statements</b> and <b>bug reports</b>.</p>
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
          <p>The slide ties authority to <b>reliability via peer review</b> and speed to the <b>timeliness of the content</b>.</p>
          <h3>What each venue is for</h3>
          <table class="tbl">
            <thead><tr><th>Venue</th><th>Used for</th></tr></thead>
            <tbody>
              <tr><td><b>Journals</b></td><td>archival theory</td></tr>
              <tr><td><b>Magazines</b></td><td>shorter-term applications</td></tr>
              <tr><td><b>Conference proceedings</b></td><td>preliminary findings</td></tr>
              <tr><td><b>Newsletters, websites, blogs</b></td><td>(no use given on this slide; see the chart below)</td></tr>
            </tbody>
          </table>
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
        ` },
        { title: 'Side by side', html: `
          <p class="lead">Technical reporting and scientific writing are both professional, but they differ in <b>definition, purpose and examples</b>.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Technical reporting</th><th>Scientific writing</th></tr></thead>
            <tbody>
              <tr><td><b>Definition</b></td><td>documents for supervisors, subordinates, peers, customers, clients, government agencies</td><td>experimental research documentation and scholarly publications</td></tr>
              <tr><td><b>Purpose</b></td><td>convey specific information, <b>archival</b></td><td>balance <b>authority</b> (peer review) and <b>speed of publication</b></td></tr>
              <tr><td><b>Examples</b></td><td>progress reports, feasibility studies, specifications, proposals, manuals, safety analysis reports</td><td>papers in journals, magazines, conference proceedings, newsletters, blogs</td></tr>
            </tbody>
          </table>
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
          <p class="lead"><b>Business communication</b> is the <b>correspondence written during the daily course of business activities</b>. It includes a wide range of correspondence that must be written in the course of business activities.</p>
          <div class="chips"><span class="chip">résumés</span><span class="chip">cover letters</span><span class="chip">transmittal letters</span><span class="chip">customer relations writing</span><span class="chip">human resources communications</span><span class="chip">trip reports</span><span class="chip">administrative communications</span></div>
          <p><small>The theory deck lists résumés, cover letters, transmittal letters, customer relations writing and administrative communications. The longer deck adds human resources communications and trip reports.</small></p>
          <div class="note exam"><p>It is the third branch under the professional orientation, next to scientific writing and technical reporting. A question may give a letter and ask you to <b>place it</b> in this branch and say why: it is correspondence written in the daily course of business.</p></div>
        ` },
        { title: 'Tone and call to action', html: `
          <p class="lead">Business writing still needs <b>precision</b>. But everyday business correspondence, like a job application, often aims for a <b>call to action</b>. That is where it differs from the <b>neutral tone</b> of a pure technical report.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Technical report</th><th>Business correspondence</th></tr></thead>
            <tbody>
              <tr><td>Tone</td><td>neutral</td><td>often aims for a <b>call to action</b></td></tr>
              <tr><td>Precision</td><td>required</td><td>still required</td></tr>
              <tr><td>Purpose</td><td>specific information, archival</td><td>correspondence in the daily course of business</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Résumés and biosketches', html: `
          <p class="lead">Two business documents appear in the slides: a <b>résumé</b> and a short <b>biosketch</b>. The deck gives a model of each, and a task.</p>
          <h3>The résumé sample</h3>
          <p>The sample résumé is a single page with a name and one-line summary at the top and four blocks:</p>
          <div class="chips"><span class="chip">work experience</span><span class="chip">skills and competencies</span><span class="chip">achievements and certificates</span><span class="chip">interests</span></div>
          <h3>The biosketch sample</h3>
          <p>The biosketch shown is of the textbook's author, Phil Laplante: a professor of software and systems engineering at Penn State, whose current work covers software testing, software security, requirements engineering, the internet of things, and software quality and management; PhD in computer science from Stevens Tech; licensed professional software engineer in Pennsylvania.</p>
          <p>Notice the order in the sample: <b>who and where, current work, qualification, licence</b>.</p>
          <h3>The task: a 50-word biosketch</h3>
          <p>The deck's task: <b>write a biosketch of yourself in 50 words or less</b>.</p>
          <div class="note trap"><p>Keep to the limit: the slide says 50 words or less.</p></div>
        ` },
        { title: 'Business plans', html: `
          <p class="lead">The deck has a <b>Business Plans</b> slide that lists the sections of a typical plan.</p>
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
          <p>The slides place <b>business plans and proposals</b> under <b>technical marketing content</b>, and the documentation tree puts "business plan" in sales and marketing.</p>
          <div class="note exam"><p>If a question lists a few section names and asks which belongs to a business plan, remember the pairing: <b>financial planning shows viability; market research shows the competitors; the executive summary comes first</b>.</p></div>
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
      ],
      oneLiners: [
        `Business communication = <b>correspondence in the daily course of business</b>: résumés, cover letters, transmittal letters, customer, HR and administrative writing, trip reports.`,
        `It needs precision <b>and</b> often a <b>call to action</b>, unlike the neutral tone of pure technical reports.`,
        `A résumé has work experience, skills and competencies, achievements and certificates, and interests.`,
        `A biosketch is short (50 words or less); the sample gives who, current work, qualification, licence.`,
        `A business plan has eight sections; <b>financial planning</b> is the most critical, the executive summary comes first.`,
      ],
      formulas: [
        { name: `Business tone`, html: `<b>Precise</b> + often a <b>call to action</b> (unlike the neutral tone of a pure technical report)` },
        { name: `Biosketch order`, html: `<b>Who and where</b> → <b>current work</b> → <b>qualification</b> → <b>licence</b>`, note: `Task: 50 words or less.` },
      ],
    },
  ],
  figures: [
    { id: 'm1-taxonomy-map', caption: 'The taxonomy of technical writing: three orientations, with scientific writing, technical reporting, business communications and electronic media under professional. Based on BAENG101 course material, VIT.', alt: 'A tree. Technical writing at the top splits into pedagogical, theoretical and professional orientation. Professional orientation splits into scientific writing, technical reporting, business communications and electronic media.' },
    { id: 'm1-authority-speed', caption: 'Publishing venues placed by speed of publication and authority: blogs and newsletters are fast and low authority, archival journals are slow and high authority. Positions are approximate. Based on BAENG101 course material, VIT.', alt: 'A chart with authority from low to high along the bottom and speed from slow to fast up the side. Websites and blogs, and newsletters sit at the fast, low authority end. Conference proceedings, magazines, open access journals and peer-reviewed magazines sit in the middle. Books and archival journals sit at the slow, high authority end.' },
  ],
});
