import * as singleSpa from "single-spa";

export class MicroFrontend {
  started = false;

  registerApp(name) {
    const exist = singleSpa.getAppNames().includes(name);
    if (!exist) {
      singleSpa.registerApplication({
        name,
        app: () =>
          Promise.resolve({
            bootstrap: () => Promise.resolve("bootstrap"),
            mount: () => Promise.resolve("bootstrap"),
            unmount: () => Promise.resolve("bootstrap"),
          }),
        activeWhen: name,
      });
    }
  }
  unregisterApp(name) {
    const exist = singleSpa.getAppNames().includes(name);
    if (exist) {
      return singleSpa.unregisterApplication(name);
    }
  }
  start() {
    if (!this.started) {
      this.started = true;
      singleSpa.start();
    }
  }
}
