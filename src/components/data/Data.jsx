import React from 'react';
import useJsonFetch from '../hook/useJsonFetch';

export const Data = () => {
  const resp = useJsonFetch('http://localhost:7070/data');
  const data = resp[0]?.status;

  return (
    <div>
      {data && (
        <div>
          <h1>УСПЕХ!!!</h1>
          <p>Статус запроса: {JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
};
