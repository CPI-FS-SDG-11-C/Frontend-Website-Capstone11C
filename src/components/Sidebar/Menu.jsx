import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import classNames from "classnames";
import { hijausantara } from "../../assets/images/Images";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import DistrictCard from "../DistrictAndRTH/CardSubdistricts";
import Axios from "axios";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Menu = ({ openMenu, setOpenMenu }) => {
  // const classes = useStyles()

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  // fetch data SubDistrict
  const [district, setDistrict] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await Axios.get(apiUrl + "subdistricts/subDist-And-RTH");
      setLoading(false);  
      return response.data;
    } catch (error) {
      console.error(error);
      setLoading(false);
      return [];
    }
  }
  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setDistrict(data.data);
    }
    loadData();
  }, []);
  const arrayData = district;
  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

  return (
    <div
      className={classNames(
        "px-5 flex flex-row absolute top-0 z-50 bg-[#fff] md:w-[23.5%] text-[#202124] text-xs h-[100%] overflow-y-scroll overflow-x-hidden transition-transform duration-300 transform",
        { "translate-x-0": openMenu, "-translate-x-full": !openMenu }
      )}
    >
      <div className="w-[100%] ">
        <div className="flex p-3 w-[100%] justify-between items-center">
          <a href="" className="cursor-pointer">
            <img
              className=" w-auto h-8 md:h-12"
              src={hijausantara}
              alt="hijausantara"
            />
          </a>
          <IoMdClose
            onClick={handleCloseMenu}
            className="text-[#616161] text-2xl cursor-pointer"
          />
        </div>
        <hr className="w-[100%]" />
        {/* Buat isinya disini */}
        <div className="pt-5">
          {loading ? (<Stack spacing={1.5}>
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
            <Skeleton variant="rounded" maxWidth={350} height={58} />
          </Stack>) : district.map((arr) => (
            <DistrictCard key={arr.kec_id} data={arr} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
