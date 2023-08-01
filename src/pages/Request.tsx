import SearchInput from "@components/SearchInput";
import TopNavbar from "@components/Navbar/TopNavbar";
import Typography from "@components/Typography";
import Button from "@components/Button";
import print_icon from "@assets/3d_print.svg";
import leset_cut_icon from "@assets/laser_cut.svg";
import BottomNavbar from "@/components/Navbar/BottomNavbar";
import img1 from "@assets/Create_Request_images/3d printer.svg"
import img2 from "@assets/Create_Request_images/Laser.svg"
import img3 from "@assets/Create_Request_images/cnc.svg"
import img4 from "@assets/Create_Request_images/PCB.svg"
import img5 from "@assets/Create_Request_images/PCB Mi.svg"
import img6 from "@assets/Create_Request_images/embedded.svg"
import img7 from "@assets/Create_Request_images/Sensor.svg"
import img8 from "@assets/Create_Request_images/Mech.svg"
import img9 from "@assets/Create_Request_images/modelling.svg"

const Request = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-neutral-50 p-4 w-full sm:w-1/4 ">
      <TopNavbar />
      <div className="my-2 text-center">
        <Typography size="h6/normal">Request Items</Typography>

        <SearchInput/>

        <div className={"mt-16"}>

    </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 lg:w-96">
        <div className="flex flex-row justify-between">
        </div>
{/* <Input className={"m-4"}></Input> */}
<h1 className={"text-center text-xl -mt-10"} >Choose Category</h1>
<div className={"grid grid-cols-3 justify-items-center mt-5 gap-16"}>
  <img src={img1}>  </img>
  <img src={img2}></img>
  <img src={img3}></img>
  <img src={img4}></img>
  <img src={img5}></img>
  <img src={img6}></img>
  <img src={img7}></img>
  <img src={img8}></img>
  <img src={img9}></img>

</div>
<div className={"grid grid-cols-3 justify-items-center -mt-56 gap-16"}>
  <p className={"-mt-3 text-center"}>3D Printing</p>
  <p className={"mt-0 text-center"}>Laser Cutting</p>
  <p className={"mt-1 text-center"}>CNC Milling</p>
  <p className={"-mt-3 text-center"}>PCB Components</p>
  <p className={"-mt-3 text-center"}>PCB Mining</p>
  <p className={"-mt-3 text-center"}>Embedded Programming</p>
  <p className={"mt-3"}>Sensor</p>
  <p className={"mt-3"}>Mechanical Components</p>
  <p className={"mt-3"}>Molding & Casting</p>

</div>
        <BottomNavbar></BottomNavbar>
       </div>


      </div>
    </div>
  );
};

export default Request;
