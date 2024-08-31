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
                <li><a href="./index.html"><img src="./Nykaa-Logo.png" alt="Nykaa logo" width="100px" ></a></li>
                    <li><p>Categories</p></li>
                <li><p>Brand</p></li>
                <li><p>Luxe
                <a href = './product.html'>
                    <div class="sub_menu_1">
                        <ul>
                          <li>Makeup
                            <div class="sub_menu_2">
                            
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="./product.html">Foundation</a></li>
                                    <li><a href="./product.html">Compact</a></li>
                                    <li><a href="./product.html">Highlighter</a></li>
                                    <li><a href="./product.html">Setting Spray</a></li>
                                    <li><a href="./product.html">Primer</a></li>
                                    <li><a href="./product.html">Concealer Powder</a></li>
                                    <li><a href="./product.html">Blush</a></li>
                                    <li><a href="./product.html">Loose Powder</a></li>
                                    <li><a href="./product.html">Bronzer</a></li>
                                    <li><a href="./product.html">BB & CC Cream</a></li>
                                    <li><a href="./product.html">Makeup Remover</a></li>
                                    <li><a href="./product.html">Contouring</a></li>
                                    <li><a href="./product.html"></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="./product.html">Eyeliner & Kajal</a></li>
                                    <li><a href="./product.html">Mascara</a></li>
                                    <li><a href="./product.html">Eye Shadow</a></li>
                                    <li><a href="./product.html"> Brows</a></li>
                                    <li><a href="./product.html">Eye Primer</a></li>
                                    <li><a href="./product.html">Cocealer</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="./product.html">Lipstick</a></li>
                                    <li><a href="./product.html">Liquid Lipstick</a></li>
                                    <li><a href="./product.html">Lip Balm</a></li>
                                    <li><a href="./product.html">Lip Tint</a></li>
                                    <li><a href="./product.html">Lip Liner</a></li>
                                    <li><a href="./product.html">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="./product.html">Nail Polish</a></li>
                                    <li><a href="./product.html">Nail Care</a></li>
                                    <li><a href="./product.html">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="./product.html">Face Brush</a></li>
                                    <li><a href="./product.html">Eye Brush</a></li>
                                    <li><a href="./product.html">Lip Brush</a></li>
                                    <li><a href="./product.html">Applicators</a></li>
                                    <br>
                            </div>
                          </li>
                          <li>Skin
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="./product.html">Serums & Essence</a></li>
                                    <li><a href="./product.html">Face Moisturisers & Day</a></li>
                                    <li><a href="./product.html">Cream</a></li>
                                    <li><a href="./product.html">Toner</a></li>
                                    <li><a href="./product.html">Face Wash & Cleansers</a></li>
                                    <li><a href="./product.html">Face Mist</a></li>
                                    <li><a href="./product.html">Scrubs & Exfoliators</a></li>
                                    <li><a href="./product.html">Masks & Peels</a></li>
                                    <li><a href="./product.html">Night Cream</a></li>
                                    <li><a href="./product.html">Sunscreen</a></li>
                                    <li><a href="./product.html">Makeup Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                                    <br>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                                    <br>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                                    <li><a href="./product.html">Pigmentation</a></li>
                                    <li><a href="./product.html">Acne</a></li>
                                    <li><a href="./product.html">Dark Circles</a></li>
                                    <li><a href="./product.html">Ageing</a></li>
                                    <li><a href="./product.html">Dry Skin</a></li>
                                    <li><a href="./product.html">Oil Control</a></li>
                                    <li><a href="./product.html">Pore Care</a></li>
                                    <li><a href="./product.html">Wrinkles And Fine Lines</a></li>
                                    <li><a href="./product.html">Under Eye Concealer</a></li>
                                    <li><a href="./product.html">Contact Lenses</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Fragrance
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="./product.html">Face Primer</a></li>
                                    <li><a href="./product.html">Concealer</a></li>
                                    <li><a href="./product.html">Foundation</a></li>
                                    <li><a href="./product.html">Compact</a></li>
                                    <li><a href="./product.html">Contour</a></li>
                                    <li><a href="./product.html">Loose Powder</a></li>
                                    <li><a href="./product.html">Tinted Moisturizer</a></li>
                                    <li><a href="./product.html">Blush</a></li>
                                    <li><a href="./product.html">Bronzer</a></li>
                                    <li><a href="./product.html">BB & CC Cream</a></li>
                                    <li><a href="./product.html">Highlighters</a></li>
                                    <li><a href="./product.html">Setting Spray</a></li>
                                    <li><a href="./product.html">Makeup Remover</a></li>
                                    <li><a href="./product.html">Sindoor</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="./product.html">Kajal</a></li>
                                    <li><a href="./product.html">Eyeliner</a></li>
                                    <li><a href="./product.html">Mascara</a></li>
                                    <li><a href="./product.html">Eye Shadow</a></li>
                                    <li><a href="./product.html">Eye Brow Enhancers</a></li>
                                    <li><a href="./product.html">Eye Primer</a></li>
                                    <li><a href="./product.html">False Eyeglasses</a></li>
                                    <li><a href="./product.html">Eye Makeup Remover</a></li>
                                    <li><a href="./product.html">Under Eye Concealer</a></li>
                                    <li><a href="./product.html">Contact Lenses</a></li>
                                    <br>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                                    <li><a href="./product.html">Makeup Kits</a></li>
                                    <li><a href="./product.html">Makeup Combos</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="./product.html">Lipstick</a></li>
                                    <li><a href="./product.html">Liquid Lipstick</a></li>
                                    <li><a href="./product.html">Lip Crayon</a></li>
                                    <li><a href="./product.html">Lip Gloss</a></li>
                                    <li><a href="./product.html">Lip Liner</a></li>
                                    <li><a href="./product.html">Lip Plumper</a></li>
                                    <li><a href="./product.html">Lip Stain</a></li>
                                    <br>
                                    <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="./product.html">Nail Polish</a></li>
                                    <li><a href="./product.html">Nail Arts Kits</a></li>
                                    <li><a href="./product.html">Nail Care</a></li>
                                    <li><a href="./product.html">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="./product.html">Face Brush</a></li>
                                    <li><a href="./product.html">Eye Brush</a></li>
                                    <li><a href="./product.html">Lip Brush</a></li>
                                    <li><a href="./product.html">Brush Sets</a></li>
                                    <li><a href="./product.html">Brush Cleaners</a></li>
                                    <li><a href="./product.html">Sponges &Applicators</a></li>
                                    <li><a href="./product.html">Eyelash Curlers</a></li>
                                    <li><a href="./product.html">Tweezers</a></li>
                                    <li><a href="./product.html">Sharpners</a></li>
                                    <li><a href="./product.html">Mirrors</a></li>
                                    <li><a href="./product.html">Makeup Pouches</a></li>
                                    <br>
                                    <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                                    <li><a href="./product.html">Kay Beauty</a></li>
                                    <li><a href="./product.html">Huda Beauty</a></li>
                                    <li><a href="./product.html">Charlotte Tilbury</a></li>
                                    <li><a href="./product.html">M.A.C</a></li>
                                    <li><a href="./product.html">Maybelline New York</a></li>
                                    <li><a href="./product.html">L'Oreal Paris</a></li>
                                    <li><a href="./product.html">Lakme</a></li>
                                    <li><a href="./product.html">Nykaa Cosmetics</a></li>
                                    <li><a href="./product.html">Nyx Pro.Makeup</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                                    <li><a href="./product.html">Combos @ Nykaa</a></li>
                                    <li><a href="./product.html">New Launches</a></li>
                                    <li><a href="./product.html">NFBA Nominees 2020</a></li>
                                    <li><a href="./product.html">Gifts @ Nykaa</a></li>
                                    <li><a href="./product.html">The Gift Store</a></li>
                                    <br>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                                    <li><a href="./product.html">Nude Lipstick</a></li>
                                    <li><a href="./product.html">Matte Lipstick</a></li>
                                    <li><a href="./product.html">Red Lipstick</a></li>
                                    <li><a href="./product.html">Pink Lipstick</a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Hair
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="./product.html">Foundation</a></li>
                                    <li><a href="./product.html">Compact</a></li>
                                    <li><a href="./product.html">Highlighter</a></li>
                                    <li><a href="./product.html">Setting Spray</a></li>
                                    <li><a href="./product.html">Primer</a></li>
                                    <li><a href="./product.html">Concealer Powder</a></li>
                                    <li><a href="./product.html">Blush</a></li>
                                    <li><a href="./product.html">Loose Powder</a></li>
                                    <li><a href="./product.html">Bronzer</a></li>
                                    <li><a href="./product.html">BB & CC Cream</a></li>
                                    <li><a href="./product.html">Makeup Remover</a></li>
                                    <li><a href="./product.html">Contouring</a></li>
                                    <li><a href="./product.html"></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Accessories</b></a></li>
                                    <li><a href="./product.html">Dryers & Stylers</a></li>
                                    <li><a href="./product.html">Hair Brushes & Combs</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="./product.html">Lipstick</a></li>
                                    <li><a href="./product.html">Liquid Lipstick</a></li>
                                    <li><a href="./product.html">Lip Balm</a></li>
                                    <li><a href="./product.html">Lip Tint</a></li>
                                    <li><a href="./product.html">Lip Liner</a></li>
                                    <li><a href="./product.html">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="./product.html">Nail Polish</a></li>
                                    <li><a href="./product.html">Nail Care</a></li>
                                    <li><a href="./product.html">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="./product.html">Face Brush</a></li>
                                    <li><a href="./product.html">Eye Brush</a></li>
                                    <li><a href="./product.html">Lip Brush</a></li>
                                    <li><a href="./product.html">Applicators</a></li>
                                    <br>
                            </div>
                          </li>
                          <li>Bath & Body
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="./product.html">Serums & Essence</a></li>
                                    <li><a href="./product.html">Face Moisturisers & Day</a></li>
                                    <li><a href="./product.html">Cream</a></li>
                                    <li><a href="./product.html">Toner</a></li>
                                    <li><a href="./product.html">Face Wash & Cleansers</a></li>
                                    <li><a href="./product.html">Face Mist</a></li>
                                    <li><a href="./product.html">Scrubs & Exfoliators</a></li>
                                    <li><a href="./product.html">Masks & Peels</a></li>
                                    <li><a href="./product.html">Night Cream</a></li>
                                    <li><a href="./product.html">Sunscreen</a></li>
                                    <li><a href="./product.html">Makeup Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                                    <br>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                                    <br>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                                    <li><a href="./product.html">Pigmentation</a></li>
                                    <li><a href="./product.html">Acne</a></li>
                                    <li><a href="./product.html">Dark Circles</a></li>
                                    <li><a href="./product.html">Ageing</a></li>
                                    <li><a href="./product.html">Dry Skin</a></li>
                                    <li><a href="./product.html">Oil Control</a></li>
                                    <li><a href="./product.html">Pore Care</a></li>
                                    <li><a href="./product.html">Wrinkles And Fine Lines</a></li>
                                    <li><a href="./product.html">Under Eye Concealer</a></li>
                                    <li><a href="./product.html">Contact Lenses</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Shop By Concern
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="./product.html">Foundation</a></li>
                                    <li><a href="./product.html">Compact</a></li>
                                    <li><a href="./product.html">Highlighter</a></li>
                                    <li><a href="./product.html">Setting Spray</a></li>
                                    <li><a href="./product.html">Primer</a></li>
                                    <li><a href="./product.html">Concealer Powder</a></li>
                                    <li><a href="./product.html">Blush</a></li>
                                    <li><a href="./product.html">Loose Powder</a></li>
                                    <li><a href="./product.html">Bronzer</a></li>
                                    <li><a href="./product.html">BB & CC Cream</a></li>
                                    <li><a href="./product.html">Makeup Remover</a></li>
                                    <li><a href="./product.html">Contouring</a></li>
                                    <li><a href="./product.html"></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="./product.html">Eyeliner & Kajal</a></li>
                                    <li><a href="./product.html">Mascara</a></li>
                                    <li><a href="./product.html">Eye Shadow</a></li>
                                    <li><a href="./product.html"> Brows</a></li>
                                    <li><a href="./product.html">Eye Primer</a></li>
                                    <li><a href="./product.html">Con./product.htmlcealer</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="./product.html">Lipstick</a></li>
                                    <li><a href="./product.html">Liquid Lipstick</a></li>
                                    <li><a href="./product.html">Lip Balm</a></li>
                                    <li><a href="./product.html">Lip Tint</a></li>
                                    <li><a href="./product.html">Lip Liner</a></li>
                                    <li><a href="./product.html">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="./product.html">Nail Polish</a></li>
                                    <li><a href="./product.html">Nail Care</a></li>
                                    <li><a href="./product.html">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="./product.html">Face Brush</a></li>
                                    <li><a href="./product.html">Eye Brush</a></li>
                                    <li><a href="./product.html">Lip Brush</a></li>
                                    <li><a href="./product.html">Applicators</a></li>
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
                            <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                            <li><a href="./product.html">Serums & Essence</a></li>
                            <li><a href="./product.html">Face Moisturisers & Day</a></li>
                            <li><a href="./product.html">Cream</a></li>
                            <li><a href="./product.html">Toner</a></li>
                            <li><a href="./product.html">Face Wash & Cleansers</a></li>
                            <li><a href="./product.html">Face Mist</a></li>
                            <li><a href="./product.html">Scrubs & Exfoliators</a></li>
                            <li><a href="./product.html">Masks & Peels</a></li>
                            <li><a href="./product.html">Night Cream</a></li>
                            <li><a href="./product.html">Sunscreen</a></li>
                            <li><a href="./product.html">Makeup Remover</a></li>
                        </ul>
                        <ul>
                            <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                            <br>
                            <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                            <br>
                            <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                            <li><a href="./product.html">Pigmentation</a></li>
                            <li><a href="./product.html">Acne</a></li>
                            <li><a href="./product.html">Dark Circles</a></li>
                            <li><a href="./product.html">Ageing</a></li>
                            <li><a href="./product.html">Dry Skin</a></li>
                            <li><a href="./product.html">Oil Control</a></li>
                            <li><a href="./product.html">Pore Care</a></li>
                            <li><a href="./product.html">Wrinkles And Fine Lines</a></li>
                            <li><a href="./product.html">Under Eye Concealer</a></li>
                            <li><a href="./product.html">Contact Lenses</a></li>
                        </ul>
                        <ul>
                            <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                        </ul>
                        <ul >
                            <li><a href="./product.html"><img src="https://www.nykaa.com/media/wysiwyg/2022/NF-megamenu.jpg" alt=""></a></li>
                        </ul>
                    </div>
                </p></li>
                <li><p>Beauty Advice</p>
                    <div class="sub_menu_4" id="cards">
                        <ul >
                            <li><a href="./product.html"><img src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg" alt=""><br><p style="color:black;">BEAUTY BOOK</p><p>Nykaa's Digital Magazine</p></a></li>
                        </ul>
                        <ul >
                            <li><a href="./product.html"><img src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png" alt=""><br><p style="color:black;">NYKAA TV</p><p>Masterclass by experts & vloggers</p></a></li>
                        </ul>
                       
                    </div>
                </li>
            </ul>    
         </div>
         </a>
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
            <li><a href="./product.html">Makeup</a>
            <div class="sub_menu">
                <ul>
                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                    <li><a href="./product.html">Face Primer</a></li>
                    <li><a href="./product.html">Concealer</a></li>
                    <li><a href="./product.html">Foundation</a></li>
                    <li><a href="./product.html">Compact</a></li>
                    <li><a href="./product.html">Contour</a></li>
                    <li><a href="./product.html">Loose Powder</a></li>
                    <li><a href="./product.html">Tinted Moisturizer</a></li>
                    <li><a href="./product.html">Blush</a></li>
                    <li><a href="./product.html">Bronzer</a></li>
                    <li><a href="./product.html">BB & CC Cream</a></li>
                    <li><a href="./product.html">Highlighters</a></li>
                    <li><a href="./product.html">Setting Spray</a></li>
                    <li><a href="./product.html">Makeup Remover</a></li>
                    <li><a href="./product.html">Sindoor</a></li>
                </ul>
                <ul>
                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                    <li><a href="./product.html">Kajal</a></li>
                    <li><a href="./product.html">Eyeliner</a></li>
                    <li><a href="./product.html">Mascara</a></li>
                    <li><a href="./product.html">Eye Shadow</a></li>
                    <li><a href="./product.html">Eye Brow Enhancers</a></li>
                    <li><a href="./product.html">Eye Primer</a></li>
                    <li><a href="./product.html">False Eyeglasses</a></li>
                    <li><a href="./product.html">Eye Makeup Remover</a></li>
                    <li><a href="./product.html">Under Eye Concealer</a></li>
                    <li><a href="./product.html">Contact Lenses</a></li>
                    <br>
                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                    <li><a href="./product.html">Makeup Kits</a></li>
                    <li><a href="./product.html">Makeup Combos</a></li>
                </ul>
                <ul>
                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                    <li><a href="./product.html">Lipstick</a></li>
                    <li><a href="./product.html">Liquid Lipstick</a></li>
                    <li><a href="./product.html">Lip Crayon</a></li>
                    <li><a href="./product.html">Lip Gloss</a></li>
                    <li><a href="./product.html">Lip Liner</a></li>
                    <li><a href="./product.html">Lip Plumper</a></li>
                    <li><a href="./product.html">Lip Stain</a></li>
                    <br>
                    <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                    <li><a href="./product.html">Nail Polish</a></li>
                    <li><a href="./product.html">Nail Arts Kits</a></li>
                    <li><a href="./product.html">Nail Care</a></li>
                    <li><a href="./product.html">Nail Polish Remover</a></li>
                </ul>
                <ul>
                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                    <li><a href="./product.html">Face Brush</a></li>
                    <li><a href="./product.html">Eye Brush</a></li>
                    <li><a href="./product.html">Lip Brush</a></li>
                    <li><a href="./product.html">Brush Sets</a></li>
                    <li><a href="./product.html">Brush Cleaners</a></li>
                    <li><a href="./product.html">Sponges &Applicators</a></li>
                    <li><a href="./product.html">Eyelash Curlers</a></li>
                    <li><a href="./product.html">Tweezers</a></li>
                    <li><a href="./product.html">Sharpners</a></li>
                    <li><a href="./product.html">Mirrors</a></li>
                    <li><a href="./product.html">Makeup Pouches</a></li>
                    <br>
                    <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                </ul>
                <ul>
                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                    <li><a href="./product.html">Kay Beauty</a></li>
                    <li><a href="./product.html">Huda Beauty</a></li>
                    <li><a href="./product.html">Charlotte Tilbury</a></li>
                    <li><a href="./product.html">M.A.C</a></li>
                    <li><a href="./product.html">Maybelline New York</a></li>
                    <li><a href="./product.html">L'Oreal Paris</a></li>
                    <li><a href="./product.html">Lakme</a></li>
                    <li><a href="./product.html">Nykaa Cosmetics</a></li>
                    <li><a href="./product.html">Nyx Pro.Makeup</a></li>
                </ul>
                <ul>
                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                    <li><a href="./product.html">Combos @ Nykaa</a></li>
                    <li><a href="./product.html">New Launches</a></li>
                    <li><a href="./product.html">NFBA Nominees 2020</a></li>
                    <li><a href="./product.html">Gifts @ Nykaa</a></li>
                    <li><a href="./product.html">The Gift Store</a></li>
                    <br>
                    <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                    <li><a href="./product.html">Nude Lipstick</a></li>
                    <li><a href="./product.html">Matte Lipstick</a></li>
                    <li><a href="./product.html">Red Lipstick</a></li>
                    <li><a href="./product.html">Pink Lipstick</a></li>
                </ul>
            </div>
            </li>
            
            <li><a href="#">Skin</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="./product.html">Face Moisturizer & Day</a></li>
                        <li><a href="./product.html">Cream</a></li>
                        <li><a href="./product.html">Night Cream</a></li>
                        <li><a href="./product.html">Face Oils</a></li>
                        <li><a href="./product.html">Serums & Essence</a></li>
                        <li><a href="./product.html">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="./product.html">Face Wash</a></li>
                        <li><a href="./product.html">Cleanser</a></li>
                        <li><a href="./product.html">Micellar Water</a></li>
                        <li><a href="./product.html">Face Wipes</a></li>
                        <li><a href="./product.html">Makeup Remover</a></li>
                        <li><a href="./product.html">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="./product.html">Toner Under 1000</a></li>
                        <li><a href="./product.html">Face Wash For Oily Skin</a></li>
                        <li><a href="./product.html">Oil Free Face</a></li>
                        <li><a href="./product.html">Moisturizers</a></li>
                        <li><a href="./product.html">Lip Balm Under 500</a></li>
                        <li><a href="./product.html">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="./product.html">Sheet Masks</a></li>
                        <li><a href="./product.html">Sleeping Masks</a></li>
                        <li><a href="./product.html">Masks & Peels</a></li>
                        <li><a href="./product.html">Face Packs</a></li>
                        <li><a href="./product.html">Face Bleach</a></li>
                        <br>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="./product.html">Toners & Mists</a></li>
                        <li><a href="./product.html">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="./product.html">Lotions & Creams</a></li>
                        <li><a href="./product.html">Body Butter</a></li>
                        <li><a href="./product.html">Massage oils</a></li>
                        <li><a href="./product.html">Shower Gels & Body</a></li>
                        <li><a href="./product.html">Wash</a></li>
                        <li><a href="./product.html">Soaps</a></li>
                        <li><a href="./product.html">Scrubs & Loofahs</a></li>
                        <li><a href="./product.html">Bath Salts</a></li>
                        <br>
                        <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="./product.html">Hand Creams</a></li>
                        <li><a href="./product.html">Foot Creams</a></li>
                        <li><a href="./product.html">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="./product.html">Acne Spot Correctors</a></li>
                        <li><a href="./product.html">Nose Strips</a></li>
                        <li><a href="./product.html">Facial Peels</a></li>
                        <br>
                        <li><a href="./product.html" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="./product.html">Under Eye Creams & Serums</a></li>
                        <li><a href="./product.html">Eye Masks</a></li>
                        <br>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="./product.html">Lip Balm</a></li>
                        <li><a href="./product.html">Lip Scrubs</a></li>
                        <li><a href="./product.html">Lip Masks</a></li>
                        <br>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="./product.html">Kay Beauty</a></li>
                        <li><a href="./product.html">Huda Beauty</a></li>
                        <li><a href="./product.html">Charlotte Tilbury</a></li>
                        <li><a href="./product.html">M.A.C</a></li>
                        <li><a href="./product.html">Maybelline New York</a></li>
                        <li><a href="./product.html">L'Oreal Paris</a></li>
                        <li><a href="./product.html">Lakme</a></li>
                        <li><a href="./product.html">Nykaa Cosmetics</a></li>
                        <li><a href="./product.html">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="./product.html">Combos @ Nykaa</a></li>
                        <li><a href="./product.html">New Launches</a></li>
                        <li><a href="./product.html">NFBA Nominees 2020</a></li>
                        <li><a href="./product.html">Gifts @ Nykaa</a></li>
                        <li><a href="./product.html">The Gift Store</a></li>
                        <br>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="./product.html">Nude Lipstick</a></li>
                        <li><a href="./product.html">Matte Lipstick</a></li>
                        <li><a href="./product.html">Red Lipstick</a></li>
                        <li><a href="./product.html">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Hair</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hair Care</b></a></li>
                        <li><a href="./product.html">Shampoo</a></li>
                        <li><a href="./product.html">Dry Shampoo</a></li>
                        <li><a href="./product.html">Conditioner</a></li>
                        <li><a href="./product.html">Hair Oil</a></li>
                        <li><a href="./product.html">Hair Serum</a></li>
                        <li><a href="./product.html">Hair Creams & Masks</a></li>
                        <li><a href="./product.html">Hair Supplements</a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Accessories</b></a></li>
                        <li><a href="./product.html">Hair Brushes</a></li>
                        <li><a href="./product.html">Hair Combs</a></li>
                        <li><a href="./product.html">Dryers & Stylers</a></li>
                        <li><a href="./product.html">Straighteners</a></li>
                        <li><a href="./product.html">Rollers & Curlers</a></li>
                        <li><a href="./product.html">Hair Extensions</a></li>
                        <li><a href="./product.html">Hair Accessories</a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hair Styling</b></a></li>
                        <li><a href="./product.html">Hair Color</a></li>
                        <li><a href="./product.html">Hair Spray</a></li>
                        <li><a href="./product.html">Gels & Waxes</a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Hair Type</b></a></li>
                        <li><a href="./product.html">Straight</a></li>
                        <li><a href="./product.html">Curly & Wavy</a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Professional Brands</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Luxury Brand</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                        <li><a href="./product.html">Hairfall & Thinning</a></li>
                        <li><a href="./product.html">Dandruff</a></li>
                        <li><a href="./product.html">Dry & Frizzy Hair</a></li>
                        <li><a href="./product.html">Split Ends</a></li>
                        <li><a href="./product.html">Color Protection</a></li>
                        <li><a href="./product.html">Damaged Hair</a></li>
                        <li><a href="./product.html">Hair Growth</a></li>
                        <li><a href="./product.html">Curl Enhancing</a></li>
                        <li><a href="./product.html">Volume</a></li>
                        <li><a href="./product.html">Length & Shine</a></li>
                        <li><a href="./product.html">Bond Building</a></li>
                    </ul>
                    <ul>
                        <li class="Hair Kits & Combos"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hair Kits & Combos</b></a></li>
                        <li><a href="./product.html">Hair Kits</a></li>
                        <li><a href="./product.html">Hair Combos</a></li>
                    </ul>
                    <ul>
                        <li class="Top Brands"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="./product.html">Nykaa Naturals</a></li>
                        <li><a href="./product.html">L'Oreal Paris</a></li>
                        <li><a href="./product.html">Wella Professionals</a></li>
                        <li><a href="./product.html">L'Oreal Professionnel</a></li>
                        <li><a href="./product.html">BBlunt</a></li>
                        <li><a href="./product.html">Herbal Essences</a></li>
                        <li><a href="./product.html">Schwarzkopf</a></li>
                        <li><a href="./product.html">Professional</a></li>
                    </ul>
                    <ul>
                        <li class="Trending Searches"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="./product.html">Hair Growth Oil</a></li>
                        <li><a href="./product.html">Dandruff Shampoo</a></li>
                        <li><a href="./product.html">Castor Oil For Hair</a></li>
                        <li><a href="./product.html">Sulphate Free Shampoo</a></li>
                        <li><a href="./product.html">Hair Straightener Brush</a></li>
                    </ul>
                    <ul>
                        <li class="Quick Links"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="./product.html">Hair Combos</a></li>
                        <li><a href="./product.html">New Launches</a></li>
                        <li><a href="./product.html">NFBA Nominees 2022</a></li>
                        <li><a href="./product.html">Herbal Hair Care</a></li>
                        <li><a href="./product.html">Routine Finder</a></li>
                        <li><a href="./product.html">The Beauty Ingredient</a></li>
                        <li><a href="./product.html">Edit</a></li>
                        <li><a href="./product.html">The Safe Beauty Edit</a></li>
                        <li><a href="./product.html">The Gift Store</a></li>
                    </ul>
                </div>
               
            </li>

            <li><a href="#">Appliances</a>
                <div class="sub_menu">
                    <ul>
                        <li class="Hair Styling Tools"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hair Styling Tools</b></a></li>
                        <li><a href="./product.html">Hair Dryers</a></li>
                        <li><a href="./product.html">Straighteners</a></li>
                        <li><a href="./product.html">Straightening Brushes</a></li>
                        <li><a href="./product.html">Curling Iron/Stylers</a></li>
                        <li><a href="./product.html">Multi Stylers</a></li>
                        <li><a href="./product.html">Blow Brushes</a></li>
                    </ul>

                    <ul>
                        <li class="Pro Hair Styling"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Pro Hair Styling</b></a></li>
                        <li><a href="./product.html">Pro Hair Dryers</a></li>
                        <li><a href="./product.html">Pro Straighteners</a></li>
                        <li><a href="./product.html">Pro Curling Irons/Stylers</a></li>
                        <li><a href="./product.html">Pro Multi Stylers</a></li>
                    </ul>

                    <ul>
                        <li class="Hair Removal Tools"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hair Removal Tools</b></a></li>
                        <li><a href="./product.html">Epilators</a></li>
                        <li><a href="./product.html">Body Groomers</a></li>
                        <li><a href="./product.html">Bikini Trimmers</a></li>
                    </ul>

                    <ul>
                        <li class="Shaving Tools"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shaving Tools</b></a></li>
                        <li><a href="./product.html">Shavers For Men</a></li>
                        <li><a href="./product.html">Trimmers For Men</a></li>
                    </ul>

                    <ul>
                        <li class="Oral Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Oral Care</b></a></li>
                        <li><a href="./product.html">Electric Toothbrushes</a></li>
                        <li><a href="./product.html">Electric Flossers</a></li>
                    </ul>

                    <ul>
                        <li class="Face/Skin Tools"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Face/Skin Tools</b></a></li>
                        <li><a href="./product.html">Face Epilator</a></li>
                        <li><a href="./product.html">Dermarollers</a></li>
                        <li><a href="./product.html">Cleansing Brushes</a></li>
                        <li><a href="./product.html">Acne Removal</a></li>
                    </ul>

                    <ul>
                        <li class="Massage Tools"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Massage Tools</b></a></li>
                        <li><a href="./product.html">Massagers</a></li>
                    </ul>

                    <ul>
                        <li class="Foot Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Foot Care</b></a></li>
                    </ul>

                    <ul>
                        <li class="Top Brands"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="./product.html">FOREO</a></li>
                        <li><a href="./product.html">Philips</a></li>
                        <li><a href="./product.html">Alan Truman</a></li>
                        <li><a href="./product.html">Dyson</a></li>
                        <li><a href="./product.html">VEGA</a></li>
                        <li><a href="./product.html">Braun</a></li>
                        <li><a href="./product.html">Ikonic Professional</a></li>
                        <li><a href="./product.html">Nova</a></li>
                        <li><a href="./product.html">Flawless</a></li>
                    </ul>

                    <ul>
                        <li class="Quick Links"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="./product.html">Combos @ Nykaa</a></li>
                        <li><a href="./product.html">New Launches</a></li>
                        <li><a href="./product.html">NFBA Nominees 2022</a></li>
                        <li><a href="./product.html">Gifts @ Nykaa</a></li>
                        <li><a href="./product.html">Herbal Hair Care</a></li>
                        <li><a href="./product.html">Routine Finder</a></li>
                    </ul>

                </div>
            </li>
            
            <li><a href="#">Bath & Body</a>
                <div class="sub_menu">
                    <ul>
                        <li class="Bath & Shower"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Bath & Shower</b></a></li>
                        <li><a href="./product.html">Shower Gels & Body Wash</a></li>
                        <li><a href="./product.html">Body Scrubs & Exfoliants</a></li>
                        <li><a href="./product.html">Soaps</a></li>
                        <li><a href="./product.html">Bath Salts</a></li>
                    </ul>

                    <ul>
                        <li class="Body Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="./product.html">Body Lotions & Moisturizers</a></li>
                        <li><a href="./product.html">Body Butters</a></li>
                        <li><a href="./product.html">Talcum Powder</a></li>
                        <li><a href="./product.html">Massage Oils</a></li>
                        <li><a href="./product.html">Essential Oils</a></li>
                    </ul>

                    <ul>
                        <li class="Hands & Feet"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hands & Feet</b></a></li>
                        <li><a href="./product.html">Hand Wash</a></li>
                        <li><a href="./product.html">Hand Creams & Masks</a></li>
                        <li><a href="./product.html">Foot Care</a></li>
                    </ul>

                    <ul>
                        <li class="Feminine Hygiene"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Feminine Hygiene</b></a></li>
                        <li><a href="./product.html">Sanitary Napkins</a></li>
                        <li><a href="./product.html">Menstrual Cups</a></li>
                        <li><a href="./product.html">Tampons</a></li>
                        <li><a href="./product.html">Pantyliners</a></li>
                        <li><a href="./product.html">Period Panties</a></li>
                        <li><a href="./product.html">Intimate Care</a></li>
                        <li><a href="./product.html">Cotton Buds & Balls</a></li>
                        <li><a href="./product.html">Other Period Essentials</a></li>
                    </ul>

                    <ul>
                        <li class="Female Grooming"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Female Grooming</b></a></li>
                        <li><a href="./product.html">Body Razors & Cartridges</a></li>
                        <li><a href="./product.html">Face & Eyebrow Razors</a></li>
                        <li><a href="./product.html">Wax & Wax Strips</a></li>
                        <li><a href="./product.html">Hair Removal Creams</a></li>
                        <li><a href="./product.html">Epilators & Bikini Trimmers</a></li>
                        <li><a href="./product.html"><b>Pre & Post Wax Essentials</b></a></li>
                        <li><a href="./product.html">Deodorants/Roll-Ons</a></li>
                        <li><a href="./product.html">Body Mist/Spray</a></li>
                    </ul>

                    <ul>
                        <li class="Male Grooming"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Male Grooming</b></a></li>
                        <li><a href="./product.html">Razors & Cartridges</a></li>
                        <li><a href="./product.html">Shaving Cream, Foams & Gels</a></li>
                        <li><a href="./product.html"><b>Pre & Post Shaves</b></a></li>
                        <li><a href="./product.html">Shaving Brush</a></li>
                        <li><a href="./product.html">Shavers & Trimmers</a></li>
                        <li><a href="./product.html">Beard & Moustache Care</a></li>
                        <li><a href="./product.html">Intimate Care</a></li>
                        <li><a href="./product.html">Deodorants/Roll-Ons</a></li>
                        <li><a href="./product.html">Body Mist/Spray</a></li>
                        <li><a href="./product.html">Colognes</a></li>
                    </ul>

                    <ul>
                        <li class="Hygiene Essentials"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hygiene Essentials</b></a></li>
                    </ul>

                    <ul>
                        <li class="Oral Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Oral Care</b></a></li>
                        <li><a href="./product.html">Toothpaste</a></li>
                        <li><a href="./product.html">Electric Toothbrush</a></li>
                        <li><a href="./product.html">Manual Toothbrush</a></li>
                        <li><a href="./product.html">Mouthwash</a></li>
                        <li><a href="./product.html">Floss & Tongue Cleaners</a></li>
                    </ul>

                    <ul>
                        <li class="Tools & Accessories"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Tools & Accessories</b></a></li>
                        <li><a href="./product.html">Manicure Pedicure Kits</a></li>
                        <li><a href="./product.html">Loofahs</a></li>
                        <li><a href="./product.html"><b>Bath Accessories</b></a></li>
                        <li><a href="./product.html"><b>Others</b></a></li>
                    </ul>

                    <ul>
                        <li class="Kits & Combos"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="./product.html">Bath & Body Kits</a></li>
                        <li><a href="./product.html">Bath & Body Combos</a></li>
                    </ul>

                    <ul>
                        <li class="Top Brands"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="./product.html">Bath & Body Works</a></li>
                        <li><a href="./product.html">MCaffeine</a></li>
                        <li><a href="./product.html">NIVEA</a></li>
                        <li><a href="./product.html">The Body Shop</a></li>
                        <li><a href="./product.html">Vaseline</a></li>
                        <li><a href="./product.html">Dove</a></li>
                        <li><a href="./product.html">Wanderlust</a></li>
                        <li><a href="./product.html">Gillette Venus</a></li>
                        <li><a href="./product.html">Be Bodywise</a></li>
                        <li><a href="./product.html">Plum BodyLovin</a></li>
                        <li><a href="./product.html">Chemist At Play</a></li>
                        <li><a href="./product.html">Lux</a></li>
                        <li><a href="./product.html">Carmesi</a></li>
                    </ul>

                    <ul>
                        <li class="Quick Links"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="./product.html">New Launches</a></li>
                        <li><a href="./product.html">The Gift Store</a></li>
                        <li><a href="./product.html">Daily Essentials</a></li>
                    </ul>

                    <ul>
                        <li class="Trending Searches"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="./product.html">Body Wash</a></li>
                        <li><a href="./product.html">Body Lotions</a></li>
                        <li><a href="./product.html">Face Razors For Women</a></li>
                        <li><a href="./product.html">Sanitary Napkins</a></li>
                        <li><a href="./product.html">Body Scrubs</a></li>
                        <li><a href="./product.html">Deodorants</a></li>
                    </ul>

                </div>    
            </li>
            
            <li><a href="#">Natural</a>
                <div class="sub_menu">
                    <ul>
                        <li class="Skin"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Skin</b></a></li>
                        <li><a href="./product.html">Face Wash</a></li>
                        <li><a href="./product.html">Cleanser</a></li>
                        <li><a href="./product.html">Moisturizer</a></li>
                        <li><a href="./product.html">Face Cream</a></li>
                        <li><a href="./product.html">Face Mist</a></li>
                        <li><a href="./product.html">Facial Kits</a></li>
                        <li><a href="./product.html">Toner</a></li>
                        <li><a href="./product.html">Face Oils</a></li>
                        <li><a href="./product.html">Sunscreen</a></li>
                        <li><a href="./product.html">Night Cream</a></li>
                        <li><a href="./product.html">Day Cream</a></li>
                        <li><a href="./product.html">Under Eye Care</a></li>
                        <li><a href="./product.html">Face Bleach</a></li>
                        <li><a href="./product.html">Serums</a></li>
                    </ul>

                    <ul>
                        <li class="Skin"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Skin</b></a></li>
                        <li><a href="./product.html">Sheet Masks</a></li>
                        <li><a href="./product.html">Masks & Peels</a></li>
                        <li><a href="./product.html">Scrubs & Exfoliators</a></li>
                        <li><a href="./product.html">Face Tools</a></li>
                        <li><a href="./product.html">Face Gel</a></li>
                        <li><a href="./product.html">Lip Scrub</a></li>
                    </ul>

                    <ul>
                        <li class="Body Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="./product.html">Shower Gels & Body Wash</a></li>
                        <li><a href="./product.html">Soaps</a></li>
                        <li><a href="./product.html">Body Lotions</a></li>
                        <li><a href="./product.html">Body Scrubs</a></li>
                        <li><a href="./product.html">Bath Salts & Bath Bombs</a></li>
                        <li><a href="./product.html">Hands & Feet Care</a></li>
                        <li><a href="./product.html">Bath Tools & Accessories</a></li>
                        <li><a href="./product.html">Oral Care</a></li>
                    </ul>

                    <ul>
                        <li class="Hair"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hair</b></a></li>
                        <li><a href="./product.html">Shampoo & Cleanser</a></li>
                        <li><a href="./product.html">Conditioner</a></li>
                        <li><a href="./product.html">Hair Masks</a></li>
                        <li><a href="./product.html">Hair Oil</a></li>
                        <li><a href="./product.html">Hair Serum</a></li>
                        <li><a href="./product.html">Hair Color</a></li>
                        <li><a href="./product.html">Tools & Accessories</a></li>
                    </ul>

                    <ul>
                        <li class="Aromatherapy"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Aromatherapy</b></a></li>
                        <li><a href="./product.html">Massage Oils</a></li>
                        <li><a href="./product.html">Carrier Oils</a></li>
                        <li><a href="./product.html">Essential Oils</a></li>
                        <li><a href="./product.html">Candles</a></li>
                        <li><a href="./product.html">Diffuser</a></li>
                        <li><a href="./product.html">Incense Sticks</a></li>
                    </ul>

                    <ul>
                        <li class="Makeup"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Makeup</b></a></li>
                        <li><a href="./product.html">Lipstick</a></li>
                        <li><a href="./product.html">Kajal</a></li>
                        <li><a href="./product.html">Eyeliner</a></li>
                        <li><a href="./product.html">Mascara</a></li>
                        <li><a href="./product.html">Nail Polish</a></li>
                        <li><a href="./product.html">Lip Balm & Gloss</a></li>
                        <li><a href="./product.html">Foundation & Concealer</a></li>
                        <li><a href="./product.html">Blush & Highlighter</a></li>
                        <li><a href="./product.html">Makeup Remover</a></li>
                        <li><a href="./product.html">Tools & Brushes</a></li>
                    </ul>

                    <ul>
                        <li class="Trending Search"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Trending Search</b></a></li>
                        <li><a href="./product.html">Tea Tree Oil</a></li>
                        <li><a href="./product.html">Eucalyptus Oil</a></li>
                        <li><a href="./product.html">Rosemary Oil</a></li>
                        <li><a href="./product.html">Jojoba Oil</a></li>
                        <li><a href="./product.html">Peppermint Oil</a></li>
                    </ul>

                    <ul>
                        <li class="Top Brands"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="./product.html">Biotique</a></li>
                        <li><a href="./product.html">Lotus Herbals</a></li>
                        <li><a href="./product.html">The Body Shop</a></li>
                        <li><a href="./product.html">Nykaa Naturals</a></li>
                        <li><a href="./product.html">Kama Ayurveda</a></li>
                        <li><a href="./product.html">Forest Essentials</a></li>
                        <li><a href="./product.html">Khadi Natural</a></li>
                        <li><a href="./product.html">Himalaya</a></li>
                        <li><a href="./product.html">VLCC</a></li>
                    </ul>

                    <ul>
                        <li class="Baby Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Baby Care</b></a></li>
                    </ul>

                    <ul>
                        <li class="Types Of Skin"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Types Of Skin</b></a></li>
                        <li><a href="./product.html">Dry Skin</a></li>
                        <li><a href="./product.html">Normal Skin</a></li>
                        <li><a href="./product.html">Oily Skin</a></li>
                        <li><a href="./product.html">Combination Skin</a></li>
                    </ul>

                    <ul>
                        <li class="Shop By Concern"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                        <li><a href="./product.html">Tan Removal</a></li>
                        <li><a href="./product.html">Pigmentation</a></li>
                        <li><a href="./product.html">Acne Treatment</a></li>
                        <li><a href="./product.html">Skin Lightening</a></li>
                        <li><a href="./product.html">Anti Aging</a></li>
                        <li><a href="./product.html">Dark Circles</a></li>
                        <li><a href="./product.html">Hairfall</a></li>
                        <li><a href="./product.html">Dandruff</a></li>
                        <li><a href="./product.html">Dry & Frizzy Hair</a></li>
                    </ul>

                    <ul>
                        <li class="QUICK LINKS"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>QUICK LINKS</b></a></li>
                        <li><a href="./product.html">New Launches</a></li>
                        <li><a href="./product.html">Combos @ Nykaa</a></li>
                        <li><a href="./product.html">Gifts @ Nykaa</a></li>
                        <li><a href="./product.html">The Safe (And Clean) Beauty Edit</a></li>
                    </ul>

                </div>
            </li>
            
            <li><a href="#">Mom & Baby</a>
                <div class="sub_menu">
                   <ul>
                        <li class="Baby Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Baby Care</b></a></li>
                        <li><a href="./product.html">Body Wash & Soaps</a></li>
                        <li><a href="./product.html">Baby Oil</a></li>
                        <li><a href="./product.html">Hair Oil</a></li>
                        <li><a href="./product.html">Lotions & Creams</a></li>
                        <li><a href="./product.html">Baby Powder</a></li>
                        <li><a href="./product.html">Shampoo & Conditioner</a></li>
                        <li><a href="./product.html">Sunscreen</a></li>
                        <li><a href="./product.html">Wipes & Buds</a></li>
                        <li><a href="./product.html">Teeth & Dental Care</a></li>
                        <li><a href="./product.html">Rash Cream</a></li>
                        <li><a href="./product.html">Diapers</a></li>
                        <li><a href="./product.html">Diaper Accessories</a></li>
                        <li><a href="./product.html">Bath Accessories</a></li>
                        <li><a href="./product.html">Baby Grooming</a></li>
                        <li><a href="./product.html">Baby Bedding</a></li>
                    </ul>

                    <ul>
                        <li class="Kids Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Kids Care</b></a></li>
                        <li><a href="./product.html">Nutritional Supplement</a></li>
                        <li><a href="./product.html">Body Wash & Soaps</a></li>
                        <li><a href="./product.html">Lotions & Creams</a></li>
                        <li><a href="./product.html">Hair Care</a></li>
                        <li><a href="./product.html">Sunscreen</a></li>
                        <li><a href="./product.html">Dental Care</a></li>
                        <li><a href="./product.html">Kids Makeup</a></li>
                    </ul>

                    <ul>
                        <li class="Maternity Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Maternity Care</b></a></li>
                        <li><a href="./product.html">Stretch Mark Creams & Oils</a></li>
                        <li><a href="./product.html">Breast Firming Gels & Creams</a></li>
                        <li><a href="./product.html">Nipple Creams</a></li>
                        <li><a href="./product.html">Nutritional Supplements</a></li>
                    </ul>

                    <ul>
                        <li class="Nursing & Feeding"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Nursing & Feeding</b></a></li>
                        <li><a href="./product.html">Feeding Bottle & Nipples</a></li>
                        <li><a href="./product.html">Teethers & Soothers</a></li>
                        <li><a href="./product.html">Breast Pumps</a></li>
                        <li><a href="./product.html">Breast Pads</a></li>
                        <li><a href="./product.html">Cleaning & Feeding Accessories</a></li>
                        <li><a href="./product.html">Bibs</a></li>
                        <li><a href="./product.html">Sippers & Cups</a></li>
                    </ul>

                    <ul>
                        <li class="Health & Safety"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Health & Safety</b></a></li>
                        <li><a href="./product.html">Nose & Ear Care</a></li>
                        <li><a href="./product.html">Gripe Water & Tummy Roll On</a></li>
                        <li><a href="./product.html">Detergents & Cleansers</a></li>
                        <li><a href="./product.html">Handwash & Sanitizer</a></li>
                        <li><a href="./product.html">Mosquito Repellent</a></li>
                    </ul>

                    <ul>
                        <li class="Maternity Wear"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Maternity Wear</b></a></li>
                        <li><a href="./product.html">Maternity Bra</a></li>
                        <li><a href="./product.html">Maternity Dress</a></li>
                        <li><a href="./product.html">Maternity Tops</a></li>
                    </ul>

                    <ul>
                        <li class="Baby Toys"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Baby Toys</b></a></li>
                    </ul>

                    <ul>
                        <li class="Gift Sets"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                    </ul>

                    <ul>
                        <li class="Shop By Concerns"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Concerns</b></a></li>
                        <li><a href="./product.html">Baby Dry Skin</a></li>
                        <li><a href="./product.html">Cracked Nipple Cream</a></li>
                        <li><a href="./product.html">Scalp Treatment</a></li>
                        <li><a href="./product.html">Coconut Oil</a></li>
                        <li><a href="./product.html">Almond Oil</a></li>
                        <li><a href="./product.html">Heat Rash</a></li>
                        <li><a href="./product.html">Body Toning & Firming</a></li>
                        <li><a href="./product.html">Baby Skin Concerns</a></li>
                    </ul>

                    <ul>
                        <li class="Combos @ Nykaa"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Combos @ Nykaa</b></a></li>
                    </ul>

                </div>    
            </li>
            
            <li><a href="#">Health & Wellness</a>
                <div class="sub_menu">
                    <ul>
    <li class="Health Supplements"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Health Supplements</b></a></li>
    <li><a href="./product.html">Multivitamins</a></li>
    <li><a href="./product.html">Calcium & Vitamin D</a></li>
    <li><a href="./product.html">Magnesium & Zinc</a></li>
    <li><a href="./product.html">Omega 3 & Fish Oil</a></li>
    <li><a href="./product.html">Immunity Boosters & Vitamin C</a></li>
    <li><a href="./product.html">Other Supplements</a></li>
    <li><a href="./product.html">Melatonin (Sleep Care)</a></li>
    <li><a href="./product.html">Brain Boost</a></li>
    <li><a href="./product.html">Eye Care (Lutein)</a></li>
    <li><a href="./product.html">Gut Health</a></li>
