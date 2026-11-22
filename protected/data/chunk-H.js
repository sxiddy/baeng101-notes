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
          <p class="lead"><b>Subject-verb concord</b> (or agreement) means the subject and verb in a sentence should <b>agree or match</b>, otherwise the sentence will not sound right.</p>
          <p>The <b>subject</b> is a noun or pronoun that tells us what the sentence talks about. The <b>verb</b> represents the action in the sentence. The Blue Book adds that a verb can also show a <b>state of being</b> (is, are, was, were, am).</p>
          <p><b>Basic rule (slide 5):</b> a singular subject needs a singular verb; a plural subject needs a plural verb.</p>
          <table class="tbl">
            <thead><tr><th>Person</th><th>Singular</th><th>Plural</th></tr></thead>
            <tbody>
              <tr><td>First</td><td>I walk</td><td>we walk</td></tr>
              <tr><td>Second</td><td>you walk</td><td>you walk</td></tr>
              <tr><td>Third</td><td>he / she / it <b>walks</b></td><td>they walk</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>Blue Book hint: verbs do not form their plurals by adding an s as nouns do. Think of which verb you would use with <em>he</em> or <em>she</em> and which with <em>they</em>. "He talks", so <em>talks</em> is singular; "They talk", so <em>talk</em> is plural.</p></div>
        ` },
        { title: 'Finding the subject', html: `
          <p class="lead">From the Blue Book: being able to find the right subject and verb helps you correct errors of agreement. <b>Always find the verb first</b>, then ask <b>who or what</b> performed it.</p>
          <ul>
            <li>If a verb follows <b>to</b>, it is an <b>infinitive phrase</b> and not the main verb: "I like to walk."</li>
            <li>A subject comes <b>before</b> a phrase beginning with <b>of</b>: "A bouquet of yellow roses will lend color and fragrance to the room."</li>
            <li>"From the ceiling hung the chandelier." The verb is <em>hung</em>. Who or what hung? The <b>chandelier</b>, not the ceiling.</li>
            <li>A request or command has the <b>understood subject you</b>: "(You) Please bring me some coffee."</li>
            <li>Sentences can have two pairs of subjects and verbs ("I like cake and he likes ice cream"), two subjects and one verb ("He and I like cake"), or one subject and two verbs ("She lifts weights and jogs daily").</li>
          </ul>
          <div class="note example"><p>Blue Book: "The list of items is/are on the desk." If you know that <em>list</em> is the subject, you will choose <b>is</b>.</p></div>
        ` },
        { title: 'Rules 1 and 2: number, and words in between', html: `
          <p class="lead"><b>Rule 1:</b> the verb and subject must agree in <b>number</b> (singular or plural). <b>Rule 2:</b> the number of the subject does not change due to words or phrases <b>between</b> the subject and the verb.</p>
          <h3>Rule 1: agree in number</h3>
          <table class="tbl">
            <thead><tr><th>Singular</th><th>Plural</th></tr></thead>
            <tbody>
              <tr><td>He <b>plays</b> football.</td><td>They <b>play</b> football.</td></tr>
              <tr><td>The worker <b>demands</b> more wages.</td><td>Workers <b>demand</b> more wages.</td></tr>
            </tbody>
          </table>
          <h3>Rule 2: ignore what comes between</h3>
          <ul>
            <li>One of the glasses <b>is</b> empty. Since the subject is <em>one</em>, the verb should be <em>is</em>.</li>
            <li>The bouquet of red roses <b>smells</b> so sweet. Since <em>bouquet</em> is the subject and not <em>roses</em>, the verb should be <em>smells</em> and not <em>smell</em>.</li>
          </ul>
          <div data-viz="ea-concord"></div>
        ` },
        { title: 'Rules 3 to 5: and, or, nor, as well as', html: `
          <p class="lead">Subjects joined by <b>and</b> take a plural verb. With <b>or, either/or, neither/nor</b> the verb agrees with the nearest noun. <b>As well as</b> and similar words are ignored.</p>
          <table class="tbl">
            <thead><tr><th>Rule</th><th>What it says</th><th>Example from the slides</th></tr></thead>
            <tbody>
              <tr><td><b>3</b> and</td><td>subjects joined by <b>and</b> use a plural verb</td><td>Meenu and Meera <b>are</b> coming home.</td></tr>
              <tr><td><b>3</b> either/or, neither/nor</td><td>subjects joined by <b>either/or, neither/nor</b> use a singular verb</td><td>Neither Akshay nor Rohit <b>is</b> coming home. My dad or my mom <b>is</b> arriving today.</td></tr>
              <tr><td><b>4</b> nearest noun</td><td>with <b>or, either/or, neither/nor</b>, the verb agrees with the noun or pronoun <b>closest to it</b></td><td>Neither the shoes nor the bag <b>matches</b> the dress. Neither the bag nor the shoes <b>match</b> the dress.</td></tr>
              <tr><td><b>5</b> as well as</td><td>ignore <b>as well as, along with, besides, not</b> and use a singular verb if the subject is singular</td><td>Matt, as well as his dog, <b>is</b> expected shortly. Pratik, along with his brother, <b>is</b> going to school.</td></tr>
            </tbody>
          </table>
          <figure data-fig="m2-concord-nearest"></figure>
          <h3>Extras from the Blue Book</h3>
          <ul>
            <li>When a singular and a plural subject are joined by either/or or neither/nor, <b>put the plural one last</b> and use a plural verb: "Neither Jenny nor the others are available."</li>
            <li>When <b>I</b> is one of the two subjects, put it second and follow it with <b>am</b>: "Neither she nor I am going to the festival."</li>
            <li>As a general rule, use a plural verb with two or more subjects connected by <b>and</b>: "A car and a bike are my means of transportation."</li>
            <li>"The politician, along with the newsmen, is expected shortly."</li>
          </ul>
        ` },
        { title: 'Rules 6 and 7: here, there, and units', html: `
          <p class="lead"><b>Rule 6:</b> in sentences that begin with <b>here</b> or <b>there</b>, the true subject usually follows the verb. <b>Rule 7:</b> sums of money, periods of time or distances (as a unit) use <b>singular</b> verbs.</p>
          <h3>Rule 6: here and there</h3>
          <ul>
            <li>Here <b>are</b> the chocolates.</li>
            <li>There <b>is</b> a big puddle on the road.</li>
            <li>Blue Book: There <b>are</b> four hurdles to jump. There <b>is</b> a high hurdle to jump.</li>
          </ul>
          <h3>Rule 7: money, time, distance</h3>
          <ul>
            <li>500 rupees <b>is</b> a high price to pay.</li>
            <li>62 years <b>is</b> the minimum age of retirement.</li>
            <li>10 kilometers <b>is</b> too far to walk.</li>
            <li>Blue Book: Ten dollars <b>is</b> a high price to pay. Five years <b>is</b> the maximum sentence for that offense.</li>
          </ul>
        ` },
      ],
      flashcards: [
        { front: `The basic concord rule?`, back: `A <b>singular subject</b> needs a <b>singular verb</b>; a <b>plural subject</b> needs a <b>plural verb</b>.` },
        { front: `Which person takes "walks" in the basic pattern?`, back: `The <b>third person singular</b>: he, she, it walks.` },
        { front: `Blue Book test for a singular verb?`, back: `Would you use it with <b>he / she</b> (singular) or with <b>they</b> (plural)?` },
        { front: `Blue Book: how do you find the subject?`, back: `Find the <b>verb first</b>, then ask <b>who or what</b> performed it.` },
        { front: `One of the glasses (is/are) empty.`, back: `<b>is</b>. The subject is <em>one</em>, not <em>glasses</em>.` },
        { front: `The bouquet of red roses (smells/smell) sweet.`, back: `<b>smells</b>. The subject is <em>bouquet</em>.` },
        { front: `Subjects joined by "and" take...`, back: `A <b>plural verb</b>: Meenu and Meera are coming home.` },
        { front: `Neither the shoes nor the bag (match/matches)...`, back: `<b>matches</b>: the verb agrees with the noun <b>closest</b> to it, <em>bag</em>.` },
        { front: `Matt, as well as his dog, (is/are) expected.`, back: `<b>is</b>. "As well as" is ignored; the subject is <em>Matt</em>.` },
        { front: `Words ignored when choosing the verb (Rule 5)?`, back: `<b>as well as, along with, besides, not</b>.` },
        { front: `In "Here are the chocolates", where is the subject?`, back: `It <b>follows the verb</b>: <em>chocolates</em>.` },
        { front: `62 years (is/are) the minimum age of retirement.`, back: `<b>is</b>: a period of time as a unit.` },
        { front: `Blue Book: where does "I" go in either/or?`, back: `<b>Second</b>, with <b>am</b>: Neither she nor I am going.` },
      ],
      oneLiners: [
        'Concord: the subject and verb must <b>agree in number</b>, otherwise the sentence will not sound right.',
        'Blue Book: find the <b>verb first</b>, then ask who or what performed it.',
        'Words <b>between</b> the subject and the verb do not change the subject\'s number.',
        'Subjects joined by <b>and</b> are plural; with <b>or / either-or / neither-nor</b> the verb agrees with the <b>closest</b> noun.',
        '<b>As well as, along with, besides, not</b> are ignored when choosing the verb.',
        'After <b>here / there</b> the subject follows the verb: Here are the chocolates.',
        '<b>Sums of money, periods of time and distances</b> as a unit take a singular verb.',
      ],
      formulas: [
        { name: 'Concord rules 1 to 5', html: `<b>Number</b> must match · ignore <b>words in between</b> · <b>and</b> = plural · <b>either/or, neither/nor</b> = singular, and the verb agrees with the <b>closest</b> noun · <b>as well as / along with / besides / not</b> ignored`, note: 'Blue Book: plural subject goes last with or / nor; I goes second with am.' },
        { name: 'Concord rules 6 and 7', html: `<b>Here / there</b>: subject comes after the verb · <b>money, time, distance</b> as a unit = singular verb`, note: 'Here are the chocolates; 10 kilometers is too far to walk.' },
      ],
    },

    // ------------------------------------------------------------------ concord 2
    {
      id: 'm2-concord-special',
      title: 'Concord: tricky cases and practice',
      short: 'Concord: tricky cases',
      blurb: 'Rules 8 to 11 (a lot of, all, some, collective nouns, mathematics and news, were for wishes), the Blue Book extras for each, everyone, who and that, plus both slide exercises.',
      source: 'Module 2 Grammar / 1 Subject - Verb Cocord.pptx (slides 12-17), with extra rules from The Blue Book for Grammar and Punctuation, Grammar chapter',
      tabs: [
        { title: 'Rule 8: all, some, a lot of', html: `
          <p class="lead">With words such as <b>a lot of, all, some</b>, pay attention to the <b>noun after of</b>. If it is singular, use a singular verb; if plural, a plural verb.</p>
          <table class="tbl">
            <thead><tr><th>Singular noun after of</th><th>Plural noun after of</th></tr></thead>
            <tbody>
              <tr><td>All of the cake <b>is</b> gone.</td><td>All of the cakes <b>are</b> gone.</td></tr>
              <tr><td>A lot of the cake <b>is</b> gone.</td><td>A lot of the cakes <b>are</b> gone.</td></tr>
              <tr><td>Some of the cake <b>is</b> gone.</td><td>Some of the cakes <b>are</b> gone.</td></tr>
            </tbody>
          </table>
          <p>The Blue Book gives the same rule for words that indicate portions: <b>percent, fraction, part, majority, some, all, none, remainder</b>.</p>
          <ul>
            <li>Fifty percent of the pie <b>has</b> disappeared. Fifty percent of the pies <b>have</b> disappeared.</li>
            <li>One-third of the city <b>is</b> unemployed. One-third of the people <b>are</b> unemployed.</li>
            <li>None of the garbage <b>was</b> picked up. None of the sentences <b>were</b> punctuated correctly.</li>
          </ul>
          <p>The Blue Book notes: hyphenate all spelled-out fractions.</p>
          <div class="note heads-up"><p>The Blue Book on <b>none</b>: it has been both singular and plural; use a singular verb if it seems singular in context, a plural verb if it seems plural. When <em>none</em> clearly means <b>not one</b> or <b>not any</b>, it is followed by a singular verb.</p></div>
        ` },
        { title: 'Rule 9: collective nouns', html: `
          <p class="lead">With <b>collective nouns</b> such as <b>group, population, family</b>, the verb can be singular or plural depending on their use in the sentence.</p>
          <ul>
            <li>Most of my family <b>is</b> here <em>or</em> <b>are</b> here.</li>
            <li>Half of the population <b>was</b> against the bill <em>or</em> <b>were</b> against the bill.</li>
          </ul>
          <h3>Blue Book: team and staff</h3>
          <div class="vs">
            <div class="side"><h4>Acting as a unit: singular</h4><p>The staff <b>is</b> in a meeting.</p></div>
            <div class="side"><h4>Separate individuals: plural</h4><p>The staff <b>are</b> in disagreement about the findings.</p></div>
          </div>
          <p>The Blue Book says the second sentence would read even better as "The staff <b>members</b> are in disagreement about the findings."</p>
        ` },
        { title: 'Rule 10: plural in form, singular in meaning', html: `
          <p class="lead">Nouns such as <b>mathematics, civics, news</b>, while plural in form, are singular in meaning and use <b>singular</b> verbs.</p>
          <ul>
            <li>Mathematics <b>is</b> very difficult for some people.</li>
            <li>The news <b>is</b> very saddening.</li>
          </ul>
        ` },
        { title: 'Everyone, each, who and that', html: `
          <p class="lead">These rules come from the Blue Book, not the slides.</p>
          <h3>Singular pronouns</h3>
          <p><b>each, everyone, every one, everybody, anyone, anybody, someone, somebody</b> are singular and need singular verbs. Do not be misled by what follows <em>of</em>.</p>
          <ul>
            <li>Each of the girls <b>sings</b> well.</li>
            <li>Every one of the cakes <b>is</b> gone.</li>
          </ul>
          <p><b>Everyone</b> (one word) means everybody. <b>Every one</b> (two words) means each one.</p>
          <p>When <b>either</b> and <b>neither</b> are subjects, they always take singular verbs: "Neither of them <b>is</b> available to speak right now." "Either of us <b>is</b> capable of doing the job."</p>
          <h3>Who, that, which</h3>
          <p>When <b>who, that or which</b> is the subject of a verb in the middle of the sentence, it is singular or plural according to the <b>noun directly in front</b> of it.</p>
          <ul>
            <li>Salma is the scientist who <b>writes</b> the reports. (<em>scientist</em>, singular)</li>
            <li>He is one of the men who <b>do</b> the work. (<em>men</em>, plural)</li>
          </ul>
        ` },
        { title: 'Rule 11: were for wishes', html: `
          <p class="lead">In sentences that express a <b>wish, a request or something contrary to fact</b>, the word <b>were</b> is used instead of <em>was</em>.</p>
          <ul>
            <li>I wish my sister <b>were</b> here.</li>
          </ul>
          <p>The conditionals deck uses the same form: "If I <b>were</b> you, I wouldn't go out with that man."</p>
        ` },
        { title: 'Slide exercise 1', html: `
          <p class="lead">Slide 16: choose the correct subject-verb combinations in the sentences below. The deck gives no answer key.</p>
          <ol>
            <li>The lady in the car (look/looks) like your friend.</li>
            <li>Most of the milk (is/are) gone.</li>
            <li>One of the flowers (has/have) wilted.</li>
            <li>Either Ram or Shyam (is/are) coming today.</li>
            <li>Here (is/are) the newspaper.</li>
            <li>The group of dancers (is/are) here.</li>
            <li>Civics (is/are) my favorite subject.</li>
          </ol>
        ` },
        { title: 'Slide exercise 2', html: `
          <p class="lead">Slide 17 has twelve more pairs to choose from. The deck gives no answer key.</p>
          <ol>
            <li>Everyone has / have done their homework.</li>
            <li>Somebody has / have left her purse.</li>
            <li>The mayor as well as his brothers is / are going to prison.</li>
            <li>Either my father or my brothers is / are going to sell the house.</li>
            <li>Neither my colleagues nor my boss was / were present for the meeting.</li>
            <li>The news from the front is / are bad.</li>
            <li>My scissors is / are missing.</li>
            <li>Your brown trousers is / are missing.</li>
            <li>The average worker's earnings has / have gone up dramatically.</li>
            <li>The jury has / have come to a consensus.</li>
            <li>One of my friends is / are getting married tomorrow.</li>
            <li>The majority of the population is / are against the mid-term elections.</li>
          </ol>
        ` },
      ],
      flashcards: [
        { front: `All of the cakes (is/are) gone.`, back: `<b>are</b>: look at the noun after <em>of</em>.` },
        { front: `Some of the cake (is/are) gone.`, back: `<b>is</b>: <em>cake</em> is singular.` },
        { front: `Portion words in the Blue Book rule?`, back: `<b>percent, fraction, part, majority, some, all, none, remainder</b>: the noun after <em>of</em> decides.` },
        { front: `Most of my family (is/are) here.`, back: `<b>Both</b> are given on the slide: is here OR are here.` },
        { front: `Collective nouns on the slides?`, back: `<b>group, population, family</b>; the Blue Book adds <b>team, staff</b>.` },
        { front: `Mathematics (is/are) very difficult for some people.`, back: `<b>is</b>: plural in form, singular in meaning.` },
        { front: `Blue Book: each, everyone, somebody: singular or plural?`, back: `<b>Singular</b>.` },
        { front: `He is one of the men who (does/do) the work.`, back: `<b>do</b>: who refers to <em>men</em>.` },
        { front: `I wish my sister (was/were) here.`, back: `<b>were</b>: wish, request or contrary to fact.` },
      ],
      oneLiners: [
        'With <b>a lot of, all, some</b>, look at the noun after <em>of</em>.',
        '<b>Collective nouns</b> (group, population, family) can take a singular or plural verb depending on use.',
        '<b>Mathematics, civics, news</b> are plural in form but singular in meaning.',
        'Blue Book: <b>each, everyone, everybody, anyone, someone, somebody</b> take singular verbs.',
        'Blue Book: <b>who, that, which</b> follow the noun directly in front: one of the men who <b>do</b>.',
        'Wish, request, contrary to fact: use <b>were</b> (I wish my sister were here).',
      ],
      formulas: [
        { name: 'Concord rules 8 to 11', html: `<b>a lot of / all / some</b>: noun after <em>of</em> decides · <b>collective noun</b>: singular or plural by use · <b>mathematics, civics, news</b> = singular · <b>wish, request, contrary to fact</b>: use <em>were</em>`, note: 'Slide examples: All of the cake is gone; Half of the population was / were against the bill; The news is very saddening.' },
        { name: 'Blue Book extras', html: `<b>each, everyone, every one, everybody, anyone, anybody, someone, somebody</b> = singular · <b>either / neither</b> as subjects = singular · <b>who / that / which</b> match the noun in front of them`, note: 'He is one of the men who do the work.' },
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
          <p class="lead"><b>Conditionals</b> (if clauses) describe the <b>result of something that might or might not happen</b>. The if clause tells you the condition; the main clause tells you the result.</p>
          <p>"If you study hard" is the condition. "you will pass your exams" is the result. The <b>order of the clauses does not change the meaning</b>.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>If clause</th><th>Main clause</th></tr></thead>
            <tbody>
              <tr><td><b>I</b></td><td>If I study,</td><td>I will pass the exam.</td></tr>
              <tr><td><b>II</b></td><td>If I studied,</td><td>I would pass the exam.</td></tr>
              <tr><td><b>III</b></td><td>If I had studied,</td><td>I would have passed the exam.</td></tr>
            </tbody>
          </table>
          <figure data-fig="m2-conditional-types"></figure>
          <p>There are four main kinds: the <b>zero / real</b>, <b>first</b>, <b>second</b> and <b>third</b> conditional.</p>
          <h3>How likely is it?</h3>
          <table class="tbl">
            <thead><tr><th>True</th><th>Likely, possible</th><th>Less likely, less possible</th><th>Impossible</th></tr></thead>
            <tbody>
              <tr><td>real</td><td>first</td><td>second</td><td>third</td></tr>
              <tr><td>If you mix blue and yellow, you get green. (This always happens.)</td><td>If she gets the job, we'll celebrate. (It is possible or likely she will get the job.)</td><td>If we had more students, we would run the course. (It is less likely or unlikely that we will get more students.)</td><td>If the rent had been lower, I would have taken the flat. (The rent was not low enough.)</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Zero conditional', html: `
          <p class="lead">The <b>zero (real) conditional</b> is used when the result <b>will always happen</b>. If water reaches 100 degrees, it always boils. It's a fact.</p>
          <div class="kv"><div><span>Form</span><b>if + present simple, ... present simple</b></div></div>
          <h3>Slide examples</h3>
          <ul>
            <li>If you heat water to 100 degrees, it boils.</li>
            <li>If you park here, they clamp your wheels. (It is always true that they clamp your wheels if, or every time, you park here.)</li>
            <li>If I can't sleep, I listen to the radio. (It is often true that I can't sleep, so I listen to the radio.)</li>
            <li>If people eat too much, they get fat.</li>
            <li>If you touch fire, you get burned.</li>
            <li>People die if they don't eat.</li>
            <li>You get water if you mix hydrogen and oxygen.</li>
            <li>Snakes bite if they are scared.</li>
            <li>If babies are hungry, they cry.</li>
          </ul>
          <div class="note example"><p>"If I eat peanuts, I am sick." This is true only for me, maybe, not for everyone, but it is still true that I am sick <b>every time</b> I eat peanuts.</p></div>
        ` },
        { title: 'First conditional', html: `
          <p class="lead">The <b>first conditional</b> is used to talk about things which <b>might happen in the future</b>: future situations we believe are <b>real or possible</b>, which could easily come true.</p>
          <div class="kv"><div><span>If clause</span><b>if + present simple</b></div><div><span>Main clause</span><b>will + verb</b></div></div>
          <p>Example: If it rains tomorrow, we'll go to the farm.</p>
          <h3>The main clause can use other modals</h3>
          <p>The slide table says the main clause holds a modal verb with future meaning: <b>shall, should, will, would, can, could, may, might</b>.</p>
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
        ` },
      ],
      flashcards: [
        { front: `Two parts of a conditional sentence?`, back: `The <b>if clause</b> (condition) and the <b>main clause</b> (result).` },
        { front: `Does clause order change the meaning?`, back: `<b>No.</b> The order of the clauses does not change the meaning.` },
        { front: `Zero conditional form?`, back: `<b>if + present simple, ... present simple</b>.` },
        { front: `When is the zero conditional used?`, back: `When the result <b>will always happen</b>.` },
        { front: `If you heat water to 100 degrees, it ___.`, back: `<b>boils</b> (zero conditional).` },
        { front: `First conditional form?`, back: `<b>if + present simple, ... will + verb</b>.` },
        { front: `When is the first conditional used?`, back: `Future situations we believe are <b>real or possible</b>.` },
        { front: `Modals allowed in a first-conditional main clause?`, back: `<b>shall, should, will, would, can, could, may, might</b>.` },
        { front: `Real, first, second, third: likelihood?`, back: `true / likely or possible / less likely or less possible / impossible.` },
        { front: `Type I, II, III if clauses on slide 3?`, back: `If I <b>study</b> / If I <b>studied</b> / If I <b>had studied</b>.` },
      ],
      oneLiners: [
        'A conditional = <b>if clause</b> (condition) + <b>main clause</b> (result); the order does not change the meaning.',
        'Zero: <b>if + present simple, present simple</b>, when the result always happens (water boils at 100 degrees).',
        'First: <b>if + present simple, will + verb</b>, for possible future events (if it rains tomorrow, we\'ll go to the farm).',
        'First-conditional main clause can use <b>shall, should, will, would, can, could, may, might</b>.',
        'Likelihood scale: real (true), first (likely), second (less likely), third (impossible).',
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
      blurb: 'Unlikely and unreal present or future situations (second), imaginary past (third), second against first, plus the slide fill-in exercises.',
      source: 'Module 2 Grammar / 2 Conditionals.pptx (slides 12-24)',
      tabs: [
        { title: 'Second conditional', html: `
          <p class="lead">The <b>second conditional</b> is used to imagine <b>present or future situations that are impossible or unlikely</b> in reality.</p>
          <div class="kv"><div><span>If clause</span><b>if + past simple</b></div><div><span>Main clause</span><b>would + verb</b></div></div>
          <p>The slide table says the main clause holds a modal verb with <em>future-in-the-past</em> meaning: <b>should, would, might, could</b>.</p>
          <h3>Slide examples</h3>
          <ul>
            <li>If I had a lot of money, I would travel around the world.</li>
            <li>If I won the lottery, I would buy a big house.</li>
            <li>If I met the Queen of England, I would say hello.</li>
            <li>She would pass the exam if she studied.</li>
            <li>If you asked her nicely, she would say yes, I'm sure.</li>
            <li>If we had a garden, we could have a cat.</li>
            <li>If I won a lot of money, I'd buy a big house in the country.</li>
            <li>I wouldn't worry if I were you.</li>
          </ul>
        ` },
        { title: 'Two uses of the second conditional', html: `
          <p class="lead">The slides give two uses: things in the <b>future that are probably not going to be true</b>, and something in the <b>present which is impossible</b> because it's not true.</p>
          <h3>1. Things in the future that probably won't be true</h3>
          <ul>
            <li>If I won the lottery, I would buy a big house. (I probably won't win the lottery.)</li>
            <li>If I met the Queen of England, I would say hello.</li>
            <li>She would pass the exam if she ever studied. (She never studies, so this won't happen.)</li>
          </ul>
          <h3>2. Something in the present that is impossible because it is not true</h3>
          <ul>
            <li>If I had his number, I would call him. (I don't have his number now, so it's impossible for me to call him.)</li>
            <li>If I were you, I wouldn't go out with that man.</li>
          </ul>
        ` },
        { title: 'First or second?', html: `
          <p class="lead">The second conditional is different from the first because it is <b>a lot more unlikely</b>.</p>
          <table class="tbl">
            <thead><tr><th>First conditional</th><th>Second conditional</th></tr></thead>
            <tbody>
              <tr><td>If the flight's late, we'll miss our connection. (it's possible or likely that the flight will be late)</td><td>If there were more buses, we would leave the car at home. (it is unlikely that there will be more buses)</td></tr>
              <tr><td>I'll come and give a hand if you need help moving your stuff. (it is possible or likely that you will need help)</td><td>He would buy a flat if he had the money for a deposit. (it is unlikely that he will have the money)</td></tr>
              <tr><td>If I have enough money, I'll buy some new shoes. (It's much more likely that I'll have enough money to buy some shoes.)</td><td>If I had enough money I would buy a house with twenty bedrooms and a swimming pool. (I'm probably not going to have this much money, it's just a dream, not very real.)</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Third conditional', html: `
          <p class="lead">The <b>third conditional</b> talks about the <b>past</b>. It is used to describe a situation that <b>didn't happen</b>, and to imagine the result of this situation.</p>
          <div class="kv"><div><span>If clause</span><b>if + past perfect</b></div><div><span>Main clause</span><b>would + have + past participle</b></div></div>
          <p>Slide table: "modal verb with future-in-the-past meaning (should/would/might/could) + have + -ed form".</p>
          <h3>Slide examples</h3>
          <ul>
            <li>If I had gone to bed early, I would have caught the train.</li>
            <li>If they had left earlier, they would have arrived on time.</li>
            <li>If she had studied, she would have passed the exam.</li>
            <li>If I hadn't eaten so much, I wouldn't have felt sick.</li>
            <li>If we had taken a taxi, we wouldn't have missed the plane.</li>
            <li>She wouldn't have been tired if she had gone to bed earlier.</li>
          </ul>
        ` },
        { title: 'Slide exercises', html: `
          <p class="lead">Slides 22 to 24 give fill-in gaps with two options each. The deck gives no answer key.</p>
          <table class="tbl">
            <thead><tr><th>Sentence</th><th>Options on the slide</th></tr></thead>
            <tbody>
              <tr><td>If I drink too much coffee, I ___ at night.</td><td>Can't sleep at night / could not sleep at night</td></tr>
              <tr><td>Ice melts if you ___ it.</td><td>Heat / heated</td></tr>
              <tr><td>When the sun goes down, it ___ dark.</td><td>Gets / would have gotten</td></tr>
              <tr><td>If it doesn't rain tomorrow, ___ to the beach.</td><td>Would go / will go</td></tr>
              <tr><td>Arsenal will be on top of the league if they ___.</td><td>Win / won</td></tr>
              <tr><td>When I finish work, I ___ call you.</td><td>Will / would</td></tr>
              <tr><td>If I were you, I ___ it.</td><td>Wouldn't mention / will mention</td></tr>
              <tr><td>If she was prime minister, she ___ invest more money in schools.</td><td>Would / will</td></tr>
              <tr><td>He ___ travel more if he was younger.</td><td>Would or will</td></tr>
              <tr><td>She would have become a teacher if she ___ to university.</td><td>had gone to / went to</td></tr>
              <tr><td>He would have reached on time for the interview if he ___ at nine.</td><td>Had left / left</td></tr>
            </tbody>
          </table>
        ` },
      ],
      flashcards: [
        { front: `Second conditional form?`, back: `<b>if + past simple, ... would + verb</b>.` },
        { front: `Use of the second conditional?`, back: `To imagine <b>impossible or unlikely</b> present or future situations.` },
        { front: `Third conditional form?`, back: `<b>if + past perfect, ... would + have + past participle</b>.` },
        { front: `Use of the third conditional?`, back: `A <b>past situation that didn't happen</b>, and its imagined result.` },
        { front: `If I won the lottery, I ___ a big house.`, back: `<b>would buy</b> (second conditional).` },
        { front: `If she had studied, she ___ the exam.`, back: `<b>would have passed</b> (third conditional).` },
        { front: `How is the second different from the first?`, back: `It is <b>a lot more unlikely</b>: twenty bedrooms is a dream; new shoes is likely.` },
        { front: `Two uses of the second conditional?`, back: `Future things <b>probably not going to be true</b>, and <b>impossible present</b> situations.` },
        { front: `If I had his number, I would call him. Why second?`, back: `I <b>don't have</b> his number now, so it's impossible to call him.` },
        { front: `Modals in the second and third main clause (slide tables)?`, back: `<b>should, would, might, could</b>.` },
      ],
      oneLiners: [
        'Second: <b>if + past simple, would + verb</b>, for impossible or unlikely present or future situations.',
        'Third: <b>if + past perfect, would + have + past participle</b>, for a past situation that didn\'t happen.',
        'The second conditional is <b>a lot more unlikely</b> than the first.',
        '<b>If I were you</b>, I wouldn\'t go out with that man: an impossible present situation.',
      ],
      formulas: [
        { name: 'Second conditional', html: `<b>If + past simple, would + verb</b>`, note: 'If I won the lottery, I would buy a big house.' },
        { name: 'Third conditional', html: `<b>If + past perfect, would + have + past participle</b>`, note: 'If I had gone to bed early, I would have caught the train.' },
      ],
    },

    // ------------------------------------------------------------------ conditionals 3
    {
      id: 'm2-cond-mixed',
      title: 'Mixed conditionals',
      short: 'Mixed conditionals',
      blurb: 'Mixed conditionals: a blend of second and third, for a past change with a present result or a present situation with a past result.',
      source: 'Module 2 Grammar / 2 Conditionals.pptx (slides 25-28)',
      tabs: [
        { title: 'What mixed conditionals are', html: `
          <p class="lead"><b>Mixed conditionals</b> are a blend of the <b>second and third</b> conditionals. They are used when the time referenced in the <b>if clause</b> is <b>not the same</b> as the time referenced in the <b>main clause</b>.</p>
          <p>We use them when we imagine a <b>past change with a result in the present</b>, or a <b>present change with a result in the past</b>: an unreal condition in the past or present, and an unreal result in the past or present. They express more nuanced meanings than regular conditionals.</p>
          <div class="note example"><p>If I had worked harder (past), I would be in a better job now (present).</p></div>
        ` },
        { title: 'Past to present', html: `
          <p class="lead">A sentence imagining how a change in a <b>past situation</b> would have a result in the <b>present</b>.</p>
          <ul>
            <li>If I hadn't gotten the job in Tokyo, I wouldn't be with my current partner.</li>
            <li>If I had worked harder (past), I would be in a better job now (present).</li>
          </ul>
        ` },
        { title: 'Present to past', html: `
          <p class="lead">A sentence imagining how a different situation in the <b>present</b> would mean that the <b>past</b> was different as well.</p>
          <ul>
            <li>It's really important. If it wasn't, I wouldn't have called you on your holiday.</li>
          </ul>
        ` },
      ],
      flashcards: [
        { front: `What is a mixed conditional?`, back: `A blend of <b>second and third</b>; the if clause and main clause refer to <b>different times</b>.` },
        { front: `If I had worked harder, I would be in a better job now. Time of each clause?`, back: `If clause: <b>past</b>. Main clause: <b>present</b>.` },
        { front: `If I hadn't gotten the job in Tokyo, I wouldn't be with my current partner. Type?`, back: `<b>Mixed</b>, past to present.` },
        { front: `It's really important. If it wasn't, I wouldn't have called you on your holiday. Type?`, back: `<b>Mixed</b>, present to past.` },
      ],
      oneLiners: [
        'Mixed conditionals blend second and third when the <b>two clauses refer to different times</b>.',
        'Past to present: if I had worked harder (past), I would be in a better job now (present).',
        'Present to past: it\'s really important; if it wasn\'t, I wouldn\'t have called you on your holiday.',
      ],
      formulas: [
        { name: 'Mixed conditionals', html: `<b>Second + third</b> blended · time of the <b>if clause</b> differs from time of the <b>main clause</b>`, note: 'If I had worked harder, I would be in a better job now.' },
      ],
    },

    // ------------------------------------------------------------------ conditionals worksheet
    {
      id: 'm2-cond-practice',
      title: 'Conditionals worksheet: 50 items with the key',
      short: 'Conditionals worksheet',
      blurb: 'The "If 1" worksheet (put the verbs in brackets into their correct forms) with every answer as printed in the key.',
      source: 'Module 2 Grammar / If conditionals - worksheet.pdf (50 items, with key)',
      tabs: [
        { title: 'Items 1 to 13', html: `
          <p class="lead">Put the verbs in brackets into their correct forms. Answers in bold are from the key.</p>
          <ol>
            <li>I would have read the letter if I <b>had known</b> (know) it was from you.</li>
            <li>If Tony doesn't help in the garden I <b>will not finish</b> (not finish) my work in time.</li>
            <li>If you <b>didn't tell</b> (not tell) me about Maxwell's birthday I would forget it.</li>
            <li>We <b>would have caught</b> (catch) the train earlier if Mary had found her purse.</li>
            <li>If Susan <b>had learned</b> (learn) the poem she would have known the answer.</li>
            <li>If it <b>isn't</b> (be) too hot we will stop and get a cold drink.</li>
            <li>If it <b>didn't rain</b> (not rain) today I would stay it home.</li>
            <li>If the Professor spoke clearly we <b>would understand</b> (understand) him better.</li>
            <li>If you go on talking like that we <b>will throw</b> (throw) you out.</li>
            <li>If Sasha <b>went</b> (go) home now he would meet his own brother.</li>
            <li>If it rained, the streets <b>would be</b> (be) wet.</li>
            <li>If I <b>had not told</b> (not tell) Jim the address he wouldn't have found you.</li>
            <li>The bird <b>would have died</b> (die) if you had caught it.</li>
          </ol>
        ` },
        { title: 'Items 14 to 26', html: `
          <p class="lead">Items 14 to 26, answers from the key.</p>
          <ol>
            <li>What <b>would you do</b> (you, do) if you won the lottery?</li>
            <li>If the weather <b>doesn't change</b> (not change) we will reach the top of the mountain.</li>
            <li>Dinner <b>would be</b> (be) fine if the meat weren't cold.</li>
            <li>I'm sure Benny <b>will come</b> (come) if you wait a bit longer.</li>
            <li>If you ring the bell, somebody <b>will answer</b> (answer) it.</li>
            <li>If Bert <b>had seen</b> (see) you, he would have talked to you.</li>
            <li>You <b>would have found</b> (find) your ticket if you had looked into your pockets.</li>
            <li>You <b>will fall</b> (fall) ill if you eat so much.</li>
            <li>What <b>would have happened</b> (happen) if the door had not been opened?</li>
            <li>If Chris asked you for a cigarette, <b>would you give</b> (you, give) him one?</li>
            <li>If you <b>bought</b> (buy) that big car, you would need a lot of money.</li>
            <li><b>Would you change</b> (you, change) the colour of your hair if I asked you to do so?</li>
            <li>If you give me the letter, I <b>will post</b> (post) it for you.</li>
          </ol>
        ` },
        { title: 'Items 27 to 38', html: `
          <p class="lead">Items 27 to 38, answers from the key.</p>
          <ol>
            <li><b>Would you have posted</b> (you, post) the letter if I had given it to you?</li>
            <li>If the weather is fine, I <b>will go</b> (go) swimming.</li>
            <li>If you <b>don't work</b> (not work) harder, you won't pass the exam.</li>
            <li>If they <b>were</b> (be) rich, they would travel around the world.</li>
            <li>The children <b>would go</b> (go) skating if the lake were frozen.</li>
            <li>What would you have done, if you <b>had lost</b> (lose) your handbag?</li>
            <li>What will happen if you <b>don't know</b> (not know) the answer?</li>
            <li>She <b>would have gone</b> (go) on holiday, if she hadn't been ill.</li>
            <li>If I <b>had noticed</b> (notice) you, I would have said hello.</li>
            <li>If I <b>were</b> (be) like you, I wouldn't watch such films.</li>
            <li>If you opened your eyes, you <b>would see</b> (see) a wonderful world.</li>
            <li>People <b>will live</b> (live) in peace if they stop fighting.</li>
          </ol>
        ` },
        { title: 'Items 39 to 50', html: `
          <p class="lead">Items 39 to 50, answers as printed in the key.</p>
          <ol>
            <li>If Tom drinks so much, he <b>won't be able drive</b> (cannot drive) home.</li>
            <li>If we <b>didn't hurry</b> (not hurry) we would miss the train.</li>
            <li>He <b>wouldn't spend</b> (not spend) so much money if he weren't a happy person.</li>
            <li><b>Would you have come</b> (you, come), if you had had more time?</li>
            <li>If Jim <b>had studied</b> (study) the new words he would have got a better mark.</li>
            <li>If he were rich, he <b>would buy</b> (buy) the house.</li>
            <li>If you don't hurry you <b>will be</b> (be) late.</li>
            <li>If it wasn't so hot, we <b>would play</b> (play) football.</li>
            <li>If I <b>was/were</b> (be) ill, would you visit me?</li>
            <li>If Sean <b>had not driven</b> (not be) driving so fast, the police would not have stopped him.</li>
            <li>If I had sold my house, I <b>would have got</b> (get) 4 million pounds.</li>
            <li>If I <b>was/were</b> (be) you I would do it.</li>
          </ol>
        ` },
      ],
      flashcards: [
        { front: `I would have read the letter if I ___ (know) it was from you.`, back: `<b>had known</b>.` },
        { front: `If Tony doesn't help in the garden I ___ (not finish) my work in time.`, back: `<b>will not finish</b>.` },
        { front: `If it rained, the streets ___ (be) wet.`, back: `<b>would be</b>.` },
        { front: `What ___ (you, do) if you won the lottery?`, back: `<b>would you do</b>.` },
        { front: `If Bert ___ (see) you, he would have talked to you.`, back: `<b>had seen</b>.` },
        { front: `If they ___ (be) rich, they would travel around the world.`, back: `<b>were</b>.` },
        { front: `If I ___ (be) ill, would you visit me?`, back: `<b>was/were</b> (the key gives both).` },
        { front: `If you don't hurry you ___ (be) late.`, back: `<b>will be</b>.` },
      ],
      oneLiners: [
        'Worksheet task: put the verbs in brackets into their correct forms.',
        'Item 1: I would have read the letter if I <b>had known</b> it was from you.',
        'Item 14: What <b>would you do</b> if you won the lottery?',
        'Items 47 and 50: the key gives <b>was/were</b>.',
      ],
      formulas: [
        { name: 'Worksheet key, sample', html: `if + <b>had known</b> ... would have read · if + present ... <b>will</b> finish · if + rained ... <b>would be</b>`, note: 'Items 1, 2 and 11 from the key.' },
      ],
    },
  ],
  figures: [
    { id: 'm2-concord-nearest', caption: 'With or, either/or and neither/nor, the verb agrees with the noun closest to it. Two example sentences show the same pair of nouns swapped. Based on BAENG101 course material, VIT.', alt: 'Two sentences stacked. In the first, "Neither the shoes nor the bag" has an arrow from the nearest noun, bag, to the verb matches. In the second, "Neither the bag nor the shoes" has an arrow from shoes to the verb match.' },
    { id: 'm2-conditional-types', caption: 'The four conditional types from always true to impossible, with the verb form of the if clause and of the main clause. Based on BAENG101 course material, VIT.', alt: 'Four stacked rows: zero (always true: present simple, present simple), first (likely future: present simple, will plus verb), second (unlikely or unreal now: past simple, would plus verb) and third (impossible, the past: past perfect, would have plus past participle), each with one example.' },
  ],
});

