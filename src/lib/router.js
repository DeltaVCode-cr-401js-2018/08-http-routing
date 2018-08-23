'use strict';

const routes = exports.routes = {};

const methods = ['GET', 'POST', 'DELETE'];

methods.forEach(method => {
  routes[method] = {};
});