</ul>

<ul>
    <li class="Beauty Supplements"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Beauty Supplements</b></a></li>
    <li><a href="./product.html">Collagen</a></li>
    <li><a href="./product.html">Biotin</a></li>
    <li><a href="./product.html">Vitamin E</a></li>
    <li><a href="./product.html">Glutathione</a></li>
    <li><a href="./product.html">Other Beauty Supplements</a></li>
</ul>

<ul>
    <li class="Sports Nutrition"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Sports Nutrition</b></a></li>
    <li><a href="./product.html">Whey Protein</a></li>
    <li><a href="./product.html">Plant Protein</a></li>
    <li><a href="./product.html">BCAA & Other Muscle Support</a></li>
    <li><a href="./product.html">Protein & Energy Bars</a></li>
    <li><a href="./product.html">Protein Snacks</a></li>
    <li><a href="./product.html">Creatine</a></li>
    <li><a href="./product.html">L Glutamine</a></li>
    <li><a href="./product.html">Mass Gainer</a></li>
</ul>

<ul>
    <li class="Weight Management"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Weight Management</b></a></li>
    <li><a href="./product.html">Weight Gain</a></li>
    <li><a href="./product.html">Apple Cider Vinegar (Weight Loss)</a></li>
    <li><a href="./product.html">Green Tea - Beverage</a></li>
    <li><a href="./product.html">Green Coffee - Beverage</a></li>
    <li><a href="./product.html">Fat Burner</a></li>
    <li><a href="./product.html">Slimming Shakes & Juices</a></li>
    <li><a href="./product.html">Sugar Substitutes</a></li>
