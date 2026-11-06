CHUNK({
  chunk: 'N',
  module: 'm4',
  topics: [
    // =====================================================================
    // Module 4 Writing / Reviews
    // =====================================================================
    {
      id: 'm4-review-steps',
      title: 'Steps in reviewing and choosing a review type',
      short: 'Steps and choosing',
      blurb: 'The six steps of a systematic review, and how the shape of your research question (narrow cause-effect or broad and exploratory) points you to the right type of review.',
      source: 'Module 4 Writing / Reviews / Types of Reviews.pptx and Types of Reviews.pdf, slides 2 to 9',
      tabs: [
        { title: 'Why the type matters', html: `
          <p class="lead">A <b>review</b> collects what researchers have already found on a question. There are many types, and the right one depends on <b>what you are asking</b>, so you choose the type before you start searching.</p>
          <p>Pick the wrong type and the work does not fit the question: a loose summary cannot prove that coffee keeps people awake, and a strict search of every coffee study is overkill if you only want a general feel for workplace habits.</p>
          <div class="kv">
            <div><span>Narrow question</span><b>systematic review</b></div>
            <div><span>Broad question</span><b>scoping or literature review</b></div>
            <div><span>Where it shows up</span><b>papers, theses, project reports, CAT questions</b></div>
          </div>
          <div class="note exam"><p>A common question gives you a research question or a scenario and asks <b>which type of review fits, and why</b>. The reason is always about the question: narrow or broad, quick or thorough, numbers or themes.</p></div>
          <div class="note heads-up"><p>Not on the slides: the next topics give each type in turn. This one is the decision rule that ties them together.</p></div>
        ` },
        { title: 'The six steps', html: `
          <p class="lead">The slides give the process of conducting a <b>systematic review</b> as six steps, always in this order.</p>
          <ol class="steps">
            <li><b>Develop a research question</b> a clear, narrow question you can actually answer.</li>
            <li><b>Search the evidence</b> look through databases and other sources for every study that could answer it.</li>
            <li><b>Screen results</b> throw out the studies that do not fit your question.</li>
            <li><b>Assess for quality and bias</b> check whether each remaining study is sound and fair.</li>
            <li><b>Extract the data</b> pull out the facts you need from each study.</li>
            <li><b>Write the review</b> put the combined findings into one report.</li>
          </ol>
          <div class="note why"><p>The order is a funnel. The question comes first because it decides the search; screening comes before quality checks because there is no point judging a study you will not use; the data is extracted last because only trusted studies should feed the answer.</p></div>
          <div class="note exam"><p>You may be asked to <b>put the six steps in order</b> or say which step a given action belongs to. "Drop the studies on children" is <b>screening</b>; "check whether the sample was biased" is <b>quality and bias</b>.</p></div>
        ` },
        { title: 'Three questions, three answers', html: `
          <p class="lead">The slides test the idea with three research questions. Read the question and decide how wide it is.</p>
          <table class="tbl">
            <thead><tr><th>Question</th><th>Shape</th><th>Best review</th></tr></thead>
            <tbody>
              <tr><td>Does drinking coffee help people stay awake at work?</td><td>narrow, focused, cause and effect</td><td><b>Systematic review</b>: look at all the studies on coffee and alertness</td></tr>
              <tr><td>What workplace habits promote productivity in general?</td><td>broad, exploratory, many behaviours</td><td><b>Scoping review</b> or <b>literature review</b>: map and summarise wide-ranging evidence</td></tr>
              <tr><td>Which study techniques improve exam performance?</td><td>broad: spaced repetition, group study, digital tools</td><td><b>Literature review</b>: gather research from education, psychology and cognitive science</td></tr>
            </tbody>
          </table>
          <p>For the study-techniques question the slides add what the review delivers: it shows <b>which techniques the evidence supports</b> and <b>under what conditions</b> each works best.</p>
          <div class="vs">
            <div class="side"><h4>Narrow</h4><p>"Does coffee help people stay awake?" One cause, one effect. Answer it with a systematic review.</p></div>
            <div class="side"><h4>Broad</h4><p>"What habits make people productive?" Many causes, many effects. Map it with a scoping or literature review.</p></div>
          </div>
          <div class="note trap"><p>A broad question forced into a systematic review never finishes: there are too many studies, measures and habits to compare. A narrow question handled with a loose literature review gives no firm answer.</p></div>
        ` },
        { title: 'The chooser', html: `
          <p class="lead">Start from your question; the question points to the type. Each type is explained in the next topic.</p>
          <figure data-fig="m4-m-review-chooser"></figure>
          <ul>
            <li>A <b>cause-effect question</b> aimed at a specific answer: systematic review.</li>
            <li>A <b>broad topic</b> where you want to know what is out there: scoping or literature review.</li>
            <li>Several quantitative studies on the same question and you want <b>one overall number</b>: meta-analysis.</li>
            <li>A decision must be made <b>soon</b>: rapid review.</li>
            <li>The topic already has <b>many reviews</b>: umbrella review.</li>
            <li>Studies built on <b>interviews and experiences</b> rather than numbers: meta-synthesis (qualitative systematic review).</li>
            <li>You want to <b>judge</b> the literature and build a new idea: critical review.</li>
          </ul>
          <div class="note heads-up"><p>Not on the slides: the chooser draws the first six cues from the slides' own "purpose" lines for each type. The critical-review row comes from the slide on critical reviews and is added here so that every type in the next topic has a cue.</p></div>
        ` },
        { title: 'Worked: choose a type', html: `
          <p class="lead">Use three questions: how wide is it, how fast is it needed, and are the studies numbers or stories?</p>
          <div class="worked">
            <div class="given"><p>A hospital asks: "Does a daily 20-minute walk lower blood pressure in adults?" There are dozens of trials that all report blood-pressure readings.</p></div>
            <div class="solve"><p>Narrow, cause and effect, numerical results: <b>systematic review</b>. Because every trial reports the same kind of number, a <b>meta-analysis</b> can combine them into one effect.</p></div>
            <div class="result"><p>Systematic review, with a meta-analysis if the studies are similar enough.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>A student club wants to know "what is known about stress among first-year engineering students?" before planning a talk next week.</p></div>
            <div class="solve"><p>Broad topic and no strict research question: a <b>literature review</b> or <b>scoping review</b> to map the topic. Needing it within a week and only for a talk points to a light, flexible version, not a full systematic one.</p></div>
            <div class="result"><p>Literature (narrative) or scoping review.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>A health ministry must decide this month whether to change a vaccination schedule. Several systematic reviews already exist, in different countries.</p></div>
            <div class="solve"><p>A decision is needed quickly, and reviews already exist. A <b>rapid review</b> speeds up the evidence work for the decision; an <b>umbrella review</b> sums up the existing systematic reviews into one.</p></div>
            <div class="result"><p>Umbrella review if the reviews are enough; rapid review if new evidence must be checked fast.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: these three cases are our own examples, built from the slides' purpose lines for each type. In an exam, write the cue ("narrow", "urgent", "reviews already exist") and then the type.</p></div>
        ` },
      ],
      flashcards: [
        { front: `The six steps of a systematic review, in order?`, back: `<b>Question, search, screen, assess quality and bias, extract data, write.</b>` },
        { front: `A narrow cause-effect question suits which review?`, back: `A <b>systematic review</b>.` },
        { front: `A broad, exploratory question suits which reviews?`, back: `A <b>scoping review</b> or a <b>literature review</b>.` },
        { front: `"Which study techniques work best?" Which review?`, back: `A <b>literature review</b>: it shows what the evidence supports and when.` },
        { front: `Which step comes right after searching?`, back: `<b>Screening</b> the results.` },
        { front: `Why is quality and bias checked before data extraction?`, back: `So only <b>sound studies</b> feed the answer.` },
        { front: `Coffee and staying awake: what type of question is it?`, back: `<b>Narrow, focused, cause-effect</b>.` },
      ],
      oneLiners: [
        'Pick the review type from the <b>question</b>: narrow and causal, or broad and exploratory.',
        'Six steps: <b>question, search, screen, assess quality and bias, extract data, write</b>.',
        'Narrow cause-effect question (does coffee keep people awake?): <b>systematic review</b>.',
        'Broad question (what habits raise productivity?): <b>scoping or literature review</b>.',
        'A literature review of study techniques shows which are <b>supported by evidence</b> and <b>under what conditions</b>.',
        'Screening removes studies that do not fit; quality assessment checks the ones that do.',
        'In an exam answer name the cue in the question, then the review type.',
      ],
      formulas: [
        { name: 'Six steps of a systematic review', html: `<b>Question</b> → <b>Search</b> → <b>Screen</b> → <b>Assess quality and bias</b> → <b>Extract data</b> → <b>Write</b>` },
        { name: 'Choosing by question', html: `<b>Narrow, cause-effect</b> → systematic review · <b>Broad, exploratory</b> → scoping or literature review` },
      ],
    },

    {
      id: 'm4-review-types',
      title: 'Common types of literature reviews',
      short: 'Literature review types',
      blurb: 'Systematic, scoping, narrative, meta-analysis, rapid, umbrella, critical and qualitative (meta-synthesis) reviews, plus clinical practice guidelines: purpose, features and outcome of each.',
      source: 'Module 4 Writing / Reviews / Types of Reviews.pptx and Types of Reviews.pdf, slides 10 to 21 (slide 20 is a picture slide, a six-types card)',
      tabs: [
        { title: 'Systematic review', html: `
          <p class="lead">A <b>systematic review</b> answers one specific research question by searching for, judging and combining <b>all the relevant studies</b>, using strict, open methods.</p>
          <div class="kv">
            <div><span>Purpose</span><b>answer a specific research question comprehensively</b></div>
            <div><span>Method</span><b>rigorous, transparent, with quality assessment of each study</b></div>
            <div><span>Aim</span><b>reproducibility: someone else can repeat it</b></div>
            <div><span>Result</span><b>evidence-based conclusions and a list of knowledge gaps</b></div>
          </div>
          <h3>How the slides define it</h3>
          <ul>
            <li>An <b>authoritative account</b> of existing evidence, using reliable, objective, thorough and reproducible practices.</li>
            <li>A way of <b>making sense of large bodies of information</b>, helping answer what works and what does not.</li>
            <li>It <b>maps areas of uncertainty</b>: it shows where little or no research exists and new studies are needed.</li>
          </ul>
          <div class="note why"><p>"Systematic" means you can show the steps. Because the search, the inclusion rules and the quality checks are written down, a different team should reach the same set of studies, which is what makes the conclusion trustworthy.</p></div>
          <div class="note exam"><p>The marks words: <b>specific question, comprehensive search, explicit methods, quality assessment, reproducible</b>.</p></div>
        ` },
        { title: 'Scoping and narrative', html: `
          <p class="lead">Two reviews that cover a wide topic. A <b>scoping review</b> maps it; a <b>narrative review</b> tells the story of it.</p>
          <div class="vs">
            <div class="side">
              <h4>Scoping review</h4>
              <p><b>Purpose:</b> map the existing literature on a broad topic to find <b>key concepts, types of evidence and research gaps</b>.</p>
              <p><b>Features:</b> broad scope; may not assess quality formally; useful for the exploratory stage.</p>
              <p><b>Outcome:</b> an overview of the field that guides future research or a later systematic review.</p>
            </div>
            <div class="side">
              <h4>Narrative (traditional) review</h4>
              <p><b>Purpose:</b> summarise and interpret the literature on a topic <b>without systematic search methods</b>.</p>
              <p><b>Features:</b> flexible structure; may include expert opinion; <b>prone to bias</b>.</p>
              <p><b>Outcome:</b> a contextual understanding, but less rigorous than a systematic review.</p>
            </div>
          </div>
          <div class="note why"><p>Both trade rigour for breadth. A scoping review is still done with a systematic approach to mapping; a narrative review has no fixed search at all, so the author's choices (and opinions) shape what is included.</p></div>
          <div class="note trap"><p>"Narrative" does not mean "fiction". It means the author tells a connected account of the literature in prose. The picture card on a later tab treats "literature review" as another name for it.</p></div>
        ` },
        { title: 'Meta-analysis and rapid', html: `
          <p class="lead">A <b>meta-analysis</b> adds up numbers; a <b>rapid review</b> saves time.</p>
          <div class="vs">
            <div class="side">
              <h4>Meta-analysis</h4>
              <p><b>Purpose:</b> statistically <b>combine data</b> from several quantitative studies that ask similar questions.</p>
              <p><b>Features:</b> often a part of a systematic review; uses statistical methods to get <b>pooled estimates</b>.</p>
              <p><b>Outcome:</b> a <b>summary effect size</b> and an assessment of <b>variability</b> between studies.</p>
            </div>
            <div class="side">
              <h4>Rapid review</h4>
              <p><b>Purpose:</b> pull evidence together <b>quickly</b> for an urgent decision.</p>
              <p><b>Features:</b> streamlined methods; smaller scope; less time for search and appraisal.</p>
              <p><b>Outcome:</b> timely, but possibly <b>less complete and less detailed</b>.</p>
            </div>
          </div>
          <h3>The meta-analysis in three lines (slide 16)</h3>
          <ul>
            <li>Combines data from different studies on the same topic.</li>
            <li>Uses maths to get an <b>overall answer</b>.</li>
            <li>Gives a summary of the results and shows <b>how much they vary</b>.</li>
          </ul>
          <div class="note exam"><p>Meta-analysis is the only type here whose key word is <b>statistics</b>. If the scenario talks about pooling numbers or "effect size", the answer is meta-analysis.</p></div>
        ` },
        { title: 'Umbrella, critical and meta-synthesis', html: `
          <p class="lead">Three more types, each with its own job.</p>
          <div class="kv">
            <div><span>Umbrella review</span><b>summarises evidence from several systematic reviews on a broad topic</b></div>
            <div><span>Critical review</span><b>critiques and evaluates the literature to build new conceptual insight</b></div>
            <div><span>Meta-synthesis</span><b>combines the findings of qualitative studies into themes or theories</b></div>
          </div>
          <h3>Umbrella review</h3>
          <p>It <b>reviews the reviews</b> and works with synthesised evidence rather than single studies. The result is a <b>high-level summary for decision-makers</b>.</p>
          <h3>Critical review</h3>
          <p>Focus on <b>analysis and theory development</b>; it may interpret findings that conflict. It advances theoretical understanding.</p>
          <h3>Qualitative systematic review (meta-synthesis)</h3>
          <p>It synthesises findings from qualitative studies to produce <b>integrated themes or theories</b>. The emphasis is a <b>thematic, narrative synthesis</b> rather than quantitative data, and it gives a deeper understanding of experiences, attitudes or concepts.</p>
          <div class="note trap"><p>Do not mix up <b>meta-analysis</b> (numbers from quantitative studies) with <b>meta-synthesis</b> (themes from qualitative studies). Both combine studies; the type of data is the difference.</p></div>
        ` },
        { title: 'The six-type card', html: `
          <p class="lead">The slides include a picture card of "six common types of reviews" from a medical library. It gives the shortest version of each.</p>
          <ol>
            <li><b>Narrative review</b> also called a literature review. It looks at literature across a specific topic and synthesises what you have learned. It can use one database or several. You need not be a subject expert, but you should have a good concept of the topic once it is done.</li>
            <li><b>Scoping review</b> a knowledge synthesis that follows a systematic approach; maps evidence on a topic and identifies the main concepts, theories, sources and knowledge gaps.</li>
            <li><b>Systematic review</b> uses explicit methods to collect all evidence that fits <b>pre-specified eligibility criteria</b>; answers a specific question; the method aims to reduce bias; a meta-analysis may combine the data from suitable systematic reviews.</li>
            <li><b>Rapid review</b> a knowledge synthesis that speeds up a traditional systematic review by streamlining or omitting steps, to give stakeholders evidence in a resource-efficient way.</li>
            <li><b>Umbrella review</b> a review of reviews: it synthesises evidence from other published systematic reviews and meta-analyses on a broad topic.</li>
            <li><b>Clinical practice guidelines</b> recommendations meant to optimise patient care, often informed by several systematic reviews aimed at each point in the guideline; they weigh the benefits and harms of alternative care options.</li>
          </ol>
          <h3>The closing slide (slide 21), one line each</h3>
          <ul>
            <li>Narrative: summarise and interpret without systematic methods; flexible but less rigorous.</li>
            <li>Scoping: systematically map evidence and gaps; broad exploratory scope.</li>
            <li>Systematic: explicit, reproducible methods for a specific question; rigorous quality appraisal.</li>
            <li>Rapid: accelerated systematic review for timely decisions.</li>
            <li>Umbrella: evidence from multiple systematic reviews on a broad topic.</li>
            <li>Clinical practice guidelines: evidence-based recommendations for clinical decisions.</li>
          </ul>
        ` },
        { title: 'Compare them', html: `
          <p class="lead">One table to learn the types side by side.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Question or purpose</th><th>Rigour</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td><b>Systematic</b></td><td>one specific question</td><td>high, reproducible, quality checks</td><td>evidence-based conclusions, gaps</td></tr>
              <tr><td><b>Scoping</b></td><td>map a broad topic</td><td>no formal quality assessment</td><td>concepts, evidence types, gaps</td></tr>
              <tr><td><b>Narrative</b></td><td>summarise and interpret</td><td>flexible, prone to bias</td><td>contextual understanding</td></tr>
              <tr><td><b>Meta-analysis</b></td><td>combine quantitative data</td><td>statistical, usually inside a systematic review</td><td>pooled effect size, variability</td></tr>
              <tr><td><b>Rapid</b></td><td>urgent decision</td><td>streamlined methods</td><td>timely but less complete</td></tr>
              <tr><td><b>Umbrella</b></td><td>sum up many reviews</td><td>works on synthesised evidence</td><td>high-level summary</td></tr>
              <tr><td><b>Critical</b></td><td>critique, build theory</td><td>analysis-led</td><td>new conceptual insight</td></tr>
              <tr><td><b>Meta-synthesis</b></td><td>combine qualitative studies</td><td>thematic synthesis</td><td>integrated themes or theories</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: the "rigour" column is our shorthand for the features each slide lists. The slide numbering is uneven (only the umbrella review carries a number, and critical and qualitative reviews share a slide), so learn purposes, not numbers.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Aim of a systematic review?`, back: `Answer a <b>specific question</b> by searching, judging and combining <b>all relevant studies</b> with clear, repeatable methods.` },
        { front: `Why is a systematic review called "reproducible"?`, back: `Its search and selection rules are <b>written down</b>, so others can repeat it.` },
        { front: `Scoping review: purpose?`, back: `<b>Map</b> a broad topic: key concepts, types of evidence, gaps.` },
        { front: `Narrative review: main weakness?`, back: `No systematic search, so it is <b>prone to bias</b>.` },
        { front: `Meta-analysis outputs?`, back: `A <b>pooled summary effect size</b> and how much results <b>vary</b>.` },
        { front: `Rapid review trade-off?`, back: `<b>Timely</b> but <b>less comprehensive</b>.` },
        { front: `An umbrella review is a review of what?`, back: `Other <b>systematic reviews</b> (a "review of reviews").` },
        { front: `Critical review focuses on?`, back: `<b>Analysis and theory development</b>; it can interpret conflicting findings.` },
        { front: `Meta-synthesis combines what kind of studies?`, back: `<b>Qualitative</b> studies, into integrated themes or theories.` },
        { front: `What are clinical practice guidelines?`, back: `<b>Evidence-based recommendations</b> built from systematic syntheses, for clinical decisions.` },
      ],
      oneLiners: [
        'Systematic: one specific question, <b>comprehensive search</b>, quality assessment, reproducible.',
        'Scoping: <b>maps</b> a broad topic and finds gaps; no formal quality assessment.',
        'Narrative (traditional): flexible summary, may include expert opinion, <b>prone to bias</b>.',
        'Meta-analysis: <b>statistically combines</b> quantitative studies into a pooled effect size.',
        'Rapid: streamlined, quick, <b>less complete</b>.',
        'Umbrella: a <b>review of reviews</b> for decision-makers.',
        'Critical review builds <b>new concepts</b>; meta-synthesis builds <b>themes</b> from qualitative studies.',
      ],
      formulas: [
        { name: 'Type by one cue', html: `<b>Specific question</b> → systematic · <b>Map</b> → scoping · <b>Pool numbers</b> → meta-analysis · <b>Urgent</b> → rapid · <b>Reviews of reviews</b> → umbrella` },
        { name: 'Describing any type', html: `<b>Purpose</b> + <b>features</b> (method, rigour) + <b>outcome</b>` },
      ],
    },
    {
      id: 'm4-review-typologies',
      title: 'Review typologies: the Grant and Booth table',
      short: 'Review typologies',
      blurb: 'The table of review types from Grant and Booth (2009): for each type, its description, how it searches, how it appraises quality, how it synthesises and how it analyses.',
      source: 'Module 4 Writing / Reviews / Review Typologies.docx (table reproduced from Grant, M. J. and Booth, A., 2009)',
      tabs: [
        { title: 'How to read the table', html: `
          <p class="lead">The Drive table sets out the review types used in <b>evidence synthesis projects</b>, each described on the same five features, so you can compare them fairly.</p>
          <div class="kv">
            <div><span>Description</span><b>what the review aims to do</b></div>
            <div><span>Search</span><b>how complete the search must be</b></div>
            <div><span>Appraisal</span><b>whether the quality of studies is judged</b></div>
            <div><span>Synthesis</span><b>how findings are put together and shown</b></div>
            <div><span>Analysis</span><b>what the review concludes</b></div>
          </div>
          <p>The source is <b>Grant, M. J. and Booth, A. (2009)</b>. Evidence synthesis means more than systematic reviews: the table lists many other types and their methods.</p>
          <div class="note heads-up"><p>Not on the slides: the intro says the table has 14 review types, but the Drive file lists 13 rows. The original paper also includes an "overview" type, which this copy leaves out. Learn the 13 below; if you meet "overview" in another source, it is the same idea of a broad survey of a topic.</p></div>
          <div class="note exam"><p>You will not be asked to reproduce all 13 rows. You may be asked to <b>compare two</b> (for example systematic and rapid) on search and appraisal, so learn the pattern, not every cell.</p></div>
        ` },
        { title: 'Critical to mixed studies', html: `
          <p class="lead">Five types, from the opinion-led critical review to the combined mixed studies review.</p>
          <h3>Critical review</h3>
          <ul>
            <li><b>Aim:</b> show wide reading and <b>critically evaluate its quality</b>, going beyond description to analysis and conceptual innovation; usually ends in a <b>hypothesis or model</b>.</li>
            <li><b>Search:</b> seeks the most significant items in the field. <b>Appraisal:</b> no formal quality assessment; judges by contribution.</li>
            <li><b>Synthesis:</b> narrative, perhaps conceptual or chronological. <b>Analysis:</b> a significant part; finds each item's contribution and derives new findings.</li>
          </ul>
          <h3>Literature review</h3>
          <ul>
            <li><b>Aim:</b> a generic term for published material that examines recent or current literature, on a wide range of subjects and levels of completeness.</li>
            <li><b>Search and appraisal:</b> may or may not be comprehensive; may or may not assess quality. <b>Synthesis:</b> typically narrative. <b>Analysis:</b> may be chronological, conceptual, and so on.</li>
          </ul>
          <h3>Mapping review or systematic map</h3>
          <ul>
            <li><b>Aim:</b> map and categorise existing literature to find <b>research gaps</b>, which may lead to further reviews or new research.</li>
            <li><b>Search:</b> completeness set by time and scope. <b>Appraisal:</b> none formal. <b>Synthesis:</b> may be graphical and tabular. <b>Analysis:</b> describes the literature, including study design.</li>
          </ul>
          <h3>Meta-analysis</h3>
          <ul>
            <li><b>Aim:</b> statistically combine results of quantitative studies for a <b>more precise effect</b>.</li>
            <li><b>Search:</b> exhaustive; may use a <b>funnel plot</b> to check completeness. <b>Appraisal:</b> quality may decide inclusion or feed sensitivity analyses.</li>
            <li><b>Synthesis:</b> graphs and tables with narrative comment. <b>Analysis:</b> numerical, measures of effect, often assuming no heterogeneity.</li>
          </ul>
          <h3>Mixed studies or mixed methods review</h3>
          <ul>
            <li><b>Aim:</b> a combination of methods in which a (usually systematic) literature review is a major part; often joins quantitative with qualitative research.</li>
            <li><b>Search:</b> a very sensitive search to catch all studies, or separate quantitative and qualitative strategies. <b>Appraisal:</b> one generic tool, or separate checklists.</li>
            <li><b>Synthesis:</b> narrative and tables, maybe graphical integration. <b>Analysis:</b> may characterise literatures, look for correlations and do a <b>gap analysis</b> where one literature has an aspect the other lacks.</li>
          </ul>
        ` },
        { title: 'Qualitative to state-of-the-art', html: `
          <p class="lead">Four types: the themes review, the quick review, the preliminary map and the up-to-date review.</p>
          <h3>Qualitative systematic review (qualitative evidence synthesis)</h3>
          <ul>
            <li><b>Aim:</b> integrate or compare findings from qualitative studies, looking for <b>themes or constructs</b> within and across studies.</li>
            <li><b>Search:</b> may use selective or purposive sampling. <b>Appraisal:</b> quality is used to <b>mediate the messages</b>, not to include or exclude.</li>
            <li><b>Synthesis:</b> qualitative, narrative. <b>Analysis:</b> thematic; may include conceptualisation.</li>
          </ul>
          <h3>Rapid review</h3>
          <ul>
            <li><b>Aim:</b> assess what is known on a policy or practice issue, using systematic review methods for searching and critical appraisal.</li>
            <li><b>Search:</b> completeness set by <b>time</b>. <b>Appraisal:</b> a time-limited formal quality assessment.</li>
            <li><b>Synthesis:</b> narrative and tabular. <b>Analysis:</b> quantifies the overall quality, direction and effect of the literature.</li>
          </ul>
          <h3>Scoping review</h3>
          <ul>
            <li><b>Aim:</b> a preliminary assessment of the <b>size and scope</b> of the available research, to find the nature and extent of evidence (usually including ongoing research).</li>
            <li><b>Search:</b> completeness set by time and scope; may include <b>research in progress</b>. <b>Appraisal:</b> none formal.</li>
            <li><b>Synthesis:</b> tabular with some narrative. <b>Analysis:</b> describes the literature and its quality and design; tries to find reviews that are viable.</li>
          </ul>
          <h3>State-of-the-art review</h3>
          <ul>
            <li><b>Aim:</b> deals with <b>more current matters</b> (not a mix of old and new) and may offer new perspectives.</li>
            <li><b>Search:</b> comprehensive search of current literature. <b>Appraisal:</b> none formal. <b>Synthesis:</b> narrative, maybe with tables.</li>
            <li><b>Analysis:</b> the current state of knowledge and priorities for future investigation.</li>
          </ul>
        ` },
        { title: 'Systematic to umbrella', html: `
          <p class="lead">Four types that all lean on systematic methods, to different degrees.</p>
          <h3>Systematic review</h3>
          <ul>
            <li><b>Aim:</b> systematically search for, appraise and synthesise research evidence, often following guidelines.</li>
            <li><b>Search:</b> exhaustive. <b>Appraisal:</b> quality may decide inclusion. <b>Synthesis:</b> typically narrative with tables.</li>
            <li><b>Analysis:</b> what is known, <b>recommendations for practice</b>, what remains unknown or uncertain, and suggestions for future research.</li>
          </ul>
          <h3>Systematic search and review</h3>
          <ul>
            <li><b>Aim:</b> joins the strengths of a critical review with a <b>comprehensive search</b>; usually broad questions, giving a <b>best evidence synthesis</b>.</li>
            <li><b>Search:</b> exhaustive. <b>Appraisal:</b> may or may not. <b>Synthesis:</b> minimal narrative, a tabular summary of studies.</li>
            <li><b>Analysis:</b> what is known, with (limited) recommendations for practice.</li>
          </ul>
          <h3>Systematized review</h3>
          <ul>
            <li><b>Aim:</b> tries to include <b>some elements</b> of a systematic review.</li>
            <li><b>Search and appraisal:</b> may or may not be comprehensive; may or may not assess quality. <b>Synthesis:</b> narrative with tables. <b>Analysis:</b> what is known and what is uncertain.</li>
          </ul>
          <h3>Umbrella review</h3>
          <ul>
            <li><b>Aim:</b> compile evidence from <b>multiple reviews</b> into one accessible document, on a broad condition or problem with competing interventions.</li>
            <li><b>Search:</b> identifies the component reviews, with <b>no search for primary studies</b>. <b>Appraisal:</b> quality of studies inside the reviews, and/or of the reviews themselves.</li>
            <li><b>Synthesis:</b> graphs and tables with narrative. <b>Analysis:</b> what is known, recommendations for practice, what is unknown, future research.</li>
          </ul>
        ` },
        { title: 'Compare by feature', html: `
          <p class="lead">Two columns of the table sort the types quickly: how complete the search is, and whether quality is formally judged.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Search</th><th>Formal quality assessment</th></tr></thead>
            <tbody>
              <tr><td><b>Meta-analysis</b></td><td>exhaustive</td><td>may decide inclusion</td></tr>
              <tr><td><b>Systematic review</b></td><td>exhaustive</td><td>may decide inclusion</td></tr>
              <tr><td><b>Systematic search and review</b></td><td>exhaustive</td><td>may or may not</td></tr>
              <tr><td><b>State-of-the-art</b></td><td>comprehensive, current</td><td>no</td></tr>
              <tr><td><b>Rapid review</b></td><td>limited by time</td><td>time-limited</td></tr>
              <tr><td><b>Mapping, scoping</b></td><td>limited by time and scope</td><td>no</td></tr>
              <tr><td><b>Literature, systematized</b></td><td>may or may not be comprehensive</td><td>may or may not</td></tr>
              <tr><td><b>Critical</b></td><td>most significant items</td><td>no; judged by contribution</td></tr>
              <tr><td><b>Qualitative evidence synthesis</b></td><td>selective or purposive</td><td>used to mediate, not exclude</td></tr>
              <tr><td><b>Umbrella</b></td><td>finds reviews, not primary studies</td><td>of studies in the reviews and/or the reviews</td></tr>
              <tr><td><b>Mixed studies</b></td><td>very sensitive, or separate strategies</td><td>generic tool or separate checklists</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Search and appraisal are where rigour comes from. A review that searches exhaustively and judges quality is the most defensible; one that skips both is quick but open to the author's bias.</p></div>
        ` },
        { title: 'Worked: look-alike pairs', html: `
          <p class="lead">Exams like pairs that sound alike. Use the search and appraisal columns to split them.</p>
          <div class="worked">
            <div class="given"><p>How do a <b>scoping review</b> and a <b>mapping review</b> differ in the table?</p></div>
            <div class="solve"><p>Almost not at all: both have a search limited by time and scope, no formal quality assessment, and tabular or graphical synthesis. The scoping review adds that it may include <b>research in progress</b> and aims to find the <b>size and scope</b> of the field; the mapping review aims at <b>categorising</b> the literature and finding gaps.</p></div>
            <div class="result"><p>Same family; scoping asks "how much is there?", mapping asks "what groups does it fall into and where are the gaps?".</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>How do a <b>systematic review</b> and a <b>systematized review</b> differ?</p></div>
            <div class="solve"><p>The systematic review searches <b>exhaustively</b> and may use quality to include or exclude studies. The systematized review only <b>borrows some</b> of those elements: its search and quality assessment may or may not be comprehensive.</p></div>
            <div class="result"><p>Systematic is complete and rule-bound; systematized is partial.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>How do a <b>rapid review</b> and a <b>systematic review</b> differ on search?</p></div>
            <div class="solve"><p>Both use systematic methods, but the rapid review's completeness is <b>determined by time</b> and its quality assessment is <b>time-limited</b>; the systematic review aims for exhaustive searching.</p></div>
            <div class="result"><p>Rapid trades completeness for speed.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: the three comparisons are our own readings of the table's cells. They are the sort of answer an examiner credits: say what is the same, then the one cell that differs.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Whose 2009 table lists the review types?`, back: `<b>Grant and Booth</b> (2009).` },
        { front: `Which review has "no search for primary studies"?`, back: `The <b>umbrella review</b>: it finds reviews, not studies.` },
        { front: `Which types have no formal quality assessment?`, back: `<b>Critical, mapping, scoping, state-of-the-art.</b>` },
        { front: `Which review may use a funnel plot?`, back: `The <b>meta-analysis</b>, to judge whether the search was complete.` },
        { front: `Critical review ends in what?`, back: `Usually a <b>hypothesis or model</b>.` },
        { front: `What is a mixed studies review?`, back: `A review joining <b>quantitative and qualitative</b> research, with a literature review as a major part.` },
        { front: `State-of-the-art review: focus?`, back: `<b>Current</b> knowledge and priorities for future work.` },
        { front: `Systematic search and review: what does it combine?`, back: `A <b>critical review</b> with a <b>comprehensive search</b>.` },
        { front: `Rapid review: why limited?`, back: `Search and quality assessment are set by <b>time</b>.` },
      ],
      oneLiners: [
        'The Grant and Booth table compares review types on <b>description, search, appraisal, synthesis, analysis</b>.',
        'Systematic review: <b>exhaustive search</b>, quality may decide inclusion, gives recommendations and gaps.',
        'Scoping and mapping reviews: search limited by time and scope, <b>no formal quality assessment</b>.',
        'Meta-analysis: numerical analysis of effect, may use a <b>funnel plot</b> to check search completeness.',
        'Umbrella review: finds reviews, <b>not primary studies</b>; appraises the reviews.',
        'Qualitative evidence synthesis: themes and constructs; quality used to <b>mediate</b>, not to exclude.',
        'Systematized review borrows <b>some elements</b> of a systematic review.',
      ],
      formulas: [
        { name: 'Five columns of the typology', html: `<b>Description</b> · <b>Search</b> · <b>Appraisal</b> · <b>Synthesis</b> · <b>Analysis</b>` },
        { name: 'Splitting look-alike types', html: `Say what is <b>the same</b>, then the <b>one feature that differs</b> (search, appraisal or synthesis).` },
      ],
    },

    {
      id: 'm4-review-genres',
      title: 'Other reviews: peer, book, film, product and reflective',
      short: 'Other kinds of reviews',
      blurb: 'Reviews that are not literature reviews: peer review (single and double blind), book, film and product reviews, the reflective review and the programme evaluation, with the clues that identify each.',
      source: 'Module 4 Writing / Reviews / Review Types Revision.docx (matching items 4 and 6, Part 2 and scenarios) and Types of Reviews - Activity.xlsx (five sample reviews)',
      tabs: [
        { title: 'One word, many jobs', html: `
          <p class="lead">The word "review" covers more than a literature survey. It also names a <b>judgement on someone's work</b>, a <b>recommendation about a product</b> and a <b>look back at your own learning</b>.</p>
          <table class="tbl">
            <thead><tr><th>Kind</th><th>Looks at</th><th>Main purpose</th></tr></thead>
            <tbody>
              <tr><td><b>Literature review</b></td><td>published studies</td><td>show what is known</td></tr>
              <tr><td><b>Peer review</b></td><td>a manuscript</td><td>decide whether it deserves publication</td></tr>
              <tr><td><b>Book review</b></td><td>a book</td><td>evaluate its arguments and value</td></tr>
              <tr><td><b>Film review</b></td><td>a film</td><td>evaluate its artistry and meaning</td></tr>
              <tr><td><b>Product review</b></td><td>a product, often compared with others</td><td>help buyers choose</td></tr>
              <tr><td><b>Reflective review</b></td><td>your own performance or learning</td><td>encourage your growth</td></tr>
              <tr><td><b>Programme evaluation</b></td><td>a running programme</td><td>judge its cost and fit with goals</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: the revision sheet gives only the double-blind peer review and the reflective review as named items, and the activity sheet gives five unlabelled samples. The rest of this topic is built from those samples and from standard usage, and the later tabs say where.</p></div>
        ` },
        { title: 'Peer review', html: `
          <p class="lead">In <b>peer review</b>, other experts in the field read a manuscript before a journal publishes it and report on whether it should be accepted.</p>
          <div class="vs">
            <div class="side"><h4>Double-blind</h4><p>Both <b>authors and reviewers stay anonymous</b>. The aim is to <b>minimise bias</b>: nobody is judged by fame, institution or friendship.</p></div>
            <div class="side"><h4>Single-blind</h4><p>The <b>reviewer knows who the author is</b>, but the author does not know who the reviewer is.</p></div>
          </div>
          <h3>A reviewer report (from the activity sheet)</h3>
          <p>The sample is a report on "Manuscript #4892". It praises a "compelling argument" on postcolonial urban spaces, then says the <b>methodology section lacks clarity about sample selection</b>. Its verdict is <b>Major Revisions</b>: once the data collection is clarified and set within existing literature, the paper will merit publication. It also states that authors and reviewers stayed anonymous throughout.</p>
          <h3>What a reviewer report contains</h3>
          <ul>
            <li>a short verdict on the strengths of the paper;</li>
            <li>the <b>specific weaknesses</b> the authors must fix;</li>
            <li>a <b>recommended action</b>.</li>
          </ul>
          <div class="note heads-up"><p>Not on the slides: the slides define only the double-blind model. The single-blind description and the other usual recommendations (accept, minor revisions, reject) are standard journal practice. "Major revisions" means the paper may be accepted after substantial changes and a second round of review.</p></div>
          <div class="note exam"><p>Contrast in one line: single-blind hides the <b>reviewer</b> from the author; double-blind hides <b>both</b>.</p></div>
        ` },
        { title: 'Book, film and product reviews', html: `
          <p class="lead">These are reviews of <b>works and products</b>. They share a pattern: say what it is, weigh strengths against weaknesses, then give a verdict.</p>
          <h3>Book review (sample 3)</h3>
          <p>The sample covers a monograph on colonial record-keeping in South Asia. It praises the author's <b>archival depth</b> and theory, says the book <b>stumbles in its final chapter</b> by rushing the history, and ends that it is <b>essential reading</b> for scholars. Look for: the author and title, the book's subject, its strengths, a weakness, a verdict on who should read it.</p>
          <h3>Film review (sample 4)</h3>
          <p>The sample calls a film a visual triumph, praising <b>natural lighting, long takes, lead performance, sound design and editing</b>, and notes the pacing <b>sags</b> in the second act. Look for: the director, the film's craft (cinematography, sound, editing), narrative structure, cultural or emotional meaning.</p>
          <h3>Product review (sample 5)</h3>
          <p>The sample compares two smartwatches on <b>battery life, processor speed, fitness tracking and GPS</b>, concludes that Model B outperforms Model A and calls it "the clear winner" in its price tier. Look for: named models, <b>side-by-side criteria</b>, price, a recommendation for a type of buyer.</p>
          <div class="note why"><p>A good critical review is neither pure praise nor pure attack. All three samples above give praise, then a flaw, then a verdict, which makes the judgement believable.</p></div>
          <div class="note heads-up"><p>Not on the slides: the sheet gives only the five unlabelled samples. The names "book", "film" and "product" reviews and the look-for lists are our reading of them.</p></div>
        ` },
        { title: 'Reflective and evaluative reviews', html: `
          <p class="lead">Two reviews that look inward or at a running programme, not at literature.</p>
          <h3>Reflective review</h3>
          <p>From the revision sheet: a review that involves <b>personal, introspective self-examination</b> of your own performance or learning, to encourage <b>professional development</b>. You are both writer and subject. Typical examples are a learning journal entry, a self-assessment at the end of a project, or a "what I would do differently" section.</p>
          <div class="vs">
            <div class="side"><h4>Weak</h4><p>"The project went well and I learned a lot."</p></div>
            <div class="side"><h4>Reflective</h4><p>"I left testing until the last week, so two faults reached the demo. Next time I will test each module as I finish it."</p></div>
          </div>
          <h3>Programme evaluation</h3>
          <p>Scenario B in the revision sheet describes a government agency checking a <b>three-year-old public health programme</b> for <b>cost-efficiency</b> and <b>alignment with community goals</b>. That is an evaluation of how well a running programme works for the money, not a search of the literature.</p>
          <div class="note exam"><p>The reflective review is the answer when the subject of the review is <b>the writer</b>. The programme evaluation is the answer when the subject is <b>a programme's cost and outcomes</b>.</p></div>
          <div class="note heads-up"><p>Not on the slides: the revision sheet has no answer key for the scenarios. The name "programme evaluation" is our label; check it against what your lecturer calls it. The weak and reflective sentences are our own examples.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Double-blind review: who is anonymous?`, back: `<b>Both authors and reviewers</b>, to minimise bias.` },
        { front: `Single-blind: who knows whom?`, back: `The <b>reviewer knows the author</b>; the author does not know the reviewer.` },
        { front: `What does "major revisions" mean?`, back: `The paper needs <b>substantial changes</b> before it can be accepted.` },
        { front: `A reflective review is about whom?`, back: `The <b>writer's own</b> performance or learning.` },
        { front: `What shows a product review?`, back: `<b>Named models compared on criteria</b>, then a recommendation.` },
        { front: `What shows a film review?`, back: `<b>Cinematography, sound, editing, narrative</b> and meaning.` },
        { front: `What shows a book review?`, back: `Author, subject, <b>strengths, a weakness</b>, who should read it.` },
      ],
      oneLiners: [
        'Double-blind peer review hides <b>both</b> author and reviewer to reduce bias; single-blind hides only the reviewer.',
        'A reviewer report gives strengths, specific weaknesses and a <b>recommended action</b> (for example major revisions).',
        'A book review names author and subject, weighs <b>strengths against a weakness</b>, and gives a verdict.',
        'A film review judges craft (lighting, sound, editing), <b>narrative</b> and meaning.',
        'A product review compares named products on <b>stated criteria</b> and recommends one for a type of buyer.',
        'A reflective review is a <b>personal, introspective</b> look at your own learning, for development.',
        'A programme evaluation checks <b>cost-efficiency</b> and fit with goals.',
      ],
      formulas: [
        { name: 'Review of a work', html: `<b>What it is</b> → <b>strengths</b> → <b>a weakness</b> → <b>verdict</b>` },
        { name: 'Peer review models', html: `<b>Single-blind</b>: reviewer hidden · <b>Double-blind</b>: reviewer and author hidden` },
      ],
    },

    {
      id: 'm4-review-practice',
      title: 'Review types: matching, short answers and scenarios',
      short: 'Review types practice',
      blurb: 'The Review Types Revision worksheet worked through: the six-item matching, the two short-answer questions, the four scenarios and the five unlabelled sample reviews from the group activity.',
      source: 'Module 4 Writing / Reviews / Review Types Revision.docx and Types of Reviews - Activity.xlsx',
      tabs: [
        { title: 'Matching key', html: `
          <p class="lead">The worksheet gives six review types and six descriptions. Match by finding the <b>tell</b> in each description.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Letter</th><th>The tell in the description</th></tr></thead>
            <tbody>
              <tr><td><b>1 Systematic literature review</b></td><td>B</td><td>explicit inclusion and exclusion criteria, predefined protocol, minimises bias</td></tr>
              <tr><td><b>2 Scoping review</b></td><td>C</td><td>maps the breadth of an emerging field, defines gaps, not deep quality evaluation</td></tr>
              <tr><td><b>3 Meta-analysis</b></td><td>F</td><td>statistically combines quantitative data from independent studies</td></tr>
              <tr><td><b>4 Double-blind review</b></td><td>A</td><td>authors and reviewers both anonymous</td></tr>
              <tr><td><b>5 Critical literature review</b></td><td>D</td><td>critique and interpretation, evaluates validity, new conceptual insight</td></tr>
              <tr><td><b>6 Reflective review</b></td><td>E</td><td>introspective self-examination of your own performance or learning</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Answer key: <b>1-B, 2-C, 3-F, 4-A, 5-D, 6-E</b>.</p></div>
          <div class="note heads-up"><p>Not on the slides: the worksheet has no key. Each answer is fixed by one unambiguous phrase, as the last column shows.</p></div>
        ` },
        { title: 'Short answers (Part 2)', html: `
          <p class="lead">Two written questions. Model answers below use the course material.</p>
          <div class="worked">
            <div class="given"><p>Why does methodology matter when choosing a review type? Give one example showing how methodology differs between two types.</p></div>
            <div class="solve"><p>Methodology decides how <b>trustworthy and complete</b> the review is, so it has to fit the question. Compare a <b>systematic review</b> with a <b>scoping review</b>: the systematic review follows <b>explicit inclusion and exclusion criteria and a predefined protocol</b> to reduce bias and may judge study quality; the scoping review <b>maps the breadth</b> of an emerging field and defines gaps without deeply evaluating quality.</p></div>
            <div class="result"><p>Match the method to the question: use a systematic review for a narrow question that needs a firm answer, and a scoping review to see what exists.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Contrast single-blind and double-blind peer review. What is the main difference in how they handle reviewer and author identities?</p></div>
            <div class="solve"><p>In <b>double-blind</b> review, authors and reviewers both stay anonymous, which minimises bias from reputation or affiliation. In <b>single-blind</b> review, the reviewer knows the author but the author does not know the reviewer.</p></div>
            <div class="result"><p>Single-blind hides one side; double-blind hides both.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: the first answer follows the worksheet's own matching descriptions. The single-blind half of the second answer is standard practice; the slides only describe the double-blind model.</p></div>
        ` },
        { title: 'Four scenarios', html: `
          <p class="lead">Read the scenario, find the cue, name the type. The worksheet gives no key, so each answer is derived from the cue.</p>
          <div class="worked">
            <div class="given"><p><b>Scenario A.</b> A researcher combines qualitative student interviews and quantitative retention data to explore student engagement in online courses.</p></div>
            <div class="solve"><p>The cue is the <b>mix of qualitative and quantitative</b> evidence in one study.</p></div>
            <div class="result"><p>A <b>mixed studies (mixed methods) review</b>.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p><b>Scenario B.</b> A government agency wants to evaluate a three-year-old public health programme for cost-efficiency and alignment with community goals.</p></div>
            <div class="solve"><p>The cue is a <b>running programme</b> judged on cost and goals, not a body of studies.</p></div>
            <div class="result"><p>A <b>programme evaluation</b> (an evaluative review).</p></div>
          </div>
          <div class="worked">
            <div class="given"><p><b>Scenario C.</b> A scholar writes a journal article judging the aesthetic merit, cinematography, narrative structure and cultural significance of a new film.</p></div>
            <div class="solve"><p>The cue is <b>judgement and interpretation</b> of a work's quality and meaning.</p></div>
            <div class="result"><p>A <b>critical review</b>, in its film-review form.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p><b>Scenario D.</b> A consumer tech blog compares battery life, processor speed and price across three new smartphones.</p></div>
            <div class="solve"><p>The cue is <b>side-by-side criteria on named products</b>.</p></div>
            <div class="result"><p>A <b>comparative product review</b>.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: no answer key for the scenarios exists in the Drive file. B and D use review names that are not in the matching table, so check the wording against your lecturer's. A and C fit the Grant and Booth names directly.</p></div>
        ` },
        { title: 'Activity: name the sample', html: `
          <p class="lead">The group activity gives five unlabelled samples with a "Type" column to fill. Find the clue words, then the type.</p>
          <table class="tbl">
            <thead><tr><th>Sample</th><th>Clue words</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td><b>1</b></td><td>blended learning in STEM; PRISMA guidelines; five databases; predefined search strings; 1,420 records screened; explicit inclusion and exclusion criteria; 24 studies; minimise author bias</td><td><b>Systematic review</b></td></tr>
              <tr><td><b>2</b></td><td>Reviewer report for Manuscript #4892; both authors and reviewers anonymous; "Major Revisions"</td><td><b>Double-blind peer review</b></td></tr>
              <tr><td><b>3</b></td><td>monograph; author named; archival depth commended; final chapter rushed; "essential reading"</td><td><b>Book review</b> (a critical review of a book)</td></tr>
              <tr><td><b>4</b></td><td>director; lighting; long takes; pacing; lead performance; sound design; grief</td><td><b>Film review</b> (a critical review of a film)</td></tr>
              <tr><td><b>5</b></td><td>two models compared on battery, processor, GPS, price; "clear winner"</td><td><b>Product (comparative) review</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Sample 1 is a screening log in prose: 1,420 records down to 24 studies is the <b>screen results</b> step of the six steps, so it can only be a systematic review. Samples 3 to 5 judge things, not literature, so the process words (databases, criteria) are missing.</p></div>
          <div class="note heads-up"><p>Not on the slides: the sheet has the "Type" column empty and no key. The answers above are derived from the clue words.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Matching key: systematic literature review?`, back: `<b>B</b>: explicit inclusion and exclusion criteria, predefined protocol.` },
        { front: `Matching key: scoping review?`, back: `<b>C</b>: maps breadth and gaps of an emerging field.` },
        { front: `Matching key: meta-analysis?`, back: `<b>F</b>: statistically combines quantitative data.` },
        { front: `Matching key: double-blind?`, back: `<b>A</b>: authors and reviewers both anonymous.` },
        { front: `Matching key: critical literature review?`, back: `<b>D</b>: critique, validity, new conceptual insight.` },
        { front: `Matching key: reflective review?`, back: `<b>E</b>: introspective self-examination.` },
        { front: `Qualitative plus quantitative data in one review?`, back: `A <b>mixed studies (mixed methods) review</b>.` },
        { front: `"1,420 records screened, 24 studies selected": type?`, back: `A <b>systematic review</b>.` },
      ],
      oneLiners: [
        'Matching key: <b>1-B, 2-C, 3-F, 4-A, 5-D, 6-E</b>.',
        'Methodology matters because it sets how <b>complete and trustworthy</b> a review is; match it to the question.',
        'Systematic: explicit criteria and protocol; scoping: maps breadth, no deep quality check.',
        'Double-blind hides <b>both</b> identities; single-blind hides the reviewer only.',
        'Mix of interviews and numbers: <b>mixed studies review</b>.',
        'Film or book judged on merit: <b>critical review</b>; named products on criteria: <b>comparative product review</b>.',
        'PRISMA, predefined search strings and screening counts point to a <b>systematic review</b>.',
      ],
      formulas: [
        { name: 'Naming a sample review', html: `Find the <b>clue words</b> (process, subject judged, who is anonymous) → name the <b>type</b> → say <b>why</b>` },
        { name: 'Scenario answer', html: `<b>Cue</b> in the scenario + <b>type</b> + one reason from the table` },
      ],
    },
    // =====================================================================
    // Module 4 Writing / Research Writing (structure of a paper)
    // =====================================================================
    {
      id: 'm4-paper-parts',
      title: 'Parts of a research paper in detail',
      short: 'Parts of a paper',
      blurb: 'Rules for each section of a research paper: title, authors, abstract (functions, types, steps, structure, what to leave out), introduction, methods, results, discussion, conclusions, acknowledgements, symbols and references.',
      source: 'Module 4 Writing / Research Writing / Writing Research Papers.pptx, slides 9 to 23, and Module 6 Academic Writing & Editing.pdf (structure of an abstract, and what an abstract leaves out)',
      tabs: [
        { title: 'Title and authors', html: `
          <p class="lead">A paper opens with a <b>title</b>, then the <b>authors with their affiliations and addresses</b>. The order of all eleven parts is in the earlier topic on the paper; this topic gives the rules for each.</p>
          <h3>The title</h3>
          <p>The title is the <b>fewest possible words that adequately describe the contents</b>. It should be well studied and give a definite, brief indication of the paper. A good title:</p>
          <ul>
            <li>clearly shows what the paper contains;</li>
            <li>is <b>neither too short nor too long</b>;</li>
            <li>uses <b>specific, not general</b>, terms;</li>
            <li>is built on careful syntax;</li>
            <li>is a <b>label, not a sentence</b>;</li>
            <li>avoids common abbreviations, specific notations and reference numbers.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Too general</h4><p>"A Study of Computers"</p></div>
            <div class="side"><h4>Specific label</h4><p>"Numerical Studies on the Interaction between Atmosphere and Ocean Using Different Kinds of Parallel Computers" (the slide's own example)</p></div>
          </div>
          <h3>Authors, affiliations and addresses</h3>
          <p>Full names and designations come just below the title, for example name, "Professor, Department of Chemical Engineering", university and address. When authors of one paper have <b>different addresses</b>, the addresses are linked to the names with <b>superscript markers</b> and placed under the names or as footnotes. One author is named for correspondence about the paper.</p>
          <div class="note heads-up"><p>Not on the slides: the slide ends mid-sentence at "the author to whom correspondence concerning the paper". The usual rule is that this <b>corresponding author</b> is marked (often with an asterisk) and gives an email address.</p></div>
        ` },
        { title: 'The abstract', html: `
          <p class="lead">The <b>abstract</b> lets a reader judge in a minute whether the whole paper is worth reading.</p>
          <h3>Two functions</h3>
          <ol>
            <li>Help readers <b>identify the basic content quickly and accurately</b>, to decide whether they need the whole document.</li>
            <li>Meet the needs of <b>abstracting journals</b> (secondary services that list abstracts).</li>
          </ol>
          <p>There are two types: <b>informative</b> (gives key points, results and conclusions) and <b>indicative</b> (describes content and scope only).</p>
          <h3>Five characteristics</h3>
          <ul>
            <li>As <b>concise</b> as possible, at most <b>3 per cent</b> of the paper's length.</li>
            <li><b>Self-contained</b>: it makes sense on its own.</li>
            <li>No <b>bibliography, figure or table</b> references.</li>
            <li>No <b>unfamiliar abbreviations or acronyms</b>.</li>
            <li>Usually <b>written after</b> the paper is done.</li>
          </ul>
          <h3>Five steps to prepare it</h3>
          <ol class="steps">
            <li><b>Read the introduction</b> to find the objective.</li>
            <li><b>Scan the summary and conclusions</b> for the main findings.</li>
            <li><b>Read the text</b> for the method, new data and other key information.</li>
            <li><b>Draft in order</b>: objective, new method or equipment, data of fundamental value, major conclusion or correlations.</li>
            <li><b>Trim</b> to the required size.</li>
          </ol>
          <div class="note exam"><p>"Informative versus indicative" and "five characteristics of an abstract" are both short-answer favourites. For the wording of an abstract itself, see the abstract topic earlier in this module.</p></div>
        ` },
        { title: 'Abstract structure and no-gos', html: `
          <p class="lead">The Module 6 slides give a second view: an abstract is <b>one paragraph of about 300 words or fewer</b> that sums up the whole paper in a fixed sequence.</p>
          <h3>What it contains, in order</h3>
          <ol class="steps">
            <li><b>Purpose</b> the overall aim of the study and the research problem.</li>
            <li><b>Design</b> the basic design of the study.</li>
            <li><b>Findings</b> the major findings or trends from the analysis.</li>
            <li><b>Interpretation</b> a brief summary of what they mean and the conclusions.</li>
          </ol>
          <h3>What an abstract leaves out</h3>
          <table class="tbl">
            <thead><tr><th>Do not use</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Lengthy background</b></td><td>three sentences on the history of the field</td></tr>
              <tr><td><b>Filler</b></td><td>redundant phrases, extra adverbs and adjectives, repetition</td></tr>
              <tr><td><b>Acronyms or abbreviations</b></td><td>"CNN accuracy" instead of "accuracy of a convolutional neural network"</td></tr>
              <tr><td><b>References to other literature</b></td><td>"current research shows that...", "studies have indicated..."</td></tr>
              <tr><td><b>Incomplete sentences</b></td><td>ending with "..."</td></tr>
              <tr><td><b>Jargon</b></td><td>terms that may confuse a general reader</td></tr>
              <tr><td><b>Citations</b></td><td>"(Rao, 2019)"</td></tr>
              <tr><td><b>Images</b></td><td>any figure, illustration or table, or a mention of one</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: the two sources give <b>different length limits</b>, 3 per cent of the paper (Writing Research Papers) and 300 words (Module 6). Follow whichever is smaller for your paper, or the limit your lecturer or journal gives. For a 6,000-word paper, 3 per cent is 180 words, so that rule is tighter.</p></div>
          <div class="note trap"><p>"Current research shows that..." is the most common slip: it is a reference to other literature, with the reference removed. Say what <b>your</b> study found.</p></div>
        ` },
        { title: 'Introduction and methods', html: `
          <p class="lead">The <b>introduction</b> gives the reader enough background to understand and judge the results. The <b>methods</b> let a competent worker repeat the work.</p>
          <h3>Introduction: purpose and guidelines</h3>
          <p>Refer to earlier work <b>only as far as it helps</b> the reader. Sometimes you outline your own earlier attempts at the problem, with citations to the relevant literature. Four guidelines:</p>
          <ol class="steps">
            <li><b>Problem</b> present the nature and scope of the problem you investigated.</li>
            <li><b>Literature</b> review the relevant literature to orient the reader.</li>
            <li><b>Method</b> state the method of investigation and, if needed, why you chose it.</li>
            <li><b>Results</b> state the principal results and the chief conclusions they suggest.</li>
          </ol>
          <h3>Materials and methods</h3>
          <p>The main purpose is to <b>describe, and if necessary defend,</b> the experimental design, technique or theoretical derivation, and then give <b>enough detail for a competent worker to repeat</b> the experiments.</p>
          <div class="vs">
            <div class="side"><h4>Cannot be repeated</h4><p>"We heated the sample and measured the change."</p></div>
            <div class="side"><h4>Repeatable</h4><p>"A 5 g sample was heated at 80 degrees C for 20 minutes and its mass measured every 5 minutes on a balance accurate to 0.01 g."</p></div>
          </div>
          <div class="note why"><p>The paper is the first announcement of a finding. Peers can only check it if they can repeat it, so the methods section carries the test of the paper's honesty.</p></div>
          <div class="note exam"><p>A common CAT question: "what is the test of a good methods section?" Answer: <b>another competent worker can repeat the experiment</b> from it.</p></div>
        ` },
        { title: 'Results, discussion, conclusions', html: `
          <p class="lead">The core of the paper: the data, what it means, and what follows from it.</p>
          <h3>Results: the core of the paper</h3>
          <p>This section forms the <b>core</b>: the data itself. There are three ways of presenting it: <b>text, tabular form and illustration</b>. A given set of data goes in <b>one form only</b>, with no duplication.</p>
          <h3>Discussion</h3>
          <p>Its functions are to <b>interpret the data</b>, highlight the <b>significant features</b> and their possible causes, and mention <b>limitations</b> and any sources of error.</p>
          <h3>Conclusions</h3>
          <ul>
            <li>They <b>stem directly from the data</b> presented; no new material.</li>
            <li>The main job is to make <b>recommendations</b> from the results.</li>
            <li>If no recommendation emerges, the section can be <b>left out</b>.</li>
            <li>When the findings are clear-cut, give conclusions as <b>numbered points</b>.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Section</th><th>Answers</th><th>Does not contain</th></tr></thead>
            <tbody>
              <tr><td><b>Results</b></td><td>what was found</td><td>explanations</td></tr>
              <tr><td><b>Discussion</b></td><td>why, how reliable</td><td>new data</td></tr>
              <tr><td><b>Conclusions</b></td><td>what follows, what to do</td><td>extra material</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Putting a new result in the conclusions, or explaining causes in the results. Keep the three jobs apart: <b>what, why, so what</b>.</p></div>
        ` },
        { title: 'Back matter', html: `
          <p class="lead">Three short sections close the paper: thanks, symbols and sources.</p>
          <h3>Acknowledgements</h3>
          <p>Two things go here. First, any <b>significant technical help</b> from a person, in the lab or elsewhere, and the source of <b>special equipment or materials</b>. Second, any <b>outside financial assistance</b> such as grants, contracts or fellowships. The section has <b>no scientific detail</b>, but it matters: it shows courtesy and gratitude for all the help received.</p>
          <h3>List of symbols</h3>
          <ul>
            <li>Use <b>standard abbreviations</b>. At first use write the full form and put the abbreviation in brackets; after that use only the abbreviation.</li>
            <li>One- or two-letter symbols may stand for physical quantities, units or chemical elements; use only <b>standard symbols</b>.</li>
            <li>Explain every symbol that is <b>not in common use</b> in a nomenclature section.</li>
            <li>Unit names and abbreviations follow standard practice; the best system is the <b>International System (SI)</b>.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>First use</h4><p>"Fourier transform infrared (FTIR) spectroscopy"</p></div>
            <div class="side"><h4>Later</h4><p>"The FTIR spectra show..."</p></div>
          </div>
          <h3>References</h3>
          <p>References let the reader <b>consult the original source</b>, so every bibliographic detail must be complete. Cite <b>only sources you actually consulted</b>.</p>
          <div class="note heads-up"><p>The next topic covers the style schools (APA, MLA, CMS) that fix how references are formatted; styles such as IEEE and APA are explained in detail in the referencing topics of this module.</p></div>
        ` },
        { title: 'Worked: fix a draft', html: `
          <p class="lead">Check a draft against the rules above, section by section.</p>
          <div class="worked">
            <div class="given"><p>A draft has this abstract: "Many studies have been done on solar panels (Rao, 2019). We did experiments using PV and MPPT and the results are shown in Fig. 3. Further work is needed..."</p></div>
            <div class="solve"><p>Check each phrase against the no-gos: "(Rao, 2019)" and "many studies have been done" are <b>citations or references to literature</b>; "PV" and "MPPT" are <b>unexplained acronyms</b>; "Fig. 3" is a <b>figure reference</b>; the closing "..." is an <b>incomplete sentence</b>. There is also no stated aim, method or finding.</p></div>
            <div class="result"><p>Rewrite in the four-part order: "This study tests whether a perturb-and-observe controller raises the output of a small solar panel under changing light. A 50 W panel was tested over 30 days. The controller raised the average output by 12 per cent. It is a low-cost way to improve small installations." (our own example)</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>A methods section says "Samples were prepared as usual." Which rule does it break?</p></div>
            <div class="solve"><p>The test of a methods section is <b>repeatability</b>. "As usual" tells a competent worker nothing.</p></div>
            <div class="result"><p>Give the amounts, temperature, time and equipment.</p></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `A paper title should be what?`, back: `<b>The fewest words</b> that describe the contents: specific, a label, not a sentence.` },
        { front: `Two functions of an abstract?`, back: `Help readers <b>judge relevance quickly</b>; meet <b>abstracting journals'</b> needs.` },
        { front: `Informative vs indicative abstract?`, back: `<b>Informative</b> gives key points and results; <b>indicative</b> only the content and scope.` },
        { front: `Abstract length limits in the two sources?`, back: `<b>3 per cent</b> of the paper; <b>300 words</b> or fewer.` },
        { front: `Five steps to prepare an abstract?`, back: `<b>Introduction, summary and conclusions, text, draft in order, trim.</b>` },
        { front: `Test of a methods section?`, back: `A competent worker can <b>repeat the work</b>.` },
        { front: `Results: how many forms for one data set?`, back: `<b>One</b>: text, table or illustration.` },
        { front: `Which section may be left out?`, back: `<b>Conclusions</b>, if no recommendation emerges.` },
        { front: `Which unit system is preferred?`, back: `The <b>International System (SI)</b>.` },
      ],
      oneLiners: [
        'Title: the <b>fewest words</b> that describe the paper; specific, a label, no abbreviations.',
        'Abstract: concise (3 per cent or about 300 words), self-contained, no citations, figures or acronyms, written <b>last</b>.',
        'Abstract order: purpose, design, findings, interpretation.',
        'Introduction: problem, literature, method, principal results and conclusions.',
        'Methods: enough detail for a competent worker to <b>repeat</b> the work.',
        'Results show the data once; discussion <b>interprets and states limits</b>; conclusions come from the data.',
        'Acknowledgements thank help and funding; list of symbols gives full form at first use, then the abbreviation.',
        'References: complete details, and only sources you <b>consulted</b>.',
      ],
      formulas: [
        { name: 'Abstract order', html: `<b>Purpose</b> → <b>design</b> → <b>findings</b> → <b>interpretation</b>` },
        { name: 'Introduction guidelines', html: `<b>Problem</b> → <b>literature</b> → <b>method</b> → <b>principal results and conclusions</b>` },
        { name: 'Three jobs of the end sections', html: `Results: <b>what</b> · Discussion: <b>why and limits</b> · Conclusions: <b>so what</b>` },
      ],
    },

    {
      id: 'm4-research-to-paper',
      title: 'From research to paper: academic style and the writing process',
      short: 'Research to paper',
      blurb: 'What research is, why findings must be written up, the characteristics of academic writing, editing and proofreading checks, the schools of style, and the twelve steps of writing a research paper.',
      source: 'Module 4 Writing / Research Writing / Writing Research Papers.pptx, slides 2 to 5 and 24 to 26, and Module 6 Academic Writing & Editing.pdf',
      tabs: [
        { title: 'What research is', html: `
          <p class="lead"><b>Research</b> is creative and systematic work undertaken to <b>increase the stock of knowledge</b>.</p>
          <ul>
            <li>It is careful study of a particular problem using <b>scientific methods</b>.</li>
            <li>It is a systematic inquiry to <b>describe, explain, predict and control</b> an observed phenomenon, using inductive and deductive methods.</li>
            <li>It involves <b>collecting, organising and analysing information</b> to increase understanding of a topic or issue.</li>
          </ul>
          <h3>Three reasons to do it</h3>
          <div class="kv">
            <div><span>Replication</span><b>repeat an earlier study to test its findings, or whether they hold in other circumstances</b></div>
            <div><span>Decision or refinement</span><b>make decisions about a new development, or refine earlier findings</b></div>
            <div><span>Search and experiment</span><b>a careful search of journals and books, or designed experiments</b></div>
          </div>
          <p>Whatever the method, <b>every piece of research must make an original contribution</b> to existing data and knowledge.</p>
          <h3>Then the findings must be shared</h3>
          <p>When the reading, field trips and laboratory experiments are done, the results still have to be <b>organised and published</b>. Research is of little value unless others in the field can read it. Findings can be presented at a <b>professional gathering</b> or, for a wider audience, published in a <b>journal</b>. In either case facts and opinions must be organised so their meaning is clear.</p>
          <div class="note why"><p>Writing up is part of the research, not an extra. Until it is written and shared, the original contribution does not reach anyone.</p></div>
        ` },
        { title: 'Academic writing', html: `
          <p class="lead"><b>Academic writing</b> is clear, concise, focused, structured and backed by evidence. Its purpose is to <b>aid the reader's understanding</b>.</p>
          <p>The tone is <b>formal</b>, but the writing is not complex: it needs no long sentences or heavy vocabulary. Each subject has its own conventions, vocabulary and types of discourse, which you pick up over a degree.</p>
          <h3>Four characteristics</h3>
          <table class="tbl">
            <thead><tr><th>Characteristic</th><th>What it means</th></tr></thead>
            <tbody>
              <tr><td><b>Planned and focused</b></td><td>answers the question and shows you understand the subject</td></tr>
              <tr><td><b>Structured</b></td><td>coherent, in a logical order, bringing related points together</td></tr>
              <tr><td><b>Evidenced</b></td><td>shows knowledge of the area, backs opinions with evidence, references accurately</td></tr>
              <tr><td><b>Formal in tone and style</b></td><td>appropriate language and tenses; clear, concise and balanced</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Not academic</h4><p>"This thing is a total breakthrough for everyone."</p></div>
            <div class="side"><h4>Academic</h4><p>"The method reduced processing time by 30 per cent in all three trials."</p></div>
          </div>
          <div class="note exam"><p>Learn the four as a list, then a six-word gloss each: <b>focused, structured, evidenced, formal</b>.</p></div>
        ` },
        { title: 'Editing and proofreading', html: `
          <p class="lead"><b>Editing</b> is checking for sense, accuracy and structure. It is positive, not destructive: you are <b>perfecting what you have already written</b>.</p>
          <h3>"Check thyself": six questions</h3>
          <ol>
            <li>Is it <b>clear and readable</b>?</li>
            <li>Is there a <b>coherent, logical argument</b>?</li>
            <li>Does it <b>respond to the question or task</b>?</li>
            <li>Does it <b>stay on topic</b>?</li>
            <li>Is it structured to <b>guide the reader smoothly</b> through the argument?</li>
            <li>Does it stay <b>within any word count</b>?</li>
          </ol>
          <div class="worked">
            <div class="given"><p>A student's 300-word summary answer has three good paragraphs and a fourth about a different article. It runs to 380 words.</p></div>
            <div class="solve"><p>Check by the list: the fourth paragraph <b>does not stay on topic</b> (question 4) and the answer <b>breaks the word count</b> (question 6). Cutting it fixes both.</p></div>
            <div class="result"><p>Delete the off-topic paragraph; re-count; confirm the remaining three still answer the task.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: the Module 6 agenda also lists "editing and proofreading symbols" and an editing exercise, but no slide in the Drive file shows the symbols or the exercise. A practical routine is to edit for sense and structure first, then proofread for spelling, grammar and punctuation, reading your own text aloud or on paper.</p></div>
        ` },
        { title: 'Schools of style', html: `
          <p class="lead">When a paper is published it is formatted in the <b>style of the journal</b>. The editor tells authors the standard elements and format, and the author submits in that format.</p>
          <p>Three main <b>schools of style</b> format an academic paper: <b>APA, MLA and CMS</b>. The slide describes APA as the official guidelines of the <b>American Psychological Association</b>.</p>
          <h3>Which discipline uses which (Module 6)</h3>
          <table class="tbl">
            <thead><tr><th>Style</th><th>Used by</th></tr></thead>
            <tbody>
              <tr><td><b>APA</b> (American Psychological Association)</td><td>education, psychology and the sciences</td></tr>
              <tr><td><b>MLA</b> (Modern Language Association)</td><td>the humanities</td></tr>
              <tr><td><b>Chicago / Turabian</b> (CMS)</td><td>business, history and the fine arts</td></tr>
            </tbody>
          </table>
          <p>Ask your professor which one the course needs.</p>
          <h3>Why citations exist</h3>
          <p>A <b>citation</b> gives credit to the people whose creative and intellectual work you used. It also lets readers <b>find a source</b> and helps <b>combat plagiarism</b>. A citation can include the <b>author's name, date, place of the publisher, journal title or DOI</b> (digital object identifier).</p>
          <div class="note heads-up"><p>Not on the slides: the slide says APA is "now in its sixth edition", which is out of date. The current edition is the seventh (2019). Check with your lecturer which edition they expect. The slides list material types (books, journals, websites, parenthetical citations) without examples; those are covered in the referencing topics.</p></div>
        ` },
        { title: 'Twelve steps to a paper', html: `
          <p class="lead">A research paper is like an academic essay but <b>longer and more detailed</b>. It tests your writing and your <b>scholarly research skills</b>: strong knowledge of the topic, a range of sources, and an original contribution to the debate.</p>
          <p>The slides list twelve stages. Here they are with what each involves.</p>
          <ol class="steps">
            <li><b>Understand the assignment</b> read the task, the length and the rules.</li>
            <li><b>Choose a topic</b> narrow enough to cover.</li>
            <li><b>Preliminary research</b> read enough to see what is known.</li>
            <li><b>Thesis statement</b> state your central claim in a sentence.</li>
            <li><b>Outline</b> plan the sections and the order of points.</li>
            <li><b>First draft</b> get the ideas down without polishing.</li>
            <li><b>Introduction</b> set up the problem and your claim.</li>
            <li><b>Body</b> develop the argument with evidence, paragraph by paragraph.</li>
            <li><b>Conclusion</b> bring the findings together.</li>
            <li><b>Second draft</b> improve structure and clarity.</li>
            <li><b>Revision</b> edit and proofread.</li>
            <li><b>Checklist</b> check the paper against the requirements.</li>
          </ol>
          <div class="note heads-up"><p>Not on the slides: the slides give only the twelve labels. The one-line explanations are standard advice. For a paper with the standard sections (methods, results), the structure in the previous topic replaces "body".</p></div>
          <div class="note trap"><p>Skipping the outline and writing straight from the first idea. A one-page outline gives the paper its <b>structure</b>, one of the four characteristics of academic writing.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Research in one line?`, back: `Creative, systematic work to <b>increase the stock of knowledge</b>.` },
        { front: `What must every piece of research contribute?`, back: `An <b>original contribution</b> to existing data and knowledge.` },
        { front: `Four characteristics of academic writing?`, back: `<b>Planned and focused, structured, evidenced, formal</b> in tone and style.` },
        { front: `What is editing?`, back: `Checking for <b>sense, accuracy and structure</b>; a positive, perfecting process.` },
        { front: `The three schools of style in the slides?`, back: `<b>APA, MLA and CMS</b> (Chicago).` },
        { front: `Which style do the humanities use?`, back: `<b>MLA</b>.` },
        { front: `Which style do education, psychology and science use?`, back: `<b>APA</b>.` },
        { front: `What can a citation include?`, back: `<b>Author, date, publisher location, journal title, DOI</b>.` },
        { front: `First and last of the twelve steps?`, back: `<b>Understand the assignment</b> first; <b>checklist</b> last.` },
      ],
      oneLiners: [
        'Research increases the stock of knowledge; every piece must make an <b>original contribution</b>.',
        'Findings are of little value until <b>published or presented</b>.',
        'Academic writing: <b>planned and focused, structured, evidenced, formal</b>.',
        'Editing checks <b>sense, accuracy and structure</b>; the six "check thyself" questions end with word count.',
        'Journals format papers in their own style; the main schools are <b>APA, MLA, CMS</b>.',
        'APA: education, psychology, sciences; MLA: humanities; Chicago: business, history, fine arts.',
        'Twelve steps run from <b>understanding the assignment</b> to a final <b>checklist</b>, with a thesis and outline before drafting.',
      ],
      formulas: [
        { name: 'Four marks of academic writing', html: `<b>Planned and focused</b> · <b>structured</b> · <b>evidenced</b> · <b>formal</b>` },
        { name: 'Style by discipline', html: `<b>APA</b>: education, psychology, sciences · <b>MLA</b>: humanities · <b>Chicago</b>: business, history, fine arts` },
        { name: 'Writing sequence', html: `<b>Topic</b> → <b>research</b> → <b>thesis</b> → <b>outline</b> → <b>draft</b> → <b>revise</b> → <b>checklist</b>` },
      ],
    },
//@@MORE
  ],
  figures: [
    { id: 'm4-m-review-chooser', caption: 'Choosing a review type from the shape of your question: seven cues and the review each points to. Based on BAENG101 course material, VIT.', alt: 'Seven stacked boxes, each with a cue and an arrow to a review type. Does X cause Y: systematic review. What is known about a broad topic: scoping or literature review. Combine numbers from similar studies: meta-analysis. A decision is needed quickly: rapid review. Many reviews already exist: umbrella review. Make sense of qualitative studies: meta-synthesis. Judge the literature and build a theory: critical review.' },
//@@FIGS
  ],
});
