import React from 'react'
import "./papers.css"

const Papers = () => {
  return (
    <div className="container border border-whit rounded-4 my-5" style={{backgroundColor: "#fff"}}>
        <div className="row mx-3 mb-2 pt-5">
            <div className="col-5  py-2">
                <h6 className="text-dark text-start" style={{ fontFamily:'Philosopher, sans-serif', fontSize: "20px"}}>personal papers</h6>
            </div>
            <div className="col-2 ">
                <div className="d-flex justify-content-around rounded ps-2 py-2 w-100 h-100" style={{fontFamily:  'Philosopher, sans-serif',border: "1px solid  rgba(177, 177, 177, 0.548)", }}>
                    
                    <input type="text" className="float-start w-50  " placeholder="sort by"  style={{border: "0px"}}/>
                    <i className="fas fa-exchange-alt fa-rotate-90" style={{color: "rgba(177, 177, 177, 0.548)"}}></i>
                    
                </div>
            </div>
            <div className="col-5">
                <div className="input-group rounded ps-3 py-2 w-100 h-100 " style={{fontFamily:  'Philosopher, sans-serif',border: "1px solid  rgba(177, 177, 177, 0.548)"}}>
                    <i className="fas fa-search pt-1" style={{color: "rgba(177, 177, 177, 0.548)", fontSize: "20px"}}></i>
                    <input type="text" className="w-75 rounded ps-3 " placeholder="Search list..."  style={{border: "0px"}}/>
                </div>
            </div>
        </div>
        <div className="row py-2 d-flex justify-content-evenly align-items-center" style={{backgroundColor: "rgb(236, 236, 236)"}} >
            <div className="col-1  align-self-center">
                <h6 className="text-dark my-2" style={{ fontFamily:'Philosopher, sans-serif', fontSize: "18px"}}>#</h6>
            </div>
            <div className="col-1 align-self-center">
                <h6 className="text-dark text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>document</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className="text-dark text-center my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>status</h6>
            </div>
            <div className="col-2 align-self-center  ">
                <h6 className="text-dark text-center my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>upload date</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className="text-dark text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>last modified</h6>
            </div>
            <div className="col-2 align-self-center me-5">
                <h6 className="text-dark text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>Actions</h6>
            </div>
        </div>

        <div className="row py-4 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}} >
            <div className="col-1 align-self-center">
                <h6 className="text-muted my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>03</h6>
            </div>
            <div className="col-1 px-0 align-self-center">
                <h6 className="text-muted text-start my-2 " style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>personal ID</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className=" text-center my-2" style={{ fontFamily:'Philosopher sans-serif',fontWeight: "bold", fontSize: "18px",color: "rgb(0, 209, 0)"}}>valid</h6>
            </div>
            <div className="col-2 align-self-center  ">
                <h6 className="text-muted text-center my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>12-12-2024</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className="text-muted text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>12-12-2024</h6>
            </div>
            <div className="col-2 align-self-center me-5">
                <a href="#" style={{textDecoration: "none"}}><span className="text-muted text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>view</span></a>
                <a href="#" style={{textDecoration: "none"}}><span className="text-dark text-start my-2 ms-4" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>edit</span></a>
            </div>
        </div>

        <div className="row py-4 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}}>
            <div className="col-1 align-self-center">
                <h6 className="text-muted my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>03</h6>
            </div>
            <div className="col-1 px-0 align-self-center">
                <h6 className="text-muted text-start my-2 " style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>tax card</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className=" text-center  my-2" style={{ fontFamily:'Philosopher sans-serif',fontWeight: "bold", fontSize: "18px",color: "rgb(255, 30, 0)"}}>not valid</h6>
            </div>
            <div className="col-2 align-self-center  ">
                <h6 className="text-muted text-center my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>12-12-2024</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className="text-muted text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>12-12-2024</h6>
            </div>
            <div className="col-2 align-self-center me-5">
                <a href="#" style={{textDecoration: "none"}}><span className="text-muted text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>view</span></a>
                <a href="#" style={{textDecoration: "none"}}><span className="text-dark text-start my-2 ms-4" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>edit</span></a>
            </div>
        </div>

        <div className="row py-4 d-flex justify-content-evenly"style={{borderBottom: "1px solid rgb(204, 204, 204)"}} >
            <div className="col-1 align-self-center">
                <h6 className="text-muted my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>03</h6>
            </div>
            <div className="col-1 px-0 align-self-center">
                <h6 className="text-muted text-start my-2 " style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>commerical register</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className=" text-center my-2" style={{ fontFamily:'Philosopher sans-serif',fontWeight: "bold", fontSize: "18px",color: "rgb(255, 30, 0)"}}>not valid</h6>
            </div>
            <div className="col-2 align-self-center  ">
                <h6 className="text-muted text-center my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>12-12-2024</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className="text-muted text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>12-12-2024</h6>
            </div>
            <div className="col-2 align-self-center me-5">
                <a href="#" style={{textDecoration: "none"}}><span className="text-muted text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>upload</span></a>
            </div>
        </div>

        <div className="row py-4 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}}>
            <div className="col-1 align-self-center">
                <h6 className="text-muted my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>03</h6>
            </div>
            <div className="col-1 px-0 align-self-center">
                <h6 className="text-muted text-start my-2 " style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>establishment contract</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className=" text-center my-2" style={{ fontFamily:'Philosopher sans-serif',fontWeight: "bold", fontSize: "18px",color: "rgb(0, 209, 0)"}}>valid</h6>
            </div>
            <div className="col-2 align-self-center  ">
                <h6 className="text-muted text-center my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>12-12-2024</h6>
            </div>
            <div className="col-2 align-self-center ">
                <h6 className="text-muted text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>12-12-2024</h6>
            </div>
            <div className="col-2 align-self-center me-5">
                <a href="#" style={{textDecoration: "none"}}><span className="text-muted text-start my-2" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>view</span></a>
                <a href="#" style={{textDecoration: "none"}}><span className="text-dark text-start my-2 ms-4" style={{ fontFamily:'Philosopher sans-serif', fontSize: "18px"}}>edit</span></a>
            </div>
        </div>

        <div className="row py-5 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}}>

        </div>
        <div className="row py-5 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}}>

        </div>
        <div className="row py-5 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}}>

        </div>
        <div className="row py-5 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}}>

        </div>
        <div className="row py-5 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}}>

        </div>
        <div className="row py-5 d-flex justify-content-evenly" style={{borderBottom: "1px solid rgb(204, 204, 204)"}}>

        </div>
        <div className="row py-5 d-flex justify-content-evenly" >
            <div className="text-center">
                <a href="#"  style={{textDecoration: "none"}}><i className="fas fa-chevron-left " style={{color: "black"}}></i></a>
                <a href="#"  style={{textDecoration: "none"}}><span className=" ms-5" style={{color: "rgb(175, 175, 175)",display: "inline-block"}}>1</span></a>
                <a href="#"  style={{textDecoration: "none"}}><span className="rounded-circle bg-primary ms-4 " style={{color: "#fff", width: "28px",height: "28px",display: "inline-block"}}>2</span></a>
                <a href="#"  style={{textDecoration: "none"}}><span className=" ms-4" style={{color: "rgb(175, 175, 175)",display: "inline-block"}}>3</span></a>
                <a href="#"  style={{textDecoration: "none"}}><span className=" ms-4" style={{color: "rgb(175, 175, 175)",display: "inline-block"}}>4</span></a>
                <a href="#"  style={{textDecoration: "none"}}><span className="ms-4" style={{color: "rgb(175, 175, 175)",display: "inline-block"}}>.</span></a>
                <a href="#"  style={{textDecoration: "none"}}><span className="text-center" style={{color: "rgb(175, 175, 175)",display: "inline-block"}}>.</span></a>
                <a href="#"  style={{textDecoration: "none"}}><span className="text-center" style={{color: "rgb(175, 175, 175)",display: "inline-block"}}>.</span></a>
                <a href="#"  style={{textDecoration: "none"}}><span className="text-center" style={{color: "rgb(175, 175, 175)",display: "inline-block"}}>10</span></a>
                <a href="#"  style={{textDecoration: "none"}}><i className="fas fa-chevron-right ms-5" style={{color: "black"}}></i></a>

            </div>
        </div>
    </div>
  )
}

export default Papers