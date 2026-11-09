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
        ` },
      ],
      flashcards: [
        { front: `The six steps of a systematic review, in order?`, back: `<b>Question, search, screen, assess quality and bias, extract data, write.</b>` },
        { front: `A narrow cause-effect question suits which review?`, back: `A <b>systematic review</b>.` },
        { front: `A broad, exploratory question suits which reviews?`, back: `A <b>scoping review</b> or a <b>literature review</b>.` },
        { front: `"Which study techniques work best?" Which review?`, back: `A <b>literature review</b>: it shows what the evidence supports and when.` },
        { front: `Which step comes right after searching?`, back: `<b>Screening</b> the results.` },
        { front: `Coffee and staying awake: what type of question is it?`, back: `<b>Narrow, focused, cause-effect</b>.` },
      ],
      oneLiners: [
        'Pick the review type from the <b>question</b>: narrow and causal, or broad and exploratory.',
        'Six steps: <b>question, search, screen, assess quality and bias, extract data, write</b>.',
        'Narrow cause-effect question (does coffee keep people awake?): <b>systematic review</b>.',
        'Broad question (what habits raise productivity?): <b>scoping or literature review</b>.',
        'A literature review of study techniques shows which are <b>supported by evidence</b> and <b>under what conditions</b>.',
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
          <div class="note trap"><p>The picture card on a later tab treats "literature review" as another name for the narrative review.</p></div>
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
      ],
      flashcards: [
        { front: `Aim of a systematic review?`, back: `Answer a <b>specific question</b> by searching, judging and combining <b>all relevant studies</b> with clear, repeatable methods.` },
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
          <div class="note heads-up"><p>The intro says the table has 14 review types, but the Drive file lists 13 rows.</p></div>
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
      ],
    },

    {
      id: 'm4-review-genres',
      title: 'The five sample reviews (group activity)',
      short: 'Sample reviews',
      blurb: 'The five unlabelled sample reviews in the Types of Reviews group activity, summarised. The sheet leaves the Type column blank and gives no answer key.',
      source: 'Module 4 Writing / Reviews / Types of Reviews - Activity.xlsx (five sample reviews)',
      tabs: [
        { title: 'Samples 1 and 2', html: `
          <p class="lead">The group activity gives five sample reviews, each with a blank <b>Type</b> column for the group to fill in.</p>
          <h3>Sample 1</h3>
          <p>A study of <b>blended learning in undergraduate STEM education</b>. It follows <b>PRISMA guidelines</b>, searches <b>five electronic databases</b> with <b>predefined search strings</b>, screens <b>1,420 initial records</b> against <b>explicit inclusion and exclusion criteria</b> (peer-reviewed, English-medium, empirical studies published 2018 to 2025), and selects <b>24 studies</b> for final analysis, to minimise author bias and synthesise conclusive evidence.</p>
          <h3>Sample 2</h3>
          <p>A <b>reviewer report for Manuscript #4892</b>. It calls the argument on postcolonial urban spaces compelling, but says the <b>methodology section lacks clarity about sample selection</b>. Both <b>authors and reviewers remained completely anonymous</b> to minimise bias. Recommended action: <b>Major Revisions</b>; once data collection is clarified and set within existing literature, the paper will merit publication.</p>
          <div class="note heads-up"><p>The sheet gives no answer key: the Type column is empty.</p></div>
        ` },
        { title: 'Samples 3 to 5', html: `
          <h3>Sample 3</h3>
          <p>On a monograph, "Shadows of the Archive", by Dr. Aris Thorne, on colonial record-keeping in South Asia. It commends the <b>archival depth</b> and the theoretical framework drawn from memory studies, says the book <b>stumbles in its final chapter</b> by rushing the analysis of 20th-century institutional transitions, and calls it <b>essential reading</b> for scholars.</p>
          <h3>Sample 4</h3>
          <p>On a film by director Chloe Zhao: a visual triumph, with <b>sweeping natural lighting</b> and <b>long, contemplative takes</b>. The <b>pacing sags</b> in the second act, but the lead performance anchors the narrative; the <b>sound design</b> and <b>editing</b> make it a meditation on grief.</p>
          <h3>Sample 5</h3>
          <p>Compares the Apex Ultra Smartwatch with its predecessor on <b>battery longevity, processor speed, fitness tracking accuracy and GPS responsiveness</b>. Model A looks sleeker; Model B outperforms it and is <b>"the clear winner in this price tier"</b>.</p>
          <div class="note heads-up"><p>The sheet gives no answer key for any sample.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Sample 1: how many records screened, and how many studies selected?`, back: `<b>1,420</b> records screened; <b>24</b> studies selected.` },
        { front: `Sample 1: which guidelines does it follow?`, back: `<b>PRISMA</b> guidelines.` },
        { front: `Sample 2: recommended action?`, back: `<b>Major Revisions</b>.` },
        { front: `Sample 2: who stayed anonymous?`, back: `<b>Both authors and reviewers</b>, to minimise bias.` },
        { front: `Sample 5: which model wins?`, back: `<b>Model B</b>, "the clear winner in this price tier".` },
      ],
      oneLiners: [
        'Sample 1: PRISMA, five databases, predefined search strings, <b>1,420 records screened, 24 studies selected</b>.',
        'Sample 2: reviewer report; authors and reviewers <b>anonymous</b>; Major Revisions.',
        'Samples 3 to 5 judge a <b>monograph</b>, a <b>film</b> and two <b>smartwatches</b>.',
        'The activity sheet gives <b>no answer key</b>.',
      ],
      formulas: [],
    },

    {
      id: 'm4-review-practice',
      title: 'Review Types Revision worksheet',
      short: 'Review types worksheet',
      blurb: 'The Review Types Revision worksheet: the six-item matching, the two short-answer questions and the four scenarios. The file gives no answer key.',
      source: 'Module 4 Writing / Reviews / Review Types Revision.docx',
      tabs: [
        { title: 'Matching (Part 1)', html: `
          <p class="lead">Match each review type (1 to 6) with a description (A to F).</p>
          <h3>Review types</h3>
          <ol>
            <li>Systematic Literature Review</li>
            <li>Scoping Review</li>
            <li>Meta-Analysis</li>
            <li>Double-Blind Review</li>
            <li>Critical Literature Review</li>
            <li>Reflective Review</li>
          </ol>
          <h3>Descriptions</h3>
          <ul>
            <li><b>A.</b> A peer review model where both authors and reviewers remain completely anonymous to minimise bias.</li>
            <li><b>B.</b> A rigorous, method-driven literature assessment that follows explicit inclusion/exclusion criteria and predefined protocols to minimise bias.</li>
            <li><b>C.</b> Evaluates existing research to map the breadth and nature of an emerging field and define knowledge gaps rather than deeply evaluating quality.</li>
            <li><b>D.</b> Focuses heavily on critique and interpretation, evaluating study validity to develop new conceptual insights.</li>
            <li><b>E.</b> Involves personal, introspective self-examination of one's own performance or learning to encourage professional development.</li>
            <li><b>F.</b> Statistically combines quantitative data from multiple independent studies to increase sample size and produce robust conclusions.</li>
          </ul>
          <div class="note heads-up"><p>The file gives no answer key for the matching.</p></div>
        ` },
        { title: 'Short answers (Part 2)', html: `
          <ol>
            <li>Why does methodology matter when choosing a review type? Give one example from the text showing how methodology differs between two review types.</li>
            <li>Contrast single-blind and double-blind peer reviews. What are the primary differences in how they handle reviewer and author identities?</li>
          </ol>
          <div class="note heads-up"><p>The file gives no answer key for these questions.</p></div>
        ` },
        { title: 'Scenarios (Part 3)', html: `
          <p class="lead">Read the short scenarios and identify the most appropriate type of review.</p>
          <ul>
            <li><b>Scenario A.</b> A researcher wants to combine qualitative student interviews and quantitative retention data to explore student engagement in online courses.</li>
            <li><b>Scenario B.</b> A government agency wants to evaluate a three-year-old public health program's cost-efficiency and overall alignment with community goals.</li>
            <li><b>Scenario C.</b> A scholar is writing a journal article that evaluates the aesthetic merit, cinematography, narrative structure and cultural significance of a new film.</li>
            <li><b>Scenario D.</b> A consumer tech blog wants to compare battery longevity, processor speed and pricing across three newly released smartphones.</li>
          </ul>
          <div class="note heads-up"><p>The file gives no answer key for the scenarios.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Matching description A?`, back: `A peer review model where <b>both authors and reviewers</b> remain anonymous to minimise bias.` },
        { front: `Matching description C?`, back: `Maps the <b>breadth and nature of an emerging field</b> and defines knowledge gaps rather than deeply evaluating quality.` },
        { front: `Matching description E?`, back: `<b>Personal, introspective self-examination</b> of one's own performance or learning.` },
        { front: `Matching description F?`, back: `<b>Statistically combines quantitative data</b> from multiple independent studies.` },
      ],
      oneLiners: [
        'Part 1 matches six review types with descriptions A to F.',
        'Part 2 asks why <b>methodology</b> matters, and to contrast <b>single-blind and double-blind</b> peer review.',
        'Part 3 gives four scenarios (A to D) to name a review type for.',
        'The worksheet gives <b>no answer key</b>.',
      ],
      formulas: [],
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
          <p>The slide's example: "Numerical Studies on the Interaction between Atmosphere and Ocean Using Different Kinds of Parallel Computers".</p>
          <h3>Authors, affiliations and addresses</h3>
          <p>Full names and designations come just below the title, for example name, "Professor, Department of Chemical Engineering", university and address. When authors of one paper have <b>different addresses</b>, the addresses are linked to the names with <b>superscript markers</b> and placed under the names or as footnotes.</p>
          <div class="note heads-up"><p>The slide ends mid-sentence at "the author to whom correspondence concerning the paper".</p></div>
        ` },
        { title: 'The abstract', html: `
          <p class="lead">The <b>abstract</b> lets a reader judge quickly whether the whole paper is worth reading.</p>
          <h3>Two functions</h3>
          <ol>
            <li>Help readers <b>identify the basic content quickly and accurately</b>, to decide whether they need the whole document.</li>
            <li>Meet the needs of <b>abstracting journals</b> (secondary services that list abstracts).</li>
          </ol>
          <p>There are two types: <b>informative</b> and <b>indicative</b>.</p>
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
          <ul>
            <li>lengthy background or contextual information;</li>
            <li>redundant phrases, unnecessary adverbs and adjectives, and repetitive information;</li>
            <li>acronyms or abbreviations;</li>
            <li>references to other literature (saying something like "current research shows that..." or "studies have indicated...");</li>
            <li>ellipticals (ending with "...") or incomplete sentences;</li>
            <li>jargon or terms that may confuse the reader;</li>
            <li>citations to other works;</li>
            <li>any sort of image, illustration, figure or table, or references to them.</li>
          </ul>
          <div class="note heads-up"><p>The two sources give different length limits: 3 per cent of the paper (Writing Research Papers) and 300 words or less (Module 6).</p></div>
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
          <h3>References</h3>
          <p>References let the reader <b>consult the original source</b>, so every bibliographic detail must be complete. Cite <b>only sources you actually consulted</b>.</p>
          <div class="note heads-up"><p>The next topic covers the style schools (APA, MLA, CMS) that fix how references are formatted; styles such as IEEE and APA are explained in detail in the referencing topics of this module.</p></div>
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
          <div class="note heads-up"><p>The Module 6 agenda also lists "editing/proofreading symbols" and an editing exercise, but no slide in the Drive file shows the symbols or the exercise.</p></div>
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
          <div class="note heads-up"><p>The slide says APA is "now in its <b>sixth edition</b>". The Module 6 slides list material types (books, journals, websites, parenthetical citations and others) without examples.</p></div>
        ` },
        { title: 'Twelve steps to a paper', html: `
          <p class="lead">A research paper is like an academic essay but <b>longer and more detailed</b>. It tests your writing and your <b>scholarly research skills</b>: strong knowledge of the topic, a range of sources, and an original contribution to the debate.</p>
          <p>The slides list twelve stages.</p>
          <ol class="steps">
            <li>Understand the assignment</li>
            <li>Choose a research paper topic</li>
            <li>Conduct preliminary research</li>
            <li>Develop a thesis statement</li>
            <li>Create a research paper outline</li>
            <li>Write a first draft of the research paper</li>
            <li>Write the introduction</li>
            <li>Write a compelling body of text</li>
            <li>Write the conclusion</li>
            <li>The second draft</li>
            <li>The revision process</li>
            <li>Research paper checklist</li>
          </ol>
          <div class="note heads-up"><p>The slides give only the twelve labels, with no explanation of each.</p></div>
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
      ],
    },
//@@MORE
  ],
  figures: [
//@@FIGS
  ],
});
