export interface LatestRelease { tag: string; url: string; size: number; date: string }

/** Última Release con APK en un repo público. Devuelve null si no hay repo, no es público o falla la API. */
export async function latestApk(repo: string | undefined, prefix: string): Promise<LatestRelease | null> {
  if (!repo) return null;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return null;
    const rel = await res.json();
    const asset = rel.assets?.find((a: any) => a.name.startsWith(prefix) && a.name.endsWith('.apk'));
    if (!asset) return null;
    return { tag: rel.tag_name, url: asset.browser_download_url, size: asset.size, date: rel.published_at };
  } catch {
    return null;
  }
}
