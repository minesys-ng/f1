import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"


function IntegratedManagementSystem() {
    return (
        <>
            <section className="">

                <Head>
                    <title>INTEGRATED MANAGEMENT SYSTEM - Faith Link Systems Limited</title>
                    <meta name="description" content="INTEGRATED MANAGEMENT SYSTEM- Faithlink Systems" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div>
                    <PageSubheader imgUrl="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Integrated Management  System Image" pageName="Integrated MANAGEMENT SYSTEM" leadingRoutes={["homepage", "sustainability"]} greenOverlay={false} />
                    {/* <PageSubheader imgUrl="https://media.istockphoto.com/id/521261573/photo/workplace-safety-handbook-manual-and-occupational-equipment-for-work-training.jpg?s=612x612&w=0&k=20&c=KG_D5v8xIfnR0jje69nQqFQYmerYBiquQrXqFLkjPHA=" alt="Integrated Management  System Image" pageName="Integrated MANAGEMENT SYSTEM" leadingRoutes={["homepage", "sustainability"]} /> */}
                    <section className="pt-24 pb-0">
                        <div className="container container-lg">
                            <div className="grid lg:grid-cols-3 grid-cols-1 h-[500px]">
                                <img src="data:image/png;base64,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" alt="ISO Logo for EMS" className="h-[300px]" />
                                <img src="https://e7.pngegg.com/pngimages/720/580/png-clipart-iso-9000-iso-9001-2015-international-organization-for-standardization-quality-management-system-business-blue-text.png" alt="ISO Logo for QMS" className="h-[300px]" />
                                <img src="https://sms-indonesia.com/wp-content/uploads/2024/02/iso-45001-2018-occupational-health-andsafety-ohs-300x300-1.jpg" alt="ISO Logo for SMS" className="h-[300px]" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <SubPageNavigator leftLink="safe workplace" rightLink="integrated management system" />

        </>
    )
}

export default IntegratedManagementSystem