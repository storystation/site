import WinCondition from './win-condition';
import Answer from './answer';

export default interface Module {
  position: number;
  name: string;
  time_max: number;
  win_conditions?: WinCondition;
  response: object;
  description: string;
  _type: string;
  answers: Answer;
}
