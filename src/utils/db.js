/* eslint-disable class-methods-use-this */
class Db {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }

    return JSON.parse(item);
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }
}

const db = new Db();
export default db;
