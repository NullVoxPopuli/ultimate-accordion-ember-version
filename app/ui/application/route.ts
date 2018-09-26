import Route from '@ember/routing/route';

export default class Application extends Route {
  model() {
    const items = [
      {
        title: "🐴",
        contents: `
          Horses can sleep both lying down and standing up.  Domestic horses have a
          lifespan of around 25 years.  A 19th century horse named 'Old Billy' is
          said to have lived 62 years.
        `
      },
      {
        title: "🦏",
        contents: `
        Rhino skin maybe thick but it can be quite sensitive to sunburns and
        insect bites which is why they like wallow so much – when the mud dries
        it acts as protection from the sunburns and insects.
      `
      },
      {
        title: "🦄",
        contents: `
        If you’re looking to hunt a unicorn, but don’t know where to begin, try
        Lake Superior State University in Sault Ste. Marie, Michigan.  Since
        1971, the university has issued permits to unicorn questers.
      `
      }
    ];
    
    return { items };
  }
}
