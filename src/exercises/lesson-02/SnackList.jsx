export default function SnackList() {
  const snacks = [
    { name: 'Popcorn', rank: 5 },
    { name: 'Biscuits', rank: 4 },
    { name: 'Chocolate', rank: 3 },
    { name: 'Chin Chin', rank: 2 },
    { name: 'Plantain Chips', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <section>
      <h2>My Snack Rankings</h2>

      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ol>
    </section>
  );
}
