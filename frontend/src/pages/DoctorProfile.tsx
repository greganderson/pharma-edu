import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DoctorProfile {
  last: string;
  first: string;
  drType: string;
  address: string;
  dea: string;
  phone: string;
  npi: string;
}

const DoctorProfile: React.FC = () => {
  const [DoctorDetails, setDoctorDetails] = useState<DoctorDetails>({
    last: "",
    first: "",
    drType: "",
    address: "",
    dea: "",
    phone: "",
    npi: "",
  });

  const handleDoctorChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDoctorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="doctor-profile-container">
      <h3>Doctor Name First/Last</h3>
      <div>
        <label htmlFor="doctor-last-name">Last Name</label>
        <input
          type="text"
          name="last"
          id="doctor-last-name"
          value={DoctorDetails.last}
          onChange={handleDoctorChange}
        />
      </div>
      <div>
        <label htmlFor="doctor-first-name">First Name</label>
        <input
          type="text"
          name="first"
          id="doctor-first-name"
          value={DoctorDetails.first}
          onChange={handleDoctorChange}
        />
      </div>
      <div>
        <label htmlFor="doctor-dr-type">Dr Type</label>
        <input
          type="text"
          name="dr-type"
          id="doctor-dr-type"
          value={DoctorDetails.drType}
          onChange={handleDoctorChange}
        />
      </div>
      <div>
        <label htmlFor="doctor-address">Address</label>
        <input
          type="text"
          name="address"
          id="doctor-address"
          value={DoctorDetails.address}
          onChange={handleDoctorChange}
        />
      </div>
      <div>
        <label htmlFor="doctor-dea">DEA</label>
        <input
          type="text"
          name="dea"
          id="doctor-dea"
          value={DoctorDetails.dea}
          onChange={handleDoctorChange}
        />
      </div>
      <div>
        <label htmlFor="doctor-phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="doctor-phone"
          value={DoctorDetails.phone}
          onChange={handleDoctorChange}
        />
      </div>
      <div>
        <label htmlFor="doctor-npi">NPI</label>
        <input
          type="text"
          name="npi"
          id="doctor-npi"
          value={DoctorDetails.npi}
          onChange={handleDoctorChange}
        />
      </div>
    </div>
  )

};

export default DoctorProfile;
