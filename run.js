const { register, getCollectedTypes } = require('typewiz-node');
const fs = require('fs');

register({ applyOnExit: false });

require('./main.ts');

process.on('exit', () => {
  fs.writeFileSync('collected-types.json', JSON.stringify(getCollectedTypes()));
});
