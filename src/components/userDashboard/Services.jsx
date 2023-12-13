import React from 'react'

const Services = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-3">
        </div>
        <div class="col-9 rounded-4 " style={{ boxShadow: "0 5px 4px 0 rgba(118, 117, 117, 0.136)", backgroundColor: "white", border: "1px solid rgb(250, 250, 250)", }}>
          <div class="row">
            <div class="col-6">
              <h4 class="mt-5 ms-2" style={{ color: "rgba(42, 42, 42, 0.701)" }}>All services</h4>
            </div>
            <select class="form-select col-2 mt-5" style={{ width: "14%" }}>
              <option>short by</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>

            <input type="search" class="form-control col-4  ms-4 mt-5 bg-opacity-25 " placeholder="search list ..." style={{ width: "30%", color: "rgba(145, 144, 144, 0.467)" }} />

          </div>
          <table class="table table-hover   mt-4">
            <thead>
              <tr class="table-secondary ">
                <th class="py-3">#</th>
                <th class="py-3">Service</th>
                <th class="py-3">Serial-Code</th>
                <th class="py-3">Last Update</th>
                <th class="py-3">data </th>
                <th class="py-3">Actions</th>
              </tr>
            </thead>
            <tbody >
              <tr >
                <td class="py-5">03</td>
                <td class="py-5">Lorem ipsum</td>
                <td class="py-5">#123-456ABC</td>
                <td class="py-5">12-12-2024</td>
                <td class="py-5">12-12-2024</td>
                <td class="py-5">details</td>
              </tr>
              <tr>
                <td class="py-5" >03</td>
                <td class="py-5">Lorem ipsum</td>
                <td class="py-5">#123-456ABC</td>
                <td class="py-5">12-12-2024</td>
                <td class="py-5">12-12-2024</td>
                <td class="py-5 " style={{ color: "green" }}>completed</td>
              </tr>
              <tr>
                <td class="py-5">03</td>
                <td class="py-5">Lorem ipsum</td>
                <td class="py-5">#123-456ABC</td>
                <td class="py-5">12-12-2024</td>
                <td class="py-5">12-12-2024</td>
                <td class="py-5">details</td>
              </tr>
              <tr>
                <td class="py-5">03</td>
                <td class="py-5">Lorem ipsum</td>
                <td class="py-5">#123-456ABC</td>
                <td class="py-5">12-12-2024</td>
                <td class="py-5">12-12-2024</td>
                <td class="py-5" style={{ color: "green" }}>completed</td>
              </tr>
              <tr>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
              </tr>
              <tr>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
              </tr>
              <tr>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
              </tr>
              <tr>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
              </tr>
              <tr>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
              </tr>
              <tr>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>
                <td class="py-5"></td>

              </tr>
            </tbody>

          </table>
          <div class="row justify-content-center d-flex mt-5 mb-4 ">
            <div class="col-md-1"><i class="fas fa-chevron-left" style={{ marginLeft: "30px" }}></i></div>
            <div class="col-md-1 " style={{ marginLeft: "-10px", color: "rgba(93, 91, 91, 0.544)" }}>1</div>
            <div class="col-md-1 bg-primary text-white" style={{ marginLeft: "-40px", width: "30px", height: "28px", borderRadius: "50%" }}>2</div>
            <div class="col-md-1 " style={{ color: "rgba(93, 91, 91, 0.544)" }}>3</div>
            <div class="col-md-1" style={{ marginLeft: "-50px", color: "rgba(93, 91, 91, 0.544)" }}>4</div>
            <div class="col-md-1" style={{ marginLeft: "-50px", color: "rgba(93, 91, 91, 0.544)" }}>...</div>
            <div class="col-md-1" style={{ marginLeft: "-50px", color: "rgba(93, 91, 91, 0.544)" }}>10</div>
            <div class="col-md-1" ><i class="fas fa-chevron-right" style={{ marginLeft: "-20px" }}></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services