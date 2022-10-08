import React, { useEffect, useState } from "react";

function FakeData() {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setFakeData(data));
  }, []);
  return (
    <>
      <h1>Fake Data</h1>
      <ul>
        {fakeData.map((individualData) => {
          return (
            <li key={individualData.id}>
              {individualData.id} {individualData.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FakeData;
