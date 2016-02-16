'use strict';

const xml2js = require('xml2js');
const parser = new xml2js.Parser({
  async:true
});

const xml = `<items><item>Other Item</item></items>`
const otherXml = `
<items>
  <item>Item 1</item>
  <item>Item 2</item>
</items>
`;

parser.parseString(xml, (err, result) => {
  console.log(xml, result);
});

parser.parseString(otherXml, (err, result) => {
  console.log(otherXml, result);
});
