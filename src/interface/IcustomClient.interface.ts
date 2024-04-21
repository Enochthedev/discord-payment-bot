import { Collection } from 'discord.js';
import Command from '../class/command';
import Iconfig from './Iconfig.interface';
import subCommand from '../class/subCommand';

export default interface Iclient {
  config: Iconfig;
  command: Collection<string, Command>;
  subCommand: Collection<string, subCommand>;
  cooldowns: Collection<string, Collection<string, number>>;


  Init(): void;

  LoadHandlers(): void;
}