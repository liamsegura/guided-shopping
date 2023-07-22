import { useLoaderData } from "react-router-dom";
import HelpPopup from "../components/HelpPopup";
import Hero from "../components/Hero";



function Index(props) {
  
  const phones = useLoaderData();

  return (
    <div >
      <HelpPopup />
      <Hero />
      
     
      <div id="sectionBelow" className="p-1 sm:p-20" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px', justifyContent: "center"}}>
        {phones.map((phone) => (
          <div key={phone._id} style={{ padding: '10px', width: '150px' }}>
            <img src="/mock.png" alt={phone.brand} style={{ width: '100%', marginBottom: '10px' }} />
            <h3>{phone.brand}</h3>
            <h3>{phone.model}</h3>
            <p>Data: {phone.dataPlan}</p>
            <p>Talk Time: {phone.talkTime}</p>
            <p>Price: £{phone.budget}</p>
          </div>
        ))}
      </div>
      
    </div>
   
  );
}

export default Index;
