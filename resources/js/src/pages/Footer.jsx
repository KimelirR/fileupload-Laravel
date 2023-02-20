import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<>
    <footer id="footer">
        <div className="container">
            <div className="copyright">
                © Copyright
                <strong>
                    <span>Ronald</span>
                </strong>. All Rights Reserved
            </div>
            <div className="credits">

                Designed by
                <Link to="">BootstrapMade</Link>
            </div>
        </div>
    </footer>
    <div id="preloaderssds"></div>
    <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"/></Link>
</>

  )
}

export default Footer