</ul>

<ul>
    <li class="Hydration"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hydration</b></a></li>
    <li><a href="./product.html">Health Drinks</a></li>
</ul>

<ul>
    <li class="Health Foods"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Health Foods</b></a></li>
    <li><a href="./product.html">Edible Honey</a></li>
    <li><a href="./product.html">Dry Fruits, Nuts & Berries</a></li>
    <li><a href="./product.html">Edible Seeds</a></li>
    <li><a href="./product.html">Oils & Ghee</a></li>
    <li><a href="./product.html">Black Tea & Coffee</a></li>
    <li><a href="./product.html">Herbal Teas</a></li>
    <li><a href="./product.html">Breakfast Cereals</a></li>
    <li><a href="./product.html">Peanut Butter</a></li>
    <li><a href="./product.html">Other Health Foods</a></li>
</ul>

<ul>
    <li class="Sports & Fitness"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Sports & Fitness</b></a></li>
    <li><a href="./product.html">Cardio Equipment</a></li>
    <li><a href="./product.html">Strength Training</a></li>
    <li><a href="./product.html">Fitness Accessories</a></li>
</ul>

<ul>
    <li class="Wellness Equipment"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Wellness Equipment</b></a></li>
    <li><a href="./product.html">Weighing Scales</a></li>
    <li><a href="./product.html">Fitness Supports & Braces</a></li>
