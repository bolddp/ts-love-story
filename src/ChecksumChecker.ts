import * as checksum from 'checksum';
const cs = checksum.default('tjoho', { Algorithm: 'sha1' });
console.log(`Checksum: ${cs}`);