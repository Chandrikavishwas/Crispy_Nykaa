let full_name = JSON.parse(localStorage.getItem("full_name")) || "Account";
// let df =
export const navbar = () => {
  // let nyka_export=document.getElementById("nykaa_export");
  return `   <div class="topnav_container">
    <div class="g_topbanner">
        <p id="beauty_bonanza">BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</p>
        <div class="navbar_icons">
            <span class="material-symbols-outlined">phone_iphone</span> 
                <p>Get App</p>
                <h1>|</h1>
                <span class="material-symbols-outlined">location_on</span>
                <p>Store & Events</p>
                <h1>|</h1>
                <span class="material-symbols-outlined">redeem</span>
                <p>Gift Card</p>
                <h1>|</h1>
                <span class="material-symbols-outlined">help</span>
                <p>Help</p>
            </div>
        </div>
        <div class="topnav_category">
            <div class="category">
                <ul>
                <li><a href="./index.html"><img src="./Nykaa-Logo.png" alt="Nykaa logo" width="100px"></a></li>
                    <li><p>Categories</p></li>
                <li><p>Brand</p></li>
                <li><p>Luxe
                    <div class="sub_menu_1">
                        <ul>
                          <li>Makeup
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Compact</a></li>
                                    <li><a href="">Highlighter</a></li>
                                    <li><a href="">Setting Spray</a></li>
                                    <li><a href="">Primer</a></li>
                                    <li><a href="">Concealer Powder</a></li>
                                    <li><a href="">Blush</a></li>
                                    <li><a href="">Loose Powder</a></li>
                                    <li><a href="">Bronzer</a></li>
                                    <li><a href="">BB & CC Cream</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                    <li><a href="">Contouring</a></li>
                                    <li><a href=""></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="">Eyeliner & Kajal</a></li>
                                    <li><a href="">Mascara</a></li>
                                    <li><a href="">Eye Shadow</a></li>
                                    <li><a href=""> Brows</a></li>
                                    <li><a href="">Eye Primer</a></li>
                                    <li><a href="">Cocealer</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="">Lipstick</a></li>
                                    <li><a href="">Liquid Lipstick</a></li>
                                    <li><a href="">Lip Balm</a></li>
                                    <li><a href="">Lip Tint</a></li>
                                    <li><a href="">Lip Liner</a></li>
                                    <li><a href="">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="">Nail Polish</a></li>
                                    <li><a href="">Nail Care</a></li>
                                    <li><a href="">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="">Face Brush</a></li>
                                    <li><a href="">Eye Brush</a></li>
                                    <li><a href="">Lip Brush</a></li>
                                    <li><a href="">Applicators</a></li>
                                    <br>
                            </div>
                          </li>
                          <li>Skin
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="">Serums & Essence</a></li>
                                    <li><a href="">Face Moisturisers & Day</a></li>
                                    <li><a href="">Cream</a></li>
                                    <li><a href="">Toner</a></li>
                                    <li><a href="">Face Wash & Cleansers</a></li>
                                    <li><a href="">Face Mist</a></li>
                                    <li><a href="">Scrubs & Exfoliators</a></li>
                                    <li><a href="">Masks & Peels</a></li>
                                    <li><a href="">Night Cream</a></li>
                                    <li><a href="">Sunscreen</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                                    <li><a href="">Pigmentation</a></li>
                                    <li><a href="">Acne</a></li>
                                    <li><a href="">Dark Circles</a></li>
                                    <li><a href="">Ageing</a></li>
                                    <li><a href="">Dry Skin</a></li>
                                    <li><a href="">Oil Control</a></li>
                                    <li><a href="">Pore Care</a></li>
                                    <li><a href="">Wrinkles And Fine Lines</a></li>
                                    <li><a href="">Under Eye Concealer</a></li>
                                    <li><a href="">Contact Lenses</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Fragrance
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="">Face Primer</a></li>
                                    <li><a href="">Concealer</a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Compact</a></li>
                                    <li><a href="">Contour</a></li>
                                    <li><a href="">Loose Powder</a></li>
                                    <li><a href="">Tinted Moisturizer</a></li>
                                    <li><a href="">Blush</a></li>
                                    <li><a href="">Bronzer</a></li>
                                    <li><a href="">BB & CC Cream</a></li>
                                    <li><a href="">Highlighters</a></li>
                                    <li><a href="">Setting Spray</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                    <li><a href="">Sindoor</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="">Kajal</a></li>
                                    <li><a href="">Eyeliner</a></li>
                                    <li><a href="">Mascara</a></li>
                                    <li><a href="">Eye Shadow</a></li>
                                    <li><a href="">Eye Brow Enhancers</a></li>
                                    <li><a href="">Eye Primer</a></li>
                                    <li><a href="">False Eyeglasses</a></li>
                                    <li><a href="">Eye Makeup Remover</a></li>
                                    <li><a href="">Under Eye Concealer</a></li>
                                    <li><a href="">Contact Lenses</a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                                    <li><a href="">Makeup Kits</a></li>
                                    <li><a href="">Makeup Combos</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="">Lipstick</a></li>
                                    <li><a href="">Liquid Lipstick</a></li>
                                    <li><a href="">Lip Crayon</a></li>
                                    <li><a href="">Lip Gloss</a></li>
                                    <li><a href="">Lip Liner</a></li>
                                    <li><a href="">Lip Plumper</a></li>
                                    <li><a href="">Lip Stain</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="">Nail Polish</a></li>
                                    <li><a href="">Nail Arts Kits</a></li>
                                    <li><a href="">Nail Care</a></li>
                                    <li><a href="">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="">Face Brush</a></li>
                                    <li><a href="">Eye Brush</a></li>
                                    <li><a href="">Lip Brush</a></li>
                                    <li><a href="">Brush Sets</a></li>
                                    <li><a href="">Brush Cleaners</a></li>
                                    <li><a href="">Sponges &Applicators</a></li>
                                    <li><a href="">Eyelash Curlers</a></li>
                                    <li><a href="">Tweezers</a></li>
                                    <li><a href="">Sharpners</a></li>
                                    <li><a href="">Mirrors</a></li>
                                    <li><a href="">Makeup Pouches</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                                    <li><a href="">Kay Beauty</a></li>
                                    <li><a href="">Huda Beauty</a></li>
                                    <li><a href="">Charlotte Tilbury</a></li>
                                    <li><a href="">M.A.C</a></li>
                                    <li><a href="">Maybelline New York</a></li>
                                    <li><a href="">L'Oreal Paris</a></li>
                                    <li><a href="">Lakme</a></li>
                                    <li><a href="">Nykaa Cosmetics</a></li>
                                    <li><a href="">Nyx Pro.Makeup</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                                    <li><a href="">Combos @ Nykaa</a></li>
                                    <li><a href="">New Launches</a></li>
                                    <li><a href="">NFBA Nominees 2020</a></li>
                                    <li><a href="">Gifts @ Nykaa</a></li>
                                    <li><a href="">The Gift Store</a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                                    <li><a href="">Nude Lipstick</a></li>
                                    <li><a href="">Matte Lipstick</a></li>
                                    <li><a href="">Red Lipstick</a></li>
                                    <li><a href="">Pink Lipstick</a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Hair
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Compact</a></li>
                                    <li><a href="">Highlighter</a></li>
                                    <li><a href="">Setting Spray</a></li>
                                    <li><a href="">Primer</a></li>
                                    <li><a href="">Concealer Powder</a></li>
                                    <li><a href="">Blush</a></li>
                                    <li><a href="">Loose Powder</a></li>
                                    <li><a href="">Bronzer</a></li>
                                    <li><a href="">BB & CC Cream</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                    <li><a href="">Contouring</a></li>
                                    <li><a href=""></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Accessories</b></a></li>
                                    <li><a href="">Dryers & Stylers</a></li>
                                    <li><a href="">Hair Brushes & Combs</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="">Lipstick</a></li>
                                    <li><a href="">Liquid Lipstick</a></li>
                                    <li><a href="">Lip Balm</a></li>
                                    <li><a href="">Lip Tint</a></li>
                                    <li><a href="">Lip Liner</a></li>
                                    <li><a href="">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="">Nail Polish</a></li>
                                    <li><a href="">Nail Care</a></li>
                                    <li><a href="">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="">Face Brush</a></li>
                                    <li><a href="">Eye Brush</a></li>
                                    <li><a href="">Lip Brush</a></li>
                                    <li><a href="">Applicators</a></li>
                                    <br>
                            </div>
                          </li>
                          <li>Bath & Body
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="">Serums & Essence</a></li>
                                    <li><a href="">Face Moisturisers & Day</a></li>
                                    <li><a href="">Cream</a></li>
                                    <li><a href="">Toner</a></li>
                                    <li><a href="">Face Wash & Cleansers</a></li>
                                    <li><a href="">Face Mist</a></li>
                                    <li><a href="">Scrubs & Exfoliators</a></li>
                                    <li><a href="">Masks & Peels</a></li>
                                    <li><a href="">Night Cream</a></li>
                                    <li><a href="">Sunscreen</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                                    <li><a href="">Pigmentation</a></li>
                                    <li><a href="">Acne</a></li>
                                    <li><a href="">Dark Circles</a></li>
                                    <li><a href="">Ageing</a></li>
                                    <li><a href="">Dry Skin</a></li>
                                    <li><a href="">Oil Control</a></li>
                                    <li><a href="">Pore Care</a></li>
                                    <li><a href="">Wrinkles And Fine Lines</a></li>
                                    <li><a href="">Under Eye Concealer</a></li>
                                    <li><a href="">Contact Lenses</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Shop By Concern
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Compact</a></li>
                                    <li><a href="">Highlighter</a></li>
                                    <li><a href="">Setting Spray</a></li>
                                    <li><a href="">Primer</a></li>
                                    <li><a href="">Concealer Powder</a></li>
                                    <li><a href="">Blush</a></li>
                                    <li><a href="">Loose Powder</a></li>
                                    <li><a href="">Bronzer</a></li>
                                    <li><a href="">BB & CC Cream</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                    <li><a href="">Contouring</a></li>
                                    <li><a href=""></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="">Eyeliner & Kajal</a></li>
                                    <li><a href="">Mascara</a></li>
                                    <li><a href="">Eye Shadow</a></li>
                                    <li><a href=""> Brows</a></li>
                                    <li><a href="">Eye Primer</a></li>
                                    <li><a href="">Cocealer</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="">Lipstick</a></li>
                                    <li><a href="">Liquid Lipstick</a></li>
                                    <li><a href="">Lip Balm</a></li>
                                    <li><a href="">Lip Tint</a></li>
                                    <li><a href="">Lip Liner</a></li>
                                    <li><a href="">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="">Nail Polish</a></li>
                                    <li><a href="">Nail Care</a></li>
                                    <li><a href="">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="">Face Brush</a></li>
                                    <li><a href="">Eye Brush</a></li>
                                    <li><a href="">Lip Brush</a></li>
                                    <li><a href="">Applicators</a></li>
                                    <br>
                            </div>
                          </li>
                          <li>Gifts</li>
                          <li>Trending Now</li>
                          <li>New Launches</li>
                          <li>Minis</li>  
                        </ul>
                    </div>  
                </p></li>
                <li ><p id="NykaaFashion" >Nykaa Fashion
                    <div class="sub_menu_4">
                        <ul>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                            <li><a href="">Serums & Essence</a></li>
                            <li><a href="">Face Moisturisers & Day</a></li>
                            <li><a href="">Cream</a></li>
                            <li><a href="">Toner</a></li>
                            <li><a href="">Face Wash & Cleansers</a></li>
                            <li><a href="">Face Mist</a></li>
                            <li><a href="">Scrubs & Exfoliators</a></li>
                            <li><a href="">Masks & Peels</a></li>
                            <li><a href="">Night Cream</a></li>
                            <li><a href="">Sunscreen</a></li>
                            <li><a href="">Makeup Remover</a></li>
                        </ul>
                        <ul>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                            <br>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                            <br>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                            <li><a href="">Pigmentation</a></li>
                            <li><a href="">Acne</a></li>
                            <li><a href="">Dark Circles</a></li>
                            <li><a href="">Ageing</a></li>
                            <li><a href="">Dry Skin</a></li>
                            <li><a href="">Oil Control</a></li>
                            <li><a href="">Pore Care</a></li>
                            <li><a href="">Wrinkles And Fine Lines</a></li>
                            <li><a href="">Under Eye Concealer</a></li>
                            <li><a href="">Contact Lenses</a></li>
                        </ul>
                        <ul>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                        </ul>
                        <ul >
                            <li><a href=""><img src="https://www.nykaa.com/media/wysiwyg/2022/NF-megamenu.jpg" alt=""></a></li>
                        </ul>
                    </div>
                </p></li>
                <li><p>Beauty Advice</p>
                    <div class="sub_menu_4" id="cards">
                        <ul >
                            <li><a href=""><img src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg" alt=""><br><p style="color:black;">BEAUTY BOOK</p><p>Nykaa's Digital Magazine</p></a></li>
                        </ul>
                        <ul >
                            <li><a href=""><img src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png" alt=""><br><p style="color:black;">NYKAA TV</p><p>Masterclass by experts & vloggers</p></a></li>
                        </ul>
                       
                    </div>
                </li>
            </ul>    
         </div>
         <div class="search">
            <form id="nykaa_search">
               <span class="material-symbols-outlined">search</span> 
                <input type="text" placeholder="Search on Nykaa" style="height: 30px;margin-left:0px;">
            </form>


            <div class="account">
                <span class="material-symbols-outlined" id="person" style="margin-right:10px;">person</span>
                <a href="./signPage/signUp.html" style="color: black;text-decoration: none;position:relative;"><p id="account_p">${full_name} </p></a>
                <a href="./bag/bag.html" style="color: black; margin-left: 40px;position:relative;"><span class="material-symbols-outlined" id="shopping_bag" >shopping_bag</span><span id="badge_id" class="badge"></span></a>
            </div>
        
         </div>
    </div>
</div>  
<div class="offers">
    <div class="dropdown_category">
        <ul>
            <li><a href="#">Makeup</a>
            <div class="sub_menu">
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                    <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Foundation</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Loose Powder</a></li>
                    <li><a href="">Tinted Moisturizer</a></li>
                    <li><a href="">Blush</a></li>
                    <li><a href="">Bronzer</a></li>
                    <li><a href="">BB & CC Cream</a></li>
                    <li><a href="">Highlighters</a></li>
                    <li><a href="">Setting Spray</a></li>
                    <li><a href="">Makeup Remover</a></li>
                    <li><a href="">Sindoor</a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                    <li><a href="">Kajal</a></li>
                    <li><a href="">Eyeliner</a></li>
                    <li><a href="">Mascara</a></li>
                    <li><a href="">Eye Shadow</a></li>
                    <li><a href="">Eye Brow Enhancers</a></li>
                    <li><a href="">Eye Primer</a></li>
                    <li><a href="">False Eyeglasses</a></li>
                    <li><a href="">Eye Makeup Remover</a></li>
                    <li><a href="">Under Eye Concealer</a></li>
                    <li><a href="">Contact Lenses</a></li>
                    <br>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                    <li><a href="">Makeup Kits</a></li>
                    <li><a href="">Makeup Combos</a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                    <li><a href="">Lipstick</a></li>
                    <li><a href="">Liquid Lipstick</a></li>
                    <li><a href="">Lip Crayon</a></li>
                    <li><a href="">Lip Gloss</a></li>
                    <li><a href="">Lip Liner</a></li>
                    <li><a href="">Lip Plumper</a></li>
                    <li><a href="">Lip Stain</a></li>
                    <br>
                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                    <li><a href="">Nail Polish</a></li>
                    <li><a href="">Nail Arts Kits</a></li>
                    <li><a href="">Nail Care</a></li>
                    <li><a href="">Nail Polish Remover</a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                    <li><a href="">Face Brush</a></li>
                    <li><a href="">Eye Brush</a></li>
                    <li><a href="">Lip Brush</a></li>
                    <li><a href="">Brush Sets</a></li>
                    <li><a href="">Brush Cleaners</a></li>
                    <li><a href="">Sponges &Applicators</a></li>
                    <li><a href="">Eyelash Curlers</a></li>
                    <li><a href="">Tweezers</a></li>
                    <li><a href="">Sharpners</a></li>
                    <li><a href="">Mirrors</a></li>
                    <li><a href="">Makeup Pouches</a></li>
                    <br>
                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                    <li><a href="">Kay Beauty</a></li>
                    <li><a href="">Huda Beauty</a></li>
                    <li><a href="">Charlotte Tilbury</a></li>
                    <li><a href="">M.A.C</a></li>
                    <li><a href="">Maybelline New York</a></li>
                    <li><a href="">L'Oreal Paris</a></li>
                    <li><a href="">Lakme</a></li>
                    <li><a href="">Nykaa Cosmetics</a></li>
                    <li><a href="">Nyx Pro.Makeup</a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                    <li><a href="">Combos @ Nykaa</a></li>
                    <li><a href="">New Launches</a></li>
                    <li><a href="">NFBA Nominees 2020</a></li>
                    <li><a href="">Gifts @ Nykaa</a></li>
                    <li><a href="">The Gift Store</a></li>
                    <br>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                    <li><a href="">Nude Lipstick</a></li>
                    <li><a href="">Matte Lipstick</a></li>
                    <li><a href="">Red Lipstick</a></li>
                    <li><a href="">Pink Lipstick</a></li>
                </ul>
            </div>
            </li>
            
            <li><a href="#">Skin</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Hair</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
               
            </li>
            
            <li><a href="#">Appliances</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Bath & Body</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>    
            </li>
            
            <li><a href="#">Natural</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Mom & Baby</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>    
            </li>
            
            <li><a href="#">Health & Wellness</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Men</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>    
            </li>
            
            <li><a href="#">Fragrance</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Pop Ups</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>    
            </li>
        </ul>
    </div>
    <img src="\offers.png" alt="offer image" height="50px" width="130px">
</div>

<!-- --------------------for media Queries---------------------------------------- -->
<div class="div_1">
<div class="div_2">
    <div class="div_3">
        <ul>
       <li class="threeDots"><span class="material-symbols-outlined md18">density_medium</span> 
        <div class="media_cb">
            <ul>
                <li><p>Categories
                    <div class="sub_menu_3">
                        <ul>
                            <li><a href=""></a>OFFERS</a></li>
                            <li><a href=""></a>Makeup</a></li>
                            <li><a href=""></a>Skin</a></li>
                            <li><a href=""></a>Hair</a></li>
                            <li><a href=""></a>Bath & Body</a></li>
                            <li><a href=""></a>Fragrance</a></li>
                            <li><a href=""></a>Appliances</a></li>
                            <li><a href=""></a>Nykaa Luxe</a></li>
                            <li><a href=""></a>Natural</a></li>
                            <li><a href=""></a>Mom & Baby</a></li>
                            <li><a href=""></a>Men's Store</a></li>
                            <li><a href=""></a>Health & Wellness</a></li>
                            <li><a href=""></a>Pop Ups</a></li>
                            <li><a href=""></a>Covid & Home Essentials</a></li>
                            <li><a href=""></a>Nykaa Network</a></li>
                            <li><a href=""></a>Beauty Advice</a></li>
                            <li><a href=""></a>Trending Searches</a></li>
                            <li><a href=""></a>Beauty Services</a></li>
                            <li><a href=""></a>Gift Card</a></li>
                        </ul>
                    </div>
                    
                </p>
            </li>
            <li>
                <p >Brand
                    <div class="sub_menu_3">
                        <ul>
                            <li><p style=" color: black;font-weight: 600;">Top Brands</p></li>
                                    <li><a href="">Maybelline New York</a></li>
                                    <li><a href="">Lakme</a></li>
                                    <li><a href="">Nykaa Cosmetics</a></li>
                                    <li><a href="">M.A.C</a></li>
                                    <li><a href="">The Face Shop</a></li>
                                    <li><a href="">L'Oreal Paris</a></li>
                                    <li><a href="">Nyka Naturals</a></li>
                                    <li><a href="">Biotique</a></li>
                                    <li><a href="">Huda Beauty</a></li>
                                    <li><a href="">Kama Ayurveda</a></li>

                            <li><p style=" color: black;font-weight: 600;">#</p></li>
                                    <li><a href="">18m32</a></li>
                                    <li><a href="">2.Oh</a></li>
                                    <li><a href="">23 Yards</a></li>
                                    <li><a href="">24 Mantra</a></li>
                                    <li><a href="">3INA</a></li>

                            <li><p style=" color: black;font-weight: 600;">A</p></li>
                                    <li><a href="">A Clutch Story</a></li>
                                    <li><a href="">A Fragrance Story</a></li>
                                    <li><a href="">A'kin</a></li>
                                    <li><a href="">Adiva</a></li>
                                    <li><a href="">Abena</a></li>
                            
                            <li><p style=" color: black;font-weight: 600;">B</p></li>
                                    <li><a href="">Babila</a></li>
                                    <li><a href="">Baby Moo</a></li>
                                    <li><a href="">Babyliss</a></li>
                                    <li><a href="">Babymama</a></li>
                                    <li><a href="">Bajaj</a></li>  

                           <li><p style=" color: black;font-weight: 600;">C</p></li>
                                    <li><a href="">Callesta</a></li>
                                    <li><a href="">Calvadoss</a></li>
                                    <li><a href="">Calvin Klein</a></li>
                                    <li><a href="">Campus</a></li>
                                    <li><a href="">Candy Skin</a></li>                                       
                            
                        </ul>
                    </div>
                </p>
    
            </li>
            </ul> 
        </div>
    </li>       
       <li><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JvpmDCFO5WUTxb9axPFk5bKPacl5FexVHQ&usqp=CAU" alt="Nykaa black logo" height="40px" width="110px"></a></li> 
    </ul>
    </div>
    <div class="div_4">
     <a href="" style="position:relative;"><span class="material-symbols-outlined" id="shopping_bag">shopping_bag</span><span id="badge_id_m" class="badge_m"></span></a>
    <a href=""><span class="material-symbols-outlined" id="logged_in">person_add</span></a>
    </div>
</div>
<form action="">
    <span class="material-symbols-outlined">search</span> 
    <input type="text" placeholder="Search  products, brands etc" >
</form>

</div>`;
};
