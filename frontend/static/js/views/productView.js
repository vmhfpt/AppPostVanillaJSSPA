import AbstractView from "./AbstractView.js";
import Category from '../service/categoryService.js';
import Product from '../service/productService.js';
import Comment from '../service/commentService.js';
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.productId = params.id;
        this.setTitle("product detail");
    }

    async getHtml() {
        
         let category = new Category();
         let product = new Product();
         let comment = new Comment();

         function loadProductDetail(id){
            product.getDetailProduct(id).then((item) => {
            
              //console.log(item);
              $('.show-total-cmt').text(`reviews (${item.comments.length})`)
              $('.show-total-comments').text(`${item.comments.length} REVIEWS FOR "${item.product.name}"`);
              $('.show-comments').empty();
              item.comments.map((item, key) => {
                $('.show-comments').prepend(`<div class="py-10 flex justify-between border-b-[1px] border-[#eeeeee]">
                    <div class="flex gap-5 items-center">
                        <div class=""><img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="" class="rounded-full"></div>
                        <div class="h-full flex flex-col justify-between ">
                            <div class="uppercase flex flex-col ">
                                <span class="text-[18px] font-bold">${item.name}</span>
                                <span class="text-[#c7a17a] italic text-[12px]">${item.createdAt}</span>
                            </div>
                            <div class="text-[14px] text-[#666666;]">
                                ${item.content}
                            </div>
                        </div>
                    </div>
                    <div class="flex  items-center text-[#c7a17a] text-[12px]">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>`);
              })
    
    
    
              $('.show-detail-product').empty();
              $('.shop-content-product-detail').empty();
              $('.shop-content-product-detail').append(item.product.content);
              $('.show-detail-product').append(`<div class="basis-1/2 px-7 py-[100px]">
                    <div class="relative">
                        <span class=" text-[12px] px-5 py-2 z-[9999] uppercase text-white bg-[#c7a17a] absolute top-[20px] left-[20px]">sale</span>
                        <img src="${item.product.image}" alt="" class="w-full">
                    </div>
                    <div class="flex flex-row gap-5 my-5">
                         <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-2-gallery-2-100x100.jpg" alt="" class="w-[100px] h-[100px]">
                         <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-2-gallery-1-100x100.jpg" alt="" class="w-[100px] h-[100px]">
                         <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-2-gallery-3-100x100.jpg" alt="" class="w-[100px] h-[100px]">
                         <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-2-gallery-4-2-100x100.jpg" alt="" class="w-[100px] h-[100px]">
                    </div>
                </div>
                <div class="basis-1/2 px-7 py-[100px]">
                     <div class="flex flex-col gap-2">
                          <div class="font-bold text-[22px]"><span class="">${item.product.name}</span></div>
                          <div class="flex flex-row gap-4 text-[14px]">
                               <div class="text-[#c7a17a]">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                               </div>
                               <div class=" text-[#666]">
                                  <span class="">(2 customer reviews)</span>
                               </div>
                          </div>
                          <div class="text-[35px] flex flex-row gap-5 font-bold">
                              <span class="text-[#cfcfcf] line-through">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product.price)}</span>
                              <span class="text-[#c7a17a]">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product.price_sale)}</span>
                          </div>
                     </div>
                     <div class="text-[#666] text-[15px] py-8">
                        <p class="">${item.product.description}</p>
                     </div>
                     <div class="flex flex-row gap-7 pt-8 pb-10">
                         <div class="flex flex-row items-center justify-center">
                             <button onclick="decreaseInput();"  class="decrease-input text-[20px] p-4  w-[50px] h-[50px] flex justify-center items-center">-</button>
                             <input onchange="qantityInput(this);" id="quantity-input" type="number" class="bg-[#eae7de] w-[50px] h-[50px] text-center" value="1">
                             <button onclick="increaseInput();" class="increase-input text-[20px] p-4  w-[50px] h-[50px] flex justify-center items-center">+</button>
                         </div>
                         <div class="">
                             <button onclick="handleAddCart(this);" data-name="${item.product.name}" data-price="${item.product.price_sale}" data-id="${id}" data-image="${item.product.image}" class="handle-add-cart tracking-[.25em] uppercase text-[14px] px-12 font-bold bg-[#c7a17a] text-white h-full w-full">add to cart</button>
                         </div>
                     </div>
                     <div class="flex flex-col gap-1 border-t-2 border-[#efefef] py-8">
                        
                         <span class="text-[#666] text-[15px]"><b class="text-black text-[16px]">CATEGORY:</b> ${item.product.category.name}</span>
    
                     </div>
                     <div class="py-8 flex flex-row items-center gap-14 border-t-2 border-[#efefef] ">
                          <div class=""><b class="">SHARE:</b></div>
                          <div class=" flex flex-row gap-4 text-[#666] text-[15px]">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <i class="fa fa-vine" aria-hidden="true"></i>
                          </div>
                     </div>
                </div>`);
                $('.show-list-product-suggest').empty();
                item.productSuggest.map((data, key) => {
                  $('.show-list-product-suggest').append(`<div class="basis-1/4 flex flex-col ">
            <div class=" relative group/item">
              <img src="${data.image}" alt="" class="h-max relative">
             <div class=" hidden group-hover/item:flex  bg-[#c7a17a] text-white gap-3 py-3  w-full justify-center items-center absolute left-[0px] bottom-[0px]">
                 <i class="fa fa-cart-plus" aria-hidden="true"></i>
                  <span onclick="addCartSuggest(this);" data-name="${data.name}" data-price="${data.price_sale}" data-id="${data.id}" data-image="${data.image}" class="uppercase add-cart-suggest">add to cart</span>
              </div>
            </div>
            <div class="py-[8px]"><span class="font-bold text-[19px]"><a href="/product/${data.id}" data-link> ${data.name} </a></span></div>
            <div class="text-[#c7a17a] text-[12px]">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="text-[#c7a17a] text-[20px]">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price_sale)}</div>
        </div>`);
                })
            })
          }

          if(this.productId){
            loadProductDetail(this.productId);
          }



          window.increaseInput = () => {
            if($('#quantity-input').val() == 5) return true;
            $('#quantity-input').val(Number($('#quantity-input').val()) + 1);
          }

          window.decreaseInput = () => {
             if($('#quantity-input').val() == 1) return true;
             $('#quantity-input').val(Number($('#quantity-input').val()) - 1);
          }
          
          window.qantityInput = (thisData) => {
            if($(thisData).val() >= 1 && $(thisData).val() <= 5){
             
            }else {
               $(thisData).val(1);
            }
          }
        
          window.showTab = (thisData) => {
            let tabName = $(thisData).attr('data-name');
            $('.show-tab').removeClass('text-[#c7a17a]');
            $(thisData).addClass('text-[#c7a17a]');
           // console.log(tabName);
            $("#tab-description, #tab-comments").hide();
            $(`#${tabName}`).fadeIn();
          }
       
        window.addCartSuggest = (thisData) => {
            let name = $(thisData).attr('data-name');
            let price = $(thisData).attr('data-price');
            let id = $(thisData).attr('data-id');
            let image = $(thisData).attr('data-image');
  
            let objectCart = {
              id,
              image,
              name,
              price,
              quantity : 1
            }
            addCart(objectCart, true)
        }
        window.handleAddCart = (thisData) => {
            let name = $(thisData).attr('data-name');
            let price = $(thisData).attr('data-price');
            let id = $(thisData).attr('data-id');
            let image = $(thisData).attr('data-image');
            let quantity = $('#quantity-input').val();
  
            let objectCart = {
              id,
              image,
              name,
              price,
              quantity : Number(quantity)
            }
            addCart(objectCart, true)
        }
        
     window.submitComment = () => {
        
        var currentdate = new Date(); 
        var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        let name = $('#name-comment').val();
        let content = $('#content-comment').val();
        let email = $('#email-comment').val();
        let createdAt = datetime;

        let dataComment = {
           name,
           content,
           email,
           createdAt,
           product_id : this.productId
        }
        //console.log(dataComment);
        comment.addComment(dataComment).then((data) => {
          
            if(data.status == 'success'){
               $('#name-comment, #content-comment, #email-comment').val("");
               $('.show-comments').prepend(`<div class="py-10 flex justify-between border-b-[1px] border-[#eeeeee]">
                <div class="flex gap-5 items-center">
                    <div class=""><img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="" class="rounded-full"></div>
                    <div class="h-full flex flex-col justify-between ">
                        <div class="uppercase flex flex-col ">
                            <span class="text-[18px] font-bold">${dataComment.name}</span>
                            <span class="text-[#c7a17a] italic text-[12px]">${dataComment.createdAt}</span>
                        </div>
                        <div class="text-[14px] text-[#666666;]">
                            ${dataComment.content}
                        </div>
                    </div>
                </div>
                <div class="flex  items-center text-[#c7a17a] text-[12px]">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>`);
            $([document.documentElement, document.body]).animate({
                  scrollTop: $(".show-comments").offset().top
            }, 600);
            }
        });
     }

        return `
        <section style="background-image: url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/02/shop-title-area.jpg)" class="flex items-center justify-center bg-fixed app__banner-fourth-block py-[160px]" >
           <span class="uppercase text-white font-bold text-[35px] ">Product Detail</span>
        </section>

        <section class="bg-[#FFFFFF]">
    <div class="container">
        <div class="flex flex-row show-detail-product">
          <div class="basis-1/2 px-7 py-[100px] ">
            <div class="relative animated-background h-[600px]">
               
            </div>
            <div class="flex flex-row gap-5 my-5">
                <div class="animated-background h-[100px] w-[100px]"></div>
                <div class="animated-background h-[100px] w-[100px]"></div>
                <div class="animated-background h-[100px] w-[100px]"></div>
                <div class="animated-background h-[100px] w-[100px]"></div>
                <div class="animated-background h-[100px] w-[100px]"></div>
                <div class="animated-background h-[100px] w-[100px]"></div>
            </div>
        </div>
        <div class="basis-1/2 px-7 py-[100px] ">
             <div class="flex flex-col gap-2">
                  <div class="animated-background w-[130px] h-[20px]"></div>
                  <div class="animated-background w-[180px] h-[20px]">
                      
                  </div>
                  <div class="animated-background w-[170px] h-[40px]">
                      
                  </div>
             </div>
             <div class="mt-8 flex flex-col gap-2">
                  <div class="animated-background w-full h-[12px]"></div>
                  <div class="animated-background w-full h-[12px]"></div>
                  <div class="animated-background w-full h-[12px]"></div>
                  <div class="animated-background w-full h-[12px]"></div>
             </div>
             <div class="flex flex-row gap-7 pt-8 pb-10">
                 <div class="animated-background w-[180px] h-[60px]">
                    
                 </div>
                 <div class="animated-background w-[210px] h-[60px]">
                     
                 </div>
             </div>
             <div class="flex flex-col gap-1 border-t-2 border-[#efefef] py-8">
                <div class="animated-background w-[100px] h-[12px]"></div>
                <div class="animated-background w-[100px] h-[12px]"></div>
                <div class="animated-background w-[100px] h-[12px]"></div>
             </div>
             <div class="animated-background w-[170px] h-[12px]">
             </div>
        </div>
         
        </div>
    
    </div>
</section>

<section class="bg-[#FFFFFF] ">
  <div class="container border-t-2 border-b-2 border-[#EAE7DE] pt-[60px]">
     <div class="  flex  uppercase font-bold justify-center items-center text-[20px]">
          <div class="w-fit   border-b-2 border-[#EAE7DE] py-2 cursor-pointer">
              <span onclick="showTab(this);" data-name="tab-description" class="show-tab border-r-2 border-[#EAE7DE] px-5 text-[#c7a17a]">
                description
            </span>
      
            <span onclick="showTab(this);" data-name="tab-comments" class="show-tab px-5 show-total-cmt"></span>
          </div>
     </div>
     <div id="tab-description" class=" text-[15px] text-[#666666;]  mt-9 mb-[60px] shop-content-product-detail">
        <div class="flex flex-col gap-2">
          <div class="animated-background w-full h-[12px]"></div>
          <div class="animated-background w-full h-[12px]"></div>
          <div class="animated-background w-full h-[12px]"></div>
        </div>
      
     </div>
     <div id="tab-comments" class="hidden px-20 mt-9 mb-[60px]">
          <div class="">
             <h1 class="text-[19px] uppercase font-bold show-total-comments">2 reviews for </h1>
          </div>

          <div class="flex flex-col show-comments">
             
          </div>

          <div class="flex flex-col text-[15.3px] mt-[50px]">
            <div class="text-[#666;] ">Add a review</div>
            <div class="text-[#666;]">Your email address will not be published. Required fields are marked * </div>
            <div class="flex flex-row gap-5 mt-[25px]">
                 <div class="italic text-[#c7a17a]">
                    Your Rating
                 </div>
                 <div class=" text-[#666;] text-[12px] flex gap-2 items-center">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                 </div>
            </div>
        </div>

          <div class="flex flex-wrap gap-4 mt-5">
               <div class="basis-full-gap-4">
                   <textarea id="content-comment" class="italic py-3 px-4 bg-[#f6f4ef] text-[#c7a17a] w-full" name="" id="" cols="45" rows="8" placeholder="Your Review"></textarea>
               </div>
               <div class="basis-1/2-gap-4">
                   <input id="name-comment" type="text" class="italic py-3 px-4 bg-[#f6f4ef] text-[#c7a17a] w-full" placeholder="Your name *">
               </div>
               <div class="basis-1/2-gap-4">
                   <input id="email-comment" type="email" class="italic py-3 px-4 bg-[#f6f4ef] text-[#c7a17a] w-full" placeholder="email *">
               </div>
          </div>

          <div class="flex flex-col gap-6 mt-6">
              <div class="flex gap-2 items-center">
                  <input type="checkbox" class="">
                  <label class="text-[#666;] text-[15.3px]" for="">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>
              <div class="">
                  <button onclick="submitComment();" class="submit-comment px-10 py-4 text-white cursor-pointer font-bold text-[15px] uppercase bg-[#c7a17a]"> submit</button>
              </div>
          </div>
     </div>
  </div>
</section>


<section class="bg-[#FFFFFF;] pb-[90px] pt-[50px]">
  <div class="container ">

      <div class="pb-[20px]">
         <h1 class="text-[27px] font-bold uppercase">Products suggest</h1>
      </div>
      <div class="flex flex-row gap-7 show-list-product-suggest">


      <div class="flex flex-col basis-1/4 gap-3">
          <div class="animated-background w-full h-[350px]">
          </div>
          <div class="py-[8px] animated-background w-[150px] h-[15px]"></div>
          <div class="animated-background w-[90px] h-[12px]">
           
          </div>
          <div class="animated-background w-[70px] h-[12px]"></div>
      </div>
      <div class="flex flex-col basis-1/4 gap-3">
        <div class="animated-background w-full h-[350px]">
        </div>
        <div class="py-[8px] animated-background w-[150px] h-[15px]"></div>
        <div class="animated-background w-[90px] h-[12px]">
         
        </div>
        <div class="animated-background w-[70px] h-[12px]"></div>
    </div>
    <div class="flex flex-col basis-1/4 gap-3">
      <div class="animated-background w-full h-[350px]">
      </div>
      <div class="py-[8px] animated-background w-[150px] h-[15px]"></div>
      <div class="animated-background w-[90px] h-[12px]">
       
      </div>
      <div class="animated-background w-[70px] h-[12px]"></div>
  </div>
  <div class="flex flex-col basis-1/4 gap-3">
    <div class="animated-background w-full h-[350px]">
    </div>
    <div class="py-[8px] animated-background w-[150px] h-[15px]"></div>
    <div class="animated-background w-[90px] h-[12px]">
     
    </div>
    <div class="animated-background w-[70px] h-[12px]"></div>
</div>

        

      </div>
  </div>
</section>
        `;
    }
}
