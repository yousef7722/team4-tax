import React from 'react'

const BlogCard = ({c}) => {
  return (
    <div class={`col-lg-4 m-auto m-md-auto  col-md-6 col-sm-6 col-10 ${c?c:""}`} >
      <div class="container" style={{ border: "1px solid rgb(55, 182, 255)", borderRadius: "15px", marginBottom: "20px" }}>
        <div style={{ textAlign: "center", paddingTop: "30px" }}>
          <img class="img-fluid" src="./assets/images/Blogs Featured Image.jpg" alt="photo" />
        </div>
        <h6 style={{ fontSize: "20px", fontfamily: 'Philosopher, sans-serif', margin: "20px 0px" }}>Lorem ipsum dolor sit amet</h6>
        <p style={{ fontSize: "12px", marginBottom: "10px" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu</p>
        <a href="#" style={{ fontSize: "20px", color: "black", display: " block", marginBottom: "15px" }}>Read more</a>
      </div>
    </div>
  )
}

export default BlogCard