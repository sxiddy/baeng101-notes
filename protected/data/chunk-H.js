CHUNK({
  chunk: 'H',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------ concord 1
    {
      id: 'm2-concord-rules',
      title: 'Subject-verb concord: the core rules',
      short: 'Concord: core rules',
      blurb: 'What concord is, how to find the real subject, and the first seven rules from the slides: number, words in between, and, or, nor, as well as, here and there, sums, periods and distances.',
      source: 'Module 2 Grammar / 1 Subject - Verb Cocord.pptx (slides 1-11), with extra rules from The Blue Book for Grammar and Punctuation, Grammar chapter',
      tabs: [
        { title: 'What concord is', html: `
          <p class="lead"><b>Concord</b> (also called <b>subject-verb agreement</b>) means the verb must <b>match</b> its subject in number: a singular subject takes a singular verb, a plural subject takes a plural verb.</p>
          <p>A <b>subject</b> is the noun or pronoun the sentence is about. The <b>verb</b> is the action word (or a state of being such as <em>is</em>, <em>was</em>). If the two do not match, the sentence sounds wrong, and in a report it also looks careless.</p>
          <table class="tbl">
            <thead><tr><th>Person</th><th>Singular</th><th>Plural</th></tr></thead>
            <tbody>
              <tr><td>First</td><td>I walk</td><td>we walk</td></tr>
              <tr><td>Second</td><td>you walk</td><td>you walk</td></tr>
              <tr><td>Third</td><td>he / she / it <b>walks</b></td><td>they walk</td></tr>
            </tbody>
          </table>
          <p>Only the <b>third person singular</b> adds an <b>-s</b> in the present tense. That is where almost every concord mistake happens.</p>
          <div class="note why"><p>Nouns make their plural by adding -s (<em>worker, workers</em>). Verbs do the opposite: the <b>-s</b> form is the singular one. Quick test: use <em>he</em> for singular and <em>they</em> for plural. "He talks" is singular, so <em>talks</em> is the singular verb; "they talk" is plural, so <em>talk</em> is the plural verb.</p></div>
          <div class="note exam"><p>Concord is one of the commonest items in error-detection and fill-in questions, and it is easy marks once you learn to <b>find the true subject</b> first. The next tab shows how.</p></div>
        ` },
        { title: 'Finding the subject', html: `
          <p class="lead">Before you pick singular or plural, find the <b>true subject</b>. Find the <b>verb first</b>, then ask <b>who or what</b> does it.</p>
          <ol class="steps">
            <li><b>Find the verb</b> the word for the action or state. A word after <em>to</em> (to walk) is an infinitive, not the main verb.</li>
            <li><b>Ask who or what</b> performs it. The answer is the subject.</li>
            <li><b>Cross out the extras</b> phrases starting with <em>of</em>, <em>with</em>, <em>along with</em>, <em>in</em> are not the subject.</li>
            <li><b>Decide the number</b> then check the verb against it.</li>
          </ol>
          <div class="worked">
            <div class="given"><p>The bouquet of red roses (smells / smell) so sweet.</p></div>
            <div class="solve"><p>Verb: <em>smells / smell</em>. Who or what smells? The <b>bouquet</b>. <em>Roses</em> sits inside the <em>of</em> phrase, so it is not the subject.</p></div>
            <div class="result"><p>The bouquet of red roses <b>smells</b> so sweet.</p></div>
          </div>
          <h3>Three things that hide the subject</h3>
          <ul>
            <li>A phrase starting with <b>of</b> sits between the subject and the verb. The subject comes <b>before</b> the <em>of</em> phrase: "A set of readings <b>was</b> taken."</li>
            <li>The subject comes <b>after</b> the verb: "Beside the pump <b>stands</b> a pressure gauge." Ask who or what stands: the gauge.</li>
            <li>A command has an <b>understood subject, you</b>: "(You) Please bring me the file." The verb is <em>bring</em>.</li>
          </ul>
          <p>A sentence can have two subjects with one verb ("He and I like cake"), one subject with two verbs ("She lifts weights and jogs daily"), or two full subject-verb pairs ("I like cake and he likes ice cream"). Check each pair on its own.</p>
          <div class="note trap"><p>The noun nearest the verb is not always the subject. In "The list of items (is / are) on the desk", <em>items</em> is closest, but <em>list</em> is the subject, so the verb is <b>is</b>.</p></div>
        ` },
        { title: 'Rules 1 and 2: number, and words in between', html: `
          <p class="lead"><b>Rule 1:</b> the verb and subject must agree in <b>number</b>. <b>Rule 2:</b> words or phrases <b>between</b> the subject and the verb do not change the subject's number.</p>
          <h3>Rule 1: agree in number</h3>
          <table class="tbl">
            <thead><tr><th>Singular</th><th>Plural</th></tr></thead>
            <tbody>
              <tr><td>He <b>plays</b> football.</td><td>They <b>play</b> football.</td></tr>
              <tr><td>The worker <b>demands</b> more wages.</td><td>Workers <b>demand</b> more wages.</td></tr>
              <tr><td>The sensor <b>records</b> the temperature.</td><td>The sensors <b>record</b> the temperature.</td></tr>
            </tbody>
          </table>
          <h3>Rule 2: ignore what comes between</h3>
          <ul>
            <li>One of the glasses <b>is</b> empty. The subject is <em>one</em>, not <em>glasses</em>.</li>
            <li>The bouquet of red roses <b>smells</b> so sweet. The subject is <em>bouquet</em>.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The lady in the car <b>look</b> like your friend.</p><p>The results of the second trial <b>is</b> shown in Table 2.</p><p>A box of fuses <b>are</b> in the store.</p></div>
            <div class="side"><h4>Right</h4><p>The lady in the car <b>looks</b> like your friend.</p><p>The results of the second trial <b>are</b> shown in Table 2.</p><p>A box of fuses <b>is</b> in the store.</p></div>
          </div>
          <p>In the middle pair the subject is <em>results</em> (plural), so <em>are</em>; the phrase "of the second trial" is only a tag on it. In the last pair the subject is <em>box</em>, so <em>is</em>.</p>
          <div class="note exam"><p>When an error-detection sentence has a long phrase between subject and verb, that gap is where the trap is. Cross out the phrase and read "The lady looks...", "A box is...".</p></div>
        ` },
        { title: 'Rules 3 to 5: and, or, nor, as well as', html: `
          <p class="lead">Joining subjects changes the verb. <b>And</b> makes a plural. <b>Or / nor</b> look at the singulars, then at the nearest noun. <b>As well as</b> and its friends add nothing to the number.</p>
          <table class="tbl">
            <thead><tr><th>Rule</th><th>What it says</th><th>Example from the slides</th></tr></thead>
            <tbody>
              <tr><td><b>3</b> and</td><td>subjects joined by <b>and</b> take a plural verb</td><td>Meenu and Meera <b>are</b> coming home.</td></tr>
              <tr><td><b>3</b> either/or, neither/nor</td><td>two singular subjects joined by <b>or, either/or, neither/nor</b> take a singular verb</td><td>Neither Akshay nor Rohit <b>is</b> coming home. My dad or my mom <b>is</b> arriving today.</td></tr>
              <tr><td><b>4</b> nearest noun</td><td>with <b>or, either/or, neither/nor</b>, the verb agrees with the noun or pronoun <b>closest to it</b></td><td>Neither the shoes nor the bag <b>matches</b> the dress. Neither the bag nor the shoes <b>match</b> the dress.</td></tr>
              <tr><td><b>5</b> as well as</td><td>ignore <b>as well as, along with, besides, not</b>; the subject keeps its own number</td><td>Matt, as well as his dog, <b>is</b> expected shortly. Pratik, along with his brother, <b>is</b> going to school.</td></tr>
            </tbody>
          </table>
          <figure data-fig="m2-concord-nearest"></figure>
          <h3>Extras from the Blue Book</h3>
          <ul>
            <li>When one subject is singular and one is plural, <b>put the plural one last</b> and use a plural verb: "Neither Jenny nor the others are available."</li>
            <li>When <b>I</b> is one of the two subjects, put it second and use <b>am</b>: "Neither she nor I am going to the festival."</li>
          </ul>
          <div class="note trap"><p>"Along with" does not make a plural. "The pump, along with two valves, <b>was</b> replaced." The commas are the clue that the phrase is only an add-on. Write "The pump and two valves <b>were</b> replaced" if you want them as a pair.</p></div>
          <div class="note heads-up"><p>Not on the slides: two things joined by <b>and</b> that are really <b>one thing</b> take a singular verb ("Bread and butter is my usual breakfast"). So do subjects with <b>each</b> or <b>every</b> ("Every nut and bolt was checked"). Exams keep to the plain rule: and = plural.</p></div>
        ` },
        { title: 'Rules 6 and 7: here, there, and units', html: `
          <p class="lead"><b>Rule 6:</b> after <b>here</b> or <b>there</b> the true subject comes <b>after</b> the verb. <b>Rule 7:</b> a sum of money, a period of time or a distance treated as one unit takes a <b>singular</b> verb.</p>
          <h3>Rule 6: here and there</h3>
          <p><em>Here</em> and <em>there</em> are only place words, not subjects. Look past them for the noun.</p>
          <div class="vs">
            <div class="side"><h4>Slide examples</h4><p>Here <b>are</b> the chocolates.</p><p>There <b>is</b> a big puddle on the road.</p></div>
            <div class="side"><h4>Same pattern, technical</h4><p>There <b>are</b> four hurdles to jump (Blue Book).</p><p>There <b>is</b> one leak in the pipe, but there <b>are</b> two in the tank.</p></div>
          </div>
          <div class="note trap"><p>Students often write "There <b>is</b> two sensors on the board" because <em>there is</em> sounds natural in speech. The subject is <em>sensors</em>, so <b>are</b>.</p></div>
          <h3>Rule 7: money, time, distance</h3>
          <ul>
            <li>500 rupees <b>is</b> a high price to pay.</li>
            <li>62 years <b>is</b> the minimum age of retirement.</li>
            <li>10 kilometers <b>is</b> too far to walk.</li>
            <li>Blue Book: Ten dollars <b>is</b> a high price to pay. Five years <b>is</b> the maximum sentence for that offense.</li>
          </ul>
          <p>The amount is one lump, so the verb is singular, even though the noun (<em>rupees</em>, <em>years</em>, <em>kilometers</em>) ends in -s.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Three hours <b>are</b> too long for this test.</p><p>Fifty metres <b>were</b> the length of the cable.</p></div>
            <div class="side"><h4>Right</h4><p>Three hours <b>is</b> too long for this test.</p><p>Fifty metres <b>was</b> the length of the cable.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: if you count the items one by one, the verb turns plural: "Ten rupees <b>were</b> scattered on the floor" (ten separate coins or notes). The slide rule covers the amount as a total.</p></div>
        ` },
        { title: 'Concord in lab and report writing', html: `
          <p class="lead">The same rules run through every lab report, email and project document. Here are typical slips, with the rule that fixes each.</p>
          <table class="tbl">
            <thead><tr><th>Wrong</th><th>Right</th><th>Rule</th></tr></thead>
            <tbody>
              <tr><td>The technician check the gauges daily.</td><td>The technician <b>checks</b> the gauges daily.</td><td>1 (third person singular)</td></tr>
              <tr><td>The data from the three trials are shown below the graph and is discussed in Section 4.</td><td>The data from the three trials <b>are</b> shown below the graph and <b>are</b> discussed in Section 4.</td><td>2 and consistency</td></tr>
              <tr><td>The manager and the engineer is late.</td><td>The manager and the engineer <b>are</b> late.</td><td>3 (and)</td></tr>
              <tr><td>Neither the fuse nor the switches works.</td><td>Neither the fuse nor the switches <b>work</b>.</td><td>4 (nearest)</td></tr>
              <tr><td>The pump, along with its two valves, are being replaced.</td><td>The pump, along with its two valves, <b>is</b> being replaced.</td><td>5</td></tr>
              <tr><td>There is three samples left.</td><td>There <b>are</b> three samples left.</td><td>6</td></tr>
              <tr><td>Twenty minutes are enough for the reaction.</td><td>Twenty minutes <b>is</b> enough for the reaction.</td><td>7</td></tr>
            </tbody>
          </table>
          <p>Read each wrong sentence aloud, then cross out the middle phrase. The error usually jumps out.</p>
          <div class="note exam"><p>Write the corrected verb only if asked to "spot the error"; write the whole corrected sentence if asked to "correct the sentence". Name the rule in one line when marks are for explanation.</p></div>
          <div class="mnemonic"><p>Verb first, then who or what; cross out the of-phrase; and = plural; or and nor = nearest.</p></div>
        ` },
      ],
      flashcards: [
        { front: `The basic concord rule?`, back: `A <b>singular subject</b> takes a <b>singular verb</b>; a <b>plural subject</b> takes a <b>plural verb</b>.` },
        { front: `Which person adds -s in the simple present?`, back: `The <b>third person singular</b>: he, she, it walks.` },
        { front: `Quick test for a singular verb?`, back: `Does it go with <b>he</b> (singular) or with <b>they</b> (plural)?` },
        { front: `One of the glasses (is/are) empty.`, back: `<b>is</b>. The subject is <em>one</em>, not <em>glasses</em>.` },
        { front: `The bouquet of red roses (smells/smell) sweet.`, back: `<b>smells</b>. The subject is <em>bouquet</em>.` },
        { front: `Subjects joined by "and" take...`, back: `A <b>plural verb</b>: Meenu and Meera are coming.` },
        { front: `Neither the shoes nor the bag (match/matches)...`, back: `<b>matches</b>: the verb agrees with the <b>nearest</b> noun, <em>bag</em>.` },
        { front: `Matt, as well as his dog, (is/are) expected.`, back: `<b>is</b>. "As well as" is ignored; the subject is <em>Matt</em>.` },
        { front: `Words ignored when finding the verb's number?`, back: `<b>as well as, along with, besides, not</b>.` },
        { front: `In "Here are the chocolates", where is the subject?`, back: `<b>After the verb</b>: <em>chocolates</em>. Here and there are not subjects.` },
        { front: `62 years (is/are) the minimum age of retirement.`, back: `<b>is</b>: a period of time as one unit.` },
        { front: `Blue Book: where does "I" go in either/or?`, back: `<b>Second</b>, with <b>am</b>: Neither she nor I am going.` },
      ],
      oneLiners: [
        'Concord: the verb must agree with its <b>subject</b> in number, not with the nearest noun.',
        'Find the <b>verb first</b>, ask who or what does it, and cross out the <b>of-phrase</b>.',
        'Only the <b>third person singular</b> adds -s: he walks, they walk.',
        'Subjects joined by <b>and</b> are plural; with <b>or / nor</b> the verb agrees with the <b>nearest</b> subject.',
        '<b>As well as, along with, besides, not</b> do not change the subject number.',
        'After <b>here / there</b> the subject follows the verb: There <b>are</b> four hurdles.',
        '<b>Sums of money, periods of time and distances</b> as a unit take a singular verb.',
      ],
      formulas: [
        { name: 'Concord rules 1 to 5', html: `<b>Number</b> must match · ignore <b>words in between</b> · <b>and</b> = plural · <b>or / nor</b> = nearest noun (singular + singular = singular) · <b>as well as / along with / besides / not</b> ignored`, note: 'Plural noun goes last with or / nor; I goes last with am.' },
        { name: 'Concord rules 6 and 7', html: `<b>Here / there</b>: subject comes after the verb · <b>money, time, distance</b> as one unit = singular verb`, note: 'There are two sensors; 10 kilometers is too far.' },
      ],
    },

    // ------------------------------------------------------------------ concord 2
    {
      id: 'm2-concord-special',
      title: 'Concord: tricky cases and practice',
      short: 'Concord: tricky cases',
      blurb: 'Rules 8 to 11 (a lot of, all, some, collective nouns, mathematics and news, were for wishes), the Blue Book extras for each, everyone, who and that, plus both slide exercises solved.',
      source: 'Module 2 Grammar / 1 Subject - Verb Cocord.pptx (slides 12-17), with extra rules from The Blue Book for Grammar and Punctuation, Grammar chapter',
      tabs: [
        { title: 'Rule 8: all, some, a lot of', html: `
          <p class="lead">With <b>all, some, a lot of</b> and other portion words, look at the <b>noun after of</b>. Singular noun, singular verb. Plural noun, plural verb.</p>
          <table class="tbl">
            <thead><tr><th>Singular noun after of</th><th>Plural noun after of</th></tr></thead>
            <tbody>
              <tr><td>All of the cake <b>is</b> gone.</td><td>All of the cakes <b>are</b> gone.</td></tr>
              <tr><td>A lot of the cake <b>is</b> gone.</td><td>A lot of the cakes <b>are</b> gone.</td></tr>
              <tr><td>Some of the cake <b>is</b> gone.</td><td>Some of the cakes <b>are</b> gone.</td></tr>
            </tbody>
          </table>
          <p>The Blue Book adds more portion words: <b>percent, fraction, part, majority, none, remainder</b>.</p>
          <ul>
            <li>Fifty percent of the pie <b>has</b> disappeared. Fifty percent of the pies <b>have</b> disappeared.</li>
            <li>One-third of the city <b>is</b> unemployed. One-third of the people <b>are</b> unemployed.</li>
            <li>None of the garbage <b>was</b> picked up. None of the sentences <b>were</b> punctuated correctly.</li>
          </ul>
          <p>Spelled-out fractions are hyphenated (one-third).</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Most of the water <b>are</b> contaminated.</p><p>Some of the samples <b>was</b> lost.</p></div>
            <div class="side"><h4>Right</h4><p>Most of the water <b>is</b> contaminated.</p><p>Some of the samples <b>were</b> lost.</p></div>
          </div>
          <div class="note heads-up"><p>The Blue Book on <b>none</b>: it can be singular or plural. Use a singular verb when it clearly means "not one" ("None of them is ready"), a plural verb when the context is plural. Some exams mark only the singular, so choose singular when in doubt.</p></div>
          <div class="note why"><p>This rule is the opposite of Rule 2. With a <b>noun</b> subject (a box of fuses), the first noun decides. With a <b>portion word</b> (all of the fuses), the noun after <em>of</em> decides.</p></div>
        ` },
        { title: 'Rule 9: collective nouns', html: `
          <p class="lead"><b>Collective nouns</b> (group, population, family, team, staff) can take a singular or a plural verb, depending on whether you mean <b>one unit</b> or the <b>individuals</b>.</p>
          <ul>
            <li>Most of my family <b>is</b> here <em>or</em> <b>are</b> here.</li>
            <li>Half of the population <b>was</b> against the bill <em>or</em> <b>were</b> against the bill.</li>
          </ul>
          <h3>Blue Book: staff</h3>
          <div class="vs">
            <div class="side"><h4>Unit: singular</h4><p>The staff <b>is</b> in a meeting. (acting together)</p></div>
            <div class="side"><h4>Individuals: plural</h4><p>The staff <b>are</b> in disagreement about the findings. (each has a view)</p></div>
          </div>
          <p>The Blue Book says the second sentence reads even better with a clear plural noun: "The staff <b>members</b> are in disagreement about the findings."</p>
          <div class="worked">
            <div class="given"><p>The committee (has / have) reached its decision. The committee (is / are) arguing among themselves.</p></div>
            <div class="solve"><p>First sentence: the committee decided as a body, one unit, and <em>its</em> is singular. Second: members act separately, plural.</p></div>
            <div class="result"><p>The committee <b>has</b> reached its decision. The committee <b>are</b> arguing among themselves (or, better, "the committee members are arguing").</p></div>
          </div>
          <div class="note trap"><p>Be <b>consistent</b> inside one sentence. "The team <b>is</b> ready and <b>they</b> have their tools" mixes a singular verb with a plural pronoun. Keep it one way: "The team is ready and has its tools."</p></div>
          <div class="note heads-up"><p>Not on the slides: in exams, treat a collective noun as <b>singular</b> unless the sentence clearly shows the members acting separately. British usage allows plural more freely than American.</p></div>
        ` },
        { title: 'Rule 10: plural in form, singular in meaning', html: `
          <p class="lead">Some nouns <b>end in -s but mean one thing</b>: mathematics, civics, news. They take <b>singular</b> verbs.</p>
          <ul>
            <li>Mathematics <b>is</b> very difficult for some people.</li>
            <li>The news <b>is</b> very saddening.</li>
            <li>The news from the front <b>is</b> bad (slide 17, item 6).</li>
          </ul>
          <div class="chips"><span class="chip">mathematics</span><span class="chip">civics</span><span class="chip">news</span><span class="chip">physics</span><span class="chip">economics</span><span class="chip">electronics</span><span class="chip">statistics (the subject)</span></div>
          <p>The last four are <b>not on the slides</b> but follow the same rule: the name of a subject or field is singular. "Electronics <b>is</b> my favourite branch."</p>
          <h3>The opposite group: plural only</h3>
          <p>Items made of two parts <b>look plural and are plural</b>: scissors, trousers, jeans, pliers, spectacles. The slide exercises test these (items 7 and 8):</p>
          <div class="vs">
            <div class="side"><h4>Plural only</h4><p>My scissors <b>are</b> missing.</p><p>Your brown trousers <b>are</b> missing.</p></div>
            <div class="side"><h4>With "a pair of": singular</h4><p>A pair of scissors <b>is</b> on the desk.</p><p>A pair of pliers <b>is</b> in the toolbox.</p></div>
          </div>
          <div class="note why"><p>With "a pair of" the subject is <em>pair</em>, which is singular (Rule 2 again). Drop the "pair" and the plural noun speaks for itself.</p></div>
          <div class="note exam"><p>"Statistics" is singular as a subject ("Statistics is hard") but plural when it means figures ("The statistics are alarming"). Read the meaning.</p></div>
        ` },
        { title: 'Everyone, each, who and that', html: `
          <p class="lead">These come from the Blue Book, not the slides, but the slide exercises use them (items 1 and 2: <em>everyone</em>, <em>somebody</em>).</p>
          <h3>Indefinite pronouns are singular</h3>
          <p><b>each, everyone, every one, everybody, anyone, anybody, someone, somebody</b> are singular. Do not be pulled by what follows <em>of</em>. Also singular: <b>either</b> and <b>neither</b> when they are the subject.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>Each of the girls <b>sing</b> well.</p><p>Every one of the cakes <b>are</b> gone.</p><p>Neither of them <b>are</b> available.</p></div>
            <div class="side"><h4>Right</h4><p>Each of the girls <b>sings</b> well.</p><p>Every one of the cakes <b>is</b> gone.</p><p>Neither of them <b>is</b> available.</p></div>
          </div>
          <p><b>Everyone</b> (one word) means everybody. <b>Every one</b> (two words) means each single one.</p>
          <h3>Who, that, which</h3>
          <p>When <b>who, that or which</b> is the subject inside a clause, the verb matches the <b>noun just in front</b> of it.</p>
          <ul>
            <li>Salma is the scientist who <b>writes</b> the reports. (<em>scientist</em>, singular)</li>
            <li>He is one of the men who <b>do</b> the work. (<em>men</em>, plural)</li>
          </ul>
          <h3>Number of / a number of</h3>
          <p><b>Not on the slides:</b> "<b>The</b> number of defects <b>is</b> small" (the number, one figure: singular); "<b>A</b> number of defects <b>were</b> found" (several: plural).</p>
          <div class="note trap"><p>"One of the engineers who <b>is</b> late" is a classic slip. The relative clause refers to <em>engineers</em>, so "one of the engineers who <b>are</b> late". Only with "the only one of the engineers who <b>is</b>..." does the singular win.</p></div>
        ` },
        { title: 'Rule 11: were for wishes', html: `
          <p class="lead">In a sentence that expresses a <b>wish, a request or something contrary to fact</b>, use <b>were</b> instead of <em>was</em>, even with <em>I, he, she, it</em>.</p>
          <ul>
            <li>I wish my sister <b>were</b> here. (she is not here)</li>
            <li>If I <b>were</b> you, I wouldn't go out with that man. (I am not you)</li>
            <li>She talks as if she <b>were</b> the manager. (she is not)</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>I wish it <b>was</b> Friday today.</p><p>If he <b>was</b> here, he would fix the pump.</p></div>
            <div class="side"><h4>Right</h4><p>I wish it <b>were</b> Friday today.</p><p>If he <b>were</b> here, he would fix the pump.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: the conditionals topic shows the same <b>were</b> in "if" sentences about unreal situations. In casual English "if I was" is common, and the worksheet key accepts both, but a formal exam answer uses <b>were</b>. Use <b>was</b> when the situation is a real possibility: "If he was late, he missed the briefing."</p></div>
          <div class="note why"><p>This old form is called the <b>subjunctive</b>. It marks "this is not real". It is the one place in English where a singular subject takes <em>were</em>.</p></div>
        ` },
        { title: 'Slide exercise 1, solved', html: `
          <p class="lead">Slide 16 asks you to choose the correct subject-verb combination. The answers below come with the rule that decides each one.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Sentence</th><th>Answer</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>The lady in the car (look/looks) like your friend.</td><td><b>looks</b></td><td>subject <em>lady</em>; the car phrase is ignored (Rule 2)</td></tr>
              <tr><td>2</td><td>Most of the milk (is/are) gone.</td><td><b>is</b></td><td>milk is singular (Rule 8)</td></tr>
              <tr><td>3</td><td>One of the flowers (has/have) wilted.</td><td><b>has</b></td><td>subject is <em>one</em> (Rule 2)</td></tr>
              <tr><td>4</td><td>Either Ram or Shyam (is/are) coming today.</td><td><b>is</b></td><td>two singular subjects with either/or (Rule 3)</td></tr>
              <tr><td>5</td><td>Here (is/are) the newspaper.</td><td><b>is</b></td><td>subject <em>newspaper</em> follows the verb (Rule 6)</td></tr>
              <tr><td>6</td><td>The group of dancers (is/are) here.</td><td><b>is</b></td><td>subject <em>group</em>, acting as a unit (Rules 2 and 9)</td></tr>
              <tr><td>7</td><td>Civics (is/are) my favorite subject.</td><td><b>is</b></td><td>plural form, singular meaning (Rule 10)</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Item 6 could also take <em>are</em> if you wanted to stress the dancers one by one (Rule 9). Without that stress, <b>is</b> is the expected answer.</p></div>
        ` },
        { title: 'Slide exercise 2, solved', html: `
          <p class="lead">Slide 17 has twelve more pairs to choose from. The slides give no key, so the answers here come from the rules above.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Sentence</th><th>Answer</th><th>Rule</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Everyone has / have done their homework.</td><td><b>has</b></td><td>everyone is singular</td></tr>
              <tr><td>2</td><td>Somebody has / have left her purse.</td><td><b>has</b></td><td>somebody is singular</td></tr>
              <tr><td>3</td><td>The mayor as well as his brothers is / are going to prison.</td><td><b>is</b></td><td>5: as well as ignored</td></tr>
              <tr><td>4</td><td>Either my father or my brothers is / are going to sell the house.</td><td><b>are</b></td><td>4: nearest noun is <em>brothers</em></td></tr>
              <tr><td>5</td><td>Neither my colleagues nor my boss was / were present.</td><td><b>was</b></td><td>4: nearest noun is <em>boss</em></td></tr>
              <tr><td>6</td><td>The news from the front is / are bad.</td><td><b>is</b></td><td>10: news is singular</td></tr>
              <tr><td>7</td><td>My scissors is / are missing.</td><td><b>are</b></td><td>plural-only noun</td></tr>
              <tr><td>8</td><td>Your brown trousers is / are missing.</td><td><b>are</b></td><td>plural-only noun</td></tr>
              <tr><td>9</td><td>The average worker's earnings has / have gone up dramatically.</td><td><b>have</b></td><td>subject is <em>earnings</em>, plural</td></tr>
              <tr><td>10</td><td>The jury has / have come to a consensus.</td><td><b>has</b></td><td>9: acting as one unit</td></tr>
              <tr><td>11</td><td>One of my friends is / are getting married tomorrow.</td><td><b>is</b></td><td>2: subject is <em>one</em></td></tr>
              <tr><td>12</td><td>The majority of the population is / are against the mid-term elections.</td><td><b>is</b></td><td>8 and 9: noun after of is singular</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Item 9: <em>worker's</em> is possessive and is not the subject. The subject is <em>earnings</em>, a plural-form noun. Item 10: <em>have</em> is possible if the jurors disagree, but "come to a consensus" shows one unit, so <b>has</b>.</p></div>
          <div class="note exam"><p>Item 12 can take <em>are</em> (slide 13 allows both for the population example). In a one-answer exam choose <b>is</b>, because <em>population</em> is singular as a unit.</p></div>
        ` },
        { title: 'Data, criteria and other science words', html: `
          <p class="lead"><b>Not on the slides.</b> Scientific writing uses many <b>Latin and Greek plurals</b>. They are the commonest concord traps in lab reports.</p>
          <table class="tbl">
            <thead><tr><th>Singular</th><th>Plural</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>datum</td><td><b>data</b></td><td>The data <b>are</b> consistent with the model.</td></tr>
              <tr><td>criterion</td><td><b>criteria</b></td><td>These criteria <b>were</b> met. One criterion <b>was</b> missed.</td></tr>
              <tr><td>phenomenon</td><td><b>phenomena</b></td><td>Such phenomena <b>occur</b> at low pressure.</td></tr>
              <tr><td>hypothesis</td><td><b>hypotheses</b></td><td>Both hypotheses <b>were</b> tested.</td></tr>
              <tr><td>analysis</td><td><b>analyses</b></td><td>Two analyses <b>were</b> run.</td></tr>
              <tr><td>medium</td><td><b>media</b></td><td>Each medium <b>transmits</b> light differently.</td></tr>
              <tr><td>bacterium</td><td><b>bacteria</b></td><td>The bacteria <b>grow</b> fastest at 37 degrees.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p><b>Data</b>: strict scientific style still treats it as plural ("the data are"), and that is the safe choice in an exam. Many modern writers use "the data is" for a lump of information. Pick one and stay with it.</p></div>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>The criteria for selection <b>is</b> given in Table 1.</p><p>This phenomena <b>was</b> first described in 1998.</p></div>
            <div class="side"><h4>Right</h4><p>The criteria for selection <b>are</b> given in Table 1.</p><p>This phenomenon <b>was</b> first described in 1998.</p></div>
          </div>
        ` },
      ],
      flashcards: [
        { front: `All of the cakes (is/are) gone.`, back: `<b>are</b>: look at the noun after <em>of</em>.` },
        { front: `Some of the cake (is/are) gone.`, back: `<b>is</b>: <em>cake</em> is singular.` },
        { front: `Portion words in the Blue Book rule?`, back: `<b>percent, fraction, part, majority, some, all, none, remainder</b>: noun after <em>of</em> decides.` },
        { front: `Most of my family (is/are) here.`, back: `<b>Both</b>: unit (is) or individuals (are).` },
        { front: `Collective nouns on the slides?`, back: `<b>group, population, family</b>; the Blue Book adds <b>team, staff</b>.` },
        { front: `Mathematics (is/are) difficult.`, back: `<b>is</b>: plural in form, singular in meaning.` },
        { front: `My scissors (is/are) missing.`, back: `<b>are</b>: plural-only noun.` },
        { front: `Everyone, somebody, each, either, neither: singular or plural?`, back: `<b>Singular</b>.` },
        { front: `He is one of the men who (does/do) the work.`, back: `<b>do</b>: who refers to <em>men</em>.` },
        { front: `I wish my sister (was/were) here.`, back: `<b>were</b>: wish, request or contrary to fact.` },
        { front: `The jury has / have come to a consensus.`, back: `<b>has</b> (unit); <em>have</em> only if members act separately.` },
        { front: `Data: singular or plural in strict scientific style?`, back: `<b>Plural</b>: the data are.` },
      ],
      oneLiners: [
        'With <b>all, some, a lot of, percent, majority</b>, look at the noun after <em>of</em>.',
        '<b>Collective nouns</b> are singular as a unit, plural for individuals; stay consistent.',
        '<b>Mathematics, civics, news</b> end in -s but are singular; <b>scissors, trousers</b> are plural.',
        '<b>Each, everyone, anybody, someone, either, neither</b> take singular verbs.',
        'After <b>who, that, which</b>, match the noun just before it: one of the men who <b>do</b>.',
        'Wish, request, unreal idea: use <b>were</b> (I wish my sister were here).',
        '<b>Data, criteria, phenomena</b> are plural; the singulars are datum, criterion, phenomenon.',
      ],
      formulas: [
        { name: 'Concord rules 8 to 11', html: `<b>all / some / a lot of</b> + of: noun after <em>of</em> decides · <b>collective noun</b>: unit = singular, individuals = plural · <b>mathematics, civics, news</b> = singular · <b>wish, request, unreal</b>: use <em>were</em>`, note: 'Slide examples: All of the cake is gone; Half of the population was / were against; The news is saddening.' },
        { name: 'Blue Book extras', html: `<b>each, everyone, anybody, someone, either, neither</b> = singular · <b>who / that / which</b> matches the noun in front of it · <b>the number of</b> = singular, <b>a number of</b> = plural`, note: 'One of the men who do the work.' },
      ],
    },

    // ------------------------------------------------------------------ conditionals 1
    {
      id: 'm2-cond-basics',
      title: 'Conditionals: the pattern, zero and first',
      short: 'Zero, first conditional',
      blurb: 'What an if sentence is, the table of the three main types, and the zero (always true) and first (likely future) conditional with every example from the slides.',
      source: 'Module 2 Grammar / 2 Conditionals.pptx (slides 1-11)',
      tabs: [
        { title: 'What conditionals are', html: `
          <p class="lead">A <b>conditional</b> (an <b>if clause</b> sentence) describes the <b>result of something that might or might not happen</b>. The if clause gives the condition; the main clause gives the result.</p>
          <p>"If you study hard" is the condition. "you will pass your exams" is the result. The <b>order of the two clauses does not change the meaning</b>: "You will pass your exams if you study hard" says the same thing.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>If clause</th><th>Main clause</th></tr></thead>
            <tbody>
              <tr><td><b>I</b></td><td>If I study,</td><td>I will pass the exam.</td></tr>
              <tr><td><b>II</b></td><td>If I studied,</td><td>I would pass the exam.</td></tr>
              <tr><td><b>III</b></td><td>If I had studied,</td><td>I would have passed the exam.</td></tr>
            </tbody>
          </table>
          <figure data-fig="m2-conditional-types"></figure>
          <h3>How likely is it?</h3>
          <table class="tbl">
            <thead><tr><th>True</th><th>Likely, possible</th><th>Less likely, less possible</th><th>Impossible</th></tr></thead>
            <tbody>
              <tr><td>real (zero)</td><td>first</td><td>second</td><td>third</td></tr>
              <tr><td>If you mix blue and yellow, you get green. (always happens)</td><td>If she gets the job, we'll celebrate.</td><td>If we had more students, we would run the course.</td><td>If the rent had been lower, I would have taken the flat. (it was not low enough)</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>When you meet an "if" sentence, ask first: <b>is this always true, likely in the future, unlikely or unreal now, or about the past?</b> The answer tells you which verb forms to use.</p></div>
        ` },
        { title: 'Zero conditional', html: `
          <p class="lead">The <b>zero (real) conditional</b> is for results that <b>always happen</b>: facts and general truths.</p>
          <div class="kv"><div><span>Form</span><b>if + present simple, present simple</b></div><div><span>Use</span><b>a fact or a habit</b></div></div>
          <p>If water reaches 100 degrees, it <b>always</b> boils. There is no other result, so both clauses use the <b>present simple</b>.</p>
          <h3>Slide examples</h3>
          <ul>
            <li>If you heat water to 100 degrees, it boils.</li>
            <li>If you park here, they clamp your wheels. (every time you park here)</li>
            <li>If I can't sleep, I listen to the radio. (it is often true that I can't sleep, so I listen to the radio)</li>
            <li>If people eat too much, they get fat.</li>
            <li>If you touch fire, you get burned.</li>
            <li>People die if they don't eat.</li>
            <li>You get water if you mix hydrogen and oxygen.</li>
            <li>Snakes bite if they are scared.</li>
            <li>If babies are hungry, they cry.</li>
          </ul>
          <div class="note example"><p>"If I eat peanuts, I am sick." This may be true only for me, not for everyone, but it is still true <b>every time</b> for me. That is enough for a zero conditional.</p></div>
          <div class="note heads-up"><p>Not on the slides: you can replace <b>if</b> with <b>when</b> in a zero conditional without changing the meaning ("When water reaches 100 degrees, it boils"), because there is no doubt about it.</p></div>
        ` },
        { title: 'First conditional', html: `
          <p class="lead">The <b>first conditional</b> talks about <b>future situations we believe are real or possible</b>. We cannot know what will happen, but these things could easily come true.</p>
          <div class="kv"><div><span>If clause</span><b>if + present simple</b></div><div><span>Main clause</span><b>will + verb</b></div></div>
          <p>Example: If it rains tomorrow, we'll go to the farm.</p>
          <h3>The main clause can use other modals</h3>
          <p>The slide table says the main clause holds a modal with future meaning: <b>shall, should, will, would, can, could, may, might</b>.</p>
          <ul>
            <li>If he gets a job in Liverpool, he'll have to get up early. It's a long drive.</li>
            <li>If Sheila rings, I might ask her to come over for dinner.</li>
          </ul>
          <h3>More slide examples</h3>
          <ul>
            <li>If it rains, I won't go to the park.</li>
            <li>If I study today, I'll go to the party tonight.</li>
            <li>If I have enough money, I'll buy some new shoes.</li>
            <li>She'll be late if the train is delayed.</li>
            <li>She'll miss the bus if she doesn't leave soon.</li>
            <li>If I see her, I'll tell her.</li>
          </ul>
          <div class="note trap"><p>The if clause stays in the <b>present</b> even though the meaning is future. Never write "If it <b>will</b> rain tomorrow, we will go...". The will goes in the main clause only.</p></div>
        ` },
        { title: 'Zero or first? Wrong and right', html: `
          <p class="lead">Both types use present tense in the if clause. The difference is the <b>main clause</b>: present for something that always happens, <b>will</b> for something that may happen next.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Zero</th><th>First</th></tr></thead>
            <tbody>
              <tr><td>Time</td><td>always, any time</td><td>a particular future</td></tr>
              <tr><td>If clause</td><td>present simple</td><td>present simple</td></tr>
              <tr><td>Main clause</td><td>present simple</td><td>will / modal + verb</td></tr>
              <tr><td>Example</td><td>If you touch fire, you get burned.</td><td>If you touch that wire, you'll get burned.</td></tr>
            </tbody>
          </table>
          <h3>Wrong to right</h3>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>If it <b>will rain</b> tomorrow, we'll go to the farm.</p><p>If I <b>will have</b> enough money, I'll buy some new shoes.</p><p>She'll miss the bus if she <b>won't</b> leave soon.</p><p>If you <b>will park</b> here, they clamp your wheels.</p></div>
            <div class="side"><h4>Right</h4><p>If it <b>rains</b> tomorrow, we'll go to the farm.</p><p>If I <b>have</b> enough money, I'll buy some new shoes.</p><p>She'll miss the bus if she <b>doesn't</b> leave soon.</p><p>If you <b>park</b> here, they clamp your wheels.</p></div>
          </div>
          <div class="note why"><p>The if clause states a <b>condition</b>, not the future event itself, so it uses the plain present. English puts <em>will</em> only in the clause that tells the result.</p></div>
        ` },
        { title: 'In labs and reports', html: `
          <p class="lead">Conditionals carry <b>instructions, warnings and general laws</b> in technical writing. Zero for the law, first for the plan or the warning.</p>
          <table class="tbl">
            <thead><tr><th>Use</th><th>Type</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>general law</td><td>zero</td><td>If a metal is heated, it expands.</td></tr>
              <tr><td>device behaviour</td><td>zero</td><td>If the current exceeds the rating, the fuse blows.</td></tr>
              <tr><td>warning</td><td>first</td><td>If you skip the calibration, the readings will be unreliable.</td></tr>
              <tr><td>plan</td><td>first</td><td>If the test passes, we will release the software on Friday.</td></tr>
              <tr><td>polite instruction</td><td>first</td><td>If you need a replacement part, please call the store.</td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>Complete: "If the supplier (delay) the shipment, we (miss) the deadline." The deadline is a real possibility.</p></div>
            <div class="solve"><p>A real, likely future event: first conditional. If clause: present simple. Main clause: will + verb.</p></div>
            <div class="result"><p>If the supplier <b>delays</b> the shipment, we <b>will miss</b> the deadline.</p></div>
          </div>
          <div class="note heads-up"><p>Not on the slides: <b>unless</b> means "if not" and takes a positive verb. "Unless the supplier <b>delays</b> the shipment, we will meet the deadline." Do not write "unless... doesn't".</p></div>
          <div class="note exam"><p>In a fill-in question, check the <b>if clause</b> first. Present simple in the if clause plus a blank means <b>will + verb</b> (or a present verb if the sentence is a general truth).</p></div>
        ` },
      ],
      flashcards: [
        { front: `Two parts of a conditional sentence?`, back: `The <b>if clause</b> (condition) and the <b>main clause</b> (result).` },
        { front: `Does clause order change the meaning?`, back: `<b>No.</b> "If you study hard, you'll pass" = "You'll pass if you study hard".` },
        { front: `Zero conditional form?`, back: `<b>if + present simple, present simple</b>.` },
        { front: `When is the zero conditional used?`, back: `When the result <b>always happens</b>: facts and general truths.` },
        { front: `If you heat water to 100 degrees, it ___.`, back: `<b>boils</b> (zero conditional).` },
        { front: `First conditional form?`, back: `<b>if + present simple, will + verb</b>.` },
        { front: `When is the first conditional used?`, back: `Future situations we believe are <b>real or possible</b>.` },
        { front: `Modals allowed in a first-conditional main clause?`, back: `<b>shall, should, will, would, can, could, may, might</b>.` },
        { front: `Zero, first, second, third: likelihood?`, back: `true / likely or possible / less likely / impossible.` },
        { front: `Type I, II, III if clauses?`, back: `<b>present simple / past simple / past perfect</b>.` },
        { front: `Why is "If it will rain" wrong?`, back: `The if clause takes the <b>present simple</b>; will belongs in the main clause.` },
      ],
      oneLiners: [
        'A conditional = <b>if clause</b> (condition) + <b>main clause</b> (result); order can swap.',
        'Zero: <b>if + present, present</b>, for facts that always happen (water boils at 100 degrees).',
        'First: <b>if + present, will + verb</b>, for likely future events (if it rains tomorrow, we\'ll go).',
        'First-conditional main clause can use <b>shall, should, will, would, can, could, may, might</b>.',
        'Never put <b>will</b> in the if clause: "If it rains", not "If it will rain".',
        'Likelihood scale: real (zero), likely (first), unlikely (second), impossible past (third).',
      ],
      formulas: [
        { name: 'Zero conditional', html: `<b>If + present simple, present simple</b>`, note: 'If you heat water to 100 degrees, it boils.' },
        { name: 'First conditional', html: `<b>If + present simple, will / modal + verb</b>`, note: 'If it rains tomorrow, we\'ll go to the farm.' },
      ],
    },

    // ------------------------------------------------------------------ conditionals 2
    {
      id: 'm2-cond-unreal',
      title: 'Conditionals: second and third',
      short: 'Second/third conditional',
      blurb: 'Unlikely and unreal present or future situations (second), imaginary past (third), second against first, plus the slide fill-in exercises solved.',
      source: 'Module 2 Grammar / 2 Conditionals.pptx (slides 12-24)',
      tabs: [
        { title: 'Second conditional', html: `
          <p class="lead">The <b>second conditional</b> imagines <b>present or future situations that are impossible or unlikely</b> in reality.</p>
          <div class="kv"><div><span>If clause</span><b>if + past simple</b></div><div><span>Main clause</span><b>would + verb</b></div></div>
          <p>The slide table says the main clause holds a modal with <em>future-in-the-past</em> meaning: <b>should, would, might, could</b>.</p>
          <h3>Slide examples</h3>
          <ul>
            <li>If I had a lot of money, I would travel around the world.</li>
            <li>If I won the lottery, I would buy a big house.</li>
            <li>If I met the Queen of England, I would say hello.</li>
            <li>She would pass the exam if she studied.</li>
            <li>If you asked her nicely, she would say yes, I'm sure.</li>
            <li>If we had a garden, we could have a cat.</li>
            <li>If I won a lot of money, I'd buy a big house in the country.</li>
          </ul>
          <div class="note trap"><p>The verb is in the <b>past simple</b>, but the meaning is <b>now or later</b>, not the past. "If I won the lottery" is about a dream, not about yesterday.</p></div>
        ` },
        { title: 'Two uses of the second conditional', html: `
          <p class="lead">The slides give two uses: <b>unlikely futures</b> (a daydream) and <b>impossible present situations</b> (what is simply not true now).</p>
          <h3>1. Things in the future that probably won't be true</h3>
          <ul>
            <li>If I won the lottery, I would buy a big house. (I probably won't win.)</li>
            <li>If I met the Queen of England, I would say hello.</li>
            <li>She would pass the exam if she ever studied. (She never studies, so this won't happen.)</li>
          </ul>
          <h3>2. Something in the present that is impossible because it is not true</h3>
          <ul>
            <li>If I <b>had</b> his number, I would call him. (I don't have his number now.)</li>
            <li>If I <b>were</b> you, I wouldn't go out with that man.</li>
            <li>I wouldn't worry if I were you.</li>
          </ul>
          <div class="note heads-up"><p>The slides write "if I were you" and also "if she was prime minister" in the exercise. The traditional rule, and the safe one in an exam, is <b>were</b> for all persons: "If she <b>were</b> prime minister, she would invest more in schools." Informal English uses <em>was</em>, and the worksheet key accepts both for "If I was/were ill".</p></div>
          <div class="note why"><p>Real tense moves back one step to show distance from reality: present becomes past in the if clause, will becomes would in the main clause.</p></div>
        ` },
        { title: 'First or second?', html: `
          <p class="lead">Use <b>first</b> when the condition is <b>likely</b>. Use <b>second</b> when it is <b>unlikely</b>, a dream, or simply not real. The speaker's view of the chances picks the type.</p>
          <table class="tbl">
            <thead><tr><th>First conditional</th><th>Second conditional</th></tr></thead>
            <tbody>
              <tr><td>If the flight's late, we'll miss our connection. (likely)</td><td>If there were more buses, we would leave the car at home. (unlikely)</td></tr>
              <tr><td>I'll come and give a hand if you need help moving your stuff. (likely)</td><td>He would buy a flat if he had the money for a deposit. (unlikely)</td></tr>
              <tr><td>If I have enough money, I'll buy some new shoes. (likely)</td><td>If I had enough money I would buy a house with twenty bedrooms and a swimming pool. (just a dream)</td></tr>
            </tbody>
          </table>
          <p>The last row is the slides' own contrast. Money for shoes is easy to get; money for a twenty-bedroom house is not.</p>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>If I <b>would have</b> enough money, I would buy a house with twenty bedrooms.</p><p>If I won the lottery, I <b>will</b> buy a big house.</p></div>
            <div class="side"><h4>Right</h4><p>If I <b>had</b> enough money, I would buy a house with twenty bedrooms.</p><p>If I won the lottery, I <b>would</b> buy a big house.</p></div>
          </div>
          <div class="note trap"><p>Never mix the two halves: <b>past simple + will</b> or <b>present simple + would</b> are wrong. Each if clause has its own matching main clause.</p></div>
        ` },
        { title: 'Third conditional', html: `
          <p class="lead">The <b>third conditional</b> is about the <b>past</b>. It describes a situation that <b>did not happen</b> and imagines the result.</p>
          <div class="kv"><div><span>If clause</span><b>if + past perfect</b></div><div><span>Main clause</span><b>would / could / might + have + past participle</b></div></div>
          <p>Slide table: "modal verb with future-in-the-past meaning (should, would, might, could) + have + -ed form".</p>
          <h3>Slide examples</h3>
          <ul>
            <li>If I had gone to bed early, I would have caught the train.</li>
            <li>If they had left earlier, they would have arrived on time.</li>
            <li>If she had studied, she would have passed the exam.</li>
            <li>If I hadn't eaten so much, I wouldn't have felt sick.</li>
            <li>If we had taken a taxi, we wouldn't have missed the plane.</li>
            <li>She wouldn't have been tired if she had gone to bed earlier.</li>
          </ul>
          <div class="note example"><p>Read each one as a fact: "She did not study, and she did not pass." The third conditional is the <b>regret</b> or <b>what-if</b> version of a finished story, and nothing can change it now.</p></div>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>If she <b>would have studied</b>, she would have passed.</p><p>If I <b>didn't eat</b> so much, I wouldn't have felt sick.</p></div>
            <div class="side"><h4>Right</h4><p>If she <b>had studied</b>, she would have passed.</p><p>If I <b>hadn't eaten</b> so much, I wouldn't have felt sick.</p></div>
          </div>
          <div class="note why"><p>Moving back one more step again: second used past simple, third uses <b>past perfect</b>, the tense for "before that past moment".</p></div>
        ` },
        { title: 'All four types side by side', html: `
          <p class="lead">Learn the <b>if clause</b> first. The main clause follows from it.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Time</th><th>If clause</th><th>Main clause</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Zero</td><td>always</td><td>present simple</td><td>present simple</td><td>If you heat ice, it melts.</td></tr>
              <tr><td>First</td><td>likely future</td><td>present simple</td><td>will + verb</td><td>If it rains, we'll stay in.</td></tr>
              <tr><td>Second</td><td>unlikely or unreal now</td><td>past simple</td><td>would + verb</td><td>If it rained, we would stay in.</td></tr>
              <tr><td>Third</td><td>unreal past</td><td>past perfect</td><td>would have + V3</td><td>If it had rained, we would have stayed in.</td></tr>
            </tbody>
          </table>
          <div class="note heads-up"><p>Not on the slides: <b>would</b> never goes in the if clause in these four types. "If I would have known" is a common error; write "If I <b>had known</b>". (Polite requests such as "If you would sit down, I will begin" are a separate use.)</p></div>
          <div class="worked">
            <div class="given"><p>"If the engineer (check) the valve, the leak (be) noticed earlier." The leak was not noticed.</p></div>
            <div class="solve"><p>It is about the past and it did not happen: third conditional. If clause: past perfect. Main clause: would have + past participle. Passive in the main clause: "would have been noticed".</p></div>
            <div class="result"><p>If the engineer <b>had checked</b> the valve, the leak <b>would have been noticed</b> earlier.</p></div>
          </div>
        ` },
        { title: 'Slide exercises, solved', html: `
          <p class="lead">Slides 22 to 24 give 13 gaps to fill. The answers marked in the slides are shown first, then the explanation.</p>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>Answer</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td>If I drink too much coffee, I ___ at night.</td><td><b>can't sleep</b> (could not sleep also shown)</td><td>zero</td></tr>
              <tr><td>Ice melts if you ___ it.</td><td><b>heat</b></td><td>zero</td></tr>
              <tr><td>When the sun goes down, it ___ dark.</td><td><b>gets</b></td><td>zero</td></tr>
              <tr><td>If it doesn't rain tomorrow, ___ to the beach.</td><td><b>will go</b></td><td>first</td></tr>
              <tr><td>Arsenal will be on top of the league if they ___.</td><td><b>win</b></td><td>first</td></tr>
              <tr><td>When I finish work, I ___ call you.</td><td><b>will</b></td><td>first</td></tr>
              <tr><td>If I were you, I ___ it.</td><td><b>wouldn't mention</b></td><td>second</td></tr>
              <tr><td>If she was prime minister, she ___ invest more money in schools.</td><td><b>would</b></td><td>second</td></tr>
              <tr><td>He ___ travel more if he was younger.</td><td><b>would</b></td><td>second</td></tr>
              <tr><td>She would have become a teacher if she ___ to university.</td><td><b>had gone</b></td><td>third</td></tr>
              <tr><td>He would have reached on time for the interview if he ___ at nine.</td><td><b>had left</b></td><td>third</td></tr>
            </tbody>
          </table>
          <p>Notice the pattern in each pair. "Ice melts if you heat it": a law, so present in both. "When I finish work, I will call you": a plan, so will. "She would have become... if she had gone": past perfect pairs with <em>would have</em>.</p>
          <div class="note trap"><p>"When the sun goes down, it gets dark" has the wrong option <em>would have gotten</em>. A time clause with <b>when</b> about a fact needs plain present.</p></div>
          <div class="note exam"><p>In "If it doesn't rain tomorrow, ___ to the beach", the answer <em>will go</em> needs a subject in the real sentence ("we will go"). Check what the gap is meant to hold.</p></div>
        ` },
      ],
      flashcards: [
        { front: `Second conditional form?`, back: `<b>if + past simple, would + verb</b>.` },
        { front: `Use of the second conditional?`, back: `<b>Impossible or unlikely</b> present or future situations.` },
        { front: `Third conditional form?`, back: `<b>if + past perfect, would have + past participle</b>.` },
        { front: `Use of the third conditional?`, back: `A <b>past situation that did not happen</b>, and its imagined result.` },
        { front: `If I won the lottery, I ___ a big house.`, back: `<b>would buy</b> (second conditional).` },
        { front: `If she had studied, she ___ the exam.`, back: `<b>would have passed</b> (third conditional).` },
        { front: `Which is more unlikely: first or second?`, back: `<b>Second</b>: "a lot more unlikely", just a dream.` },
        { front: `If I (was/were) you, I wouldn't go.`, back: `<b>were</b> (traditional formal form).` },
        { front: `Two uses of the second conditional?`, back: `<b>Unlikely futures</b> and <b>impossible present situations</b>.` },
        { front: `If I had his number, I would call him. Why second?`, back: `I <b>don't have</b> his number now: impossible present.` },
        { front: `Modals allowed in the second and third main clause?`, back: `<b>should, would, might, could</b>.` },
      ],
      oneLiners: [
        'Second: <b>if + past simple, would + verb</b>, for unlikely or impossible present or future.',
        'Third: <b>if + past perfect, would have + V3</b>, for a past that did not happen.',
        'Past tense in a second conditional does <b>not</b> mean past time: it means <b>distance from reality</b>.',
        'First is likely (if I have enough money, shoes); second is a dream (twenty bedrooms).',
        '<b>If I were you</b> is the standard advice form of the second conditional.',
        'Never put <b>would</b> in the if clause: not "if I would have known", but "if I <b>had known</b>".',
        'Third conditional contractions: <b>hadn\'t</b> eaten, <b>wouldn\'t have</b> felt sick.',
      ],
      formulas: [
        { name: 'Second conditional', html: `<b>If + past simple, would + verb</b>`, note: 'If I won the lottery, I would buy a big house.' },
        { name: 'Third conditional', html: `<b>If + past perfect, would have + past participle</b>`, note: 'If I had gone to bed early, I would have caught the train.' },
      ],
    },

    // ------------------------------------------------------------------ conditionals 3
    {
      id: 'm2-cond-mixed',
      title: 'Mixed conditionals and common slips',
      short: 'Mixed conditionals',
      blurb: 'Mixed conditionals (a past change with a present result, and a present situation with a past result), plus extra connectors and the usual mistakes.',
      source: 'Module 2 Grammar / 2 Conditionals.pptx (slides 25-28); extras flagged as not on the slides',
      tabs: [
        { title: 'What mixed conditionals are', html: `
          <p class="lead">A <b>mixed conditional</b> blends the <b>second and third</b> types. It is used when the time of the <b>if clause</b> is <b>not the same</b> as the time of the <b>main clause</b>.</p>
          <p>We use it when we picture a <b>past change with a result in the present</b>, or a <b>present change with a result in the past</b>. It is an unreal condition in the past or present, with an unreal result in the past or present. It carries more subtle meanings than the regular types.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>If clause</th><th>Main clause</th></tr></thead>
            <tbody>
              <tr><td>Second</td><td>past simple (now)</td><td>would + verb (now)</td></tr>
              <tr><td>Third</td><td>past perfect (past)</td><td>would have + V3 (past)</td></tr>
              <tr><td><b>Mixed 1</b>: past to present</td><td>past perfect (past)</td><td>would + verb (now)</td></tr>
              <tr><td><b>Mixed 2</b>: present to past</td><td>past simple (now)</td><td>would have + V3 (past)</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Each half follows its <b>own time</b>. Ask two separate questions: when is the condition, and when is the result? Then give each clause the form for its time.</p></div>
        ` },
        { title: 'Past to present', html: `
          <p class="lead">A change in a <b>past situation</b> would have given a different <b>present</b> result.</p>
          <div class="kv"><div><span>If clause</span><b>if + past perfect</b> (past)</div><div><span>Main clause</span><b>would + verb</b> (present)</div></div>
          <ul>
            <li>If I had worked harder (past), I would be in a better job now (present).</li>
            <li>If I hadn't gotten the job in Tokyo, I wouldn't be with my current partner.</li>
          </ul>
          <div class="worked">
            <div class="given"><p>"I didn't back up my files last month, so I have no data today." Write it as a mixed conditional.</p></div>
            <div class="solve"><p>Condition: last month, in the past: past perfect. Result: today: would + verb.</p></div>
            <div class="result"><p>If I <b>had backed up</b> my files last month, I <b>would have</b> my data today.</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Wrong</h4><p>If I <b>worked</b> harder, I would be in a better job now.</p><p>(sounds like a present wish; the idea is about the past)</p></div>
            <div class="side"><h4>Right</h4><p>If I <b>had worked</b> harder, I would be in a better job now.</p></div>
          </div>
        ` },
        { title: 'Present to past', html: `
          <p class="lead">A <b>present situation</b> that is different would mean the <b>past</b> was different as well.</p>
          <div class="kv"><div><span>If clause</span><b>if + past simple</b> (present)</div><div><span>Main clause</span><b>would have + past participle</b> (past)</div></div>
          <ul>
            <li>It's really important. If it wasn't, I wouldn't have called you on your holiday.</li>
          </ul>
          <p>The condition is a <b>state that is true now</b> ("it is important"). If that state were different, the <b>past action</b> (the call) would not have happened.</p>
          <div class="worked">
            <div class="given"><p>"The pump is unreliable, so we replaced it last week." Write a mixed conditional.</p></div>
            <div class="solve"><p>Condition: a present state (the pump is unreliable). Result: past (we replaced it).</p></div>
            <div class="result"><p>If the pump <b>were</b> reliable, we <b>wouldn't have replaced</b> it last week.</p></div>
          </div>
          <div class="note heads-up"><p>The slide says "If it wasn't". For a formal exam answer <b>weren't</b> is the traditional choice; both appear in practice.</p></div>
          <div class="note exam"><p>The tell-tale words: a past time word ("last year", "yesterday") in one clause and a <b>now</b> word ("now", "today", "currently") in the other.</p></div>
        ` },
        { title: 'Other ways to say it', html: `
          <p class="lead"><b>Not on the slides.</b> These extras appear in exam sentences and in real writing, so they are worth knowing.</p>
          <table class="tbl">
            <thead><tr><th>Word</th><th>Meaning</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>unless</b></td><td>if not (positive verb)</td><td>Unless you heat it, the wax stays solid.</td></tr>
              <tr><td><b>as long as, provided (that)</b></td><td>only if</td><td>We will fund the trial provided the data are published.</td></tr>
              <tr><td><b>in case</b></td><td>because it might happen</td><td>Carry a spare fuse in case this one fails.</td></tr>
              <tr><td><b>if only, I wish</b></td><td>regret or an unreal wish</td><td>If only we had tested it first. I wish the lab were open.</td></tr>
              <tr><td><b>Had + subject</b> (no if)</td><td>formal third conditional</td><td>Had we tested it first, we would have found the fault.</td></tr>
              <tr><td><b>Should + subject</b> (no if)</td><td>formal first conditional</td><td>Should the alarm sound, leave the building.</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p><b>Unless + negative</b> is a double negative. Wrong: "Unless you <b>don't</b> heat it, the wax stays solid." Right: "Unless you <b>heat</b> it" or "If you don't heat it".</p></div>
        ` },
        { title: 'Common slips, corrected', html: `
          <p class="lead">Most conditional errors come from <b>one of five slips</b>. This table is your error-detection checklist for if sentences.</p>
          <table class="tbl">
            <thead><tr><th>Wrong</th><th>Right</th><th>Slip</th></tr></thead>
            <tbody>
              <tr><td>If it will rain, we stay home.</td><td>If it <b>rains</b>, we stay home.</td><td>will in the if clause</td></tr>
              <tr><td>If I would have known, I would have helped.</td><td>If I <b>had known</b>, I would have helped.</td><td>would in the if clause</td></tr>
              <tr><td>If I have the money, I would buy it.</td><td>If I have the money, I <b>will</b> buy it. (or: If I <b>had</b> the money, I would buy it.)</td><td>halves from different types</td></tr>
              <tr><td>If she studied, she would have passed.</td><td>If she <b>had studied</b>, she would have passed.</td><td>past simple for an unreal past</td></tr>
              <tr><td>If I was you, I would not go.</td><td>If I <b>were</b> you, I would not go.</td><td>was for unreal (formal)</td></tr>
              <tr><td>Unless you don't pay, we stop.</td><td><b>Unless you pay</b>, we stop.</td><td>unless with a negative</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Method for any if sentence: (1) mark the if clause and main clause, (2) decide the time and reality, (3) check each half's form against the table of all four types.</p></div>
        ` },
      ],
      flashcards: [
        { front: `What is a mixed conditional?`, back: `A blend of <b>second and third</b>; the if clause and main clause refer to <b>different times</b>.` },
        { front: `Mixed conditional 1: forms?`, back: `<b>if + past perfect, would + verb</b>: past change, present result.` },
        { front: `Mixed conditional 2: forms?`, back: `<b>if + past simple, would have + V3</b>: present state, past result.` },
        { front: `If I had worked harder, I would be in a better job now. Time of each clause?`, back: `If clause: <b>past</b>. Main clause: <b>present</b>.` },
        { front: `If it wasn't important, I wouldn't have called you. Time of each clause?`, back: `If clause: <b>present</b>. Main clause: <b>past</b>.` },
        { front: `If I hadn't gotten the job in Tokyo, I wouldn't be with my partner. Type?`, back: `<b>Mixed</b>, past to present.` },
        { front: `Unless means...`, back: `<b>if not</b>; the verb after it stays positive.` },
        { front: `Why is "If I would have known" wrong?`, back: `<b>would</b> does not belong in the if clause: use <b>had known</b>.` },
      ],
      oneLiners: [
        'Mixed conditionals blend second and third because the <b>two clauses sit in different times</b>.',
        'Past to present: <b>if + past perfect, would + verb</b> (if I had worked harder, I would be in a better job now).',
        'Present to past: <b>if + past simple, would have + V3</b> (if it wasn\'t important, I wouldn\'t have called).',
        'Ask two questions: when is the <b>condition</b>, and when is the <b>result</b>?',
        '<b>Unless</b> = if not; never add a second negative.',
        'No <b>will</b> and no <b>would</b> inside the if clause.',
      ],
      formulas: [
        { name: 'Mixed conditionals', html: `Past to present: <b>if + past perfect, would + verb</b> · Present to past: <b>if + past simple, would have + V3</b>`, note: 'If I had worked harder, I would be in a better job now.' },
        { name: 'If-sentence checker', html: `<b>No will / would in the if clause</b> · both halves from the <b>same type</b> (unless mixed on purpose)`, note: 'Zero: present/present · First: present/will · Second: past/would · Third: past perfect/would have.' },
      ],
    },

    // ------------------------------------------------------------------ conditionals worksheet
    {
      id: 'm2-cond-practice',
      title: 'Conditionals worksheet: 50 items solved',
      short: 'Conditionals worksheet',
      blurb: 'The "If 1" worksheet (put the verbs in brackets in the correct form) with every answer from the key, the type of each, and notes where the key needs care.',
      source: 'Module 2 Grammar / If conditionals - worksheet.pdf (50 items, with key)',
      tabs: [
        { title: 'How to solve any item', html: `
          <p class="lead">Fifty gaps look like a lot, but every one yields to the <b>same three questions</b>. Answer them in order and the form falls out.</p>
          <ol class="steps">
            <li><b>Mark the clauses</b> the one with <em>if</em> and the one without.</li>
            <li><b>Read the verb you can see</b> present simple: first (or zero); past simple: second; past perfect: third.</li>
            <li><b>Complete the other half</b> will + verb for first; would + verb for second; would have + V3 for third.</li>
          </ol>
          <table class="tbl">
            <thead><tr><th>You see in the sentence</th><th>Type</th><th>Fill the gap with</th></tr></thead>
            <tbody>
              <tr><td>present simple in the if clause</td><td>first</td><td><b>will + verb</b></td></tr>
              <tr><td>past simple (or were) in the if clause</td><td>second</td><td><b>would + verb</b></td></tr>
              <tr><td>past perfect in the if clause</td><td>third</td><td><b>would have + V3</b></td></tr>
              <tr><td>would / would have in the main clause</td><td>second / third</td><td>if gap: <b>past simple / past perfect</b></td></tr>
              <tr><td>will in the main clause</td><td>first</td><td>if gap: <b>present simple</b></td></tr>
            </tbody>
          </table>
          <div class="worked">
            <div class="given"><p>Item 1: I would have read the letter if I ___ (know) it was from you.</p></div>
            <div class="solve"><p>The main clause is "would have read": third conditional. So the if clause needs the past perfect of <em>know</em>.</p></div>
            <div class="result"><p>I would have read the letter if I <b>had known</b> it was from you.</p></div>
          </div>
          <div class="note heads-up"><p>Where the answer is a <b>negative</b> or a <b>question</b>, keep the same type: "If I hadn't told Jim", "What would you do". The next four tabs give all fifty.</p></div>
        ` },
        { title: 'Items 1 to 13', html: `
          <p class="lead">Items 1 to 13, answers from the key, with the type of each sentence.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Completed sentence</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>I would have read the letter if I <b>had known</b> it was from you.</td><td>third</td></tr>
              <tr><td>2</td><td>If Tony doesn't help in the garden, I <b>will not finish</b> my work in time.</td><td>first</td></tr>
              <tr><td>3</td><td>If you <b>didn't tell</b> me about Maxwell's birthday, I would forget it.</td><td>second</td></tr>
              <tr><td>4</td><td>We <b>would have caught</b> the train earlier if Mary had found her purse.</td><td>third</td></tr>
              <tr><td>5</td><td>If Susan <b>had learned</b> the poem, she would have known the answer.</td><td>third</td></tr>
              <tr><td>6</td><td>If it <b>isn't</b> too hot, we will stop and get a cold drink.</td><td>first</td></tr>
              <tr><td>7</td><td>If it <b>didn't rain</b> today, I would stay at home.</td><td>second</td></tr>
              <tr><td>8</td><td>If the Professor spoke clearly, we <b>would understand</b> him better.</td><td>second</td></tr>
              <tr><td>9</td><td>If you go on talking like that, we <b>will throw</b> you out.</td><td>first</td></tr>
              <tr><td>10</td><td>If Sasha <b>went</b> home now, he would meet his own brother.</td><td>second</td></tr>
              <tr><td>11</td><td>If it rained, the streets <b>would be</b> wet.</td><td>second</td></tr>
              <tr><td>12</td><td>If I <b>had not told</b> Jim the address, he wouldn't have found you.</td><td>third</td></tr>
              <tr><td>13</td><td>The bird <b>would have died</b> if you had caught it.</td><td>third</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Item 3 reads strangely at first: "If you <b>didn't</b> tell me... I would forget it" is a second conditional (an unlikely situation), with a negative if clause. Item 6 uses <b>isn't</b>, a present negative, because it is a real possibility.</p></div>
        ` },
        { title: 'Items 14 to 26', html: `
          <p class="lead">Items 14 to 26.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Completed sentence</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td>14</td><td>What <b>would you do</b> if you won the lottery?</td><td>second</td></tr>
              <tr><td>15</td><td>If the weather <b>doesn't change</b>, we will reach the top of the mountain.</td><td>first</td></tr>
              <tr><td>16</td><td>Dinner <b>would be</b> fine if the meat weren't cold.</td><td>second</td></tr>
              <tr><td>17</td><td>I'm sure Benny <b>will come</b> if you wait a bit longer.</td><td>first</td></tr>
              <tr><td>18</td><td>If you ring the bell, somebody <b>will answer</b> it.</td><td>first</td></tr>
              <tr><td>19</td><td>If Bert <b>had seen</b> you, he would have talked to you.</td><td>third</td></tr>
              <tr><td>20</td><td>You <b>would have found</b> your ticket if you had looked into your pockets.</td><td>third</td></tr>
              <tr><td>21</td><td>You <b>will fall</b> ill if you eat so much.</td><td>first</td></tr>
              <tr><td>22</td><td>What <b>would have happened</b> if the door had not been opened?</td><td>third</td></tr>
              <tr><td>23</td><td>If Chris asked you for a cigarette, <b>would you give</b> him one?</td><td>second</td></tr>
              <tr><td>24</td><td>If you <b>bought</b> that big car, you would need a lot of money.</td><td>second</td></tr>
              <tr><td>25</td><td><b>Would you change</b> the colour of your hair if I asked you to do so?</td><td>second</td></tr>
              <tr><td>26</td><td>If you give me the letter, I <b>will post</b> it for you.</td><td>first</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Questions (14, 22, 23, 25) put the modal first: "What <b>would you do</b>", "<b>Would you change</b>". The type is still read from the other clause ("if you won", "had not been opened").</p></div>
        ` },
        { title: 'Items 27 to 38', html: `
          <p class="lead">Items 27 to 38.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Completed sentence</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td>27</td><td><b>Would you have posted</b> the letter if I had given it to you?</td><td>third</td></tr>
              <tr><td>28</td><td>If the weather is fine, I <b>will go</b> swimming.</td><td>first</td></tr>
              <tr><td>29</td><td>If you <b>don't work</b> harder, you won't pass the exam.</td><td>first</td></tr>
              <tr><td>30</td><td>If they <b>were</b> rich, they would travel around the world.</td><td>second</td></tr>
              <tr><td>31</td><td>The children <b>would go</b> skating if the lake were frozen.</td><td>second</td></tr>
              <tr><td>32</td><td>What would you have done if you <b>had lost</b> your handbag?</td><td>third</td></tr>
              <tr><td>33</td><td>What will happen if you <b>don't know</b> the answer?</td><td>first</td></tr>
              <tr><td>34</td><td>She <b>would have gone</b> on holiday if she hadn't been ill.</td><td>third</td></tr>
              <tr><td>35</td><td>If I <b>had noticed</b> you, I would have said hello.</td><td>third</td></tr>
              <tr><td>36</td><td>If I <b>were</b> like you, I wouldn't watch such films.</td><td>second</td></tr>
              <tr><td>37</td><td>If you opened your eyes, you <b>would see</b> a wonderful world.</td><td>second</td></tr>
              <tr><td>38</td><td>People <b>will live</b> in peace if they stop fighting.</td><td>first</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>Items 29 and 33 have <b>negative</b> if clauses in the first conditional: "If you <b>don't work</b>", "if you <b>don't know</b>". No <em>won't</em> in the if clause.</p></div>
        ` },
        { title: 'Items 39 to 50', html: `
          <p class="lead">Items 39 to 50, including the three that need a note.</p>
          <table class="tbl">
            <thead><tr><th>#</th><th>Completed sentence</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td>39</td><td>If Tom drinks so much, he <b>won't be able to drive</b> home.</td><td>first</td></tr>
              <tr><td>40</td><td>If we <b>didn't hurry</b>, we would miss the train.</td><td>second</td></tr>
              <tr><td>41</td><td>He <b>wouldn't spend</b> so much money if he weren't a happy person.</td><td>second</td></tr>
              <tr><td>42</td><td><b>Would you have come</b> if you had had more time?</td><td>third</td></tr>
              <tr><td>43</td><td>If Jim <b>had studied</b> the new words, he would have got a better mark.</td><td>third</td></tr>
              <tr><td>44</td><td>If he were rich, he <b>would buy</b> the house.</td><td>second</td></tr>
              <tr><td>45</td><td>If you don't hurry, you <b>will be</b> late.</td><td>first</td></tr>
              <tr><td>46</td><td>If it wasn't so hot, we <b>would play</b> football.</td><td>second</td></tr>
              <tr><td>47</td><td>If I <b>was / were</b> ill, would you visit me?</td><td>second</td></tr>
              <tr><td>48</td><td>If Sean <b>had not been</b> driving so fast, the police would not have stopped him.</td><td>third</td></tr>
              <tr><td>49</td><td>If I had sold my house, I <b>would have got</b> 4 million pounds.</td><td>third</td></tr>
              <tr><td>50</td><td>If I <b>was / were</b> you, I would do it.</td><td>second</td></tr>
            </tbody>
          </table>
          <h3>Notes on the key</h3>
          <ul>
            <li><b>Item 39</b>: the key prints "won't be able drive", missing the <em>to</em>. The correct answer is <b>won't be able to drive</b>.</li>
            <li><b>Item 48</b>: the key prints "had not driven". The brackets say "(not be) driving", so the right form is <b>had not been driving</b> (past perfect continuous), as above.</li>
            <li><b>Items 47 and 50</b>: the key accepts <em>was</em> or <em>were</em>. Use <b>were</b> in formal writing.</li>
            <li><b>Item 46</b>: the sentence has <em>wasn't</em>; <em>weren't</em> is the formal choice.</li>
          </ul>
        ` },
      ],
      flashcards: [
        { front: `Step 1 for any if gap?`, back: `<b>Mark</b> the if clause and the main clause.` },
        { front: `Present simple in the if clause, gap in the main clause?`, back: `<b>will + verb</b> (first conditional).` },
        { front: `Past simple in the if clause, gap in the main clause?`, back: `<b>would + verb</b> (second).` },
        { front: `Past perfect in the if clause, gap in the main clause?`, back: `<b>would have + V3</b> (third).` },
        { front: `"would" in the main clause, gap in the if clause?`, back: `<b>Past simple</b> (second).` },
        { front: `"would have" in the main clause, gap in the if clause?`, back: `<b>Past perfect</b> (third).` },
        { front: `If I ___ (know) it was from you, I would have read the letter.`, back: `<b>had known</b>.` },
        { front: `What ___ (you, do) if you won the lottery?`, back: `<b>would you do</b>.` },
        { front: `If Sean ___ (not be) driving so fast...(item 48)`, back: `<b>had not been driving</b> (the key slip says "driven").` },
        { front: `If Tom drinks so much, he ___ drive home.`, back: `<b>won't be able to</b> drive.` },
      ],
      oneLiners: [
        'Solve every gap in three steps: <b>mark clauses, read the visible tense, complete the other half</b>.',
        'Visible <b>present simple</b> if clause gives <b>will</b>; <b>past simple</b> gives <b>would</b>; <b>past perfect</b> gives <b>would have</b>.',
        'A visible <b>would</b> or <b>would have</b> in the main clause tells you the if gap is past simple or past perfect.',
        'Negative if clauses keep the same type: <b>don\'t work</b>, <b>didn\'t hurry</b>, <b>hadn\'t told</b>.',
        'The worksheet key has two slips (items 39 and 48): know the correct forms.',
        'Items 47 and 50 accept <b>was or were</b>; formal writing prefers <b>were</b>.',
      ],
      formulas: [
        { name: 'Gap method', html: `<b>Mark clauses</b> → read the visible tense → <b>match the type</b>: present / will · past / would · past perfect / would have`, note: 'Check negatives and questions keep the same type.' },
      ],
    },
  ],
  figures: [
    { id: 'm2-concord-nearest', caption: 'With or, either/or and neither/nor, the verb agrees with the noun closest to it. Two example sentences show the same pair of nouns swapped. Based on BAENG101 course material, VIT.', alt: 'Two sentences stacked. In the first, "Neither the shoes nor the bag" has an arrow from the nearest noun, bag, to the verb matches. In the second, "Neither the bag nor the shoes" has an arrow from shoes to the verb match.' },
    { id: 'm2-conditional-types', caption: 'The four conditional types from always true to impossible, with the verb form of the if clause and of the main clause. Based on BAENG101 course material, VIT.', alt: 'Four stacked rows: zero (always true: present simple, present simple), first (likely future: present simple, will plus verb), second (unlikely or unreal now: past simple, would plus verb) and third (impossible, the past: past perfect, would have plus past participle), each with one example.' },
  ],
});

