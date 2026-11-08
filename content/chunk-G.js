CHUNK({
  chunk: 'G',
  module: 'm1',
  topics: [
    {
      id: 'm1-5cs-overview',
      title: 'The 5 Cs of technical writing',
      short: 'The 5 Cs: overview',
      blurb: 'Why the textbook builds its own list of five qualities, how the five were cut down from the eight IEEE 830 qualities, what each C means in one line, and how the Cs are checked (mostly by other people).',
      source: 'Module 1 Introduction to Technical Communication / 5 C\'s of TW.pdf (textbook pages 36-37 and 41)',
      tabs: [
        { title: 'Why five Cs', html: `
          <p class="lead">Nobody has a widely accepted <b>quality standard for technical writing</b>. So the textbook (Laplante) builds its own checklist, borrowed from requirements engineering, and calls it the <b>5 Cs</b>.</p>
          <p>The reading starts by saying that technical writing is marked by <b>conciseness and precision</b>. Those are qualities of the <b>writing style and of the author</b>. The 5 Cs go further: they describe the <b>document</b>, whatever the style.</p>
          <ul>
            <li>There are standards for <b>specialised document types</b>, for example <b>IEEE 829-1998</b> for software testing.</li>
            <li>But those standards give only <b>templates</b> that structure the document. They do not tell you what makes the writing good.</li>
            <li>Requirements engineering writes a lot of technical prose, so its quality rules are a fair starting point.</li>
          </ul>
          <div class="kv">
            <div><span>Problem</span><b>no accepted quality standard for technical writing</b></div>
            <div><span>Borrowed from</span><b>requirements engineering</b> (IEEE 830)</div>
            <div><span>Result</span><b>the 5 Cs</b>, the author's own set</div>
          </div>
          <div class="note heads-up"><p>The page starts with the end of the previous section, on <b>allegory</b>. The author says allegory makes boring material interesting and carries a point across many applications, but warns that <b>the point may be missed</b>. His students did not get the meaning of his Chinese restaurant story. It is a side remark, not part of the 5 Cs.</p></div>
          <div class="note exam"><p>If asked why the 5 Cs exist, say: <b>there is no standard for the quality of technical writing</b>, only document templates, so the author derived five qualities from the IEEE 830 requirements standard.</p></div>
        ` },
        { title: 'From eight to five', html: `
          <p class="lead">IEEE 830-1993 listed <b>eight qualities</b> of a good requirements document. The author keeps <b>five</b> and renames two to make the list start with C.</p>
          <p>A <b>System Requirements Specification (SRS)</b> is a typical piece of technical writing: a high-level description of the functions and features of a proposed system. The <b>requirements engineer</b> draws requirements out of people and turns them into that written document. IEEE 830 was the standard for such documents, titled "Requirements Engineering for Systems and Software". It was <b>retired in 2011</b> but is still a useful guide.</p>
          <figure data-fig="m1-5cs-from-ieee"></figure>
          <table class="tbl">
            <thead><tr><th>IEEE 830 quality</th><th>Kept for any technical writing?</th><th>5 Cs name</th></tr></thead>
            <tbody>
              <tr><td>1. Correct</td><td>yes</td><td><b>Correct</b></td></tr>
              <tr><td>2. Unambiguous</td><td>yes, word swapped</td><td><b>Clear</b></td></tr>
              <tr><td>3. Complete</td><td>yes</td><td><b>Complete</b></td></tr>
              <tr><td>4. Consistent</td><td>yes</td><td><b>Consistent</b></td></tr>
              <tr><td>5. Ranked for importance and/or stability</td><td>dropped</td><td></td></tr>
              <tr><td>6. Verifiable</td><td>dropped</td><td></td></tr>
              <tr><td>7. Modifiable</td><td>yes, word swapped</td><td><b>Changeable</b></td></tr>
              <tr><td>8. Traceable</td><td>dropped</td><td></td></tr>
            </tbody>
          </table>
          <p>The three dropped qualities (<b>ranked, verifiable, traceable</b>) may suit most technical writing beyond a requirements specification, says the author, but only the set of five fits <b>any</b> technical writing.</p>
          <div class="note why"><p>The book calls them <b>equivalent word substitutions</b>: <b>unambiguous becomes clear</b> and <b>modifiable becomes changeable</b>. Clarity is defined as "clarity (or unambiguousness)".</p></div>
        ` },
        { title: 'The five in one line each', html: `
          <p class="lead">Learn each C as a short test you can run on any document.</p>
          <table class="tbl">
            <thead><tr><th>C</th><th>The test</th></tr></thead>
            <tbody>
              <tr><td><b>Correct</b></td><td>Is it grammatically and technically right?</td></tr>
              <tr><td><b>Clear</b> (unambiguous)</td><td>Can it be read in only one way?</td></tr>
              <tr><td><b>Complete</b></td><td>Is any relevant or important information missing?</td></tr>
              <tr><td><b>Consistent</b></td><td>Does it agree with itself (internal) and with other documents and standards (external)?</td></tr>
              <tr><td><b>Changeable</b></td><td>Can its structure take edits easily?</td></tr>
            </tbody>
          </table>
          <h3>Link to precision</h3>
          <p>Chapter 1 of the textbook gave two special qualities of technical writing, <b>conciseness and precision</b>. The reading now says <b>precision is a combination of clarity and correctness</b>. A precise sentence is right and can mean only one thing.</p>
        ` },
        { title: 'Checking the Cs', html: `
          <p class="lead">You cannot prove a document has the five qualities. You can only <b>raise your confidence</b>, and the best way is <b>peer review</b>.</p>
          <ul>
            <li>For any technical writing, the best way to establish these qualities is <b>peer review</b>: other people read it.</li>
            <li><b>Automated tools</b> help a little: <b>spell checkers, grammar checkers and writing-level indicators</b> might show whether a document is ambiguous.</li>
            <li>The tools cannot judge <b>technical correctness</b> or the correctness of ideas.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>C</th><th>How you check it (from the reading)</th></tr></thead>
            <tbody>
              <tr><td>Correct</td><td>grammar and spell checkers, plus review by one or more people or a group review</td></tr>
              <tr><td>Clear</td><td>read each sentence, group and section and ask whether it has one interpretation; the example asks "How do I test this?"</td></tr>
              <tr><td>Complete</td><td>have <b>as many people as possible</b> read it; log missing items for the next version</td></tr>
              <tr><td>Consistent</td><td>reviews; repair in later versions as clashes are found</td></tr>
              <tr><td>Changeable</td><td>reviews and inspections</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>A "how would you ensure the 5 Cs" answer needs the phrase <b>peer review</b>, one line on <b>tools that help but cannot judge ideas</b>, and the idea of <b>later versions</b> fixing what reviewers find.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Why does the textbook make its own 5 Cs?`, back: `There is <b>no widely accepted quality standard for technical writing</b>, only document templates such as IEEE 829-1998.` },
        { front: `Where do the 5 Cs come from?`, back: `<b>IEEE 830</b>, the requirements engineering standard for System Requirements Specifications (retired 2011).` },
        { front: `The eight IEEE 830 qualities?`, back: `<b>Correct, unambiguous, complete, consistent, ranked for importance and/or stability, verifiable, modifiable, traceable</b>.` },
        { front: `Which three IEEE qualities are dropped?`, back: `<b>Ranked, verifiable, traceable</b>.` },
        { front: `The 5 Cs?`, back: `<b>Correct, Clear, Complete, Consistent, Changeable</b>.` },
        { front: `Which two words were swapped to get the Cs?`, back: `<b>Unambiguous to clear</b> and <b>modifiable to changeable</b>.` },
        { front: `Precision in terms of the 5 Cs?`, back: `<b>Clarity plus correctness</b>.` },
        { front: `Best way to establish the 5 Cs?`, back: `<b>Peer review</b>. Spell, grammar and writing-level tools help a little.` },
        { front: `What is a System Requirements Specification?`, back: `A typical technical document giving a <b>high-level description of the functions and features</b> of a proposed system.` },
      ],
      oneLiners: [
        `The 5 Cs are <b>Correct, Clear, Complete, Consistent, Changeable</b>.`,
        `They come from the <b>eight qualities of IEEE 830</b> (retired 2011); five fit any technical writing.`,
        `Dropped: <b>ranked, verifiable, traceable</b>. Renamed: unambiguous to <b>clear</b>, modifiable to <b>changeable</b>.`,
        `There is <b>no accepted quality standard</b> for technical writing, only templates like IEEE 829-1998.`,
        `<b>Precision = clarity + correctness</b>.`,
        `The best way to establish the 5 Cs is <b>peer review</b>; tools cannot judge technical correctness.`,
        `A System Requirements Specification is the <b>prototypical technical document</b> the Cs were drawn from.`,
      ],
      formulas: [
        { name: `The 5 Cs`, html: `<b>Correct · Clear · Complete · Consistent · Changeable</b>`, note: `Textbook list (Laplante), from IEEE 830.` },
        { name: `Precision`, html: `Precision = <b>clarity</b> + <b>correctness</b>` },
        { name: `How to establish the Cs`, html: `<b>Peer review</b> first; spell, grammar and writing-level tools second` },
      ],
    },

    {
      id: 'm1-5cs-qualities',
      title: 'Correct, Clear, Complete, Consistent, Changeable',
      short: 'Each of the 5 Cs',
      blurb: 'Each C in detail with the textbook examples: the 200 versus 2000 kilogram sentence, the confusing cold-start rule in a car manual, internal and external consistency, and what makes a document changeable.',
      source: 'Module 1 Introduction to Technical Communication / 5 C\'s of TW.pdf (textbook pages 37-40, sections 2.7.2-2.7.6)',
      tabs: [
        { title: 'Correctness', html: `
          <p class="lead"><b>Correct</b> means the information is <b>grammatically and technically correct</b>. A beautifully written sentence with the wrong number fails this C.</p>
          <p>The textbook gives two sentences from a requirements document for an automobile.</p>
          <div class="vs">
            <div class="side"><h4>Technically incorrect</h4><p>"The automobile weight shall be no greater than 200 kilograms."</p><p><small>The author intended 2000 kilograms.</small></p></div>
            <div class="side"><h4>Grammatically incorrect</h4><p>"The automobile shall weight shall be no greater than 2000 kilograms."</p><p><small>An extra "shall".</small></p></div>
          </div>
          <h3>Why correctness is hard to test</h3>
          <ul>
            <li><b>Grammar and spell checkers</b> exist, but they are not 100% accurate.</li>
            <li>They <b>cannot check technical correctness</b> or the correctness of ideas.</li>
            <li>No spell checker flags "200 kilometers" as wrong: there is <b>no spelling error, only a logic error</b>.</li>
            <li><b>Review</b> by one or more people, or a group review, raises correctness. The next chapter of the book covers review and revision.</li>
          </ul>
          <div class="note example"><p>A short phrase for an exam: <b>"200 kilometers"</b> passes every spell check and still can be wrong. That is the book's own illustration of why tools are not enough.</p></div>
          <div class="note trap"><p>Do not say a grammar checker "ensures correctness". It checks the language, not the facts. Only a person who knows the subject can check the figure.</p></div>
        ` },
        { title: 'Clarity', html: `
          <p class="lead"><b>Clear</b> (or unambiguous) means each sentence, each group of related sentences and each related section <b>can have only one interpretation</b>.</p>
          <p>The author shows clarity "by contradiction": an example of its absence. It is a rule from the user's manual of his own car.</p>
          <h3>The warning light</h3>
          <ul>
            <li>An indicator light shows when <b>exceptional conditions</b> occur: poor fuel quality, a fuel cap not tightened properly and other fuel-related faults.</li>
            <li>If the cause is minor, such as the loose cap, the system resets the light after <b>removing the condition, followed by three consecutive error-free cold starts</b>.</li>
            <li>A <b>cold start</b> is a start-up not preceded by another engine start-up in the last <b>eight hours</b>, followed by several minutes of highway or city driving.</li>
          </ul>
          <h3>Why it fails</h3>
          <ul>
            <li>You wait eight hours after the last start-up, drive somewhere, then wait <b>eight hours again</b> before the drive back.</li>
            <li>Any <b>warm start</b> before three cold starts restarts the count.</li>
            <li>So you must drive somewhere, wait eight hours, and drive back, <b>three times in a row</b>. Or drive around, return, wait eight hours, and repeat twice more.</li>
            <li>After <b>one month</b> the author could not reset the light without disconnecting and reconnecting the battery.</li>
          </ul>
          <div class="note why"><p>The trouble, in the author's words: <b>"The logic is very hard to follow"</b>.</p></div>
        ` },
        { title: 'Completeness', html: `
          <p class="lead">A document is <b>complete</b> if no <b>relevant or important information</b> is missing. Both words depend on the <b>reader's needs</b>.</p>
          <ul>
            <li>"Relevant" and "important" are <b>relative terms</b>: relative to the reader's needs.</li>
            <li>Completeness is <b>difficult to prove</b> for any writing: how do you know when something is missing?</li>
            <li>The <b>most powerful technique</b> for cutting down incompleteness is to have <b>as many people as possible</b> read the material.</li>
            <li>Where later versions of the document are expected, <b>keep a list of missing information</b> as it is found, and add it to the next version.</li>
          </ul>
        ` },
        { title: 'Consistency', html: `
          <p class="lead"><b>Consistent</b> has two forms. <b>Internal</b> consistency: one part of the document does not contradict another. <b>External</b> consistency: the document agrees with <b>all other applicable documents and standards</b>.</p>
          <table class="tbl">
            <thead><tr><th>Form</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><b>Internal</b></td><td>one part of the document does not contradict another part</td></tr>
              <tr><td><b>External</b></td><td>the document is in agreement with all other applicable documents and standards</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Both forms can be <b>checked through reviews</b>.</li>
            <li>They can be <b>repaired in later versions</b> as inconsistencies are found.</li>
          </ul>
        ` },
        { title: 'Changeability', html: `
          <p class="lead">A document is <b>changeable</b> if its structure <b>readily yields to modification</b>. This is IEEE's "modifiable".</p>
          <p>Usually this means the document is:</p>
          <ul>
            <li><b>numbered</b>,</li>
            <li>stored in a <b>convenient electronic format</b>,</li>
            <li><b>compatible with common document processing and configuration tools</b>.</li>
          </ul>
          <h3>Why it matters</h3>
          <ul>
            <li>The contents <b>will change</b> as errors and omissions are found.</li>
            <li>Ease of modification <b>reduces costs</b>.</li>
            <li>It <b>helps meet schedules</b>.</li>
            <li>It <b>helps communication</b> about the projects the document belongs to.</li>
          </ul>
          <p>Reviews and inspections are the most obvious way to <b>assess modifiability</b>.</p>
        ` },
      ],
      flashcards: [
        { front: `Correct means…`, back: `<b>Grammatically and technically correct</b> information.` },
        { front: `The textbook's incorrect weight sentence?`, back: `<b>200 kilograms</b> where 2000 was intended (technical error); an extra "shall" is the grammar error.` },
        { front: `Why can't a spell checker find "200 kilometers" wrong?`, back: `No spelling error: it is a <b>logic error</b>. Tools cannot check technical correctness.` },
        { front: `Clear means…`, back: `Each sentence, group of sentences or section has <b>only one interpretation</b> (unambiguous).` },
        { front: `The textbook's example of unclear writing?`, back: `The car manual rule to reset the warning light: <b>three consecutive error-free cold starts</b>, a cold start needing eight hours since the last start-up.` },
        { front: `Complete means…`, back: `<b>No relevant or important information is missing</b>, relative to the reader's needs.` },
        { front: `Best technique to reduce incompleteness?`, back: `Have <b>as many people as possible</b> read it; log missing items for the next version.` },
        { front: `Internal versus external consistency?`, back: `Internal: <b>no part contradicts another part</b>. External: agrees with <b>all other applicable documents and standards</b>.` },
        { front: `Changeable means…`, back: `The structure <b>readily yields to modification</b>: numbered, convenient electronic format, compatible with processing and configuration tools.` },
        { front: `Why is changeability important?`, back: `Content will change; ease of change <b>reduces costs, helps schedules and communication</b>.` },
      ],
      oneLiners: [
        `<b>Correct</b> = grammatically and technically right; checkers cannot judge ideas or figures.`,
        `<b>Clear</b> = one interpretation only; the textbook's car light rule is the bad example.`,
        `<b>Complete</b> = nothing relevant or important missing; "relevant" is relative to the reader.`,
        `Completeness is hardest to prove; many readers is the most powerful fix.`,
        `<b>Consistent</b> has two forms: internal (no self-contradiction) and external (agrees with other documents and standards).`,
        `<b>Changeable</b> = numbered, electronic, compatible with document and configuration tools.`,
        `Ease of change reduces costs, helps schedules and helps communication.`,
        `Reviews and inspections are the main way to assess all of these.`,
      ],
      formulas: [
        { name: `Correct`, html: `<b>Grammatically</b> and <b>technically</b> correct`, note: `Example: 200 kg versus 2000 kg.` },
        { name: `Clear`, html: `Every sentence, group and section has <b>only one interpretation</b>` },
        { name: `Complete`, html: `No <b>relevant or important</b> information missing, judged by the <b>reader's needs</b>` },
        { name: `Consistent`, html: `<b>Internal</b>: no contradictions inside · <b>External</b>: agrees with other documents and standards` },
      ],
    },

    {
      id: 'm1-5cs-example',
      title: 'Applying the 5 Cs: the TV recording specification',
      short: 'The 5 Cs applied',
      blurb: 'The textbook\'s worked evaluation of a requirements excerpt for a smart home entertainment system: the 18 numbered lines, the verdict on each C, the ambiguous phrases the author picks out, and the author's question "How do I test this?".',
      source: 'Module 1 Introduction to Technical Communication / 5 C\'s of TW.pdf (textbook pages 39-41, section 2.7.7)',
      tabs: [
        { title: 'The excerpt', html: `
          <p class="lead">The textbook tests its own method on a real-looking sample: part of a systems specification for a <b>computer-automated ("smart") home entertainment system</b>, about <b>recording shows or movies</b> played through the television.</p>
          <p>Line numbering is typically used in SRS documents to help in referencing specific requirements later. Here are all eighteen, shortened.</p>
          <table class="tbl">
            <thead><tr><th>No.</th><th>The system shall...</th></tr></thead>
            <tbody>
              <tr><td>8.1.1</td><td>allow the user to record <b>any show on television</b></td></tr>
              <tr><td>8.1.2</td><td>present a <b>Web interface</b> with a grid listing, like a TV Guide, to select shows</td></tr>
              <tr><td>8.1.3</td><td>record a minimum of <b>two (2) shows simultaneously</b></td></tr>
              <tr><td>8.1.4</td><td>make storage for recordings <b>expandable</b></td></tr>
              <tr><td>8.1.5</td><td>free storage as needed by <b>first in, first out (FIFO)</b> or another defined priority schedule</td></tr>
              <tr><td>8.1.6</td><td>provide a <b>search feature</b> to select which show to record</td></tr>
              <tr><td>8.1.7</td><td>let the user record <b>all occurrences</b> of a show</td></tr>
              <tr><td>8.1.8</td><td>let the user record <b>only new instances</b> of a show</td></tr>
              <tr><td>8.1.9</td><td>give <b>telephone menu options</b> to dial in and select channel, time and duration</td></tr>
              <tr><td>8.1.10</td><td>let the user select the <b>quality</b> for recording</td></tr>
              <tr><td>8.1.11</td><td>let the user choose <b>not to overwrite</b> a recording automatically</td></tr>
              <tr><td>8.1.12</td><td>let the user store only <b>X episodes</b> of a series at a time</td></tr>
              <tr><td>8.1.13</td><td><b>may</b> skip commercials when it can detect them</td></tr>
              <tr><td>8.1.14</td><td><b>monitor storage space</b> for future recordings</td></tr>
              <tr><td>8.1.15</td><td><b>notify</b> when resources are low enough that recordings will be overwritten</td></tr>
              <tr><td>8.1.16</td><td>let users <b>not automatically delete</b> a show or series</td></tr>
              <tr><td>8.1.17</td><td><b>not record</b> any new shows if there is space available for recovery</td></tr>
              <tr><td>8.1.18</td><td><b>notify</b> users if there is no longer space to record new shows</td></tr>
            </tbody>
          </table>
          <p><small>Shortened from the textbook excerpt; the wording is ours.</small></p>
        ` },
        { title: 'Verdict on each C', html: `
          <p class="lead">The author runs the five tests in order. The striking result: only <b>Clear</b> fails visibly. The other four cannot be judged from an excerpt.</p>
          <table class="tbl">
            <thead><tr><th>C</th><th>Verdict in the textbook</th></tr></thead>
            <tbody>
              <tr><td><b>Correct</b></td><td>Fits the common understanding of home TV recording, but <b>hard to be certain</b> without further analysis, <b>focus groups and experts</b>.</td></tr>
              <tr><td><b>Clear</b></td><td><b>Quite a few unclear or ambiguous phrases</b>, found by asking "How do I test this?" The list needs improving, "with no disrespect to the author".</td></tr>
              <tr><td><b>Complete</b></td><td>Cannot be judged without the <b>rest of the specification</b> and a <b>thorough peer review</b>.</td></tr>
              <tr><td><b>Consistent</b></td><td>No way to <b>guarantee</b> it for text in English or any natural language. Only technical documentation written with <b>formal methods</b> (a mix of programming language and mathematics) can be rigorously evaluated. An <b>informal reading</b> found no obvious inconsistencies and is probably adequate here.</td></tr>
              <tr><td><b>Changeable</b></td><td>No obvious challenge to modifying and maintaining it. A <b>change management tool</b> would be needed to track changes, their sources and dates.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>When a question asks you to evaluate a sample "along the 5 Cs", do all five, even if some verdicts are "cannot tell without more". Marks follow the structure: one short verdict per C, with the reason.</p></div>
          <p>The author closes the example by repeating the earlier point: <b>peer review</b> is the best way to establish these qualities, and tools such as spell checkers, grammar checkers and writing-level indicators might help show whether a document is ambiguous.</p>
        ` },
        { title: 'Unclear phrases and fixes', html: `
          <p class="lead">The author's method for Clarity: read a requirement and ask <b>"How do I test this?"</b> If you cannot design a test, the phrase is vague.</p>
          <p>He names five requirements and the question he asks of each.</p>
          <table class="tbl">
            <thead><tr><th>Line</th><th>His question</th></tr></thead>
            <tbody>
              <tr><td>8.1.1 "any show on television"</td><td>U.S. television or around the world? Pay-per-view?</td></tr>
              <tr><td>8.1.4 "make storage expandable"</td><td>What does "make storage" mean? Allocation? How much expansion?</td></tr>
              <tr><td>8.1.6 "search feature"</td><td>Search by program name, time recorded, subject?</td></tr>
              <tr><td>8.1.10 "quality"</td><td>What does "quality" mean?</td></tr>
              <tr><td>8.1.12 "X episodes"</td><td>Is X a natural number, an integer, a complex number, a quaternion?</td></tr>
            </tbody>
          </table>
          <p>The author says there are <b>other ambiguities</b> too.</p>
        ` },
      ],
      flashcards: [
        { front: `What kind of document is the 5 Cs example?`, back: `An excerpt from a <b>systems specification</b> for a smart home entertainment system, on recording TV shows.` },
        { front: `Which C does the author find clearly failing?`, back: `<b>Clear</b>: many ambiguous phrases.` },
        { front: `The author's test for clarity?`, back: `Ask <b>"How do I test this?"</b>` },
        { front: `Why is "any show on television" unclear?`, back: `U.S. or worldwide? Pay-per-view? <b>The scope is not stated</b>.` },
        { front: `Why is "X episodes" unclear?`, back: `It does not say what <b>kind of number</b> X is.` },
        { front: `Verdict on Correct?`, back: `Fits common understanding, but <b>needs analysis, focus groups and experts</b> to be sure.` },
        { front: `Verdict on Consistent?`, back: `No guarantee in natural language; only <b>formal methods</b> allow rigorous evaluation. Informal reading found nothing.` },
        { front: `What does Changeable need here?`, back: `A <b>change management tool</b> tracking changes, sources and dates.` },
        { front: `Why number the lines of an SRS?`, back: `To <b>reference specific requirements</b> later.` },
        { front: `Best way to establish the Cs?`, back: `<b>Peer review</b>.` },
      ],
      oneLiners: [
        `Example: a <b>smart home entertainment system</b> specification, recording shows (lines 8.1.1 to 8.1.18).`,
        `Only <b>Clear</b> clearly fails; Correct, Complete and Consistent need reviewers and the full document.`,
        `Clarity test: ask <b>"How do I test this?"</b>`,
        `Vague phrases picked out: <b>any show, make storage, search, quality, X episodes</b>.`,
        `Consistency cannot be guaranteed in natural language; <b>formal methods</b> can be rigorously evaluated.`,
        `Changeable needs a <b>change management tool</b> for changes, sources and dates.`,
        `SRS lines are <b>numbered</b> so they can be referenced later.`,
      ],
      formulas: [
        { name: `Evaluating a sample along the 5 Cs`, html: `One verdict per C: <b>Correct · Clear · Complete · Consistent · Changeable</b>, each with a reason`, note: `"Cannot tell without more" is an acceptable verdict if you say what is needed.` },
        { name: `Testing for clarity`, html: `Ask <b>"How do I test this?"</b> of each requirement` },
      ],
    },

    {
      id: 'm1-references',
      title: 'Choosing the right references',
      short: 'Choosing references',
      blurb: 'How to pick references for a technical paper: age, source type, authority, classic works, the right number, and why a balanced mix of books, conferences, journals and Web sources is best.',
      source: 'Module 1 Introduction to Technical Communication / 5 C\'s of TW.pdf (textbook page 41, section 2.8.1 "Choose the Right References")',
      tabs: [
        { title: 'Questions to ask', html: `
          <p class="lead">The textbook's rule for references is <b>good judgment</b>. Your reference list tells the reader how well you know the subject, so choose with care.</p>
          <table class="tbl">
            <thead><tr><th>Ask</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td><b>Is the source of dubious origin?</b></td><td>Web-based references can be. Do not use too many.</td></tr>
              <tr><td><b>Is it too old?</b></td><td>More than <b>ten years</b> old is inappropriate for rapidly changing technologies.</td></tr>
              <tr><td><b>Are the right people cited?</b></td><td>Well-known experts, not unknown persons.</td></tr>
              <tr><td><b>Are the classics cited?</b></td><td>The definitive or pioneering works in the field.</td></tr>
              <tr><td><b>Are there enough?</b></td><td>No set count, but too few and the <b>authority of the publication will be challenged</b>.</td></tr>
              <tr><td><b>Are there too many?</b></td><td>You can <b>over-reference</b>, especially with duplicates, for example two similar works by the same author.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>A "choose references for this paper" answer works as a checklist: <b>origin, age, authors, classics, number</b>. Give a one-line reason for each.</p></div>
          <div class="note heads-up"><p>The page points to Section 2.8.2 for more on Web references. That section is not in the Drive file, so the notes cover only 2.8.1.</p></div>
        ` },
        { title: 'The right mix', html: `
          <p class="lead">No single type of source should dominate. Each has a weakness, so a <b>balance of types</b> is most desirable.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Weakness if you rely on it</th></tr></thead>
            <tbody>
              <tr><td><b>Books</b></td><td>they <b>age quickly</b></td></tr>
              <tr><td><b>Conferences</b></td><td>not <b>fully vetted</b></td></tr>
              <tr><td><b>Journal articles</b></td><td>often <b>too theoretical</b></td></tr>
              <tr><td><b>Web references</b></td><td>lack the <b>vetting and cognitive authority</b> of the other types</td></tr>
            </tbody>
          </table>
          <p>So the list should not hold a <b>preponderance</b> (large majority) of any one type.</p>
        ` },
      ],
      flashcards: [
        { front: `Why must you choose references with judgment?`, back: `Your list <b>says a lot about your familiarity</b> with the subject.` },
        { front: `How old is too old for fast-changing technology?`, back: `More than <b>ten years</b>.` },
        { front: `What risk comes with too few references?`, back: `The <b>authority</b> of the publication will be challenged.` },
        { front: `What is over-referencing?`, back: `Too many references, especially <b>duplicative</b> ones such as two similar works by the same author.` },
        { front: `Why not rely on books?`, back: `They <b>age quickly</b>.` },
        { front: `Why not rely on conference papers?`, back: `They are <b>not fully vetted</b>.` },
        { front: `Why not rely on journal articles alone?`, back: `They are often <b>too theoretical</b>.` },
        { front: `Why not rely on Web references?`, back: `They lack the <b>vetting and cognitive authority</b> of the other types.` },
        { front: `Best make-up of a reference list?`, back: `A <b>balance</b> of types.` },
      ],
      oneLiners: [
        `Choose references with <b>judgment</b>: origin, age, authors, classics, number.`,
        `Over <b>ten years old</b> is too old for rapidly changing technology.`,
        `Too few references and <b>authority is challenged</b>; too many duplicates is over-referencing.`,
        `Do not use too many <b>Web references</b>: dubious origin, no vetting.`,
        `Books age quickly; conferences not fully vetted; journals too theoretical; Web not vetted.`,
        `The right answer is a <b>balance of reference types</b>.`,
        `A reference list shows your <b>familiarity with the subject</b>.`,
      ],
      formulas: [
        { name: `Reference checklist`, html: `<b>Origin · Age · Right people · Classic works · Right number</b>` },
        { name: `Source types and their weakness`, html: `<b>Books</b> age · <b>conferences</b> unvetted · <b>journals</b> theoretical · <b>Web</b> no authority` },
      ],
    },

    {
      id: 'm1-5cs-exercises',
      title: 'Exercises: effective business messages',
      short: 'Exercises (5Cs)',
      blurb: 'The exercise deck: seven multiple-choice items, the "write the principle" statements, and the five weak messages with the deck\'s own rewrites.',
      source: 'Module 1 Introduction to Technical Communication / Essentials of Technical Writing (5Cs) - Exercises.pptx (slides 1-15)',
      tabs: [
        { title: 'What the exercises test', html: `
          <p class="lead">The deck "Essentials of Technical Writing (5Cs) – Exercises" has <b>seven multiple-choice questions</b>, a "write the principle" task, and <b>five messages to rewrite</b>, with the deck's own rewritten version of each.</p>
          <div class="note heads-up"><p>The deck gives <b>no answer key</b> for the multiple-choice questions or the "write the principle" task. These notes show the questions only. The rewrites do have model answers on slides 11 to 15.</p></div>
          <p>Terms the questions use: <b>practical and useful information</b>, <b>concise</b>, <b>clarity of expectations</b>, <b>simplifies complex information</b>, <b>persuasive</b>, <b>least effective</b>, and the characteristics <b>accuracy, clarity, conciseness, vagueness</b>.</p>
        ` },
        { title: 'The seven questions', html: `
          <p class="lead">The seven MCQs from slides 2 to 8, as the deck gives them.</p>
          <ol>
            <li>Which sentence provides practical and useful information? (a) Employees should finish the work quickly. (b) Employees should try to complete the project whenever possible. (c) Employees must submit the completed project report by 4:00 p.m. on Friday through the employee portal. (d) Employees are requested to work hard.</li>
            <li>Which message is the most concise? (a) Due to the fact that the meeting cannot happen because everyone is busy, it will probably be postponed. (b) Tomorrow's meeting is postponed because key participants are unavailable. (c) Since many people are unavailable, tomorrow's meeting has therefore been postponed. (d) The meeting which was planned for tomorrow may not take place.</li>
            <li>Which principle is demonstrated by "The finance team must submit the quarterly budget to the Director by 5 p.m. on Monday."? (a) Persuasion (b) Clarity of expectations (c) Emotional appeal (d) Informal communication</li>
            <li>Which message best simplifies complex information? (a) The new process changes how departments work together. (b) The implementation of revised operational procedures necessitates organizational realignment. (c) The company is restructuring its operational framework. (d) Operational protocols require systematic integration.</li>
            <li>Which sentence is most persuasive? (a) Attend the workshop. (b) The workshop is mandatory. (c) You should probably attend the workshop. (d) Attending the workshop will improve your communication skills and help you work more efficiently.</li>
            <li>Which message is least effective? (a) Submit your leave application before Friday. (b) Please submit the completed leave application before 5 p.m. on Friday to HR. (c) Submit the form soon. (d) HR will process applications received before Friday.</li>
            <li>Which characteristic is NOT associated with effective business communication? (a) Accuracy (b) Clarity (c) Conciseness (d) Vagueness</li>
          </ol>
        ` },
        { title: 'Name the principle', html: `
          <p class="lead">Slide 9: "Write the principle illustrated by each statement." The deck gives no answers.</p>
          <ol>
            <li>Employees must upload attendance records before 10:00 a.m. every Monday.</li>
            <li>The software update will help reduce system errors by 30%.</li>
            <li>The new workflow changes how departments share information.</li>
          </ol>
        ` },
        { title: 'The five rewrites', html: `
          <p class="lead">Slide 10 gives five weak messages to rewrite. Slides 11 to 15 give the target version. Study what each rewrite adds.</p>
          <table class="tbl">
            <thead><tr><th>Weak message</th><th>Target version (from the deck)</th><th>What changed</th></tr></thead>
            <tbody>
              <tr><td>1. "Everyone should send their reports soon."</td><td>"All employees must submit their monthly reports to the department manager by 5:00 p.m. on Friday."</td><td>who, which report, to whom, exact deadline; "should" to "must"</td></tr>
              <tr><td>2. "The meeting which has already been planned for tomorrow may possibly not happen because several people are unavailable."</td><td>"Tomorrow's meeting is postponed because several key participants are unavailable."</td><td>cut "which has already been planned", cut "may possibly"; a firm fact</td></tr>
              <tr><td>3. "Employees should use the software properly."</td><td>"All employees must use the new project management software to update their assigned tasks by the end of each workday."</td><td>names the software, the action and the time; "properly" removed</td></tr>
              <tr><td>4. "The proposal needs attention."</td><td>"The marketing team should review the proposal and submit their feedback to the project manager by 3:00 p.m. on Wednesday."</td><td>who acts, what they do, to whom, by when</td></tr>
              <tr><td>5. "Staff should attend cybersecurity training."</td><td>"All staff members must attend the cybersecurity training session on 15 August at 10:00 a.m. to learn safe online practices and protect company data."</td><td>date, time and a reason (benefit)</td></tr>
            </tbody>
          </table>
        ` },
      ],
      flashcards: [
        { front: `How many MCQs are in the exercise deck?`, back: `<b>Seven</b> (slides 2 to 8).` },
        { front: `Rewrite of "Everyone should send their reports soon."?`, back: `"All employees must submit their monthly reports to the department manager by <b>5:00 p.m. on Friday</b>."` },
        { front: `Rewrite of the "may possibly not happen" meeting message?`, back: `"Tomorrow's meeting is <b>postponed</b> because several key participants are unavailable."` },
        { front: `Rewrite of "Employees should use the software properly."?`, back: `"All employees must use the new project management software to update their assigned tasks <b>by the end of each workday</b>."` },
        { front: `Rewrite of "The proposal needs attention."?`, back: `"The marketing team should review the proposal and submit their feedback to the project manager by <b>3:00 p.m. on Wednesday</b>."` },
        { front: `Rewrite of "Staff should attend cybersecurity training."?`, back: `"All staff members must attend the cybersecurity training session on <b>15 August at 10:00 a.m.</b> to learn safe online practices and protect company data."` },
      ],
      oneLiners: [
        `The exercise deck has seven MCQs, a "write the principle" task and five rewrites.`,
        `The deck gives model rewrites (slides 11 to 15) but <b>no key</b> for the MCQs.`,
        `Rewrite 1 adds who, to whom and a deadline: "by 5:00 p.m. on Friday".`,
        `Rewrite 2 turns "may possibly not happen" into "is postponed".`,
        `Rewrite 5 adds a date, a time and a purpose: "to learn safe online practices and protect company data".`,
      ],
      formulas: [
        { name: `The deck's rewrite of message 1`, html: `"All employees must submit their monthly reports to the department manager by 5:00 p.m. on Friday."` },
      ],
    },

    {
      id: 'm1-email-review',
      title: 'Reviewing emails: what is wrong and how to fix it',
      short: 'Email review',
      blurb: 'The exercise deck\'s sample emails and its critiques: the Josh update, the grade request from John, the Michael instruction, a slangy panic email and an unsupervised AI condolence note, plus the "do and don\'t" phrase list.',
      source: 'Module 1 Introduction to Technical Communication / Essentials of Technical Writing (5Cs) - Exercises.pptx (slides 16-26; slides 16-18, 23 and 24 are screenshots, 21 and 26 are blank)',
      tabs: [
        { title: 'What a good email does', html: `
          <p class="lead">The deck shows four weak emails, one AI-written email and a list of weak phrases. Each critique repeats the same few rules, so learn the rules first.</p>
          <ul>
            <li><b>A clear subject line</b>: the critiques fault subject lines that are vague or do not indicate urgency or key points.</li>
            <li><b>A proper greeting</b> that uses the reader's name or title ("Dear Professor [Last Name],").</li>
            <li><b>A logical structure</b> and a logical argument for any request.</li>
            <li><b>Specific deadlines</b> and a clearly stated action.</li>
            <li><b>A respectful tone</b>, not demanding or aggressive, that encourages communication.</li>
            <li><b>A closing</b> with next steps, a polite sign-off and the sender's full name.</li>
          </ul>
          <div class="note heads-up"><p>The deck shows the emails as pictures. The critiques sit on the slides that follow each picture. Two pictures (the first, "heyyy, need u NOW", and the AI condolence email) have no critique on the slides. These notes give only what is on the slides for them.</p></div>
        ` },
        { title: 'The Josh update', html: `
          <p class="lead">Subject "Quick Update on Project and Schedule", to "Dear Boss", from Josh. It is polite, but it gives the boss nothing to act on.</p>
          <p>The email says: things are moving along but a few areas are unclear; he has tried to figure them out; he might be out for a few days next week, not confirmed; some team members are handling things differently than expected; "let me know your thoughts when you have time."</p>
          <p>The deck's critique (slide 19):</p>
          <table class="tbl">
            <thead><tr><th>Problem in the email</th><th>Slide critique</th></tr></thead>
            <tbody>
              <tr><td>Subject line</td><td>"Quick Update on Project and Schedule" does not show <b>urgency or key points</b></td></tr>
              <tr><td>Opening</td><td>"Hope you're doing well" is fine, but a professional email should be <b>more to the point</b></td></tr>
              <tr><td>Unclear areas</td><td>Mentions them but does not say <b>what is needed</b> or ask for guidance directly</td></tr>
              <tr><td>Time off</td><td>Mentions possible time off <b>without formally requesting approval</b></td></tr>
              <tr><td>Team members</td><td>Suggests others are not working correctly but gives <b>no useful details</b>, so it reads as unnecessary gossip</td></tr>
              <tr><td>Ending</td><td>A vague line instead of saying <b>what response is needed</b></td></tr>
            </tbody>
          </table>
        ` },
        { title: 'The grade request', html: `
          <p class="lead">Subject "Need My Grade Fixed ASAP", opening "Hey Prof". John asks a professor to change his grade. The email demands where it should ask.</p>
          <p>The email says the grade is "WAY lower than I expected", he worked hard so he does not deserve this, "Can you change it?", he needs at least an A or B to keep his GPA up, the exam was not fair because some questions were not in the notes, and "Fix this ASAP, please. Let me know when it's done. Thanks, John."</p>
          <p>The deck lists ten faults (slide 22):</p>
          <ol>
            <li>Comes across as <b>demanding and disrespectful</b>, creating a negative impression.</li>
            <li>No proper salutation like "Dear Professor [Last Name]", which <b>sets a poor tone</b>.</li>
            <li>No <b>logical argument</b> to support the request.</li>
            <li>Assumes the professor will "fix" the grade without justification, so it sounds <b>entitled</b>.</li>
            <li>Ends abruptly: no <b>polite sign-off</b> or closing line.</li>
            <li>No <b>full name</b>, which makes it harder to identify and answer him.</li>
            <li>No <b>recognition of the professor's effort</b>, no gratitude.</li>
            <li><b>Informal phrasing</b> undermines the seriousness of the request.</li>
            <li>Does not clearly state the <b>action requested</b> (a meeting, a review, a reconsideration).</li>
            <li>No reference to <b>prior discussions or personal effort</b> showing engagement.</li>
          </ol>
        ` },
        { title: 'The Michael instruction', html: `
          <p class="lead">Subject "Fix Every Error", opening "Hey". Michael, a manager, tells a team member to fix everything. It is aggressive and gives the reader no way to succeed.</p>
          <p>The email says: things are a mess; the last report had errors; "just look at it and fix whatever is wrong"; he should not have to point out every mistake; pending tasks from last week with no list; "if anything is delayed, that's on you"; a meeting might be today with no exact time; urgent matters are not to be brought to him; "I need everything done by the end of the day. No delays, no back-and-forth, no mistakes."</p>
          <p>The deck's eight faults (slide 25):</p>
          <ul>
            <li><b>No clear subject line</b>, so the purpose is vague and unhelpful.</li>
            <li>An <b>impersonal greeting</b> instead of the recipient's name.</li>
            <li><b>No logical structure</b>: it only complains and demands.</li>
            <li><b>Vague deadlines</b> instead of specific timeframes.</li>
            <li>A <b>demanding, aggressive tone</b> that demotivates the reader.</li>
            <li><b>Discourages communication</b> instead of welcoming clarification.</li>
            <li>Ends abruptly with <b>no professional closing or next steps</b>.</li>
            <li>A proper email should <b>encourage communication</b>, which this one lacks.</li>
          </ul>
        ` },
        { title: 'Panic email and AI email', html: `
          <p class="lead">Two more samples. The slides give <b>no critique</b> for either.</p>
          <h3>"heyyy, need u NOW"</h3>
          <p>The subject reads "heyyy, need u NOW!!!!!" with two siren emoji. The body: "hope ur good. listen, i got a BIG problem n need u 2 fix it ASAP. idk how it happened but its bad. r u free rn?? pls reply FAST!!! dont ignore this. thx".</p>
          <h3>The AI condolence email (slide 20)</h3>
          <p>The deck calls it "The Email Written by AI (Without Human Oversight)". It opens "Hi [Name]" and ends "Warm regards, [Your Name]". It offers "heartfelt condolences", says the loss must be hard, and tells the reader to take all the time needed.</p>
        ` },
        { title: 'Do and don\'t phrases', html: `
          <p class="lead">Slide 23 is a two-column graphic of weak phrases and stronger ones. It is a picture, so the list is rewritten here.</p>
          <table class="tbl">
            <thead><tr><th>Don't write</th><th>Do write</th></tr></thead>
            <tbody>
              <tr><td>Just checking in...</td><td>When can I expect your decision on [X]?</td></tr>
              <tr><td>I think maybe we should...</td><td>Based on our data, we need to...</td></tr>
              <tr><td>Sorry for the delay</td><td>Moving this forward: [action item]</td></tr>
              <tr><td>Let me know if this makes sense?</td><td>Here's the plan. Any specific concerns?</td></tr>
              <tr><td>I was wondering if...</td><td>Please [specific action] by [deadline]</td></tr>
              <tr><td>Not sure if you saw my last email</td><td>Decision needed by [date] to meet [goal]</td></tr>
              <tr><td>I hope this email finds you well</td><td>Following up on [specific topic]</td></tr>
              <tr><td>Please advise</td><td>Do you approve Option A or Option B?</td></tr>
              <tr><td>As per my last email...</td><td>To meet our deadline, I need your input on [X]</td></tr>
              <tr><td>If you have time...</td><td>This needs your review by [time] to keep [project] on track</td></tr>
              <tr><td>Sorry to bother you</td><td>For context: [brief background]. Action needed: [clear ask]</td></tr>
            </tbody>
          </table>
          <p><small>Re-typed from the slide in our words where needed; the left column is the weak habit.</small></p>
        ` },
      ],
      flashcards: [
        { front: `What should a subject line show?`, back: `The <b>purpose</b>, and urgency or key points where they matter.` },
        { front: `Josh email: what is wrong with the time-off line?`, back: `It mentions time off <b>without formally requesting approval</b>.` },
        { front: `Josh email: what is wrong with the team members line?`, back: `It suggests others are not working correctly with <b>no useful details</b>, so it reads as gossip.` },
        { front: `John's grade email: how many faults does the deck list?`, back: `<b>Ten</b>.` },
        { front: `John's email: the proper salutation?`, back: `<b>Dear Professor [Last Name],</b>` },
        { front: `Michael's email: the main tone fault?`, back: `<b>Demanding and aggressive</b>: demotivates and discourages communication.` },
        { front: `What should an email end with?`, back: `A <b>professional closing</b>, next steps and the sender's full name.` },
        { front: `What title does the deck give the slide 20 email?`, back: `"The Email Written by AI <b>(Without Human Oversight)</b>".` },
        { front: `Strong replacement for "Please advise"?`, back: `<b>Do you approve Option A or Option B?</b>` },
        { front: `Strong replacement for "I was wondering if..."?`, back: `<b>Please [specific action] by [deadline]</b>.` },
      ],
      oneLiners: [
        `A good email has a <b>clear subject, a proper greeting, a logical structure, a specific request, a deadline, a respectful tone and a closing</b>.`,
        `The Josh email does not ask for guidance directly and mentions time off <b>without formally requesting approval</b>.`,
        `The grade email <b>demands instead of asking</b> and gives no reasons, no full name and no sign-off.`,
        `The Michael email is <b>aggressive</b>, with vague deadlines, and discourages communication.`,
        `Do and don't slide: "If you have time..." becomes "This needs your review by [time] to keep [project] on track".`,
      ],
      formulas: [
        { name: `Email checklist (from the critiques)`, html: `<b>Subject · Greeting · Logical structure · Clear action requested · Specific deadline · Tone · Closing and full name</b>` },
        { name: `Replace a hedge`, html: `"I was wondering if..." becomes <b>"Please [specific action] by [deadline]"</b>`, note: `From the do and don't slide.` },
      ],
    },

    {
      id: 'm1-case-study',
      title: 'Communication case study: the XYZ memo',
      short: 'Case study: XYZ memo',
      blurb: 'The sample communication case study: a president\'s memo forcing use of the company app. The question, the barriers behind it, the structure of the 200 to 250 word sample answer, the losses, and the order of the sample answer.',
      source: 'Module 1 Introduction to Technical Communication / Sample answer for Communication Case study.docx',
      tabs: [
        { title: 'The question', html: `
          <p class="lead">A <b>case study</b> question gives a short scenario and asks you to <b>identify a communication problem and explain its effects</b> in about <b>200 to 250 words</b>. The document is a sample of how to answer one.</p>
          <div class="note example"><p><b>The scenario (paraphrased).</b> XYZ, a payment app company, has a President, David Marcus, who issues a company-wide memo demanding that all employees use the company's app. The memo adds that people who refuse or cannot use it should seek employment elsewhere. The approach leaks to the press, producing wide media coverage and raising serious public questions about the app's reliability and user-friendliness.</p></div>
          <p><b>Task:</b> identify the communication barrier and explain what losses were incurred by this problem.</p>
          <div class="note exam"><p>The sample answer carries a note that it is only an example. The objective is to assess your ability to <b>analyse the issue critically</b> and <b>apply the theory in a systematic, structured manner</b>. So marks go to the method, not to a single "right" barrier.</p></div>
          <figure data-fig="m1-case-memo-chain"></figure>
          <div class="note heads-up"><p>The figure shows the cause-and-effect chain the sample answer builds: memo and ultimatum (causes), leak (trigger), then internal and external losses.</p></div>
        ` },
        { title: 'Barriers to know', html: `
          <p class="lead">The sample names two barriers, <b>organisational</b> and <b>interpersonal</b>, and notes that the student can use other barriers and <b>logically justify them</b>.</p>
          <table class="tbl">
            <thead><tr><th>Barrier</th><th>In the XYZ case</th></tr></thead>
            <tbody>
              <tr><td><b>Organisational</b>: the use of inappropriate media</td><td>a formal company-wide memo (an impersonal medium) used for a personal, debatable demand</td></tr>
              <tr><td><b>Interpersonal</b>: an implied emotional outburst</td><td>the ultimatum "seek employment elsewhere" reads as an emotional outburst</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Reading the sample answer', html: `
          <p class="lead">The sample is short and has a clear order: opening line, barriers with proof, then losses. Copy the structure, not the sentences.</p>
          <ol class="steps">
            <li><b>Opening line.</b> Effective communication is the lifeblood of a successful organization, and identifying and reducing barriers matters for a positive, productive environment.</li>
            <li><b>Name the barriers.</b> The memo suffers from an <b>organisational barrier</b> (inappropriate medium) and an <b>interpersonal barrier</b> (an implied emotional outburst).</li>
            <li><b>Prove the first.</b> A formal company-wide memo is typically impersonal, yet it carried a highly personal, potentially debatable demand. It lacked the sensitivity such a big change needs.</li>
            <li><b>Prove the second.</b> The ultimatum "seek employment elsewhere" suggests frustration or impatience, close to an emotional outburst in writing, and could be seen as professional incompetence.</li>
            <li><b>Losses inside.</b> The impersonal tone and demand hurt <b>employee trust and morale</b>, with possible effects on <b>productivity and retention</b>.</li>
            <li><b>Losses outside.</b> The leak amplified the damage: it hurt <b>XYZ's public image</b> and raised doubts about the <b>app's viability</b> if even employees are forced to use it.</li>
            <li><b>Closing sentence.</b> The heavy-handed approach, the unsuitable channel and the emotional impatience created <b>internal resistance and external scepticism</b>, undermining the company's goals and brand reputation.</li>
          </ol>
          <table class="tbl">
            <thead><tr><th>Loss</th><th>Where</th></tr></thead>
            <tbody>
              <tr><td>Employee trust and morale</td><td>internal</td></tr>
              <tr><td>Productivity and retention</td><td>internal</td></tr>
              <tr><td>Public image</td><td>external, caused by the leak</td></tr>
              <tr><td>Confidence in the app</td><td>external: concerns about the app's viability if its own employees are forced into using it</td></tr>
              <tr><td>Company goals and brand reputation</td><td>overall result</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Answer template', html: `
          <p class="lead">The sample answer's order, as a skeleton. The answer length is 200 to 250 words.</p>
          <div class="kv">
            <div><span>1. Frame</span><b>one line on why identifying barriers matters</b></div>
            <div><span>2. Barrier(s)</span><b>name 1 or 2 types</b></div>
            <div><span>3. Evidence</span><b>quote the phrase or point in the scenario that proves each</b></div>
            <div><span>4. Internal losses</span><b>trust, morale, productivity, retention</b></div>
            <div><span>5. External losses</span><b>public image, doubts about the product</b></div>
            <div><span>6. Close</span><b>link barrier and losses to the goal or reputation</b></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `How long is the case-study answer?`, back: `<b>200 to 250 words</b>.` },
        { front: `What does the sample question ask?`, back: `To <b>identify the communication barrier</b> and explain the <b>losses incurred</b>.` },
        { front: `What did the XYZ president's memo demand?`, back: `That <b>all employees use the company's app</b>, or seek employment elsewhere.` },
        { front: `Barriers named in the sample answer?`, back: `<b>Organisational</b> (inappropriate medium) and <b>interpersonal</b> (implied emotional outburst).` },
        { front: `Why is the memo an organisational barrier?`, back: `A formal, impersonal medium was used for a <b>highly personal, debatable demand</b>.` },
        { front: `Why is it an interpersonal barrier?`, back: `The ultimatum reads as an <b>emotional outburst</b>, close to professional incompetence.` },
        { front: `Internal losses in the sample?`, back: `<b>Trust and morale</b>, with possible effects on <b>productivity and retention</b>.` },
        { front: `External losses in the sample?`, back: `Damaged <b>public image</b> and doubts about the app's <b>viability</b>, after the leak.` },
        { front: `What is the question really assessing?`, back: `Critical analysis and applying theory <b>systematically</b>.` },
        { front: `May you name other barriers?`, back: `Yes, if you <b>justify them logically</b>.` },
      ],
      oneLiners: [
        `Case-study answers run <b>200 to 250 words</b> and are marked on structure and use of theory.`,
        `XYZ barriers: <b>organisational</b> (wrong medium) and <b>interpersonal</b> (emotional outburst).`,
        `Other barriers are accepted when <b>logically justified</b> with evidence from the scenario.`,
        `Internal losses: <b>trust, morale, productivity, retention</b>.`,
        `External losses: <b>public image and confidence in the app</b>, after the leak to the press.`,
        `Order: <b>frame, barrier, evidence, internal losses, external losses, close</b>.`,
      ],
      formulas: [
        { name: `Case-study answer layout`, html: `<b>Frame · Barrier(s) · Evidence from the scenario · Internal losses · External losses · Close</b>`, note: `Fits 200 to 250 words.` },
        { name: `Barrier plus proof`, html: `Name the barrier, then <b>quote the phrase</b> that shows it` },
      ],
    },
  ],
  figures: [
    { id: 'm1-5cs-from-ieee', caption: 'How the eight IEEE 830 qualities of a requirements document become the 5 Cs: unambiguous becomes Clear, modifiable becomes Changeable, and ranked, verifiable and traceable are dropped. Based on BAENG101 course material, VIT.', alt: 'Two columns. On the left the eight IEEE 830 qualities: correct, unambiguous, complete, consistent, ranked, verifiable, modifiable, traceable. Arrows lead from correct, unambiguous, complete, consistent and modifiable to the five Cs on the right: Correct, Clear, Complete, Consistent, Changeable. Ranked, verifiable and traceable are drawn dashed and have no arrow.' },
    { id: 'm1-case-memo-chain', caption: 'The XYZ case as a chain: a formal memo (organisational barrier), an ultimatum (interpersonal barrier), a leak to the press, then internal losses of trust, morale and retention, and external losses of public image and confidence in the app. Based on BAENG101 course material, VIT.', alt: 'Five boxes stacked vertically joined by downward arrows: memo to all staff, ultimatum to seek work elsewhere, leaked to the press, internal losses, external losses.' },
  ],
});
