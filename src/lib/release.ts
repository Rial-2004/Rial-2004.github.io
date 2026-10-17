export interface LatestRelease { version: string | null; url: string; sizeMb: string | null }

/**
 * Datos de descarga de una app cuya APK está en una Release de un repo público (los privados no sirven descargas).
 * El botón enlaza SIEMPRE a `<apkFile>` (nombre fijo), así que nunca apunta a un APK ya sustituido; `version.json`
 * (publicado por la CI de la app junto al APK) solo aporta la versión y el tamaño que se muestran. Se resuelve al
 * construir la web (se reconstruye a diario). Devuelve null si no hay repo o la Release no responde.
 */
export async function latestApk(repo: string | undefined, tag: string, apkFile: string): Promise<LatestRelease | null> {
  if (!repo) return null;
  const base = tag === 'latest'
    ? `https://github.com/${repo}/releases/latest/download`
    : `https://github.com/${repo}/releases/download/${tag}`;
  try {
    const res = await fetch(`${base}/version.json`, { headers: { 'Cache-Control': 'no-cache' } });
    if (!res.ok) return null;
    const v = await res.json();
    const bytes = Number(v.tamano);
    return {
      version: typeof v.versionName === 'string' ? v.versionName : null,
      url: `${base}/${apkFile}`,
      sizeMb: Number.isFinite(bytes) && bytes > 0 ? (bytes / 1024 / 1024).toFixed(1).replace('.', ',') : null,
    };
  } catch {
    return null;
  }
}
