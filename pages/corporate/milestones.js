import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function Milestones() {
    return (
        <>
            <Head>
                <title>MILESTONES - Faith Link Systems Limited</title>
                <meta name="description" content="Milestones" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="Milestones Image" pageName="MILESTONES" leadingRoutes={["homepage", "activity fields"]} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <h1>MILESTONES</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Milestones