</ul>

<ul>
    <li class="Pain Relief"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Pain Relief</b></a></li>
</ul>

<ul>
    <li class="Muscular & Ortho"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Muscular & Ortho</b></a></li>
    <li><a href="./product.html">Period Cramps</a></li>
    <li><a href="./product.html">Other Pain</a></li>
</ul>

<ul>
    <li class="Health & Wellness Kits & Combos"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Health & Wellness Kits & Combos</b></a></li>
    <li><a href="./product.html">Health & Wellness Kits</a></li>
    <li><a href="./product.html">Health & Wellness Combos</a></li>
    <li><a href="./product.html">Pregnancy Kits</a></li>
</ul>

<ul>
    <li class="Watches"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Watches</b></a></li>
    <li><a href="./product.html">Smart Wearables</a></li>
</ul>

<ul>
    <li class="Ayurveda & Herbs"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Ayurveda & Herbs</b></a></li>
    <li><a href="./product.html">Ashwagandha</a></li>
    <li><a href="./product.html">Neem (Powder & Tablets)</a></li>
    <li><a href="./product.html">Amla Juice</a></li>
    <li><a href="./product.html">Aloe Vera (Tablets & Juice)</a></li>
    <li><a href="./product.html">Milk Thistle (Liver)</a></li>
    <li><a href="./product.html">Wheatgrass (Powder & Juice)</a></li>
    <li><a href="./product.html">Tulsi (Tablets & Juices)</a></li>
    <li><a href="./product.html">Giloy & Guduchi (Tablets & Juice)</a></li>
    <li><a href="./product.html">Turmeric (Tablets & Juice)</a></li>
    <li><a href="./product.html">Spirulina & Moringa (Tablets & Powder)</a></li>
    <li><a href="./product.html">Chyavanprash</a></li>
    <li><a href="./product.html">Shilajit</a></li>
    <li><a href="./product.html">Other Herbal Supplements</a></li>
