'use strict';

const router = exports;
const routes = exports.routes = {};

const methods = ['GET', 'POST', 'DELETE'];

methods.forEach(method => {
  routes[method] = {};
  router[method.toLowerCase()] = (path,callback) => {
    routes[method][path] = callback;
  };
  
});
