// Enlaces del perfil. Los que no tengan `url` no se muestran: rellena la url para activarlos.
export interface LinkItem { name: string; handle?: string; url?: string; icon: string }
export const links: LinkItem[] = [
  { name: 'Instagram', handle: '@riaal.04', url: 'https://instagram.com/riaal.04', icon: '📸' },
  { name: 'GitHub', handle: 'Rial-2004', url: 'https://github.com/Rial-2004', icon: '💻' },
  { name: 'Steam', icon: '🎮' },
  { name: 'Discord', icon: '💬' },
  { name: 'LinkedIn', icon: '💼' },
];
