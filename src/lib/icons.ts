// Small inline line-art icons (stroke = currentColor so CSS controls color).
const s = (p: string, vb = '0 0 24 24') =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

export const ICON = {
  fly: s('<path d="M3 13l8-1 4-8 2 0-2 9 6 2 0 2-7-1-3 5-2 0 1-5-5-1 0-2z"/>'),
  train: s('<rect x="6" y="3" width="12" height="14" rx="2"/><line x1="6" y1="10" x2="18" y2="10"/><line x1="8" y1="17" x2="6" y2="21"/><line x1="16" y1="17" x2="18" y2="21"/>'),
  drive: s('<path d="M3 13l2-5h14l2 5v4h-2 M3 17v-4h18"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/>'),
  rest: s('<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>'),
  drink: s('<path d="M6 3h12l-1 7a5 5 0 0 1-10 0z"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/>'),
  shop: s('<path d="M6 7h12l-1 13H7z"/><path d="M9 7a3 3 0 0 1 6 0"/>'),
  food: s('<path d="M6 3v8a2 2 0 0 0 4 0V3"/><line x1="8" y1="11" x2="8" y2="21"/><path d="M16 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9"/>'),
  info: s('<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="8" r="0.7" fill="currentColor"/>'),
  scenic: s('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M3 18l5-7 4 5 3-4 6 6z"/><circle cx="8" cy="8" r="1.6"/>'),
  fact: s('<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>'),
  grape: s('<path d="M12 4v3"/><circle cx="12" cy="9" r="2"/><circle cx="9" cy="13" r="2"/><circle cx="15" cy="13" r="2"/><circle cx="12" cy="16" r="2"/>'),
  paw: s('<circle cx="7" cy="8" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="17" cy="8" r="2"/><path d="M5.5 13.5a3 3 0 0 1 4-1.3l1 .6a3 3 0 0 0 3 0l1-.6a3 3 0 0 1 4 1.3c.9 1.9-.3 4.5-3 5.7l-3.5 1.6-3.5-1.6c-2.7-1.2-3.9-3.8-3-5.7z"/>'),
  bed: s('<path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 18h18"/><path d="M6 10V8a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 12 8v2"/>'),
  ge: s('<path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/>'),
  car: s('<path d="M3 13l2-5h14l2 5v4h-2 M3 17v-4h18"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/>'),
  back: s('<path d="M15 18l-6-6 6-6"/>'),
  menu: s('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'),
  close: s('<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>'),
} as const;

export type IconKey = keyof typeof ICON;
