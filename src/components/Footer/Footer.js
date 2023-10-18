import logo from "../../images/logo-v01.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className='bg2 pt40'>
        <div className='wrapper ptb48 ofh df'>
          <div className='footer-company flx24'>
            <Link to='/' className='logo mb16'>
              <img src={logo} alt='aajux company logo' />
            </Link>
            <p className='fs12 fc10 pr40 lh18'>
              we are a strategic digital marketing agency in NOIDA that enjoys
              connecting people with brands.
            </p>
            <div className='footer-links df jcsb mt48'>
              <ul>
                <li>
                  <Link to='/' className='fc10 ptb8 mb8 fc-h2'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/' className='fc10 ptb8 mb8 fc-h2'>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to='/about' className='fc10 ptb8 mb8 fc-h2'>
                    About
                  </Link>
                </li>
                <li>
                  <Link to='/services' className='fc10 ptb8 mb8 fc-h2'>
                    Services
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to='/' className='fc10 ptb8 mb8 fc-h2'>
                    Thoughtcast
                  </Link>
                </li>
                <li>
                  <Link to='/blog' className='fc10 ptb8 mb8 fc-h2'>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='fc10 ptb8 mb8 fc-h2'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='fc10 ptb8 mb8 fc-h2'>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-right flx1 ml40 pl48'>
            <h2 className='fs32 fw4 fc10 ls1 lh38 mb40'>
              This is where possibilities are reimagined and breakthroughs are
              brewed.
            </h2>
            <Link to='/' className='fs18 fw7 ttu fc4 dif aic'>
              Start A Project
              <span className='material-symbols-outlined ml24'>
                trending_flat
              </span>
            </Link>
          </div>
        </div>
        <div className='footer-copy-right ptb16 df jcsb aic'>
          <div className='wrapper'>
            <p className='fc11 tac flx100 fs12'>
              © 2023 AAJUX DESIGN STUDIO. ALL RIGHT RESERVED
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
