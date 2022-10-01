import { Carousel } from 'antd';
export const About = (props) => {
  const contentStyle = {
    height: '358px',
    color: '#fff',
    borderRadius: 8,
    // lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
    position: 'relative',
    overflow: 'hidden',

  };
  const titleStyle = {
    zIndex: 100,
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#5ca9fb',
    padding: '10px 23px',
    borderRadius: 25,
    fontSize: 15,
    backgroundImage: 'linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)'
  }
  return (
    <div id="about">
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>关于我们</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data?.paragraph2}</p>
              {/* <h3>为什么选择我们?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <Carousel dotPosition="left">
              <div>
                <div style={contentStyle}>
                  <img src="img/location/1.jpeg" className="img-responsive" alt="" />
                  <div style={titleStyle}>电脑机车间</div>
                </div>
              </div>

              <div>
                <div style={contentStyle}>
                  <div style={titleStyle}>设计部</div>
                  <img src="img/location/2.jpeg" className="img-responsive" alt="" />
                </div>
              </div>

              <div>
                <div style={contentStyle}>
                  <div style={titleStyle}>缝盘车间</div>
                  <img src="img/location/3.jpeg" className="img-responsive" alt="" />
                </div>
              </div>

              <div>
                <div style={contentStyle}>
                  <img src="img/location/4.jpeg" className="img-responsive" alt="" />
                </div>
              </div>
              <div>
                <div style={contentStyle}>
                  <div style={titleStyle}>后整车间</div>
                  <img src="img/location/5.jpeg" className="img-responsive" alt="" />
                </div>
              </div>
              <div>
                <div style={contentStyle}>
                  <div style={titleStyle}>包装车间</div>
                  <img src="img/location/6.jpeg" className="img-responsive" alt="" />
                </div>
              </div>
            </Carousel>
            {/* {" "} */}
            {/* <img src="img/about.jpg" className="img-responsive" alt="" />{" "} */}
          </div>
        </div>
      </div >
    </div >
  );
};
