const timeout = (time) => {
  setTimeout(() => {
    console.log('время пошло...');
  }, time);
  return 'Hello';
};
timeout(2000);
