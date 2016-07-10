import assert from 'assert';
import PackageAuthor from '../lib';

const author = new PackageAuthor();
const _author = new PackageAuthor({
  package: {
    author: {
      name: 'Glenn Vandeuren',
      email: 'vandeurenglenn@gmail.com'
    }
  }
});
const __author = new PackageAuthor({
  package: {
    author: 'Glenn Vandeuren <vandeurenglenn@gmail.com>'
  }
});

describe('package-author', () => {
  it('checks default behavior!', () => {
    assert(author, {name: 'Glenn Vandeuren', email: 'vandeurenglenn@gmail.com'});
  });

  it('checks if the author is defined, when package.author is a one liner (string)!', () => {
    assert(__author, {name: 'Glenn Vandeuren', email: 'vandeurenglenn@gmail.com'});
  });

  it('checks if the author is defined, when opts.package is used!', () => {
    assert(_author, {name: 'Glenn Vandeuren', email: 'vandeurenglenn@gmail.com'});
  });
});
