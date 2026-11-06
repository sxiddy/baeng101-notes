CHUNK({
  chunk: 'K',
  module: 'm3',
  topics: [
    // =====================================================================
    // Module 3 Reading / research article, author's purpose, online research
    // =====================================================================
    {
      id: 'm3-article-structure',
      title: 'Structure of a research article: what each part tells you',
      short: 'Article structure',
      blurb: 'The fixed order of a research article (title, abstract, introduction, methods, results, discussion, conclusion, references), the question each part answers, what to check in it, a quick reading order, and how a news report about research differs from the article itself.',
      source: 'Module 3 Reading / syllabus topic "Structure of a research article" (no slide in the Drive folder; written from standard practice, using the two sample texts in "scientific text for reading - sample.doc" as the contrast with a news report)',
      tabs: [
        { title: 'The shape of an article', html: `
          <p class="lead">A <b>research article</b> reports one study in a fixed order, so a reader can find the aim, the method, the numbers and the meaning without hunting. Learn the order once and every paper in your field opens up.</p>
          <p>Most science and engineering articles follow <b>IMRaD</b>: <b>Introduction, Methods, Results, and Discussion</b>. A <b>title and abstract</b> sit in front of them and a <b>reference list</b> comes after.</p>
          <figure data-fig="m3-article-map"></figure>
          <div class="kv">
            <div><span>Introduction</span><b>Why was it done?</b></div>
            <div><span>Methods</span><b>How was it done?</b></div>
            <div><span>Results</span><b>What was found?</b></div>
            <div><span>Discussion</span><b>What does it mean?</b></div>
          </div>
          <div class="mnemonic"><p>Why, how, what, so what. Four questions, four sections, always in that order.</p></div>
          <div class="note heads-up"><p>Not on the slides: the syllabus names this topic but the Drive folder has no slide on it, so the parts below come from standard practice. The Module 4 topic "The research paper: meaning and parts" lists the same article as eleven components; that list and this one describe the same document.</p></div>
          <div class="note exam"><p>A common question gives a short description ("states the problem and why it matters", "lists the instruments used") and asks which section it belongs to. Match it to the question the section answers.</p></div>
        ` },
        { title: 'Title, abstract and keywords', html: `
          <p class="lead">The front of the article is for deciding fast: is this paper about my topic, and is it worth my next hour?</p>
          <ul>
            <li><b>Title</b>: names the topic in specific words, often including the method or the system studied.</li>
            <li><b>Authors and affiliations</b>: who did the work and at which institutions. The <b>corresponding author</b> is the one to write to.</li>
            <li><b>Abstract</b>: a short, self-contained summary of the whole study (aim, method, main results, conclusion). Journals usually set a word limit, often 150 to 250 words. It is written last, after the paper.</li>
            <li><b>Keywords</b>: four to six terms used by databases to index the paper. They are also good search words for you.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Vague title</h4><p>A study of batteries.</p></div>
            <div class="side"><h4>Specific title</h4><p>Effect of electrolyte concentration on capacity fade in lithium iron phosphate cells.</p></div>
          </div>
          <p>The specific title tells you the variable changed, the thing measured and the system, before you open the paper.</p>
          <div class="note trap"><p>The abstract is a summary, not the evidence. It gives conclusions without the data behind them, so never quote a number from an abstract as if you had checked the results section.</p></div>
          <div class="note heads-up"><p>Not on the slides: abstracts are either <b>informative</b> (results and conclusions included) or <b>descriptive</b> (only scope and content). Module 4 covers how to write one.</p></div>
        ` },
        { title: 'Introduction', html: `
          <p class="lead">The <b>introduction</b> moves from the general to the specific: what is known, what is missing, and what this paper does about it.</p>
          <ol class="steps">
            <li><b>Background</b> the topic and why it matters.</li>
            <li><b>Earlier work</b> what other researchers have already found.</li>
            <li><b>Gap</b> what is still unknown, unclear or untested.</li>
            <li><b>Aim</b> the research question, hypothesis or objective of this study.</li>
          </ol>
          <div class="worked">
            <div class="given"><p>Find the gap and the aim in this introduction: "Sunscreen use has risen among students. However, few studies report how often they reapply it. This study measures reapplication over a day at a beach campus."</p></div>
            <div class="solve"><p>"However, few studies report..." is the gap: it follows the background and flags what is missing. "This study measures..." is the aim.</p></div>
            <div class="result"><p>Gap: reapplication habits are not well recorded. Aim: measure reapplication over a day.</p></div>
          </div>
          <p>Signal words for a gap: <b>however, but, little is known, has not been tested, remains unclear</b>.</p>
          <div class="note why"><p>Reading the last paragraph of the introduction first tells you the exact question the paper answers. Everything after it is the answer.</p></div>
        ` },
        { title: 'Methods', html: `
          <p class="lead">The <b>methods</b> section says what the researchers did in enough detail that another competent person could repeat it.</p>
          <ul>
            <li><b>Subjects or materials</b>: who or what was studied (participants, samples, devices, data sets) and how they were chosen.</li>
            <li><b>Procedure</b>: the steps in order, usually in the past tense and often in the passive ("samples were heated to 80 degrees").</li>
            <li><b>Measurement</b>: what was recorded and with which instrument or survey.</li>
            <li><b>Analysis</b>: how the data was processed, including any statistics or software.</li>
          </ul>
          <h3>What to check as a reader</h3>
          <div class="chips"><span class="chip">sample size</span><span class="chip">control group</span><span class="chip">how it was measured</span><span class="chip">who was left out</span></div>
          <div class="vs">
            <div class="side"><h4>Cannot be repeated</h4><p>"We heated the samples and noted the change."</p></div>
            <div class="side"><h4>Can be repeated</h4><p>"Twelve samples were heated to 80 degrees Celsius for 30 minutes, and mass was recorded every 5 minutes."</p></div>
          </div>
          <div class="note why"><p>Science depends on repeating. If the method is vague, nobody can check the result, and the study cannot earn trust.</p></div>
          <div class="note heads-up"><p>Not on the slides: in engineering papers this section may be called "Materials and methods", "Experimental setup" or "Model and simulation", with apparatus, specifications and parameter values.</p></div>
        ` },
        { title: 'Results', html: `
          <p class="lead">The <b>results</b> section reports what was found, as facts and numbers, without saying what they mean.</p>
          <ul>
            <li>Findings are shown in <b>text, tables and figures</b>, each finding in one place only.</li>
            <li>The text points to the table or figure and states the main finding in a sentence.</li>
            <li>Numbers carry <b>units</b>, and figures carry <b>labelled axes</b> and a caption.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Interpretation in the wrong place</h4><p>The amazing result proves the new coating works.</p></div>
            <div class="side"><h4>Plain result</h4><p>Coated plates lost 4% of their mass; uncoated plates lost 11% (Table 2).</p></div>
          </div>
          <h3>How to read a table or graph</h3>
          <ol class="steps">
            <li><b>Caption</b> says what the table or graph shows.</li>
            <li><b>Axes and units</b> tell you what is measured.</li>
            <li><b>Comparison</b> look for the gap between groups or the trend over time.</li>
            <li><b>Spread</b> check whether the differences are bigger than the variation.</li>
          </ol>
          <div class="note trap"><p>Results are what happened; the discussion says why it happened. If you catch yourself writing "this shows that..." about a plain number, you are already in the discussion.</p></div>
        ` },
        { title: 'Discussion and conclusion', html: `
          <p class="lead">The <b>discussion</b> explains what the results mean, how they fit earlier work, and how far they can be trusted. The <b>conclusion</b> gives the short answer to the research question.</p>
          <ul>
            <li><b>Interpretation</b>: what the results show about the question.</li>
            <li><b>Comparison</b>: agreement or disagreement with earlier studies.</li>
            <li><b>Limitations</b>: small sample, short time, one type of material, lab conditions.</li>
            <li><b>Next steps</b>: what further work would settle the open points.</li>
            <li><b>Conclusion</b>: usually a short paragraph, sometimes its own section, with any recommendation.</li>
          </ul>
          <h3>Watch the strength of the claim</h3>
          <table class="tbl">
            <thead><tr><th>Weak claim (fits limited evidence)</th><th>Strong claim (needs strong evidence)</th></tr></thead>
            <tbody>
              <tr><td>may suggest, is consistent with, appears to</td><td>proves, shows conclusively, always</td></tr>
              <tr><td>in rats, in this sample</td><td>in all people, in every case</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Good authors match the wording to the evidence. When a discussion claims more than the results can carry, that gap is your first thing to point out when you analyse the article.</p></div>
        ` },
        { title: 'References and back matter', html: `
          <p class="lead">The <b>reference list</b> names every source the authors used, so readers can check claims and follow the trail to related work.</p>
          <ul>
            <li><b>In-text citations</b> inside the paper point to entries in the list, as numbers in IEEE or author and year in APA. Module 4 covers both styles.</li>
            <li><b>Acknowledgements</b> thank people who helped, and usually name the <b>funding bodies</b>.</li>
            <li><b>Appendices or supplementary material</b> hold extra data, long tables or code.</li>
          </ul>
          <h3>What the reference list tells a reader</h3>
          <div class="kv">
            <div><span>Dates</span><b>Is the work recent for the field?</b></div>
            <div><span>Source types</span><b>Journals and standards, or only web pages?</b></div>
            <div><span>Funding</span><b>Who paid, and could they gain from the result?</b></div>
          </div>
          <div class="note exam"><p>In an analysis question, one line on funding or on the quality of the references shows you looked past the main text.</p></div>
        ` },
        { title: 'Reading order and news reports', html: `
          <p class="lead">The order of writing is not the best order of reading. Read in the order that answers your questions fastest.</p>
          <ol class="steps">
            <li><b>Title and abstract</b> decide whether the paper is relevant.</li>
            <li><b>End of the introduction</b> find the exact question.</li>
            <li><b>Tables and figures</b> see the findings first.</li>
            <li><b>Conclusion</b> and then <b>discussion</b> see what the authors claim.</li>
            <li><b>Methods</b> check whether the study can bear that claim.</li>
          </ol>
          <h3>Article or news report?</h3>
          <p>The two sample passages in the course material (a skin cancer talk and a brain study) are <b>news reports about research</b>, not research articles. Look at what they lack.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Research article</th><th>News report about research</th></tr></thead>
            <tbody>
              <tr><td><b>Written by</b></td><td>the researchers</td><td>a writer or press office</td></tr>
              <tr><td><b>Method</b></td><td>full section</td><td>one or two sentences</td></tr>
              <tr><td><b>Evidence</b></td><td>tables, figures, statistics</td><td>a few numbers and quotes</td></tr>
              <tr><td><b>Language</b></td><td>technical</td><td>plain, with quotes from the scientists</td></tr>
              <tr><td><b>References</b></td><td>full list</td><td>none, or a funding line</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>A news report may state a conclusion more strongly than the paper itself. When a question gives only a news report, judge the claim by what the report shows, and say what is missing.</p></div>
        ` },
      ],
      flashcards: [
        { front: `What does IMRaD stand for?`, back: `<b>Introduction, Methods, Results, and Discussion</b>.` },
        { front: `Which question does each IMRaD part answer?`, back: `Intro: <b>why</b>. Methods: <b>how</b>. Results: <b>what</b>. Discussion: <b>so what</b>.` },
        { front: `Which part ends with the aim of the study?`, back: `The <b>introduction</b>, after background and the gap.` },
        { front: `A gap in the introduction is signalled by...`, back: `<b>However, little is known, has not been tested</b>.` },
        { front: `Why must methods be detailed?`, back: `So another competent person can <b>repeat</b> the study.` },
        { front: `Results vs discussion?`, back: `Results: <b>what was found</b>. Discussion: <b>what it means</b>.` },
        { front: `Where do limitations belong?`, back: `In the <b>discussion</b>.` },
        { front: `What are keywords for?`, back: `<b>Indexing</b> the paper in databases and for your own searching.` },
        { front: `What do acknowledgements often name?`, back: `<b>Funding bodies</b> and helpers.` },
        { front: `Best reading order?`, back: `Title, abstract, <b>end of intro</b>, tables and figures, conclusion, discussion, methods.` },
      ],
      oneLiners: [
        `A research article follows <b>IMRaD</b> inside a frame of title, abstract and references.`,
        `Intro = why, methods = how, results = what, discussion = so what.`,
        `The abstract is a self-contained summary written last; it does not replace the results.`,
        `The introduction runs background, earlier work, gap, aim.`,
        `Methods give enough detail for another person to <b>repeat</b> the work.`,
        `Results state facts and numbers; interpretation belongs in the discussion.`,
        `Limitations and next steps sit in the discussion; match claim strength to the evidence.`,
        `A news report about research has little method and no references, so treat its claims with care.`,
      ],
      formulas: [
        { name: 'Order of an article', html: `Title → Abstract → <b>Introduction</b> → <b>Methods</b> → <b>Results</b> → <b>Discussion</b> → Conclusion → References`, note: 'Why, how, what, so what.' },
        { name: 'Introduction moves', html: `<b>Background</b> → <b>earlier work</b> → <b>gap</b> → <b>aim</b>` },
      ],
    },

    {
      id: 'm3-analyse-article',
      title: 'Analysing a research article: six questions and two worked texts',
      short: 'Analysing an article',
      blurb: 'The six questions the course attaches to its sample scientific texts (question, conclusions, evidence, support, quality, importance), how to judge evidence, a worked analysis of the skin cancer talk and of the brain stimulation study, and a template for writing the analysis.',
      source: 'Module 3 Reading / scientific text for reading - sample.doc (two sample texts and their questions a to f; the hints on judging evidence are general knowledge)',
      tabs: [
        { title: 'The six questions', html: `
          <p class="lead">To <b>analyse</b> a scientific text you ask the same six questions every time. The course sample file puts them under both of its passages.</p>
          <table class="tbl">
            <thead><tr><th>Question</th><th>What it asks you to find</th></tr></thead>
            <tbody>
              <tr><td><b>a. Questions</b></td><td>What <b>question or problem</b> does the paper address?</td></tr>
              <tr><td><b>b. Conclusions</b></td><td>Which <b>conclusions</b> are the chief ones? Are they important or relevant to society?</td></tr>
              <tr><td><b>c. Evidence</b></td><td>What <b>evidence</b> supports those conclusions?</td></tr>
              <tr><td><b>d. Support</b></td><td>Do the data <b>actually support</b> the conclusions?</td></tr>
              <tr><td><b>e. Quality</b></td><td>What is the <b>quality</b> of the evidence?</td></tr>
              <tr><td><b>f. Importance</b></td><td>Why are the conclusions <b>important</b>? (This sixth question is attached to the second passage.)</td></tr>
            </tbody>
          </table>
          <div class="mnemonic"><p>Ask, conclude, prove, match, grade, matter. Question, conclusions, evidence, support, quality, importance.</p></div>
          <div class="note why"><p>The six questions run from what the author says (a, b) to what the author shows (c) to what you judge (d, e, f). Most students stop at the first two; the marks are in the last three.</p></div>
          <div class="note exam"><p>Expect a passage followed by two or three of these questions in your own words. Name the conclusion, then point to the evidence, then judge it.</p></div>
        ` },
        { title: 'Judging the evidence', html: `
          <p class="lead">Questions c, d and e are about proof. First find the evidence, then check that it matches the claim, then grade how good it is.</p>
          <h3>c. What counts as evidence</h3>
          <ul>
            <li>Measured <b>data</b>: counts, rates, readings, test results.</li>
            <li>An <b>experiment or survey</b> with a described method.</li>
            <li>A named <b>expert's statement</b>. This is weaker than data, because it is an opinion about the data.</li>
          </ul>
          <h3>d. Does the evidence match the claim?</h3>
          <div class="vs">
            <div class="side"><h4>Mismatch</h4><p>Data from older patients is used to claim something about young people.</p></div>
            <div class="side"><h4>Match</h4><p>Data from the group in the claim, or a claim limited to the group measured.</p></div>
          </div>
          <h3>e. Quality checks</h3>
          <div class="chips"><span class="chip">sample size</span><span class="chip">control group</span><span class="chip">recorded data or opinion</span><span class="chip">who did the work</span><span class="chip">checked by experts</span><span class="chip">who paid</span><span class="chip">humans or animals</span><span class="chip">correlation or cause</span></div>
          <div class="note heads-up"><p>Not on the slides: this checklist is standard practice. <b>Correlation</b> means two things move together; <b>cause</b> means one makes the other happen. An experiment that changes one factor and uses a control group can support a cause claim. A count of how often two things occur together cannot.</p></div>
        ` },
        { title: 'Sample 1: the skin cancer talk', html: `
          <p class="lead">The first sample reports a talk by a dermatologist, <b>Brett M. Coldiron</b>, at the American Academy of Dermatology's 69th Annual Meeting on <b>February 4</b>. It is a news report, not the paper.</p>
          <div class="kv">
            <div><span>Speaker</span><b>Dermatologist, clinical associate professor, University of Cincinnati</b></div>
            <div><span>Topic</span><b>Rise in non-melanoma skin cancer; why young people are at risk</b></div>
            <div><span>Data</span><b>Medicare claims analysis, treatment nearly doubled 1994 to 2006</b></div>
            <div><span>Numbers</span><b>Over 3.5 million new cases in 2006 (estimate); 3.7 million possible in 2008, against the American Cancer Society's 2 million</b></div>
          </div>
          <ul>
            <li>Basal cell and squamous cell carcinomas are <b>easily treated if detected early</b>.</li>
            <li>The speaker links the rise to a <b>culture of tanning for vanity</b>, such as spring break trips.</li>
            <li><b>UV exposure</b>, natural or artificial, is called the most preventable risk factor.</li>
            <li>People know the risk and <b>still tan</b>; the speaker wants young people to see that tanning now harms appearance later and adds to cancer risk.</li>
            <li>The estimate counts <b>only Medicare patients</b>, so the true figure could be higher once young people are included.</li>
          </ul>
          <h3>The Academy's Be Sun Smart advice</h3>
          <ol>
            <li><b>Sunscreen</b>: broad-spectrum, water-resistant, SPF 30 or more, on all exposed skin; reapply every two hours and after swimming or sweating. Broad-spectrum covers UVA and UVB.</li>
            <li><b>Clothing</b>: long sleeves, pants, wide-brimmed hat, sunglasses.</li>
            <li><b>Shade</b>: rays are strongest from 10 a.m. to 4 p.m.; if your shadow is shorter than you, seek shade.</li>
            <li><b>Children</b>: shade, clothing, sunscreen.</li>
            <li><b>Extra care</b> near water, snow and sand, which reflect rays.</li>
            <li><b>Vitamin D</b> from diet and supplements, not from the sun.</li>
            <li><b>No tanning beds</b>; use a UV-free self-tanner if you want colour, with sunscreen.</li>
            <li><b>Birthday check</b>: look over your skin each birthday and see a dermatologist about any change, growth or bleeding.</li>
          </ol>
        ` },
        { title: 'Analysis of sample 1', html: `
          <p class="lead">Run the six questions on the skin cancer report. Each answer is short and points to the text.</p>
          <div class="worked">
            <div class="given"><p>Analyse the skin cancer report with questions a to e.</p></div>
            <div class="solve">
              <p><b>a. Question.</b> Is non-melanoma skin cancer increasing, and why are young people at risk?</p>
              <p><b>b. Conclusions.</b> Treatment of these cancers nearly doubled between 1994 and 2006; the 2006 total was over 3.5 million; UV exposure from tanning is the most preventable risk factor. These matter to the public because the cancers are common and preventable.</p>
              <p><b>c. Evidence.</b> An analysis of <b>Medicare claims</b>, plus the speaker's claims about tanning culture and studies of behaviour.</p>
              <p><b>d. Support.</b> The doubling is supported by claims data. The statement that <b>young people</b> are at risk is not measured: the speaker says the figure covers only Medicare patients and that young people could raise it. That part is an inference from tanning habits, not a result.</p>
              <p><b>e. Quality.</b> Real claims records over many years are strong. Weak points: claims count <b>treatments</b>, which is not the same as new cases, and the source is a conference talk reported by a press office, with no method or data tables shown.</p>
            </div>
            <div class="result"><p>The rise in treatment is well supported. The claim about young people is reasonable but is not shown by the data quoted.</p></div>
          </div>
          <div class="note trap"><p>Do not say "the data show young people tan more". The text never shows that. It says people tan despite knowing the risk, and that the estimate leaves young people out.</p></div>
        ` },
        { title: 'Sample 2: the brain stimulation study', html: `
          <p class="lead">The second sample is a news release about a study by a team at the <b>University of California San Diego</b> and the <b>Brookhaven and Cold Spring Harbor laboratories</b>. It concerns the <b>lateral habenula</b>, a brain region, and depression.</p>
          <ol class="steps">
            <li><b>Background</b> cells in the lateral habenula fire in response to bad events such as punishment or a missing reward. Yet not everyone who meets disappointment becomes helpless.</li>
            <li><b>Experiment 1</b> the team compared habenula cells in <b>two animal models of learned helplessness</b>, a form of depression, with <b>control animals</b>.</li>
            <li><b>Finding</b> the cells were <b>hyperactive in depressed animals, not in controls</b>, and the degree of hyperactivity matched the degree of helplessness.</li>
            <li><b>Mechanism</b> the overactive cells shut off the <b>dopamine reward system</b>. Earlier work linked the habenula to serotonin and norepinephrine, the targets of current antidepressants.</li>
            <li><b>Experiment 2</b> an electrode in the habenula, simulating <b>deep brain stimulation</b>, markedly reduced excitatory activity leading to the reward centre in rat brain cells.</li>
            <li><b>Experiment 3</b> in living helpless rats, stimulation cut helpless behaviour, but only with the electrode in the right place and at enough intensity.</li>
          </ol>
          <p>The researchers say the work may point to new treatments, including habenula-targeted stimulation, and that genes in these cells could be targeted by drugs or gene methods. Funders named include Brookhaven's research programme, the Simons Foundation, the Dana Foundation and the National Institute of Mental Health.</p>
          <div class="note heads-up"><p>Not on the slides: <b>deep brain stimulation</b> uses an implanted electrode that sends small electric pulses to a chosen brain region. A <b>control group</b> is treated the same way as the test group except for the one thing being studied.</p></div>
        ` },
        { title: 'Analysis of sample 2', html: `
          <p class="lead">This text answers all six questions more clearly than the first, which is why it is a good model.</p>
          <div class="worked">
            <div class="given"><p>Analyse the brain stimulation study with questions a to f.</p></div>
            <div class="solve">
              <p><b>a. Question.</b> How does overactivity in the lateral habenula relate to depression-like behaviour, and can calming it reverse that behaviour?</p>
              <p><b>b. Conclusions.</b> Habenula cells are hyperactive in helpless animals, this switches off the reward system, and stimulating the region reduces helpless behaviour in rats.</p>
              <p><b>c. Evidence.</b> Cell recordings in two animal models against controls, a cell-level stimulation test, and a behavioural test in living rats.</p>
              <p><b>d. Support.</b> Strong for rats: the behaviour fell only with correct electrode placement and enough intensity, which points to the stimulation as the cause. Weaker for humans: the claim that this explains human depression is hedged ("may explain", "may open the door") and rests on animals.</p>
              <p><b>e. Quality.</b> Good design (controls, two models, placement and intensity checks). Limits: animal models, an effect measured in the short term ("acutely"), and a mechanism described as "very likely", not proved.</p>
              <p><b>f. Importance.</b> Possible new treatment for people whose depression resists current drugs, and new targets for drug design.</p>
            </div>
            <div class="result"><p>Convincing for rats, promising but unproven for people. The researchers' own hedging words match that.</p></div>
          </div>
          <div class="note why"><p>Checking the hedging words ("may", "very likely", "in rats") is the fastest way to answer d. Authors usually signal how far their evidence goes.</p></div>
        ` },
        { title: 'Writing your analysis', html: `
          <p class="lead">A written analysis is the six answers turned into a short paragraph per point, with the verdict first.</p>
          <ol class="steps">
            <li><b>One-line verdict</b> say how strong the study is, in plain words.</li>
            <li><b>Question and conclusion</b> in two sentences.</li>
            <li><b>Evidence</b> name the data or experiment, with one number if the text has one.</li>
            <li><b>Support and quality</b> where evidence matches the claim, and where it falls short.</li>
            <li><b>Importance</b> who benefits and what should happen next.</li>
          </ol>
          <div class="vs">
            <div class="side"><h4>Weak analysis</h4><p>The study is about skin cancer and it is good because the doctor is an expert.</p><p><small>No question, no evidence, no judgement of support.</small></p></div>
            <div class="side"><h4>Stronger analysis</h4><p>The talk shows that treatment for non-melanoma skin cancer nearly doubled from 1994 to 2006, based on Medicare claims. That part is well supported. The claim about young people is not measured, because the figures leave them out.</p></div>
          </div>
          <div class="note exam"><p>Examiners give marks for naming the evidence and for one fair criticism. A summary of the passage with no judgement gets only part marks.</p></div>
        ` },
        { title: 'Traps and red flags', html: `
          <p class="lead">Most lost marks come from a few habits. Check your answer against this list.</p>
          <table class="tbl">
            <thead><tr><th>Trap</th><th>Fix</th></tr></thead>
            <tbody>
              <tr><td>Summarising the passage instead of analysing it</td><td>Answer the six questions, using the passage as proof.</td></tr>
              <tr><td>Treating a quote from an expert as evidence</td><td>Look for the data behind the expert.</td></tr>
              <tr><td>Applying a rat or Medicare result to everyone</td><td>Limit the claim to the group studied.</td></tr>
              <tr><td>Confusing an estimate with a count</td><td>Words like "estimated" and "could be" mean it is not measured.</td></tr>
              <tr><td>Ignoring the funders</td><td>Mention who paid and whether they gain.</td></tr>
              <tr><td>Saying "the study proves"</td><td>Say "supports" or "suggests" unless the design shows cause.</td></tr>
            </tbody>
          </table>
          <div class="note example"><p>A passage says a vitamin lowers colds. It reports only that people who take it get fewer colds. That is a link, not a cause: those people may also exercise more.</p></div>
          <div class="note exam"><p>The link between this topic and the inference topics is direct. "Can be inferred" and "not supported" labels from the Reading topics apply to every conclusion you test here.</p></div>
        ` },
      ],
      flashcards: [
        { front: `The six analysis questions in order?`, back: `<b>Questions, conclusions, evidence, support, quality, importance</b>.` },
        { front: `Question d asks...`, back: `Do the data <b>actually support</b> the conclusions?` },
        { front: `Question e asks...`, back: `What is the <b>quality</b> of the evidence?` },
        { front: `Sample 1: whose data and what source?`, back: `<b>Medicare claims</b>, presented by Dr Coldiron at a dermatology meeting.` },
        { front: `Sample 1: what is not supported by the data?`, back: `The risk to <b>young people</b>, because the estimate counts only Medicare patients.` },
        { front: `Sample 1: most preventable risk factor?`, back: `<b>UV exposure</b>, natural and artificial.` },
        { front: `Sample 2: brain region and animals?`, back: `<b>Lateral habenula</b>; <b>rats</b> and two animal models of learned helplessness.` },
        { front: `Sample 2: what shuts off the reward system?`, back: `<b>Hyperactivity</b> of habenula cells, acting through <b>dopamine</b>.` },
        { front: `Sample 2: why does electrode placement matter?`, back: `Helpless behaviour fell only with the electrode in the <b>lateral habenula</b> at enough <b>intensity</b>.` },
        { front: `Correlation vs cause?`, back: `Correlation: things move together. Cause: one <b>produces</b> the other.` },
      ],
      oneLiners: [
        `Analyse any scientific text with six questions: <b>questions, conclusions, evidence, support, quality, importance</b>.`,
        `Evidence means data or a described experiment; an expert's opinion is weaker.`,
        `Check that the evidence covers the group the claim is about.`,
        `Skin cancer talk: Medicare claims show treatment nearly doubled from 1994 to 2006; the claim about young people is inferred.`,
        `Brain study: hyperactive lateral habenula cells in helpless animals; stimulation reduced helpless behaviour in rats.`,
        `Hedging words (may, very likely, in rats) show how far the evidence goes.`,
        `Say who paid for the study and whether they could gain.`,
        `Write the analysis with the verdict first, then the six answers in short paragraphs.`,
      ],
      formulas: [
        { name: 'Six analysis questions', html: `<b>Question</b> → <b>conclusions</b> → <b>evidence</b> → <b>support</b> → <b>quality</b> → <b>importance</b>` },
        { name: 'Support test', html: `<b>Claim</b> about group X needs <b>evidence</b> from group X, in a design that can show <b>cause</b>` },
      ],
    },

    {
      id: 'm3-authors-purpose',
      title: 'Author\'s purpose: why a writer includes a detail',
      short: 'Author\'s purpose',
      blurb: 'How to answer "the author most likely wrote or mentioned this in order to..." questions: the purpose verbs, a four-step method, and the five practice passages (temperature, Social Security, Gothic art, a funeral, warm and cold fronts) with the worksheet\'s answers and reasons.',
      source: 'Module 3 Reading / Authors_Purpose_Worksheet_1.doc.pdf and Authors_Purpose_Worksheet_Answers1.doc.pdf (answers are the highlighted options in the answer sheet; the reasons are written here, since the worksheet only asks "Why did you choose this answer?")',
      tabs: [
        { title: 'What author\'s purpose asks', html: `
          <p class="lead">An <b>author's purpose</b> question asks <b>why</b> the writer put something in, not what it says. You answer with a verb: to explain, to contrast, to intensify.</p>
          <p>The question can be about the <b>whole passage</b> ("The author most likely wrote the passage in order to...") or about <b>one detail</b> ("The author mentions the Depression to...", "The description of the temperature primarily serves to...").</p>
          <table class="tbl">
            <thead><tr><th>Verb</th><th>The writer is...</th></tr></thead>
            <tbody>
              <tr><td><b>explain</b></td><td>making something clear step by step or by reason</td></tr>
              <tr><td><b>describe</b></td><td>showing what something is like</td></tr>
              <tr><td><b>intensify</b></td><td>making a description stronger and more vivid</td></tr>
              <tr><td><b>compare</b></td><td>showing what two things share</td></tr>
              <tr><td><b>contrast</b></td><td>showing how two things differ</td></tr>
              <tr><td><b>identify</b></td><td>naming something as the main one or a cause</td></tr>
              <tr><td><b>list</b></td><td>adding one more item to a group</td></tr>
              <tr><td><b>illustrate</b></td><td>giving an example to show a point</td></tr>
              <tr><td><b>suggest</b></td><td>putting forward an idea without proving it</td></tr>
              <tr><td><b>criticize</b></td><td>finding fault</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: the verb meanings above are standard usage. The worksheet itself only gives the five questions and the answer sheet.</p></div>
        ` },
        { title: 'Four-step method', html: `
          <p class="lead">The wrong options all use real words from the passage. Settle on the verb first, then match it to the options.</p>
          <ol class="steps">
            <li><b>Find the detail</b> the question points to, and read the sentences around it.</li>
            <li><b>Say what it does</b> in your own words before you look at the options: "it makes the cold feel real", "it adds a second cause".</li>
            <li><b>Pick the verb</b> that matches, then find the option with that verb and that subject.</li>
            <li><b>Test the other three</b> against the text. Each should fail on the verb, on the subject or by claiming something the text never says.</li>
          </ol>
          <div class="mnemonic"><p>Do, then match. What does the line do? Then which option says that?</p></div>
          <div class="note trap"><p>Two options often share the same verb with different subjects, or the same subject with different verbs. In question 4 the options differ by one word: contrast, compare, identify, intensify. The verb is the whole answer.</p></div>
          <div class="note exam"><p>The worksheet asks "Why did you choose this answer?" after every item. Write one line: the verb you chose and the words in the passage that show it.</p></div>
        ` },
        { title: 'Intensify: cold and heat', html: `
          <p class="lead">Questions 1 and 4 have the same answer type. When a detail is about a feeling or a sensation, ask whether it is there to make the reader <b>feel</b> it.</p>
          <div class="worked">
            <div class="given"><p><b>Q1 Temperature.</b> A narrator describes a very cold dawn before a departure: 12 degrees below zero, a biting wind, new ice forming on the sea. What does the description of the temperature primarily serve to do?</p></div>
            <div class="solve"><p>The text never says what hardships the boatmen will meet, never compares two groups of boatmen and never gives causes of the cold. It piles up cold details (below zero, biting wind, flakes of ice). Their job is to put the reader in the setting.</p></div>
            <div class="result"><p><b>B.</b> intensify the setting, so the reader can experience the boatmen's difficult journey.</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Tempting but wrong</h4><p>A. explain the hardships the boatmen were about to go through. The passage shows the cold; it does not explain a journey ahead.</p></div>
            <div class="side"><h4>Also wrong</h4><p>D. identify the causes of the temperature decrease. No causes are named.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p><b>Q4 Funeral.</b> A boy narrates a hot, long funeral. The phrase "tiny little rivers of sweat made their way down the middle of my back" is there to...</p></div>
            <div class="solve"><p>The phrase is a figure of speech that makes the heat strong and physical. The creek appears in a different sentence as something the boy wishes for; this phrase does not mention it, so it cannot contrast or compare with it. Heat is the main discomfort, but the question asks what the phrase does, not what the cause is.</p></div>
            <div class="result"><p><b>D.</b> intensify the description of the heat during the funeral.</p></div>
          </div>
        ` },
        { title: 'List: the Depression in Social Security', html: `
          <p class="lead">When a sentence adds a fact to an argument, ask where it sits in the chain: the main reason, or one more reason?</p>
          <div class="worked">
            <div class="given"><p><b>Q2 Social Security.</b> The passage says family care of the old ended when the Industrial Revolution loosened family ties, that the Great Depression of the 1930s made the money problems worse, and that Congress passed the Social Security Act in 1935. Why does the author mention the Depression?</p></div>
            <div class="solve">
              <p>The verb is <b>list</b>: the Depression is one more factor behind the need for the program.</p>
              <ul>
                <li><b>A. identify the primary purpose</b> fails. The word "exacerbated" shows the Depression made things worse. The main shift is the end of family care.</li>
                <li><b>B. criticize FDR</b> fails. Nothing in the passage is critical of him.</li>
                <li><b>C. contrast effectiveness</b> fails. The passage never says how well either system worked.</li>
              </ul>
            </div>
            <div class="result"><p><b>D.</b> list another factor that contributed to the need for the Social Security Program.</p></div>
          </div>
          <div class="note why"><p>"Exacerbated" is the clue. You can only make a problem worse if the problem is already there, so the Depression adds to an existing cause instead of being the first one.</p></div>
        ` },
        { title: 'Suggest: Gothic art', html: `
          <p class="lead">A whole-passage question needs the main idea. For a short argumentative paragraph, find the sentence that says "not X but rather Y".</p>
          <div class="worked">
            <div class="given"><p><b>Q3 Gothic art.</b> The author says the true way to see Gothic art is not as a style bound by fixed rules but as the expression of a temper and spirit that shaped sculpture, painting and architecture across the Middle Ages. Its outward features vary with time and place.</p></div>
            <div class="solve">
              <p>The author argues for a way of looking, so the verb is <b>suggest</b>.</p>
              <ul>
                <li><b>B. intensify the description</b> fails. There is no vivid language to strengthen.</li>
                <li><b>C. no definable characteristics</b> goes too far. The outward features vary, but the author says they come from underlying principles.</li>
                <li><b>D. compare to the art of the Middle Ages</b> fails. Gothic art is part of that period's art, not set beside it.</li>
              </ul>
            </div>
            <div class="result"><p><b>A.</b> suggest that Gothic art is not a style with specific characteristics as much as it is a sentiment from a particular time.</p></div>
          </div>
          <div class="note trap"><p>Option C looks close because it repeats "no definable characteristics". The warning sign is the absolute wording. When a passage says features "vary", an option saying there are none is too strong.</p></div>
        ` },
        { title: 'Contrast: warm and cold fronts', html: `
          <p class="lead">When a passage treats two things side by side and points out differences, the purpose is to <b>contrast</b>. Signal words give it away: <b>instead of, whereas, very different from</b>.</p>
          <div class="worked">
            <div class="given"><p><b>Q5 Fronts.</b> The passage describes a warm front and a cold front: causes, characteristics and results of each.</p></div>
            <div class="solve">
              <p>Warm air replaces cool air in one; cold air replaces warm in the other. One moves south to north, the other north to south. Temperature, pressure and wind change differently. The text says outright that the cold front is "very different".</p>
              <ul>
                <li><b>A. list</b> would be a plain set of items with no stress on difference.</li>
                <li><b>B. describe the causes</b> is too narrow: characteristics and results are also covered.</li>
                <li><b>D. illustrate by describing each facet in detail</b> misses that the passage sets the two fronts against each other.</li>
              </ul>
            </div>
            <div class="result"><p><b>C.</b> contrast the causes, characteristics, and results of warm and cold fronts.</p></div>
          </div>
          <figure data-fig="m3-comparison-patterns"></figure>
          <p>This passage uses the <b>whole to whole</b> pattern: all of the warm front first, then the cold front, with the same points (cause, signs, results) in the same order. The point-to-point pattern would take one point at a time and compare both fronts on it.</p>
          <div class="note heads-up"><p>Not on the slides: the two patterns are standard ways to organise a comparison or contrast. Point to point suits many criteria; whole to whole suits short texts.</p></div>
        ` },
        { title: 'Answer key and traps', html: `
          <p class="lead">The answer sheet highlights one option per question. Here is the key, with the verb that decides each answer.</p>
          <table class="tbl">
            <thead><tr><th>Question</th><th>Answer</th><th>Verb and reason</th></tr></thead>
            <tbody>
              <tr><td><b>1</b> Temperature</td><td><b>B</b></td><td>intensify the setting</td></tr>
              <tr><td><b>2</b> Social Security</td><td><b>D</b></td><td>list another factor</td></tr>
              <tr><td><b>3</b> Gothic art</td><td><b>A</b></td><td>suggest a way of seeing</td></tr>
              <tr><td><b>4</b> Funeral</td><td><b>D</b></td><td>intensify the heat</td></tr>
              <tr><td><b>5</b> Fronts</td><td><b>C</b></td><td>contrast both fronts</td></tr>
            </tbody>
          </table>
          <h3>Why wrong options attract</h3>
          <ul>
            <li><b>Right words, wrong verb</b>: Q4 option B (compare) and option A (contrast) use the church and the creek, but the phrase does neither.</li>
            <li><b>Too narrow</b>: Q5 option B covers only causes.</li>
            <li><b>Too extreme</b>: Q3 option C says no features at all.</li>
            <li><b>Not in the text</b>: Q2 option B (criticize FDR), Q1 option C (two groups of boatmen).</li>
          </ul>
          <div class="note exam"><p>The passages are not scientific, but the skill carries over: in a research article, ask why the author gives a statistic, a quote or a limitation. A statistic usually illustrates, a quote supports, a limitation qualifies the claim.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Q1 temperature description serves to...`, back: `<b>Intensify the setting</b> so the reader feels the journey.` },
        { front: `Q2: why mention the Depression?`, back: `To <b>list another factor</b> that created the need for Social Security.` },
        { front: `Q3: Gothic art passage suggests...`, back: `It is a <b>sentiment of a period</b>, not a style with fixed features.` },
        { front: `Q4: rivers of sweat phrase?`, back: `<b>Intensifies</b> the description of the heat.` },
        { front: `Q5: warm and cold fronts?`, back: `The author <b>contrasts</b> causes, characteristics and results.` },
        { front: `Clue word for contrast?`, back: `<b>Instead of, whereas, very different from</b>.` },
        { front: `Clue word showing the Depression was a second cause?`, back: `<b>Exacerbated</b>: it made existing woes worse.` },
        { front: `Contrast vs compare?`, back: `<b>Contrast</b>: differences. <b>Compare</b>: similarities.` },
        { front: `First step in answering?`, back: `Say what the detail <b>does</b> before reading the options.` },
        { front: `Whole to whole organisation?`, back: `All of A, then all of B, with the same points in the same order.` },
      ],
      oneLiners: [
        `Author's purpose asks <b>why</b> a detail or passage is there; answer with a verb.`,
        `Decide what the line does, then match the option with that verb and subject.`,
        `Vivid sensory detail usually <b>intensifies</b> a setting.`,
        `A fact that adds to an earlier cause is a <b>list another factor</b> purpose.`,
        `A "not X but Y" paragraph <b>suggests</b> a way of seeing something.`,
        `Instead of, whereas and very different signal a <b>contrast</b>.`,
        `Wrong options are too narrow, too extreme or not in the text.`,
        `Key: Q1 B, Q2 D, Q3 A, Q4 D, Q5 C.`,
      ],
      formulas: [
        { name: 'Purpose steps', html: `<b>Find the detail</b> → <b>say what it does</b> → <b>pick the verb</b> → <b>test the other options</b>` },
        { name: 'Why wrong options fail', html: `<b>Wrong verb</b> · <b>too narrow</b> · <b>too extreme</b> · <b>not in the text</b>` },
      ],
    },

    {
      id: 'm3-online-research',
      title: 'Guidelines for online research',
      short: 'Online research rules',
      blurb: 'The eight guidelines for searching and saving material online: results differ by engine and AI app, search with varied technical keywords, mine Wikipedia footnotes, look beyond a site\'s style, check dates, bookmark and cite with a manager, save material before it changes, and download only what you need, with permission and credit.',
      source: 'Module 3 Reading / Guidelines for Online Research.docx (first part, the eight guidelines; the second part, on misinformation, is in the next topic)',
      tabs: [
        { title: 'Different tools, different results', html: `
          <p class="lead">Two people typing the same words into the same search box can get different pages. That is the first guideline: <b>expect different results</b> from different search engines, subject directories and AI apps.</p>
          <ul>
            <li>Search engines use <b>algorithms</b>, sets of rules that weigh <b>where you are located</b>, <b>what you searched before</b> and <b>which sites are most popular</b>, among other factors.</li>
            <li><b>No single search engine</b> can index all the material on the Internet, so each lists different findings.</li>
            <li><b>AI apps</b> such as ChatGPT use different algorithms too, so check what they give you carefully.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>One search, first page of one engine, and the topic is done.</p></div>
            <div class="side"><h4>Right</h4><p>Run the same search in two or three tools (Bing, DuckDuckGo, Google), compare the lists, and verify any AI answer in a real source.</p></div>
          </div>
          <div class="note why"><p>Your location and past searches shape what you see, so a classmate's top result may never reach you. Comparing tools is the cheap way to widen the net.</p></div>
          <div class="note heads-up"><p>The slides point to Chapter 6, "Consider This", of the textbook for more on this. The Secondary sources topic covers the research path from search engine to library database.</p></div>
        ` },
        { title: 'Varied, technical keywords', html: `
          <p class="lead">Choose <b>keywords or search phrases</b> that are <b>varied and technical</b> rather than general. Some search terms give far more useful results than others.</p>
          <div class="kv">
            <div><span>Start with</span><b>electromagnetic radiation</b></div>
            <div><span>Also try</span><b>electromagnetic fields, power lines and health, electrical fields</b></div>
            <div><span>Specialist word</span><b>vertigo</b> instead of <b>dizziness</b></div>
          </div>
          <ul>
            <li><b>Specialised terms</b> give the best access to reliable sites, because professionals write in them.</li>
            <li>If a specialist term returns little, <b>widen the search</b> a little.</li>
            <li>Try <b>different search engines</b>: Bing, DuckDuckGo, Google and others.</li>
          </ul>
          <div class="worked">
            <div class="given"><p>You need reliable material on why a patient feels the room spinning. A search for "dizzy" returns mostly lifestyle pages.</p></div>
            <div class="solve"><p>Swap in the specialist word and add a related phrase: "vertigo causes inner ear". If that is too narrow, drop back to "balance disorders".</p></div>
            <div class="result"><p>Search: <b>vertigo</b>, then <b>vertigo causes</b>, widening to <b>balance disorders</b> only if needed.</p></div>
          </div>
        ` },
        { title: 'Wikipedia and a site\'s look', html: `
          <p class="lead">Two guidelines teach you where to look and what not to trust at first sight.</p>
          <h3>Use Wikipedia's footnotes</h3>
          <p>When using Wikipedia, look carefully at the <b>footnotes and other citations</b>. They point to <b>government documents, library books, credible news stories</b> and <b>published journal articles</b>.</p>
          <h3>Look beyond the style of a site</h3>
          <p>Research (<b>Fogg</b>) shows that the visual <b>look and feel</b> of a website or social media page is the main thing that makes readers think a site is credible. Anyone can build content that looks professional and real.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>"The site has a clean design and charts, so it is reliable."</p></div>
            <div class="side"><h4>Right</h4><p>Check who runs it, who wrote the page, what evidence it gives and when it was updated, then decide.</p></div>
          </div>
          <div class="note why"><p>Design is the one signal a bad site can copy for free. Authors, dates and sources cost effort to fake, so they tell you more.</p></div>
          <div class="note trap"><p>Wikipedia as the end of the trail. The footnote is the source you cite, after you have read it.</p></div>
        ` },
        { title: 'Check the date', html: `
          <p class="lead">Always <b>assess the creation date and updates</b>: when was the material created, posted and last updated?</p>
          <ul>
            <li>Many websites have <b>not been updated in months or years</b>.</li>
            <li>On social media, <b>old news stories are recirculated</b>, and people share a post before checking that the story is years old.</li>
            <li>Less credible news sites <b>bury the date</b> at the bottom of the page or in small print, so readers are drawn in by the headline and pictures and miss that the story is too old to use.</li>
          </ul>
          <div class="worked">
            <div class="given"><p>A post claims a new law starts "next month". The page shows no date near the top.</p></div>
            <div class="solve"><p>Scroll to the footer and page source for a date, or search the headline on a news site. If you cannot find a date, you cannot judge currency.</p></div>
            <div class="result"><p>An undated claim is a lead to check, not a fact to use.</p></div>
          </div>
          <div class="note exam"><p>"Date" is one of the first things to name when a question asks how to judge a web source. Pair it with author and evidence.</p></div>
        ` },
        { title: 'Keep what you find', html: `
          <p class="lead">Two guidelines are about not losing what you found, even when the page changes.</p>
          <h3>Bookmark and track</h3>
          <ul>
            <li>It is frustrating to be unable to find a helpful site you saw earlier. Use <b>bookmarks</b>; most browsers (Chrome, Firefox, Safari) offer apps to save and organise them.</li>
            <li>Use a <b>citation management app</b> such as <b>Zotero</b> or <b>EndNote</b>. The textbook's Appendix A covers these.</li>
          </ul>
          <h3>Save it before it changes</h3>
          <ul>
            <li>Even with the URL, sites <b>change content or go dead</b>.</li>
            <li>Take a snapshot with a <b>screen capture tool</b>: Apple Grab, Microsoft Snipping Tool or Snagit.</li>
            <li>On some social media apps, search <b>specific hashtags</b> to capture and research trends and discussions.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Need</th><th>Tool</th></tr></thead>
            <tbody>
              <tr><td>Find the page again</td><td>bookmark or citation manager</td></tr>
              <tr><td>Keep proof of what it said</td><td>screen capture</td></tr>
              <tr><td>Follow a trend</td><td>hashtag search</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>A saved URL only points to a page. If the page is edited or deleted, you cannot show what you relied on. A snapshot shows it.</p></div>
        ` },
        { title: 'Download and use it ethically', html: `
          <p class="lead">The last guideline covers what you do with material: <b>download only what you need</b>, use it ethically, <b>obtain permission</b> and <b>credit your sources</b>.</p>
          <ul>
            <li>Do not use another person's material in a way that <b>harms its creator</b>.</li>
            <li>For <b>any commercial use</b> of material from social media, a website or another online source, get <b>written permission</b> from the owner.</li>
            <li><b>Credit the source exactly as the owner directs</b>.</li>
            <li>The slides point to the textbook's "Consider This" box on <b>copyright</b>.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Take a photographer's image from a website for your company brochure and cite "Google".</p></div>
            <div class="side"><h4>Right</h4><p>Ask the photographer in writing, state the use, and credit them in the form they ask for.</p></div>
          </div>
          <div class="note trap"><p>"It was online, so it is free" is the usual mistake. Being able to see or download a file does not give you the right to reuse it.</p></div>
        ` },
        { title: 'Putting the guidelines to work', html: `
          <p class="lead">One short research job uses all eight. The topic is power lines and health.</p>
          <ol class="steps">
            <li><b>Several tools</b> search Google, Bing and DuckDuckGo and compare lists.</li>
            <li><b>Varied keywords</b> try electromagnetic fields, electrical fields and power lines and health instead of one phrase.</li>
            <li><b>Wikipedia footnotes</b> follow the footnotes to a government document and a journal article.</li>
            <li><b>Look beyond style</b> a polished site is read for its author, sponsor and evidence.</li>
            <li><b>Dates</b> reject a page with no date or one from many years ago.</li>
            <li><b>Bookmark</b> in a Zotero library with title, author, date and URL.</li>
            <li><b>Snapshot</b> take a screenshot of the key statistics page.</li>
            <li><b>Permission and credit</b> cite each source and ask before reusing a diagram.</li>
          </ol>
          <div class="note exam"><p>A likely question lists a researcher's habits ("uses only the first search result", "saves only the URL") and asks what is wrong. Match each habit to the guideline it breaks.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Why do search results differ between users?`, back: `Algorithms weigh <b>location, past searches, site popularity</b> and more.` },
        { front: `Why try more than one search engine?`, back: `No engine indexes everything; each lists <b>different findings</b>.` },
        { front: `Better keyword than dizziness?`, back: `<b>Vertigo</b>: specialised terms reach reliable sites.` },
        { front: `If a specialised term gives little?`, back: `<b>Widen</b> the search somewhat.` },
        { front: `What do Wikipedia footnotes give you?`, back: `Routes to <b>government documents, books, news, journal articles</b>.` },
        { front: `What mainly makes readers judge a site credible (Fogg)?`, back: `Its visual <b>look and feel</b>, which is why it is a poor test.` },
        { front: `Where do weak news sites put the date?`, back: `At the <b>bottom or in small print</b>.` },
        { front: `Two citation managers?`, back: `<b>Zotero</b> and <b>EndNote</b>.` },
        { front: `Three screen capture tools?`, back: `<b>Apple Grab, Microsoft Snipping Tool, Snagit</b>.` },
        { front: `Commercial use of online material needs...`, back: `<b>Written permission</b> and credit as the owner directs.` },
      ],
      oneLiners: [
        `Different engines and AI apps give different results; compare and check carefully.`,
        `Use varied, technical keywords (vertigo, not dizziness); widen only if needed.`,
        `Follow Wikipedia footnotes to the real sources.`,
        `Do not judge a site by its look: Fogg found look and feel drives perceived credibility.`,
        `Check creation and update dates; weak sites hide them.`,
        `Bookmark, use Zotero or EndNote, and snapshot pages that may change.`,
        `Download only what you need; get written permission for commercial use; credit as directed.`,
      ],
      formulas: [
        { name: 'Searching rules', html: `<b>Compare tools</b> · <b>varied technical keywords</b> · <b>mine footnotes</b> · <b>ignore the look</b> · <b>check the date</b>` },
        { name: 'Saving and using rules', html: `<b>Bookmark</b> · <b>cite with a manager</b> · <b>snapshot</b> · <b>download only what you need</b> · <b>permission and credit</b>` },
      ],
    },

    {
      id: 'm3-misinformation',
      title: 'Identifying misinformation online',
      short: 'Spotting misinformation',
      blurb: 'The APA definitions of misinformation and disinformation, and the six extra checks for online sources: the source and its domain, who is behind it, the author\'s credentials, memes, deepfakes and AI-generated content, and echo chambers with confirmation bias.',
      source: 'Module 3 Reading / Guidelines for Online Research.docx (the "Guidelines for Identifying Misinformation" part; the file stops partway through the last point and its list of fact-checkers is not in the file)',
      tabs: [
        { title: 'Misinformation and disinformation', html: `
          <p class="lead">The American Psychological Association (APA) separates two things: <b>misinformation</b> is false or inaccurate information, <b>getting the facts wrong</b>. <b>Disinformation</b> is false information <b>deliberately intended to mislead</b>.</p>
          <div class="vs">
            <div class="side"><h4>Misinformation</h4><p>A cousin forwards a "cure" he honestly believes in. Wrong, but no plan to mislead.</p></div>
            <div class="side"><h4>Disinformation</h4><p>A seller invents a "cure" to sell it. Wrong and meant to mislead.</p></div>
          </div>
          <p>The APA adds that both kinds have <b>affected our ability</b> to improve public health, address climate change and maintain a stable democracy, among other things.</p>
          <div class="note why"><p>The difference is intent. For your research it does not change the rule: a false claim harms your work whether or not the person sharing it meant to deceive.</p></div>
          <div class="note exam"><p>Give the pair with the key word for each: facts wrong (misinformation) against <b>intent to mislead</b> (disinformation).</p></div>
          <div class="note heads-up"><p>These checks come on top of the eight guidelines in the topic "Guidelines for online research". Use both lists together.</p></div>
        ` },
        { title: 'The source and what is behind it', html: `
          <p class="lead">Two checks look at the site itself: <b>consider the source</b> and <b>consider who or what is behind it</b>.</p>
          <h3>Check the domain name</h3>
          <table class="tbl">
            <thead><tr><th>Domain</th><th>Usually</th><th>What to remember</th></tr></thead>
            <tbody>
              <tr><td><b>.edu</b></td><td>educational institution</td><td>typically bound by laws and professional standards on fairness and accuracy</td></tr>
              <tr><td><b>.gov</b></td><td>government site</td><td>same: standards on fairness and accuracy</td></tr>
              <tr><td><b>.org</b></td><td>organisation</td><td>purpose varies</td></tr>
              <tr><td><b>.com</b></td><td>commercial</td><td>purpose varies</td></tr>
            </tbody>
          </table>
          <h3>Ask what the site is for</h3>
          <ul>
            <li>Is it there to <b>relay information</b>, to <b>sell something</b>, or to <b>promote an ideology or agenda</b>?</li>
            <li>Find out who <b>sponsors</b> the site or feed and how that may shape the quality of the information.</li>
            <li>A <b>.com</b> site may be accurate and still carry a sales pitch.</li>
            <li>Check for <b>political or ideological bias</b> by comparing the claim with one or more recognised sources, such as <b>peer-reviewed papers</b> or <b>credible news outlets</b>.</li>
          </ul>
          <div class="note heads-up"><p>Not on the slides: in India, <b>.gov.in</b>, <b>.nic.in</b> and <b>.ac.in</b> mark government and academic sites, and the same rule applies. Domain alone is only a first clue.</p></div>
        ` },
        { title: 'Author credentials', html: `
          <p class="lead">Expertise is not equal. A title such as "Doctor" tells you little until you check what the person is actually trained in.</p>
          <div class="note example"><p>At the height of the COVID-19 pandemic, many people with the title "Doctor" claimed to have inside information on <b>magical cures</b>. They were typically <b>not trained in virology or immunology</b>, and some were not even medical doctors. The most prolific were trying to make money by selling their own products and services (the slides cite <em>Pandemic Profiteers</em>).</p></div>
          <h3>Check three things</h3>
          <ol class="steps">
            <li><b>Reputation</b> is this person known and respected in the field?</li>
            <li><b>Credentials</b> does the training match the topic?</li>
            <li><b>Assertions</b> are the claims backed by solid, <b>peer-reviewed evidence</b>?</li>
          </ol>
          <p>Then ask where the author falls on the <b>spectrum of expert opinion and accepted theories</b>. A lone voice against every other expert needs very strong evidence.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>"He is a doctor, so he is right about viruses."</p></div>
            <div class="side"><h4>Right</h4><p>"His degree is in dentistry and he sells the product he recommends. I need a virologist or a health agency."</p></div>
          </div>
        ` },
        { title: 'Memes, deepfakes and AI', html: `
          <p class="lead">Pictures and video feel like proof. Three checks cover the formats most likely to fool you.</p>
          <h3>Memes: dig deeper</h3>
          <p>A <b>meme</b> combines text and visuals, which makes it a powerful way to catch and keep attention. Research the <b>source of the meme</b> and check its claims against well-recognised sources.</p>
          <h3>Deepfakes and AI-generated content</h3>
          <ul>
            <li>Research quoted in the slides says that, because of their <b>technical realism</b>, <b>deepfake videos</b> are a growing problem in how misinformation spreads and why people accept the videos as real (Vaccari and Chadwick).</li>
            <li><b>Artificial intelligence (AI) apps</b> add to the problem.</li>
            <li>Search online for the <b>latest ways to tell if a video or image is a deepfake</b>, and use a <b>fact-checker</b>.</li>
          </ul>
          <div class="worked">
            <div class="given"><p>A forwarded video shows a company director's voice telling staff to move money to a new account.</p></div>
            <div class="solve"><p>Do not act on the clip alone. Confirm through another channel the director already uses (a call you place yourself), look for the original source of the video, and search for reports that the clip is fake.</p></div>
            <div class="result"><p>Treat realistic audio and video as a claim to verify, not as proof.</p></div>
          </div>
        ` },
        { title: 'Echo chambers and confirmation bias', html: `
          <p class="lead">The last check is about you. Online information moves fast and tends to <b>cater to what people already believe</b>.</p>
          <ul>
            <li>An <b>echo chamber</b> is a space where the same ideas, often in different formats, <b>reinforce existing beliefs</b>.</li>
            <li><b>Confirmation bias</b> makes people prefer information that agrees with what they already think, even when solid, rational information says otherwise.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Inside the echo chamber</h4><p>Every post in your feed agrees with your view of a new battery, so you stop checking.</p></div>
            <div class="side"><h4>Checking out of it</h4><p>Search for the strongest evidence against your view and read what the best critics say.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: the Drive file stops partway through this point (after "the confirmation bias"). The meaning given here is the standard one.</p></div>
          <div class="note why"><p>You cannot see your own bias from inside it, so build habits that do not depend on feeling right: seek a disagreeing source, and test your claim against recognised ones.</p></div>
        ` },
        { title: 'A quick check list', html: `
          <p class="lead">Before you use an online claim, run the six checks in under two minutes.</p>
          <table class="tbl">
            <thead><tr><th>Check</th><th>Ask</th></tr></thead>
            <tbody>
              <tr><td><b>Source</b></td><td>Which domain? Edu or gov, or commercial?</td></tr>
              <tr><td><b>Purpose</b></td><td>Inform, sell or push a view? Who sponsors it?</td></tr>
              <tr><td><b>Author</b></td><td>Trained in this topic? Peer-reviewed evidence?</td></tr>
              <tr><td><b>Format</b></td><td>A meme, a video or an AI image? Is the origin traced?</td></tr>
              <tr><td><b>Bias</b></td><td>Does it only tell me what I already believe?</td></tr>
              <tr><td><b>Second source</b></td><td>Does a recognised source agree?</td></tr>
            </tbody>
          </table>
          <h3>Fact-checkers</h3>
          <p>The slides tell you to use a fact-checker "listed below" but the list is missing from the file.</p>
          <div class="note heads-up"><p>Not on the slides: well-known fact-checking services include <b>Snopes</b>, <b>FactCheck.org</b>, <b>PolitiFact</b> and, for India, <b>Alt News</b> and <b>BOOM</b>. A reverse image search shows where a picture first appeared.</p></div>
          <div class="note exam"><p>For a scenario question, name the check that fits and say why. A viral post by a "doctor" selling a product fails on author, purpose and second source.</p></div>
        ` },
      ],
      flashcards: [
        { front: `APA: misinformation is...`, back: `False or inaccurate information, <b>getting the facts wrong</b>.` },
        { front: `APA: disinformation is...`, back: `False information <b>deliberately intended to mislead</b>.` },
        { front: `Which domains are typically held to fairness and accuracy standards?`, back: `<b>.edu</b> and <b>.gov</b>.` },
        { front: `.org and .com sites...`, back: `Vary in purpose; look past the <b>first impression</b>.` },
        { front: `Three purposes behind a source?`, back: `<b>Relay information, sell, promote an ideology or agenda</b>.` },
        { front: `How do you test political bias?`, back: `Compare with <b>peer-reviewed papers</b> or <b>credible news outlets</b>.` },
        { front: `COVID-era "experts": what was wrong?`, back: `Not trained in <b>virology or immunology</b>, often selling products.` },
        { front: `How to treat a meme's claim?`, back: `Find its <b>source</b> and check the claim against well-recognised sources.` },
        { front: `Why are deepfakes a problem?`, back: `Their <b>technical realism</b> makes people accept them as real.` },
        { front: `What is an echo chamber?`, back: `Where the same ideas <b>reinforce existing beliefs</b>.` },
      ],
      oneLiners: [
        `Misinformation = wrong facts; disinformation = false and <b>meant to mislead</b> (APA).`,
        `Check the domain: .edu and .gov follow accuracy standards; .org and .com vary.`,
        `Ask whether a source informs, sells or promotes an agenda, and who sponsors it.`,
        `Check an author's reputation, credentials and peer-reviewed evidence, not just a title.`,
        `Trace memes to their source; treat realistic video and AI images as claims to verify.`,
        `Echo chambers and confirmation bias make false claims feel true; seek a second, recognised source.`,
      ],
      formulas: [
        { name: 'Six misinformation checks', html: `<b>Source</b> → <b>purpose</b> → <b>author</b> → <b>format</b> → <b>bias</b> → <b>second source</b>` },
        { name: 'Misinformation vs disinformation', html: `<b>Wrong facts</b> = misinformation · <b>wrong facts meant to mislead</b> = disinformation` },
      ],
    },

    {
      id: 'm3-report-repositories',
      title: 'Where to find reports and papers: the repository list',
      short: 'Report repositories',
      blurb: 'The course\'s list of fifteen places to find authentic reports and open research papers (international bodies, Indian government agencies, technical organisations, research institutes, open-access journals and preprints), what each is good for, and how to pick one for a topic.',
      source: 'Module 3 Reading / Links to Report Repositories.docx (the file is a list of names with one-line notes; the web addresses here are the organisations\' own domains, given as a convenience)',
      tabs: [
        { title: 'What the list is for', html: `
          <p class="lead">A <b>repository</b> is a place where reports and papers are stored and can be searched. The course list gives you <b>real, authentic documents</b> to read, and to practise summarising and writing abstracts on.</p>
          <p>The list has <b>four groups</b> plus a short set of open research paper sites.</p>
          <div class="kv">
            <div><span>Government and international organisations</span><b>7 entries</b></div>
            <div><span>Technical and engineering organisations</span><b>3 entries</b></div>
            <div><span>Research institutes</span><b>2 entries</b></div>
            <div><span>Open research papers</span><b>3 entries</b></div>
          </div>
          <p>The government group splits into <b>international</b> (4) and <b>Indian</b> (3) bodies.</p>
          <div class="note why"><p>These are primary and near-primary sources: written by the organisation that did the work or holds the data. That is the kind of material you can trust more than a news story about it, as in the Secondary sources topic.</p></div>
          <div class="note exam"><p>The list itself is not asked as a question. Its use is in assignments: pick a report from here, read it with the six analysis questions, and write its abstract or summary.</p></div>
          <div class="note heads-up"><p>Practice on these documents fits the abstract and summary topics of Module 4.</p></div>
        ` },
        { title: 'International organisations', html: `
          <p class="lead">Four international bodies publish reports with <b>clear data</b> and policy findings.</p>
          <table class="tbl">
            <thead><tr><th>Organisation</th><th>What it publishes</th><th>Course note</th></tr></thead>
            <tbody>
              <tr><td><b>World Health Organization (WHO)</b> <code>who.int</code></td><td>public health, healthcare, disease prevention</td><td>suited to engineering, biotechnology and healthcare students</td></tr>
              <tr><td><b>UNESCO</b> <code>unesdoc.unesco.org</code></td><td>education, technology, sustainability, culture</td><td></td></tr>
              <tr><td><b>United Nations Development Programme (UNDP)</b> <code>undp.org</code></td><td>sustainable development, climate, governance</td><td></td></tr>
              <tr><td><b>World Bank</b> <code>worldbank.org</code></td><td>technical and analytical reports</td><td>an excellent source with clear data</td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>You need a report on climate and development for a class presentation.</p></div>
            <div class="solve"><p>Climate and governance point to the UNDP; economic data and analysis point to the World Bank.</p></div>
            <div class="result"><p>Start with the <b>UNDP</b> publications, then use the <b>World Bank</b> to support figures.</p></div>
          </div>
        ` },
        { title: 'Indian government reports', html: `
          <p class="lead">Three Indian agencies cover policy and environment topics that suit a student in India.</p>
          <table class="tbl">
            <thead><tr><th>Agency</th><th>What it publishes</th></tr></thead>
            <tbody>
              <tr><td><b>NITI Aayog</b> <code>niti.gov.in</code></td><td>policy and technical reports on education, AI, sustainability, energy and healthcare</td></tr>
              <tr><td><b>Ministry of Environment, Forest and Climate Change</b> <code>moef.gov.in</code></td><td>environmental impact, pollution, biodiversity and climate reports</td></tr>
              <tr><td><b>Central Pollution Control Board (CPCB)</b> <code>cpcb.nic.in</code></td><td>environmental monitoring reports, suitable for engineering students</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Topic: air quality in a city</h4><p>Use <b>CPCB</b> monitoring reports for the readings.</p></div>
            <div class="side"><h4>Topic: national energy plan</h4><p>Use <b>NITI Aayog</b> for the policy view.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: government reports state official positions. Read them for data, and check the date, as for any source.</p></div>
        ` },
        { title: 'Technical and research organisations', html: `
          <p class="lead">Engineering students get the closest match to their own field here: three technical organisations and two research institutes.</p>
          <h3>Technical and engineering organisations</h3>
          <table class="tbl">
            <thead><tr><th>Organisation</th><th>What it publishes</th><th>Course note</th></tr></thead>
            <tbody>
              <tr><td><b>NASA Technical Reports Server</b> <code>ntrs.nasa.gov</code></td><td>engineering and scientific reports, thousands</td><td>ideal for advanced abstract-writing practice</td></tr>
              <tr><td><b>NIST</b> <code>nist.gov</code></td><td>engineering, cybersecurity, manufacturing and AI reports</td><td></td></tr>
              <tr><td><b>European Environment Agency</b> <code>eea.europa.eu</code></td><td>environmental data and sustainability reports</td><td></td></tr>
            </tbody>
          </table>
          <h3>Research institutes</h3>
          <table class="tbl">
            <thead><tr><th>Institute</th><th>What it publishes</th></tr></thead>
            <tbody>
              <tr><td><b>CSIR</b> (Council of Scientific and Industrial Research) <code>csir.res.in</code></td><td>research reports and technical publications across science and engineering</td></tr>
              <tr><td><b>ISRO</b> (Indian Space Research Organisation) <code>isro.gov.in</code></td><td>space technology and scientific reports, suitable for engineering students</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Open research papers', html: `
          <p class="lead">These three sites are headed "good for converting into abstracts": papers anyone can read for free.</p>
          <table class="tbl">
            <thead><tr><th>Site</th><th>What it holds</th></tr></thead>
            <tbody>
              <tr><td><b>Directory of Open Access Journals (DOAJ)</b> <code>doaj.org</code></td><td>thousands of freely accessible research articles</td></tr>
              <tr><td><b>Public Library of Science (PLOS)</b> <code>plos.org</code></td><td>open-access scientific research in many disciplines</td></tr>
              <tr><td><b>arXiv</b> <code>arxiv.org</code></td><td>preprints in engineering, computer science, mathematics, AI and physics</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: a <b>preprint</b> is a paper shared before peer review, so treat its claims as not yet checked. <b>Open access</b> means free to read; DOAJ lists journals that are peer reviewed and open.</p></div>
          <div class="note trap"><p>Treating arXiv like a journal. A preprint can change or be withdrawn after review. Say "preprint" when you cite it.</p></div>
        ` },
        { title: 'Choosing and using a repository', html: `
          <p class="lead">Pick the repository that fits the question, then read what you find the way you read an article.</p>
          <table class="tbl">
            <thead><tr><th>If you need...</th><th>Try</th></tr></thead>
            <tbody>
              <tr><td>health and disease data</td><td>WHO</td></tr>
              <tr><td>economic and development analysis</td><td>World Bank, UNDP</td></tr>
              <tr><td>Indian environmental readings</td><td>CPCB, Ministry of Environment</td></tr>
              <tr><td>aerospace or engineering technical reports</td><td>NASA, ISRO</td></tr>
              <tr><td>standards, cybersecurity, manufacturing</td><td>NIST</td></tr>
              <tr><td>a free research article to summarise</td><td>DOAJ, PLOS, arXiv</td></tr>
            </tbody>
          </table>
          <ol class="steps">
            <li><b>Choose</b> the repository by topic and by type of document.</li>
            <li><b>Search</b> with specialised keywords (see the topic on online research).</li>
            <li><b>Read</b> with the six analysis questions.</li>
            <li><b>Record</b> the title, author or body, date and URL.</li>
            <li><b>Write</b> your abstract or summary from the report, and cite it.</li>
          </ol>
          <div class="note exam"><p>If a scenario asks where a student can find a reliable engineering report, name a repository and say why (a named authority, original data, checked publication).</p></div>
        ` },
      ],
      flashcards: [
        { front: `Which repository suits advanced abstract-writing practice?`, back: `<b>NASA Technical Reports Server</b>.` },
        { front: `World Bank reports are good because...`, back: `They are technical and analytical, with <b>clear data</b>.` },
        { front: `WHO suits which students?`, back: `<b>Engineering, biotechnology and healthcare</b>.` },
        { front: `CPCB publishes...`, back: `<b>Environmental monitoring</b> reports for engineering students.` },
        { front: `NITI Aayog topics?`, back: `Education, <b>AI</b>, sustainability, energy, healthcare.` },
        { front: `NIST covers...`, back: `Engineering, <b>cybersecurity</b>, manufacturing and AI.` },
        { front: `Which Indian institutes are in the research institutes group?`, back: `<b>CSIR</b> and <b>ISRO</b>.` },
        { front: `Three open research paper sites?`, back: `<b>DOAJ, PLOS, arXiv</b>.` },
        { front: `arXiv fields?`, back: `Engineering, computer science, mathematics, AI, physics preprints.` },
        { front: `Which body is on the list from Europe?`, back: `<b>European Environment Agency</b>.` },
      ],
      oneLiners: [
        `The course lists reports and papers by group: international, Indian, technical, research institutes, open papers.`,
        `International: WHO, UNESCO, UNDP, World Bank.`,
        `Indian: NITI Aayog, Ministry of Environment, Forest and Climate Change, CPCB.`,
        `Technical: NASA Technical Reports Server, NIST, European Environment Agency.`,
        `Institutes: CSIR and ISRO.`,
        `Open papers for abstract practice: DOAJ, PLOS, arXiv.`,
        `Match the repository to the topic, then analyse and cite what you read.`,
      ],
      formulas: [
        { name: 'Repository groups', html: `<b>International</b> · <b>Indian government</b> · <b>technical bodies</b> · <b>research institutes</b> · <b>open papers</b>` },
      ],
    },
  ],
  figures: [
    { id: 'm3-article-map', caption: 'The parts of a research article in order, each with the question it answers. Based on BAENG101 course material, VIT.', alt: 'Seven stacked rows: title and abstract (what is it about, in brief), introduction (why was it done), methods (how was it done), results (what was found), discussion (what does it mean), conclusion (so what, and what next), references (whose work was used).' },
    { id: 'm3-comparison-patterns', caption: 'Two ways to organise a contrast: point to point (one criterion at a time, A then B) and whole to whole (all of A, then all of B). Based on BAENG101 course material, VIT.', alt: 'Two stacked panels. Point to point has three rows: criterion 1, 2 and 3, each A then B. Whole to whole has two rows: all of A with criteria 1, 2, 3, then all of B with the same criteria in the same order.' },
  ],
});
