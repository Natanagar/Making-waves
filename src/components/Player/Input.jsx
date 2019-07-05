import React from 'react';

export const InputTrack = ({ handleChangeInput }) => (

  <div>
    <form>
      <label htmlFor="input" />
      <input onChange={handleChangeInput} type="file" accept=".mp3,audio/*" />
    </form>
  </div>
);
