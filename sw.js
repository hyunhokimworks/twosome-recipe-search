// 홈 화면 설치 조건을 맞추기 위한 최소 서비스 워커. 캐시하지 않으므로 항상 최신 데이터가 뜬다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
