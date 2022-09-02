import React, { useState, useEffect } from 'react'
import slef from '../../../asset/images/hardeepsinh-sodha.jpg'
import { Tabs, Collapse, Tooltip } from 'react-daisyui'
import { workHistoryData } from '../../../data/workhistory'
import { otherProject } from '../../../data/otherProjects'
import { GitHub, ExternalLink } from 'react-feather'

export default function Home() {
    return (
        <>
            <section className='prose md:prose-lg lg:prose-xl max-w-full flex flex-col justify-center min-h-screen py-4'>
                <p className='text-primary'>Hi, my name is</p>
                <h1 className='font-bold my-1 md:my-1 lg:my-2 text-white'>Hardeepsinh Sodha.</h1>
                <h1 className='font-semibold my-1 md:my-1 lg:my-2 text-gray-400'>I build things for the web.</h1>
                <p className='md:w-1/2'>
                    I'm a software engineer specializing in builing and designing
                    web app using Reactjs and Django. Currently, I'm focused on
                    building scalable, customize, resnosive web app at
                    <a href='https://www.linkedin.com/company/indus-net-technologies/' className='text-primary'> INT.</a>
                </p>
            </section>
            <section id='about' className='prose md:prose-lg lg:prose-xl max-w-full min-h-screen flex flex-col justify-center py-4'>
                <CustomeHeading number='01.' heading='About Me' />
                <div className='md:flex md:flex-row'>
                    <div className='prose max-w-full pr-0 md:pr-1 md:max-w-[66%]'>
                        <p>
                            Hi, I am Hardeepsinh Sodha, full Stack developer,from India.
                            I have done B.Tech from <a href='https://www.pdpu.ac.in/'>Pandit Deendayal Petroleum University</a>  with a degree in Mechanical Engineering in 2018.
                            My interest in web development started back in 2016 when I had worked with my classmate and created a website for our college festivals using WordPress.
                        </p>
                        <p>
                            Fast-forward to today, I have all over 4 years of professional experience.
                            As a developer I have solid experience with<span className='text-primary font-medium'> ReactJs, Django and Databse design. </span>
                            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                            My main focus these days is building scalable, customize, resnosive web app at
                            <a href='https://www.linkedin.com/company/indus-net-technologies/' className='text-primary'> INT </a>
                            and learning new things like Fluter and Cloud services.
                        </p>
                        <p className='block my-0 md:my-0 lg:my-0'>
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <div className='flex gap-10 prose-li:my-0 md:prose-li:my-0 lg:prose-li:my-0'>
                            <ol className='list-[gujarati] my-1'>
                                <li>Reactjs</li>
                                <li>Redux</li>
                                <li>Django</li>
                                <li>Figma</li>
                            </ol>
                            <ol className='list-[gujarati] my-1' start='5'>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Material UI</li>
                                <li>TailwindCSS</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src={slef} alt="Hardeepsinh Sodha" width='240px' height='240px' className='bg-cover mx-auto rounded-sm shadow-sm shadow-white' />
                    </div>
                </div>
            </section>
            <section id='experience' className='prose md:prose-lg lg:prose-xl max-w-full min-h-screen flex flex-col justify-center py-4'>
                <CustomeHeading number='02.' heading="Where I've Worked" />
                <MyTab />
            </section>
            <section id='work' className='prose md:prose-lg lg:prose-xl max-w-full min-h-screen flex flex-col justify-center py-4'>
                <CustomeHeading number='03.' heading="Some Things I've Built" />
                {otherProject.map(data => <ProjectSection key={data.id} data={data} />)}
            </section>
            <section id='contact' className='mx-auto prose flex flex-col justify-center min-h-screen text-center py-4'>
                <p className='text-primary'>04. What's Next?</p>
                <h1>Get In Touch</h1>
                <p>
                    Although I’m not currently looking for any new opportunities, my inbox is always open.
                    Got a question or proposal, or just want to say hello? Go ahead.
                    I’ll try my best to get back to you!
                </p>
                <Tooltip message="letsworkhrs@gmail.com" className='my-4'>
                    <a href="mailto: letsworkhrs@gmail.com" className='btn btn-outline btn-primary rounded-none'>Say Hello</a>
                </Tooltip>
            </section>
        </>
    )
}
const CustomeHeading = ({ number, heading }) => {
    return (
        <h2 className='font-bold'><span className='text-primary'>{number}</span>{heading}<span className='inline-block relative -top-[7.5px] ml-4 sm:w-28 md:w-48 h-[1px] bg-primary opacity-30' /></h2>
    )
}

