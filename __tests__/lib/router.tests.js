'use strict';

const router = require('../../src/lib/router');

describe('router', () => {
  it('has no routes when initialized', () => {
    expect(router.routes.GET).toEqual({});
    expect(router.routes.POST).toEqual({});
    expect(router.routes.DELETE).toEqual({});
  });
});