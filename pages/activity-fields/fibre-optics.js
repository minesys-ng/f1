import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"
function FibreOptics() {
    return (
        <>
            <Head>
                <title>FIBRE OPTICS - Faith Link Systems Limited</title>
                <meta name="description" content="FIBRE OPTICS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageSubheader imgUrl="/pages/fibre-optics-main.jpg" alt="Fibre Optics Image" pageName="fibre optics" leadingRoutes={["homepage", "activity fields"]} />

            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <article className="flex gap-x-16 max-md:gap-x-0 max-slg:flex-col">
                            <aside className="basis-1/2 text-justify" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
                                <h1 className="aos-init aos-animate text-[20px] text-textGray">
                                    FAITHLINK offers Installation and maintenance services for Fiber Optic network nationwide.
                                    <br />
                                </h1>
                                <p>Our services include the following;</p>
                                
                                <ul className="ml-3 mb-3 list-disc text-[14px]">
                                    <li>OSP ( Survey, Planning, Design)</li>
                                    <li>OSP Implementation (Last mile/Metro/Backbone)</li>
                                    <li>FTTH/FTTx</li>
                                    <li>GPON</li>
                                    <li>Operations and Maintenance service for OSP/FTTH/FTTX/GPON</li>
                                    <li>Supply of optical fiber cables, HDPE pipes, patch panels and cords</li>
                                </ul>
                                <p className="mt-6 text-[13px]">
                                    FAITHLINK execute RF installations of fiber transmission or feeder cable from RRU to
                                    nodal equipment on 2G, 3G, 4G & 5G platform networks as well as installation and
                                    commissioning of antenna (such as Katherin, CommScope, Prose, Huawei) and microwave links. We equally execute RF drive tests on networks and also pre and post-optimization analysis of drive test results.

                                </p>
                            </aside>
                            <aside>
                                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
                                    <img className="lg:w-[500px] w-full h-[385px]" src="/pages/fibre-optics.jpg" alt="FIBRE OPTICS' IMAGE" />
                                </div>
                            </aside>
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="renewable energy" rightLink="fibre optics" />
        </>

    )
}

export default FibreOptics