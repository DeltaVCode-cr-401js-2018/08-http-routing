'use strict';

const router = require('../../src/lib/router');

describe('router', () => {
  it('has no routes when initialized', () => {
    expect(router.routes.GET).toEqual({});
    expect(router.routes.POST).toEqual({});
    expect(router.routes.DELETE).toEqual({});
  });
  it('accepts new routes with helpers', () => {
    //Ask Instructor about refferencing here
    router.get('/get', () => 'got');
    expect(router.routes.GET['/get']).toBeDefined();
    expect(router.routes.GET['/get']()).toBe('got');

    router.post('/post', () => 'posted');
    expect(router.routes.POST['/post']).toBeDefined();
    expect(router.routes.POST['/post']()).toBe('posted');
  });
});