CHUNK({
  chunk: 'A',
  module: 'm3',
  topics: [
    {
      id: 'm3-why-define',
      title: 'Why define? Purpose, audience and responsibility',
      short: 'Why define?',
      blurb: 'What a definition is, why technical writers define terms at all, how purpose and audience decide the kind of definition, and the legal and ethical weight a definition can carry.',
      source: 'Technical Definitions slides 2–13',
      tabs: [
        { title: 'What a definition is', html: `
          <p class="lead">A <b>definition</b> is a statement of the <b>essential nature</b> of something, or of what a word or symbol <b>means</b>. Defining is the act of stating that meaning.</p>
          <p>The dictionary gives three senses, and all three show up in technical writing:</p>
          <ul>
            <li>a statement of the <b>essential nature</b> of a thing (what a transformer really is)</li>
            <li>a statement of the <b>meaning of a word</b>, phrase, sign or symbol (what "Ω" stands for)</li>
            <li>the <b>action</b> of stating that meaning (you, defining a term in your report)</li>
          </ul>
          <h3>Why bother defining?</h3>
          <div class="chips"><span class="chip">increase reader understanding</span><span class="chip">explain technical terms</span><span class="chip">establish common ground</span></div>
          <p>A definition puts everyone <b>on the same page</b>: writer, reader, client and examiner all mean the same thing by the same word. A term that is left <b>improperly defined</b> can mislead readers, cause wrong decisions and even create legal trouble.</p>
          <div class="note example"><p>The slides quote the philosopher Ludwig Wittgenstein: "The limits of my language mean the limits of my world." If a reader doesn't have the word, they can't think clearly about the thing.</p></div>
          <div class="note exam"><p>CAT questions on this topic are about <b>applying</b> definitions: which type fits a reader, what is wrong with a given definition, or writing one yourself. Know the purpose first, then the three types.</p></div>
        ` },
        { title: 'Purpose and audience', html: `
          <p class="lead">No single type of definition works everywhere. Two things decide what you write: your <b>purpose</b> and your <b>audience</b>.</p>
          <ul>
            <li><b>Purpose</b>: why does the reader need the term? A quick mention in passing needs a few words; a term the whole report depends on needs a full paragraph.</li>
            <li><b>Audience</b>: what does the reader already know? An engineer and a house owner need different definitions of the same word.</li>
            <li><b>Analogies</b> help nonexperts: "a firewall works like a security guard at a building entrance".</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Client's progress report</h4><p>The <b>leaching field</b> (sieve-like drainage area) needs crushed stone.</p><p><small>A general idea is enough.</small></p></div>
            <div class="side"><h4>Public health report</h4><p>A full paragraph on what a leaching field is, how waste water filters through it and how it can <b>contaminate groundwater</b>.</p><p><small>The whole report depends on the term.</small></p></div>
          </div>
          <p>Clear definitions also help us judge <b>complex technical and social issues</b>. Before anyone can debate <b>genetic engineering</b>, they need at least a basic definition: a technique through which genes are <b>isolated</b> in a laboratory, <b>manipulated</b>, and then <b>inserted stably</b> into another organism (by mechanical, chemical or biological means such as viruses).</p>
          <div class="note example"><p>The slides also show a dictionary entry for <b>meme</b>: "an idea, behaviour, style, or usage that spreads from person to person within a culture". Notice how it names what a meme is (an idea or behaviour) and then what makes it special (it spreads within a culture).</p></div>
        ` },
        { title: 'Legal weight', html: `
          <p class="lead">A precise definition matters legally because <b>you</b>, or the organisation you write for, are <b>legally responsible</b> for the document.</p>
          <ul>
            <li><b>Contracts</b> are detailed, legally binding definitions of the specific terms of an agreement.</li>
            <li>A <b>lease</b> for an apartment or a car defines the responsibilities of the <b>lessee</b> (the person renting) and the <b>lessor</b> (the owner).</li>
            <li>An <b>employment contract</b> or <b>employee handbook</b> spells out what both employer and employee must do.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Vague</h4><p>"The tenant must keep the flat in good condition."</p><p><small>What counts as good? Who pays for a broken geyser?</small></p></div>
            <div class="side"><h4>Precise</h4><p>"The tenant pays for damage caused by misuse. The owner pays for repairs caused by normal wear, including the water heater and wiring."</p></div>
          </div>
          <div class="note why"><p>A court reads the words, not what you meant. If a term can be read two ways, the other side will pick the reading that suits them.</p></div>
        ` },
        { title: 'Ethical weight: Challenger', html: `
          <p class="lead">Definitions have <b>ethical implications</b> too. The slides use the <b>Challenger</b> disaster to show how one badly defined phrase, <b>acceptable risk</b>, cost seven lives.</p>
          <div class="kv">
            <div><span>Date</span><b>28 January 1986</b></div>
            <div><span>What happened</span><b>exploded 73 seconds after launch</b></div>
            <div><span>Crew lost</span><b>all seven</b></div>
            <div><span>Cause</span><b>two rubber O-ring seals</b> in a booster rocket failed</div>
          </div>
          <p>The failed O-rings let hot exhaust gases escape and ignite the adjacent fuel tank. Hours before launch, the engineers objected strongly. <b>Management</b> still decided the launch was "a risk worth taking".</p>
          <p>Management's definition of acceptable risk was based on <b>bureaucratic pressure</b> to launch on schedule, not on the <b>engineering facts</b>.</p>
          <div class="note exam"><p>The lesson the slides draw: agreeing on meaning is rarely easy, but you are <b>ethically bound</b> to give an <b>accurate interpretation of the facts</b> as you understand them. If a question asks why definitions have ethical weight, Challenger is your example.</p></div>
        ` },
        { title: 'Three types at a glance', html: `
          <p class="lead">Technical writing uses three types of definition. They differ in <b>how much detail</b> your audience needs to grasp your exact meaning.</p>
          <figure data-fig="m3-definition-types"></figure>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Length</th><th>Formality</th><th>Use it when</th></tr></thead>
            <tbody>
              <tr><td><b>Parenthetical</b></td><td>a word or phrase in brackets</td><td>least formal</td><td>the reader needs only a quick clarification</td></tr>
              <tr><td><b>Sentence</b></td><td>one or two sentences</td><td>more formal</td><td>the reader needs more than a synonym, or you want a working definition</td></tr>
              <tr><td><b>Expanded</b></td><td>a paragraph or more</td><td>most formal</td><td>the reader needs a complete understanding</td></tr>
            </tbody>
          </table>
          <div class="mnemonic"><p><b>P-S-E</b>: brackets, a sentence, an essay. The more the reader depends on the term, the further down the list you go.</p></div>
        ` },
      ],
      flashcards: [
        { front: 'Two things that decide which kind of definition you write?', back: 'Your <b>purpose</b> and your <b>audience</b>.' },
        { front: 'What does a definition establish between writer and reader?', back: '<b>Common ground</b>: everyone means the same thing by the term.' },
        { front: 'Why is precise definition a legal matter?', back: 'You or your organisation are <b>legally responsible</b> for the document.' },
        { front: 'A contract is a detailed, legally binding…', back: '<b>Definition</b> of the terms of an agreement.' },
        { front: 'In a lease, who is the lessee?', back: 'The person <b>renting</b> the flat or car.' },
        { front: 'Which phrase was badly defined before the Challenger launch?', back: '<b>Acceptable risk</b>.' },
        { front: 'Challenger: what failed?', back: 'Two rubber <b>O-ring seals</b> in a booster rocket.' },
        { front: 'Challenger: management defined the risk based on…', back: '<b>Bureaucratic pressure</b> to launch on schedule, not engineering facts.' },
        { front: 'The three types of technical definition?', back: '<b>Parenthetical</b>, <b>sentence</b>, <b>expanded</b>.' },
        { front: 'Which type is the most formal?', back: 'The <b>expanded</b> definition.' },
      ],
      oneLiners: [
        'A definition states the <b>essential nature</b> of a thing or the <b>meaning</b> of a word, phrase or symbol.',
        'Define to increase reader understanding, explain technical terms and establish <b>common ground</b>.',
        'The right kind of definition depends on <b>purpose</b> and <b>audience</b>; analogies help nonexperts.',
        'Legal weight: you are <b>legally responsible</b> for your document; contracts are binding definitions.',
        'Ethical weight: Challenger (28 Jan 1986) and management\'s definition of <b>acceptable risk</b>.',
        'Three types by detail: <b>parenthetical</b> → <b>sentence</b> → <b>expanded</b>.',
      ],
      formulas: [
        { name: 'Choosing a definition', html: `How much the reader depends on the term → <b>parenthetical</b> (a little) · <b>sentence</b> (more) · <b>expanded</b> (a lot)`, note: 'Decide by purpose and audience, never by habit.' },
      ],
    },

    {
      id: 'm3-parenthetical',
      title: 'Parenthetical definitions',
      short: 'Parenthetical',
      blurb: 'The quickest kind of definition: a familiar synonym or a short clarifying phrase in brackets, right inside the sentence.',
      source: 'Technical Definitions slides 14–16',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">A <b>parenthetical definition</b> clarifies a word with a more familiar <b>synonym</b> or a short <b>clarifying phrase</b> placed in <b>parentheses</b>, inside the same sentence.</p>
          <p>It is the <b>least formal</b> of the three types, used <b>in-line</b> for a quick <b>clarification</b> or brief explanation. The slides give two textbook examples:</p>
          <ul>
            <li>The <b>leaching field</b> (sieve-like drainage area) requires crushed stone.</li>
            <li>The trees on the site are mostly <b>deciduous</b> (shedding foliage at season's end).</li>
          </ul>
          <div class="note why"><p>The reader never leaves the sentence. They get just enough to keep reading, and an expert can skip the brackets in a second.</p></div>
        ` },
        { title: 'More examples', html: `
          <p class="lead">Anything short can go in the brackets: an <b>acronym's full form</b>, a <b>simpler word</b>, or an <b>example</b>.</p>
          <ul>
            <li><b>Expands an acronym:</b> RAM (random access memory) is a form of computer data storage…</li>
            <li><b>Gives an example of the class:</b> …when a charged particle (such as an electron) passes through a dielectric medium…</li>
            <li><b>Gives a simpler description:</b> Voltaire was imprisoned twice in the Bastille (French fortress), in 1717 and 1726.</li>
          </ul>
          <h3>Online</h3>
          <p>On a <b>web page</b>, social media post or online help system, a short definition can be <b>linked</b> to the word. A reader who taps "leaching field" gets a small window with the brief definition.</p>
          <div class="note trap"><p>"RAM (random access memory) <b>is a form of computer data storage which stores frequently used program instructions</b>" contains both types. The brackets are parenthetical, but the whole sentence (term, class, features) is a <b>sentence definition</b>. The course MCQ worksheet treats it as a sentence definition. Read what the question points at.</p></div>
        ` },
        { title: 'Writing a good one', html: `
          <p class="lead">A parenthetical definition must be <b>shorter and simpler</b> than the term it explains. If it needs a full sentence, you need a sentence definition instead.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The pump uses an <b>impeller</b> (a rotor used to increase the pressure and flow of a fluid by transferring mechanical energy from the motor through vanes arranged around a central hub).</p><p><small>Too long: the reader loses the main sentence.</small></p></div>
            <div class="side"><h4>Right</h4><p>The pump uses an <b>impeller</b> (a spinning rotor with vanes) to push water up.</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The trees are mostly <b>deciduous</b> (caducous).</p><p><small>The "explanation" is harder than the word.</small></p></div>
            <div class="side"><h4>Right</h4><p>The trees are mostly deciduous (shedding their leaves each autumn).</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: in normal writing the same job is often done with commas or dashes ("an impeller, a spinning rotor with vanes, pushes water up"). In a CAT answer, use brackets so the examiner sees a parenthetical definition clearly.</p></div>
          <div class="note exam"><p>If a question asks for a parenthetical definition, write the full sentence around it. The brackets on their own ("(sieve-like drainage area)") are not an answer.</p></div>
        ` },
      ],
      flashcards: [
        { front: 'A parenthetical definition uses a synonym or phrase placed in…', back: '<b>Parentheses</b> (brackets), inside the sentence.' },
        { front: 'How formal is a parenthetical definition?', back: 'The <b>least formal</b> of the three types.' },
        { front: 'Leaching field (…)', back: '(<b>sieve-like drainage area</b>)' },
        { front: 'Deciduous (…)', back: '(<b>shedding foliage at season\'s end</b>)' },
        { front: 'Voltaire was imprisoned in the Bastille (…)', back: '(<b>French fortress</b>)' },
        { front: 'How does a web page often show a parenthetical definition?', back: 'As a <b>link</b> that opens a small window with the definition.' },
        { front: 'The rule for what goes inside the brackets?', back: 'It must be <b>shorter and simpler</b> than the term.' },
        { front: 'When is a parenthetical definition enough?', back: 'When the reader needs only a <b>general idea</b> of the term.' },
      ],
      oneLiners: [
        'Parenthetical definition: a familiar <b>synonym</b> or clarifying phrase in <b>parentheses</b>, in-line.',
        'It is the <b>least formal</b> type, used for quick clarification.',
        'Examples: leaching field (sieve-like drainage area); deciduous (shedding foliage at season\'s end); Bastille (French fortress).',
        'Online, short definitions can be <b>linked</b> to the term in a pop-up window.',
        'What goes in the brackets must be <b>simpler and shorter</b> than the term.',
      ],
      formulas: [
        { name: 'Parenthetical definition', html: `…<b>term</b> (<b>simpler synonym or short phrase</b>)…`, note: 'e.g. The leaching field (sieve-like drainage area) requires crushed stone.' },
      ],
    },

    {
      id: 'm3-sentence-def',
      title: 'Sentence definitions: term, class, features',
      short: 'Sentence definitions',
      blurb: 'The formal one-sentence definition: name the term, put it in its broader class, then give the features that set it apart from everything else in that class.',
      source: 'Technical Definitions slides 17–18, 22–25, 59–68; MCQ worksheet',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">When a term needs more than a parenthetical definition can give, use a <b>sentence definition</b>: one or two formal sentences in a fixed pattern.</p>
          <ul>
            <li><b>More formal</b> than a parenthetical definition</li>
            <li>Gives <b>more information</b> than brackets can hold</li>
            <li>Can set up a <b>working definition</b> for a whole document</li>
            <li>Follows a <b>standard pattern</b>: <b>term</b>, <b>class</b>, <b>distinguishing features</b></li>
          </ul>
          <div class="note example"><p>"An <b>electron microscope</b> is a microscope that uses electrons rather than visible light to produce magnified images." Term: electron microscope. Class: a microscope. Feature: uses electrons, not light.</p></div>
          <div class="note exam"><p>This is the CAT-2 heading "Technical definitions (sentence definitions)". Expect to write several sentence definitions of everyday or technical objects, and to spot what is wrong with weak ones.</p></div>
        ` },
        { title: 'Term, class, features', html: `
          <p class="lead">Begin by stating the <b>term</b>. Then name the broader <b>class</b> it belongs to. Then give the <b>distinguishing features</b> that separate it from the other members of that class.</p>
          <figure data-fig="m3-term-class-features"></figure>
          <table class="tbl">
            <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
            <tbody>
              <tr><td>Carburettor</td><td><b>a mixing device</b></td><td>in petrol engines that blends air and fuel into a vapour for combustion in the cylinders</td></tr>
              <tr><td>Diabetes</td><td><b>a metabolic disease</b></td><td>caused by a disorder of the pituitary gland or pancreas, with excessive urination, persistent thirst and inability to metabolise sugar</td></tr>
              <tr><td>Stress</td><td><b>an applied force</b></td><td>that strains or deforms a body</td></tr>
              <tr><td>Bunsen burner</td><td><b>a small laboratory burner</b></td><td>consisting of a vertical metal tube connected to a gas source</td></tr>
              <tr><td>Neodymium magnet</td><td><b>a permanent magnet</b></td><td>made of a neodymium, boron and iron alloy</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>The class tells the reader which "shelf" the thing sits on. The features tell them which item on that shelf it is. Without the class they don't know what kind of thing it is; without the features they can't tell it from its neighbours.</p></div>
        ` },
        { title: 'Getting the class right', html: `
          <p class="lead">Most weak definitions fail at the class. It must be <b>specific enough</b> to be useful, but <b>broad enough</b> to be a real category.</p>
          <div class="vs">
            <div class="side"><h4>Too broad</h4><p>A thermometer is <b>a thing</b> that measures temperature.</p><p><small>"Thing" tells the reader nothing.</small></p></div>
            <div class="side"><h4>Right</h4><p>A thermometer is <b>an instrument</b> that measures temperature.</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Circular</h4><p>A <b>compressor</b> is a machine that compresses.</p><p><small>Uses the term to define itself.</small></p></div>
            <div class="side"><h4>Right</h4><p>A compressor is a machine that <b>raises the pressure of a gas</b> by reducing its volume.</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>No real feature</h4><p>RAM is fast and useful.</p><p><small>No class, and "fast and useful" fits a hundred things.</small></p></div>
            <div class="side"><h4>Right</h4><p>RAM is <b>a form of computer data storage</b> which stores frequently used program instructions.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides, but standard in technical writing: besides avoiding <b>circular</b> definitions, don't write "is when" or "is where" ("Corrosion is when metal rusts"), and never explain a term with words harder than the term.</p></div>
          <div data-viz="def-builder"></div>
        ` },
        { title: 'Sentences and working definitions', html: `
          <p class="lead">The three parts can be spread over <b>one or more complete sentences</b>. A sentence definition can also fix a <b>working definition</b> that holds for a whole document.</p>
          <h3>Two sentences</h3>
          <p>"<b>Diabetes</b> is a metabolic disease caused by a disorder of the pituitary gland or pancreas. This disease is characterized by excessive urination, persistent thirst, and inability to metabolize sugar."</p>
          <h3>Working definition</h3>
          <p>Useful when you'll use a term often and don't want to repeat what you mean:</p>
          <div class="note example"><p>"Throughout this document, the term <b>local fauna</b> refers to all animals within the tri-county region that are native to this region and live in the wild. Animals in zoos or wildlife parks are not included in this definition."</p></div>
          <p>Notice the second sentence: a working definition often says what is <b>left out</b>, so nobody can stretch the term later.</p>
          <div class="note exam"><p>A good opener for a working definition: "Throughout this report, <b>X refers to</b>…". Use it in lab reports and project reports when a word has several everyday meanings (e.g. "load", "user", "failure").</p></div>
        ` },
        { title: 'Worked: define everyday objects', html: `
          <p class="lead">The slides end with an exercise: define a <b>pen</b>, a <b>laptop</b>, a <b>university</b> and a <b>chair</b>. Build each one part by part.</p>
          <div class="worked">
            <div class="given"><p><b>Pen</b>. Class? Not "a thing": a <b>handheld writing instrument</b>. What sets it apart from a pencil or chalk? It uses ink.</p></div>
            <div class="solve"><p>Term: pen. Class: a handheld writing instrument. Features: applies ink to a surface through a nib or a rolling ball.</p></div>
            <div class="result"><p>A <b>pen</b> is a handheld writing instrument that applies ink to paper or another surface through a nib or a rolling ball.</p></div>
          </div>
          <p>The other three, built the same way (the class is in italics):</p>
          <ul>
            <li><b>A laptop</b> is <em>a portable personal computer</em> with a built-in screen, keyboard and battery in a single folding case.</li>
            <li><b>A university</b> is <em>an institution of higher education</em> that teaches undergraduate and postgraduate courses, carries out research and awards degrees.</li>
            <li><b>A chair</b> is <em>a piece of furniture</em> for one person to sit on, with a seat, a back and usually four legs.</li>
          </ul>
          <div class="note trap"><p>"A chair is a piece of furniture <b>used for sitting</b>." A sofa and a bench are also for sitting. The features must separate the term from its neighbours: <b>one person</b>, <b>a back</b>.</p></div>
        ` },
        { title: 'Reading dictionary definitions', html: `
          <p class="lead">The slides show short dictionary-style definitions. Read each one for its <b>class</b> (in italics below) and its <b>features</b>, because that is exactly what you're asked to produce.</p>
          <ul>
            <li><b>An apple</b> (noun) is <em>a rounded edible fruit</em>, usually red, yellow or green, that grows on a tree.</li>
            <li><b>A book</b> (noun) is <em>a set of written or printed sheets</em> bound together for reading.</li>
            <li><b>A mobile phone</b> is <em>a portable telephone</em> that uses a radio link and, unlike a landline, is not tied to one place.</li>
            <li><b>A cat</b> is <em>a small carnivorous mammal</em> (family Felidae) that is kept as a pet and hunts pests.</li>
            <li><b>Data science</b> is <em>a multidisciplinary field</em> that uses scientific methods and algorithms to extract insight from data.</li>
            <li><b>A community</b> is <em>a group of people</em> living in the same place or sharing a characteristic.</li>
          </ul>
          <p>Some slide examples go further than one sentence. "Podium" adds the word's Latin and Greek roots, "television" adds what it is used for, "zoo" adds its modern purposes. Those extra sentences are <b>expansion methods</b>, the next topic.</p>
          <div class="note example"><p>The slides also have a matching exercise: pick the right meaning for <b>bicycle</b> (a vehicle with two wheels and handlebars, not a plane with two engines), <b>erase</b> (to remove by rubbing away), <b>natural</b> (made by nature), <b>success</b> (doing well at something), <b>net</b> (a mesh for catching insects) and <b>change</b> (to make things different).</p></div>
        ` },
      ],
      flashcards: [
        { front: 'Standard pattern of a sentence definition?', back: '<b>Term</b> + <b>class</b> + <b>distinguishing features</b>.' },
        { front: 'Carburettor: class?', back: '<b>A mixing device</b>.' },
        { front: 'Stress: class and feature?', back: '<b>An applied force</b> that strains or deforms a body.' },
        { front: 'Diabetes: class?', back: '<b>A metabolic disease</b>.' },
        { front: 'Bunsen burner: class?', back: '<b>A small laboratory burner</b>.' },
        { front: 'Electron microscope: what distinguishes it?', back: 'It uses <b>electrons</b> rather than visible light.' },
        { front: '"A compressor is a machine that compresses." The fault?', back: 'It is <b>circular</b>: the term defines itself.' },
        { front: '"A thermometer is a thing that measures temperature." The fault?', back: 'The class is <b>too broad</b>; use "an instrument".' },
        { front: 'What is a working definition?', back: 'A definition fixed <b>for the whole document</b>, so the term needn\'t be redefined.' },
        { front: 'Working definition of local fauna leaves out…', back: 'Animals in <b>zoos or wildlife parks</b>.' },
      ],
      oneLiners: [
        'Sentence definition = <b>term</b> + <b>class</b> + <b>distinguishing features</b>; more formal than parenthetical.',
        'The class is the broader category; the features separate the term from others in that class.',
        'Examples: stress, an applied force that strains or deforms a body; carburettor, a mixing device…',
        'The parts may run over two sentences (diabetes).',
        'A <b>working definition</b> fixes a term for a whole document ("local fauna", zoo animals excluded).',
        'Avoid a class that is too broad ("a thing"), circular definitions and features that fit other things.',
      ],
      formulas: [
        { name: 'Sentence definition', html: `<b>Term</b> is <b>a/an [class]</b> that/which <b>[distinguishing features]</b>.`, note: 'Stress is an applied force that strains or deforms a body.' },
        { name: 'Working definition', html: `Throughout this document, the term <b>X</b> refers to <b>…</b>. <b>Y</b> is not included.`, note: 'State what is left out as well as what is in.' },
        { name: 'Class check', html: `Class must be a real category, <b>not "a thing"</b>; features must <b>not fit its neighbours</b>; never use the term to define itself.` },
      ],
    },

    {
      id: 'm3-expanded',
      title: 'Expanded definitions and how to expand them',
      short: 'Expanded definitions',
      blurb: 'When a sentence is not enough: the nine methods for expanding a definition (etymology, history, negation, operating principle, parts, visuals, comparison, required conditions, examples), shown on one running example, the laser.',
      source: 'Technical Definitions slides 19–21, 26–45',
      tabs: [
        { title: 'When to expand', html: `
          <p class="lead">An <b>expanded definition</b> is the <b>most formal</b> type: a <b>paragraph or longer</b>, with a very <b>flexible structure</b>, written when the reader needs a <b>complete understanding</b>.</p>
          <p>Brief definitions are fine when your audience needs only a general idea, as with "leaching field (sieve-like drainage area)" in a progress report to a house owner. A document that depends on the term, such as a <b>public health report</b> on groundwater contamination from leaching fields, needs more.</p>
          <div class="note example"><p>A health web page defines <b>allergenics</b> as two kinds of product, <b>patch tests</b> and <b>extracts</b>, then defines each in short sentences. Technical phrases are restated in plain words: <b>allergic rhinitis</b> becomes "hay fever". Because it is online, readers of any level can search for more and follow links to related definitions.</p></div>
          <p>Every expanded definition starts from a sentence definition. The running example on the slides is:</p>
          <p>"A <b>laser</b> is an electronic device that emits a highly concentrated beam of light."</p>
        ` },
        { title: 'The questions readers ask', html: `
          <p class="lead">Each method of expanding a definition answers a <b>question your reader might ask</b>. Decide which of these questions your audience will actually have.</p>
          <figure data-fig="m3-expansion-questions"></figure>
          <ul>
            <li><b>Etymology</b>: how did its name originate?</li>
            <li><b>History</b>: what is its history?</li>
            <li><b>Negation</b>: what does it not mean?</li>
            <li><b>Operating principle</b>: how does it work?</li>
            <li><b>Analysis of parts</b>: what are its parts?</li>
            <li><b>Visuals</b>: what does it look like?</li>
            <li><b>Comparison and contrast</b>: how does it resemble or differ from something else?</li>
            <li><b>Required conditions</b>: what is needed to make it work?</li>
            <li><b>Examples</b>: how is it used or applied?</li>
          </ul>
          <div class="mnemonic"><p>Nine methods, <b>"E-H-N, O-P-V, C-R-E"</b>: Etymology, History, Negation · Operating principle, Parts, Visuals · Comparison, Required conditions, Examples.</p></div>
        ` },
        { title: 'Etymology, history, negation', html: `
          <p class="lead">Three methods about the word's <b>story</b> and its <b>limits</b>.</p>
          <h3>Etymology: where the word comes from</h3>
          <p>A word's <b>origin</b> and changing meanings can clarify it. <b>Biometrics</b> (the statistical analysis of biological data) comes from Greek <b>bio</b>, "life", and <b>metron</b>, "measure". A dictionary gives the origin of most words.</p>
          <p>Some terms are <b>acronyms</b>, built from first letters: <b>laser</b> = <b>l</b>ight <b>a</b>mplification by <b>s</b>timulated <b>e</b>mission of <b>r</b>adiation.</p>
          <div class="note example"><p>"The word laser is an acronym for light amplification by stimulated emission of radiation, and is the name for an electronic device that emits a highly concentrated beam of light."</p></div>
          <h3>History: how it came about</h3>
          <p>Explain how the term, concept or procedure developed. Specialised dictionaries and encyclopedias are good sources. The slides: early fibre-optic researchers lacked an intense light source and a clean transmission medium. The laser (invented <b>1960</b>) solved the first problem; the first communications-grade optical fibre of almost pure silica glass (<b>1970</b>) solved the second.</p>
          <h3>Negation: what it is not</h3>
          <p>Say what the term <b>does not mean</b>, to clear up misconceptions. A laser is used for many useful purposes, including eye surgery, and <b>not</b>, as science fiction suggests, as a transport to other dimensions.</p>
        ` },
        { title: 'How it works and what it\'s made of', html: `
          <p class="lead">Three methods about the <b>thing itself</b>: how it operates, its parts, and what it looks like.</p>
          <h3>Operating principle</h3>
          <p>Anyone who uses a product needs to know <b>how it operates</b>. A laser uses electrical energy to produce <b>coherent light</b>: light in which all the waves are <b>in phase</b> with each other, making it hotter and more intense.</p>
          <h3>Analysis of parts</h3>
          <p>List <b>all the parts</b>, and define each part if needed. The laser's three main parts:</p>
          <ol class="steps">
            <li><b>Source of energy</b> electric currents, or even other lasers.</li>
            <li><b>Resonant circuit</b> holds the lasing medium (solid, liquid or gas) between a fully reflecting end and a partially reflecting end. The medium absorbs energy and releases photons, which bounce between the ends, gaining energy (amplified), then leave through the partially reflecting end as coherent light.</li>
            <li><b>Optical elements</b> lenses, prisms and mirrors that shape the beam and direct it to its target.</li>
          </ol>
          <h3>Visuals</h3>
          <p>Any visual must be <b>well labelled</b>. <b>Introduce and explain</b> it, place it <b>near the discussion</b>, and <b>credit the source</b> if it is borrowed.</p>
        ` },
        { title: 'Comparison, conditions, examples', html: `
          <p class="lead">Three methods that <b>connect</b> the term to what the reader already knows and to real use.</p>
          <h3>Comparison and contrast</h3>
          <p>Show <b>similarities</b> (comparison) or <b>differences</b> (contrast) with something familiar, to build a bridge from the known to the unknown. The slides explain fibre optics by comparing signal carriers: sound, radio and light waves can all carry signals, and capacity rises with frequency.</p>
          <div class="kv">
            <div><span>Telephone voice</span><b>1,000 Hz</b></div>
            <div><span>Television signal</span><b>about 50 million Hz</b></div>
            <div><span>Light waves</span><b>hundreds of trillions of Hz</b></div>
          </div>
          <h3>Required conditions</h3>
          <p>Some items or processes need <b>special materials, handling or conditions</b>. To emit its beam, the laser must absorb energy through the reflecting end of the resonant circuit, amplify the photons between the two ends, and release them through lenses, prisms and mirrors.</p>
          <h3>Examples</h3>
          <p>Examples are powerful, as long as they suit the reader's level. Lasers in medicine: <b>ophthalmologists</b> treat cataracts and detached retinas, dermatologists treat skin problems, gynaecologists treat the reproductive system, and neurosurgeons perform brain surgery, all with lasers carried through optical fibres.</p>
          <div data-viz="expand-methods"></div>
        ` },
        { title: 'Several methods together', html: `
          <p class="lead">A complex term often needs <b>several methods at once</b>. Choose them by asking what your particular readers need.</p>
          <figure data-fig="m3-solenoid-plan"></figure>
          <h3>Solenoid, for semitechnical readers</h3>
          <p>The readers are beginning student mechanics. Before they can repair a solenoid, they need to know where the word comes from, what a solenoid looks like, how it works, how its parts operate and how it is used. So the definition runs in this order:</p>
          <ol>
            <li><b>Formal sentence definition</b>: an electrically energised coil that forms an electromagnet and performs mechanical functions.</li>
            <li><b>Etymology</b>: "sole", meaning contained inside; Greek <em>solenoides</em>, "shaped like a pipe".</li>
            <li><b>Description and parts</b>: coil, plunger and return spring, with a labelled diagram.</li>
            <li><b>Operating principle and special conditions</b>: current turns the coil into a magnet that pulls the rod in.</li>
            <li><b>Example</b>: the starter motor of a car.</li>
          </ol>
          <h3>Nanotechnology, for nontechnical readers</h3>
          <p>These readers need an overview: what nanotechnology is and how it developed, its potential uses, present applications, health risks and impact on jobs. The document uses <b>question-type headings</b> phrased the way readers would ask ("What is nanotechnology?"), and <b>parenthetical definitions</b> of nanometer and micrometer to give a sense of scale.</p>
          <div class="note exam"><p>For "write an expanded definition of X", open with a sentence definition, then use <b>at least three</b> clearly different methods, one short paragraph each. Examiners look for a correct sentence definition and methods that suit the stated reader.</p></div>
        ` },
      ],
      flashcards: [
        { front: 'Which definition type is a paragraph or longer?', back: 'The <b>expanded</b> definition.' },
        { front: 'Expansion method that explains a word\'s origin?', back: '<b>Etymology</b>.' },
        { front: 'Biometrics comes from Greek bio + metron, meaning…', back: '<b>Life</b> + <b>measure</b>.' },
        { front: 'LASER stands for…', back: '<b>Light amplification by stimulated emission of radiation</b>.' },
        { front: 'Expansion method that says what the term does NOT mean?', back: '<b>Negation</b>.' },
        { front: 'Method that answers "How does it work?"', back: '<b>Operating principle</b>.' },
        { front: 'The laser\'s three main parts?', back: '<b>Energy source</b>, <b>resonant circuit</b>, <b>optical elements</b>.' },
        { front: 'Comparing voice (1,000 Hz), TV and light frequencies illustrates…', back: '<b>Comparison and contrast</b>.' },
        { front: 'Four rules for a visual in a definition?', back: '<b>Label</b> it, <b>introduce and explain</b> it, place it <b>near</b> the text, <b>credit</b> borrowed visuals.' },
        { front: 'Method that answers "What is needed to make it work?"', back: '<b>Required conditions</b>.' },
        { front: 'Coherent light is light whose waves are…', back: '<b>In phase</b> with each other.' },
      ],
      oneLiners: [
        'Expanded definition: <b>most formal</b>, a paragraph or longer, flexible, for complete understanding.',
        'Each method answers a reader\'s question; nine methods in all.',
        '<b>Etymology</b> (bio + metron; laser acronym), <b>history</b> (laser 1960, silica fibre 1970), <b>negation</b> (not a transport to other dimensions).',
        '<b>Operating principle</b> (coherent light), <b>analysis of parts</b> (energy source, resonant circuit, optical elements), <b>visuals</b> (labelled, explained, nearby, credited).',
        '<b>Comparison and contrast</b> (voice 1,000 Hz, TV 50 million Hz, light hundreds of trillions of Hz), <b>required conditions</b>, <b>examples</b> (laser surgery).',
        'Complex terms use several methods: solenoid for student mechanics, nanotechnology for nontechnical readers.',
      ],
      formulas: [
        { name: 'The nine expansion methods', html: `<b>Etymology · History · Negation · Operating principle · Analysis of parts · Visuals · Comparison and contrast · Required conditions · Examples</b>`, note: 'Each answers a question the reader might ask.' },
        { name: 'Expanded definition answer', html: `Sentence definition first → <b>3+ methods</b> chosen for the reader → one short paragraph each`, note: 'Name the reader, then pick the methods they need.' },
      ],
    },

    {
      id: 'm3-placing',
      title: 'Placing definitions, glossaries and checking your definition',
      short: 'Placing & glossaries',
      blurb: 'Where each type of definition goes in a document, what a glossary is for, how to choose the right type for a reader, and a checklist for fixing weak definitions.',
      source: 'Technical Definitions slides 46–52',
      tabs: [
        { title: 'Where definitions go', html: `
          <p class="lead">Define an unfamiliar term <b>the first time</b> the reader meets it. Where you put the definition depends on its type.</p>
          <ul>
            <li><b>Brief</b> (parenthetical) definitions go in <b>parentheses</b>, or in the document's <b>margin</b> beside the term.</li>
            <li><b>Sentence</b> definitions go in the <b>running text</b>; if there are many, put them in a <b>glossary</b>.</li>
            <li><b>Expanded</b> definitions go near the <b>beginning</b> of a long document if they are essential to the whole, or in an <b>appendix</b> if they are only for reference.</li>
          </ul>
          <div class="note why"><p>An essential expanded definition goes up front because readers need it before anything else makes sense. A reference-only one goes to the appendix so it doesn't block readers who already know the term.</p></div>
        ` },
        { title: 'Glossaries', html: `
          <p class="lead">A <b>glossary</b> is an <b>alphabetical list</b> of specialised terms and their definitions. It gives <b>laypersons</b> the key definitions <b>without interrupting technical readers</b>.</p>
          <figure data-fig="m3-glossary-sample"></figure>
          <p>The slides show a partial glossary from a document on childbirth. Each entry is the term in bold, a colon, then a short sentence-style definition (for example, <b>analgesic</b>: a medication given to relieve pain).</p>
          <div class="note heads-up"><p>Not on the slides, but standard practice: list entries <b>alphabetically</b>, define only terms the reader may not know, keep each entry in <b>sentence-definition style</b>, and tell readers near the start that a glossary exists (e.g. an asterisk on first use plus a note).</p></div>
          <div class="note exam"><p>Asked when to use a glossary? Many sentence definitions, a mixed audience (experts and laypeople), and a long document. Asked where it goes? Usually at the end of the report, before or after the appendices.</p></div>
        ` },
        { title: 'Choosing the type', html: `
          <p class="lead">Put it all together: read the situation, decide how much the reader depends on the term, then choose <b>parenthetical</b>, <b>sentence</b> or <b>expanded</b>.</p>
          <ul>
            <li>A passing mention the reader just needs to follow → <b>parenthetical</b>.</li>
            <li>A term used often in one report → <b>sentence</b> (a working definition).</li>
            <li>Many terms and mixed readers → a <b>glossary</b> of sentence definitions.</li>
            <li>The whole document depends on the term → <b>expanded</b>, near the start.</li>
          </ul>
          <div data-viz="def-type-sort"></div>
        ` },
        { title: 'Checking a definition', html: `
          <p class="lead">Before you hand in a definition, run it through a short <b>check</b>. Most errors fall into a few patterns.</p>
          <ol class="steps">
            <li><b>Class</b> is it a real, specific category (not "a thing", not "something")?</li>
            <li><b>Features</b> do they separate the term from others in the class?</li>
            <li><b>Not circular</b> does the definition avoid the term itself ("a compressor compresses")?</li>
            <li><b>Plain words</b> is every word easier than the term?</li>
            <li><b>Right type</b> does it give this reader enough, and not more than enough?</li>
          </ol>
          <div class="note heads-up"><p>The checklist is standard technical-writing practice built on the slides' term-class-features pattern; the slides don't list it as such.</p></div>
          <div data-viz="def-fixer"></div>
        ` },
      ],
      flashcards: [
        { front: 'When should an unfamiliar term be defined?', back: 'The <b>first time</b> the reader meets it.' },
        { front: 'Where do brief definitions go?', back: 'In <b>parentheses</b> or in the <b>margin</b> beside the term.' },
        { front: 'Where do numerous sentence definitions go?', back: 'In a <b>glossary</b>.' },
        { front: 'Where does an essential expanded definition go?', back: 'Near the <b>beginning</b> of the document.' },
        { front: 'Where does a reference-only expanded definition go?', back: 'In an <b>appendix</b>.' },
        { front: 'What is a glossary?', back: 'An <b>alphabetical list</b> of specialised terms and their definitions.' },
        { front: 'Main benefit of a glossary?', back: 'Laypersons get definitions <b>without interrupting technical readers</b>.' },
        { front: 'Glossary entry: analgesic?', back: 'A <b>medication given to relieve pain</b>.' },
      ],
      oneLiners: [
        'Define an unfamiliar term the <b>first time</b> it appears.',
        'Brief definitions: <b>parentheses</b> or the <b>margin</b>.',
        'Sentence definitions: <b>running text</b>, or a <b>glossary</b> if numerous.',
        'Expanded definitions: near the <b>beginning</b> if essential, <b>appendix</b> if for reference.',
        'Glossary: <b>alphabetical</b> list of specialised terms; helps laypersons without interrupting experts.',
      ],
      formulas: [
        { name: 'Placing definitions', html: `Brief → <b>brackets / margin</b> · Sentence → <b>text / glossary</b> · Expanded → <b>start</b> (essential) or <b>appendix</b> (reference)` },
        { name: 'Glossary entry', html: `<b>Term</b>: short sentence-style definition. (alphabetical order)`, note: 'Analgesic: a medication given to relieve pain.' },
      ],
    },
  ],
  figures: [
    { id: 'm3-definition-types', caption: 'The three types of definition, from least to most detail, shown on one term (laser). Based on BAENG101 course material, VIT.', alt: 'Three stacked boxes: parenthetical (a word in brackets), sentence (term, class, features) and expanded (a paragraph using several methods), each getting larger.' },
    { id: 'm3-term-class-features', caption: 'A sentence definition in three parts: the term, the broader class it belongs to, and the features that set it apart in that class. Based on BAENG101 course material, VIT.', alt: 'The definition of stress split into three labelled blocks: term (stress), class (an applied force), distinguishing features (that strains or deforms a body).' },
    { id: 'm3-expansion-questions', caption: 'Each method of expanding a definition answers one question a reader might ask about the term. Based on BAENG101 course material, VIT.', alt: 'A list of nine reader questions, each joined to its expansion method, from etymology to examples.' },
    { id: 'm3-solenoid-plan', caption: 'How the solenoid definition for student mechanics combines several expansion methods, in order. Based on BAENG101 course material, VIT.', alt: 'Five stacked steps: sentence definition, etymology, description and parts with a diagram, operating principle, example.' },
    { id: 'm3-glossary-sample', caption: 'The layout of a glossary: terms in alphabetical order, each followed by a short sentence-style definition. Based on BAENG101 course material, VIT.', alt: 'A glossary card with four engineering terms in alphabetical order (ampere, bandwidth, capacitor, diode), each followed by a short definition.' },
  ],
});
