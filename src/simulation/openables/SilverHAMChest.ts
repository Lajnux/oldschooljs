import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

/* Gem loots */
// TODO: check back for wiki drop table update from another one in the repo
const GemTable = new LootTable({ limit: 100 })
	.add('Uncut sapphire', 1, 15)
	.add('Sapphire', 1, 15)
	.add('Uncut emerald', 1, 15)
	.add('Emerald', 1, 15)
	.add('Uncut ruby', 1, 10)
	.add('Ruby', 1, 10)
	.add('Uncut diamond', 1, 10)
	.add('Diamond', 1, 10);

const SilverHAMChestTable = new LootTable()
	.every('Coins', [500, 1000])
	.add(GemTable, 1, 1)
	.add(GemTable, 2, 1)
	.add(GemTable, 3, 1)
	.add(GemTable, 4, 1)
	.add(GemTable, 5, 1);

export default new SimpleOpenable({
	id: 8868,
	name: 'Silver HAM chest',
	aliases: ['silver', 'silver ham chest', 'silver chest'],
	table: SilverHAMChestTable
});