FIGSVG({"m2-concord-nearest":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 372\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfb\"/></marker></defs>\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"150\" rx=\"14\" class=\"df\"/>\n    <text x=\"300\" y=\"52\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">Neither the shoes nor the <tspan class=\"dtb\">bag</tspan></text>\n    <path d=\"M455 62v32\" class=\"dsb\" fill=\"none\" stroke-width=\"3\" marker-end=\"url(#a)\"/>\n    <text x=\"440\" y=\"86\" font-size=\"22\" text-anchor=\"end\" class=\"dt2\">nearest noun</text>\n    <rect x=\"360\" y=\"100\" width=\"190\" height=\"46\" rx=\"23\" class=\"dfb\" fill-opacity=\".22\"/>\n    <text x=\"455\" y=\"133\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">matches</text>\n\n    <rect x=\"10\" y=\"176\" width=\"580\" height=\"150\" rx=\"14\" class=\"df\"/>\n    <text x=\"300\" y=\"218\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">Neither the bag nor the <tspan class=\"dtb\">shoes</tspan></text>\n    <path d=\"M455 228v32\" class=\"dsb\" fill=\"none\" stroke-width=\"3\" marker-end=\"url(#a)\"/>\n    <text x=\"440\" y=\"252\" font-size=\"22\" text-anchor=\"end\" class=\"dt2\">nearest noun</text>\n    <rect x=\"360\" y=\"266\" width=\"190\" height=\"46\" rx=\"23\" class=\"dfb\" fill-opacity=\".22\"/>\n    <text x=\"455\" y=\"299\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">match</text>\n\n    <text x=\"300\" y=\"358\" font-size=\"24\" text-anchor=\"middle\" class=\"dt2\">The verb follows the noun closest to it</text>\n  </g>\n</svg>\n","m2-conditional-types":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 620\">\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"136\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"10\" width=\"10\" height=\"136\" rx=\"5\" class=\"dfg\"/>\n    <text x=\"36\" y=\"46\" font-size=\"26\" class=\"dtg\">Zero</text><text x=\"576\" y=\"46\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">always true</text>\n    <text x=\"36\" y=\"80\" font-size=\"23\" class=\"dt\">if: present simple</text>\n    <text x=\"36\" y=\"108\" font-size=\"23\" class=\"dt\">then: present simple</text>\n    <text x=\"36\" y=\"136\" font-size=\"22\" class=\"dt2\">If you heat ice, it melts.</text>\n\n    <rect x=\"10\" y=\"158\" width=\"580\" height=\"136\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"158\" width=\"10\" height=\"136\" rx=\"5\" class=\"dfb\"/>\n    <text x=\"36\" y=\"194\" font-size=\"26\" class=\"dtb\">First</text><text x=\"576\" y=\"194\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">likely future</text>\n    <text x=\"36\" y=\"228\" font-size=\"23\" class=\"dt\">if: present simple</text>\n    <text x=\"36\" y=\"256\" font-size=\"23\" class=\"dt\">then: will + verb</text>\n    <text x=\"36\" y=\"284\" font-size=\"22\" class=\"dt2\">If it rains, we will stay in.</text>\n\n    <rect x=\"10\" y=\"306\" width=\"580\" height=\"136\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"306\" width=\"10\" height=\"136\" rx=\"5\" class=\"dfo\"/>\n    <text x=\"36\" y=\"342\" font-size=\"26\" class=\"dto\">Second</text><text x=\"576\" y=\"342\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">unlikely or unreal now</text>\n    <text x=\"36\" y=\"376\" font-size=\"23\" class=\"dt\">if: past simple</text>\n    <text x=\"36\" y=\"404\" font-size=\"23\" class=\"dt\">then: would + verb</text>\n    <text x=\"36\" y=\"432\" font-size=\"22\" class=\"dt2\">If it rained, we would stay in.</text>\n\n    <rect x=\"10\" y=\"454\" width=\"580\" height=\"136\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"454\" width=\"10\" height=\"136\" rx=\"5\" class=\"dfr\"/>\n    <text x=\"36\" y=\"490\" font-size=\"26\" class=\"dtr\">Third</text><text x=\"576\" y=\"490\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">impossible: the past</text>\n    <text x=\"36\" y=\"524\" font-size=\"23\" class=\"dt\">if: past perfect</text>\n    <text x=\"36\" y=\"552\" font-size=\"23\" class=\"dt\">then: would have + V3</text>\n    <text x=\"36\" y=\"580\" font-size=\"22\" class=\"dt2\">If it had rained, we would have stayed in.</text>\n  </g>\n</svg>\n","m2-link-patterns":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 440\">\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"124\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"46\" font-size=\"26\" class=\"dtb\">Coordinating (and, but, so)</text>\n    <text x=\"30\" y=\"82\" font-size=\"25\" class=\"mono dt\">clause, but clause</text>\n    <text x=\"30\" y=\"116\" font-size=\"23\" class=\"dt2\">It rained, but we played.</text>\n\n    <rect x=\"10\" y=\"150\" width=\"580\" height=\"124\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"186\" font-size=\"26\" class=\"dto\">Subordinating (although, because)</text>\n    <text x=\"30\" y=\"222\" font-size=\"25\" class=\"mono dt\">Although clause, clause</text>\n    <text x=\"30\" y=\"256\" font-size=\"23\" class=\"dt2\">Although it rained, we played.</text>\n\n    <rect x=\"10\" y=\"290\" width=\"580\" height=\"140\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"326\" font-size=\"26\" class=\"dtg\">Adverb (however, therefore)</text>\n    <text x=\"30\" y=\"362\" font-size=\"25\" class=\"mono dt\">clause; however, clause</text>\n    <text x=\"30\" y=\"396\" font-size=\"23\" class=\"dt2\">It rained; however, we played.</text>\n    <text x=\"30\" y=\"420\" font-size=\"22\" class=\"dt3\">or a full stop before However</text>\n  </g>\n</svg>\n","m2-linking-map":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 580\">\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"10\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfb\"/>\n    <text x=\"38\" y=\"44\" font-size=\"26\" class=\"dtb\">Add</text>\n    <text x=\"38\" y=\"74\" font-size=\"23\" class=\"dt\">and, also, in addition, besides</text>\n\n    <rect x=\"10\" y=\"104\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"104\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfp\"/>\n    <text x=\"38\" y=\"138\" font-size=\"26\" class=\"dtp\">Example</text>\n    <text x=\"38\" y=\"168\" font-size=\"23\" class=\"dt\">for example, such as, namely</text>\n\n    <rect x=\"10\" y=\"198\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"198\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfo\"/>\n    <text x=\"38\" y=\"232\" font-size=\"26\" class=\"dto\">Contrast</text>\n    <text x=\"38\" y=\"262\" font-size=\"23\" class=\"dt\">but, however, although, whereas</text>\n\n    <rect x=\"10\" y=\"292\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"292\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfy\"/>\n    <text x=\"38\" y=\"326\" font-size=\"26\" class=\"dty\">Cause</text>\n    <text x=\"38\" y=\"356\" font-size=\"23\" class=\"dt\">because, since, due to</text>\n\n    <rect x=\"10\" y=\"386\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"386\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfg\"/>\n    <text x=\"38\" y=\"420\" font-size=\"26\" class=\"dtg\">Result</text>\n    <text x=\"38\" y=\"450\" font-size=\"23\" class=\"dt\">so, therefore, thus, as a result</text>\n\n    <rect x=\"10\" y=\"480\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"480\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfr\"/>\n    <text x=\"38\" y=\"514\" font-size=\"26\" class=\"dtr\">Sequence</text>\n    <text x=\"38\" y=\"544\" font-size=\"23\" class=\"dt\">first, next, then, finally</text>\n  </g>\n</svg>\n","m2-tense-timeline":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 704\">\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"162\" rx=\"14\" class=\"df\"/>\n    <text x=\"28\" y=\"46\" font-size=\"26\" class=\"dt\">Simple</text>\n    <text x=\"28\" y=\"74\" font-size=\"22\" class=\"dt3\">every day, yesterday, tomorrow</text>\n    <text x=\"28\" y=\"108\" font-size=\"23\" class=\"dto\">Past</text>\n    <text x=\"140\" y=\"108\" font-size=\"23\" class=\"dt mono\">V2</text>\n    <text x=\"28\" y=\"138\" font-size=\"23\" class=\"dtb\">Present</text>\n    <text x=\"140\" y=\"138\" font-size=\"23\" class=\"dt mono\">V1 (+s)</text>\n    <text x=\"28\" y=\"168\" font-size=\"23\" class=\"dtg\">Future</text>\n    <text x=\"140\" y=\"168\" font-size=\"23\" class=\"dt mono\">will + V1</text>\n    <rect x=\"10\" y=\"184\" width=\"580\" height=\"162\" rx=\"14\" class=\"df\"/>\n    <text x=\"28\" y=\"220\" font-size=\"26\" class=\"dt\">Continuous</text>\n    <text x=\"28\" y=\"248\" font-size=\"22\" class=\"dt3\">now, while, this time tomorrow</text>\n    <text x=\"28\" y=\"282\" font-size=\"23\" class=\"dto\">Past</text>\n    <text x=\"140\" y=\"282\" font-size=\"23\" class=\"dt mono\">was/were + V-ing</text>\n    <text x=\"28\" y=\"312\" font-size=\"23\" class=\"dtb\">Present</text>\n    <text x=\"140\" y=\"312\" font-size=\"23\" class=\"dt mono\">am/is/are + V-ing</text>\n    <text x=\"28\" y=\"342\" font-size=\"23\" class=\"dtg\">Future</text>\n    <text x=\"140\" y=\"342\" font-size=\"23\" class=\"dt mono\">will be + V-ing</text>\n    <rect x=\"10\" y=\"358\" width=\"580\" height=\"162\" rx=\"14\" class=\"df\"/>\n    <text x=\"28\" y=\"394\" font-size=\"26\" class=\"dt\">Perfect</text>\n    <text x=\"28\" y=\"422\" font-size=\"22\" class=\"dt3\">already, since, by noon</text>\n    <text x=\"28\" y=\"456\" font-size=\"23\" class=\"dto\">Past</text>\n    <text x=\"140\" y=\"456\" font-size=\"23\" class=\"dt mono\">had + V3</text>\n    <text x=\"28\" y=\"486\" font-size=\"23\" class=\"dtb\">Present</text>\n    <text x=\"140\" y=\"486\" font-size=\"23\" class=\"dt mono\">has/have + V3</text>\n    <text x=\"28\" y=\"516\" font-size=\"23\" class=\"dtg\">Future</text>\n    <text x=\"140\" y=\"516\" font-size=\"23\" class=\"dt mono\">will have + V3</text>\n    <rect x=\"10\" y=\"532\" width=\"580\" height=\"162\" rx=\"14\" class=\"df\"/>\n    <text x=\"28\" y=\"568\" font-size=\"26\" class=\"dt\">Perfect continuous</text>\n    <text x=\"28\" y=\"596\" font-size=\"22\" class=\"dt3\">for, since, by the time</text>\n    <text x=\"28\" y=\"630\" font-size=\"23\" class=\"dto\">Past</text>\n    <text x=\"140\" y=\"630\" font-size=\"23\" class=\"dt mono\">had been + V-ing</text>\n    <text x=\"28\" y=\"660\" font-size=\"23\" class=\"dtb\">Present</text>\n    <text x=\"140\" y=\"660\" font-size=\"23\" class=\"dt mono\">has/have been + V-ing</text>\n    <text x=\"28\" y=\"690\" font-size=\"23\" class=\"dtg\">Future</text>\n    <text x=\"140\" y=\"690\" font-size=\"23\" class=\"dt mono\">will have been + V-ing</text>\n  </g>\n</svg>\n","m2-voice-swap":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 470\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker></defs>\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"104\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"46\" font-size=\"26\" class=\"dt3\">Active</text>\n    <text x=\"300\" y=\"92\" font-size=\"25\" text-anchor=\"middle\"><tspan class=\"dtb\">The researcher</tspan><tspan class=\"dtg\"> conducted</tspan><tspan class=\"dto\"> the experiment</tspan></text>\n\n    <path d=\"M300 122v50\" class=\"ds2\" stroke-width=\"3\" marker-end=\"url(#a)\"/>\n    <text x=\"320\" y=\"152\" font-size=\"23\" class=\"dt2\">swap, be + V3, add by</text>\n\n    <rect x=\"10\" y=\"182\" width=\"580\" height=\"148\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"218\" font-size=\"26\" class=\"dt3\">Passive</text>\n    <text x=\"300\" y=\"266\" font-size=\"25\" text-anchor=\"middle\"><tspan class=\"dto\">The experiment</tspan><tspan class=\"dtg\"> was conducted</tspan></text>\n    <text x=\"300\" y=\"304\" font-size=\"25\" text-anchor=\"middle\" class=\"dtb\">by the researcher</text>\n\n    <circle cx=\"36\" cy=\"368\" r=\"9\" class=\"dfb\"/><text x=\"58\" y=\"376\" font-size=\"23\" class=\"dt\">subject (the doer) becomes the by-phrase</text>\n    <circle cx=\"36\" cy=\"408\" r=\"9\" class=\"dfo\"/><text x=\"58\" y=\"416\" font-size=\"23\" class=\"dt\">object (the receiver) becomes the subject</text>\n    <circle cx=\"36\" cy=\"448\" r=\"9\" class=\"dfg\"/><text x=\"58\" y=\"456\" font-size=\"23\" class=\"dt\">verb keeps its tense: conducted, was conducted</text>\n  </g>\n</svg>\n"});
