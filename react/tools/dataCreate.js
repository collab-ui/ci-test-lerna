const cuiUtils = require('@collab-ui/utils');
const navJSON = require('@collabui/core/data/components.json');

const glob = 'src/lib/**/index.js';
const path = 'src/app/data/';
const filename = 'docs.json';

cuiUtils.comments(glob, path, filename, navJSON);
