import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import UsefulHerbDropTable from '../../subtables/UsefulHerbTable';
import RareSeedDropTable from '../../subtables/RareSeedTable';
import { GemTable } from '../../subtables/RareDropTable';

const HydraTable = new LootTable()
	.every('Hydra bones')

	/* Pre-roll Averaged to make it easier */
	.oneIn(900, "Hydra's eye")
	.oneIn(900, "Hydra's heart")
	.oneIn(900, "Hydra's fang")
	.oneIn(3000, 'Hydra tail')
	.oneIn(6000, 'Dragon thrownaxe', [200, 400])
	.oneIn(6001, 'Dragon knife', [200, 400])

	/*Weapons and armour */
	.add('Fire battlestaff', 1, 5)
	.add('Water battlestaff', 1, 5)
	.add("Black d'hide chaps", 1, 3)
	.add('Rune kiteshield', 1, 3)
	.add('Battlestaff', [2, 3], 2)
	.add('Rune platebody', 1, 1)
	.add('Mystic robe bottom', 1, 1)
	.add('Dragon longsword', 1, 1)

	/* Runes */
	.add('Blood rune', [15, 45], 9)
	.add('Chaos rune', [20, 50], 9)
	.add('Death rune', [30, 60], 9)
	.add('Fire rune', [70, 90], 9)
	.add('Law rune', [30, 60], 9)
	.add('Water rune', [70, 90], 9)

	/* Herbs */
	.add(HerbDropTable, 1, 4)
	.add(UsefulHerbDropTable, 1, 2)

	/* Seeds */
	.add(RareSeedDropTable, 1, 4)

	/* Bolt tips */
	.oneIn(256, 'Diamond bolt tips', 20)
	.oneIn(285, 'Ruby bolt tips', 20)
	.oneIn(284, 'Emerald bolt tips', 20)
	.oneIn(366, 'Dragonstone bolt tips', 20)
	.oneIn(853, 'Onyx bolt tips', 20)
	.oneIn(1280, 'Sapphire bolt tips', 20)

	/* Other */
	.add('Coins', [500, 3500], 16)
	.add('Monkfish', 1, 11)
	.add('Super restore(1)', [1, 2], 6)
	.add('Super combat potion(1)', 1, 4)
	.add('Dragon bones', [3, 5], 3)

	/* Gem drop table */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(512, 'Clue scroll (elite)');

export default new SimpleMonster({
	id: 8609,
	name: 'Hydra',
	table: HydraTable,
	aliases: ['hydra']
});
