import React from 'react';
import './style.css';

export default function ListSampleData() {
  const [sampleData, setSampleData] = React.useState();
  const [getvalue, setVal] = React.useState({});

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setSampleData(data));
  }, []);
  console.log(sampleData && sampleData.products);
  const imageClick = (e, img) => {
    localStorage.setItem('price', e);
    localStorage.setItem('imgPath', img);
  };
  const doubleImageClick = (e) => {
    const value = localStorage.getItem('price');
    const imgPath = localStorage.getItem('imgPath');
    if (e == imgPath) setVal({ value: value, imgPath: imgPath });
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
                  e.images.slice(0, 3).map((img) => {
                    return (
                      <li
                        style={{
                          listStyleType: 'none',
                          display: 'inline',
                          marginLeft: '20px',
                        }}
                        onClick={() => imageClick(e.price, e.brand)}
                        onDoubleClick={() => doubleImageClick(e.brand)}
                      >
                        <img style={{ width: '30px' }} src={img} />
                        {getvalue.imgPath}
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
