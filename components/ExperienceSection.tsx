import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
    return (
        <div className="mt-6 space-y-6">
            <h2 className="text-2xl font-semibold">Experience</h2>

            {/* Development Technical Lead - Current Job */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Development Technical Lead</h3>
                    <p className="text-gray-500">Telesure Investment Holdings, Dainfern (Jun 2023 - Present)</p>
                    <p className="mt-2">
                        Lead two development teams to deliver scalable solutions,
                        architect and oversee Azure Cloud infrastructure,
                        and establish development standards to enhance efficiency and code quality.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Guide developers on best practices and resolve technical issues across projects.</li>
                        <li>Architect and implement Azure Cloud solutions, including CI/CD pipelines.</li>
                        <li>Establish and govern development standards, including code reviews and documentation.</li>
                        <li>Manage Azure Cloud estate, optimizing pricing and architecture for performance.</li>
                        <li>Assess candidates&apos; technical and logical skills during the hiring process.</li>
                        <li>Vet business requirements, perform technical impact assessments, and estimate timelines using PERT.</li>
                    </ul>
                    <p className="mt-2 font-semibold">Key Achievements / Projects:</p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Optimized Azure infrastructure by scaling apps and reserving resources, saving $~3700 (~R70 000 ZAR) monthly.</li>
                        <li>Developed a logical app to monitor and manage Azure app creation across the estate.</li>
                        <li>Implemented a JSON-based Business Rules Engine, enabling scalable rule management.</li>
                        <li>Introduced Strapi CMS, a free, scalable, and user-friendly content management solution.</li>
                        <li>Integrated SonarQube into CI/CD pipelines with documentation, enhancing code quality.</li>
                        <li>Implemented automated system health checks to proactively resolve issues before stakeholder impact.</li>
                        <li>Automated release note generation via Azure Pipelines, streamlining documentation.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Senior Developer */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Senior Developer</h3>
                    <p className="text-gray-500">Telesure Investment Holdings, Dainfern (Oct 2019 - May 2023)</p>
                    <p className="mt-2">
                        Joined the 1Life Insurance division to expand into full-stack development,
                        while continuing to lead RPGLE back-end initiatives.
                        Worked across key product lines,
                        providing technical leadership and delivery for business-critical enhancements.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Provided back-end support for all products within the 1Life Insurance pillar.</li>
                        <li>Delivered business-as-usual and enhancement projects on the long-term insurance system.</li>
                        <li>Resolved production incidents and optimized system reliability.</li>
                        <li>Led system improvements, deployments, and release coordination.</li>
                        <li>Mentored developers and conducted technical reviews.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Application Developer */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Application Developer</h3>
                    <p className="text-gray-500">FNB Life, Johannesburg (Aug 2018 - Oct 2019)</p>
                    <p className="mt-2">
                        Served as the primary RPG developer for the short-term insurance team,
                        contributing to development and support across the full insurance product suite.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Delivered enhancements and support for short-term insurance systems.</li>
                        <li>Collaborated on projects under the broader FNB Insurance Pillar.</li>
                        <li>Deployed and managed code changes in production environments.</li>
                        <li>Reviewed code and mentored junior developers.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Systems Manager */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Systems Manager</h3>
                    <p className="text-gray-500">Telesure Group Services, Dainfern (Mar 2018 - Jul 2018)</p>
                    <p className="mt-2">
                        Promoted to Systems Manager for the Pricing deployment department,
                        leading a team while remaining technically involved in the development of pricing modules.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Managed delivery of all pricing-related projects and tasks.</li>
                        <li>Oversaw performance reviews, hiring, and salary negotiations.</li>
                        <li>Prioritized and tracked project pipelines and resource allocation.</li>
                        <li>Continued development of RPGLE modules for pricing and monthly renewals.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Senior Developer */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Senior Developer</h3>
                    <p className="text-gray-500">Telesure Group Services, Dainfern (Jan 2017 - Mar 2018)</p>
                    <p className="mt-2">
                        Took full ownership of business and value-added product pricing systems,
                        leading technical efforts for critical insurance modules.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Maintained pricing and renewal systems for short-term, business, and VAPS insurance lines.</li>
                        <li>Developed RPGLE modules to calculate premiums and execute monthly renewal runs.</li>
                        <li>Analyzed renewal performance and managed DB2 pricing table changes.</li>
                        <li>Deployed all team code to production environments.</li>
                        <li>Reviewed code and mentored junior developers.</li>
                    </ul>
                    <p className="mt-2 font-semibold">Key Achievements / Projects:</p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Developed a new pricing module for the business insurance system, designed for higher accuracy and more detailed rating</li>
                        <li>Optimized RPGLE pricing modules by replacing SQL formula calculations with C++ functions, improving processing times by up to 30%</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Programmer */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Programmer</h3>
                    <p className="text-gray-500">Telesure Group Services, Dainfern (Aug 2014 - Jan 2017)</p>
                    <p className="mt-2">
                        Responsible for development and support of the value-added products channel,
                        including premium calculations and policy renewal cycles.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Maintained RPGLE pricing modules and monthly policy renewal logic.</li>
                        <li>Supported short-term, business, and value-added insurance systems.</li>
                        <li>Produced reports analyzing renewal trends and pricing outcomes.</li>
                        <li>Managed DB2 pricing tables and business rule configurations.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Programmer - AEC Electronics */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Programmer</h3>
                    <p className="text-gray-500">AEC Electronics, Kempton Park (Jun 2014 - Aug 2014)</p>
                    <p className="mt-2">
                        Contracted to develop a real-time web interface for the Intelligent Blasting System used in the mining sector.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Designed and delivered a custom front-end application to communicate with embedded blasting systems.</li>
                        <li>Provided real-time visual feedback for pre-blast diagnostics and post-blast analysis.</li>
                        <li>Successfully delivered the solution within project timelines.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}
