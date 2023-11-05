import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { RiLayoutLeftLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import classNames from "classnames";
import {
	hijausantara,
} from "../../assets/images/Images";

const Menu = ({ openMenu, setOpenMenu }) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<div
			className={classNames(
				"px-5 flex flex-row absolute top-0 z-50 bg-[#fff] md:w-[23.5%] text-[#202124] text-xs h-[100%] overflow-y-scroll overflow-x-hidden transition-transform duration-300 transform",
				{ "translate-x-0": openMenu, "-translate-x-full": !openMenu },
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
				
			</div>
		</div>
	);
};

export default Menu;