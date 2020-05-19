export default (collection) => {
  const random = Math.floor((Math.random() * collection.length));
  return collection[random];
};
