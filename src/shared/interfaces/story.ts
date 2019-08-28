import Module from './module';

export default interface Story {
  _id: string;
  user_id: number;
  title: string;
  character_name: string;
  modules: Module[];
  companion_name: string;
  life: number;
  stage: number;
}
