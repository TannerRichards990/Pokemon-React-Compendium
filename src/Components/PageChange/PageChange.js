import './PageChange.css';

export default function PageChange({ pageTotal, changePage, setChangePage }) {
  return (
    <div>
      <button className='page-change-button'
        onClick={() => {
          setChangePage((prevState) => {
            if (prevState !== 1) return prevState - 1;
            else {
              return 1;
            }
          });
        
        }}>Page-Back
      </button>
      <div className='page-change'>Page:{changePage} </div>
      <button className='page-change-button'
        onClick={() => {
          setChangePage((prevState) => {
            if (prevState !== pageTotal) return prevState + 1;
            else {
              console.log(pageTotal);
              return pageTotal;
            }
          });
        }}>Page-Forward
      </button>
    </div>
  );
}