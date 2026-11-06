CHUNK({
  chunk: 'J',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------ pronouns
    {
      id: 'm2-pronouns',
      title: 'Pronouns: case, who and whom, that and which',
      short: 'Pronouns and who/whom',
      blurb: 'Subject, object and possessive pronouns, finding clauses, than and as, its and it\'s, reflexives, the he/him test for who and whom (and whoever and whomever), and who, that and which.',
      source: 'Module 2 Grammar / The Blue Book for Grammar and Punctuation - Helpful resource.pdf, Grammar chapter (Pronouns, Who vs. Whom, Whoever vs. Whomever, That vs. Which)',
      tabs: [
        { title: 'Three cases', html: `
          <p class="lead">A <b>pronoun</b> takes the place of a noun. It changes shape depending on its job in the sentence, and there are three <b>cases</b>: subject, object and possessive. Choosing the wrong case is one of the most common errors in the Blue Book tests.</p>
          <table class="tbl">
            <thead><tr><th>Case</th><th>Pronouns</th><th>Use it when</th></tr></thead>
            <tbody>
              <tr><td><b>Subject</b></td><td>I, you, he, she, it, we, they</td><td>the pronoun does the verb, or renames the subject after a <em>be</em> verb</td></tr>
              <tr><td><b>Object</b></td><td>me, you, him, her, it, us, them</td><td>direct object, indirect object, or object of a preposition</td></tr>
              <tr><td><b>Possessive</b></td><td>mine, yours, his, hers, its, ours, theirs</td><td>showing who owns something</td></tr>
            </tbody>
          </table>
          <h3>A quick test for subject pronouns</h3>
          <p>Put the word in a blank subject slot: "___ did the job." <em>I, you, he, she, it, we, they</em> all fit, so they are subject pronouns.</p>
          <h3>Renaming the subject</h3>
          <p>Subject pronouns also follow <b>be verbs</b> (is, are, was, were, am, will be), because they rename the subject.</p>
          <div class="chips"><span class="chip">It is he.</span><span class="chip">This is she speaking.</span><span class="chip">It is we who are responsible for the decision to downsize.</span></div>
          <div class="note heads-up"><p>In speech most people use object pronouns after <em>be</em> ("It is just me at the door"). The Blue Book accepts that in speech but prefers the subject form in writing: "It could have been <b>they</b>", "It is just <b>I</b> at the door". In an exam, give the formal form.</p></div>
          <div class="note exam"><p>Pretest items: "It was I whom called" is corrected to "It was I <b>who</b> called" and "It is us clerks who work hard" to "It is <b>we</b> clerks".</p></div>
        ` },
        { title: 'Clauses, than and as', html: `
          <p class="lead">To pick the right pronoun in a longer sentence, first <b>isolate the clause</b> the pronoun sits in, then decide its job inside that clause only.</p>
          <div class="kv"><div><span>Strong clause</span><b>has a subject and verb and can stand alone: She is hungry.</b></div><div><span>Weak clause</span><b>starts with although, since, if, when, because and cannot stand alone: Although she is hungry...</b></div></div>
          <div class="worked">
            <div class="given"><p>Although this gift is for (he / him), I would like you to have it too.</p></div>
            <div class="solve"><p>Split it: [Although this gift is for ___,] [I would like you to have it too.] The pronoun is inside the weak clause, after the preposition <em>for</em>, so it is an object.</p></div>
            <div class="result"><p>Although this gift is for <b>him</b>, I would like you to have it too.</p></div>
          </div>
          <h3>After than and as: finish the sentence in your head</h3>
          <p>A pronoun after <b>than</b> or <b>as</b> is usually the start of a clause with a missing verb. Add the missing words and the answer is obvious.</p>
          <ul>
            <li>Tranh is as smart as (she / her): "as smart as she <b>is</b>", so <b>she</b>.</li>
            <li>Zoe is taller than (I / me): "taller than I <b>am</b>", so <b>I</b>.</li>
            <li>Daniel would rather talk to her than (I / me): this one works two ways. "...than <b>to me</b>" (talk to me) or "...than <b>I would</b>" (I would talk to her). The meaning changes with your choice.</li>
          </ul>
          <div class="note trap"><p>"Zoe is taller than me" is common in speech. In an error-detection item, assume the formal rule is being tested and complete the sentence to check.</p></div>
        ` },
        { title: 'Its, it\'s and reflexives', html: `
          <p class="lead">Possessive pronouns <b>never take an apostrophe</b>. The only time <em>it's</em> has one is when it stands for <b>it is</b> or <b>it has</b>.</p>
          <div class="vs">
            <div class="side"><h4>Right</h4><p>It's a cold morning. (it is)</p><p>The thermometer reached <b>its</b> highest reading.</p><p>The cat hurt <b>its</b> paw.</p></div>
            <div class="side"><h4>Wrong</h4><p>Its a long way from here.</p><p>I prefer it's swimming pool.</p></div>
          </div>
          <p>Test: say "it is" in its place. If the sentence still works, use <b>it's</b>. If it does not, use <b>its</b>. The mastery test has "I prefer it's swimming pool", corrected to "its".</p>
          <h3>Reflexive pronouns</h3>
          <p>The <b>self pronouns</b> (myself, himself, herself, itself, themselves, ourselves, yourself, yourselves) are used only when they <b>refer back</b> to another word in the same sentence.</p>
          <table class="tbl">
            <thead><tr><th>Correct</th><th>Incorrect</th></tr></thead>
            <tbody>
              <tr><td>I did it <b>myself</b>. (refers back to I)</td><td>My brother and <b>myself</b> did it.</td></tr>
              <tr><td>My brother and <b>I</b> did it.</td><td>Please give it to John or <b>myself</b>.</td></tr>
              <tr><td>Please give it to John or <b>me</b>.</td><td></td></tr>
            </tbody>
          </table>
          <div class="note why"><p><em>Myself</em> in "give it to John or myself" has nothing to refer back to, so it is only a fancy-sounding <em>me</em>.</p></div>
          <div class="note heads-up"><p>Not on the slides: when a pronoun sits next to another name ("for Bill and ___"), drop the other name and test it alone. "This call is for me", so "for Bill and <b>me</b>". "Between you and me" is correct for the same reason: <em>between</em> is a preposition, so it needs an object pronoun. Pretest items 9 and 15 and mastery item 17 test this.</p></div>
        ` },
        { title: 'Who or whom', html: `
          <p class="lead">Use the <b>he / him method</b>: <b>he = who</b>, <b>him = whom</b>. Answer the question with he or him and the match tells you the word.</p>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>Test</th><th>Answer</th></tr></thead>
            <tbody>
              <tr><td>Who/Whom wrote the letter?</td><td>He wrote the letter.</td><td><b>who</b></td></tr>
              <tr><td>For who/whom should I vote?</td><td>Should I vote for him?</td><td><b>whom</b></td></tr>
              <tr><td>We all know who/whom pulled that prank.</td><td>Second clause only: He pulled that prank.</td><td><b>who</b></td></tr>
              <tr><td>We want to know on who/whom the prank was pulled.</td><td>The prank was pulled on him.</td><td><b>whom</b></td></tr>
            </tbody>
          </table>
          <h3>Two-clause sentences</h3>
          <p>When a sentence has two clauses ("We all know" + "who pulled that prank"), ignore the first and test only the clause that contains the who/whom.</p>
          <h3>Interrupters</h3>
          <div class="worked">
            <div class="given"><p>(Who / Whom) do you think should win?</p></div>
            <div class="solve"><p>"Do you think" is an interrupter. Remove it: "(Who / Whom) should win?" He should win.</p></div>
            <div class="result"><p><b>Who</b> do you think should win? (mastery item 20, answered in the book)</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>(Who / Whom) are you voting for?</p></div>
            <div class="solve"><p>You are voting for him. The preposition <em>for</em> needs an object.</p></div>
            <div class="result"><p><b>Whom</b> are you voting for? (mastery item 21)</p></div>
          </div>
          <div class="note exam"><p>The hooting-owl habit works: say "he" or "him" quietly while you read. The same pair of items, 20 and 21, looks almost identical but gets opposite answers.</p></div>
        ` },
        { title: 'Whoever or whomever', html: `
          <p class="lead">Split the sentence into two mini-answers. Rule: <b>him + he = whoever</b> and <b>him + him = whomever</b>.</p>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>First part</th><th>Second part</th><th>Answer</th></tr></thead>
            <tbody>
              <tr><td>Give it to whoever/whomever asks for it first.</td><td>Give it to <b>him</b></td><td><b>He</b> asks for it first</td><td><b>whoever</b></td></tr>
              <tr><td>We will hire whoever/whomever you recommend.</td><td>We will hire <b>him</b></td><td>You recommend <b>him</b></td><td><b>whomever</b></td></tr>
              <tr><td>We will hire whoever/whomever is most qualified.</td><td>We will hire <b>him</b></td><td><b>He</b> is most qualified</td><td><b>whoever</b></td></tr>
            </tbody>
          </table>
          <h3>When the whole clause is the subject</h3>
          <p>If the whole <em>whoever / whomever</em> clause is itself the subject of the verb that follows, look <b>inside</b> the clause to decide.</p>
          <ul>
            <li><b>Whoever</b> is elected will serve a four-year term. (<em>Whoever</em> is the subject of <em>is elected</em>; the whole clause is the subject of <em>will serve</em>.)</li>
            <li><b>Whomever</b> you elect will serve a four-year term. (<em>Whomever</em> is the object of <em>you elect</em>.)</li>
          </ul>
          <div class="note trap"><p>Do not choose by the word before it. "We are willing to work with whomever you recommend" is correct (mastery item 23) even though <em>whoever</em> sounds nicer: <em>you recommend him</em>.</p></div>
          <div class="note exam"><p>Mastery item 22, "Whoever has the keys gets to be in the driver's seat", is already correct: <em>He has the keys</em>.</p></div>
        ` },
        { title: 'Who, that and which', html: `
          <p class="lead"><b>Who</b> is for people. <b>That</b> and <b>which</b> are for groups and things. Then choose between <em>that</em> and <em>which</em> by asking whether the clause is essential.</p>
          <div class="vs">
            <div class="side"><h4>Right</h4><p>Anya is the one <b>who</b> rescued the bird.</p><p>Lokua is on the team <b>that</b> won first place.</p><p>She belongs to an organisation <b>that</b> specialises in saving endangered species.</p></div>
            <div class="side"><h4>Wrong</h4><p>I work with people <b>that</b> judge others by their accents.</p><p>Right: people <b>who</b> judge others.</p></div>
          </div>
          <h3>Essential or nonessential</h3>
          <table class="tbl">
            <thead><tr><th></th><th>Essential clause</th><th>Nonessential clause</th></tr></thead>
            <tbody>
              <tr><td>Word</td><td><b>that</b></td><td><b>which</b></td></tr>
              <tr><td>Commas</td><td>none</td><td>commas on both sides</td></tr>
              <tr><td>Job</td><td>tells you <em>which one</em></td><td>adds extra information about something already identified</td></tr>
              <tr><td>Example</td><td>I do not trust editorials <b>that</b> claim racial differences in intelligence.</td><td>The editorial claiming racial differences in intelligence<b>, which</b> appeared in the Sunday newspaper<b>,</b> upset me.</td></tr>
            </tbody>
          </table>
          <p>In the first, you would not know <em>which</em> editorials without the clause. In the second the editorial is already identified, so the clause only adds a detail.</p>
          <h3>After this, that, these, those</h3>
          <p>If one of these words has already introduced an essential clause, you may use <b>which</b> to start the next clause, essential or not: "That is a decision <b>which</b> you must live with for the rest of your life." Often you can simply drop <em>which</em>: "That is a decision you must live with."</p>
          <div class="note exam"><p>Pretest 24 ("people that judge") becomes "people <b>who</b> judge". Pretest 33 ("That SUV, that landed on its hood...") becomes "That SUV, <b>which</b> landed...". Mastery 25 is the same fix.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Which pronouns are subject pronouns?`, back: `<b>I, you, he, she, it, we, they</b>.` },
        { front: `Which pronouns are object pronouns?`, back: `<b>me, you, him, her, it, us, them</b>.` },
        { front: `Which pronoun follows a be verb in formal writing?`, back: `The <b>subject</b> pronoun: It is <b>he</b>. This is <b>she</b> speaking.` },
        { front: `Tranh is as smart as she / her?`, back: `<b>she</b>: "as she is". Complete the sentence in your head.` },
        { front: `When does it's take an apostrophe?`, back: `Only as a contraction of <b>it is</b> or <b>it has</b>. The possessive is <b>its</b>.` },
        { front: `When are myself, himself and the other self words correct?`, back: `Only when they <b>refer back</b> to a word in the same sentence: I did it <b>myself</b>.` },
        { front: `Who or whom?`, back: `<b>he = who</b>, <b>him = whom</b>. Test only the clause that holds the word.` },
        { front: `Whoever or whomever?`, back: `<b>him + he = whoever</b>, <b>him + him = whomever</b>. If the whole clause is the subject, look inside it.` },
        { front: `That or which?`, back: `<b>that</b> = essential, no commas. <b>which</b> = nonessential, in commas. <b>who</b> for people.` },
      ],
      oneLiners: [
        'Subject pronouns: <b>I, you, he, she, it, we, they</b>. Object: <b>me, you, him, her, it, us, them</b>.',
        'After a be verb, formal writing uses the <b>subject</b> pronoun: it is <b>he</b>.',
        'After <b>than</b> and <b>as</b>, finish the sentence mentally: taller than I <b>am</b>.',
        'Possessive pronouns <b>never</b> take an apostrophe; <b>it\'s</b> only means it is or it has.',
        'A self pronoun must <b>refer back</b>: "between you and <b>me</b>", never "between you and myself".',
        '<b>he = who</b>, <b>him = whom</b>; <b>him + he = whoever</b>, <b>him + him = whomever</b>.',
        '<b>Who</b> for people, <b>that</b> for essential clauses, <b>which</b> (with commas) for nonessential ones.',
      ],
      formulas: [
        { name: 'Who or whom', html: `Answer with <b>he</b> or <b>him</b>. he = <b>who</b>, him = <b>whom</b>. Test only the clause that holds the word.`, note: 'For who/whom should I vote? Vote for him: whom.' },
        { name: 'Whoever or whomever', html: `<b>him + he = whoever</b> · <b>him + him = whomever</b>`, note: 'We will hire whomever you recommend: hire him, you recommend him.' },
        { name: 'That or which', html: `<b>that</b> (no commas) for essential clauses · <b>, which ,</b> for extra information · <b>who</b> for people`, note: 'The pump, which was installed in May, failed. A pump that leaks must be replaced.' },
      ],
    },
    // ------------------------------------------------------------------ adjectives, adverbs, prepositions
    {
      id: 'm2-modifiers',
      title: 'Adjectives, adverbs and prepositions',
      short: 'Adjectives and adverbs',
      blurb: 'The -ly rule, the sense-verb rule, good and well, comparing (-er, -est, more, most), this/that/these/those, than and then, and the six preposition rules (extra prepositions, on, of/have, between/among, in/into, like/as).',
      source: 'Module 2 Grammar / The Blue Book for Grammar and Punctuation - Helpful resource.pdf, Grammar chapter (Adjectives and Adverbs, Problems with Prepositions)',
      tabs: [
        { title: 'Adjective or adverb', html: `
          <p class="lead">An <b>adjective</b> describes a noun or pronoun. An <b>adverb</b> describes a verb, an adjective or another adverb. The test: if the word answers <b>how</b>, it is an adverb, and you normally add <b>-ly</b>.</p>
          <div class="kv"><div><span>Adjective</span><b>That is a cute puppy. / That puppy is cute.</b></div><div><span>Adverb</span><b>He speaks slowly. / He speaks very slowly.</b></div></div>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>Ask</th><th>Answer</th></tr></thead>
            <tbody>
              <tr><td>She thinks slow/slowly.</td><td>Thinks how?</td><td><b>slowly</b></td></tr>
              <tr><td>She is a slow/slowly thinker.</td><td>Describes the noun thinker, not how</td><td><b>slow</b> (adjective)</td></tr>
              <tr><td>She thinks fast/fastly.</td><td>How? But fast never takes -ly</td><td><b>fast</b></td></tr>
              <tr><td>We performed bad/badly.</td><td>Performed how?</td><td><b>badly</b></td></tr>
            </tbody>
          </table>
          <div class="note why"><p>The Blue Book says the only adverbs that cause trouble are the ones answering <em>how</em>. Words answering <em>when</em> or <em>where</em> (later, here) rarely go wrong, so check the <em>how</em> words.</p></div>
          <div class="note exam"><p>Pretest items 1, 18, 21 and 29 are all this rule. "How quick he runs" becomes "How <b>quickly</b> he runs". "He and she were real close friends" becomes "<b>really</b> close" (or "very close"), because <em>real</em> cannot describe the adjective <em>close</em>.</p></div>
        ` },
        { title: 'Sense verbs and good or well', html: `
          <p class="lead">With the four senses <b>taste, smell, look, feel</b>, do not ask "how". Ask whether the verb is being used <b>actively</b>, as if the subject were doing the sensing with nose, eyes or fingers. If yes, add -ly. If you are only describing a state or appearance, no -ly.</p>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>Active sensing?</th><th>Answer</th></tr></thead>
            <tbody>
              <tr><td>Roses smell sweet/sweetly.</td><td>No, roses do not sniff</td><td><b>sweet</b></td></tr>
              <tr><td>The woman looked angry/angrily. (describes her appearance)</td><td>No</td><td><b>angry</b></td></tr>
              <tr><td>The woman looked angry/angrily at the paint splotches.</td><td>Yes, she looked with her eyes</td><td><b>angrily</b></td></tr>
              <tr><td>She feels bad/badly about the news.</td><td>No, not feeling with fingers</td><td><b>bad</b></td></tr>
            </tbody>
          </table>
          <h3>Good and well</h3>
          <p><b>Good</b> is an adjective. <b>Well</b> is an adverb. For <b>health</b>, use <b>well</b>.</p>
          <div class="vs">
            <div class="side"><h4>Right</h4><p>You did a <b>good</b> job. (describes the job)</p><p>You did the job <b>well</b>. (how)</p><p>You smell <b>good</b> today. (your odour)</p><p>You smell <b>well</b> for someone with a cold. (you are using your nose)</p><p>I do not feel <b>well</b>. (health)</p></div>
            <div class="side"><h4>Wrong</h4><p>May did good on the test.</p><p>When you do a job so good...</p><p>Right: did <b>well</b>, do a job so <b>well</b>.</p></div>
          </div>
          <div class="note heads-up"><p>You may use <em>good</em> with <em>feel</em> when you are not talking about health: "I feel <b>good</b> about my decision to learn Spanish." Pretest 26 ("You look well in that running outfit") becomes "You look <b>good</b>": it describes appearance, not health.</p></div>
        ` },
        { title: 'Comparing things', html: `
          <p class="lead">One thing takes the plain form. <b>Two</b> things take <b>-er</b> or <b>more</b>. <b>Three or more</b> take <b>-est</b> or <b>most</b>.</p>
          <table class="tbl">
            <thead><tr><th>One</th><th>Two</th><th>Three or more</th></tr></thead>
            <tbody>
              <tr><td>sweet</td><td>sweeter</td><td>sweetest</td></tr>
              <tr><td>bad</td><td>worse</td><td>worst</td></tr>
              <tr><td>efficient</td><td>more efficient</td><td>most efficient</td></tr>
              <tr><td>poor</td><td>poorer</td><td>poorest</td></tr>
            </tbody>
          </table>
          <p>"She is the <b>poorer</b> of the two women." "She is the <b>poorest</b> of them all." Words of three or more syllables usually use <em>more</em> and <em>most</em> instead of -er and -est.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Terrell is the smartest of the two.</p><p>Jake is the oldest of the two brothers.</p><p>We took home the cutest one (of two puppies).</p><p>Our puppy is more sweeter than her brother.</p></div>
            <div class="side"><h4>Right</h4><p>Terrell is the <b>smarter</b> of the two.</p><p>Jake is the <b>older</b> of the two brothers.</p><p>...the <b>cuter</b> one.</p><p>Our puppy is <b>sweeter</b> than her brother.</p></div>
          </div>
          <h3>Never drop the -ly</h3>
          <p>An adverb keeps its <b>-ly</b> in the comparison form: "She spoke <b>more quickly</b> than he did", not "quicker". "Talk <b>more quietly</b>", not "quieter". So "Joan walks slower" becomes "walks <b>slowly</b>" or "<b>more slowly</b>", and "Speak slower please" becomes "Speak <b>more slowly</b>".</p>
          <div class="note trap"><p>Mastery item 30, "more sweeter", has two comparison endings stacked. Use one only.</p></div>
        ` },
        { title: 'This, that, than, then', html: `
          <p class="lead"><b>This, that, these, those</b> are <b>adjectives</b> when a noun follows and <b>pronouns</b> when they stand alone. Singular or plural never changes between the two jobs.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Near</th><th>Over there</th></tr></thead>
            <tbody>
              <tr><td><b>Singular</b></td><td>this</td><td>that</td></tr>
              <tr><td><b>Plural</b></td><td>these</td><td>those</td></tr>
            </tbody>
          </table>
          <ul>
            <li>This <b>house</b> is for sale. (adjective: a noun follows)</li>
            <li>This is for sale. (pronoun: stands alone)</li>
            <li>This dog is mine. That dog is hers. These babies have been smiling for a long time. Those babies have been crying for hours.</li>
          </ul>
          <h3>Than and then</h3>
          <div class="kv"><div><span>than</span><b>shows comparison: I would rather go skiing than rock climbing.</b></div><div><span>then</span><b>answers when: First we went skiing; then we went rock climbing.</b></div></div>
          <p>Pretest item 39, "taller then the oak tree", is corrected to "taller <b>than</b>".</p>
        ` },
        { title: 'Prepositions: the first three rules', html: `
          <p class="lead">Three rules. You may end a sentence with a preposition, but <b>drop extra prepositions</b>. Use <b>on</b> for dates. Never write <b>of</b> for <b>have</b>.</p>
          <h3>Rule 1: ending with a preposition, and extras</h3>
          <p>"That is something I cannot agree with" is acceptable. The problem is a preposition that adds nothing.</p>
          <table class="tbl">
            <thead><tr><th>Correct</th><th>Incorrect</th></tr></thead>
            <tbody>
              <tr><td>Where did he go?</td><td>Where did he go <b>to</b>?</td></tr>
              <tr><td>Where did you get this?</td><td>Where did you get this <b>at</b>?</td></tr>
              <tr><td>I will go later.</td><td>I will go later <b>on</b>.</td></tr>
              <tr><td>Take your shoes off the bed.</td><td>Take your shoes off <b>of</b> the bed.</td></tr>
              <tr><td>You may look out the window.</td><td>You may look out <b>of</b> the window.</td></tr>
              <tr><td>Cut it into small pieces.</td><td>Cut it <b>up</b> into small pieces.</td></tr>
            </tbody>
          </table>
          <p>Also correct: "How many of you can I count on?" and, more formally, "something with which I cannot agree".</p>
          <h3>Rule 2: on with dates</h3>
          <p>Use <b>on</b> for the time of an occurrence: He was born <b>on</b> December 23. We will arrive <b>on</b> the fourth.</p>
          <h3>Rule 3: of is never have</h3>
          <p>I should <b>have</b> done it, not "should of". The same applies to could have and would have (pretest 43, mastery 32 and 47).</p>
          <div class="note exam"><p>Pretest 13: "took the plate off of the table" becomes "off the table". Pretest 30: "later on" becomes "later".</p></div>
        ` },
        { title: 'Prepositions: between, in, like', html: `
          <p class="lead">Rules 4 to 6 are three pairs: <b>between / among</b>, <b>in / into</b>, <b>like / as</b>.</p>
          <h3>Rule 4: between and among</h3>
          <p><b>Between</b> refers to two. <b>Among</b> is for three or more.</p>
          <div class="chips"><span class="chip">Divide the candy between the two of you.</span><span class="chip">Divide the candy among the three of you.</span></div>
          <p>Pretest 37 ("decide among a minivan and a station wagon") becomes "<b>between</b>". Mastery 31 ("between them" for triplets) becomes "<b>among</b>", and mastery 45 ("between five cleanup plans") becomes "<b>among</b>".</p>
          <h3>Rule 5: in and into</h3>
          <p><b>Into</b> implies entrance; <b>in</b> does not.</p>
          <ul>
            <li>Sofia walked <b>into</b> the house.</li>
            <li>Sofia was waiting <b>in</b> the house.</li>
            <li>Miriam came <b>in</b> to see me today. (<em>in</em> belongs to the verb phrase "came in"; <em>to</em> belongs to "to see")</li>
          </ul>
          <h3>Rule 6: like and as</h3>
          <p><b>Like</b> used for comparison is a <b>preposition</b>, so an object follows it (a noun or pronoun, no subject and verb). When a subject and verb follow, use the connectors <b>as</b> or <b>as if</b>.</p>
          <div class="vs">
            <div class="side"><h4>Right</h4><p>You look so much <b>like</b> your mother.</p><p>You look <b>as if</b> you are angry.</p></div>
            <div class="side"><h4>Wrong</h4><p>You look like you are angry.</p></div>
          </div>
          <div class="note heads-up"><p>"Like you are angry" is common in speech. The Blue Book rule is the formal one, and it is the one an error-detection item would use.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Test for adjective or adverb?`, back: `If the word answers <b>how</b>, it is an adverb: add <b>-ly</b> (fast never takes it).` },
        { front: `Roses smell sweet or sweetly?`, back: `<b>sweet</b>: describing, not actively sniffing. Active sense verb gets <b>-ly</b>.` },
        { front: `Good or well after "did the job"?`, back: `<b>well</b> (adverb). Health also takes <b>well</b>: I do not feel well.` },
        { front: `How do you compare two things? Three or more?`, back: `Two: <b>-er / more</b> (the older of the two). Three or more: <b>-est / most</b>.` },
        { front: `Quicker or more quickly?`, back: `<b>more quickly</b>. Never drop the -ly in the comparison.` },
        { front: `Than or then?`, back: `<b>than</b> = comparison; <b>then</b> = when.` },
        { front: `Between or among?`, back: `<b>between</b> two, <b>among</b> three or more.` },
        { front: `In or into?`, back: `<b>into</b> implies entering; <b>in</b> does not.` },
        { front: `Like or as if before a subject and verb?`, back: `<b>as if</b> (or as). <b>Like</b> takes only an object.` },
        { front: `Should of?`, back: `Never. Write <b>should have</b>.` },
      ],
      oneLiners: [
        'If a word answers <b>how</b>, it is an adverb: add <b>-ly</b> (but <b>fast</b> stays fast).',
        'Sense verbs (taste, smell, look, feel): <b>-ly only if actively sensing</b>; she feels <b>bad</b>.',
        '<b>Good</b> is an adjective, <b>well</b> an adverb; health takes <b>well</b>.',
        'Two things: <b>-er</b>; three or more: <b>-est</b>; and keep the <b>-ly</b> (more quickly).',
        'Drop extra prepositions: off the bed, later, where did he go.',
        '<b>Between</b> two, <b>among</b> three or more; <b>into</b> = entering.',
        '<b>Like</b> + object, <b>as if</b> + subject and verb; <b>of</b> never replaces <b>have</b>.',
      ],
      formulas: [
        { name: 'The -ly rule', html: `Answers <b>how</b>? Add <b>-ly</b>. Sense verb? Ask whether it senses <b>actively</b>.`, note: 'She thinks slowly. Roses smell sweet. She looked angrily at the splotches.' },
        { name: 'Comparison forms', html: `<b>Two</b>: -er or more · <b>three or more</b>: -est or most · adverbs keep <b>-ly</b>`, note: 'the older of the two; the oldest of the three; more quickly.' },
        { name: 'Preposition pairs', html: `<b>between</b> (2) / <b>among</b> (3+) · <b>in</b> / <b>into</b> (entering) · <b>like</b> + noun / <b>as if</b> + clause`, note: 'should have, never should of.' },
      ],
    },
    // ------------------------------------------------------------------ effective writing
    {
      id: 'm2-effective-writing',
      title: 'Effective writing: eight rules',
      short: 'Effective writing rules',
      blurb: 'The Blue Book\'s eight effective-writing rules: concrete language, active voice, avoiding there is / it is, double negatives, parallel form, dangling and misplaced modifiers, and sentence fragments, with technical-writing examples.',
      source: 'Module 2 Grammar / The Blue Book for Grammar and Punctuation - Helpful resource.pdf, Grammar chapter (Effective Writing, rules 1-8)',
      tabs: [
        { title: 'Concrete and active', html: `
          <p class="lead">Effective sentences are <b>specific</b> and let the reader see <b>who did what</b>. The first two rules do most of the work.</p>
          <h3>Rule 1: concrete, not vague</h3>
          <div class="vs">
            <div class="side"><h4>Vague</h4><p>The weather was of an extreme nature on the west coast.</p></div>
            <div class="side"><h4>Concrete</h4><p>California had very cold weather last week.</p></div>
          </div>
          <p>The vague version uses a bulky phrase (<em>of an extreme nature</em>) and names no place and no time. The concrete one names all three.</p>
          <h3>Rule 2: active voice whenever possible</h3>
          <div class="vs">
            <div class="side"><h4>Active</h4><p>Barry hit the ball.</p></div>
            <div class="side"><h4>Passive</h4><p>The ball was hit.</p></div>
          </div>
          <p>In the active voice the subject performs the verb. Notice that with the passive, <b>the responsible party may not even appear</b>. That is useful when the doer does not matter, and a problem when it does.</p>
          <div class="note heads-up"><p>The voice topics in this module (<b>Active and passive voice</b>) cover forming and converting the passive. This rule is the Blue Book's advice on <em>when</em> to prefer the active. In lab methods the passive is still normal.</p></div>
          <div class="note example"><p>Quiz 1 item 5: "The boy was struck in the face by the pie as it flew from the girl's hand" is repaired in the book as "The girl threw the pie and it hit the boy's face." The doer is back in front.</p></div>
        ` },
        { title: 'There is, it is, double negatives', html: `
          <p class="lead">Rule 3: do not overuse <b>there is, there are, it is, it was</b>. They push the real subject and verb later in the sentence. Rule 4: do not use <b>two negatives to make a positive</b>.</p>
          <h3>Rule 3: strip the empty opener</h3>
          <table class="tbl">
            <thead><tr><th>Clumsy</th><th>Better</th><th>Best</th></tr></thead>
            <tbody>
              <tr><td>There is a case of meningitis that was reported in the newspaper.</td><td>A case of meningitis was reported in the newspaper.</td><td>The newspaper reported a case of meningitis. (active)</td></tr>
              <tr><td>It is important to signal before making a left turn.</td><td>Signaling before a left turn is important.</td><td>You should signal before making a left turn. (active)</td></tr>
              <tr><td>There are some revisions which must be made.</td><td>Some revisions must be made.</td><td>Please make some revisions. (active)</td></tr>
            </tbody>
          </table>
          <p>The book gives three levels: clumsy, <b>correction</b>, <b>even better</b>. Marks usually go for the correction, and the "even better" shows full control.</p>
          <h3>Rule 4: double negatives</h3>
          <div class="vs">
            <div class="side"><h4>Incorrect</h4><p>He is not unwilling to help.</p></div>
            <div class="side"><h4>Correct</h4><p>He is willing to help.</p></div>
          </div>
          <p>Two negatives cancel and leave the reader decoding. Say the positive directly.</p>
          <div class="note exam"><p>Quiz 1 item 6, "It was not likely that no one would want to claim ownership of the new sports car", becomes "Someone will most likely want to claim ownership of the new sports car." Quiz 2 item 2 ("did not provide inadequate counseling") becomes "provided <b>adequate</b> counseling".</p></div>
          <div class="note heads-up"><p>Not on the slides: <em>there is</em> is not wrong. Rule 3 says avoid <b>overusing</b> it. "There are four hurdles to jump" (from the concord topic) is a normal sentence. Cut it when a stronger subject is waiting.</p></div>
        ` },
        { title: 'Parallel form', html: `
          <p class="lead">Rule 5: when you list several ideas, give them the <b>same grammatical form</b>. This is <b>parallel construction</b>.</p>
          <div class="vs">
            <div class="side"><h4>Correct</h4><p>You should check your spelling, grammar, and <b>punctuation</b>.</p></div>
            <div class="side"><h4>Incorrect</h4><p>You should check your spelling, grammar, and <b>punctuating</b>.</p></div>
          </div>
          <p>The first two items are nouns, so the third must be a noun. Say the list items one after another, without the sentence around them: if one sounds different, fix it.</p>
          <table class="tbl">
            <thead><tr><th>Not parallel</th><th>Parallel</th><th>What was matched</th></tr></thead>
            <tbody>
              <tr><td>Speaking and to listen well...</td><td>Speaking and <b>listening</b> well...</td><td>-ing with -ing</td></tr>
              <tr><td>To win is the obvious goal, but playing fair is important too.</td><td><b>Winning</b> is the obvious goal, but playing fair is important too.</td><td>-ing with -ing (or to win / to play)</td></tr>
              <tr><td>assault, robbery, and forging checks</td><td>assault, robbery, and <b>check forgery</b></td><td>noun, noun, noun</td></tr>
              <tr><td>his generosity and that he was considerate</td><td>his generosity and <b>consideration</b></td><td>noun with noun</td></tr>
              <tr><td>worked quickly and in an efficient manner</td><td>worked quickly and <b>efficiently</b></td><td>adverb with adverb</td></tr>
              <tr><td>could not find time to work, shop, and go for walks with the dogs</td><td>work, shop, and <b>walk the dogs</b></td><td>verb, verb, verb</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>All of these rows are items from the Blue Book effective-writing quizzes. Parallel form also makes your sentences shorter, which is why it turns up under "effective".</p></div>
          <div class="note heads-up"><p>Not on the slides: parallelism also applies to bullet lists in reports and to the clauses on either side of <em>both ... and</em> and <em>either ... or</em>. Make what follows each half match.</p></div>
        ` },
        { title: 'Dangling modifiers', html: `
          <p class="lead">Rule 6: if a sentence <b>starts with an action</b>, the person or thing doing it must come <b>immediately after</b> the comma. If something else follows, you have a <b>dangling modifier</b>.</p>
          <div class="worked">
            <div class="given"><p>While walking across the street, the bus hit her.</p></div>
            <div class="solve"><p>Who was walking? The sentence says the bus was. Name the walker straight after the comma, or move the action to the end.</p></div>
            <div class="result"><p>While walking across the street, <b>she</b> was hit by a bus. OR She was hit by a bus while walking across the street.</p></div>
          </div>
          <h3>Fixing a dangling opener, step by step</h3>
          <ol class="steps">
            <li><b>Ask who</b> does the action in the opening phrase.</li>
            <li><b>Check the next word</b> after the comma. Is it that doer?</li>
            <li><b>Rewrite</b> either by making the doer the subject, or by turning the opening phrase into a full clause with its own subject.</li>
          </ol>
          <table class="tbl">
            <thead><tr><th>Dangling</th><th>Fixed (the book's key)</th></tr></thead>
            <tbody>
              <tr><td>While singing in the shower, the bar of soap slipped from her hands.</td><td>The bar of soap slipped from her hands while she sang in the shower.</td></tr>
              <tr><td>Looking back, the dog was following us.</td><td>When we looked back, we saw the dog following us.</td></tr>
              <tr><td>Lying on a stretcher, they carried him out.</td><td>He was carried out on a stretcher.</td></tr>
              <tr><td>Flying out the window, he grabbed the papers.</td><td>He grabbed the papers as they were flying out the window.</td></tr>
              <tr><td>Stepping off the bus, the shopping center was just ahead.</td><td>As I stepped off the bus, I saw the shopping center just ahead.</td></tr>
              <tr><td>While asleep, the flea bit the dog.</td><td>The flea bit the sleeping dog.</td></tr>
              <tr><td>Although very spicy, Dana managed to finish the enchilada.</td><td>Dana managed to finish the enchilada although it was very spicy.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: this shows up in lab reports. "After heating for ten minutes, the colour changed" says the colour was heating. Write "After the solution was heated for ten minutes, the colour changed."</p></div>
        ` },
        { title: 'Misplaced modifiers and fragments', html: `
          <p class="lead">Rule 7: place a modifier <b>next to the word it modifies</b>. Rule 8: a sentence needs a <b>strong clause</b>; a phrase or weak clause alone is a <b>fragment</b>.</p>
          <h3>Rule 7: misplaced modifiers</h3>
          <div class="vs">
            <div class="side"><h4>Incorrect</h4><p>I have some pound cake Mollie baked in my lunch bag.</p></div>
            <div class="side"><h4>Correct</h4><p><b>In my lunch bag</b>, I have some pound cake that Mollie baked.</p></div>
          </div>
          <p>As written, Mollie baked the cake inside the lunch bag. The phrase has to sit beside what it describes.</p>
          <table class="tbl">
            <thead><tr><th>Misplaced</th><th>Fixed (the book's key)</th></tr></thead>
            <tbody>
              <tr><td>I have some letters the mail carrier delivered in my purse.</td><td>The mail carrier delivered some letters that I have in my purse.</td></tr>
              <tr><td>We have tuna casserole I made in the refrigerator.</td><td>In the refrigerator, we have tuna casserole that I made.</td></tr>
              <tr><td>Mollie came over while I was playing the piano with a piece of pound cake.</td><td>While I was playing the piano, Mollie came over with a piece of pound cake.</td></tr>
              <tr><td>I tried calling to tell you about that TV show five times.</td><td>I called five times to tell you about that TV show.</td></tr>
              <tr><td>When working with power tools, eyes should be protected.</td><td>When working with power tools, protect your eyes.</td></tr>
              <tr><td>When changing a diaper, a baby should be on his or her back.</td><td>When changing a diaper, lay a baby down on his or her back.</td></tr>
            </tbody>
          </table>
          <p>The last two are really dangling openers: the person changing or working has gone missing, so the book rewrites them as commands.</p>
          <h3>Rule 8: fragments</h3>
          <div class="vs">
            <div class="side"><h4>Fragment</h4><p>After the show ended.</p></div>
            <div class="side"><h4>Sentence</h4><p>After the show ended, <b>we had coffee</b>.</p></div>
          </div>
          <p><em>After the show ended</em> is a weak clause (it starts with <em>after</em>), so it needs a strong clause to lean on. See the pronoun topic for strong and weak clauses.</p>
        ` },
      ],
      flashcards: [
        { front: `Vague to concrete: "The weather was of an extreme nature on the west coast."`, back: `<b>California had very cold weather last week.</b> Name the place, the time and the fact.` },
        { front: `Why does the Blue Book prefer active voice?`, back: `The subject performs the verb, and the <b>responsible party can appear</b>.` },
        { front: `"There is a case of meningitis that was reported in the newspaper." Best fix?`, back: `<b>The newspaper reported a case of meningitis.</b>` },
        { front: `Fix the double negative: "He is not unwilling to help."`, back: `<b>He is willing to help.</b>` },
        { front: `What is parallel construction?`, back: `Items in a list share the <b>same grammatical form</b>: spelling, grammar, and punctuation.` },
        { front: `What is a dangling modifier?`, back: `An opening action whose <b>doer is not the next subject</b>: "While walking across the street, the bus hit her."` },
        { front: `Where does a modifier go?`, back: `<b>Next to the word it modifies.</b>` },
        { front: `What makes "After the show ended." a fragment?`, back: `It is a <b>weak clause</b> with no strong clause attached.` },
      ],
      oneLiners: [
        'Rule 1: <b>concrete</b> beats vague: name the place, the time and the fact.',
        'Rule 2: prefer the <b>active voice</b>; the passive can hide who is responsible.',
        'Rule 3: do not overuse <b>there is, there are, it is, it was</b>: put the real subject first.',
        'Rule 4: <b>no double negatives</b>: "not unwilling" becomes "willing".',
        'Rule 5: list items must be <b>parallel</b> (same grammatical form).',
        'Rule 6: an opening action must be followed at once by its <b>doer</b>, or it dangles.',
        'Rule 7: put modifiers <b>beside the words they modify</b>; Rule 8: fix <b>fragments</b> by adding a strong clause.',
      ],
      formulas: [
        { name: 'Clear sentence check', html: `<b>Who</b> is the subject? Is the <b>verb</b> active? Is the opener a <b>doer</b>? Are list items <b>parallel</b>? Is every modifier <b>beside</b> its word?`, note: 'Run it on every error-detection sentence.' },
        { name: 'Dangling opener', html: `<b>Opening action, + doer</b> straight after the comma`, note: 'While walking across the street, she was hit by a bus.' },
      ],
    },
    // ------------------------------------------------------------------ confusing words
    {
      id: 'm2-confusing-words',
      title: 'Confusing words and homonyms',
      short: 'Confusing words',
      blurb: 'The word pairs the Blue Book tests most: affect/effect, lay/lie, advice/advise, accept/except, its/it\'s, their/there/they\'re, fewer/less, farther/further, imply/infer, continual/continuous, assure/ensure/insure, and the rest of the look-alike list worth knowing for error detection.',
      source: 'Module 2 Grammar / The Blue Book for Grammar and Punctuation - Helpful resource.pdf, Chapter 2 (Confusing Words and Homonyms), selected entries; the full alphabetical list stays in the book',
      tabs: [
        { title: 'Affect and effect', html: `
          <p class="lead">Mostly: <b>affect</b> is a verb meaning to <b>influence</b>, <b>effect</b> is a noun meaning <b>result</b>. The Blue Book gives five rules, including the rare uses.</p>
          <table class="tbl">
            <thead><tr><th>Rule</th><th>Word</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>1. to bring about, cause</td><td><b>effect</b> (verb)</td><td>He effected a commotion in the crowd. (= caused)</td></tr>
              <tr><td>2. a result</td><td><b>effect</b> (noun)</td><td>What effect did that speech have?</td></tr>
              <tr><td>3. after a, an, the, any, take, into, no (an adjective may sit between)</td><td><b>effect</b></td><td>That book had a long-lasting effect on my thinking. Has the medicine produced any noticeable effects?</td></tr>
              <tr><td>4. to influence rather than cause</td><td><b>affect</b> (verb)</td><td>How do the budget cuts affect your staffing?</td></tr>
              <tr><td>5. emotional expression (noun)</td><td><b>affect</b></td><td>She showed little affect when told she had won the lottery.</td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>How will you be effected financially if the effect of downsizing means you will lose your job?</p></div>
            <div class="solve"><p>"Be ___ financially" means <em>be influenced</em>: rule 4, <b>affected</b>. "The ___ of downsizing" follows <em>the</em>: rule 3, <b>effect</b>, which is already right.</p></div>
            <div class="result"><p>How will you be <b>affected</b> financially if the <b>effect</b> of downsizing means you will lose your job? (pretest 17)</p></div>
          </div>
          <div class="note exam"><p>Pretest 31: "Pollen effects my sinuses" becomes "Pollen <b>affects</b> my sinuses" (influence). Mastery 33, "the effects of our generosity", is already correct: the noun follows <em>the</em>.</p></div>
          <div class="note trap"><p>Rule 1 is the one students miss: <em>effect</em> as a verb means <b>cause</b> ("effect a change"). If you can swap in <em>cause</em> or <em>bring about</em>, use <em>effect</em>.</p></div>
        ` },
        { title: 'Lay and lie', html: `
          <p class="lead"><b>Lay</b> means to put or place something, and it needs an <b>object</b>. <b>Lie</b> means to recline, and has no object. A third verb, <b>lie</b>, means to tell a falsehood. The confusion is that the past of <em>lie</em> (recline) is <b>lay</b>.</p>
          <table class="tbl">
            <thead><tr><th>Meaning</th><th>Present</th><th>-ing</th><th>Past</th><th>Past participle (has/have/had)</th></tr></thead>
            <tbody>
              <tr><td>to recline</td><td><b>lie</b></td><td>lying</td><td><b>lay</b></td><td><b>lain</b></td></tr>
              <tr><td>to put or place (takes an object)</td><td><b>lay</b></td><td>laying</td><td><b>laid</b></td><td><b>laid</b></td></tr>
              <tr><td>to tell a falsehood</td><td><b>lie</b></td><td>lying</td><td><b>lied</b></td><td><b>lied</b></td></tr>
            </tbody>
          </table>
          <h3>The book's examples</h3>
          <ul>
            <li>Present: I like to <b>lie</b> down for a nap at 2:00 P.M. The hens <b>lay</b> eggs. I am tempted to <b>lie</b> about my age.</li>
            <li>Past: I <b>lay</b> down for a nap yesterday at 2:00 P.M. The hen <b>laid</b> two eggs yesterday. He <b>lied</b> on the witness stand.</li>
          </ul>
          <div class="worked">
            <div class="given"><p>I want to lay down for a nap, but the phone keeps ringing.</p></div>
            <div class="solve"><p>Is there an object being placed? No, the speaker reclines, so it is <em>lie</em>.</p></div>
            <div class="result"><p>I want to <b>lie</b> down for a nap... (pretest 32)</p></div>
          </div>
          <div class="note exam"><p>Pretest 34: "Yesterday, Barry lay my jacket on the hood" becomes "<b>laid</b>": he placed a jacket, past tense. Mastery 34: "had lain my jacket" becomes "had <b>laid</b>", the participle of the placing verb. A related pair, <b>sit / set</b> (pretest 49: "sit this book down" becomes "<b>set</b>"), works the same way: <em>set</em> takes an object.</p></div>
        ` },
        { title: 'Advice, accept, its, their', html: `
          <p class="lead">These pairs are about <b>spelling that changes the part of speech or the meaning</b>. The tests in the book return to them again and again.</p>
          <table class="tbl">
            <thead><tr><th>Pair</th><th>Meaning and example</th></tr></thead>
            <tbody>
              <tr><td><b>advice</b> / <b>advise</b></td><td>advice is the noun (a recommendation); advise is the verb (to give it)</td></tr>
              <tr><td><b>accept</b> / <b>except</b></td><td>accept = to agree, receive; except = but, with the exception that. Company policy will not allow me to <b>accept</b> a gift (mastery 35).</td></tr>
              <tr><td><b>its</b> / <b>it's</b></td><td>its = possessive; it's = it is, it has</td></tr>
              <tr><td><b>their</b> / <b>there</b> / <b>they're</b></td><td>their = possessive; there = location; they're = they are. The judge did not believe any of <b>their</b> stories (mastery 43)</td></tr>
              <tr><td><b>your</b> / <b>you're</b></td><td>your = possessive; you're = you are. "Your the only one for me" becomes "<b>You're</b> the only one" (pretest 38)</td></tr>
              <tr><td><b>who's</b> / <b>whose</b></td><td>who's = who is (Who's at the door?); whose = possessive (Whose coat is this?)</td></tr>
              <tr><td><b>to</b> / <b>too</b> / <b>two</b></td><td>to = toward; too = also, or to an extensive degree; two = the number</td></tr>
              <tr><td><b>weather</b> / <b>whether</b></td><td>weather = the atmosphere; whether = if</td></tr>
              <tr><td><b>than</b> / <b>then</b></td><td>than compares; then answers when</td></tr>
              <tr><td><b>passed</b> / <b>past</b></td><td>passed = past tense of pass; past = time before the present. "has long since <b>passed</b>" (pretest 40)</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Contractions (<em>it's, they're, you're, who's</em>) always hide a verb. If the sentence still works with the full words, the apostrophe is right. If not, you wanted the possessive.</p></div>
          <div class="note heads-up"><p>Pretest 42: "Mother, can I go to the movies" becomes "<b>may</b> I". The Blue Book's list says <b>can</b> = able to, <b>may</b> = permission to.</p></div>
        ` },
        { title: 'Quantity and distance words', html: `
          <p class="lead">A group of pairs that depend on <b>whether you can count the thing</b> or whether the sense is physical or abstract.</p>
          <table class="tbl">
            <thead><tr><th>Pair</th><th>Rule</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>fewer</b> / <b>less</b></td><td>fewer: a number you can count; less: an amount you cannot count</td><td>fewer days off; less rain, less fear, less than $100. Marta completed five <b>fewer</b> problems (mastery 50)</td></tr>
              <tr><td><b>number</b> / <b>amount</b></td><td>number: countable; amount: not countable</td><td>The number of accidents increased. That amount of ill will.</td></tr>
              <tr><td><b>farther</b> / <b>further</b></td><td>farther: physical distance; further: nonphysical</td><td>We had to walk farther than the map indicated. We need to discuss this further. "How much further before we arrive in Santa Fe?" becomes "<b>farther</b>" (pretest 35); "think farther ahead than the next shot" becomes "<b>further</b>" (mastery 46)</td></tr>
              <tr><td><b>among</b> / <b>between</b></td><td>among: three or more; between: two</td><td>Who among us has not lied? She could not decide between Chinese and Thai food.</td></tr>
              <tr><td><b>continual</b> / <b>continuous</b></td><td>continual: repeated with breaks; continuous: without interruption</td><td>The continual problem of our car not starting. The continuous dripping of the faucet. Pretest 45 wants <b>continuous</b> flow of traffic.</td></tr>
              <tr><td><b>criterion</b> / <b>criteria</b></td><td>criterion: one standard; criteria: the plural</td><td>one criterion, two criteria</td></tr>
              <tr><td><b>a</b> / <b>an</b></td><td>use <b>an</b> before a vowel <em>sound</em>, <b>a</b> before a consonant sound (not letter)</td><td>a U-turn, a NASA study, an honor, an FBI case, an HMO plan, <b>an honorary</b> member (pretest 36), <b>an FBI</b> agent (mastery 44)</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>For <em>a</em> and <em>an</em>, listen, do not look. <b>An hour</b> (silent h), <b>a unit</b> (sounds like "yoo"), <b>an MBA</b> (sounds like "em"). For FAQ the book says <b>a FAQ</b> if you say "fak" and <b>an FAQ</b> if you say each letter.</p></div>
        ` },
        { title: 'Meaning pairs: A to I', html: `
          <p class="lead">Words that look or sound alike but mean different things. The book lists hundreds; these are the ones that matter most for technical and report writing.</p>
          <table class="tbl">
            <thead><tr><th>Words</th><th>Meanings</th></tr></thead>
            <tbody>
              <tr><td><b>adverse</b> / <b>averse</b></td><td>adverse: unfortunate, harmful (refers to things: an adverse reaction); averse: strongly opposed (refers to people)</td></tr>
              <tr><td><b>allude</b> / <b>elude</b> / <b>illude</b></td><td>allude: to refer indirectly; elude: to avoid capture; illude: to mislead</td></tr>
              <tr><td><b>allusion</b> / <b>illusion</b></td><td>an indirect mention / a false perception</td></tr>
              <tr><td><b>ambiguous</b> / <b>ambivalent</b></td><td>more than one meaning (a law) / mixed feelings (a person)</td></tr>
              <tr><td><b>amicable</b> / <b>amiable</b></td><td>friendly, of things (an amicable divorce) / friendly, of people</td></tr>
              <tr><td><b>anxious</b> / <b>eager</b></td><td>worried about something / excited about it</td></tr>
              <tr><td><b>assume</b> / <b>presume</b></td><td>assumption: an idea not based on evidence; presumption: an idea based on evidence (the book's wording)</td></tr>
              <tr><td><b>assure</b> / <b>ensure</b> / <b>insure</b></td><td>assure: to promise with confidence; ensure: to make sure something will or will not happen; insure: to issue an insurance policy</td></tr>
              <tr><td><b>because</b> / <b>since</b></td><td>because always shows cause and effect (I will go to the game because my daughter is on the team); since is for time or a loose relationship (Since I have some extra money, I will buy shoes; I have wanted to talk to you since yesterday)</td></tr>
              <tr><td><b>complement</b> / <b>compliment</b></td><td>to complete, go with / praise. Different specialties that <b>complement</b> one another; the boss <b>complimented</b> Ari</td></tr>
              <tr><td><b>connote</b> / <b>denote</b></td><td>suggest (a roaring fire connotes a cosy night) / be a sign of (certain clouds denote rain)</td></tr>
              <tr><td><b>desert</b> / <b>dessert</b></td><td>desert: a desolate area, or to abandon; dessert (two s): the sweet course</td></tr>
              <tr><td><b>different from</b></td><td>use <b>different from</b>, not different than. "Differently than" is allowed when a clause follows: He works differently than she does.</td></tr>
              <tr><td><b>discreet</b> / <b>discrete</b></td><td>careful, confidential / individual, distinct</td></tr>
              <tr><td><b>e.g.</b> / <b>i.e.</b></td><td>e.g. = for example; i.e. = that is, in other words</td></tr>
              <tr><td><b>elicit</b> / <b>illicit</b></td><td>to draw out / illegal</td></tr>
              <tr><td><b>emigrate</b> / <b>immigrate</b></td><td>to exit a country to live elsewhere / to enter a new country to live. Srdjian <b>emigrated</b> from Bosnia (pretest 44)</td></tr>
              <tr><td><b>imply</b> / <b>infer</b></td><td>to indicate without being explicit / to conclude from evidence</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Meaning pairs: I to W', html: `
          <p class="lead">The rest of the shortlist, plus the words from the pretest and mastery tests.</p>
          <table class="tbl">
            <thead><tr><th>Words</th><th>Meanings</th></tr></thead>
            <tbody>
              <tr><td><b>incredible</b> / <b>incredulous</b></td><td>astonishing / sceptical (citizens are incredulous about the price rise)</td></tr>
              <tr><td><b>ingenious</b> / <b>ingenuous</b></td><td>clever / naive or simple</td></tr>
              <tr><td><b>irregardless</b></td><td>no such word exists; write <b>regardless</b> (mastery 37)</td></tr>
              <tr><td><b>all ready</b> / <b>already</b></td><td>all ready = everyone is ready; already refers to time. My wife and I were <b>already</b> at the restaurant (mastery 36)</td></tr>
              <tr><td><b>all together</b> / <b>altogether</b></td><td>as a group / entirely</td></tr>
              <tr><td><b>altar</b> / <b>alter</b></td><td>a pedestal, usually religious / to modify</td></tr>
              <tr><td><b>any more</b> / <b>anymore</b></td><td>something additional / any longer, nowadays</td></tr>
              <tr><td><b>aural</b> / <b>oral</b></td><td>to do with hearing / to do with the mouth</td></tr>
              <tr><td><b>principal</b> / <b>principle</b></td><td>principal: head of school; chief; of first importance (the department's principal concern); principle: a fundamental belief</td></tr>
              <tr><td><b>stationary</b> / <b>stationery</b></td><td>in one place / writing paper</td></tr>
              <tr><td><b>capital</b> / <b>capitol</b></td><td>capital: assets, essential, main city; capitol: the statehouse. "capital building" becomes <b>capitol</b> building (pretest 50)</td></tr>
              <tr><td><b>plain</b> / <b>plane</b></td><td>"plain and simple" (pretest 48); a plane is a flat surface or an aircraft</td></tr>
              <tr><td><b>loose</b> / <b>lose</b></td><td>loose: not tight; lose: to fail to keep or win. "could loose the game" becomes <b>lose</b> (mastery 38)</td></tr>
              <tr><td><b>sight</b> / <b>site</b> / <b>cite</b></td><td>vision / a location / to quote or refer to a source</td></tr>
              <tr><td><b>patience</b> / <b>patients</b></td><td>willingness to wait / people under medical care</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: the Blue Book's text for <em>plain/plane</em>, <em>loose/lose</em> and <em>set/sit</em> is garbled in the text extract, so those meanings here come from standard usage. The mastery key answers are quoted exactly as given in the book.</p></div>
          <div class="note exam"><p>Technical writers also meet <b>discrete</b> (separate units of data), <b>principle</b> (a scientific principle), <b>criteria</b> (plural) and <b>complement</b> in everyday reports, so these four are worth learning first.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Affect or effect: "Pollen ___ my sinuses."`, back: `<b>affects</b>: the verb meaning to influence.` },
        { front: `When is effect a verb?`, back: `When it means <b>to cause</b>: "He effected a commotion."` },
        { front: `Lay or lie: "I want to ___ down for a nap."`, back: `<b>lie</b>. Lie reclines (lay, lain); lay places an object (laid, laid).` },
        { front: `Past tense of lie (recline) and lay (place)?`, back: `<b>lay</b> (recline) and <b>laid</b> (place). Participles: <b>lain</b> and <b>laid</b>.` },
        { front: `Fewer or less?`, back: `<b>fewer</b> for countable things; <b>less</b> for amounts you cannot count.` },
        { front: `Farther or further?`, back: `<b>farther</b> = physical distance; <b>further</b> = nonphysical.` },
        { front: `Continual or continuous?`, back: `<b>continual</b> = repeated, with breaks; <b>continuous</b> = without interruption.` },
        { front: `Imply or infer?`, back: `<b>imply</b> = hint without saying; <b>infer</b> = conclude from evidence.` },
        { front: `e.g. or i.e.?`, back: `<b>e.g.</b> = for example; <b>i.e.</b> = that is.` },
        { front: `Assure, ensure, insure?`, back: `<b>assure</b> a person; <b>ensure</b> a result; <b>insure</b> with a policy.` },
      ],
      oneLiners: [
        '<b>Affect</b> is usually the verb (influence); <b>effect</b> is usually the noun (result), and as a verb it means <b>cause</b>.',
        '<b>Lie</b> (recline): lay, lain. <b>Lay</b> (place): laid, laid. Lay needs an object.',
        '<b>Contractions hide verbs</b>: it\'s, they\'re, you\'re, who\'s. Possessives never take an apostrophe.',
        '<b>Fewer</b> for what you can count, <b>less</b> for what you cannot; <b>number</b> versus <b>amount</b> follows the same split.',
        '<b>Farther</b> is physical distance; <b>further</b> is anything else.',
        '<b>Because</b> shows cause; <b>since</b> shows time.',
        '<b>Different from</b>, never different than (except before a clause); <b>regardless</b>, never irregardless.',
      ],
      formulas: [
        { name: 'Affect or effect', html: `<b>affect</b> = influence (verb) · <b>effect</b> = result (noun, after a/the/any/no) · <b>effect</b> = cause (verb)`, note: 'Budget cuts affect staffing; the effect was a layoff; he effected a change.' },
        { name: 'Lie and lay', html: `<b>lie</b> → lay → lain (recline) · <b>lay</b> → laid → laid (place something) · <b>lie</b> → lied → lied (falsehood)`, note: 'I lay down yesterday. The hen laid two eggs.' },
        { name: 'Contraction test', html: `Say the <b>full words</b>. If it still works, keep the apostrophe; if not, use the possessive.`, note: 'You are the only one: you\'re. This is its paw: its.' },
      ],
    },
    // ------------------------------------------------------------------ linking words (syllabus topic, no Drive file)
    {
      id: 'm2-linking-words',
      title: 'Linking words and transitions: what each one does',
      short: 'Linking words',
      blurb: 'The syllabus topic "transitions and linking words", organised by the job each word does: adding, giving examples, contrast, cause and result, purpose and condition, time and sequence, and summing up.',
      source: 'Module 2 Grammar / syllabus topic "transitions and linking words" (no Drive file: written from standard usage, see the notes marked Not on the slides)',
      tabs: [
        { title: 'What linking words do', html: `
          <p class="lead"><b>Linking words</b> (also called <b>transitions</b> or <b>connectives</b>) show how one idea relates to the next: more of the same, a contrast, a reason, a result, a step in a sequence. Without them the reader has to guess the relationship.</p>
          <div class="note heads-up"><p>Not on the slides: the Drive folder for Module 2 has no file for this syllabus topic, so this topic and the next one are written from standard grammar usage. They match the way the course handles the other topics: one idea per tab, wrong and right pairs.</p></div>
          <h3>Why they matter</h3>
          <ul>
            <li>In an <b>error-detection</b> question, a wrong linker is an error even when the grammar is fine: "It was raining, <b>so</b> we stayed outside" breaks the logic.</li>
            <li>In <b>reports and emails</b> they make cause and result visible: "The pump failed. <b>As a result</b>, production stopped."</li>
            <li>In <b>instructions</b> they give the order: first, next, then, finally.</li>
          </ul>
          <figure data-fig="m2-linking-map"></figure>
          <div class="note why"><p>Learn each word by <b>its job</b>, not by a long list. If you know the job is contrast, you will pick <em>however</em> or <em>although</em> naturally and then only need to get the punctuation right (next topic).</p></div>
        ` },
        { title: 'Adding, example, emphasis', html: `
          <p class="lead">These words say "more of the same", "here is a case of it" or "this matters most".</p>
          <table class="tbl">
            <thead><tr><th>Job</th><th>Words and phrases</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Adding</b></td><td>and, also, too, as well as, in addition, in addition to, besides, plus, what is more</td><td>The battery is light. <b>In addition</b>, it charges in an hour.</td></tr>
              <tr><td><b>Similarity</b></td><td>likewise, similarly, equally, in the same way</td><td>Check the oil. <b>Likewise</b>, check the coolant.</td></tr>
              <tr><td><b>Pairs</b></td><td>both ... and, either ... or, neither ... nor</td><td><b>Both</b> the rate <b>and</b> the cost fell.</td></tr>
              <tr><td><b>Example</b></td><td>for example, for instance, such as, namely, in particular, to illustrate</td><td>Metals, <b>such as</b> copper, conduct heat well.</td></tr>
              <tr><td><b>Emphasis</b></td><td>indeed, in fact, above all, especially, clearly, of course</td><td>The method is cheap. <b>In fact</b>, it costs half as much.</td></tr>
            </tbody>
          </table>
          <h3>Small differences</h3>
          <ul>
            <li><b>As well as</b> and <b>in addition to</b> are followed by a noun or -ing form, not a full clause: "In addition to <b>testing</b> the sample, we recorded the mass."</li>
            <li><b>Namely</b> introduces the exact items: "Two factors matter, <b>namely</b> pressure and temperature."</li>
            <li><b>For example</b> and <b>such as</b> give samples; <b>namely</b> gives the whole list.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Both the rate or the cost fell.</p><p>I like, for example, copper, and steel, and brass.</p></div>
            <div class="side"><h4>Right</h4><p>Both the rate <b>and</b> the cost fell.</p><p>I like metals, <b>for example</b> copper, steel and brass.</p></div>
          </div>
          <div class="note trap"><p><em>Both</em> pairs with <em>and</em>, <em>either</em> with <em>or</em>, <em>neither</em> with <em>nor</em>. Mixing them is a common error-detection item. Also keep the two halves parallel, as in the effective-writing topic.</p></div>
        ` },
        { title: 'Contrast and concession', html: `
          <p class="lead">These words flag a <b>difference</b> or an <b>unexpected result</b>. Concession means "this is true, but something else is also true".</p>
          <table class="tbl">
            <thead><tr><th>Job</th><th>Words and phrases</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Plain contrast</b></td><td>but, yet, however, on the other hand, in contrast, by contrast, whereas, while</td><td>Steel is strong. <b>However</b>, it rusts.</td></tr>
              <tr><td><b>Concession</b></td><td>although, though, even though, despite, in spite of, nevertheless, nonetheless, still</td><td><b>Although</b> the test was short, it was accurate.</td></tr>
              <tr><td><b>Alternative</b></td><td>otherwise, or else, instead, rather than</td><td>Switch it off. <b>Otherwise</b>, it will overheat.</td></tr>
            </tbody>
          </table>
          <h3>Three groups that are easy to mix up</h3>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Although the test was short, but it was accurate.</p><p>Despite of the rain, we continued.</p><p>In spite the delay, we finished.</p></div>
            <div class="side"><h4>Right</h4><p><b>Although</b> the test was short, it was accurate. (never although with but)</p><p><b>Despite</b> the rain, we continued. (no of)</p><p><b>In spite of</b> the delay, we finished.</p></div>
          </div>
          <div class="note why"><p><b>Although, though, even though</b> need a full clause after them. <b>Despite</b> and <b>in spite of</b> need a noun or an -ing form: "Despite <b>the rain</b>" or "Despite <b>raining</b>", and "Despite the fact that it rained".</p></div>
          <div class="note heads-up"><p>Not on the slides: <b>while</b> and <b>whereas</b> compare two things side by side ("Copper conducts well, <b>whereas</b> glass does not"). <b>While</b> can also be a time word ("while I waited"), so check which job it has.</p></div>
        ` },
        { title: 'Cause, result, purpose, condition', html: `
          <p class="lead">These words explain <b>why</b> (cause), <b>what followed</b> (result), <b>what for</b> (purpose) and <b>on what terms</b> (condition).</p>
          <table class="tbl">
            <thead><tr><th>Job</th><th>Words and phrases</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Cause</b> (reason first)</td><td>because, since, as, due to, owing to, because of, on account of</td><td><b>Because</b> the sensor failed, the line stopped.</td></tr>
              <tr><td><b>Result</b></td><td>so, therefore, thus, hence, consequently, as a result, accordingly, that is why</td><td>The sensor failed. <b>As a result</b>, the line stopped.</td></tr>
              <tr><td><b>Purpose</b></td><td>to, in order to, so that, so as to</td><td>We use a filter <b>so that</b> the sample stays clean.</td></tr>
              <tr><td><b>Condition</b></td><td>if, unless, provided that, as long as, otherwise, in case</td><td><b>Unless</b> the valve opens, pressure will rise.</td></tr>
            </tbody>
          </table>
          <h3>Because, since, as</h3>
          <p>The Blue Book entry on <b>because vs. since</b>: they are almost interchangeable, but <b>because</b> always shows cause and effect, while <b>since</b> is for a relationship or for time. "I will go to the game <b>because</b> my daughter is on the team." "I have wanted to talk to you <b>since</b> yesterday."</p>
          <h3>Because of and due to</h3>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Because of the pump failed, we stopped.</p><p>We stopped, due the pump failure.</p></div>
            <div class="side"><h4>Right</h4><p><b>Because</b> the pump failed, we stopped. (clause)</p><p><b>Because of</b> the pump failure, we stopped. (noun)</p></div>
          </div>
          <div class="note trap"><p><b>So</b> and <b>so that</b> are different: "The filter is fine, <b>so</b> we kept it" is a result, "We use a filter <b>so that</b> the sample stays clean" is a purpose. Also <b>so</b> (result) links two clauses; a result word never goes with <b>because</b> in the same sentence: "Because the sensor failed, so the line stopped" is wrong.</p></div>
        ` },
        { title: 'Time, sequence, summing up', html: `
          <p class="lead">These words put events in order and signal when you are wrapping up.</p>
          <table class="tbl">
            <thead><tr><th>Job</th><th>Words and phrases</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Order of steps</b></td><td>first, first of all, second, next, then, after that, afterwards, later, finally, lastly</td><td><b>First</b>, switch off the supply. <b>Next</b>, remove the cover.</td></tr>
              <tr><td><b>At the same time</b></td><td>meanwhile, at the same time, while, as, during</td><td><b>While</b> the sample cooled, we logged the data.</td></tr>
              <tr><td><b>Before and after</b></td><td>before, after, until, once, as soon as, by the time, since, when</td><td>Do not open the lid <b>until</b> the light turns green.</td></tr>
              <tr><td><b>Summing up</b></td><td>to sum up, in short, overall, to conclude, all in all, in brief</td><td><b>Overall</b>, the second design performed better.</td></tr>
            </tbody>
          </table>
          <h3>Use with tense</h3>
          <p>A time linker steers the tense of its clause (see the tenses topics). For example, <b>since</b> with a starting point asks for the present perfect: "The plant <b>has run</b> since January." After <b>when, before, after, as soon as, until</b> about the future, use the <b>present</b> for the future meaning: "We will start <b>when</b> the sample <b>arrives</b>", not "when the sample will arrive".</p>
          <div class="worked">
            <div class="given"><p>Put the steps in order with linkers: switch off the supply, remove the cover, replace the fuse, refit the cover, switch on.</p></div>
            <div class="solve"><p>Five steps, so five markers.</p></div>
            <div class="result"><p><b>First</b>, switch off the supply. <b>Next</b>, remove the cover. <b>Then</b> replace the fuse. <b>After that</b>, refit the cover. <b>Finally</b>, switch the power on.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: <b>firstly, secondly, thirdly</b> and <b>first, second, third</b> are both fine; pick one style and keep it. <b>At last</b> means "after a long wait" and is not the same as <b>finally</b> in a list of steps.</p></div>
        ` },
      ],
      flashcards: [
        { front: `What do linking words do?`, back: `Show how an idea <b>relates to the previous one</b>: adding, contrast, cause, result, sequence, example.` },
        { front: `Linking words for contrast?`, back: `<b>but, yet, however, on the other hand, whereas, although, despite</b>.` },
        { front: `Linking words for result?`, back: `<b>so, therefore, thus, hence, consequently, as a result</b>.` },
        { front: `Because versus since (Blue Book)?`, back: `<b>because</b> = cause and effect; <b>since</b> = time or a loose relationship.` },
        { front: `Although or despite before a full clause?`, back: `<b>Although</b>. <b>Despite</b> takes a noun or -ing form.` },
        { front: `The correct partner of both, either, neither?`, back: `<b>both ... and, either ... or, neither ... nor</b>.` },
        { front: `Which words put steps in order?`, back: `<b>first, next, then, after that, finally</b>.` },
        { front: `Namely versus for example?`, back: `<b>namely</b> lists exactly the items; <b>for example</b> gives samples.` },
      ],
      oneLiners: [
        'Choose the linker by <b>its job</b>: add, example, contrast, cause, result, purpose, condition, sequence.',
        '<b>However, therefore, as a result</b> link sentences; <b>because, although, if</b> link clauses.',
        '<b>Although</b> never takes <b>but</b> in the same sentence.',
        '<b>Despite</b> and <b>in spite of</b> take a noun or -ing form; <b>despite of</b> does not exist.',
        '<b>Because</b> takes a clause; <b>because of</b> and <b>due to</b> take a noun.',
        '<b>So</b> = result; <b>so that</b> = purpose.',
        'After <b>when, before, after, until, as soon as</b> use the present for the future.',
      ],
      formulas: [
        { name: 'Pick by job', html: `<b>Add</b>: also, in addition · <b>contrast</b>: however, although · <b>cause</b>: because, due to · <b>result</b>: so, therefore · <b>sequence</b>: first, next, finally`, note: 'Name the job first, then the word.' },
        { name: 'Pairs', html: `<b>both ... and</b> · <b>either ... or</b> · <b>neither ... nor</b>`, note: 'Keep the two halves parallel.' },
      ],
    },
    // ------------------------------------------------------------------ using transitions
    {
      id: 'm2-transitions-use',
      title: 'Using transitions correctly: punctuation, errors, reports',
      short: 'Using transitions',
      blurb: 'The three grammatical kinds of linker and how each is punctuated, the however comma splice, wrong-meaning and wrong-form linkers, transitions between sentences, paragraphs and report sections, and a worked editing practice.',
      source: 'Module 2 Grammar / syllabus topic "transitions and linking words" (no Drive file: written from standard usage; practice answers derived and flagged)',
      tabs: [
        { title: 'Three kinds, three patterns', html: `
          <p class="lead">Linkers behave in three different ways in a sentence. The kind decides the punctuation, so learn the three patterns.</p>
          <figure data-fig="m2-link-patterns"></figure>
          <table class="tbl">
            <thead><tr><th>Kind</th><th>Examples</th><th>Pattern</th></tr></thead>
            <tbody>
              <tr><td><b>Coordinating conjunction</b> (and, but, or, so, yet, for, nor)</td><td>joins two equal clauses</td><td>Clause<b>, but</b> clause.</td></tr>
              <tr><td><b>Subordinating conjunction</b> (although, because, if, when, while, since, unless, until)</td><td>makes one clause depend on the other</td><td><b>Although</b> clause<b>,</b> clause. OR clause <b>although</b> clause.</td></tr>
              <tr><td><b>Conjunctive adverb</b> (however, therefore, thus, consequently, nevertheless, otherwise, meanwhile, besides)</td><td>links two sentences</td><td>Clause<b>; however,</b> clause. OR Clause. <b>However,</b> clause.</td></tr>
            </tbody>
          </table>
          <h3>Same meaning, three ways</h3>
          <ul>
            <li>The test was short<b>, but</b> it was accurate.</li>
            <li><b>Although</b> the test was short, it was accurate.</li>
            <li>The test was short<b>; however,</b> it was accurate.</li>
          </ul>
          <div class="note exam"><p>In an error-detection sentence, find the linker, name its kind, then check the punctuation against the pattern. That single step finds most linker errors.</p></div>
        ` },
        { title: 'The however comma splice', html: `
          <p class="lead">A <b>conjunctive adverb</b> such as <em>however</em> or <em>therefore</em> cannot join two clauses by itself with only a comma. A comma alone between two full sentences is a <b>comma splice</b>.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The test was short, however it was accurate.</p><p>The pump failed, therefore production stopped.</p></div>
            <div class="side"><h4>Right</h4><p>The test was short<b>; however,</b> it was accurate.</p><p>The pump failed. <b>Therefore,</b> production stopped.</p></div>
          </div>
          <p>Three ways to repair "The pump failed, therefore production stopped":</p>
          <ol class="steps">
            <li><b>Semicolon</b> The pump failed; therefore, production stopped.</li>
            <li><b>Full stop</b> The pump failed. Therefore, production stopped.</li>
            <li><b>Change the linker</b> The pump failed, so production stopped. (<em>so</em> is a coordinating conjunction, so a comma is enough.)</li>
          </ol>
          <div class="note why"><p>Only <b>and, but, or, so, yet, for, nor</b> can join two full clauses behind a comma. Every other linker needs a semicolon or full stop in front of it.</p></div>
          <div class="note trap"><p><b>However</b> inside a sentence is set off by commas on both sides: "The plan, <b>however</b>, was rejected." It does not become a splice there because it is not joining clauses. The same linker can be used both ways.</p></div>
          <div class="note heads-up"><p>Not on the slides: the Blue Book has a punctuation chapter on commas, semicolons and colons that supports this. It is outside the module syllabus, but its core idea is the same as here: a comma alone cannot join two strong clauses.</p></div>
        ` },
        { title: 'Wrong meaning or wrong form', html: `
          <p class="lead">Two other kinds of linker error: the word has the <b>wrong job</b>, or the <b>wrong grammatical form</b> for what follows.</p>
          <h3>Wrong meaning</h3>
          <table class="tbl">
            <thead><tr><th>Wrong</th><th>Why</th><th>Fix</th></tr></thead>
            <tbody>
              <tr><td>The sample was clean. <b>Therefore</b>, the filter failed.</td><td>the second sentence is not a result</td><td>The sample was clean. <b>However</b>, the filter failed.</td></tr>
              <tr><td>Steel is strong, <b>so</b> it rusts.</td><td>rusting is not a result of strength</td><td>Steel is strong<b>, but</b> it rusts.</td></tr>
              <tr><td>The battery is light. <b>On the other hand</b>, it lasts long.</td><td>both are advantages, so addition not contrast</td><td>The battery is light. <b>In addition</b>, it lasts long.</td></tr>
              <tr><td>It was late. <b>Besides</b>, we left.</td><td>besides adds; it does not give a result</td><td>It was late. <b>So</b> we left.</td></tr>
            </tbody>
          </table>
          <h3>Wrong form</h3>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Because of the pump failed...</p><p>Despite of the noise...</p><p>Although the test was short, but it...</p><p>Due to he was late...</p></div>
            <div class="side"><h4>Right</h4><p>Because of the pump <b>failure</b> / <b>Because</b> the pump failed...</p><p><b>Despite</b> the noise...</p><p><b>Although</b> the test was short, it...</p><p><b>Because</b> he was late...</p></div>
          </div>
          <div class="note exam"><p>Quick check: after <em>because of, due to, despite, in spite of, in addition to</em>, there should be a <b>noun</b> or an <b>-ing form</b>. After <em>because, although, if, when, while</em>, there should be a <b>subject and verb</b>.</p></div>
        ` },
        { title: 'Beyond the sentence', html: `
          <p class="lead">Transitions also work between sentences, paragraphs and sections. In a report they are the signposts that let a reader skim and still follow.</p>
          <table class="tbl">
            <thead><tr><th>Level</th><th>What links</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Sentence to sentence</b></td><td>a conjunctive adverb or a repeated key word</td><td>The valve leaked. <b>As a result</b>, pressure dropped. This <b>pressure drop</b> triggered the alarm.</td></tr>
              <tr><td><b>Paragraph to paragraph</b></td><td>an opening sentence that points back and forward</td><td><b>Having tested the pump</b>, we turned to the motor.</td></tr>
              <tr><td><b>Section to section</b></td><td>a signpost phrase</td><td><b>The next section</b> describes the method. <b>As Table 2 shows</b>, ...</td></tr>
              <tr><td><b>Instructions</b></td><td>order words</td><td>First, next, then, finally.</td></tr>
            </tbody>
          </table>
          <h3>Habits that read well in technical writing</h3>
          <ul>
            <li>Put the <b>old idea first</b>, then the new one: "The pump failed. <b>This failure</b> stopped production."</li>
            <li>Use <b>therefore</b> and <b>thus</b> for conclusions that follow from data: "The pressure doubled; <b>therefore</b>, the volume halved."</li>
            <li>Use <b>however</b> and <b>although</b> to qualify a claim honestly: "The method is cheap; <b>however</b>, it is slow."</li>
            <li>Do not start every sentence with a linker. One in three or four is enough; the rest should follow naturally.</li>
          </ul>
          <div class="note heads-up"><p>Not on the slides: in abstracts and summaries (Module 4) the word count is tight, so use the short forms (<em>so, but, because</em>) and drop linkers that add nothing.</p></div>
        ` },
        { title: 'Worked: fixing a paragraph', html: `
          <p class="lead">A short paragraph with five linker problems. Find each, name the kind, repair it.</p>
          <div class="worked">
            <div class="given"><p>The motor overheated, therefore we shut it down. Because of the cooling fan did not start, the temperature rose. Although the alarm sounded, but nobody reacted. The team checked the wiring. In addition, the fan had worked fine yesterday. So we need to replace the controller.</p></div>
            <div class="solve">
              <ol class="steps">
                <li><b>therefore, comma splice</b> Conjunctive adverb after a comma. Use a semicolon: "The motor overheated; therefore, we shut it down", or "..., so we shut it down".</li>
                <li><b>Because of the cooling fan did not start</b> A clause follows, so use <em>Because</em>: "Because the cooling fan did not start, the temperature rose."</li>
                <li><b>Although ..., but</b> Delete one. "Although the alarm sounded, nobody reacted."</li>
                <li><b>In addition</b> The last sentence is not an addition; it is a contrast with the wiring check. Use <b>However</b>: "However, the fan had worked fine yesterday."</li>
                <li><b>So, as a sentence opener</b> It is a result word and fine in speech. In a report use <b>Therefore</b>: "Therefore, we need to replace the controller."</li>
              </ol>
            </div>
            <div class="result"><p>The motor overheated; therefore, we shut it down. Because the cooling fan did not start, the temperature rose. Although the alarm sounded, nobody reacted. The team checked the wiring. However, the fan had worked fine yesterday. Therefore, we need to replace the controller.</p></div>
          </div>
        ` },
        { title: 'Practice with answers', html: `
          <p class="lead">Ten error-detection items on linkers. Try each before you read the answer.</p>
          <div class="note heads-up"><p>Not on the slides: these are our own practice items. The answers are derived from the rules in this topic, not from an official key.</p></div>
          <table class="tbl">
            <thead><tr><th>#</th><th>Sentence</th><th>Answer</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>The tank leaked, however the level stayed constant.</td><td>Comma splice: <b>; however,</b></td></tr>
              <tr><td>2</td><td>Despite of the delay, the test finished on time.</td><td><b>Despite the delay</b> (no of)</td></tr>
              <tr><td>3</td><td>Although the sample was small, but the result was clear.</td><td>Delete <b>but</b></td></tr>
              <tr><td>4</td><td>Because of the sensor failed, the line stopped.</td><td><b>Because</b> the sensor failed</td></tr>
              <tr><td>5</td><td>Both the cost or the time were reduced.</td><td><b>Both the cost and the time</b> were reduced</td></tr>
              <tr><td>6</td><td>Copper conducts well. Therefore, glass does not.</td><td><b>In contrast / whereas</b> (not a result)</td></tr>
              <tr><td>7</td><td>The engineer was tired, nevertheless she finished the repair.</td><td>Comma splice: <b>; nevertheless,</b> (or <b>but</b>)</td></tr>
              <tr><td>8</td><td>Please wait until the sample will arrive.</td><td>Present for future: <b>until the sample arrives</b></td></tr>
              <tr><td>9</td><td>The report was late due to the engineer was ill.</td><td><b>because the engineer was ill</b> (or due to the engineer's illness)</td></tr>
              <tr><td>10</td><td>The supervisor is skilled, and he is not experienced.</td><td>Contrast: <b>but</b></td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Item 8 ties to the tenses topics: a time clause about the future uses the present simple, the same way <em>if</em> clauses do in the first conditional.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Pattern for however between two clauses?`, back: `Clause<b>; however,</b> clause. OR Clause. <b>However,</b> clause.` },
        { front: `Why is "The pump failed, therefore production stopped" wrong?`, back: `A <b>comma splice</b>: therefore is a conjunctive adverb and cannot join clauses with only a comma.` },
        { front: `Which linkers can join two clauses behind a comma?`, back: `The coordinating conjunctions: <b>and, but, or, so, yet, for, nor</b>.` },
        { front: `Because or because of before "the pump failed"?`, back: `<b>Because</b>: a clause follows. <b>Because of</b> takes a noun.` },
        { front: `Despite of the noise: fix?`, back: `<b>Despite the noise</b>. Also: in spite of.` },
        { front: `Can although and but share a sentence?`, back: `No: <b>Although</b> A, B. or A, <b>but</b> B.` },
        { front: `Tense after "when" about the future?`, back: `<b>Present simple</b>: We will start when the sample arrives.` },
        { front: `Three levels at which transitions work?`, back: `<b>Sentence</b>, <b>paragraph</b> and <b>section</b> (signposts, order words).` },
      ],
      oneLiners: [
        'Three kinds of linker: <b>coordinating</b> (, but), <b>subordinating</b> (Although A, B) and <b>conjunctive adverb</b> (; however,).',
        'A comma alone cannot join two sentences: use <b>;</b>, a full stop, or <b>and/but/so/or/yet</b>.',
        'A <b>mid-sentence however</b> takes commas on both sides.',
        'Check meaning: contrast is not <b>therefore</b>, addition is not <b>however</b>.',
        'Check form: noun or -ing after <b>despite, because of, due to</b>; clause after <b>although, because</b>.',
        'About one sentence in three or four needs a linker; the rest flow from repeated key words.',
        'In reports, use <b>therefore</b> for conclusions that follow from data, <b>however</b> for honest limits.',
      ],
      formulas: [
        { name: 'Three linker patterns', html: `Clause<b>, but</b> clause · <b>Although</b> clause, clause · Clause<b>; however,</b> clause`, note: 'Coordinating, subordinating, conjunctive adverb.' },
        { name: 'Linker check', html: `<b>Job?</b> (add, contrast, cause, result) · <b>Kind?</b> · <b>Punctuation?</b> · <b>What follows?</b> (clause or noun)`, note: 'Four questions for any error-detection sentence.' },
      ],
    },
    // ------------------------------------------------------------------ error detection method
    {
      id: 'm2-error-method',
      title: 'Error detection: a method for the activity',
      short: 'Error detection method',
      blurb: 'The syllabus activity "error detection": what is asked, a scan order that catches concord, tense, voice, pronoun, modifier, word-choice and linker errors, an error map back to the topics, a worked mixed set, and exam habits.',
      source: 'Module 2 Grammar / syllabus activity "error detection"; method drawn from the whole module and the Blue Book quizzes (no separate Drive file: written from standard practice and flagged as such)',
      tabs: [
        { title: 'What the activity asks', html: `
          <p class="lead">An <b>error-detection</b> item gives you a sentence or short passage. You <b>find</b> what is wrong, <b>correct</b> it, and often <b>name the rule</b>. Some items have no error at all.</p>
          <div class="note heads-up"><p>Not on the slides: the Module 2 syllabus lists "Activity: error detection", but the Drive folder has no file for it. This topic is a method built from the rest of the module. The Blue Book's pretest, quiz and mastery test (the next topics) are the practice material.</p></div>
          <h3>What you will see</h3>
          <ul>
            <li>A sentence with <b>one</b> error (Blue Book pretest style: "Correct the grammar error in each sentence").</li>
            <li>A sentence that is <b>already correct</b>. In the Blue Book mastery test, 18 of the 50 items are marked correct.</li>
            <li>A weak sentence to <b>rewrite</b> more effectively (effective-writing quizzes).</li>
            <li>A tense or voice item with a time clue (the Tenses worksheet).</li>
          </ul>
          <h3>A tidy answer layout</h3>
          <p>The tenses worksheet key uses <b>Incorrect, time clue, correct tense, correct sentence</b>. For general errors the same idea works as:</p>
          <ol class="steps">
            <li><b>Incorrect</b> copy the sentence or the faulty words</li>
            <li><b>Error</b> name it in two or three words (subject-verb agreement, dangling modifier)</li>
            <li><b>Correct</b> write the corrected sentence, changing as little as possible</li>
          </ol>
          <div class="note why"><p>Naming the error is what earns the mark in a doubtful case, and it forces you to decide that it really is an error.</p></div>
        ` },
        { title: 'The scan order', html: `
          <p class="lead">Do not read for meaning only. Make <b>one pass for each kind of error</b>, from the most common to the rarest. Most sentences are done by the fourth pass.</p>
          <ol class="steps">
            <li><b>Subject and verb</b> find the verb first, then ask who or what does it. Does the verb match the subject, not the nearest noun? (Concord)</li>
            <li><b>Tense</b> underline time clues (yesterday, since, every day, next week) and check the verb against them. In reported speech, is the verb shifted?</li>
            <li><b>Voice</b> is the passive formed correctly (be plus past participle)? Is a passive hiding the doer?</li>
            <li><b>Pronouns</b> subject or object? who or whom? that or which? its or it's? A reflexive with nothing to refer back to?</li>
            <li><b>Modifiers</b> adjective where an adverb belongs (good/well, slow/slowly)? Comparative form right? Does an opening phrase dangle? Is a modifier next to its word?</li>
            <li><b>Words and prepositions</b> affect/effect, lie/lay, fewer/less, between/among, extra prepositions, should of.</li>
            <li><b>Parallel form and linkers</b> list items matching? however after a comma? double negative?</li>
          </ol>
          <div class="note exam"><p>If you find an error early, do not stop. Keep scanning: the Blue Book items usually have one error, but exam passages can have several.</p></div>
          <div class="note trap"><p>Reading for meaning hides errors, because your brain repairs the sentence automatically. Read the sentence <b>slowly, word by word</b>, or aloud in your head.</p></div>
        ` },
        { title: 'Error map', html: `
          <p class="lead">When you spot an error, this table tells you which rule it breaks and where to revise it.</p>
          <table class="tbl">
            <thead><tr><th>What you see</th><th>Rule</th><th>Revise in</th></tr></thead>
            <tbody>
              <tr><td>verb does not match subject; words between subject and verb; neither/nor; there is/are; none, each</td><td>Concord</td><td>Subject-verb concord topics</td></tr>
              <tr><td>has done + yesterday; is checking + every day; will + after a past reporting verb</td><td>Tense and time clue</td><td>Tenses in technical writing; Common tense errors</td></tr>
              <tr><td>if + would; wrong verb form in an if clause</td><td>Conditionals</td><td>Conditionals topics</td></tr>
              <tr><td>wrong passive form; passive hiding the doer</td><td>Voice</td><td>Active and passive voice topics; Effective writing</td></tr>
              <tr><td>between you and I; whom/who; people that</td><td>Pronoun case, who/whom, that/which</td><td>Pronouns</td></tr>
              <tr><td>did good; walks slower; the smartest of the two; off of</td><td>Adjectives, adverbs, prepositions</td><td>Adjectives, adverbs and prepositions</td></tr>
              <tr><td>While walking across the street, the bus...; letters ... in my purse</td><td>Dangling and misplaced modifiers</td><td>Effective writing</td></tr>
              <tr><td>affect/effect, lay/lie, loose/lose, capital/capitol</td><td>Confusing words</td><td>Confusing words and homonyms</td></tr>
              <tr><td>however after a comma; despite of; although ... but</td><td>Linking words</td><td>Using transitions correctly</td></tr>
              <tr><td>list items in different forms; not unwilling</td><td>Parallel form; double negatives</td><td>Effective writing</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Worked: four mixed items', html: `
          <p class="lead">Four mixed sentences, with the pass that finds each error.</p>
          <div class="note heads-up"><p>Not on the slides: these four are our own practice items, so the answers are derived from the rules, not copied from a key.</p></div>
          <div class="worked">
            <div class="given"><p>1. The results of the three tests was recorded by the technician who were on duty.</p></div>
            <div class="solve"><p>Pass 1. <em>results</em> is the subject of <em>was recorded</em>, so the verb must be plural. In "technician who ___ on duty", <em>who</em> follows the singular <em>technician</em>.</p></div>
            <div class="result"><p>The results of the three tests <b>were</b> recorded by the technician who <b>was</b> on duty. (two concord errors)</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>2. If I would have checked the gauge, I would have noticed the leak.</p></div>
            <div class="solve"><p>Third conditional: the if clause uses the past perfect, never <em>would have</em>.</p></div>
            <div class="result"><p>If I <b>had checked</b> the gauge, I would have noticed the leak.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>3. Walking into the lab, the equipment was covered in dust.</p></div>
            <div class="solve"><p>Pass 5. Who walked in? The equipment did not. The opener dangles.</p></div>
            <div class="result"><p>Walking into the lab, <b>we found the equipment covered</b> in dust.</p></div>
          </div>
          <div class="worked">
            <div class="given"><p>4. Between you and I, this design is more better then the old one.</p></div>
            <div class="solve"><p>Three errors: <em>between</em> takes an object pronoun (me); <em>more better</em> stacks two comparison forms; <em>then</em> should be <em>than</em>.</p></div>
            <div class="result"><p>Between you and <b>me</b>, this design is <b>better than</b> the old one.</p></div>
          </div>
        ` },
        { title: 'Exam habits', html: `
          <p class="lead">Small habits that save marks in an error-detection section.</p>
          <ul>
            <li><b>Change the least.</b> Fix the error, keep the rest of the sentence. A rewrite that changes the meaning loses the mark.</li>
            <li><b>Allow for "no error".</b> If a sentence reads well and passes every pass, leave it. Over-correcting is an error too.</li>
            <li><b>Use the formal rule.</b> The Blue Book accepts "It is me" in speech but marks "It is I" in writing. Exam keys follow the written rule.</li>
            <li><b>Test, do not feel.</b> Use the mechanical tests: he/him for who/whom, drop the other name for "Bill and me", finish the sentence after than and as, find the verb first for concord, say "it is" for it's.</li>
            <li><b>Two right answers.</b> Some keys list alternatives (pretest 18: slowly or more slowly; pretest 21: really or very). Give one, correctly.</li>
            <li><b>Match the doer.</b> For dangling modifiers, ask who does the opening action.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Over-corrected, wrong</h4><p><b>Whomever</b> drove in the carpool lane without any passengers will be fined.</p></div>
            <div class="side"><h4>Left alone, right</h4><p><b>Whoever</b> drove in the carpool lane without any passengers will be fined. (He drove, so whoever is already correct.)</p></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `What does an error-detection answer contain?`, back: `<b>Incorrect, error name, correct sentence</b> (and the time clue for tense items).` },
        { front: `First pass of the scan?`, back: `<b>Subject and verb</b>: find the verb, then who or what does it.` },
        { front: `Why read word by word?`, back: `Your brain <b>repairs</b> errors when you read for meaning, so you miss them.` },
        { front: `Test for "for Bill and I / me"?`, back: `Drop the other name: "for <b>me</b>", so Bill and <b>me</b>.` },
        { front: `Can a sentence have no error?`, back: `Yes. In the Blue Book mastery test <b>18 of 50</b> are correct as printed.` },
        { front: `How much do you change when you correct?`, back: `As <b>little</b> as possible.` },
        { front: `Which tense clue families?`, back: `<b>every day</b> = simple present; <b>yesterday, ago</b> = simple past; <b>since, recently</b> = present perfect.` },
      ],
      oneLiners: [
        'Error detection = <b>find, correct, name the rule</b>.',
        'Scan in passes: <b>subject-verb, tense, voice, pronouns, modifiers, words, linkers and parallel form</b>.',
        'Read <b>slowly</b> or aloud: you must not repair the sentence by reflex.',
        'Use <b>mechanical tests</b> (he/him, drop the other name, finish the sentence, say "it is") instead of how it sounds.',
        'Some sentences are <b>correct as printed</b>: do not over-correct.',
        'Change the <b>fewest words</b>; the meaning must survive.',
        'Follow the <b>formal written rule</b>, not casual speech.',
      ],
      formulas: [
        { name: 'Error-detection answer', html: `<b>Incorrect</b> (faulty words) → <b>Error</b> (name) → <b>Correct</b> (fixed sentence)`, note: 'The results ... was recorded: subject-verb agreement: ... were recorded.' },
        { name: 'Scan order', html: `<b>1</b> subject-verb · <b>2</b> tense · <b>3</b> voice · <b>4</b> pronouns · <b>5</b> modifiers · <b>6</b> words and prepositions · <b>7</b> parallel form and linkers`, note: 'One pass per error type.' },
      ],
    },
    // ------------------------------------------------------------------ effective writing quizzes
    {
      id: 'm2-error-writing-quizzes',
      title: 'Effective writing quizzes 1 and 2: 30 rewrites solved',
      short: 'Writing quizzes solved',
      blurb: 'Both Blue Book effective-writing quizzes (15 items each) with the book\'s own rewrites, the rule each one tests, and the patterns to spot.',
      source: 'Module 2 Grammar / The Blue Book for Grammar and Punctuation - Helpful resource.pdf, Quizzes: Effective Writing Quiz 1 and Quiz 2, with Answers to Quizzes',
      tabs: [
        { title: 'Quiz 1: items 1 to 8', html: `
          <p class="lead">The task: <b>rewrite each sentence to make it more effective</b>. The book says your answer may differ from its own. These are the book's rewrites.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Problem</th><th>Book's rewrite</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>We are no longer able to reconcile; therefore, attorneys will be used to effect the dissolution of our marriage. (wordy, passive)</td><td>We have hired attorneys to help us with our divorce.</td></tr>
              <tr><td>2</td><td>The weather had adverse impacts on our boat resulting in the necessity to rescue us from the water. (vague, wordy)</td><td>Our boat capsized in the storm so we needed rescuing.</td></tr>
              <tr><td>3</td><td>The leak in the bottom of the boat was due to poor maintenance on the part of the crew. (noun-heavy)</td><td>The crew did not maintain the boat so the bottom leaked.</td></tr>
              <tr><td>4</td><td>Our marriage ended in a divorce. (repeats itself)</td><td>We divorced. OR We ended our marriage.</td></tr>
              <tr><td>5</td><td>The boy was struck in the face by the pie as it flew from the girl's hand. (passive)</td><td>The girl threw the pie and it hit the boy's face.</td></tr>
              <tr><td>6</td><td>It was not likely that no one would want to claim ownership of the new sports car. (double negative)</td><td>Someone will most likely want to claim ownership of the new sports car.</td></tr>
              <tr><td>7</td><td>There are many ideas that are worth exploring by us at this meeting. (there are, passive)</td><td>Let's explore the many worthwhile ideas at this meeting.</td></tr>
              <tr><td>8</td><td>Martin could not find time to work, shop, and go for walks with the dogs. (not parallel)</td><td>Martin could not find time to work, shop, and walk the dogs.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Items 1 to 4 show the same habit: say the action with a plain verb (<em>divorced, hired, capsized</em>) rather than a noun phrase (<em>effect the dissolution</em>, <em>the necessity to rescue</em>).</p></div>
        ` },
        { title: 'Quiz 1: items 9 to 15', html: `
          <p class="lead">Items 9 and 10 are about clarity. Items 11 to 15 are all <b>dangling modifiers</b>.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Problem</th><th>Book's rewrite</th></tr></thead>
            <tbody>
              <tr><td>9</td><td>Jordan did not believe that Serena had embarrassed him unintentionally. (negative plus negative-sounding adverb)</td><td>Jordan believed that Serena had embarrassed him intentionally.</td></tr>
              <tr><td>10</td><td>It is a shame that there are so many holidays that go uncelebrated. (it is, there are)</td><td>It is a shame that so many holidays go uncelebrated. OR I wish we celebrated more holidays.</td></tr>
              <tr><td>11</td><td>While singing in the shower, the bar of soap slipped from her hands.</td><td>The bar of soap slipped from her hands while she sang in the shower.</td></tr>
              <tr><td>12</td><td>Looking back, the dog was following us.</td><td>When we looked back, we saw the dog following us.</td></tr>
              <tr><td>13</td><td>Lying on a stretcher, they carried him out.</td><td>He was carried out on a stretcher.</td></tr>
              <tr><td>14</td><td>Flying out the window, he grabbed the papers.</td><td>He grabbed the papers as they were flying out the window.</td></tr>
              <tr><td>15</td><td>Stepping off the bus, the shopping center was just ahead.</td><td>As I stepped off the bus, I saw the shopping center just ahead.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Two repair styles appear in the key: <b>make the doer the subject</b> (items 11 and 12, "she sang", "we saw") and <b>turn the opener into a full clause</b> with its own subject (14 and 15, "as they were flying", "as I stepped off the bus"). Item 13 uses a third: the passive, which fits because the carriers do not matter.</p></div>
          <div class="note heads-up"><p>In item 9 the book keeps <b>Jordan believed ... intentionally</b>, which flips the meaning of the original double negative to its plain equivalent. Compare rule 4 in the effective-writing topic.</p></div>
        ` },
        { title: 'Quiz 2: items 1 to 8', html: `
          <p class="lead">Quiz 2 mixes <b>double negatives, parallel form and dangling or misplaced phrases</b>.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Problem</th><th>Book's rewrite</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>It is necessary that you not be uninformed about this case. (it is, double negative)</td><td>You must be informed about this case.</td></tr>
              <tr><td>2</td><td>There is ample evidence which indicates that the attorneys for the defense did not provide inadequate counseling to their client.</td><td>Ample evidence shows that the defense attorneys provided adequate counseling to their client.</td></tr>
              <tr><td>3</td><td>Speaking and to listen well are important elements of communication. (not parallel)</td><td>Speaking and listening well are important elements of communication. OR To speak and to listen well are important communication elements.</td></tr>
              <tr><td>4</td><td>To win is the obvious goal, but playing fair is important too. (not parallel)</td><td>Winning is the obvious goal, but playing fair is important too. OR To win is the obvious goal, but to play fair is important too.</td></tr>
              <tr><td>5</td><td>They were charged with assault, robbery, and forging checks. (not parallel)</td><td>They were charged with assault, robbery, and check forgery.</td></tr>
              <tr><td>6</td><td>I remember his generosity and that he was considerate. (not parallel)</td><td>I remember his generosity and consideration.</td></tr>
              <tr><td>7</td><td>She worked quickly and in an efficient manner. (not parallel)</td><td>She worked quickly and efficiently.</td></tr>
              <tr><td>8</td><td>When working with power tools, eyes should be protected. (dangling)</td><td>When working with power tools, protect your eyes. OR Protect your eyes when you use power tools.</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Items 3 and 4 allow two answers: pick one form (all -ing, or all <em>to</em>) and use it for both halves. Item 3's mixed fix, "Speaking and to listen", is what the question itself did wrong.</p></div>
        ` },
        { title: 'Quiz 2: items 9 to 15', html: `
          <p class="lead">The last seven are <b>misplaced and dangling modifiers</b>. The cure is almost always the same: put the modifier beside what it describes, or give the opening action its doer.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Problem</th><th>Book's rewrite</th></tr></thead>
            <tbody>
              <tr><td>9</td><td>When changing a diaper, a baby should be on his or her back.</td><td>When changing a diaper, lay a baby down on his or her back. OR Lay a baby down on his or her back when changing a diaper.</td></tr>
              <tr><td>10</td><td>I have some letters the mail carrier delivered in my purse.</td><td>The mail carrier delivered some letters that I have in my purse.</td></tr>
              <tr><td>11</td><td>We have tuna casserole I made in the refrigerator.</td><td>In the refrigerator, we have tuna casserole that I made.</td></tr>
              <tr><td>12</td><td>Mollie came over while I was playing the piano with a piece of pound cake.</td><td>While I was playing the piano, Mollie came over with a piece of pound cake.</td></tr>
              <tr><td>13</td><td>While asleep, the flea bit the dog.</td><td>The flea bit the sleeping dog.</td></tr>
              <tr><td>14</td><td>I tried calling to tell you about that TV show five times.</td><td>I called five times to tell you about that TV show.</td></tr>
              <tr><td>15</td><td>Although very spicy, Dana managed to finish the enchilada.</td><td>Dana managed to finish the enchilada although it was very spicy.</td></tr>
            </tbody>
          </table>
          <h3>What the 30 keys teach</h3>
          <ul>
            <li><b>Plain verbs</b> beat noun phrases (items Q1 1 to 4).</li>
            <li><b>Remove empty openers</b> and passives (Q1 5, 7, 10; Q2 1, 2).</li>
            <li><b>Cancel double negatives</b> (Q1 6, 9; Q2 1, 2).</li>
            <li><b>Match list forms</b> (Q1 8; Q2 3 to 7).</li>
            <li><b>Give opening actions a doer</b> (Q1 11 to 15; Q2 8, 9, 13, 15).</li>
            <li><b>Put modifiers beside their words</b> (Q2 10, 11, 12, 14).</li>
          </ul>
        ` },
      ],
      flashcards: [
        { front: `Quiz 1 item 5: "The boy was struck in the face by the pie..." Rewrite?`, back: `<b>The girl threw the pie and it hit the boy's face.</b>` },
        { front: `Quiz 1 item 6, double negative: "not likely that no one would want"?`, back: `<b>Someone will most likely want to claim ownership.</b>` },
        { front: `Quiz 1 item 8, parallel: "work, shop, and go for walks with the dogs"?`, back: `<b>work, shop, and walk the dogs.</b>` },
        { front: `Quiz 1 item 12: "Looking back, the dog was following us."`, back: `<b>When we looked back, we saw the dog following us.</b>` },
        { front: `Quiz 2 item 5: "assault, robbery, and forging checks"?`, back: `<b>assault, robbery, and check forgery.</b>` },
        { front: `Quiz 2 item 7: "quickly and in an efficient manner"?`, back: `<b>quickly and efficiently.</b>` },
        { front: `Quiz 2 item 13: "While asleep, the flea bit the dog."`, back: `<b>The flea bit the sleeping dog.</b>` },
        { front: `Quiz 2 item 11: "We have tuna casserole I made in the refrigerator."`, back: `<b>In the refrigerator, we have tuna casserole that I made.</b>` },
      ],
      oneLiners: [
        'Prefer a <b>plain verb</b> to a noun phrase: <em>divorced</em>, not <em>effect the dissolution</em>.',
        'Two negatives become one positive: <b>not unwilling</b> becomes <b>willing</b>.',
        'List items match: <b>work, shop, and walk the dogs</b>.',
        'A dangling opener gets its doer: <b>As I stepped off the bus, I saw...</b>',
        'Modifiers sit <b>beside</b> what they describe: letters <b>in my purse</b>, casserole <b>in the refrigerator</b>.',
        'More than one answer can be right: the book says so.',
      ],
      formulas: [
        { name: 'Rewrite recipe', html: `<b>Who?</b> make the doer the subject · <b>What?</b> plain active verb · <b>Cut</b> there is, it is, double negatives · <b>Match</b> list forms · <b>Place</b> modifiers`, note: 'The five moves behind all 30 keys.' },
      ],
    },
    // ------------------------------------------------------------------ pretest and mastery tests
    {
      id: 'm2-error-pretest',
      title: 'Grammar pretest: 50 items solved',
      short: 'Grammar pretest',
      blurb: 'The Blue Book Grammar Pretest, 50 sentences, each with the book\'s correction, a short reason, and a breakdown of what the pretest covers.',
      source: 'Module 2 Grammar / The Blue Book for Grammar and Punctuation - Helpful resource.pdf, Quizzes: Grammar Pretest (items 1-50) with Answers to Quizzes',
      tabs: [
        { title: 'Items 1 to 13', html: `
          <p class="lead">The task: <b>correct the grammar error in each sentence</b>. The book's example: "Shoshana felt badly about failing the Geometry test" becomes "felt <b>bad</b>". Items 1 to 13 start with adverbs and concord, then pronouns.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Faulty part</th><th>Fix</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>How quick he runs</td><td><b>quickly</b></td><td>Answers how, so an adverb.</td></tr>
              <tr><td>2</td><td>Neither DeAndre nor I are to follow</td><td><b>am</b></td><td>With neither/nor the verb agrees with the nearer subject, I.</td></tr>
              <tr><td>3</td><td>The desk and the chair sits</td><td><b>sit</b></td><td>Two subjects joined by and take a plural verb.</td></tr>
              <tr><td>4</td><td>Each of us were scheduled</td><td><b>was</b></td><td>Each is singular; us is inside the of-phrase.</td></tr>
              <tr><td>5</td><td>The coach, not the players, have been ill</td><td><b>has</b></td><td>Subject is coach; not the players is an interrupter.</td></tr>
              <tr><td>6</td><td>There is only four days</td><td><b>There are</b></td><td>With there, the subject (days) follows the verb.</td></tr>
              <tr><td>7</td><td>one of the women who works hard</td><td><b>work</b></td><td>Who takes its number from women, the noun in front.</td></tr>
              <tr><td>8</td><td>That was Yusuf and me whom you saw</td><td><b>Yusuf and I</b></td><td>After a be verb use the subject case. Whom is right (you saw him).</td></tr>
              <tr><td>9</td><td>This phone call is for Bill and I</td><td><b>Bill and me</b></td><td>Object of the preposition for.</td></tr>
              <tr><td>10</td><td>Terrell is the smartest of the two</td><td><b>smarter</b></td><td>Two things: -er.</td></tr>
              <tr><td>11</td><td>It was I whom called</td><td><b>who</b></td><td>He called, so who.</td></tr>
              <tr><td>12</td><td>It is us clerks who work hard</td><td><b>we clerks</b></td><td>Subject pronoun after is.</td></tr>
              <tr><td>13</td><td>took the plate off of the table</td><td><b>off the table</b></td><td>Drop the extra preposition.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Items 2 to 7 are all concord. Find the verb, find the real subject, ignore what sits between them. Item 8 looks wrong because "whom" sounds fancy, but whom is correct there: the fault is "me".</p></div>
        ` },
        { title: 'Items 14 to 26', html: `
          <p class="lead">Items 14 to 26 mix <b>pronouns</b>, <b>affect and effect</b>, <b>comparison forms</b> and <b>good or well</b>.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Faulty part</th><th>Fix</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>14</td><td>None of the neighbors offered his support</td><td><b>their</b></td><td>Neighbors is plural, so the pronoun is plural (the book's key).</td></tr>
              <tr><td>15</td><td>mailed the copies to him and I</td><td><b>him and me</b></td><td>Object of the preposition to.</td></tr>
              <tr><td>16</td><td>Neither of the candidates have spoken</td><td><b>has</b></td><td>Neither is singular.</td></tr>
              <tr><td>17</td><td>How will you be effected financially</td><td><b>affected</b></td><td>To be influenced: verb affect. The effect later in the sentence is right.</td></tr>
              <tr><td>18</td><td>Joan walks slower</td><td><b>slowly</b> (or more slowly)</td><td>Adverb for how.</td></tr>
              <tr><td>19</td><td>Jake is the oldest of the two brothers</td><td><b>older</b></td><td>Two things.</td></tr>
              <tr><td>20</td><td>May did good on the test</td><td><b>well</b></td><td>Adverb after did.</td></tr>
              <tr><td>21</td><td>real close friends</td><td><b>really close</b> (or very close)</td><td>Real cannot modify the adjective close.</td></tr>
              <tr><td>22</td><td>Whomever drove in the carpool lane</td><td><b>Whoever</b></td><td>He drove, so whoever.</td></tr>
              <tr><td>23</td><td>allow Jenna or myself</td><td><b>Jenna or me</b></td><td>The reflexive has nothing to refer back to.</td></tr>
              <tr><td>24</td><td>people that judge others</td><td><b>people who judge</b></td><td>Who for people.</td></tr>
              <tr><td>25</td><td>felt angrily about the way he had treated them</td><td><b>felt angry</b></td><td>Feel describes a state, not actively touching.</td></tr>
              <tr><td>26</td><td>You look well in that running outfit</td><td><b>You look good</b></td><td>Appearance, not health.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Items 18 and 21 have two accepted answers in the book. One is enough.</p></div>
        ` },
        { title: 'Items 27 to 38', html: `
          <p class="lead">Items 27 to 38: <b>sense verbs, comparatives, extra prepositions, lie and lay, who, that, which</b> and a few sound-alike traps.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Faulty part</th><th>Fix</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>27</td><td>Don't feel badly</td><td><b>feel bad</b></td><td>Same sense-verb rule.</td></tr>
              <tr><td>28</td><td>took home the cutest one (of two puppies)</td><td><b>the cuter one</b></td><td>Two things.</td></tr>
              <tr><td>29</td><td>Speak slower please</td><td><b>more slowly</b></td><td>Keep the -ly in the comparison.</td></tr>
              <tr><td>30</td><td>meet us later on</td><td><b>later</b></td><td>Extra preposition.</td></tr>
              <tr><td>31</td><td>Pollen effects my sinuses</td><td><b>affects</b></td><td>Influence: verb affect.</td></tr>
              <tr><td>32</td><td>I want to lay down for a nap</td><td><b>lie</b></td><td>Reclining, no object.</td></tr>
              <tr><td>33</td><td>That SUV, that landed on its hood</td><td><b>which</b></td><td>Nonessential clause in commas: which.</td></tr>
              <tr><td>34</td><td>Barry lay my jacket on the hood</td><td><b>laid</b></td><td>Placing an object, past tense.</td></tr>
              <tr><td>35</td><td>How much further before we arrive</td><td><b>farther</b></td><td>Physical distance.</td></tr>
              <tr><td>36</td><td>a honorary member</td><td><b>an honorary</b></td><td>Silent h: vowel sound.</td></tr>
              <tr><td>37</td><td>decide among a minivan and a station wagon</td><td><b>between</b></td><td>Two choices.</td></tr>
              <tr><td>38</td><td>Your the only one for me</td><td><b>You're</b></td><td>You are.</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Items 32 and 34 look like the same error (lay) but they are different verbs: 32 is <b>lie</b> (recline), 34 is <b>laid</b> (placed a jacket).</p></div>
        ` },
        { title: 'Items 39 to 50', html: `
          <p class="lead">Items 39 to 50 are mostly <b>confusing words</b> and one tense form.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Faulty part</th><th>Fix</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>39</td><td>taller then the oak tree</td><td><b>than</b></td><td>Comparison.</td></tr>
              <tr><td>40</td><td>has long since past</td><td><b>passed</b></td><td>Verb form of pass.</td></tr>
              <tr><td>41</td><td>Its a long way from here</td><td><b>It's</b></td><td>It is.</td></tr>
              <tr><td>42</td><td>Mother, can I go to the movies</td><td><b>may I</b></td><td>Permission.</td></tr>
              <tr><td>43</td><td>I could of danced</td><td><b>could have</b></td><td>Of never replaces have.</td></tr>
              <tr><td>44</td><td>Srdjian immigrated from his native Bosnia</td><td><b>emigrated</b></td><td>Leaving his native country.</td></tr>
              <tr><td>45</td><td>the continual flow of traffic</td><td><b>continuous</b></td><td>Without a break.</td></tr>
              <tr><td>46</td><td>tried to illicit a discussion</td><td><b>elicit</b></td><td>Draw out.</td></tr>
              <tr><td>47</td><td>the four years that she has went to the university</td><td><b>that she went</b></td><td>Has went is never correct; the book's key uses the simple past.</td></tr>
              <tr><td>48</td><td>plane and simple</td><td><b>plain</b></td><td>Simple, evident.</td></tr>
              <tr><td>49</td><td>sit this book down on the table</td><td><b>set</b></td><td>Placing an object.</td></tr>
              <tr><td>50</td><td>the capital building</td><td><b>capitol</b></td><td>The statehouse.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Item 47: "has went" is the classic verb-form error. The principal parts of go are go, went, gone, so the perfect needs <b>gone</b> ("has gone") and the simple past needs <b>went</b>. The book fixes it by using the simple past.</p></div>
        ` },
        { title: 'What the pretest covers', html: `
          <p class="lead">Count the items by type and you see where the marks are. Use the table to decide what to revise.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Items</th><th>Revise in</th></tr></thead>
            <tbody>
              <tr><td><b>Subject-verb concord</b> (7)</td><td>2, 3, 4, 5, 6, 7, 16</td><td>Concord topics</td></tr>
              <tr><td><b>Pronouns, who/whom, that/which</b> (10)</td><td>8, 9, 11, 12, 14, 15, 22, 23, 24, 33</td><td>Pronouns</td></tr>
              <tr><td><b>Adjectives and adverbs</b> (11)</td><td>1, 10, 18, 19, 20, 21, 25, 26, 27, 28, 29</td><td>Adjectives, adverbs and prepositions</td></tr>
              <tr><td><b>Prepositions</b> (3)</td><td>13, 30, 37</td><td>Adjectives, adverbs and prepositions</td></tr>
              <tr><td><b>Confusing words and spelling</b> (18)</td><td>17, 31, 32, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50</td><td>Confusing words and homonyms</td></tr>
              <tr><td><b>Verb form</b> (1)</td><td>47</td><td>Tenses topics</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Words and spelling take the biggest share (18 of 50), which is why the confusing-words topic is worth the time. Adverbs and pronouns come next.</p></div>
          <div class="note exam"><p>Mark yourself: under 35 of 50, revise the topic that holds your most-missed type before the mastery test.</p></div>
        ` },
      ],
      flashcards: [
        { front: `How quick he runs. Fix?`, back: `<b>quickly</b>: answers how.` },
        { front: `Neither DeAndre nor I are to follow. Fix?`, back: `<b>am</b>: verb matches the nearer subject.` },
        { front: `The coach, not the players, have been ill. Fix?`, back: `<b>has</b>: the subject is coach.` },
        { front: `This call is for Bill and I. Fix?`, back: `<b>Bill and me</b>: object of a preposition.` },
        { front: `It was I whom called. Fix?`, back: `<b>who</b>: he called.` },
        { front: `Pollen effects my sinuses. Fix?`, back: `<b>affects</b>.` },
        { front: `I want to lay down for a nap. Fix?`, back: `<b>lie</b>.` },
        { front: `Yesterday, Barry lay my jacket on the hood. Fix?`, back: `<b>laid</b>.` },
        { front: `That SUV, that landed on its hood... Fix?`, back: `<b>which</b>: nonessential clause.` },
        { front: `The time for action has long since past. Fix?`, back: `<b>passed</b>.` },
        { front: `...the four years that she has went to the university. Fix?`, back: `<b>that she went</b> (never "has went").` },
      ],
      oneLiners: [
        'The pretest has <b>50 items</b>: 18 confusing words, 11 adjectives and adverbs, 10 pronouns, 7 concord, 3 prepositions, 1 verb form.',
        'The <b>he/him</b> test settles who/whom and whoever/whomever.',
        'After a <b>be</b> verb: "It is <b>we</b> clerks", "It was I <b>who</b> called".',
        'Two things get <b>-er</b>: the <b>older</b> of the two, the <b>cuter</b> one.',
        'Placing an object: <b>lay, laid</b>; reclining: <b>lie, lay</b>; setting something down: <b>set</b>.',
        '<b>Extra prepositions</b> go: off the table, later, where did he go.',
        '<b>Could have</b>, never could of; <b>You\'re</b> = you are; <b>It\'s</b> = it is.',
      ],
      formulas: [
        { name: 'Pretest self-check', html: `<b>Find the verb</b>, <b>name the subject</b>, <b>test the pronoun</b>, <b>test the adverb</b>, <b>check look-alike words</b>`, note: 'The scan order from the error-detection method.' },
      ],
    },
    {
      id: 'm2-error-mastery',
      title: 'Grammar mastery test: 50 items solved',
      short: 'Grammar mastery test',
      blurb: 'The Blue Book Grammar Mastery Test, 50 sentences (18 already correct), each with the book\'s correction and the rule, plus a breakdown by error type.',
      source: 'Module 2 Grammar / The Blue Book for Grammar and Punctuation - Helpful resource.pdf, Quizzes: Grammar Mastery Test (items 1-50) with Answers to Quizzes',
      tabs: [
        { title: 'Items 1 to 13', html: `
          <p class="lead">The task: <b>correct the sentences</b>. Some are already right (marked CORRECT in the book). Items 1 to 13 are concord.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Faulty part</th><th>Fix</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Some of the desserts was left</td><td><b>were</b></td><td>Some of + plural noun takes a plural verb.</td></tr>
              <tr><td>2</td><td>some of his porridge were missing</td><td><b>was</b></td><td>Some of + uncountable noun takes a singular verb.</td></tr>
              <tr><td>3</td><td>Your brilliant excuses almost makes up</td><td><b>make up</b></td><td>Subject excuses is plural.</td></tr>
              <tr><td>4</td><td>Neither Jackson nor Jenna is playing hooky.</td><td><b>Correct as printed</b></td><td>Correct: the nearer subject, Jenna, is singular.</td></tr>
              <tr><td>5</td><td>Neither Jackson nor I are playing hooky</td><td><b>am</b></td><td>The nearer subject is I.</td></tr>
              <tr><td>6</td><td>Either of us is capable of winning.</td><td><b>Correct as printed</b></td><td>Correct: either is singular.</td></tr>
              <tr><td>7</td><td>All of the class is willing to take part...</td><td><b>Correct as printed</b></td><td>Correct: class acts as one unit.</td></tr>
              <tr><td>8</td><td>One-third of the eligible population tend not to vote</td><td><b>tends</b></td><td>Population is singular.</td></tr>
              <tr><td>9</td><td>One-third of the voters tends not to cast their ballots</td><td><b>tend</b></td><td>Voters is plural.</td></tr>
              <tr><td>10</td><td>Here's the paper clips you requested</td><td><b>Here are</b></td><td>The subject (clips) follows the verb.</td></tr>
              <tr><td>11</td><td>She is one of those doctors who make house calls.</td><td><b>Correct as printed</b></td><td>Correct: who matches doctors (plural).</td></tr>
              <tr><td>12</td><td>one of those professors who does whatever it takes to get his point across to his students</td><td><b>do ... their ... their</b></td><td>Who matches professors, so the verb and the pronouns are plural.</td></tr>
              <tr><td>13</td><td>She is the only professor who does what it takes...</td><td><b>Correct as printed</b></td><td>Correct: the only professor, so who is singular.</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Items 4, 6, 7, 11 and 13 are correct as printed. Items 11 and 12 look nearly the same but differ: "<b>one of those doctors who make</b>" (plural) against "<b>the only professor who does</b>" (singular, item 13).</p></div>
        ` },
        { title: 'Items 14 to 26', html: `
          <p class="lead">Pronoun case, <b>who and whom</b>, <b>whoever and whomever</b>, <b>that and which</b>, and the first adverb item.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Faulty part</th><th>Fix</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>14</td><td>Her and him are always fighting</td><td><b>She and he</b></td><td>Subjects take the subject case.</td></tr>
              <tr><td>15</td><td>When Toni and him come over</td><td><b>Toni and he</b></td><td>Subject of come over.</td></tr>
              <tr><td>16</td><td>It is we who must decide...</td><td><b>Correct as printed</b></td><td>Correct: subject pronoun after is.</td></tr>
              <tr><td>17</td><td>Between you and I</td><td><b>Between you and me</b></td><td>Object of the preposition.</td></tr>
              <tr><td>18</td><td>Who do you think you are to give me advice...?</td><td><b>Correct as printed</b></td><td>Correct: you are who (you are he).</td></tr>
              <tr><td>19</td><td>Who makes up these English rules anyway?</td><td><b>Correct as printed</b></td><td>Correct: he makes up the rules.</td></tr>
              <tr><td>20</td><td>Whom do you think should win?</td><td><b>Who</b></td><td>Ignore do you think: he should win.</td></tr>
              <tr><td>21</td><td>Who are you voting for?</td><td><b>Whom</b></td><td>You are voting for him.</td></tr>
              <tr><td>22</td><td>Whoever has the keys gets to be in the driver's seat.</td><td><b>Correct as printed</b></td><td>Correct: him + he.</td></tr>
              <tr><td>23</td><td>work with whoever you recommend</td><td><b>whomever</b></td><td>You recommend him.</td></tr>
              <tr><td>24</td><td>The thoughts that Ted presented at the meeting...</td><td><b>Correct as printed</b></td><td>Correct: that for an essential clause.</td></tr>
              <tr><td>25</td><td>The thoughts that Ted presented, that were about shifting national priorities</td><td><b>which</b></td><td>Nonessential clause.</td></tr>
              <tr><td>26</td><td>When you do a job so good</td><td><b>so well</b></td><td>Adverb for how.</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Items 20 and 21 are a pair: "Whom do you think should win?" becomes <b>Who</b>, "Who are you voting for?" becomes <b>Whom</b>. The only difference is whether the word is the subject of its own verb.</p></div>
        ` },
        { title: 'Items 27 to 38', html: `
          <p class="lead">Good and well, comparison forms, <b>between and among</b>, <b>should have</b>, <b>lie and lay</b> and look-alike words.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Faulty part</th><th>Fix</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>27</td><td>Bonnie was a good sport...</td><td><b>Correct as printed</b></td><td>Correct: good describes sport.</td></tr>
              <tr><td>28</td><td>Harry smells good...</td><td><b>Correct as printed</b></td><td>Correct: describing his scent, not sniffing.</td></tr>
              <tr><td>29</td><td>Lisa did so well on the test...</td><td><b>Correct as printed</b></td><td>Correct: adverb after did.</td></tr>
              <tr><td>30</td><td>more sweeter than her brother</td><td><b>sweeter</b></td><td>One comparison ending only.</td></tr>
              <tr><td>31</td><td>divide everything equally between them (triplets)</td><td><b>among</b></td><td>Three or more.</td></tr>
              <tr><td>32</td><td>Karen should of known</td><td><b>should have</b></td><td>Of never replaces have.</td></tr>
              <tr><td>33</td><td>the effects of our generosity...</td><td><b>Correct as printed</b></td><td>Correct: the effects is a noun.</td></tr>
              <tr><td>34</td><td>Ben thought he had lain my jacket</td><td><b>laid</b></td><td>Placing an object.</td></tr>
              <tr><td>35</td><td>will not allow me to except a gift</td><td><b>accept</b></td><td>To receive.</td></tr>
              <tr><td>36</td><td>my wife and I were all ready at the restaurant</td><td><b>already</b></td><td>Refers to time.</td></tr>
              <tr><td>37</td><td>Irregardless of who was there first</td><td><b>Regardless</b></td><td>Irregardless does not exist.</td></tr>
              <tr><td>38</td><td>the Giants could loose the game</td><td><b>lose</b></td><td>To fail to win.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Items 27 to 29 are all correct: "good sport" (describes a noun), "smells good" (describes his scent) and "did so well" (adverb).</p></div>
        ` },
        { title: 'Items 39 to 50', html: `
          <p class="lead">The last twelve: <b>word choice, a/an, farther/further, fewer/less</b> and some correct decoys.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Faulty part</th><th>Fix</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>39</td><td>...how long that mime can remain completely stationary?</td><td><b>Correct as printed</b></td><td>Correct: in one place.</td></tr>
              <tr><td>40</td><td>The department's principal concern...</td><td><b>Correct as printed</b></td><td>Correct: principal = main.</td></tr>
              <tr><td>41</td><td>in the middle of the vast dessert</td><td><b>desert</b></td><td>The desolate area.</td></tr>
              <tr><td>42</td><td>The boss complimented Ari...</td><td><b>Correct as printed</b></td><td>Correct: praised.</td></tr>
              <tr><td>43</td><td>any of they're stories</td><td><b>their</b></td><td>Possessive.</td></tr>
              <tr><td>44</td><td>become a FBI agent</td><td><b>an FBI</b></td><td>F sounds like ef.</td></tr>
              <tr><td>45</td><td>a preference between five cleanup plans</td><td><b>among</b></td><td>Five choices.</td></tr>
              <tr><td>46</td><td>think farther ahead than just the next shot</td><td><b>further</b></td><td>Nonphysical distance.</td></tr>
              <tr><td>47</td><td>Paul should of known better</td><td><b>should have</b></td><td>Of never replaces have.</td></tr>
              <tr><td>48</td><td>I prefer it's swimming pool</td><td><b>its</b></td><td>Possessive.</td></tr>
              <tr><td>49</td><td>I paid the cab fare and Alejandro paid for dinner.</td><td><b>Correct as printed</b></td><td>Correct: fare = travel cost.</td></tr>
              <tr><td>50</td><td>completed five less problems</td><td><b>fewer</b></td><td>Countable.</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Items 39, 40, 42 and 49 look like usual error sites but are correct: <b>stationary</b>, <b>principal</b>, <b>complimented</b> and <b>fare</b>. Do not change a word just because it is on your list of confusables.</p></div>
        ` },
        { title: 'What the mastery test covers', html: `
          <p class="lead">Fifty items: <b>32 need a fix and 18 are correct</b>. That 18 is the main lesson: half the skill is knowing when to leave a sentence alone.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Items needing a fix</th><th>Items already correct</th></tr></thead>
            <tbody>
              <tr><td><b>Concord</b></td><td>1, 2, 3, 5, 8, 9, 10, 12</td><td>4, 6, 7, 11, 13</td></tr>
              <tr><td><b>Pronouns, who/whom, that/which</b></td><td>14, 15, 17, 20, 21, 23, 25</td><td>16, 18, 19, 22, 24</td></tr>
              <tr><td><b>Adjectives and adverbs</b></td><td>26, 30</td><td>27, 28, 29</td></tr>
              <tr><td><b>Between or among</b></td><td>31, 45</td><td>none</td></tr>
              <tr><td><b>Words and spelling</b></td><td>32, 34, 35, 36, 37, 38, 41, 43, 44, 46, 47, 48, 50</td><td>33, 39, 40, 42, 49</td></tr>
            </tbody>
          </table>
          <h3>Rules that decided the trickiest items</h3>
          <div class="chips"><span class="chip">one of those who + plural verb</span><span class="chip">the only one who + singular verb</span><span class="chip">neither/nor: nearer subject</span><span class="chip">some of + noun decides</span><span class="chip">him + he = whoever, him + him = whomever</span></div>
          <div class="note exam"><p>Do the mastery test after the pretest and the topics. Score 45 or more of 50 and the module's error-detection questions should hold few surprises.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Some of the desserts was left. Fix?`, back: `<b>were</b>: some of + plural.` },
        { front: `Neither Jackson nor I are playing hooky. Fix?`, back: `<b>am</b>.` },
        { front: `One-third of the eligible population tend... Fix?`, back: `<b>tends</b>; with voters it is <b>tend</b>.` },
        { front: `Here's the paper clips. Fix?`, back: `<b>Here are</b>.` },
        { front: `Between you and I. Fix?`, back: `<b>Between you and me</b>.` },
        { front: `Whom do you think should win? Fix?`, back: `<b>Who</b>.` },
        { front: `Who are you voting for? Fix?`, back: `<b>Whom</b>.` },
        { front: `We will work with whoever you recommend. Fix?`, back: `<b>whomever</b>.` },
        { front: `We were all ready at the restaurant. Fix?`, back: `<b>already</b>.` },
        { front: `Marta completed five less problems. Fix?`, back: `<b>fewer</b>.` },
        { front: `How many of the 50 mastery items are correct as printed?`, back: `<b>18</b>.` },
      ],
      oneLiners: [
        'The mastery test has <b>50 items</b>: <b>32 need a fix, 18 are already correct</b>.',
        '<b>Neither/nor</b>: the verb matches the nearer subject (Neither Jackson nor I <b>am</b>).',
        '<b>Some of / all of / one-third of</b>: the noun after <b>of</b> decides the verb.',
        '<b>One of those who</b> takes a plural verb; <b>the only one who</b> takes a singular one.',
        '<b>Who</b> do you think should win, but <b>whom</b> are you voting for.',
        'Count: <b>among</b> three or more, <b>fewer</b> for countable things, <b>further</b> for nonphysical distance.',
        'Do not change correct words: <b>stationary, principal, complimented, fare</b> were all right.',
      ],
      formulas: [
        { name: 'Mastery self-check', html: `Decide <b>first</b> whether the sentence is <b>correct</b>; only then look for the fix.`, note: '18 of 50 need no change.' },
      ],
    },
  ],
  figures: [
    { id: 'm2-linking-map', caption: 'Linking words grouped by the job they do: add, example, contrast, cause, result and sequence. Based on BAENG101 course material, VIT.', alt: 'Six stacked cards. Add: and, also, in addition, besides. Example: for example, such as, namely. Contrast: but, however, although, whereas. Cause: because, since, due to. Result: so, therefore, thus, as a result. Sequence: first, next, then, finally.' },
    { id: 'm2-link-patterns', caption: 'The three sentence patterns for linking words, with one example each: a coordinating conjunction after a comma, a subordinating conjunction at the start, and a conjunctive adverb after a semicolon. Based on BAENG101 course material, VIT.', alt: 'Three stacked cards. Coordinating: clause, but clause, as in It rained, but we played. Subordinating: Although clause, clause, as in Although it rained, we played. Adverb: clause; however, clause, as in It rained; however, we played, or use a full stop before However.' },
  ],
});
