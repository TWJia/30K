import React, { useState } from 'react';
import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
export default function HomeSearchBar() {
  const [user, setUser] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const serviceOptions = {
    grantsAndIncentives: {
      label: "Find information on grants and incentives",
      url: "https://www.gobusiness.gov.sg/business-grants-portal/?src=home_quicklinks",
      title:"Business grants"
    },
    schemesAndServices: {
      label: "Find out what schemes and services are most suitable for my business",
      url: "https://eadviser.gobusiness.gov.sg/govassist?src=home_quicklinks",
      title:"Business Schemes and services"
    },
    registerBusiness: {
      label: "Reserve business name and register business entity",
      url: "https://dashboard.gobusiness.gov.sg/login?&redirect-uri=https://eadviser.gobusiness.gov.sg/startabusiness",
      title: "Business tools for start-up"
    },
    stepbyStep: {
      label: "Find out end-to-end process of setting up a business",
      url: "https://www.gobusiness.gov.sg/start-a-business/?src=hbb",
      title: "Setting up a Business"
    },
    growthStrategies: {
      label: "Find out more on growth strategies and opportunities",
      url: "https://www.mti.gov.sg/Partnerships/PGI",
      title: "Partnership"
    },
    expandToSingapore: {
      label: "Looking to expand business into Singapore",
      url: "https://eadviser.gobusiness.gov.sg/startabusiness/?src=startup_guide",
      title: "E Adviser"
    },
    fillingTax: {
      label: "Filing of the Corporate Income Tax Return",
      url: "https://www.iras.gov.sg/taxes/corporate-income-tax/basics-of-corporate-income-tax/corporate-income-tax-filing-season-2023",
      title: "Income Tax"
    },
    expandInternationally: {
      label: "Comprehensive support and resources for expanding my business internationally",
      url: "https://www.acra.gov.sg/how-to-guides/registering-a-foreign-company",
      title: "International Expansion"
    },
    marketInsights: {
      label: "Insights into market trends to go global",
      url: "https://www.enterprisesg.gov.sg/grow-your-business/go-global/market-entry-support",
      title: "International Market trends"
    },
    accessToFunding: {
      label: "Facilitate access to funding opportunities and financing options",
      url: "https://www.enterprisesg.gov.sg/financial-support",
      title: "Financial Support"
    },
    optimizeOperations: {
      label: "Resources and guidance on optimizing operational efficiency and reducing costs",
      url: "https://www.enterprisesg.gov.sg/grow-your-business/boost-capabilities/sustainability",
      title: "Optimise resources"
    }
  };

  const renderServiceOptions = () => {
    if (user === "Start-upOwner") {
      return (
        <select
          type="select"
          name="service"
          className="form-control rounded"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="grantsAndIncentives">Find information on grants and incentives</option>
          <option value="schemesAndServices">Find out what schemes and services are most suitable for my business</option>
          <option value="registerBusiness">Register for my business and obtain necessary licenses</option>
          <option value = "stepbyStep">Find out end-to-end process of setting up a business</option>
        </select>
      );
    } else if (user === "BusinessOwner") {
      return (
        <select
          type="select"
          name="service"
          className="form-control rounded"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="growthStrategies">Find out more on growth strategies and opportunities</option>
          <option value="expandToSingapore">Looking to expand business into Singapore</option>
          <option value="fillingTax">Filling of corporate income tax return</option>
        </select>
      );
    } else if (user === "SME") {
      return (
        <select
          type="select"
          name="service"
          className="form-control rounded"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="expandInternationally">Comprehensive support and resources for expanding my business internationally</option>
          <option value="marketInsights">Insights into market trends to go global</option>
          <option value="accessToFunding">Facilitate access to funding opportunities and financing options</option>
          <option value="optimizeOperations">Resources and guidance on optimizing operational efficiency and reducing costs</option>
        </select>
      );
    }
    return null;
  };

  const renderSelectedService = () => {
    if (!selectedService || !serviceOptions[selectedService]) return null;
  
    const selectedOption = serviceOptions[selectedService];
  
    return (
      <div className="services">
        <h4>Relevant Services: </h4>
        <p className="box">
        <a href={selectedOption.url} target="_blank" rel="noopener noreferrer"><h3>
        {selectedOption.title}</h3>
        </a>
          {selectedOption.label}< ArrowCircleRightOutlinedIcon style={{  fontSize: 40, marginLeft: "20px" }} /></p>
      </div>
    );
  };
  
  return (
    <>
      <div className="mainDashboard">
        <FlagCircleRoundedIcon className="logo" style={{ color: "white", fontSize: 100, marginLeft: "20px" }} />
        <div className="mainwording_slide_left">One Stop Hub to gain insights</div>
        <div className="mainwording_slide_right">for Businesses</div>

        <div className="mb-3 row align-items-center form-control-sm">
  <div className="col-auto " >
    <label htmlFor="user" className="form-label">
     <h3> I am...</h3>
    </label>
  </div>
  <div className="col">
    <select
      type="select"
      name="user"
      className="form-control rounded"
      value={user}
      onChange={(e) => setUser(e.target.value)}
    >
      <option value="">Select a user type</option>
      <option value="Start-upOwner">Start-up Owner</option>
      <option value="BusinessOwner">Business Owner</option>
      <option value="SME">SME</option>
    </select>
  </div>
</div>
      {renderServiceOptions()}
      </div>
      {renderSelectedService()}

    </>
  );
}
