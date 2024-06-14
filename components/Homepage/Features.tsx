import React from 'react'
import { Container } from '../UI/Container'
import TitleUniversal from '../Global/TitleUniversal'
import { RiComputerLine } from 'react-icons/ri'

const features = [
    {
        title: "Creative minds",
        description: "The simplest way to keep your portfolio always up-to-date.",
        icon: RiComputerLine,
    },
    {
        title: "Innovative Solutions",
        description: "Offering modern solutions for your business needs.",
        icon: RiComputerLine,
    },
    {
        title: "Efficient Workflow",
        description: "Streamline your workflow and increase productivity.",
        icon: RiComputerLine,
    },
    {
        title: "Customer Focused",
        description: "We prioritize our customers and their experience.",
        icon: RiComputerLine,
    },
    {
        title: "Advanced Analytics",
        description: "Get insights into your business with our advanced analytics.",
        icon: RiComputerLine,
    },
    {
        title: "Secure and Reliable",
        description: "Ensuring your business data is secure and reliable.",
        icon: RiComputerLine,
    }
]

const Features = () => {
    return (
        <section>
            <Container>

                <TitleUniversal subTitle={`Grow your business faster, smarter, and cost-effectively with innovative and modern web development techniques`}
                    className="max-w-3xl mx-auto text-center">
                    Powerful Features To Scale Your Business
                </TitleUniversal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {features.map((feature, index) => (
                        <div key={index} className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-3xl text-center p-4 md:p-5">
                            <div className="flex justify-center items-center size-14 border border-primary rounded-full mx-auto">
                            <feature.icon className="flex-shrink-0 size-7 text-primary" />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Features
