import { arrowRight } from "../assets/icons"
import { offer, shoe8 , shoe4} from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 " >
        <img src={shoe4} width={773} height={687} className=" object-contain w-full" />
      </div>
      
     <div className="flex flex-1 flex-col ">
      <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg" >
          <span className="text-coral-red"> Special</span> Offer
      </h2>

      <p className="mt-4 lg:max-w-lg info-text">
        Elevate your shoe collection with our unbeatable offer. From classic designs to trendy must-haves, we have a wide selection to suit every taste. Immerse yourself in premium quality materials and superior craftsmanship. Step into confidence and make a stylish statement with our exceptional range of shoes.
      </p>

      <p className="mt-6 lg:max-w-lg info-text">
        Upgrade your shoe game with our irresistible offer. Discover the perfect pair that combines style and comfort effortlessly.
        </p>
       
       <div className="mt-11 flex flex-wrap gap-4">
       <Button label="Shop Now" iconURL={arrowRight} />
       <Button label="Learn More" backgroundColor="#000" borderColor="border-slate-gray" textColor="text-slate-gray"/>
       </div>

     </div>

    </section>
  )
  }
export default SpecialOffer