</ul>

<ul>
    <li class="Shop By Concern"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
    <li><a href="./product.html">Diabetes</a></li>
    <li><a href="./product.html">Digestion (Gut Health)</a></li>
    <li><a href="./product.html">Organs - Liver, Heart, Kidney</a></li>
    <li><a href="./product.html">Safety & First Aid</a></li>
    <li><a href="./product.html">Weakness & Vitality</a></li>
    <li><a href="./product.html">Kids Nutrition</a></li>
    <li><a href="./product.html">Mental Wellness</a></li>
    <li><a href="./product.html">Blood Pressure</a></li>
    <li><a href="./product.html">Hormonal Balance</a></li>
    <li><a href="./product.html">Calm & Sleep</a></li>
</ul>

                </div>
            </li>
            
            <li><a href="#">Men</a>
                <div class="sub_menu">
<ul>
    <li class="Shaving"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shaving</b></a></li>
    <li><a href="./product.html">Razors & Cartridges</a></li>
    <li><a href="./product.html">Shavers</a></li>
    <li><a href="./product.html">Trimmers</a></li>
    <li><a href="./product.html">Shaving Creams</a></li>
    <li><a href="./product.html">Shaving Foams</a></li>
    <li><a href="./product.html">Shaving Gels</a></li>
    <li><a href="./product.html">Pre & Post Shaves</a></li>
    <li><a href="./product.html">Aftershave Lotion</a></li>
    <li><a href="./product.html">Shaving Brushes</a></li>
