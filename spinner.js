const spinnerAnimFrames = ['|', '/', '-', '\\'];
let delay = 0;

for (let i = 0; i < 2001; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinnerAnimFrames[i % 4]);
  }, delay);
  delay += 200;
}
