import {ChatCompletionRequestMessage} from "openai";

export interface IConfig {
  api?: string;
  openai_api_key: string;
  model: string;
  chatTriggerRule: string;
  disableGroupMessage: boolean;
  temperature: number;
  blockWords: string[];
  chatgptBlockWords: string[];
  chatPrivateTriggerKeyword: string;
  chatGroupTriggerKeyword: string;
  pre_prompt: string;
}
export interface User {
  username: string,
  chatMessage: Array<ChatCompletionRequestMessage>,
}