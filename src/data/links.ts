// Enlaces del perfil. Con `url` se muestran como botón; solo con `handle`, como tarjeta con el usuario; sin ninguno, no se muestran.
// Iconos de marca: Simple Icons (CC0). Instagram va en el botón de la portada, no aquí.
import { siGithub, siSteam, siDiscord, siInstagram } from 'simple-icons';

export interface LinkItem { name: string; handle?: string; url?: string; icon?: { path: string; hex: string } }
export const instagram = { url: 'https://instagram.com/riaal.04', handle: '@riaal.04', path: siInstagram.path };
export const links: LinkItem[] = [
  { name: 'GitHub', handle: 'Rial-2004', url: 'https://github.com/Rial-2004', icon: siGithub },
  { name: 'Steam', handle: 'rial.git', url: 'https://steamcommunity.com/profiles/76561199377738758/', icon: siSteam },
  { name: 'Discord', handle: 'rialmar_04', icon: siDiscord },
  { name: 'LinkedIn' },
];
