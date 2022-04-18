const sentence = "hello there i like chips";


let delay = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write('\n');
    process.stdout.write(char);
  }, delay);
  delay += 500;
}
