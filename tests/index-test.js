const { readFileSync } = require("fs");
const { join, resolve } = require("path");
const test = require("tape");
const { decode } = require("../lib");

const FixtureRoot = resolve(__dirname, "fixtures");

test("decode", (t) => {
  const buf = readFileSync(join(FixtureRoot, "PNG_transparency_demonstration_1.png"));
  const png = decode(buf);
  t.equal(png.width, 800);
  t.equal(png.height, 600);
  t.end();
});
