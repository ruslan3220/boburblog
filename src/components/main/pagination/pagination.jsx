
import {Link} from "react-router-dom"
export const Pagination = ()=>{
  

 
    
    return(
        <div className="d-flex justify-content-end position-static" style={{marginBottom: '150px'}}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span className="text-black-50" aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li className="page-item"><Link className="page-link text-black-50" to="/one">1</Link></li>
                    <li className="page-item"><Link className="page-link text-black-50" to="/two">2</Link></li>
                    <li className="page-item"><Link className="page-link text-black-50" to="/three">3</Link></li>
                    <li className="page-item"><Link className="page-link text-black-50" to="/four">4</Link></li>
                    <li className="page-item"><Link className="page-link text-black-50" to="/five">5</Link></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span className="text-black-50" aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
              </ul>
            </nav>
        </div>
    )
}