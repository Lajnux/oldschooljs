import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const LarransBigChestTable = new LootTable()
	.tertiary(256, `Dagon'hai hat`)
	.tertiary(256, `Dagon'hai robe top`)
	.tertiary(256, `Dagon'hai robe bottom`)
	.add('Uncut diamond', [35, 45], 5)
	.add('Uncut ruby', [35, 45], 5)
	.add('Coal', [450, 650], 5)
	.add('Gold ore', [150, 250], 4)
	.add('Dragon arrowtips', [100, 250], 4)
	.add('Coins', [75000, 175000], 3)
	.add('Iron ore', [500, 650], 3)
	.add('Rune full helm', [3, 5], 3)
	.add('Rune platebody', [2, 3], 3)
	.add('Rune platelegs', [2, 3], 3)
	.add('Pure essence', [4500, 7500], 3)
	.add('Raw manta ray', [125, 235], 3)
	.add('Runite ore', [15, 20], 2)
	.add('Steel bar', [350, 550], 2)
	.add('Magic logs', [180, 220], 2)
	.add('Dragon dart tip', [80, 200], 2)
	.add('Palm tree seed', [3, 5], 1)
	.add('Magic seed', [3, 4], 1)
	.add('Celastrus seed', [3, 5], 1)
	.add('Dragonfruit tree seed', [3, 5], 1)
	.add('Redwood tree seed', 1, 1)
	.add('Torstol seed', [4, 6], 1)
	.add('Snapdragon seed', [4, 6], 1)
	.add('Ranarr seed', [4, 6], 1);

export default new SimpleOpenable({
	id: 23490,
	name: "Larran's big chest",
	aliases: ['larran big chest', 'larrans big chest', "larran's big chest"],
	table: LarransBigChestTable
});
