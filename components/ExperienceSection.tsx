import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
    return (
        <div className="mt-6 space-y-6">
            <h2 className="text-2xl font-semibold">Experience</h2>

            {/* Senior Developer - Current Job */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Senior Developer</h3>
                    <p className="text-gray-500">Telesure Investment Holdings, Dainfern (Oct 2019 - Present)</p>
                    <p className="mt-2">
                        With the goal of expanding my skills through the exploration of new technologies and languages,
                        I joined the 1Life project’s team. Though the main focus is still on back-end RPG development,
                        the objective is to shift to a balanced role as a full stack developer.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Support across all products and back-end areas under the 1Life Insurance Pillar</li>
                        <li>Enhancement and Business as usual projects for the long-term insurance system</li>
                        <li>Resolution of any Business impacting incidents</li>
                        <li>General system improvements and enhancements</li>
                        <li>Deployment of code changes to production systems</li>
                        <li>Provide guidance to junior developers</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Application Developer */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Application Developer</h3>
                    <p className="text-gray-500">FNB Life, Johannesburg (Aug 2018 - Oct 2019)</p>
                    <p className="mt-2">
                        I moved to FNB Life as an Application Developer for the opportunity to hone my development skills and to learn the processes of the Bank.
                        I was the main RPG developer for the short-term team and assisted across all other products under the Insurance Pillar.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Support across all products under the FNB Life Insurance Pillar</li>
                        <li>Enhancement projects for the short-term insurance system</li>
                        <li>Deployment of code changes to production systems</li>
                        <li>Provide guidance to junior developers</li>
                        <li>Code review</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Systems Manager */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Systems Manager</h3>
                    <p className="text-gray-500">Telesure Group Services, Dainfern (Mar 2018 - Jul 2018)</p>
                    <p className="mt-2">
                        I was promoted from a Senior Developer to Systems Manager of the Pricing Deployment department where my focus shifted to people and project management,
                        while being able to stay on top of developments in RPGLE. I was still required to do development for the short-term insurance pricing system,
                        which kept me close to the technical side of the business.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Ensuring all projects and duties of my team are completed accurately and on time</li>
                        <li>Prioritization of projects as well as business-as-usual tasks</li>
                        <li>Conduct performance reviews</li>
                        <li>Recruitment of new staff and conducting interviews</li>
                        <li>Engage in salary negotiations</li>
                        <li>Authorize my team&apos;s leave and other HR system claims</li>
                        <li>Develop and maintain the RPGLE pricing and monthly renewal modules for the short-term insurance system</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Senior Developer */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Senior Developer</h3>
                    <p className="text-gray-500">Telesure Group Services, Dainfern (Jan 2017 - Mar 2018)</p>
                    <p className="mt-2">
                        During my time at Telesure, I successfully took on several new responsibilities and was promoted to Senior Developer.
                        The main responsibility was to take sole ownership for the business and value-added products insurance pricing systems
                        and to ensure that all the team&apos;s code changes were deployed correctly to the production environments.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Support for the short-term, business, and value-added products insurance systems</li>
                        <li>Developed and maintained the RPGLE pricing modules that determine the premiums for the value-added products and business insurance systems, as well as the monthly policy renewal runs</li>
                        <li>Enhancement projects for the short-term insurance pricing system</li>
                        <li>Running monthly policy renewals for value-added products and business insurance systems</li>
                        <li>Compiling reports and running analysis on the effect of the monthly policy renewal runs</li>
                        <li>Maintaining DB2 pricing tables for all systems</li>
                        <li>Deployment of the team&apos;s code changes to production environments</li>
                        <li>Provide guidance and sign-off on junior developers&apos; work</li>
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
                        As I started my full-time career in programming at Telesure, I was given responsibility for all the processes of the value-added products channel of the business,
                        as well as general pricing systems support.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-sm">
                        <li>Support for the short-term, business, and value-added products insurance systems</li>
                        <li>Developed and maintained the RPGLE pricing modules for the value-added products system and the monthly policy renewal runs</li>
                        <li>Compiling reports and running analysis on the effect of the monthly policy renewal runs</li>
                        <li>Maintaining DB2 pricing tables for the value-added products system</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Programmer - AEC Electronics */}
            <Card className="card-glass">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Programmer</h3>
                    <p className="text-gray-500">AEC Electronics, Kempton Park (Jun 2014 - Aug 2014)</p>
                    <p className="mt-2">
                        I was employed at AEC Electronics on a contract basis to design and develop a web interface for their Intelligent Blasting System used in the mining industry.
                        The goal was to enable communication between the electronic blasting units and a web interface to visually present the system&apos;s status before, during, and after a blast cycle.
                        The project was successful and delivered on time.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
