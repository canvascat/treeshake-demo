import { sleep, Menu } from "utils";
// import { Poller } from '@qt/base';
// import { getGlobalData } from '@qt/base/lib/micro-frontend/index.js';
// import { combine } from '@qt/utils/lib/path/index.js';
// import { Service } from '@qt/base/lib/application/index.js'
// import { cron } from '@qt/utils';
// import * as spa from "utils/single-spa";
import { noop } from 'lodash-es';

sleep(1000).then(() => {
  console.log(noop);
  // console.log(cron);
  console.log("setup1");
  // console.log(Array.prototype.aaa)
  // console.log(Poller)
  // combine
});

export const name = 'test'
