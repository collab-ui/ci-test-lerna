const cuiUtils = require('@collab-ui/utils');
const navJSON = require('@collabui/core/data/docs.json');

const glob = 'src/lib/**/index.js';
const path = 'src/app/data/';
const filename = 'docs.json';

cuiUtils.commentsV2(glob, path, filename, navJSON);
