import React from 'react';
import './style.css';

export default function App() {
  const [sampleData, setSampleData] = React.useState();

  React.useEffect(() => {
    fetch('https://api.publicapis.org/entries')
      .then((res) => res.json())
      .then((data) => setSampleData(data));
  }, []);
  console.log(sampleData && sampleData.count);
  return <div>{sampleData && sampleData.count}</div>;
}
