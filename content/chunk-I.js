CHUNK({
  chunk: 'I',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------ voice basics
    {
      id: 'm2-voice-basics',
      title: 'Active and passive voice: the idea and the three steps',
      short: 'Voice: the basics',
      blurb: 'What active and passive voice are, how to find subject, verb and object, the three steps of converting, the three notes from the prep slides, and the Blue Book rule on active voice.',
      source: 'Module 2 Grammar / Active and Passive voice - Preparatory notes.pptx, Active-and-passive-voice - conversion rules.docx (opening), Blue Book Effective Writing rules',
      tabs: [
        { title: 'Active or passive', html: `
          <p class="lead">In the <b>active voice</b> the subject is active: it <b>performs</b> the action. In the <b>passive voice</b> the subject is no longer active: it is <b>acted upon</b> by the verb.</p>
          <div class="vs">
            <div class="side"><h4>Active</h4><p>The cow (subject) is eating (verb) grass (object).</p><p>The subject performs the action.</p></div>
            <div class="side"><h4>Passive</h4><p>Grass (subject) is being eaten (verb) by the cow (object).</p><p>The subject is acted upon by the verb.</p></div>
          </div>
          <p>The Blue Book gives a second pair: "Barry hit the ball" (active) and "The ball was hit" (passive). It notes that the responsible party may not even appear when using the passive voice.</p>
        ` },
        { title: 'Subject, verb and object', html: `
          <p class="lead">Step one in the prep notes: identify the <b>subject, verb and object</b> of the active sentence.</p>
          <div class="kv"><div><span>Subject</span><b>the person or thing performing the action</b></div><div><span>Verb</span><b>the action word</b></div><div><span>Object</span><b>the person or thing receiving the action</b></div></div>
          <div class="worked">
            <div class="given"><p>The researcher conducted the experiment.</p></div>
            <div class="solve"><p>Subject: <b>the researcher</b>. Verb: <b>conducted</b>. Object: <b>the experiment</b>.</p></div>
            <div class="result"><p>In the passive, the experiment becomes the subject and the researcher the object.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>The dog chased the cat.</p></div>
            <div class="solve"><p>Subject: <b>the dog</b>. Verb: <b>chased</b>. Object: <b>the cat</b>.</p></div>
            <div class="result"><p>The cat was chased by the dog.</p></div>
          </div>
        ` },
        { title: 'Three steps to the passive', html: `
          <p class="lead">After identifying subject, verb and object, the prep notes give two more steps: <b>switch</b> the subject and object, and <b>change the verb</b>.</p>
          <figure data-fig="m2-voice-swap"></figure>
          <ol class="steps">
            <li><b>Identify subject, verb and object</b> as in the previous tab.</li>
            <li><b>Switch subject and object</b> the object of the active sentence becomes the subject of the passive sentence. The subject of the active sentence becomes the object of a prepositional phrase (usually "by").</li>
            <li><b>Change the verb form</b> use the appropriate form of <b>be</b> (is, are, was, were, etc.) followed by the past participle (<b>V3</b>) of the main verb: <em>conducted</em> becomes <em>was conducted</em>.</li>
          </ol>
          <p>Result: "The experiment was conducted by the researcher." or "The experiment was conducted."</p>
          <h3>More examples from the slides</h3>
          <table class="tbl">
            <thead><tr><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>The dog chased the cat.</td><td>The cat was chased by the dog.</td></tr>
              <tr><td>The teacher praised the student.</td><td>The student was praised by the teacher.</td></tr>
              <tr><td>The artist painted a beautiful picture.</td><td>A beautiful picture was painted by the artist.</td></tr>
              <tr><td>The children were playing in the park.</td><td>The park was being played in by the children.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Three notes from the slides', html: `
          <p class="lead">The prep notes end with three notes. Learn them as a set.</p>
          <ol class="steps">
            <li><b>Keep the tense</b> the tense of the verb in the passive voice should match the tense of the verb in the active voice.</li>
            <li><b>The by-phrase is optional</b> it can be omitted if the doer of the action is <b>unknown or unimportant</b>.</li>
            <li><b>Why use passive</b> it is often used to <b>emphasise the receiver</b> of the action, or to make the sentence sound <b>more formal or impersonal</b>.</li>
          </ol>
          <p>Example of note 1: active simple past <em>conducted</em> gives passive <em>was conducted</em>. Example of note 2: "The experiment was conducted." leaves out the researcher.</p>
        ` },
        { title: 'Blue Book: prefer active', html: `
          <p class="lead">The Blue Book's Effective Writing rule 2: <b>use active voice whenever possible</b>. Active voice means the subject is performing the verb.</p>
          <div class="vs">
            <div class="side"><h4>Active</h4><p>Barry hit the ball.</p></div>
            <div class="side"><h4>Passive</h4><p>The ball was hit.</p></div>
          </div>
          <p>Notice that the responsible party may not even appear when using passive voice.</p>
          <p>Rule 3 (avoid overusing <em>there is</em>, <em>it is</em> and so on) ends with an active example:</p>
          <ul>
            <li>Example: There is a case of meningitis that was reported in the newspaper.</li>
            <li>Correction: A case of meningitis was reported in the newspaper.</li>
            <li>Even better: The newspaper reported a case of meningitis. (Active voice)</li>
          </ul>
        ` },
      ],
      flashcards: [
        { front: `In active voice, the subject...`, back: `<b>performs</b> the action.` },
        { front: `In passive voice, the subject...`, back: `is <b>acted upon</b> by the verb.` },
        { front: `Step 2 of converting active to passive?`, back: `<b>Switch</b> subject and object.` },
        { front: `Passive verb formula?`, back: `Appropriate form of <b>be</b> + <b>past participle (V3)</b>.` },
        { front: `Preposition that usually introduces the doer?`, back: `<b>by</b>.` },
        { front: `Passive of "The researcher conducted the experiment."`, back: `The experiment <b>was conducted</b> by the researcher.` },
        { front: `The cow is eating grass. Passive?`, back: `Grass <b>is being eaten</b> by the cow.` },
        { front: `When can the by-phrase be omitted?`, back: `When the doer is <b>unknown or unimportant</b>.` },
        { front: `Tense rule in conversion?`, back: `The passive verb should match the <b>tense</b> of the active verb.` },
        { front: `Two reasons to use the passive (slides)?`, back: `<b>Emphasise the receiver</b>; sound <b>formal or impersonal</b>.` },
        { front: `Blue Book advice on voice?`, back: `Use <b>active voice whenever possible</b>.` },
      ],
      oneLiners: [
        'Active: subject <b>performs</b> the action. Passive: subject is <b>acted upon</b>.',
        'Three steps: identify <b>S, V, O</b>; <b>switch</b> subject and object; verb becomes <b>be + V3</b>.',
        'The <b>object</b> of the active sentence is the <b>subject</b> of the passive one.',
        'The passive keeps the <b>tense</b> of the active verb: conducted gives was conducted.',
        'Omit the <b>by-phrase</b> when the doer is unknown or unimportant.',
        'Blue Book: use <b>active voice whenever possible</b>.',
      ],
      formulas: [
        { name: 'Active to passive', html: `<b>Object</b> becomes subject · verb becomes <b>be + V3</b> (same tense) · <b>by + old subject</b> (optional)`, note: 'The dog chased the cat. The cat was chased by the dog.' },
      ],
    },

    // ------------------------------------------------------------------ voice tenses
    {
      id: 'm2-voice-tenses',
      title: 'Voice conversion across the tenses',
      short: 'Voice with tenses',
      blurb: 'The be-form that each tense takes in the passive, with the positive, negative and question rows from the conversion handout, and the handout note on the tenses that stay unchanged.',
      source: 'Module 2 Grammar / Active-and-passive-voice - conversion rules.docx (tense tables)',
      tabs: [
        { title: 'The conversion recipe', html: `
          <p class="lead">The handout's basic rules for making the passive voice.</p>
          <ol class="steps">
            <li><b>Find S, V, O</b> subject, object and the main verb.</li>
            <li><b>Object becomes subject</b> if the object is a pronoun of object case, convert it (me becomes I).</li>
            <li><b>Choose the helping verb</b> use the suitable helping verb according to the tense. If a helping verb is given, use it as it is. The helping verb should agree with the object (the new subject).</li>
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
        ` },
        { title: 'Present tenses', html: `
          <p class="lead">Each tense is shown in the three shapes the handout uses: <b>positive, negative, question</b>.</p>
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
              <tr><td>-</td><td>She has not stolen my book.</td><td>My book has been stolen by her. (as printed)</td></tr>
              <tr><td>?</td><td>Has she stolen my book?</td><td><b>Has</b> my book <b>been stolen</b> by her?</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The handout's negative row for the present perfect repeats the positive passive, without <em>not</em>. It is shown here exactly as printed.</p></div>
        ` },
        { title: 'Past tenses', html: `
          <p class="lead">Past tenses use <b>was/were</b> and <b>had</b>.</p>
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
              <tr><td>-</td><td>He was not revising his books.</td><td>His books were not revising by him. (as printed)</td></tr>
              <tr><td>?</td><td>Was he revising his books?</td><td>Were his books revising by him? (as printed)</td></tr>
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
          <div class="note heads-up"><p>The handout's past continuous negative and question rows do not follow its own pattern (was, were + being + V3). They are shown exactly as printed.</p></div>
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
          <p>The handout says that in the <b>present perfect continuous, past perfect continuous, future perfect continuous and future perfect</b> tenses "we use the same sentence in passive voice", meaning these tenses cannot be changed into the passive form.</p>
          <div class="note heads-up"><p>The same handout also gives the future perfect conversion table above. Both are shown as printed.</p></div>
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
        { front: `A car is being driven by me. Active?`, back: `I am driving a car.` },
        { front: `Did she finish work? Passive?`, back: `<b>Was</b> work finished by her?` },
        { front: `Which tenses does the handout say stay unchanged?`, back: `Present perfect continuous, past perfect continuous, future perfect continuous and future perfect.` },
      ],
      oneLiners: [
        'Passive = <b>be in the same tense + V3</b>.',
        'The helping verb agrees with the <b>new subject</b>: work was, books were.',
        'Object pronouns turn into subject pronouns (me to I) and the old subject takes <b>by</b> (he to by him).',
        'If a helping verb is given in the active sentence, use it as it is.',
      ],
      formulas: [
        { name: 'Passive by tense', html: `<b>Present</b>: is / am / are, is being, has been · <b>Past</b>: was / were, was being, had been · <b>Future</b>: will be, will have been (all + V3)`, note: 'He lights the candle. The candle is lighted by him.' },
        { name: 'Conversion order', html: `<b>S, V, O</b> → object to subject → <b>helping verb (tense)</b> → <b>V3</b> → <b>by + old subject</b>`, note: 'From the handout\'s basic rules.' },
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
          <p class="lead">With a modal the passive is <b>modal + be + V3</b>, as in the handout's table.</p>
          <table class="tbl">
            <thead><tr><th>Modal</th><th>Passive pattern</th><th>Active</th><th>Passive</th></tr></thead>
            <tbody>
              <tr><td>can / could</td><td>can / could + be + V3</td><td>I can solve these sums.</td><td>These sums <b>can be solved</b> by me.</td></tr>
              <tr><td>can / could</td><td>can / could + be + V3</td><td>I cannot solve these sums.</td><td>These sums <b>cannot be solved</b> by me.</td></tr>
              <tr><td>can / could</td><td>can / could + be + V3</td><td>Can I solve these sums?</td><td><b>Can</b> these sums <b>be solved</b> by me?</td></tr>
              <tr><td>has to / have to</td><td>has to / have to + 3rd verb</td><td>He has to complete his assignment.</td><td>His assignment <b>has to be completed</b> by him.</td></tr>
              <tr><td>must</td><td>must + 3rd verb</td><td>You must learn this book.</td><td>This book <b>must be learnt</b> by you.</td></tr>
              <tr><td>may</td><td>may + be + V3</td><td>I may buy the book.</td><td>The book <b>may be bought</b> by me.</td></tr>
              <tr><td>might</td><td>might + be + V3</td><td>They might play chess.</td><td>Chess <b>might be played</b> by them.</td></tr>
              <tr><td>should</td><td>should + be + V3</td><td>Students should learn all lessons.</td><td>All lessons <b>should be learnt</b> by students.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The handout writes the pattern for has to / have to and must without <b>be</b>, but its own examples include it ("has to be completed", "must be learnt").</p></div>
        ` },
        { title: 'Commands, requests, orders', html: `
          <p class="lead">Imperative sentences are sentences in which we express feelings and emotions like <b>command, order, advice and request</b>.</p>
          <div class="kv"><div><span>Rule</span><b>Let + new object + be / not be + V3</b></div><div><span>Request, advice, order</span><b>You are requested to / advised to / ordered to...</b></div></div>
          <p>Always <b>remove please and kindly</b> if they are given in the sentence.</p>
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
        ` },
        { title: 'Pronouns in conversion', html: `
          <p class="lead">When a pronoun moves, it changes form. The handout gives two tables: object pronouns that become the new subject, and subject pronouns that go after <b>by</b>.</p>
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
        ` },
      ],
      flashcards: [
        { front: `Modal passive pattern?`, back: `<b>modal + be + V3</b>: These sums can be solved by me.` },
        { front: `Passive of "You must learn this book."`, back: `This book <b>must be learnt</b> by you.` },
        { front: `Passive of "Students should learn all lessons."`, back: `All lessons <b>should be learnt</b> by students.` },
        { front: `Rule for imperatives?`, back: `<b>Let + new object + be / not be + V3</b>.` },
        { front: `Passive of "Shut the door."`, back: `Let the door <b>be shut</b>.` },
        { front: `Passive of "Do not starve the cow."`, back: `Let the cow <b>not be starved</b>.` },
        { front: `Request, advice and order patterns?`, back: `You are <b>requested / advised / ordered</b> to...` },
        { front: `What to do with please and kindly?`, back: `<b>Remove</b> them when converting.` },
        { front: `me, her, them, us, him as the passive subject?`, back: `<b>I, she, they, we, he</b>.` },
        { front: `by-phrase forms of I, she, they, we, he, who?`, back: `<b>by me, by her, by them, by us, by him, by whom</b>.` },
      ],
      oneLiners: [
        'Modal passive: <b>modal + be + V3</b>.',
        'Imperative: <b>Let + object + be + V3</b>; negative: <b>Let ... not be + V3</b>.',
        'Request, advice, order: <b>You are requested / advised / ordered to</b> + verb.',
        'Remove <b>please</b> and <b>kindly</b> in the passive.',
        '<b>whom</b> becomes <b>who</b>; <b>who</b> becomes <b>by whom</b>.',
      ],
      formulas: [
        { name: 'Modal passive', html: `<b>can / could / may / might / must / should + be + V3</b> (also <b>has to / have to + be + V3</b>)`, note: 'These sums can be solved by me.' },
        { name: 'Imperative passive', html: `<b>Let + object + be / not be + V3</b> · Request, advice, order: <b>You are requested / advised / ordered to + verb</b>`, note: 'Please do me a favor tonight. You are requested to do me a favor tonight.' },
      ],
    },

    // ------------------------------------------------------------------ voice practice
    {
      id: 'm2-voice-practice',
      title: 'Voice quiz from the slides',
      short: 'Voice practice',
      blurb: 'The voice quiz questions from the Active - Passive Voice deck. Only the first question has a key in the deck.',
      source: 'Module 2 Grammar / Active - Passive Voice.pptx (quiz slides 2-8)',
      tabs: [
        { title: 'Quiz questions 1 and 2', html: `
          <p class="lead">The deck's first question is repeated on slide 3 with the answer highlighted. That is the only key in the deck.</p>
          <div class="worked">
            <div class="given"><p>Which of the following sentences is in the <b>active</b> voice? A) The ball was thrown by the pitcher. B) The window was broken by the child. C) The dog chased the cat. D) A letter was written by her.</p></div>
            <div class="result"><p><b>C</b>: The dog chased the cat. (highlighted on slide 3)</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>Identify the <b>passive</b> voice sentence. A. They built the house a century ago. B. The delicious cake was eaten by the children. C. She read the entire novel in one day. D. He writes a new book every year.</p></div>
            <div class="result"><p>The deck gives no answer key.</p></div>
          </div>
        ` },
        { title: 'Quiz questions 3 to 6', html: `
          <p class="lead">The remaining four questions. The deck gives no answer key for any of them.</p>
          <ol class="steps">
            <li><b>Convert</b> Which sentence correctly converts "The mechanic fixed the car" to the passive voice? A. The car was being fixed by the mechanic. B. The mechanic was fixed by the car. C. The car fixed the mechanic. D. The car was fixed by the mechanic.</li>
            <li><b>Passive to active</b> Change "The report was finished by me" from passive to active voice. A. I finished the report. B. I was finishing the report. C. I was finished by the report. D. The report finished me.</li>
            <li><b>Subject</b> What is the subject of the sentence "The cookies were baked by my mom"? A. cookies B. baked C. the D. my mom</li>
            <li><b>Name it</b> The sentence "The new library will be opened by the mayor" is an example of what kind of voice? A. Simple voice B. Future progressive tense C. Passive voice D. Active voice</li>
          </ol>
          <div class="note heads-up"><p>The deck gives no answer key for these questions. Use the steps and notes in the voice topics to work them out.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Quiz 1: which is active? The ball was thrown by the pitcher / The window was broken by the child / The dog chased the cat / A letter was written by her`, back: `<b>The dog chased the cat.</b> (C, highlighted on slide 3)` },
        { front: `How many quiz questions in the deck have an answer key?`, back: `Only the <b>first</b> (slide 3 highlights C).` },
        { front: `Quiz: what is asked about "The cookies were baked by my mom"?`, back: `Its <b>subject</b> (no key in the deck).` },
        { front: `Quiz: which sentence is converted to the passive?`, back: `"The mechanic fixed the car" (no key in the deck).` },
      ],
      oneLiners: [
        'Quiz 1 key (slide 3): <b>C, The dog chased the cat</b> is the active sentence.',
        'The other quiz questions have <b>no answer key</b> in the deck.',
        'The quiz covers spotting the voice, converting both ways, finding the subject and naming the voice.',
      ],
      formulas: [],
    },

    // ------------------------------------------------------------------ tenses overview
    {
      id: 'm2-tenses-forms',
      title: 'Tenses in technical writing',
      short: 'Tenses: forms and clues',
      blurb: 'Why tense carries real information in technical writing, the twelve tenses with their structures and time expressions, the time-expression table, and the five questions for choosing a tense.',
      source: 'Module 2 Grammar / Verb Tenses in Technical Writing.pptx (slides 1-4, 11); Tenses Worksheet - Answer key.docx (summary table)',
      tabs: [
        { title: 'Why tense matters', html: `
          <p class="lead">The wrong tense can <b>misrepresent when something happened</b> or how it relates to now.</p>
          <p>It can mislead the reader about whether a procedure is <b>routine</b>, an action is <b>in progress</b>, an event is <b>finished</b>, or a plan is still <b>ahead</b>.</p>
          <p>Technical writing depends on precise timing (a completed test versus an ongoing one versus a scheduled one), so the tense itself carries <b>real information</b>, not just grammatical correctness.</p>
        ` },
        { title: 'The twelve tenses', html: `
          <p class="lead">The slide's table lists <b>twelve tenses</b> with their structure, common time expressions and an example.</p>
          <figure data-fig="m2-tense-timeline"></figure>
          <table class="tbl">
            <thead><tr><th>Tense</th><th>Structure</th><th>Common time expressions</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Present simple</td><td>Subject + V1</td><td>every day, usually, always</td><td>The engineer checks the equipment daily.</td></tr>
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
          <p class="lead">The slide's lookup table: <b>read the time expression, name the tense</b>.</p>
          <table class="tbl">
            <thead><tr><th>Time expression</th><th>Correct tense</th></tr></thead>
            <tbody>
              <tr><td>every day</td><td>Present simple</td></tr>
              <tr><td>usually</td><td>Present simple</td></tr>
              <tr><td>now</td><td>Present continuous</td></tr>
              <tr><td>at the moment</td><td>Present continuous</td></tr>
              <tr><td>yesterday</td><td>Past simple</td></tr>
              <tr><td>last year</td><td>Past simple</td></tr>
              <tr><td>ago</td><td>Past simple</td></tr>
              <tr><td>just</td><td>Present perfect</td></tr>
              <tr><td>already</td><td>Present perfect</td></tr>
              <tr><td>yet</td><td>Present perfect</td></tr>
              <tr><td>since</td><td>Perfect tenses</td></tr>
              <tr><td>for</td><td>Perfect tenses</td></tr>
              <tr><td>tomorrow</td><td>Future simple</td></tr>
              <tr><td>next week</td><td>Future simple</td></tr>
              <tr><td>by tomorrow</td><td>Future perfect</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'How to choose the tense', html: `
          <p class="lead">The slide "Choosing the Correct Tense" says: <b>ask yourself</b> these five questions.</p>
          <ol class="steps">
            <li><b>When did the action happen?</b></li>
            <li><b>Is it a routine or a temporary action?</b></li>
            <li><b>Is the action complete?</b></li>
            <li><b>Is another action mentioned?</b></li>
            <li><b>Does the time expression indicate the tense?</b></li>
          </ol>
          <div class="worked">
            <div class="given"><p>The laboratory (has received / received) the samples recently. (worksheet)</p></div>
            <div class="result"><p>Key: The laboratory <b>has received</b> the samples recently.</p></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `Why does tense matter in technical writing?`, back: `The tense itself carries <b>real information</b>, not just grammatical correctness.` },
        { front: `Present simple: structure and time expressions?`, back: `<b>Subject + V1</b>; every day, usually, always.` },
        { front: `Present continuous: structure and time expressions?`, back: `<b>am/is/are + V-ing</b>; now, at the moment.` },
        { front: `Present perfect: structure and time expressions?`, back: `<b>has/have + V3</b>; already, yet, since, for.` },
        { front: `Past simple: structure and time expressions?`, back: `<b>V2</b>; yesterday, last week, in 2022 (and ago, last year on the lookup table).` },
        { front: `Past continuous: structure and time expressions?`, back: `<b>was/were + V-ing</b>; while, when.` },
        { front: `Past perfect: structure and time expressions?`, back: `<b>had + V3</b>; before, after.` },
        { front: `Future simple: structure and time expressions?`, back: `<b>will + V1</b>; tomorrow, next week.` },
        { front: `Future perfect: structure and time expressions?`, back: `<b>will have + V3</b>; by, before.` },
        { front: `Future perfect continuous?`, back: `<b>will have been + V-ing</b>; for, by the time.` },
        { front: `"just", "already", "yet" call for...`, back: `The <b>present perfect</b>.` },
        { front: `The five choosing questions end with...`, back: `Does the <b>time expression</b> indicate the tense?` },
      ],
      oneLiners: [
        'The wrong tense can <b>misrepresent when something happened</b> or how it relates to now.',
        '<b>every day, usually</b> = present simple; <b>now, at the moment</b> = present continuous.',
        '<b>yesterday, last year, ago</b> = past simple; <b>just, already, yet</b> = present perfect.',
        '<b>since, for</b> = perfect tenses; <b>tomorrow, next week</b> = future simple; <b>by tomorrow</b> = future perfect.',
        'Choose with five questions: <b>when, routine or temporary, complete, another action, time expression</b>.',
      ],
      formulas: [
        { name: 'Time expression to tense', html: `<b>every day, usually</b> → present simple · <b>now, at the moment</b> → present continuous · <b>yesterday, last year, ago</b> → past simple · <b>just, already, yet</b> → present perfect · <b>since, for</b> → perfect tenses · <b>tomorrow, next week</b> → future simple · <b>by tomorrow</b> → future perfect`, note: 'From the slide 4 table.' },
      ],
    },

    // ------------------------------------------------------------------ tenses errors
    {
      id: 'm2-tenses-errors',
      title: 'Common tense errors and sequence of tenses',
      short: 'Tense errors, sequence',
      blurb: 'The four common errors from the slides (A to D) with matching worksheet items, and the sequence of tenses rule.',
      source: 'Module 2 Grammar / Verb Tenses in Technical Writing.pptx (slides 5-11); Tenses Worksheet - Answer key.docx (summary of errors)',
      tabs: [
        { title: 'Error A: continuous for routine', html: `
          <p class="lead">Error A: <b>present continuous instead of present simple</b>.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The technician <b>is checking</b> the circuit every day.</p></div>
            <div class="side"><h4>Right</h4><p>The technician <b>checks</b> the circuit every day.</p></div>
          </div>
          <p><b>Reason:</b> "every day" indicates a routine.</p>
          <h3>Same error in the worksheet key</h3>
          <p>The key's summary lists the routine clues <b>every day, every morning, every semester, every hour</b> for the simple present.</p>
          <table class="tbl">
            <thead><tr><th>Worksheet sentence</th><th>Key</th></tr></thead>
            <tbody>
              <tr><td>The engineer is calibrating the sensors every day.</td><td>The engineer <b>calibrates</b> the sensors every day.</td></tr>
              <tr><td>The researchers are conducting the experiment every semester.</td><td>The researchers <b>conduct</b> the experiment every semester.</td></tr>
              <tr><td>The operator (checks / is checking) the gauges every hour.</td><td>The operator <b>checks</b> the gauges every hour.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Error B: perfect with a finished time', html: `
          <p class="lead">Error B: <b>present perfect with a finished time</b>.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The company <b>has launched</b> its software two months ago.</p></div>
            <div class="side"><h4>Right</h4><p>The company <b>launched</b> its software two months ago.</p></div>
          </div>
          <p><b>Reason:</b> "ago" requires the past simple.</p>
          <table class="tbl">
            <thead><tr><th>Worksheet sentence</th><th>Key</th></tr></thead>
            <tbody>
              <tr><td>The engineer has submitted the report yesterday.</td><td>The engineer <b>submitted</b> the report yesterday.</td></tr>
              <tr><td>The laboratory has completed the analysis last Monday.</td><td>The laboratory <b>completed</b> the analysis last Monday.</td></tr>
              <tr><td>The company has introduced the policy three months ago.</td><td>The company <b>introduced</b> the policy three months ago.</td></tr>
            </tbody>
          </table>
          <h3>The other direction (worksheet key)</h3>
          <p>The key's summary puts <b>since, recently, already, yet</b> with the present perfect.</p>
          <table class="tbl">
            <thead><tr><th>Worksheet sentence</th><th>Key</th></tr></thead>
            <tbody>
              <tr><td>The engineer repaired the machine since Monday.</td><td>The engineer <b>has repaired</b> the machine since Monday.</td></tr>
              <tr><td>The company released the update since January.</td><td>The company <b>has released</b> the update since January.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>The key notes that more natural English is "The engineer has been repairing the machine since Monday" and "The company has been releasing updates since January", but the expected corrections are <b>has repaired</b> and <b>has released</b>.</p></div>
        ` },
        { title: 'Error C: sequence of tenses', html: `
          <p class="lead">Error C: <b>incorrect sequence of tenses</b>.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The technician reported that the machine <b>will require</b> maintenance next week.</p></div>
            <div class="side"><h4>Right</h4><p>The technician reported that the machine <b>would require</b> maintenance the following week.</p></div>
          </div>
          <p><b>Reason:</b> reporting verb is in the past.</p>
          <h3>Sequence of tenses</h3>
          <table class="tbl">
            <thead><tr><th>Reporting verb</th><th>Verb in the clause</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Present</td><td>any tense as required</td><td>She says that the machine <b>is</b> faulty.</td></tr>
              <tr><td>Past</td><td>usually shifts one tense back</td><td>She said that the machine <b>was</b> faulty.</td></tr>
              <tr><td>Future</td><td>any tense as required</td><td>She will say that the machine <b>is</b> faulty.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>For the same sentence in the worksheet (Part H, item 3), the key adds: acceptable in many grammar exercises, "...would require maintenance next week."</p></div>
        ` },
        { title: 'Error D and future clues', html: `
          <p class="lead">Error D: <b>past perfect used unnecessarily</b>.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Yesterday, the engineer <b>had repaired</b> the motor.</p></div>
            <div class="side"><h4>Right</h4><p>Yesterday, the engineer <b>repaired</b> the motor.</p></div>
          </div>
          <p>Use the <b>past perfect only</b> when referring to an action completed <b>before another past action</b>.</p>
          <h3>Future time with a past verb (worksheet key)</h3>
          <p>The key's summary puts <b>tomorrow, next month</b> with the future simple.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The workers <b>completed</b> the installation tomorrow.</p></div>
            <div class="side"><h4>Right</h4><p>The workers <b>will complete</b> the installation tomorrow.</p></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `Error A?`, back: `<b>Present continuous instead of present simple</b> (every day indicates a routine).` },
        { front: `Error B?`, back: `<b>Present perfect with a finished time</b> (ago requires the past simple).` },
        { front: `Error C?`, back: `<b>Incorrect sequence of tenses</b> (reporting verb is in the past).` },
        { front: `Error D?`, back: `<b>Past perfect used unnecessarily</b>.` },
        { front: `Which tense goes with "ago"?`, back: `<b>Past simple</b>.` },
        { front: `When is the past perfect right?`, back: `For an action completed <b>before another past action</b>.` },
        { front: `Present reporting verb: what tense follows?`, back: `<b>Any tense as required</b>.` },
        { front: `Past reporting verb: what follows?`, back: `The tense <b>usually shifts one tense back</b>.` },
        { front: `Future reporting verb: what follows?`, back: `<b>Any tense as required</b>.` },
        { front: `She said that the machine ___ faulty.`, back: `<b>was</b>.` },
        { front: `The technician reported that the machine will require maintenance next week. Fix?`, back: `...<b>would require</b> maintenance <b>the following week</b>.` },
      ],
      oneLiners: [
        'Routine words (<b>every day, every hour</b>) take present simple, not present continuous.',
        'Finished times (<b>ago, yesterday, last Monday</b>) take past simple, not present perfect.',
        'The key puts <b>since, recently, already, yet</b> with the present perfect.',
        'Past perfect only for an action completed <b>before another past action</b>.',
        'After a <b>past reporting verb</b> the tense usually shifts one tense back: will becomes would.',
      ],
      formulas: [
        { name: 'Sequence of tenses', html: `Present reporting verb: <b>any tense</b> · Past reporting verb: <b>usually one tense back</b> · Future reporting verb: <b>any tense</b>`, note: 'She says is / She said was / She will say is.' },
        { name: 'Four common errors', html: `<b>A</b> present continuous instead of present simple · <b>B</b> present perfect with a finished time · <b>C</b> incorrect sequence of tenses · <b>D</b> past perfect used unnecessarily`, note: 'Slides 6 to 9.' },
      ],
    },

    // ------------------------------------------------------------------ tenses worksheet
    {
      id: 'm2-tenses-practice',
      title: 'Tenses worksheet: all parts solved',
      short: 'Tenses worksheet',
      blurb: 'The tenses worksheet (identify the time clue, choose the verb, spot the error, exam practice) with the answers exactly as the answer key gives them.',
      source: 'Module 2 Grammar / Tenses Worksheet.docx and Tenses Worksheet - Answer key.docx',
      tabs: [
        { title: 'Part A: time clue and tense', html: `
          <p class="lead">Part A asks you to underline the time expression and write the tense that should normally be used.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Sentence</th><th>Time expression</th><th>Expected tense</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>The technician checks the equipment every morning.</td><td><b>every morning</b></td><td>Simple present</td></tr>
              <tr><td>2</td><td>The engineer is inspecting the bridge now.</td><td><b>now</b></td><td>Present continuous</td></tr>
              <tr><td>3</td><td>The software was installed yesterday.</td><td><b>yesterday</b></td><td>Simple past</td></tr>
              <tr><td>4</td><td>The company has completed the audit recently.</td><td><b>recently</b></td><td>Present perfect</td></tr>
              <tr><td>5</td><td>The machine will undergo maintenance next month.</td><td><b>next month</b></td><td>Simple future</td></tr>
            </tbody>
          </table>
          <h3>Choose the correct verb</h3>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>Key</th></tr></thead>
            <tbody>
              <tr><td>The operator (checks / is checking) the gauges every hour.</td><td><b>checks</b></td></tr>
              <tr><td>The technician (completed / has completed) the repair yesterday.</td><td><b>completed</b></td></tr>
              <tr><td>The manager (said / says) that the system would be upgraded next month.</td><td><b>said</b></td></tr>
              <tr><td>The engineer (is testing / tests) the equipment at the moment.</td><td><b>is testing</b></td></tr>
              <tr><td>The laboratory (has received / received) the samples recently.</td><td><b>has received</b></td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Part B: spot the tense error', html: `
          <p class="lead">Part B gives one worked example. Read the sentence carefully before correcting it.</p>
          <div class="worked">
            <div class="given"><p><b>Incorrect:</b> The engineer is calibrating the sensors every day.</p></div>
            <div class="solve"><ol class="steps"><li><b>Time clue</b> every day</li><li><b>Correct tense</b> simple present</li></ol></div>
            <div class="result"><p><b>Correct sentence:</b> The engineer <b>calibrates</b> the sensors every day.</p></div>
          </div>
          <p>The key lays the answer out as <b>Incorrect, Time clue, Correct tense, Correct sentence</b>.</p>
        ` },
        { title: 'Part C: four rewrites', html: `
          <p class="lead">For each sentence: underline the time clue, identify the incorrect verb, write the correct sentence.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Sentence</th><th>Time clue</th><th>Incorrect verb</th><th>Correct sentence</th></tr></thead>
            <tbody>
              <tr><td>I</td><td>The company has introduced the policy three months ago.</td><td>three months ago</td><td>has introduced</td><td>The company <b>introduced</b> the policy three months ago.</td></tr>
              <tr><td>II</td><td>The supervisor reported that the equipment will fail if it was overloaded.</td><td>reported (past reporting verb)</td><td>will fail</td><td>The supervisor reported that the equipment <b>would fail</b> if it was overloaded.</td></tr>
              <tr><td>III</td><td>The engineer repaired the machine since Monday.</td><td>since Monday</td><td>repaired</td><td>The engineer <b>has repaired</b> the machine since Monday.</td></tr>
              <tr><td>IV</td><td>The workers completed the installation tomorrow.</td><td>tomorrow</td><td>completed</td><td>The workers <b>will complete</b> the installation tomorrow.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Item III, from the key: more naturally, "The engineer <b>has been repairing</b> the machine since Monday." However, for tense correction, "has repaired" is the expected answer.</p></div>
        ` },
        { title: 'Part H: exam practice 1 to 5', html: `
          <p class="lead">Part H: identify and correct the tense error in each of ten sentences. The first five, with the key's corrections.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Wrong sentence</th><th>Correct sentence (key)</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>The technician is checking the circuit every day before switching on the power supply.</td><td>The technician <b>checks</b> the circuit every day before switching on the power supply.</td></tr>
              <tr><td>2</td><td>The company has launched its new software two months ago.</td><td>The company <b>launched</b> its new software two months ago.</td></tr>
              <tr><td>3</td><td>The technician reported that the machine will require maintenance next week.</td><td>The technician reported that the machine <b>would require</b> maintenance <b>the following week</b>.</td></tr>
              <tr><td>4</td><td>The engineer has submitted the report yesterday.</td><td>The engineer <b>submitted</b> the report yesterday.</td></tr>
              <tr><td>5</td><td>The researchers are conducting the experiment every semester.</td><td>The researchers <b>conduct</b> the experiment every semester.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Item 3, from the key: acceptable in many grammar exercises, "...would require maintenance <b>next week</b>."</p></div>
        ` },
        { title: 'Part H: exam practice 6 to 10', html: `
          <p class="lead">Items 6 to 10 of Part H, with the key's corrections.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Wrong sentence</th><th>Correct sentence (key)</th></tr></thead>
            <tbody>
              <tr><td>6</td><td>The supervisor informed that the project finishes next week.</td><td>The supervisor informed that the project <b>would finish the following week</b>.</td></tr>
              <tr><td>7</td><td>The laboratory has completed the analysis last Monday.</td><td>The laboratory <b>completed</b> the analysis last Monday.</td></tr>
              <tr><td>8</td><td>The operator was checking the pressure every day.</td><td>The operator <b>checked</b> the pressure every day.</td></tr>
              <tr><td>9</td><td>The company released the update since January.</td><td>The company <b>has released</b> the update since January.</td></tr>
              <tr><td>10</td><td>The engineer said that the system will be ready by Friday.</td><td>The engineer said that the system <b>would be ready</b> by Friday.</td></tr>
            </tbody>
          </table>
          <h3>Notes in the key</h3>
          <ul>
            <li><b>Item 6</b>: also acceptable, "The supervisor informed us that the project would finish the following week."</li>
            <li><b>Item 8</b>: if referring to a past routine. If the intended meaning is a present routine, the answer would be <b>checks</b>.</li>
            <li><b>Item 9</b>: more idiomatic English would be "The company has been releasing updates since January", but the expected correction is <b>has released</b>.</li>
          </ul>
        ` },
        { title: 'What the worksheet tests', html: `
          <p class="lead">The key ends with a <b>summary of common tense errors tested</b>.</p>
          <table class="tbl">
            <thead><tr><th>Tense</th><th>Used with</th></tr></thead>
            <tbody>
              <tr><td><b>Simple present</b> for routines</td><td>every day, every morning, every semester, every hour</td></tr>
              <tr><td><b>Simple past</b> with finished time expressions</td><td>yesterday, last Monday, two months ago</td></tr>
              <tr><td><b>Present perfect</b></td><td>since, recently, already, yet</td></tr>
              <tr><td><b>Future simple</b></td><td>tomorrow, next month</td></tr>
            </tbody>
          </table>
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
        { front: `The engineer repaired the machine since Monday. Fix?`, back: `<b>has repaired</b> (key: more naturally, has been repairing).` },
        { front: `The workers completed the installation tomorrow. Fix?`, back: `<b>will complete</b>.` },
        { front: `Layout of the Part B answer in the key?`, back: `<b>Incorrect, time clue, correct tense, correct sentence</b>.` },
      ],
      oneLiners: [
        'The worksheet parts: <b>identify the time clue, choose the verb, spot the error, four rewrites, Part H exam practice</b>.',
        'Answer layout: <b>Incorrect, time clue, correct tense, correct sentence</b>.',
        'Reported clauses in the key: will becomes <b>would</b>, next week becomes <b>the following week</b>.',
        'Item 8: past routine gives <b>checked</b>, present routine gives <b>checks</b>.',
        'The key expects <b>has repaired / has released</b> with since, though it notes the perfect continuous is more natural.',
      ],
      formulas: [
        { name: 'Part B style answer', html: `<b>Incorrect</b> sentence → <b>Time clue</b> → <b>Correct tense</b> → <b>Correct sentence</b>`, note: 'The engineer is calibrating... every day: simple present: calibrates.' },
      ],
    },
  ],
  figures: [
    { id: 'm2-voice-swap', caption: 'Converting active to passive: the object becomes the subject, the verb becomes be plus the past participle, and the old subject follows by. Based on BAENG101 course material, VIT.', alt: 'An active sentence, "The researcher conducted the experiment", with subject in blue, verb in green and object in orange. An arrow labelled swap, be plus V3, add by leads to the passive sentence "The experiment was conducted by the researcher" with the colours moved accordingly.' },
    { id: 'm2-tense-timeline', caption: 'The twelve tenses as a grid: four aspects, each with its past, present and future form, and typical time words. Based on BAENG101 course material, VIT.', alt: 'Four stacked cards for simple, continuous, perfect and perfect continuous. Each lists the past, present and future structure: V2, V1 and will plus V1; was or were plus V-ing, am is are plus V-ing, will be plus V-ing; had plus V3, has or have plus V3, will have plus V3; had been, has or have been, will have been plus V-ing.' },
  ],
});
