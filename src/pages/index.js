import { useState } from "react";
export default function Home() {
  const [check, setcheck] = useState(true)
  // document.body.style.overflowX = "hidden"
  function  darkMode (e){
        if(check == true){
          setcheck(false)
        }
        if(check == false){
          setcheck(true)
        }
        if (check == true) {
          document.body.style.backgroundColor = '#252D3C'
        }
        if (check == false) {
          document.body.style.backgroundColor = 'white'
        }
  }
  return(
    <div >
      <img className="lg:justify-self-center sm:text-pink  lg:inline lg:mx-[40em]   lg:w-[12%] lg:mt-20" src={`${check == true ? 'logo.png': 'white.png'}`} alt="" />
      <div className="lg:absolute   lg:left-[54em] lg:bottom-[36.5em]  " >
      <label class="relative inline-flex items-center mb-4 cursor-pointer">
        <input  onClick={darkMode} type="checkbox" value="" className="sr-only peer"/>
        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900">Dark Mode</span>
        </label>
    </div>
      <div className="lg:mt-[32px] lg:border-2 rounded-md lg:border-[#DAE0E6] ml-[473px] lg:mr-[396px]  lg:h-[650px]  lg:w-[648px]"   >
        <div className={`${ check==true ?'h-[108px] flex justify-center bg-[#fafbfc]' : 'h-[108px] flex justify-center bg-[#1C2534]'}`}>
              <div className={`${check == false ? '  w-[32px]  text-center self-center bg-[#437EF7]  border-2 border-white h-[32px] rounded-full mx-[13px]': '  w-[32px]  text-center self-center   border-2 border-[#437EF7] h-[32px] rounded-full mx-[13px]'  }`}>
                <svg className="relative left-[2px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V9M8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V12.2C19 11.0799 19 10.5198 18.782 10.092C18.5903 9.71569 18.2843 9.40973 17.908 9.21799C17.4802 9 16.9201 9 15.8 9H8.2C7.0799 9 6.51984 9 6.09202 9.21799C5.71569 9.40973 5.40973 9.71569 5.21799 10.092C5 10.5198 5 11.0799 5 12.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
               <p className={`${ check == true?  'relative mt-2' : 'relative mt-2 text-white' }`} >Account</p>
          </div>
              <svg width="71" height="110" viewBox="0 0 31 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="30" y2="1" stroke="#DAE0E6" stroke-width="2" stroke-linecap="round" stroke-dasharray="0.1 8"/>
              </svg>

              <div className={`${check == false ? '  w-[32px]  text-center self-center bg-[#437EF7]  border-2 border-white h-[32px] rounded-full mx-[13px]': '  w-[32px]  text-center self-center   border-2 border-[#437EF7] h-[32px] rounded-full mx-[13px]'  }`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative left-[2px]" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14ZM12 14C7.58172 14 4 16.6863 4 20M12 14C16.4183 14 20 16.6863 20 20" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <p className={`${ check == true?  'relative mt-2' : 'relative mt-2 text-white' }`} >Personal</p>
              </div>
              <svg width="71" height="110" viewBox="0 0 31 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="30" y2="1" stroke="#DAE0E6" stroke-width="2" stroke-linecap="round" stroke-dasharray="0.1 8"/>
              </svg>              
              <div className={`${check == false ? '  w-[32px]  text-center self-center bg-[#437EF7]  border-2 border-white h-[32px] rounded-full mx-[13px]': '  w-[32px]  text-center self-center   border-2 border-[#437EF7] h-[32px] rounded-full mx-[13px]'  }`}><svg width="24" height="24" className="m-auto " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 8C17 5.79086 15.2091 4 13 4H11C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12H13C15.2091 12 17 13.7909 17 16C17 18.2091 15.2091 20 13 20H11C8.79086 20 7 18.2091 7 16M12 2L12 22" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <p className={`${ check == true?  'relative mt-2' : 'relative mt-2 text-white' }`} >Billing</p>
</div>
              <svg width="71" height="110" viewBox="0 0 31 2" fill="curruencolor" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="30" y2="1" stroke="#DAE0E6" stroke-width="2" stroke-linecap="round" stroke-dasharray="0.1 8"/>
              </svg>
              <div className={`${check == false ? '  w-[32px]  text-center self-center bg-[#437EF7]  border-2 border-white h-[32px] rounded-full mx-[13px]': '  w-[32px]  text-center self-center   border-2 border-[#437EF7] h-[32px] rounded-full mx-[13px]'  }`}><svg width="24" className="m-auto" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.4297L4 18.4297M7.5 11.0171V17.5725C7.5 18.6771 8.39543 19.5725 9.5 19.5725H17.3902C18.3301 19.5725 19.1432 18.9181 19.344 17.9999L20.7345 11.6434C20.8709 11.0197 20.396 10.4297 19.7576 10.4297H16C14.8954 10.4297 14 9.53425 14 8.42968V7.04698C14 6.01144 13.5886 5.01832 12.8564 4.28608C12.4161 3.84581 11.6818 3.92471 11.3451 4.44846L7.81764 9.93557C7.61026 10.2582 7.5 10.6336 7.5 11.0171Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <p className={`${ check == true?  'relative mt-2' : 'relative mt-2 text-white' }`} >Like</p>
          </div>
      </div>
      <form action="submit">
      <div className="mt-[32px] mx-14">
        <label for="nmae" className={`${ check==false? 'block mb-2 text-sm font-medium text-white': 'block mb-2 text-sm font-medium'} `}>Name</label>
        <input type="text" id="name" className={ `${check == false ? 'placeholder:text-[#F9F9F9] bg-[#2E3545] border-2 rounded-[7px] border-[#2E3545] p-3 w-full pl': `placeholder:text-black border-2 rounded-[7px] border-[#DAE0E6] p-3 w-full pl`}`} placeholder="Bryan Kolpein" required/>
    </div>
    <div className="mt-[32px] mx-14">
        <label for="email" className={`${ check==false? 'block mb-2 text-sm font-medium text-white': 'block mb-2 text-sm font-medium'} `}>Email*</label>
        <input type="email" id="email" className={ `${check == false ? 'placeholder:text-[#F9F9F9] bg-[#2E3545] border-2 rounded-[7px] border-[#2E3545] p-3 w-full pl': `placeholder:text-black border-2 rounded-[7px] border-[#DAE0E6] p-3 w-full pl`}`} placeholder="Please input a real Email Address" required/>
        <label  class="ml-2 text-sm  font-medium text-[#b1b3b6]">Please input a real Email Address</label>
    </div>
    <div className="mt-[32px] mx-14 flex gap-6">
          <div>
        <label for="password" className={`${ check==false? 'block mb-2 text-sm font-medium text-white': 'block mb-2 text-sm font-medium'} `}>Password*</label>
        <input type="password" id="password" className={ `${check == false ? 'placeholder:text-[#F9F9F9] bg-[#2E3545] border-2 rounded-[7px] border-[#2E3545] p-3 w-full pl': `placeholder:text-black border-2 rounded-[7px] border-[#DAE0E6] p-3 w-full pl`}`} placeholder="Password" required/>
        <label  class="ml-2 text-sm  font-medium text-[#b1b3b6]">Please enter your password</label>
        </div>
        <div>
        <label for="confirmPassword" className={`${ check==false? 'block mb-2 text-sm font-medium text-white': 'block mb-2 text-sm font-medium'} `}>Confirm Password*</label>
        <input type="confirmPassword" id="confirmPassword" className={ `${check == false ? 'placeholder:text-[#F9F9F9] bg-[#2E3545] border-2 rounded-[7px] border-[#2E3545] p-3 w-full pl': `placeholder:text-black border-2 rounded-[7px] border-[#DAE0E6] p-3 w-full pl`}`} placeholder="Confirm Password" required/>
        <label  class="ml-2 text-sm  font-medium text-[#b1b3b6]">Passwords need to match</label>
        </div>
    </div>
        <input  className='ml-14 mt-4' type="checkbox" /> <span className={`${ check == true ? 'ml-14 mt-4' : 'ml-14 mt-4 text-white'}`} >I accept the Terms and Privacy Policy</span>
    </form>
     <div className={`${ check==true ?'h-[118px] flex justify-center bg-[#fafbfc]' : 'h-[118px] flex justify-center bg-[#1C2534]'}`}>
      <button className="mx-10 bg-[#437EF7] h-[46px] py-[12px] px-[18px] relative top-[51px]  text-white rounded left-56" >Next &gt;</button>
      </div>
     </div>
    
  </div>
  )
     

}
