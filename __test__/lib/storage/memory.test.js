'use storage';

const Storage = require('../../../src/lib/storage/memory');

describe('MemoryStorage', () => {
  it('rejects saving a non object', () => {
    var store = new Storage('test');

    return expect(store.save('oops'))
    .rejects.toThrow('schema "test"');
  });

  it('can save an object', () => {
    var store = new Storage("test");

    return store.save({name: 'John'})
      .then(saved => {
        // Don't know what id will be
        expect(saved).toBeDefined();
        expect(saved.id).toBeDefined();
        expect(saved.name).toBe('John');

        return store.get(saved.id)
          .then(fromStore => {
            expect(fromStore).toEqual(saved);
          });
      });
  });
  it('rejects if it is provided with a missing id', () => {
    var store = new Storage('test');

    return expect(store.get ('missing'))
      .rejects.toThrow('Document with id "missing" is schema "test" not found');
  });

  it('resolves with empty array for get all on empty storage', () =>{
    var store = new Storage('test');

    return store.getAll()
      .then(results => {
        expect(results).toEqual([]);
      })
  })
  it('resolves with expect array from getAll', () => {
    var store = new Storage('test');


    var toSave = [
      {name: 'John'},
      {class: 'DeltaV'},
    ]

    return Promise.all(
      toSave.map(obj => store.save(obj))
    ).then(saved => {
      console.log(saved);

      return store.getAll()
      .then(results => {
        expect(results).toEqual(saved);
      })
    });
  });
});