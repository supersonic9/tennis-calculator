test('Testing set up', () => {
  expect(1).toBe(1);
});

test('Correct number of arguments from user', () => {
  const commandLineArguments = ['node', 'app.js', 'file.txt'];
  const commandLineArgumentsLength = commandLineArguments.length;
  expect(commandLineArgumentsLength).toEqual(3);
});

test('Extract the scores file from argv', () => {
  const commandLineArguments = ['node', 'app.js', 'file.txt'];
  const scoresFile = commandLineArguments.slice(2)[0];
  expect(scoresFile).toMatch(/file.txt/);
});

test('Split txt data based on line breaks', () => {
  const data = `test\r\nfoo\r\nbar`;
  const splitData = data.split('\r\n');
  expect(splitData).toContain('test', 'foo', 'bar');
  expect(splitData).not.toContain(`\r\n`);
});

test('Handle user query', () => {
  const query1 = 'Score Match 02';
  const query2 = 'Score Match';
  const query3 = 'test query';
  const query4 = 'Games Player C'
  const query5 = 'Games Player';
  const query6 = 'test query'
  expect(query1).toMatch(/Score Match /);
  expect(query2).not.toMatch(/Score Match /);
  expect(query3).not.toMatch(/Score Match /);
  expect(query4).toMatch(/Games Player /);
  expect(query5).not.toMatch(/Games Player /);
  expect(query6).not.toMatch(/Games Player /);
  });



