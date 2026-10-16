// Enlaces del perfil. Con `url` se muestran como botón; solo con `handle`, como tarjeta con el usuario; sin ninguno, no se muestran.
export interface LinkItem { name: string; handle?: string; url?: string; icon: string }
export const links: LinkItem[] = [
  { name: "Instagram", handle: "@riaal.04", url: "https://instagram.com/riaal.04", icon: "📸" },
  { name: "GitHub", handle: "Rial-2004", url: "https://github.com/Rial-2004", icon: "💻" },
  { name: "Steam", handle: "rial.git", url: "https://steamcommunity.com/profiles/76561199377738758/", icon: "🎮" },
  { name: "Discord", handle: "rialmar_04", icon: "💬" },
  { name: "LinkedIn", icon: "💼" },
];
