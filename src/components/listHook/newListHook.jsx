import React from 'react';
import { Data } from '../data/Data';
import { Error } from '../error/Error';
import { Loading } from '../loading/Loading';

export const NewListHook = () => {
  return (
    <div>
      <Data />
      <Error />
      <Loading />
    </div>
  );
};
