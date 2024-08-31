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
            
            <li><a href="#">Appliances</a>
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
            
            <li><a href="#">Bath & Body</a>
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
            
            <li><a href="#">Natural</a>
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
            
            <li><a href="#">Mom & Baby</a>
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
            
            <li><a href="#">Health & Wellness</a>
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
            
            <li><a href="#">Men</a>
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
            
            <li><a href="#">Fragrance</a>
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
                    </ul>./product.html
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
            
            <li><a href="#">Pop Ups</a>
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
const links = document.querySelectorAll('li a');

  // Loop through each 'a' tag and set the 'href' attribute to './product.html'
  links.forEach(link => {
    link.href = "./product.html";
  });