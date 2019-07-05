export const BASE_API_URL = 'http://services.runescape.com';

export const SKILLS = [
	'overall',
	'attack',
	'defence',
	'strength',
	'hitpoints',
	'ranged',
	'prayer',
	'magic',
	'cooking',
	'woodcutting',
	'fletching',
	'fishing',
	'firemaking',
	'crafting',
	'smithing',
	'mining',
	'herblore',
	'agility',
	'thieving',
	'slayer',
	'farming',
	'runecrafting',
	'hunter',
	'construction'
];

export const MINIGAMES = [
	'Bounty_Hunter',
	'Bounty_Hunter_Rogues',
	'LMS',
	'Clue_Scrolls_All',
	'Clue_Scrolls_Beginner',
	'Clue_Scrolls_Easy',
	'Clue_Scrolls_Medium',
	'Clue_Scrolls_Hard',
	'Clue_Scrolls_Elite',
	'Clue_Scrolls_Master'
];

// Hiscores

function hiscoreURL(type: string): string {
	return `${BASE_API_URL}/m=${type}/index_lite.ws?player=`;
}

export const hiscoreURLs: Record<string, string> = {
	normal: hiscoreURL('hiscore_oldschool'),
	ironman: hiscoreURL('hiscore_oldschool_ironman'),
	ultimate: hiscoreURL('hiscore_oldschool_ultimate'),
	hardcore: hiscoreURL('hiscore_oldschool_hardcore_ironman'),
	deadman: hiscoreURL('hiscore_oldschool_deadman'),
	seasonal: hiscoreURL('hiscore_oldschool_seasonal')
};

export const ACCOUNT_TYPES: string[] = [
	'normal',
	'ironman',
	'ultimate',
	'hardcore',
	'deadman',
	'seasonal'
];

// Errors

export enum Errors {
	INVALID_USERNAME = 'INVALID_USERNAME',
	INVALID_ACCOUNT_TYPE = 'INVALID_ACCOUNT_TYPE',
	ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',
	FAILED_REQUEST = 'FAILED_REQUEST'
}

export const ErrorDescriptions: Record<string, string> = {
	INVALID_USERNAME: 'A malformed, invalid or incorrect username was passed and rejected.',
	INVALID_ACCOUNT_TYPE: 'A invalid account type (normal, ironman, etc) was passed.',
	ACCOUNT_NOT_FOUND: 'Could not find a RuneScape account with the provided username.',
	FAILED_REQUEST: 'A request to an API/External resource failed unexpectedly.',
	ITEM_NOT_FOUND: 'No item with the provided ID/Name could be found.'
};

export const OSRS_BOX_BASE_URL = `https://www.osrsbox.com/osrsbox-db`;
