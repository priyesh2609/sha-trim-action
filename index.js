const core = require('@actions/core');

try {
  // `sha-length` input defined in action metadata file
  const shaLength = core.getInput('sha-length');
  if (Number.isNaN(parseInt(shaLength))) {
    throw 'Sha length should be a number';
  }
  const prefix = core.getInput('prefix');
  const joinBy = core.getInput('join-by') || '';
  const envName = core.getInput('env-name');
  const sha = process.env.GITHUB_SHA;
  const TRIMMED_SHA = `${prefix}${joinBy}${sha.slice(0, parseInt(shaLength))}`;
  // Setting the string to environment variable TRIMMED_SHA
  core.exportVariable(envName, TRIMMED_SHA);
} catch (error) {
  core.setFailed(error.message);
}
