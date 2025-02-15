import styles from './layout.module.scss';

async function fetchUnsplashImage() {
  const token = process.env.UNSPLASH_API_TOKEN;

  if (!token) {
    throw new Error(`Invalid Unsplash API access token`);
  }

  const response = await fetch('https://api.unsplash.com/photos/random', {
    headers: { Authorization: `Client-ID ${token}` },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
}

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const wallpaper = await fetchUnsplashImage();

  return (
    <main>
      <h1 className={`${styles.hidden}`}>Authentication Page</h1>
      <img alt={wallpaper.description} src={wallpaper.urls.regular}></img>
      {children}
    </main>
  );
}
