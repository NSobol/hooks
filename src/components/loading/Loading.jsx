import React from 'react';

import useJsonFetch from '../hook/useJsonFetch';

export const Loading = () => {
const response = useJsonFetch('http://localhost:7070/loading');

const loading = response[1];
  return (
    <div>
      {loading && (
        <div>
          <h1>Loading....</h1>
        </div>
      )}
    </div>
  );
};
