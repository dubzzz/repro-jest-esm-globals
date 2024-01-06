const { setValue } = require("./src/main.cjs");

globalThis.directFromSetup = "ok";
setValue("ok");
