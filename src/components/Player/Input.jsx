import React from 'react';

export const InputTrack = () => (
  <div>
          <form>
              <label htmlFor="input" placeHolder="choose track from your computer" />
              <input type="file" accept=".mp3,audio/*" />
            </form>
        </div>
);
