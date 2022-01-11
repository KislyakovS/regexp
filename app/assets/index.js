const fs = require('fs');

fs.readFile(`${__dirname}/data.json`, 'utf-8', (error, txt) => {
  if (error) {
    throw new Error(error);
  }

  const json = JSON.parse(txt);

  const newJson = json.map((it) => ({
    title: it.title.en,
    description: it.description.en,
    regexp: it.pattern,
    example: it.placeholder,
    tags: it.tags,
  }));

  fs.writeFile(`${__dirname}/regexp.json`, JSON.stringify(newJson), (error, result) => {
    if (error) {
      throw new Error(error);
    }

    console.log(result);
  })
});