CHUNK({
  chunk: 'I',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------ voice basics
    {
      id: 'm2-voice-basics',
      title: 'Active and passive voice: the idea and the three steps',
      short: 'Voice: the basics',
      blurb: 'What active and passive voice are, how to find subject, verb and object, the three steps of converting, the notes about tense and the by-phrase, and when technical writing chooses the passive.',
      source: 'Module 2 Grammar / Active and Passive voice - Preparatory notes.pptx, Active-and-passive-voice - conversion rules.docx (opening), Blue Book Effective Writing rules',
      tabs: [
        { title: 'Active or passive', html: `
          <p class="lead"><b>Voice</b> tells you who is in front. In the <b>active voice</b> the subject <b>does</b> the action. In the <b>passive voice</b> the subject <b>receives</b> it.</p>
          <div class="vs">
            <div class="side"><h4>Active</h4><p>The cow (subject) is eating (verb) grass (object).</p><p>The subject is active: it performs the action.</p></div>
            <div class="side"><h4>Passive</h4><p>Grass (subject) is being eaten (verb) by the cow.</p><p>The subject is acted upon by the verb.</p></div>
          </div>
          <p>Same fact, two points of view. The passive puts the <b>receiver</b> first and often drops the doer completely: "The ball was hit." Nobody is named.</p>
          <h3>Why it matters for you</h3>
          <ul>
            <li>Lab reports, methods sections and abstracts lean on the passive ("The solution <b>was heated</b>"), so you must be able to <b>form it correctly</b>.</li>
            <li>Emails, instructions and project updates read better in the active ("The team <b>completed</b> the test"), so you must also know when to <b>avoid it</b>.</li>
            <li>Voice conversion is a standard CAT question: change a given sentence from active to passive or back, in any tense.</li>
          </ul>
          <div class="note exam"><p>Quick test: can you add "by someone" at the end and still make sense? If yes, the sentence is passive. "The window was broken (by someone)" passes; "The dog chased the cat" does not.</p></div>
        ` },
        { title: 'Subject, verb and object', html: `
          <p class="lead">Before you convert anything, mark the <b>subject, verb and object</b> of the active sentence. This is step one every time.</p>
          <div class="kv"><div><span>Subject</span><b>the person or thing performing the action</b></div><div><span>Verb</span><b>the action word</b></div><div><span>Object</span><b>the person or thing receiving the action</b></div></div>
          <div class="worked">
            <div class="given"><p>The researcher conducted the experiment.</p></div>
            <div class="solve"><p>Subject: <b>the researcher</b>. Verb: <b>conducted</b>. Object: <b>the experiment</b>.</p></div>
            <div class="result"><p>Ready to convert: the experiment will become the new subject.</p></div>
          </div>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>Subject</th><th>Verb</th><th>Object</th></tr></thead>
            <tbody>
              <tr><td>The dog chased the cat.</td><td>the dog</td><td>chased</td><td>the cat</td></tr>
              <tr><td>The teacher praised the student.</td><td>the teacher</td><td>praised</td><td>the student</td></tr>
              <tr><td>The artist painted a beautiful picture.</td><td>the artist</td><td>painted</td><td>a beautiful picture</td></tr>
              <tr><td>The mechanic fixed the car.</td><td>the mechanic</td><td>fixed</td><td>the car</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>In a <b>passive</b> sentence the grammatical subject is the receiver. In "The cookies were baked by my mom", the subject is <b>cookies</b>, not <em>my mom</em>. The voice quiz tests exactly this.</p></div>
          <div class="note why"><p>No object, no passive. "The children were playing in the park" has no object (<em>in the park</em> is a place phrase), so there is nothing to promote to subject. The next tab shows how the prep notes handle it.</p></div>
        ` },
        { title: 'Three steps to the passive', html: `
          <p class="lead">Converting active to passive takes three moves: <b>switch</b> the subject and object, <b>change the verb</b>, and optionally <b>add by</b> with the old subject.</p>
          <figure data-fig="m2-voice-swap"></figure>
          <ol class="steps">
            <li><b>Switch subject and object</b> the object of the active sentence becomes the subject of the passive sentence. The old subject becomes the object of a prepositional phrase, usually with <b>by</b>.</li>
            <li><b>Change the verb form</b> use the right form of <b>be</b> (is, are, was, were...) plus the past participle (<b>V3</b>) of the main verb: <em>conducted</em> becomes <em>was conducted</em>.</li>
            <li><b>Add or omit the by-phrase</b> "The experiment was conducted by the researcher" or just "The experiment was conducted."</li>
          </ol>
          <h3>More conversions from the slides</h3>
          <table class="tbl">
            <thead><tr><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>The dog chased the cat.</td><td>The cat was chased by the dog.</td></tr>
              <tr><td>The teacher praised the student.</td><td>The student was praised by the teacher.</td></tr>
              <tr><td>The artist painted a beautiful picture.</td><td>A beautiful picture was painted by the artist.</td></tr>
              <tr><td>The children were playing in the park.</td><td>The park was being played in by the children. (slide version)</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The last row is on the slide, but it is a stretch. Normal English does not put "the park" as the subject here. Keep it as a curiosity: it shows that <b>was playing</b> (past continuous) becomes <b>was being played</b> (be-form of the same tense + V3). In an exam, choose sentences that have a true object.</p></div>
          <div class="note trap"><p>The participle is the third form (V3): <em>written</em>, <em>done</em>, <em>taken</em>, never the past simple when they differ. Wrong: "The report was wrote." Right: "The report was <b>written</b>."</p></div>
        ` },
        { title: 'Three notes from the slides', html: `
          <p class="lead">The prep notes end with three notes. Learn them as a set.</p>
          <ol class="steps">
            <li><b>Keep the tense</b> the tense of the passive verb must match the tense of the active verb. Active simple past (<em>conducted</em>) gives passive simple past (<em>was conducted</em>).</li>
            <li><b>The by-phrase is optional</b> leave it out when the doer is <b>unknown or unimportant</b>.</li>
            <li><b>Why use passive</b> to <b>emphasise the receiver</b> of the action, or to make the sentence sound <b>more formal or impersonal</b>.</li>
          </ol>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The experiment <b>is</b> conducted by the researcher. (active sentence was past: <em>conducted</em>)</p><p>The report was finish by me.</p></div>
            <div class="side"><h4>Right</h4><p>The experiment <b>was</b> conducted by the researcher.</p><p>The report was <b>finished</b> by me.</p></div>
          </div>
          <h3>When the doer can go</h3>
          <ul>
            <li>Unknown: "My bag was stolen." (we do not know who)</li>
            <li>Obvious: "The thief was arrested." (the police, obviously)</li>
            <li>Unimportant: "The samples were stored at 4 degrees." (it does not matter who stored them)</li>
          </ul>
          <div class="note exam"><p>When asked to convert and the by-phrase would be a pronoun like <em>by me</em> or <em>by them</em>, the answer is still correct with or without it. Include it if the question says "convert fully" and leave it out for "convert, omitting the doer".</p></div>
        ` },
        { title: 'Passive in technical writing', html: `
          <p class="lead"><b>Not on the slides</b> (except the first Blue Book rule). Technical writers use <b>both</b> voices. Pick by what the reader needs to see first.</p>
          <table class="tbl">
            <thead><tr><th>Use the passive when</th><th>Use the active when</th></tr></thead>
            <tbody>
              <tr><td>the <b>action or result</b> matters more than who did it (methods: "The sample was heated to 80 degrees")</td><td>the <b>doer</b> matters or you need to <b>assign responsibility</b> ("The technician replaced the valve")</td></tr>
              <tr><td>the doer is unknown or obvious</td><td>you give <b>instructions</b> ("Connect the red lead first")</td></tr>
              <tr><td>you want a formal, impersonal tone</td><td>you want <b>short, direct</b> sentences</td></tr>
            </tbody>
          </table>
          <p>The Blue Book rule: <b>use active voice whenever possible</b>. Its example: "Barry hit the ball" (active) against "The ball was hit" (passive), where the responsible party may not even appear.</p>
          <div class="vs">
            <div class="side"><h4>Vague passive</h4><p>A mistake was made in the calculation.</p><p>There is a case of meningitis that was reported in the newspaper.</p></div>
            <div class="side"><h4>Clear active</h4><p>The technician entered the wrong value in the calculation.</p><p>The newspaper reported a case of meningitis.</p></div>
          </div>
          <div class="note trap"><p>The passive can hide a <b>dangling modifier</b>: "While measuring the voltage, the meter was dropped." Who measured? Right: "While measuring the voltage, <b>she dropped</b> the meter."</p></div>
          <div class="note heads-up"><p>Abstracts (see the Writing module) use the passive for the method ("Questionnaires were distributed") and the past tense for findings. Keep that pattern when you write a report.</p></div>
        ` },
      ],
      flashcards: [
        { front: `In active voice, the subject...`, back: `<b>performs</b> the action.` },
        { front: `In passive voice, the subject...`, back: `is <b>acted upon</b> by the verb (receives the action).` },
        { front: `Step 1 of converting active to passive?`, back: `Find <b>subject, verb, object</b>, then <b>switch</b> subject and object.` },
        { front: `Passive verb formula?`, back: `Right form of <b>be</b> + <b>past participle (V3)</b>.` },
        { front: `Preposition that introduces the doer?`, back: `<b>by</b>.` },
        { front: `Passive of "The researcher conducted the experiment."`, back: `The experiment <b>was conducted</b> by the researcher.` },
        { front: `The cow is eating grass. Passive?`, back: `Grass <b>is being eaten</b> by the cow.` },
        { front: `When can the by-phrase be dropped?`, back: `When the doer is <b>unknown or unimportant</b>.` },
        { front: `Tense rule in conversion?`, back: `The passive verb keeps the <b>same tense</b> as the active verb.` },
        { front: `Two reasons to use the passive (slides)?`, back: `<b>Emphasise the receiver</b>; sound <b>formal or impersonal</b>.` },
        { front: `Blue Book advice on voice?`, back: `Use <b>active voice whenever possible</b>.` },
      ],
      oneLiners: [
        'Active: subject <b>performs</b> the action. Passive: subject <b>receives</b> it.',
        'Convert in three moves: <b>switch</b> subject and object, <b>be + V3</b>, optional <b>by + doer</b>.',
        'The <b>object</b> of the active sentence is the <b>subject</b> of the passive one.',
        'The passive keeps the <b>tense</b> of the active verb: conducted gives was conducted.',
        'Drop the <b>by-phrase</b> when the doer is unknown, obvious or unimportant.',
        'Passive suits <b>methods and formal reports</b>; active suits instructions and clear emails.',
        'No object in the active sentence usually means <b>no passive</b>.',
      ],
      formulas: [
        { name: 'Active to passive', html: `<b>Object</b> becomes subject · verb becomes <b>be + V3</b> (same tense) · <b>by + old subject</b> (optional)`, note: 'The dog chased the cat. The cat was chased by the dog.' },
        { name: 'Voice test', html: `Add <b>"by someone"</b> at the end: if it still makes sense, it is passive`, note: 'The window was broken (by someone).' },
      ],
    },

    // ------------------------------------------------------------------ voice tenses
    {
      id: 'm2-voice-tenses',
      title: 'Voice conversion across the tenses',
      short: 'Voice with tenses',
      blurb: 'The be-form that each tense takes in the passive, with the positive, negative and question rows from the conversion handout, and the handout rule about perfect continuous tenses.',
      source: 'Module 2 Grammar / Active-and-passive-voice - conversion rules.docx (tense tables)',
      tabs: [
        { title: 'The conversion recipe', html: `
          <p class="lead">For every tense the passive is <b>the right form of be, in that tense, plus V3</b>. Learn the be-forms and you can convert anything.</p>
          <ol class="steps">
            <li><b>Find S, V, O</b> subject, verb and object of the active sentence.</li>
            <li><b>Object becomes subject</b> and if the object is a pronoun, change it to its subject form (me becomes I).</li>
            <li><b>Choose the helping verb</b> by the tense, and make it match the new subject (is or are, was or were). If a helping verb is already present, keep it as it is.</li>
            <li><b>Verb becomes V3</b> the past participle (third form).</li>
            <li><b>Add by</b> before the old subject, which becomes the object (he becomes <em>by him</em>).</li>
          </ol>
          <table class="tbl">
            <thead><tr><th>Tense</th><th>Passive pattern</th></tr></thead>
            <tbody>
              <tr><td>Simple present</td><td><b>is, am, are</b> + V3</td></tr>
              <tr><td>Present continuous</td><td><b>is, am, are + being</b> + V3</td></tr>
              <tr><td>Present perfect</td><td><b>has, have + been</b> + V3</td></tr>
              <tr><td>Simple past</td><td><b>was, were</b> + V3</td></tr>
              <tr><td>Past continuous</td><td><b>was, were + being</b> + V3</td></tr>
              <tr><td>Past perfect</td><td><b>had + been</b> + V3</td></tr>
              <tr><td>Simple future</td><td><b>will, shall + be</b> + V3</td></tr>
              <tr><td>Future perfect</td><td><b>will, shall + have been</b> + V3</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>There is a simple logic. Continuous tenses add <b>being</b>, perfect tenses add <b>been</b>, and future tenses add <b>be</b>. The main verb is always V3.</p></div>
          <div class="note exam"><p>Write the helping-verb pattern first in rough work. It prevents the most common slip: a correct V3 with the wrong be-form.</p></div>
        ` },
        { title: 'Present tenses', html: `
          <p class="lead">Each tense is shown in all three shapes the handout uses: <b>positive, negative, question</b>.</p>
          <h3>Simple present: is, am, are + V3</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>+</td><td>He lights the candle.</td><td>The candle <b>is lighted</b> by him.</td></tr>
              <tr><td>-</td><td>He does not light the candle.</td><td>The candle <b>is not lighted</b> by him.</td></tr>
              <tr><td>?</td><td>Do you eat meat?</td><td><b>Is</b> meat <b>eaten</b> by you?</td></tr>
            </tbody>
          </table>
          <h3>Present continuous: is, am, are + being + V3</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>+</td><td>I am driving a car.</td><td>A car <b>is being driven</b> by me.</td></tr>
              <tr><td>-</td><td>I am not driving a car.</td><td>A car <b>is not being driven</b> by me.</td></tr>
              <tr><td>?</td><td>Am I driving a car?</td><td><b>Is</b> a car <b>being driven</b> by me?</td></tr>
            </tbody>
          </table>
          <h3>Present perfect: has, have + been + V3</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>+</td><td>She has stolen my book.</td><td>My book <b>has been stolen</b> by her.</td></tr>
              <tr><td>-</td><td>She has not stolen my book.</td><td>My book <b>has not been stolen</b> by her.</td></tr>
              <tr><td>?</td><td>Has she stolen my book?</td><td><b>Has</b> my book <b>been stolen</b> by her?</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The handout's negative row for the present perfect repeats the positive passive ("has been stolen"). The correct negative is <b>has not been stolen</b>, as above. For "lights", the usual participle is <em>lit</em>: "The candle is lit by him"; the handout's <em>lighted</em> is also accepted.</p></div>
          <div class="note trap"><p>In a question the helping verb jumps in front of the subject: "<b>Is</b> a car being driven by me?", never "A car is being driven by me?" with a question mark.</p></div>
        ` },
        { title: 'Past tenses', html: `
          <p class="lead">Past tenses change <em>is/are</em> into <b>was/were</b> and follow the same logic.</p>
          <h3>Simple past: was, were + V3</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>+</td><td>She finished work.</td><td>Work <b>was finished</b> by her.</td></tr>
              <tr><td>-</td><td>She did not finish work.</td><td>Work <b>was not finished</b> by her.</td></tr>
              <tr><td>?</td><td>Did she finish work?</td><td><b>Was</b> work <b>finished</b> by her?</td></tr>
            </tbody>
          </table>
          <h3>Past continuous: was, were + being + V3</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>+</td><td>He was revising his books.</td><td>His books <b>were being revised</b> by him.</td></tr>
              <tr><td>-</td><td>He was not revising his books.</td><td>His books <b>were not being revised</b> by him.</td></tr>
              <tr><td>?</td><td>Was he revising his books?</td><td><b>Were</b> his books <b>being revised</b> by him?</td></tr>
            </tbody>
          </table>
          <h3>Past perfect: had + been + V3</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>+</td><td>I had completed the assignment.</td><td>The assignment <b>had been completed</b> by me.</td></tr>
              <tr><td>-</td><td>I had not completed the assignment.</td><td>The assignment <b>had not been completed</b> by me.</td></tr>
              <tr><td>?</td><td>Had I completed the assignment?</td><td><b>Had</b> the assignment <b>been completed</b> by me?</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>In the handout, the past continuous negative and question passives read "were not revising" and "were his books revising". Both are missing <b>being</b> and have the wrong participle. The correct forms are in the table above.</p></div>
          <div class="note trap"><p>The verb agrees with the <b>new subject</b>. "His books" is plural, so <b>were</b>; "work" is singular, so <b>was</b>.</p></div>
        ` },
        { title: 'Future tenses', html: `
          <p class="lead">Future passives keep <b>will or shall</b>, then add <b>be</b> (simple future) or <b>have been</b> (future perfect).</p>
          <h3>Simple future: will, shall + be + V3</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>+</td><td>My uncle will pay my tuition fee.</td><td>My tuition fee <b>will be paid</b> by my uncle.</td></tr>
              <tr><td>-</td><td>My uncle will not pay my tuition fee.</td><td>My tuition fee <b>will not be paid</b> by my uncle.</td></tr>
              <tr><td>?</td><td>Will my uncle pay my tuition fee?</td><td><b>Will</b> my tuition fee <b>be paid</b> by my uncle?</td></tr>
            </tbody>
          </table>
          <h3>Future perfect: will, shall + have been + V3</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>+</td><td>We shall have done our home-work.</td><td>Our home-work <b>shall have been done</b> by us.</td></tr>
              <tr><td>-</td><td>We shall not have done our home-work.</td><td>Our home-work <b>shall not have been done</b> by us.</td></tr>
              <tr><td>?</td><td>Shall we have done our home-work?</td><td><b>Shall</b> our home-work <b>have been done</b> by us?</td></tr>
            </tbody>
          </table>
          <h3>The handout's note on four tenses</h3>
          <p>The handout says that in the <b>present perfect continuous, past perfect continuous, future perfect continuous and future perfect</b> tenses "we use the same sentence", meaning these tenses are not normally changed to the passive.</p>
          <div class="note heads-up"><p>The handout contradicts itself: it lists the <b>future perfect</b> conversion (shall have been done) above that note, and that form is correct English. What is true is that the three <b>perfect continuous</b> passives (<em>has been being done</em>) are so clumsy that nobody writes them. In an exam, convert the future perfect; for the perfect continuous tenses, leave the sentence active unless told otherwise.</p></div>
        ` },
        { title: 'Worked conversions', html: `
          <p class="lead">Use the recipe on fresh sentences. Name the tense first, then build the passive.</p>
          <div class="worked">
            <div class="given"><p>The engineer is testing the equipment.</p></div>
            <div class="solve"><p>Present continuous, so <b>is being + V3</b>. Object <em>the equipment</em> becomes the subject.</p></div>
            <div class="result"><p>The equipment <b>is being tested</b> by the engineer.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>The team had finished the audit before noon.</p></div>
            <div class="solve"><p>Past perfect, so <b>had been + V3</b>.</p></div>
            <div class="result"><p>The audit <b>had been finished</b> by the team before noon.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Will the company release the update next week?</p></div>
            <div class="solve"><p>Simple future question: <b>Will + new subject + be + V3</b>.</p></div>
            <div class="result"><p><b>Will</b> the update <b>be released</b> by the company next week?</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>She has not submitted the report.</p></div>
            <div class="solve"><p>Present perfect negative: <b>has not been + V3</b>.</p></div>
            <div class="result"><p>The report <b>has not been submitted</b> by her.</p></div>
          </div>
          <div class="note exam"><p>If the active sentence is a question, the passive is a question; if it is negative, the passive is negative. The type of sentence never changes in conversion, only the voice.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Simple present passive?`, back: `<b>is, am, are + V3</b>: The candle is lighted by him.` },
        { front: `Present continuous passive?`, back: `<b>is, am, are + being + V3</b>.` },
        { front: `Present perfect passive?`, back: `<b>has, have + been + V3</b>.` },
        { front: `Simple past passive?`, back: `<b>was, were + V3</b>.` },
        { front: `Past continuous passive?`, back: `<b>was, were + being + V3</b>.` },
        { front: `Past perfect passive?`, back: `<b>had + been + V3</b>.` },
        { front: `Simple future passive?`, back: `<b>will, shall + be + V3</b>.` },
        { front: `Future perfect passive?`, back: `<b>will, shall + have been + V3</b>.` },
        { front: `A car is being driven by me. Active?`, back: `I am driving a car (present continuous).` },
        { front: `Did she finish work? Passive?`, back: `<b>Was</b> work finished by her?` },
        { front: `Which tenses does the handout say stay unchanged?`, back: `The three <b>perfect continuous</b> tenses and (wrongly) the future perfect.` },
      ],
      oneLiners: [
        'Passive = <b>be in the same tense + V3</b>; the main verb is always the past participle.',
        'Continuous tenses add <b>being</b>, perfect tenses add <b>been</b>, future adds <b>be</b>.',
        'The helping verb agrees with the <b>new subject</b>: work was, books were.',
        'Negatives and questions keep their shape: <b>was not finished</b>, <b>Was work finished</b>?',
        'Object pronouns turn into subject pronouns (me to I) and the old subject takes <b>by</b> (he to by him).',
        'Perfect continuous passives (<b>has been being done</b>) are clumsy, so exams leave them active.',
      ],
      formulas: [
        { name: 'Passive by tense', html: `<b>Present</b>: is / am / are, is being, has been · <b>Past</b>: was / were, was being, had been · <b>Future</b>: will be, will have been (all + V3)`, note: 'He lights the candle. The candle is lighted by him.' },
        { name: 'Conversion order', html: `<b>S, V, O</b> → object to subject → <b>be (tense)</b> → <b>V3</b> → <b>by + old subject</b>`, note: 'Check the sentence type: positive, negative or question.' },
      ],
    },

    // ------------------------------------------------------------------ voice other
    {
      id: 'm2-voice-other',
      title: 'Voice with modals, commands and pronouns',
      short: 'Modals, commands',
      blurb: 'How modal verbs, imperative sentences (commands, requests, advice, orders) and pronouns change when a sentence goes into the passive.',
      source: 'Module 2 Grammar / Active-and-passive-voice - conversion rules.docx (modals, imperatives, pronoun tables)',
      tabs: [
        { title: 'Modals in the passive', html: `
          <p class="lead">With a modal the passive is <b>modal + be + V3</b>. The modal stays; <b>be</b> goes before the participle.</p>
          <table class="tbl">
            <thead><tr><th>Modal</th><th>Passive pattern</th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>can / could</td><td>can / could + be + V3</td><td>I can solve these sums.</td><td>These sums <b>can be solved</b> by me.</td></tr>
              <tr><td>can / could (neg.)</td><td></td><td>I cannot solve these sums.</td><td>These sums <b>cannot be solved</b> by me.</td></tr>
              <tr><td>can / could (?)</td><td></td><td>Can I solve these sums?</td><td><b>Can</b> these sums <b>be solved</b> by me?</td></tr>
              <tr><td>has to / have to</td><td>has to / have to + be + V3</td><td>He has to complete his assignment.</td><td>His assignment <b>has to be completed</b> by him.</td></tr>
              <tr><td>must</td><td>must + be + V3</td><td>You must learn this book.</td><td>This book <b>must be learnt</b> by you.</td></tr>
              <tr><td>may</td><td>may + be + V3</td><td>I may buy the book.</td><td>The book <b>may be bought</b> by me.</td></tr>
              <tr><td>might</td><td>might + be + V3</td><td>They might play chess.</td><td>Chess <b>might be played</b> by them.</td></tr>
              <tr><td>should</td><td>should + be + V3</td><td>Students should learn all lessons.</td><td>All lessons <b>should be learnt</b> by students.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>A modal is always followed by the <b>base</b> form of a verb. Since <em>be</em> is the base form, <em>be</em> comes straight after the modal and the participle follows it.</p></div>
          <div class="note heads-up"><p>The handout writes "Has to / Have to + 3rd verb" and "Must + 3rd verb" without the <b>be</b>, but its own examples include it ("has to be completed", "must be learnt"). Always write <b>be</b>.</p></div>
          <div class="note trap"><p>Wrong: "These sums can solved by me." Right: "These sums can <b>be</b> solved by me."</p></div>
        ` },
        { title: 'Commands, requests, orders', html: `
          <p class="lead">Imperatives express <b>feelings like command, order, advice and request</b>. They have no stated subject, so they get special patterns.</p>
          <div class="kv"><div><span>Plain command</span><b>Let + new object + be (not be) + V3</b></div><div><span>Request, advice, order</span><b>You are requested / advised / ordered to...</b></div></div>
          <p>Always <b>remove please and kindly</b> when you convert.</p>
          <table class="tbl">
            <thead><tr><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>Shut the door.</td><td>Let the door <b>be shut</b>.</td></tr>
              <tr><td>Post the letter at once.</td><td>Let the letter <b>be posted</b> at once.</td></tr>
              <tr><td>Always speak the truth.</td><td>Let the truth always <b>be spoken</b>.</td></tr>
              <tr><td>Do not starve the cow.</td><td>Let the cow <b>not be starved</b>.</td></tr>
              <tr><td>Let him help his brother.</td><td>Let his brother <b>be helped</b> by him.</td></tr>
              <tr><td>Clean your room.</td><td>Let your room <b>be cleaned</b>.</td></tr>
              <tr><td>Learn your lesson.</td><td>Let your lesson <b>be learnt</b>.</td></tr>
              <tr><td>Please do me a favor tonight.</td><td>You <b>are requested to</b> do me a favor tonight.</td></tr>
              <tr><td>Get out of my house.</td><td>You <b>are ordered to</b> get out of my house.</td></tr>
              <tr><td>Kindly do not smoke in public place.</td><td>You <b>are requested not to</b> smoke in public place.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The handout's last two rows have small typos ("mu house", "public place" without "a"); the patterns are what matter. Choose the word to fit the force: <b>requested</b> for please or kindly, <b>advised</b> for advice, <b>ordered</b> for a strong command.</p></div>
          <div class="note trap"><p>Do not keep "please" in the passive: "Let the door please be shut" is wrong. Drop it and, if politeness matters, use "You are requested to shut the door".</p></div>
        ` },
        { title: 'Pronouns in conversion', html: `
          <p class="lead">When a pronoun moves, its <b>case changes</b>. An object pronoun becomes a subject pronoun; a subject pronoun becomes an object pronoun after <b>by</b>.</p>
          <div class="vs">
            <div class="side"><h4>Object to subject</h4>
              <table class="tbl"><thead><tr><th>Active object</th><th>Passive subject</th></tr></thead><tbody>
                <tr><td>me</td><td><b>I</b></td></tr>
                <tr><td>you</td><td><b>you</b></td></tr>
                <tr><td>her</td><td><b>she</b></td></tr>
                <tr><td>them</td><td><b>they</b></td></tr>
                <tr><td>us</td><td><b>we</b></td></tr>
                <tr><td>him</td><td><b>he</b></td></tr>
                <tr><td>it</td><td><b>it</b></td></tr>
                <tr><td>whom</td><td><b>who</b></td></tr>
              </tbody></table></div>
            <div class="side"><h4>Subject to by-phrase</h4>
              <table class="tbl"><thead><tr><th>Active subject</th><th>Passive phrase</th></tr></thead><tbody>
                <tr><td>I</td><td><b>by me</b></td></tr>
                <tr><td>you</td><td><b>by you</b></td></tr>
                <tr><td>she</td><td><b>by her</b></td></tr>
                <tr><td>they</td><td><b>by them</b></td></tr>
                <tr><td>we</td><td><b>by us</b></td></tr>
                <tr><td>he</td><td><b>by him</b></td></tr>
                <tr><td>it</td><td><b>by it</b></td></tr>
                <tr><td>who</td><td><b>by whom</b></td></tr>
              </tbody></table></div>
          </div>
          <div class="worked">
            <div class="given"><p>She helped him.</p></div>
            <div class="solve"><p>Object <em>him</em> becomes subject <em>he</em>; subject <em>she</em> becomes <em>by her</em>; helped becomes was helped.</p></div>
            <div class="result"><p><b>He was helped by her.</b></p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Him was helped by she.</p><p>The letter was written by I.</p></div>
            <div class="side"><h4>Right</h4><p>He was helped by her.</p><p>The letter was written by me.</p></div>
          </div>
          <div class="note why"><p>Case follows the job a word does. After <em>by</em> a pronoun is the object of a preposition, so it takes object case (me, him, her, them, us). The new subject takes subject case (I, he, she, they, we).</p></div>
        ` },
        { title: 'Mixed practice', html: `
          <p class="lead">Convert these, covering a modal, a command and a pronoun. Cover the answers, try, then check.</p>
          <div class="worked">
            <div class="given"><p>The technician should calibrate the sensor before each test.</p></div>
            <div class="solve"><p>Modal <em>should</em>: should + be + V3.</p></div>
            <div class="result"><p>The sensor <b>should be calibrated</b> by the technician before each test.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Switch off the power before opening the panel.</p></div>
            <div class="solve"><p>Command: Let + object + be + V3. Keep the "before" part in step.</p></div>
            <div class="result"><p>Let the power <b>be switched off</b> before the panel is opened.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Please submit the report by Friday.</p></div>
            <div class="solve"><p>A polite request: remove <em>please</em>, use <em>You are requested to</em>.</p></div>
            <div class="result"><p>You <b>are requested to</b> submit the report by Friday.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>They cannot repair it today.</p></div>
            <div class="solve"><p>Negative modal: cannot + be + V3. <em>it</em> stays <em>it</em>; <em>they</em> becomes <em>by them</em>.</p></div>
            <div class="result"><p>It <b>cannot be repaired</b> by them today.</p></div>
          </div>
          <div class="note exam"><p>Typical mark scheme: 1 mark for the right new subject, 1 for the verb phrase (modal + be + V3), 1 for the by-phrase or its correct omission. Check each in turn.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Modal passive pattern?`, back: `<b>modal + be + V3</b>: These sums can be solved by me.` },
        { front: `Passive of "You must learn this book."`, back: `This book <b>must be learnt</b> by you.` },
        { front: `Passive of "Students should learn all lessons."`, back: `All lessons <b>should be learnt</b> by students.` },
        { front: `Rule for plain commands?`, back: `<b>Let + new object + be (not be) + V3</b>.` },
        { front: `Passive of "Shut the door."`, back: `Let the door <b>be shut</b>.` },
        { front: `Passive of "Do not starve the cow."`, back: `Let the cow <b>not be starved</b>.` },
        { front: `Request, advice and order patterns?`, back: `You are <b>requested / advised / ordered</b> to...` },
        { front: `What to do with please and kindly?`, back: `<b>Remove</b> them when converting.` },
        { front: `me, her, them, us, him in the passive subject?`, back: `<b>I, she, they, we, he</b>.` },
        { front: `by-phrase forms of I, she, they, we, he, who?`, back: `<b>by me, by her, by them, by us, by him, by whom</b>.` },
      ],
      oneLiners: [
        'Modal passive: <b>modal + be + V3</b>; the modal never changes.',
        'Plain command: <b>Let + object + be + V3</b>; negative command: <b>Let ... not be + V3</b>.',
        'Request, advice, order: <b>You are requested / advised / ordered to</b> + verb.',
        'Drop <b>please</b> and <b>kindly</b> in the passive.',
        'Pronoun case flips: object to subject (<b>him to he</b>), subject to by-form (<b>she to by her</b>).',
        '<b>whom</b> becomes <b>who</b>; <b>who</b> becomes <b>by whom</b>.',
      ],
      formulas: [
        { name: 'Modal passive', html: `<b>can / could / may / might / must / should + be + V3</b> (also <b>has to / have to + be + V3</b>)`, note: 'These sums can be solved by me.' },
        { name: 'Imperative passive', html: `Command: <b>Let + object + be + V3</b> · Request, advice, order: <b>You are requested / advised / ordered to + verb</b>`, note: 'Please do me a favor. You are requested to do me a favor.' },
      ],
    },

    // ------------------------------------------------------------------ voice practice
    {
      id: 'm2-voice-practice',
      title: 'Voice quiz and conversion practice',
      short: 'Voice practice',
      blurb: 'The six-question voice quiz from the slides, solved with reasons, plus extra conversion drills and the errors to avoid.',
      source: 'Module 2 Grammar / Active - Passive Voice.pptx (quiz slides 2-8)',
      tabs: [
        { title: 'Spot the voice (quiz 1 to 3)', html: `
          <p class="lead">The quiz opens with three questions asking you to <b>identify the voice</b> of a sentence. The slides give no key; answers and reasons are below.</p>
          <div class="worked">
            <div class="given"><p>Which sentence is in the <b>active</b> voice? A) The ball was thrown by the pitcher. B) The window was broken by the child. C) The dog chased the cat. D) A letter was written by her.</p></div>
            <div class="solve"><p>Test each: "was thrown by", "was broken by" and "was written by" are be + V3 with a by-phrase: passive. In C the dog does the chasing: subject performs the action.</p></div>
            <div class="result"><p><b>C</b>: The dog chased the cat.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Identify the <b>passive</b> sentence. A) They built the house a century ago. B) The delicious cake was eaten by the children. C) She read the entire novel in one day. D) He writes a new book every year.</p></div>
            <div class="solve"><p>A, C and D are active (they, she, he perform the verbs). B has the receiver (cake) as subject and <em>was eaten by</em>.</p></div>
            <div class="result"><p><b>B</b>: The delicious cake was eaten by the children.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>What is the <b>subject</b> of "The cookies were baked by my mom"? A) cookies B) baked C) the D) my mom</p></div>
            <div class="solve"><p>The sentence is passive, so the subject is the receiver. <em>my mom</em> is the object of <em>by</em>, not the subject.</p></div>
            <div class="result"><p><b>A</b>: cookies.</p></div>
          </div>
          <div class="note trap"><p>Option D (my mom) is the doer, which tempts students to call it the subject. In the passive, the doer is the <b>agent</b>, inside the by-phrase.</p></div>
        ` },
        { title: 'Convert and name (quiz 4 to 6)', html: `
          <p class="lead">The last three questions ask you to <b>convert</b> a sentence or <b>name</b> the voice of one.</p>
          <div class="worked">
            <div class="given"><p>Which sentence correctly converts "The mechanic fixed the car" to the passive? A. The car was being fixed by the mechanic. B. The mechanic was fixed by the car. C. The car fixed the mechanic. D. The car was fixed by the mechanic.</p></div>
            <div class="solve"><p>Active verb: <em>fixed</em>, simple past, so passive <em>was fixed</em>. A is past continuous (<em>was being fixed</em>): wrong tense. B swaps the roles in the wrong direction. C is just the roles reversed in active voice.</p></div>
            <div class="result"><p><b>D</b>: The car was fixed by the mechanic.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Change "The report was finished by me" from passive to active. A. I finished the report. B. I was finishing the report. C. I was finished by the report. D. The report finished me.</p></div>
            <div class="solve"><p>Agent <em>by me</em> becomes subject <em>I</em>; <em>was finished</em> (simple past) becomes <em>finished</em>; the report becomes the object. B changes the tense to past continuous.</p></div>
            <div class="result"><p><b>A</b>: I finished the report.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>"The new library will be opened by the mayor" is an example of what? A. Simple voice B. Future progressive tense C. Passive voice D. Active voice</p></div>
            <div class="solve"><p><em>will be opened by</em>: will + be + V3 with a by-phrase. It is a <b>simple future passive</b>. "Future progressive" would be <em>will be opening</em>. "Simple voice" does not exist.</p></div>
            <div class="result"><p><b>C</b>: passive voice.</p></div>
          </div>
          <div class="note why"><p>Two checks solve nearly all of these: <b>who is the subject?</b> (doer or receiver) and <b>which tense is the verb?</b> (look at the be-form).</p></div>
        ` },
        { title: 'Active to passive drills', html: `
          <p class="lead">Technical sentences, one tense each. Convert in your head, then compare.</p>
          <table class="tbl">
            <thead><tr><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>The technician checks the equipment every morning.</td><td>The equipment <b>is checked</b> by the technician every morning.</td></tr>
              <tr><td>The students are testing the circuit.</td><td>The circuit <b>is being tested</b> by the students.</td></tr>
              <tr><td>The company has launched the software.</td><td>The software <b>has been launched</b> by the company.</td></tr>
              <tr><td>The engineer repaired the pump yesterday.</td><td>The pump <b>was repaired</b> by the engineer yesterday.</td></tr>
              <tr><td>The workers were laying the cable.</td><td>The cable <b>was being laid</b> by the workers.</td></tr>
              <tr><td>The manager had approved the budget.</td><td>The budget <b>had been approved</b> by the manager.</td></tr>
              <tr><td>The team will publish the results next month.</td><td>The results <b>will be published</b> by the team next month.</td></tr>
              <tr><td>Did the lab send the samples?</td><td><b>Were</b> the samples <b>sent</b> by the lab?</td></tr>
              <tr><td>The supervisor must sign the form.</td><td>The form <b>must be signed</b> by the supervisor.</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>"Lay" is irregular: <em>laid</em> is both past and participle. "The cable was <b>laid</b>", not "was lain" (that is from <em>lie</em>).</p></div>
        ` },
        { title: 'Passive to active drills', html: `
          <p class="lead">Going the other way: the agent becomes the subject. When there is <b>no by-phrase</b>, you must <b>supply</b> a sensible subject.</p>
          <table class="tbl">
            <thead><tr><th>Passive</th><th>Active</th></tr></thead>
            <tbody>
              <tr><td>The ball was thrown by the pitcher.</td><td>The pitcher <b>threw</b> the ball.</td></tr>
              <tr><td>The report was finished by me.</td><td>I <b>finished</b> the report.</td></tr>
              <tr><td>The cookies were baked by my mom.</td><td>My mom <b>baked</b> the cookies.</td></tr>
              <tr><td>The new library will be opened by the mayor.</td><td>The mayor <b>will open</b> the new library.</td></tr>
              <tr><td>My book has been stolen by her.</td><td>She <b>has stolen</b> my book.</td></tr>
              <tr><td>Our home-work shall have been done by us.</td><td>We <b>shall have done</b> our home-work.</td></tr>
              <tr><td>The sensors were calibrated.</td><td>(no agent) Someone calibrated the sensors, or "The team calibrated the sensors" if the context tells you.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>If the passive has no agent, the exam usually accepts "someone", "people", "they" or the obvious doer from the context. Do not invent facts that contradict the text.</p></div>
          <div class="note why"><p>Going back to the active is also an editing tool: if you cannot name a sensible doer, the sentence may be <b>hiding responsibility</b>, and you should ask who did it.</p></div>
        ` },
        { title: 'Voice errors to avoid', html: `
          <p class="lead">Seven mistakes cover most of the lost marks in voice questions.</p>
          <table class="tbl">
            <thead><tr><th>Wrong</th><th>Right</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>The car fixed by the mechanic.</td><td>The car <b>was</b> fixed by the mechanic.</td><td>be is missing</td></tr>
              <tr><td>The report was wrote by me.</td><td>The report was <b>written</b> by me.</td><td>V3, not V2</td></tr>
              <tr><td>The car was being fixed by the mechanic. (for <em>fixed</em>)</td><td>The car was fixed by the mechanic.</td><td>tense changed</td></tr>
              <tr><td>A car is being drive by me.</td><td>A car is being <b>driven</b> by me.</td><td>V3 after being</td></tr>
              <tr><td>These sums can solved by me.</td><td>These sums can <b>be</b> solved by me.</td><td>modal needs be</td></tr>
              <tr><td>The letter was written by I.</td><td>The letter was written by <b>me</b>.</td><td>object case after by</td></tr>
              <tr><td>Let the door please be shut.</td><td>You are requested to shut the door.</td><td>please dropped</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Check three things in your final answer: <b>subject changed? be in the right tense and number? V3 used?</b> Then check the by-phrase.</p></div>
        ` },
      ],
      flashcards: [
        { front: `The dog chased the cat. Voice?`, back: `<b>Active</b>: the subject performs the action.` },
        { front: `The delicious cake was eaten by the children. Voice?`, back: `<b>Passive</b>.` },
        { front: `Subject of "The cookies were baked by my mom"?`, back: `<b>cookies</b>.` },
        { front: `Passive of "The mechanic fixed the car"?`, back: `The car <b>was fixed</b> by the mechanic.` },
        { front: `Why is "was being fixed" wrong for "fixed"?`, back: `It is past <b>continuous</b>; the active was simple past.` },
        { front: `Active of "The report was finished by me"?`, back: `<b>I finished the report.</b>` },
        { front: `"The new library will be opened by the mayor" is...`, back: `<b>Passive voice</b> (simple future).` },
        { front: `Passive of "Did the lab send the samples?"`, back: `<b>Were</b> the samples sent by the lab?` },
        { front: `Passive from "I am driving a car" gives...`, back: `A car <b>is being driven</b> by me.` },
        { front: `Agent of a passive sentence sits in...`, back: `The <b>by-phrase</b>.` },
      ],
      oneLiners: [
        'To name the voice, find the <b>subject</b>: doer means active, receiver means passive.',
        'Quiz answers: C, B, D, A, A (cookies) and C (passive) in the order of the slides.',
        'Convert to the <b>same tense</b>: <em>fixed</em> gives <em>was fixed</em>, not <em>was being fixed</em>.',
        'Going back to active, the <b>by-phrase becomes the subject</b>.',
        'No agent given? Supply <b>someone</b> or the obvious doer from context.',
        'Final check: <b>subject switched, be right, V3 used, by-phrase correct</b>.',
      ],
      formulas: [
        { name: 'Voice check', html: `<b>Subject switched · be in the right tense and number · V3 · by-phrase (if kept)</b>`, note: 'Active "fixed" gives passive "was fixed", not "was being fixed".' },
      ],
    },

    // ------------------------------------------------------------------ tenses overview
    {
      id: 'm2-tenses-forms',
      title: 'Tenses in technical writing',
      short: 'Tenses: forms and clues',
      blurb: 'Why tense carries real information in technical writing, the twelve tenses with their structures and time clues, the time-expression table, and how to choose the right tense.',
      source: 'Module 2 Grammar / Verb Tenses in Technical Writing.pptx (slides 1-4, 11); Tenses Worksheet - Answer key.docx (summary table)',
      tabs: [
        { title: 'Why tense matters', html: `
          <p class="lead">The wrong tense can <b>misrepresent when something happened</b> or how it relates to now. In technical writing the tense is real information, not just correct grammar.</p>
          <p>Think about what the reader must know: is the procedure <b>routine</b>, is the action <b>in progress</b>, is the event <b>finished</b>, or is the plan still <b>ahead</b>? The tense answers each question.</p>
          <table class="tbl">
            <thead><tr><th>The reader must know</th><th>Tense says</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>a procedure is routine</td><td>present simple</td><td>The technician checks the equipment daily.</td></tr>
              <tr><td>an action is in progress</td><td>present continuous</td><td>The engineer is checking the equipment.</td></tr>
              <tr><td>an event is finished, with its time</td><td>past simple</td><td>The engineer repaired the machine yesterday.</td></tr>
              <tr><td>a finished action with a link to now</td><td>present perfect</td><td>The engineer has completed the inspection.</td></tr>
              <tr><td>a plan is still ahead</td><td>future simple</td><td>The engineer will inspect the machine tomorrow.</td></tr>
            </tbody>
          </table>
          <p>A completed test, an ongoing one and a scheduled one mean three different things for a project.</p>
          <div class="note exam"><p>CAT tense questions are almost always <b>time-clue questions</b>: a word like <em>every day</em>, <em>yesterday</em> or <em>since Monday</em> fixes the tense. Spot the clue first.</p></div>
        ` },
        { title: 'The twelve tenses', html: `
          <p class="lead">Three times (past, present, future) times four aspects (simple, continuous, perfect, perfect continuous) give <b>twelve tenses</b>. Learn the structure and the clue words.</p>
          <figure data-fig="m2-tense-timeline"></figure>
          <table class="tbl">
            <thead><tr><th>Tense</th><th>Structure</th><th>Common time words</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Present simple</td><td>V1</td><td>every day, usually, always</td><td>The engineer checks the equipment daily.</td></tr>
              <tr><td>Present continuous</td><td>am/is/are + V-ing</td><td>now, at the moment</td><td>The engineer is checking the equipment.</td></tr>
              <tr><td>Present perfect</td><td>has/have + V3</td><td>already, yet, since, for</td><td>The engineer has completed the inspection.</td></tr>
              <tr><td>Present perfect continuous</td><td>has/have been + V-ing</td><td>since, for</td><td>The engineer has been inspecting the machine for two hours.</td></tr>
              <tr><td>Past simple</td><td>V2</td><td>yesterday, last week, in 2022</td><td>The engineer repaired the machine yesterday.</td></tr>
              <tr><td>Past continuous</td><td>was/were + V-ing</td><td>while, when</td><td>The engineer was repairing the machine when the power failed.</td></tr>
              <tr><td>Past perfect</td><td>had + V3</td><td>before, after</td><td>The engineer had repaired the machine before the inspection.</td></tr>
              <tr><td>Past perfect continuous</td><td>had been + V-ing</td><td>for, since</td><td>The engineer had been repairing the machine for two hours before lunch.</td></tr>
              <tr><td>Future simple</td><td>will + V1</td><td>tomorrow, next week</td><td>The engineer will inspect the machine tomorrow.</td></tr>
              <tr><td>Future continuous</td><td>will be + V-ing</td><td>this time tomorrow</td><td>The engineer will be inspecting the machine at 10 a.m. tomorrow.</td></tr>
              <tr><td>Future perfect</td><td>will have + V3</td><td>by, before</td><td>The engineer will have completed the inspection by noon.</td></tr>
              <tr><td>Future perfect continuous</td><td>will have been + V-ing</td><td>for, by the time</td><td>The engineer will have been working for five years by next June.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Time expression to tense', html: `
          <p class="lead">This lookup table is the heart of the topic: <b>read the time expression, name the tense</b>.</p>
          <table class="tbl">
            <thead><tr><th>Time expression</th><th>Correct tense</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>every day</td><td>Present simple</td><td>She checks the logs every day.</td></tr>
              <tr><td>usually</td><td>Present simple</td><td>The system usually restarts overnight.</td></tr>
              <tr><td>now</td><td>Present continuous</td><td>The server is updating now.</td></tr>
              <tr><td>at the moment</td><td>Present continuous</td><td>We are testing at the moment.</td></tr>
              <tr><td>yesterday</td><td>Past simple</td><td>The software was installed yesterday.</td></tr>
              <tr><td>last year</td><td>Past simple</td><td>They built the plant last year.</td></tr>
              <tr><td>ago</td><td>Past simple</td><td>The firm launched it two months ago.</td></tr>
              <tr><td>just</td><td>Present perfect</td><td>The team has just finished.</td></tr>
              <tr><td>already</td><td>Present perfect</td><td>We have already sent the report.</td></tr>
              <tr><td>yet</td><td>Present perfect</td><td>They have not replied yet.</td></tr>
              <tr><td>since</td><td>Perfect tenses</td><td>It has run since Monday.</td></tr>
              <tr><td>for</td><td>Perfect tenses</td><td>It has run for three days.</td></tr>
              <tr><td>tomorrow</td><td>Future simple</td><td>The audit will start tomorrow.</td></tr>
              <tr><td>next week</td><td>Future simple</td><td>We will meet next week.</td></tr>
              <tr><td>by tomorrow</td><td>Future perfect</td><td>We will have finished by tomorrow.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The slides list <b>since</b> and <b>for</b> under "Perfect tenses": the present perfect or present perfect continuous for "up to now", the past perfect for "up to then". Not on the slides: <b>for</b> also works with the past simple for a finished period ("She worked there for three years").</p></div>
        ` },
        { title: 'How to choose the tense', html: `
          <p class="lead">When no clue word is given, work through <b>five questions</b>. Each one narrows the choice.</p>
          <ol class="steps">
            <li><b>When did the action happen?</b> past, present or future.</li>
            <li><b>Is it a routine or a temporary action?</b> routine: simple; temporary: continuous.</li>
            <li><b>Is the action complete?</b> if finished and linked to now: perfect; finished at a stated time: past simple.</li>
            <li><b>Is another action mentioned?</b> the earlier one takes the perfect, the later one the simple past.</li>
            <li><b>Does the time expression indicate the tense?</b> use the lookup table.</li>
          </ol>
          <div class="worked">
            <div class="given"><p>The laboratory ___ (receive) the samples recently. (Choose: has received / received)</p></div>
            <div class="solve"><p>Q1 past; Q3 complete, and <em>recently</em> links it to now; Q5 recently is a present-perfect word.</p></div>
            <div class="result"><p>The laboratory <b>has received</b> the samples recently.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>When the inspector arrived, the engineer ___ (repair) the machine for an hour.</p></div>
            <div class="solve"><p>Two past events. Repairing started before the arrival and was still going on: <b>past perfect continuous</b>, signalled by <em>for an hour</em>.</p></div>
            <div class="result"><p>... the engineer <b>had been repairing</b> the machine for an hour.</p></div>
          </div>
          <div class="note exam"><p>A clue that sets the tense always beats your feeling for how a sentence "sounds". Underline it before you choose.</p></div>
        ` },
        { title: 'Tense habits in reports', html: `
          <p class="lead"><b>Not on the slides.</b> Technical documents use tense in <b>predictable ways</b>. Following them keeps a report clear.</p>
          <table class="tbl">
            <thead><tr><th>Where</th><th>Tense</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>General facts and laws</td><td>present simple</td><td>Copper conducts electricity.</td></tr>
              <tr><td>Instructions and standard procedure</td><td>present simple (imperative)</td><td>Connect the red lead first.</td></tr>
              <tr><td>What you did (method) and found (results)</td><td>past simple</td><td>The samples were heated to 80 degrees. Output fell by 12%.</td></tr>
              <tr><td>Background and earlier research</td><td>present perfect</td><td>Several studies have examined this effect.</td></tr>
              <tr><td>Plans and schedules</td><td>future simple or present continuous</td><td>We will release version 2 in March.</td></tr>
              <tr><td>What the paper does</td><td>present simple</td><td>Table 2 shows the results.</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>We measure the current yesterday and found a drop.</p></div>
            <div class="side"><h4>Right</h4><p>We <b>measured</b> the current yesterday and <b>found</b> a drop.</p></div>
          </div>
          <div class="note why"><p>Past for what happened in <b>your study</b>; present for what is <b>always true</b> or <b>on the page</b>. Mixing them in one paragraph confuses the reader about what is a finding and what is a fact.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Why does tense matter in technical writing?`, back: `It carries <b>real information</b>: routine, in progress, finished or planned.` },
        { front: `Present simple: structure and clue words?`, back: `<b>V1</b>; every day, usually, always.` },
        { front: `Present continuous: structure and clues?`, back: `<b>am/is/are + V-ing</b>; now, at the moment.` },
        { front: `Present perfect: structure and clues?`, back: `<b>has/have + V3</b>; already, yet, since, for.` },
        { front: `Past simple: structure and clues?`, back: `<b>V2</b>; yesterday, last week, in 2022, ago.` },
        { front: `Past continuous: structure and clues?`, back: `<b>was/were + V-ing</b>; while, when.` },
        { front: `Past perfect: structure and clues?`, back: `<b>had + V3</b>; before, after.` },
        { front: `Future simple: structure and clues?`, back: `<b>will + V1</b>; tomorrow, next week.` },
        { front: `Future perfect: structure and clues?`, back: `<b>will have + V3</b>; by, before.` },
        { front: `Future perfect continuous?`, back: `<b>will have been + V-ing</b>; for, by the time.` },
        { front: `"just", "already", "yet" call for...`, back: `The <b>present perfect</b>.` },
        { front: `The five choosing questions end with...`, back: `Does the <b>time expression</b> indicate the tense?` },
      ],
      oneLiners: [
        'In technical writing tense tells the reader whether a task is <b>routine, in progress, finished or planned</b>.',
        'Twelve tenses = past, present, future × <b>simple, continuous, perfect, perfect continuous</b>.',
        'Continuous = <b>be + V-ing</b>; perfect = <b>have + V3</b>; perfect continuous = <b>have been + V-ing</b>.',
        '<b>every day, usually</b> = present simple; <b>now, at the moment</b> = present continuous.',
        '<b>yesterday, last year, ago</b> = past simple; <b>just, already, yet</b> = present perfect.',
        '<b>tomorrow, next week</b> = future simple; <b>by tomorrow</b> = future perfect.',
        'Choose with five questions: <b>when, routine or temporary, complete, another action, time clue</b>.',
      ],
      formulas: [
        { name: 'Time clue to tense', html: `<b>every day, usually</b> → present simple · <b>now, at the moment</b> → present continuous · <b>yesterday, last year, ago</b> → past simple · <b>just, already, yet</b> → present perfect · <b>tomorrow, next week</b> → future simple · <b>by tomorrow</b> → future perfect`, note: 'since and for go with perfect tenses.' },
        { name: 'Structures', html: `Simple: <b>V1 / V2 / will + V1</b> · Continuous: <b>be + V-ing</b> · Perfect: <b>have + V3</b> · Perfect continuous: <b>have been + V-ing</b>`, note: 'Past forms use had and was/were; future forms use will.' },
      ],
    },

    // ------------------------------------------------------------------ tenses errors
    {
      id: 'm2-tenses-errors',
      title: 'Common tense errors and sequence of tenses',
      short: 'Tense errors, sequence',
      blurb: 'The four common errors from the slides (A to D), the sequence of tenses rule with the backshift table, and a checklist for spotting tense mistakes.',
      source: 'Module 2 Grammar / Verb Tenses in Technical Writing.pptx (slides 5-11); Tenses Worksheet - Answer key.docx (summary of errors)',
      tabs: [
        { title: 'Error A: continuous for routine', html: `
          <p class="lead">A <b>routine</b> belongs to the <b>present simple</b>, not the present continuous. The time word shows it.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The technician <b>is checking</b> the circuit every day.</p></div>
            <div class="side"><h4>Right</h4><p>The technician <b>checks</b> the circuit every day.</p></div>
          </div>
          <p><b>Reason:</b> "every day" indicates a routine.</p>
          <h3>More routine words</h3>
          <p>The worksheet adds <b>every morning, every hour, every semester</b> to this list. Each one signals a repeated habit.</p>
          <table class="tbl">
            <thead><tr><th>Wrong</th><th>Right</th></tr></thead>
            <tbody>
              <tr><td>The engineer is calibrating the sensors every day.</td><td>The engineer <b>calibrates</b> the sensors every day.</td></tr>
              <tr><td>The researchers are conducting the experiment every semester.</td><td>The researchers <b>conduct</b> the experiment every semester.</td></tr>
              <tr><td>The operator is checking the gauges every hour.</td><td>The operator <b>checks</b> the gauges every hour.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Present continuous means "in progress right now" (<em>now</em>, <em>at the moment</em>). A habit is not one action in progress, it is a pattern, so the simple form is used.</p></div>
          <div class="note exam"><p>The reverse also happens: "The engineer <b>inspects</b> the bridge now" is wrong because of <em>now</em>. Right: "The engineer <b>is inspecting</b> the bridge now."</p></div>
        ` },
        { title: 'Error B: perfect with a finished time', html: `
          <p class="lead">A <b>finished time expression</b> (ago, yesterday, last Monday) needs the <b>past simple</b>. The present perfect cannot sit next to it.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The company <b>has launched</b> its software two months ago.</p></div>
            <div class="side"><h4>Right</h4><p>The company <b>launched</b> its software two months ago.</p></div>
          </div>
          <p><b>Reason:</b> "ago" requires the past simple.</p>
          <table class="tbl">
            <thead><tr><th>Wrong</th><th>Right</th></tr></thead>
            <tbody>
              <tr><td>The engineer has submitted the report yesterday.</td><td>The engineer <b>submitted</b> the report yesterday.</td></tr>
              <tr><td>The laboratory has completed the analysis last Monday.</td><td>The laboratory <b>completed</b> the analysis last Monday.</td></tr>
              <tr><td>The company has introduced the policy three months ago.</td><td>The company <b>introduced</b> the policy three months ago.</td></tr>
            </tbody>
          </table>
          <h3>The other direction</h3>
          <p>Time words that stretch up to now (<b>since Monday, recently, already, yet</b>) need the present perfect, not the past simple.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The engineer <b>repaired</b> the machine since Monday.</p><p>The company <b>released</b> the update since January.</p></div>
            <div class="side"><h4>Right</h4><p>The engineer <b>has repaired</b> the machine since Monday.</p><p>The company <b>has released</b> the update since January.</p></div>
          </div>
          <div class="note heads-up"><p>The key itself notes that more natural English uses the perfect continuous here: "The engineer <b>has been repairing</b> the machine since Monday", "The company <b>has been releasing</b> updates since January". For a tense-correction answer, the expected response is <b>has repaired</b> and <b>has released</b>, but the continuous version is better English.</p></div>
        ` },
        { title: 'Errors C and D, and future clues', html: `
          <p class="lead">Two more errors: <b>wrong sequence of tenses</b> (covered next tab) and the <b>past perfect used without need</b>.</p>
          <h3>Error D: unnecessary past perfect</h3>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Yesterday, the engineer <b>had repaired</b> the motor.</p></div>
            <div class="side"><h4>Right</h4><p>Yesterday, the engineer <b>repaired</b> the motor.</p></div>
          </div>
          <p>Use the <b>past perfect only</b> when you are referring to an action completed <b>before another past action</b>.</p>
          <div class="worked">
            <div class="given"><p>The engineer repaired the motor. The inspector arrived. (Which came first?)</p></div>
            <div class="solve"><p>Repair came first. Make it the earlier one with the past perfect and keep the later action in the past simple.</p></div>
            <div class="result"><p>The engineer <b>had repaired</b> the motor before the inspector <b>arrived</b>.</p></div>
          </div>
          <h3>Future time words need a future verb</h3>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The workers <b>completed</b> the installation tomorrow.</p></div>
            <div class="side"><h4>Right</h4><p>The workers <b>will complete</b> the installation tomorrow.</p></div>
          </div>
          <div class="note trap"><p>A single past event described alone, with "yesterday", never needs <b>had</b>. Students add it because it feels "more past". It is wrong unless a second, later past event is named.</p></div>
        ` },
        { title: 'Error C: sequence of tenses', html: `
          <p class="lead">When the <b>reporting verb is past</b> (said, reported, informed), the verb inside the reported clause usually <b>shifts one tense back</b>.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The technician reported that the machine <b>will require</b> maintenance next week.</p></div>
            <div class="side"><h4>Right</h4><p>The technician reported that the machine <b>would require</b> maintenance the following week.</p></div>
          </div>
          <p><b>Reason:</b> the reporting verb is in the past.</p>
          <table class="tbl">
            <thead><tr><th>Reporting verb</th><th>Verb in the clause</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Present</td><td>any tense as required</td><td>She says that the machine <b>is</b> faulty.</td></tr>
              <tr><td>Past</td><td>usually shifts one tense back</td><td>She said that the machine <b>was</b> faulty.</td></tr>
              <tr><td>Future</td><td>any tense as required</td><td>She will say that the machine <b>is</b> faulty.</td></tr>
            </tbody>
          </table>
          <h3>The backshift table (not on the slides)</h3>
          <table class="tbl">
            <thead><tr><th>Direct form</th><th>After a past reporting verb</th></tr></thead>
            <tbody>
              <tr><td>is / are</td><td>was / were</td></tr>
              <tr><td>present simple (checks)</td><td>past simple (checked)</td></tr>
              <tr><td>will, can, may</td><td>would, could, might</td></tr>
              <tr><td>present perfect (has done)</td><td>past perfect (had done)</td></tr>
              <tr><td>past simple (did)</td><td>past perfect (had done)</td></tr>
              <tr><td>next week, tomorrow</td><td>the following week, the next day</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The key accepts <b>"would require maintenance next week"</b> too, in many grammar exercises. Changing next week to <b>the following week</b> is the stricter correction. General truths are not shifted: "The teacher said that water <b>boils</b> at 100 degrees."</p></div>
        ` },
        { title: 'Spotting tense errors fast', html: `
          <p class="lead">A tense-error question is solved with <b>three quick moves</b>: underline the clue, name the tense it needs, then compare it with the verb.</p>
          <ol class="steps">
            <li><b>Underline the time clue</b> every day, ago, since Monday, tomorrow, or a past reporting verb.</li>
            <li><b>Name the tense it demands</b> from the lookup table.</li>
            <li><b>Compare with the verb</b> if they do not match, fix the verb only.</li>
          </ol>
          <table class="tbl">
            <thead><tr><th>Clue</th><th>Needs</th><th>Common wrong choice</th></tr></thead>
            <tbody>
              <tr><td>every day / hour / semester</td><td>present simple</td><td>present continuous</td></tr>
              <tr><td>yesterday, last Monday, two months ago</td><td>past simple</td><td>present perfect</td></tr>
              <tr><td>since Monday, recently, already, yet</td><td>present perfect</td><td>past simple</td></tr>
              <tr><td>tomorrow, next month</td><td>future simple</td><td>past simple</td></tr>
              <tr><td>past reporting verb</td><td>shifted tense</td><td>unshifted will or present</td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>The laboratory has completed the analysis last Monday.</p></div>
            <div class="solve"><p>Clue: <em>last Monday</em>, a finished time, so past simple. The verb <em>has completed</em> is present perfect: a mismatch.</p></div>
            <div class="result"><p>The laboratory <b>completed</b> the analysis last Monday.</p></div>
          </div>
          <div class="note exam"><p>Change only the verb. Do not rewrite the whole sentence, because extra changes can cost marks. The exception is a reported clause, where the time word moves as well.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Error A?`, back: `<b>Present continuous instead of present simple</b> for a routine (every day).` },
        { front: `Error B?`, back: `<b>Present perfect with a finished time</b> (two months ago).` },
        { front: `Error C?`, back: `<b>Incorrect sequence of tenses</b> after a past reporting verb.` },
        { front: `Error D?`, back: `<b>Past perfect used unnecessarily</b>.` },
        { front: `Which tense goes with "ago"?`, back: `<b>Past simple</b>.` },
        { front: `When is the past perfect right?`, back: `For an action completed <b>before another past action</b>.` },
        { front: `Present reporting verb: what tense follows?`, back: `<b>Any tense as required</b>.` },
        { front: `Past reporting verb: what follows?`, back: `The tense <b>usually shifts one tense back</b>.` },
        { front: `Future reporting verb: what follows?`, back: `<b>Any tense as required</b>.` },
        { front: `She said that the machine ___ faulty.`, back: `<b>was</b>.` },
        { front: `will, next week after a past reporting verb?`, back: `<b>would</b>, the following week.` },
      ],
      oneLiners: [
        'Routine words (<b>every day, every hour</b>) take present simple, not present continuous.',
        'Finished times (<b>ago, yesterday, last Monday</b>) take past simple, never present perfect.',
        'Time words reaching now (<b>since, recently, already, yet</b>) take the present perfect.',
        'Past perfect is only for the <b>earlier of two past actions</b>.',
        'After a <b>past reporting verb</b> the tense shifts back: will becomes would.',
        'Fix only the verb in a tense-error question; the clue word stays.',
      ],
      formulas: [
        { name: 'Sequence of tenses', html: `Present reporting verb: <b>any tense</b> · Past reporting verb: <b>one tense back</b> · Future reporting verb: <b>any tense</b>`, note: 'She says is / She said was / She will say is.' },
        { name: 'Four common errors', html: `<b>A</b> continuous for routine · <b>B</b> perfect with a finished time · <b>C</b> wrong sequence after past reporting verb · <b>D</b> unnecessary past perfect`, note: 'Correct each by finding the time clue first.' },
      ],
    },

    // ------------------------------------------------------------------ tenses worksheet
    {
      id: 'm2-tenses-practice',
      title: 'Tenses worksheet: all parts solved',
      short: 'Tenses worksheet',
      blurb: 'The tenses worksheet (identify the time clue, choose the verb, spot the error, exam practice) with the answer key, the alternative answers the key allows, and the reasoning.',
      source: 'Module 2 Grammar / Tenses Worksheet.docx and Tenses Worksheet - Answer key.docx',
      tabs: [
        { title: 'Part A: time clue and tense', html: `
          <p class="lead">Part A asks you to underline the time expression and name the tense that should normally be used.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Sentence</th><th>Time clue</th><th>Tense</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>The technician checks the equipment every morning.</td><td><b>every morning</b></td><td>Simple present</td></tr>
              <tr><td>2</td><td>The engineer is inspecting the bridge now.</td><td><b>now</b></td><td>Present continuous</td></tr>
              <tr><td>3</td><td>The software was installed yesterday.</td><td><b>yesterday</b></td><td>Simple past</td></tr>
              <tr><td>4</td><td>The company has completed the audit recently.</td><td><b>recently</b></td><td>Present perfect</td></tr>
              <tr><td>5</td><td>The machine will undergo maintenance next month.</td><td><b>next month</b></td><td>Simple future</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Each clue is on the lookup table from the previous topic. <em>recently</em> sits with <em>just, already, yet</em> as a present-perfect word: the action is finished, but the effect still matters now.</p></div>
          <h3>Choose the correct verb</h3>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>Answer</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>The operator (checks / is checking) the gauges every hour.</td><td><b>checks</b></td><td>every hour is a routine</td></tr>
              <tr><td>The technician (completed / has completed) the repair yesterday.</td><td><b>completed</b></td><td>yesterday is a finished time</td></tr>
              <tr><td>The manager (said / says) that the system would be upgraded next month.</td><td><b>said</b></td><td>would is a backshift, so the reporting verb is past</td></tr>
              <tr><td>The engineer (is testing / tests) the equipment at the moment.</td><td><b>is testing</b></td><td>at the moment: in progress</td></tr>
              <tr><td>The laboratory (has received / received) the samples recently.</td><td><b>has received</b></td><td>recently: present perfect</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Part B: spot the tense error', html: `
          <p class="lead">Part B shows the <b>method</b> on one worked example. Read the sentence carefully, find the clue, name the tense, then rewrite.</p>
          <div class="worked">
            <div class="given"><p><b>Incorrect:</b> The engineer is calibrating the sensors every day.</p></div>
            <div class="solve"><ol class="steps"><li><b>Time clue</b> every day</li><li><b>Correct tense</b> simple present, because every day signals a routine</li><li><b>Rewrite</b> change only the verb</li></ol></div>
            <div class="result"><p>The engineer <b>calibrates</b> the sensors every day.</p></div>
          </div>
          <div class="note exam"><p>The key's layout is also the layout a marker likes: <b>Incorrect, Time clue, Correct tense, Correct sentence</b>. Copy it for any similar question and each step earns its mark.</p></div>
          <div class="note trap"><p>"Is calibrating" feels correct because the engineer is doing something. But <em>every day</em> turns it into a habit, and habits are simple present.</p></div>
        ` },
        { title: 'Part C: four rewrites', html: `
          <p class="lead">For each sentence: underline the time clue, identify the incorrect verb, write the correct sentence.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Sentence</th><th>Clue</th><th>Wrong verb</th><th>Correct sentence</th></tr></thead>
            <tbody>
              <tr><td>I</td><td>The company has introduced the policy three months ago.</td><td>three months ago</td><td>has introduced</td><td>The company <b>introduced</b> the policy three months ago.</td></tr>
              <tr><td>II</td><td>The supervisor reported that the equipment will fail if it was overloaded.</td><td>reported (past reporting verb)</td><td>will fail</td><td>The supervisor reported that the equipment <b>would fail</b> if it was overloaded.</td></tr>
              <tr><td>III</td><td>The engineer repaired the machine since Monday.</td><td>since Monday</td><td>repaired</td><td>The engineer <b>has repaired</b> the machine since Monday.</td></tr>
              <tr><td>IV</td><td>The workers completed the installation tomorrow.</td><td>tomorrow</td><td>completed</td><td>The workers <b>will complete</b> the installation tomorrow.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Item III: the key says "has repaired" is the expected answer, and adds that more natural English is "The engineer <b>has been repairing</b> the machine since Monday". Write the expected one in the exam; know the better one.</p></div>
          <div class="note why"><p>In item II the "clue" is the past reporting verb, not a time word. That is the sequence-of-tenses error: will shifts back to would. The word <em>was</em> in the if clause is already past, so it stays.</p></div>
        ` },
        { title: 'Part H: exam practice 1 to 5', html: `
          <p class="lead">Part H is the exam-style set: identify and correct the tense error in each of ten sentences. The first five.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Wrong sentence</th><th>Clue</th><th>Correct sentence</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>The technician is checking the circuit every day before switching on the power supply.</td><td>every day</td><td>The technician <b>checks</b> the circuit every day before switching on the power supply.</td></tr>
              <tr><td>2</td><td>The company has launched its new software two months ago.</td><td>two months ago</td><td>The company <b>launched</b> its new software two months ago.</td></tr>
              <tr><td>3</td><td>The technician reported that the machine will require maintenance next week.</td><td>reported</td><td>The technician reported that the machine <b>would require</b> maintenance <b>the following week</b>.</td></tr>
              <tr><td>4</td><td>The engineer has submitted the report yesterday.</td><td>yesterday</td><td>The engineer <b>submitted</b> the report yesterday.</td></tr>
              <tr><td>5</td><td>The researchers are conducting the experiment every semester.</td><td>every semester</td><td>The researchers <b>conduct</b> the experiment every semester.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Item 3: the key accepts "would require maintenance <b>next week</b>" as well as "the following week". Both fix the tense; the second also fixes the time word, which a strict reporter would shift.</p></div>
        ` },
        { title: 'Part H: exam practice 6 to 10', html: `
          <p class="lead">Items 6 to 10 of Part H.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Wrong sentence</th><th>Clue</th><th>Correct sentence</th></tr></thead>
            <tbody>
              <tr><td>6</td><td>The supervisor informed that the project finishes next week.</td><td>informed</td><td>The supervisor informed that the project <b>would finish the following week</b>.</td></tr>
              <tr><td>7</td><td>The laboratory has completed the analysis last Monday.</td><td>last Monday</td><td>The laboratory <b>completed</b> the analysis last Monday.</td></tr>
              <tr><td>8</td><td>The operator was checking the pressure every day.</td><td>every day</td><td>The operator <b>checked</b> the pressure every day. (past routine)</td></tr>
              <tr><td>9</td><td>The company released the update since January.</td><td>since January</td><td>The company <b>has released</b> the update since January.</td></tr>
              <tr><td>10</td><td>The engineer said that the system will be ready by Friday.</td><td>said</td><td>The engineer said that the system <b>would be ready</b> by Friday.</td></tr>
            </tbody>
          </table>
          <h3>Notes on the key</h3>
          <ul>
            <li><b>Item 6</b>: "informed us that..." is also accepted. <em>Inform</em> normally takes an object (informed us).</li>
            <li><b>Item 8</b>: if the habit is a present one, the answer would be <b>checks</b>. The past form <b>checked</b> fits a past routine.</li>
            <li><b>Item 9</b>: more idiomatic is "has been releasing updates since January".</li>
          </ul>
          <div class="note exam"><p>For ambiguous items such as 8, state your reading in a few words: "past routine, so checked". The key itself does the same.</p></div>
        ` },
        { title: 'What the worksheet tests', html: `
          <p class="lead">The key ends with a <b>summary of the common errors tested</b>. Read it as a revision card.</p>
          <table class="tbl">
            <thead><tr><th>Clue family</th><th>Examples</th><th>Tense to use</th></tr></thead>
            <tbody>
              <tr><td>Routines</td><td>every day, every morning, every semester, every hour</td><td><b>Simple present</b></td></tr>
              <tr><td>Finished time expressions</td><td>yesterday, last Monday, two months ago</td><td><b>Simple past</b></td></tr>
              <tr><td>Time reaching up to now</td><td>since, recently, already, yet</td><td><b>Present perfect</b></td></tr>
              <tr><td>Future time</td><td>tomorrow, next month</td><td><b>Simple future</b></td></tr>
              <tr><td>Past reporting verb</td><td>said, reported, informed</td><td><b>Shifted tense</b> (would)</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Quick check, wrong</h4><p>The software installed yesterday.</p><p>The audit has finished two days ago.</p></div>
            <div class="side"><h4>Quick check, right</h4><p>The software <b>was installed</b> yesterday.</p><p>The audit <b>finished</b> two days ago.</p></div>
          </div>
          <div class="note why"><p>The worksheet reuses the same sentences and clue words from the slides. If you can handle the four slide errors (A to D), you can handle every item in Part H.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Part A: tense for "every morning"?`, back: `<b>Simple present</b>.` },
        { front: `Part A: tense for "now"?`, back: `<b>Present continuous</b>.` },
        { front: `Part A: tense for "recently"?`, back: `<b>Present perfect</b>.` },
        { front: `The operator (checks/is checking) the gauges every hour.`, back: `<b>checks</b>.` },
        { front: `The manager (said/says) that the system would be upgraded...`, back: `<b>said</b>.` },
        { front: `The company has introduced the policy three months ago. Fix?`, back: `<b>introduced</b>.` },
        { front: `The supervisor reported that the equipment will fail... Fix?`, back: `<b>would fail</b>.` },
        { front: `The engineer repaired the machine since Monday. Fix?`, back: `<b>has repaired</b> (better: has been repairing).` },
        { front: `The workers completed the installation tomorrow. Fix?`, back: `<b>will complete</b>.` },
        { front: `Method layout for a Part B answer?`, back: `<b>Incorrect, time clue, correct tense, correct sentence</b>.` },
      ],
      oneLiners: [
        'The worksheet has five parts: <b>time clue, choose the verb, spot the error, four rewrites, ten exam items</b>.',
        'Answer layout: <b>Incorrect, time clue, correct tense, correct sentence</b>.',
        'Change <b>only the verb</b>; the clue word stays (except in reported speech).',
        'Reported clauses: will becomes <b>would</b>, next week becomes <b>the following week</b>.',
        'Item 8 depends on reading: past routine gives <b>checked</b>, present routine gives <b>checks</b>.',
        'The key prefers <b>has repaired / has released</b> for since, though perfect continuous reads better.',
      ],
      formulas: [
        { name: 'Part-B style answer', html: `<b>Incorrect</b> sentence → <b>Time clue</b> → <b>Correct tense</b> → <b>Correct sentence</b>`, note: 'The engineer is calibrating... every day: simple present: calibrates.' },
      ],
    },
  ],
  figures: [
    { id: 'm2-voice-swap', caption: 'Converting active to passive: the object becomes the subject, the verb becomes be plus the past participle, and the old subject follows by. Based on BAENG101 course material, VIT.', alt: 'An active sentence, "The researcher conducted the experiment", with subject in blue, verb in green and object in orange. An arrow labelled swap, be plus V3, add by leads to the passive sentence "The experiment was conducted by the researcher" with the colours moved accordingly.' },
    { id: 'm2-tense-timeline', caption: 'The twelve tenses as a grid: four aspects, each with its past, present and future form, and typical time words. Based on BAENG101 course material, VIT.', alt: 'Four stacked cards for simple, continuous, perfect and perfect continuous. Each lists the past, present and future structure: V2, V1 and will plus V1; was or were plus V-ing, am is are plus V-ing, will be plus V-ing; had plus V3, has or have plus V3, will have plus V3; had been, has or have been, will have been plus V-ing.' },
  ],
});
