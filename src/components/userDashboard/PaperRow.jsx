import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PaperRow = ({ num, name, status, uploadDate, lastModified }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div className="row py-4 d-flex justify-content-evenly" style={{ borderBottom: "1px solid rgb(204, 204, 204)" }} >
      <div className="col-1 align-self-center">
        <h6 className="text-muted my-2" style={{ fontFamily: 'Philosopher sans-serif', fontSize: "18px" }}>{num}</h6>
      </div>
      <div className="col-1 px-0 align-self-center">
        <h6 className="text-muted text-start my-2 " style={{ fontFamily: 'Philosopher sans-serif', fontSize: "18px" }}>{name}</h6>
      </div>
      <div className="col-2 align-self-center ">
        <h6 className={`${status == "not valid" ? "text-success" : "text-danger"} text-center my-2`} style={{ fontFamily: 'Philosopher sans-serif', fontWeight: "bold", fontSize: "18px" }}>{status}</h6>
      </div>
      <div className="col-2 align-self-center  ">
        <h6 className="text-muted text-center my-2" style={{ fontFamily: 'Philosopher sans-serif', fontSize: "18px" }}>{uploadDate}</h6>
      </div>
      <div className="col-2 align-self-center ">
        <h6 className="text-muted text-start my-2" style={{ fontFamily: 'Philosopher sans-serif', fontSize: "18px" }}>{lastModified}</h6>
      </div>
      <div className="col-2 align-self-center me-5">
        <Modal
          show={modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered

        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Id : #{num}</p>
            <p>Document : {name}</p>
            <p>Status : {status}</p>
            <p>Upload date : {uploadDate}</p>
            <p>Last modified : {lastModified}</p>
            <img className='w-50' src="../assets/images/Placeholder_img.png" alt="" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={modalShow2}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Paper view
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Id : #{num}</p>
            <p>Document : {name}</p>
            <p>Status : {status}</p>
            <p>Upload date : {uploadDate}</p>
            <p>Last modified : {lastModified}</p>
            <div className='position-relative w-50'>
              <img className='w-100' src="../assets/images/Placeholder_img.png" alt="" />
              <button className='btn btn-light position-absolute start-50 top-50 translate-middle '>Upload</button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow2(false)}>Save</Button>
            <Button onClick={() => setModalShow2(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <a href="#" style={{ textDecoration: "none" }}><span onClick={() => setModalShow(true)} className="text-muted text-start my-2" style={{ fontFamily: 'Philosopher sans-serif', fontSize: "18px" }} data-bs-target="#exampleModalToggle" data-bs-toggle="modal">view</span></a>
        <a href="#" style={{ textDecoration: "none" }}><span onClick={() => setModalShow2(true)} className="text-dark text-start my-2 ms-4" style={{ fontFamily: 'Philosopher sans-serif', fontSize: "18px" }} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">edit</span></a>
      </div>
    </div>
  )
}

export default PaperRow
