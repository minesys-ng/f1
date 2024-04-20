import Breadcrumb from "./Breadcrumb"

function PageSubheader({ imgUrl, alt, pageName, leadingRoutes }) {
  return (
    <section className='relative lg:h-[400px] xs:h-[200px] md:h-[300px]'>
    <div className="container h-full xs:max-md:p-0">
      <picture className="flex h-full">
        <img src={imgUrl} alt={alt} />
      </picture>
      <div className="absolute h-full top-0 left-0 w-full">
        <div className="container container-lg relative h-full">
          <div className="absolute top-1/2 text-white max-w-[65%] -translate-y-1/2 px-5 lg:px-0">
            <h1 className='lg:text-[50px]'>
              {pageName.toUpperCase()}
            </h1>
          </div>
          <Breadcrumb leadingRoutes={leadingRoutes} />
        </div>
      </div>
    </div>
  </section>
  )
}

export default PageSubheader