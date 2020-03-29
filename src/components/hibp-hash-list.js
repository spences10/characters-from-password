import React, { useEffect, useState } from 'react';
import hash from 'sha1';
import { Dump, fetchHIBPData } from '../helpers';

const apiUrl = `https://api.pwnedpasswords.com/range/`;

export const HIBPHashList = () => {
  const [hashes, setHashes] = useState(``);
  const [getSha1, setSha1] = useState(`5BAA6`);
  const [getPassword, setPassword] = useState(``);

  useEffect(() => {
    function getHIBPHashes(apiUrl, sha1) {
      fetchHIBPData(`${apiUrl}/${sha1.substring(0, 5)}`).then(
        (result) => {
          setHashes(result.data.split('\r\n'));
        }
      );
    }
    getHIBPHashes(apiUrl, getSha1);
  }, [getSha1]);

  function handleInputChange(e) {
    const password = e.target.value;
    setSha1(hash(password).toUpperCase());
    setPassword(password);
  }

  // if (loading) return <p>Loading...</p>;

  return (
    <>
      <input
        value={getPassword}
        onChange={(e) => handleInputChange(e)}
        type='text'
        placeholder='password me up yo!'
      />
      <Dump sha1={getSha1} yo={hashes} />
    </>
  );
};
