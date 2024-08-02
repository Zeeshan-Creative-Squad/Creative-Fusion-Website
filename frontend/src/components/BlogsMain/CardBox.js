import './CardBox.css';
import { useNavigate } from 'react-router-dom';

function CardBox(props) {
  const navigate = useNavigate();

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (slug_url) => {
    if (!slug_url) return;
    navigate(`/blogs/${slug_url}`);
  };
  
    return (
      <div className="card-box" onClick = { () => {redirectUserToBlog(props.slug_url)}}>
          <img src={props.cardImg} alt="someImage" />
          <div className="card-text-content text-center">
            <div className="top-links">
            
            </div>
            <button className='btn-red'>tech</button>
            <h5 className="title mb-0">{props.title}</h5>
            {/* <p className="mb-2 red-text mb-0">{props.content}</p>
           */}
            <div className='logo-container'>
          <img src="/images/icons/Group-1893.png" alt="Logo" className='logo-img' />
          <h4 className='logo-text'>CreativeFusion | April 18, 2024</h4>
        </div>


           
               
              
            </div>
          </div>
    
    )
  }
  
  export default CardBox