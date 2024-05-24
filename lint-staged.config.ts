module.exports = {
  '{packages,tools}/**/*.{ts,tsx,json,md,html,css,scss}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx format:write --uncommitted',
  ],
}