</ul>

<ul>
    <li class="Beard Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Beard Care</b></a></li>
    <li><a href="./product.html">Beard Oil</a></li>
    <li><a href="./product.html">Beard Butter</a></li>
    <li><a href="./product.html">Beard Softener</a></li>
    <li><a href="./product.html">Beard Wash</a></li>
    <li><a href="./product.html">Beard Wax</a></li>
    <li><a href="./product.html">Moustache Oil</a></li>
    <li><a href="./product.html">Beard Comb</a></li>
    <li><a href="./product.html">Moustache Wax</a></li>
    <li><a href="./product.html">Beard Kits</a></li>
    <li><a href="./product.html">Beard Gel</a></li>
</ul>

<ul>
    <li class="Beard Balm"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Beard Balm</b></a></li>
    <li><a href="./product.html">Beard Cream</a></li>
</ul>

<ul>
    <li class="Beard Serum"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Beard Serum</b></a></li>
    <li><a href="./product.html">Beard Mist</a></li>
    <li><a href="./product.html">Beard Colour</a></li>
    <li><a href="./product.html">Beard Shampoo</a></li>
</ul>

<ul>
    <li class="Hair Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Hair Care</b></a></li>
    <li><a href="./product.html">Shampoo</a></li>
    <li><a href="./product.html">Conditioner</a></li>
    <li><a href="./product.html">Hair Styling</a></li>
    <li><a href="./product.html">Hair Color</a></li>
    <li><a href="./product.html">Hair Oils</a></li>
    <li><a href="./product.html">Professional Products</a></li>
