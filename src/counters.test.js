/** @jest-environment jsdom */
import domCounter from './modules/domCounter';

describe('Count number of shows', () => {
  test('If there is only one show then dom counter should display 1', () => {
    document.body.innerHTML = `
      <div class='card'></div>
    `;
    expect((domCounter())).toEqual(1);
  });
  test('If there are 5 show then dom counter should display 5', () => {
    document.body.innerHTML = `
      <div class='card'></div>
      <div class='card'></div>
      <div class='card'></div>
      <div class='card'></div>
      <div class='card'></div>
    `;
    expect((domCounter())).toEqual(5);
  });
});