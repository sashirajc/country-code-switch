# country-code-switch
Nodejs library to switch between ISO - Alpha 2, ISO - Alpha 3, ISO Numeric code and Country Name 

The library is very simple to use. Just import it using require and use one of the available functions to switch between different formats.
Available formats:
1. ISO2toISO3 - Converts from ISO - Alpha 2 format to ISO - Alpha 3 format
2. ISO2toName - Converts from ISO - Alpha 2 format to Country Name
3. ISO2toNum - Converts from ISO - Aplha 2 format to ISO Numeric Code
4. ISO3toISO2 - Converts from ISO - Alpha 3 format to ISO - Alpha 2 format
5. ISO3toName - Converts from ISO - Alpha 3 format to Country Name
6. ISO3toNum - Converts from ISO - Aplha 3 format to ISO Numeric Code
7. ISONametoISO2 - Converts from ISO Country Name format to ISO - Alpha 2 format
8. ISONametoISO3 - Converts from ISO Country Name format to ISO - Alpha 3 format
9. ISONametoNum - Converts from ISO Country Name format to ISO Numeric Code
10. ISONumtoISO2 - Converts from ISO Numeric code format to ISO - Alpha 2 format
12. ISONumtoISO3 - Converts from ISO Numeric code format to ISO - Alpha 3 format
13. ISONumtoName - Converts from ISO Numeric code format to ISO Country Name

**Example**

```javascript
const countrySwitcher = require(path + '/country-code-switcher.js');
console.log("Converted from ISO Alpha 2 to Alpha 3 - ",countrySwitcher.ISO2toISO3('US'));
```
*Converted from ISO Alpha 2 to Alpha 3 - USA*
