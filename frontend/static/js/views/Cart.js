import AbstractView from "./AbstractView.js";
import Order from "../service/orderService.js";
import axios from 'axios';
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Cart");
    }

    async getHtml() {
    
        let order = new Order();
        function handleRequest() {
            axios.get("https://provinces.open-api.vn/api/").then(function (response) {
                renderCarts();
                response.data.map((item, key) => {
                
                    $('#show-provinces').append(`<option value="${item.code}" > ${item.name}</option>`)
                })
            })
        }
        handleRequest();
       
    

        window.deCrease = (thisData) => {
            var index = ($('.decrease').index(thisData));
            $('.cart-input').eq(Number(index)).val(Number($('.cart-input').eq(Number(index)).val()) - 1);
            let id = $('.app-cart__content-item').eq(index).attr('data-id');
            let quantityChange = $('.cart-input').eq(Number(index)).val();
            changeCartQuantity(quantityChange, id);
        }
        window.inCrease = (thisData) => {
            var index = ($('.increase').index(thisData));
            $('.cart-input').eq(Number(index)).val(Number($('.cart-input').eq(Number(index)).val()) + 1);
            let id = $('.app-cart__content-item').eq(index).attr('data-id');
            let quantityChange = $('.cart-input').eq(Number(index)).val();
            changeCartQuantity(quantityChange, id);
        }


        window.showProvince = (thisData) => {
           
            $('#show-wards').empty();
            $('#show-wards').append(`<option value="0" class="">-- Select ward -- </option>`);
            $('#show-districts').empty();
            $('#show-districts').append(`<option value="0" class="">-- Select district -- </option>`);
            if($(thisData).val() == '0'){
                return true;
            }
    
             axios.get(`https://provinces.open-api.vn/api/p/${$(thisData).val()}/?depth=2`).then(function (response) {
                response.data.districts.map((item, key) => {
                        
                $('#show-districts').append(`<option value="${item.code}" > ${item.name}</option>`)
            })
                
            })
        }

        
       
        window.showDistrict = (thisData) => {
            $('#show-wards').empty();
            $('#show-wards').append(`<option value="0" class="">-- Select ward -- </option>`);
            if($(thisData).val() == '0'){
                return true;
            }
            
             axios.get(`https://provinces.open-api.vn/api/d/${$(thisData).val()}/?depth=2`).then(function (response) {
               
                response.data.wards.map((item, key) => {
                   
                    $('#show-wards').append(`<option value="${item.code}" > ${item.name}</option>`)
                })
                
            })
        }
        
       
        
        window.cartInputChange = (thisData) => {
            var index = ($('.cart-input').index(thisData));
            let id = $('.app-cart__content-item').eq(index).attr('data-id');
            var quantityChange = $('.cart-input').eq(Number(index)).val();
           
            changeCartQuantity(quantityChange, id);
        }
       
        window.deleteCart = (thisData) => {
            var dataItem = JSON.parse(localStorage.getItem("carts"));
            var index = $('.delete-cart').index(thisData);
            let id = $('.app-cart__content-item').eq(index).attr('data-id');
    
            var arrDelete = dataItem.filter(
                (item) => {
                    if(item.id == id){
                        return false;
                    }else {
                        return true;
                    }
                }
            );
            localStorage.setItem("carts", JSON.stringify(arrDelete));
            renderCarts();
        }
        


        window.closePopupCart = () => {
            $('.popup-success').fadeOut();
        };


        window.submitOrder = (thisData) => {
        
            $(thisData).prop('disabled', true);
            $(thisData).html(`<i class=" fa fa-spinner fa-spin"></i>`);
            let name = $("#name-order").val();
            let email = $("#email-order").val();
            let phoneNumber = $("#phone-order").val();
            let note = $("#note-order").val();
            let fullAddress = $("#address-order").val();
            let province = $("#show-provinces").children("option").filter(":selected").text();
            let district = $("#show-districts").children("option").filter(":selected").text();
            let ward = $("#show-wards").children("option").filter(":selected").text();
    
            let dataUser = {
                name,
                email,
                phoneNumber,
                note,
                fullAddress : `${fullAddress}, ${ward}, ${district}, ${province}`
            }
            
          
            order.insertOrderAndGetLastID(dataUser, JSON.parse(localStorage.getItem("carts"))).then((data) => {
                if(data.status == "success"){
                    showPopupOrder(dataUser, JSON.parse(localStorage.getItem("carts")));
                    localStorage.setItem("carts", JSON.stringify([]));
                    renderCarts();
                }
            })
            
        }
 
    function renderCarts(){
        $('.show-cart-list').empty();
        

        var arrCart = JSON.parse(localStorage.getItem("carts"));
        //console.log(arrCart);
        var totalProduct = 0;
        var totalPrice = 0;
        
        if (arrCart == null || arrCart.length == 0) {
            arrCart = [];
            $('.app-cart, .app-coupon, .app-bill, .app-total').remove();
            $('.show-quantity-icon').text(0);
            $('.show-empty-cart').append(`<div class="flex flex-col gap-4 pb-[50px]">
                <div class="text-[20px] font-bold  mt-2 px-5 flex gap-4 items-center justify-start border-[1px] border-[#efefef] py-4">Your cart is currently empty</div>
                <div class="italic text-[#c7a17a]"><span class=""><a href="/product" data-link> Return to shop</a></span></div>
            </div>`);
        }
        
        arrCart.map((item, key) => {
            totalProduct = totalProduct + Number(item.quantity);
            totalPrice = totalPrice + (item.quantity * item.price);
            $('.show-cart-list').append(` <div data-id="${item.id}" class="app-cart__content-item flex flex-row items-center justify-center gap-[15px] border-b-[1px] border-[#efefef] py-2">
                    <div onclick="deleteCart(this);" class="delete-cart text-center text-[#959595;] w-full text-[26px]  border-r-[1px] border-[#efefef]">&times;</div>
                    <div class="w-full font-bold italic text-[#c7a17a]">${item.name}</div>
                    <div class="w-full font-bold italic"><img src="${item.image}" alt="" class="w-[100px]"></div>
                    <div class="w-full font-bold italic">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</div>
                    <div class="w-full italic  flex text-[20px] gap-[18px]"> 
                        <button onclick="deCrease(this);" class="decrease">-</button>
                        <input onchange="cartInputChange(this);" type="number" class="cart-input w-[50px] h-[50px] text-center bg-[#f4f4f4] font-bold" value="${item.quantity}">
                        <button onclick="inCrease(this);" class="increase">+</button>
                    </div>
                    <div class="w-full font-bold italic">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * item.quantity)}</div>
        
                </div>`);
                $('.show-quantity-icon').text(totalProduct);
        })
        $('.show-subtotal, .show-total').text(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice));
    }
    
    function changeCartQuantity(quantity, id){
        
        
        if(quantity <= 0 || quantity >=6 ){
            renderCarts();
            return true;
        }
        var shopCart = JSON.parse(localStorage.getItem("carts"));
        var newArr = shopCart.map((value, key) => {
            if (value.id == id) {
                return {
                    ...value,
                    quantity: quantity
                }
            } else {
                return (value);
            }
        });
        localStorage.setItem("carts", JSON.stringify(newArr));
        renderCarts();
    }
    function showPopupOrder(dataUser, dataCart){
        var currentdate = new Date(); 
        var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        let template = "";
        var totalPrice = 0;
        dataCart.map((item, key) => {
            totalPrice = totalPrice + (item.quantity * item.price);
            template = template + `<div class="flex justify-between ">
                    <div class="">
                        ${item.name} (&times; ${item.quantity})
                    </div>
                    <div class=" w-[130px]">
                        ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                    </div>
                 </div>`;
        })

        $('.app__nav').before(`<section class="hidden pt-[80px] z-[9999] popup-success bg-[#00000054] w-screen h-screen fixed top-[0px] left-[0px]  justify-center">
    <div class="bg-white w-[600px] h-[90%]  overflow-y-auto ">
        <div class="bg-[#c7a17a] flex justify-between px-10 py-5 items-center ">
            <div class="">
                <a href="product.html" class="text-[20px] text-white"><span class="">Back to shop</span></a>
            </div>
            <div onclick="closePopupCart();" class="text-[30px] text-white">
                &times;
            </div>
        </div>
        <div class="px-10  flex justify-center items-center flex-col gap-2">
            <div class="">
                <img src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_success_icon_177398.png" alt="" class="w-[200px] h-[200px]">
            </div>
            <div class="font-bold text-[30px]">Thank You For Your Order!</div>
            <div class="text-center text-[#777777;]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste ipsa numquam odio dolores, nam.</div>
        </div>

        <div class="px-10 mt-[32px]">
            <div class="text-white flex justify-between bg-[#c7a17a] p-2 font-bold">
                <div class="">
                    Order Confirmation #
                </div>
                <div class=" w-[130px]">
                    Price
                </div>
            </div>
            <div class="mt-2 show-list-ordered flex flex-col p-2 gap-3">
                 ${template}
            </div>
            <div class="mt-2  p-2 font-bold">
                <div class="py-2 flex justify-between border-b-[3px] border-t-[3px] border-[#eeeeee]">
                    <div class="uppercase">
                        total
                    </div>
                    <div class="w-[130px]">
                        ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}
                    </div>
                 </div>
            </div>
        </div>

        <div class="px-12 flex flex-col gap-[2px] pb-5">
             <div class="flex justify-between font-bold">
                <div class="">Delivery Address</div>
                <div class="">Estimated Delivery Date</div>
             </div>
             <div class="flex justify-between mt-2">
                <div class="">(Name) ${dataUser.name}</div>
                <div class="">${datetime}</div>
             </div>
             <div class="flex justify-between ">
                <div class="">(Email) ${dataUser.email}</div>
             </div>
             <div class="flex justify-between ">
                <div class="">(Phone number) ${dataUser.phoneNumber}</div>
             </div>
             <div class="flex justify-between ">
                <div class="">(Address) ${dataUser.fullAddress}</div>
             </div>
             <div class="flex justify-between ">
                <div class="">(Note) ${dataUser.note} </div>
             </div>
        </div>
    </div>
 </section>`);

        $(".popup-success").fadeIn({
            
            start: function() {
                jQuery(this).css('display','flex');
            }
        });
    }

        return `
        <section style="background-image: url(https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/02/shop-title-area.jpg)" class="flex items-center justify-center bg-fixed app__banner-fourth-block py-[160px]" >
        <span class="uppercase text-white font-bold text-[35px] ">Cart</span>
 </section>

<section class=" bg-[#FFFFFF] pt-[100px] pb-[30px]">
    <div class="container show-empty-cart">
         
        <div class="border-[1px] border-[#efefef] app-cart">
            <div class="flex flex-row items-center justify-center gap-[15px] border-b-[1px] border-[#efefef] py-3">
                <div class="w-full text-center"><b class="uppercase text-[24px] ">cart</b></div>
                <div class="w-full font-bold italic">Product</div>
                <div class="w-full font-bold italic">Image</div>
                <div class="w-full font-bold italic">Price</div>
                <div class="w-full font-bold italic">Quantity</div>
                <div class="w-full font-bold italic">Total</div>
    
            </div>

            <div class="show-cart-list">
               
            </div>
            


        </div>
    </div>
</section>

<section class="bg-[#FFFFFF] py-5 app-coupon">
  <div class="container">
     <div class="flex flex-row justify-between">
         <div class="flex gap-4">
             <input type="text" class="text-[14.5px] h-full border-[1px] border-[#efefef] px-4 text-[#c7a17a]" placeholder="Coupon code">
             <button class="uppercase bg-[#c7a17a] text-white text-[14px] font-bold h-full px-9 py-4">apply coupon</button>
         </div>
         <div class="">
             <button class="uppercase bg-[#c7a17a] text-white text-[14px] font-bold h-full px-9 py-4">update cart</button>
         </div>
     </div>
  </div>


</section>

<section class="bg-[#FFFFFF] py-6 app-total">
    <div class="container">
        <b class="uppercase">cart total</b>
        <div class="mt-2 px-5 flex gap-4 items-center justify-center border-[1px] border-[#efefef] py-4">
            <div class="w-full flex items-center gap-3 text-[17px]">
                <b class="uppercase ">subtotal: </b>
                <span class="text-[#666] show-subtotal">$456</span>
            </div>
            <div class="w-full flex items-center gap-3 text-[17px]">
                <b class="uppercase ">Free Shipping: </b>
                <span class="text-[#666]">0đ</span>
            </div>
            <div class="w-full flex items-center gap-3 text-[17px]">
                <b class="uppercase ">total: </b>
                <span class="text-[#666] show-total">$456</span>
            </div>
        </div>
    </div>
</section>
<section class="bg-[#FFFFFF] pb-20 app-bill">
    <div class="container">
         <div class="flex gap-5">
             <div class="w-full flex flex-col gap-5">
                 <div class="flex gap-4">
                    <div class="basis-1/2">
                        <input id="name-order" type="text" class="w-full text-[14.5px] h-full border-[1px] border-[#efefef] px-4 py-4 text-[#c7a17a]" placeholder="Name">
                    </div>
                     <div class="basis-1/2">
                        <input id="email-order" type="email" class="w-full text-[14.5px] h-full border-[1px] border-[#efefef] px-4 py-4 text-[#c7a17a]" placeholder="Email">
                     </div>
                 </div>

                 <div class="">
                    <div class="basis-1/2">
                        <input id="phone-order" type="number" class="w-full text-[14.5px] h-full border-[1px] border-[#efefef] px-4 py-4 text-[#c7a17a]" placeholder="Phone number">
                     </div>
                 </div>

                 <div class="flex flex-col gap-4">
                        <div class="w-full">
                            <select name="" onchange="showProvince(this);" id="show-provinces" class="bg-[#FFFFFF] w-full text-[14.5px] h-full border-[1px] border-[#efefef] px-4 py-4 text-[#c7a17a]">
                                <option value="0" class="">-- Select city --</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <select name="" onchange="showDistrict(this);" id="show-districts" class="bg-[#FFFFFF] w-full text-[14.5px] h-full border-[1px] border-[#efefef] px-4 py-4 text-[#c7a17a]">
                                <option value="0" class="">-Select district- </option>
                            </select>
                        </div>
                        <div class="w-full">
                            <select name="" id="show-wards" class="bg-[#FFFFFF] w-full text-[14.5px] h-full border-[1px] border-[#efefef] px-4 py-4 text-[#c7a17a]">
                                <option value="0" class="">-- Select ward -- </option>
                            </select>
                        </div>
                </div>
                 <div class="">
                    <div class="basis-1/2">
                        <input id="address-order" type="text" class="w-full text-[14.5px] h-full border-[1px] border-[#efefef] px-4 py-4 text-[#c7a17a]" placeholder="Address receive products">
                     </div>
                 </div>
                 <div class="">
                    <button onclick="submitOrder(this);" class="submit-order uppercase bg-[#c7a17a] text-white text-[14px] font-bold h-full px-9 py-4">Order</button>
                 </div>
             </div>
             <div class="w-full">
                <div class="">
                    <input id="note-order" type="text" class="w-full text-[14.5px] h-full border-[1px] border-[#efefef] px-4 py-4 text-[#c7a17a]" placeholder="Note" /> 
                </div>
             </div>
         </div>
    </div>
</section>
        `;
    }
}