FIGSVG({"m2-concord-nearest":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 372\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfb\"/></marker></defs>\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"150\" rx=\"14\" class=\"df\"/>\n    <text x=\"300\" y=\"52\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">Neither the shoes nor the <tspan class=\"dtb\">bag</tspan></text>\n    <path d=\"M455 62v32\" class=\"dsb\" fill=\"none\" stroke-width=\"3\" marker-end=\"url(#a)\"/>\n    <text x=\"440\" y=\"86\" font-size=\"22\" text-anchor=\"end\" class=\"dt2\">nearest noun</text>\n    <rect x=\"360\" y=\"100\" width=\"190\" height=\"46\" rx=\"23\" class=\"dfb\" fill-opacity=\".22\"/>\n    <text x=\"455\" y=\"133\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">matches</text>\n\n    <rect x=\"10\" y=\"176\" width=\"580\" height=\"150\" rx=\"14\" class=\"df\"/>\n    <text x=\"300\" y=\"218\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">Neither the bag nor the <tspan class=\"dtb\">shoes</tspan></text>\n    <path d=\"M455 228v32\" class=\"dsb\" fill=\"none\" stroke-width=\"3\" marker-end=\"url(#a)\"/>\n    <text x=\"440\" y=\"252\" font-size=\"22\" text-anchor=\"end\" class=\"dt2\">nearest noun</text>\n    <rect x=\"360\" y=\"266\" width=\"190\" height=\"46\" rx=\"23\" class=\"dfb\" fill-opacity=\".22\"/>\n    <text x=\"455\" y=\"299\" font-size=\"26\" text-anchor=\"middle\" class=\"dt\">match</text>\n\n    <text x=\"300\" y=\"358\" font-size=\"24\" text-anchor=\"middle\" class=\"dt2\">The verb follows the noun closest to it</text>\n  </g>\n</svg>\n","m2-conditional-types":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 620\">\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"136\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"10\" width=\"10\" height=\"136\" rx=\"5\" class=\"dfg\"/>\n    <text x=\"36\" y=\"46\" font-size=\"26\" class=\"dtg\">Zero</text><text x=\"576\" y=\"46\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">always true</text>\n    <text x=\"36\" y=\"80\" font-size=\"23\" class=\"dt\">if: present simple</text>\n    <text x=\"36\" y=\"108\" font-size=\"23\" class=\"dt\">then: present simple</text>\n    <text x=\"36\" y=\"136\" font-size=\"22\" class=\"dt2\">If you heat ice, it melts.</text>\n\n    <rect x=\"10\" y=\"158\" width=\"580\" height=\"136\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"158\" width=\"10\" height=\"136\" rx=\"5\" class=\"dfb\"/>\n    <text x=\"36\" y=\"194\" font-size=\"26\" class=\"dtb\">First</text><text x=\"576\" y=\"194\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">likely future</text>\n    <text x=\"36\" y=\"228\" font-size=\"23\" class=\"dt\">if: present simple</text>\n    <text x=\"36\" y=\"256\" font-size=\"23\" class=\"dt\">then: will + verb</text>\n    <text x=\"36\" y=\"284\" font-size=\"22\" class=\"dt2\">If it rains, we will stay in.</text>\n\n    <rect x=\"10\" y=\"306\" width=\"580\" height=\"136\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"306\" width=\"10\" height=\"136\" rx=\"5\" class=\"dfo\"/>\n    <text x=\"36\" y=\"342\" font-size=\"26\" class=\"dto\">Second</text><text x=\"576\" y=\"342\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">unlikely or unreal now</text>\n    <text x=\"36\" y=\"376\" font-size=\"23\" class=\"dt\">if: past simple</text>\n    <text x=\"36\" y=\"404\" font-size=\"23\" class=\"dt\">then: would + verb</text>\n    <text x=\"36\" y=\"432\" font-size=\"22\" class=\"dt2\">If it rained, we would stay in.</text>\n\n    <rect x=\"10\" y=\"454\" width=\"580\" height=\"136\" rx=\"14\" class=\"df\"/>\n    <rect x=\"10\" y=\"454\" width=\"10\" height=\"136\" rx=\"5\" class=\"dfr\"/>\n    <text x=\"36\" y=\"490\" font-size=\"26\" class=\"dtr\">Third</text><text x=\"576\" y=\"490\" font-size=\"22\" text-anchor=\"end\" class=\"dt3\">impossible: the past</text>\n    <text x=\"36\" y=\"524\" font-size=\"23\" class=\"dt\">if: past perfect</text>\n    <text x=\"36\" y=\"552\" font-size=\"23\" class=\"dt\">then: would have + V3</text>\n    <text x=\"36\" y=\"580\" font-size=\"22\" class=\"dt2\">If it had rained, we would have stayed in.</text>\n  </g>\n</svg>\n","m2-link-patterns":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 440\">\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"124\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"46\" font-size=\"26\" class=\"dtb\">Coordinating (and, but, so)</text>\n    <text x=\"30\" y=\"82\" font-size=\"25\" class=\"mono dt\">clause, but clause</text>\n    <text x=\"30\" y=\"116\" font-size=\"23\" class=\"dt2\">It rained, but we played.</text>\n\n    <rect x=\"10\" y=\"150\" width=\"580\" height=\"124\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"186\" font-size=\"26\" class=\"dto\">Subordinating (although, because)</text>\n    <text x=\"30\" y=\"222\" font-size=\"25\" class=\"mono dt\">Although clause, clause</text>\n    <text x=\"30\" y=\"256\" font-size=\"23\" class=\"dt2\">Although it rained, we played.</text>\n\n    <rect x=\"10\" y=\"290\" width=\"580\" height=\"140\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"326\" font-size=\"26\" class=\"dtg\">Adverb (however, therefore)</text>\n    <text x=\"30\" y=\"362\" font-size=\"25\" class=\"mono dt\">clause; however, clause</text>\n    <text x=\"30\" y=\"396\" font-size=\"23\" class=\"dt2\">It rained; however, we played.</text>\n    <text x=\"30\" y=\"420\" font-size=\"22\" class=\"dt3\">or a full stop before However</text>\n  </g>\n</svg>\n","m2-linking-map":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 580\">\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"10\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfb\"/>\n    <text x=\"38\" y=\"44\" font-size=\"26\" class=\"dtb\">Add</text>\n    <text x=\"38\" y=\"74\" font-size=\"23\" class=\"dt\">and, also, in addition, besides</text>\n\n    <rect x=\"10\" y=\"104\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"104\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfp\"/>\n    <text x=\"38\" y=\"138\" font-size=\"26\" class=\"dtp\">Example</text>\n    <text x=\"38\" y=\"168\" font-size=\"23\" class=\"dt\">for example, such as, namely</text>\n\n    <rect x=\"10\" y=\"198\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"198\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfo\"/>\n    <text x=\"38\" y=\"232\" font-size=\"26\" class=\"dto\">Contrast</text>\n    <text x=\"38\" y=\"262\" font-size=\"23\" class=\"dt\">but, however, although, whereas</text>\n\n    <rect x=\"10\" y=\"292\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"292\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfy\"/>\n    <text x=\"38\" y=\"326\" font-size=\"26\" class=\"dty\">Cause</text>\n    <text x=\"38\" y=\"356\" font-size=\"23\" class=\"dt\">because, since, due to</text>\n\n    <rect x=\"10\" y=\"386\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"386\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfg\"/>\n    <text x=\"38\" y=\"420\" font-size=\"26\" class=\"dtg\">Result</text>\n    <text x=\"38\" y=\"450\" font-size=\"23\" class=\"dt\">so, therefore, thus, as a result</text>\n\n    <rect x=\"10\" y=\"480\" width=\"580\" height=\"80\" rx=\"12\" class=\"df\"/>\n    <rect x=\"10\" y=\"480\" width=\"10\" height=\"80\" rx=\"5\" class=\"dfr\"/>\n    <text x=\"38\" y=\"514\" font-size=\"26\" class=\"dtr\">Sequence</text>\n    <text x=\"38\" y=\"544\" font-size=\"23\" class=\"dt\">first, next, then, finally</text>\n  </g>\n</svg>\n","m2-tense-timeline":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 704\">\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"162\" rx=\"14\" class=\"df\"/>\n    <text x=\"28\" y=\"46\" font-size=\"26\" class=\"dt\">Simple</text>\n    <text x=\"28\" y=\"74\" font-size=\"22\" class=\"dt3\">every day, yesterday, tomorrow</text>\n    <text x=\"28\" y=\"108\" font-size=\"23\" class=\"dto\">Past</text>\n    <text x=\"140\" y=\"108\" font-size=\"23\" class=\"dt mono\">V2</text>\n    <text x=\"28\" y=\"138\" font-size=\"23\" class=\"dtb\">Present</text>\n    <text x=\"140\" y=\"138\" font-size=\"23\" class=\"dt mono\">V1 (+s)</text>\n    <text x=\"28\" y=\"168\" font-size=\"23\" class=\"dtg\">Future</text>\n    <text x=\"140\" y=\"168\" font-size=\"23\" class=\"dt mono\">will + V1</text>\n    <rect x=\"10\" y=\"184\" width=\"580\" height=\"162\" rx=\"14\" class=\"df\"/>\n    <text x=\"28\" y=\"220\" font-size=\"26\" class=\"dt\">Continuous</text>\n    <text x=\"28\" y=\"248\" font-size=\"22\" class=\"dt3\">now, while, this time tomorrow</text>\n    <text x=\"28\" y=\"282\" font-size=\"23\" class=\"dto\">Past</text>\n    <text x=\"140\" y=\"282\" font-size=\"23\" class=\"dt mono\">was/were + V-ing</text>\n    <text x=\"28\" y=\"312\" font-size=\"23\" class=\"dtb\">Present</text>\n    <text x=\"140\" y=\"312\" font-size=\"23\" class=\"dt mono\">am/is/are + V-ing</text>\n    <text x=\"28\" y=\"342\" font-size=\"23\" class=\"dtg\">Future</text>\n    <text x=\"140\" y=\"342\" font-size=\"23\" class=\"dt mono\">will be + V-ing</text>\n    <rect x=\"10\" y=\"358\" width=\"580\" height=\"162\" rx=\"14\" class=\"df\"/>\n    <text x=\"28\" y=\"394\" font-size=\"26\" class=\"dt\">Perfect</text>\n    <text x=\"28\" y=\"422\" font-size=\"22\" class=\"dt3\">already, since, by noon</text>\n    <text x=\"28\" y=\"456\" font-size=\"23\" class=\"dto\">Past</text>\n    <text x=\"140\" y=\"456\" font-size=\"23\" class=\"dt mono\">had + V3</text>\n    <text x=\"28\" y=\"486\" font-size=\"23\" class=\"dtb\">Present</text>\n    <text x=\"140\" y=\"486\" font-size=\"23\" class=\"dt mono\">has/have + V3</text>\n    <text x=\"28\" y=\"516\" font-size=\"23\" class=\"dtg\">Future</text>\n    <text x=\"140\" y=\"516\" font-size=\"23\" class=\"dt mono\">will have + V3</text>\n    <rect x=\"10\" y=\"532\" width=\"580\" height=\"162\" rx=\"14\" class=\"df\"/>\n    <text x=\"28\" y=\"568\" font-size=\"26\" class=\"dt\">Perfect continuous</text>\n    <text x=\"28\" y=\"596\" font-size=\"22\" class=\"dt3\">for, since, by the time</text>\n    <text x=\"28\" y=\"630\" font-size=\"23\" class=\"dto\">Past</text>\n    <text x=\"140\" y=\"630\" font-size=\"23\" class=\"dt mono\">had been + V-ing</text>\n    <text x=\"28\" y=\"660\" font-size=\"23\" class=\"dtb\">Present</text>\n    <text x=\"140\" y=\"660\" font-size=\"23\" class=\"dt mono\">has/have been + V-ing</text>\n    <text x=\"28\" y=\"690\" font-size=\"23\" class=\"dtg\">Future</text>\n    <text x=\"140\" y=\"690\" font-size=\"23\" class=\"dt mono\">will have been + V-ing</text>\n  </g>\n</svg>\n","m2-voice-swap":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 470\">\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" orient=\"auto\"><path d=\"M0 0 10 5 0 10z\" class=\"dfd\"/></marker></defs>\n  <g>\n    <rect x=\"10\" y=\"10\" width=\"580\" height=\"104\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"46\" font-size=\"26\" class=\"dt3\">Active</text>\n    <text x=\"300\" y=\"92\" font-size=\"25\" text-anchor=\"middle\"><tspan class=\"dtb\">The researcher</tspan><tspan class=\"dtg\"> conducted</tspan><tspan class=\"dto\"> the experiment</tspan></text>\n\n    <path d=\"M300 122v50\" class=\"ds2\" stroke-width=\"3\" marker-end=\"url(#a)\"/>\n    <text x=\"320\" y=\"152\" font-size=\"23\" class=\"dt2\">swap, be + V3, add by</text>\n\n    <rect x=\"10\" y=\"182\" width=\"580\" height=\"148\" rx=\"14\" class=\"df\"/>\n    <text x=\"30\" y=\"218\" font-size=\"26\" class=\"dt3\">Passive</text>\n    <text x=\"300\" y=\"266\" font-size=\"25\" text-anchor=\"middle\"><tspan class=\"dto\">The experiment</tspan><tspan class=\"dtg\"> was conducted</tspan></text>\n    <text x=\"300\" y=\"304\" font-size=\"25\" text-anchor=\"middle\" class=\"dtb\">by the researcher</text>\n\n    <circle cx=\"36\" cy=\"368\" r=\"9\" class=\"dfb\"/><text x=\"58\" y=\"376\" font-size=\"23\" class=\"dt\">subject (the doer) becomes the by-phrase</text>\n    <circle cx=\"36\" cy=\"408\" r=\"9\" class=\"dfo\"/><text x=\"58\" y=\"416\" font-size=\"23\" class=\"dt\">object (the receiver) becomes the subject</text>\n    <circle cx=\"36\" cy=\"448\" r=\"9\" class=\"dfg\"/><text x=\"58\" y=\"456\" font-size=\"23\" class=\"dt\">verb keeps its tense: conducted, was conducted</text>\n  </g>\n</svg>\n"});
