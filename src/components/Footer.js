import React from 'react'

export const Footer = () => {
    return (
      
        
        <footer className=" bg-green-900 text-white absolute -inset-x-0 pt-5 px-5"> 
          <div className="content-center md:px-10 xl:px-40 py-0">
            
              <p title="Contacts">
                Contacts <br/>
                Armenia, Yerevan <br/>
                Saryan street 25 <br/>
                +374-77 777777 <br/> <br/>

                Monday - Sunday <br/>
                 8:00 am - 1:00 am
                
              </p>
             
            
            <div className="flex justify-center px-8">
              <div className="text-center ">
                
                <div>Copyright &copy; {new Date().getFullYear()}</div>
              </div>
            </div>
          </div>
        </footer>
      );
}
