function SnackList() {
	const snacks = [
		{name:"Chocolate", rank:1},
		{name:"Orange", rank:2},
		{name:"Yogurt", rank:3},
		{name:"Apple", rank:4},
		{name:"Popcorn", rank:5}
	];
	const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

	return (
		<ol>
			{sortedSnacks.map((snack, index) => (
			<li key={index}>
				{snack.name} (Rank: {snack.rank})
			</li>
			))}
		</ol>
	);
}

export default SnackList;
