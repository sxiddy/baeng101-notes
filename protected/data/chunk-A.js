CHUNK({
  chunk: 'A',
  module: 'm3',
  topics: [
    {
      id: 'm3-why-define',
      title: 'Why define? Purpose, audience and responsibility',
      short: 'Why define?',
      blurb: 'What a definition is, why technical writers define terms at all, how purpose and audience decide the kind of definition, and the legal and ethical weight a definition can carry.',
      source: 'Technical Definitions',
      tabs: [
        { title: 'What a definition is', html: `
          <p class="lead">A <b>definition</b> is a statement of the <b>essential nature</b> of something, or of what a word or symbol <b>means</b>. Defining is the act of stating that meaning.</p>
          <p>The deck quotes a dictionary definition of "definition":</p>
          <ul>
            <li>a statement of the <b>essential nature</b> of something</li>
            <li>a statement of the <b>meaning of a word</b> or word group, or a sign or symbol</li>
            <li>the <b>action</b> or process of stating that meaning</li>
          </ul>
          <h3>Why bother defining?</h3>
          <div class="chips"><span class="chip">increase reader understanding</span><span class="chip">explain technical terms</span><span class="chip">establish common ground</span></div>
          <p>A definition lets people <b>establish a common ground</b> and ensures they are all <b>on the same page</b> when discussing a concept. <b>Improperly defined</b> terms can have a negative impact.</p>
          <div class="note example"><p>The deck quotes Ludwig Wittgenstein: "The limits of my language means the limits of my world."</p></div>
        ` },
        { title: 'Purpose and audience', html: `
          <p class="lead">No single type of definition works everywhere. Two things decide what you write: your <b>purpose</b> and your <b>audience</b>.</p>
          <ul>
            <li>Consider your <b>purpose</b>.</li>
            <li>Definitions will depend on your <b>audience</b>.</li>
            <li><b>Analogies</b> can be helpful: "The PAUSE button is the brake pedal of the cassette deck".</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Client's progress report</h4><p>The <b>leaching field</b> (sieve-like drainage area) needs crushed stone.</p><p><small>A brief definition is fine when the reader needs only a general understanding.</small></p></div>
            <div class="side"><h4>Public health report</h4><p>A report on <b>groundwater contamination</b> from leaching fields needs more detail: an <b>expanded definition</b>.</p></div>
          </div>
          <p>Clear definitions also help us judge <b>complex technical and social issues</b>. Before anyone can debate <b>genetic engineering</b>, they need at least a basic definition: an experimental technique through which genes are <b>isolated</b> in a laboratory, <b>manipulated</b>, and then <b>inserted stably</b> into another organism (by mechanical, chemical or biological means such as viruses).</p>
          <div class="note example"><p>Here is a dictionary entry for <b>meme</b>: "an idea, behaviour, style, or usage that spreads from person to person within a culture".</p></div>
        ` },
        { title: 'Legal weight', html: `
          <p class="lead">A precise definition matters legally because <b>you</b>, or the organisation you write for, are <b>legally responsible</b> for the document.</p>
          <ul>
            <li><b>Contracts</b> are detailed, legally binding definitions of the specific terms of an agreement.</li>
            <li>A <b>lease</b> for an apartment or a car defines the responsibilities of the <b>lessee</b> and the <b>lessor</b>.</li>
            <li>An <b>employment contract</b> or <b>employee handbook</b> spells out what both employer and employee must do.</li>
          </ul>
        ` },
        { title: 'Ethical weight: Challenger', html: `
          <p class="lead">Definitions have <b>ethical implications</b> too. The <b>Challenger</b> disaster shows how one badly defined phrase, <b>acceptable risk</b>, cost seven lives.</p>
          <div class="kv">
            <div><span>Date</span><b>28 January 1986</b></div>
            <div><span>What happened</span><b>exploded 73 seconds after launch</b></div>
            <div><span>Crew lost</span><b>all seven</b></div>
            <div><span>Cause</span><b>two rubber O-ring seals</b> in a booster rocket failed</div>
          </div>
          <p>The failed O-rings let hot exhaust gases escape and ignite the adjacent fuel tank. Hours before launch, the engineers objected strongly. <b>Management</b> still decided the launch was "a risk worth taking".</p>
          <p>Management's definition of acceptable risk was based on <b>bureaucratic pressure</b> to launch on schedule, not on the <b>engineering facts</b>.</p>
          <p>Agreeing on meaning in such cases is rarely easy, but you are <b>ethically bound</b> to convey an <b>accurate interpretation of the facts</b> as you understand them.</p>
        ` },
        { title: 'Three types at a glance', html: `
          <p class="lead">Technical writing uses three types of definition. They differ in <b>how much detail</b> your audience needs to grasp your exact meaning.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Length</th><th>Formality</th><th>Use it when</th></tr></thead>
            <tbody>
              <tr><td><b>Parenthetical</b></td><td>a synonym or phrase in brackets, in-line</td><td>least formal</td><td>clarification or brief explanation</td></tr>
              <tr><td><b>Sentence</b></td><td>one or more sentences</td><td>more formal</td><td>more information than a parenthetical can offer, or a working definition</td></tr>
              <tr><td><b>Expanded</b></td><td>a long, paragraph definition</td><td>most formal</td><td>a more complete understanding</td></tr>
            </tbody>
          </table>
        ` },
      ],
      flashcards: [
        { front: 'Two things that decide which kind of definition you write?', back: 'Your <b>purpose</b> and your <b>audience</b>.' },
        { front: 'What does a definition establish between writer and reader?', back: '<b>Common ground</b>: everyone means the same thing by the term.' },
        { front: 'Why is precise definition a legal matter?', back: 'You or your organisation are <b>legally responsible</b> for the document.' },
        { front: 'A contract is a detailed, legally binding…', back: '<b>Definition</b> of the terms of an agreement.' },
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
        { name: 'Choosing a definition', html: `How much detail the audience requires → <b>parenthetical</b> · <b>sentence</b> · <b>expanded</b>`, note: 'Consider purpose and audience.' },
      ],
    },

    {
      id: 'm3-parenthetical',
      title: 'Parenthetical definitions',
      short: 'Parenthetical',
      blurb: 'The quickest kind of definition: a familiar synonym or a short clarifying phrase in brackets, right inside the sentence.',
      source: 'Technical Definitions',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">A <b>parenthetical definition</b> clarifies a word with a more familiar <b>synonym</b> or a short <b>clarifying phrase</b> placed in <b>parentheses</b>, inside the same sentence.</p>
          <p>It is the <b>least formal</b> of the three types, used <b>in-line</b> for a quick <b>clarification</b> or brief explanation. Two textbook examples:</p>
          <ul>
            <li>The <b>leaching field</b> (sieve-like drainage area) requires crushed stone.</li>
            <li>The trees on the site are mostly <b>deciduous</b> (shedding foliage at season's end).</li>
          </ul>
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
        ` },
      ],
      flashcards: [
        { front: 'A parenthetical definition uses a synonym or phrase placed in…', back: '<b>Parentheses</b> (brackets), inside the sentence.' },
        { front: 'How formal is a parenthetical definition?', back: 'The <b>least formal</b> of the three types.' },
        { front: 'Leaching field (…)', back: '(<b>sieve-like drainage area</b>)' },
        { front: 'Deciduous (…)', back: '(<b>shedding foliage at season\'s end</b>)' },
        { front: 'Voltaire was imprisoned in the Bastille (…)', back: '(<b>French fortress</b>)' },
        { front: 'How does a web page often show a parenthetical definition?', back: 'As a <b>link</b> that opens a small window with the definition.' },
        { front: 'When is a parenthetical definition enough?', back: 'When the reader needs only a <b>general idea</b> of the term.' },
      ],
      oneLiners: [
        'Parenthetical definition: a familiar <b>synonym</b> or clarifying phrase in <b>parentheses</b>, in-line.',
        'It is the <b>least formal</b> type, used for quick clarification.',
        'Examples: leaching field (sieve-like drainage area); deciduous (shedding foliage at season\'s end); Bastille (French fortress).',
        'Online, short definitions can be <b>linked</b> to the term in a pop-up window.',
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
      source: 'Technical Definitions; MCQ worksheet',
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
        ` },
        { title: 'Term, class, features', html: `
          <p class="lead">Begin by stating the <b>term</b>. Then name the broader <b>class</b> it belongs to. Then give the <b>distinguishing features</b> that separate it from the other members of that class.</p>
          <figure data-fig="m3-term-class-features"></figure>
          <table class="tbl">
            <thead><tr><th>Term</th><th>Class</th><th>Distinguishing features</th></tr></thead>
            <tbody>
              <tr><td>Carburettor</td><td><b>a mixing device</b></td><td>in gasoline engines that blends air and fuel into a vapour for combustion within the cylinders</td></tr>
              <tr><td>Diabetes</td><td><b>a metabolic disease</b></td><td>caused by a disorder of the pituitary gland or pancreas and characterised by excessive urination, persistent thirst and inability to metabolise sugar</td></tr>
              <tr><td>Stress</td><td><b>an applied force</b></td><td>that strains or deforms a body</td></tr>
              <tr><td>Bunsen burner</td><td><b>a small laboratory burner</b></td><td>consisting of a vertical metal tube connected to a gas source</td></tr>
              <tr><td>Neodymium magnet</td><td><b>a permanent magnet</b></td><td>made of a neodymium, boron and iron alloy</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Getting the class right', html: `
          <p class="lead">The deck's guidelines for definitions include three about the class and features.</p>
          <ul>
            <li><b>Classify the item precisely.</b> The narrower your class, the clearer your meaning. Stress is classified as an applied force; to say that stress "is what..." or "takes place when..." fails to denote a specific classification. Diabetes is precisely classified as <b>a metabolic disease</b>, not as a medical term.</li>
            <li><b>Differentiate the item accurately.</b> If the distinguishing features are too broad, they apply to more than the item you are defining. Defining <em>brief</em> as "a legal document used in court" fails to separate it from other legal documents (wills, affidavits and the like).</li>
            <li><b>Avoid circular definitions.</b> Do not repeat the word you are defining as part of the distinguishing feature. "Stress is an applied force that places stress on a body" is circular.</li>
          </ul>
        ` },
        { title: 'Sentences and working definitions', html: `
          <p class="lead">The three parts can be spread over <b>one or more complete sentences</b>. A sentence definition can also fix a <b>working definition</b> that holds for a whole document.</p>
          <h3>Two sentences</h3>
          <p>"<b>Diabetes</b> is a metabolic disease caused by a disorder of the pituitary gland or pancreas. This disease is characterized by excessive urination, persistent thirst, and inability to metabolize sugar."</p>
          <h3>Working definition</h3>
          <p>Useful when you'll use a term often and don't want to repeat what you mean:</p>
          <div class="note example"><p>"Throughout this document, the term <b>local fauna</b> refers to all animals within the tri-county region that are native to this region and live in the wild. Animals in zoos or wildlife parks are not included in this definition."</p></div>
          <p>The second sentence states what is <b>not included</b> in the definition.</p>
        ` },
        { title: 'Exercise: define everyday objects', html: `
          <p class="lead">The deck ends with an exercise: define the following items.</p>
          <ul><li>Pen</li><li>Laptop</li><li>University</li><li>Chair</li></ul>
          <p>The deck gives no answer key.</p>
        ` },
        { title: 'Reading dictionary definitions', html: `
          <p class="lead">The deck gives these example definitions (class in italics below).</p>
          <ul>
            <li><b>An apple</b> (noun) is <em>a rounded edible fruit</em>, usually red, yellow or green, that grows on a tree.</li>
            <li><b>A book</b> (noun) is <em>a set of written or printed sheets</em> bound together for reading.</li>
            <li><b>A mobile phone</b> is <em>a portable telephone</em> that uses a radio link and, unlike a landline, is not tied to one place.</li>
            <li><b>A cat</b> is <em>a small carnivorous mammal</em> (family Felidae) , one of the most popular pets, valued for companionship and its ability to hunt pests.</li>
            <li><b>Data science</b> is <em>a multidisciplinary field</em> that uses scientific methods and algorithms to extract insight from data.</li>
            <li><b>A community</b> is <em>a group of people</em> living in the same place or sharing a characteristic.</li>
          </ul>
          <p>Some examples go further than one sentence: "podium" adds the word's Latin and Greek roots, "television" adds that it is a powerful mass medium for entertainment, news and advertising, and "zoo" adds that modern zoos have a multi-faceted purpose.</p>
          <div class="note example"><p>The deck also has matching exercises: pick the right meaning of each word from two options (for example <b>bicycle</b>: a vehicle with two wheels and handlebars / a plane with two engines; <b>erase</b>: to decorate / to remove by rubbing away). The deck gives no answer key.</p></div>
        ` },
      ],
      flashcards: [
        { front: 'Standard pattern of a sentence definition?', back: '<b>Term</b> + <b>class</b> + <b>distinguishing features</b>.' },
        { front: 'Carburettor: class?', back: '<b>A mixing device</b>.' },
        { front: 'Stress: class and feature?', back: '<b>An applied force</b> that strains or deforms a body.' },
        { front: 'Diabetes: class?', back: '<b>A metabolic disease</b>.' },
        { front: 'Bunsen burner: class?', back: '<b>A small laboratory burner</b>.' },
        { front: 'Electron microscope: what distinguishes it?', back: 'It uses <b>electrons</b> rather than visible light.' },
        { front: '"Stress is an applied force that places stress on a body." The fault?', back: 'It is <b>circular</b>: the term is repeated in the distinguishing feature.' },
        { front: '"A brief is a legal document used in court." The fault?', back: 'The features are <b>too broad</b>: they fit wills and affidavits too.' },
        { front: 'What is a working definition?', back: 'A definition fixed <b>for the whole document</b>, so the term needn\'t be redefined.' },
        { front: 'Working definition of local fauna leaves out…', back: 'Animals in <b>zoos or wildlife parks</b>.' },
      ],
      oneLiners: [
        'Sentence definition = <b>term</b> + <b>class</b> + <b>distinguishing features</b>; more formal than parenthetical.',
        'The class is the broader category; the features separate the term from others in that class.',
        'Examples: stress, an applied force that strains or deforms a body; carburettor, a mixing device…',
        'The parts may run over two sentences (diabetes).',
        'A <b>working definition</b> fixes a term for a whole document ("local fauna", zoo animals excluded).',
        'Classify precisely, differentiate accurately and avoid circular definitions.',
      ],
      formulas: [
        { name: 'Sentence definition', html: `<b>Term</b> is <b>a/an [class]</b> that/which <b>[distinguishing features]</b>.`, note: 'Stress is an applied force that strains or deforms a body.' },
        { name: 'Working definition', html: `Throughout this document, the term <b>X</b> refers to <b>…</b>. <b>Y</b> is not included.`, note: 'Local fauna example: animals in zoos or wildlife parks are not included.' },
        { name: 'Class check', html: `<b>Classify precisely</b> (narrower class, clearer meaning); <b>differentiate accurately</b> (features must not fit other items); <b>avoid circular</b> definitions.` },
      ],
    },

    {
      id: 'm3-expanded',
      title: 'Expanded definitions and how to expand them',
      short: 'Expanded definitions',
      blurb: 'When a sentence is not enough: the nine methods for expanding a definition (etymology, history, negation, operating principle, parts, visuals, comparison, required conditions, examples), shown on one running example, the laser.',
      source: 'Technical Definitions',
      tabs: [
        { title: 'When to expand', html: `
          <p class="lead">An <b>expanded definition</b> is the <b>most formal</b> type: a <b>paragraph or longer</b>, with a very <b>flexible structure</b>, written when the reader needs a <b>complete understanding</b>.</p>
          <p>Brief definitions are fine when your audience needs only a general idea, as with "leaching field (sieve-like drainage area)" in a progress report to a house owner. A document that depends on the term, such as a <b>public health report</b> on groundwater contamination from leaching fields, needs more.</p>
          <div class="note example"><p>A health web page defines <b>allergenics</b> as two kinds of product, <b>patch tests</b> and <b>extracts</b>, then defines each in short sentences. Technical phrases are restated in plain words: <b>allergic rhinitis</b> becomes "hay fever". Because it is online, readers of any level can search for more and follow links to related definitions.</p></div>
          <p>Every expanded definition starts from a sentence definition. The running example in this topic is:</p>
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
            <li><b>Required conditions</b>: what is needed to make it work or occur?</li>
            <li><b>Examples</b>: how is it used or applied?</li>
          </ul>
        ` },
        { title: 'Etymology, history, negation', html: `
          <p class="lead">Three methods about the word's <b>story</b> and its <b>limits</b>.</p>
          <h3>Etymology: where the word comes from</h3>
          <p>A word's <b>origin</b> and changing meanings can clarify it. <b>Biometrics</b> (the statistical analysis of biological data) comes from Greek <b>bio</b>, "life", and <b>metron</b>, "measure". A dictionary gives the origin of most words.</p>
          <p>Some terms are <b>acronyms</b>, built from first letters: <b>laser</b> = <b>l</b>ight <b>a</b>mplification by <b>s</b>timulated <b>e</b>mission of <b>r</b>adiation.</p>
          <div class="note example"><p>"The word laser is an acronym for light amplification by stimulated emission of radiation, and is the name for an electronic device that emits a highly concentrated beam of light."</p></div>
          <h3>History: how it came about</h3>
          <p>Explain how the term, concept or procedure developed. Specialised dictionaries and encyclopedias are good sources. Example: early fibre-optic researchers lacked an intense light source and a clean transmission medium. The invention of the laser (<b>1960</b>) solved the first problem; the first communications-grade optical fibre of almost pure silica glass (<b>1970</b>) solved the second.</p>
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
          <p>Show <b>similarities</b> (comparison) or <b>differences</b> (contrast) with something familiar, to build a bridge from the known to the unknown. For example, fibre optics can be explained by comparing signal carriers: sound, radio and light waves can all carry signals, and capacity rises with frequency.</p>
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
      ],
    },

    {
      id: 'm3-placing',
      title: 'Placing definitions, glossaries and checking your definition',
      short: 'Placing & glossaries',
      blurb: 'Where each type of definition goes in a document, what a glossary is for, how to choose the right type for a reader, and the deck\'s guidelines for definitions.',
      source: 'Technical Definitions',
      tabs: [
        { title: 'Where definitions go', html: `
          <p class="lead">Define an unfamiliar term <b>the first time</b> the reader meets it. Where you put the definition depends on its type.</p>
          <ul>
            <li><b>Brief</b> (parenthetical) definitions go in <b>parentheses</b>, or in the document's <b>margin</b> beside the term.</li>
            <li><b>Sentence</b> definitions go in the <b>running text</b>; if there are many, put them in a <b>glossary</b>.</li>
            <li><b>Expanded</b> definitions go near the <b>beginning</b> of a long document if they are essential to the whole, or in an <b>appendix</b> if they are only for reference.</li>
          </ul>
        ` },
        { title: 'Glossaries', html: `
          <p class="lead">A <b>glossary</b> is an <b>alphabetical list</b> of specialised terms and their definitions. It gives <b>laypersons</b> the key definitions <b>without interrupting technical readers</b>.</p>
          <p>The deck shows a partial glossary from a document on childbirth. Each entry is the term in bold, a colon, then a short sentence-style definition (for example, <b>analgesic</b>: a medication given to relieve pain during the first stage of labor).</p>
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
        { title: 'Guidelines for definitions', html: `
          <p class="lead">The deck lists these <b>guidelines for definitions</b>.</p>
          <ol class="steps">
            <li><b>Decide on the level of detail you need.</b> How much does this audience need to follow your point?</li>
            <li><b>Classify the item precisely.</b> The narrower the class, the clearer the meaning.</li>
            <li><b>Differentiate the item accurately.</b> Features that are too broad apply to more than the item.</li>
            <li><b>Avoid circular definitions.</b> Do not repeat the word you are defining.</li>
            <li><b>Expand your definition selectively.</b> Begin with a sentence definition; choose the expansion strategies for your audience and purpose.</li>
            <li><b>Use visuals to clarify your meaning.</b></li>
            <li><b>Know "how much is enough".</b> Don't give needless details or spell out the obvious.</li>
            <li><b>Consider the legal implications</b> (e.g. what "unsatisfactory job performance" means in an evaluation).</li>
            <li><b>Consider the ethical implications</b> of fuzzy terms such as "safe levels of exposure" or "acceptable risk".</li>
            <li><b>Place your definition in an appropriate location</b>, with as little disruption as possible; on a Web site, have it appear in a new tab or window.</li>
            <li><b>Cite your sources as needed.</b></li>
          </ol>
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
    { id: 'm3-term-class-features', caption: 'A sentence definition in three parts: the term, the broader class it belongs to, and the features that set it apart in that class. Based on BAENG101 course material, VIT.', alt: 'The definition of stress split into three labelled blocks: term (stress), class (an applied force), distinguishing features (that strains or deforms a body).' },
    { id: 'm3-expansion-questions', caption: 'Each method of expanding a definition answers one question a reader might ask about the term. Based on BAENG101 course material, VIT.', alt: 'A list of nine reader questions, each joined to its expansion method, from etymology to examples.' },
    { id: 'm3-solenoid-plan', caption: 'How the solenoid definition for student mechanics combines several expansion methods, in order. Based on BAENG101 course material, VIT.', alt: 'Five stacked steps: sentence definition, etymology, description and parts with a diagram, operating principle, example.' },
  ],
});

FIGSVG({"m3-article-map":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 584\">\r\n  <g>\r\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"72\" rx=\"12\" class=\"df\"/>\r\n    <rect x=\"10\" y=\"10\" width=\"236\" height=\"72\" rx=\"12\" class=\"dfb\" fill-opacity=\".22\"/>\r\n    <text x=\"28\" y=\"55\" font-size=\"25\" class=\"dt\">Title, abstract</text>\r\n    <text x=\"262\" y=\"55\" font-size=\"24\" class=\"dt2\">What is it about, in brief?</text>\r\n    <rect x=\"10\" y=\"92\" width=\"580\" height=\"72\" rx=\"12\" class=\"df\"/>\r\n    <rect x=\"10\" y=\"92\" width=\"236\" height=\"72\" rx=\"12\" class=\"dfb\" fill-opacity=\".22\"/>\r\n    <text x=\"28\" y=\"137\" font-size=\"25\" class=\"dt\">Introduction</text>\r\n    <text x=\"262\" y=\"137\" font-size=\"24\" class=\"dt2\">Why was it done?</text>\r\n    <rect x=\"10\" y=\"174\" width=\"580\" height=\"72\" rx=\"12\" class=\"df\"/>\r\n    <rect x=\"10\" y=\"174\" width=\"236\" height=\"72\" rx=\"12\" class=\"dfb\" fill-opacity=\".22\"/>\r\n    <text x=\"28\" y=\"219\" font-size=\"25\" class=\"dt\">Methods</text>\r\n    <text x=\"262\" y=\"219\" font-size=\"24\" class=\"dt2\">How was it done?</text>\r\n    <rect x=\"10\" y=\"256\" width=\"580\" height=\"72\" rx=\"12\" class=\"df\"/>\r\n    <rect x=\"10\" y=\"256\" width=\"236\" height=\"72\" rx=\"12\" class=\"dfb\" fill-opacity=\".22\"/>\r\n    <text x=\"28\" y=\"301\" font-size=\"25\" class=\"dt\">Results</text>\r\n    <text x=\"262\" y=\"301\" font-size=\"24\" class=\"dt2\">What was found?</text>\r\n    <rect x=\"10\" y=\"338\" width=\"580\" height=\"72\" rx=\"12\" class=\"df\"/>\r\n    <rect x=\"10\" y=\"338\" width=\"236\" height=\"72\" rx=\"12\" class=\"dfb\" fill-opacity=\".22\"/>\r\n    <text x=\"28\" y=\"383\" font-size=\"25\" class=\"dt\">Discussion</text>\r\n    <text x=\"262\" y=\"383\" font-size=\"24\" class=\"dt2\">What does it mean?</text>\r\n    <rect x=\"10\" y=\"420\" width=\"580\" height=\"72\" rx=\"12\" class=\"df\"/>\r\n    <rect x=\"10\" y=\"420\" width=\"236\" height=\"72\" rx=\"12\" class=\"dfb\" fill-opacity=\".22\"/>\r\n    <text x=\"28\" y=\"465\" font-size=\"25\" class=\"dt\">Conclusion</text>\r\n    <text x=\"262\" y=\"465\" font-size=\"24\" class=\"dt2\">So what, and what next?</text>\r\n    <rect x=\"10\" y=\"502\" width=\"580\" height=\"72\" rx=\"12\" class=\"df\"/>\r\n    <rect x=\"10\" y=\"502\" width=\"236\" height=\"72\" rx=\"12\" class=\"dfb\" fill-opacity=\".22\"/>\r\n    <text x=\"28\" y=\"547\" font-size=\"25\" class=\"dt\">References</text>\r\n    <text x=\"262\" y=\"547\" font-size=\"24\" class=\"dt2\">Whose work was used?</text>\r\n  </g>\r\n</svg>","m3-comparison-patterns":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 450\">\n  <g>\n    <text x=\"10\" y=\"36\" font-size=\"28\" class=\"dt\">Point to point</text>\n    <rect x=\"10\" y=\"52\" width=\"580\" height=\"56\" rx=\"12\" class=\"df\"/>\n    <text x=\"28\" y=\"89\" font-size=\"25\" class=\"dt\">Criterion 1: A, then B</text>\n    <rect x=\"10\" y=\"118\" width=\"580\" height=\"56\" rx=\"12\" class=\"df\"/>\n    <text x=\"28\" y=\"155\" font-size=\"25\" class=\"dt\">Criterion 2: A, then B</text>\n    <rect x=\"10\" y=\"184\" width=\"580\" height=\"56\" rx=\"12\" class=\"df\"/>\n    <text x=\"28\" y=\"221\" font-size=\"25\" class=\"dt\">Criterion 3: A, then B</text>\n    <text x=\"10\" y=\"294\" font-size=\"28\" class=\"dt\">Whole to whole</text>\n    <rect x=\"10\" y=\"310\" width=\"580\" height=\"56\" rx=\"12\" class=\"df\"/>\n    <text x=\"28\" y=\"347\" font-size=\"25\" class=\"dt\">All of A: criteria 1, 2, 3</text>\n    <rect x=\"10\" y=\"376\" width=\"580\" height=\"56\" rx=\"12\" class=\"df\"/>\n    <text x=\"28\" y=\"413\" font-size=\"25\" class=\"dt\">All of B: same criteria, same order</text>\n  </g>\n</svg>","m3-definition-types":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 720\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker></defs>\n  <rect x=\"10\" y=\"10\" width=\"580\" height=\"150\" rx=\"16\" class=\"df\" />\n  <rect x=\"10\" y=\"10\" width=\"8\" height=\"150\" rx=\"4\" class=\"dfb\"/>\n  <text x=\"38\" y=\"50\" font-size=\"22\" class=\"dtb mono\">1 · PARENTHETICAL</text>\n  <text x=\"572\" y=\"50\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">least formal</text>\n  <text x=\"38\" y=\"94\" font-size=\"25\" class=\"dt\">The surgeon used a laser</text>\n  <text x=\"38\" y=\"130\" font-size=\"25\" class=\"dt2\">(a beam of intense light).</text>\n  <path d=\"M300 170v26\" class=\"ds2\" stroke-width=\"2.5\" marker-end=\"url(#a)\"/>\n  <rect x=\"10\" y=\"206\" width=\"580\" height=\"190\" rx=\"16\" class=\"df\" />\n  <rect x=\"10\" y=\"206\" width=\"8\" height=\"190\" rx=\"4\" class=\"dfo\"/>\n  <text x=\"38\" y=\"246\" font-size=\"22\" class=\"dto mono\">2 · SENTENCE</text>\n  <text x=\"572\" y=\"246\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">more formal</text>\n  <text x=\"38\" y=\"292\" font-size=\"25\" class=\"dt\">A laser is an electronic device</text>\n  <text x=\"38\" y=\"328\" font-size=\"25\" class=\"dt\">that emits a highly concentrated</text>\n  <text x=\"38\" y=\"364\" font-size=\"25\" class=\"dt\">beam of light.</text>\n  <path d=\"M300 406v26\" class=\"ds2\" stroke-width=\"2.5\" marker-end=\"url(#a)\"/>\n  <rect x=\"10\" y=\"442\" width=\"580\" height=\"268\" rx=\"16\" class=\"df\" />\n  <rect x=\"10\" y=\"442\" width=\"8\" height=\"268\" rx=\"4\" class=\"dfg\"/>\n  <text x=\"38\" y=\"482\" font-size=\"22\" class=\"dtg mono\">3 · EXPANDED</text>\n  <text x=\"572\" y=\"482\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">most formal</text>\n  <text x=\"38\" y=\"528\" font-size=\"25\" class=\"dt\">The sentence definition, then</text>\n  <text x=\"38\" y=\"564\" font-size=\"25\" class=\"dt\">a paragraph or more using</text>\n  <text x=\"38\" y=\"600\" font-size=\"25\" class=\"dt\">several methods:</text>\n  <rect x=\"38\" y=\"626\" width=\"150\" height=\"46\" rx=\"23\" class=\"df3\"/><text x=\"113\" y=\"657\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">etymology</text>\n  <rect x=\"200\" y=\"626\" width=\"112\" height=\"46\" rx=\"23\" class=\"df3\"/><text x=\"256\" y=\"657\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">parts</text>\n  <rect x=\"324\" y=\"626\" width=\"130\" height=\"46\" rx=\"23\" class=\"df3\"/><text x=\"389\" y=\"657\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">history</text>\n  <rect x=\"466\" y=\"626\" width=\"104\" height=\"46\" rx=\"23\" class=\"df3\"/><text x=\"518\" y=\"657\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">uses</text>\n</svg>\n","m3-expansion-questions":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 830\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker></defs>\n  <text x=\"10\" y=\"34\" font-size=\"22\" class=\"dt3 mono\">THE READER ASKS</text>\n  <text x=\"590\" y=\"34\" font-size=\"22\" text-anchor=\"end\" class=\"dt3 mono\">YOU ADD</text>\n  <g font-size=\"22\">\n    <text x=\"10\" y=\"96\" class=\"dt2\">How did its name start?</text>\n    <path d=\"M292 89h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"64\" width=\"256\" height=\"48\" rx=\"24\" class=\"dfb\" fill-opacity=\".18\"/><text x=\"462\" y=\"96\" text-anchor=\"middle\" class=\"dt\">Etymology</text>\n\n    <text x=\"10\" y=\"180\" class=\"dt2\">What is its history?</text>\n    <path d=\"M292 173h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"148\" width=\"256\" height=\"48\" rx=\"24\" class=\"dfb\" fill-opacity=\".18\"/><text x=\"462\" y=\"180\" text-anchor=\"middle\" class=\"dt\">History</text>\n\n    <text x=\"10\" y=\"264\" class=\"dt2\">What does it not mean?</text>\n    <path d=\"M292 257h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"232\" width=\"256\" height=\"48\" rx=\"24\" class=\"dfb\" fill-opacity=\".18\"/><text x=\"462\" y=\"264\" text-anchor=\"middle\" class=\"dt\">Negation</text>\n\n    <text x=\"10\" y=\"348\" class=\"dt2\">How does it work?</text>\n    <path d=\"M292 341h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"316\" width=\"256\" height=\"48\" rx=\"24\" class=\"dfo\" fill-opacity=\".18\"/><text x=\"462\" y=\"348\" text-anchor=\"middle\" class=\"dt\">Operating principle</text>\n\n    <text x=\"10\" y=\"432\" class=\"dt2\">What are its parts?</text>\n    <path d=\"M292 425h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"400\" width=\"256\" height=\"48\" rx=\"24\" class=\"dfo\" fill-opacity=\".18\"/><text x=\"462\" y=\"432\" text-anchor=\"middle\" class=\"dt\">Analysis of parts</text>\n\n    <text x=\"10\" y=\"516\" class=\"dt2\">What does it look like?</text>\n    <path d=\"M292 509h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"484\" width=\"256\" height=\"48\" rx=\"24\" class=\"dfo\" fill-opacity=\".18\"/><text x=\"462\" y=\"516\" text-anchor=\"middle\" class=\"dt\">Visuals</text>\n\n    <text x=\"10\" y=\"590\" class=\"dt2\">How is it like or unlike</text>\n    <text x=\"10\" y=\"618\" class=\"dt2\">something else?</text>\n    <path d=\"M292 597h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"560\" width=\"256\" height=\"74\" rx=\"24\" class=\"dfg\" fill-opacity=\".18\"/><text x=\"462\" y=\"592\" text-anchor=\"middle\" class=\"dt\">Comparison</text><text x=\"462\" y=\"620\" text-anchor=\"middle\" class=\"dt\">and contrast</text>\n\n    <text x=\"10\" y=\"686\" class=\"dt2\">What is needed to</text>\n    <text x=\"10\" y=\"714\" class=\"dt2\">make it work?</text>\n    <path d=\"M292 693h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"668\" width=\"256\" height=\"48\" rx=\"24\" class=\"dfg\" fill-opacity=\".18\"/><text x=\"462\" y=\"700\" text-anchor=\"middle\" class=\"dt\">Required conditions</text>\n\n    <text x=\"10\" y=\"786\" class=\"dt2\">How is it used?</text>\n    <path d=\"M292 779h32\" class=\"ds3\" stroke-width=\"2\" marker-end=\"url(#a)\"/>\n    <rect x=\"334\" y=\"754\" width=\"256\" height=\"48\" rx=\"24\" class=\"dfg\" fill-opacity=\".18\"/><text x=\"462\" y=\"786\" text-anchor=\"middle\" class=\"dt\">Examples</text>\n  </g>\n</svg>\n","m3-glossary-sample":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\">\n  <rect x=\"10\" y=\"10\" width=\"580\" height=\"500\" rx=\"16\" class=\"df\"/>\n  <text x=\"300\" y=\"60\" font-size=\"28\" text-anchor=\"middle\" class=\"dt mono\">GLOSSARY</text>\n  <path d=\"M40 82h520\" class=\"ds3\" stroke-width=\"2\"/>\n  <text x=\"40\" y=\"130\" font-size=\"25\" class=\"dt\"><tspan font-weight=\"700\">Ampere:</tspan><tspan class=\"dt2\"> the unit of electric</tspan></text>\n  <text x=\"40\" y=\"164\" font-size=\"25\" class=\"dt2\">current.</text>\n  <text x=\"40\" y=\"222\" font-size=\"25\" class=\"dt\"><tspan font-weight=\"700\">Bandwidth:</tspan><tspan class=\"dt2\"> the range of</tspan></text>\n  <text x=\"40\" y=\"256\" font-size=\"25\" class=\"dt2\">frequencies a channel carries.</text>\n  <text x=\"40\" y=\"314\" font-size=\"25\" class=\"dt\"><tspan font-weight=\"700\">Capacitor:</tspan><tspan class=\"dt2\"> a component</tspan></text>\n  <text x=\"40\" y=\"348\" font-size=\"25\" class=\"dt2\">that stores electric charge.</text>\n  <text x=\"40\" y=\"406\" font-size=\"25\" class=\"dt\"><tspan font-weight=\"700\">Diode:</tspan><tspan class=\"dt2\"> a component that</tspan></text>\n  <text x=\"40\" y=\"440\" font-size=\"25\" class=\"dt2\">lets current flow one way.</text>\n  <text x=\"560\" y=\"488\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">…</text>\n  <text x=\"20\" y=\"556\" font-size=\"22\" class=\"dtb mono\">A → Z</text>\n  <text x=\"112\" y=\"556\" font-size=\"22\" class=\"dt3\">term: short sentence definition</text>\n</svg>\n","m3-inference-equation":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 560\">\n  <defs>\n    <marker id=\"ag\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfg\"/></marker>\n  </defs>\n  <rect x=\"20\" y=\"10\" width=\"560\" height=\"130\" rx=\"16\" class=\"df2\"/>\n  <rect x=\"20\" y=\"10\" width=\"10\" height=\"130\" rx=\"4\" class=\"dfb\"/>\n  <text x=\"50\" y=\"56\" font-size=\"28\" font-weight=\"600\" class=\"dtb\">What the text says</text>\n  <text x=\"50\" y=\"92\" font-size=\"24\" class=\"dt2\">stated clues, facts, data</text>\n  <text x=\"50\" y=\"124\" font-size=\"22\" class=\"dt3\">\"Bosses sit on the top floors\"</text>\n\n  <text x=\"300\" y=\"186\" font-size=\"44\" font-weight=\"600\" text-anchor=\"middle\" class=\"dt\">+</text>\n\n  <rect x=\"20\" y=\"210\" width=\"560\" height=\"130\" rx=\"16\" class=\"df2\"/>\n  <rect x=\"20\" y=\"210\" width=\"10\" height=\"130\" rx=\"4\" class=\"dfo\"/>\n  <text x=\"50\" y=\"256\" font-size=\"28\" font-weight=\"600\" class=\"dto\">What you already know</text>\n  <text x=\"50\" y=\"292\" font-size=\"24\" class=\"dt2\">knowledge and experience</text>\n  <text x=\"50\" y=\"324\" font-size=\"22\" class=\"dt3\">\"Higher up usually means more senior\"</text>\n\n  <line x1=\"300\" y1=\"350\" x2=\"300\" y2=\"402\" class=\"dsg\" stroke-width=\"4\" marker-end=\"url(#ag)\"/>\n\n  <rect x=\"20\" y=\"414\" width=\"560\" height=\"136\" rx=\"16\" class=\"dfg\" fill-opacity=\".16\"/>\n  <rect x=\"20\" y=\"414\" width=\"560\" height=\"136\" rx=\"16\" fill=\"none\" class=\"dsg\" stroke-width=\"2\"/>\n  <text x=\"50\" y=\"460\" font-size=\"28\" font-weight=\"600\" class=\"dtg\">Inference</text>\n  <text x=\"50\" y=\"496\" font-size=\"24\" class=\"dt2\">a conclusion the clues support</text>\n  <text x=\"50\" y=\"530\" font-size=\"22\" class=\"dt3\">\"An office floor can signal rank\"</text>\n</svg>\n","m3-research-funnel":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 580\">\n  <rect x=\"10\" y=\"10\" width=\"580\" height=\"100\" rx=\"14\" class=\"df2\"/>\n  <text x=\"300\" y=\"52\" font-size=\"26\" font-weight=\"600\" text-anchor=\"middle\" class=\"dtb\">1 · Google or Bing</text>\n  <text x=\"300\" y=\"88\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">see what is out there, then narrow</text>\n\n  <rect x=\"40\" y=\"124\" width=\"520\" height=\"100\" rx=\"14\" class=\"df2\"/>\n  <text x=\"300\" y=\"166\" font-size=\"26\" font-weight=\"600\" text-anchor=\"middle\" class=\"dtp\">2 · Wikipedia</text>\n  <text x=\"300\" y=\"202\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">overview + its footnotes</text>\n\n  <rect x=\"70\" y=\"238\" width=\"460\" height=\"100\" rx=\"14\" class=\"df2\"/>\n  <text x=\"300\" y=\"280\" font-size=\"26\" font-weight=\"600\" text-anchor=\"middle\" class=\"dto\">3 · Google Scholar</text>\n  <text x=\"300\" y=\"316\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">peer-reviewed articles</text>\n\n  <rect x=\"100\" y=\"352\" width=\"400\" height=\"100\" rx=\"14\" class=\"df2\"/>\n  <text x=\"300\" y=\"394\" font-size=\"26\" font-weight=\"600\" text-anchor=\"middle\" class=\"dty\">4 · Library</text>\n  <text x=\"300\" y=\"430\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">OPAC and databases</text>\n\n  <rect x=\"130\" y=\"466\" width=\"340\" height=\"100\" rx=\"14\" class=\"dfg\" fill-opacity=\".16\"/>\n  <rect x=\"130\" y=\"466\" width=\"340\" height=\"100\" rx=\"14\" fill=\"none\" class=\"dsg\" stroke-width=\"2\"/>\n  <text x=\"300\" y=\"508\" font-size=\"26\" font-weight=\"600\" text-anchor=\"middle\" class=\"dtg\">5 · Record it</text>\n  <text x=\"300\" y=\"544\" font-size=\"22\" text-anchor=\"middle\" class=\"dt2\">URL, author, date, title</text>\n</svg>\n","m3-solenoid-plan":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 690\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker></defs>\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"112\" rx=\"14\" class=\"df\"/>\n    <circle cx=\"52\" cy=\"66\" r=\"24\" class=\"dfw\"/><text x=\"52\" y=\"75\" font-size=\"24\" text-anchor=\"middle\" class=\"mono\" style=\"fill:var(--bg)\">1</text>\n    <text x=\"94\" y=\"56\" font-size=\"25\" class=\"dt\">Sentence definition</text>\n    <text x=\"94\" y=\"94\" font-size=\"22\" class=\"dt2\">coil that forms an electromagnet</text>\n    <path d=\"M300 128v20\" class=\"ds2\" stroke-width=\"2.5\" marker-end=\"url(#a)\"/>\n\n    <rect x=\"10\" y=\"154\" width=\"580\" height=\"112\" rx=\"14\" class=\"df\"/>\n    <circle cx=\"52\" cy=\"210\" r=\"24\" class=\"dfw\"/><text x=\"52\" y=\"219\" font-size=\"24\" text-anchor=\"middle\" class=\"mono\" style=\"fill:var(--bg)\">2</text>\n    <text x=\"94\" y=\"200\" font-size=\"25\" class=\"dt\">Etymology</text>\n    <text x=\"94\" y=\"238\" font-size=\"22\" class=\"dt2\">\"sole\" + Greek: shaped like a pipe</text>\n    <path d=\"M300 272v20\" class=\"ds2\" stroke-width=\"2.5\" marker-end=\"url(#a)\"/>\n\n    <rect x=\"10\" y=\"298\" width=\"580\" height=\"112\" rx=\"14\" class=\"df\"/>\n    <circle cx=\"52\" cy=\"354\" r=\"24\" class=\"dfw\"/><text x=\"52\" y=\"363\" font-size=\"24\" text-anchor=\"middle\" class=\"mono\" style=\"fill:var(--bg)\">3</text>\n    <text x=\"94\" y=\"344\" font-size=\"25\" class=\"dt\">Parts + labelled diagram</text>\n    <text x=\"94\" y=\"382\" font-size=\"22\" class=\"dt2\">coil, plunger, return spring</text>\n    <path d=\"M300 416v20\" class=\"ds2\" stroke-width=\"2.5\" marker-end=\"url(#a)\"/>\n\n    <rect x=\"10\" y=\"442\" width=\"580\" height=\"112\" rx=\"14\" class=\"df\"/>\n    <circle cx=\"52\" cy=\"498\" r=\"24\" class=\"dfw\"/><text x=\"52\" y=\"507\" font-size=\"24\" text-anchor=\"middle\" class=\"mono\" style=\"fill:var(--bg)\">4</text>\n    <text x=\"94\" y=\"488\" font-size=\"25\" class=\"dt\">Operating principle</text>\n    <text x=\"94\" y=\"526\" font-size=\"22\" class=\"dt2\">current makes a magnet, pulls rod in</text>\n    <path d=\"M300 560v20\" class=\"ds2\" stroke-width=\"2.5\" marker-end=\"url(#a)\"/>\n\n    <rect x=\"10\" y=\"586\" width=\"580\" height=\"96\" rx=\"14\" class=\"df\"/>\n    <circle cx=\"52\" cy=\"634\" r=\"24\" class=\"dfw\"/><text x=\"52\" y=\"643\" font-size=\"24\" text-anchor=\"middle\" class=\"mono\" style=\"fill:var(--bg)\">5</text>\n    <text x=\"94\" y=\"626\" font-size=\"25\" class=\"dt\">Example</text>\n    <text x=\"94\" y=\"662\" font-size=\"22\" class=\"dt2\">a car's starter motor</text>\n  </g>\n</svg>\n","m3-stated-implied-unsupported":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 560\">\n  <defs>\n    <marker id=\"ad\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker>\n  </defs>\n  <line x1=\"34\" y1=\"24\" x2=\"34\" y2=\"520\" class=\"ds2\" stroke-width=\"3\" marker-end=\"url(#ad)\"/>\n  <text x=\"0\" y=\"0\" font-size=\"22\" text-anchor=\"middle\" class=\"dt3\" transform=\"translate(22 272) rotate(-90)\">further from the words</text>\n\n  <rect x=\"70\" y=\"10\" width=\"520\" height=\"160\" rx=\"16\" class=\"dfb\" fill-opacity=\".14\"/>\n  <rect x=\"70\" y=\"10\" width=\"520\" height=\"160\" rx=\"16\" fill=\"none\" class=\"dsb\" stroke-width=\"2\"/>\n  <text x=\"96\" y=\"56\" font-size=\"28\" font-weight=\"600\" class=\"dtb\">Stated</text>\n  <text x=\"96\" y=\"96\" font-size=\"24\" class=\"dt2\">The words are in the text.</text>\n  <text x=\"96\" y=\"140\" font-size=\"22\" class=\"dt3\">Test: you can point to one line.</text>\n\n  <rect x=\"70\" y=\"200\" width=\"520\" height=\"160\" rx=\"16\" class=\"dfy\" fill-opacity=\".14\"/>\n  <rect x=\"70\" y=\"200\" width=\"520\" height=\"160\" rx=\"16\" fill=\"none\" class=\"dsy\" stroke-width=\"2\"/>\n  <text x=\"96\" y=\"246\" font-size=\"28\" font-weight=\"600\" class=\"dty\">Can be inferred</text>\n  <text x=\"96\" y=\"286\" font-size=\"24\" class=\"dt2\">Clues + reasoning lead there.</text>\n  <text x=\"96\" y=\"330\" font-size=\"22\" class=\"dt3\">Test: you can name the clues.</text>\n\n  <rect x=\"70\" y=\"390\" width=\"520\" height=\"160\" rx=\"16\" class=\"dfr\" fill-opacity=\".14\"/>\n  <rect x=\"70\" y=\"390\" width=\"520\" height=\"160\" rx=\"16\" fill=\"none\" class=\"dsr\" stroke-width=\"2\"/>\n  <text x=\"96\" y=\"436\" font-size=\"28\" font-weight=\"600\" class=\"dtr\">Not supported</text>\n  <text x=\"96\" y=\"476\" font-size=\"24\" class=\"dt2\">Goes past or against the text.</text>\n  <text x=\"96\" y=\"520\" font-size=\"22\" class=\"dt3\">Test: no clue, or it contradicts.</text>\n</svg>\n","m3-term-class-features":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 640\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker></defs>\n  <text x=\"20\" y=\"36\" font-size=\"22\" class=\"dtb mono\">1 · TERM</text>\n  <text x=\"580\" y=\"36\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">what you define</text>\n  <rect x=\"10\" y=\"52\" width=\"580\" height=\"78\" rx=\"14\" class=\"dfb\" fill-opacity=\".16\"/>\n  <rect x=\"10\" y=\"52\" width=\"580\" height=\"78\" rx=\"14\" fill=\"none\" class=\"dsb\" stroke-width=\"2\"/>\n  <text x=\"300\" y=\"103\" font-size=\"28\" text-anchor=\"middle\" class=\"dt\">Stress</text>\n  <path d=\"M300 138v28\" class=\"ds2\" stroke-width=\"2.5\" marker-end=\"url(#a)\"/>\n  <text x=\"20\" y=\"206\" font-size=\"22\" class=\"dto mono\">2 · CLASS</text>\n  <text x=\"580\" y=\"206\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">the broader group</text>\n  <rect x=\"10\" y=\"222\" width=\"580\" height=\"78\" rx=\"14\" class=\"dfo\" fill-opacity=\".16\"/>\n  <rect x=\"10\" y=\"222\" width=\"580\" height=\"78\" rx=\"14\" fill=\"none\" class=\"dso\" stroke-width=\"2\"/>\n  <text x=\"300\" y=\"273\" font-size=\"28\" text-anchor=\"middle\" class=\"dt\">an applied force</text>\n  <path d=\"M300 308v28\" class=\"ds2\" stroke-width=\"2.5\" marker-end=\"url(#a)\"/>\n  <text x=\"20\" y=\"376\" font-size=\"22\" class=\"dtg mono\">3 · FEATURES</text>\n  <text x=\"580\" y=\"376\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">what sets it apart</text>\n  <rect x=\"10\" y=\"392\" width=\"580\" height=\"78\" rx=\"14\" class=\"dfg\" fill-opacity=\".16\"/>\n  <rect x=\"10\" y=\"392\" width=\"580\" height=\"78\" rx=\"14\" fill=\"none\" class=\"dsg\" stroke-width=\"2\"/>\n  <text x=\"300\" y=\"443\" font-size=\"28\" text-anchor=\"middle\" class=\"dt\">that strains or deforms a body</text>\n  <rect x=\"10\" y=\"500\" width=\"580\" height=\"130\" rx=\"14\" class=\"df\"/>\n  <text x=\"30\" y=\"540\" font-size=\"22\" class=\"dt3 mono\">TOGETHER</text>\n  <text x=\"30\" y=\"580\" font-size=\"25\" class=\"dt\"><tspan class=\"dtb\">Stress</tspan> is <tspan class=\"dto\">an applied force</tspan></text>\n  <text x=\"30\" y=\"614\" font-size=\"25\" class=\"dtg\">that strains or deforms a body.</text>\n</svg>\n"});
