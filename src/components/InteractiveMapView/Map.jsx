import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { PlacesAutocomplete } from "../Home/PlacesAutocomplete";
import { FaBars, FaSearch } from "react-icons/fa";
import GetCoordinates from "./GetCoordinates";
import Sidebar from "../Sidebar/Sidebar";
// import Items from "./Items";

const Map = () => {
  const center = useMemo(() => ({ lat: -7.2657297, lng: 112.7461411 }), []);
  const [selected, setSelected] = useState(center);
  const [submittedLocation, setSubmittedLocation] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleLocationSubmit = (geolocation) => {
    setSubmittedLocation(geolocation);
  };
  console.log(openMenu);
  return (
    <>
      {" "}
      {/* <div className=" flex md:absolute items-center md:top-[4px] left-[40%] relative md:left-[50%] translate-x-[-50%] z-10 pl-16 md:pl-0">
        <div onClick={() => setOpenMenu((openMenu) => !openMenu)} className=" text-[#424242] text-[19px] bg-white p-[10px] shadow-none md:shadow-md cursor-pointer" title="Menu">
          {" "}
          <FaBars />{" "}
        </div>

        <div className="md:w-[300px] w-[350px] md:shadow-md cursor-text">
          <PlacesAutocomplete setSelected={setSelected} />
        </div>
        <div className=" text-[#424242] text-[19px] bg-white p-[10px] shadow-none md:shadow-md cursor-pointer" title="Search">
          {" "}
          <FaSearch />{" "}
        </div>
      </div> */}
      {/* <div className="">
        <GetCoordinates onLocationSubmit={handleLocationSubmit} />
      </div> */}
      <div>
        <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      {/* <div>
        <Items />
      </div> */}
      {!submittedLocation && (
        <GoogleMap
          zoom={13}
          center={selected}
          mapContainerClassName="w-[100%] h-[100vh]"
          options={{ disableDefaultUI: true }}
        >
          {selected && <Marker position={selected} />}
        </GoogleMap>
      )}
      {submittedLocation && (
        <GoogleMap zoom={15} center={submittedLocation} mapContainerClassName="w-[100%] h-[100vh]">
          {submittedLocation && <Marker position={submittedLocation} />}
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
