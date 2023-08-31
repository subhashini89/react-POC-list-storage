import React from 'react';
import './style.css';

export default function ListSampleData() {
  const [sampleData, setSampleData] = React.useState();
  const [getvalue, setVal] = React.useState();

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setSampleData(data));
  }, []);
  console.log(sampleData && sampleData.products);
  const imageClick = (e) => {
    localStorage.setItem('price', e);
  };
  const doubleImageClick = (e) => {
    const value = localStorage.getItem('price', e);
    setVal(value);
  };
  return (
    <div>
      {sampleData &&
        sampleData.products.map((e) => {
          return (
            <>
              <div>{e.brand}</div>
              <ul>
                {e.images &&
                  e.images.map((img) => {
                    return (
                      <li
                        style={{
                          listStyleType: 'none',
                          display: 'inline',
                          marginLeft: '20px',
                        }}
                        onClick={() => imageClick(e.price)}
                        onDoubleClick={() => doubleImageClick()}
                      >
                        <img style={{ width: '30px' }} src={img} />
                        {getvalue}
                      </li>
                    );
                  })}
              </ul>
            </>
          );
        })}
    </div>
  );
}
