'use-strict';
export default class PackageAuthor {
  constructor(opts) {
    opts = opts || {};
    let author = opts.package ? opts.package.author : this.authorFromPackage();
    try {
      if (typeof author === 'string') {
        const index = author.indexOf('<');
        author = {
          name: author.slice(0, index),
          email: author.slice(index)
        };
      }
    } catch (err) {
      console.warn(err);
    }
    return author;
  }

  authorFromPackage() {
    try {
      return require('./../package.json').author;
    } catch (err) {
      console.error(err);
    }
  }
}
