import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const BrimstoneChestTable = new LootTable()
	.add('Uncut diamond', [25, 35], 1000)
	.add('Uncut ruby', [25, 35], 1000)
	.add('Coal', [300, 500], 1000)
	.add('Coins', [50000, 150000], 1000)
	.add('Gold ore', [100, 200], 800)
	.add('Dragon arrowtips', [50, 200], 800)
	.add('Iron ore', [350, 500], 600)
	.add('Rune full helm', [2, 4], 600)
	.add('Rune platebody', [1, 2], 600)
	.add('Rune platelegs', [1, 2], 600)
	.add('Raw manta ray', [80, 160], 600)
	.add('Runite ore', [10, 15], 400)
	.add('Steel bar', [300, 500], 400)
	.add('Magic logs', [120, 160], 400)
	.add('Dragon dart tip', [40, 160], 400)
	.add('Palm tree seed', [2, 4], 200)
	.add('Magic seed', [2, 4], 200)
	.add('Celastrus seed', [2, 4], 200)
	.add('Dragonfruit tree seed', [1, 4], 200)
	.add('Redwood tree seed', 1, 200)
	.add('Torstol seed', [3, 5], 200)
	.add('Snapdragon seed', [3, 5], 200)
	.add('Ranarr seed', [3, 5], 200)
	.add('Pure essence', [3000, 6000], 200)
	.add('Broken dragon hasta', 1, 60)
	.add('Mystic hat (dusk)', 1, 12)
	.add('Mystic robe top (dusk)', 1, 12)
	.add('Mystic robe bottom (dusk)', 1, 12)
	.add('Mystic gloves (dusk)', 1, 12)
	.add('Mystic boots (dusk)', 1, 12);

export default new SimpleOpenable({
	id: 23083,
	name: 'Brimstone chest',
	aliases: ['brimstone chest', 'brimstone'],
	table: BrimstoneChestTable
});
