let i = 0;
for (c = 2; c <= 100; c++) {
  for (b = 1; b <= c; b++) {
    if (c % b == 0) i++;
  }
  if (i == 2) console.log(c);
  i = 0;
}
