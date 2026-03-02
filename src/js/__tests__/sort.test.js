import sortHeroes from '../sort';

test('sorts heroes from healthiest to weakest', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sorted = sortHeroes(heroes);

  expect(sorted).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('array with one hero returns same array', () => {
  const hero = [{ name: 'маг', health: 100 }];
  expect(sortHeroes(hero)).toEqual(hero);
});
