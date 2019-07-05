export const Apikey = {
  // spotify

  // OAuth
  // id: '21rtbmrb3txebo37xb47h5gua',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  clientId: '1b88dc822bcf411986df9f9776e72c3d',
  redirectUri: 'http://localhost:3000/callback', // where app will be deployed
  scopes: [
    'streaming',
    'user-read-recently-played',
    'playlist-modify-public',
    'playlist-read-collaborative',
    'user-read-currently-playing',
    'user-read-playback-state',
  ],
  endpoint: 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10',
};
