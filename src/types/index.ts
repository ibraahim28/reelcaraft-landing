export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type VideoLength = '30' | '60';

export type VideoTone = 
  | 'professional' 
  | 'friendly' 
  | 'enthusiastic' 
  | 'humorous' 
  | 'serious' 
  | 'inspirational';

export interface VideoProject {
  id: string;
  userId: string;
  title: string;
  topic: string;
  tone: VideoTone;
  duration: VideoLength;
  script?: string;
  voiceId?: string;
  thumbnailUrl?: string;
  status: 'draft' | 'generating' | 'ready' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export interface VideoPreview {
  script: string;
  voicePreviewUrl?: string;
  imageUrls?: string[];
}