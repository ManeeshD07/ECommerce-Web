import pic from "../assets/Pic1.jpg"
import obj1 from "../assets/obj1.jpg"
import obj2 from "../assets/obj2.jpg"
import obj3 from "../assets/obj3.jpg"
import obj4 from "../assets/obj4.jpg"
import obj5 from "../assets/obj5.jpg"

const NewArrival = () => {
    return(
        <div >
        <img src={pic}></img>
        <div className="font-custom m-28 items-center">
            <h4 className="text-center text-3xl font-bold pb-6 tracking-widest">NEW ARRIVAL</h4>
            <p className="font-para tracking-wide text-center">donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt</p>
        </div>
        <div class="grid grid-cols-4 gap-4 m-28 ">
                <div>
                    <h4 className="font-para font-bold text-2xl text-center mb-5 tracking-widest">BAG</h4>
                    <a class="relative block bg-white group" 
                        href="##">
                        <img class=" inset-0 object-cover 
                                     group-hover:opacity-50"
                            src={obj1} />
                        <div class="relative p-3">
                                <div class="transition-all transform 
                                    translate-y-8 opacity-0 
                                    group-hover:opacity-100 
                                    group-hover:translate-y-0">
                                    <div class="pb-2">
                                        <p class="text-lg text-black font-para text-center">donec massa sapien faucibus</p>
                                        <p className="font-custom tracking-wide font-extrabold px-4 py-4 text-center">$ 299</p>
                                    </div>
                                </div>
                        </div>
                    </a>
                </div>
                <div>
                    <h4 className="font-para font-bold text-2xl text-center mb-5 tracking-widest">SHIRT</h4>
                    <a class="relative block bg-white group" 
                        href="##">
                        <img class=" inset-0 object-cover 
                                     group-hover:opacity-50"
                            src={obj2} />
                        <div class="relative p-3">
                                <div class="transition-all transform 
                                    translate-y-8 opacity-0 
                                    group-hover:opacity-100 
                                    group-hover:translate-y-0">
                                    <div class="pb-2">
                                        <p class="text-lg text-black font-para text-center">donec massa sapien faucibus</p>
                                        <p className="font-custom tracking-wide font-extrabold px-4 py-4 text-center">$ 299</p>
                                    </div>
                                </div>
                        </div>
                    </a>
                </div>
                <div>
                    <h4 className="font-para font-bold text-2xl text-center mb-5 tracking-widest">BAG-2</h4>
                    <a class="relative block bg-white group" 
                        href="##">
                        <img class=" inset-0 object-cover 
                                     group-hover:opacity-50"
                            src={obj3} />
                        <div class="relative p-3">
                                <div class="transition-all transform 
                                    translate-y-8 opacity-0 
                                    group-hover:opacity-100 
                                    group-hover:translate-y-0">
                                    <div class="pb-2">
                                        <p class="text-lg text-black font-para text-center">donec massa sapien faucibus</p>
                                        <p className="font-custom tracking-wide font-extrabold px-4 py-4 text-center">$ 299</p>
                                    </div>
                                </div>
                        </div>
                    </a>
                </div>
                <div>
                    <h4 className="font-para font-bold text-2xl text-center mb-5 tracking-widest">WATCH</h4>
                    <a class="relative block bg-white group" 
                        href="##">
                        <img class=" inset-0 object-cover 
                                     group-hover:opacity-50"
                            src={obj4} />
                        <div class="relative p-3">
                                <div class="transition-all transform 
                                    translate-y-8 opacity-0 
                                    group-hover:opacity-100 
                                    group-hover:translate-y-0">
                                    <div class="pb-2">
                                        <p class="text-lg text-black font-para text-center">donec massa sapien faucibus</p>
                                        <p className="font-custom tracking-wide font-extrabold px-4 py-4 text-center">$ 299</p>
                                    </div>
                                </div>
                        </div>
                    </a>
                </div>
                <div>
                    <h4 className="font-para font-bold text-2xl text-center mb-5 tracking-widest">SHOES</h4>
                    <a class="relative block bg-white group" 
                        href="##">
                        <img class=" inset-0 object-cover 
                                     group-hover:opacity-50"
                            src={obj5} />
                        <div class="relative p-3">
                                <div class="transition-all transform 
                                    translate-y-8 opacity-0 
                                    group-hover:opacity-100 
                                    group-hover:translate-y-0">
                                    <div class="pb-2">
                                        <p class="text-lg text-black font-para text-center">donec massa sapien faucibus</p>
                                        <p className="font-custom tracking-wide font-extrabold px-4 py-4 text-center">$ 299</p>
                                    </div>
                                </div>
                        </div>
                    </a>
                </div>
        </div>
        </div>
        
    )
}

export default NewArrival;