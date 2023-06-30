import React from 'react';

import useJsonFetch from '../hook/useJsonFetch';

export const Error = () => {
  const resp = useJsonFetch('http://localhost:7070/error');
  const data1 = resp[2];
  return (
    <div>
      {data1 && (
        <div>
          <h1>ОШИБКА!!!</h1>
          <p>Статус запроса: {`${data1}`}</p>
        </div>
      )}
    </div>
  );
};
