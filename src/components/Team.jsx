export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>合作品牌</h2>
          <p>
            和以下著名企业一起选择我们
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 team'>
                <div className='thumbnail'>
                  {' '}
                  <img src={d.img} alt='...' className='team-img' style={{ width: '160px', background: '#555', border: '1px solid #555' }} />
                  {/* <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div> */}
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
