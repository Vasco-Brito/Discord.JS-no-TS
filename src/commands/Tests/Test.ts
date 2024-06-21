import { ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../../base/classes/Command";
import CustomClient from "../../base/classes/CustomClient";
import Category from "../../base/enums/Category";

export default class Test extends Command {
    constructor(client: CustomClient) {
        super(client, {
            name: "test",
            description: "Test Command",
            category: Category.Utilities,
            default_member_permission: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permission: false,
            cooldown: 0,
            options: []
        })
    }

    Execute(interaction: ChatInputCommandInteraction) {
        interaction.reply({content: "O comando de teste foi executado!", ephemeral: true})
    }
}