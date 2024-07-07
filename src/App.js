import './App.css';
import Card from './card.jsx'; // Importing the Card component from the Card.js file

const cardDetails = [
  {
    version: 'FREE',
    price: '$0',
    tik1: <i className="fa fa-check" aria-hidden="true"></i>,
    user: 'Single User',
    tik2: <i className="fa fa-check" aria-hidden="true"></i>,
    storage: '5GB',
    tik3: <i className="fa fa-check" aria-hidden="true"></i>,
    publicProject: 'Unlimited Public Projects',
    tik4: <i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Community Access</i>,
    tik5: <i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Unlimited Private Projects</i>,
    tik6: <i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Dedicated Phone Support</i>,
    tik7: <i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Free Subdomain</i>,
    tik8: <i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Monthly Status Reports</i>
  },
  {
    version: "PLUS", 
    price: "$9",
    tik1:<i className="fa fa-check" aria-hidden="true"></i>,
    user:"Single User",
    tik2:<i className="fa fa-check" aria-hidden="true"></i>,
    storage:"50GB",
    tik3:<i className="fa fa-check" aria-hidden="true"></i>,
    publicProject:"Unlimited Public Projects",
    tik4:<i className="fa fa-check" aria-hidden="true"></i>,
    access:"Community Access",
    tik5:<i className="fa fa-check" aria-hidden="true"></i>,
    privateProject:"Unlimited Private Projects",
    tik6:<i className="fa fa-check" aria-hidden="true"></i>,
    support:"Dedicated Phone Support",
    tik7:<i className="fa fa-check" aria-hidden="true"></i>,
    subdomain:"Free Subdomain",
    tik8:<i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Monthly Status Reports</i>
  },
  {
    version: "PRO", 
    price: "$49",
    tik1:<i className="fa fa-check" aria-hidden="true"></i>,
    user: "Single User",
    tik2:<i className="fa fa-check" aria-hidden="true"></i>,
    storage: "150GB",
    tik3:<i className="fa fa-check" aria-hidden="true"></i>,
    publicProject: "Unlimited Public Projects",
    tik4:<i className="fa fa-check" aria-hidden="true"></i>,
    access: "Community Access",
    tik5:<i className="fa fa-check" aria-hidden="true"></i>,
    privateProject: "Unlimited Private Projects",
    tik6:<i className="fa fa-check" aria-hidden="true"></i>,
    support: "Dedicated Phone Support",
    tik7:<i className="fa fa-check" aria-hidden="true"></i>,
    subdomain: "Free Subdomain",
    tik8:<i className="fa fa-check" aria-hidden="true"></i>,
    report: "Monthly Status Reports"
  }
];
function App() {
  return (
    <div className="App">
      <div className='container'>
        {cardDetails.map(({tik1, tik2, tik3, tik4, tik5, tik6, tik7, tik8, version, price, user, storage, publicProject, access, privateProject, support, subdomain, report}) => {
          return <Card
          tik1 = {tik1}
          tik2 = {tik2}
          tik3 = {tik3}
          tik4 = {tik4}
          tik5 = {tik5}
          tik6 = {tik6}
          tik7 = {tik7}
          tik8 = {tik8}
          version = {version}
          price = {price}
          user = {user}
          storage = {storage}
          publicProject = {publicProject}
          access = {access}
          privateProject = {privateProject}
          support = {support}
          subdomain = {subdomain}
          report = {report}
          />
        })}
      {/* <Card 
      version="FREE" 
      price="$0"
      tik1={<i className="fa fa-check" aria-hidden="true"></i>}user="Single User"
      tik2={<i className="fa fa-check" aria-hidden="true"></i>}storage="5GB"
      tik3={<i className="fa fa-check" aria-hidden="true"></i>}publicProject="Unlimited Public Projects"
      tik4={<i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Community Access</i>}
      tik5={<i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Unlimited Private Projects</i>}
      tik6={<i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Dedicated Phone Support</i>}
      tik7={<i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Free Subdomain</i>}
      tik8={<i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Monthly Status Reports</i>} />

      <Card 
      version="PLUS" 
      price="$9"
      tik1={<i className="fa fa-check" aria-hidden="true"></i>}user="Single User"
      tik2={<i className="fa fa-check" aria-hidden="true"></i>}storage="50GB"
      tik3={<i className="fa fa-check" aria-hidden="true"></i>}publicProject="Unlimited Public Projects"
      tik4={<i className="fa fa-check" aria-hidden="true"></i>}access="Community Access"
      tik5={<i className="fa fa-check" aria-hidden="true"></i>}privateProject="Unlimited Private Projects"
      tik6={<i className="fa fa-check" aria-hidden="true"></i>}support="Dedicated Phone Support"
      tik7={<i className="fa fa-check" aria-hidden="true"></i>}subdomain="Free Subdomain"
      tik8={<i className="fa fa-times" aria-hidden="true" style={{color: '#9e9b9b'}}> Monthly Status Reports</i>} />

      <Card 
      tik={<i className="fa fa-check" aria-hidden="true"></i>} version="PRO" 
      tik1={<i className="fa fa-check" aria-hidden="true"></i>} price="$49"
      tik2={<i className="fa fa-check" aria-hidden="true"></i>}user="Single User"
      tik3={<i className="fa fa-check" aria-hidden="true"></i>}storage="150GB"
      tik4={<i className="fa fa-check" aria-hidden="true"></i>}publicProject="Unlimited Public Projects"
      tik5={<i className="fa fa-check" aria-hidden="true"></i>}access="Community Access"
      tik6={<i className="fa fa-check" aria-hidden="true"></i>}privateProject="Unlimited Private Projects"
      tik7={<i className="fa fa-check" aria-hidden="true"></i>}support="Dedicated Phone Support"
      tik8={<i className="fa fa-check" aria-hidden="true"></i>}subdomain="Free Subdomain"
      tik9={<i className="fa fa-check" aria-hidden="true"></i>}report="Monthly Status Reports" /> */}
      </div>
    </div>
  );
}

export default App;
