import * as checksum from 'checksum';

// 3rd party and module support
export class ChecksumCreator {
  calc(value: string) {
    return checksum.default(value, { algorithm: 'sha1' });
  }
}