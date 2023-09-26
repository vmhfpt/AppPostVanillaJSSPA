import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
      $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        dots : false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      })
});
        return `
        <section class="app_carousel">
        <div class="owl-carousel owl-theme">
             <div class="item flex justify-center items-center h-screen w-full bg-[url('https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider.jpg')]">
                 <div class="text-white gap-6 flex flex-col items-center justify-center">
                  <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-2.png" alt="" class=""></div>
                  <div class="text-9xl font-[700] tracking-tight">SPECIAL COFFEE BEANS</div>
                  <div class="italic text-[25px]">This is content description for title carousel</div>
                  <div class="">
                    <a href="" class=""><button class="py-[12px] px-[25px] text-[16px] border-solid border-2 border-white ">READ MORE</button></a>
                   </div>
                 </div>
             </div>
             <div class="item flex justify-center items-center h-screen w-full bg-[url('https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-4.jpg')]">
              <div class="text-white gap-6 flex flex-col items-center justify-center">
               <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-2.png" alt="" class=""></div>
               <div class="text-9xl font-[700] tracking-tight">SPECIAL COFFEE BEANS</div>
               <div class="italic text-[25px]">This is content description for title carousel</div>
               <div class="">
                 <a href="" class=""><button class="py-[12px] px-[25px] text-[16px] border-solid border-2 border-white ">READ MORE</button></a>
                </div>
              </div>
          </div>
          <div class="item flex justify-center items-center h-screen w-full bg-[url('https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-img-2.jpg')]">
            <div class="text-white gap-6 flex flex-col items-center justify-center">
             <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-2.png" alt="" class=""></div>
             <div class="text-9xl font-[700] tracking-tight">SPECIAL COFFEE BEANS</div>
             <div class="italic text-[25px]">This is content description for title carousel</div>
             <div class="">
               <a href="" class=""><button class="py-[12px] px-[25px] text-[16px] border-solid border-2 border-white ">READ MORE</button></a>
              </div>
            </div>
        </div>
        <div class="item flex justify-center items-center h-screen w-full bg-[url('https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/main.jpg')]">
          <div class="text-white gap-6 flex flex-col items-center justify-center">
           <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-2.png" alt="" class=""></div>
           <div class="text-9xl font-[700] tracking-tight">SPECIAL COFFEE BEANS</div>
           <div class="italic text-[25px]">This is content description for title carousel</div>
           <div class="">
             <a href="" class=""><button class="py-[12px] px-[25px] text-[16px] border-solid border-2 border-white ">READ MORE</button></a>
            </div>
          </div>
      </div>
             
        </div>
       
   </section>




   <section class="my-[90px] app__tab-title w-full flex flex-col justify-center items-center gap-4">
      <span class="italic text-[18px] text-[#c7a17a]">What happens Here</span>
      <span class="text-[40px] uppercase font-[600] tracking-tight">coffee build your base</span>
      <span class="bg-[#c7a17a] w-[120px] h-[3px]"></span>
   </section>
  <section class=" app__appoint container flex justify-center px-[60px] ">
      <div class="w-full flex flex-row items-center justify-center">
          <div class="w-full flex flex-row items-center justify-center">
              <div class="grow  ">
                  <select name="" id="" class="bg-white w-full py-[17.2px] px-[13px] text-[15px] italic">
                    <option value="" class="">1 person</option>
                    <option value="" class="">2 person</option>
                    <option value="" class="">3 person</option>
                    <option value="" class="">4 person</option>
                  </select>
              </div>
              <div class=" border-2  border-l-[#c7a17a]  py-[10px] px-[14px] bg-white text-[#c7a17a] text-[22px]">
                <i class="fa fa-users" aria-hidden="true"></i>
              </div>
              <div class=" font-[600] text-[18px] px-[25px]">FOR</div>
          </div>
          <div class="w-full flex flex-row items-center justify-center">
            <div class="grow  ">
                <input type="date" class="bg-white w-full py-[14px] px-[13px] text-[15px] italic">
            </div>
            <div class=" border-2  border-l-[#c7a17a]  py-[10px] px-[14px] bg-white text-[#c7a17a] text-[22px]">
              <i class="fa fa-calendar" aria-hidden="true"></i>
            </div>
            <div class=" font-[600] text-[18px] px-[25px]">AT</div>
        </div>
        <div class="w-full flex flex-row items-center justify-center">
          <div class="grow  ">
              <select name="" id="" class="bg-white w-full py-[17.2px] px-[13px] text-[15px] italic">
                <option value="" class="">7:00 pm</option>
                <option value="" class="">8:00 pm</option>
                <option value="" class="">9:00 pm</option>
                <option value="" class="">10:00 pm</option>
              </select>
          </div>
          <div class=" border-2  border-l-[#c7a17a]  py-[10px] px-[14px] bg-white text-[#c7a17a] text-[22px]">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </div>
          <div class=" font-[600] text-[18px] px-[25px]"></div>
      </div>
      <div class=" flex items-center bg-red-500 justify-center">
        <div class=" bg-[#c7a17a] text-white text-[12px] font-[1000] py-4  ">
            <button class="tracking-[.25em] w-[210px]">BOOK A TABLE</button>
        </div>
       
    </div>
         
       
     
          
      </div>
  </section>
  <section class="app__new-first-block container flex flex-row gap-7 my-[80px]">
     <div class="">
         <div class="">
             <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-1.jpg" alt="" class="w-full">
         </div>
         <div class="flex flex-row gap-3 items-end">
          <span class="text-[#c7a17a] text-[50px] font-[500] italic relative top-[9px]">01</span>
          <span class="font-[700] text-[24px]">BEAUTIFUL PLACE</span>
         </div>
         <div class="my-4">
            <span class="text-[#666] text-[15px]">Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</span>
         </div>
         <div class="flex flex-row items-center gap-3">
             <a href="" class="text-[#c7a17a] text-[12px] font-[700] tracking-[.25em]">READ MORE</a>
             <i class="text-[#c7a17a]  fa fa-long-arrow-right" aria-hidden="true"></i>
         </div>
     </div>
     <div class="">
      <div class="">
          <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-1.jpg" alt="" class="w-full">
      </div>
      <div class="flex flex-row gap-3 items-end">
       <span class="text-[#c7a17a] text-[50px] font-[500] italic relative top-[9px]">01</span>
       <span class="font-[700] text-[24px]">BEAUTIFUL PLACE</span>
      </div>
      <div class="my-4">
         <span class="text-[#666] text-[15px]">Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</span>
      </div>
      <div class="flex flex-row items-center gap-3">
          <a href="" class="text-[#c7a17a] text-[12px] font-[700] tracking-[.25em]">READ MORE</a>
          <i class="text-[#c7a17a]  fa fa-long-arrow-right" aria-hidden="true"></i>
      </div>
  </div>
  <div class="">
    <div class="">
        <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-1.jpg" alt="" class="w-full">
    </div>
    <div class="flex flex-row gap-3 items-end">
     <span class="text-[#c7a17a] text-[50px] font-[500] italic relative top-[9px]">01</span>
     <span class="font-[700] text-[24px]">BEAUTIFUL PLACE</span>
    </div>
    <div class="my-4">
       <span class="text-[#666] text-[15px]">Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</span>
    </div>
    <div class="flex flex-row items-center gap-3">
        <a href="" class="text-[#c7a17a] text-[12px] font-[700] tracking-[.25em]">READ MORE</a>
        <i class="text-[#c7a17a]  fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
  </div>
  </section>
  <section class="bg-fixed py-[140px]"  style="background-image: url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home1-parallax-1.jpg)">
    <div class="container flex flex-row items-center px-[10%]">
         <div class="w-[50%]">
            <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-img-6.png" alt="" class="w-[220px] h-[220px]">
         </div>
         <div class="w-[50%] flex flex-col gap-[30px] text-white items-start">
              <span class="italic text-[18px]">Application</span>
              <span class="text-[40px]  font-[600]">USE OUR APPLICATION.</span>
              <div class="bg-white w-[150px] h-[2px]"></div>
              <span class="">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius.</span>
              <a href="" class=""><button class="bg-[#c7a17a] text-[12px] font-[700] tracking-[.25em] px-9 py-5">READ MORE </button></a>
         </div>
    </div>
  
  </section>
  <section class="app__agency container flex flex-row gap-[60px] py-[70px]">
      <div class="flex flex-col gap-5 items-center justify-center">
         <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-1.png" alt="" class=""></div>
         <div class=""><span class="text-[18px] font-bold">COFFEEMAKER</span></div>
         <div class="text-center text-[#666666] text-[14px]">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</div>
      </div>
      <div class="flex flex-col gap-5 items-center justify-center">
        <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-1.png" alt="" class=""></div>
        <div class=""><span class="text-[18px] font-bold">COFFEEMAKER</span></div>
        <div class="text-center text-[#666666] text-[14px]">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</div>
     </div>
     <div class="flex flex-col gap-5 items-center justify-center">
      <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-1.png" alt="" class=""></div>
      <div class=""><span class="text-[18px] font-bold">COFFEEMAKER</span></div>
      <div class="text-center text-[#666666] text-[14px]">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</div>
   </div>
   <div class="flex flex-col gap-5 items-center justify-center">
    <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-1.png" alt="" class=""></div>
    <div class=""><span class="text-[18px] font-bold">COFFEEMAKER</span></div>
    <div class="text-center text-[#666666] text-[14px]">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</div>
  </div>
  </section>
  <section class="app__banner-third-block container flex flex-row my-[60px]">
      <div class="py-[10px] pl-[40px] pr-[23%] text-white flex flex-col justify-around w-[50%] bg-no-repeat   bg-[url('https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-s-slider-1.jpg')]">
           <div class="flex flex-col gap-5">
              <h1 class="uppercase font-bold text-[38px]">Try the best coffee in the city</h1>
              <span class="">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an at dictum lacu pericula uni euripidis.</span>
           </div>
           <div class="">
              <a href="" class="">READ MORE</a>
              <i class=" fa fa-long-arrow-right" aria-hidden="true"></i>
           </div>
      </div>
      <div class="w-[50%] py-[20px]">
      <div class="owl-carousel">
      <div class="item">
         <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/main-home-project-pres-3.jpg" alt="" class="">
      </div>
      <div class="item">
        <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/main-home-project-pres-1.jpg" alt="" class="">
     </div>
     <div class="item">
      <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/main-home-project-pres-2.jpg" alt="" class="">
   </div>
  </div>
      </div>
  </section>
  <section style="background-image: url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-parallax-2.jpg)" class="bg-fixed app__banner-fourth-block py-[90px]">
  
     <div class="container flex flex-col items-center justify-center gap-[90px]">
      <div class="flex flex-col items-center justify-center gap-5">
        <div class="text-[#c7a17a] italic text-[18px]">What Happens Here</div>
        <div class=""><span class="uppercase font-bold text-[39px] text-white">Vavourite coffee flavours</span></div>
        <div class="bg-[#c7a17a] w-[180px] h-[2px]"></div>
     </div>
     <div class="flex flex-row gap-8 w-full">
        <div class="w-[50%] flex flex-col gap-5">
            <div class="flex flex-row gap-[5px]">
                <div class="block">
                   <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
                </div>
                <div class="grow  ml-[20px]">
                      <div class="flex flex-row items-end">
                          <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                          <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
                      </div>
                      <div class="">
                         <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
                      </div>
                </div>
                <div class="flex flex-col  text-white">
                   <b class="text-[25px]">$2.95</b>
                   <button class="italic bg-[#c7a17a] text-[16px]">New</button>
                </div>
            </div>
            <div class="flex flex-row gap-[5px]">
              <div class="block">
                 <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
              </div>
              <div class="grow  ml-[20px]">
                    <div class="flex flex-row items-end">
                        <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                        <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
                    </div>
                    <div class="">
                       <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
                    </div>
              </div>
              <div class="flex flex-col  text-white">
                 <b class="text-[25px]">$2.95</b>
                 <button class="italic bg-[#c7a17a] text-[16px]">New</button>
              </div>
          </div>
          <div class="flex flex-row gap-[5px]">
            <div class="block">
               <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
            </div>
            <div class="grow  ml-[20px]">
                  <div class="flex flex-row items-end">
                      <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                      <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
                  </div>
                  <div class="">
                     <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
                  </div>
            </div>
            <div class="flex flex-col  text-white">
               <b class="text-[25px]">$2.95</b>
               <button class="italic bg-[#c7a17a] text-[16px]">New</button>
            </div>
        </div>
        <div class="flex flex-row gap-[5px]">
          <div class="block">
             <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
          </div>
          <div class="grow  ml-[20px]">
                <div class="flex flex-row items-end">
                    <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                    <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
                </div>
                <div class="">
                   <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
                </div>
          </div>
          <div class="flex flex-col  text-white">
             <b class="text-[25px]">$2.95</b>
             <button class="italic bg-[#c7a17a] text-[16px]">New</button>
          </div>
      </div>
      <div class="flex flex-row gap-[5px]">
        <div class="block">
           <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
        </div>
        <div class="grow  ml-[20px]">
              <div class="flex flex-row items-end">
                  <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                  <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
              </div>
              <div class="">
                 <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
              </div>
        </div>
        <div class="flex flex-col  text-white">
           <b class="text-[25px]">$2.95</b>
           <button class="italic bg-[#c7a17a] text-[16px]">New</button>
        </div>
    </div>
    <div class="flex flex-row gap-[5px]">
      <div class="block">
         <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
      </div>
      <div class="grow  ml-[20px]">
            <div class="flex flex-row items-end">
                <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
            </div>
            <div class="">
               <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
            </div>
      </div>
      <div class="flex flex-col  text-white">
         <b class="text-[25px]">$2.95</b>
         <button class="italic bg-[#c7a17a] text-[16px]">New</button>
      </div>
  </div>
  
        </div>
        <div class="w-[50%] flex flex-col gap-5"> 
          <div class="flex flex-row gap-[5px]">
            <div class="block">
               <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
            </div>
            <div class="grow  ml-[20px]">
                  <div class="flex flex-row items-end">
                      <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                      <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
                  </div>
                  <div class="">
                     <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
                  </div>
            </div>
            <div class="flex flex-col  text-white">
               <b class="text-[25px]">$2.95</b>
               <button class="italic bg-[#c7a17a] text-[16px]">New</button>
            </div>
        </div>
        <div class="flex flex-row gap-[5px]">
          <div class="block">
             <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
          </div>
          <div class="grow  ml-[20px]">
                <div class="flex flex-row items-end">
                    <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                    <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
                </div>
                <div class="">
                   <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
                </div>
          </div>
          <div class="flex flex-col  text-white">
             <b class="text-[25px]">$2.95</b>
             <button class="italic bg-[#c7a17a] text-[16px]">New</button>
          </div>
      </div>
      <div class="flex flex-row gap-[5px]">
        <div class="block">
           <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
        </div>
        <div class="grow  ml-[20px]">
              <div class="flex flex-row items-end">
                  <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                  <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
              </div>
              <div class="">
                 <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
              </div>
        </div>
        <div class="flex flex-col  text-white">
           <b class="text-[25px]">$2.95</b>
           <button class="italic bg-[#c7a17a] text-[16px]">New</button>
        </div>
    </div>
    <div class="flex flex-row gap-[5px]">
      <div class="block">
         <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
      </div>
      <div class="grow  ml-[20px]">
            <div class="flex flex-row items-end">
                <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
                <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
            </div>
            <div class="">
               <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
            </div>
      </div>
      <div class="flex flex-col  text-white">
         <b class="text-[25px]">$2.95</b>
         <button class="italic bg-[#c7a17a] text-[16px]">New</button>
      </div>
  </div>
  <div class="flex flex-row gap-[5px]">
    <div class="block">
       <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
    </div>
    <div class="grow  ml-[20px]">
          <div class="flex flex-row items-end">
              <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
              <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
          </div>
          <div class="">
             <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
          </div>
    </div>
    <div class="flex flex-col  text-white">
       <b class="text-[25px]">$2.95</b>
       <button class="italic bg-[#c7a17a] text-[16px]">New</button>
    </div>
  </div>
  <div class="flex flex-row gap-[5px]">
  <div class="block">
     <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg" alt="" class="block w-[80px] h-[80px]">
  </div>
  <div class="grow  ml-[20px]">
        <div class="flex flex-row items-end">
            <div class=""><span class="text-white text-[25px] font-bold ">CAFFE LATTE</span></div>
            <div class="grow bg-[rgba(255,255,255,.25)] h-[0.2px] relative bottom-[11px]"></div>
        </div>
        <div class="">
           <span class="text-[#c7a17a] text-[14px]">Fresh brewed coffee and steamed milk</span>
        </div>
  </div>
  <div class="flex flex-col  text-white">
     <b class="text-[25px]">$2.95</b>
     <button class="italic bg-[#c7a17a] text-[16px]">New</button>
  </div>
  </div>
        </div>
     </div>
     <div class="">
        <button class="py-4 px-8 bg-[#c7a17a] font-bold text-[14px] text-white tracking-[.25em]">VIEW MENU</button>
     </div>
     </div>
  
  </section>
  <section class="bg-[#FFFFFF;] py-[90px] app__tab-title w-full flex flex-col justify-center items-center gap-4">
    <span class="italic text-[18px] text-[#c7a17a]">What happens Here</span>
    <span class="text-[40px] uppercase font-[600] tracking-tight">coffee build your base</span>
    <span class="bg-[#c7a17a] w-[120px] h-[3px]"></span>
  </section>
  <section class="bg-[#FFFFFF;] pb-[90px]">
      <div class="container flex flex-row gap-7">
          <div class="flex flex-col ">
              <div class=" relative group/item">
                <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-1-500x500.jpg" alt="" class="h-max relative">
               <div class=" hidden group-hover/item:flex  bg-[#c7a17a] text-white gap-3 py-3  w-full justify-center items-center absolute left-[0px] bottom-[0px]">
                   <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    <span class="uppercase">add to cart</span>
                </div>
              </div>
              <div class="py-[8px]"><span class="font-bold text-[19px]">PAPER POUCH</span></div>
              <div class="text-[#c7a17a] text-[12px]">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <div class="text-[#c7a17a] text-[20px]">$46.00</div>
          </div>
          <div class="flex flex-col ">
            <div class=" relative group/item">
              <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-1-500x500.jpg" alt="" class="h-max relative">
             <div class=" hidden group-hover/item:flex  bg-[#c7a17a] text-white gap-3 py-3  w-full justify-center items-center absolute left-[0px] bottom-[0px]">
                 <i class="fa fa-cart-plus" aria-hidden="true"></i>
                  <span class="uppercase">add to cart</span>
              </div>
            </div>
            <div class="py-[8px]"><span class="font-bold text-[19px]">PAPER POUCH</span></div>
            <div class="text-[#c7a17a] text-[12px]">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="text-[#c7a17a] text-[20px]">$46.00</div>
        </div>
        <div class="flex flex-col ">
          <div class=" relative group/item">
            <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-1-500x500.jpg" alt="" class="h-max relative">
           <div class=" hidden group-hover/item:flex  bg-[#c7a17a] text-white gap-3 py-3  w-full justify-center items-center absolute left-[0px] bottom-[0px]">
               <i class="fa fa-cart-plus" aria-hidden="true"></i>
                <span class="uppercase">add to cart</span>
            </div>
          </div>
          <div class="py-[8px]"><span class="font-bold text-[19px]">PAPER POUCH</span></div>
          <div class="text-[#c7a17a] text-[12px]">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="text-[#c7a17a] text-[20px]">$46.00</div>
      </div>
      <div class="flex flex-col ">
        <div class=" relative group/item">
          <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-1-500x500.jpg" alt="" class="h-max relative">
         <div class=" hidden group-hover/item:flex  bg-[#c7a17a] text-white gap-3 py-3  w-full justify-center items-center absolute left-[0px] bottom-[0px]">
             <i class="fa fa-cart-plus" aria-hidden="true"></i>
              <span class="uppercase">add to cart</span>
          </div>
        </div>
        <div class="py-[8px]"><span class="font-bold text-[19px]">PAPER POUCH</span></div>
        <div class="text-[#c7a17a] text-[12px]">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="text-[#c7a17a] text-[20px]">$46.00</div>
    </div>
      </div>
  </section>
  <section class="bg-[#FFFFFF;] grid grid-cols-5">
      <div class="row-span-2 col-span-2"><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-1.jpg" alt="" class="w-full"></div>
      <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-2.jpg" alt="" class="w-full"></div>
      <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-3-550x550.jpg" alt="" class="w-full"></div>
      <div class=" row-start-1 row-end-3 col-start-5 col-end-6"><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-4-500x1000.jpg" alt="" class="w-full"></div>
      <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-5-550x550.jpg" alt="" class="w-full"></div>
      <div class=""><img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-gallery-6-550x550.jpg" alt="" class="w-full"></div>
  </section>
  <section class="bg-[#FFFFFF;] py-[90px] app__tab-title w-full flex flex-col justify-center items-center gap-4">
    <span class="italic text-[18px] text-[#c7a17a]">What happens Here</span>
    <span class="text-[40px] uppercase font-[600] tracking-tight">READ OUR LATEST NEWS</span>
    <span class="bg-[#c7a17a] w-[120px] h-[3px]"></span>
  </section>
  
  <section class="bg-[#FFFFFF;] app__new-first-block pb-[90px]">
     <div class="container flex flex-row gap-7 ">
      <div class="">
        <div class="">
            <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-1.jpg" alt="" class="w-full">
        </div>
        <div class="flex flex-col gap-2 items-start mt-6">
         <span class="font-[700] text-[24px]">BEAUTIFUL PLACE</span>
          <span class="italic text-[13px] text-[#c7a17a]">by Jane Doe / Competition / 23.02.2016</span>
        </div>
        <div class="my-4">
           <span class="text-[#666] text-[15px] ">Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</span>
        </div>
        <div class="flex flex-row items-center gap-3">
            <a href="" class="text-[#c7a17a] text-[12px] font-[700] tracking-[.25em]">READ MORE</a>
            <i class="text-[#c7a17a]  fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
    </div>
    <div class="">
      <div class="">
          <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-1.jpg" alt="" class="w-full">
      </div>
      <div class="flex flex-col gap-2 items-start mt-6">
       <span class="font-[700] text-[24px]">BEAUTIFUL PLACE</span>
        <span class="italic text-[13px] text-[#c7a17a]">by Jane Doe / Competition / 23.02.2016</span>
      </div>
      <div class="my-4">
         <span class="text-[#666] text-[15px] ">Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</span>
      </div>
      <div class="flex flex-row items-center gap-3">
          <a href="" class="text-[#c7a17a] text-[12px] font-[700] tracking-[.25em]">READ MORE</a>
          <i class="text-[#c7a17a]  fa fa-long-arrow-right" aria-hidden="true"></i>
      </div>
  </div>
  <div class="">
    <div class="">
        <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-1.jpg" alt="" class="w-full">
    </div>
    <div class="flex flex-col gap-2 items-start mt-6">
     <span class="font-[700] text-[24px]">BEAUTIFUL PLACE</span>
      <span class="italic text-[13px] text-[#c7a17a]">by Jane Doe / Competition / 23.02.2016</span>
    </div>
    <div class="my-4">
       <span class="text-[#666] text-[15px] ">Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</span>
    </div>
    <div class="flex flex-row items-center gap-3">
        <a href="" class="text-[#c7a17a] text-[12px] font-[700] tracking-[.25em]">READ MORE</a>
        <i class="text-[#c7a17a]  fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
  </div>
     </div>
  </section>
        `;
    }
}