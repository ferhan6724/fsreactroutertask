import { Routes } from "react-router-dom"


const Router = () => {
  return (
    


    <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />

      <Route path="/paths" element={<Paths />} >

        <Route index element={<FullStack/>}/>
        <Route path="fullstack" element={<FullStack/>}/>
        <Route path="aws" element={<AwsDevops/>}/>

        </Route>
       <Route path="/people/:id" element={<PersonDetail />} />
      <Route path="/contct" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </div>



  )
}

export default Router