</ul>

<ul>
    <li class="Skin Care"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Skin Care</b></a></li>
    <li><a href="./product.html">Face Wash</a></li>
    <li><a href="./product.html">Moisturizers</a></li>
    <li><a href="./product.html">Sunscreen</a></li>
    <li><a href="./product.html">Masks & Peels</a></li>
    <li><a href="./product.html">Scrubs & Exfoliators</a></li>
    <li><a href="./product.html">Fairness</a></li>
</ul>

<ul>
    <li class="Bath & Body"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Bath & Body</b></a></li>
    <li><a href="./product.html">Bath/Shower Gels</a></li>
    <li><a href="./product.html">Soaps</a></li>
    <li><a href="./product.html">Body Scrubs</a></li>
    <li><a href="./product.html">Talc</a></li>
    <li><a href="./product.html">Dental Care</a></li>
    <li><a href="./product.html">Body Lotions</a></li>
    <li><a href="./product.html">Intimate Care</a></li>
</ul>

<ul>
    <li class="Grooming Kits"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Grooming Kits</b></a></li>
</ul>

<ul>
    <li class="Fragrance"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Fragrance</b></a></li>
    <li><a href="./product.html">Deodorants/Roll Ons</a></li>
    <li><a href="./product.html">Colognes & Perfumes (EDT & EDP)</a></li>
    <li><a href="./product.html">Luxe Fragrances</a></li>
</ul>

<ul>
    <li class="Shop By Concern"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
    <li><a href="./product.html">Anti Dandruff</a></li>
    <li><a href="./product.html">Anti Hairfall</a></li>
    <li><a href="./product.html">Scalp Treatment</a></li>
    <li><a href="./product.html">Anti Acne</a></li>
    <li><a href="./product.html">Anti Ageing</a></li>
</ul>

<ul>
    <li class="Wellness"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Wellness</b></a></li>
    <li><a href="./product.html">Sexual Wellness</a></li>
    <li><a href="./product.html">Health Supplements</a></li>
    <li><a href="./product.html">Weight Management</a></li>
    <li><a href="./product.html">Sports Nutrition</a></li>
</ul>

<ul>
    <li class="Top Brands"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
    <li><a href="./product.html">Beardo</a></li>
    <li><a href="./product.html">Gilette</a></li>
    <li><a href="./product.html">Livon</a></li>
    <li><a href="./product.html">Nivea</a></li>
    <li><a href="./product.html">Park Avenue</a></li>
</ul>

<ul>
    <li class="Quick Links"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
    <li><a href="./product.html">Combos @ Nykaa</a></li>
    <li><a href="./product.html">New Launches</a></li>
    <li><a href="./product.html">Gifts @ Nykaa</a></li>
    <li><a href="./product.html">Routine Finder</a></li>
    <li><a href="./product.html">The Gift Store</a></li>
</ul>

                </div>    
            </li>
            
            <li><a href="#">Fragrance</a>
                <div class="sub_menu">
<ul>
    <li class="Womens Fragrance"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Womens Fragrance</b></a></li>
    <li><a href="./product.html">Perfumes (EDT / EDP)</a></li>
    <li><a href="./product.html">Body Mists / Sprays</a></li>
</ul>

<ul>
    <li class="Mens Fragrance"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Mens Fragrance</b></a></li>
    <li><a href="./product.html">Perfumes (EDT / EDP)</a></li>
</ul>

<ul>
    <li class="Shop By Fragrance"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Shop By Fragrance</b></a></li>
    <li><a href="./product.html">Family</a></li>
    <li><a href="./product.html">Earthy & Woody</a></li>
    <li><a href="./product.html">Floral</a></li>
    <li><a href="./product.html">Fresh & Aquatic</a></li>
    <li><a href="./product.html">Spicy & Warm</a></li>
    <li><a href="./product.html">Oud Collection</a></li>
    <li><a href="./product.html">Fruity</a></li>
</ul>

<ul>
    <li class="Aromatherapy"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Aromatherapy</b></a></li>
    <li><a href="./product.html">Candles</a></li>
    <li><a href="./product.html">Diffuser</a></li>
    <li><a href="./product.html">Incense Sticks</a></li>
</ul>

<ul>
    <li class="Giftsets & Combos"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Giftsets & Combos</b></a></li>
</ul>

<ul>
    <li class="Top Brands"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
    <li><a href="./product.html">Dior</a></li>
    <li><a href="./product.html">Gucci</a></li>
    <li><a href="./product.html">Yves Saint Laurent</a></li>
    <li><a href="./product.html">Bvlgari</a></li>
    <li><a href="./product.html">Davidoff</a></li>
    <li><a href="./product.html">Versace</a></li>
    <li><a href="./product.html">Giorgio Armani</a></li>
    <li><a href="./product.html">Bella Vita Organic</a></li>
    <li><a href="./product.html">Plum</a></li>
    <li><a href="./product.html">Victoria Secret</a></li>
    <li><a href="./product.html">Bath And Body Works</a></li>
    <li><a href="./product.html">Nykaa Perfumery</a></li>
    <li><a href="./product.html">Renee</a></li>
    <li><a href="./product.html">Carlton London Perfume</a></li>
    <li><a href="./product.html">Engage</a></li>
</ul>

<ul>
    <li class="Premium And Designer Brands"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Premium And Designer Brands</b></a></li>
    <li><a href="./product.html">Explore All</a></li>
    <li><a href="./product.html">Dior</a></li>
    <li><a href="./product.html">Hermès</a></li>
    <li><a href="./product.html">Jo Malone London</a></li>
    <li><a href="./product.html">Guerlain</a></li>
    <li><a href="./product.html">BVLGARI</a></li>
    <li><a href="./product.html">Salvatore Ferragamo</a></li>
    <li><a href="./product.html">Calvin Klein</a></li>
    <li><a href="./product.html">Giorgio Armani</a></li>
    <li><a href="./product.html">Davidoff</a></li>
    <li><a href="./product.html">Paco Rabanne</a></li>
    <li><a href="./product.html">Carolina Herrera</a></li>
    <li><a href="./product.html">Yves Saint Laurent</a></li>
    <li><a href="./product.html">Elie Saab</a></li>
