import { sleep, Menu } from "utils";
import { noop } from "lodash-es";

sleep(1000).then(() => {
  console.log(noop);
  // console.log(cron);
  console.log("setup1");
  // console.log(Array.prototype.aaa)
  // console.log(Poller)
  // combine
});

export const name = "test";
