import TopNavbar from "@/components/Navbar/TopNavbar";
import Typography from "@/components/Typography";
import SearchInput from "@/components/SearchInput";
import CartNumber from "@/components/CartCount";
import BottomCart from "@/components/BottomCart";
import { Link } from "preact-router";

const  PCB = ()=>
{
  

    return(
<>
<div className={"my-4"}>

        <TopNavbar></TopNavbar>
        <div className="m-6 flex justify-between">
        <Link href={"/Return"}> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"/></svg></Link>   
        <Typography size="h6/normal" className={"text-center"}>Request Items</Typography>
           <Link href={"/home"}> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z" clip-rule="evenodd"/></svg></Link>
      </div>
      <SearchInput />
        <Typography size="h6/normal" className={"text-center font-semibold"}>PCB Components</Typography>
        
        <div className={"grid grid-cols-1 m-5 gap-y-5"}>
            <div className={"grid grid-cols-2 justify-items-center"}>

        <div className={"flex "}>

      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M372.5 33.27c-24.9.2-51.8 13.41-70.6 46.03l-.2.4l14.4 8.3l.2-.4c16.2-27.8 39.1-38.9 60.2-37.6c30.6 1.9 56.5 29.9 47.6 66.4c-2 8.4-5.9 17.3-11.8 26.4c-33 50.5-73 84.1-103.3 116.7c-32.3 34.8-53.8 68.7-47.4 117.9C268.1 428 317 458 371.4 461c39.3 3 81-8 110.1-33v-23c-25.3 30-68.7 43-108.9 40c-46.1-3-89-27-94.5-69.7c-5.6-43.8 14.4-73.5 43.1-104.4c30.8-33.2 71.5-67.6 105-119c7.1-10.9 11.7-21.5 14.1-31.6c11.7-47.8-22.5-84.4-62.8-86.9c-1.6-.1-3.3-.14-5-.13zM84.26 41.44C-6.511 138.9 158.5 160.1 75.56 268.1c-62.2 80.9-10.68 102.6-.96 195.1c0 0 .32-1.7.86-4.4c4.77-23.9 1.58-48.8-9.12-70.8c-26.01-53.4-5.18-74.8 56.26-143.4c71.9-80.4-58.81-126.2-38.34-203.16zM287.3 90.3s-17.6 29.9-38.9 62.9c-13.8 21.4-30.8 42.9-41.4 61.4c-4.9 8.5-8.7 16-11.3 21.8l-10-5.8l-9.3 16l57.8 33.4l9.2-16l-10-5.8c3.7-5.2 8.3-12.3 13.2-20.7c10.7-18.4 20.9-43.9 32.5-66.6c17.9-35 35-65.1 35-65.1l-26.8-15.5zM180.5 264.5l-5.4 9.4l36.1 20.8l5.4-9.4l-36.1-20.8zm-4.6 24.7l-55 95.2l21.7 12.5l54.9-95.2l-21.6-12.5zm-60.4 107.3l-3.7 12.2l14.8 8.6l8.8-9.3l-19.9-11.5zm-7.8 23.4l-15.53 26.9l-3.11 17.9L103 453l15.5-26.8l-10.8-6.3z"/></svg>
      <p >RES 0 OHM JUMPER 1/4W 1206</p>
        </div>
        <div className={"flex flex-wrap"}>
        <CartNumber></CartNumber>

        </div>
            </div>
         <p className={"text-end px-9 sm:px-24 md:px-40 text-yellow-400"}>Borrow request</p>
        <hr></hr>
         {/* list item 2 */}
          <div className={"grid grid-cols-2 justify-items-center"}>

        <div className={"flex "}>

      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M372.5 33.27c-24.9.2-51.8 13.41-70.6 46.03l-.2.4l14.4 8.3l.2-.4c16.2-27.8 39.1-38.9 60.2-37.6c30.6 1.9 56.5 29.9 47.6 66.4c-2 8.4-5.9 17.3-11.8 26.4c-33 50.5-73 84.1-103.3 116.7c-32.3 34.8-53.8 68.7-47.4 117.9C268.1 428 317 458 371.4 461c39.3 3 81-8 110.1-33v-23c-25.3 30-68.7 43-108.9 40c-46.1-3-89-27-94.5-69.7c-5.6-43.8 14.4-73.5 43.1-104.4c30.8-33.2 71.5-67.6 105-119c7.1-10.9 11.7-21.5 14.1-31.6c11.7-47.8-22.5-84.4-62.8-86.9c-1.6-.1-3.3-.14-5-.13zM84.26 41.44C-6.511 138.9 158.5 160.1 75.56 268.1c-62.2 80.9-10.68 102.6-.96 195.1c0 0 .32-1.7.86-4.4c4.77-23.9 1.58-48.8-9.12-70.8c-26.01-53.4-5.18-74.8 56.26-143.4c71.9-80.4-58.81-126.2-38.34-203.16zM287.3 90.3s-17.6 29.9-38.9 62.9c-13.8 21.4-30.8 42.9-41.4 61.4c-4.9 8.5-8.7 16-11.3 21.8l-10-5.8l-9.3 16l57.8 33.4l9.2-16l-10-5.8c3.7-5.2 8.3-12.3 13.2-20.7c10.7-18.4 20.9-43.9 32.5-66.6c17.9-35 35-65.1 35-65.1l-26.8-15.5zM180.5 264.5l-5.4 9.4l36.1 20.8l5.4-9.4l-36.1-20.8zm-4.6 24.7l-55 95.2l21.7 12.5l54.9-95.2l-21.6-12.5zm-60.4 107.3l-3.7 12.2l14.8 8.6l8.8-9.3l-19.9-11.5zm-7.8 23.4l-15.53 26.9l-3.11 17.9L103 453l15.5-26.8l-10.8-6.3z"/></svg>
      <p >RES 0.1 OHM JUMPER 1% 1/4W 1206</p>
        </div>
        <div className={"flex flex-wrap"}>
        <CartNumber></CartNumber>

        </div>
            </div>
         <p className={"text-end px-9 sm:px-24 md:px-40 text-blue-400"}>Issue request</p>
          <hr />
         {/* list item 3 */}
         <div className={"grid grid-cols-2 justify-items-center"}>

        <div className={"flex "}>

            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-8M2 12h8m0-5v10m4-10v10m3-12h4m-2-2v4"/></svg>

      <p >CAP CER 1PF 50V COG/NPO 1206</p>
        </div>
        <div className={"flex flex-wrap"}>
        <CartNumber></CartNumber>

        </div>
            </div>
         <p className={"text-end px-9 sm:px-24 md:px-40 text-blue-400"}>Issue request</p>
          <hr />
          {/* list item 4 */}
          <div className={"grid grid-cols-2 justify-items-center"}>

        <div className={"flex "}>

            <svg className={"p-1"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z"/></svg>

      <p >LED RED CLEAR 1206 SMD...</p>
        </div>
        <div className={"flex flex-wrap"}>
        <CartNumber></CartNumber>

        </div>
            </div>
         <p className={"text-end px-9 sm:px-24 md:px-40 text-blue-400"}>Issue request</p>
         <hr />
         {/* list item 5 */}
         <div className={"grid grid-cols-2 justify-items-center"}>

        <div className={"flex "}>

        <svg className={"p-1"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z"/></svg>

      <p >LED RED CLEAR 1206 SMD...</p>
        </div>
        <div className={"flex flex-wrap"}>
        <CartNumber></CartNumber>

        </div>
            </div>
         <p className={"text-end px-9 sm:px-24 md:px-40 text-blue-400"}>Issue request</p>
        </div>

</div>
<BottomCart></BottomCart>
</>
        ) 
}
export default PCB;