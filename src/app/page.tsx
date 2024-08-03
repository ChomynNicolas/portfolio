import { Metadata } from "next";
import Home from "./home";



export const metadata: Metadata = {
 title: 'Mi portafolio',
 description: 'Mi portafolio web hecho con next js',
};



export default function Page() {
  return (
    <Home/>
  );
}

