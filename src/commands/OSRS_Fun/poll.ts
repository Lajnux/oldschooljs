import { Command, KlasaClient, CommandStore, KlasaMessage } from 'klasa';
import { MessageReaction } from 'discord.js';

import { Emoji } from '../../lib/constants';

export default class extends Command {
	public constructor(
		client: KlasaClient,
		store: CommandStore,
		file: string[],
		directory: string
	) {
		super(client, store, file, directory, {
			cooldown: 2
		});
	}

	async run(msg: KlasaMessage) {
		msg.react('380915244760825857')
			.then((react: MessageReaction) => react.message.react('380915244652036097'))
			.catch(() => {
				throw `There was an error ${Emoji.Sad} Do I have permissions to react to messages?`;
			});

		return null;
	}
}