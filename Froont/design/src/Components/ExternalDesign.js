import  React, { useState ,useEffect } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ExternalDesign() {
    const types = ["internal","external"]
    const [external,setExternal] = useState([])
    const {design_type}=useParams();
    useEffect(() => {
        types.forEach(design_type => {
            axios.get(`http://localhost:8080/utility/col/${design_type}`)
        .then((response) => {
        
          console.log(response);
          console.log(response.data);
    
          if(design_type === 'external'){
            setExternal(response.data)
          }
          
          
        })
        .catch((err)=>{ 
            console.log(err);
        })


        });
        


      }, []);







    return (
        <div className='content sections'>
            <div className="section">
                <div className="header">
                    <h1 className="main-title">Exterior Design services</h1>
                    <select name="" id="">
                        <option value="">Filter</option>
                    </select>
                </div>
                <div className="items">
                    {external.map(ele=>(
                        <Link to={`/service/${ele.id}`} className="item">
                            <Link to={`/providerServies/${ele.user.id}`} className="user"><img src="./images/img3.jpg" alt="" /></Link>
                            <div className="head">
                                {/* Put image src here */}
                                <img src="./images/img4.jpg" alt="" />
                            </div>
                           
                                <h3>{ele.title}</h3>
                            
                            
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}