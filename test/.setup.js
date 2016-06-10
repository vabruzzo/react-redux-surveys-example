/**
 * External dependencies
 */
import { jsdom } from 'jsdom';
import 'ignore-styles';

global.document = jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

window.localStorage = window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};
