import axios from "axios";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [phone, setPhone] = useState([]);
  const [errorMessage, seterrorMessage] = useState();

  const fetchPhone = async () => {
    try {
      const result = await axios(`http://localhost:4000/api/`);
      await setPhone(result.data.data);
    } catch (error) {
      seterrorMessage(error.response.data);
    }
  };

  useEffect(() => {
    fetchPhone();
  }, []);

  return (
    <div>
      <h1>PhoneBook</h1>
      <hr />
      <div className="flex flex-col justify-center items-center space-x-48">
        <div className="flex flex-row justify-center">
          <h3>Nama</h3>
          <h3>Phone</h3>
          <h3>Action</h3>
        </div>
        <div className="m-0 border p-2 ">
          {phone.map((data, index) => (
            <>
              <h5>
                {data.first_name} {data.last_name}
              </h5>
              <h5>{data.phone_number}</h5>
              <button className="rounded-none ...">Favorite</button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
