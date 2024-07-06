import React from "react";
import './card.css'


const Card = ({tik1, tik2, tik3, tik4, tik5, tik6, tik7, tik8, version, price, user, storage, publicProject, access, privateProject, support, subdomain, report}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5> {version} </h5>
                <div className="price-month">
                    <h1> {price}</h1><span>/month</span>
                </div>
                <hr />
                <div className="content">
                    <p> {tik1} {user} </p>
                    <p> {tik2} {storage} </p>
                    <p> {tik3} {publicProject} </p>
                    <p> {tik4} {access} </p>
                    <p> {tik5} {privateProject} </p>
                    <p> {tik6} {support} </p>
                    <p> {tik7} {subdomain} </p>
                    <p> {tik8} {report} </p>
                </div>
                <button type="button" className="btn btn-primary">BUTTON</button>
            </div>
        </div>
    )
};

export default Card;


// const Card = ({version, price, user, storage, publicProject, access, privateProject, support, subdomain, report}) => {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5>FREE</h5>
//                             <div className="price-month">
//                                 <h3>$99/month</h3>
//                             </div>
//                             <div className="content">
//                                 <p>Single User</p>
//                                 <p>50GB Storage</p>
//                                 <p>Unlimited Public Project</p>
//                                 <p>Community Access</p>
//                                 <p>Unlimited Private Project</p>
//                                 <p>Dedicated Phone Support</p>
//                                 <p>Free Subdomain</p>
//                                 <p>Monthly Status Reports</p>
//                             </div>
//                             <button className="btn btn-primary">Button</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5>FREE</h5>
//                             <div className="price-month">
//                                 <h3>$99/month</h3>
//                             </div>
//                             <div className="content">
//                                 <p>Single User</p>
//                                 <p>50GB Storage</p>
//                                 <p>Unlimited Public Project</p>
//                                 <p>Community Access</p>
//                                 <p>Unlimited Private Project</p>
//                                 <p>Dedicated Phone Support</p>
//                                 <p>Free Subdomain</p>
//                                 <p>Monthly Status Reports</p>
//                             </div>
//                             <button className="btn btn-primary">Button</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5>FREE</h5>
//                             <div className="price-month">
//                                 <h3>$99/month</h3>
//                             </div>
//                             <div className="content">
//                                 <p>Single User</p>
//                                 <p>50GB Storage</p>
//                                 <p>Unlimited Public Project</p>
//                                 <p>Community Access</p>
//                                 <p>Unlimited Private Project</p>
//                                 <p>Dedicated Phone Support</p>
//                                 <p>Free Subdomain</p>
//                                 <p>Monthly Status Reports</p>
//                             </div>
//                             <button className="btn btn-primary">Button</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default Card;