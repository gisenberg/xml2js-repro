### xml2js-repro
This repository reproduces an issue with asynchronous xml2js.Parser
objects in xml2js 0.4.16.

The following code:
```javascript
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
```

Will produce the following output:
```bash
<items><item>Other Item</item></items> { items: { item: [ 'Item 1',
'Item 2' ] } }

<items>
  <item>Item 1</item>
  <item>Item 2</item>
</items>
 { items: { item: [ 'Item 1', 'Item 2' ] } }
```
