const sentence = "hello there from lighthouse labs\n";

for (let index = 0; index < sentence.length; index++) {
  const char = sentence[index];
  const num = index + 1;
  setTimeout(() => {
    process.stdout.write(char); 
   }, 50 * num);
}