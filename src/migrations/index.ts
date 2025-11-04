import * as migration_20251104_074538 from './20251104_074538';
import * as migration_20251104_100846 from './20251104_100846';

export const migrations = [
  {
    up: migration_20251104_074538.up,
    down: migration_20251104_074538.down,
    name: '20251104_074538',
  },
  {
    up: migration_20251104_100846.up,
    down: migration_20251104_100846.down,
    name: '20251104_100846'
  },
];
