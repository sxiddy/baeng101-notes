CHUNK({
  chunk: 'O',
  module: 'm4',
  topics: [
    // =====================================================================
    // Module 4 Writing / Reviews: the literature review
    // =====================================================================
    {
      id: 'm4-lr-meaning',
      title: 'What a literature review is, and who it is for',
      short: 'Literature review',
      blurb: 'A literature review against a Google search, an annotated bibliography, a summary and a research paper; who writes it, who reads it, why it matters; the seven steps and what synthesis means; three worked topics from the slides.',
      source: 'Module 4 Writing / Reviews / What does Review of Literature mean.pptx (slides 1 to 25) and Writing a Literature Review.pptx (slides 2 to 9)',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">A <b>literature review</b> is a survey of the research already written on your topic: you find it, judge it, and then show where your own work fits. Every thesis, project proposal and journal paper opens with one, so you will write many.</p>
          <p>The slides split the job into three parts:</p>
          <ol class="steps">
            <li><b>Find and read</b> a lot of information about the topic.</li>
            <li><b>Analyse</b> it to see what it means and where it falls short.</li>
            <li><b>Write a summary</b> that shows you understand the topic and why your research matters.</li>
          </ol>
          <h3>Not a Google search</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Google search</th><th>Literature review</th></tr></thead>
            <tbody>
              <tr><td>Aim</td><td>quick answers, general information, a specific website</td><td>to <b>analyse and synthesise</b> scholarly research on one topic</td></tr>
              <tr><td>Driven by</td><td>an immediate need or casual curiosity</td><td>a <b>theoretical framework</b>, a gap to find, expertise to show</td></tr>
              <tr><td>Method</td><td>whatever comes up first</td><td><b>systematic</b>: planned and organised</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>In research, <b>systematically</b> means following a clear, consistent set of steps, with rigour, accuracy, precision, objectivity and transparency. Someone else should be able to see how you searched and chose.</p></div>
          <div class="note example"><p>The slides' picture: you are building a case for a new type of school lunch. You do not copy what you find. You read it, decide which studies are good, spot patterns (more vegetables, less sugar, cost), write up where they agree and disagree and what is missing, then use that to show why your idea matters. It is like researching the best parts for a project: you are proving you know your stuff, not copying.</p></div>
        ` },
        { title: 'Review, bibliography or paper', html: `
          <p class="lead">A literature review is easy to confuse with three other things. The slides separate them.</p>
          <p>"Literature" here does not mean novels or poems. It means the <b>collection of writing and research</b> produced on a topic. The review is a <b>survey and discussion</b> of it: a concise overview of what has been studied, argued and established, usually organised <b>chronologically or thematically</b>, and written in <b>essay format</b>.</p>
          <table class="tbl">
            <thead><tr><th>It is</th><th>How it differs from a literature review</th></tr></thead>
            <tbody>
              <tr><td><b>Annotated bibliography</b></td><td>Takes <b>one item at a time</b>. A review groups related works and discusses trends and developments.</td></tr>
              <tr><td><b>Summary</b></td><td>Only reports. A review <b>evaluates</b> earlier and current research for relevance and usefulness, and relates it to your own project.</td></tr>
              <tr><td><b>Research paper</b></td><td>Supports a position <b>you</b> built from your own analysis. A review summarises and synthesises what <b>experts</b> have argued.</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Annotated bibliography</h4><p>"Smith (2019) tested X. Lee (2020) tested Y. Rao (2021) tested Z."</p></div>
            <div class="side"><h4>Literature review</h4><p>"Three studies tested X, Y and Z (Smith, 2019; Lee, 2020; Rao, 2021). Only Rao used real data, so the claim still needs testing outside the lab."</p></div>
          </div>
          <p>The slides' reason: you organise and present sources by their <b>relationship to your own project</b>. A review also lets you join the intellectual conversation of the past decades or centuries, called <b>academic discourse</b>, from a knowledgeable position.</p>
          <h3>What to write about synthesis</h3>
          <p><b>Synthesising</b> means combining information from several sources into a new, unified understanding: finding connections, analysing patterns, forming one cohesive argument. Instead of simply summarising, you blend the ideas to show how they relate.</p>
          <div class="note trap"><p>A string of "Author A said... Author B said..." paragraphs is an annotated bibliography in essay form. The marker is looking for <b>groups, comparisons and a point of view</b>.</p></div>
        ` },
        { title: 'Who writes, who reads, why', html: `
          <p class="lead">Anyone who needs to summarise current knowledge writes one, and a wide set of people read it.</p>
          <table class="tbl">
            <thead><tr><th>Writer</th><th>Why they write</th></tr></thead>
            <tbody>
              <tr><td><b>Researchers</b> (science, social science, humanities)</td><td>set the context for their own research, show they understand the field, find gaps</td></tr>
              <tr><td><b>Students</b></td><td>coursework, theses and dissertations; a basic academic skill</td></tr>
              <tr><td><b>Academics, professors</b></td><td>publish in journals, summarise the state of a field, ground their own work</td></tr>
              <tr><td><b>Professionals</b> (healthcare, technology)</td><td>keep up with research, inform decisions, support grant proposals</td></tr>
            </tbody>
          </table>
          <p><b>Readers:</b> researchers, students, professors, professionals, grant reviewers, journal editors and reviewers, interested individuals.</p>
          <h3>Seven reasons reviews matter</h3>
          <ul>
            <li><b>Provide context</b>: the current state of knowledge.</li>
            <li><b>Identify gaps</b>: areas needing more research.</li>
            <li><b>Inform research</b>: guide new studies and prevent duplication.</li>
            <li><b>Demonstrate expertise</b>: a deep understanding of the topic.</li>
            <li><b>Support arguments</b>: evidence for claims and theories.</li>
            <li><b>Aid learning</b>: help students and professionals grasp complex topics.</li>
            <li><b>Evaluate research</b>: allow critical assessment of existing work.</li>
          </ul>
          <div class="note why"><p>For an engineer, a review stops you reinventing the wheel. Building a project without knowing the existing solutions wastes time. A strong review impresses professors and employers and is the foundation of a solid project.</p></div>
          <h3>The audience changes the emphasis</h3>
          <ul>
            <li><b>Thesis or dissertation chapter</b>: the reader wants to know why your research is important and original, so stress the <b>gap</b> and convince them there is an opening.</li>
            <li><b>Proposal</b>: persuade the reader that the project is significant and worth funding.</li>
            <li><b>Course assignment</b>: the professor wants proof you know the research done, so show the <b>major areas and key ideas</b>; the gap matters less.</li>
          </ul>
        ` },
        { title: 'Seven steps and the end result', html: `
          <p class="lead">The slides give a short working method. Follow it in order for any topic.</p>
          <ol class="steps">
            <li><b>Define your research question.</b></li>
            <li><b>Search</b> relevant databases (PubMed, Google Scholar) with keywords.</li>
            <li><b>Skim titles and abstracts</b> to pick the key papers.</li>
            <li><b>Organise by themes</b>, not just by date.</li>
            <li><b>Summarise each paper</b>: methodology, results, conclusions, concisely; highlight gaps and inconsistencies.</li>
            <li><b>Synthesise</b>: show how studies relate, building a narrative towards the significance of your research.</li>
            <li><b>Conclude</b> by saying how your work will address these gaps and contribute to the field.</li>
          </ol>
          <p>By the time you finish, the essay should show that you:</p>
          <ul>
            <li>understand the <b>history</b> of what has been written and researched;</li>
            <li>know the significance of <b>current academic thinking</b>, including the controversies;</li>
            <li>have a <b>perspective</b> on what work remains.</li>
          </ul>
          <p>So the review explains <b>what is known and what is not known</b>. If you plan a major project, it saves time and shows where to focus so you do not duplicate existing research.</p>
          <div class="note exam"><p>A frequent short answer: "list the steps of writing a literature review". Give the seven steps above, each with its verb: define, search, skim, organise, summarise, synthesise, conclude.</p></div>
        ` },
        { title: 'Worked: three topics', html: `
          <p class="lead">The slides run the same method on three topics. Compare how each step looks.</p>
          <div class="worked">
            <div class="given"><p><b>Topic:</b> "CRISPR-Cas9 for Targeted Gene Editing in Cancer Therapy."</p></div>
            <div class="solve"><ol class="steps">
              <li><b>Search</b> PubMed and Google Scholar with "CRISPR-Cas9", "cancer therapy", "gene editing".</li>
              <li><b>Skim</b> abstracts for specific cancers, delivery methods, target genes.</li>
              <li><b>Group</b> by theme: efficacy, safety, delivery.</li>
              <li><b>Summarise</b> each study's method, results, limitations.</li>
              <li><b>Synthesise</b>: compare delivery systems, analyse efficacy against specific oncogenes, find recurring safety concerns.</li>
            </ol></div>
            <div class="result"><p><b>Gaps</b> long-term effects and off-target mutations; then suggest future research directions.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p><b>Topic:</b> "Additive Manufacturing of High-Strength Alloys for Aerospace Applications."</p></div>
            <div class="solve"><p>Search Engineering Village and ScienceDirect ("additive manufacturing", "high-strength alloys", "aerospace"). Categorise by <b>alloy type</b> (titanium, aluminium), <b>printing method</b> (SLM, EBM) and <b>mechanical properties</b>. Summarise process, results and limits for tensile strength, fatigue life and microstructure. Synthesise: alloy performance across techniques, the effect of post-processing, the difficulty of consistent properties.</p></div>
            <div class="result"><p><b>Gaps</b> long-term durability and cost-effectiveness.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p><b>Topic:</b> a BTech student asks which sorting algorithm (Bubble, Merge, Quick) is fastest for different data. "Comparing Different Sorting Algorithms for Efficiency."</p></div>
            <div class="solve"><ul>
              <li><b>Search</b>: "Sorting Algorithm Efficiency", "Bubble Sort Analysis", "Merge Sort Performance", "Quick Sort Optimization", "Time Complexity of Sorting Algorithms".</li>
              <li><b>Evaluate sources</b>: papers on time and space complexity; papers that tested with real data; reputable computer science journals or sites.</li>
              <li><b>Find patterns</b>: some papers are theoretical (Big O), others practical; Quick Sort fast but slow in the worst case; Merge Sort consistent but needs more memory; Bubble Sort very slow, fit only for tiny sets; some papers study partly sorted data.</li>
              <li><b>Organise</b>: introduction to sorting; analysis of the three algorithms; comparison on sorted, random and reverse-sorted data; factors (data size, type); a table of Big O for each; a summary of real-world tests.</li>
            </ul></div>
            <div class="result"><p><b>Write</b> the pros and cons of each, which suits which situation, and that theory needs practical testing too. Then state that you will run your own tests on very large data sets, which <b>justifies your experiment</b>.</p></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `Three parts of a literature review?`, back: `<b>Find and read</b>, <b>analyse</b>, <b>write a summary</b> showing why your research matters.` },
        { front: `Google search vs literature review?`, back: `Quick answers and curiosity vs <b>systematic analysis and synthesis</b> of scholarly research.` },
        { front: `What does "systematically" mean in research?`, back: `Planned, organised, methodical: <b>rigour, accuracy, precision, objectivity, transparency</b>.` },
        { front: `Why is a review not an annotated bibliography?`, back: `It <b>groups related works</b> and discusses trends, not one item at a time.` },
        { front: `Review vs research paper?`, back: `A review synthesises <b>experts' thinking</b>; a paper supports <b>your own</b> position.` },
        { front: `What does synthesising mean?`, back: `<b>Combining sources</b> into a new, unified understanding, not just summarising.` },
        { front: `Which readers does a review serve?`, back: `Researchers, students, professors, professionals, <b>grant reviewers, editors</b>, interested individuals.` },
        { front: `Audience: thesis chapter vs course assignment?`, back: `Thesis stresses the <b>gap</b>; a course review shows you know the <b>major areas</b>.` },
        { front: `Step 4 of the seven steps?`, back: `<b>Organise by themes</b>, not just chronologically.` },
        { front: `Sorting-algorithm review: why do your own tests?`, back: `Theory is not enough; <b>practical tests on very large data</b> justify the project.` },
      ],
      oneLiners: [
        'A literature review <b>surveys, judges and synthesises</b> existing research to show where your work fits.',
        'Search is <b>systematic</b> (planned, transparent), unlike a Google search.',
        'It is <b>not</b> an annotated bibliography, a bare summary or a research paper.',
        'It groups sources by <b>theme or time</b>, in essay form, with a point of view.',
        'Seven steps: <b>define, search, skim, organise, summarise, synthesise, conclude</b>.',
        'Readers include professors, <b>grant reviewers and journal editors</b>; the audience sets the emphasis.',
        'It shows <b>what is known and what is not</b>, which saves duplicate work.',
      ],
      formulas: [
        { name: 'Seven steps', html: `<b>Define</b> the question → <b>search</b> databases → <b>skim</b> abstracts → <b>organise</b> by theme → <b>summarise</b> each paper → <b>synthesise</b> → <b>conclude</b> with the gap your work fills` },
        { name: 'Review is not', html: `<b>Not</b> an annotated bibliography (one item at a time), <b>not</b> a summary (no judgement), <b>not</b> a research paper (not your own position)` },
      ],
    },

    {
      id: 'm4-lr-sources',
      title: 'Finding papers and judging how many',
      short: 'Finding papers',
      blurb: 'The databases and repositories the slides list for finding research papers, what each is for, how many sources a review needs, the questions a review should answer, and the slides\' two search examples.',
      source: 'Module 4 Writing / Reviews / What does Review of Literature mean.pptx (slides 15, 16, 26 to 32) and Review of Literature and where to find the research papers.docx',
      tabs: [
        { title: 'Where papers live', html: `
          <p class="lead">Before you can review the literature you have to <b>find</b> it. Papers sit in a handful of kinds of place, and each gives you something different.</p>
          <div class="chips"><span class="chip">Academic databases</span><span class="chip">Academic journals</span><span class="chip">University libraries</span><span class="chip">Theses and dissertations</span><span class="chip">Online repositories</span><span class="chip">Academic books</span><span class="chip">Professional organisation publications</span></div>
          <p>The slide lists these seven. In practice you start at a database, then follow it to the journal or repository that holds the full text.</p>
          <div class="note why"><p>Good sources are peer-reviewed and written by researchers who cite their own sources. That is why the slides tell a student to check that a source comes from a reputable journal or website before using it.</p></div>
          <div class="note exam"><p>If asked "where would you find research papers on X", name <b>at least three different kinds</b> (a database, a repository, a library) and match one to your subject: IEEE Xplore for electronics, PubMed for biomedicine.</p></div>
        ` },
        { title: 'Primary databases', html: `
          <p class="lead">Eight databases are named as <b>primary</b>. Learn what each is for, since the exam asks you to match the database to the subject.</p>
          <table class="tbl">
            <thead><tr><th>Database</th><th>What it is for</th><th>Access</th></tr></thead>
            <tbody>
              <tr><td><b>Google Scholar</b></td><td>a broad search engine for scholarly literature</td><td>free</td></tr>
              <tr><td><b>PubMed</b></td><td>biomedical literature (US National Library of Medicine)</td><td>free to search</td></tr>
              <tr><td><b>Scopus</b></td><td>a large abstract and citation database of peer-reviewed work</td><td>subscription for full access</td></tr>
              <tr><td><b>Web of Science</b></td><td>another comprehensive citation indexing service</td><td>subscription</td></tr>
              <tr><td><b>IEEE Xplore</b></td><td>engineering and computer science; papers, conference proceedings, journals</td><td>mixed</td></tr>
              <tr><td><b>ACM Digital Library</b></td><td>computing and information technology</td><td>mixed</td></tr>
              <tr><td><b>JSTOR</b></td><td>a wide range of journals, books and primary sources</td><td>mixed</td></tr>
              <tr><td><b>ScienceDirect</b></td><td>scientific, technical and medical research; full-text articles</td><td>often subscription</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Some platforms give free access to some papers; others charge for full text. Your <b>university library</b> may subscribe to more, so look there before buying a paper. The slides' web addresses are scholar.google.com, pubmed.ncbi.nlm.nih.gov, scopus.com, webofscience.com, ieeexplore.ieee.org, dl.acm.org, jstor.org and sciencedirect.com.</p></div>
        ` },
        { title: 'Other sources', html: `
          <p class="lead">The slides add six more places, some free, some paid.</p>
          <table class="tbl">
            <thead><tr><th>Source</th><th>What it is</th></tr></thead>
            <tbody>
              <tr><td><b>arXiv</b></td><td>a <b>preprint server</b> for scientific papers, including many literature reviews; physics, mathematics, computer science. Authors share work before formal publication.</td></tr>
              <tr><td><b>ResearchGate</b></td><td>a social networking site for scientists; find and share papers, connect with scholars</td></tr>
              <tr><td><b>Academia.edu</b></td><td>similar to ResearchGate, for sharing academic research</td></tr>
              <tr><td><b>University library websites</b></td><td>online access to the databases the university subscribes to</td></tr>
              <tr><td><b>DOAJ</b> (Directory of Open Access Journals)</td><td>a directory of high-quality, peer-reviewed <b>open access</b> journals</td></tr>
              <tr><td><b>ProQuest Dissertations and Theses Global</b></td><td>theses and dissertations, which <b>always contain literature reviews</b>; subscription needed</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>A <b>preprint</b> on arXiv has not necessarily been peer reviewed. Use it, but say so if you cite it, and check whether a journal version exists.</p></div>
          <h3>Links the slides give for further reading</h3>
          <p>A Central Washington University library guide, the Scribbr page on writing a literature review, and the Purdue OWL page on writing a literature review.</p>
        ` },
        { title: 'How many sources', html: `
          <p class="lead">The number depends on what you are writing.</p>
          <div class="kv">
            <div><span>Typical research paper</span><b>20 to 50 relevant sources</b></div>
            <div><span>Master's thesis</span><b>50 to 100 or more</b></div>
            <div><span>Doctoral dissertation</span><b>100 or more</b></div>
            <div><span>Systematic review, meta-analysis</span><b>a precise method fixes how many are included and how they are chosen</b></div>
          </div>
          <div class="note exam"><p>For this course the slides narrow it: the assessment uses <b>two papers</b>. First identify a broad area you want to review and pick two relevant papers; then summarise them. The next topic gives the format.</p></div>
          <h3>Page limits</h3>
          <p>An <b>assignment</b> review is <b>3 to 4 pages</b>. A <b>thesis</b> review is a full chapter, <b>at least 20 pages</b>.</p>
        ` },
        { title: 'Questions a review should answer', html: `
          <p class="lead">Ask these while you read. They help you sort your sources and shape the review around what <b>you</b> are planning to do.</p>
          <ol>
            <li><b>What has been done to date?</b> The significant discoveries, key concepts, arguments and theories; the important works.</li>
            <li><b>Where has research concentrated?</b> Have there been developments over time? Which methodologies have been used?</li>
            <li><b>Are there gaps?</b> Areas not looked at closely that should be; new ways of seeing the topic.</li>
            <li><b>Are there improved methodologies</b> for researching this subject?</li>
            <li><b>What future directions</b> should the research take?</li>
            <li><b>How will your research build on or depart from</b> earlier work, and what is its contribution to the field?</li>
          </ol>
          <div class="note why"><p>The review organises earlier research <b>in the light of your own project</b>. Question 6 is the one that links the two, and it is the last paragraph of a good review.</p></div>
        ` },
        { title: 'Worked: plan a search', html: `
          <p class="lead">The slides' two search examples.</p>
          <div class="worked">
            <div class="given"><p>You are reviewing <b>sorting algorithm efficiency</b>. List what you search for and how you will judge what you find.</p></div>
            <div class="solve"><ol class="steps">
              <li><b>Keywords</b> (from the slides): "Sorting Algorithm Efficiency", "Bubble Sort Analysis", "Merge Sort Performance", "Quick Sort Optimization", "Time Complexity of Sorting Algorithms".</li>
              <li><b>Keep</b> articles that analyse time and space complexity; <b>prefer</b> those tested on real data.</li>
              <li><b>Check</b> the journal or site is a reputable computer science source.</li>
            </ol></div>
          </div>
          <div class="worked">
            <div class="given"><p>The slides' second search, for a study of COVID-19 school closures, used one database and a date range with a search string. How is it built?</p></div>
            <div class="solve"><p>Database: <b>Web of Science</b>. Dates: <b>1 March 2020 to 30 April 2021</b>. Terms combined with OR and AND: Covid OR Corona OR "SARS-CoV-2" AND school AND learn* OR "test score" OR performance OR competenc* OR achievement OR grades.</p></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `Database for biomedical literature?`, back: `<b>PubMed</b>.` },
        { front: `Databases for engineering and computing?`, back: `<b>IEEE Xplore</b> and the <b>ACM Digital Library</b>.` },
        { front: `Which primary databases need a subscription for full access?`, back: `<b>Scopus</b> and <b>Web of Science</b>; ScienceDirect often.` },
        { front: `What is arXiv?`, back: `A <b>preprint server</b>, so work is shared before formal publication.` },
        { front: `Which database holds theses that always contain literature reviews?`, back: `<b>ProQuest Dissertations and Theses Global</b>.` },
        { front: `What is DOAJ?`, back: `A directory of high-quality, peer-reviewed <b>open access journals</b>.` },
        { front: `Number of sources: research paper, master's, doctoral?`, back: `<b>20 to 50</b>, <b>50 to 100+</b>, <b>100+</b>.` },
        { front: `How many papers in the course assessment?`, back: `<b>Two</b>.` },
        { front: `Page limit: assignment and thesis review?`, back: `<b>3 to 4 pages</b>; thesis <b>minimum 20 pages</b>.` },
        { front: `A question the review must answer about your own work?`, back: `How it <b>builds on or departs from</b> earlier research, and its contribution.` },
      ],
      oneLiners: [
        'Seven kinds of place: databases, journals, libraries, theses, repositories, books, professional bodies.',
        'Match the database to the subject: <b>PubMed</b> biomedical, <b>IEEE Xplore</b> engineering, <b>ACM</b> computing.',
        'Scopus and Web of Science are <b>subscription</b> citation databases; Google Scholar is free.',
        'arXiv holds <b>preprints</b>; DOAJ lists open access journals; ProQuest holds theses.',
        'Typical counts: <b>20 to 50</b> for a paper, 50 to 100+ for a master\'s, 100+ for a doctorate.',
        'The course assessment uses <b>two papers</b>, 3 to 4 pages.',
        'Check each source is reputable and, if possible, tested on <b>real data</b>.',
      ],
      formulas: [
        { name: 'Search plan', html: `<b>Keywords</b> → <b>papers on time and space complexity</b> → <b>tested with real data</b> → <b>reputable source check</b>` },
      ],
    },

    {
      id: 'm4-lr-strategies',
      title: 'Strategies for writing a literature review',
      short: 'LR writing strategies',
      blurb: 'What a review is for, the four analysis tasks (summarise, synthesise, compare, critique) with sample sentence frames, the thesis statement, the five ways to organise the body and the deck\'s sentence templates, time against theme, the conclusion, citing and a revision checklist.',
      source: 'Module 4 Writing / Reviews / Strategies for writing Literature Review.ppt, and Writing a Literature Review.pptx (slides 18 to 21)',
      tabs: [
        { title: 'Purpose and reading questions', html: `
          <p class="lead">A literature review is a <b>critical look</b> at the existing research that matters to your own work. It is never a tour of everything you found.</p>
          <p>It does three jobs for the reader: it gives <b>background</b>, it <b>establishes the importance</b> of the topic, and it <b>demonstrates your familiarity</b> with it. It also lays the ground for further research.</p>
          <div class="note exam"><p>The deck opens with an exercise: answer the review questions for a review you are working on, and see how many you could answer. Do the same with your own topic before you start writing.</p></div>
          <h3>Central questions</h3>
          <ul>
            <li>What do researchers <b>know</b> about this field?</li>
            <li>Why should we (further) <b>study</b> this topic?</li>
          </ul>
          <h3>While you read, ask each source</h3>
          <ol>
            <li>What is the author's <b>main purpose</b>?</li>
            <li>What is the author's <b>theoretical perspective</b> and <b>research methodology</b>?</li>
            <li>Who is the <b>intended audience</b>?</li>
            <li>What is the <b>principal point</b>, conclusion, thesis, contention or question?</li>
            <li>How is the author's <b>position supported</b>?</li>
            <li>How does the study <b>relate to other studies</b> of the problem?</li>
            <li>What does it <b>add to your project</b>?</li>
          </ol>
          <p>Then <b>select only relevant</b> books and articles. Include only sources that help you shape your argument, and resist the urge to put in everything you found.</p>
          <div class="note trap"><p>A review is <b>never just a list of studies</b>. It always offers an argument about a body of research.</p></div>
        ` },
        { title: 'Four analysis tasks', html: `
          <p class="lead">The deck says a review is built from <b>four analysis tasks</b>: summarise, synthesise, compare and critique. All four point at one thing, an <b>argument about the research</b>.</p>
          <figure data-fig="m4-m-lr-four-tasks"></figure>
          <table class="tbl">
            <thead><tr><th>Task</th><th>Questions it answers</th></tr></thead>
            <tbody>
              <tr><td><b>Summarise</b></td><td>In your own words, what are the key findings relevant to your study?</td></tr>
              <tr><td><b>Synthesise</b></td><td>What do we know about the immediate area? What are the key arguments, characteristics, concepts or figures?</td></tr>
              <tr><td><b>Compare</b></td><td>How do the different studies relate? What is new, different or controversial?</td></tr>
              <tr><td><b>Critique</b></td><td>What evidence is lacking, inconclusive, contradicting or too limited? Which designs or methods seem unsatisfactory?</td></tr>
            </tbody>
          </table>
          <p>Together the tasks do three things: assess the <b>strengths and weaknesses</b> of existing research, identify possible <b>gaps</b> in knowledge, and establish a <b>need</b> for current or future research.</p>
          <p>Balance <b>summary and analysis</b> as you write. Keep your purpose in view: how will this review benefit readers, and how does it contribute to your own study?</p>
          <div class="note heads-up"><p>The deck says analysis occurs on two levels and pairs the tasks as summary with synthesis, and comparison with critique, in its sample language (next tab). That pairing is a good way to remember them: first say what the sources found, then judge it.</p></div>
        ` },
        { title: 'Sample language', html: `
          <p class="lead">The deck gives sentence openers for each task. Learn the shape of the sentence, then fit your own sources into it.</p>
          <h3>Summary and synthesis</h3>
          <ul>
            <li>"<b>Author</b> has demonstrated..."</li>
            <li>"Early work by <b>A, B and C</b> was concerned with..."</li>
            <li>"<b>D and E</b> compared algorithms for handling..."</li>
            <li>"Additional work by <b>F, G and H</b> deals with..."</li>
            <li>A synthesis puts several authors behind one claim with citations: the stages-of-development theories are "commonly used" in educational psychology courses (Borich and Tombari, 1997; LeFrancois, 1997; Slavin, 1997).</li>
          </ul>
          <h3>Comparison and critique</h3>
          <ul>
            <li>"In this <b>ambitious but flawed</b> study, Jones and Wang..."</li>
            <li>"These general results... are <b>similar to those reported by</b> Rosenblatt and Roll."</li>
            <li>Contrast with "Some critics have complained that... Others, in contrast, have applauded...", with page numbers: the verse called insecure (Collins 1975, 78), imitative (Richmond 1974, 54 to 66) and incapacitated (Burke 1991, 33, 38).</li>
          </ul>
          <div class="note heads-up"><p>The slide says to use "evaluative words" to articulate critique, but its list of words did not survive in the file.</p></div>
        ` },
        { title: 'Thesis, focus, type and scope', html: `
          <p class="lead">Before the body, settle four questions: what the review is <b>about</b>, what <b>type</b> it is, how <b>far</b> it goes and which <b>discipline</b> it serves. Then state a thesis.</p>
          <h3>Four questions the deck asks</h3>
          <ul>
            <li><b>Focus</b>: what is the specific thesis, problem or research question the review helps to define?</li>
            <li><b>Type</b>: what kind of review am I writing? The deck's list: <b>theory, methodology, policy, quantitative, qualitative</b>.</li>
            <li><b>Scope</b>: what is the scope of the review?</li>
            <li><b>Discipline</b>: what conventions does my field expect?</li>
          </ul>
          <h3>The thesis statement</h3>
          <p>It offers <b>an argument about the literature</b>. It may do any one or a mix of these:</p>
          <ol>
            <li>Offer an argument and critical assessment (a <b>topic plus a claim</b>).</li>
            <li>Provide an overview of current <b>scholarly conversations</b>.</li>
            <li>Point out <b>gaps or weaknesses</b> in the literature.</li>
            <li>Relate the literature to the <b>larger aim of the study</b>.</li>
          </ol>
          <h3>What the introduction does</h3>
          <p>It <b>indicates the scope</b>, <b>demonstrates the importance or need</b> for the research, and gives an <b>overview or map</b> of what follows.</p>
          <div class="vs">
            <div class="side"><h4>Gap stated</h4><p>"Research on the meaning of home has grown over two decades, but few studies have turned that awareness into truly interdisciplinary work." (a gap, after the deck's example)</p></div>
            <div class="side"><h4>Purpose of the review stated</h4><p>"In this article we review and critique scholarship on place-based education to consider the ingredients of a critical place-based pedagogy." (a purpose)</p></div>
          </div>
          <div class="note example"><p>The deck's other two openers: "In this article, I review recent developments in polyvalency and discuss the opportunities for chemical engineers", and a short one that admits difficulties but says art teachers need some knowledge of stage theories, then goes on to review them. Notice each says <b>what is reviewed and why</b> in one or two sentences.</p></div>
        ` },
        { title: 'Five ways to organise', html: `
          <p class="lead">The deck names <b>five common patterns</b> for the body of a review. Pick the one that matches the shape of your sources.</p>
          <figure data-fig="m4-m-lr-patterns"></figure>
          <table class="tbl">
            <thead><tr><th>Pattern</th><th>What you do</th><th>Best when</th></tr></thead>
            <tbody>
              <tr><td><b>Topical</b></td><td>Break the field into subfields, subject areas or approaches; discuss each in turn, sometimes with a critique of each.</td><td>a large body of literature with <b>no one or two standout studies</b> and no clear time sequence</td></tr>
              <tr><td><b>Distant to close</b> (studies grouped by relevance to yours)</td><td>Start with studies that are generally similar to your work; end with those most relevant to it.</td><td>studies of <b>methods or models</b></td></tr>
              <tr><td><b>Debate</b></td><td>Follow strands of research where proponents of different models openly criticise one another.</td><td><b>clear opposing positions</b> exist</td></tr>
              <tr><td><b>Chronological</b></td><td>List studies in order of development.</td><td>the field shows <b>clear development over time</b></td></tr>
              <tr><td><b>Seminal study</b></td><td>Open with a detailed description of one extremely important study; organise later work another way.</td><td>one study <b>laid the groundwork</b> for later research</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The deck calls the second pattern "a type of topical organisation" and the debate pattern "another type of topical approach, with a chronological component".</p></div>
          <div class="note exam"><p>A common short question: "name and describe two ways of organising a literature review". Chronological and thematic (topical) are the two the other deck also gives.</p></div>
        ` },
        { title: 'Templates in the deck', html: `
          <p class="lead">The deck gives these sentence frames alongside the patterns. Its labels for each frame did not survive in the file.</p>
          <ul>
            <li>"Three important areas of this field have received attention: A, B, C. A has been approached from two perspectives F and G. The most important developments in terms of B have been... C has also been an important area of study in this field."</li>
            <li>"Method/Model M (slightly similar to current research) addresses... Drawing upon method/model N (more similar to current research) can help... This study applies the procedure used in method/model O (most similar to current research) to..."</li>
            <li>"There have been two (three, four, etc.) distinct approaches to this problem. The first model posits... The second model argues that the first model is wrong for three reasons."</li>
            <li>"This subject was first studied by X, who argued/found... In (date), Y modified/extended/contradicted X. Today, research by Z represents the current state of the field."</li>
            <li>"The most important research on this topic was the study by X in (date)." After X's study, research fell into two camps.</li>
          </ul>
        ` },
        { title: 'Time or theme, and the conclusion', html: `
          <p class="lead">The other deck gives the two simplest choices, <b>chronological</b> or <b>thematic</b>, and the review ends with a three-part conclusion.</p>
          <div class="vs">
            <div class="side"><h4>Chronological</h4><p>Group sources <b>in order of appearance</b> (usually publication), showing how research changed over time. Good for research methodology, historiographical papers, and any work where time matters. Example: theories of mental illness, from earlier centuries to current theories and the direction of your research.</p></div>
            <div class="side"><h4>Thematic</h4><p>Group sources by the <b>themes or topics</b> they cover. Often stronger organisationally and helps you resist the urge to summarise each source. Example: changes in popular music, with sections on production, dissemination, interpretation and historical studies.</p></div>
          </div>
          <p>Whatever the pattern, a review lives in <b>essay format</b>. Long reviews are broken by <b>headings and subheadings</b> that match the plan set out in the introduction. Each paragraph carries one main idea, announced in a <b>topic sentence</b>.</p>
          <h3>The conclusion does three things</h3>
          <ol class="steps">
            <li><b>Summarise</b> the main findings of your review.</li>
            <li>State the <b>implications for future research</b>.</li>
            <li>Make <b>connections to the current study</b>.</li>
          </ol>
          <div class="note example"><p>The deck's sample conclusion (chimpanzees): it says there is suggestive evidence of understanding intentions, but also negative findings and alternative explanations, so the question is open. It adds that children as young as 14 months seem to understand intentions, but few comparative studies exist. Then it says the present study is the first to compare children, chimpanzees and orangutans directly. Summary, gap, then link to the study.</p></div>
        ` },
        { title: 'Citing sources and revising', html: `
          <p class="lead">Cite whenever an idea is not your own and is not common knowledge. Then revise with the checklist.</p>
          <h3>Using sources well</h3>
          <ul>
            <li><b>Paraphrase</b> key ideas.</li>
            <li>Use <b>quotations sparingly</b>, and introduce them well.</li>
            <li>Use proper <b>in-text citation</b> to credit every idea.</li>
            <li>Keep <b>accurate bibliographic records</b>. Be meticulous about citations.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Quoting</h4><p>Art historian Laurinda Dixon writes that for most women "home was a prison", though one made bearable by love and approval.</p></div>
            <div class="side"><h4>Paraphrasing</h4><p>Dixon argues that the home imprisoned most women, and that three things made the prison attractive: doctors' warnings against idleness, praise for diligent housewives, and a romantic ideal of love and respect (1995, p. 136).</p></div>
          </div>
          <p>The deck's example is about seventeenth-century Dutch women and the home. The paraphrase adds a page number and keeps the idea, not the sentence.</p>
          <h3>Revision checklist</h3>
          <ul>
            <li><b>Title</b>: consistent with the content?</li>
            <li><b>Introduction</b>: does it introduce the review properly?</li>
            <li><b>Thesis</b>: is there a clear claim?</li>
            <li><b>Body</b>: is the organisation clear, with headings?</li>
            <li><b>Topic sentences</b>: is each paragraph's main idea clear?</li>
            <li><b>Conclusion</b>: does it give enough closure?</li>
            <li><b>Spelling and grammar</b>: any major mistakes?</li>
          </ul>
        ` },
      ],
      flashcards: [
        { front: `Three jobs of a literature review for the reader?`, back: `Give <b>background</b>, establish <b>importance</b>, show <b>familiarity</b>.` },
        { front: `The four analysis tasks?`, back: `<b>Summarise, synthesise, compare, critique.</b>` },
        { front: `A review is never just...?`, back: `<b>A list of studies</b>; it offers an argument about a body of research.` },
        { front: `Four things a thesis statement may do?`, back: `Argue and assess, give an overview of the conversation, <b>point out gaps</b>, relate to the study's aim.` },
        { front: `Five patterns for the body?`, back: `<b>Topical, distant to close, debate, chronological, seminal study.</b>` },
        { front: `When is the seminal-study pattern best?`, back: `One study is clearly the <b>most central</b>, laying the groundwork.` },
        { front: `When is the debate pattern best?`, back: `<b>Clear opposing positions</b> exist in the literature.` },
        { front: `Three jobs of the introduction?`, back: `Indicate <b>scope</b>, show the <b>need</b>, give a <b>map</b>.` },
        { front: `Three jobs of the conclusion?`, back: `<b>Summarise</b> findings, <b>future research</b>, <b>link to the study</b>.` },
        { front: `Why is thematic often stronger than chronological?`, back: `It helps you <b>resist summarising</b> source by source.` },
        { front: `Quote or paraphrase?`, back: `<b>Paraphrase</b> key ideas, quote sparingly, cite both.` },
      ],
      oneLiners: [
        'A review is a <b>critical look</b> at existing research, never a list of studies.',
        'Four tasks: <b>summarise, synthesise, compare, critique</b>, ending in an argument.',
        'The thesis is an argument <b>about the literature</b>, not about the world.',
        'Five patterns: topical, <b>distant to close</b>, debate, chronological, seminal study.',
        'Introduction: <b>scope, need, map</b>. Conclusion: findings, future research, link to your study.',
        'Chronological or thematic: thematic helps you resist summary.',
        'Cite ideas that are not yours; paraphrase more than you quote; revise against a checklist.',
      ],
      formulas: [
        { name: 'Four analysis tasks', html: `<b>Summarise</b> (what each found) → <b>synthesise</b> (one picture) → <b>compare</b> (agree, differ) → <b>critique</b> (strengths, gaps) → an <b>argument</b>` },
        { name: 'Pick the pattern', html: `Many equal studies: <b>topical</b> · methods or models: <b>distant to close</b> · opposing camps: <b>debate</b> · development over time: <b>chronological</b> · one central study: <b>seminal study first</b>` },
        { name: 'Review frame', html: `<b>Introduction</b> (scope, need, map) → <b>body</b> (one pattern, headings, topic sentences) → <b>conclusion</b> (findings, future research, link to your study)` },
      ],
    },

    {
      id: 'm4-lr-assignment',
      title: 'The two-paper literature review: formats for the assessment',
      short: 'Two-paper review format',
      blurb: 'What the assessment asks (a mini review of two papers), the essay structure from the slides, the seven-section format, the paragraph-by-paragraph COVID-19 template with its line counts, and the tone and citation notes.',
      source: 'Module 4 Writing / Reviews / What does Review of Literature mean.pptx (slides 31 to 37), Writing a Literature Review.pptx (slides 10 to 18) and Review of Literature and where to find the research papers.docx',
      tabs: [
        { title: 'What is set', html: `
          <p class="lead">For the assessment you do not review fifty papers. You choose <b>two papers</b> on one area, summarise each, and compare them in a short review.</p>
          <ol class="steps">
            <li><b>Pick a broad area</b> you would like to review.</li>
            <li><b>Choose two relevant papers</b> within it.</li>
            <li><b>Summarise</b> them, then compare and synthesise.</li>
            <li><b>Write</b> it in the format below (all three descriptions agree on the core).</li>
          </ol>
          <div class="kv">
            <div><span>Length</span><b>an assignment: 3 to 4 pages</b></div>
            <div><span>Tone</span><b>objective, passive voice</b></div>
            <div><span>Paragraphs</span><b>introduction: at least 1, body: at least 3, conclusion: at least 1</b></div>
            <div><span>One idea</span><b>each main idea in its own paragraph</b></div>
            <div><span>References</span><b>list both papers at the end</b></div>
            <div><span>In-text</span><b>cite when you paraphrase or quote</b></div>
          </div>
          <div class="note exam"><p>The mini review reads as a <b>comparison</b>, so keep the two summaries to the same plan (the same four questions for each). That makes the comparison paragraph easy to write.</p></div>
          <div class="note heads-up"><p>The slides give three descriptions of the same task: an essay structure, a seven-section format and a COVID-19 template. They differ in detail, not in spirit. Follow the one your instructor gives; the next tabs set them out.</p></div>
        ` },
        { title: 'Essay structure', html: `
          <p class="lead">The first description is an essay with an introduction, a body that summarises and compares, a conclusion and a reference list.</p>
          <table class="tbl">
            <thead><tr><th>Part</th><th>What goes in it</th></tr></thead>
            <tbody>
              <tr><td><b>1. Introduction</b></td><td>
                <ul>
                  <li><b>Broad topic</b>: a general overview of the area, and why it matters.</li>
                  <li><b>Focus and scope</b>: narrow to the aspect your two articles address; state that the purpose is to <b>compare, contrast and synthesise</b> them.</li>
                  <li><b>The articles</b>: titles and authors, and the research question or problem both address.</li>
                  <li><b>Thesis or purpose statement</b>: the main argument of the review, for example what it shows about the relationship between the two articles.</li>
                </ul></td></tr>
              <tr><td><b>2. Body: summaries</b></td><td>For each article: <b>research question and hypotheses</b>; <b>methodology and data collection</b>; <b>key findings</b>; <b>conclusions and implications</b>. Article 2 follows the same format as Article 1.</td></tr>
              <tr><td><b>Body: comparative analysis</b></td><td>Similarities and differences in the questions; variations in method and data analysis; contrasting or complementary results; differences in theoretical frameworks; strengths and limitations of each.</td></tr>
              <tr><td><b>Body: synthesis</b></td><td>Overarching conclusions and themes; agreement and disagreement; gaps and unanswered questions; directions for future research.</td></tr>
              <tr><td><b>3. Conclusion</b></td><td><b>Key insights</b> (recap and reinforce); <b>implications and future directions</b>; a <b>concluding statement</b> on the significance of the research.</td></tr>
              <tr><td><b>4. Reference list</b></td><td>A complete, accurate list of the two articles.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Seven sections', html: `
          <p class="lead">The handout gives a longer format that also works for an assignment: seven sections, with a <b>Methodology</b> section for your search.</p>
          <div class="note exam"><p>Page limits: an assignment is <b>3 to 4 pages</b>; a thesis review is at least 20 pages.</p></div>
          <ol class="steps">
            <li><b>Title</b> says what the review covers, with "A Literature Review" or "A Review of the Literature" at the end. The handout's examples: <em>Cybersecurity: Threats, Defense Mechanisms, and Emerging Technologies, A Literature Review</em>; <em>Critical Thinking and Transferability: A Review of the Literature</em>.</li>
            <li><b>Introduction</b> gives an overview and the significance of the topic; explains purpose and scope; states the objectives or research questions.</li>
            <li><b>Methodology</b> describes the search strategy (databases, keywords, inclusion and exclusion criteria); the selection criteria for papers; and why those papers (recent, key studies, a range of perspectives).</li>
            <li><b>Body</b> organises the literature by themes, concepts or subtopics; summarises main findings, theories, methods or arguments; notes relationships, similarities and differences; critically evaluates strengths and limits.</li>
            <li><b>Synthesis and discussion</b> finds patterns, trends and gaps; discusses controversies and unresolved issues; gives your own interpretation; draws connections between studies.</li>
            <li><b>Conclusion</b> summarises main findings; answers the stated objectives; points to future research; states the significance.</li>
            <li><b>References</b> lists every source cited, in one consistent style such as APA, MLA or IEEE.</li>
          </ol>
          <div class="note why"><p>The methodology section is what makes a review <b>systematic</b>: a reader can see how you found and chose your papers.</p></div>
          <div class="note heads-up"><p>The handout adds that the structure may vary with the assignment. Always follow the instructions your instructor gives so the review meets the expected format.</p></div>
        ` },
        { title: 'Paragraph template', html: `
          <p class="lead">The third description is the most specific: a title, an introduction and then a body with the <b>minimum of three paragraphs</b>, each with a line count.</p>
          <p>The model topic: <b>Impact of Covid-19 on the Academic Performance of University Students: A Critical Review of the Literature</b>.</p>
          <table class="tbl">
            <thead><tr><th>Part</th><th>Contents</th></tr></thead>
            <tbody>
              <tr><td><b>Introduction</b> (at least 1 paragraph)</td><td>What is Covid-19? Its impact on different fields, especially education. Why you focus on university students' academic performance. End with: "The present study aims to provide a systematic review of two significant research papers on the impact of Covid-19 on the academic performance of university students."</td></tr>
              <tr><td><b>Body paragraph 1</b></td><td><b>Method</b>: database, dates, keywords and search string; then name the two papers (title and author's full name) chosen for review.</td></tr>
              <tr><td><b>Body paragraph 2</b></td><td><b>First paper</b>: objective or hypothesis (about <b>2 lines</b>); major findings (<b>3 to 4 lines</b>); conclusion, discussion or analysis (<b>2 lines</b>).</td></tr>
              <tr><td><b>Body paragraph 3</b></td><td><b>Second paper</b>: the same three parts, the same line counts.</td></tr>
              <tr><td><b>Conclusion</b> (at least 1 paragraph)</td><td>Discuss the findings of the two papers together; say what mitigates the effects.</td></tr>
            </tbody>
          </table>
          <h3>Sentence frames the template gives</h3>
          <ul>
            <li>"In <b>title of the paper</b>, the <b>full name of the author</b> has analysed the impact of Covid-19 on the academic performance of university students in <b>place</b> from the period <b>x to y</b>. He or she has attempted to study..."</li>
            <li>A conclusion for a negative effect: "Results indicate a negative effect of school closures on student achievement, specifically in younger students and students from families with low socioeconomic status. This can be attributed to... Certain measures can be identified that might mitigate these negative effects... First, ... Second, ..."</li>
          </ul>
          <div class="note trap"><p>You must <b>summarise and paraphrase</b> the paper's main points. Use direct quotes only when you want the author's exact lines, and put them in quotation marks.</p></div>
        ` },
        { title: 'Tone and in-text citations', html: `
          <p class="lead">Three style rules sit under every one of the formats.</p>
          <ul>
            <li><b>Objective tone and passive voice.</b> "The data were collected from..." rather than "I found that...".</li>
            <li><b>One main idea per paragraph.</b> Introduction at least one paragraph, body at least three, conclusion at least one.</li>
            <li><b>In-text citations</b> whenever you paraphrase or quote.</li>
          </ul>
          <p>The slides' examples show the shape: "Social media use has been found to be linked to addictive behaviour" followed by <b>(Holmes, 2020, p. 32)</b> or <b>(Geraghty et al., 2017, p. 344)</b>. The author-date pattern is APA; the referencing topics later in this module set out APA and IEEE in full.</p>
          <div class="vs">
            <div class="side"><h4>Active, first person</h4><p>"I looked at two papers and I think the first is better."</p></div>
            <div class="side"><h4>Objective, passive</h4><p>"Two papers were selected for review. The first uses a larger sample and its findings are therefore more reliable (Holmes, 2020, p. 32)."</p></div>
          </div>
          <div class="note heads-up"><p>The slide writes the second example as "Geraghti et.al.". The usual form is <b>et al.</b>, with a full stop only after "al". Check author names and spellings against the paper itself.</p></div>
        ` },
      ],
      flashcards: [
        { front: `How many papers does the assessment review?`, back: `<b>Two</b>, picked from one broad area.` },
        { front: `Page limit of an assignment review?`, back: `<b>3 to 4 pages</b>.` },
        { front: `Minimum paragraphs: introduction, body, conclusion?`, back: `<b>1, 3, 1</b>.` },
        { front: `Tone and voice for the review?`, back: `<b>Objective</b>, in the <b>passive voice</b>.` },
        { front: `What goes in a paper summary in the body?`, back: `<b>Question, method, findings, conclusions and implications.</b>` },
        { front: `The seven-section format?`, back: `Title, introduction, <b>methodology</b>, body, synthesis and discussion, conclusion, references.` },
        { front: `Line counts for each paper paragraph in the template?`, back: `Objective <b>2</b>, findings <b>3 to 4</b>, conclusion <b>2</b>.` },
        { front: `The last sentence of the template introduction says...?`, back: `The present study aims to provide a <b>systematic review of two papers</b>.` },
        { front: `When do you use a direct quote?`, back: `Only for the author's <b>exact lines</b>, in quotation marks, with a citation.` },
      ],
      oneLiners: [
        'The assessment is a <b>mini review of two papers</b>: summarise each, compare, synthesise.',
        'Essay format: <b>introduction, body (summaries, comparison, synthesis), conclusion, references</b>.',
        'The seven-section format adds a <b>methodology</b> that shows how you searched and chose.',
        'The template body: method paragraph, then one paragraph per paper (2, 3 to 4, 2 lines).',
        'Write in an <b>objective tone and passive voice</b>, one idea per paragraph.',
        'Paraphrase and cite in-text; quote only exact lines; list both papers under References.',
      ],
      formulas: [
        { name: 'Two-paper review', html: `<b>Introduction</b> (topic, focus, the two papers, purpose) → <b>body</b> (method · paper 1 · paper 2 · comparison and synthesis) → <b>conclusion</b> → <b>references</b>` },
        { name: 'Paper paragraph', html: `<b>Objective</b> (2 lines) → <b>major findings</b> (3 to 4 lines) → <b>conclusion or analysis</b> (2 lines), with an in-text citation` },
      ],
    },

    {
      id: 'm4-lr-sample',
      title: 'Reading a sample literature review (Reece)',
      short: 'Sample review (Reece)',
      blurb: 'A guided read of the sample review "Critical Thinking and Transferability" and the margin notes that point out its moves: the opening, the section plan, how the writer judges sources, how it closes, and its Works Cited list.',
      source: 'Module 4 Writing / Reviews / Sample Literature Review.pdf (Gwendolyn Reece, 2002, with margin annotations)',
      tabs: [
        { title: 'What the sample is', html: `
          <p class="lead">The sample is an <b>annotated model</b>: a nine-page review whose margin notes label what each part is doing. Use it to see the moves from the other topics in real writing.</p>
          <p>The introduction to the sample says Reece <b>might have written a traditional research paper</b> on the history of critical thinking in American education, with quotations to support her ideas. Instead she reviews <b>the scholarly sources themselves</b>. She explains how scholarly opinion developed over time, where leading scholars agree and disagree, which sources carry more authority than others, and where more research is needed.</p>
          <div class="kv">
            <div><span>Title</span><b>Critical Thinking and Transferability: A Review of the Literature</b></div>
            <div><span>Author, date</span><b>Gwendolyn Reece, 9 April 2002</b></div>
            <div><span>Citation style</span><b>MLA (author and page in brackets, Works Cited list)</b></div>
            <div><span>Layout</span><b>headings and subheadings that match the plan in the introduction</b></div>
          </div>
          <div class="note why"><p>This is what the other topics describe: the <b>sources are the subject</b>, grouped by question, with the writer's judgement on them. A reader finishes knowing what is settled, what is disputed and what is missing.</p></div>
          <div class="note heads-up"><p>The sample deals with American education. You do not need the subject; look at <b>how</b> the paragraphs behave.</p></div>
        ` },
        { title: 'The opening', html: `
          <p class="lead">The margin notes show the introduction doing six jobs in three paragraphs.</p>
          <table class="tbl">
            <thead><tr><th>Margin note</th><th>What the paragraph does</th></tr></thead>
            <tbody>
              <tr><td>States why the subject is important</td><td>Since the 1960s there has been worry that American students cannot <b>transfer</b> the skills they learn to practical problems of life. This gave rise to the "critical thinking movement".</td></tr>
              <tr><td>States the purpose of the review</td><td>To <b>ascertain whether there is compelling evidence</b> that efforts to teach critical thinking result in that transfer.</td></tr>
              <tr><td>Identifies gaps and previews the order</td><td>Four <b>prior questions</b> must be answered first: is there a common definition; does critical thinking include or oppose creative thinking; is it general or tied to subject matter; are there adequate measures? This supplies the review's structure.</td></tr>
              <tr><td>Establishes limits of the project's scope</td><td>Programme descriptions are out of scope unless they bear on subject dependence; some major figures are left out because of limited access; evaluative studies are scarce.</td></tr>
              <tr><td>Long reviews are broken by headings</td><td>Each heading matches an item the introduction previewed.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>The introduction runs from <b>importance to purpose to scope to gap</b>. Use the same order in your own review.</p></div>
        ` },
        { title: 'The body, section by section', html: `
          <p class="lead">The body follows the four prior questions, then turns to the evidence. This is a <b>topical</b> plan with a <b>debate</b> in most sections.</p>
          <table class="tbl">
            <thead><tr><th>Heading</th><th>What it covers</th></tr></thead>
            <tbody>
              <tr><td><b>The Common Theme</b> of the Critical Thinking Movement</td><td>reasons proponents give: a changing economy, citizenship, resistance to self-delusion, thinking as part of being human; all agree that rote teaching does not develop it</td></tr>
              <tr><td><b>What is Critical Thinking?</b></td><td>a spectrum: skills and taxonomies (Bloom), skills plus dispositions (Ennis, Paul), thoughtfulness as a virtue (Schrag)</td></tr>
              <tr><td><b>Critical vs. Creative Thinking</b></td><td>for most thinkers creative thinking is not in conflict; Belenky, Walters and DeBono treat them as different skills</td></tr>
              <tr><td><b>Is Critical Thinking Subject-Dependent?</b></td><td>McPeck says thinking is always about something; Paul and Ennis object; four teaching schemes: general, infusion, immersion, mixed</td></tr>
              <tr><td><b>Evaluation of Critical Thinking</b></td><td>Baron's four axes of programme evaluation; Halpern's challenges; whether tests differ from IQ tests</td></tr>
              <tr><td><b>Transferability of Critical Thinking</b></td><td>Perkins: acquisition, making it automatic, transfer; "high-road" (intentional) and "low-road" (spontaneous) transfer</td></tr>
              <tr><td><b>Some Studies of Programme Effectiveness and Transfer</b></td><td>the Venezuela study (400 seventh graders), Royalty's two studies, Lehman and Nisbett, Hendricks (poor transfer)</td></tr>
              <tr><td><b>Conclusions and Needs for Additional Research</b></td><td>the evidence is mixed; research needs listed</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The topical and debate labels are ours. The sample itself shows the first three headings answering the first three prior questions, and the last sections answering the fourth.</p></div>
        ` },
        { title: 'How the writer judges', html: `
          <p class="lead">The margin notes catch the review <b>doing analysis</b>, not just reporting. Spot each move in the sample.</p>
          <ul>
            <li><b>A position held by several experts is summarised</b> and they go into one citation, as in the first reasons paragraph (Bloom; Reich; Paul; Nickerson).</li>
            <li><b>The same source can be cited more than once.</b> The note says this is the <b>difference from an annotated bibliography</b>: sources are grouped by idea, not by item.</li>
            <li><b>Strengths and weaknesses of leaders in the field are pointed out.</b> Bloom's taxonomy is praised as logical, hierarchical and easy to evaluate; criticised because teachers use it as a "cookbook", and for overemphasising recall and neutrality.</li>
            <li><b>The writer expresses an opinion</b>, with "I" kept minimal: "Paul overstates his case", "I do believe that Paul is correct" on value neutrality.</li>
            <li><b>Contradicting or opposing views are included</b> alongside the majority view.</li>
            <li><b>Experts on opposing sides are grouped</b> (the critical against the creative camp), and the ones who stand out are highlighted (DeBono, "the gleeful maverick").</li>
            <li><b>Sources are evaluated and flaws exposed.</b> Royalty's first study is called flawed because its assumptions already treat belief in the paranormal as illogical; his second is "more promising".</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Report only</h4><p>"Royalty tested critical thinking against belief in the paranormal."</p></div>
            <div class="side"><h4>Report and judge</h4><p>"Royalty's first study is flawed because it assumes the answer: it has already counted belief in the paranormal as illogical."</p></div>
          </div>
          <div class="note exam"><p>CAT questions on a sample review usually ask you to <b>identify one move</b> and say where in the sample it occurs. Use the list above as your vocabulary.</p></div>
        ` },
        { title: 'The close and Works Cited', html: `
          <p class="lead">The review ends with a conclusion that concludes <b>with an overview and summary of the existing research, along with suggestions for future study</b>, and then a list of sources.</p>
          <h3>The conclusion</h3>
          <ul>
            <li>The evidence on transfer is <b>mixed</b>.</li>
            <li>The cause is a basic disagreement on <b>what critical thinking means</b>.</li>
            <li>All instruments test <b>skills</b>, not dispositions or thoughtfulness.</li>
            <li>The writer states a position: the most convincing view is that critical thinking needs <b>both skills and dispositions</b>, and general skills exist even if fields favour different ways of knowing.</li>
          </ul>
          <p>Then a list of what <b>additional research</b> is needed: compare IQ tests with critical thinking tests; study dispositions; more quantitative and qualitative studies; compare the infusion and general models; test transfer instruction, including long-term studies; explore the link between creative and critical thinking.</p>
          <h3>The Works Cited list</h3>
          <p>The sample uses <b>MLA</b>. Entries are alphabetical by author. The margin notes point out the format for a second work by the same author: a dash line in place of the name.</p>
          <div class="vs">
            <div class="side"><h4>Book (MLA, as in the sample)</h4><p>Belenky, M.F. <em>Women's Ways of Knowing: The Development of Self, Voice and Mind</em>. New York: Basic Books, 1986. Print.</p></div>
            <div class="side"><h4>Journal article (MLA, as in the sample)</h4><p>Halpern, D.F. "Assessing the Effectiveness of Critical-Thinking Instruction." <em>The Journal of General Education</em>, 42.4 (1993): 238-254. Print.</p></div>
          </div>
          <div class="note heads-up"><p>The sample follows an older MLA style (publisher city, "Print"). Current MLA (9th edition) drops the city and "Print". The MLA style is not one of the two this course names for engineering; for APA and IEEE see the referencing topics.</p></div>
        ` },
        { title: 'Worked: label the moves', html: `
          <p class="lead">Practise the vocabulary on lines taken from the sample (short extracts, credited to the course sample).</p>
          <div class="worked">
            <div class="given"><p>"Paul also criticizes Bloom for overemphasizing recall... With regard to his first point, Paul overstates his case; misuse of the taxonomy does not invalidate the design itself." Label the moves.</p></div>
            <div class="solve"><p>The first sentence <b>reports a criticism</b> by one expert of another. The second <b>judges that critic</b>, with a reason: misuse of a tool does not prove the tool is poorly designed.</p></div>
            <div class="result"><p>Critique of a critique. The writer is <b>evaluating sources and exposing flaws</b>, and stating a view with minimal "I".</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>A paragraph reports the Venezuela study: four hundred seventh graders took a year-long course of 56 lessons, four tests were given before, during and after, and the same tests went to a control group. What is this paragraph doing?</p></div>
            <div class="solve"><p>It <b>describes the design</b> of a study that the review is about to judge: sample, intervention, measures, control group.</p></div>
            <div class="result"><p>A method summary, which sets up the verdict that the study "seems to strongly indicate transferability".</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Which line from the conclusion is a gap, and which is a recommendation?</p></div>
            <div class="solve"><p>"All of the evaluation instruments test critical thinking as skills and do not test for dispositions" is a <b>gap</b>. "Ways of studying critical thinking dispositions need to be created" is a <b>recommendation</b>.</p></div>
            <div class="result"><p>Gap first, recommendation second: the order a review's conclusion follows.</p></div>
          </div>
          <div class="note heads-up"><p>The second example is our paraphrase of the sample; the figures (400 pupils, 56 lessons, four tests) are the sample's.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Who wrote the sample review, on what?`, back: `<b>Gwendolyn Reece</b>, on critical thinking and transferability (2002).` },
        { front: `What does the sample review instead of writing a research paper?`, back: `It reviews <b>the scholarly sources</b>: development, agreement, authority, gaps.` },
        { front: `Order of the sample's introduction?`, back: `<b>Importance, purpose, gap, scope</b>.` },
        { front: `Four prior questions the review answers first?`, back: `<b>Definition, creative thinking, subject dependence, evaluation.</b>` },
        { front: `Difference from an annotated bibliography, per the margin note?`, back: `The <b>same source may be cited more than once</b>.` },
        { front: `Four teaching schemes in the sample?`, back: `<b>General, infusion, immersion, mixed.</b>` },
        { front: `Perkins' two types of transfer?`, back: `<b>High-road</b> (intentional) and <b>low-road</b> (spontaneous).` },
        { front: `How does the sample's conclusion end?`, back: `With a list of <b>research needed</b> and a Works Cited list.` },
        { front: `Citation style used in the sample?`, back: `<b>MLA</b> with a Works Cited list.` },
      ],
      oneLiners: [
        'The sample review treats <b>sources as its subject</b>, not the world.',
        'Opening order: <b>importance, purpose, gap, scope</b>, with a preview of the section plan.',
        'Headings match the plan the introduction promised.',
        'The writer <b>evaluates</b> sources, keeps "I" minimal and includes opposing views.',
        'The same source is cited several times: the mark of a review, not a bibliography.',
        'The conclusion gives an overview and <b>suggestions for future study</b>; a Works Cited list follows.',
      ],
      formulas: [
        { name: 'Review introduction', html: `<b>Importance</b> → <b>purpose</b> → <b>gap or prior questions</b> → <b>scope limits</b> → plan that the headings follow` },
        { name: 'Analysis moves to spot', html: `<b>group</b> experts · <b>cite</b> a source more than once · <b>weigh</b> strengths and weaknesses · <b>include</b> opposing views · <b>expose</b> a flawed study · <b>conclude</b> with needs` },
      ],
    },

    // =====================================================================
    // Module 4 Writing / Research Writing: abstracts, more
    // =====================================================================
    {
      id: 'm4-abstract-more',
      title: 'Abstracts: purposes, contents, types and tenses',
      short: 'Abstracts in more depth',
      blurb: 'What "abstract" means, why journals and databases need one, when to write it, the five sections and seven kinds of information it can hold, informative, descriptive and structured types, the tense rules by discipline, and keywords.',
      source: 'Module 4 Writing / Research Writing / Lesson plan for writing abstracts.docx, Writing an Abstract for Your Research Paper.pdf (UW-Madison Writing Center) and Writing_an_Abstract_Update_051112.docx (University of Melbourne)',
      tabs: [
        { title: 'Meaning and warm-up', html: `
          <p class="lead">The lesson plan opens with a word game: you have heard "abstract" before, but in <b>research</b> it means a short stand-alone summary of your paper.</p>
          <h3>Everyday meanings (the plan's warm-up)</h3>
          <ul>
            <li><b>Existing in thought</b>, not physically: "abstract concepts such as love or beauty".</li>
            <li><b>Art</b> that does not represent external reality but uses shapes, colours and textures.</li>
            <li><b>To consider separately</b> from something else: to abstract science from its historical context.</li>
            <li><b>To extract or remove</b>: to abstract more water from streams.</li>
            <li><b>A summary</b> of a book, article or speech: "an abstract of her speech".</li>
          </ul>
          <h3>In research</h3>
          <p>An abstract is a short statement about your paper that gives the reader a <b>complete yet concise understanding</b> of its research and findings. Think of it as a <b>mini version of the paper</b>, similar to a social media bio.</p>
          <div class="kv">
            <div><span>Length in the plan</span><b>about 6 to 7 sentences, 150 to 250 words</b></div>
            <div><span>Why keywords</span><b>they make the work findable in a search and help other researchers reach it</b></div>
            <div><span>Homework</span><b>pick up journals in your subject and photograph three abstracts and their citations</b></div>
          </div>
          <div class="note exam"><p>The plan also covers a <b>case-study structure</b>: background, introduction or context; statement of the problem or questions; method; description of the situations, dialogues or incidents; findings (the factors that affected the situation); conclusion (what you learned, and a suggestion). Summarising an article and plagiarism are the next sessions; both have their own topics in this module.</p></div>
        ` },
        { title: 'Why, when and how long', html: `
          <p class="lead">An abstract earns its place by helping two kinds of reader, a <b>person deciding</b> what to read and a <b>search tool</b> finding it.</p>
          <h3>What it does</h3>
          <ul>
            <li><b>Selection</b>: readers decide quickly whether the paper is relevant and whether to read all of it.</li>
            <li><b>Preparation</b>: it prepares the reader for the detail and the arguments that follow.</li>
            <li><b>Memory</b>: later, it helps readers remember the key points.</li>
            <li><b>Indexing</b>: library databases search abstracts, so retrieval is quick. Search engines and bibliographic databases use the abstract and the title to find the key terms of a paper, so both must carry the words a researcher would search for.</li>
          </ul>
          <h3>When one is required</h3>
          <div class="chips"><span class="chip">Submitting articles to journals</span><span class="chip">Applying for research grants</span><span class="chip">Submitting a thesis</span><span class="chip">Proposing a conference paper</span></div>
          <h3>When to write it</h3>
          <p>It comes first on the page but should be written <b>last</b>, once you know your conclusions and what you are summarising. A course or a journal may set its own rules for what to include and how to organise it, so follow those first.</p>
          <h3>How long</h3>
          <table class="tbl">
            <thead><tr><th>Source</th><th>Length</th></tr></thead>
            <tbody>
              <tr><td>Lesson plan, UW-Madison</td><td>6 to 7 sentences, <b>150 to 250 words</b></td></tr>
              <tr><td>Melbourne handout</td><td>one paragraph of about <b>250 words</b>, indented and single spaced</td></tr>
              <tr><td>The course task (Sample Abstracts)</td><td>about <b>100 words</b></td></tr>
              <tr><td>Module 6 slide and the paper slides</td><td><b>300 words or fewer</b>; or 3 per cent of the paper</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>The sources disagree because the genres differ. The rule is simple: <b>follow the limit given for your task</b>, and when none is given, aim for 150 to 250 words.</p></div>
        ` },
        { title: 'What to include', html: `
          <p class="lead">Two handouts list the contents. They say the same thing at two levels of detail, and both fit the <b>aim, method, findings, conclusion</b> plan from the earlier abstract topic.</p>
          <h3>Five sections (Melbourne)</h3>
          <ol class="steps">
            <li><b>Reason for writing</b> why the research matters; why a reader would want the larger work.</li>
            <li><b>Problem</b> what the work tries to solve; scope; main argument, thesis or claim.</li>
            <li><b>Methodology</b> models or approaches used; for non-scientific work, the types of evidence.</li>
            <li><b>Results</b> specific data in scientific work; more general findings in others.</li>
            <li><b>Implications</b> how the work adds to knowledge; practical or theoretical applications; future research.</li>
          </ol>
          <h3>Seven kinds of information (UW-Madison)</h3>
          <ol>
            <li>The <b>context or background</b>: the general topic and the specific topic.</li>
            <li>The <b>central question</b> or statement of the problem.</li>
            <li><b>What is already known</b>: what earlier research has shown.</li>
            <li>The <b>reason, rationale or goal</b>: why it matters; a gap filled; a fresh look with new methods; a dispute resolved.</li>
            <li>Your <b>methods</b>.</li>
            <li>Your main <b>findings, results or arguments</b>.</li>
            <li>The <b>significance or implications</b>.</li>
          </ol>
          <table class="tbl">
            <thead><tr><th>Four-part plan</th><th>Covers</th></tr></thead>
            <tbody>
              <tr><td><b>Aim</b></td><td>background, central question, reason, (known work, briefly)</td></tr>
              <tr><td><b>Method</b></td><td>methodology or methods</td></tr>
              <tr><td><b>Findings</b></td><td>results, main findings or arguments</td></tr>
              <tr><td><b>Conclusion</b></td><td>significance, implications</td></tr>
            </tbody>
          </table>
          <p>The proportion and the order differ by field and by genre, and some information is implied rather than stated. An abstract must be <b>intelligible on its own</b> and, usually, <b>cite no references</b>. APA's manual gives separate guidance for empirical studies, literature reviews or meta-analyses, theoretical papers, methodological papers and case studies. Models help: look at abstracts of research similar to yours.</p>
        ` },
        { title: 'Types of abstract', html: `
          <p class="lead">Abstracts come in several kinds. The course task is the <b>informative</b> kind.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><b>Informative</b></td><td>Acts as a <b>substitute for the paper</b>: presents the key arguments and conclusions, the context and importance, reasons for methods, principal results. Most abstracts in the Melbourne handout are of this kind.</td></tr>
              <tr><td><b>Descriptive</b></td><td>Describes the work, more like an <b>outline</b>. Usually very short, <b>100 words or less</b>. (The paper slides call this type "indicative".)</td></tr>
              <tr><td><b>Structured</b></td><td>Split into <b>labelled sections</b> with strict word limits, set by the journal: Objective, Methods, Results, Conclusions.</td></tr>
            </tbody>
          </table>
          <h3>Other ways to give a quick view</h3>
          <p>One science journal in the UW sample calls the opening paragraph a <b>"Summary"</b>, not an abstract. The same article offers more than that: a <b>graphical abstract</b>, a <b>bulleted list of highlights</b> and a two-sentence <b>"In Brief"</b>. The point: readers want several quick ways in.</p>
          <div class="vs">
            <div class="side"><h4>Descriptive</h4><p>"This paper examines how indoor plants affect workplace stress and productivity."</p></div>
            <div class="side"><h4>Informative</h4><p>"Plants in two of four offices over three months cut reported stress and raised productivity slightly, most in tasks needing sustained attention."</p></div>
          </div>
          <div class="note exam"><p>If asked which type a given abstract is, look for <b>results</b>. Numbers, findings and a conclusion mean informative; only a statement of topic and scope means descriptive.</p></div>
        ` },
        { title: 'Verb tenses', html: `
          <p class="lead">The tense of an abstract is not random. The UW-Madison page shows the pattern in four samples.</p>
          <table class="tbl">
            <thead><tr><th>Field</th><th>Present tense for</th><th>Past tense for</th></tr></thead>
            <tbody>
              <tr><td><b>Social science</b> (Sample 1)</td><td>general facts and interpretations, the prevailing explanation, and the study's own methods, findings, arguments and implications</td><td>previous research</td></tr>
              <tr><td><b>Humanities</b> (Sample 2)</td><td>what is happening in the texts, their meaning and significance, the article's arguments</td><td>completed events in the past (the pulp fiction industry in the 1970s and 80s)</td></tr>
              <tr><td><b>Science</b> (Samples 3 and 4)</td><td>the rationale (what remains to be done), introducing the study ("Here we report..."), the significance</td><td>what earlier studies did, what the authors did, the methods and the findings</td></tr>
            </tbody>
          </table>
          <p>So the difference between the course samples (past tense for what was done and found) and the UW social science sample (present tense) is <b>real</b>: both are used. Check the convention of your field.</p>
        ` },
        { title: 'Reading sample abstracts', html: `
          <p class="lead">The Melbourne handout gives two full abstracts and the UW page four more. Read them for the plan, not the subject.</p>
          <h3>Pham, "Their War" (history, social science)</h3>
          <table class="tbl">
            <thead><tr><th>What it says</th><th>Section</th></tr></thead>
            <tbody>
              <tr><td>Despite vast American research on the Vietnam War, little is known of the South Vietnamese military's own perspective; the image in the literature is negative.</td><td><b>Reason and problem</b></td></tr>
              <tr><td>The study recovers that perspective through <b>qualitative interviews with 40 veterans</b> living in San Jose, Sacramento and Seattle.</td><td><b>Methodology</b></td></tr>
              <tr><td>The veterans' explanations complicate three assumptions: corruption at the top hurt morale; racial relations with Americans were hostile; the army was apathetic.</td><td><b>Results</b></td></tr>
              <tr><td>The stories add nuance; part of research on non-American perspectives; oral histories are a largely untapped source that will help future work.</td><td><b>Implications</b></td></tr>
            </tbody>
          </table>
          <h3>"Quantifying the Mechanics of a Laryngoscopy" (engineering)</h3>
          <p>It opens with the procedure and its stakes (failure 0.1% or less for experienced physicians, 10 to 33% for paramedics), says that improved training is needed and that virtual reality holds promise, then states the objective: <b>measure the mechanics</b> so an advanced training mannequin can be built. It describes the <b>instrumented laryngoscope</b> (6-axis force and torque sensor plus a magnetic position sensor), the users (physicians and residents), and the future plan.</p>
          <h3>The four UW samples</h3>
          <ul>
            <li><b>Social sciences</b>: new findings about the reasons for rising economic homogamy among spouses (Gonalons-Pons and Schwartz, <em>Demography</em>, 2017).</li>
            <li><b>Humanities</b>: an argument about the cultural significance of underground pulp fiction in Tanzania (Callaci, 2017).</li>
            <li><b>Sciences</b>: a new method for reprogramming adult mouse fibroblasts into cardiac progenitor cells (Lalit et al., <em>Cell Stem Cell</em>, 2016).</li>
            <li><b>Structured abstract</b>: antibiotic therapy for acute bacterial sinusitis in children (Wald, Nash and Eickhoff, <em>Pediatrics</em>, 2009).</li>
          </ul>
          <div class="note heads-up"><p>The engineering abstract reports work done and work planned, not final results, so it is a progress-style abstract. The sample annotations for the first three UW samples did not survive in the file, so the descriptions above are the page's own one-line labels.</p></div>
        ` },
        { title: 'The structured abstract', html: `
          <p class="lead">One UW sample is a <b>structured abstract</b>. The journal requires four labelled sections with strict word limits, so the labels do the annotating.</p>
          <div class="kv">
            <div><span>Objective</span><b>antibiotic use in acute bacterial sinusitis (ABS) in children is controversial; the study tests high-dose amoxicillin with potassium clavulanate</b></div>
            <div><span>Methods</span><b>randomised, double-blind, placebo-controlled; children aged 1 to 10; stratified by age and severity; symptom survey on days 0 to 30; examined on day 14; rated cured, improved or failed</b></div>
            <div><span>Results</span><b>2,135 screened; 139 (6.5%) had ABS; 56 randomised; 28 on the antibiotic, 28 on placebo</b></div>
            <div><span>Conclusions</span><b>ABS is a common complication of viral upper respiratory infections; the antibiotic gave significantly more cures and fewer failures than placebo, by parental report</b></div>
          </div>
          <table class="tbl">
            <thead><tr><th>Outcome</th><th>Antibiotic (28)</th><th>Placebo (28)</th></tr></thead>
            <tbody>
              <tr><td>Cured</td><td>14 (50%)</td><td>4 (14%)</td></tr>
              <tr><td>Improved</td><td>4 (14%)</td><td>5 (18%)</td></tr>
              <tr><td>Treatment failure</td><td>4 (14%)</td><td>19 (68%)</td></tr>
              <tr><td>Withdrew</td><td>6 (21%)</td><td>none listed</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Keywords', html: `
          <p>Put the <b>key terms a researcher would search for</b> in the abstract itself, because library databases let users search abstracts (Melbourne).</p>
        ` },
      ],
      flashcards: [
        { front: `Length of an abstract in the lesson plan?`, back: `About <b>6 to 7 sentences, 150 to 250 words</b>.` },
        { front: `Why are keywords important in an abstract?`, back: `They make the work <b>findable</b> in searches.` },
        { front: `Two reasons readers use an abstract?`, back: `<b>Selection</b> (is it relevant?) and <b>indexing</b> (retrieval in databases).` },
        { front: `When is an abstract required?`, back: `<b>Journal articles, grant applications, theses, conference proposals</b>.` },
        { front: `When do you write it?`, back: `<b>Last</b>, once you know your conclusions.` },
        { front: `The five sections in the Melbourne handout?`, back: `<b>Reason, problem, methodology, results, implications.</b>` },
        { front: `Descriptive vs informative abstract?`, back: `Descriptive: outline, <b>100 words or less</b>. Informative: a <b>substitute for the paper</b> with findings.` },
        { front: `What is a structured abstract?`, back: `<b>Labelled sections</b> with strict word limits (Objective, Methods, Results, Conclusions).` },
        { front: `Tense in a science abstract?`, back: `<b>Past</b> for methods and findings; <b>present</b> for rationale and significance.` },
        { front: `Tense for a humanities abstract's arguments?`, back: `<b>Present</b>; past for completed historical events.` },
      ],
      oneLiners: [
        '"Abstract" in research = a short stand-alone summary, a <b>mini version of the paper</b>.',
        'It serves <b>selection</b> (should I read it?) and <b>indexing</b> (can a search find it?).',
        'Required for journal articles, grant applications, theses and conference proposals.',
        'Write it <b>last</b>; follow the limit the course or journal sets, else 150 to 250 words.',
        'Contents: <b>reason, problem, method, results, implications</b>, or the UW seven kinds.',
        '<b>Informative</b> abstracts give results; <b>descriptive</b> ones outline in 100 words or less.',
        'A <b>structured</b> abstract has labelled sections; tenses follow the field.',
      ],
      formulas: [
        { name: 'Five sections (Melbourne)', html: `<b>Reason</b> → <b>problem</b> → <b>methodology</b> → <b>results</b> → <b>implications</b>` },
        { name: 'Informative or descriptive', html: `<b>Informative</b> = results and conclusions, a substitute for the paper · <b>descriptive</b> = what the paper covers, 100 words or less` },
        { name: 'Abstract tenses', html: `Science: <b>past</b> for what was done and found, <b>present</b> for why and what it means · humanities: <b>present</b> for arguments` },
      ],
    },

    // =====================================================================
    // Module 4 Writing / Research Writing: referencing (IEEE, APA)
    // =====================================================================
    {
      id: 'm4-citing-basics',
      title: 'Citing sources: what a citation is and which style to use',
      short: 'Citing sources',
      blurb: 'What a citation does and can include, which style belongs to which field (APA, MLA, Chicago), the source types the citation guides cover, and the in-text citation examples in the literature review decks.',
      source: 'Module 4 Writing / Research Writing / Module 6 Academic Writing & Editing.pdf (citation formats slides), with the in-text examples from Writing a Literature Review.pptx and Strategies for writing Literature Review.ppt',
      tabs: [
        { title: 'What a citation does', html: `
          <p class="lead">A <b>citation</b> is a way of giving credit to individuals for their creative and intellectual works that you used to support your research.</p>
          <p>The Module 6 slide gives three jobs:</p>
          <ol>
            <li><b>Give credit</b> to the individuals whose work you used.</li>
            <li><b>Locate</b> particular sources.</li>
            <li><b>Combat plagiarism.</b></li>
          </ol>
          <p>A citation can include the <b>author's name</b>, the <b>date</b>, the <b>location of the publishing company</b>, the <b>journal title</b> or the <b>DOI</b> (Digital Object Identifier).</p>
        ` },
        { title: 'Styles and who uses them', html: `
          <p>The citation style sometimes depends on the academic discipline involved:</p>
          <table class="tbl">
            <thead><tr><th>Style</th><th>Used by</th></tr></thead>
            <tbody>
              <tr><td><b>APA</b> (American Psychological Association)</td><td>Education, Psychology and Sciences</td></tr>
              <tr><td><b>MLA</b> (Modern Language Association)</td><td>Humanities</td></tr>
              <tr><td><b>Chicago/Turabian</b></td><td>Business, History and the Fine Arts</td></tr>
            </tbody>
          </table>
          <p>The slide adds: consult your professor to find out what your course requires.</p>
          <h3>What the citation guides cover</h3>
          <p>The slide "Citation materials: MLA, APA, Chicago" lists: author/editor/publisher formats; audio/visual materials; books, ebooks and chapters; encyclopedias; magazines; journals; newspapers; personal communications; websites; parenthetical citations.</p>
        ` },
        { title: 'In-text citations in the decks', html: `
          <p><b>Writing a Literature Review</b> (two-paper task): list the two papers as "References" at the end of your review, and use in-text citations when paraphrasing or quoting. Its example:</p>
          <p class="example">Social Media use has been found to be linked to addictive behaviour. (Holmes, 2020, p. 32)/ (Geraghti et.al., 2017, p. 344)</p>
          <p><b>Strategies for writing Literature Review</b>: use proper in-text citation to document the source of ideas, and be meticulous about citations. Its sample paragraph cites critics this way: (Collins 1975, 78), (Richmond 1974, 54-66), (Burke 1991, 33, 38).</p>
        ` },
      ],
      flashcards: [
        { front: `What is a citation?`, back: `A way of <b>giving credit</b> to individuals for the creative and intellectual works you used.` },
        { front: `Three jobs of a citation?`, back: `Give credit, <b>locate sources</b>, <b>combat plagiarism</b>.` },
        { front: `What can a citation include?`, back: `Author's name, date, location of the publishing company, journal title or <b>DOI</b>.` },
        { front: `Which fields use APA?`, back: `<b>Education, Psychology and Sciences.</b>` },
        { front: `Which field uses MLA?`, back: `The <b>Humanities</b>.` },
        { front: `Which fields use Chicago/Turabian?`, back: `<b>Business, History and the Fine Arts.</b>` },
      ],
      oneLiners: [
        'A citation gives credit, helps locate sources and <b>combats plagiarism</b>.',
        'APA: education, psychology, sciences. MLA: humanities. Chicago/Turabian: business, history, fine arts.',
        'Consult your professor for the style your course requires.',
      ],
      formulas: [
        { name: 'In-text example (deck)', html: `(<b>Holmes, 2020, p. 32</b>) · (<b>Geraghti et.al., 2017, p. 344</b>)` },
      ],
    },

    {
      id: 'm4-ieee',
      title: 'IEEE style: numbered citations and the reference list',
      short: 'IEEE referencing',
      blurb: 'The course files do not cover IEEE style; the Module 6 citation slides name only APA, MLA and Chicago.',
      source: 'Module 4 Writing / Research Writing / Module 6 Academic Writing & Editing.pdf (citation formats slides). The Drive files give no IEEE rules.',
      tabs: [
        { title: 'What the files say', html: `
          <p class="lead">The Module 4 Drive files give <b>no IEEE rules</b>. The Module 6 citation slides name only <b>APA, MLA and Chicago/Turabian</b>, and tell you to consult your professor about the style your course requires.</p>
        ` },
        { title: 'Styles the slides name', html: `
          <table class="tbl">
            <thead><tr><th>Style</th><th>Used by</th></tr></thead>
            <tbody>
              <tr><td><b>APA</b></td><td>Education, Psychology and Sciences</td></tr>
              <tr><td><b>MLA</b></td><td>Humanities</td></tr>
              <tr><td><b>Chicago/Turabian</b></td><td>Business, History and the Fine Arts</td></tr>
            </tbody>
          </table>
        ` },
      ],
      flashcards: [
        { front: `Which citation styles do the Module 6 slides name?`, back: `<b>APA, MLA and Chicago/Turabian.</b>` },
        { front: `Does the Drive give IEEE rules?`, back: `<b>No.</b>` },
        { front: `Which fields use APA?`, back: `<b>Education, Psychology and Sciences.</b>` },
        { front: `Who decides the style for your course?`, back: `Consult your <b>professor</b>.` },
      ],
      oneLiners: [
        'The course files give no IEEE rules; the slides name APA, MLA and Chicago only.',
        'MLA is used by the Humanities.',
        'Chicago/Turabian is used by Business, History and the Fine Arts.',
      ],
      formulas: [],
    },

    {
      id: 'm4-apa',
      title: 'APA style: what the course files say',
      short: 'APA referencing',
      blurb: 'What the course files say about APA: the fields it is used in, the author-year-page in-text example in the literature review deck, and the source types the citation guides cover.',
      source: 'Module 4 Writing / Research Writing / Module 6 Academic Writing & Editing.pdf (citation formats slides) and Writing a Literature Review.pptx (slide 17)',
      tabs: [
        { title: 'How APA appears in the files', html: `
          <p class="lead"><b>APA</b> (American Psychological Association) style is used by <b>Education, Psychology and Sciences</b> (Module 6 slides). The APA slides refer to the <b>6th edition</b>.</p>
          <p>The citation guides cover these source types: author/editor/publisher formats, audio/visual materials, books, ebooks and chapters, encyclopedias, magazines, journals, newspapers, personal communications, websites, and parenthetical citations.</p>
        ` },
        { title: 'The in-text example', html: `
          <p>Writing a Literature Review: use in-text citations when paraphrasing or quoting, and list the papers as "References" at the end.</p>
          <p class="example">Social Media use has been found to be linked to addictive behaviour. (Holmes, 2020, p. 32)/ (Geraghti et.al., 2017, p. 344)</p>
          <p>The pointer gives the <b>author</b>, the <b>year</b> and the <b>page</b>.</p>
        ` },
      ],
      flashcards: [
        { front: `What does APA stand for?`, back: `<b>American Psychological Association.</b>` },
        { front: `Which fields use APA?`, back: `<b>Education, Psychology and Sciences.</b>` },
        { front: `What does the deck's in-text example give?`, back: `Author, year and page: <b>(Holmes, 2020, p. 32)</b>.` },
        { front: `What heading do the two papers go under?`, back: `<b>References</b>, at the end of the review.` },
      ],
      oneLiners: [
        'APA: Education, Psychology and Sciences; the slides refer to the 6th edition.',
        'In-text: author, year, page, e.g. (Holmes, 2020, p. 32).',
        'List the papers as <b>References</b> at the end of the review.',
      ],
      formulas: [
        { name: 'APA in-text (deck example)', html: `(<b>Author, year, p. n</b>), e.g. (Holmes, 2020, p. 32)` },
      ],
    },

    // END-TOPICS
  ],
  figures: [
    { id: 'm4-m-lr-four-tasks', caption: 'The four analysis tasks of a literature review, summarise, synthesise, compare and critique, all leading to an argument about the research and never just a list of studies. Based on BAENG101 course material, VIT.', alt: 'Four coloured stacked boxes: summarise (say what each source found), synthesise (join sources into one picture), compare (where sources agree and differ), critique (judge strengths and weaknesses). An arrow leads down to a final box: an argument about the research, never just a list of studies.' },
    { id: 'm4-m-lr-patterns', caption: 'Five common patterns for organising the body of a literature review: topical, distant to close, debate, chronological and seminal study, each with a one-line description. Based on BAENG101 course material, VIT.', alt: 'Five coloured stacked boxes. Topical: subtopics, each taken in turn. Distant to close: loosely related first, closest work last. Debate: camps argue, show each side. Chronological: the field changed over time. Seminal study: one key study first, then the rest.' },
  ],
});
