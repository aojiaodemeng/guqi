export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            火伊针织服饰有限公司
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>

            <li>
              <a href='#about' className='page-scroll'>
                关于我们
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                合作
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                服务
              </a>
            </li> */}
            <li>
              <a href='#portfolio' className='page-scroll'>
                服装展示
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                客户评价
              </a>
            </li> */}
            <li>
              <a href='#team' className='page-scroll'>
                合作品牌
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                联系我们
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
