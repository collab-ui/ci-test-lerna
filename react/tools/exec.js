const processExec = require('child-process-promise').exec;
const { chalkWarning, chalkProcessing } = require('../config/chalkConfig');

let executionOptions = {
  dryRun: false,
  verbose: false,
};

function logWithPrefix(prefix, message) {
  //eslint-disable-next-line
  console.log(
    message
      .toString()
      .trim()
      .split('\n')
      .map(line => `${prefix} ${line}`)
      .join('\n')
  );
}

exports.exec = (command, options = {}) =>  {
  let proc = processExec(command, options);

  if (!executionOptions.verbose) {
    return proc;
  }

  let title = options.title || command;
  let output = (data, type) => logWithPrefix(`[${title}] ${type}:`, data);

  return proc
    .progress(({ stdout, stderr }) => {
      stdout.on('data', data => output(data, 'stdout'));
      stderr.on('data', data => output(data, 'stderr'));
    })
    .then(result => {
      logWithPrefix(`[${title}]`, chalkProcessing('Complete'));
      return result;
    });
}

exports.safeExec = (command, options = {}) => {
  let title = options.title || command;

  if (executionOptions.dryRun) {
    logWithPrefix(
      chalkProcessing(`[${title}]`),
      chalkWarning('DRY RUN'.magenta)
    );
    return Promise.resolve();
  }

  return exec(command, options);
}

exports.setExecOptions = (options) => {
  executionOptions = { ...executionOptions, ...options };
}
