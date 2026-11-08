/* Free taster tool (the one interactive tool open to everyone): Cut the wordiness. Built on ew-kit.js. */
(function () {
  'use strict';
  const EW = window.EW;

  // ---------------------------------------------------------------- wordiness-fixer
  VIZ.register('wordiness-fixer', {
    title: 'Cut the wordiness', kind: 'Practice',
    mount(body, api) {
      EW.rounds(body, api, {
        instr: 'Each sentence is wordy or redundant. Tap the version that is shortest <b>without losing meaning</b>.',
        items: [
          { tag: 'From the course', q: '"The Chairman wants to meet those employees who are working in the production department, so that he can discuss the difficult crisis immediately."',
            options: ['The Chairman wants to meet the employees of the production department to discuss the crisis immediately.', 'The Chairman wants to meet those employees working in production, so that he can discuss the difficult crisis at once.', 'The Chairman wants to meet employees.'], correct: 0,
            why: 'The model answer, 23 → 16 words: "who are working in" → "of", "so that he can discuss" → "to discuss", and "difficult" goes because a crisis is difficult by definition. The three-word version is shorter but loses which employees, why and when.' },
          { tag: 'From the course', q: '"The secretary\'s proposal was adopted with the full agreement of all the members."',
            options: ['The members unanimously adopted the secretary\'s proposal.', 'The secretary\'s proposal was adopted with the full and complete agreement of every member.', 'The proposal was adopted.'], correct: 0,
            why: '"With the full agreement of all the members" is one word, <b>unanimously</b>, and the active voice puts the doer first: 13 → 7 words. "The proposal was adopted" drops whose proposal and that everyone agreed.' },
          { q: '"Due to the fact that the pump failed, the line was shut down."',
            options: ['Because the pump failed, the line was shut down.', 'Due to the fact of the pump failure, the line was shut down.', 'The line was shut down.'], correct: 0,
            why: '"Due to the fact that" = <b>because</b>. Dropping the cause altogether loses the main point.' },
          { q: '"At this point in time, the results of the tests are not yet available."',
            options: ['The test results are not yet available.', 'At present, the results of the tests are not available at this time.', 'No results.'], correct: 0,
            why: '"At this point in time" adds nothing that "not yet" doesn\'t already say, and "the results of the tests" is "the test results". "No results" is a note, not a sentence.' },
          { q: '"The two samples were exactly identical in each and every respect."',
            options: ['The two samples were identical.', 'The two samples were exactly identical in every respect.', 'The samples were similar.'], correct: 0,
            why: '"Identical" already means the same in every respect, so "exactly" and "each and every respect" are redundant. "Similar" changes the meaning.' },
          { q: '"In order to reduce costs, the team made a decision to cut down on the number of test runs."',
            options: ['To reduce costs, the team decided to run fewer tests.', 'In order to reduce costs, the team decided to cut down the number of test runs.', 'The team ran fewer tests.'], correct: 0,
            why: '"In order to" → "to", "made a decision" → "decided", "cut down on the number of" → "fewer". The last option drops why, which is the point of the sentence.' },
          { q: '"The past history of the project shows that delays are a common occurrence."',
            options: ['The project\'s history shows that delays are common.', 'The past history of the project shows delays are common occurrences.', 'Delays happen.'], correct: 0,
            why: 'History is always past, and "a common occurrence" is just "common". "Delays happen" loses the evidence (the project\'s history).' },
          { q: '"The report, which was written by the committee, gives a description of the reasons why the bridge collapsed."',
            options: ['The committee\'s report explains why the bridge collapsed.', 'The report written by the committee gives a description of why the bridge collapsed.', 'The bridge collapsed.'], correct: 0,
            why: '"Which was written by the committee" → "the committee\'s"; "gives a description of the reasons why" → "explains why". The last option drops the report entirely.' },
          { q: '"It is to be noted that the final outcome will depend on the amount of rainfall."',
            options: ['The outcome will depend on the rainfall.', 'Note that the final outcome depends on the amount of rainfall.', 'Rainfall matters.'], correct: 0,
            why: '"It is to be noted that" is an empty opener, and "final outcome" is redundant. "Rainfall matters" is too vague: matters for what?' },
        ],
      });
    },
  });
})();
