import React from 'react';
import Navbar from './Navbar';
import './Resources.css';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
const Resources = () => {
    const websites = [
        {
          name: 'Accounting and Corporate Regulatory Authority',
          url: 'https://www.acra.gov.sg/',
        },
        {
          name: 'Central Provident Fund Board (CPFB)',
          url: 'https://www.cpf.gov.sg/member',
        },
        {
          name: 'Enterprise Singapore',
          url: 'https://www.enterprisesg.gov.sg/',
        },
        {
          name: 'GoBusiness Singapore',
          url: 'https://www.gobusiness.gov.sg/',
        },
        {
          name: 'Inland Revenue Authority of Singapore (IRAS)',
          url: 'https://www.iras.gov.sg/',
        },
        {
          name: 'Ministry of Manpower (MOM)',
          url: 'https://www.mom.gov.sg/',
        },
        {
          name: 'Ministry of Trade and Industry (MTI)',
          url: 'https://www.mti.gov.sg/',
        },
        {
          name: 'Monetary Authority of Singapore (MAS)',
          url: 'https://www.mas.gov.sg/',
        },
        {
          name: 'Singapore Economic Development Board (EDB)',
          url: 'https://www.edb.gov.sg/',
        },
        {
          name: 'Singapore Government Portal',
          url: 'https://www.gov.sg/',
        },
      ];
    

  return (
    <div>
      <Navbar />
      <div className='subDashboard'>
        <h1>Resources</h1></div>
        <ul >
          {websites.map((website, index) => (
            <div className ="webBox"key={index}><h3>
              <a href={website.url} target='_blank' rel='noopener noreferrer'>
                {website.name}
              </a><ArrowCircleRightOutlinedIcon style={{  fontSize: 40, marginLeft: "20px" }}/>
              </h3><hr />
            </div>
          ))}
        </ul>

    </div>
  );
};

export default Resources;
