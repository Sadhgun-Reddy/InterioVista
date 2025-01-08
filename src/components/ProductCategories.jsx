import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    { name: "Living Room", icon: "https://s3-alpha-sig.figma.com/img/aa1f/8a3d/faaa11bfc3a4ccd718ea84d5cd6901b7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dwYIKiKMz-lqhLGiVoq0A7PeipAVL~rJZTt8H0XvxIbhCKUZSu71NvGMJ3ertSbNcHFbhqGYn7P8SaoqulQ44iYP9HPQgJS8UEtgZwISkIaVi0iXNTymhsAaxSUPSYiKqxJMiHYn~4LQRnCyzmqPxxJSNg8IyU5mP0~i7GEmxzNmf-Rg8fHZdBC6o~nWqvOJ0F2IOcLNLvfpsVvZqF7xevN2oHgHwFaouRB19blKRigaGIv0vnlFoYuaf3hfxbGWwRswmfA7t~sFN80OeT6ssqRd8YVMnY1EJsUowVl6r8D8JdY25opXhEgavYS4OCcUg9I6w0Jxm-Z44Fi-1JZ3mg__" },
    { name: "Dining", icon: "https://s3-alpha-sig.figma.com/img/12d2/86ea/2d12885878ba88297fdcf20289e5a504?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hfnbhyv5joa2oFJldumvp4LzR1NhjTJHu8wYQ2htJ4NoeoJqUHAm0To1QZyENincchq2DCWJNa22w5T-sELBwvYUgyVpaf9HExxWWCWCcoclybKgG1lKefGpZe7t1MVCHB1l6Th5wpS8wjoYHaY~SLyE9-wyIsK6DbapR8DVvVf8IqJTRoTqwk7CK43jI4DDveFNLYKHbegAspKJVB8Dsvw3ybK8WQAk~QMR-NQw2xHy4HujFmYdqWlmO0NQ6o~VKNBQc667al0w~zcGb4vEIl8SDlihEnDbjZ-Nfe9A0Vd8fCLo1Zahg77NrFq0k2GCIR3d980mvexKtMCkDRsUnA__" },
    { name: "Bedroom", icon: "https://s3-alpha-sig.figma.com/img/5c86/592a/4a3c8e77162f27fec0db0c7219076675?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvPyt4h3cr92TIiaKNSQ9VZLEGo31jpuBofyaTNfRfw5nod7M-4jdQnQcCCLxLDSBlmlpbUYeVQ60N4pTp-izXHNFpQXYtqERxD~2r4DMpujSogThiXj0bVUSFaxiPw0cDLRHb9NUTDPkXxXTvczwXy79GLgGz01uegBNEFlbLoHveK~zIEyDpWdUVR9i3Rn31zjHmuXT-Pba7id2IrMgdWF~34nDVpbykEALCLtfMGA4UWj8EHJcfoc-j4ILP8Of2jV1KDa8uRN-aOvzA8t20XGAHpWJNhZU4m09NtkaXq9MlzRj5Lkm~ZJW21OIvp96VxUY76TlD2XRxo930KFwg__" },
    { name: "Office", icon: "https://s3-alpha-sig.figma.com/img/082c/1d34/a43c37ca8ef2f5c5ca7d99d9cdfd3e2b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrfFpnv8eQJb4QIY28NMjtKvznBYkSBWm2vi4KCfzSHA97AKsVidAv7AjiVshmnrDXhxzKeLbrMpxgacAhTcuvTZPXlk8mpgrCacFlcrkva48AZ7X8YBx5sn1HcBili-1czVuM4mBucCTTiJgzrcXCaBwU96tmjANGiFAD1ZVp6Hwv9f9-ZUDiPfb6l7R7eI8DZhMsdb~fy3xaHgF6EX8ZmLId8tD9FSH3GjHHT3cY5dXVXtJb8PxtaM8QWvIk2rK7I4vbXQq7sP7dUNlXCZO4xhhuVla92a5Gw7JsVtb1GngXYDnsfnY8D9mRQbpGGAoesJhN7zW~5uk9TatIHxXA__" },
    { name: "Storage", icon: "https://s3-alpha-sig.figma.com/img/19c4/8116/73b5e7682d48f29e1e0bfa2aba30eb89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKBFSwz~LiSpI~0VBG5D2idn07-TXoSAm5qq0qf861JyS8wucpyqa5zdRChYtgoT~0J98sfU7NAaJUvVT~Ry4-YP7EOJPFLwmgGVI551e~V-nz6amAutpyPDT6iPOSkbnarqNYWRPD-OgaXGQjid-0r~r2DDGuSYzMZBVRvZ1CYXLspr0r7nA-V2oOWkH1c1qK~G~5igCFG4ryEFe8jJWUFRWhEMQv5rJWrFL8IpBl67639tl1kLJaf-lNW~1I5P5HKhOEK2A4UxqPwJF-35y5wUuXevy6TEw~i~Hor9uXR7QK5JRYWm8Q-VesIh0PlojrNm4pZo~VQ42oWxRusBIw__" },
    { name: "Study Room", icon: "https://s3-alpha-sig.figma.com/img/b7cc/c388/d23bb45adf1dee5fa669566bc571b751?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CjDpOKQeLmFbOZEuJ5w~IPdN-1luVE~EMKBSy04qspEKCmYlPbS7uEk0rvZDCDxdOUZEglaoG-RPZgqwnnSNTRFjD-Vl7knQ2msuxRf-eikNAtnJX0vpCp~CrVy13RGWEXn~EwZC4pYrqrV~gwNWGIqc~DCetm83np6oluV35jbLjR6m9DCT0kBk-wsD98kzICP7RhKix4cDN87Zt4JFKcTojQ8ZbG~A-Eg2ebvOmnCDOZ~jx8GtR-Zd~8tHNpUkV0HDE7GVY81Xcxs2Q-g6U2ggXOckRnbOjA-llnSbAhD2VFLqaMGLniWTsPZeakY-XrEksVh7fT1k14y0pmitjw__" }
  ];

  const segments = [
    {
      title: "Residential",
      image: "https://s3-alpha-sig.figma.com/img/9221/7a8d/981b04dc3584d8b880931736d4bad565?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjljXkmEGduHklQJIERZieNp5NbQJy8j4VWvLoiae1l-vQZ-LCpz2QHterxxxPbXOg1JVQancRrW0bidhsd4YVlbF52OQcaWrwgywwc3x0affpaD5G3ZTYkmx4QxnSXyXGMXlaW5-8FGNQRjMWhWtqah3q5Kj5PrBneBITwtTWEnVY9EjwDXY6mjaY1ueDjB9nCxD13hXAS9Rpo2riIb9vm2wvdzVga7h5AhQLLU6o-iKazU3iVGpjZVN6wkQ1ow7DEX4wAilpll0abAcKqX4uy0n0RXzvyvltSSZGB3FCcmbtAp-1UQ9L~si6zDy2XyMPDl0y-5KbLPjDo4cUypew__",
      alt: "Modern residential building"
    },
    {
      title: "Institutional",
      image: "https://s3-alpha-sig.figma.com/img/f911/e2fd/b243fb7b02db89776bdb5e15f0c50687?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LhS-Fd~MEOQlFsqSwB2RFirencRB3UXfbFyvx7ONHPu-shMfc~nMaJYtgZTG7p5bUBiP1-VREV~JqJUdJwZ6b~i5vPoJvRwsHHQ7XReK2-rp5jKFvmjEMambh88IdbLFYhAp2d1m8TaO~xjoNYkna7hW~foXFey5N6UOLoaaWJLazDBy6tU7HDzyxRmyCnswQzQriCxfTkCbFEMrAXqubDj4ZhgAL1t1QdvEx~yNTD-rNwqluwUYSsMyvSdizX8B3g5eW7aV-6ERRgyeX7irX3Qs0~emZG5LJUoPUi-S8h4w-9jOG6ExO2N8nouty5QxlcgLNi1BWxkZ4VZeUeaZtA__",
      alt: "Classic institutional building"
    },
    {
      title: "Commercial",
      image: "https://s3-alpha-sig.figma.com/img/b567/a289/564d0c3dabd217c8fa3313e33cb9e734?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTjxVsb5IZyc8BMnu7dZVvHrzTiOHf1~1COTWT0h0WtdbL3M9mB8tx4jlJMD2gYPuWmrcagUvc9Tt4xtv5H4VyGv~n6uq-8jdVS38AlkzWGymF3NK3jBpgPzLSD8Lw6~T5BKRbXS54fki-amrGWjmrImsgqeSCZWIhP5Ejcqqcrb~SfFyOxXnOF88vZwfrrOi-NwqsTiMb4CTC028VStBN~hYK~4Xo4wuwoy8WRxQx3Wz5PHfiwl98KXG1yqAdGO4R5W1Vi47Ikw88oE31sHHmOS~ESDWevSXs3ry2YfhdaISvM235f-iwxciDosPfsHuC304p4TBBw9cW3f~fJMHQ__",
      alt: "Modern commercial building"
    }
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Luxury Bed Set",
      image: "https://s3-alpha-sig.figma.com/img/c64b/c42c/63341ea16e5872842115871305fb111f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFbYJhh7sGP-BG~6E2R1ZvnvIqRB7IjWwx6xvgk6mllQh9klmfIAUAJZeaQZ~SYwDss9pbrfejgPG1Nrn58KJ05OCGUV3rjSnFFQdiN-dDuC2dGSw3PPVdgm4ghK52N-sjpw250TpRMSWDGm880cw4l-GAwOOSijpwMiesf497lgbYUbmHuzAoHEakl~lZZCoCopnMpJbp667UQ2IgLToMHge1AHtaPhSqCUyGOknVwD1AVn~qx5C8p9NxxmhFiTEgCXwIj9YcbtALuSwWKuVse~Wo0jHWu6mdVeucaSJZO3CHHTvXTaNpvo8zQ1Jlht84NLWqgpAyeGoO7jVFrYRA__",
      category: "luxury"
    },
    {
      id: 2,
      name: "Luxury Sofa Set",
      image: "https://evgorluxury.com/wp-content/uploads/2-196.jpg?v=1681339433",
      category: "luxury"
    },
    {
      id: 3,
      name: "Luxury Dining Table",
      image: "https://s3-alpha-sig.figma.com/img/8d7f/0f21/fc175588cb210a59c9fc97d9ac64e126?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fp5D7OJMv0q~ZFce44tvV-opEh4jszpDBftlv2E6dby2e5htbtd91-K6d3vEcA0zaipzQbnjoX8f~GKzQBOdKZaLXqOIz6YB5d3K8f-xscBc5KT5GjVwA08WyafDWW~6Exheyz0L5j0tqI6zmYRhvcyQZATvl96BNlJNp8tN242nIT5BR53LGDhGplEPXRJTrbI~MquT-8TPpxB~wP6GXm1YPXrpihhhuAhUBgbIdrjAE~txszjhDtX1HQZ4KkqCg9M7L9hiy2fJ0fRQfk7rah8hD1uFrJWsEMqvntspX6CCAW-Sb7V2nCvHGd2Oh14TQ781v4qmPaKbDN6EVqyoNQ__",
      category: "luxury"
    },
    {
      id: 4,
      name: "Luxury Bed Set",
      image: "https://s3-alpha-sig.figma.com/img/c64b/c42c/63341ea16e5872842115871305fb111f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFbYJhh7sGP-BG~6E2R1ZvnvIqRB7IjWwx6xvgk6mllQh9klmfIAUAJZeaQZ~SYwDss9pbrfejgPG1Nrn58KJ05OCGUV3rjSnFFQdiN-dDuC2dGSw3PPVdgm4ghK52N-sjpw250TpRMSWDGm880cw4l-GAwOOSijpwMiesf497lgbYUbmHuzAoHEakl~lZZCoCopnMpJbp667UQ2IgLToMHge1AHtaPhSqCUyGOknVwD1AVn~qx5C8p9NxxmhFiTEgCXwIj9YcbtALuSwWKuVse~Wo0jHWu6mdVeucaSJZO3CHHTvXTaNpvo8zQ1Jlht84NLWqgpAyeGoO7jVFrYRA__",
      category: "luxury"
    },
    {
      id: 5,
      name: "Elegant candle set",
      image: "https://s3-alpha-sig.figma.com/img/8702/2fea/0e38e1e6003a311863320dcfc1f21b51?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oV9WOyCxCJFm5JUKJHH8A-q6OA8KrQaBn6oFr9HbMsB4BsPyjaMgAoVbitUXiioHeXKG-SO2yNbfvOjY0GnEUTSJ2hxAZgBRqJ9HPPvJr2nUhdZ6ZJ1LEtWtSHSFlMenEFbtY486RaIspdfBLVQ4TTh1f15YRwzAUlc4owzPk70K6g~drAiFsKs~IciwFnsqS8gSNkMS3oYtAZLTxoLLhINEiRdLgo~G6irQvAtQKApJuWEg3kJrOiFae5Za1i8vV86yjl42QBiBOa1MiXCGNz-oKpTbkfjzaESaWIi5I3TgOj0QFcuY21ZhhXPX75uEt3gKwYhkNA95aPTFQ7pQiA__",
      category: "elegant"
    },
    {
      id: 6,
      name: "Elegant sofa set",
      image: "https://s3-alpha-sig.figma.com/img/ceb9/5648/6bede647d8108a92d1fca96a97437d4e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R9-qfXop7z4iDMl5AllF5LB0Ozruk8gOGbZy6jCKSm8u55imUmG~or4klup6R9surufhvfVl-unr-FD~qzIn3YW43w0CWek4ja1N3mezREFgRKd3dIMTsxX3AkbHBMMAdP6kgvqkq-KwfqQVdR0YtkJoZ02XI3tlg4mXnjfZxXiHgaRy6HJJoiMdnhvLUxjt9hbsFQxH1pFeKFx4jLbgLxM1pCpJ89y6TIux8c0EsJpNY~r2F1eKqODOONZab2N0SgZXu~dslYAUtEqg1amD-IS3fC-V~owOtCVCBaMocKHMlv5ETj6VrpU~HtsvE2Ci-Lb82TTEOujuYRY5qXjFuA__",
      category: "elegant"
    },
    {
      id: 7,
      name: "Fruit platter",
      image: "https://s3-alpha-sig.figma.com/img/54d8/2b86/59b7e8cf93d6d32688435d4033377dea?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qR8ZFlErIaEgx1Q0WYfusfOT6rv~Iu-J5xKstE2quEUy2L85K97hpKFGcevQc1x9dmsDeqzIkzkK2H93r0MZXzEG8VRG-zlgiFGbLgaT1P0B2o7X0X4TF1PeRsHzCUncmr~wNubXe0LXiQFmFXbRRbGxlc1YB0MTQnENex9eb3KOEpsinyNsWwjJ~ZcPwn1tF~3-mwV-9ASsKn7xdGlt~2x9i8y2F64iHCZWs51HCV-BAV0iT5clZ4HxmtnwoVDsUgUgdx6fTVXo5yPrRF~EkYSVw5pldG7DGiZql5J~-gu9w57yJqTzHjJQi-SDabSnuL8bzJefMAEnGiYQHN~Qyg__",
      category: "elegant"
    },
    {
      id: 8,
      name: "Elegant candle set",
      image: "https://s3-alpha-sig.figma.com/img/8702/2fea/0e38e1e6003a311863320dcfc1f21b51?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oV9WOyCxCJFm5JUKJHH8A-q6OA8KrQaBn6oFr9HbMsB4BsPyjaMgAoVbitUXiioHeXKG-SO2yNbfvOjY0GnEUTSJ2hxAZgBRqJ9HPPvJr2nUhdZ6ZJ1LEtWtSHSFlMenEFbtY486RaIspdfBLVQ4TTh1f15YRwzAUlc4owzPk70K6g~drAiFsKs~IciwFnsqS8gSNkMS3oYtAZLTxoLLhINEiRdLgo~G6irQvAtQKApJuWEg3kJrOiFae5Za1i8vV86yjl42QBiBOa1MiXCGNz-oKpTbkfjzaESaWIi5I3TgOj0QFcuY21ZhhXPX75uEt3gKwYhkNA95aPTFQ7pQiA__",
      category: "elegant"
    }
  ];

  return (
    <section className="max-w-[1920px] mx-auto px-6 pb-16 space-y-12">
      {/* Product Categories */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Product Categories</h2>
        
        <div className="relative">
          {/* Carousel Navigation Buttons */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 z-10">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center aspect-square cursor-pointer hover:bg-gray-300 transition-colors"
              >
                <p className="font-medium text-center">{category.name}</p>
                <img 
                  alt={category.name}
                  src={category.icon}
                  className="w-16 h-16 mt-8"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segments Section */}
      <div>
        <div className="bg-gray-200 rounded-lg p-4 mb-8">
          <h3 className="text-xl font-medium flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Segments
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={segment.image}
                alt={segment.alt}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-bold mb-4">{segment.title}</h4>
                <button className="bg-black text-white px-6 py-2 rounded-full w-fit">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 rounded-lg p-4 mb-8 mt-10">
            <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Trending products
            </h3>
            <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-300 rounded-full">
                <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-300 rounded-full">
                <ChevronRight className="w-5 h-5" />
                </button>
            </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-gray-300 rounded-lg overflow-hidden group relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay with Button */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-black text-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-medium">{product.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;