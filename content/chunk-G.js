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
          <div class="note why"><p>The two word swaps are only for the alphabet: <b>unambiguous becomes clear</b> and <b>modifiable becomes changeable</b>. The meaning is the same, so a question that says "unambiguous" is asking about clarity.</p></div>
          <div class="mnemonic"><p>Cut the three that start <b>R, V, T</b> (ranked, verifiable, traceable). The five left are <b>Correct, Clear, Complete, Consistent, Changeable</b>.</p></div>
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
          <div class="note heads-up"><p>Not on the slides: the Module 1 list of <b>eight characteristics</b> (see "Features of technical writing") overlaps with the 5 Cs for accuracy, clarity and completeness. Keep the two lists apart in an answer. Do not call the 5 Cs "the eight".</p></div>
          <div class="note trap"><p>Do not turn the 5 Cs into "concise, concrete, courteous...". Those are the Cs of general business communication, a different list. The textbook list is <b>Correct, Clear, Complete, Consistent, Changeable</b>.</p></div>
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
      blurb: 'Each C in detail with the textbook examples: the 200 versus 2000 kilogram sentence, the confusing cold-start rule in a car manual, internal and external consistency, and what makes a document changeable. Ends with a practice set for spotting which C has failed.',
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
          <div class="note why"><p>Each phrase is individually correct. The trouble is that the <b>logic is hard to follow</b>, so readers cannot tell what to do. Clarity is about whether the reader can act, and word choice is only part of it.</p></div>
          <div class="note exam"><p>Mention <b>one interpretation</b> and use the car example as proof. A one-line verdict is enough: "the cold-start rule has an eight-hour condition nested inside a three-times condition, so a driver cannot work out the steps."</p></div>
          <div class="note heads-up"><p>Not on the slides: a clearer rule would give the <b>steps in order</b>, define the unit (one "trip") once, and say what the driver actually does. For example: "Fix the fault. Then drive three trips, each starting with an engine that has been off for eight hours." This rewrite is ours, to show the habit.</p></div>
        ` },
        { title: 'Completeness', html: `
          <p class="lead">A document is <b>complete</b> if no <b>relevant or important information</b> is missing. Both words depend on the <b>reader's needs</b>.</p>
          <ul>
            <li>"Relevant" and "important" are <b>relative terms</b>: relative to the reader. A repair manual for experts can skip what a beginner needs.</li>
            <li>Completeness is <b>difficult to prove</b> for any writing: how do you know when something is missing?</li>
            <li>The <b>most powerful technique</b> for cutting down incompleteness is to have <b>as many people as possible</b> read the material.</li>
            <li>Where later versions of the document are expected, <b>keep a list of missing information</b> as it is found, and add it to the next version.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Incomplete</h4><p>"Mix the powder with water and let it set."</p></div>
            <div class="side"><h4>Complete for a beginner</h4><p>"Mix 200 g of powder with 1 litre of clean water. Stir for 2 minutes. Let it set for 24 hours."</p></div>
          </div>
          <p><small>The wrong-to-right pair is added for study.</small></p>
          <div class="note exam"><p>When you say a text is incomplete, <b>name what is missing and who needs it</b>. "Missing the quantity of water, which a first-time user needs" scores. "Incomplete" alone does not.</p></div>
        ` },
        { title: 'Consistency', html: `
          <p class="lead"><b>Consistent</b> has two forms. <b>Internal</b> consistency: one part of the document does not contradict another. <b>External</b> consistency: the document agrees with <b>all other applicable documents and standards</b>.</p>
          <table class="tbl">
            <thead><tr><th>Form</th><th>Meaning</th><th>A slip</th></tr></thead>
            <tbody>
              <tr><td><b>Internal</b></td><td>no part contradicts another part</td><td>page 3 says the limit is 2000 kg, page 9 says 2500 kg</td></tr>
              <tr><td><b>External</b></td><td>agrees with other applicable documents and standards</td><td>a safety guide that gives a voltage different from the product standard</td></tr>
            </tbody>
          </table>
          <p><small>The slips are added for study.</small></p>
          <ul>
            <li>Both forms can be <b>checked through reviews</b>.</li>
            <li>They can be <b>repaired in later versions</b> as inconsistencies are found.</li>
          </ul>
          <div class="note why"><p>A reader who finds two different numbers has to guess which one the writer meant, so the clash costs both clarity and correctness. That is why one inconsistency makes readers doubt the whole document.</p></div>
          <div class="note trap"><p>Do not confuse <b>consistent</b> with <b>correct</b>. A document can repeat the same wrong figure everywhere and be perfectly consistent.</p></div>
        ` },
        { title: 'Changeability', html: `
          <p class="lead">A document is <b>changeable</b> if its structure <b>readily yields to modification</b>. This is IEEE's "modifiable".</p>
          <p>Usually this means the document is:</p>
          <ul>
            <li><b>numbered</b> (sections or lines, so changes can be referred to),</li>
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
          <div class="vs">
            <div class="side"><h4>Hard to change</h4><p>One unnumbered scanned PDF. A change to step 4 means retyping and renumbering by hand.</p></div>
            <div class="side"><h4>Changeable</h4><p>Numbered editable file under version control. "Change 8.1.4 to say 500 GB" is one edit.</p></div>
          </div>
          <p><small>The pair is added for study.</small></p>
          <div class="note heads-up"><p>Not on the slides: the textbook's example (next topic) shows <b>line numbers such as 8.1.4</b>. That numbering is exactly what lets reviewers say which line they mean and lets writers change one line without breaking the rest.</p></div>
        ` },
        { title: 'Which C failed', html: `
          <p class="lead">Practice: read the line, find the one C it breaks, and say why. The cases are ours, built on the textbook's definitions.</p>
          <div class="worked">
            <div class="given"><p>1. "The mixer motor shall run at 1500 rpm" in the summary, and "1200 rpm" in the specification table.</p></div>
            <div class="solve"><p>Two parts of the same document disagree.</p></div>
            <div class="result"><p><b>Consistent</b> (internal).</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>2. "Replace the filter and the cover that is dirty."</p></div>
            <div class="solve"><p>Two readings: the cover is dirty, or both parts are dirty. Only one is meant.</p></div>
            <div class="result"><p><b>Clear</b>. Fix: "Replace the filter. If the cover is dirty, replace it too."</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>3. "The cable shall be no longer than 20 meters" when the planned room is 200 meters across and the writer meant 200.</p></div>
            <div class="solve"><p>The sentence is clear and well formed, but the value is wrong.</p></div>
            <div class="result"><p><b>Correct</b> (technical correctness).</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>4. A user guide explains setup and use but never says what to do when the device overheats.</p></div>
            <div class="solve"><p>Relevant information for the reader is missing.</p></div>
            <div class="result"><p><b>Complete</b>.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>5. A report with no section numbers, saved as a picture, on a project where the content is expected to change weekly.</p></div>
            <div class="solve"><p>Edits would be slow and error-prone.</p></div>
            <div class="result"><p><b>Changeable</b>.</p></div>
          </div>
          <div class="note exam"><p>Always give the verdict (<b>which C</b>), then the proof (<b>the words that break it</b>), then the fix. Three short sentences.</p></div>
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
      blurb: 'The textbook\'s worked evaluation of a requirements excerpt for a smart home entertainment system: the 18 numbered lines, the verdict on each C, the ambiguous phrases the author picks out, and how to turn "How do I test this?" into rewrites.',
      source: 'Module 1 Introduction to Technical Communication / 5 C\'s of TW.pdf (textbook pages 39-41, section 2.7.7)',
      tabs: [
        { title: 'The excerpt', html: `
          <p class="lead">The textbook tests its own method on a real-looking sample: part of a systems specification for a <b>computer-automated ("smart") home entertainment system</b>, about <b>recording shows or movies</b> played through the television.</p>
          <p>Each line is numbered, as is normal in an SRS, so later reviews can say exactly which requirement they mean. Here are all eighteen, shortened.</p>
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
          <div class="note why"><p>The honest "cannot be sure" is part of the lesson. Correctness, completeness and consistency need <b>other readers and the whole document</b>. Clarity is the one C you can test alone, by asking "how would I test this?"</p></div>
          <p>The author closes the example by repeating the earlier point: <b>peer review</b> is the best way to establish these qualities, and tools such as spell checkers, grammar checkers and writing-level indicators might help show whether a document is ambiguous.</p>
        ` },
        { title: 'Unclear phrases and fixes', html: `
          <p class="lead">The author's method for Clarity: read a requirement and ask <b>"How do I test this?"</b> If you cannot design a test, the phrase is vague.</p>
          <p>He names five requirements. The first column is his question, and the last is a possible fix (ours, to practise).</p>
          <table class="tbl">
            <thead><tr><th>Line</th><th>His question</th><th>Clearer version (ours)</th></tr></thead>
            <tbody>
              <tr><td>8.1.1 "any show on television"</td><td>U.S. television or around the world? Pay-per-view?</td><td>"record any show on the channels the user has subscribed to, excluding pay-per-view"</td></tr>
              <tr><td>8.1.4 "make storage expandable"</td><td>What does "make storage" mean? Allocation? How much expansion?</td><td>"accept external drives, up to 4 TB in total"</td></tr>
              <tr><td>8.1.6 "search feature"</td><td>Search by program name, time recorded, subject?</td><td>"let the user search shows by title and by genre"</td></tr>
              <tr><td>8.1.10 "quality"</td><td>What does "quality" mean?</td><td>"let the user pick standard definition or high definition"</td></tr>
              <tr><td>8.1.12 "X episodes"</td><td>Is X a natural number, an integer, a complex number, a quaternion?</td><td>"X is a whole number from 1 to 50"</td></tr>
            </tbody>
          </table>
          <p>The author says there are <b>other ambiguities</b> too.</p>
          <div class="worked">
            <div class="given"><p>Make 8.1.3 testable: "The system shall allow user to record a minimum of two (2) television shows simultaneously."</p></div>
            <div class="solve"><p>Ask: two shows on different channels, or any two? At the same quality? From which inputs? A test needs a number and a condition.</p></div>
            <div class="result"><p>"The system shall record at least two programs on different channels at the same time, each at the quality the user selected."</p></div>
          </div>
          <div class="note heads-up"><p>The "Clearer version" column and the 8.1.3 fix are <b>ours</b>, not the book's. The invented limits (4 TB, 50) are only to show what a testable number looks like.</p></div>
        ` },
        { title: 'Reading it as a reviewer', html: `
          <p class="lead">Some of the 5 C questions are easy to ask once you look closely at the wording. The textbook leaves them open; here is what a careful reviewer might raise.</p>
          <ul>
            <li><b>Shall and may.</b> Seventeen lines say "shall"; 8.1.13 says "may". In requirement writing, "shall" marks something <b>required</b> and "may" something <b>optional</b>, so the change is deliberate: skipping commercials is a bonus.</li>
            <li><b>Possible tension.</b> 8.1.5 frees storage by FIFO, while 8.1.11 and 8.1.16 let users stop automatic overwriting or deletion. Which rule wins when space runs out?</li>
            <li><b>8.1.17.</b> "Shall not record any new shows if there is space available for recovery" reads as the opposite of what a device should do. Perhaps "no space" was meant. This is the kind of slip that review catches.</li>
            <li><b>8.1.9</b> asks for telephone menus, which is a different interface from the Web grid in 8.1.2. Is the phone option still wanted?</li>
          </ul>
          <div class="note heads-up"><p>Not on the slides: the textbook reports <b>no obvious inconsistencies</b> on an informal reading. The questions above are our own illustration of how a reviewer would test Consistent and Correct. Give the book's verdict in an answer, and use these only as extra points.</p></div>
          <div class="note trap"><p>Do not claim the excerpt "is correct and complete". The author's careful verdict is that nobody can say without further analysis, experts and the whole specification.</p></div>
          <div class="note example"><p>Why line numbers? The book points out that <b>line numbering is typical in SRS documents</b> because it helps you reference a specific requirement later. It also makes the document more <b>changeable</b>.</p></div>
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
        { name: `Testing for clarity`, html: `Ask <b>"How do I test this?"</b> If no test exists, rewrite with a <b>number, a condition or a named thing</b>` },
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
          <div class="vs">
            <div class="side"><h4>Lopsided list</h4><p>Eleven Web pages, one book, no journals.</p></div>
            <div class="side"><h4>Balanced list</h4><p>Two journal articles, two books, one conference paper, one standards document, one or two Web pages from a known body.</p></div>
          </div>
          <p><small>The two lists are added for study.</small></p>
          <div class="note why"><p>Each type fixes another's weakness. Journals are vetted but theoretical; Web pages are quick and practical but unvetted. Mixing them shows the reader that you checked more than one kind of evidence.</p></div>
          <div class="note heads-up"><p>Not on the slides: this section sits right after the 5 Cs because references support the <b>correctness</b> of a paper. A claim backed by a vetted, current, authoritative source is easier to trust.</p></div>
        ` },
        { title: 'Checking a list', html: `
          <p class="lead">Use the six questions on a list. Name the fault, then the fix.</p>
          <div class="worked">
            <div class="given"><p>A paper on electric-vehicle batteries lists 12 references: 9 Web pages (several from personal blogs), 2 conference papers, 1 book from 2004, and two of the entries are the same author's near-identical articles.</p></div>
            <div class="solve">
              <ul>
                <li><b>Origin:</b> nine Web pages, several of doubtful origin, is too many.</li>
                <li><b>Age:</b> a 2004 book is over ten years old in a fast-changing field.</li>
                <li><b>Mix:</b> no journal articles; conferences are not fully vetted.</li>
                <li><b>Duplication:</b> two similar articles by one author is over-referencing.</li>
                <li><b>Authors:</b> no sign of the well-known experts or the classic works.</li>
              </ul>
            </div>
            <div class="result"><p>Replace most blogs with <b>current journal articles and a recent book</b>, keep one article per author, add the <b>pioneering paper</b>, and keep a small number of reliable Web sources.</p></div>
          </div>
          <div class="note heads-up"><p>The paper and its list are invented for the example. The checks come from the textbook.</p></div>
          <div class="note trap"><p>"More references is always better" is not in the book. It warns against <b>over-referencing</b> and wants quality and variety, not volume.</p></div>
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
      blurb: 'The exercise deck worked through: seven multiple-choice items, the "name the principle" statements and the five rewrites, with an answer key built from the deck\'s rewrite slides, and a routine for turning a vague message into a clear one.',
      source: 'Module 1 Introduction to Technical Communication / Essentials of Technical Writing (5Cs) - Exercises.pptx (slides 1-15)',
      tabs: [
        { title: 'What the exercises test', html: `
          <p class="lead">The deck is <b>practice in writing messages that work</b>: specific, short, plain, and written so the reader knows what to do. The questions ask you to spot the best sentence or fix a weak one.</p>
          <div class="note heads-up"><p>The deck does not carry an answer key for the multiple-choice items. The answers in the next tab are <b>worked out by us</b> from the deck's own rewrite slides (which show the target sentence for each weak message). Check them against your lecturer's key.</p></div>
          <p>The principles the questions point at:</p>
          <table class="tbl">
            <thead><tr><th>Principle</th><th>What the best sentence does</th></tr></thead>
            <tbody>
              <tr><td><b>Practical, useful information</b></td><td>names what, to whom, by when, how</td></tr>
              <tr><td><b>Conciseness</b></td><td>no filler, no hedging, no repeated idea</td></tr>
              <tr><td><b>Clarity of expectations</b></td><td>says who must do what and by when</td></tr>
              <tr><td><b>Simplifying complex information</b></td><td>plain words for the same idea</td></tr>
              <tr><td><b>Persuasion</b></td><td>shows the reader a benefit</td></tr>
              <tr><td><b>Effectiveness</b></td><td>the reader can act at once</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>These names come from the exercise wording, not from the textbook's 5 Cs (correct, clear, complete, consistent, changeable). The deck is titled "5Cs", so expect both lists: the textbook's five for evaluating documents, and these message qualities (clear, concise, concrete) for writing business messages. Treat them as two separate tools.</p></div>
        ` },
        { title: 'The seven questions', html: `
          <p class="lead">The seven MCQs, with the best answer and the reason. The wording below is shortened from the deck.</p>
          <table class="tbl">
            <thead><tr><th>Q</th><th>Task</th><th>Best</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Provides practical, useful information</td><td><b>c</b> "Employees must submit the completed project report by 4:00 p.m. on Friday through the employee portal."</td><td>what, by when, through what. The others say "quickly", "whenever possible", "work hard".</td></tr>
              <tr><td>2</td><td>Most concise</td><td><b>b</b> "Tomorrow's meeting is postponed because key participants are unavailable."</td><td>states the fact in one clause. (a) "due to the fact that", (c) "since" plus "therefore" double the reason, (d) "may not take place" hedges.</td></tr>
              <tr><td>3</td><td>Which principle: "The finance team must submit the quarterly budget to the Director by 5 p.m. on Monday."</td><td><b>b</b> Clarity of expectations</td><td>who, what, to whom, when. Not persuasion, emotion or informality.</td></tr>
              <tr><td>4</td><td>Best simplifies complex information</td><td><b>a</b> "The new process changes how departments work together."</td><td>plain words. (b), (c) and (d) pile up "implementation", "organizational realignment", "operational protocols".</td></tr>
              <tr><td>5</td><td>Most persuasive</td><td><b>d</b> "Attending the workshop will improve your communication skills and help you work more efficiently."</td><td>gives a benefit to the reader. (a) is a bare order, (b) a rule, (c) weak.</td></tr>
              <tr><td>6</td><td>Least effective</td><td><b>c</b> "Submit the form soon."</td><td>"soon" has no deadline, no form named, no recipient.</td></tr>
              <tr><td>7</td><td>NOT associated with effective business communication</td><td><b>d</b> Vagueness</td><td>accuracy, clarity and conciseness are all wanted.</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>In Q6 the shortest option (c) is the worst, and in Q2 the longest options are the worst. <b>Short is not the same as concise.</b> Concise means everything needed and nothing more.</p></div>
          <div class="note exam"><p>For "which is best" items, cross out options with <b>vague time words</b> (soon, whenever possible), <b>hedges</b> (probably, may) and <b>fancy words</b> (necessitates, protocols). The one left usually has a name, a number and a deadline.</p></div>
        ` },
        { title: 'Name the principle', html: `
          <p class="lead">Slide 9 gives three statements and asks which principle each shows. The deck has no key, so these are our readings, using the same principles as questions 3 to 5.</p>
          <div class="worked">
            <div class="given"><p>"Employees must upload attendance records before 10:00 a.m. every Monday."</p></div>
            <div class="solve"><p>Who: employees. What: upload attendance records. When: before 10:00 a.m. every Monday. Nothing left to guess.</p></div>
            <div class="result"><p><b>Clarity of expectations</b> (also practical, useful information).</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>"The software update will help reduce system errors by 30%."</p></div>
            <div class="solve"><p>It shows the reader a benefit and backs it with a figure. It does not command, it convinces.</p></div>
            <div class="result"><p><b>Persuasion</b> with a concrete, measurable benefit.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>"The new workflow changes how departments share information."</p></div>
            <div class="solve"><p>Compare "The implementation of revised operational procedures necessitates organizational realignment." This is the same idea in short, everyday words.</p></div>
            <div class="result"><p><b>Simplifying complex information</b>.</p></div>
          </div>
          <div class="note exam"><p>Give the principle in two or three words, then <b>quote the phrase</b> that shows it ("by 10:00 a.m. every Monday", "by 30%", "how departments share information").</p></div>
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
          <div class="note why"><p>Notice that rewrite 5 adds <b>length</b> and is still better. The extra words are information the reader needs (when) and a reason (why). Only message 2 gets shorter. Concise means no waste, not no words.</p></div>
          <div class="note exam"><p>In a rewrite question you score for the <b>specific additions</b>: a named actor, a named object, a deadline, and where useful a reason.</p></div>
        ` },
        { title: 'A rewrite routine', html: `
          <p class="lead">Every rewrite in the deck follows the same moves. Use them on any weak message.</p>
          <ol class="steps">
            <li><b>Who</b> must act? Replace "everyone" or "staff" with the real group if you can.</li>
            <li><b>What</b> exactly? Replace "properly", "attention" and "it" with the actual action.</li>
            <li><b>To whom, where, how?</b> Add the recipient or the channel (to the manager, through the portal).</li>
            <li><b>By when?</b> Replace "soon" and "whenever possible" with a time and date.</li>
            <li><b>Cut filler</b> and hedges: "which has already been", "possibly", "due to the fact that".</li>
            <li><b>Add a reason</b> if the reader needs to be convinced.</li>
          </ol>
          <div class="vs">
            <div class="side"><h4>Vague</h4><p>"Interns should submit the form soon."</p></div>
            <div class="side"><h4>Clear</h4><p>"All interns must submit the leave form to HR by 5:00 p.m. on Friday."</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Wordy</h4><p>"Due to the fact that the server is under maintenance, it will probably be unavailable."</p></div>
            <div class="side"><h4>Concise</h4><p>"The server is unavailable during maintenance."</p></div>
          </div>
          <p><small>The two pairs are ours, built on the deck's patterns.</small></p>
          <div class="mnemonic"><p><b>Who, what, to whom, by when, why.</b> Add what is missing and delete what is padding.</p></div>
          <div class="note heads-up"><p>"Should" and "must" matter. The deck's targets use "must" when the action is required and "should" for a request for feedback (rewrite 4). Pick the one that matches how firm the obligation is.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Which sentence gives practical, useful information (Q1)?`, back: `The one with <b>what, when and how</b>: submit the report by 4:00 p.m. on Friday through the portal.` },
        { front: `Most concise option (Q2)?`, back: `"Tomorrow's meeting is postponed because key participants are unavailable."` },
        { front: `Principle in "The finance team must submit the quarterly budget to the Director by 5 p.m. on Monday"?`, back: `<b>Clarity of expectations</b>.` },
        { front: `Which message best simplifies complex information (Q4)?`, back: `<b>The new process changes how departments work together.</b>` },
        { front: `Most persuasive sentence (Q5)?`, back: `The one that states a <b>benefit</b>: it will improve your skills and help you work more efficiently.` },
        { front: `Least effective message (Q6)?`, back: `"Submit the form <b>soon</b>": no deadline, no recipient.` },
        { front: `Not associated with effective business communication (Q7)?`, back: `<b>Vagueness</b>.` },
        { front: `Rewrite routine?`, back: `<b>Who, what, to whom, by when, why</b>; cut filler and hedges.` },
        { front: `Is short the same as concise?`, back: `No. <b>Concise = everything needed and nothing more</b>.` },
      ],
      oneLiners: [
        `Effective messages say <b>who does what, to whom, by when</b>.`,
        `Vague time words (<b>soon, whenever possible</b>) mark the weak option.`,
        `Hedges (<b>probably, may possibly</b>) and padding ("due to the fact that") make a message wordy.`,
        `To simplify, swap fancy words (<b>necessitates, realignment, protocols</b>) for everyday ones.`,
        `To persuade, show the reader a <b>benefit</b>, ideally with a figure.`,
        `<b>Vagueness</b> is the one quality that is never effective.`,
        `Concise does not mean short: rewrites may get longer when they add needed information.`,
      ],
      formulas: [
        { name: `Rewrite routine`, html: `<b>Who</b> + <b>what</b> + <b>to whom</b> + <b>by when</b> + <b>why</b>; delete filler and hedges` },
        { name: `Spotting the best option`, html: `Drop options with <b>vague time words, hedges and fancy words</b>; pick the one with a name, a number and a deadline` },
      ],
    },

    {
      id: 'm1-email-review',
      title: 'Reviewing emails: what is wrong and how to fix it',
      short: 'Email review',
      blurb: 'The exercise deck\'s sample emails and its critiques: the Josh update, the grade request from John, the Michael instruction, a slangy panic email and an unsupervised AI condolence note, plus the "do and don\'t" phrase list and a full rewrite.',
      source: 'Module 1 Introduction to Technical Communication / Essentials of Technical Writing (5Cs) - Exercises.pptx (slides 16-26; slides 16-18, 23 and 24 are screenshots, 21 and 26 are blank)',
      tabs: [
        { title: 'What a good email does', html: `
          <p class="lead">The deck shows four weak emails, one AI-written email and a list of weak phrases. Each critique repeats the same few rules, so learn the rules first.</p>
          <ul>
            <li><b>A clear subject line</b> that says the purpose and, if needed, the urgency.</li>
            <li><b>A proper greeting</b> that uses the reader's name or title ("Dear Professor [Last Name],").</li>
            <li><b>A logical structure</b>: purpose first, then reason, then the exact request.</li>
            <li><b>Specific deadlines</b> and a clearly stated action.</li>
            <li><b>A respectful tone</b>: no demands, no blame, no pressure.</li>
            <li><b>A closing</b> with next steps, a polite sign-off and the sender's full name.</li>
          </ul>
          <div class="note exam"><p>When a sample email is given, go through the list above in order and name every miss. The slide critiques give <b>6, 10 and 8 points</b> for the three emails, so aim for at least five different points with the evidence.</p></div>
          <div class="note heads-up"><p>The deck shows the emails as pictures. The critiques sit on the slides that follow each picture. Two pictures (the first, "heyyy, need u NOW", and the AI condolence email) have no critique on the slides. Those are marked "ours" below.</p></div>
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
          <div class="note why"><p>The common thread: each paragraph raises a topic and drops it. A reader cannot approve, decide or help, because there is no exact request in the email.</p></div>
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
          <div class="note trap"><p>The complaint about the exam may be true. A fair concern still fails when it is written as an order. Ask for a review, give the reason, then let the professor decide.</p></div>
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
          <div class="note exam"><p>Note how the contradictions help you find points: "no back-and-forth" plus "no mistakes" while giving no list and no meeting time. The reader is set up to fail, which is why it demotivates.</p></div>
        ` },
        { title: 'Panic email and AI email', html: `
          <p class="lead">Two more samples without critiques on the slides. The points below are our reading, built from the same rules.</p>
          <h3>"heyyy, need u NOW" (ours)</h3>
          <p>The subject reads "heyyy, need u NOW!!!!!" with two siren emoji. The body: "hope ur good. listen, i got a BIG problem n need u 2 fix it ASAP. idk how it happened but its bad. r u free rn?? pls reply FAST!!! dont ignore this. thx".</p>
          <ul>
            <li>Slang and text-speak ("u", "n", "2", "rn", "idk"), <b>capitals, many exclamation marks and emoji</b>: wrong register.</li>
            <li><b>No name</b> in the greeting, no sender name at the end.</li>
            <li>The problem is never stated: <b>what is wrong, where, since when</b>.</li>
            <li>"Fix it ASAP" and "reply FAST" give no real deadline; "dont ignore this" is pressure, not a request.</li>
          </ul>
          <h3>The AI condolence email (slide 20)</h3>
          <p>The deck calls it "The Email Written by AI (Without Human Oversight)". It opens "Hi [Name]" and ends "Warm regards, [Your Name]". It offers "heartfelt condolences", says the loss must be hard, and tells the reader to take all the time needed.</p>
          <ul>
            <li>The <b>placeholders were never filled</b>: the clearest sign nobody read it before sending.</li>
            <li>Every phrase is generic. It does not name the person who died, the relationship or a specific memory.</li>
            <li>"We're thinking of you": the writer says "we" without saying who.</li>
            <li>No concrete offer (cover a task, call on a date), so it comforts nobody in particular.</li>
          </ul>
          <div class="note heads-up"><p>Not on the slides: the deck gives only the email, with no critique. The lesson in the title is plain: <b>an AI draft needs a human to check names, facts and feeling</b> before it goes out.</p></div>
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
          <div class="note why"><p>The weak column hides the request behind hedges and apologies. The strong column states the <b>action, the owner and the deadline</b>. That is the same rule as the five rewrites.</p></div>
          <div class="note heads-up"><p>Not on the slides: "As per my last email" is on the weak list because it can read as a reproach. Politeness is part of clarity: a firm, specific request is not rude.</p></div>
        ` },
        { title: 'Rewriting an email', html: `
          <p class="lead">Fix the Josh email using the rules. The aim is a reader who can decide in one reading.</p>
          <div class="worked">
            <div class="given"><p>Josh's email (shortened): "Hope you're doing well. Just wanted to give you a quick update... a few areas are still unclear... I might be out for a few days next week... some team members are handling things differently... Let me know your thoughts when you have time."</p></div>
            <div class="solve">
              <ol class="steps">
                <li><b>Subject</b> names purpose and date: leave request plus one decision needed.</li>
                <li><b>Greeting</b> uses a name.</li>
                <li><b>Status</b> in one line with a fact.</li>
                <li><b>Request guidance</b> on the unclear areas by naming them.</li>
                <li><b>Ask formally</b> for the leave, with dates.</li>
                <li><b>Describe the team issue</b> with an example, or leave it out.</li>
                <li><b>Close</b> with the exact response needed and by when.</li>
              </ol>
            </div>
            <div class="result"><p><b>Subject:</b> Leave request 14 to 16 March and one decision on the test plan. Dear Ms Rao, the project is on schedule for the 20 March review. Two points need your input. First, I am unsure whether the report covers the new sensors or only the old ones. Could you confirm by Thursday? Second, I request leave on 14 to 16 March; Arun can cover my tasks. Please approve or let me know if the dates clash. Thank you. Josh Mathew</p></div>
          </div>
          <div class="note heads-up"><p>The rewrite is ours; names, dates and details are invented. The deck does not give a model rewrite, only the list of faults.</p></div>
          <div class="note exam"><p>A "rewrite the email" task scores for the same items as the critique: <b>subject, greeting, structure, specific request, deadline, tone, closing</b>. Check each one off.</p></div>
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
        { front: `What went wrong in the AI condolence email?`, back: `No human oversight: <b>placeholders left in</b> and generic wording.` },
        { front: `Strong replacement for "Please advise"?`, back: `<b>Do you approve Option A or Option B?</b>` },
        { front: `Strong replacement for "I was wondering if..."?`, back: `<b>Please [specific action] by [deadline]</b>.` },
      ],
      oneLiners: [
        `A good email has a <b>clear subject, a proper greeting, a logical structure, a specific request, a deadline, a respectful tone and a closing</b>.`,
        `The Josh email raises topics but <b>makes no request</b>: no guidance asked, no leave approved.`,
        `The grade email <b>demands instead of asking</b> and gives no reasons, no full name and no sign-off.`,
        `The Michael email is <b>aggressive</b>, with vague deadlines, and discourages communication.`,
        `An AI draft with <b>placeholders left in</b> shows no human checked it.`,
        `Replace hedges ("just checking in", "if you have time") with <b>action, owner and deadline</b>.`,
        `A firm, specific request is <b>not rude</b>; a vague or demanding one is.`,
      ],
      formulas: [
        { name: `Email checklist`, html: `<b>Subject · Greeting · Structure · Specific request · Deadline · Tone · Closing and full name</b>` },
        { name: `Replace a hedge`, html: `"If you have time..." becomes <b>"Please [action] by [deadline]"</b>`, note: `From the do and don't slide.` },
      ],
    },

    {
      id: 'm1-case-study',
      title: 'Communication case study: the XYZ memo',
      short: 'Case study: XYZ memo',
      blurb: 'The sample communication case study: a president\'s memo forcing use of the company app. The question, the barriers behind it, the structure of the 200 to 250 word sample answer, the losses, and a template for answering other cases.',
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
          <p class="lead">The sample names two barriers, <b>organisational</b> and <b>interpersonal</b>, and says other barriers are fine if you <b>justify them logically</b>. Know the common types so you can choose.</p>
          <table class="tbl">
            <thead><tr><th>Barrier</th><th>What it is</th><th>In the XYZ case</th></tr></thead>
            <tbody>
              <tr><td><b>Organisational</b></td><td>the structure, channel or rules of the organisation get in the way</td><td>a formal company-wide memo (an impersonal medium) used for a personal, debatable demand</td></tr>
              <tr><td><b>Interpersonal</b></td><td>feelings, attitude and relationships between people distort the message</td><td>the ultimatum "seek employment elsewhere" reads as an emotional outburst</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: the file names only these two barriers. These other standard types may also fit and are usable if you justify them: <b>semantic</b> (words and jargon), <b>psychological</b> (fear, defensiveness, stress), <b>physical</b> (noise, distance), <b>cultural</b> (different norms) and <b>emotional</b>. Always tie the type to the words of the scenario.</p></div>
          <div class="note exam"><p>Pick <b>one or two</b> barriers, name each, and point to the exact phrase in the scenario that proves it. Naming five without proof scores less than two with evidence.</p></div>
          <div class="note trap"><p>Do not write that "communication was poor". Say what kind of barrier it was and where in the memo it shows.</p></div>
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
              <tr><td>Confidence in the app</td><td>external: "forced use" suggests it is not good enough on its own</td></tr>
              <tr><td>Company goals and brand reputation</td><td>overall result</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>A formal memo is a poor way to deliver a personal, emotional or controversial message. A meeting or a face-to-face talk lets people ask questions. The leak shows the other danger: anything written can be shared.</p></div>
        ` },
        { title: 'Answer template and practice', html: `
          <p class="lead">Use the same skeleton for any communication case study. Keep each part to one to three sentences so the whole fits in 200 to 250 words.</p>
          <div class="kv">
            <div><span>1. Frame</span><b>one line on why identifying barriers matters</b></div>
            <div><span>2. Barrier(s)</span><b>name 1 or 2 types</b></div>
            <div><span>3. Evidence</span><b>quote the phrase or point in the scenario that proves each</b></div>
            <div><span>4. Internal losses</span><b>trust, morale, productivity, retention</b></div>
            <div><span>5. External losses</span><b>image, customers, public confidence</b></div>
            <div><span>6. Close</span><b>link barrier and losses to the goal or reputation</b></div>
          </div>
          <div class="worked">
            <div class="given"><p>Practice (ours): A manager announces a new shift pattern by posting a one-line notice on the staff board at 6 p.m. on Friday, effective Monday. Staff say they were not asked, and several resign.</p></div>
            <div class="solve">
              <ul>
                <li><b>Barrier:</b> <b>organisational</b>, because a noticeboard note is the wrong channel for a change that affects people's lives. Also <b>psychological</b>: staff felt ignored and became defensive.</li>
                <li><b>Evidence:</b> "posted", "6 p.m. on Friday", "effective Monday", "not asked".</li>
                <li><b>Internal losses:</b> trust, morale, and resignations.</li>
                <li><b>External loss:</b> if customers see service gaps, the company's reputation suffers.</li>
              </ul>
            </div>
            <div class="result"><p>Open with the frame, name organisational and psychological barriers, quote "posted" and "effective Monday", then list the losses and close on the effect on the company's service.</p></div>
          </div>
          <div class="note heads-up"><p>The practice case and its analysis are ours, to show the template. The XYZ answer is the only sample from the Drive.</p></div>
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
        `Written messages can be <b>leaked</b>, which multiplies the damage.`,
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
