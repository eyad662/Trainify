import { useState } from "react";
import ApplyModal from "../components/ApplyModal";
import { useGetinternshipByNameQuery } from '../redux/internship'
import { AnimatePresence, motion, scale } from "framer-motion";
import Card from "../components/Card";


export default function Internships() {

  const allInternshipsAPI = "internships?populate=*"
  const frontInternshipsAPI = "internships?populate=*&filters[field][$eq]=Front-End"
  const backInternshipsAPI = "internships?populate=*&filters[field][$eq]=Back-End"
  const cyberInternshipsAPI = "internships?populate=*&filters[field][$eq]=Cyber Security"
  const aiInternshipsAPI = "internships?populate=*&filters[field][$eq]=AI & ML"
  const dataAnalysisInternshipsAPI = "internships?populate=*&filters[field][$eq]=Data Analysis"
  const uiInternshipsAPI = "internships?populate=*&filters[field][$eq]=UI/UX"
  const graphicInternshipsAPI = "internships?populate=*&filters[field][$eq]=Graphic Designer"
  const videoInternshipsAPI = "internships?populate=*&filters[field][$eq]=Video Editing"
  
  const [selected, setSelected] = useState(allInternshipsAPI);
  const [myData, setmyData] = useState(allInternshipsAPI);

  const { data, error, isLoading } = useGetinternshipByNameQuery(myData)


  // console.log(data.data)
const [selectedInternship, setSelectedInternship] = useState(null);


  const handleAlignment = (event, newValue) => {
    setmyData(newValue)
    setSelected(newValue);
  };



  return (
  <div className="pt-32 ">

      <div className="px-8 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

      <div>
        <h3 className="text-textp text-2xl font-bold">Find Your Internship</h3>
        <p>Choose your field and start your journey</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button value={allInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === allInternshipsAPI ? "bg-primary text-white border-primary" : "text-primary border-primary hover:bg-blue-100"}`}>All Internships</button>
        <button value={frontInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === frontInternshipsAPI ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Front-end</button>
        <button value={backInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === backInternshipsAPI ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Back-end</button>
        <button value={cyberInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === cyberInternshipsAPI ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Cyber Security</button>
        <button value={aiInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === aiInternshipsAPI ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>AI & ML</button>
        <button value={dataAnalysisInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === dataAnalysisInternshipsAPI ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Data Analysis</button>
        <button value={uiInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === uiInternshipsAPI ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>UI/UX</button>
        <button value={graphicInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === graphicInternshipsAPI ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Graphic Design</button>
        <button value={videoInternshipsAPI} onClick={(e) => handleAlignment(e, e.target.value)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selected === videoInternshipsAPI ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Video Editing</button>
      </div>
    </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {data?.data?.map((internship) => (
              <Card key={internship.id} internship={internship} setIsOpen={setSelectedInternship} />
          
            ))}
          </div>
        </AnimatePresence>
        <ApplyModal internship={selectedInternship} setSelectedInternship={setSelectedInternship} />

    </div>
  );


}
