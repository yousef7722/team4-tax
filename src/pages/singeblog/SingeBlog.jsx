import React from 'react'
import TextBlock from '../../components/BlogSingle/TextBlock'
import BlogCard from '../../components/shared/BlogCard'

const SingeBlog = () => {
  return (
    <>
      <div className="replace">header</div>
      <div className='container  overflow-hidden container-md px-md-5 m-auto' style={{ maxWidth: "992px" }}>
        <h1 class="mb-5 mt-5">Lorem ipsum dolor sit amet</h1>
        <TextBlock />
        <TextBlock />
        <img src="./assets/images/Blogs Featured Image.png" alt="" style={{ width: "113%", translate: "-6%", marginBottom: "-50px" }} />
        <TextBlock />
        <TextBlock />
      </div>
      <div class="container" style={{ margin: "auto", maxWidth: "1200px" }}>
        <h2 class="mt-5">Related Blogs </h2>
        <div class="row mt-3">
          <BlogCard />
          <BlogCard />
          <BlogCard c="d-none d-lg-block" />
        </div>
        <div>
          <a class="mt-4 float-end" style={{ textDecoration: "none", color: "#000", cursor: "pointer" }}>View All<i
            class="fas fa-chevron-right ms-2 me-3" style={{ color: "rgba(0, 0, 0, 0.723)" }}></i></a>
        </div>
      </div>
      <div className="replace">footer</div>
    </>
  )
}

export default SingeBlog