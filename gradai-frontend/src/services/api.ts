// src/services/api.ts
import axios from 'axios';
import { BulletinPost, AssistantResponse } from './types';

const API_BASE_URL = 'https://your-api-id.execute-api.your-region.amazonaws.com/your-stage';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBulletinBoardPosts = async (): Promise<BulletinPost[]> => {
  const response = await api.get<BulletinPost[]>('/bulletin-board-posts');
  return response.data;
};

export const postMessageToAssistant = async (message: string): Promise<AssistantResponse> => {
  const response = await api.post<AssistantResponse>('/assistant/messages', { message });
  return response.data;
};