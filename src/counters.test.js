/** @jest-environment jsdom */
import domCounter from './modules/domCounter';
import commentCounter from './modules/commentCounter';

describe('Count number of shows', () => {
  test('If there is only one show then dom counter should display 1', () => {
    document.body.innerHTML = `
      <div class='card'></div>
    `;
    expect(domCounter()).toEqual(1);
  });
  test('If there are 5 show then dom counter should display 5', () => {
    document.body.innerHTML = `
      <div class='card'></div>
      <div class='card'></div>
      <div class='card'></div>
      <div class='card'></div>
      <div class='card'></div>
    `;
    expect(domCounter()).toEqual(5);
  });
});

describe('Count number of comments', () => {
  test('If there is only one comment then dom counter should display 1', () => {
    document.body.innerHTML = `
      <p class="addedComments"></p>
    `;
    expect(commentCounter()).toEqual(1);
  });
  test('If there are 5 comments then dom counter should display 5', () => {
    document.body.innerHTML = `
    <p class="addedComments"></p>
    <p class="addedComments"></p>
    <p class="addedComments"></p>
    <p class="addedComments"></p>
    <p class="addedComments"></p>
    `;
    expect(commentCounter()).toEqual(5);
  });
});
