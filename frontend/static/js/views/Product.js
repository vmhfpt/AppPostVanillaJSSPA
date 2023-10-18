import AbstractView from "./AbstractView.js";
import Product from "../service/productService.js"
import Category from "../service/categoryService.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Product");
    }

    async getHtml() {
       

          var arrCartPopup = [];
          let category = new Category();
          let product = new Product();
  
          category.getAllCategory().then((data) => {
            $('.show-category').empty();
             data.map((item, key) => {
              $('.show-category').append(`  <button onclick="filterCatgory(this);" data-id="${item.id}" class=" text-[15px] italic text-black px-3 py-1 hover:bg-[#eae7de]">${item.name}</button>`);
             })
          })
          product.getProductLastest().then((data) => {
            $('.show-product-lastest').empty();
             data.map((item, key) => {
              $('.show-product-lastest').append(`<div class="flex flex-row gap-5">
                           <div class="w-[90px]">
                              <img src="${item.image}" alt="" class="w-full">
                           </div>
                           <div class="">
                                <div class="">
                                   <span class="text-[14px]"><a href="/product/${item.id}" data-link> ${item.name} </a></span>
                                </div>
                                <div class="text-[#c7a17a] text-[12px]">
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div class="flex flex-row gap-3 text-[17px] mt-1">
                                   <span class="text-[#cfcfcf] line-through">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</span>
                                   <span class="text-[#c7a17a]">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price_sale)}</span>
                                </div>
                           </div>
                       </div>`);
             })
          })
         
         
          window.filterCatgory = (thisData) => {
               loadingProduct();
               product.getProductByCategoryID($(thisData).attr('data-id')).then((data) => {
                  handleShowProductByFilter(data);
               })
          }

          window.searchByName = () => {
              loadingProduct();
              product.getProductBySearch($('.input-key-search').val()).then((data) => {
                handleShowProductByFilter(data);
              })
          }
         
          window.handleSortMultiple = (thisData) => {
            
              if($(thisData).val() == '0') return true;
              loadingProduct();
              product.sortProduct($(thisData).val()).then((data) => {
                handleShowProductByFilter(data);
              })
          }
             function deleteCart() {
                  setTimeout(function(){
                    arrCartPopup[0]
                        $('#' + arrCartPopup[0]).remove();
                        arrCartPopup.shift();
                      if(arrCartPopup[0] !== undefined){
                          deleteCart ();
                      }
                  }, 2000);
              }
              
      
        
        window.filterPrice = (thisData) => {
              loadingProduct();
              let min = Number($(thisData).attr('data-min'))
              let max = Number($(thisData).attr('data-max'))
              product.getProductByPrice({min : min, max : max}).then((data) => {
                 handleShowProductByFilter(data);
              })
        }


      

        
        function loadingProduct(){
          let template = ` <div class="flex flex-col gap-[2px]">
             
             <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
             
             </div>
               <div class="mt-3 animated-background w-full h-[20px]"></div>
               <div class=" animated-background w-[80px] h-[20px]">
                
               </div>
               <div class="animated-background w-[60px] h-[20px]"></div>
           </div>
           <div class="flex flex-col gap-[2px]">
             <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
             
             </div>
               <div class="mt-3 animated-background w-full h-[20px]"></div>
               <div class=" animated-background w-[80px] h-[20px]">
                
               </div>
               <div class="animated-background w-[60px] h-[20px]"></div>
           </div>
           <div class="flex flex-col gap-[2px]">
             <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
             
             </div>
               <div class="mt-3 animated-background w-full h-[20px]"></div>
               <div class=" animated-background w-[80px] h-[20px]">
                
               </div>
               <div class="animated-background w-[60px] h-[20px]"></div>
           </div>
           <div class="flex flex-col gap-[2px]">
             <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
             
             </div>
               <div class="mt-3 animated-background w-full h-[20px]"></div>
               <div class=" animated-background w-[80px] h-[20px]">
                
               </div>
               <div class="animated-background w-[60px] h-[20px]"></div>
           </div>
           <div class="flex flex-col gap-[2px]">
             <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
             
             </div>
               <div class="mt-3 animated-background w-full h-[20px]"></div>
               <div class=" animated-background w-[80px] h-[20px]">
                
               </div>
               <div class="animated-background w-[60px] h-[20px]"></div>
           </div>
           <div class="flex flex-col gap-[2px]">
             <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
             
             </div>
               <div class="mt-3 animated-background w-full h-[20px]"></div>
               <div class=" animated-background w-[80px] h-[20px]">
                
               </div>
               <div class="animated-background w-[60px] h-[20px] "></div>
           </div>`;
           $('.show-product').empty();
           $('.show-product').html(template);
        }


        window.handleAddToCart =  (thisData) => {
          let nameCart = $(thisData).attr('data-name');
          let priceCart = $(thisData).attr('data-price');
          let imageCart = $(thisData).attr('data-image');
          let idCart = $(thisData).attr('data-id');
          addCart({
            name : nameCart,
            price : priceCart,
            image : imageCart,
            id : idCart,
            quantity : 1
           });

         var id = Math.floor(Math.random() * 9000);
         arrCartPopup = [...arrCartPopup, id];
          if(arrCartPopup.length == 1){
              deleteCart();
          }

          $('.add-popup-cart').append(`<div id="${id}" class="shadow-[5px_5px_60px_5px_rgba(0,0,0,0.3)] rounded-[10px] flex gap-3 bg-white py-3 px-5">
            <div class="relative ">
                <div class="text-red-600 absolute top-[0px] left-[0px] text-[20px]">&times;</div>
                <img src="${imageCart}" alt="" class="w-[90px] h-[90px] object-cover">
            </div>
            <div class="flex flex-col w-[220px] ">
                <a href="" class=""><span class="w-[220px] ">${nameCart}</span></a>
                <a href="" class=""> <span class="line-through text-[#acacac]"> ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceCart)}</span></a>
            </div>
          </div>`);
        }

        let dataItem = product.getAllProduct().then((data) => {
          handleShowProductByFilter(data);
        })

        function handleShowProductByFilter(data){
         $('.show-total-product').text(`Showing all ${data.length} results`)
         $('.show-product').empty();
         data.map((item, key) => {
            $('.show-product').append(`   <div class="flex flex-col gap-[2px]">
             <div class=" relative group/item">
                <span class=" text-[12px] px-5 py-2 z-[9999] uppercase text-white bg-[#c7a17a] absolute top-[20px] left-[20px]">sale</span>
               <img src="${item.image}" alt="" class="object-cover relative h-[370px]">
              <div class=" hidden group-hover/item:flex  bg-[#c7a17a] text-white gap-3 py-3  w-full justify-center items-center absolute left-[0px] bottom-[0px]">
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>
                   <span onclick="handleAddToCart(this);"  data-id="${item.id}" data-name="${item.name}" data-price="${item.price_sale}" data-image="${item.image}" class="cursor-pointer uppercase handle-add-cart">add to cart</span>
               </div>
             </div>
               <div class="mt-3 text-[19px]"><b class=""><a href="/product/${item.id}" data-link> ${item.name} </a> </b></div>
               <div class="text-[#c7a17a] text-[12px]">
                 <i class="fa fa-star" aria-hidden="true"></i>
                 <i class="fa fa-star" aria-hidden="true"></i>
                 <i class="fa fa-star" aria-hidden="true"></i>
                 <i class="fa fa-star" aria-hidden="true"></i>
                 <i class="fa fa-star" aria-hidden="true"></i>
               </div>
               <div class="text-[#c7a17a] text-[20px] flex gap-3"><span> ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price_sale)}</span> <span class="line-through text-[#acacac]"> ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</span></div>
           </div>`);
         })
        }
       
       

        
        return /*html */`
        <section  class="add-popup-cart gap-4 flex flex-col  fixed top-20 right-[10px] h-screen w-auto z-[9999]">
       </section>
        <section  style="background-image: url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/02/shop-title-area.jpg)" class="flex items-center justify-center bg-fixed app__banner-fourth-block py-[160px]" >
          <span class="uppercase text-white font-bold text-[35px] ">Shop </span>
        </section>

        <section class="bg-[#FFFFFF]  " id="cc">
    <div class="container flex flex-row gap-10">
         <div class="grow py-[80px]">
          <div class="flex justify-between text-[#989898] italic text-[15px] py-8">
             <div class="">
               <span class="show-total-product"></span>
             </div>
             <div class="">
                <select onchange="handleSortMultiple(this);" name=""  class="bg-transparent pr-[100px] italic">
                    <option value="0" class="">Sort select </option>
                    <option value="1" class="">Sort by name </option>
                    <option value="2" class="">Sort by increase price </option>
                    <option value="3" class="">Sort by decrease price </option>
                </select>
             </div>
          </div>
          <div class="grid grid-cols-3 gap-8 w-full show-product" id="box">
            <div class="flex flex-col gap-[2px]">
              <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
              
              </div>
                <div class="mt-3 animated-background w-full h-[20px]"></div>
                <div class=" animated-background w-[80px] h-[20px]">
                 
                </div>
                <div class="animated-background w-[60px] h-[20px]"></div>
            </div>
            <div class="flex flex-col gap-[2px]">
              <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
              
              </div>
                <div class="mt-3 animated-background w-full h-[20px]"></div>
                <div class=" animated-background w-[80px] h-[20px]">
                 
                </div>
                <div class="animated-background w-[60px] h-[20px]"></div>
            </div>
            <div class="flex flex-col gap-[2px]">
              <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
              
              </div>
                <div class="mt-3 animated-background w-full h-[20px]"></div>
                <div class=" animated-background w-[80px] h-[20px]">
                 
                </div>
                <div class="animated-background w-[60px] h-[20px]"></div>
            </div>
            <div class="flex flex-col gap-[2px]">
              <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
              
              </div>
                <div class="mt-3 animated-background w-full h-[20px]"></div>
                <div class=" animated-background w-[80px] h-[20px]">
                 
                </div>
                <div class="animated-background w-[60px] h-[20px]"></div>
            </div>
            <div class="flex flex-col gap-[2px]">
              <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
              
              </div>
                <div class="mt-3 animated-background w-full h-[20px]"></div>
                <div class=" animated-background w-[80px] h-[20px]">
                 
                </div>
                <div class="animated-background w-[60px] h-[20px]"></div>
            </div>
            <div class="flex flex-col gap-[2px]">
              <div class=" relative group/item bg-[#fff] w-full h-[370px] animated-background">
              
              </div>
                <div class="mt-3 animated-background w-full h-[20px]"></div>
                <div class=" animated-background w-[80px] h-[20px]">
                 
                </div>
                <div class="animated-background w-[60px] h-[20px] "></div>
            </div>




            

            
           </div>
         </div>
         <div class="basis-[28%] flex flex-col gap-8 py-[80px]">
              <div class="w-full pt-6">
                   <div class="font-[900] text-[19px] w-full uppercase  border-[3px] border-transparent border-b-[#eae7de]">filter</div>
                   <div class="py-5 flex flex-wrap gap-2">
                      <button onclick="filterPrice(this);"  data-min="0" data-max="100000" class=" bg-[#c7a17a] text-white px-3 py-1">0 - 100.000đ</button>
                      <button onclick="filterPrice(this);" data-min="100000" data-max="200000" class=" bg-[#c7a17a] text-white px-3 py-1">100.000 - 200.000đ</button>
                      <button onclick="filterPrice(this);" data-min="200000" data-max="500000" class=" bg-[#c7a17a] text-white px-3 py-1">200.000 - 500.000đ</button>
                      <button onclick="filterPrice(this);" data-min="500000" data-max="55000000" class=" bg-[#c7a17a] text-white px-3 py-1">500.000đ - ∞</button>
                      
                   </div>
              </div>
              <div class="w-full">
                <div class="font-[900] text-[19px] w-full uppercase  border-[3px] border-transparent border-b-[#eae7de]">TOP RATED PRODUCTS</div>
                <div class="flex flex-col gap-5 py-7 show-product-lastest">

                  <div class="flex flex-row gap-5">
                    <div class="w-[90px] animated-background h-[90px]">
                       
                    </div>
                    <div class="flex flex-col gap-1">
                         <div class="animated-background h-[12px] w-full">
                         </div>
                         <div class="animated-background h-[12px] w-[70px]">
                         
                         </div>
                         <div class="animated-background h-[12px] w-[60px] mt-1">
                        
                         </div>
                    </div>
                </div>
                <div class="flex flex-row gap-5">
                  <div class="w-[90px] animated-background h-[90px]">
                     
                  </div>
                  <div class="flex flex-col gap-1">
                       <div class="animated-background h-[12px] w-full">
                       </div>
                       <div class="animated-background h-[12px] w-[70px]">
                       
                       </div>
                       <div class="animated-background h-[12px] w-[60px] mt-1">
                      
                       </div>
                  </div>
              </div>
              <div class="flex flex-row gap-5">
                <div class="w-[90px] animated-background h-[90px]">
                   
                </div>
                <div class="flex flex-col gap-1">
                     <div class="animated-background h-[12px] w-full">
                     </div>
                     <div class="animated-background h-[12px] w-[70px]">
                     
                     </div>
                     <div class="animated-background h-[12px] w-[60px] mt-1">
                    
                     </div>
                </div>
            </div>

                </div>
              </div>
              <div class="w-full">
                <div class="font-[900] text-[19px] w-full uppercase  border-[3px] border-transparent border-b-[#eae7de]">Categories</div>
                <div class="my-5 flex flex-row gap-2 flex-wrap  show-category">
                  <div class="animated-background w-[80px] h-[30px] "></div>
                  <div class="animated-background w-[80px] h-[30px] "></div>
                  <div class="animated-background w-[80px] h-[30px] "></div>
                  <div class="animated-background w-[80px] h-[30px]"></div>
                
                </div>
              </div>
              <div class="w-full">
                <div class="font-[900] text-[19px] w-full uppercase  border-[3px] border-transparent border-b-[#eae7de]">Search</div>
                <div class="flex flex-row items-center py-5">
                    <input type="text" class="input-key-search grow text-[14px] px-4 py-[6px] border-2 border-[#eae7de]" placeholder="Type here...">
                    <button onclick="searchByName();" class=" text-white relative left-[-2px] bg-[#c7a17a] border-2 border-[#c7a17a]  px-3 py-[4px]"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
              </div>
              <div class="w-full">
                  <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/shop-sidebar-widget-300x199.jpg" alt="" class="w-full">
              </div>
                 
         </div>
    </div>
</section>
        `;
    }
}