const MyTab = (props) => {
    const [selectedTab, setSelectedTab] = useState(1)

    return (
        <div className='flex flex-col md:flex-row gap-4 relative'>
            <Tabs value={selectedTab} name='tabs' className='not-prose flex-nowrap md:flex-col md:items-start' size='md' onChange={(value) => setSelectedTab(value)} variant='bordered' >
                {
                    workHistoryData.map((data) => (
                        <Tabs.Tab key={data.id} value={data.id} className='border-b border-l-0 md:border-b-0 md:border-l-2 w-full h-auto'>{data.company_name}</Tabs.Tab>
                    ))
                }
            </Tabs>
            {workHistoryData.map((data) => <MyTabDetails key={data.id} data={data} selectedTab={selectedTab} />)}
        </div>
    )
}
const MyTabDetails = ({ data, selectedTab }) => {
    const [openCollapse, setOpenCollapse] = useState(1)
    useEffect(() => {
        if (selectedTab === data.id) {
            setOpenCollapse(1)
        }
    }, [selectedTab, data.id])

    if (selectedTab !== data.id) return null
    return (
        <div className='prose max-w-full md:max-w-[70%] prose-li:my-0'>
            <h3>{data.designation}<span>@ {data.company_name}</span></h3>
            <p>{data.duration}</p>
            {data.projects.map((project) => (
                <Collapse
                    open={openCollapse === project.id}
                    onOpen={() => setOpenCollapse(project.id)}
                    onClose={() => setOpenCollapse(null)} key={project.id}
                    icon='arrow'
                    className='inline-grid w-full'
                >
                    <Collapse.Title className="text-xl font-medium">
                        {project.title}
                    </Collapse.Title>
                    <Collapse.Content>
                        <ol>
                            {
                                project.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))
                            }
                        </ol>
                    </Collapse.Content>
                </Collapse>
            ))}
        </div>
    )
}
const ProjectSection = ({ data }) => {
    const left = data.id%2 === 0 
    const imgPosition = left ? 'lg:col-start-5 lg:col-end-12' :'lg:col-start-1 lg:col-end-8'
    const textPosition = left ?  'lg:col-start-1 lg:col-end-8': 'lg:col-start-5 lg:col-end-12'
    return (
        <div className='prose max-w-full grid grid-cols-12 gap-4 my-10'>
            <div className={`not-prose flex col-span-full opacity-20 lg:opacity-100 ${imgPosition} row-span-full z-10 relative`}>
                <a target='_blank' href={data.link} rel="noreferrer" className='block self-stretch'>
                    <img className='z-10 rounded-md bg-cover object-cover h-full' src={data.img} alt={data.title} />
                </a>
            </div>
            <div className={`z-20 col-span-full p-3 lg:p-0 self-center ${textPosition} row-span-full ${left?'text-start':'text-end'}`}>
                <p className='text-primary my-1 md:my-1 lg:my-1'>{data.subtitle}</p>
                <h3 className='my-2 md:my-2 lg:my-2'>{data.title}</h3>
                <div className={`relative rounded-md ${left?'text-left':'text-right'} p-4 lg:bg-slate-800`}>
                    <p>{data.description}</p>
                </div>
                <ul className={`flex flex-wrap ${left?'justify-start':'justify-end'} list-none pl-0 md:pl-0 lg:pl-0 my-1 md:my-1 lg:my-1`}>
                    {data.techList.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
                <div className={`flex flex-wrap ${left?'justify-start':'justify-end'} gap-4`}>
                    <a href={data?.gitHubLink}>
                        <GitHub className='link hover:text-primary' />
                    </a>
                    <a href={data.link}>
                        <ExternalLink className='link hover:text-primary' />
                    </a>
                </div>
            </div>
        </div>
    )
}