import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Albums.module.css';
import Logo from '../assets/Logo.gif';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const Albums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/albums',
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Ошибка загрузки альбомов:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className={styles.albums}>
      <h1>Альбоми</h1>
      <div className={styles.albumGrid}>
        {albums.map((album) => (
          <Link
            to={`/albums/${album.id}`}
            key={album.id}
            className={styles.albumCard}
          >
            <div className={styles.albumContent}>
              <img src={Logo} />
              <h2>{album.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Albums;
