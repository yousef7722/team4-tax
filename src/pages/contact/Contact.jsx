import React from 'react'
import "./contact.css"
import ContactInfo from '../../components/Contact/ContactInfo'
import BlogCard from '../../components/shared/BlogCard'

const Contact = () => {
  return (
    <>
      <div className="replace">Header</div>
      <div className='container'>
        {/* <!-- //////////////////////////////// section1 --> */}
        <div className="row pt-5">
          <div className="col-sm-12 ">
            <h2 className="text-dark text-center" style={{ fontSize: "48px", fontFamily: "Philosopher , sans-serif" }}>Contact Us</h2>
            <p className="text-dark text-center my-4" style={{ fontFamily: "Mulish", fontSize: "20px" }}>Tax Hub sees itself as a partner to each of its clients - supporting and providing reliable and intelligent business solutions and maintaining dynamic professional relationship.</p>
          </div>
        </div>
        <div className="container col-xl-9 " >
          <div className="row mt-4  py-2 " style={{ borderRadius: "30px", border: "2px solid rgb(236, 236, 236)" }} >
            <div className="col-sm-12 col-md-6 mt-4">
              <label className="form-label" >Name</label><span className="star"></span>
              <input type="text" className="form-control" style={{ borderStyle: "outset", borderWidth: "2px" }} placeholder="full name" required />
            </div>
            <div className="col-md-6 col-sm-12 mt-4">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" style={{ borderStyle: "outset", borderWidth: "2px" }} placeholder="job title" />
            </div>
            <div className="col-sm-12 col-md-6 mt-4">
              <label className="form-label" >Email</label><span className="star"></span>
              <input type="email" className="form-control" style={{ borderStyle: "outset", borderWidth: "2px" }} placeholder="example@gmail.com" required />
            </div>
            <div className="col-md-6 col-sm-12 mt-4 ">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" style={{ borderStyle: "outset", borderWidth: "2px" }} placeholder="abour subject" />
            </div>
            <div className="col-md-12 col-sm-12 mt-4 ">
              <label className="form-label">Messages</label>
              <textarea type="text" className="form-control" rows="7" style={{ borderStyle: "outset", borderWidth: "2px", borderRadius: "18p" }} placeholder="enter your message here"  ></textarea>
            </div>
            <div className="text-center col-md-12 col-sm-12 mt-4 ">
              <button type="button" className="btn btn-primary" style={{ width: "250px", borderRadius: "35px" }}>Send now</button>
            </div>
          </div>
        </div>
        {/* <!-- //////////////////////////////// section1 end ////////////////////////////////--> */}
        {/* <!-- //////////////////////////////// section2*/}
        <div className=" row mt-5 text-center">
          <div className="col-12 sec-img " style={{ marginTop: "75px" }}>
            <img src="./assets/images/Basemap image.png" alt="photo" style={{ width: "100%" }} />
          </div>
          <div className="container col-12 text-center" >
            <div className="row justify-content-around  home  " >
              {/* <div className="col-lg-3 col-md-4 col-9 mb-5 text-center item1" >
                <i className="fas fa-phone-alt " style={{fontSize: 30px color: rgb(57, 57, 255)margin: 25px 0px"></i>
                <h6 style={{fontSize: 36px yfontFamily  'Philosopher, sans-serifmargin: 15px 0px">Phone</h6>
                <p style={{fontSize: 16pxmarginBottom: 55px" >020225254487</p>
              </div> */}
              <ContactInfo name="phone" value="020225254487" c="item1">
                <i className="fas fa-phone-alt " style={{ fontSize: "30px", color: "rgb(57, 57, 255)", margin: "25px 0px" }}></i>
              </ContactInfo>
              {/* 

              <div className="col-lg-3 col-md-4 col-9 mb-5 text-center item2" >
                <i className="far fa-envelope " style={{ fontSize: "30px", color: "rgb(57, 57, 255)", margin: "25px 0px" }}></i>
                <h6 style={{ fontSize: "36px", fontFamily: "Philosopher , sans-serif", margin: "15px 0px" }}>Email</h6>
                <p style={{ fontSize: "16px", marginBottom: "55px" }}>info@kbs.com.eg</p>
              </div> */}
              <ContactInfo c="item2" name="Email" value="info@kbs.com.eg">
                <i className="far fa-envelope " style={{ fontSize: "30px", color: "rgb(57, 57, 255)", margin: "25px 0px" }}></i>
              </ContactInfo>

              {/* <div className="col-lg-3 col-md-4 col-9 mb-5 text-center  item3" style={{ border: "1px solid blue", borderRadius: "25px", backgroundColor: "#fff" }}>
                <i className="fas fa-map-signs" style={{ fontSize: "30px", color: "rgb(57, 57, 255)", margin: "25px 0px" }}></i>
                <h6 style={{ fontSize: "36px", fontFamily: "Philosopher, sans-serif", margin: "15px 0px" }}>Office</h6>
                <p style={{ fontSize: "16px", marginBottom: "10px" }} >Headquarter: 30 Misr Helwan Road, Maadi .Egypt Branch:  Greek Campus office106 El Tahrir Square.</p>
              </div> */}
              <ContactInfo c="item3" name="Office" value="Headquarter: 30 Misr Helwan Road, Maadi .Egypt Branch:  Greek Campus office106 El Tahrir Square.">
                <i className="far fa-envelope " style={{ fontSize: "30px", color: "rgb(57, 57, 255)", margin: "25px 0px" }}></i>
              </ContactInfo>
            </div>
          </div>
        </div>
        {/* <!-- //////////////////////////////// section2 end ////////////////////////////////--> */}
        {/* <!-- //////////////////////////////// section3--> */}
        <div class="section row">
          <div className='col-md-12 col-9 m-auto'>
            <h2 class="text-dark text-start mt-5" style={{ fontSize: "3rem", fontfamily: 'Philosopher, sans-serif' }}>Explore our Latest Blogs</h2>
          </div>
        </div>
        <div class="row m-md-auto">
          <BlogCard />
          <BlogCard />
          <BlogCard c="item4" />
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-9 text-end mt-2">
            <a href="#" style={{ fontSize: "20px", color: "black", textDecoration: "none", marginBottom: "15px" }}>View All</a>
            <i class="fas fa-chevron-right" style={{ color: "black" }}></i>
          </div>
        </div>
      </div>
      <div className="replace">Footer</div>
    </>
  )
}

export default Contact