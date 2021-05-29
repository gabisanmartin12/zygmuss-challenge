import store from './store';

describe('Store', () => {
  it('Should initialize', () => {
    const actual = store.getState();
    expect(actual).toEqual({});
  });
});
