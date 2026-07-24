import thumbnail from '@/assets/Project/jacksimharu.png';
import architecture from '@/assets/Project/jaksimharu/architecture.png';
import erd from '@/assets/Project/jaksimharu/erd.png';
import chat from '@/assets/Project/jaksimharu/chat.png';
import map from '@/assets/Project/jaksimharu/map.png';
import login from '@/assets/Project/jaksimharu/login.png';
import qna from '@/assets/Project/jaksimharu/qna.png';
import mypage from '@/assets/Project/jaksimharu/mypage.png';
import trouble from '@/assets/Project/jaksimharu/trouble.png';
import trouble2 from '@/assets/Project/jaksimharu/trouble2.png';
import lighthouse from '@/assets/Project/jaksimharu/lighthouse.png';

export const jaksimharuImages = {
  thumbnail,
  architecture,
  erd,
  chat,
  map,
  login,
  qna,
  mypage,
  trouble,
  trouble2,
  lighthouse,
} as const;

export type JaksimharuImageKeys = keyof typeof jaksimharuImages;