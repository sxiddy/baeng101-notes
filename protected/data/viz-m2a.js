/* Module 2 · Grammar exam drills (concord, tense): find the error, pick the fix, then see why. Built on ea-kit.js. */
(function () {
  'use strict';
  const EA = window.EA;
  const CONCORD = [
    { w: 'The list of approved projects are displayed on the notice board.', bad: [5], fix: 'is', opts: ['were', 'have'], clue: [1], ct: 'subject: list', tag: 'singular', why: 'The subject is <b>list</b>; "of approved projects" sits between and does not change its number. (Rule 2)' },
    { w: 'One of the sensors have failed during the test.', bad: [4], fix: 'has', opts: ['are', 'were'], clue: [0], ct: 'subject: one', tag: 'singular', why: 'The subject is <b>one</b>, not sensors.' },
    { w: 'Neither the manager nor the engineers was present at the meeting.', bad: [6], fix: 'were', opts: ['is', 'has been'], clue: [5], ct: 'nearest noun', tag: 'plural', why: 'With neither ... nor, the verb agrees with the <b>nearest noun</b>: engineers. (Rule 4)' },
    { w: 'Either the teacher or the students has attended the conference.', bad: [6], fix: 'have', opts: ['is', 'was'], clue: [5], ct: 'nearest noun', tag: 'plural', why: 'Nearest noun: <b>students</b> (plural), so <b>have</b>.' },
    { w: 'The supervisor, along with his assistants, are checking the report.', bad: [6], fix: 'is', opts: ['were', 'have'], clue: [1], ct: 'subject', tag: 'singular', why: 'Ignore <b>along with, as well as, besides</b>: the subject is still the supervisor. (Rule 5)' },
    { w: 'Twenty yards are a long way to walk with this load.', bad: [2], fix: 'is', opts: ['were', 'have been'], clue: [1], ct: 'one distance', tag: 'singular', why: 'Distances, money and periods of time act as <b>one unit</b>. (Rule 7)' },
    { w: 'There is three errors in the final draft.', bad: [1], fix: 'are', opts: ['was', 'has'], clue: [3], ct: 'true subject', tag: 'plural', why: 'After <b>there</b>, the true subject comes after the verb: errors. (Rule 6)' },
    { w: 'Mathematics are the most difficult subject for him.', bad: [1], fix: 'is', opts: ['were', 'have'], clue: [0], ct: 'singular meaning', tag: 'singular', why: '<b>Mathematics, news, civics</b> look plural but take a singular verb. (Rule 10)' },
    { w: 'Each of the students have submitted the assignment.', bad: [4], fix: 'has', opts: ['are', 'were'], clue: [0], ct: 'singular pronoun', tag: 'singular', why: '<b>Each, everyone, anybody, either</b> are singular.' },
    { w: 'Some of the data were lost, but most of the equipment are safe.', bad: [11], fix: 'is', opts: ['were', 'have'], clue: [10], ct: 'noun after of', tag: 'singular', why: 'With <b>most, some, all</b>, the noun after <b>of</b> decides: equipment is singular. (Rule 8)' },
    { w: 'The committee have reached its final decision.', bad: [2], fix: 'has', opts: ['are', 'were'], clue: [1], ct: 'acting as one', tag: 'singular', why: 'The committee acts as <b>one unit</b> ("its decision"), so singular. (Rule 9)' },
    { w: 'She is one of the engineers who designs the bridges.', bad: [7], fix: 'design', opts: ['has designed', 'is designing'], clue: [5], ct: 'who = engineers', tag: 'plural', why: '<b>Who</b> takes the number of the noun just before it: engineers.' },
  ];
  const TENSE = [
    { w: 'The technician is checking the circuit every day before switching on the power.', bad: [2, 3], fix: 'checks', opts: ['has checked', 'checked'], clue: [6, 7], ct: 'routine', tag: 'present simple', why: '<b>every day</b> means a routine: present simple.' },
    { w: 'The company has launched its new software two months ago.', bad: [2, 3], fix: 'launched', opts: ['has been launching', 'launches'], clue: [9], ct: 'finished time', tag: 'past simple', why: '<b>ago</b> names a finished time: past simple, never present perfect.' },
    { w: 'By the time the movie started, we already bought our popcorn.', bad: [7, 8], fix: 'had already bought', opts: ['have already bought', 'already buy'], clue: [0, 1, 2], ct: 'earlier past', tag: 'past perfect', why: 'An action finished <b>before another past action</b> takes the past perfect.' },
    { w: 'She is working in this lab since 2022.', bad: [1, 2], fix: 'has been working', opts: ['was working', 'works'], clue: [6], ct: 'since', tag: 'present perfect continuous', why: '<b>since / for</b> with an action still going on: has been + V-ing.' },
    { w: 'The engineer submitted the report yesterday and has left early.', bad: [7, 8], fix: 'left', opts: ['leaves', 'has been leaving'], clue: [5], ct: 'yesterday', tag: 'past simple', why: '<b>yesterday</b> covers both actions: past simple.' },
    { w: 'The workers completed the installation tomorrow.', bad: [2], fix: 'will complete', opts: ['have completed', 'had completed'], clue: [5], ct: 'future time', tag: 'future simple', why: '<b>tomorrow</b> needs the future simple.' },
    { w: 'The manager said that the meeting will start at ten.', bad: [6], fix: 'would', opts: ['shall', 'can'], clue: [2], ct: 'past reporting verb', tag: 'shifted back', why: 'After a past reporting verb (<b>said</b>), shift one tense back: will becomes would.' },
    { w: 'Yesterday, the engineer had repaired the motor.', bad: [3, 4], fix: 'repaired', opts: ['has repaired', 'repairs'], clue: [0], ct: 'one past time', tag: 'past simple', why: 'Use the past perfect only for an action before <b>another</b> past action.' },
    { w: 'The laboratory received the samples recently.', bad: [2], fix: 'has received', opts: ['receives', 'had been receiving'], clue: [5], ct: 'recently', tag: 'present perfect', why: '<b>recently, already, yet, just</b> go with the present perfect.' },
    { w: 'Look! The machine makes a strange noise right now.', bad: [3], fix: 'is making', opts: ['made', 'has made'], clue: [7, 8], ct: 'now', tag: 'present continuous', why: '<b>now, at the moment, Look!</b> mean in progress: present continuous.' },
    { w: 'By next June, she will work here for five years.', bad: [4, 5], fix: 'will have been working', opts: ['is working', 'worked'], clue: [0, 1, 2], ct: 'by + future time', tag: 'future perfect continuous', why: '<b>by next June ... for five years</b>: will have been + V-ing.' },
  ];
  VIZ.register('ea-concord', {
    title: 'Concord drill: find the error, fix it', kind: 'Practice',
    mount(body, api) { EA.drill(api, body, { items: CONCORD, instr: 'Exam style: each sentence has one subject-verb agreement error. Tap the wrong word, pick the correction, then watch why.', ask: 'Tap the verb that does not agree.' }); },
  });
  VIZ.register('ea-tense-fix', {
    title: 'Tense drill: find the error, fix it', kind: 'Practice',
    mount(body, api) { EA.drill(api, body, { items: TENSE, instr: 'Exam style: each sentence has one tense error. Tap the wrong verb, pick the correction, then see the time clue that decides it.', ask: 'Tap the verb in the wrong tense.' }); },
  });
})();