</ul>

<ul>
    <li class="Dolce&Gabbana"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Dolce&Gabbana</b></a></li>
    <li><a href="./product.html">Narciso Rodriguez</a></li>
    <li><a href="./product.html">Hugo Boss</a></li>
    <li><a href="./product.html">Montblanc</a></li>
</ul>

<ul>
    <li class="Quick Links"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
    <li><a href="./product.html">New Launches</a></li>
    <li><a href="./product.html">The Gift Store</a></li>
</ul>

                </div>
            </li>
            
            <li><a href="#">Lingerie & Accessories</a>
                <div class="sub_menu">
<ul>
    <li class="Lingerie"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Lingerie</b></a></li>
    <li><a href="./product.html">Bras</a></li>
    <li><a href="./product.html">Underwear</a></li>
    <li><a href="./product.html">Sleep & Lounge</a></li>
    <li><a href="./product.html">Shapewear</a></li>
    <li><a href="./product.html">Swimwear</a></li>
    <li><a href="./product.html">Maternity Wear</a></li>
    <li><a href="./product.html">Activewear</a></li>
</ul>

<ul>
    <li class="Watches"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Watches</b></a></li>
    <li><a href="./product.html">Smart Watches & Activity Tracker</a></li>
</ul>

<ul>
    <li class="Sunglasses"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Sunglasses</b></a></li>
</ul>

<ul>
    <li class="Bags"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Bags</b></a></li>
    <li><a href="./product.html">Sling Bags</a></li>
    <li><a href="./product.html">Handbags</a></li>
    <li><a href="./product.html">Wallets</a></li>
    <li><a href="./product.html">Tote Bags</a></li>
    <li><a href="./product.html">Backpacks & Duffel Bags</a></li>
    <li><a href="./product.html">Satchels</a></li>
    <li><a href="./product.html">Clutches</a></li>
    <li><a href="./product.html">Laptop Bags & Sleeves</a></li>
    <li><a href="./product.html">Makeup Pouches & Vanity Kits</a></li>
    <li><a href="./product.html">Batuas & Potlis</a></li>
</ul>

<ul>
    <li class="Footwear"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Footwear</b></a></li>
    <li><a href="./product.html">Sports Shoes & Sneakers</a></li>
    <li><a href="./product.html">Sandals</a></li>
    <li><a href="./product.html">Heels</a></li>
    <li><a href="./product.html">Flats</a></li>
    <li><a href="./product.html">Flip Flops</a></li>
    <li><a href="./product.html">Wedges</a></li>
    <li><a href="./product.html">Boots</a></li>
    <li><a href="./product.html">Jutttis</a></li>
    <li><a href="./product.html">Kolhapuris</a></li>
    <li><a href="./product.html">Stilletos</a></li>
    <li><a href="./product.html">Loafers</a></li>
</ul>

<ul>
    <li class="Jewellery"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Jewellery</b></a></li>
    <li><a href="./product.html">Earrings</a></li>
    <li><a href="./product.html">Necklaces</a></li>
    <li><a href="./product.html">Jewellery Sets</a></li>
    <li><a href="./product.html">Maang Tikka</a></li>
    <li><a href="./product.html">Bracelets & Bangles</a></li>
    <li><a href="./product.html">Rings</a></li>
    <li><a href="./product.html">Mangalsutra</a></li>
    <li><a href="./product.html">Anklets</a></li>
</ul>

<ul>
    <li class="Home"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Home</b></a></li>
    <li><a href="./product.html">Decor</a></li>
    <li><a href="./product.html">Bedding</a></li>
    <li><a href="./product.html">Bath</a></li>
    <li><a href="./product.html">Storage</a></li>
    <li><a href="./product.html">Home Essentials</a></li>
</ul>

<ul>
    <li class="Featured Brands"><a href="./product.html" style="color: rgb(46, 45, 45);"><b>Featured Brands</b></a></li>
    <li><a href="./product.html">NYKD By Nykaa</a></li>
    <li><a href="./product.html">Puma</a></li>
    <li><a href="./product.html">Jockey</a></li>
    <li><a href="./product.html">Zivame</a></li>
    <li><a href="./product.html">Pipa Bella By Nykaa</a></li>
    <li><a href="./product.html">Fashion</a></li>
    <li><a href="./product.html">Accessorize London</a></li>
    <li><a href="./product.html">Shoetopia</a></li>
    <li><a href="./product.html">Twenty Dresses</a></li>
    <li><a href="./product.html">NFI Essentials</a></li>
    <li><a href="./product.html">Enamor</a></li>
    <li><a href="./product.html">Titan</a></li>
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
                            <li><a href="./product.html"></a>OFFERS</a></li>
                            <li><a href="./product.html"></a>Makeup</a></li>
                            <li><a href="./product.html"></a>Skin</a></li>
                            <li><a href="./product.html"></a>Hair</a></li>
                            <li><a href="./product.html"></a>Bath & Body</a></li>
                            <li><a href="./product.html"></a>Fragrance</a></li>
                            <li><a href="./product.html"></a>Appliances</a></li>
                            <li><a href="./product.html"></a>Nykaa Luxe</a></li>
                            <li><a href="./product.html"></a>Natural</a></li>
                            <li><a href="./product.html"></a>Mom & Baby</a></li>
                            <li><a href="./product.html"></a>Men's Store</a></li>
                            <li><a href="./product.html"></a>Health & Wellness</a></li>
                            <li><a href="./product.html"></a>Pop Ups</a></li>
                            <li><a href="./product.html"></a>Covid & Home Essentials</a></li>
                            <li><a href="./product.html"></a>Nykaa Network</a></li>
                            <li><a href="./product.html"></a>Beauty Advice</a></li>
                            <li><a href="./product.html"></a>Trending Searches</a></li>
                            <li><a href="./product.html"></a>Beauty Services</a></li>
                            <li><a href="./product.html"></a>Gift Card</a></li>
                        </ul>
                    </div>
                    
                </p>
            </li>
            <li>
                <p >Brand
                    <div class="sub_menu_3">
                        <ul>
                            <li><p style=" color: black;font-weight: 600;">Top Brands</p></li>
                                    <li><a href="./product.html">Maybelline New York</a></li>
                                    <li><a href="./product.html">Lakme</a></li>
                                    <li><a href="./product.html">Nykaa Cosmetics</a></li>
                                    <li><a href="./product.html">M.A.C</a></li>
                                    <li><a href="./product.html">The Face Shop</a></li>
                                    <li><a href="./product.html">L'Oreal Paris</a></li>
                                    <li><a href="./product.html">Nyka Naturals</a></li>
                                    <li><a href="./product.html">Biotique</a></li>
                                    <li><a href="./product.html">Huda Beauty</a></li>
                                    <li><a href="./product.html">Kama Ayurveda</a></li>

                            <li><p style=" color: black;font-weight: 600;">#</p></li>
                                    <li><a href="./product.html">18m32</a></li>
                                    <li><a href="./product.html">2.Oh</a></li>
                                    <li><a href="./product.html">23 Yards</a></li>
                                    <li><a href="./product.html">24 Mantra</a></li>
                                    <li><a href="./product.html">3INA</a></li>

                            <li><p style=" color: black;font-weight: 600;">A</p></li>
                                    <li><a href="./product.html">A Clutch Story</a></li>
                                    <li><a href="./product.html">A Fragrance Story</a></li>
                                    <li><a href="./product.html">A'kin</a></li>
                                    <li><a href="./product.html">Adiva</a></li>
                                    <li><a href="./product.html">Abena</a></li>
                            
                            <li><p style=" color: black;font-weight: 600;">B</p></li>
                                    <li><a href="./product.html">Babila</a></li>
                                    <li><a href="./product.html">Baby Moo</a></li>
                                    <li><a href="./product.html">Babyliss</a></li>
                                    <li><a href="./product.html">Babymama</a></li>
                                    <li><a href="./product.html">Bajaj</a></li>  

                           <li><p style=" color: black;font-weight: 600;">C</p></li>
                                    <li><a href="./product.html">Callesta</a></li>
                                    <li><a href="./product.html">Calvadoss</a></li>
                                    <li><a href="./product.html">Calvin Klein</a></li>
                                    <li><a href="./product.html">Campus</a></li>
                                    <li><a href="./product.html">Candy Skin</a></li>                                       
                            
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
const links = document.querySelectorAll("li a");

// Loop through each 'a' tag and set the 'href' attribute to './product.html'
links.forEach((link) => {
  link.href = "./product.html";
});
